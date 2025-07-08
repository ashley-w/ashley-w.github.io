// TropeOut - Enhanced Answer Validator (Phase 1)

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
    
    // 3. Fuzzy match for typos (moved up to catch close misspellings first)
    if (this.isFuzzyMatch(cleanSubmission, cleanTitle)) return true;
    
    // 4. Check common title variations (now uses strict installment logic)
    if (this.checkTitleVariations(cleanSubmission, cleanTitle)) return true;
    
    // 5. Partial match (should be most permissive, so goes last)
    if (this.isPartialMatch(cleanSubmission, cleanTitle)) return true;
    
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
    // Use the new strict installment matching instead of hardcoded variations
    return this.checkSeriesTitleMatch(submission, title);
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

  /**
   * Strict series/franchise matching - requires specific installments
   * @param {string} submission - User submission  
   * @param {string} title - Title to check
   * @returns {boolean} True if valid match
   */
  checkSeriesTitleMatch(submission, title) {
    const submissionWords = submission.toLowerCase().split(' ');
    const titleWords = title.toLowerCase().split(' ');
    
    // Only allow franchise-level matching for titles that ARE the franchise name
    // Example: "Star Wars" should match "Star Wars" (1977) but NOT "Star Wars: A New Hope"
    
    // If the title HAS subtitle/installment info, require more specific matching
    if (this.hasInstallmentInfo(title)) {
      return this.matchSpecificInstallment(submission, title);
    }
    
    // For general franchise titles (like "Star Wars" without subtitle), allow broader matching
    return this.matchFranchiseName(submission, title);
  }

  /**
   * Detect if a title has installment-specific information
   * @param {string} title - Title to analyze
   * @returns {boolean} True if title has installment info
   */
  hasInstallmentInfo(title) {
    const installmentIndicators = [
      // Numbered sequels
      /\b(ii|iii|iv|v|vi|vii|viii|ix|x|\d+)\b/i,
      // Subtitles with "and the", "of the", etc.
      /\band the\b/i, /\bof the\b/i, /\bin the\b/i,
      // Common sequel patterns
      /\b(part|episode|chapter|book|volume|season)\b/i,
      // Franchise-specific patterns
      /\b(half[\s-]blood|chamber of|prisoner of|goblet of|order of|deathly)\b/i,
      /\b(empire strikes|return of|phantom menace|attack of|revenge of)\b/i,
      /\b(fellowship|two towers|return of|unexpected journey|desolation of|battle of)\b/i
    ];
    
    return installmentIndicators.some(pattern => pattern.test(title));
  }

  /**
   * Match specific installments - requires substantial overlap
   * @param {string} submission - User submission
   * @param {string} title - Specific installment title
   * @returns {boolean} True if valid match
   */
  matchSpecificInstallment(submission, title) {
    const submissionWords = submission.toLowerCase().split(' ').filter(w => w.length > 2);
    const titleWords = title.toLowerCase().split(' ').filter(w => w.length > 2);
    
    // For specific installments, require significant word overlap
    // Not just franchise name match
    
    // Count meaningful word matches (excluding articles, prepositions)
    const meaningfulWords = ['and', 'the', 'of', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];
    const submissionMeaningful = submissionWords.filter(w => !meaningfulWords.includes(w));
    const titleMeaningful = titleWords.filter(w => !meaningfulWords.includes(w));
    
    if (submissionMeaningful.length === 0 || titleMeaningful.length === 0) return false;
    
    // Count how many meaningful words from submission appear in title
    const matchingWords = submissionMeaningful.filter(word => 
      titleMeaningful.some(titleWord => 
        titleWord.includes(word) || word.includes(titleWord)
      )
    );
    
    // Require at least 60% of submission words to match title
    // AND at least 2 meaningful words for multi-word submissions
    const matchRatio = matchingWords.length / submissionMeaningful.length;
    
    if (submissionMeaningful.length === 1) {
      // Single word must be substantial part and not just franchise name
      return matchRatio >= 0.5 && matchingWords.length > 0;
    } else {
      // Multi-word submissions need good coverage
      return matchRatio >= 0.6 && matchingWords.length >= 2;
    }
  }

  /**
   * Match general franchise names (for titles without installment info)
   * @param {string} submission - User submission
   * @param {string} title - General franchise title
   * @returns {boolean} True if valid match
   */
  matchFranchiseName(submission, title) {
    // For general franchise titles, allow the existing broader matching
    const submissionWords = submission.toLowerCase().split(' ');
    const titleWords = title.toLowerCase().split(' ');
    
    // Check if submission is a prefix of the title (franchise name)
    if (submissionWords.length >= 2 && titleWords.length >= submissionWords.length) {
      const titleStart = titleWords.slice(0, submissionWords.length).join(' ');
      if (titleStart === submissionWords.join(' ')) {
        return true;
      }
    }
    
    return false;
  }

} // ← This closes the AnswerValidator class

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