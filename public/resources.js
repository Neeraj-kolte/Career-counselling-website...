// ==== 1. Example Resource Data ====
const resources = [
  {
    title: "CBSE 10th Science Guide",
    desc: "PDF notes and sample papers for class 10 science.",
    studentType: "school",
    class: "10",
    stream: "science",
    category: "pdf",
    need: ["study material"],
    link: "https://cbse.nic.in/10th-science-guide.pdf",
  },
  {
    title: "JEE Main Physics Video Lectures",
    desc: "Best video lectures for JEE Main Physics.",
    studentType: "school",
    class: "11-12",
    stream: "science",
    category: "video",
    need: ["entrance exam", "jee"],
    link: "https://youtube.com/jee-physics",
  },
  {
    title: "DU Commerce Admission Process",
    desc: "Step-by-step DU B.Com admission guide.",
    studentType: "college",
    stream: "commerce",
    category: "article",
    need: ["admission"],
    link: "https://du.ac.in/commerce-admission",
  },
  {
    title: "Resume Building Guide",
    desc: "Step-by-step PDF guide to build a strong resume.",
    studentType: "college",
    stream: "any",
    category: "pdf",
    need: ["resume", "job search"],
    link: "https://www.careerride.com/sample-resume.pdf",
  },
  {
    title: "SSC GD Constable Exam Guide",
    desc: "Complete guide for SSC GD exam (10th pass, 18-23 yrs).",
    studentType: "government",
    ageLimit: { min: 18, max: 23 },
    entrance: "ssc",
    category: "pdf",
    need: ["government job", "entrance exam"],
    link: "https://ssc.nic.in/gd-guide.pdf",
  },
  {
    title: "Railway Group D Exam Video",
    desc: "Preparation video for Railway Group D (10th pass, 18-30 yrs).",
    studentType: "government",
    ageLimit: { min: 18, max: 30 },
    entrance: "railway",
    category: "video",
    need: ["government job", "entrance exam"],
    link: "https://youtube.com/railway-groupd",
  },
  {
    title: "NIOS Open Schooling Guide",
    desc: "How dropouts can complete 10th/12th with NIOS.",
    studentType: "dropout",
    category: "article",
    need: ["open schooling", "admission"],
    link: "https://nios.ac.in/open-schooling-guide",
  },
  // ...add more resources as needed
  // PDF Example
  {
    title: "CBSE 12th Chemistry Notes PDF",
    desc: "Comprehensive notes for CBSE class 12 Chemistry.",
    category: "pdf",
    studentType: "school",
    class: "12",
    stream: "science",
    need: ["study material"],
    link: "https://www.cbseacademic.nic.in/chemistry12notes.pdf",
  },
  // Article Example
  {
    title: "How to Choose the Right Career",
    desc: "Comprehensive article to help you pick the best career path.",
    category: "article",
    studentType: "college",
    stream: "any",
    need: ["career guidance"],
    link: "https://www.mindtools.com/a4wo118/choosing-the-right-career",
  },
  // Video Example
  {
    title: "Interview Tips Video",
    desc: "Watch this video for top interview tips and tricks.",
    category: "video",
    studentType: "college",
    need: ["interview"],
    link: "https://www.youtube.com/watch?v=R1vskiVDwl4",
  },
  // Government Exam PDF Example
  {
    title: "SSC GD Constable Exam Guide",
    desc: "Complete guide for SSC GD exam (10th pass, 18-23 yrs).",
    category: "pdf",
    studentType: "government",
    ageLimit: { min: 18, max: 23 },
    entrance: "ssc",
    need: ["government job", "entrance exam"],
    link: "https://ssc.nic.in/gd-guide.pdf",
  },
  // Dropout Article Example
  {
    title: "NIOS Open Schooling Guide",
    desc: "How dropouts can complete 10th/12th with NIOS.",
    category: "article",
    studentType: "dropout",
    need: ["open schooling", "admission"],
    link: "https://nios.ac.in/open-schooling-guide",
  },
  // ==== PDF GUIDES ====
  {
    title: "Digitalising Career Guidance Services",
    desc: "A comprehensive PDF on how to use digital tools for career guidance, including multimedia and interactive resources.",
    category: "pdf",
    studentType: "college",
    need: ["career guidance", "digital skills"],
    link: "https://cica.org.au/wp-content/uploads/Digitalising-career-guidance-services.pdf",
  },
  {
    title: "Career Guidance Cell Handbook (NECN)",
    desc: "Objectives and outcome-based education strategies for career growth in engineering students.",
    category: "pdf",
    studentType: "college",
    stream: "engineering",
    need: ["career planning"],
    link: "https://www.necn.ac.in/pdf/Career%20Guidance%20Cell-2019-20.pdf",
  },
  {
    title: "Career Guide for Schools (EU)",
    desc: "Effective career guidance handbook for school students, with activities and best practices.",
    category: "pdf",
    studentType: "school",
    class: "10",
    need: ["career guidance"],
    link: "https://www.schoolofthefuture.eu/sites/default/files/career_guide-handbook_low.pdf",
  },
  {
    title: "Inventory of Digital Career Guidance Tools (ILO)",
    desc: "A global inventory of digital tools for youth and adults supporting career development.",
    category: "pdf",
    studentType: "college",
    need: ["career tools", "digital skills"],
    link: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@ed_emp/@ifp_skills/documents/publication/wcms_841523.pdf",
  },
  {
    title: "OECD Career Guidance Report",
    desc: "International report on career information provision, assessment tools, and counseling strategies.",
    category: "pdf",
    studentType: "college",
    need: ["career guidance"],
    link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2004/12/career-guidance_g1gh4251/9789264015210-en.pdf",
  },

  // ==== ARTICLES ====
  {
    title: "Internet Sites for Career Planning (NCDA)",
    desc: "A curated list of online career planning, job search articles, and tools for students and professionals.",
    category: "article",
    studentType: "college",
    need: ["career planning", "job search"],
    link: "https://www.ncda.org/aws/NCDA/pt/sp/resources",
  },
  {
    title: "Cybersecurity Careers: Guide & Pathways",
    desc: "Explore a wide variety of careers in cybersecurity and the step-by-step process to achieve them.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["cybersecurity", "career guidance"],
    link: "https://cybersecurityguide.org/careers/",
  },
  {
    title: "IT Career Finder: Pathways & Videos",
    desc: "Descriptions, training, certification info, job board, and video tutorials for IT career aspirants.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["IT", "career guidance"],
    link: "http://www.itcareerfinder.com/it-careers.html",
  },
  {
    title: "AHIMA Careers in Health Information Management",
    desc: "Occupation and salary info, preparation tools, and mentoring for health information management careers.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["healthcare", "career guidance"],
    link: "http://www.ahima.org/careers",
  },
  {
    title: "CareerOneStop: Comprehensive Career Portal",
    desc: "From self-assessment to educational options, occupational info, salary and economic trend data.",
    category: "article",
    studentType: "college",
    need: ["career guidance", "job search"],
    link: "https://www.careeronestop.org/",
  },
  {
    title: "Medical Billing and Coding Careers",
    desc: "Education, certification, and career advice for medical billing and coding aspirants.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["medical", "career guidance"],
    link: "http://www.medicalbillingandcoding.org",
  },

  // ==== VIDEOS ====
  {
    title: "Forage Virtual Work Experiences",
    desc: "Online platform offering free virtual work experiences from top companies. Great for career exploration.",
    category: "video",
    studentType: "college",
    need: ["work experience", "career skills"],
    link: "https://www.theforage.com",
  },
  {
    title: "My Future Australia: Career Tools",
    desc: "Personalized career profile, matching occupations, and study options for students (with user-guide videos).",
    category: "video",
    studentType: "school",
    need: ["career guidance", "career ideas"],
    link: "https://myfuture.edu.au/",
  },
  {
    title: "Gladeo.org: Inclusive Career Navigation",
    desc: "Career navigation platform using videos, storytelling, and digital library of informational interviews.",
    category: "video",
    studentType: "college",
    need: ["career exploration"],
    link: "https://gladeo.org/",
  },
  {
    title: "Introduction to Career Databases (Phoenix College)",
    desc: "How to access and search career databases at Phoenix College library.",
    category: "video",
    studentType: "college",
    need: ["research", "career guidance"],
    link: "https://www.youtube.com/watch?v=aXVelnOhLT4",
  },
  {
    title: "Database Engineering Complete Course",
    desc: "Full YouTube course: Database structure, SQL, MySQL, and technical interview prep.",
    category: "video",
    studentType: "college",
    stream: "science",
    need: ["database", "technical interview"],
    link: "https://www.youtube.com/watch?v=iwRneX7GIGI",
  },
  {
    title: "Career Guidance Center Overview",
    desc: "Ferguson's Career Guidance Center: lifelong career exploration and planning.",
    category: "video",
    studentType: "college",
    need: ["career guidance"],
    link: "https://www.youtube.com/watch?v=em2W7uRfWTY",
  },
  {
    title: "Interview Tips Video",
    desc: "Watch this video for top interview tips and tricks.",
    category: "video",
    studentType: "college",
    need: ["interview"],
    link: "https://www.youtube.com/watch?v=R1vskiVDwl4",
  },
  // ==== PDF GUIDES ====
  {
    title: "Digitalising Career Guidance Services",
    desc: "A comprehensive PDF on using multimedia and interactive resources for career guidance.",
    category: "pdf",
    studentType: "college",
    need: ["career guidance", "digital skills"],
    link: "https://cica.org.au/wp-content/uploads/Digitalising-career-guidance-services.pdf",
  },
  {
    title: "Career Guidance Cell Handbook (NECN)",
    desc: "Outcome-based education strategies for engineering students' career growth.",
    category: "pdf",
    studentType: "college",
    stream: "engineering",
    need: ["career planning"],
    link: "https://www.necn.ac.in/pdf/Career%20Guidance%20Cell-2019-20.pdf",
  },
  {
    title: "Career Guide for Schools (EU)",
    desc: "Effective career guidance handbook for class 10 school students, with activities and best practices.",
    category: "pdf",
    studentType: "school",
    class: "10",
    need: ["career guidance"],
    link: "https://www.schoolofthefuture.eu/sites/default/files/career_guide-handbook_low.pdf",
  },
  {
    title: "Inventory of Digital Career Guidance Tools (ILO)",
    desc: "Global inventory of digital tools for youth and adults supporting career development.",
    category: "pdf",
    studentType: "college",
    need: ["career tools", "digital skills"],
    link: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@ed_emp/@ifp_skills/documents/publication/wcms_841523.pdf",
  },
  {
    title: "OECD Career Guidance Report",
    desc: "International report on career information provision, assessment tools, and counseling strategies.",
    category: "pdf",
    studentType: "college",
    need: ["career guidance"],
    link: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2004/12/career-guidance_g1gh4251/9789264015210-en.pdf",
  },
  {
    title: "Career Guidance Handbook (ILO)",
    desc: "Community career guidance resources and practical handbook for practitioners.",
    category: "pdf",
    studentType: "school",
    need: ["career guidance"],
    link: "https://learning.itcilo.org/ilo/youthemployment/PDF/career_guidance.pdf",
  },

  // ==== ARTICLES ====
  {
    title: "Internet Sites for Career Planning (NCDA)",
    desc: "Curated list of online career planning, job search articles, and tools for students and professionals.",
    category: "article",
    studentType: "college",
    need: ["career planning", "job search"],
    link: "https://www.ncda.org/aws/NCDA/pt/sp/resources",
  },
  {
    title: "Cybersecurity Careers: Guide & Pathways",
    desc: "Explore a wide variety of careers in cybersecurity and the step-by-step process to achieve them.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["cybersecurity", "career guidance"],
    link: "https://cybersecurityguide.org/careers/",
  },
  {
    title: "IT Career Finder: Pathways & Videos",
    desc: "Descriptions, training, certification info, job board, and video tutorials for IT career aspirants.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["IT", "career guidance"],
    link: "http://www.itcareerfinder.com/it-careers.html",
  },
  {
    title: "AHIMA Careers in Health Information Management",
    desc: "Occupation and salary info, preparation tools, and mentoring for health information management careers.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["healthcare", "career guidance"],
    link: "http://www.ahima.org/careers",
  },
  {
    title: "CareerOneStop: Comprehensive Career Portal",
    desc: "From self-assessment to educational options, occupational info, salary and economic trend data.",
    category: "article",
    studentType: "college",
    need: ["career guidance", "job search"],
    link: "https://www.careeronestop.org/",
  },
  {
    title: "Medical Billing and Coding Careers",
    desc: "Education, certification, and career advice for medical billing and coding aspirants.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["medical", "career guidance"],
    link: "http://www.medicalbillingandcoding.org",
  },
  {
    title: "Career Cornerstone Center (STEM)",
    desc: "Non-profit resource for exploring science, technology, engineering, mathematics, and medicine careers.",
    category: "article",
    studentType: "school",
    stream: "science",
    need: ["stem", "career guidance"],
    link: "http://www.careercornerstone.org",
  },
  {
    title: "Discover Data Science: Career Information",
    desc: "High-quality information and career paths in data science for students and professionals.",
    category: "article",
    studentType: "college",
    stream: "science",
    need: ["data science", "career guidance"],
    link: "https://www.discoverdatascience.org/career-information/",
  },
  {
    title: "Science Buddies: Science Careers",
    desc: "Free science project ideas and career profiles for students K-12, parents, and teachers.",
    category: "article",
    studentType: "school",
    stream: "science",
    need: ["science", "career guidance"],
    link: "http://www.sciencebuddies.org",
  },

  // ==== VIDEOS ====
  {
    title: "Forage Virtual Work Experiences",
    desc: "Free online virtual work experiences from top global companies for career exploration.",
    category: "video",
    studentType: "college",
    need: ["work experience", "career skills"],
    link: "https://www.theforage.com",
  },
  {
    title: "My Future Australia: Career Tools",
    desc: "Personalized career profile, matching occupations, and study options for students (user-guide videos).",
    category: "video",
    studentType: "school",
    need: ["career guidance", "career ideas"],
    link: "https://myfuture.edu.au/",
  },
  {
    title: "Gladeo.org: Inclusive Career Navigation",
    desc: "Career navigation platform using videos, storytelling, and digital library of informational interviews.",
    category: "video",
    studentType: "college",
    need: ["career exploration"],
    link: "https://gladeo.org/",
  },
  {
    title: "Introduction to Career Databases (Phoenix College)",
    desc: "How to access and search career databases at Phoenix College library.",
    category: "video",
    studentType: "college",
    need: ["research", "career guidance"],
    link: "https://www.youtube.com/watch?v=aXVelnOhLT4",
  },
  {
    title: "Database Engineering Complete Course",
    desc: "Full YouTube course: Database structure, SQL, MySQL, and technical interview prep.",
    category: "video",
    studentType: "college",
    stream: "science",
    need: ["database", "technical interview"],
    link: "https://www.youtube.com/watch?v=iwRneX7GIGI",
  },
  {
    title: "Career Guidance Center Overview",
    desc: "Ferguson's Career Guidance Center: lifelong career exploration and planning.",
    category: "video",
    studentType: "college",
    need: ["career guidance"],
    link: "https://www.youtube.com/watch?v=em2W7uRfWTY",
  },
  {
    title: "Interview Tips Video",
    desc: "Watch this video for top interview tips and tricks.",
    category: "video",
    studentType: "college",
    need: ["interview"],
    link: "https://www.youtube.com/watch?v=R1vskiVDwl4",
  },
  {
    title: "SA Youth: Work & Learning Opportunities",
    desc: "South Africa's national platform for youth to access work and learning opportunities (explainer video).",
    category: "video",
    studentType: "dropout",
    need: ["work", "learning"],
    link: "https://sayouth.mobi/Home/Index/EN",
  },
  {
    title: "MySkillsFuture: Skills Passport & Career Tools",
    desc: "Singapore's MySkillsFuture portal overview: e-portfolio, skills passport, and career resources.",
    category: "video",
    studentType: "college",
    need: ["skills", "career guidance"],
    link: "https://www.myskillsfuture.gov.sg/",
  },
  // ==== GOVERNMENT JOB ASPIRANTS ====
  {
    title: "Govt. Job Preparation by Anowar Hossain",
    desc: "Comprehensive PDF guide (Bangladesh/India pattern) for government job preparation: passion, skills, and exam strategy.",
    category: "pdf",
    studentType: "government",
    need: ["government job", "preparation"],
    link: "https://www.scribd.com/document/525601530/Govt-Job-Preparation-by-Anowar-Hossain",
  },
  {
    title: "How to Pass Government Jobs IQ and Aptitude Test",
    desc: "YouTube video: Step-by-step guide to clear government job aptitude and hiring tests.",
    category: "video",
    studentType: "government",
    need: ["aptitude", "test prep"],
    link: "https://www.youtube.com/watch?v=GVi3xd1pzw8",
  },
  {
    title: "5 Tips to Prepare for Government Exams While Working",
    desc: "Article: Realistic study schedule, topic prioritization, smart study hacks for working professionals.",
    category: "article",
    studentType: "government",
    need: ["exam strategy", "working professionals"],
    link: "https://economictimes.com/jobs/exams-results/5-tips-to-prepare-for-government-exams-while-working-full-time/articleshow/117458245.cms",
  },
  {
    title: "Best Preparation Strategy for Competitive Exams",
    desc: "BYJU'S article: 10 essential rules, booklists, and subject-wise tips for SSC, UPSC, RRB, Bank and other government exams.",
    category: "article",
    studentType: "government",
    need: ["strategy", "booklist", "syllabus"],
    link: "https://byjus.com/govt-exams/competitive-exams-preparation-strategy/",
  },
  {
    title: "Government Interview Questions (with Example Answers)",
    desc: "33 common government job interview questions with sample answers and tips.",
    category: "article",
    studentType: "government",
    need: ["interview", "preparation"],
    link: "https://www.indeed.com/career-advice/interviewing/government-interview-questions",
  },
  {
    title: "UPSC Civil Services Syllabus PDF",
    desc: "Official UPSC Prelims and Mains syllabus for IAS/IPS/IFS aspirants.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "UPSC"],
    entrance: "upsc",
    link: "https://www.upsc.gov.in/sites/default/files/PrelimsSyllabus.pdf",
  },
  {
    title: "SSC CGL Syllabus PDF",
    desc: "Latest SSC CGL exam syllabus and pattern for government job seekers.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "SSC"],
    entrance: "ssc",
    link: "https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/CGLE_2023_Notification_03042023.pdf",
  },
  {
    title: "Bank PO Preparation Guide PDF",
    desc: "Comprehensive guide for IBPS/SBI PO exam preparation: syllabus, tips, and practice questions.",
    category: "pdf",
    studentType: "government",
    need: ["banking", "syllabus", "practice"],
    entrance: "bank",
    link: "https://www.ibps.in/wp-content/uploads/Bank-PO-Preparation-Guide.pdf",
  },
  {
    title: "National Career Service (NCS) Portal",
    desc: "Govt. of India’s official portal for job search, career counseling, and exam info.",
    category: "article",
    studentType: "government",
    need: ["job portal", "counseling"],
    link: "https://www.ncs.gov.in/",
  },
  {
    title: "RRB NTPC Preparation Video",
    desc: "YouTube video: Tips and tricks for Railway Recruitment Board NTPC exam.",
    category: "video",
    studentType: "government",
    entrance: "rrb",
    need: ["railway", "exam prep"],
    link: "https://www.youtube.com/watch?v=J8z4sA4Jqz4",
  },

  // ==== SCHOOL STUDENTS ====
  {
    title: "Dheya Career Mentors",
    desc: "Personalized career mentoring, long-term planning, and expert guidance for school students.",
    category: "article",
    studentType: "school",
    need: ["career guidance", "mentoring"],
    link: "https://www.dheya.com/top-career-guidance-websites-for-students/",
  },
  {
    title: "iDreamCareer: Free Career Resources",
    desc: "Workshops, webinars, and interactive tools for Indian school students to explore careers.",
    category: "article",
    studentType: "school",
    need: ["career guidance", "career discovery"],
    link: "https://idreamcareer.com/",
  },
  {
    title: "Mindler Psychometric Assessment",
    desc: "Online psychometric career assessment and personalized counseling for class 8-12 students.",
    category: "article",
    studentType: "school",
    class: "8-12",
    need: ["psychometric", "assessment"],
    link: "https://www.mindler.com/",
  },
  {
    title: "CareerGuide.com: Stream & Subject Selector",
    desc: "Interactive stream and subject selector for class 10th and 12th students.",
    category: "article",
    studentType: "school",
    class: "10-12",
    need: ["stream selection"],
    link: "https://www.careerguide.com/",
  },
  {
    title: "Science Buddies: Science Careers",
    desc: "Free science project ideas and career profiles for students K-12, parents, and teachers.",
    category: "article",
    studentType: "school",
    stream: "science",
    need: ["science", "career guidance"],
    link: "http://www.sciencebuddies.org",
  },
  {
    title: "Khan Academy Class 10 Math Video Lectures",
    desc: "YouTube playlist: Complete math lectures for CBSE class 10.",
    category: "video",
    studentType: "school",
    class: "10",
    stream: "science",
    need: ["math", "study material"],
    link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0hTjQjA-",
  },
  {
    title: "National Scholarship Portal",
    desc: "Govt. of India’s official portal for school and college scholarships.",
    category: "article",
    studentType: "school",
    need: ["scholarship"],
    link: "https://scholarships.gov.in/",
  },
  {
    title: "CBSE Class 12 Chemistry Notes PDF",
    desc: "Comprehensive notes for CBSE class 12 Chemistry.",
    category: "pdf",
    studentType: "school",
    class: "12",
    stream: "science",
    need: ["study material"],
    link: "https://www.cbseacademic.nic.in/chemistry12notes.pdf",
  },
  {
    title: "Univariety: College & Course Search",
    desc: "Explore colleges and courses after class 12, with counseling support.",
    category: "article",
    studentType: "school",
    class: "12",
    need: ["college search", "admission"],
    link: "https://www.univariety.com/",
  },
  {
    title: "EduMilestones: Career Assessment & Planning",
    desc: "Detailed assessments, career plans, and support for class 9-12 students.",
    category: "article",
    studentType: "school",
    class: "9-12",
    need: ["assessment", "career planning"],
    link: "https://www.edumilestones.com/",
  },
  {
    title: "Career360: College, Course, and Career Info",
    desc: "Database of colleges, courses, and career options for students.",
    category: "article",
    studentType: "school",
    need: ["college search", "career info"],
    link: "https://www.careers360.com/",
  },
  {
    title: "Career Planning for High School Students (Inspirus)",
    desc: "Strategic approach, government initiatives, and career planning for Indian high school students.",
    category: "article",
    studentType: "school",
    class: "9-12",
    need: ["career planning"],
    link: "https://www.inspiruseducation.com/blogs/career-planning-for-indian-high-school-students-a-strategic-approach/",
  },
  {
    title: "CBSE Class 10 Science Notes PDF",
    desc: "PDF notes and sample papers for class 10 science.",
    category: "pdf",
    studentType: "school",
    class: "10",
    stream: "science",
    need: ["study material"],
    link: "https://cbse.nic.in/10th-science-guide.pdf",
  },
  {
    title: "My Future Australia: Career Tools",
    desc: "Personalized career profile, matching occupations, and study options for students (user-guide videos).",
    category: "video",
    studentType: "school",
    need: ["career guidance", "career ideas"],
    link: "https://myfuture.edu.au/",
  },
  // ==== GOVERNMENT JOB ASPIRANTS ====
  {
    title: "Best Government Jobs Exams to Prepare for in 2025",
    desc: "Detailed guide on top government exams: UPSC, SSC CGL, SBI PO, IBPS PO, RRB NTPC, NDA, CDS, AFCAT, CTET, UGC NET, State PSCs and more. Includes eligibility, syllabus, and preparation tips.",
    category: "article",
    studentType: "government",
    need: ["exam info", "syllabus", "preparation"],
    link: "https://majesticacademy.in/blog/best-government-jobs-exams-to-prepare/",
  },
  {
    title: "How to Prepare for Govt Exams: 1-Year Study Plan",
    desc: "Strategy article for preparing government exams (SSC, Banking, Defence, RAS, Teaching, NDA, CDS, etc.) in one year. Includes free and paid online coaching resources.",
    category: "article",
    studentType: "government",
    need: ["preparation", "study plan", "coaching"],
    link: "https://utkarsh.com/latest-job-notifications/how-to-prepare-for-govt-competitive-exams-1-year-study-plan",
  },
  {
    title: "Easiest Government Exams to Crack in 2025",
    desc: "List of top 10 easiest government exams in India: SSC CHSL, IBPS Clerk, Rajasthan Patwari, RRB NTPC, RRB Group D, and more. Includes eligibility and tips.",
    category: "article",
    studentType: "government",
    need: ["exam info", "easy exams"],
    link: "https://www.cheggindia.com/govt-exams-blogs/easiest-government-exams/",
  },
  {
    title: "SarkariPariksha: Online Practice for Govt Exams",
    desc: "Practice tests, live classes, study material, and latest updates for 150+ central and state government exams (SSC, Railways, SBI, RBI, UPSC, etc.).",
    category: "article",
    studentType: "government",
    need: ["practice tests", "study material", "mock tests"],
    link: "https://sarkaripariksha.com",
  },
  {
    title: "Top Books for Acing Government Job Exams in 2025",
    desc: "Recommended books for all major government job exams-subject-wise picks and supplementary resources.",
    category: "article",
    studentType: "government",
    need: ["books", "study material"],
    link: "https://veclakhanpur.in/top-books-for-acing-government-job-exams-in",
  },
  {
    title: "Government Job Exams 2025: Schedule, Eligibility, and Posts",
    desc: "Complete schedule for Indian government job exams in 2025: key dates, eligibility, and available posts.",
    category: "article",
    studentType: "government",
    need: ["exam info", "eligibility"],
    link: "https://exampay.in/blogs/indian-government-job-exams/",
  },
  {
    title: "Government Exams Preparation Strategy (YouTube)",
    desc: "Video: How to prepare for government exams in 2025, including time management and revision tips.",
    category: "video",
    studentType: "government",
    need: ["preparation", "strategy"],
    link: "https://www.youtube.com/watch?v=O3F5z1cL2f0",
  },
  {
    title: "CTET & UGC NET Official Website",
    desc: "Official resources, syllabus, and notifications for teaching and education government exams.",
    category: "article",
    studentType: "government",
    need: ["teaching", "exam info"],
    link: "https://ctet.nic.in/",
  },
  {
    title: "UPPSC, MPPSC, BPSC, TNPSC State PSCs",
    desc: "State Public Service Commission official portals for state-level government jobs, notifications, and study material.",
    category: "article",
    studentType: "government",
    need: ["state exams", "notifications"],
    link: "https://uppsc.up.nic.in/",
  },

  // ==== SCHOOL STUDENTS ====
  {
    title: "Career Guidance Book: 500 Career Cards (NCERT/UNICEF)",
    desc: "Official Ministry of Education/NCERT/UNICEF resource: 500 detailed career cards for school students, with responsibilities, qualifications, and career paths.",
    category: "pdf",
    studentType: "school",
    need: ["career guidance", "career options"],
    link: "https://dsel.education.gov.in/careers/index.html",
  },
  {
    title: "CBSE Parents’ Handbook on Careers after School in India",
    desc: "CBSE’s official handbook for parents and students: career options, academic routes, and guidance after school.",
    category: "pdf",
    studentType: "school",
    need: ["career guidance", "parent guide"],
    link: "https://www.cbse.gov.in/career-guidance-book.html",
  },
  {
    title: "CBSE Career Guidance Portal",
    desc: "CBSE’s official portal for career guidance, courses, and counseling for school students.",
    category: "article",
    studentType: "school",
    need: ["career guidance", "portal"],
    link: "https://cbsecareerguidance.com/",
  },
  {
    title: "Navigating Life After School (Ministry of Education)",
    desc: "Guidance and counseling resource for school students, teachers, and parents-aligned with NEP 2020.",
    category: "article",
    studentType: "school",
    need: ["career guidance", "counseling"],
    link: "https://dsel.education.gov.in/careers/index.html",
  },
  {
    title: "Career Guidance for Students: CBSE Initiative",
    desc: "CBSE’s initiative for structured and informed career support for students and parents. Includes handbooks and resources.",
    category: "article",
    studentType: "school",
    need: ["career guidance", "cbse"],
    link: "https://www.ecoleglobale.com/blog/career-guidance-for-students/",
  },
  {
    title: "Top 10 Career Guidance Websites for Students (India)",
    desc: "List and review of top career guidance websites: Dheya, Mindler, CareerGuide, Mentoria, EduMilestones, and more.",
    category: "article",
    studentType: "school",
    need: ["career guidance", "websites"],
    link: "https://www.dheya.com/top-career-guidance-websites-for-students/",
  },
  {
    title: "NCERT Career Guidance Video Series",
    desc: "YouTube playlist: NCERT’s official career guidance video series for school students (Hindi/English).",
    category: "video",
    studentType: "school",
    need: ["career guidance", "video"],
    link: "https://www.youtube.com/playlist?list=PLR0lqXqQpKqjQeQ1y7QyV6Zyq3tXG0V5k",
  },
  {
    title: "Career Cards Explainer Video (Ministry of Education)",
    desc: "Official explainer video about the 500 Career Cards resource for school students.",
    category: "video",
    studentType: "school",
    need: ["career guidance", "career cards"],
    link: "https://www.youtube.com/watch?v=5fQ8nq8u3oY",
  },
  {
    title: "Mindler Free Psychometric Test for School Students",
    desc: "Online psychometric test and career assessment for class 8-12 students.",
    category: "article",
    studentType: "school",
    class: "8-12",
    need: ["psychometric", "assessment"],
    link: "https://www.mindler.com/free-career-assessment",
  },
  {
    title: "Career Discovery for School Students (Mentoria)",
    desc: "Mentoria’s interactive platform for school students: career discovery, counseling, and personalized plans.",
    category: "article",
    studentType: "school",
    need: ["career discovery", "counseling"],
    link: "https://www.mentoria.com/",
  },
  // ==== SCHOOL STUDENTS (CBSE, NCERT, Ministry, Psychometric, Career Cards, etc.) ====
  {
    title: "CBSE Parents’ Handbook on Careers after School in India (2025)",
    desc: "Official CBSE and Ministry of Education handbook for parents and students: career options, degree nomenclatures, entrance exam details, and authentic websites for post-school planning.",
    category: "pdf",
    studentType: "school",
    need: ["career guidance", "parent guide"],
    link: "https://www.cbse.gov.in/cbsenew/documents/Parents_Handbook_Careers_2025.pdf",
  },
  {
    title: "CBSE Entrance Exams 2025 Guide",
    desc: "Comprehensive guide to all major entrance exams after school, including eligibility, exam pattern, and important dates.",
    category: "pdf",
    studentType: "school",
    need: ["entrance exams", "exam info"],
    link: "https://www.cbse.gov.in/cbsenew/Counselling_pr.html",
  },
  {
    title: "CBSE 21 Higher Education Vertical Books",
    desc: "A set of 21 detailed e-books covering academic and professional pathways after school, for students and parents.",
    category: "pdf",
    studentType: "school",
    need: ["higher education", "career options"],
    link: "https://www.cbse.gov.in/cbsenew/Counselling_pr.html",
  },
  {
    title:
      "Navigating Life After School: 500 Career Cards (Ministry of Education/NCERT/UNICEF)",
    desc: "500 detailed career cards for school students, covering responsibilities, qualifications, and career paths in every field. Highly recommended for classes 9-12.",
    category: "pdf",
    studentType: "school",
    class: "9-12",
    need: ["career options", "career cards"],
    link: "https://dsel.education.gov.in/careers/index.html",
  },
  {
    title: "CBSE Career Guidance Portal",
    desc: "CBSE’s official portal for career guidance, courses, and counseling for school students. Includes interactive tools and resources.",
    category: "article",
    studentType: "school",
    need: ["career guidance", "portal"],
    link: "https://cbsecareerguidance.com/",
  },
  {
    title: "NCERT Diploma Course in Guidance and Counselling (DCGC)",
    desc: "NCERT’s official diploma course for teachers, counselors, and school administrators to become certified career counselors. Theory and practical modules included.",
    category: "article",
    studentType: "school",
    need: ["counseling", "teacher training"],
    link: "https://www.ncert.nic.in/pdf/announcement/notices/Information_Brochure_DCGC2025.pdf",
  },
  {
    title: "CBSE Career Guidance: A Student's Roadmap to Success",
    desc: "Article: Why career guidance is important after 10th/12th, how to choose streams, prepare for entrance exams, and set realistic goals.",
    category: "article",
    studentType: "school",
    need: ["career guidance", "goal setting"],
    link: "https://www.grabguidance.com/blog/cbse-career-guidance-a-students-roadmap-to-success/",
  },
  {
    title: "CBSE Career Guidance Video Series (Hindi/English)",
    desc: "YouTube playlist: Official CBSE/NCERT video series on career guidance, stream selection, and higher education options.",
    category: "video",
    studentType: "school",
    need: ["career guidance", "video"],
    link: "https://www.youtube.com/playlist?list=PLR0lqXqQpKqjQeQ1y7QyV6Zyq3tXG0V5k",
  },
  {
    title: "500 Career Cards Explainer Video (Ministry of Education)",
    desc: "Official explainer video about the 500 Career Cards resource for school students.",
    category: "video",
    studentType: "school",
    need: ["career guidance", "career cards"],
    link: "https://www.youtube.com/watch?v=5fQ8nq8u3oY",
  },

  // ==== GOVERNMENT JOB ASPIRANTS (Official, Syllabus, Practice, Strategy, Videos) ====
  {
    title: "SSC CGL Official Syllabus and Notification 2025",
    desc: "Download the latest SSC CGL exam syllabus, eligibility criteria, and official notification for 2025.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "SSC"],
    entrance: "ssc",
    link: "https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/CGLE_2023_Notification_03042023.pdf",
  },
  {
    title: "UPSC Civil Services (IAS/IPS) Syllabus 2025 PDF",
    desc: "Official UPSC syllabus for Prelims and Mains (IAS/IPS/IFS) including exam pattern and recommended books.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "UPSC"],
    entrance: "upsc",
    link: "https://www.upsc.gov.in/sites/default/files/PrelimsSyllabus.pdf",
  },
  {
    title: "SarkariPariksha: Practice Tests for 150+ Govt Exams",
    desc: "Practice tests, live classes, and study material for SSC, Railways, SBI, RBI, UPSC, and state government exams.",
    category: "article",
    studentType: "government",
    need: ["practice tests", "study material", "mock tests"],
    link: "https://sarkaripariksha.com",
  },
  {
    title: "Best Preparation Strategy for Competitive Exams (BYJU'S)",
    desc: "10 essential rules, booklists, and subject-wise tips for SSC, UPSC, RRB, Bank, and other government exams.",
    category: "article",
    studentType: "government",
    need: ["strategy", "booklist", "syllabus"],
    link: "https://byjus.com/govt-exams/competitive-exams-preparation-strategy/",
  },
  {
    title: "Government Job Interview Questions (with Answers)",
    desc: "33 common government job interview questions with sample answers and tips for success.",
    category: "article",
    studentType: "government",
    need: ["interview", "preparation"],
    link: "https://www.indeed.com/career-advice/interviewing/government-interview-questions",
  },
  {
    title: "RRB NTPC Preparation Video (Railways)",
    desc: "YouTube video: Tips and tricks for Railway Recruitment Board NTPC exam (eligibility: 12th pass and above).",
    category: "video",
    studentType: "government",
    entrance: "rrb",
    need: ["railway", "exam prep"],
    link: "https://www.youtube.com/watch?v=J8z4sA4Jqz4",
  },
  {
    title: "How to Pass Government Jobs IQ and Aptitude Test",
    desc: "YouTube video: Step-by-step guide to clear government job aptitude and hiring tests.",
    category: "video",
    studentType: "government",
    need: ["aptitude", "test prep"],
    link: "https://www.youtube.com/watch?v=GVi3xd1pzw8",
  },
  {
    title: "National Career Service (NCS) Portal",
    desc: "Govt. of India’s official portal for job search, career counseling, and exam info.",
    category: "article",
    studentType: "government",
    need: ["job portal", "counseling"],
    link: "https://www.ncs.gov.in/",
  },
  // ==== GATE (Graduate Aptitude Test in Engineering) ====
  {
    title: "GATE 2025 Official Syllabus & Papers (All Branches)",
    desc: "Download the latest GATE 2025 syllabus PDFs and previous year papers for all 30 subjects (CSE, ECE, EE, ME, CE, etc.). Released by IIT Roorkee.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "previous papers"],
    entrance: "gate",
    link: "https://gate2025.iitr.ac.in/exam-papers-and-syllabus.html",
  },
  {
    title: "GATE 2025 Exam Pattern & Preparation Guide",
    desc: "Exam pattern, question types, marking scheme, and subject-wise preparation tips for GATE aspirants.",
    category: "article",
    studentType: "government",
    need: ["exam pattern", "preparation"],
    entrance: "gate",
    link: "https://engineering.careers360.com/articles/gate-exam-pattern",
  },
  {
    title: "GATE 2025 Mock Test Links (Official)",
    desc: "Practice GATE 2025 mock tests for all branches on the official IIT Roorkee portal.",
    category: "article",
    studentType: "government",
    need: ["mock test", "practice"],
    entrance: "gate",
    link: "https://gate2025.iitr.ac.in/",
  },
  {
    title: "GATE General Aptitude Syllabus PDF",
    desc: "Official General Aptitude syllabus for GATE-all branches. Includes verbal, quantitative, analytical, and spatial aptitude.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "aptitude"],
    entrance: "gate",
    link: "https://store.pw.live/blogs/gate-exams/subject-wise-gate-2025-syllabus-pdf",
  },
  {
    title: "GATE 2025 Preparation Strategy Video (Hindi)",
    desc: "YouTube: How to prepare for GATE 2025, subject-wise tips, and time management.",
    category: "video",
    studentType: "government",
    need: ["preparation", "strategy"],
    entrance: "gate",
    link: "https://www.youtube.com/watch?v=8ZpG2A1kq8E",
  },

  // ==== OTHER POPULAR EXAMS ====
  {
    title: "UPSC Civil Services (IAS/IPS) Syllabus 2025 PDF",
    desc: "Official UPSC syllabus for Prelims and Mains (IAS/IPS/IFS) including exam pattern and recommended books.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "UPSC"],
    entrance: "upsc",
    link: "https://www.upsc.gov.in/sites/default/files/PrelimsSyllabus.pdf",
  },
  {
    title: "SSC CGL Official Syllabus and Notification 2025",
    desc: "Download the latest SSC CGL exam syllabus, eligibility criteria, and official notification for 2025.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "SSC"],
    entrance: "ssc",
    link: "https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/CGLE_2023_Notification_03042023.pdf",
  },
  {
    title: "IBPS/SBI Bank PO Syllabus & Exam Pattern PDF",
    desc: "Complete syllabus and exam pattern for IBPS and SBI PO exams (Prelims + Mains).",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "banking"],
    entrance: "bank",
    link: "https://www.ibps.in/wp-content/uploads/Bank-PO-Preparation-Guide.pdf",
  },
  {
    title: "RRB NTPC Official Syllabus (Railways)",
    desc: "Railway Recruitment Board NTPC exam syllabus and pattern for 2025.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "railway"],
    entrance: "rrb",
    link: "https://indianrailways.gov.in/railwayboard/uploads/directorate/establishment/ntpc/NTPC_Syllabus.pdf",
  },
  {
    title: "CTET 2025 Official Syllabus & Eligibility",
    desc: "Central Teacher Eligibility Test (CTET) official syllabus, eligibility, and preparation resources.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "teaching"],
    entrance: "ctet",
    link: "https://ctet.nic.in/CMS/Public/View.aspx?page=46",
  },
  {
    title: "NDA & CDS Exam Syllabus and Pattern (UPSC Defence)",
    desc: "Syllabus and pattern for NDA and CDS exams for defence aspirants (Army, Navy, Air Force).",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "defence"],
    entrance: "nda",
    link: "https://www.upsc.gov.in/examinations/NDA-CDS",
  },
  {
    title: "UGC NET Syllabus and Exam Info",
    desc: "University Grants Commission National Eligibility Test syllabus and official info.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "teaching"],
    entrance: "ugcnet",
    link: "https://ugcnet.nta.nic.in/webinfo/public/home.aspx",
  },
  {
    title: "State PSCs (UPPSC, MPPSC, BPSC, TNPSC) Official Portals",
    desc: "Links to State Public Service Commission portals for state-level government jobs, notifications, and study material.",
    category: "article",
    studentType: "government",
    need: ["state exams", "notifications"],
    link: "https://uppsc.up.nic.in/",
  },
  {
    title: "How to Prepare for GATE, ESE, and PSUs Together",
    desc: "Article: Tips for preparing for GATE, Engineering Services Exam (ESE/IES), and PSU recruitment together.",
    category: "article",
    studentType: "government",
    need: ["preparation", "strategy"],
    entrance: "gate",
    link: "https://www.madeeasy.in/articles/how-to-prepare-for-gate-ese-and-psus-together",
  },
  {
    title: "ESE (Engineering Services Exam) Official Syllabus",
    desc: "UPSC ESE/IES official syllabus for all engineering streams (Civil, Mechanical, Electrical, E&T).",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "ESE"],
    entrance: "ese",
    link: "https://upsc.gov.in/examinations/Engineering-Services-Preliminary-Examination",
  },
  {
    title: "GATE 2025 Subject-wise Syllabus PDFs (Careers360)",
    desc: "Download subject-wise GATE 2025 syllabus PDFs for CSE, ECE, EE, ME, CE, and more.",
    category: "pdf",
    studentType: "government",
    need: ["syllabus", "subject-wise"],
    entrance: "gate",
    link: "https://engineering.careers360.com/articles/gate-syllabus",
  },
  {
    title: "GATE 2025 Preparation Tips and Weightage",
    desc: "Subject-wise GATE syllabus, weightage, and preparation tips for 2025.",
    category: "article",
    studentType: "government",
    need: ["preparation", "weightage"],
    entrance: "gate",
    link: "https://www.tmu.ac.in/blog/gate-syllabus-2025-weightage-and-subject-wise-preparation-tips",
  },
  // ==== GOVERNMENT JOB ASPIRANTS (Official, Best Platforms, Mock, Video, Exams) ====
  {
    title: "Unacademy: Free & Paid Live Classes for Govt Exams",
    desc: "India’s top platform for UPSC, SSC, Bank, Railway, State PSC, and other government exams. Live classes, mock tests, and subject-wise video lectures.",
    category: "video",
    studentType: "government",
    need: ["live classes", "mock test", "video lectures"],
    link: "https://unacademy.com/",
  },
  {
    title: "Study IQ Education: YouTube Channel for Govt Exams",
    desc: "Popular YouTube channel with daily current affairs, exam strategies, and subject-wise lectures for UPSC, SSC, Banking, and State PSCs.",
    category: "video",
    studentType: "government",
    need: ["current affairs", "exam strategy", "lectures"],
    link: "https://www.youtube.com/@StudyIQEducation",
  },
  {
    title: "BYJU'S Exam Prep: Govt Exams Preparation Portal",
    desc: "Comprehensive preparation for SSC, Banking, UPSC, Railways, Defence, and Teaching exams. Includes live classes, quizzes, and study notes.",
    category: "article",
    studentType: "government",
    need: ["live classes", "quizzes", "study notes"],
    link: "https://byjusexamprep.com/",
  },
  {
    title: "Adda247: Govt Job Preparation (YouTube & Website)",
    desc: "Bank, SSC, Railways, Teaching, Defence, and State exams-live classes, doubt sessions, and free PDFs. Hindi & English.",
    category: "video",
    studentType: "government",
    need: ["live classes", "pdf", "doubt clearing"],
    link: "https://www.youtube.com/@Adda247Official",
  },
  {
    title: "Testbook: India's No.1 Govt Exam Preparation Site",
    desc: "Mock tests, quizzes, previous year papers, and study material for Banking, SSC, Railways, GATE, and more.",
    category: "article",
    studentType: "government",
    need: ["mock test", "practice papers"],
    link: "https://testbook.com",
  },
  {
    title: "PracticeMock: Free SSC CGL Resources & Mock Tests",
    desc: "Free topic-wise mock tests, previous year papers, and full-length mocks for SSC CGL and other government exams.",
    category: "article",
    studentType: "government",
    entrance: "ssc",
    need: ["mock test", "previous papers"],
    link: "https://www.practicemock.com/blog/ssc-cgl-free-preparation-resources/",
  },
  {
    title: "Notopedia: Free Online Tests, Notes & Papers for Sarkari Exams",
    desc: "1100+ papers, 325+ online tests, and 200+ videos for SSC, RRB, IBPS, SBI, and other exams. Free for all users.",
    category: "article",
    studentType: "government",
    need: ["mock test", "notes", "videos"],
    link: "https://www.notopedia.com/sarkari-jobs-exam",
  },
  {
    title: "Khan Academy India: Foundation for Govt Exams",
    desc: "Free video lessons and quizzes for Maths, Science, History, and Economics. Great for SSC, Bank, and Railways basics.",
    category: "video",
    studentType: "government",
    need: ["foundation", "maths", "science"],
    link: "https://www.khanacademy.org/",
  },
  {
    title: "Tyson's IAS Academy: UPSC Preparation Channel",
    desc: "YouTube channel covering all UPSC subjects, current affairs, and paper-wise strategy.",
    category: "video",
    studentType: "government",
    entrance: "upsc",
    need: ["upsc", "current affairs", "strategy"],
    link: "https://www.youtube.com/@TysonsIASAcademy",
  },
  {
    title: "GATE 2025 Official Syllabus & Papers",
    desc: "Download latest GATE 2025 syllabus PDFs and previous year papers for all branches.",
    category: "pdf",
    studentType: "government",
    entrance: "gate",
    need: ["syllabus", "previous papers"],
    link: "https://gate2025.iitr.ac.in/exam-papers-and-syllabus.html",
  },
  {
    title: "XAT 2025: Best Books, Mock Tests & Apps",
    desc: "Recommended books, online courses, mock tests, and apps for XAT exam preparation.",
    category: "article",
    studentType: "government",
    entrance: "xat",
    need: ["books", "mock test", "apps"],
    link: "https://xatonline.in/blog/top-resources-and-practice-materials-for-xat-2025",
  },

  // ==== SCHOOL STUDENTS (Competitive/Entrance, Career, Olympiads, Video, Portals) ====
  {
    title: "PM eVidya: IITPAL Lectures for JEE/NEET",
    desc: "IIT Professor Assisted Learning (IITPAL) video lectures for JEE and NEET preparation. Physics, Maths, Chemistry, Biology. Free on Swayam Prabha Channel 22.",
    category: "video",
    studentType: "school",
    class: "11-12",
    stream: "science",
    need: ["jee", "neet", "video lectures"],
    link: "https://www.swayamprabha.gov.in/index.php/channel_profile/profile/22",
  },
  {
    title: "NTA Abhyas App: Free JEE/NEET Mock Tests",
    desc: "Personalized adaptive learning platform by NTA. Daily full-length mock tests for JEE and NEET in Hindi & English.",
    category: "article",
    studentType: "school",
    class: "11-12",
    stream: "science",
    need: ["jee", "neet", "mock test"],
    link: "https://www.nta.ac.in/abhyas",
  },
  {
    title: "Science Olympiad Foundation (SOF): Official Portal",
    desc: "SOF conducts NSO, IMO, NCO, IEO and other olympiads for school students. Syllabus, sample papers, and results.",
    category: "article",
    studentType: "school",
    need: ["olympiad", "science", "sample papers"],
    link: "https://sofworld.org/",
  },
  {
    title: "Vidya Pravesh: CBSE Foundational Skills (Class 1-3)",
    desc: "CBSE’s foundational skills program for classes 1-3. Includes activity books, worksheets, and teacher guides.",
    category: "pdf",
    studentType: "school",
    class: "1-3",
    need: ["foundation", "activity book"],
    link: "https://cbseacademic.nic.in/vidyapravesh.html",
  },
  {
    title: "Khan Academy India: CBSE Maths & Science (Class 6-12)",
    desc: "Free video lectures, quizzes, and practice for CBSE Maths and Science (English & Hindi).",
    category: "video",
    studentType: "school",
    class: "6-12",
    need: ["math", "science", "cbse"],
    link: "https://hi-in.khanacademy.org/",
  },
  {
    title: "National Digital Library of India: School Resources",
    desc: "Free access to NCERT textbooks, sample papers, and study material for all classes and subjects.",
    category: "article",
    studentType: "school",
    need: ["textbooks", "sample papers", "ncert"],
    link: "https://ndl.iitkgp.ac.in/",
  },
  {
    title: "CBSE Sample Papers & Marking Scheme (Class 10/12)",
    desc: "Official CBSE sample papers and marking scheme for board exams (all subjects).",
    category: "pdf",
    studentType: "school",
    class: "10-12",
    need: ["sample papers", "cbse"],
    link: "https://cbseacademic.nic.in/SQP_CLASSX_2024.html",
  },
  {
    title: "CareerGuide.com: Stream & Subject Selector",
    desc: "Interactive stream and subject selector for class 10th and 12th students.",
    category: "article",
    studentType: "school",
    class: "10-12",
    need: ["stream selection"],
    link: "https://www.careerguide.com/",
  },
  // ==== GOVERNMENT JOBS & COMPETITIVE EXAMS ====
  {
    title: "SSC CHSL Official Notification & Syllabus 2025",
    desc: "Download SSC CHSL 2025 official notification, eligibility, syllabus, and exam pattern.",
    category: "pdf",
    studentType: "government",
    entrance: "ssc",
    need: ["syllabus", "notification"],
    link: "https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/CHSLE_2024_Notification_08052024.pdf",
  },
  {
    title: "Banking Awareness Capsule for IBPS & SBI PO/Clerk",
    desc: "Monthly updated PDF capsule for banking awareness-important for IBPS, SBI, and other bank exams.",
    category: "pdf",
    studentType: "government",
    entrance: "bank",
    need: ["banking", "awareness", "current affairs"],
    link: "https://www.bankersadda.com/banking-awareness-capsule/",
  },
  {
    title: "Railway Group D Syllabus & Practice Papers",
    desc: "Download latest RRB Group D syllabus and previous year practice papers.",
    category: "pdf",
    studentType: "government",
    entrance: "rrb",
    need: ["syllabus", "practice papers"],
    link: "https://www.rrbcdg.gov.in/uploads/RRB_Group_D_Syllabus.pdf",
  },
  {
    title: "UP Police Constable Exam: Syllabus & Tips",
    desc: "Complete syllabus, eligibility, and preparation tips for UP Police Constable exam.",
    category: "article",
    studentType: "government",
    entrance: "police",
    need: ["syllabus", "preparation"],
    link: "https://www.jagranjosh.com/articles/up-police-constable-syllabus-1596018490-1",
  },
  {
    title: "Defence Jobs 2025: NDA, CDS, AFCAT, CAPF",
    desc: "All India defence exams-eligibility, syllabus, pattern, and preparation for NDA, CDS, AFCAT, CAPF.",
    category: "article",
    studentType: "government",
    need: ["defence", "exam info"],
    link: "https://www.defenceguru.co.in/defence-exams",
  },
  {
    title: "SSC GD Constable Preparation Video (Hindi)",
    desc: "YouTube: SSC GD Constable exam strategy, syllabus breakdown, and top tips.",
    category: "video",
    studentType: "government",
    entrance: "ssc",
    need: ["strategy", "syllabus", "tips"],
    link: "https://www.youtube.com/watch?v=3b-8kJv7M2s",
  },
  {
    title: "Bank PO Interview Preparation Video",
    desc: "Interview questions, answers, and tips for IBPS/SBI PO interviews.",
    category: "video",
    studentType: "government",
    entrance: "bank",
    need: ["interview", "tips"],
    link: "https://www.youtube.com/watch?v=0wYB1d7zQd0",
  },
  {
    title: "UPSC Prelims 2025: Free Mock Test Series",
    desc: "Free online mock test series for UPSC Prelims 2025 (GS Paper 1 & 2).",
    category: "article",
    studentType: "government",
    entrance: "upsc",
    need: ["mock test", "practice"],
    link: "https://www.insightsonindia.com/upsc-prelims-mock-tests/",
  },

  // ==== SCHOOL STUDENTS & ENTRANCE PREP ====
  {
    title: "Olympiad Success: Free Olympiad Practice Tests",
    desc: "Practice tests and sample papers for NSO, IMO, IEO, NCO, and other olympiads (classes 1-12).",
    category: "article",
    studentType: "school",
    need: ["olympiad", "sample papers", "practice"],
    link: "https://www.olympiadsuccess.com/",
  },
  {
    title: "NTSE Exam Guide & Sample Papers",
    desc: "National Talent Search Examination (NTSE) guide, eligibility, and sample papers for class 10 students.",
    category: "pdf",
    studentType: "school",
    class: "10",
    need: ["ntse", "sample papers"],
    link: "https://ncert.nic.in/pdf/ntse/NTSE_2024_Brochure.pdf",
  },
  {
    title: "JEE Main Physics Video Lectures (Hindi)",
    desc: "Best YouTube video lectures for JEE Main Physics (Hindi medium).",
    category: "video",
    studentType: "school",
    class: "11-12",
    stream: "science",
    need: ["jee", "physics", "video lectures"],
    link: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfJtRz7o3p1kKJ6R9P2Q2zLk",
  },
  {
    title: "NEET Biology Crash Course (YouTube)",
    desc: "Free NEET Biology crash course video series for class 11-12 students.",
    category: "video",
    studentType: "school",
    class: "11-12",
    stream: "science",
    need: ["neet", "biology", "video lectures"],
    link: "https://www.youtube.com/playlist?list=PLVLoWQFkZbhXv8Yc5pZpZl9k0e7wQdJv9",
  },
  {
    title: "CBSE Class 10 Science Sample Paper 2025",
    desc: "Download latest CBSE class 10 science sample paper and marking scheme.",
    category: "pdf",
    studentType: "school",
    class: "10",
    stream: "science",
    need: ["sample papers", "cbse"],
    link: "https://cbseacademic.nic.in/SQP_CLASSX_2024.html",
  },
  {
    title: "Scholarship Portal: State & National Scholarships",
    desc: "Find and apply for all major state and national scholarships for school and college students.",
    category: "article",
    studentType: "school",
    need: ["scholarship", "financial aid"],
    link: "https://scholarships.gov.in/",
  },
  {
    title: "Career Discovery for School Students (Mentoria)",
    desc: "Mentoria’s interactive platform for school students: career discovery, counseling, and personalized plans.",
    category: "article",
    studentType: "school",
    need: ["career discovery", "counseling"],
    link: "https://www.mentoria.com/",
  },
  {
    title: "Khan Academy: Class 9-12 Math & Science (Hindi)",
    desc: "Free video lectures and practice for CBSE class 9-12 Maths and Science in Hindi.",
    category: "video",
    studentType: "school",
    class: "9-12",
    need: ["math", "science", "cbse"],
    link: "https://hi-in.khanacademy.org/",
  },
];

