// Alpha Testing Debug System with Password Protection
// Compatible with existing alpha_trope_index localStorage system

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
const ALPHA_PASSWORD = "tropedev2024";
let isAlphaAuthenticated = false;

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
    Object.keys(window.TROPES_DATABASE).forEach((tropeId, index) => {
        const trope = window.TROPES_DATABASE[tropeId];
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
    // Use existing localStorage alpha system
    localStorage.setItem('alpha_trope_index', tropeIndex);
    resetGameState();
    location.reload();
}

function resetGameState() {
    // Clear current game progress
    if (window.tropeoutGame) {
        window.tropeoutGame.correctAnswers = [];
        window.tropeoutGame.guessHistory = [];
        window.tropeoutGame.attempts = 0;
        window.tropeoutGame.hintsUsed = 0;
        window.tropeoutGame.gameComplete = false;
    }
    
    // Clear stored progress
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        if (key.startsWith('tropeout_progress_') || key.startsWith('tropeout_game_')) {
            localStorage.removeItem(key);
        }
    });
    
    alert('Game state reset!');
}

function clearAllData() {
    if (confirm('This will clear ALL stored data including stats. Continue?')) {
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
    if (!window.tropeoutGame) {
        alert('Game instance not found!');
        return;
    }
    
    const currentTrope = window.getTodaysTrope ? window.getTodaysTrope() : null;
    if (currentTrope && currentTrope.examples) {
        const examples = currentTrope.examples.slice(0, 5);
        window.tropeoutGame.correctAnswers = examples;
        window.tropeoutGame.gameComplete = true;
    }
    
    alert('Skipped to game complete!');
}

function addRandomAnswer() {
    const currentTrope = window.getTodaysTrope ? window.getTodaysTrope() : null;
    if (!currentTrope || !currentTrope.examples || !window.tropeoutGame) {
        alert('Cannot add answer - missing data!');
        return;
    }
    
    const availableExamples = currentTrope.examples.filter(example => 
        !window.tropeoutGame.correctAnswers.includes(example)
    );
    
    if (availableExamples.length === 0) {
        alert('No more examples available!');
        return;
    }
    
    const randomExample = availableExamples[Math.floor(Math.random() * availableExamples.length)];
    window.tropeoutGame.correctAnswers.push(randomExample);
    alert(`Added: ${randomExample}`);
}

function addManualAnswer() {
    const input = document.getElementById('manualAnswer');
    if (!input || !input.value.trim() || !window.tropeoutGame) {
        alert('Enter a valid answer!');
        return;
    }
    
    const answer = input.value.trim();
    window.tropeoutGame.correctAnswers.push(answer);
    input.value = '';
    alert(`Added: ${answer}`);
}

function showGameState() {
    if (!window.tropeoutGame) {
        alert('Game instance not found!');
        return;
    }
    
    const currentTrope = window.getTodaysTrope ? window.getTodaysTrope() : null;
    const state = {
        correctAnswers: window.tropeoutGame.correctAnswers || [],
        attempts: window.tropeoutGame.attempts || 0,
        hintsUsed: window.tropeoutGame.hintsUsed || 0,
        gameComplete: window.tropeoutGame.gameComplete || false,
        currentTrope: currentTrope ? currentTrope.name : 'Unknown',
        alphaMode: localStorage.getItem('alpha_trope_index') !== null
    };
    
    console.log('Current Game State:', state);
    alert(`Game State:
    
Trope: ${state.currentTrope}
Alpha Mode: ${state.alphaMode}
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

console.log("Debug.js loaded successfully!");