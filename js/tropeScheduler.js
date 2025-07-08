// TropeOut - Daily Trope Scheduler (Phase 1) - FIXED

class TropeScheduler {
  constructor() {
    this.epochDate = new Date('2025-07-07'); // Actual game launch date
    
    // FIXED: Use explicit, stable array order instead of Object.keys()
    // This ensures the same trope rotation for everyone, always
    this.tropeIds = [
      'chosen-one',        // Index 0 - Day 0 (July 7) - Launch day
      'chekhov-gun',       // Index 1 - Day 1 (July 8)
      'fish-out-of-water', // Index 2 - Day 2 (July 9)
      'evil-laugh',        // Index 3 - Day 3 (July 10)
      'red-herring',       // Index 4 - Day 4 (July 11)
      'damsel-in-distress',
      'unlikely-friendship',
      'time-loop',
      'villain-monologue',
      'fake-death',
      'double-agent',
      'ensemble-cast',
      'love-triangle',
      'superhero-origin',
      'macguffin',
      'amnesia',
      'mentor-death',
      'redemption-arc',
      'training-montage',
      'manic-pixie-dream-girl',
      'final-girl',
      'deus-ex-machina'
    ];
  }

  /**
   * Get the current day number since game launch
   * FIXED: Ensure proper day calculation that accounts for local midnight
   * @returns {number} Days since epoch
   */
  getCurrentDay() {
    // Create dates at local midnight to ensure proper day boundary calculation
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of today (local midnight)
    
    const epoch = new Date('2025-07-07');
    epoch.setHours(0, 0, 0, 0); // Set epoch to start of July 7 (local midnight)
    
    const timeDiff = today.getTime() - epoch.getTime();
    const dayNumber = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    console.log(`🐛 DEBUG: Today normalized: ${today.toDateString()}`);
    console.log(`🐛 DEBUG: Epoch normalized: ${epoch.toDateString()}`);
    console.log(`🐛 DEBUG: Time diff: ${timeDiff}ms`);
    console.log(`🐛 DEBUG: Day number: ${dayNumber}`);
    
    return dayNumber;
  }

  /**
   * Get today's trope ID based on deterministic rotation
   * @returns {string} Trope ID for today
   */
  getTodaysTropeId() {
    const dayNumber = this.getCurrentDay();
    const tropeIndex = dayNumber % this.tropeIds.length;
    
    console.log(`🐛 DEBUG: Day ${dayNumber} -> Index ${tropeIndex} -> ${this.tropeIds[tropeIndex]}`);
    
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
   * FIXED: Use consistent midnight normalization
   * @param {Date} date - Target date
   * @returns {Object} Trope data for that date
   */
  getTropeForDate(date) {
    // Normalize the input date to midnight
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    
    // Normalize epoch to midnight
    const epoch = new Date('2025-07-07');
    epoch.setHours(0, 0, 0, 0);
    
    const timeDiff = normalizedDate.getTime() - epoch.getTime();
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