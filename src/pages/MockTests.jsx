import { useState } from 'react';
import { mockDomains } from '../data/mockTestsData';
import { PenTool, CheckCircle, XCircle, ArrowRight, ArrowLeft, RefreshCw, Award } from 'lucide-react';

export default function MockTests() {
  console.log('Successfully Mounted Mock Tests Module');
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const activeTest = mockDomains.find(d => d.id === selectedDomain);

  const handleSelectAnswer = (optIndex) => {
    setAnswers({ ...answers, [currentQ]: optIndex });
  };

  const handleNext = () => {
    if (currentQ < 9) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    let wrong = [];
    activeTest.questions.forEach((q, i) => {
      if (answers[i] === q.ans) {
        score += 1;
      } else {
        wrong.push({ index: i, question: q, userAnswer: answers[i] });
      }
    });
    return { score, wrong };
  };

  const resetTest = () => {
    setSelectedDomain(null);
    setCurrentQ(0);
    setAnswers({});
    setShowResults(false);
  };

  if (!selectedDomain) {
    return (
      <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <PenTool size={48} /> Certification Mock Tests
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Challenge yourself with 10-mark rigorous exams comprising 5 Beginner and 5 Advanced Domain MCQs mapped exactly to industry standards.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {mockDomains.map(domain => (
            <div key={domain.id} className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', cursor: 'pointer' }}
              onClick={() => setSelectedDomain(domain.id)}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{domain.name}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>{domain.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ background: 'rgba(14, 165, 233, 0.2)', color: 'var(--accent-primary)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.95rem', fontWeight: 'bold' }}>10 Questions</span>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Start Exam <ArrowRight size={18} /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (showResults) {
    const { score, wrong } = calculateScore();
    return (
      <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '4rem 3rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto', marginBottom: '3rem' }}>
          <Award size={80} color={score >= 8 ? "var(--success)" : score >= 5 ? "var(--warning)" : "var(--error)"} style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{activeTest.name} Exam Results</h2>
          <h1 style={{ fontSize: '5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>{score} <span style={{ fontSize: '2.5rem', color: 'var(--text-secondary)' }}>/ 10</span></h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
            {score >= 8 ? "Outstanding performance! You are deeply proficient." : score >= 5 ? "Good effort! Review the incorrect answers below to master your domain." : "Keep studying! Use the detailed explanations below to understand your gaps."}
          </p>
          <button className="btn-secondary" onClick={resetTest} style={{ margin: '0 auto', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            <RefreshCw size={20} style={{ marginRight: '10px' }} /> Return to Domains
          </button>
        </div>

        {wrong.length > 0 && (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--error)' }}>
              <XCircle size={28} /> Incorrect Answers Breakdown
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {wrong.map((w, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '2.5rem', borderLeft: '4px solid var(--error)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Question {w.index + 1} {w.index < 5 ? "(Beginner)" : "(Advanced)"}</span>
                  </div>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: 1.5 }}>{w.question.q}</h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ padding: '1.25rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', color: 'var(--error)' }}>
                      <strong>Your Answer:</strong> {w.userAnswer !== undefined ? w.question.opts[w.userAnswer] : "Skipped / No Answer"}
                    </div>
                    <div style={{ padding: '1.25rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', color: 'var(--success)' }}>
                      <strong>Correct Answer:</strong> {w.question.opts[w.question.ans]}
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    <h5 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Explanation:</h5>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '1.05rem' }}>{w.question.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const q = activeTest.questions[currentQ];
  const isBeginner = currentQ < 5;

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{activeTest.name}</h2>
          <span style={{ background: isBeginner ? 'var(--success)' : 'var(--error)', color: 'white', padding: '0.4rem 1rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 'bold' }}>
            {isBeginner ? 'LEVEL 1: BEGINNER' : 'LEVEL 2: ADVANCED'}
          </span>
        </div>
        <button onClick={resetTest} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
           Exit Exam <XCircle size={20} />
        </button>
      </header>

      <div className="glass-panel" style={{ padding: '3.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
          <span>Question {currentQ + 1} of 10</span>
          <span>{10 - currentQ - 1} Remaining</span>
        </div>
        
        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '3rem', overflow: 'hidden' }}>
          <div style={{ width: `${((currentQ + 1) / 10) * 100}%`, height: '100%', background: 'var(--accent-gradient)', transition: 'width 0.3s ease' }}></div>
        </div>

        <h2 style={{ fontSize: '1.8rem', lineHeight: 1.5, marginBottom: '3.5rem', color: 'var(--text-primary)' }}>{q.q}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
          {q.opts.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelectAnswer(i)}
              style={{
                width: '100%',
                padding: '1.5rem 2rem',
                textAlign: 'left',
                background: answers[currentQ] === i ? 'rgba(14, 165, 233, 0.2)' : 'rgba(0,0,0,0.2)',
                border: answers[currentQ] === i ? '2px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                borderRadius: '16px',
                color: 'var(--text-primary)',
                fontSize: '1.15rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: answers[currentQ] === i ? '8px solid var(--accent-primary)' : '2px solid var(--text-secondary)', transition: 'all 0.2s', flexShrink: 0 }}></div>
              <span style={{ lineHeight: 1.5 }}>{opt}</span>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4rem' }}>
          <button className="btn-secondary" onClick={handlePrev} disabled={currentQ === 0} style={{ opacity: currentQ === 0 ? 0 : 1, padding: '1rem 2rem' }}>
            <ArrowLeft size={20} style={{ marginRight: '10px' }} /> Previous
          </button>
          <button className="btn-primary" onClick={handleNext} disabled={answers[currentQ] === undefined} style={{ padding: '1rem 2rem' }}>
            {currentQ === 9 ? 'Submit Exam' : 'Next Question'} <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
