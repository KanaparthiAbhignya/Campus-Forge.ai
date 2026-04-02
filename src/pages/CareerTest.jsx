import { useState } from 'react';
import { ClipboardCheck, ArrowRight, RefreshCw, Trophy, Target, Star, Briefcase } from 'lucide-react';

const QA_DATA = [
  {
    id: 1,
    question: "What is your preferred way to solve a complex problem?",
    options: [
      { text: "Analyzing data and writing systematic algorithms", cat: "A" },
      { text: "Sketching visual mind maps and brainstorming creative ideas", cat: "B" },
      { text: "Discussing with people and finding empathetic human solutions", cat: "C" },
      { text: "Delegating tasks and organizing a high-level strategy", cat: "D" },
      { text: "Following strict protocols and ensuring airtight security", cat: "E" },
      { text: "Researching global routes and logistical planning", cat: "F" },
      { text: "Physical trial and error through movement and practice", cat: "G" }
    ]
  },
  {
    id: 2,
    question: "Which environment do you thrive in the most?",
    options: [
      { text: "A quiet, dark room with multiple high-res monitors", cat: "A" },
      { text: "A vibrant, chaotic art studio or bustling stage", cat: "B" },
      { text: "A clinic, hospital, or bustling community center", cat: "C" },
      { text: "A sleek, high-rise corporate boardroom", cat: "D" },
      { text: "A disciplined, highly-structured base or field camp", cat: "E" },
      { text: "A busy airport, cockpit, or traveling internationally", cat: "F" },
      { text: "A loud gym, massive stadium, or open outdoor arena", cat: "G" }
    ]
  },
  {
    id: 3,
    question: "What type of impact do you want to leave on the world?",
    options: [
      { text: "Advancing humanity through cutting-edge technology", cat: "A" },
      { text: "Inspiring people through art, storytelling, and design", cat: "B" },
      { text: "Healing illnesses and directly saving people's lives", cat: "C" },
      { text: "Building massive companies and driving the global economy", cat: "D" },
      { text: "Protecting citizens and serving the public fearlessly", cat: "E" },
      { text: "Connecting the world through seamless travel and transport", cat: "F" },
      { text: "Pushing the absolute limits of human physical achievement", cat: "G" }
    ]
  },
  {
    id: 4,
    question: "If you had a completely free weekend, how would you spend it?",
    options: [
      { text: "Building a small app, coding, or testing new software tools", cat: "A" },
      { text: "Painting, filming a video, or reading fantasy novels", cat: "B" },
      { text: "Volunteering at a local shelter or helping a friend in need", cat: "C" },
      { text: "Reading a book on investing, startups, or leadership", cat: "D" },
      { text: "Doing survival training, hunting, or reading history", cat: "E" },
      { text: "Taking a spontaneous road trip or flight to a new city", cat: "F" },
      { text: "Playing an intense competitive sport or hiking a tough trail", cat: "G" }
    ]
  },
  {
    id: 5,
    question: "Which of these specific tasks sounds the most appealing to you?",
    options: [
      { text: "Debugging a complex software architecture issue", cat: "A" },
      { text: "Designing a brand identity and logo for a new company", cat: "B" },
      { text: "Diagnosing a patient's symptoms and creating a care plan", cat: "C" },
      { text: "Pitching a new product idea to a room of wealthy investors", cat: "D" },
      { text: "Leading a squad through a tactical high-stakes training exercise", cat: "E" },
      { text: "Piloting a heavy aircraft or managing complex air traffic", cat: "F" },
      { text: "Coaching an athlete to eventually win a national championship", cat: "G" }
    ]
  },
  {
    id: 6,
    question: "How do you naturally handle highly stressful or high-pressure situations?",
    options: [
      { text: "I rely purely on logic, documentation, and data to find the fix", cat: "A" },
      { text: "I use my intuition and improvise a quick creative workaround", cat: "B" },
      { text: "I stay extremely calm to reassure and prioritize the safety of others", cat: "C" },
      { text: "I take immediate authoritative charge of the situation and direct my team", cat: "D" },
      { text: "I strictly follow my established emergency training without hesitation", cat: "E" },
      { text: "I run through a highly detailed checklist step-by-step to prevent failure", cat: "F" },
      { text: "I channel the adrenaline directly into physical action and hyper-focus", cat: "G" }
    ]
  },
  {
    id: 7,
    question: "What is your favorite type of documentary or non-fiction book?",
    options: [
      { text: "The history of Silicon Valley, AI revolutions, or space exploration", cat: "A" },
      { text: "The biography of a famous iconic artist, director, or musician", cat: "B" },
      { text: "Real-life medical mysteries or deep psychology breakthroughs", cat: "C" },
      { text: "The strategic rise and fall of massive global corporations", cat: "D" },
      { text: "Decisive military battles and strategies that shaped human history", cat: "E" },
      { text: "Engineering marvels detailing modern airplanes and global trade", cat: "F" },
      { text: "The untold gritty story of an underdog sports team winning it all", cat: "G" }
    ]
  }
];

