class AudioManager {
  constructor() {
    this.audioContext = null;
    this.sounds = {};
    this.enabled = true;
    this.volume = 0.3;
    this.init();
  }

  async init() {
    try {
      // Initialize Web Audio API
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create sounds using oscillators (no external files needed)
      this.createSounds();
    } catch (error) {
      console.warn('Audio not supported:', error);
      this.enabled = false;
    }
  }

  createSounds() {
    // Victory sound - triumphant chord progression
    this.sounds.victory = () => this.playVictorySound();
    
    // Defeat sound - descending minor chord
    this.sounds.defeat = () => this.playDefeatSound();
    
    // Correct guess - pleasant ding
    this.sounds.correct = () => this.playCorrectSound();
    
    // Wrong guess - subtle buzz
    this.sounds.wrong = () => this.playWrongSound();
  }

  async playVictorySound() {
    if (!this.enabled || !this.audioContext) return;

    const now = this.audioContext.currentTime;
    
    // Play ascending major chord (C-E-G-C)
    const frequencies = [261.63, 329.63, 392.00, 523.25];
    
    frequencies.forEach((freq, index) => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.setValueAtTime(freq, now);
      oscillator.type = 'sine';
      
      // Staggered start times for arpeggio effect
      const startTime = now + (index * 0.1);
      const endTime = startTime + 0.8;
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(this.volume * 0.6, startTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, endTime);
      
      oscillator.start(startTime);
      oscillator.stop(endTime);
    });
  }

  async playDefeatSound() {
    if (!this.enabled || !this.audioContext) return;

    const now = this.audioContext.currentTime;
    
    // Play descending minor chord (A-C-E-A)
    const frequencies = [440.00, 261.63, 329.63, 220.00];
    
    frequencies.forEach((freq, index) => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.frequency.setValueAtTime(freq, now);
      oscillator.type = 'sawtooth';
      
      const startTime = now + (index * 0.15);
      const endTime = startTime + 1.0;
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(this.volume * 0.4, startTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.001, endTime);
      
      oscillator.start(startTime);
      oscillator.stop(endTime);
    });
  }

  async playCorrectSound() {
    if (!this.enabled || !this.audioContext) return;

    const now = this.audioContext.currentTime;
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    // Pleasant upward sweep
    oscillator.frequency.setValueAtTime(400, now);
    oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.2);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(this.volume * 0.5, now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    
    oscillator.start(now);
    oscillator.stop(now + 0.3);
  }

  async playWrongSound() {
    if (!this.enabled || !this.audioContext) return;

    const now = this.audioContext.currentTime;
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    // Subtle downward buzz
    oscillator.frequency.setValueAtTime(300, now);
    oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.15);
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    
    oscillator.start(now);
    oscillator.stop(now + 0.2);
  }

  // Resume audio context (required for user interaction)
  async resumeAudio() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

// Create global audio manager instance
const audioManager = new AudioManager();