import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Compass, Target, BookOpen, Mic, Search, ClipboardCheck, PenTool, User as UserIcon, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Student"}');

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Simulator', path: '/simulator', icon: Compass },
    { name: 'Skill Gap', path: '/skills', icon: Target },
    { name: 'Test', path: '/test', icon: ClipboardCheck },
    { name: 'Mock Tests', path: '/mock-tests', icon: PenTool },
    { name: 'Netflix', path: '/discover', icon: BookOpen },
    { name: 'Courses', path: '/courses', icon: Search },

    { name: 'Voice', path: '/voice', icon: Mic },
  ];

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '70px', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', background: 'transparent', border: 'none', boxShadow: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <h2 style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0, fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
          Career Forge.ai
        </h2>
        
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', overflowX: 'auto' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                color: isActive ? 'white' : 'var(--text-secondary)',
                background: isActive ? 'var(--accent-gradient)' : 'transparent',
                transition: 'all 0.3s ease',
                fontWeight: 500,
                fontSize: '0.9rem',
                whiteSpace: 'nowrap'
              })}
            >
              <item.icon size={16} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative' }} ref={dropdownRef}>
        <div 
          onClick={() => setDropdownOpen(!dropdownOpen)} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', padding: '0.5rem 1rem', borderRadius: '30px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', transition: 'all 0.3s ease' }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
            {user.name.charAt(0)}
          </div>
          <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{user.name}</span>
        </div>

        {dropdownOpen && (
          <div className="glass-panel animate-fade-in" style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, width: '200px', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '0.5rem' }}>
            <button 
              onClick={() => { navigate('/profile'); setDropdownOpen(false); }} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'transparent', border: 'none', color: 'var(--text-primary)', textAlign: 'left', cursor: 'pointer', borderRadius: '8px', transition: 'all 0.2s ease', fontSize: '1rem' }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <UserIcon size={16} /> Profile
            </button>
            <div style={{ height: '1px', background: 'var(--glass-border)', margin: '0.25rem 0' }}></div>
            <button 
              onClick={handleLogout} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'transparent', border: 'none', color: 'var(--error)', textAlign: 'left', cursor: 'pointer', borderRadius: '8px', transition: 'all 0.2s ease', fontSize: '1rem' }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
