// Alpha Testing Debug System with Password Protection

// Override any existing alpha testing functionality
document.addEventListener('DOMContentLoaded', function() {
    // Remove any existing event listeners
    const alphaLink = document.getElementById('alphaLink');
    if (alphaLink) {
        // Clone the element to remove all event listeners
        const newAlphaLink = alphaLink.cloneNode(true);
        alphaLink.parentNode.replaceChild(newAlphaLink, alphaLink);
        
        // Add our new event listener
        newAlphaLink.addEventListener('click', function(e) {
            e.preventDefault();
            showAlphaLogin();
        });
    }
});

// Password-protected alpha testing features
const ALPHA_PASSWORD = "tropedev2025"; // Change this to your preferred password
let isAlphaAuthenticated = false;

// Initialize alpha testing link
document.addEventListener('DOMContentLoaded', function() {
    const alphaLink = document.getElementById('alphaLink');
    if (alphaLink) {
        alphaLink.addEventListener('click', function(e) {
            e.preventDefault();
            showAlphaLogin();
        });
    }
});

function showAlphaLogin() {
    if (isAlphaAuthenticated) {
        showAlphaPanel();
        return;
    }
    
    const password = prompt("Enter alpha testing password:");
    if (password === ALPHA_PASSWORD) {
        isAlphaAuthenticated = true;
        showAlphaPanel();
    } else if (password !== null) {
        alert("Incorrect password!");
    }
}