const CATEGORY_MAP = {
  'A': { 
    title: 'Tech / Engineering 💻', 
    desc: 'You are highly logical, analytical, and love building complex systems.', 
    careers: [
      {
        title: 'Software Engineer',
        skills: ['JavaScript/React', 'Node.js', 'Data Structures', 'Git'],
        qualifications: 'B.Tech in Computer Science or intensive coding bootcamp certification.',
        roadmap: ['1. Master a programming language (Python/JS)', '2. Understand Data Structures & Algorithms', '3. Build Full-Stack Projects', '4. Prepare for System Design Interviews']
      },
      {
        title: 'AI/ML Specialist',
        skills: ['Python', 'TensorFlow/PyTorch', 'Statistics', 'Deep Learning'],
        qualifications: 'Bachelors or Masters in CS, strict math and statistics background.',
        roadmap: ['1. Learn Python and Calculus', '2. Master Machine Learning Models', '3. Apply Deep Learning to Datasets', '4. Specialize in NLP or Computer Vision']
      }
    ]
  },
  'B': { 
    title: 'Creative / Media 🎨', 
    desc: 'You possess immense imagination and thrive on expressing ideas visually or verbally.', 
    careers: [
      {
        title: 'UI/UX Designer',
        skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing'],
        qualifications: 'Degree in Graphic Design, HCI, or strong aesthetic self-taught portfolio.',
        roadmap: ['1. Learn Visual Design Principles', '2. Master Figma and Adobe Suite', '3. Build Case Studies resolving UX issues', '4. Land a Junior Design Role']
      },
      {
        title: 'Art Director',
        skills: ['Creative Direction', 'Adobe Creative Cloud', 'Typography', 'Leadership'],
        qualifications: 'Bachelors in Fine Arts or Graphic Design with 5+ years visual experience.',
        roadmap: ['1. Build foundational Graphic Design skills', '2. Work in ad agencies or freelance', '3. Shift focus to campaign leadership', '4. Lead a creative department']
      }
    ]
  },
  'C': { 
    title: 'Healthcare / Social ❤️', 
    desc: 'You are highly empathetic and driven by a deep desire to help and heal others.', 
    careers: [
      {
        title: 'Medical Doctor',
        skills: ['Clinical Diagnosis', 'Anatomy', 'Patient Care', 'Critical Thinking'],
        qualifications: 'Pre-Med Bachelors, Medical School Degree (MD/DO), and Residency.',
        roadmap: ['1. Ace Pre-Med Science Courses', '2. Pass the MCAT', '3. Complete 4 Years of Medical School', '4. Complete 3-7 years of Residency']
      },
      {
        title: 'Clinical Psychologist',
        skills: ['Counseling', 'Cognitive Behavioral Therapy', 'Active Listening', 'Research'],
        qualifications: 'Doctorate in Psychology (Ph.D. or Psy.D.) and State Licensure.',
        roadmap: ['1. Get a Bachelors in Psychology', '2. Gain research or clinical experience', '3. Complete Doctoral Program', '4. Complete supervised clinical hours']
      }
    ]
  },
  'D': { 
    title: 'Business / Management 💼', 
    desc: 'You are a natural leader with a sharp mind for strategy, economics, and organization.', 
    careers: [
      {
        title: 'Product Manager',
        skills: ['Roadmapping', 'Agile/Scrum', 'Data Analytics', 'Cross-functional Leadership'],
        qualifications: 'Bachelors in Business or CS. MBA is highly advantageous.',
        roadmap: ['1. Gain Tech or Business domain experience', '2. Learn agile frameworks', '3. Transition to Associate PM role', '4. Lead product lifecycles end-to-end']
      },
      {
        title: 'Management Consultant',
        skills: ['Financial Modeling', 'Strategic Planning', 'Presentations', 'Problem Solving'],
        qualifications: 'Bachelors from a top-tier university or an aggressive MBA.',
        roadmap: ['1. Excel in Business/Finance undergrad', '2. Practice Case Studies intensely', '3. Join a tier-1 firm (MBB)', '4. Advise Fortune 500 companies']
      }
    ]
  },
  'E': { 
    title: 'Defence / Government 🪖', 
    desc: 'You value discipline, structure, and possess a strong sense of duty and protection.', 
    careers: [
      {
        title: 'Cybersecurity Operative',
        skills: ['Ethical Hacking', 'Network Security', 'Cryptography', 'Risk Analysis'],
        qualifications: 'Bachelors in IT/Cyber. Certifications: CompTIA Security+, CISSP, CEH.',
        roadmap: ['1. Learn Networking & Linux', '2. Pass Security+ Certification', '3. Work in an IT Helpdesk or SOC', '4. Specialize in offensive/defensive operations']
      },
      {
        title: 'Military Officer',
        skills: ['Leadership', 'Tactical Strategy', 'Physical Endurance', 'Crisis Management'],
        qualifications: 'Bachelors degree minimum. Must pass Officer Candidate School (OCS).',
        roadmap: ['1. Excel in college and physical fitness', '2. Pass strict background clearances', '3. Graduate from OCS training', '4. Commission and lead military platoons']
      }
    ]
  },
  'F': { 
    title: 'Aviation / Travel ✈️', 
    desc: 'You crave dynamic movement, logistical precision, and a global perspective.', 
    careers: [
      {
        title: 'Commercial Pilot',
        skills: ['Flight Operations', 'Meteorology', 'Navigation', 'Calm under pressure'],
        qualifications: 'Commercial Pilot License (CPL) and Airline Transport Pilot (ATP) Certificate.',
        roadmap: ['1. Obtain Private Pilot License', '2. Earn Instrument and Multi-Engine Ratings', '3. Build 1,500+ flight hours', '4. Fly for a regional or major airline']
      },
      {
        title: 'Aerospace Engineer',
        skills: ['Aerodynamics', 'CAD Modeling', 'Thermodynamics', 'Mathematics'],
        qualifications: 'Bachelors in Aerospace or Mechanical Engineering.',
        roadmap: ['1. Master Calculus and Physics', '2. Earn an ABET-accredited Engineering degree', '3. Complete internships at aviation firms', '4. Design aircraft or spacecraft systems']
      }
    ]
  },
  'G': { 
    title: 'Sports / Fitness 🏆', 
    desc: 'You are physically active, competitive, and fascinated by human performance limits.', 
    careers: [
      {
        title: 'Sports Physiotherapist',
        skills: ['Biomechanics', 'Rehabilitation', 'Anatomy', 'Manual Therapy'],
        qualifications: 'Doctor of Physical Therapy (DPT) degree with Sports specialization.',
        roadmap: ['1. Earn a Kinesiology Bachelors', '2. Complete 3-year DPT program', '3. Pass national board licensing exam', '4. Work directly with athletic programs']
      },
      {
        title: 'High-Performance Coach',
        skills: ['Strength & Conditioning', 'Nutrition', 'Motivation', 'Exercise Physiology'],
        qualifications: 'Bachelors in Sports Science. CSCS Certification highly mandated.',
        roadmap: ['1. Complete undergraduate Sports Science degree', '2. Pass the rigorous CSCS exam', '3. Train amateur athletes', '4. Coach elite or professional sports teams']
      }
    ]
  }
};

