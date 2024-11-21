import React from 'react';

const ProjectsSection = () => {
  // Array of project data
  const projects = [
    {
      id: 1,
      title: "Shoes Website",
      image: "/images/img2.png",
      description: "A sleek and responsive e-commerce website for shoes built with Next.js, HTML, and custom CSS.",
      link: "https://shoes-website.vercel.app/", 
    },
    {
      id: 2,
      title: "Static Resume",
      image: "/images/img.jpg",
      description: "A professional static resume crafted with HTML CSS, designed to showcase skills and experience.",
      link: "https://hackathon-milestone2-static-resume.vercel.app/", 
    },
    {
      id: 3,
      title: "Headphones-website",
      image: "/images/img2.jpg",
      description: "Creating a responsive  Headphones e-commerce website using Next.js, HTML, and Tailwind CSS",
      link: "https://headphones-website-da1h.vercel.app/", 
    },
    {
      id: 4,
      title: "Dynamic Resume",
      image: "/images/img1.jpg",
      description: "An interactive dynamic resume, allowing users to input their data for a personalized experience.",
      link: "https://hackathon-milestone-3-dynamic-resume-lake.vercel.app/", 
    },
  ];  

  return (
    <div className="projects-section">
      {/* H1 heading */}
      <h1 className="main-heading">My Projects</h1>

      {/* Section title */}
      <h2 className="section-title">Here are some of my recent work</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="thumbnail" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            {/* Dynamic link for each project */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-project-button">View My Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;