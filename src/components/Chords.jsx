import React from 'react'
import * as Tone from "tone";

const Chords = (chord) => {
  // Function for 和音
  const polySynth = new Tone.PolySynth().toDestination();
  const chordHere = chord["chord"];
  console.log(chord["chord"]);
  // const cM = ["C4", "E4", "G4"];

  const playChord = async () => {
      await Tone.start(); // これでブラウザに「音出していいよ」って言ってる
      console.log("audio for chord is ready", chordHere);
      polySynth.triggerAttackRelease(chordHere, "2n");
    };

  return (
    <div>
      <button onClick={playChord}>chord</button>
    </div>
  )
}

export default Chords