function showAlphaPanel() {
    // Remove existing panel if it exists
    const existingPanel = document.getElementById('alphaPanel');
    if (existingPanel) {
        existingPanel.remove();
    }
    
    // Create alpha panel
    const panel = document.createElement('div');
    panel.id = 'alphaPanel';
    panel.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 300px;
        background: var(--bg-card);
        border: 2px solid var(--neon-cyan);
        border-radius: 12px;
        padding: 1rem;
        z-index: 9999;
        color: var(--text-primary);
        font-family: 'Courier Prime', monospace;
        font-size: 0.9rem;
        box-shadow: var(--box-shadow), var(--neon-shadow) rgba(0, 255, 255, 0.3);
    `;
    
    panel.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="margin: 0; color: var(--neon-cyan); font-size: 1rem;">🧪 Alpha Testing</h3>
            <button onclick="closeAlphaPanel()" style="background: none; border: none; color: var(--text-muted); font-size: 1.2rem; cursor: pointer;">&times;</button>
        </div>
        
        <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Change Trope:</label>
            <select id="tropeSelector" style="width: 100%; padding: 0.5rem; background: var(--bg-secondary); border: 1px solid var(--grid-color); border-radius: 4px; color: var(--text-primary);">
                <option value="">Select trope...</option>
            </select>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
            <button onclick="resetGameState()" class="alpha-btn">Reset Game</button>
            <button onclick="clearAllData()" class="alpha-btn">Clear Storage</button>
            <button onclick="skipToComplete()" class="alpha-btn">Skip to End</button>
            <button onclick="addRandomAnswer()" class="alpha-btn">Add Answer</button>
        </div>
        
        <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Manual Answer:</label>
            <div style="display: flex; gap: 0.5rem;">
                <input type="text" id="manualAnswer" placeholder="Enter answer..." style="flex: 1; padding: 0.5rem; background: var(--bg-secondary); border: 1px solid var(--grid-color); border-radius: 4px; color: var(--text-primary);">
                <button onclick="addManualAnswer()" class="alpha-btn">Add</button>
            </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
            <button onclick="showGameState()" class="alpha-btn" style="width: 100%;">Show Game State</button>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">
            Debug Mode Active
        </div>
    `;
    
    // Add styles for alpha buttons
    const style = document.createElement('style');
    style.textContent = `
        .alpha-btn {
            padding: 0.5rem;
            background: linear-gradient(45deg, var(--neon-purple), var(--electric-blue));
            border: none;
            border-radius: 4px;
            color: white;
            font-family: 'Courier Prime', monospace;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .alpha-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(panel);
    
    // Populate trope selector
    populateTropeSelector();
}

function populateTropeSelector() {
    const selector = document.getElementById('tropeSelector');
    if (!selector || !window.TROPES_DATABASE) return;
    
    // Clear existing options
    selector.innerHTML = '<option value="">Select trope...</option>';
    
    // Add tropes from database
    window.TROPES_DATABASE.forEach((trope, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = trope.name;
        selector.appendChild(option);
    });
    
    // Handle trope selection
    selector.addEventListener('change', function() {
        if (this.value !== '') {
            changeTrope(parseInt(this.value));
        }
    });
}

function changeTrope(tropeIndex) {
    if (!window.TROPES_DATABASE || !window.TROPES_DATABASE[tropeIndex]) {
        alert('Invalid trope index!');
        return;
    }
    
    // Override the current trope
    window.debugTropeOverride = tropeIndex;
    
    // Reset game state for new trope
    resetGameState();
    
    // Force reload the trope
    if (window.gameInstance && window.gameInstance.loadTrope) {
        window.gameInstance.loadTrope();
    } else {
        location.reload();
    }
    
    alert(`Changed to trope: ${window.TROPES_DATABASE[tropeIndex].name}`);
}

function resetGameState() {
    // Clear current game progress
    if (window.gameInstance) {
        window.gameInstance.correctAnswers = [];
        window.gameInstance.guessHistory = [];
        window.gameInstance.attempts = 0;
        window.gameInstance.hintsUsed = 0;
        window.gameInstance.gameComplete = false;
        window.gameInstance.updateDisplay();
    }
    
    // Clear any stored progress for today
    if (window.StorageUtils) {
        const today = new Date().toDateString();
        StorageUtils.removeItem(`tropeout_progress_${today}`);
    }
    
    alert('Game state reset!');
}

function clearAllData() {
    if (confirm('This will clear ALL stored data including stats. Continue?')) {
        // Clear all localStorage data
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('tropeout_')) {
                localStorage.removeItem(key);
            }
        });
        
        alert('All data cleared!');
        location.reload();
    }
}

function skipToComplete() {
    if (!window.gameInstance) {
        alert('Game instance not found!');
        return;
    }
    
    // Fill in random answers to complete the game
    const currentTrope = window.getTodaysTrope ? window.getTodaysTrope() : window.TROPES_DATABASE[0];
    if (currentTrope && currentTrope.examples) {
        const examples = currentTrope.examples.slice(0, 5);
        window.gameInstance.correctAnswers = examples;
        window.gameInstance.gameComplete = true;
        window.gameInstance.updateDisplay();
        window.gameInstance.showCompletionScreen();
    }
    
    alert('Skipped to game complete!');
}

function addRandomAnswer() {
    const currentTrope = window.getTodaysTrope ? window.getTodaysTrope() : window.TROPES_DATABASE[0];
    if (!currentTrope || !currentTrope.examples || !window.gameInstance) {
        alert('Cannot add answer - missing data!');
        return;
    }
    
    // Find an example that's not already added
    const availableExamples = currentTrope.examples.filter(example => 
        !window.gameInstance.correctAnswers.includes(example)
    );
    
    if (availableExamples.length === 0) {
        alert('No more examples available!');
        return;
    }
    
    const randomExample = availableExamples[Math.floor(Math.random() * availableExamples.length)];
    window.gameInstance.correctAnswers.push(randomExample);
    window.gameInstance.updateDisplay();
    
    alert(`Added: ${randomExample}`);
}

function addManualAnswer() {
    const input = document.getElementById('manualAnswer');
    if (!input || !input.value.trim() || !window.gameInstance) {
        alert('Enter a valid answer!');
        return;
    }
    
    const answer = input.value.trim();
    window.gameInstance.correctAnswers.push(answer);
    window.gameInstance.updateDisplay();
    input.value = '';
    
    alert(`Added: ${answer}`);
}

function showGameState() {
    if (!window.gameInstance) {
        alert('Game instance not found!');
        return;
    }
    
    const state = {
        correctAnswers: window.gameInstance.correctAnswers,
        guessHistory: window.gameInstance.guessHistory,
        attempts: window.gameInstance.attempts,
        hintsUsed: window.gameInstance.hintsUsed,
        gameComplete: window.gameInstance.gameComplete,
        currentTrope: window.getTodaysTrope ? window.getTodaysTrope().name : 'Unknown'
    };
    
    console.log('Current Game State:', state);
    alert(`Game State (see console for details):
    
Trope: ${state.currentTrope}
Correct: ${state.correctAnswers.length}/5
Attempts: ${state.attempts}
Hints Used: ${state.hintsUsed}
Complete: ${state.gameComplete}`);
}

function closeAlphaPanel() {
    const panel = document.getElementById('alphaPanel');
    if (panel) {
        panel.remove();
    }
}

// Override getTodaysTrope if debug trope is set
const originalGetTodaysTrope = window.getTodaysTrope;
window.getTodaysTrope = function() {
    if (window.debugTropeOverride !== undefined && window.TROPES_DATABASE) {
        return window.TROPES_DATABASE[window.debugTropeOverride];
    }
    return originalGetTodaysTrope ? originalGetTodaysTrope() : null;
};

console.log("Debug.js loaded successfully!");