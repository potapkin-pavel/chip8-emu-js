class Speaker {

  constructor() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    this.audioCtx = new AudioContext();
    
    // Create a gain, which will allow us to control the volume
    this.gain = this.audioCtx.createGain();
    this.finish = this.audioCtx.destination;

    // Connect the gain to the audio context
    this.gain.connect(this.finish);
  }

}

export default Speaker;