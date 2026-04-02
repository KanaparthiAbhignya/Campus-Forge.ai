import { useState } from 'react';
import { Search, MapPin, DollarSign, Clock, Filter, ExternalLink } from 'lucide-react';

const DUMMY_COURSES = [
  { id: 1, title: 'B.Tech in Computer Science', domain: 'Engineering', location: 'Offline - Hyderabad', fees: '₹4,00,000/yr', duration: '4 Years', institute: 'IIT Hyderabad', link: 'https://iith.ac.in' },
  { id: 2, title: 'Google UX Design Certificate', domain: 'Arts & Design', location: 'Online', fees: '₹1,200/mo', duration: '6 Months', institute: 'Coursera', link: 'https://www.coursera.org/professional-certificates/google-ux-design' },
  { id: 3, title: 'Master of Business Admin (MBA)', domain: 'Commerce', location: 'Offline - Mumbai', fees: '₹12,00,000/yr', duration: '2 Years', institute: 'IIM Mumbai', link: 'https://www.iimb.ac.in/' },
  { id: 4, title: 'Data Science Bootcamp', domain: 'Engineering', location: 'Hybrid - Bangalore', fees: '₹80,000', duration: '3 Months', institute: 'UpGrad', link: 'https://www.upgrad.com/' },
  { id: 5, title: 'Full Stack Web Development', domain: 'Engineering', location: 'Online', fees: 'Free', duration: '6 Months', institute: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/' },
  { id: 6, title: 'Digital Marketing Specialization', domain: 'Commerce', location: 'Online', fees: '₹3,500/mo', duration: '8 Months', institute: 'Coursera', link: 'https://www.coursera.org/specializations/digital-marketing' },
  { id: 7, title: 'B.Des in Product Design', domain: 'Arts & Design', location: 'Offline - Pune', fees: '₹3,00,000/yr', duration: '4 Years', institute: 'NID', link: 'https://www.nid.edu/' },
  { id: 8, title: 'AWS Certified Solutions Architect', domain: 'Engineering', location: 'Online', fees: '₹1,500/mo', duration: '3 Months', institute: 'Udemy', link: 'https://www.udemy.com/' },
  { id: 9, title: 'Graphic Design Masterclass', domain: 'Arts & Design', location: 'Online', fees: '₹455', duration: '30 Hours', institute: 'Udemy', link: 'https://www.udemy.com/' },
  { id: 10, title: 'Finance Fundamentals', domain: 'Commerce', location: 'Online', fees: 'Free', duration: '4 Weeks', institute: 'edX', link: 'https://www.edx.org/' },
];

export default function Courses() {
  const [search, setSearch] = useState('');
  const [filterDomain, setFilterDomain] = useState('All');

  const filtered = DUMMY_COURSES.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) && 
    (filterDomain === 'All' || c.domain === filterDomain)
  );

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Course Discovery
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Find courses that align with your career goals.</p>
      </header>

      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', position: 'relative' }}>
          <Search style={{ position: 'absolute', left: '16px', top: '14px', color: 'var(--text-secondary)' }} size={20} />
          <input 
            type="text" 
            className="form-input" 
            style={{ paddingLeft: '3rem' }} 
            placeholder="Search courses..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          <Filter color="var(--text-secondary)" size={20} style={{ flexShrink: 0 }} />
          {['All', 'Engineering', 'Arts & Design', 'Commerce'].map(domain => (
            <button 
              key={domain}
              onClick={() => setFilterDomain(domain)}
              className={filterDomain === domain ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filtered.map(course => (
          <div key={course.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', color: 'var(--text-secondary)' }}>
                {course.domain}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{course.title}</h3>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '1.5rem' }}>{course.institute}</p>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} /> <span>{course.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <DollarSign size={16} /> <span>{course.fees}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Clock size={16} /> <span>{course.duration}</span>
              </div>
            </div>
            
            <button onClick={() => window.open(course.link, '_blank')} className="btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>
              View Details <ExternalLink size={16} />
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: '3rem', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-secondary)' }}>
            No courses found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
