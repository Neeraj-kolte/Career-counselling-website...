const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  answers: [mongoose.Schema.Types.Mixed],
  result: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now }
});

// STATIC METHOD: Get Questions
assessmentSchema.statics.getQuestions = async function() {
  return [
    { text: "How much do you enjoy problem-solving?", type: "likert" },
    { text: "Which subject do you like most?", type: "mcq", options: ["Math", "Biology", "History", "Commerce", "Art", "Computers"] },
    { text: "Do you prefer working alone or in a team?", type: "mcq", options: ["Alone", "Team", "Both"] },
    { text: "Are you comfortable with public speaking?", type: "likert" },
    { text: "How much do you enjoy creative activities (writing, drawing, music)?", type: "likert" },
    { text: "Do you like helping others solve their problems?", type: "likert" },
    { text: "Which activity excites you the most?", type: "mcq", options: ["Solving puzzles", "Helping others", "Designing", "Leading a group", "Analyzing data"] },
    { text: "How do you feel about working with numbers and data?", type: "likert" },
    { text: "Do you enjoy learning about new technologies?", type: "likert" },
    { text: "Which environment do you prefer?", type: "mcq", options: ["Office", "Outdoors", "Laboratory", "Classroom", "Studio"] },
    { text: "How comfortable are you with making quick decisions?", type: "likert" },
    { text: "Do you like organizing events or managing projects?", type: "likert" },
    { text: "Which skill describes you best?", type: "mcq", options: ["Analytical thinking", "Empathy", "Creativity", "Leadership", "Attention to detail"] },
    { text: "How much do you enjoy teaching or explaining things to others?", type: "likert" },
    { text: "Do you prefer routine tasks or new challenges?", type: "mcq", options: ["Routine", "New challenges", "A mix of both"] }
  ];
};

// STATIC METHOD: Evaluate and Save Result
assessmentSchema.statics.evaluateAndSave = async function(userId, answers) {
  
    userId = new mongoose.Types.ObjectId(userId);
  
    // Expanded careers with online links
  let careers = [
    {
      name: "Software Engineer",
      summary: "You love problem-solving and technology.",
      links: [
        { label: "Naukri", url: "https://www.naukri.com/software-engineer-jobs" },
        { label: "LinkedIn", url: "https://www.linkedin.com/jobs/software-engineer-jobs" }
      ]
    },
    {
      name: "Data Analyst",
      summary: "You enjoy working with numbers and data.",
      links: [
        { label: "Indeed", url: "https://www.indeed.co.in/Data-Analyst-jobs" },
        { label: "Glassdoor", url: "https://www.glassdoor.co.in/Job/data-analyst-jobs-SRCH_KO0,12.htm" }
      ]
    },
    {
      name: "Nurse Practitioner",
      summary: "You care about helping others and health.",
      links: [
        { label: "TimesJobs", url: "https://www.timesjobs.com/job-healthcare-nurse-jobs.html" },
        { label: "Freshersworld", url: "https://www.freshersworld.com/nursing-jobs" }
      ]
    },
    {
      name: "IT Manager",
      summary: "You have leadership and tech skills.",
      links: [
        { label: "Cutshort", url: "https://cutshort.io/jobs/it-manager-jobs" },
        { label: "Monster India", url: "https://www.monsterindia.com/it-manager-jobs.html" }
      ]
    },
    {
      name: "Psychologist",
      summary: "You have strong empathy and communication skills.",
      links: [
        { label: "Shine.com", url: "https://www.shine.com/job/psychologist-jobs" },
        { label: "LinkedIn", url: "https://www.linkedin.com/jobs/psychologist-jobs" }
      ]
    },
    {
      name: "Marketing Manager",
      summary: "You are creative and strategic.",
      links: [
        { label: "Naukri", url: "https://www.naukri.com/marketing-manager-jobs" },
        { label: "Indeed", url: "https://www.indeed.co.in/Marketing-Manager-jobs" }
      ]
    },
    {
      name: "Teacher",
      summary: "You enjoy sharing knowledge and working with students.",
      links: [
        { label: "Freshersworld", url: "https://www.freshersworld.com/teaching-jobs" },
        { label: "TimesJobs", url: "https://www.timesjobs.com/job-teacher-jobs.html" }
      ]
    },
    {
      name: "Financial Advisor",
      summary: "You have analytical and people skills.",
      links: [
        { label: "Glassdoor", url: "https://www.glassdoor.co.in/Job/financial-advisor-jobs-SRCH_KO0,17.htm" },
        { label: "Naukri", url: "https://www.naukri.com/financial-advisor-jobs" }
      ]
    },
    {
      name: "Civil Engineer",
      summary: "You like building and designing infrastructure.",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/jobs/civil-engineer-jobs" },
        { label: "Indeed", url: "https://www.indeed.co.in/Civil-Engineer-jobs" }
      ]
    },
    {
      name: "UX/UI Designer",
      summary: "You combine creativity with technology.",
      links: [
        { label: "Cutshort", url: "https://cutshort.io/jobs/ux-ui-designer-jobs" },
        { label: "Shine.com", url: "https://www.shine.com/job/ux-designer-jobs" }
      ]
    },
    {
      name: "Entrepreneur",
      summary: "You have a passion for innovation and leadership.",
      links: [
        { label: "LinkedIn Learning", url: "https://www.linkedin.com/learning/topics/entrepreneurship" },
        { label: "Upwork", url: "https://www.upwork.com/" }
      ]
    },
    {
      name: "Content Writer",
      summary: "You love writing and storytelling.",
      links: [
        { label: "Indeed", url: "https://www.indeed.co.in/Content-Writer-jobs" },
        { label: "Naukri", url: "https://www.naukri.com/content-writer-jobs" }
      ]
    },
    {
      name: "Accountant",
      summary: "You are detail-oriented and good with numbers.",
      links: [
        { label: "TimesJobs", url: "https://www.timesjobs.com/job-accountant-jobs.html" },
        { label: "Glassdoor", url: "https://www.glassdoor.co.in/Job/accountant-jobs-SRCH_KO0,10.htm" }
      ]
    },
    {
      name: "Human Resources Specialist",
      summary: "You enjoy working with people and organizations.",
      links: [
        { label: "Naukri", url: "https://www.naukri.com/human-resources-jobs" },
        { label: "LinkedIn", url: "https://www.linkedin.com/jobs/human-resources-jobs" }
      ]
    },
    {
      name: "Mechanical Engineer",
      summary: "You like designing and working with machines.",
      links: [
        { label: "Indeed", url: "https://www.indeed.co.in/Mechanical-Engineer-jobs" },
        { label: "Shine.com", url: "https://www.shine.com/job/mechanical-engineer-jobs" }
      ]
    }
  ];

  // For demo: shuffle and pick top 5
  let shuffled = careers.sort(() => 0.5 - Math.random());
  let topCareers = shuffled.slice(0, 5);

  let breakdown = { Analytical: 8, Creative: 6, Social: 7, Leadership: 5, Technical: 8 }; // Example analytics

  // Save assessment result in DB
  await this.create({
    userId,
    answers,
    result: { careers: topCareers, breakdown }
  });

  return { success: true, careers: topCareers, breakdown };
};

module.exports = mongoose.model('Assessment', assessmentSchema);
