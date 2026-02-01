// assessment.js

// PART 1: Start, Select Student Type, and Restart

function selectStudentType(type) {
  document.getElementById("assessmentStart").style.display = "none";
  document.getElementById("assessmentFlow").style.display = "";

  let optionsHtml = "";
  let title = "";
  if (type === "10th") {
    title = "What do you need help with after 10th?";
    optionsHtml = `
      <button class="assessment-btn" onclick="showNextStep('10th','stream')">Choosing subjects/stream for 11th</button>
      <button class="assessment-btn" onclick="showNextStep('10th','diploma')">Diploma or skill-based courses</button>
      <button class="assessment-btn" onclick="showNextStep('10th','govtjob')">Government jobs after 10th</button>
      <button class="assessment-btn" onclick="showNextStep('10th','notSure')">Not sure / Need guidance</button>
    `;
  } else if (type === "12th") {
    title = "What do you need help with after 12th?";
    optionsHtml = `
      <button class="assessment-btn" onclick="showNextStep('12th','degree')">Choosing a degree course/career</button>
      <button class="assessment-btn" onclick="showNextStep('12th','diploma')">Diploma or skill-based courses</button>
      <button class="assessment-btn" onclick="showNextStep('12th','entrance')">Entrance exams after 12th</button>
      <button class="assessment-btn" onclick="showNextStep('12th','govtjob')">Government jobs after 12th</button>
      <button class="assessment-btn" onclick="showNextStep('12th','notSure')">Not sure / Need guidance</button>
    `;
  } else if (type === "dropout") {
    title = "What do you need help with?";
    optionsHtml = `
      <button class="assessment-btn" onclick="showNextStep('dropout','resume')">Resume studies (open schooling/NIOS)</button>
      <button class="assessment-btn" onclick="showNextStep('dropout','skill')">Skill-based courses/diploma</button>
      <button class="assessment-btn" onclick="showNextStep('dropout','govtjob')">Government jobs</button>
      <button class="assessment-btn" onclick="showNextStep('dropout','notSure')">Not sure / Need guidance</button>
    `;
  }

  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">${title}</h2>
      <div class="assessment-options">${optionsHtml}</div>
      <button class="assessment-btn" style="margin-top:30px;background:#eee;color:#333;" onclick="restartAssessment()">Back</button>
    </div>
  `;
}

function restartAssessment() {
  document.getElementById("assessmentStart").style.display = "";
  document.getElementById("assessmentFlow").style.display = "none";
  document.getElementById("assessmentFlow").innerHTML = "";
}

// PART 2: 10th Student Flows

const streamDetails = {
  science: {
    title: "Science Stream",
    desc: "Best for students who enjoy Physics, Chemistry, Maths, Biology, or Computer Science. Opens doors to careers in Engineering, Medicine, Research, IT, Architecture, and more.",
    subjects:
      "Physics, Chemistry, Mathematics/Biology, Computer Science, English, etc.",
    tips: "Choose Science if you have strong analytical & problem-solving skills and enjoy experiments or technology.",
  },
  commerce: {
    title: "Commerce Stream",
    desc: "Ideal for those interested in Business, Accounting, Economics, and Management. Leads to careers in CA, CS, Banking, BBA, Law, Finance, Digital Marketing, etc.",
    subjects:
      "Accountancy, Business Studies, Economics, Maths (optional), English, etc.",
    tips: "Go for Commerce if you like numbers, business, or want to pursue finance or management.",
  },
  arts: {
    title: "Arts/Humanities Stream",
    desc: "Perfect for students interested in Social Sciences, Languages, Literature, Psychology, History, Political Science, etc. Careers include UPSC, Teaching, Journalism, Design, Law, etc.",
    subjects:
      "History, Political Science, Geography, Psychology, Sociology, English, etc.",
    tips: "Arts is best for creative minds and those interested in society, history, or languages.",
  },
  vocational: {
    title: "Vocational/Skill-based Stream",
    desc: "For those who want to learn practical, job-oriented skills in IT, Hospitality, Design, Agriculture, etc. These courses are industry-relevant and job-ready.",
    subjects:
      "IT, Retail, Tourism, Fashion Design, Agriculture, Healthcare, etc.",
    tips: "Vocational stream is for those who want early job opportunities and hands-on learning.",
  },
};

function showNextStep(userType, helpType) {
  // 10th: Stream selection
  if (userType === "10th" && helpType === "stream") {
    document.getElementById("assessmentFlow").innerHTML = `
      <div class="assessment-card">
        <h2 class="assessment-title">What are your main interests or strengths?</h2>
        <div class="assessment-options">
          <button class="assessment-btn" onclick="showStreamResult('science')">Science & Technology</button>
          <button class="assessment-btn" onclick="showStreamResult('commerce')">Business & Commerce</button>
          <button class="assessment-btn" onclick="showStreamResult('arts')">Arts & Humanities</button>
          <button class="assessment-btn" onclick="showStreamResult('vocational')">Vocational/Skill-based</button>
        </div>
        <button class="assessment-btn" style="margin-top:30px;background:#eee;color:#333;" onclick="selectStudentType('10th')">Back</button>
      </div>
    `;
    return;
  }

  // 10th: Diploma/Skill-based courses
  if (userType === "10th" && helpType === "diploma") {
    document.getElementById("assessmentFlow").innerHTML = `
      <div class="assessment-card">
        <h2 class="assessment-title">Which field interests you for a diploma or skill course?</h2>
        <div class="assessment-options">
          <button class="assessment-btn" onclick="showDiplomaSuggestion('engineering')">Engineering/Polytechnic</button>
          <button class="assessment-btn" onclick="showDiplomaSuggestion('it')">IT & Computer</button>
          <button class="assessment-btn" onclick="showDiplomaSuggestion('hotel')">Hotel Management</button>
          <button class="assessment-btn" onclick="showDiplomaSuggestion('design')">Design/Fashion/Animation</button>
          <button class="assessment-btn" onclick="showDiplomaSuggestion('paramedical')">Paramedical/Agriculture</button>
          <button class="assessment-btn" onclick="showDiplomaSuggestion('arts')">Arts & Fine Arts</button>
          <button class="assessment-btn" onclick="showDiplomaSuggestion('commerce')">Commerce & Business</button>
          <button class="assessment-btn" onclick="showDiplomaSuggestion('vocational')">Vocational/Skill-Based</button>
          <button class="assessment-btn" onclick="showDiplomaSuggestion('government')">Government Jobs</button>
        </div>
        <button class="assessment-btn" style="margin-top:30px;background:#eee;color:#333;" onclick="selectStudentType('10th')">Back</button>
      </div>
    `;
    return;
  }

  // 10th: Government jobs
  if (userType === "10th" && helpType === "govtjob") {
    showGovtJobInfo();
    return;
  }

  // 10th: Not sure / Need guidance
  if (userType === "10th" && helpType === "notSure") {
    showRegisterPrompt();
    return;
  }

  // 12th: Degree/career
  if (userType === "12th" && helpType === "degree") {
    show12thStreamQuestion("degree");
    return;
  }
  // 12th: Diploma/skill
  if (userType === "12th" && helpType === "diploma") {
    show12thDiplomaStreamQuestion();
    return;
  }
  // 12th: Entrance exams
  if (userType === "12th" && helpType === "entrance") {
    show12thStreamQuestion("entrance");
    return;
  }
  // 12th: Govt jobs
  if (userType === "12th" && helpType === "govtjob") {
    show12thStreamQuestion("govtjob");
    return;
  }
  // 12th: Not sure / Need guidance
  if (userType === "12th" && helpType === "notSure") {
    showRegisterPrompt();
    return;
  }

  // Dropout and fallback
  let msg = "";
  if (userType === "dropout") {
    if (helpType === "resume") {
      document.getElementById("assessmentFlow").innerHTML = `
      <div class="assessment-card">
        <h2 class="assessment-title">Resume Studies (Open Schooling / NIOS)</h2>
        <div style="margin-bottom:14px;">
          <b>Open Schooling (NIOS):</b> National Institute of Open Schooling (NIOS) allows you to complete 10th or 12th from home through distance mode. No upper age limit.<br>
          <b>Key Features:</b>
          <ul style="padding-left:18px;">
            <li>Flexible admission & exam system (On-Demand Exams)</li>
            <li>Choose subjects as per your interest</li>
            <li>Study material in Hindi/English/regional languages</li>
            <li>Certificates recognized by all universities, colleges, and government jobs</li>
          </ul>
          <b>Official Links:</b><br>
          <a href="https://www.nios.ac.in/" target="_blank">NIOS Official Website</a><br>
          <a href="https://www.nios.ac.in/programmes.aspx" target="_blank">NIOS Programmes & Courses</a><br>
          <a href="https://www.nios.ac.in/online-course-material/secondary-courses.aspx" target="_blank">Secondary (10th) Courses</a><br>
          <a href="https://www.nios.ac.in/online-course-material/senior-secondary-courses.aspx" target="_blank">Senior Secondary (12th) Courses</a><br>
          <a href="https://www.nios.ac.in/online-course-material/vocational-courses.aspx" target="_blank">Vocational Courses</a>
        </div>
        <div style="background:#f4f7fa;border-radius:8px;padding:12px 16px;margin:10px 0 0 0;font-size:0.97rem;">
          <b>Tip:</b>  NIOS admissions are open throughout the year. You can also visit your city’s NIOS study centre for help and support.
        </div>
        <button class="assessment-btn" onclick="selectStudentType('dropout')" style="margin-top:18px;">Back</button>
        <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
      </div>
    `;
      return;
    }
    if (helpType === "skill") {
      document.getElementById("assessmentFlow").innerHTML = `
      <div class="assessment-card">
        <h2 class="assessment-title">Skill-based Courses/Diploma for Dropouts</h2>
        <div style="margin-bottom:14px;">
          <b>Popular Options:</b>
          <ul style="padding-left:18px;">
            <li>ITI Trades (Electrician, Fitter, Welder, Computer, etc.)</li>
            <li>Short-term courses: Data Entry, Digital Marketing, Graphic Design</li>
            <li>NIOS Vocational Courses (AI, Data Analytics, Hotel Mgmt, etc.)</li>
            <li>NSDC Skill India Programs</li>
          </ul>
          <b>Official Links:</b><br>
          <a href="https://www.nios.ac.in/online-course-material/vocational-courses.aspx" target="_blank">NIOS Vocational Courses</a><br>
          <a href="https://www.skillindia.gov.in/" target="_blank">Skill India Portal (NSDC)</a>
        </div>
        <button class="assessment-btn" onclick="selectStudentType('dropout')" style="margin-top:18px;">Back</button>
        <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
      </div>
    `;
      return;
    }
    if (helpType === "govtjob") {
      document.getElementById("assessmentFlow").innerHTML = `
      <div class="assessment-card">
        <h2 class="assessment-title">Government Jobs for Dropouts</h2>
        <div style="margin-bottom:14px;">
          <b>10th Pass Jobs:</b> Railway Group D, SSC MTS, Police Constable, Army Tradesman, Post Office GDS<br>
          <b>8th Pass/Below:</b> Safai Karamchari, Peon, Helper, Contractual jobs in govt schemes<br>
          <b>Tip:</b> Eligibility, age limit & selection process har job ke liye alag hota hai. Official notification dhyan se padhein.
        </div>
        <b>Useful Links:</b><br>
        <a href="https://ssc.nic.in/" target="_blank">SSC (Staff Selection Commission)</a><br>
        <a href="https://www.rrbcdg.gov.in/" target="_blank">Railway Recruitment</a><br>
        <a href="https://www.indiapost.gov.in/" target="_blank">India Post</a><br>
        <button class="assessment-btn" onclick="selectStudentType('dropout')" style="margin-top:18px;">Back</button>
        <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
      </div>
    `;
      return;
    }
    if (helpType === "notSure") {
      showRegisterPrompt();
      return;
    }
  }

  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">${msg}</h2>
      <button class="assessment-btn" style="margin-top:30px;background:#eee;color:#333;" onclick="restartAssessment()">Back to Start</button>
    </div>
  `;
}

