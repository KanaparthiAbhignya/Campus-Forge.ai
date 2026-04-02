import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Heart, Star, Briefcase, Bookmark, ChevronRight, X as CloseIcon, Target } from 'lucide-react';
import './CareerDiscover.css';

const careers = [
  { 
    id: 1, title: 'Product Manager', domain: 'Business & Tech', salary: '₹12L - ₹35L', demand: 'High', 
    desc: 'Lead product strategy, align teams, and deliver user value.',
    skills: ['Agile/Scrum', 'Data Analysis', 'User Psychology', 'Roadmapping'],
    roadmap: ['1. Get a Tech/Business degree', '2. Become a Business Analyst/Engineer', '3. Transition to Associate PM', '4. Lead cross-functional teams'],
    qualifications: 'Bachelors in CS or Business. MBA is a plus but not strictly required.'
  },
  { 
    id: 2, title: 'Cybersecurity Analyst', domain: 'IT & Security', salary: '₹6L - ₹20L', demand: 'Very High', 
    desc: 'Protect systems and networks from digital attacks.',
    skills: ['Network Security', 'Ethical Hacking', 'Risk Management', 'Linux'],
    roadmap: ['1. Learn Networking fundamentals', '2. Get CompTIA Security+', '3. Work in IT Support or SOC', '4. Specialize in Penetration Testing'],
    qualifications: 'Bachelors in IT or similar. Certifications like CISSP or CEH hold heavy weight.'
  },
  { 
    id: 3, title: 'Cloud Architect', domain: 'Engineering', salary: '₹15L - ₹40L', demand: 'High', 
    desc: 'Design and manage cloud computing infrastructure.',
    skills: ['AWS/Azure/GCP', 'Kubernetes', 'Terraform', 'System Design'],
    roadmap: ['1. Master Linux & Networking', '2. Become a Backend/DevOps Engineer', '3. Earn Cloud Certifications', '4. Transition to Architecture design'],
    qualifications: 'Bachelors in CS. Professional level AWS/Azure certifications are mandatory.'
  },
  { 
    id: 4, title: 'UI/UX Designer', domain: 'Design', salary: '₹5L - ₹15L', demand: 'High', 
    desc: 'Create intuitive, user-friendly interfaces and experiences.',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    roadmap: ['1. Learn Design Principles', '2. Master Figma & Prototyping', '3. Build a Portfolio of Case Studies', '4. Land Junior Design Role'],
    qualifications: 'Degree in HCI, Design, or self-taught with a spectacular portfolio.'
  },
  { 
    id: 5, title: 'Data Scientist', domain: 'Data', salary: '₹10L - ₹25L', demand: 'Very High', 
    desc: 'Analyze complex data to derive actionable business insights.',
    skills: ['Python', 'SQL', 'Machine Learning', 'Statistics'],
    roadmap: ['1. Master Statistics & Probability', '2. Learn Python & Pandas', '3. Understand Machine Learning Math', '4. Build predictive models portfolio'],
    qualifications: 'Masters or PhD in STEM preferred, or extensive project portfolio.'
  }
];

