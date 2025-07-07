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
        nameElement.textContent = this.currentTrope.name;
        console.log('✅ Set trope name to:', this.currentTrope.name);
      }
      
      if (defElement) {
        defElement.textContent = this.currentTrope.definition;
        console.log('✅ Set trope definition');
      }
    } catch (error) {
      console.error('❌ Error in displayTrope():', error);
    }
  }

  // ... rest of your existing methods stay the same ...
  setupEventListeners() {
    // Form submission
    const form = document.getElementById('gameForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmission();
    });

    // Hint button
    const hintBtn = document.getElementById('hintBtn');
    hintBtn.addEventListener('click', () => {
      this.showHint();
    });

    // Share button
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', () => {
      this.shareResults();
    });

    // Stats button
    const statsBtn = document.getElementById('statsBtn');
    statsBtn.addEventListener('click', () => {
      this.showStats();
    });

    // Close stats modal
    const closeStatsBtn = document.getElementById('closeStatsBtn');
    closeStatsBtn.addEventListener('click', () => {
      this.hideStats();
    });

    // Close modal when clicking outside
    const statsModal = document.getElementById('statsModal');
    statsModal.addEventListener('click', (e) => {
      if (e.target === statsModal) {
        this.hideStats();
      }
    });

    // Alpha testing link
    const alphaLink = document.getElementById('alphaLink');
    alphaLink.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleAlphaAccess();
    });
  }

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

  updateSubmissionsDisplay() {
    const grid = document.getElementById('submissionsGrid');
    const slots = grid.querySelectorAll('.submission-slot');
    
    // Show correct answers first
    this.correctAnswers.forEach((answer, index) => {
      if (slots[index]) {
        slots[index].className = 'submission-slot correct';
        slots[index].querySelector('.slot-content').textContent = answer;
      }
    });
    
    // Fill remaining slots with incorrect guesses
    const incorrectGuesses = this.submissions.filter(sub => 
      !this.correctAnswers.some(correct => correct.toLowerCase() === sub)
    );
    
    let slotIndex = this.correctAnswers.length;
    incorrectGuesses.forEach(guess => {
      if (slots[slotIndex] && slotIndex < 5) {
        slots[slotIndex].className = 'submission-slot incorrect';
        slots[slotIndex].querySelector('.slot-content').textContent = guess;
        slotIndex++;
      }
    });
  }

  updateProgress() {
    const correctCount = this.correctAnswers.length;
    
    // Update counter
    document.getElementById('correctCount').textContent = correctCount;
    
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    const percentage = (correctCount / 5) * 100;
    progressFill.style.width = percentage + '%';
  }

  updateUI() {
    this.updateProgress();
  }

  showHint() {
    if (!this.currentTrope || this.hintsUsed >= this.currentTrope.hints.length) {
      this.showMessage('No more hints available!', 'warning');
      return;
    }

    const hint = this.currentTrope.hints[this.hintsUsed];
    this.showMessage(`💡 Hint: ${hint}`, 'info');
    this.hintsUsed++;
    
    // Update hint button
    const hintBtn = document.getElementById('hintBtn');
    if (this.hintsUsed >= this.currentTrope.hints.length) {
      hintBtn.textContent = '💡 No more hints';
      hintBtn.disabled = true;
    } else {
      hintBtn.textContent = `💡 Hint (${this.currentTrope.hints.length - this.hintsUsed} left)`;
    }
  }

  completeGame() {
    this.gameComplete = true;
    
    // Hide input section
    document.getElementById('gameForm').style.display = 'none';
    
    // Show completion screen
    const completeSection = document.getElementById('gameComplete');
    completeSection.style.display = 'block';
    
    // Update final score
    document.getElementById('finalScore').textContent = this.correctAnswers.length;
    
    // Save game data (placeholder for now)
    this.saveGameData();
  }

  shareResults() {
    const score = this.correctAnswers.length;
    const total = 5;
    const date = new Date().toLocaleDateString();
    
    // Inviting reactions aimed at the person receiving the share
    const inviteReactions = {
      5: "🔥 Can you match this perfect score? 🔥",
      4: "⭐ Think you can beat this? Give it a shot! ⭐", 
      3: "🎯 Can you do better? Test your trope knowledge! 🎯",
      2: "📚 Bet you know more tropes than this! Try it! 📚",
      1: "🌱 This looks tricky! Can you figure it out? 🌱",
      0: "💪 This one stumped me! Think you can solve it? 💪"
    };
    
    // Build the cute share text
    let shareText = `🎬✨ TropeOut Daily Challenge ✨🎮\n`;
    shareText += `📅 ${date}\n`;
    shareText += `🎭 Today's Trope: "${this.currentTrope.name}"\n\n`;
    shareText += `${inviteReactions[score]}\n`;
    shareText += `🎯 My Score: ${score}/${total}\n\n`;
    
    // Add cute emoji representation
    for (let i = 0; i < total; i++) {
      shareText += i < score ? '🟢' : '⚫';
    }
    
    if (this.hintsUsed > 0) {
      shareText += `\n💡 Used ${this.hintsUsed} hint${this.hintsUsed > 1 ? 's' : ''}`;
    }
    
    shareText += '\n\n🎲 Your turn! Can you guess 5 movies/shows/games/books?';
    shareText += '\n🌟 Daily trope puzzles • Free to play • Test your knowledge!';
    shareText += '\n▶️ Try it at: www.tropeout.com';
    
    if (navigator.share) {
      navigator.share({
        title: '🎭 TropeOut - Can you beat my score?',
        text: shareText,
        url: 'https://www.tropeout.com'
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        this.showMessage('Results copied to clipboard! 📋✨', 'success');
      }).catch(() => {
        // Final fallback: show in alert
        alert(shareText);
      });
    }
  }

  showStats() {
    // Placeholder stats - will integrate with gameStorage.js later
    document.getElementById('gamesPlayed').textContent = '1';
    document.getElementById('winRate').textContent = this.correctAnswers.length >= 3 ? '100%' : '0%';
    document.getElementById('currentStreak').textContent = '1';
    document.getElementById('bestStreak').textContent = '1';
    
    document.getElementById('statsModal').style.display = 'flex';
  }

  hideStats() {
    document.getElementById('statsModal').style.display = 'none';
  }

  saveGameData() {
    // Placeholder - will integrate with gameStorage.js
    const gameData = {
      date: new Date().toDateString(),
      tropeId: this.currentTrope.id,
      score: this.correctAnswers.length,
      submissions: this.submissions,
      hintsUsed: this.hintsUsed,
      completed: this.gameComplete
    };
    
    console.log('Game data to save:', gameData);
  }

  showMessage(message, type = 'info') {
    // Create temporary message element
    const messageEl = document.createElement('div');
    messageEl.className = `game-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-family: 'Courier Prime', monospace;
      font-weight: 700;
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `;
    
    // Set background color based on type
    const colors = {
      success: 'linear-gradient(45deg, #00ff40, #00cc32)',
      error: 'linear-gradient(45deg, #ff0080, #cc0066)',
      warning: 'linear-gradient(45deg, #ff8000, #cc6600)',
      info: 'linear-gradient(45deg, #00ffff, #00cccc)'
    };
    messageEl.style.background = colors[type] || colors.info;
    
    document.body.appendChild(messageEl);
    
    // Remove after 3 seconds
    setTimeout(() => {
      messageEl.remove();
    }, 3000);
  }

  handleAlphaAccess() {
    const password = prompt('Enter alpha testing password:');
    
    // You can change this password to whatever you want
    if (password === 'trope2025' || password === 'alpha') {
      // Clear all game data for fresh testing
      localStorage.clear();
      
      // Show confirmation and reload
      this.showMessage('Alpha mode activated! Reloading...', 'success');
      
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else if (password !== null) {
      // User entered something but it was wrong
      this.showMessage('Incorrect password', 'error');
    }
    // If user cancels (password === null), do nothing
  }
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