function showStreamResult(stream) {
  const s = streamDetails[stream];
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">${s.title}</h2>
      <p style="font-size:1.08rem;margin:18px 0 10px 0;">${s.desc}</p>
      <div style="text-align:left; margin: 0 auto 10px auto; max-width:340px;">
        <b>Common Subjects:</b> <br>${s.subjects}
      </div>
      <div style="background:#f4f7fa;border-radius:8px;padding:12px 16px;margin:16px 0;font-size:0.97rem;">
        <b>Tip:</b> ${s.tips}
      </div>
      <button class="assessment-btn" onclick="showNextStep('10th','stream')" style="margin-top:18px;">Back to Stream Selection</button>
      <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
    </div>
  `;
}

// Sample diplomaDetails object for 10th (add more as needed)
const diplomaDetails = {
  engineering: {
    title: "Diploma in Engineering/Polytechnic",
    description:
      "A 3-year technical course after 10th in branches like Mechanical, Civil, Electrical, Computer, etc.",
    topInstitutes: [
      {
        name: "Government Polytechnic, Mumbai",
        link: "https://gpmumbai.ac.in/",
      },
      {
        name: "Pusa Polytechnic, Delhi",
        link: "https://tte.delhigovt.nic.in/",
      },
      {
        name: "Lovely Professional University (LPU)",
        link: "https://www.lpu.in/programmes/all/10th",
      },
    ],
    admission:
      "State polytechnic entrance exams (e.g. JEECUP, Delhi CET), or direct admission in private colleges.",
    eligibility:
      "10th pass with minimum 35-40% marks (varies by state/college).",
    duration: "3 years",
    fees: "₹5,000 – ₹60,000 per year (Govt. colleges are cheaper)",
    careerScope:
      "Junior Engineer, Technician, Lateral entry to B.Tech, jobs in PSUs/private sector.",
  },
  // Add more fields as needed (it, hotel, design, etc.)
  it: {
    title: "Diploma in IT & Computer",
    description:
      "Technical diploma after 10th in Computer Science, IT, Web Development, Networking, or Software.",
    topInstitutes: [
      { name: "NIELIT (DOEACC)", link: "https://www.nielit.gov.in/" },
      {
        name: "Government Polytechnic, Pune",
        link: "https://www.gppune.ac.in/",
      },
      {
        name: "Jamia Millia Islamia Polytechnic",
        link: "https://www.jmi.ac.in/",
      },
    ],
    admission:
      "State polytechnic entrance exams or direct admission in private colleges.",
    eligibility: "10th pass (minimum marks as per institute).",
    duration: "3 years",
    fees: "₹8,000 – ₹80,000 per year",
    careerScope:
      "IT Technician, Web Developer, Support Engineer, jobs in IT companies, further BCA/B.Sc./B.Tech.",
  },
  hotel: {
    title: "Diploma in Hotel Management",
    description:
      "Professional course in hospitality, catering, and hotel administration after 10th or 12th.",
    topInstitutes: [
      { name: "IHM Pusa, Delhi", link: "https://ihmpusa.net/" },
      { name: "IHM Mumbai", link: "https://ihmctan.edu/" },
      {
        name: "WelcomeGroup Graduate School of Hotel Administration",
        link: "https://manipal.edu/wgsha.html",
      },
    ],
    admission:
      "NCHM JEE (for degree), direct admission for diploma in many institutes.",
    eligibility: "10th or 12th pass (varies by course/institute).",
    duration: "1–3 years",
    fees: "₹20,000 – ₹2,00,000 per year",
    careerScope:
      "Hotel Executive, Chef, Front Office, Event Manager, jobs in hotels, resorts, cruise lines.",
  },
  design: {
    title: "Diploma in Design/Fashion/Animation",
    description:
      "Creative diplomas after 10th in Fashion Design, Graphic Design, Interior Design, Animation, Multimedia.",
    topInstitutes: [
      { name: "NIFT (Fashion)", link: "https://www.nift.ac.in/" },
      { name: "Pearl Academy", link: "https://pearlacademy.com/" },
      { name: "Arena Animation", link: "https://www.arena-multimedia.com/in/" },
    ],
    admission:
      "NIFT/NID/UCEED entrance (for degree), direct admission for diploma/certificate courses.",
    eligibility: "10th or 12th pass (varies by course/institute).",
    duration: "1–3 years",
    fees: "₹30,000 – ₹2,50,000 per year",
    careerScope:
      "Fashion Designer, Animator, Graphic Designer, Interior Designer, jobs in studios, media, freelancing.",
  },
  paramedical: {
    title: "Diploma in Paramedical/Agriculture",
    description:
      "Job-oriented healthcare and agriculture diplomas after 10th: DMLT, Radiology, Nursing, Agriculture, etc.",
    topInstitutes: [
      { name: "AIIMS Paramedical", link: "https://www.aiims.edu/en.html" },
      {
        name: "Govt. Medical College, Nagpur",
        link: "https://www.gmcnagpur.gov.in/",
      },
      {
        name: "Indian Agricultural Research Institute",
        link: "https://www.iari.res.in/",
      },
    ],
    admission: "Entrance exam or merit-based (varies by state/institute).",
    eligibility: "10th or 12th pass (PCM/PCB for some courses).",
    duration: "1–3 years",
    fees: "₹10,000 – ₹1,00,000 per year",
    careerScope:
      "Lab Technician, X-Ray Technician, Nurse, Agriculture Assistant, jobs in hospitals, clinics, agri-firms.",
  },
  arts: {
    title: "Diploma in Arts & Fine Arts",
    description:
      "Courses in Drawing, Painting, Performing Arts, Music, Applied Arts after 10th or 12th.",
    topInstitutes: [
      {
        name: "Sir JJ School of Art, Mumbai",
        link: "https://www.sirjjschoolofart.in/",
      },
      { name: "Delhi College of Art", link: "https://colart.delhi.gov.in/" },
      {
        name: "Kala Bhavana, Visva-Bharati",
        link: "https://www.visvabharati.ac.in/",
      },
    ],
    admission: "Merit or portfolio/interview-based admission.",
    eligibility: "10th or 12th pass (varies by course/institute).",
    duration: "1–3 years",
    fees: "₹5,000 – ₹80,000 per year",
    careerScope:
      "Artist, Illustrator, Musician, Art Teacher, jobs in studios, galleries, education.",
  },
  commerce: {
    title: "Diploma/Professional Courses in Commerce & Business",
    description:
      "Business and finance diplomas after 10th/12th: Accountancy, Banking, Taxation, Retail, Office Management.",
    topInstitutes: [
      {
        name: "YMCA Institute of Management, Delhi",
        link: "https://www.newdelhiymca.in/",
      },
      { name: "IGNOU", link: "https://ignou.ac.in/" },
      { name: "St. Xavier’s College, Mumbai", link: "https://xaviers.edu/" },
    ],
    admission: "Direct admission or entrance (for some courses).",
    eligibility: "10th or 12th pass (varies by course/institute).",
    duration: "1–3 years",
    fees: "₹10,000 – ₹1,00,000 per year",
    careerScope:
      "Accountant, Office Executive, Retail Manager, jobs in business, banks, finance sector.",
  },
  vocational: {
    title: "Vocational/Skill-Based Courses",
    description:
      "Short-term, job-ready courses after 10th/12th: ITI, Electrician, Fitter, Beauty & Wellness, Digital Marketing, etc.",
    topInstitutes: [
      {
        name: "National Skill Training Institutes (NSTI)",
        link: "https://dgt.gov.in/nsti",
      },
      { name: "Don Bosco Technical Institute", link: "https://dbti.in/" },
      { name: "Aptech Learning", link: "https://www.aptech-education.com/" },
    ],
    admission: "Direct admission or entrance (for some trades).",
    eligibility: "10th or 12th pass.",
    duration: "6 months – 2 years",
    fees: "₹5,000 – ₹60,000 per course",
    careerScope:
      "Electrician, Plumber, Beautician, Digital Marketer, jobs in trades, startups, self-employment.",
  },
  government: {
    title: "Government Jobs Preparation (After 10th/12th)",
    description:
      "Preparation for SSC, Railways, Police, Defence, State Govt, and other public sector jobs after 10th/12th.",
    topInstitutes: [
      {
        name: "National Career Service Portal",
        link: "https://www.ncs.gov.in/",
      },
      { name: "SSC Official Site", link: "https://ssc.nic.in/" },
      { name: "Railway Recruitment Board", link: "https://www.rrbcdg.gov.in/" },
    ],
    admission:
      "Competitive exams like SSC CHSL, SSC MTS, RRB Group D, Police Constable, Army GD, etc.",
    eligibility: "10th or 12th pass (varies by exam/post).",
    duration: "Depends on exam cycle (6 months – 2 years prep)",
    fees: "Govt. jobs: exam fee ₹100–₹500 only, coaching extra if taken",
    careerScope:
      "Clerk, Constable, Railway staff, Army/Navy/Air Force, jobs in various state/central govt departments.",
  },
};

function showDiplomaSuggestion(field) {
  const d = diplomaDetails[field];
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">${d.title}</h2>
      <p style="font-size:1.08rem;margin:18px 0 10px 0;">${d.description}</p>
      <div style="text-align:left; margin: 0 auto 10px auto; max-width:340px;">
        <b>Top Institutes/Links:</b>
        <ul>
          ${d.topInstitutes
            .map(
              (i) =>
                `<li><a href="${i.link}" target="_blank">${i.name}</a></li>`
            )
            .join("")}
        </ul>
        <b>Admission Process:</b> ${d.admission}<br>
        <b>Eligibility:</b> ${d.eligibility}<br>
        <b>Duration:</b> ${d.duration}<br>
        <b>Fees:</b> ${d.fees}<br>
        <b>Career Scope:</b> ${d.careerScope}
      </div>
      <button class="assessment-btn" onclick="showNextStep('10th','diploma')" style="margin-top:18px;">Back to Diploma/Skill Courses</button>
      <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
    </div>
  `;
}

