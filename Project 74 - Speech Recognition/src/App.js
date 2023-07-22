import { createRoot } from "react-dom/client";

import { useRef } from "react";

import "./App.css";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  let inputRef = useRef(null);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!isMicrophoneAvailable) {
    // Render some fallback content
    alert("just allow it you idiot");
  }

  function copytext() {
    let inputEle = inputRef.current;
    inputEle.select();
    inputEle.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(transcript);
  }

  return (
    <>
      <div className="container">
        <div className="transcript" ref={inputRef}>
          {transcript}
        </div>
        <button
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
        >
          Start Listning
        </button>
        <button onClick={() => SpeechRecognition.stopListening()}>
          Stop Listning
        </button>
        <button onClick={() => resetTranscript()}>Reset</button>
        <button onClick={() => copytext()}>Copy</button>
      </div>
    </>
  );
};

createRoot(root).render(<App />);
