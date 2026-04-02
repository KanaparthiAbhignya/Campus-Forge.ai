import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Simulator from '../pages/Simulator';
import VoiceGuide from '../pages/VoiceGuide';
import SkillGap from '../pages/SkillGap';
import CareerDiscover from '../pages/CareerDiscover';
import Courses from '../pages/Courses';
import CareerTest from '../pages/CareerTest';
import MockTests from '../pages/MockTests';
import Background3D from '../components/Background3D';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function DashboardLayout() {
  console.log('Forcing layout UI to drop cache bindings');
  const isAuthenticated = localStorage.getItem('auth_token') === 'true';

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '70px' }}>
      <Background3D />
      <Navbar />
      <main style={{ flex: 1, padding: '2rem', width: '100%', maxWidth: '1400px', margin: '0 auto', overflowX: 'hidden' }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/voice" element={<VoiceGuide />} />
          <Route path="/skills" element={<SkillGap />} />
          <Route path="/discover" element={<CareerDiscover />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/test" element={<CareerTest />} />
          <Route path="/mock-tests" element={<MockTests />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </main>
    </div>
  );
}