function showGovtJobInfo() {
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">Top Government Jobs After 10th</h2>
      <div style="text-align:left; margin: 0 auto 10px auto; max-width:370px;">
        <ul style="padding-left:18px;">
          <li><b>Railway Group D, RPF Constable</b><br>
              <span style="font-size:0.96em;">Eligibility: 10th pass (50%+), Age: 18-25 yrs<br>
              <b>Exam:</b> RRB Group D, RPF Constable<br>
              <a href="https://www.rrbcdg.gov.in/" target="_blank">Official RRB Site</a></span>
          </li>
          <li style="margin-top:12px;"><b>SSC MTS, SSC GD, SSC Selection Posts</b><br>
              <span style="font-size:0.96em;">Eligibility: 10th pass, Age: 18-27 yrs<br>
              <b>Exam:</b> SSC MTS, SSC GD (CAPFs/Police)<br>
              <a href="https://ssc.nic.in/" target="_blank">Official SSC Site</a></span>
          </li>
          <li style="margin-top:12px;"><b>Indian Army/Navy/Airforce (Tradesman, Soldier GD, MR, etc.)</b><br>
              <span style="font-size:0.96em;">Eligibility: 10th pass, Age: 17-23 yrs<br>
              <b>Exam:</b> Physical + Written<br>
              <a href="https://joinindianarmy.nic.in/" target="_blank">Army</a> | 
              <a href="https://www.joinindiannavy.gov.in/" target="_blank">Navy</a> | 
              <a href="https://agnipathvayu.cdac.in/" target="_blank">Airforce</a></span>
          </li>
          <li style="margin-top:12px;"><b>State Police Constable</b><br>
              <span style="font-size:0.96em;">Eligibility: 10th pass, Physical/Medical<br>
              <b>Exam:</b> State Police Constable<br>
              <a href="https://www.sarkariprep.in/en/10th-12th-pass-govt-jobs/" target="_blank">State Police Info</a></span>
          </li>
          <li style="margin-top:12px;"><b>Post Office (GDS, MTS)</b><br>
              <span style="font-size:0.96em;">Eligibility: 10th pass, Age: 18-27 yrs<br>
              <a href="https://www.indiapost.gov.in/" target="_blank">India Post</a></span>
          </li>
        </ul>
        <div style="background:#f4f7fa;border-radius:8px;padding:12px 16px;margin:16px 0 0 0;font-size:0.97rem;">
          <b>Tip:</b> Most jobs need a written exam (MCQ), some need physical/medical test. Age relaxation for reserved categories.<br>
          Check official sites for latest notifications and apply online.
        </div>
      </div>
      <button class="assessment-btn" onclick="selectStudentType('10th')" style="margin-top:18px;">Back</button>
      <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
    </div>
  `;
}

function showRegisterPrompt() {
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">Get Personalized Career Guidance</h2>
      <p style="font-size:1.08rem;margin:18px 0 10px 0;">
        Register and login to unlock one-to-one expert counselling for your career decisions after 10th.<br><br>
        <b>Benefits of registering:</b>
      </p>
      <ul style="text-align:left; margin:0 auto 15px auto; max-width:340px; font-size:1.05em; color:#232946;">
        <li>✔️ Personalized one-to-one career counselling session</li>
        <li>✔️ Guidance from certified and experienced career experts</li>
        <li>✔️ Get all your doubts and questions answered</li>
        <li>✔️ Psychometric assessment and stream recommendation</li>
        <li>✔️ Affordable fee (charged only for one-to-one counselling)</li>
        <li>✔️ Access to premium resources after login</li>
      </ul>
      <div style="background:#f4f7fa;border-radius:8px;padding:12px 16px;margin:16px 0 0 0;font-size:0.97rem;">
        <b>Note:</b> One-to-one counselling is a paid facility (typically ₹1500–₹4000 per session).<br>
        You can register/login to book your session. After login, our team will connect you for personalized support.
      </div>
      <button class="assessment-btn" onclick="window.open('/public/register.html','_blank')" style="margin-top:18px;">Register Now</button>
      <button class="assessment-btn" onclick="window.open('/public/login.html','_blank')" style="margin-top:12px;">Login</button>
      <button class="assessment-btn" onclick="window.open('/public/contact.html','_blank')" style="margin-top:12px;background:#43e97b;color:#232946;">Contact Support</button>
      <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
    </div>
  `;
}

