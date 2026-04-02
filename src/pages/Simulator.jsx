import { useState } from 'react';
import { TrendingUp, Clock, Activity, ArrowRight } from 'lucide-react';

const careerData = {
  'data-science': { title: 'Data Science', salary: '₹10,00,000 - ₹25,00,000 / year', effort: 85, time: '8-12 Months', trend: '+24% growth expected' },
  'design': { title: 'UI/UX Design', salary: '₹5,00,000 - ₹15,00,000 / year', effort: 70, time: '6-8 Months', trend: '+15% growth expected' },
  'software': { title: 'Software Engineering', salary: '₹8,00,000 - ₹30,00,000 / year', effort: 90, time: '9-14 Months', trend: '+21% growth expected' },
  'product-manager': { title: 'Product Manager', salary: '₹12,00,000 - ₹35,00,000 / year', effort: 80, time: '10-18 Months', trend: '+18% growth expected' },
  'cybersecurity': { title: 'Cybersecurity Analyst', salary: '₹6,00,000 - ₹20,00,000 / year', effort: 95, time: '12-24 Months', trend: '+35% growth expected' },
  'digital-marketing': { title: 'Digital Marketing', salary: '₹4,00,000 - ₹12,00,000 / year', effort: 60, time: '3-6 Months', trend: '+20% growth expected' },
  'cloud-architect': { title: 'Cloud Architect', salary: '₹15,00,000 - ₹40,00,000 / year', effort: 92, time: '18-24 Months', trend: '+26% growth expected' },
  'game-dev': { title: 'Game Development', salary: '₹5,00,000 - ₹18,00,000 / year', effort: 88, time: '12-18 Months', trend: '+12% growth expected' },
  'ai-engineer': { title: 'AI/ML Engineer', salary: '₹18,00,000 - ₹50,00,000 / year', effort: 98, time: '16-24 Months', trend: '+45% growth expected' },
  'devops': { title: 'DevOps Engineer', salary: '₹10,00,000 - ₹28,00,000 / year', effort: 85, time: '9-15 Months', trend: '+28% growth expected' },
  'blockchain': { title: 'Blockchain Developer', salary: '₹12,00,000 - ₹35,00,000 / year', effort: 90, time: '10-16 Months', trend: '+22% growth expected' },
};

export default function Simulator() {
  const [selectedCareer, setSelectedCareer] = useState('data-science');
  const data = careerData[selectedCareer];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          "What If" Simulator
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Explore potential career paths and see what it takes to succeed.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', height: 'fit-content' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Choose Path</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '500px', overflowY: 'auto', paddingRight: '0.5rem' }}>
            {Object.keys(careerData).map(key => (
              <button
                key={key}
                onClick={() => setSelectedCareer(key)}
                className={selectedCareer === key ? 'btn-primary' : 'btn-secondary'}
                style={{ justifyContent: 'flex-start', width: '100%', padding: '0.75rem 1rem', ...(selectedCareer !== key && { background: 'rgba(0,0,0,0.2)' }) }}
              >
                {careerData[key].title}
                {selectedCareer === key && <ArrowRight size={18} style={{ marginLeft: 'auto' }} />}
              </button>
            ))}
          </div>
          <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '12px', border: '1px solid rgba(129, 140, 248, 0.2)' }}>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Did you know?</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>You can always switch your career path later. Many skills are transferable!</p>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem' }}>Simulation: {data.title}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                <TrendingUp size={24} />
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>Salary Range</h3>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--success)' }}>{data.salary}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{data.trend}</p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--warning)' }}>
                <Clock size={24} />
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>Time to Reach</h3>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>{data.time}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Based on 15 hrs/week study</p>
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-secondary)' }}>
                <Activity size={24} />
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem' }}>Required Effort Level</h3>
              </div>
              <span style={{ fontWeight: 600, color: 'var(--accent-secondary)' }}>{data.effort}/100</span>
            </div>
            
            <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ width: `${data.effort}%`, height: '100%', background: 'var(--accent-gradient)', borderRadius: '10px', transition: 'width 1s ease-in-out' }}></div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
              This path requires {data.effort > 80 ? 'high' : 'moderate'} dedication to master the necessary technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
