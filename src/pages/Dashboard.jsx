import { useNavigate } from 'react-router-dom';
import { Compass, Target, BookOpen, Mic, ArrowRight, ArrowDown, ClipboardCheck, PenTool } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Student"}');

  const tools = [
    { name: 'What If Simulator', path: '/simulator', icon: Compass, color: '#0ea5e9', desc: 'Simulate your future career path.' },
    { name: 'Skill Gap', path: '/skills', icon: Target, color: '#10b981', desc: 'Find what you are missing.' },
    { name: 'Career Netflix', path: '/discover', icon: BookOpen, color: '#06b6d4', desc: 'Swipe and discover your passion.' },
    { name: 'Find Courses', path: '/courses', icon: BookOpen, color: '#3b82f6', desc: 'Search top courses globally.' },
    { name: 'Aptitude Test', path: '/test', icon: ClipboardCheck, color: '#ec4899', desc: 'Discover your matching career persona.' },
    { name: 'Domain Mock Tests', path: '/mock-tests', icon: PenTool, color: '#f43f5e', desc: 'Take 10-question domain specific exams.' },

    { name: 'Voice Guide', path: '/voice', icon: Mic, color: '#8b5cf6', desc: 'Talk to an AI Counselor.' },
  ];

  const scrollToFeatures = () => {
    document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
      
      {/* Hero Section */}
      <div style={{ height: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: 1.1 }}>
          Career Forge.ai<br />
          <span style={{ fontSize: '2.5rem', color: 'var(--text-secondary)' }}>Welcome back, <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{user.name}</span></span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.6, fontWeight: 500 }}>
          "Forge Your Future: AI-Powered Paths to Peak Potential"
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-secondary" onClick={() => navigate('/test')} style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '30px' }}>
            <ClipboardCheck size={20} style={{ marginRight: '10px' }} /> Start Career Test
          </button>
          <button className="btn-secondary" onClick={scrollToFeatures} style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '30px' }}>
            Explore Features <ArrowDown style={{ marginLeft: '10px' }} />
          </button>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', animation: 'bounce 2s infinite' }}>
          <ArrowDown color="var(--text-secondary)" size={32} />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Features Section */}
      <div id="features-section" style={{ paddingTop: '5rem', minHeight: '100vh' }}>
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Core Modules</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Select a tool below to get started.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {tools.map((tool) => (
            <div 
              key={tool.name} 
              className="glass-panel" 
              style={{ padding: '2rem', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}
              onClick={() => navigate(tool.path)}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${tool.color}33`; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--glass-shadow)'; }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: `${tool.color}22`, color: tool.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <tool.icon size={32} />
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{tool.name}</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1 }}>{tool.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: tool.color, fontWeight: 500, alignSelf: 'flex-start' }}>
                Explore <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
