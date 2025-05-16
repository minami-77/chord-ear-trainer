import React from 'react'
import * as Tone from "tone";

const chords = () => {
  // 白鍵 3和音
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

  const gM = [];
  const gm = [];
  const gaug = [];
  const gdim = [];
  const gsus4 = [];

  const aM = [];
  const am = [];
  const aaug = [];
  const adim = [];
  const asus4 = [];

  const bM = [];
  const bm = [];
  const baug = [];
  const bdim = [];
  const bsus4 = [];

  // Function for 和音
  const polySynth = new Tone.PolySynth().toDestination();
  const playChord = async () => {
      await Tone.start(); // これでブラウザに「音出していいよ」って言ってる
      console.log("audio for chord is ready");
      polySynth.triggerAttackRelease(cM, "2n");
    };

  return (
    <div>
      <button onClick={playChord}>C Major</button>
    </div>
  )
}

export default chords
