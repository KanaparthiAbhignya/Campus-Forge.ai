import { useState } from 'react';
import { Target, CheckCircle2, XCircle, Search, Book, GraduationCap, ArrowRight, ListChecks, UploadCloud, Loader2, Sparkles, Clock } from 'lucide-react';

const careerRequirements = {
  'data scientist': ['Python', 'SQL', 'Machine Learning', 'Statistics', 'Data Visualization', 'Deep Learning'],
  'software engineer': ['Data Structures', 'Algorithms', 'System Design', 'Git', 'Databases', 'Backend Development'],
  'full stack': ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases', 'API Design'],
  'ui/ux': ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Color Theory', 'Interaction Design'],
  'product manager': ['Agile/Scrum', 'Data Analysis', 'User Psychology', 'Roadmapping', 'A/B Testing', 'Stakeholder Management'],
};

const API_KEY = "AIzaSyCa8m8RzEH1XY7lH-AhGPNGZ8k6S2sgWK0";

export default function SkillGap() {
  const [inputMode, setInputMode] = useState('manual');
  const [query, setQuery] = useState('');
  const [currentSkills, setCurrentSkills] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  
  const [analyzed, setAnalyzed] = useState(false);
  const [isAnalyzingAI, setIsAnalyzingAI] = useState(false);
  const [results, setResults] = useState({ mode: 'manual', strengths: [], missing: [], path: [], insight: '' });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
    } else if (file) {
      alert("Please upload a valid PDF document to utilize the AI Parser.");
      e.target.value = null;
    }
  };

  const executeManualAnalysis = (e) => {
    e.preventDefault();
    if (!query.trim() || !currentSkills.trim()) return;
    
    const targetCareer = query.toLowerCase();
    let requiredSkills = ['Communication', 'Analytical Thinking', 'Problem Solving', 'Project Management', 'Technical Writing'];
    
    for (const [key, value] of Object.entries(careerRequirements)) {
      if (targetCareer.includes(key)) {
        requiredSkills = value;
        break;
      }
    }

    const userSkillsArr = currentSkills.split(',').map(s => s.trim()).filter(Boolean);
    const userSkillsLower = userSkillsArr.map(s => s.toLowerCase());

    const missing = requiredSkills.filter(reqSkill => 
      !userSkillsLower.some(us => reqSkill.toLowerCase().includes(us) || us.includes(reqSkill.toLowerCase()))
    );

    const strengths = userSkillsArr;

    const path = [];
    if (missing.length > 0) {
      path.push({
        step: `Phase 1: Foundation`,
        desc: `Start by mastering ${missing[0]}. This is the most critical missing skill for ${query}.`,
        link: `https://www.coursera.org/search?query=${encodeURIComponent(missing[0])}`
      });
    }
    if (missing.length > 1) {
      path.push({
        step: `Phase 2: Practical Application`,
        desc: `Apply your knowledge by completing projects focusing heavily on ${missing[1]}.`,
        link: `https://www.udemy.com/courses/search/?q=${encodeURIComponent(missing[1])}`
      });
    }
    if (missing.length > 2) {
      path.push({
        step: `Phase 3: Advanced Specialization`,
        desc: `Finalize your technical stack by learning ${missing[2]} to become highly competitive in interviews.`,
        link: `https://www.edx.org/search?q=${encodeURIComponent(missing[2])}`
      });
    }
    
    if (path.length === 0) {
      path.push({
        step: `Apply for Jobs`,
        desc: `You already have the core skills for this role! Start networking and applying immediately.`,
        link: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(query)}`
      });
    }

    setResults({ mode: 'manual', strengths, missing, path });
    setAnalyzed(true);
  };

  const executeAIAnalysis = async (e) => {
    e.preventDefault();
    if (!query.trim() || !resumeFile) return;

    setIsAnalyzingAI(true);
    try {
      const base64Data = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result.replace('data:application/pdf;base64,', '');
          resolve(base64String);
        };
        reader.readAsDataURL(resumeFile);
      });

      const promptText = `
        You are an elite Silicon Valley AI Career Counselor and Senior Recruiter. Analyze this uploaded resume explicitly against the target career: "${query}".
        I want an extremely deep, modern analysis that provides vastly more detailed structural context than a basic keyword check.
        Specifically identify exactly:
        1. An 'insight': A 2-3 sentence overarching market insight detailing exactly where my resume stands competitively against modern industry expectations for this specific role.
        2. My 'strengths': The current skills I possess that perfectly match modern frameworks, explaining concisely how I proved them via my resume formatting.
        3. The 'missing' skills: What advanced, cutting-edge modern skills I am completely missing for this role, explaining why the industry demands them now.
        4. A 'path': A tailored 3-step learning path to aggressively acquire these precise high-end missing skills, estimating a realistic 'timeframe' for each step aggressively.
        
        Respond ABSOLUTELY STRICTLY in the exact following JSON format with no markdown blocks outside it:
        {
          "insight": "Your resume shows a strong legacy foundation natively, however the market aggressively demands specific modern cloud logic scaling...",
          "strengths": [
            { "skill": "Native React Execution", "context": "Proven structurally through your XYZ project architecture." }
          ],
          "missing": [
            { "skill": "Next.js & SSR Pipelines", "reason": "Modern engineering teams explicitly require Server-Side Rendering workflows to survive scalability requirements natively." }
          ],
          "path": [
            { "step": "Master Advanced Architectures", "desc": "Focus entirely on deploying rendering frameworks utilizing specific modules natively.", "timeframe": "4 weeks", "link": "https://coursera.org/search?query=Next.js" }
          ]
        }
      `;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: promptText },
                { inlineData: { mimeType: "application/pdf", data: base64Data } }
              ]
            }
          ],
          generationConfig: { responseMimeType: "application/json" }
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      let resultText = data.candidates[0].content.parts[0].text;
      resultText = resultText.replace(/```json/gi, '').replace(/```/g, '').trim();
      const resultJSON = JSON.parse(resultText);

      setResults({
        mode: 'ai',
        insight: resultJSON.insight || "Your resume has been successfully scanned against market baselines.",
        strengths: resultJSON.strengths || [],
        missing: resultJSON.missing || [],
        path: resultJSON.path || [],
        error: null
      });
      setAnalyzed(true);
    } catch (err) {
      console.error("AI Analysis Failed:", err);
      setResults({ mode: 'ai', error: err.message, strengths: [], missing: [], path: [] });
      setAnalyzed(true);
    } finally {
      setIsAnalyzingAI(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          AI Skill Gap Detector
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Upload your resume or manually compare your current skills against your dream career to precisely find what's missing.</p>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button 
           type="button"
           onClick={() => { setInputMode('manual'); setAnalyzed(false); }}
           style={{ padding: '0.8rem 2rem', borderRadius: '30px', background: inputMode === 'manual' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)', color: inputMode === 'manual' ? 'white' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          Manual Entry
        </button>
        <button 
           type="button"
           onClick={() => { setInputMode('resume'); setAnalyzed(false); }}
           style={{ padding: '0.8rem 2rem', borderRadius: '30px', background: inputMode === 'resume' ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.05)', color: inputMode === 'resume' ? 'white' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}>
          <UploadCloud size={18} /> AI Resume Upload
        </button>
      </div>

      <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ position: 'relative' }}>
            <label className="form-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Target Career</label>
            <div style={{ position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '16px', top: '14px', color: 'var(--text-secondary)' }} size={20} />
              <input 
                type="text" 
                className="form-input" 
                style={{ fontSize: '1.1rem', padding: '1rem 1rem 1rem 3.5rem' }} 
                placeholder="E.g., Senior Operations Executive" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
            </div>
          </div>

          {inputMode === 'manual' ? (
            <div style={{ position: 'relative' }}>
              <label className="form-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Your Current Skills (comma separated)</label>
              <div style={{ position: 'relative' }}>
                <ListChecks style={{ position: 'absolute', left: '16px', top: '14px', color: 'var(--text-secondary)' }} size={20} />
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ fontSize: '1.1rem', padding: '1rem 1rem 1rem 3.5rem' }} 
                  placeholder="E.g., Project Management, Node.js, Public Speaking" 
                  value={currentSkills}
                  onChange={(e) => setCurrentSkills(e.target.value)}
                  required
                />
              </div>
            </div>
          ) : (
            <div style={{ position: 'relative' }}>
              <label className="form-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Upload Real-World Resume (.pdf only)</label>
              <div style={{ position: 'relative', border: '2px dashed var(--glass-border)', padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', background: 'rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}>
                <UploadCloud size={50} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
                <input 
                  type="file" 
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  style={{ display: 'block', margin: '0 auto', color: 'var(--text-secondary)', cursor: 'pointer', maxWidth: '300px' }}
                />
                {resumeFile && <div style={{ color: 'var(--success)', marginTop: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><CheckCircle2 size={18} /> {resumeFile.name} correctly attached.</div>}
              </div>
            </div>
          )}

          {inputMode === 'manual' ? (
            <button type="button" onClick={executeManualAnalysis} className="btn-primary" style={{ padding: '1rem 2.5rem', alignSelf: 'flex-start', fontSize: '1.1rem' }}>
              Analyze Gap Manually
            </button>
          ) : (
            <button type="button" onClick={executeAIAnalysis} disabled={isAnalyzingAI || !resumeFile || !query} className="btn-primary" style={{ padding: '1rem 2.5rem', alignSelf: 'flex-start', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: (isAnalyzingAI || !resumeFile || !query) ? 0.5 : 1 }}>
              {isAnalyzingAI ? <Loader2 className="animate-spin" size={24} /> : <Sparkles size={24} />}
              {isAnalyzingAI ? 'Scanning Advanced Dependencies...' : 'Analyze Deep Resume'}
            </button>
          )}

        </form>
      </div>

      {analyzed && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="animate-fade-in">
          
          {results.error && (
             <div className="glass-panel animate-fade-in" style={{ padding: '2.5rem', gridColumn: '1 / -1', marginBottom: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--error)' }}>
               <h2 style={{ color: 'var(--error)', marginBottom: '1rem' }}>Analysis Failed</h2>
               <p style={{ color: 'white', opacity: 0.8 }}>{results.error}</p>
             </div>
          )}

          {!results.error && results.mode === 'ai' && results.insight && (
            <div className="glass-panel animate-fade-in" style={{ padding: '2.5rem', gridColumn: '1 / -1', marginBottom: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid var(--accent-primary)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1, color: 'var(--accent-primary)' }}><Sparkles size={180} /></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ padding: '1.2rem', background: 'var(--accent-gradient)', borderRadius: '50%', color: 'white', flexShrink: 0 }}>
                  <Sparkles size={32} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '0.75rem', letterSpacing: '0.5px' }}>Executive Market Insight</h2>
                  <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                    {results.insight}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Strengths */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--success)' }}>
              <CheckCircle2 size={28} />
              <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>Validated Competencies</h2>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: 0, padding: 0 }}>
              {results.strengths.length > 0 ? results.strengths.map((item, i) => (
                results.mode === 'ai' ? (
                  <li key={i} style={{ background: 'rgba(16, 185, 129, 0.05)', borderLeft: '4px solid var(--success)', padding: '1.5rem', borderRadius: '0 12px 12px 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 'bold', color: 'white', fontSize: '1.2rem' }}>
                      {item.skill}
                    </div>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.5 }}>{item.context}</span>
                  </li>
                ) : (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '12px' }}>
                    <CheckCircle2 size={16} color="var(--success)" /> {item}
                  </li>
                )
              )) : (
                <li style={{ color: 'var(--text-secondary)' }}>No strengths identified strongly matching this role. Keep evaluating!</li>
              )}
            </ul>
          </div>

          {/* Missing Skills */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--error)' }}>
              <XCircle size={28} />
              <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>Critical Missing Proficiencies</h2>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: 0, padding: 0 }}>
              {results.missing.length > 0 ? results.missing.map((item, i) => (
                results.mode === 'ai' ? (
                  <li key={i} style={{ background: 'rgba(239, 68, 68, 0.05)', borderLeft: '4px solid var(--error)', padding: '1.5rem', borderRadius: '0 12px 12px 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>{item.skill}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.5 }}>{item.reason}</span>
                  </li>
                ) : (
                  <li key={i} style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{item}</span>
                  </li>
                )
              )) : (
                <li style={{ color: 'var(--success)', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px' }}>You possess the absolute native architecture mapped to this title perfectly!</li>
              )}
            </ul>
          </div>

          {/* Learning Path */}
          {results.path.length > 0 && (
            <div className="glass-panel" style={{ padding: '2.5rem', gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--accent-primary)' }}>
                <GraduationCap size={32} />
                <h2 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.8rem' }}>Strategic Expansion Roadmap</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {results.path.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1.5rem', background: 'rgba(0,0,0,0.3)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)', position: 'relative' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.3rem', flexShrink: 0, color: 'white' }}>{idx + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'white', margin: 0 }}>{item.step}</h3>
                        {item.timeframe && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-secondary)', fontSize: '0.95rem', fontWeight: 'bold', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
                            <Clock size={14} /> Expected: {item.timeframe}
                          </span>
                        )}
                      </div>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '1.1rem' }}>{item.desc}</p>
                      <button onClick={() => window.open(item.link, '_blank')} className="btn-secondary" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
                        <Book size={18} style={{ marginRight: '0.5rem' }} /> Begin Certification Phase <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