// PART 3: 12th Student Flows (Degree, Diploma, Entrance, Govt Jobs, Official Links)

// (Paste PART 3 and PART 4 from earlier responses here, or let me know if you want the rest in this message too!)
// If you want, I can post the rest (12th degree, diploma, entrance, govt jobs, diploma official links) here in full as well.

// PART 3: 12th Student Flows (Stream Question, Degree, Entrance, Govt Jobs)

function show12thStreamQuestion(nextStep) {
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">Which stream are you currently studying in 12th?</h2>
      <div class="assessment-options">
        <button class="assessment-btn" onclick="show12thRelevant('${nextStep}','science')">Science (PCM/PCB)</button>
        <button class="assessment-btn" onclick="show12thRelevant('${nextStep}','commerce')">Commerce</button>
        <button class="assessment-btn" onclick="show12thRelevant('${nextStep}','arts')">Arts/Humanities</button>
        <button class="assessment-btn" onclick="show12thRelevant('${nextStep}','vocational')">Vocational/Other</button>
      </div>
      <button class="assessment-btn" style="margin-top:30px;background:#eee;color:#333;" onclick="selectStudentType('12th')">Back</button>
    </div>
  `;
}

function show12thRelevant(section, stream) {
  if (section === "degree") {
    showDegreeDetail12th(stream);
  } else if (section === "entrance") {
    showEntranceExams12th(stream);
  } else if (section === "govtjob") {
    showGovtJobs12th(stream);
  }
}

// Degree details for 12th
const degreeDetails12th = {
  science: {
    title: "Degree Options for Science (PCM/PCB)",
    desc: "B.Sc (Physics, Chemistry, Maths, Biology, Computer Science), B.Tech/BE (Engineering), BCA, B.Pharm, B.Arch, MBBS, BDS, Nursing, etc.",
    careers:
      "Engineering, Research, IT, Healthcare, Data Science, Teaching, Civil Services, etc.",
    tips: "Choose this if you love science subjects, problem-solving, and want careers in technology, research, or healthcare.",
  },
  commerce: {
    title: "Degree Options for Commerce",
    desc: "B.Com, BBA, BMS, BAF, BFM, BCA (with maths), CA, CS, CMA, etc.",
    careers:
      "Banking, Accounting, Finance, Management, Marketing, Entrepreneurship, Civil Services.",
    tips: "Go for this if you are interested in business, numbers, management, or want to become a CA/manager.",
  },
  arts: {
    title: "Degree Options for Arts/Humanities",
    desc: "BA (English, History, Psychology, Political Science, etc.), BJMC, BFA, B.Des, BSW, etc.",
    careers: "UPSC, Journalism, Design, Social Work, Teaching, Law, Languages.",
    tips: "Best for creative, analytical, or socially aware students who like humanities, languages, or design.",
  },
  vocational: {
    title: "Degree Options for Vocational/Other",
    desc: "B.Voc, BHM (Hotel Mgmt), Animation, Event Management, Paramedical, etc.",
    careers: "Hotels, Healthcare, Animation, Event Management, Industry jobs.",
    tips: "Choose this for job-oriented, practical, or industry-specific careers.",
  },
};

function showDegreeDetail12th(stream) {
  const d = degreeDetails12th[stream];
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">${d.title}</h2>
      <p style="font-size:1.08rem;margin:18px 0 10px 0;">${d.desc}</p>
      <div style="text-align:left; margin: 0 auto 10px auto; max-width:340px;">
        <b>Career Options:</b> <br>${d.careers}
      </div>
      <div style="background:#f4f7fa;border-radius:8px;padding:12px 16px;margin:16px 0;font-size:0.97rem;">
        <b>Tip:</b> ${d.tips}
      </div>
      <button class="assessment-btn" onclick="show12thStreamQuestion('degree')" style="margin-top:18px;">Back to Stream Selection</button>
      <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
    </div>
  `;
}

