// TropeOut - Utility Functions (Phase 1)

/**
 * Date and Time Utilities
 */
const DateUtils = {
  /**
   * Format date for display
   * @param {Date} date - Date to format
   * @param {string} format - Format type ('short', 'long', 'game')
   * @returns {string} Formatted date
   */
  formatDate(date = new Date(), format = 'short') {
    const options = {
      short: { month: 'short', day: 'numeric', year: 'numeric' },
      long: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      game: { month: 'numeric', day: 'numeric', year: 'numeric' }
    };
    
    return date.toLocaleDateString('en-US', options[format] || options.short);
  },

  /**
   * Get days between two dates
   * @param {Date} date1 - First date
   * @param {Date} date2 - Second date
   * @returns {number} Number of days
   */
  daysBetween(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  },

  /**
   * Check if date is today
   * @param {Date} date - Date to check
   * @returns {boolean} True if today
   */
  isToday(date) {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }
};

/**
 * String Utilities
 */
const StringUtils = {
  /**
   * Capitalize first letter of each word
   * @param {string} str - Input string
   * @returns {string} Title cased string
   */
  toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  },

  /**
   * Truncate string with ellipsis
   * @param {string} str - Input string
   * @param {number} length - Max length
   * @returns {string} Truncated string
   */
  truncate(str, length = 50) {
    return str.length > length ? str.substring(0, length - 3) + '...' : str;
  },

  /**
   * Remove HTML tags from string
   * @param {string} str - Input string
   * @returns {string} Clean string
   */
  stripHtml(str) {
    return str.replace(/<[^>]*>/g, '');
  },

  /**
   * Generate random string
   * @param {number} length - String length
   * @returns {string} Random string
   */
  randomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};

/**
 * Array Utilities
 */
const ArrayUtils = {
  /**
   * Shuffle array using Fisher-Yates algorithm
   * @param {Array} array - Array to shuffle
   * @returns {Array} New shuffled array
   */
  shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  /**
   * Get random element from array
   * @param {Array} array - Source array
   * @returns {*} Random element
   */
  randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  /**
   * Remove duplicates from array
   * @param {Array} array - Array with duplicates
   * @returns {Array} Array without duplicates
   */
  unique(array) {
    return [...new Set(array)];
  },

  /**
   * Chunk array into smaller arrays
   * @param {Array} array - Source array
   * @param {number} size - Chunk size
   * @returns {Array} Array of chunks
   */
  chunk(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
};

/**
 * DOM Utilities
 */
const DOMUtils = {
  /**
   * Create element with attributes
   * @param {string} tag - HTML tag
   * @param {Object} attributes - Element attributes
   * @param {string} content - Inner content
   * @returns {HTMLElement} Created element
   */
  createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else {
        element.setAttribute(key, value);
      }
    });
    
    if (content) element.innerHTML = content;
    return element;
  },

  /**
   * Add CSS class with animation
   * @param {HTMLElement} element - Target element
   * @param {string} className - Class to add
   * @param {number} duration - Animation duration in ms
   */
  addClassWithAnimation(element, className, duration = 300) {
    element.classList.add(className);
    setTimeout(() => element.classList.remove(className), duration);
  },

  /**
   * Smoothly scroll to element
   * @param {HTMLElement} element - Target element
   * @param {number} offset - Scroll offset
   */
  scrollToElement(element, offset = 0) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

/**
 * Local Storage Utilities
 */
const StorageUtils = {
  /**
   * Set item in localStorage with error handling
   * @param {string} key - Storage key
   * @param {*} value - Value to store
   * @returns {boolean} Success status
   */
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn('LocalStorage setItem failed:', error);
      return false;
    }
  },

  /**
   * Get item from localStorage with error handling
   * @param {string} key - Storage key
   * @param {*} defaultValue - Default if not found
   * @returns {*} Retrieved value or default
   */
  getItem(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('LocalStorage getItem failed:', error);
      return defaultValue;
    }
  },

  /**
   * Remove item from localStorage
   * @param {string} key - Storage key
   * @returns {boolean} Success status
   */
  removeItem(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('LocalStorage removeItem failed:', error);
      return false;
    }
  },

  /**
   * Clear all localStorage items with prefix
   * @param {string} prefix - Key prefix to match
   */
  clearWithPrefix(prefix) {
    const keys = Object.keys(localStorage).filter(key => key.startsWith(prefix));
    keys.forEach(key => localStorage.removeItem(key));
  }
};

/**
 * Game-specific Utilities
 */
const GameUtils = {
  /**
   * Calculate game score based on correct answers and hints used
   * @param {number} correctAnswers - Number of correct answers
   * @param {number} totalAnswers - Total possible answers
   * @param {number} hintsUsed - Number of hints used
   * @returns {number} Calculated score (0-100)
   */
  calculateScore(correctAnswers, totalAnswers = 5, hintsUsed = 0) {
    const baseScore = (correctAnswers / totalAnswers) * 100;
    const hintPenalty = hintsUsed * 5; // 5 points per hint
    return Math.max(0, Math.round(baseScore - hintPenalty));
  },

  /**
   * Format share text for social media
   * @param {Object} gameData - Game results
   * @returns {string} Formatted share text
   */
  formatShareText(gameData) {
    const { score, total, date, tropeId, hintsUsed } = gameData;
    let shareText = `🎭 TropeOut ${DateUtils.formatDate(new Date(date), 'game')}\n`;
    shareText += `${score}/${total} correct\n`;
    
    // Add emoji grid
    const emojis = Array.from({ length: total }, (_, i) => i < score ? '✅' : '❌');
    shareText += `\n${emojis.join('')}\n`;
    
    if (hintsUsed > 0) {
      shareText += `💡 Used ${hintsUsed} hint${hintsUsed > 1 ? 's' : ''}\n`;
    }
    
    shareText += '\nPlay at: [Your URL Here]';
    return shareText;
  },

  /**
   * Validate media type
   * @param {string} type - Media type to validate
   * @returns {boolean} True if valid type
   */
  isValidMediaType(type) {
    const validTypes = ['movie', 'tv', 'book', 'game', 'comic', 'anime'];
    return validTypes.includes(type.toLowerCase());
  },

  /**
   * Get difficulty color
   * @param {string} difficulty - Difficulty level
   * @returns {string} CSS color value
   */
  getDifficultyColor(difficulty) {
    const colors = {
      easy: '#00ff40',
      medium: '#00ffff', 
      hard: '#ff0080',
      expert: '#8000ff'
    };
    return colors[difficulty.toLowerCase()] || colors.medium;
  }
};

/**
 * Performance Utilities
 */
const PerfUtils = {
  /**
   * Debounce function calls
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in ms
   * @returns {Function} Debounced function
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Throttle function calls
   * @param {Function} func - Function to throttle
   * @param {number} limit - Time limit in ms
   * @returns {Function} Throttled function
   */
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Export all utilities
window.DateUtils = DateUtils;
window.StringUtils = StringUtils;
window.ArrayUtils = ArrayUtils;
window.DOMUtils = DOMUtils;
window.StorageUtils = StorageUtils;
window.GameUtils = GameUtils;
window.PerfUtils = PerfUtils;

// Legacy compatibility - expose commonly used functions globally
window.formatDate = DateUtils.formatDate;
window.calculateScore = GameUtils.calculateScore;
window.debounce = PerfUtils.debounce;