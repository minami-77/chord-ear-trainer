import './App.css';
import * as Tone from "tone";

function App() {
  // 単音
  const synth = new Tone.Synth().toDestination();
  const playNote = async () => {
    await Tone.start(); // これでブラウザに「音出していいよ」って言ってる
    console.log("audio for note is ready");
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now);
    synth.triggerAttackRelease("E4", "8n", now + 0.5);
    synth.triggerAttackRelease("G4", "8n", now + 1);
  }

    // 和音
    const c = ["C4", "E4", "G4"];
    const cm = ["C4", "Eb4", "G4"];
    const caug =["C4", "E4", "G#4"];
    const cdim =["C4", "Eb4", "Gb4"];
    const csus4 = ["C4", "F4", "G4"];

    const d = ["D4", "F#4", "A4"];
    const dm = ["C4", "Eb4", "G4"];
    const daug =["C4", "E4", "G#4"];
    const ddim =["C4", "Eb4", "Gb4"];
    const dsus4 = ["C4", "F4", "G4"];



  const polySynth = new Tone.PolySynth().toDestination();
  const playChord = async () => {
    await Tone.start(); // これでブラウザに「音出していいよ」って言ってる
    console.log("audio for chord is ready");
    polySynth.triggerAttackRelease(c, "2n");
  };

  return (
    <div>
      <h1>Hello, Music!</h1>
      <button onClick={playNote}>Click to play C E G!</button>
      <button onClick={playChord}>C Major</button>
    </div>
  );
}

export default App;
