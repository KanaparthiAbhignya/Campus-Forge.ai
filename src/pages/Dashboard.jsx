import { useNavigate } from 'react-router-dom';
import { Compass, Target, BookOpen, Mic, ArrowRight, ArrowDown, ClipboardCheck, PenTool } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Student"}');

  const tools = [
    { name: 'What If Simulator', path: '/simulator', icon: Compass, color: '#3b82f6', desc: 'Simulate and architect your future career path using data.' },
    { name: 'Skill Gap', path: '/skills', icon: Target, color: '#3b82f6', desc: 'Deep-dive analytical gap detection for modern roles.' },
    { name: 'Career Netflix', path: '/discover', icon: BookOpen, color: '#3b82f6', desc: 'Discover your passion through structured career exploration.' },
    { name: 'Find Courses', path: '/courses', icon: BookOpen, color: '#3b82f6', desc: 'Discover premium university-grade certifications.' },
    { name: 'Aptitude Test', path: '/test', icon: ClipboardCheck, color: '#3b82f6', desc: 'Discover your precise professional persona archetype.' },
    { name: 'Domain Mock Tests', path: '/mock-tests', icon: PenTool, color: '#3b82f6', desc: 'Rigorous 10-mark technical scenario assessments.' },
    { name: 'Voice Guide', path: '/voice', icon: Mic, color: '#3b82f6', desc: 'Consult with an AI professional career advisor.' },
  ];

  const scrollToFeatures = () => {
    document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white', letterSpacing: '-0.02em' }}>
          Career Forge.ai
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
          <div style={{ height: '1px', width: '40px', background: 'var(--accent-primary)' }}></div>
          <span style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Welcome back, <span style={{ color: 'white' }}>{user.name}</span></span>
          <div style={{ height: '1px', width: '40px', background: 'var(--accent-primary)' }}></div>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto 4rem auto', lineHeight: 1.7 }}>
          "Forge Your Future: AI-Powered Paths to Peak Potential" — Your executive suite for career intelligence and strategic growth.
        </p>
        
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-primary" onClick={() => navigate('/test')}>
            <ClipboardCheck size={20} /> Start Career Aptitude
          </button>
          <button className="btn-secondary" onClick={scrollToFeatures}>
            Explore Core Modules <ArrowDown size={18} />
          </button>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', animation: 'bounce 2s infinite', color: 'var(--text-muted)' }}>
          <ArrowDown size={28} />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Features Section */}
      <div id="features-section" style={{ paddingTop: '6rem' }}>
        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>Architecture Intelligence</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Data-driven tools to architect your professional future.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {tools.map((tool) => (
            <div 
              key={tool.name} 
              className="glass-panel" 
              style={{ padding: '2.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onClick={() => navigate(tool.path)}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                <tool.icon size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.75rem', color: 'white' }}>{tool.name}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', flex: 1, lineHeight: 1.6, fontSize: '1.05rem' }}>{tool.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, fontSize: '1rem' }}>
                Launch Intelligence <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
