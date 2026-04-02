import { useState } from 'react';
import { Search, MapPin, DollarSign, Clock, Filter, ExternalLink, Award, Shield, BookOpen } from 'lucide-react';

const DUMMY_COURSES = [
  { id: 1, title: 'B.Tech in Computer Science', domain: 'Engineering', location: 'Offline - Hyderabad', fees: '₹4,00,000/yr', duration: '4 Years', institute: 'IIT Hyderabad', link: 'https://iith.ac.in', isFree: false },
  { id: 2, title: 'Google UX Design Certificate', domain: 'Arts & Design', location: 'Online', fees: '₹1,200/mo', duration: '6 Months', institute: 'Coursera', link: 'https://www.coursera.org/professional-certificates/google-ux-design', isFree: false },
  { id: 3, title: 'Master of Business Admin (MBA)', domain: 'Commerce', location: 'Offline - Mumbai', fees: '₹12,00,000/yr', duration: '2 Years', institute: 'IIM Mumbai', link: 'https://www.iimb.ac.in/', isFree: false },
  { id: 4, title: 'Data Science Bootcamp', domain: 'Engineering', location: 'Hybrid - Bangalore', fees: '₹80,000', duration: '3 Months', institute: 'UpGrad', link: 'https://www.upgrad.com/', isFree: false },
  { id: 5, title: 'Full Stack Web Development', domain: 'Engineering', location: 'Online', fees: 'Free', duration: '6 Months', institute: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/', isFree: true },
  { id: 6, title: 'Digital Marketing Specialization', domain: 'Commerce', location: 'Online', fees: '₹3,500/mo', duration: '8 Months', institute: 'Coursera', link: 'https://www.coursera.org/specializations/digital-marketing', isFree: false },
  { id: 7, title: 'B.Des in Product Design', domain: 'Arts & Design', location: 'Offline - Pune', fees: '₹3,00,000/yr', duration: '4 Years', institute: 'NID', link: 'https://www.nid.edu/', isFree: false },
  { id: 8, title: 'AWS Certified Solutions Architect', domain: 'Engineering', location: 'Online', fees: '₹1,500/mo', duration: '3 Months', institute: 'Udemy', link: 'https://www.udemy.com/', isFree: false },
  { id: 9, title: 'Graphic Design Masterclass', domain: 'Arts & Design', location: 'Online', fees: '₹455', duration: '30 Hours', institute: 'Udemy', link: 'https://www.udemy.com/', isFree: false },
  { id: 10, title: 'Finance Fundamentals', domain: 'Commerce', location: 'Online', fees: 'Free', duration: '4 Weeks', institute: 'edX', link: 'https://www.edx.org/', isFree: true },
  { id: 11, title: 'CS50: Introduction to Computer Science', domain: 'Engineering', location: 'Online', fees: 'Free', duration: '12 Weeks', institute: 'Harvard University', link: 'https://pll.harvard.edu/course/cs50-introduction-computer-science', isFree: true },
  { id: 12, title: 'The Science of Well-Being', domain: 'Healthcare', location: 'Online', fees: 'Free', duration: '10 Weeks', institute: 'Yale University', link: 'https://www.coursera.org/learn/the-science-of-well-being', isFree: true },
  { id: 13, title: 'Elements of AI', domain: 'Engineering', location: 'Online', fees: 'Free', duration: '6 Weeks', institute: 'University of Helsinki', link: 'https://www.elementsofai.com/', isFree: true },
  { id: 14, title: 'Financial Markets', domain: 'Commerce', location: 'Online', fees: 'Free', duration: '7 Weeks', institute: 'Yale University', link: 'https://www.coursera.org/learn/financial-markets-global', isFree: true },
  { id: 15, title: 'Introduction to Graphic Design', domain: 'Arts & Design', location: 'Online', fees: 'Free', duration: '4 Weeks', institute: 'Kadenze', link: 'https://www.kadenze.com/courses/introduction-to-graphic-design/info', isFree: true },
  { id: 16, title: 'Python for Everybody', domain: 'Engineering', location: 'Online', fees: 'Free', duration: '10 Weeks', institute: 'University of Michigan', link: 'https://www.py4e.com/', isFree: true },
];

export default function Courses() {
  const [search, setSearch] = useState('');
  const [filterDomain, setFilterDomain] = useState('All');

  const filtered = DUMMY_COURSES.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) && 
    (filterDomain === 'All' || c.domain === filterDomain)
  );

  const domains = ['All', ...new Set(DUMMY_COURSES.map(c => c.domain))];

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
          {domains.map(domain => (
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filtered.map(course => (
          <div key={course.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '6px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, border: '1px solid var(--glass-border)' }}>
                {course.domain}
              </span>
              <span style={{ 
                fontSize: '0.65rem', 
                fontWeight: 700, 
                padding: '0.2rem 0.5rem', 
                borderRadius: '4px', 
                background: course.isFree ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)', 
                color: course.isFree ? 'var(--success)' : 'var(--accent-primary)',
                border: `1px solid ${course.isFree ? 'rgba(16, 185, 129, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
                letterSpacing: '0.5px'
              }}>
                {course.isFree ? 'FREE' : 'PAID'}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{course.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookOpen size={14} color="var(--accent-primary)" /> {course.institute}
            </p>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} /> <span>{course.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600 }}>
                <DollarSign size={16} color="var(--success)" /> <span>{course.fees}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Clock size={16} /> <span>{course.duration}</span>
              </div>
            </div>
            
            <button onClick={() => window.open(course.link, '_blank')} className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', gap: '0.5rem' }}>
              Enroll Now <ExternalLink size={16} />
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: '5rem', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px dashed var(--glass-border)' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No courses found matching your criteria.</p>
            <p style={{ fontSize: '0.9rem' }}>Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}