export default function CareerDiscover() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [savedCareers, setSavedCareers] = useState([]);
  const [viewState, setViewState] = useState('swipe'); // 'swipe' | 'saved'
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);

  const dragOffset = isDragging ? dragCurrent - dragStart : 0;
  const rotation = dragOffset * 0.05;

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX || (e.touches && e.touches[0].clientX) || 0);
    setDragCurrent(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setDragCurrent(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100; // Require 100px drag to count as swipe
    if (dragOffset < -threshold) {
      handleSwipe('left');
    } else if (dragOffset > threshold) {
      handleSwipe('right');
    } else {
      setDragStart(0);
      setDragCurrent(0); // Snap back into place
    }
  };

  const handleSwipe = (dir) => {
    if (dir === 'left') {
      setSavedCareers(prev => [...prev, careers[currentIndex]]);
    }
    
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setDirection(null);
      setDragStart(0);
      setDragCurrent(0);
    }, 400); 
  };

  const currentCareer = careers[currentIndex];

  const cardStyle = {
    width: '100%', 
    maxWidth: '450px', 
    position: 'relative', 
    overflow: 'hidden',
    transform: isDragging 
      ? `translateX(${dragOffset}px) rotate(${rotation}deg)` 
      : (direction === 'left' ? 'translateX(-150%) rotate(-15deg)' : direction === 'right' ? 'translateX(150%) rotate(15deg)' : 'translateX(0) rotate(0)'),
    transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease',
    cursor: isDragging ? 'grabbing' : 'grab',
    touchAction: 'none',
    opacity: direction ? 0 : 1
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem', minHeight: '100%', position: 'relative' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Career Netflix Mode
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Swipe left (or click heart) to save paths tailored to your interests.</p>
        </div>
        <button 
          onClick={() => setViewState(viewState === 'swipe' ? 'saved' : 'swipe')} 
          className={viewState === 'saved' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.75rem 1.5rem', borderRadius: '30px' }}
        >
          <Bookmark size={18} style={{ marginRight: '0.5rem' }} /> 
          {viewState === 'saved' ? 'Back to Discover' : `Saved Paths (${savedCareers.length})`}
        </button>
      </header>

      {viewState === 'swipe' && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          {currentIndex >= careers.length ? (
            <div className="glass-panel animate-fade-in" style={{ padding: '4rem 2rem', textAlign: 'center', width: '100%', maxWidth: '450px' }}>
              <Star size={64} color="var(--accent-primary)" style={{ margin: '0 auto 1.5rem auto' }} />
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>You're all caught up!</h2>
              <p style={{ color: 'var(--text-secondary)' }}>You saved {savedCareers.length} career paths.</p>
              <button className="btn-primary" style={{ marginTop: '2rem', width: '100%' }} onClick={() => setViewState('saved')}>View Saved Paths</button>
              <button className="btn-secondary" style={{ marginTop: '1rem', width: '100%', border: 'none' }} onClick={() => setCurrentIndex(0)}>Restart Swipe</button>
            </div>
          ) : (
            <div 
              className="glass-panel swipe-card" 
              style={cardStyle}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
              onTouchEnd={handlePointerUp}
            >
              <div style={{ pointerEvents: 'none' }}>
                <div style={{ height: '200px', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Briefcase size={80} color="white" opacity={0.8} />
                </div>
                
                <div style={{ padding: '0 2rem 1rem 2rem', textAlign: 'center' }}>
                  <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {currentCareer.domain}
                  </span>
                  <h2 style={{ fontSize: '2rem', margin: '1rem 0 0.5rem 0', color: 'var(--text-primary)' }}>{currentCareer.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{currentCareer.desc}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Salary</p>
                      <p style={{ fontWeight: 600, color: 'var(--success)' }}>{currentCareer.salary}</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Demand</p>
                      <p style={{ fontWeight: 600, color: 'var(--warning)' }}>{currentCareer.demand}</p>
                    </div>
                  </div>
                </div>
              </div>
                
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem 2rem 2rem 2rem' }}>
                <button 
                  onClick={() => handleSwipe('left')}
                  style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', border: '2px solid rgba(16, 185, 129, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)', cursor: 'pointer', transition: 'all 0.2s ease', zIndex: 10 }}
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Heart size={32} />
                </button>
                <button 
                  onClick={() => handleSwipe('right')}
                  style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--error)', cursor: 'pointer', transition: 'all 0.2s ease', zIndex: 10 }}
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <X size={32} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {viewState === 'saved' && (
        <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {savedCareers.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <Bookmark size={48} opacity={0.3} style={{ margin: '0 auto 1rem auto' }} />
              <h3>No saved paths yet.</h3>
              <p>Swipe left on careers you like in Discover mode to save them here!</p>
            </div>
          ) : (
             savedCareers.map((c, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{c.domain}</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{c.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{c.desc}</p>
                <button onClick={() => setSelectedCareerModal(c)} className="btn-secondary" style={{ width: '100%', justifyContent: 'space-between' }}>
                  View Full Roadmap <ChevronRight size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* Modal View rendered in completely top-level Document root using Portals */}
      {selectedCareerModal && createPortal(
        <div 
          onClick={() => setSelectedCareerModal(null)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} 
          className="animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="glass-panel" 
            style={{ width: '100%', maxWidth: '750px', maxHeight: '90vh', overflowY: 'auto', background: 'var(--bg-dark)', position: 'relative', padding: 0 }}
          >
            <button 
              onClick={() => setSelectedCareerModal(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', zIndex: 20 }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.5)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <CloseIcon size={20} />
            </button>
            
            <div style={{ padding: '3rem 2rem 2.5rem 2rem', background: 'var(--accent-gradient)', borderRadius: '20px 20px 0 0', position: 'relative' }}>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>{selectedCareerModal.domain}</span>
              <h2 style={{ fontSize: '3rem', color: 'white', margin: 0 }}>{selectedCareerModal.title}</h2>
            </div>
            
            <div style={{ padding: '2.5rem 2rem' }}>
              <section style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={20} /> Required Core Skills
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {selectedCareerModal.skills.map(s => (
                    <span key={s} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>{s}</span>
                  ))}
                </div>
              </section>

              <section style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Target size={20} /> Step-by-Step Roadmap
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {selectedCareerModal.roadmap.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', alignItems: 'center' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>{idx + 1}</div>
                      <p style={{ margin: 0, fontSize: '1.05rem' }}>{step.substring(2)}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Briefcase size={20} /> Essential Qualifications
                </h3>
                <p style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', lineHeight: 1.6, margin: 0 }}>
                  {selectedCareerModal.qualifications}
                </p>
              </section>
            </div>
          </div>
        </div>
      , document.body)}
    </div>
  );
}