export default function CareerTest() {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [resultCat, setResultCat] = useState(null);

  const handleSelect = (category) => {
    const newAnswers = { ...answers, [currentStep]: category };
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentStep < QA_DATA.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        calculateResults(newAnswers);
      }
    }, 400); // slight delay for animation UX feel
  };

  const calculateResults = (finalAnswers) => {
    const counts = {};
    Object.values(finalAnswers).forEach(cat => {
      counts[cat] = (counts[cat] || 0) + 1;
    });

    let maxCat = null;
    let maxCount = 0;
    for (const [cat, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        maxCat = cat;
      }
    }
    setResultCat(maxCat);
    setShowResults(true);
  };

  const resetTest = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResults(false);
    setResultCat(null);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '2rem', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ClipboardCheck size={36} /> Career Aptitude Test
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Discover your dominant career persona by answering these {QA_DATA.length} psychological questions.</p>
      </header>

      {!showResults ? (
        <div className="glass-panel" style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '0 auto', width: '100%', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <span>Question {currentStep + 1} of {QA_DATA.length}</span>
            <div style={{ display: 'flex', gap: '5px' }}>
              {QA_DATA.map((_, i) => (
                <div key={i} style={{ width: '30px', height: '6px', borderRadius: '3px', background: i <= currentStep ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }}></div>
              ))}
            </div>
          </div>

          <h2 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', lineHeight: 1.4 }}>{QA_DATA[currentStep].question}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {QA_DATA[currentStep].options.map((option, i) => {
              const isSelected = answers[currentStep] === option.cat;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(option.cat)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRadius: '16px',
                    border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                    background: isSelected ? 'rgba(14, 165, 233, 0.15)' : 'rgba(0,0,0,0.2)',
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onMouseOver={(e) => { if(!isSelected) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseOut={(e) => { if(!isSelected) e.currentTarget.style.background = 'rgba(0,0,0,0.2)'; }}
                >
                  <span>{option.text}</span>
                  {isSelected && <Star size={20} color="var(--accent-primary)" fill="var(--accent-primary)" />}
                </button>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <Trophy size={64} color="var(--success)" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', margin: 0 }}>Your Dominant Category is:</h2>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{CATEGORY_MAP[resultCat].title}</h1>
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '16px', marginBottom: '3.5rem', border: '1px dashed var(--accent-primary)' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-primary)', margin: 0 }}>
              "{CATEGORY_MAP[resultCat].desc}"
            </p>
          </div>

          <h3 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            Highly Recommended Pathways
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem', textAlign: 'left' }}>
            {CATEGORY_MAP[resultCat].careers.map((career, i) => (
              <div key={i} style={{ padding: '2.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '20px', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {career.title}
                </h2>
                
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                      <Star size={18} color="var(--warning)" /> Required Core Skills
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {career.skills.map(s => <span key={s} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '8px', fontSize: '0.95rem' }}>{s}</span>)}
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                      <Briefcase size={18} color="var(--accent-primary)" /> Essential Qualifications
                    </h4>
                    <p style={{ color: 'var(--text-primary)', lineHeight: 1.6, background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                      {career.qualifications}
                    </p>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                    <Target size={18} color="var(--success)" /> Step-by-Step Execution Roadmap
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {career.roadmap.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px', alignItems: 'flex-start' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.85rem', marginTop: '2px' }}>{idx + 1}</div>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{step.substring(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          <button className="btn-secondary" onClick={resetTest} style={{ margin: '0 auto', padding: '1rem 2rem' }}>
            <RefreshCw size={20} style={{ marginRight: '10px' }} /> Retake Aptitude Test
          </button>
        </div>
      )}
    </div>
  );
}
