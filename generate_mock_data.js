const fs = require('fs');

const sweTopics = ['React Hooks', 'Node.js Event Loop', 'REST API Design', 'SQL Normalization', 'Docker Containers', 'CSS Flexbox Contexts', 'JavaScript Promises', 'Redux State Management', 'Git Rebase', 'JWT Auth'];
const uiuxTopics = ['Color Contrast Ratios', 'Figma Auto Layout', 'Typography Hierarchies', 'Heuristic Evaluation', 'A/B Testing', 'Affordances', 'Wireframing Fidelity', 'User Journey Mapping', 'Information Architecture', 'Gestalt Principles'];
const dataTopics = ['Pandas DataFrames', 'K-Means Clustering', 'P-Value Significance', 'Neural Net Backpropagation', 'SQL Joins', 'Overfitting', 'Matplotlib Visualization', 'Decision Trees', 'Gradient Descent', 'Data Normalization'];

function getSet(domainName) {
  if (domainName === 'Software Engineering') return sweTopics;
  if (domainName === 'UI/UX Design') return uiuxTopics;
  return dataTopics;
}

const domains = [
  {
    id: 'swe',
    name: 'Software Engineering',
    desc: 'Test your fundamentals in Algorithms, React ecosystem, and deep System Design. Levels 1 & 2 included.'
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    desc: 'Evaluate your proficiency in Wireframing, Color Theory, Typography, and advanced User Research.'
  },
  {
    id: 'data',
    name: 'Data Science',
    desc: 'Measure your skills in Statistics, Python Data Manipulation, and Machine Learning Neural Nets.'
  }
];

function generateQuestionsForDomain(domainName) {
  let questions = [];
  const topics = getSet(domainName);
  
  // 25 Beginner
  for(let i=1; i<=25; i++) {
    const t = topics[i % topics.length];
    questions.push({
      q: `What is the primary function or definition of ${t} in a conventional ${domainName} workflow?`,
      opts: [
        `It is utilized primarily to bypass security protocols during local testing.`,
        `It serves as a core mechanism to structure, manage, or analyze assets within ${domainName}.`,
        `It acts natively to compile styling hierarchies down to machine-level binaries.`,
        `It forces synchronous execution by blocking the primary application thread.`
      ],
      ans: 1,
      exp: `${t} represents an absolute foundation in ${domainName}, necessary to structure assets consistently and cleanly during standard, entry-level workflows.`
    });
  }
  
  // 25 Advanced
  for(let i=26; i<=50; i++) {
    const t = topics[i % topics.length];
    questions.push({
      q: `During a high-concurrency enterprise-scale execution, how does ${t} directly impact ${domainName} architecture?`,
      opts: [
        `By eliminating the need for any containerization or hosting layers safely.`,
        `It introduces significant monolithic blocking forcing pipeline degradation.`,
        `By optimizing state flow, data structuring, and scalable distribution efficiently.`,
        `By permanently binding the application strictly to localized storage nodes.`
      ],
      ans: 2,
      exp: `Advanced utilization of ${t} specifically resolves catastrophic architecture bottlenecks by drastically optimizing state flow and scalable data delivery under extreme pipeline pressure.`
    });
  }
  
  return questions;
}

const finalData = domains.map(d => ({
  ...d,
  questions: generateQuestionsForDomain(d.name)
}));

const fileContent = `export const mockDomains = ${JSON.stringify(finalData, null, 2)};`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/mockTestsData.js', fileContent);
console.log('Mock Data File Successfully Written.');
