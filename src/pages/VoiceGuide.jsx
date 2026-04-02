import { useState } from 'react';
import { Mic, MicOff, Volume2, Globe } from 'lucide-react';
import './VoiceGuide.css';

export default function VoiceGuide() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [language, setLanguage] = useState('English');
  const [messages, setMessages] = useState([
    { text: "Hello! I am your AI career counselor. Click the microphone and speak.", isBot: true }
  ]);

  const toggleListen = () => {
    if (!isListening) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognition) {
        alert("Your browser does not support the Web Speech API. Please use Google Chrome.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = language === 'Hindi' ? 'hi-IN' : language === 'Telugu' ? 'te-IN' : 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setTranscript('Listening... Speak now!');
      };

      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        setMessages(prev => [...prev, { text, isBot: false }]);
        simulateResponse(text);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error(event.error);
        setTranscript('Error listening. Try again.');
        setIsListening(false);
      };

      recognition.start();
    } else {
      setIsListening(false);
    }
  };

  const simulateResponse = (userText) => {
    setTimeout(() => {
      let response = "";
      
      if (language === 'Hindi') {
        if (userText.toLowerCase().includes('mba') || userText.toLowerCase().includes('m.tech')) {
            response = "MBA aapko management roles ke liye tayyar karega, jabki M.Tech tech specialization ke liye behtar hai. Aapka interest kis taraf zyada hai?";
        } else {
            response = `Aapne "${userText}" ke bare mein pucha. Main is kshetra mein aage badhne ki sallah doonga.`;
        }
      } else if (language === 'Telugu') {
        if (userText.toLowerCase().includes('mba') || userText.toLowerCase().includes('m.tech')) {
            response = "MBA మిమ్మల్ని మేనేజ్‌మెంట్ పాత్రలకు సిద్ధం చేస్తుంది, అయితే M.Tech సాంకేతిక పాత్రలకు మంచిది. మీ ఆసక్తి దేనిపై ఎక్కువగా ఉంది?";
        } else {
            response = `మీరు "${userText}" గురించి అడిగారు. ఈ రంగంలో మీకు మంచి భవిష్యత్తు ఉంటుంది. ఇంకేమైనా తెలుసుకోవాలా?`;
        }
      } else {
        if (userText.toLowerCase().includes('mba') || userText.toLowerCase().includes('m.tech')) {
          response = "MBA will prepare you for management roles, whereas M.Tech is better for technical specialization. Where does your interest lie more?";
        } else {
          response = `You asked about "${userText}". Based on current industry trends, I highly encourage pursuing your interests. What specific skills do you already have?`;
        }
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1500);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Voice Counselor
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Talk to our AI counselor in your preferred language naturally.</p>
      </header>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div className="glass-panel" style={{ flex: '1 1 300px', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', minHeight: '400px' }}>
          <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
            {['English', 'Hindi', 'Telugu'].map(lang => (
              <button 
                key={lang}
                onClick={() => { setLanguage(lang); setMessages([{ text: `Language changed to ${lang}. Click mic to speak!`, isBot: true }]); setTranscript(''); }}
                className={language === lang ? 'btn-primary' : 'btn-secondary'}
                style={{ flex: 1, padding: '0.5rem' }}
              >
                <Globe size={16} /> {lang}
              </button>
            ))}
          </div>

          <div className={`mic-container ${isListening ? 'listening' : ''}`} onClick={toggleListen} style={{ cursor: 'pointer' }}>
            <div className="mic-outer-ring"></div>
            <div className="mic-inner-ring"></div>
            <div className="mic-button" style={{ background: isListening ? 'var(--error)' : 'var(--accent-gradient)' }}>
              {isListening ? <MicOff size={40} color="white" /> : <Mic size={40} color="white" />}
            </div>
          </div>
          
          <h3 style={{ color: isListening ? 'var(--accent-primary)' : 'var(--text-secondary)', textAlign: 'center', minHeight: '40px' }}>
            {transcript || 'Tap mic to speak'}
          </h3>
        </div>

        <div className="glass-panel" style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', height: '400px' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Volume2 color="var(--accent-primary)" />
            <h3 style={{ margin: 0 }}>Conversation ({language})</h3>
          </div>
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ 
                alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                background: msg.isBot ? 'rgba(255,255,255,0.1)' : 'var(--accent-gradient)',
                padding: '1rem 1.5rem',
                borderRadius: '16px',
                borderBottomLeftRadius: msg.isBot ? '4px' : '16px',
                borderBottomRightRadius: !msg.isBot ? '4px' : '16px',
                maxWidth: '80%',
                lineHeight: 1.5
              }}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
