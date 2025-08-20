import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import examCep from "../assets/examcep.png";
import lemupay from "../assets/lemupay-banner.png";
import jobsMonday from "../assets/jobsmonday-banner.png";
import dotCapital from "../assets/two_phones.webp";

const Projects = () => {
	const projects = [
		{
			name: "Lemupay",
			description:
				"Fintech platform providing payment solutions integrating with payment platforms like M-Pesa and banks. Built a comprehensive payment gateway that handles multiple payment methods and provides real-time transaction monitoring.",
			link: "https://lemupay.com",
			github: "https://github.com/username/lemupay",
			techStack: [
				"Angular",
				"Spring Boot",
				"M-Pesa API",
				"Banking APIs",
				"PostgreSQL",
				"Redis",
			],
			type: "Company Project",
			image: lemupay,
		},
		{
			name: "ExamCep",
			description:
				"A platform for students in Oklahoma to book exams, pay fees (Stripe), enroll in courses, and manage student records.",
			link: "#",
			github: "https://github.com/username/examcep",
			techStack: [
				"Next.js",
				"Spring Boot",
				"Stripe",
				"Student Management",
				"MySQL",
				"JWT",
			],
			type: "Company Project",
			image: examCep,
		},
		{
			name: "JobsMonday",
			description:
				"Job board where hospitals post shifts and nurses/health workers claim them. Includes shift management, verification, and payments.",
			link: "#",
			github: "https://github.com/username/jobsmonday",
			techStack: [
				"Angular",
				"Spring Boot",
				"Job Board",
				"Healthcare",
				"MongoDB",
				"WebSocket",
			],
			type: "Company Project",
			image: jobsMonday,
		},
		{
			name: "DotCapital",
			description:
				"React Native loan app integrated with M‑Pesa. Features loan calculator, repayment scheduling, and credit scoring.",
			link: "#",
			github: "https://github.com/username/dotcapital",
			techStack: [
				"React Native",
				"Spring Boot",
				"M‑Pesa",
				"Loan Management",
				"SQLite",
				"Push Notifications",
			],
			type: "Company Project",
			image: dotCapital,
		},
	];

	return (
		<div className="px-4 py-8">
			<h2 className="font-jakarta text-3xl text-white font-bold mb-6">Projects.</h2>

			<div className="mt-10 space-y-36 md:space-y-48">
				{projects.map((project, index) => (
					<ProjectRow key={index} project={project} />
				))}
			</div>
		</div>
	);
};

const ProjectRow = ({ project }) => {
	const imageRef = useRef(null);
	const textRef = useRef(null);
	const imageInView = useInView(imageRef, { margin: "-20% 0px -20% 0px" });
	const textInView = useInView(textRef, { margin: "-20% 0px -20% 0px" });

	return (
		<section className="relative md:min-h-[75vh] flex flex-col md:flex-row items-center justify-between gap-8">
			{/* Image Card - independent card sliding from left, full-bleed banner */}
			<motion.div
				ref={imageRef}
				initial={{ x: -140, opacity: 0 }}
				animate={imageInView ? { x: 0, opacity: 1 } : { x: -140, opacity: 0 }}
				transition={{ type: "spring", stiffness: 140, damping: 20 }}
				className="w-full md:w-[60%]"
			>
				<div className="relative rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
					<img
						src={project.image}
						alt={project.name}
						className="w-full h-full object-cover aspect-[21/9]"
					/>
					<span
						className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
							project.type === "Company Project" ? "bg-blue-600/90 text-white" : "bg-green-600/90 text-white"
						}`}
					>
						{project.type}
					</span>
				</div>
			</motion.div>

			{/* Description Card - independent card sliding from right */}
			<motion.div
				ref={textRef}
				initial={{ x: 140, opacity: 0 }}
				animate={textInView ? { x: 0, opacity: 1 } : { x: 140, opacity: 0 }}
				transition={{ type: "spring", stiffness: 140, damping: 20, delay: 0.05 }}
				className="w-full md:w-[38%]"
			>
				<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-6 md:p-8 text-white">
					<h3 className="text-2xl font-bold mb-3">{project.name}</h3>
					<p className="text-white/90 mb-5 leading-relaxed text-base md:text-lg">{project.description}</p>
					<div className="mb-5">
						<h4 className="text-sm font-semibold mb-2 text-blue-400">Tech stack</h4>
						<div className="flex flex-wrap gap-2">
							{project.techStack.map((tech, techIndex) => (
								<span key={techIndex} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium border border-blue-700/50">
									{tech}
								</span>
							))}
						</div>
					</div>
					<div className="flex gap-3">
						{project.link !== "#" && (
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
							>
								Open Site
								</a>
						)}
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-600"
						>
							View Code
						</a>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Projects;