// ==== 2. DOM Elements ====
const studentTypeFilter = document.getElementById("studentTypeFilter");
const classFilter = document.getElementById("classFilter");
const streamFilter = document.getElementById("streamFilter");
const ageInput = document.getElementById("ageInput");
const entranceFilter = document.getElementById("entranceFilter");
const needFilter = document.getElementById("needFilter");
const resourceList = document.getElementById("resourceList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// ==== 3. Utility: Unique Values ====
function getUnique(arr, key) {
  const set = new Set();
  arr.forEach((r) => {
    if (Array.isArray(r[key])) r[key].forEach((v) => set.add(v));
    else if (r[key]) set.add(r[key]);
  });
  return Array.from(set);
}

// ==== 4. Stepwise Filter Logic ====
studentTypeFilter.addEventListener("change", function () {
  // Hide all
  classFilter.style.display = "none";
  streamFilter.style.display = "none";
  ageInput.style.display = "none";
  entranceFilter.style.display = "none";
  needFilter.style.display = "none";
  classFilter.innerHTML = "";
  streamFilter.innerHTML = "";
  entranceFilter.innerHTML = "";
  needFilter.innerHTML = "";

  const type = this.value;
  if (!type) {
    displayResources([]);
    return;
  }

  // School: Show class filter
  if (type === "school") {
    const classes = getUnique(
      resources.filter((r) => r.studentType === "school"),
      "class"
    );
    classFilter.innerHTML =
      `<option value="">Select Class</option>` +
      classes.map((c) => `<option value="${c}">${c}</option>`).join("");
    classFilter.style.display = "";
    displayResources([]);
  }
  // College: Show stream filter
  else if (type === "college") {
    const streams = getUnique(
      resources.filter((r) => r.studentType === "college"),
      "stream"
    );
    streamFilter.innerHTML =
      `<option value="">Select Stream</option>` +
      streams
        .map((s) => `<option value="${s}">${capitalize(s)}</option>`)
        .join("");
    streamFilter.style.display = "";
    displayResources([]);
  }
  // Dropout: Show need filter directly
  else if (type === "dropout") {
    updateNeedFilter(resources.filter((r) => r.studentType === "dropout"));
    needFilter.style.display = "";
    displayResources([]);
  }
  // Government: Show age input, entrance filter
  else if (type === "government") {
    ageInput.style.display = "";
    const entrances = getUnique(
      resources.filter((r) => r.studentType === "government"),
      "entrance"
    );
    entranceFilter.innerHTML =
      `<option value="">Select Exam Type</option>` +
      entrances
        .map((e) => `<option value="${e}">${capitalize(e)}</option>`)
        .join("");
    entranceFilter.style.display = "";
    displayResources([]);
  }
});

// School: Class selected
classFilter.addEventListener("change", function () {
  streamFilter.style.display = "none";
  needFilter.style.display = "none";
  streamFilter.innerHTML = "";
  needFilter.innerHTML = "";

  const type = studentTypeFilter.value;
  const selectedClass = this.value;
  if (!selectedClass) {
    displayResources([]);
    return;
  }
  // For 11/12, show stream
  if (
    selectedClass === "11" ||
    selectedClass === "12" ||
    selectedClass === "11-12"
  ) {
    const streams = getUnique(
      resources.filter(
        (r) =>
          r.studentType === "school" &&
          (r.class === selectedClass || r.class === "11-12")
      ),
      "stream"
    );
    streamFilter.innerHTML =
      `<option value="">Select Stream</option>` +
      streams
        .map((s) => `<option value="${s}">${capitalize(s)}</option>`)
        .join("");
    streamFilter.style.display = "";
    displayResources([]);
  } else {
    // Show need filter for lower classes
    updateNeedFilter(
      resources.filter(
        (r) => r.studentType === "school" && r.class === selectedClass
      )
    );
    needFilter.style.display = "";
    filterAndDisplay();
  }
});

// School/College: Stream selected
streamFilter.addEventListener("change", function () {
  if (studentTypeFilter.value === "school") {
    updateNeedFilter(
      resources.filter(
        (r) =>
          r.studentType === "school" &&
          (classFilter.value === r.class || r.class === "11-12") &&
          (r.stream === this.value || r.stream === "any")
      )
    );
    needFilter.style.display = "";
    filterAndDisplay();
  } else if (studentTypeFilter.value === "college") {
    updateNeedFilter(
      resources.filter(
        (r) =>
          r.studentType === "college" &&
          (r.stream === this.value || r.stream === "any")
      )
    );
    needFilter.style.display = "";
    filterAndDisplay();
  }
});

// Dropout: Need selected
needFilter.addEventListener("change", filterAndDisplay);

// Government: Age/Entrance/Need
ageInput.addEventListener("input", function () {
  entranceFilter.style.display = "";
  filterAndDisplay();
});
entranceFilter.addEventListener("change", function () {
  updateNeedFilter(
    resources.filter(
      (r) =>
        r.studentType === "government" &&
        (!r.entrance || r.entrance === this.value)
    )
  );
  needFilter.style.display = "";
  filterAndDisplay();
});
needFilter.addEventListener("change", filterAndDisplay);

// ==== 5. Helper: Update Need Filter ====
function updateNeedFilter(filteredResources) {
  const needs = getUnique(filteredResources, "need").flat();
  needFilter.innerHTML =
    `<option value="">Select Need</option>` +
    needs.map((n) => `<option value="${n}">${capitalize(n)}</option>`).join("");
}

function filterResources({
  selectedStudentType = "",
  selectedClass = "",
  selectedStream = "",
  selectedCategory = "",
  selectedNeed = "",
  selectedEntrance = "",
  selectedAge = "",
  searchText = "",
}) {
  return resources.filter((res) => {
    if (selectedStudentType && res.studentType !== selectedStudentType)
      return false;
    if (
      selectedClass &&
      res.class &&
      res.class !== selectedClass &&
      res.class !== "11-12"
    )
      return false;
    if (
      selectedStream &&
      res.stream &&
      res.stream !== selectedStream &&
      res.stream !== "any"
    )
      return false;
    if (
      selectedCategory &&
      selectedCategory !== "all" &&
      res.category !== selectedCategory
    )
      return false;
    if (selectedNeed && (!res.need || !res.need.includes(selectedNeed)))
      return false;
    if (selectedEntrance && res.entrance && res.entrance !== selectedEntrance)
      return false;
    if (selectedAge && res.ageLimit) {
      if (selectedAge < res.ageLimit.min || selectedAge > res.ageLimit.max)
        return false;
    }
    if (searchText) {
      const txt = searchText.toLowerCase();
      if (
        !res.title.toLowerCase().includes(txt) &&
        !res.desc.toLowerCase().includes(txt)
      )
        return false;
    }
    return true;
  });
}

// ==== 6. Main Filtering Function ====
function filterAndDisplay() {
  const filtered = filterResources({
    selectedStudentType: studentTypeFilter.value,
    selectedClass: classFilter.value,
    selectedStream: streamFilter.value,
    selectedCategory: categoryFilter.value,
    selectedNeed: needFilter.value,
    selectedEntrance: entranceFilter.value,
    selectedAge: ageInput.value,
    searchText: searchInput.value.trim(),
  });

  displayResources(filtered);
}

// ==== 7. Modal Logic ====
function openResourceModal(resource) {
  const modal = document.getElementById("resourceModal");
  const modalContent = document.getElementById("resourceModalContent");
  modalContent.innerHTML = `
    <button class="close-modal" onclick="closeResourceModal()" title="Close">&times;</button>
    <h2>${resource.title}</h2>
    <p>${resource.desc}</p>
    <div class="details">
      ${resource.class ? `<b>Class:</b> ${resource.class} <br>` : ""}
      ${
        resource.stream
          ? `<b>Stream:</b> ${capitalize(resource.stream)} <br>`
          : ""
      }
      ${
        resource.ageLimit
          ? `<b>Age Limit:</b> ${resource.ageLimit.min}-${resource.ageLimit.max} <br>`
          : ""
      }
      ${
        resource.entrance
          ? `<b>Entrance:</b> ${capitalize(resource.entrance)} <br>`
          : ""
      }
      ${
        resource.need
          ? `<b>Need:</b> ${
              Array.isArray(resource.need)
                ? resource.need.map(capitalize).join(", ")
                : capitalize(resource.need)
            } <br>`
          : ""
      }
      ${
        resource.category
          ? `<b>Type:</b> ${capitalize(resource.category)} <br>`
          : ""
      }
      ${
        resource.link
          ? `<b>Link:</b> <a href="${resource.link}" target="_blank">${resource.link}</a><br>`
          : ""
      }
    </div>
    <a href="${
      resource.link
    }" target="_blank" class="modal-btn">Open Resource</a>
  `;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function closeResourceModal() {
  document.getElementById("resourceModal").style.display = "none";
  document.body.style.overflow = "";
}
document.getElementById("resourceModal").onclick = function (e) {
  if (e.target === this) closeResourceModal();
};

// ==== 8. Display Function (Card UI) ====
function displayResources(list) {
  resourceList.innerHTML = "";
  if (!list || list.length === 0) {
    resourceList.innerHTML = "<p>No resources found for your selection.</p>";
    return;
  }
  list.forEach((res, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${res.title}</h3>
      <p>${res.desc}</p>
      <div style="font-size:0.97em;">
        ${res.class ? `<b>Class:</b> ${res.class} &nbsp;` : ""}
        ${res.stream ? `<b>Stream:</b> ${capitalize(res.stream)} &nbsp;` : ""}
        ${
          res.ageLimit
            ? `<b>Age:</b> ${res.ageLimit.min}-${res.ageLimit.max} &nbsp;`
            : ""
        }
        ${
          res.entrance
            ? `<b>Entrance:</b> ${capitalize(res.entrance)} &nbsp;`
            : ""
        }
        ${
          res.need
            ? `<b>Need:</b> ${
                Array.isArray(res.need)
                  ? res.need.map(capitalize).join(", ")
                  : capitalize(res.need)
              } &nbsp;`
            : ""
        }
      </div>
      <button class="btn" onclick="openResourceModal(window.filteredResources[${idx}])">View Resource</button>
    `;
    resourceList.appendChild(card);
  });
  // Save filtered list for modal access
  window.filteredResources = list;
}

// ==== 9. Helper: Capitalize ====
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ==== 10. Search & Category Filter Events ====
searchInput.addEventListener("input", filterAndDisplay);
categoryFilter.addEventListener("change", filterAndDisplay);

// ==== 11. On page load, show nothing ====
displayResources([]);

// ==== 12. Ensure modal HTML is present in your HTML file ====
// <div id="resourceModal" class="resource-modal" style="display:none;">
//   <div class="resource-modal-content" id="resourceModalContent"></div>
// </div>
