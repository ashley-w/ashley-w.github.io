// TropeOut - Daily Trope Scheduler (Phase 1)

class TropeScheduler {
  constructor() {
    this.epochDate = new Date('2025-01-01'); // Game launch date
    this.tropeIds = Object.keys(TROPES_DATABASE);
  }

  /**
   * Get the current day number since game launch
   * @returns {number} Days since epoch
   */
  getCurrentDay() {
    const today = new Date();
    const timeDiff = today.getTime() - this.epochDate.getTime();
    return Math.floor(timeDiff / (1000 * 3600 * 24));
  }

  /**
   * Get today's trope ID based on deterministic rotation
   /** @returns {string} Trope ID for today
   
  getTodaysTropeId() {
    const dayNumber = this.getCurrentDay();
    const tropeIndex = dayNumber % this.tropeIds.length;
    return this.tropeIds[tropeIndex];
  }

  /**
   * Get today's complete trope object
   /** @returns {Object} Today's trope data
  
  getTodaysTrope() {
    const tropeId = this.getTodaysTropeId();
    return TROPES_DATABASE[tropeId];
  }
*/

/**
   * Get today's trope ID based on deterministic rotation
   * @returns {string} Trope ID for today
   */
  getTodaysTropeId() {
    const dayNumber = this.getCurrentDay();
    const tropeIndex = dayNumber % this.tropeIds.length;
    return this.tropeIds[tropeIndex];
  }

  /**
   * Get today's complete trope object (with alpha override)
   * @returns {Object} Today's trope data
   */
  getTodaysTrope() {
    // ALPHA TESTING: Check for manual trope override
    const alphaIndex = localStorage.getItem('alpha_trope_index');
    if (alphaIndex !== null) {
      const tropeIndex = parseInt(alphaIndex) % this.tropeIds.length;
      const tropeId = this.tropeIds[tropeIndex];
      console.log(`🧪 ALPHA MODE: Using trope index ${tropeIndex} (${tropeId})`);
      return TROPES_DATABASE[tropeId];
    }
    
    // Normal daily rotation
    const tropeId = this.getTodaysTropeId();
    return TROPES_DATABASE[tropeId];
  }

  /**
   * Get trope for a specific date
   * @param {Date} date - Target date
   * @returns {Object} Trope data for that date
   */
  getTropeForDate(date) {
    const timeDiff = date.getTime() - this.epochDate.getTime();
    const dayNumber = Math.floor(timeDiff / (1000 * 3600 * 24));
    const tropeIndex = dayNumber % this.tropeIds.length;
    const tropeId = this.tropeIds[tropeIndex];
    return TROPES_DATABASE[tropeId];
  }

  /**
   * Get the next trope (tomorrow's)
   * @returns {Object} Tomorrow's trope data
   */
  getNextTrope() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return this.getTropeForDate(tomorrow);
  }

  /**
   * Get time until next trope (midnight)
   * @returns {Object} Hours, minutes, seconds until next trope
   */
  getTimeUntilNextTrope() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeDiff = tomorrow.getTime() - now.getTime();
    
    const hours = Math.floor(timeDiff / (1000 * 3600));
    const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return { hours, minutes, seconds };
  }

  /**
   * Check if user has already played today
   * @returns {boolean} True if played today
   */
  hasPlayedToday() {
    const today = new Date().toDateString();
    const lastPlayed = localStorage.getItem('tropeout_last_played');
    return lastPlayed === today;
  }

  /**
   * Mark today as played
   */
  markTodayAsPlayed() {
    const today = new Date().toDateString();
    localStorage.setItem('tropeout_last_played', today);
  }

  /**
   * Get formatted date string for display
   * @returns {string} Formatted date
   */
  getFormattedDate() {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  /**
   * Get game day number for display (Day #1, #2, etc.)
   * @returns {number} Game day number
   */
  getGameDayNumber() {
    return this.getCurrentDay() + 1; // Start from Day 1, not Day 0
  }

  /**
   * Debug function to preview upcoming tropes
   * @param {number} days - Number of days to preview
   * @returns {Array} Array of upcoming tropes
   */
  previewUpcomingTropes(days = 7) {
    const upcoming = [];
    const today = new Date();
    
    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const trope = this.getTropeForDate(date);
      
      upcoming.push({
        date: date.toDateString(),
        day: this.getCurrentDay() + i + 1,
        tropeId: trope.id,
        tropeName: trope.name,
        difficulty: trope.difficulty
      });
    }
    
    return upcoming;
  }
}

// Global instance
const tropeScheduler = new TropeScheduler();

// Override the simple function from tropes.js with the scheduler
function getTodaysTrope() {
  return tropeScheduler.getTodaysTrope();
}

// Export functions for use in other files
window.tropeScheduler = tropeScheduler;
window.getTodaysTrope = getTodaysTrope;

// Debug functions (remove in production)
window.debugTropes = () => {
  console.log('Today\'s trope:', tropeScheduler.getTodaysTrope());
  console.log('Game day #:', tropeScheduler.getGameDayNumber());
  console.log('Next trope:', tropeScheduler.getNextTrope());
  console.log('Time until next:', tropeScheduler.getTimeUntilNextTrope());
  console.log('Upcoming week:', tropeScheduler.previewUpcomingTropes());
};