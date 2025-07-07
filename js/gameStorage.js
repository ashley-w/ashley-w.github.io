// TropeOut - Enhanced Game Storage (Phase 1)
// Integrates with existing gameLogic.js

class GameStorage {
  constructor() {
    this.storageKey = 'tropeout_data';
    this.statsKey = 'tropeout_stats';
    this.settingsKey = 'tropeout_settings';
  }

  /**
   * Save today's game data
   * @param {Object} gameData - Current game state
   */
  saveTodaysGame(gameData) {
    const today = new Date().toDateString();
    const savedGames = this.getData(this.storageKey) || {};
    
    savedGames[today] = {
      date: today,
      tropeId: gameData.tropeId,
      tropeName: gameData.tropeName,
      submissions: gameData.submissions || [],
      correctAnswers: gameData.correctAnswers || [],
      score: gameData.correctAnswers?.length || 0,
      hintsUsed: gameData.hintsUsed || 0,
      completed: gameData.completed || false,
      timeSpent: gameData.timeSpent || 0,
      timestamp: new Date().toISOString()
    };
    
    this.saveData(this.storageKey, savedGames);
    this.updateStats(savedGames[today]);
  }

  /**
   * Get today's game data if it exists
   * @returns {Object|null} Today's game data or null
   */
  getTodaysGame() {
    const today = new Date().toDateString();
    const savedGames = this.getData(this.storageKey) || {};
    return savedGames[today] || null;
  }

  /**
   * Check if user has played today
   * @returns {boolean} True if played today
   */
  hasPlayedToday() {
    const todaysGame = this.getTodaysGame();
    return todaysGame && todaysGame.completed;
  }

  /**
   * Update user statistics
   * @param {Object} gameData - Game result data
   */
  updateStats(gameData) {
    const stats = this.getStats();
    
    // Update basic stats
    stats.gamesPlayed++;
    stats.totalScore += gameData.score;
    stats.totalHintsUsed += gameData.hintsUsed;
    
    // Check if this is a "win" (3+ correct answers)
    const isWin = gameData.score >= 3;
    if (isWin) {
      stats.gamesWon++;
      stats.currentStreak++;
      stats.bestStreak = Math.max(stats.bestStreak, stats.currentStreak);
    } else {
      stats.currentStreak = 0;
    }
    
    // Perfect games (5/5)
    if (gameData.score === 5) {
      stats.perfectGames++;
    }
    
    // Track score distribution
    if (!stats.scoreDistribution[gameData.score]) {
      stats.scoreDistribution[gameData.score] = 0;
    }
    stats.scoreDistribution[gameData.score]++;
    
    // Update last played
    stats.lastPlayed = new Date().toISOString();
    
    this.saveData(this.statsKey, stats);
  }

  /**
   * Get user statistics
   * @returns {Object} User stats object
   */
  getStats() {
    const defaultStats = {
      gamesPlayed: 0,
      gamesWon: 0,
      totalScore: 0,
      totalHintsUsed: 0,
      currentStreak: 0,
      bestStreak: 0,
      perfectGames: 0,
      scoreDistribution: {}, // {0: 2, 1: 1, 2: 3, 3: 5, 4: 4, 5: 8}
      firstPlayed: new Date().toISOString(),
      lastPlayed: null
    };
    
    return { ...defaultStats, ...this.getData(this.statsKey) };
  }

  /**
   * Get formatted stats for display
   * @returns {Object} Formatted stats
   */
  getFormattedStats() {
    const stats = this.getStats();
    
    return {
      gamesPlayed: stats.gamesPlayed,
      winRate: stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0,
      averageScore: stats.gamesPlayed > 0 ? (stats.totalScore / stats.gamesPlayed).toFixed(1) : '0.0',
      currentStreak: stats.currentStreak,
      bestStreak: stats.bestStreak,
      perfectGames: stats.perfectGames,
      averageHints: stats.gamesPlayed > 0 ? (stats.totalHintsUsed / stats.gamesPlayed).toFixed(1) : '0.0'
    };
  }

  /**
   * Get game history
   * @param {number} limit - Number of recent games to return
   * @returns {Array} Array of game data
   */
  getGameHistory(limit = 30) {
    const savedGames = this.getData(this.storageKey) || {};
    return Object.values(savedGames)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, limit);
  }

  /**
   * Export all user data
   * @returns {Object} Complete user data
   */
  exportData() {
    return {
      games: this.getData(this.storageKey) || {},
      stats: this.getData(this.statsKey) || {},
      settings: this.getData(this.settingsKey) || {},
      exportDate: new Date().toISOString(),
      version: '1.0'
    };
  }

  /**
   * Import user data
   * @param {Object} data - Data to import
   * @returns {boolean} Success status
   */
  importData(data) {
    try {
      if (data.games) this.saveData(this.storageKey, data.games);
      if (data.stats) this.saveData(this.statsKey, data.stats);
      if (data.settings) this.saveData(this.settingsKey, data.settings);
      return true;
    } catch (error) {
      console.error('Import failed:', error);
      return false;
    }
  }

  /**
   * Reset all data (with confirmation)
   * @returns {boolean} Success status
   */
  resetAllData() {
    try {
      this.removeData(this.storageKey);
      this.removeData(this.statsKey);
      this.removeData(this.settingsKey);
      return true;
    } catch (error) {
      console.error('Reset failed:', error);
      return false;
    }
  }

  // Core storage methods
  saveData(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Save failed:', error);
      return false;
    }
  }

  getData(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Get failed:', error);
      return null;
    }
  }

  removeData(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Remove failed:', error);
      return false;
    }
  }
}

// Global instance
const gameStorage = new GameStorage();

// Export for use in other files
window.gameStorage = gameStorage;

// Legacy compatibility
window.saveGameData = (data) => gameStorage.saveTodaysGame(data);
window.getGameStats = () => gameStorage.getFormattedStats();