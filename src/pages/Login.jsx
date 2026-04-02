import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Globe } from 'lucide-react';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e?.preventDefault();
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      localStorage.setItem('auth_token', 'true');
      localStorage.setItem('user', JSON.stringify({ name: "Demo Student", email: "student@example.com" }));
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', margin: '0 0 2rem 0' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Career Forge.ai
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '1.5rem' }}>Forge Your Future: AI-Powered Paths to Peak Potential</p>
          <p style={{ color: 'var(--text-secondary)' }}>Sign in to continue your journey</p>
        </div>

        <form onSubmit={handleLogin} className="animate-fade-in">
          <div className="form-group">
            <label className="form-label">Email</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} size={20} />
              <input type="email" className="form-input" style={{ paddingLeft: '2.5rem' }} placeholder="you@example.com" required />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} size={20} />
              <input type="password" className="form-input" style={{ paddingLeft: '2.5rem' }} placeholder="••••••••" required />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginBottom: '1rem' }} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', color: 'var(--text-secondary)' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
          <span style={{ padding: '0 1rem', fontSize: '0.9rem' }}>Or continue with</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
        </div>

        <button onClick={() => handleLogin()} className="btn-secondary" style={{ width: '100%' }}>
          <Globe size={20} /> Google
        </button>
      </div>
    </div>
  );
}