// Entrance exams after 12th (with official links)
function showEntranceExams12th(stream) {
  let exams = "";
  if (stream === "science") {
    exams = `
      <b>Top Exams:</b> JEE Main/Advanced, NEET, BITSAT, CUET, NDA, NEST, ICAR AIEEA, State CETs<br>
      <b>Fields:</b> Engineering, Medical, Defence, Agriculture, Pure Sciences
      <br><b>Official Links:</b>
      <a href="https://jeemain.nta.nic.in/" target="_blank">JEE Main</a> | 
      <a href="https://neet.nta.nic.in/" target="_blank">NEET</a> | 
      <a href="https://cuet.samarth.ac.in/" target="_blank">CUET</a>
    `;
  } else if (stream === "commerce") {
    exams = `
      <b>Top Exams:</b> CUET, IPMAT, DU JAT, NPAT, CA Foundation, CS Foundation, CMA Foundation<br>
      <b>Fields:</b> Management, Commerce, Finance, Accounting, Law
      <br><b>Official Links:</b>
      <a href="https://cuet.samarth.ac.in/" target="_blank">CUET</a> | 
      <a href="https://www.icaiexam.icai.org/" target="_blank">CA Foundation</a>
    `;
  } else if (stream === "arts") {
    exams = `
      <b>Top Exams:</b> CUET, DUET, NIFT, NID, CLAT, BFA Entrance, Hotel Management (NCHMCT JEE)<br>
      <b>Fields:</b> Humanities, Design, Law, Hotel Management, Social Sciences
      <br><b>Official Links:</b>
      <a href="https://cuet.samarth.ac.in/" target="_blank">CUET</a> | 
      <a href="https://nift.ac.in/" target="_blank">NIFT</a> | 
      <a href="https://nchmjee.nta.nic.in/" target="_blank">NCHM JEE</a>
    `;
  } else {
    exams = `
      <b>Top Exams:</b> CUET, B.Voc Entrance, Hotel Management, Animation/Design, Paramedical<br>
      <b>Fields:</b> Vocational, Hospitality, Paramedical, Animation
      <br><b>Official Links:</b>
      <a href="https://cuet.samarth.ac.in/" target="_blank">CUET</a>
    `;
  }
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">Relevant Entrance Exams</h2>
      <div style="font-size:1.08rem;margin:18px 0 10px 0;">${exams}</div>
      <div style="background:#f4f7fa;border-radius:8px;padding:12px 16px;margin:16px 0;font-size:0.97rem;">
        <b>Tip:</b> Appear for exams relevant to your stream and career goals. Check official sites for latest updates.
      </div>
      <button class="assessment-btn" onclick="show12thStreamQuestion('entrance')" style="margin-top:18px;">Back to Stream Selection</button>
      <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
    </div>
  `;
}

// Govt jobs after 12th (with official links)
function showGovtJobs12th(stream) {
  let jobs = "";
  if (stream === "science") {
    jobs = `
      <b>Popular Jobs:</b> NDA, SSC CHSL, Railway Technician, State Police, Indian Navy/Airforce, Lab Assistant<br>
      <b>Eligibility:</b> 12th Science, Age 17-23+ (varies), Physical/Medical for Defence/Police
      <br><b>Official Links:</b>
      <a href="https://joinindianarmy.nic.in/" target="_blank">NDA/Army</a> | 
      <a href="https://ssc.nic.in/" target="_blank">SSC</a> | 
      <a href="https://www.rrbcdg.gov.in/" target="_blank">Railway</a>
    `;
  } else if (stream === "commerce") {
    jobs = `
      <b>Popular Jobs:</b> SSC CHSL, Bank Clerk, State Govt Clerk, Railway Clerk, Accountant, Income Tax Assistant<br>
      <b>Eligibility:</b> 12th Commerce, Age 18-27 (varies)
      <br><b>Official Links:</b>
      <a href="https://ssc.nic.in/" target="_blank">SSC</a> | 
      <a href="https://www.ibps.in/" target="_blank">Bank Exams</a>
    `;
  } else if (stream === "arts") {
    jobs = `
      <b>Popular Jobs:</b> SSC CHSL, State Govt Clerk, Police Constable, Railway Clerk, Assistant, Army Clerk<br>
      <b>Eligibility:</b> 12th Arts, Age 18-27 (varies)
      <br><b>Official Links:</b>
      <a href="https://ssc.nic.in/" target="_blank">SSC</a> | 
      <a href="https://www.rrbcdg.gov.in/" target="_blank">Railway</a>
    `;
  } else {
    jobs = `
      <b>Popular Jobs:</b> SSC CHSL, SSC MTS, State Govt Jobs, Railway Group C/D, Police, Army Tradesman<br>
      <b>Eligibility:</b> 12th Pass, Age 18-27 (varies)
      <br><b>Official Links:</b>
      <a href="https://ssc.nic.in/" target="_blank">SSC</a>
    `;
  }
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">Government Jobs After 12th (${
        stream.charAt(0).toUpperCase() + stream.slice(1)
      })</h2>
      <div style="font-size:1.08rem;margin:18px 0 10px 0;">${jobs}</div>
      <div style="background:#f4f7fa;border-radius:8px;padding:12px 16px;margin:16px 0;font-size:0.97rem;">
        <b>Tip:</b> Most jobs require a written exam and sometimes physical/medical test. Check official notifications for updates.
      </div>
      <button class="assessment-btn" onclick="show12thStreamQuestion('govtjob')" style="margin-top:18px;">Back to Stream Selection</button>
      <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
    </div>
  `;
}

