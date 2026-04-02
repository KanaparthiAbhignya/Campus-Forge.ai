export const mockDomains = [
  {
    id: 'swe',
    name: 'Software Engineering',
    desc: 'Test your fundamentals in Algorithms, React ecosystem, and deep System Design. Levels 1 & 2 included.',
    questions: [
      // Beginner
      {
        q: "Which HTTP method is conventionally used to completely replace an existing resource?",
        opts: ["PATCH", "POST", "PUT", "DELETE"],
        ans: 2,
        exp: "PUT is designed to completely replace a target resource, whereas PATCH applies partial modifications."
      },
      {
        q: "In React, what Hook is specifically used to perform side effects?",
        opts: ["useState", "useContext", "useEffect", "useReducer"],
        ans: 2,
        exp: "useEffect is the designated React Hook for executing side effects like data fetching or DOM manipulation."
      },
      {
        q: "What is the primary characteristic of a RESTful API?",
        opts: ["It natively utilizes WebSockets for real-time data streaming.", "It is stateless and separates client and server concerns.", "It only accepts XML data formats in requests.", "It requires a persistent connection for all transactions."],
        ans: 1,
        exp: "REST (Representational State Transfer) is structurally stateless; each request contains all data needed to fulfill it."
      },
      {
        q: "Which Git command is used to combine the contents of one branch directly into another?",
        opts: ["git fetch", "git pull", "git merge", "git commit"],
        ans: 2,
        exp: "git merge strictly takes the independent lines of development and integrates them into a single unified branch."
      },
      {
        q: "In JavaScript, what does 'NaN' stand for?",
        opts: ["Native Assigned Node", "Not a Number", "Null and Negatory", "New array Notation"],
        ans: 1,
        exp: "'NaN' is a property representing 'Not a Number', generally returned when math functions fail or parse unreadable strings."
      },
      // Advanced
      {
        q: "What is the primary advantage of employing an Event Sourcing architecture?",
        opts: ["It entirely eliminates the need for database storage.", "It stores every state change as an immutable chronological sequence of events.", "It forces front-end components to compile asynchronously.", "It strictly binds the backend to a single monolithic monolith model."],
        ans: 1,
        exp: "Event Sourcing captures all changes to application state as a sequence of events, creating a flawless architectural audit trail."
      },
      {
        q: "When designing a highly concurrent distributed system, what does the CAP Theorem state?",
        opts: ["A network partition cannot disrupt consistency and availability simultaneously.", "A system can only guarantee two out of three: Consistency, Availability, and Partition Tolerance.", "Caching Always Protects systems from total failure.", "Compute, Analytics, and Processing scale linearly."],
        ans: 1,
        exp: "The CAP Theorem mathematically dictates that distributed data stores can only simultaneously provide two of three guarantees: Consistency, Availability, Partition Tolerance."
      },
      {
        q: "Which specific concept prevents 'Prop Drilling' heavily deeply nested React applications?",
        opts: ["Custom Hooks", "React Router", "Context API", "Component States"],
        ans: 2,
        exp: "The React Context API natively allows deep component trees to access global variables without manually passing props through every single layer."
      },
      {
        q: "What happens if a JavaScript Promise is rejected without an attached .catch() handler?",
        opts: ["The promise silently resolves to 'null'.", "The browser crashes immediately closing the tab.", "It throws an 'UnhandledPromiseRejection' error.", "The JavaScript engine retries the promise infinitely."],
        ans: 2,
        exp: "Failing to aggressively handle asynchronous rejections triggers an UnhandledPromiseRejection global runtime error."
      },
      {
        q: "In containerization, what is the core architectural difference between Docker and a Virtual Machine?",
        opts: ["Virtual Machines share the host OS kernel, while Docker virtualizes hardware.", "Docker shares the localized host OS kernel, making it drastically more lightweight than VMs.", "Docker is restricted exclusively to Linux distributions.", "Virtual Machines cannot run synchronous operations."],
        ans: 1,
        exp: "Docker containers wrap application software but universally share the underlying OS kernel, stripping massive VM virtualization overhead."
      }
    ]
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    desc: 'Evaluate your proficiency in Wireframing, Color Theory, Typography, and advanced User Research.',
    questions: [
      // Beginner
      {
        q: "What does UX stand for in digital design?",
        opts: ["User Extension", "Universal Execution", "User Experience", "Unified Exchange"],
        ans: 2,
        exp: "UX stands for User Experience, dictating how a person interacts with and feels about a digital product."
      },
      {
        q: "What is the primary purpose of creating a wireframe?",
        opts: ["To define exact high-resolution color branding.", "To map structural layout and baseline functionality before deep design.", "To write frontend HTML/CSS code directly.", "To render 3D spline animations."],
        ans: 1,
        exp: "Wireframes serve as purely structural skeletal blueprints, focusing entirely on spatial layout and usability over aesthetics."
      },
      {
        q: "Which color theory principle defines how colors physically complement or contrast each other?",
        opts: ["Color Mapping", "The Color Wheel", "Hexadecimal Indexing", "Pantone Matching"],
        ans: 1,
        exp: "The Color Wheel is the foundational model determining complementary, analogous, and triadic color architectures."
      },
      {
        q: "What does 'White Space' (Negative Space) achieve in UI design?",
        opts: ["It wastes screen real estate.", "It strictly causes rendering delays on older hardware.", "It improves legibility, focus, and structural hierarchy.", "It makes dark mode impossible to execute."],
        ans: 2,
        exp: "White space creates crucial visual breathing room, directing the user's eye and avoiding clustered cognitive overload."
      },
      {
        q: "What is an 'Affordance' in interaction design?",
        opts: ["The financial cost of rendering cloud data.", "A visual absolute clue indicating how an element should be interacted with.", "The total memory bandwidth allowed by a browser.", "A strict typography baseline scaling rule."],
        ans: 1,
        exp: "An affordance is a visual characteristic (like a shadow on a button) that intuitively suggests its physical function."
      },
      // Advanced
      {
        q: "What specifically does a 'Heuristic Evaluation' entail?",
        opts: ["A/B testing two live marketing campaign variations.", "A strict structural review against recognized usability principles by experts.", "Tracking where a user's physical eyes look on screen.", "Writing automated Selenium tests for JavaScript modules."],
        ans: 1,
        exp: "Heuristic Evaluations involve deep expert reviews assessing an interface against standard usability heuristics (e.g. Nielsen's 10 principles)."
      },
      {
        q: "Which metric calculates accessibility contrast ratios to pass WCAG AAA standards?",
        opts: ["A luminosity contrast ratio of at least 7:1 for normal text.", "A strict visual DPI scale of 100%.", "A color matching algorithmic ratio of 4:3.", "A universal opacity gradient of zero."],
        ans: 0,
        exp: "The WCAG AAA supreme standard requires a massive 7:1 contrast ratio ensuring extremely high legibility for visually impaired users."
      },
      {
        q: "In high-fidelity Figma components, what is the primary benefit of 'Auto Layout'?",
        opts: ["It automatically selects complementary color palettes.", "It enforces fully dynamic flex-box style responsiveness naturally adjusting as content scales.", "It auto-generates background gradient meshes.", "It bypasses standard component inheritance rules."],
        ans: 1,
        exp: "Auto Layout mirrors CSS Flexbox, permitting components to effortlessly stretch, shrink, and align dynamically to text overrides."
      },
      {
        q: "What characterizes a truly 'Responsive' design over an 'Adaptive' design?",
        opts: ["Responsive utilizes fluid algorithmic grids, while Adaptive relies on fixed hardcoded breakpoints.", "Adaptive responds seamlessly to all hardware natively.", "Responsive requires separate distinct HTML payloads per device.", "Responsive is strictly mobile-first while Adaptive is desktop-first."],
        ans: 0,
        exp: "Responsive logic fluidly calculates percentages dynamically formatting to any screen size, unlike Adaptive's rigid hardcoded media query buckets."
      },
      {
        q: "What is the primary psychological driver behind the 'Gestalt Principles'?",
        opts: ["Users prefer extreme chaotic brutalism architectures.", "Users inherently organize isolated individual elements into unified, coherent wholes.", "Users cannot perceive more than three colors sequentially.", "Users natively reject symmetry."],
        ans: 1,
        exp: "Gestalt principles (Proximity, Closure, Continuity) mandate that the human brain structurally organizes disorganized parts into unified recognizable patterns."
      }
    ]
  },
  {
    id: 'data',
    name: 'Data Science',
    desc: 'Measure your skills in Statistics, Python Data Manipulation, and Machine Learning Neural Nets.',
    questions: [
      // Beginner
      {
        q: "Which Python core library is extremely renowned for manipulation of high-level numerical datasets?",
        opts: ["React", "Express", "Pandas", "Django"],
        ans: 2,
        exp: "Pandas provides extensive highly-optimized data structures like DataFrames explicitly configured for aggressive data analysis."
      },
      {
        q: "In Machine Learning, what represents a 'Supervised' learning model?",
        opts: ["The model requires absolutely no training data.", "The model is trained entirely on unlabelled chaotic data formats.", "The model learns structurally from a dataset containing explicitly labelled output pairs.", "The model relies exclusively on manual human decision tree inputs."],
        ans: 2,
        exp: "Supervised models require rigid 'labelled' datasets, mapping input features strictly to known absolute outcomes during training scopes."
      },
      {
        q: "What specifically does a 'P-Value' measure in Null Hypothesis Testing?",
        opts: ["The exact total probability of the absolute null hypothesis being true.", "The probability of hitting the observed results assuming the null hypothesis IS true.", "The performance scaling velocity of the algorithm.", "The physical percentage of missing rows in a DataFrame."],
        ans: 1,
        exp: "The P-Value defines the rigid mathematical probability of replicating observed extremes purely by chance if the null hypothesis stands correct."
      },
      {
        q: "Which process defines 'Data Normalization'?",
        opts: ["Deleting all anomalous outliers randomly.", "Transforming numerical columns to a unified, standardized scale structurally without distorting variance.", "Injecting synthetic duplicates to artificially balance arrays.", "Converting all string variables recursively to integers."],
        ans: 1,
        exp: "Normalization radically forces unscaled numbers into cohesive uniform ranges (like 0 to 1), heavily optimizing deep algorithmic model accuracy."
      },
      {
        q: "What does SQL fundamentally stand for?",
        opts: ["System Query Logic", "Sequential Query Library", "Structured Query Language", "Systemized Quotation Linguistics"],
        ans: 2,
        exp: "Structured Query Language applies rigid syntax enabling aggressive multi-relational database manipulation."
      },
      // Advanced
      {
        q: "In deep Neural Networks, what is the core architectural purpose of 'Backpropagation'?",
        opts: ["It immediately compiles the model down to hardware logic.", "It calculates the gradient of the loss function adjusting component weights backward from output to input.", "It structurally limits the total node count allowed in hidden layers.", "It completely freezes network parameter overrides."],
        ans: 1,
        exp: "Backpropagation recursively executes the chain rule of calculus, distributing loss error backwards to dynamically tweak weights to boost model precision."
      },
      {
        q: "What explicitly defines an 'Overfitted' training model?",
        opts: ["The model is heavily generalized, missing deep complex data patterns overall.", "The model memorizes precise training noise, catastrophically failing to predict unseen real-world data.", "The algorithm executes significantly faster than architectural baselines.", "The dataset lacks enough absolute columns for execution."],
        ans: 1,
        exp: "Overfitting executes strict memorization of the training set rather than learning abstract features, crashing entirely when fed unfamiliar variables."
      },
      {
        q: "When executing a massive PCA (Principal Component Analysis), what is strictly maximized?",
        opts: ["Local memory bandwidth caching capacity.", "The absolute mathematical variance projected natively along new orthogonal eigenvectors.", "The P-Value thresholds of the base datasets heavily.", "The linear regression residual outputs continuously."],
        ans: 1,
        exp: "PCA recursively seeks orthogonal projection vectors specifically mapping the highest possible absolute variance to compress dimensionality cleanly."
      },
      {
        q: "How does the 'K-Means' iterative algorithm define structural clusters?",
        opts: ["By minimizing strictly the sum of squared geometrical distances between data points and their respective assigned centroid mapping.", "By manually analyzing deep labelled pairs selectively.", "By distributing absolute nodes across random geographic locations exclusively.", "By expanding hierarchical layers indefinitely without boundaries."],
        ans: 0,
        exp: "K-Means applies deep iterative mathematical constraints forcing centroid repositioning strictly to minimize squared local point deviations."
      },
      {
        q: "What is exactly avoided by implementing proper 'Cross-Validation'?",
        opts: ["Speeding up total operational compile periods.", "Accidental reliance on extreme dataset artifacts ensuring generalized accuracy out of boundaries.", "Applying structural standard deviation constraints aggressively.", "Freezing the model into strict localized storage configurations indefinitely."],
        ans: 1,
        exp: "Cross-Validation systematically slices tracking arrays recursively, fiercely averting structural overfitting to single anomalous data blocks."
      }
    ]
  },
  {
    id: 'pm',
    name: 'Product Management',
    desc: 'Evaluate your command over Agile methodologies, KPI scaling, feature roadmapping, and user-centric market strategy.',
    questions: [
      // Beginner
      {
        q: "What does the term 'MVP' strictly define in product development?",
        opts: ["Most Valuable Player", "Maximum Viable Product", "Minimum Viable Product", "Minimum Value Prototype"],
        ans: 2,
        exp: "A Minimum Viable Product contains precisely enough essential features to attract early-adopter customers and validate a fundamental product idea early."
      },
      {
        q: "In standard Agile frameworks, what does a 'Sprint' represent?",
        opts: ["A highly accelerated period where developers code without breaks.", "A set, time-boxed iteration during which specific, targeted work must be completed and reviewed.", "The physical deployment phase of a software application.", "A meeting held exclusively by external stakeholders."],
        ans: 1,
        exp: "Sprints are strictly time-boxed periods (usually 2 weeks) forcing structured, continuous delivery of usable software chunks."
      },
      {
        q: "What does 'KPI' fundamentally stand for?",
        opts: ["Key Performance Indicator", "Known Product Issue", "Key Product Insight", "Kinetic Performance Index"],
        ans: 0,
        exp: "Key Performance Indicators strictly measure how effectively a company or product is achieving its absolute core business objectives."
      },
      {
        q: "What is the central purpose of a Product Roadmap?",
        opts: ["To act as a rigorous unchangeable legally binding contract.", "To visually dictate the highly strategic, high-level path and vision of a product over time.", "To manage daily bug-tracking tickets exclusively.", "To document deep technical architecture and server loads."],
        ans: 1,
        exp: "Product Roadmaps exist completely to align stakeholders structurally around the product's overarching future vision, trajectory, and priorities."
      },
      {
        q: "What defines an 'A/B Test' essentially?",
        opts: ["Testing two completely different software products simultaneously.", "Comparing two distinct variations of a single feature to mathematically determine which performs superiorly.", "A software bug-testing phase strictly evaluating hardware failure.", "Routing users natively to secondary backup servers."],
        ans: 1,
        exp: "A/B testing forcefully isolates variables, testing localized variations directly against users to track objective performance metrics like conversions."
      },
      // Advanced
      {
        q: "When mathematically analyzing venture scaling, how does LTV interact heavily with CAC?",
        opts: ["LTV must be strictly lower than CAC to guarantee profitability.", "LTV and CAC should mathematically map exactly 1:1.", "LTV (Lifetime Value) must significantly exceed CAC (Customer Acquisition Cost) to validate a sustainable business model.", "CAC natively defines physical server costs against LTV's cloud costs."],
        ans: 2,
        exp: "For scalable survival, a metric ratio of LTV > 3x CAC is industry standard, ensuring users generate drastically more revenue than it costs to acquire them."
      },
      {
        q: "How do OKRs strictly differ from standard KPIs?",
        opts: ["OKRs define aggressive overarching strategic goals and their measurable outcomes, while KPIs strictly track localized performance metrics.", "KPIs are exclusively for engineering teams while OKRs track design variants.", "There is zero technical difference between the two frameworks.", "OKRs only measure financial revenue unlike KPIs."],
        ans: 0,
        exp: "Objectives and Key Results (OKRs) establish aggressive directional goals, whereas KPIs are distinct numerical health metrics functioning beneath OKRs."
      },
      {
        q: "In the Kano Model, what mathematically happens to 'Delighter' features over prolonged time?",
        opts: ["They permanently remain Delighters forever.", "They devolve strictly into Basic Needs/Must-Haves as user expectations natively rise across the industry.", "They are removed from the system automatically because of server bloat.", "They become actively detrimental forcing users to churn."],
        ans: 1,
        exp: "The Kano Model accurately predicts that 'Wow' features natively degrade into baseline expectations as competitors copy them and market standards normalize."
      },
      {
        q: "How should an advanced PM balance 'Technical Debt' against 'Feature Delivery'?",
        opts: ["Strictly ignore Technical Debt entirely to push faster UI features endlessly.", "Halt all feature development permanently until absolute zero Technical Debt is reached.", "Allocate a rigid sprint percentage (e.g. 20%) specifically to refactor architecture while pacing continuous feature delivery.", "Offload all Technical Debt uniquely onto external freelance engineers."],
        ans: 2,
        exp: "Strict ratio allocation ensures continuous product evolution while systematically preventing the underlying codebase structure from collapsing under scale."
      },
      {
        q: "What strictly defines achieving 'Product-Market Fit'?",
        opts: ["Launching the product onto the App Store successfully.", "Reaching a state where organic retention and aggressive targeted market demand forcefully pull the product out of your hands.", "Securing a massive initial round of VC funding.", "Hiring a complete 50-person engineering team."],
        ans: 1,
        exp: "PMF occurs exactly when the absolute core value proposition aligns flawlessly with a desperate market need, driving extreme organic adoption."
      }
    ]
  },
  {
    id: 'cyber',
    name: 'Cybersecurity',
    desc: 'Test your threat intelligence involving encryptions, network structures, offensive pentesting, and firewall configurations.',
    questions: [
      // Beginner
      {
        q: "What is the primary mechanism of a 'Phishing' attack?",
        opts: ["Physically stealing server hard drives from data centers.", "Flooding a localized network with aggressive traffic.", "Deceptively masquerading as a highly trusted entity to aggressively extract sensitive user credentials.", "Deploying automated viruses directly into kernel memory."],
        ans: 2,
        exp: "Phishing exploits human psychology rather than software, tricking victims into willingly handing over encryption keys or passwords natively."
      },
      {
        q: "What is the fundamental role of a Network Firewall?",
        opts: ["To aggressively accelerate local internet speeds via caching.", "To strictly monitor and control incoming and outgoing network traffic based on predetermined security rules.", "To permanently store long-term encrypted backup instances.", "To physically cool down overheated server racks."],
        ans: 1,
        exp: "Firewalls act absolutely as a barrier, scanning packet traffic and decisively blocking unauthorized external entities from accessing internal private networks."
      },
      {
        q: "What does Two-Factor Authentication (2FA) natively add to security?",
        opts: ["It requires logging in strictly from two different physical computers simultaneously.", "It enforces a second distinct method of identity verification beyond just a localized password.", "It encrypts the password exactly twice before database storage.", "It removes the need for passwords completely utilizing only biometrics."],
        ans: 1,
        exp: "2FA massively drastically scales security by requiring 'something you know' (password) layered natively with 'something you have' (mobile ping)."
      },
      {
        q: "What characterizes 'Ransomware' distinctly from standard malware?",
        opts: ["It strictly mines cryptocurrency silently in the background.", "It violently encrypts local user data, demanding a heavy financial payment to release the strict decryption key.", "It displays aggressive pop-up advertisements continuously natively.", "It spreads strictly via localized USB hardware devices."],
        ans: 1,
        exp: "Ransomware financially extorts systemic targets by holding mission-critical operational data fundamentally hostage behind unbreakable cryptography."
      },
      {
        q: "What differentiates HTTPS from standard HTTP?",
        opts: ["HTTP is strictly faster by entirely skipping server lookups.", "HTTPS structurally encrypts absolute data transfers utilizing TLS/SSL protocols ensuring deep data integrity.", "HTTPS is exclusively used for massive video streaming arrays.", "There is zero structural difference, HTTPS is just a modern naming convention."],
        ans: 1,
        exp: "HTTPS prevents aggressive 'Man-in-the-Middle' attacks by encrypting all data flowing between the biological user and the absolute endpoint server."
      },
      // Advanced
      {
        q: "How does Asymmetric Encryption strictly differ from Symmetric?",
        opts: ["Asymmetric utilizes a mathematical pair of distinct keys (Public for encrypting, Private for decrypting), while Symmetric relies on one single shared key.", "Asymmetric is exponentially faster and used mainly for heavy file transfers.", "Symmetric encryption cannot absolutely be cracked ever.", "Asymmetric requires physical localized hardware tokens natively."],
        ans: 0,
        exp: "Asymmetric cryptography relies heavily on prime factorization models allowing global key sharing (Public) without exposing the hidden native decryption (Private) logic."
      },
      {
        q: "What definitively constitutes a 'Zero-Day' vulnerability?",
        opts: ["A minor bug that takes zero days to fix quickly.", "An unknown, unpatched structural software flaw actively exploited by hackers before the vendor fundamentally detects it.", "A theoretical virus that destroys a computer completely in 24 hours.", "A security audit performed exactly on the launch day of a product."],
        ans: 1,
        exp: "Zero-days are catastrophically dangerous because defenses completely lack signatures for them, as the foundational exploit is unknown to the architectural creators."
      },
      {
        q: "What is the exact architectural premise of a DDoS (Distributed Denial of Service) attack?",
        opts: ["Injecting malicious SQL natively into a database.", "Utilizing a massive swarm of compromised external machines to geometrically flood a target server until it collapses under packet overload.", "Stealing the administrative super-user keys manually.", "Intercepting packets locally on a shared public Wi-Fi network."],
        ans: 1,
        exp: "DDoS attacks weaponize 'botnets' to drain target bandwidth completely, forcing legitimate systemic traffic to hit fatal timeout responses."
      },
      {
        q: "Which defensive programming technique definitively prevents SQL Injection?",
        opts: ["Encrypting the database native hard drive.", "Aggressively utilizing Parameterized Queries (Prepared Statements) to separate execution code completely from input data strings.", "Hiding the database IP address exclusively onto a VPN.", "Forcing users to type passwords in all capital letters."],
        ans: 1,
        exp: "Prepared statements strictly treat user inputs as entirely literal variables natively rather than executable command strings, nullifying malicious script injections absolutely."
      },
      {
        q: "In a corporate Pentesting engagement, what does 'Lateral Movement' imply?",
        opts: ["Physically moving servers strictly between different data facilities.", "After compromising an initial low-level endpoint, the attacker pivots through the internal architecture to securely access deeper critical assets.", "Changing the IP address natively every five seconds.", "Executing dual attacks simultaneously from identical IPs."],
        ans: 1,
        exp: "Lateral movement signifies that perimeter defenses failed fully, allowing the active threat to traverse internal subnetworks independently discovering massive privilege escalations."
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    desc: 'Evaluate your acumen in Funnel Optimization, CTR scaling, Programmatic Advertising, and holistic SEO frameworks.',
    questions: [
      // Beginner
      {
        q: "What does SEO basically stand for in digital indexing?",
        opts: ["System Execution Order", "Social Engagement Optimization", "Search Engine Optimization", "Standard Email Output"],
        ans: 2,
        exp: "Search Engine Optimization structurally improves organic discoverability natively across algorithms like Google's indexing spiders."
      },
      {
        q: "What explicitly does CTR (Click-Through Rate) measure?",
        opts: ["The overall final cost of running an ad campaign totally.", "The percentage of unique users who physically click on a specific link natively out of the total users who viewed the element.", "The speed at which a webpage fundamentally loads components.", "The absolute number of overall organic visitors daily."],
        ans: 1,
        exp: "CTR mathematically isolates an asset's absolute engagement quality by dividing total clicks precisely by total aggregated impressions."
      },
      {
        q: "What is the native goal of a 'CTA' (Call to Action)?",
        opts: ["To display legal disclaimer text clearly.", "To aggressively provoke a highly specific, immediate systemic response from the user (e.g., 'Buy Now').", "To slow down the scrolling action deeply.", "To automatically download PDF software natively."],
        ans: 1,
        exp: "CTAs are heavily optimized UX/UI elements strategically configured to forcefully drive final critical conversion metrics."
      },
      {
        q: "Which metric correctly describes 'Organic' traffic?",
        opts: ["Traffic explicitly purchased securely via Facebook Ad structures.", "Traffic natively generated via automated bot networks completely.", "Unpaid, targeted traffic fundamentally arriving from search engine logic or direct deep brand searches.", "Traffic strictly isolated to mobile app installations."],
        ans: 2,
        exp: "Organic traffic represents highly valuable users who inherently utilized non-paid indexing routes structurally finding your native platform."
      },
      {
        q: "What is the function of an email 'Drip Campaign'?",
        opts: ["Sending a massive disorganized blast to 10,000 unrelated contacts.", "A specifically structured sequence of automated automated emails natively dispatched based on dynamic user behaviors or precise timelines.", "Deleting inactive users explicitly from a database.", "Physically mailing paper marketing natively to zip codes."],
        ans: 1,
        exp: "Drip campaigns psychologically nurture specific leads slowly, maintaining deep systemic engagement structurally without demanding immediate manual intervention."
      },
      // Advanced
      {
        q: "How is ROAS (Return on Ad Spend) correctly calculated?",
        opts: ["By dividing absolute total impressions directly by clicks.", "By natively subtracting total business expenditures from physical ad cost.", "By rigidly dividing Total specific conversion Revenue entirely by Total specific Ad Spend.", "By tracking exactly how many users hit the checkout screen."],
        ans: 2,
        exp: "ROAS is an absolute unnegotiable metric natively quantifying the precise financial efficiency and exact viability of an isolated marketing pipeline."
      },
      {
        q: "What deep tracking feature explicitly defines the 'Meta Pixel' (Facebook Pixel)?",
        opts: ["It compresses local images severely to boost website speed.", "It natively deploys snippet JavaScript structurally tracking deep cross-site user conversions and enabling powerful aggressive retargeting.", "It blocks spam clicks physically from local IP vectors.", "It replaces legacy HTML logic completely formatting images natively."],
        ans: 1,
        exp: "The Pixel actively monitors aggressive on-page events structurally matching them fiercely to backend Meta user databases forcing massive retargeting optimization."
      },
      {
        q: "What differentiates fundamentally 'Bounce Rate' from 'Exit Rate'?",
        opts: ["They are completely identical tracking metrics entirely.", "Bounce Rate tracks users exactly who leave immediately after viewing strictly one single page, while Exit Rate tracks the percentage of users leaving distinctly from any specific page natively.", "Bounce Rate specifically handles mobile networks while Exit handles desktop.", "Exit Rate aggressively tracks total unique physical IP configurations."],
        ans: 1,
        exp: "A high native Bounce Rate explicitly signals aggressive mismatch or immediate friction natively upon entry, whereas Exit Rate simply calculates terminal navigation."
      },
      {
        q: "How does 'Programmatic Advertising' natively function under the hood?",
        opts: ["Humans strictly negotiate static banner layouts exclusively over phone lines.", "It dynamically utilizes intricate algorithmic AI structures to automate deep real-time bidding natively on distinct ad inventory arrays.", "It only allows marketing native exclusively on physical television networks.", "It completely freezes ad structures forcing static identical deployments universally."],
        ans: 1,
        exp: "Programmatic massively removes legacy manual negotiations globally allowing deep algorithmic logic to aggressively calculate millisecond real-time bidding conversions."
      },
      {
        q: "What relies at the core of heavy 'Lookalike Audience' architectural modeling?",
        opts: ["Randomly explicitly sending advertisements widely to localized regions.", "Matching custom deep source audiences strictly against vast platform matrices to aggressively identify and isolate identical behavioral patterns natively in entirely new users.", "Exclusively targeting users definitively who previously disliked your specific page.", "Downloading physical tracking data entirely offline into excel structures."],
        ans: 1,
        exp: "Lookalike parameters execute fierce Big Data structural machine learning, finding entirely new targets who natively mimic the critical buying behaviors of your best users."
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Computing & DevOps',
    desc: 'Measure your architectural command scaling AWS infrastructures, Kubernetes logic, Docker pipelines, and CI/CD operations.',
    questions: [
      // Beginner
      {
        q: "What fundamentally constitutes 'Cloud Computing'?",
        opts: ["Hosting local servers physically inside deep corporate basements.", "Aggressively delivering computing structure services strictly over the internet natively allowing flexible pay-as-you-go absolute scaling.", "Specifically running native code utilizing entirely only HTML parameters.", "Connecting distinct hardware components physically utilizing ethernet networks."],
        ans: 1,
        exp: "The Cloud abstracts heavy hardware provisioning natively providing explicitly dynamic structural IT services instantly accessible online."
      },
      {
        q: "Which AWS service behaves primarily as highly scalable native object storage?",
        opts: ["Amazon EC2", "Amazon RDS", "Amazon S3", "AWS Lambda"],
        ans: 2,
        exp: "Amazon S3 (Simple Storage Service) is structurally engineered natively to deeply store redundant unstructured data arrays (images, backups, static files)."
      },
      {
        q: "What is the fundamental difference natively distinguishing IaaS from SaaS?",
        opts: ["IaaS strictly delivers underlying raw architecture (servers, networks), whereas SaaS specifically delivers a complete, fully managed application exactly to endpoints.", "IaaS is specifically slower formatting code fundamentally.", "SaaS structurally requires users explicitly to manually build their underlying OS installations exclusively.", "There is zero technical difference between identical acronym targets."],
        ans: 0,
        exp: "Infrastructure as a Service structurally hands you raw native virtual hardware, while Software as a Service completely abstracts all management natively."
      },
      {
        q: "What explicit benefit securely defines CI/CD pipelines?",
        opts: ["They completely eliminate the absolute necessity of writing original local code entirely.", "They fiercely automate the strict architectural testing and native deployment phases directly accelerating highly reliable software releases.", "They physically format strictly database migrations on distinct isolated networks.", "They block explicitly all incoming external site traffic automatically."],
        ans: 1,
        exp: "Continuous Integration / Continuous Deployment removes aggressive manual physical bottlenecks natively ensuring code commits are instantly heavily tested and structurally deployed."
      },
      {
        q: "What is the absolute core mechanism behind 'Serverless' computing globally?",
        opts: ["The strict total complete elimination of standard servers entirely across the planet.", "Developers write raw logic natively while cloud providers aggressively manage entirely the structural instance scaling and physical server architectures behind the scenes.", "Executing code strictly offline disconnected entirely from external APIs.", "Manually purchasing explicit hardware servers explicitly matched to code outputs."],
        ans: 1,
        exp: "Serverless structurally abstracts entire backend physical execution management away completely, triggering massive automatic execution explicitly only when parameters are natively invoked."
      },
      // Advanced
      {
        q: "What relies absolutely at the native core of an IaC (Infrastructure as Code) framework like Terraform?",
        opts: ["Provisioning infrastructure manually strictly via localized GUI clicking structures.", "Aggressively mapping and orchestrating complete physical cloud topologies deeply utilizing strict declarative automated code schemas specifically.", "Bypassing completely standard cloud boundaries natively to execute physical OS structures.", "Encrypting distinct backend networks forcefully via symmetric pipelines exactly."],
        ans: 1,
        exp: "IaC replaces highly manual brittle config tasks completely with absolute version-controlled explicit code templates deploying fully isolated exact clone architectures natively."
      },
      {
        q: "How does Kubernetes fundamentally differ technically from Docker natively?",
        opts: ["Kubernetes strictly builds native individual isolated containers explicitly whereas Docker fiercely orchestrates vast container fleets.", "Docker explicitly produces and fiercely standardizes the localized isolated container image natively, while Kubernetes strictly orchestrates, networks, and scales thousands of those exact containers simultaneously.", "Kubernetes is basically a legacy virtualization layer totally deprecated specifically by Docker frameworks.", "There is literally no architectural difference directly."],
        ans: 1,
        exp: "Docker essentially constitutes the underlying micro-environment formatting specifically, while Kubernetes acts intensely as the massive overarching conductor deeply managing traffic arrays."
      },
      {
        q: "What exact structural purpose strictly defines an API Gateway natively acting within a microservice cluster?",
        opts: ["Directly parsing physical CSS payloads selectively into databases.", "Aggressively functioning effectively as the strict single absolute entry point routing external requests accurately to vast localized decoupled backend services securely.", "Blocking distinct native CI/CD deployments directly from reaching endpoints.", "Rendering completely HTML specifically over offline hardware terminals."],
        ans: 1,
        exp: "API Gateways centralize deeply complex authentication, rate-limiting, and deep absolute routing entirely decoupling external native clients specifically from shifting backend boundaries."
      },
      {
        q: "Which specific massive architectural issue does Multi-Region deployment explicitly resolve natively over isolated Multi-AZ schemas?",
        opts: ["Multi-AZ defends fiercely against local targeted physical facility failure specifically, whereas Multi-Region aggressively defends the system natively against absolute massive comprehensive geographical total disasters.", "Multi-Region operates natively significantly more affordably scaling easily locally.", "Multi-AZ specifically expands explicit latency completely impacting systems actively.", "There is zero structural defense divergence natively."],
        ans: 0,
        exp: "Multi-Region explicitly guarantees extreme architectural resilience natively permitting the absolute codebase schema to execute securely even if an entire continental tectonic array crashes entirely."
      },
      {
        q: "In a strict DevOps pipeline scenario natively executing Blue-Green Deployments, what is firmly achieved?",
        opts: ["Modifying distinct native production logic aggressively in real-time blindly risking the system.", "Fiercely operating essentially two exact identical absolute production environments natively, instantly routing strict traffic seamlessly to the new 'Green' build explicitly achieving absolute zero downtime perfectly.", "Deploying exactly one half of the code natively over an unspecified limit.", "Painting the specific console logs exclusively to color parameters selectively."],
        ans: 1,
        exp: "Blue-Green deployments deeply isolate structural risk natively, permitting instant explicit rollbacks seamlessly since the active underlying 'Blue' base remains distinctly alive simultaneously."
      }
    ]
  }
];