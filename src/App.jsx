import './App.css';
import * as Tone from "tone";
import Chords from './components/Chords';

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
  const cM = ["C4", "E4", "G4"];
  const cm = ["C4", "Eb4", "G4"];
  const caug =["C4", "E4", "G#4"];
  const cdim =["C4", "Eb4", "Gb4"];
  const csus4 = ["C4", "F4", "G4"];

  const dM = ["D4", "F#4", "A4"];
  const dm = ["D4", "F4", "A4"];
  const daug =["D4", "F4", "A#4"];
  const ddim =["D4", "F4", "Ab4"];
  const dsus4 = ["D4", "G4", "A4"];

  const eM = ["E4", "G#4", "B4"];
  const em = ["E4", "G4", "B4"];
  const eaug = ["E4", "G#4", "B#4"];
  const edim = ["E4", "G4", "Bb4"];
  const esus4 = ["E4", "A4", "B4"];

  const fM = ["F4", "A4", "C5"];
  const fm = ["F4", "Ab4", "C5"];
  const faug = ["F4", "A4", "C#5"];
  const fdim = ["F4", "Ab4", "B4"];
  const fsus4 = ["F4", "Bb4", "C5"];

  const gM = ["G4", "B4", "D5"];
  const gm = ["G4", "Bb4", "D5"];
  const gaug = ["G4", "B4", "D#5"];
  const gdim = ["G4", "Bb4", "Db5"];
  const gsus4 = ["G4", "C4", "D5"];

  const aM = ["A4", "C#5", "E5"];
  const am = ["A4", "C5", "E5"];
  const aaug = ["A4", "C#5", "E#5"];
  const adim = ["A4", "C5", "Eb5"];
  const asus4 = ["A4", "D5", "E5"];

  const bM = ["B3", "D#4", "F#4"];
  const bm = ["B3", "D4", "F#4"];
  const baug = ["B3", "D#4", "G4"];
  const bdim = ["B3", "D4", "F4"];
  const bsus4 = ["B3", "E4", "F#4"];

  return (
    <div>
      <h1>Hello, Music!</h1>
      <button onClick={playNote}>Click to play C E G!</button>
      <Chords chord={cM}/>
      <Chords chord={dM}/>
    </div>
  );
}

export default App;