// PART 4: 12th Diploma/Skill Courses Section (with Official Links)

function show12thDiplomaStreamQuestion() {
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">Which stream did you study in 12th?</h2>
      <div style="background:#f4f7fa;border-radius:8px;padding:10px 16px;margin-bottom:18px;">
        <b>Official Diploma Portals:</b><br>
        <a href="https://dseu.ac.in/diploma-programs/index.html" target="_blank">Delhi Skill and Entrepreneurship University (DSEU)</a><br>
        <a href="https://www.nielit.gov.in/" target="_blank">NIELIT (IT & Computer)</a><br>
        <a href="https://iisdt.in/courses/" target="_blank">IISDT (Online & Short-term)</a><br>
        <a href="https://www.shiksha.com/science/articles/1-year-diploma-courses-after-12th-blogId-191396" target="_blank">Shiksha: Diploma Info</a>
      </div>
      <div class="assessment-options">
        <button class="assessment-btn" onclick="show12thDiplomaCourses('science')">Science</button>
        <button class="assessment-btn" onclick="show12thDiplomaCourses('commerce')">Commerce</button>
        <button class="assessment-btn" onclick="show12thDiplomaCourses('arts')">Arts/Humanities</button>
        <button class="assessment-btn" onclick="show12thDiplomaCourses('vocational')">Vocational/Other</button>
      </div>
      <button class="assessment-btn" style="margin-top:30px;background:#eee;color:#333;" onclick="selectStudentType('12th')">Back</button>
    </div>
  `;
}

const diplomaCourses12th = {
  science: [
    {
      title: "Diploma in Engineering",
      desc: "Polytechnic courses in Civil, Mechanical, Electrical, Computer, etc. (1-3 years)",
      eligibility: "12th Science PCM",
      scope: "Junior Engineer, Technician, Lateral entry to B.Tech",
      official:
        '<a href="https://dseu.ac.in/diploma-programs/index.html" target="_blank">DSEU Official</a>',
    },
    {
      title: "Diploma in Pharmacy",
      desc: "2-year course for Pharmacist, Hospitals, Pharma companies",
      eligibility: "12th Science PCB",
      scope: "Pharmacist, Medical Rep, Lab Assistant",
      official:
        '<a href="https://www.jamiahamdard.ac.in/" target="_blank">Jamia Hamdard</a>',
    },
    {
      title: "Diploma in Medical Lab Technology",
      desc: "2-year course for lab technician roles",
      eligibility: "12th Science (PCB preferred)",
      scope: "Lab Technician, Diagnostic Centers",
      official:
        '<a href="https://www.aiims.edu/en.html" target="_blank">AIIMS</a>',
    },
    {
      title: "Diploma in Radiology",
      desc: "2-year course in medical imaging (X-ray, MRI, CT)",
      eligibility: "12th Science (PCB)",
      scope: "Radiology Technician",
      official:
        '<a href="https://www.nimsuniversity.org/" target="_blank">NIMS University</a>',
    },
  ],
  commerce: [
    {
      title: "Diploma in Business Management",
      desc: "1-year course in business and management fundamentals",
      eligibility: "12th Commerce",
      scope: "Business Admin, Sales, Marketing",
      official:
        '<a href="https://www.nmims.edu/programs/diploma-in-business-management" target="_blank">NMIMS</a>',
    },
    {
      title: "Diploma in Accounting & Taxation",
      desc: "6-12 months, accounting, GST, Tally, taxation basics",
      eligibility: "12th Commerce",
      scope: "Accountant, Tax Assistant",
      official: '<a href="https://www.icai.org/" target="_blank">ICAI</a>',
    },
    {
      title: "Diploma in Banking & Finance",
      desc: "1-year course in banking, finance, insurance basics",
      eligibility: "12th Commerce",
      scope: "Banking, Finance, Insurance",
      official: '<a href="https://www.nism.ac.in/" target="_blank">NISM</a>',
    },
  ],
  arts: [
    {
      title: "Diploma in Journalism/Mass Communication",
      desc: "1-2 years, media, reporting, PR, digital content",
      eligibility: "12th Arts",
      scope: "Journalist, Content Writer, PR",
      official: '<a href="https://iimc.gov.in/" target="_blank">IIMC</a>',
    },
    {
      title: "Diploma in Fashion Design",
      desc: "1-2 years, design, textiles, merchandising",
      eligibility: "12th Arts/Any",
      scope: "Fashion Designer, Merchandiser",
      official: '<a href="https://www.nift.ac.in/" target="_blank">NIFT</a>',
    },
    {
      title: "Diploma in Event Management",
      desc: "1-year, event planning, execution, marketing",
      eligibility: "12th Arts/Any",
      scope: "Event Manager, Coordinator",
      official: '<a href="https://www.niemindia.com/" target="_blank">NIEM</a>',
    },
  ],
  vocational: [
    {
      title: "Diploma in Hotel Management",
      desc: "1-3 years, hospitality, food production, catering",
      eligibility: "12th Any Stream",
      scope: "Hotels, Restaurants, Cruise",
      official:
        '<a href="https://www.ihmctan.edu/" target="_blank">IHM Mumbai</a>',
    },
    {
      title: "Diploma in Animation & Multimedia",
      desc: "1-2 years, animation, VFX, graphics",
      eligibility: "12th Any Stream",
      scope: "Animator, Designer",
      official:
        '<a href="https://www.arena-multimedia.com/in/" target="_blank">Arena Animation</a>',
    },
    {
      title: "Diploma in Digital Marketing",
      desc: "6-12 months, SEO, social media, ads",
      eligibility: "12th Any Stream",
      scope: "Digital Marketer, Social Media Manager",
      official: '<a href="https://www.nsim.gov.in/" target="_blank">NSIM</a>',
    },
  ],
};

function show12thDiplomaCourses(stream) {
  const list = diplomaCourses12th[stream];
  document.getElementById("assessmentFlow").innerHTML = `
    <div class="assessment-card">
      <h2 class="assessment-title">Top Diploma/Skill Courses after 12th (${
        stream.charAt(0).toUpperCase() + stream.slice(1)
      })</h2>
      <div style="text-align:left; margin:0 auto 10px auto; max-width:360px;">
        ${list
          .map(
            (course) => `
          <div style="margin-bottom:18px;">
            <b>${course.title}</b><br>
            <span style="font-size:0.98em;">${course.desc}</span><br>
            <b>Eligibility:</b> ${course.eligibility}<br>
            <b>Career Scope:</b> ${course.scope}<br>
            ${course.official ? `<b>Official Link:</b> ${course.official}` : ""}
          </div>
        `
          )
          .join("")}
      </div>
      <button class="assessment-btn" onclick="show12thDiplomaStreamQuestion()" style="margin-top:18px;">Back to Stream Selection</button>
      <button class="assessment-btn" onclick="restartAssessment()" style="margin-top:18px;background:#eee;color:#333;">Back to Start</button>
    </div>
  `;
}
