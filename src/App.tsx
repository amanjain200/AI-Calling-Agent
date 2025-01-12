import { useState, useRef, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  // const [agentResponse, setAgentResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [callStarted, setCallStarted] = useState(false)
  const textRef = useRef('');

  const apiUrl = import.meta.env.VITE_BACKENDURL;

  const sendToServer = async () => {
    if(textRef.current === '' || textRef.current.length <= 1){
      console.log('empty text');
      return;
    }

    const response = await axios.post(
      `${apiUrl}`, {prompt: textRef.current}, { responseType: "blob",
        withCredentials: true,
       });
    console.log("response: " + response);
    // Convert Blob to an Object URL
    const audioBlob = new Blob([response.data], { type: "audio/wav" });
    const audioURL = URL.createObjectURL(audioBlob);

    // Play the audio
    const audio = new Audio(audioURL);
    await audio.play();
    textRef.current = '';
    // Optional: Revoke the URL after playback to release memory
    audio.onended = () => {
      URL.revokeObjectURL(audioURL);
      console.log("after resetting" + textRef.current);
      startListening();
      console.log("starting to listen again");
    }
  }
 
  const startCallHandler = () => {
    // connectToServer();
    setCallStarted(true);
    startListening();
  }

  const endCallHandler = () => {
    setCallStarted(false);
    setIsRecording(false);
    recognition.stop();
  }

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recog = new (window as any).webkitSpeechRecognition();
      recog.lang = 'en-US';
      recog.interimResults = true;
      recog.continuous = true;
      recog.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join('');
          textRef.current = transcript;
          console.log("current text value after listening....." + textRef.current)
      };
      setRecognition(recog);
    }
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsRecording(true);
      setTimeout(() => {
        stopListening();
      }, 7000);
      console.log("starting to listen with " + textRef.current);
      console.log("startListening function");
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
      sendToServer();
      console.log("stopListening function");
      console.log("the text is" + textRef.current);
    }
  };

  

  return (
    <>
      <div className="heading">
        <img className='headingImg' src="src\assets\call-center-agent(1).png" alt="" />
        <h1>Talk with our Sales Agent 📞</h1>
      </div>
      

      {!callStarted && <button onClick={startCallHandler}>
        Start Call 📞
      </button>}
  
      {callStarted && <button
          onClick={isRecording ? stopListening : startListening}
        >
          {isRecording ? "Click to Stop Speaking" : "Start Speaking"}
        </button>}

        {callStarted && <p>YOU🗣️: {textRef.current}</p>}

        {callStarted && <div>
          {/* {isRecording && <h1>Call Started...</h1>} */}
          <button onClick={endCallHandler}>
            End Call ☎️
          </button>
        </div>}


    </>
  )
}

export default App
