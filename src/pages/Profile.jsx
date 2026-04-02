import { useState } from 'react';
import { Mail, Briefcase, GraduationCap, MapPin, Award } from 'lucide-react';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Student", "email": "student@example.com"}');
  
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    location: 'Hyderabad, India',
    education: 'B.Tech CS / Arts',
    goal: 'Master of UI/UX',
    skills: 'Figma, Tailwind, React'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ name: profileData.name, email: profileData.email }));
    setIsEditing(false);
    window.dispatchEvent(new Event('storage')); // trigger updates if necessary, though simpler is to just reload state or let react handle it (here it's just visually updating)
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem', maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            My Profile
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your personal information and career goals.</p>
        </div>
        {!isEditing && (
          <button className="btn-primary" onClick={() => setIsEditing(true)} style={{ padding: '0.75rem 1.5rem', borderRadius: '30px' }}>
            Edit Profile
          </button>
        )}
      </header>

      <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px', background: 'var(--accent-gradient)', opacity: 0.2 }}></div>
        
        <div style={{ position: 'relative', display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '3rem', fontWeight: 'bold', border: '5px solid var(--bg-dark)', zIndex: 10, marginTop: '-20px' }}>
            {profileData.name.charAt(0)}
          </div>
          
          <div style={{ flex: '1 1 300px', zIndex: 10 }}>
            {isEditing ? (
              <form onSubmit={handleSave} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label className="form-label" style={{ marginBottom: '0.5rem' }}>Full Name</label>
                  <input type="text" className="form-input" value={profileData.name} onChange={e => setProfileData({...profileData, name: e.target.value})} required />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label className="form-label" style={{ marginBottom: '0.5rem' }}>Email Address</label>
                  <input type="email" className="form-input" value={profileData.email} onChange={e => setProfileData({...profileData, email: e.target.value})} required />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label className="form-label" style={{ marginBottom: '0.5rem' }}>Location</label>
                  <input type="text" className="form-input" value={profileData.location} onChange={e => setProfileData({...profileData, location: e.target.value})} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label className="form-label" style={{ marginBottom: '0.5rem' }}>Education</label>
                  <input type="text" className="form-input" value={profileData.education} onChange={e => setProfileData({...profileData, education: e.target.value})} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
                  <label className="form-label" style={{ marginBottom: '0.5rem' }}>Career Goal</label>
                  <input type="text" className="form-input" value={profileData.goal} onChange={e => setProfileData({...profileData, goal: e.target.value})} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
                  <label className="form-label" style={{ marginBottom: '0.5rem' }}>Current Skills (comma separated)</label>
                  <input type="text" className="form-input" value={profileData.skills} onChange={e => setProfileData({...profileData, skills: e.target.value})} />
                </div>
                
                <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button type="submit" className="btn-primary" style={{ padding: '0.75rem 2rem' }}>Save Changes</button>
                  <button type="button" className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </form>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{profileData.name}</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    <Mail size={16} /> {profileData.email}
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</p>
                        <p style={{ fontWeight: 500 }}>{profileData.location}</p>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}>
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Education</p>
                        <p style={{ fontWeight: 500 }}>{profileData.education}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: 'var(--warning)' }}>
                      <Briefcase size={20} />
                      <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Career Goal</h3>
                    </div>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{profileData.goal}</p>
                  </div>
                  
                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>
                      <Award size={20} />
                      <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>Current Skills</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {profileData.skills.split(',').map(s => (
                        <span key={s.trim()} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem' }}>
                          {s.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
