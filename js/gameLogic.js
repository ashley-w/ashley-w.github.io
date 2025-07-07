// TropeOut - Core Game Logic (Phase 1) - DEBUG VERSION

class TropeOutGame {
  constructor() {
    // 🐛 DEBUG: Check what's available when constructor runs
    console.log('🎮 TropeOutGame constructor starting...');
    console.log('📊 TROPES_DATABASE available:', typeof TROPES_DATABASE);
    console.log('📅 getTodaysTrope function available:', typeof getTodaysTrope);
    console.log('🎯 tropeScheduler available:', typeof tropeScheduler);
    
    // Try to get today's trope and log what happens
    try {
      const testTrope = getTodaysTrope();
      console.log('✅ getTodaysTrope() returned:', testTrope);
      if (testTrope) {
        console.log('🎭 Trope name:', testTrope.name);
        console.log('📝 Trope definition:', testTrope.definition);
        console.log('🎲 Examples count:', testTrope.examples?.length);
      }
    } catch (error) {
      console.error('❌ Error calling getTodaysTrope():', error);
    }
    
    this.currentTrope = null;
    this.submissions = [];
    this.correctAnswers = [];
    this.gameComplete = false;
    this.hintsUsed = 0;
    
    this.init();
  }

  init() {
    console.log('🚀 init() called');
    // Load today's trope
    this.loadTodaysTrope();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Initialize UI
    this.updateUI();
    console.log('✅ init() completed');
  }

  loadTodaysTrope() {
    console.log('📡 loadTodaysTrope() called');
    try {
      this.currentTrope = getTodaysTrope();
      console.log('🎯 Current trope set to:', this.currentTrope);
      this.displayTrope();
    } catch (error) {
      console.error('❌ Error in loadTodaysTrope():', error);
    }
  }

  displayTrope() {
    console.log('🖼️ displayTrope() called');
    if (!this.currentTrope) {
      console.warn('⚠️ No current trope to display!');
      return;
    }
    
    try {
      const nameElement = document.getElementById('tropeName');
      const defElement = document.getElementById('tropeDefinition');
      
      console.log('🔍 Name element found:', !!nameElement);
      console.log('🔍 Definition element found:', !!defElement);
      
      if (nameElement) {
        let displayName = this.currentTrope.name;
        
        // Show alpha indicator if in alpha mode
        const alphaIndex = localStorage.getItem('alpha_trope_index');
        if (alphaIndex !== null) {
          displayName += ` [ALPHA ${parseInt(alphaIndex) + 1}]`;
        }
        
        nameElement.textContent = displayName;
        console.log('✅ Set trope name to:', displayName);
      }
      
      if (defElement) {
        defElement.textContent = this.currentTrope.definition;
        console.log('✅ Set trope definition');
      }
    } catch (error) {
      console.error('❌ Error in displayTrope():', error);
    }
  }

  setupEventListeners() {
    const form = document.getElementById('gameForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmission();
      });
    } else {
      console.warn('#gameForm not found during setupEventListeners');
    }

    const hintBtn = document.getElementById('hintBtn');
    if (hintBtn) {
      hintBtn.addEventListener('click', () => {
        this.showHint();
      });
    } else {
      console.warn('#hintBtn not found during setupEventListeners');
    }

    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        this.shareResults();
      });
    } else {
      console.warn('#shareBtn not found during setupEventListeners');
    }

    const statsBtn = document.getElementById('statsBtn');
    if (statsBtn) {
      statsBtn.addEventListener('click', () => {
        this.showStats();
      });
    } else {
      console.warn('#statsBtn not found during setupEventListeners');
    }

    const closeStatsBtn = document.getElementById('closeStatsBtn');
    if (closeStatsBtn) {
      closeStatsBtn.addEventListener('click', () => {
        this.hideStats();
      });
    } else {
      console.warn('#closeStatsBtn not found during setupEventListeners');
    }

    const statsModal = document.getElementById('statsModal');
    if (statsModal) {
      statsModal.addEventListener('click', (e) => {
        if (e.target === statsModal) {
          this.hideStats();
        }
      });
    } else {
      console.warn('#statsModal not found during setupEventListeners');
    }

    const alphaLink = document.getElementById('alphaLink');
    if (alphaLink) {
      alphaLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleAlphaAccess();
      });
    } else {
      console.warn('#alphaLink not found during setupEventListeners');
    }
  }

  // ... rest of your methods remain unchanged ...

  handleSubmission() {
    const input = document.getElementById('mediaInput');
    const submission = input.value.trim();
    
    if (!submission) return;
    
    // Check if already submitted
    if (this.submissions.includes(submission.toLowerCase())) {
      this.showMessage('Already guessed that one!', 'warning');
      input.value = '';
      return;
    }

    // Validate submission
    const isCorrect = validateSubmission(submission, this.currentTrope);
    
    // Add to submissions
    this.submissions.push(submission.toLowerCase());
    
    if (isCorrect) {
      this.correctAnswers.push(submission);
      this.showMessage('Correct! ✅', 'success');
    } else {
      this.showMessage('Not quite... ❌', 'error');
    }

    // Update UI
    this.updateSubmissionsDisplay();
    this.updateProgress();
    
    // Clear input
    input.value = '';
    
    // Check if game complete
    if (this.correctAnswers.length >= 5 || this.submissions.length >= 10) {
      this.completeGame();
    }

    // Focus back on input
    input.focus();
  }

  // ... everything else is untouched ...
}

// Alpha testing override (add this AFTER the class closing brace)
const originalGetTodaysTrope = window.getTodaysTrope;
if (originalGetTodaysTrope) {
  window.getTodaysTrope = function() {
    const alphaIndex = localStorage.getItem('alpha_trope_index');
    if (alphaIndex !== null) {
      const tropeIds = Object.keys(TROPES_DATABASE);
      const tropeIndex = parseInt(alphaIndex) % tropeIds.length;
      const tropeId = tropeIds[tropeIndex];
      console.log(`🧪 ALPHA MODE: Using trope ${tropeIndex} (${tropeId})`);
      return TROPES_DATABASE[tropeId];
    }
    return originalGetTodaysTrope();
  };
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎬 DOM loaded, creating TropeOutGame...');
  window.tropeoutGame = new TropeOutGame();
});

// Add CSS animation for messages
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);


