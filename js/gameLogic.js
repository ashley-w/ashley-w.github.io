// Add these methods to your existing TropeOutGame class in gameLogic.js

// Replace the existing saveGameData() method with this:
saveGameData() {
  const gameData = {
    tropeId: this.currentTrope.id,
    tropeName: this.currentTrope.name,
    submissions: this.submissions,
    correctAnswers: this.correctAnswers,
    score: this.correctAnswers.length,
    hintsUsed: this.hintsUsed,
    completed: this.gameComplete,
    timeSpent: this.getTimeSpent()
  };
  
  gameStorage.saveTodaysGame(gameData);
}

// Add this method to track time spent
getTimeSpent() {
  if (!this.startTime) return 0;
  return Math.floor((Date.now() - this.startTime) / 1000);
}

// Update the init() method to include:
init() {
  this.startTime = Date.now(); // Track start time
  
  // Check if already played today
  if (gameStorage.hasPlayedToday()) {
    this.loadTodaysProgress();
    return;
  }
  
  // Load today's trope
  this.loadTodaysTrope();
  
  // Set up event listeners
  this.setupEventListeners();
  
  // Initialize UI
  this.updateUI();
}

// Add method to load existing progress
loadTodaysProgress() {
  const savedGame = gameStorage.getTodaysGame();
  if (savedGame && savedGame.completed) {
    // Show completed game state
    this.currentTrope = { id: savedGame.tropeId, name: savedGame.tropeName };
    this.submissions = savedGame.submissions;
    this.correctAnswers = savedGame.correctAnswers;
    this.hintsUsed = savedGame.hintsUsed;
    this.gameComplete = true;
    
    this.displayTrope();
    this.updateSubmissionsDisplay();
    this.updateProgress();
    this.completeGame();
    
    this.showMessage('You already completed today\'s puzzle!', 'info');
  } else {
    // Continue where left off (if partially completed)
    this.loadTodaysTrope();
    this.setupEventListeners();
    this.updateUI();
  }
}

// Update the showStats() method to use real data:
showStats() {
  const stats = gameStorage.getFormattedStats();
  
  document.getElementById('gamesPlayed').textContent = stats.gamesPlayed;
  document.getElementById('winRate').textContent = stats.winRate + '%';
  document.getElementById('currentStreak').textContent = stats.currentStreak;
  document.getElementById('bestStreak').textContent = stats.bestStreak;
  
  document.getElementById('statsModal').style.display = 'flex';
}