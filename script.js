function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');

 
  const postLoginPages = ['dashboard', 'paths', 'details', 'progress', 'resources', 'certificates'];
  const hamburger = document.getElementById('hamburgerBtn');
  const loginBtn = document.getElementById('loginNavBtn');

  if (postLoginPages.includes(pageId)) {
    if (hamburger) hamburger.style.display = 'flex';
    if (loginBtn) loginBtn.style.display = 'none';
  } else {
    closeSidebar();
    if (hamburger) hamburger.style.display = 'none';
    if (loginBtn) loginBtn.style.display = pageId === 'landing' ? 'block' : 'none';
  }


  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const isOpen = sidebar.classList.contains('active');
  if (isOpen) {
    closeSidebar();
  } else {
    sidebar.classList.add('active');
    document.body.classList.add('sidebar-visible');
  }
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.body.classList.remove('sidebar-visible');
}

function showDetails(course) {
  if (course === 'frontend-developer') {
    document.getElementById('course-title').textContent = 'Frontend Developer Course Details';
    document.getElementById('short-desc').innerHTML = '<b>Build interactive and responsive user interfaces for web applications</b>';
    document.getElementById('long-desc').textContent = 'This comprehensive frontend development course covers HTML5, CSS3, JavaScript, and modern frameworks like React. Students will learn to create responsive websites, implement interactive features, and build complete web applications from scratch.';
    document.getElementById('objectives').innerHTML = `
      <li>Master HTML5 semantic structure and accessibility</li>
      <li>Create responsive layouts with CSS3 and Flexbox/Grid</li>
      <li>Develop interactive features with JavaScript</li>
      <li>Build modern web apps with React</li>
      <li>Implement best practices for performance and SEO</li>
    `;
  } else if (course === 'data-science') {
    document.getElementById('course-title').textContent = 'Data Science Course Details';
    document.getElementById('short-desc').innerHTML = '<b>Master data science fundamentals and apply machine learning techniques to real-world problems</b>';
    document.getElementById('long-desc').textContent = 'This comprehensive data science course covers Python programming, statistical analysis, machine learning algorithms, and data visualization. Students will learn to collect, clean, and analyze data, build predictive models, and communicate insights effectively. The course includes hands-on projects using real datasets.';
    document.getElementById('objectives').innerHTML = `
      <li>Master Python programming for data analysis</li>
      <li>Understand statistical concepts and methods</li>
      <li>Learn machine learning algorithms and techniques</li>
      <li>Apply data visualization and storytelling</li>
      <li>Build end-to-end data science projects</li>
    `;
  } else if (course === 'mobile-app-development') {
    document.getElementById('course-title').textContent = 'Mobile App Development Course Details';
    document.getElementById('short-desc').innerHTML = '<b>Create native and cross-platform mobile applications for iOS and Android</b>';
    document.getElementById('long-desc').textContent = 'This mobile development course covers native development with Java/Kotlin for Android and Swift for iOS, as well as cross-platform development with Flutter. Students will learn UI/UX design, API integration, and app deployment to app stores.';
    document.getElementById('objectives').innerHTML = `
      <li>Develop Android apps with Java/Kotlin</li>
      <li>Create iOS apps with Swift</li>
      <li>Build cross-platform apps with Flutter</li>
      <li>Integrate REST APIs and databases</li>
      <li>Publish apps to app stores</li>
    `;
  } else if (course === 'full-stack-developer') {
    document.getElementById('course-title').textContent = 'Full Stack Developer Course Details';
    document.getElementById('short-desc').innerHTML = '<b>Build complete web applications from frontend to backend and deployment</b>';
    document.getElementById('long-desc').textContent = 'This full-stack development course covers both frontend and backend technologies, databases, and deployment. Students will learn to build scalable web applications using modern technologies and best practices for the entire development lifecycle.';
    document.getElementById('objectives').innerHTML = `
      <li>Master frontend technologies (HTML, CSS, JS, React)</li>
      <li>Develop backend APIs with Node.js/Python</li>
      <li>Design and implement databases</li>
      <li>Implement authentication and security</li>
      <li>Deploy applications to production</li>
    `;
  } else if (course === 'backend-developer') {
    document.getElementById('course-title').textContent = 'Backend Developer Course Details';
    document.getElementById('short-desc').innerHTML = '<b>Build robust server-side applications and APIs</b>';
    document.getElementById('long-desc').textContent = 'This backend development course focuses on server-side programming, databases, APIs, and system architecture. Students will learn multiple programming languages, database design, RESTful APIs, and scalable application development.';
    document.getElementById('objectives').innerHTML = `
      <li>Master server-side programming (Python/Java/PHP)</li>
      <li>Design and implement databases (SQL/NoSQL)</li>
      <li>Build RESTful APIs and microservices</li>
      <li>Implement authentication and security</li>
      <li>Deploy and scale backend systems</li>
    `;
  } else if (course === 'cloud-computing') {
    document.getElementById('course-title').textContent = 'Cloud Computing Course Details';
    document.getElementById('short-desc').innerHTML = '<b>Master cloud platforms, containerization, and DevOps practices</b>';
    document.getElementById('long-desc').textContent = 'This cloud computing course covers cloud fundamentals, AWS/Azure services, containerization with Docker, orchestration with Kubernetes, CI/CD pipelines, monitoring, and security. Students will learn to design, deploy, and manage scalable cloud infrastructure.';
    document.getElementById('objectives').innerHTML = `
      <li>Understand cloud computing fundamentals</li>
      <li>Master AWS/Azure cloud services</li>
      <li>Containerize applications with Docker</li>
      <li>Orchestrate with Kubernetes</li>
      <li>Implement CI/CD and monitoring</li>
    `;
  } else if (course === 'cyber-security') {
    document.getElementById('course-title').textContent = 'Cyber Security Course Details';
    document.getElementById('short-desc').innerHTML = '<b>Protect systems and networks from cyber threats</b>';
    document.getElementById('long-desc').textContent = 'This cyber security course covers security fundamentals, ethical hacking, network security, firewalls, cryptography, and incident response. Students will learn to identify vulnerabilities, implement security measures, and respond to security incidents.';
    document.getElementById('objectives').innerHTML = `
      <li>Understand cyber security fundamentals</li>
      <li>Learn ethical hacking techniques</li>
      <li>Implement network security measures</li>
      <li>Configure firewalls and intrusion detection</li>
      <li>Respond to security incidents</li>
    `;
  } else if (course === 'data-structures-algorithms') {
    document.getElementById('course-title').textContent = 'Data Structures & Algorithms Course Details';
    document.getElementById('short-desc').innerHTML = '<b>Master fundamental data structures and algorithmic problem-solving</b>';
    document.getElementById('long-desc').textContent = 'This course covers essential data structures (arrays, linked lists, stacks, queues, trees, graphs) and algorithms (sorting, searching, dynamic programming). Students will learn algorithmic analysis, time complexity, and efficient problem-solving techniques.';
    document.getElementById('objectives').innerHTML = `
      <li>Implement fundamental data structures</li>
      <li>Master sorting and searching algorithms</li>
      <li>Analyze algorithm time and space complexity</li>
      <li>Solve complex problems efficiently</li>
      <li>Apply data structures in real applications</li>
    `;
  }
  showPage('details');
}

function handleLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (username && password) {
    showPage('dashboard');
    document.getElementById('sidebar').classList.add('active');
    document.body.classList.add('sidebar-visible');
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
  } else {
    alert('Please fill in all fields');
  }
}

function handleRegister() {
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const confirmPassword = document.getElementById('regConfirmPassword').value.trim();

  if (username && password && confirmPassword) {
    if (password === confirmPassword) {
      showPage('dashboard');
      document.getElementById('sidebar').classList.add('active');
      document.body.classList.add('sidebar-visible');
      document.getElementById('regUsername').value = '';
      document.getElementById('regPassword').value = '';
      document.getElementById('regConfirmPassword').value = '';
    } else {
      alert('Passwords do not match');
    }
  } else {
    alert('Please fill in all fields');
  }
}
