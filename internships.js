// ─────────────────────────────────────────────────────────────
// INTERNSHIP DATA — edit this file to add / update internships.
// Every listing below was checked against the company's own careers page
// on 14–15 Nov 2026. Postings close without notice: re-check the applyLink.
//
// Fields:
//   role, company, field ("Software Engineering" | "Data & AI" | "Security" | "Product" | …)
//   mode ("Onsite" | "Hybrid" | "Remote"), area
//   paid → true only if the posting says so; stipend → text shown on the card
//   duration, startDate (optional), applyDeadline (optional) → "YYYY-MM-DD"
//   eligibility, skills [], applyLink (the official posting), description
// ─────────────────────────────────────────────────────────────
window.INTERNSHIPS = [
  {
    role: "SDE I Intern (6 months, 2027)",
    company: "Amazon",
    field: "Software Engineering",
    mode: "Onsite",
    area: "Bengaluru",
    stipend: "Stipend not listed on the posting",
    duration: "24–26 weeks · starts between January and June 2027",
    eligibility: "Bachelor's or Master's students in Computer Science or a related field, graduating in 2027",
    skills: ["data structures", "algorithms", "coding"],
    applyLink: "https://www.amazon.jobs/en/jobs/10541345/sde-i-intern-amazon-university-talent-acquisition",
    description: "A full-time, in-person software development internship. One application is considered for all of Amazon's India locations, including Bengaluru.",
  },
  {
    role: "Software Development Engineer Intern",
    company: "HackerRank",
    field: "Software Engineering",
    mode: "Onsite",
    area: "Bengaluru",
    stipend: "Stipend not listed on the posting",
    duration: "6 months",
    startDate: "2027-01-05",
    eligibility: "Must be available full-time from the Bangalore office for the whole 6 months",
    skills: ["software development"],
    applyLink: "https://job-boards.greenhouse.io/hackerrank/jobs/8229735",
    description: "A full-time, six-month engineering internship at HackerRank's Bangalore office, starting 5 January 2027.",
  },
  {
    role: "AI Researcher Intern",
    company: "HackerRank",
    field: "Data & AI",
    mode: "Onsite",
    area: "Bengaluru",
    stipend: "Stipend not listed on the posting",
    duration: "3–6 months",
    eligibility: "Hands-on deep learning experience; the form asks about PyTorch or JAX, paper reproductions and publications",
    skills: ["PyTorch", "JAX", "deep learning", "research"],
    applyLink: "https://job-boards.greenhouse.io/hackerrank/jobs/8281055",
    description: "A research internship at HackerRank's Bangalore office for people who have trained or built neural networks.",
  },
  {
    role: "Software Engineer (CPD) — Winter Intern",
    company: "Rubrik",
    field: "Software Engineering",
    mode: "Onsite",
    area: "Bengaluru",
    stipend: "Stipend not listed on the posting",
    duration: "January to May 2027",
    eligibility: "2027 graduates of circuital branches only, CGPA 8 and above; no remote option",
    skills: ["software engineering"],
    applyLink: "https://www.rubrik.com/company/careers/departments/job.8166537",
    description: "An onsite winter engineering internship at Rubrik's Bangalore office, where interns own a project and its deliverables.",
  },
  {
    role: "Product Management Intern — Identity Resilience",
    company: "Rubrik",
    field: "Product",
    mode: "Hybrid",
    area: "Bengaluru",
    stipend: "Stipend not listed on the posting",
    duration: "2 months",
    eligibility: "Students in a premier MBA or management programme (IIM, ISB or equivalent), graduating in 2027/28",
    skills: ["product strategy", "business cases"],
    applyLink: "https://www.rubrik.com/company/careers/departments/job.8345283",
    description: "A two-month product internship that ends with a product readout to senior leadership.",
  },
  {
    role: "Security Engineer Intern",
    company: "Fam",
    field: "Security",
    mode: "Onsite",
    area: "Bengaluru",
    paid: true,
    stipend: "Competitive stipend (amount not listed)",
    duration: "Duration not listed on the posting",
    eligibility: "See the posting for requirements",
    skills: ["application security", "automation"],
    applyLink: "https://jobs.lever.co/fampay/bbbbbfd2-1855-4991-82d5-84ef57607c24",
    description: "An application security internship at Fam's Bangalore HQ: find weaknesses, automate security checks and work with the engineering team.",
  },
];
