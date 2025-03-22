import { motion } from "framer-motion";
import React from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const experiences = [
    {
      position: "Senior Engineering Manager",
      organization: "Global Med, Arizona (USA)",
      duration: "06/2021 - 10/2024",
      location: "Bangalore, India",
      responsibilities: [
        "Managed multiple agile teams within a large-scale software development environment for Mobile and Web Platforms.",
        "Steered the delivery of 3 complex programs, enhancing overall productivity by 25%.",
        "Spearheaded implementation of DevOps practices, reducing release cycle times by 80%.",
        "Led the digital transformation of traditional waterfall projects to agile, resulting in 45% cost savings.",
        "Reduced Cloud costs by 40% across AWS and Azure.",
        "Managed a team of 40+ resources, fostering collaboration and innovation.",
        "Coordinated with US-based Product and Engineering teams to align project deliverables, technical discussions, and program goals.",
        "Managed implementation of AI projects (Symptoms Checker, Image Analysis, Video-to-Text Conversation, Summarization).",
        "Secured a $3 million contract with Veteran Affairs (USA) for HL7 Integration with EHR and Care Systems.",
        "Hosted the Virtual Health Assistant Application on the government cloud in compliance with VA Software standards.",
        "Conducted design and code reviews, ensuring high-quality and efficient code.",
        "Reduced critical defects by 30% within a project cycle by implementing a proactive testing strategy.",
        "Increased test coverage to 80% by including Unit Test Cases and automating execution as part of Azure Pipelines.",
      ],
    },
    {
      position: "Vice President - Digital Transformation",
      organization: "Fincare Small Finance Bank",
      duration: "02/2019 - 09/2020",
      location: "Bangalore, India",
      responsibilities: [
        "Led strategic initiatives to drive business growth, operational efficiency, and customer satisfaction across banking services.",
        "Implemented Mobile ATM for remote villages during COVID-19, enabling deposits, withdrawals, loan EMI collections, balance inquiries, and notifications.",
        "Directed teams in digital transformation, risk management, and product development, ensuring alignment with regulatory compliance and market trends.",
        "Spearheaded the implementation of Agile methodologies, enhancing team performance and accelerating project delivery across the organization.",
        "Optimized operational processes, reducing turnaround time by 20% and improving customer experience.",
        "Collaborated with cross-functional teams to deliver innovative banking solutions, including digital lending and payment platforms.",
      ],
    },
    {
      position: "Blockchain Consultant",
      organization: "Timbaktu Pvt Ltd.",
      duration: "07/2018 - 10/2018",
      location: "Bangalore, India",
      responsibilities: [
        "Designed and implemented blockchain-based solutions for supply chain transparency and traceability.",
        "Advised on blockchain architecture, smart contracts, and decentralized applications (DApps).",
        "Collaborated with stakeholders to identify use cases and deliver proof-of-concept (PoC) implementations.",
        "Conducted workshops and training sessions to educate teams on blockchain technology and its applications.",
      ],
    },
    {
      position: "Program Manager",
      organization: "TietoEvry",
      duration: "03/2014 - 05/2018",
      location: "Bangalore, India | Oslo, Norway",
      responsibilities: [
        "Led the Core Banking Re-engineering Program with a budget of $2.5 million.",
        "Interacted with leadership and senior stakeholders to align program goals and deliverables.",
        "Managed a cross-functional team of 87 engineers to implement CASA (Current and Savings Account) and Loans modules.",
        "Implemented Microservices Architecture, improving scalability and maintainability.",
        "Managed 6 scrum teams across the software development lifecycle.",
        "Collaborated with the sales team to produce documentation and presentations for opportunities with banks like Santander, Handelsbanken, and Spare Bank.",
        "Delivered projects on time and within budget, achieving a 95% client satisfaction rate.",
      ],
    },
    {
      position: "Technical Project Manager",
      organization: "MTN, South Africa",
      duration: "09/2011 - 12/2013",
      location: "Johannesburg, South Africa",
      responsibilities: [
        "Planned and executed large-scale telecom projects, ensuring timely delivery and quality.",
        "Collaborated with cross-functional teams to align project goals and deliverables.",
        "Communicated with stakeholders to provide updates and address concerns.",
        "Managed risks and issues, ensuring minimal impact on project timelines.",
        "Allocated budgets and resources effectively, optimizing project costs.",
        "Monitored quality and performance, implementing improvements as needed.",
      ],
    },
    {
      position: "Technical Project Manager",
      organization: "Tech Mahindra",
      duration: "06/2010 - 08/2011",
      location: "Bangalore, India",
      responsibilities: [
        "Managed end-to-end project delivery for telecom clients, ensuring adherence to timelines and budgets.",
        "Led teams in the development and deployment of telecom solutions.",
        "Collaborated with clients to gather requirements and provide technical solutions.",
        "Implemented best practices in project management, improving team efficiency.",
      ],
    },
    {
      position: "Senior Technical Analyst",
      organization: "Intec Telecom",
      duration: "04/2005 - 05/2010",
      location: "Bangalore, India",
      responsibilities: [
        "Designed and implemented billing solutions for telecom clients.",
        "Led teams in the development of complex billing systems.",
        "Collaborated with clients to gather requirements and deliver customized solutions.",
        "Mentored junior team members, fostering skill development and knowledge sharing.",
      ],
    },
    {
      position: "Technical Lead",
      organization: "Polaris Software Lab Ltd.",
      duration: "11/2004 - 04/2005",
      location: "Mumbai, India",
      responsibilities: [
        "Led teams in the development of banking software solutions.",
        "Collaborated with clients to gather requirements and deliver solutions.",
        "Implemented best practices in software development, improving code quality.",
      ],
    },
    {
      position: "Technical Consultant",
      organization: "E-Serve Consultancy",
      duration: "04/2000 - 11/2004",
      location: "Mumbai, India",
      responsibilities: [
        "Provided technical consulting services to banking clients.",
        "Designed and implemented software solutions for banking operations.",
        "Collaborated with clients to gather requirements and deliver solutions.",
        "Mentored junior team members, fostering skill development.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
          variants={itemVariants}
        >
          Work Experience
        </motion.h1>

        {/* Experience List */}
        <motion.div className="space-y-8" variants={containerVariants}>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-700 to-indigo-700 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-xl font-semibold mb-2 text-pink-300">
                {experience.position}
              </h2>
              <p className="text-md font-medium mb-2">
                {experience.organization} | {experience.duration} |{" "}
                {experience.location}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}