// Tropium - Enhanced Answer Validator (Phase 1)

class AnswerValidator {
  constructor() {
    // Common words to ignore when matching
    this.stopWords = ['the', 'a', 'an', 'and', 'or', 'of', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];
    
    // Common title variations
    this.titleVariations = {
      'star wars': ['a new hope', 'episode iv', 'episode 4'],
      'harry potter': ['sorcerers stone', 'philosophers stone', 'chamber of secrets', 'prisoner of azkaban', 'goblet of fire', 'order of the phoenix', 'half blood prince', 'deathly hallows'],
      'lord of the rings': ['fellowship of the ring', 'two towers', 'return of the king'],
      'godfather': ['godfather part ii', 'godfather 2'],
      'indiana jones': ['raiders of the lost ark', 'temple of doom', 'last crusade', 'kingdom of the crystal skull']
    };
  }

  /**
   * Main validation function - checks if submission matches any trope example
   * @param {string} submission - User's guess
   * @param {Object} trope - Current trope object
   * @returns {boolean} True if valid answer
   */
  validate(submission, trope) {
    if (!submission || !trope || !trope.examples) return false;
    
    const normalizedSubmission = this.normalizeString(submission);
    
    // Check against all examples
    return trope.examples.some(example => {
      return this.isMatch(normalizedSubmission, example.title);
    });
  }

  /**
   * Check if submission matches a specific title
   * @param {string} submission - Normalized submission
   * @param {string} title - Title to match against
   * @returns {boolean} True if match found
   */
  isMatch(submission, title) {
    const normalizedTitle = this.normalizeString(title);
    
    // 1. Exact match
    if (submission === normalizedTitle) return true;
    
    // 2. Exact match without articles
    const cleanSubmission = this.removeArticles(submission);
    const cleanTitle = this.removeArticles(normalizedTitle);
    if (cleanSubmission === cleanTitle) return true;
    
    // 3. Partial match (submission contains title or vice versa)
    if (this.isPartialMatch(cleanSubmission, cleanTitle)) return true;
    
    // 4. Check common title variations
    if (this.checkTitleVariations(cleanSubmission, cleanTitle)) return true;
    
    // 5. Fuzzy match for typos
    if (this.isFuzzyMatch(cleanSubmission, cleanTitle)) return true;
    
    return false;
  }

  /**
   * Normalize string for comparison
   * @param {string} str - Input string
   * @returns {string} Normalized string
   */
  normalizeString(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .replace(/\s+/g, ' '); // Normalize whitespace
  }

  /**
   * Remove common articles from string
   * @param {string} str - Input string
   * @returns {string} String without articles
   */
  removeArticles(str) {
    return str.replace(/^(the|a|an)\s+/i, '');
  }

  /**
   * Check for partial matches
   * @param {string} submission - User submission
   * @param {string} title - Title to check
   * @returns {boolean} True if partial match
   */
  isPartialMatch(submission, title) {
    // Both strings must be at least 4 characters for partial matching
    if (submission.length < 4 || title.length < 4) return false;
    
    // Check if one contains the other (but not if they're too different in length)
    const lengthRatio = Math.min(submission.length, title.length) / Math.max(submission.length, title.length);
    if (lengthRatio < 0.5) return false;
    
    return submission.includes(title) || title.includes(submission);
  }

  /**
   * Check against known title variations
   * @param {string} submission - User submission
   * @param {string} title - Title to check
   * @returns {boolean} True if variation match
   */
  checkTitleVariations(submission, title) {
    // Check if submission matches any known variations
    for (const [baseTitle, variations] of Object.entries(this.titleVariations)) {
      const normalizedBase = this.normalizeString(baseTitle);
      const normalizedTitle = this.normalizeString(title);
      
      // If title matches base, check if submission matches any variation
      if (normalizedTitle.includes(normalizedBase) || normalizedBase.includes(normalizedTitle)) {
        if (submission.includes(normalizedBase) || normalizedBase.includes(submission)) return true;
        
        for (const variation of variations) {
          const normalizedVariation = this.normalizeString(variation);
          if (submission.includes(normalizedVariation) || normalizedVariation.includes(submission)) {
            return true;
          }
        }
      }
    }
    
    return false;
  }

  /**
   * Simple fuzzy matching for typos
   * @param {string} submission - User submission
   * @param {string} title - Title to check
   * @returns {boolean} True if fuzzy match
   */
  isFuzzyMatch(submission, title) {
    // Only do fuzzy matching for strings of similar length
    if (Math.abs(submission.length - title.length) > 3) return false;
    
    // Minimum length for fuzzy matching
    if (submission.length < 5 || title.length < 5) return false;
    
    const distance = this.levenshteinDistance(submission, title);
    const maxLength = Math.max(submission.length, title.length);
    
    // Allow 1-2 character differences for shorter strings, more for longer
    const threshold = maxLength <= 8 ? 2 : Math.floor(maxLength * 0.2);
    
    return distance <= threshold;
  }

  /**
   * Calculate Levenshtein distance between two strings
   * @param {string} a - First string
   * @param {string} b - Second string
   * @returns {number} Edit distance
   */
  levenshteinDistance(a, b) {
    const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
    
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
    
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // deletion
          matrix[i][j - 1] + 1,      // insertion
          matrix[i - 1][j - 1] + cost // substitution
        );
      }
    }
    
    return matrix[a.length][b.length];
  }

  /**
   * Get matching confidence score (0-1)
   * @param {string} submission - User submission
   * @param {string} title - Title to check
   * @returns {number} Confidence score
   */
  getMatchConfidence(submission, title) {
    const normalizedSubmission = this.normalizeString(submission);
    const normalizedTitle = this.normalizeString(title);
    
    if (normalizedSubmission === normalizedTitle) return 1.0;
    
    const cleanSubmission = this.removeArticles(normalizedSubmission);
    const cleanTitle = this.removeArticles(normalizedTitle);
    
    if (cleanSubmission === cleanTitle) return 0.95;
    
    if (this.isPartialMatch(cleanSubmission, cleanTitle)) return 0.8;
    
    if (this.checkTitleVariations(cleanSubmission, cleanTitle)) return 0.9;
    
    if (this.isFuzzyMatch(cleanSubmission, cleanTitle)) return 0.7;
    
    return 0.0;
  }
}

// Global instance
const answerValidator = new AnswerValidator();

// Override the simple validation function from tropes.js
function validateSubmission(submission, trope) {
  return answerValidator.validate(submission, trope);
}

// Export for use in other files
window.answerValidator = answerValidator;
window.validateSubmission = validateSubmission;

// Debug function
window.debugValidator = (submission, trope) => {
  const isValid = answerValidator.validate(submission, trope);
  console.log(`Validating "${submission}" against ${trope.name}:`, isValid);
  
  // Show confidence scores for all examples
  trope.examples.forEach(example => {
    const confidence = answerValidator.getMatchConfidence(submission, example.title);
    if (confidence > 0) {
      console.log(`  ${example.title}: ${confidence}`);
    }
  });
};