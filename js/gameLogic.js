// TropeOut - Core Game Logic (Phase 1)

class TropeOutGame {
  constructor() {
    this.currentTrope = null;
    this.submissions = [];
    this.correctAnswers = [];
    this.gameComplete = false;
    this.hintsUsed = 0;
    
    this.init();
  }

  init() {
    // Load today's trope
    this.loadTodaysTrope();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Initialize UI
    this.updateUI();
  }

  loadTodaysTrope() {
    this.currentTrope = getTodaysTrope();
    this.displayTrope();
  }

  displayTrope() {
    if (!this.currentTrope) return;
    
    document.getElementById('tropeName').textContent = this.currentTrope.name;
    document.getElementById('tropeDefinition').textContent = this.currentTrope.definition;
  }

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
    
    let shareText = `🎭 TropeOut ${date}\n`;
    shareText += `${score}/${total} correct\n\n`;
    
    // Add emoji representation
    for (let i = 0; i < total; i++) {
      shareText += i < score ? '✅' : '❌';
    }
    
    if (navigator.share) {
      navigator.share({
        title: 'TropeOut Results',
        text: shareText
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        this.showMessage('Results copied to clipboard!', 'success');
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
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
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