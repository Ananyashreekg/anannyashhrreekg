import React from "react";
import "./Project.css";

const Project = () => {
  const projectData = [
    {
      title: "Human Activity Recognition",
      description: "A project using CNN and deep learning to recognize human activities. It utilizes convolutional neural networks to classify activities based on input data, offering insights into human behavior and interaction.",
      link: "https://github.com/Ananyashreekg/HUMAN-ACTIVITY-RECOGNITION"
    },
    {
      title: "Personalized News Aggregator",
      description: "An application that aggregates news based on user preferences. The app allows users to filter news topics and sources, ensuring they receive relevant updates in real-time.",
      link: "https://github.com/Ananyashreekg/PERSONALISED-NEWS-AGGREGATOR"
    },
    {
      title: "Quiz App",
      description: "A fun quiz application built with React. Users can test their knowledge across various categories, with timed quizzes and score tracking to enhance learning.",
      link: "https://github.com/Ananyashreekg/reactquizapp"
    },
    {
      title: "Leaf Disease Detection",
      description: "A deep learning model to detect leaf diseases and classify them. The model analyzes images of leaves to identify signs of disease, providing farmers with actionable insights.",
      link: "https://github.com/Ananyashreekg/Leafdiseasedetection"
    },
    {
      title: "Vision-Based Large Language Model App",
      description: "An application harnessing the capabilities of vision-based large language models. This app combines visual data processing with natural language understanding to generate context-aware responses.",
      link: "https://github.com/Ananyashreekg/Vision-Based-Large-Language-Model-App"
    },
    {
      title: "Portfolio - Ananyashree K G",
      description: "An application showcasing various projects and skills. This portfolio demonstrates my proficiency in web development and machine learning, providing a platform for potential collaborations.",
      link: "https://github.com/Ananyashreekg/Portfolio_AnannyashhrreeKG"
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            className="project-card" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3 className="project-title">{project.title}</h3>
            <div className="project-info">
              <p className="project-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
