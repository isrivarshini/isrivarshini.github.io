"use client";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Database, Globe, Code, Smartphone } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "Home Pro",
    description: "A comprehensive full-stack e-commerce platform with user authentication, product catalog, shopping cart functionality, and secure payment processing. Features include inventory management, order tracking, and admin dashboard.",
    image: "/homepro.png",
    technologies: ["Java", "Firebase", "twilio API","AndroidSDK", "Material UI"],
    githubUrl: "https://github.com",
    date: "2025",
    category: "Full Stack",
    icon: Globe
  },
  {
    title: "Online Movie Booking System",
    description: "Developed a responsive web app allowing users to browse, select, and book movie tickets seamlessly. Integrated secure authentication and real-time seat availability using REST APIs.",
    image: "movie.jpg",
    technologies: ["React", "Node", "Express", "PostgreSQL "],
    githubUrl: "https://github.com",
    date: "2024",
    category: "Full Stack",
    icon: Database
  },
  {
    title: "Red Teaming LLM Agents",
    description: "Conducted advanced red-teaming exercises on large language models to identify vulnerabilities and improve robustness. Enhanced prompt injection defenses and threat mitigation strategies.",
    image: "llm.jpg",
    technologies: ["OpenAI API Keys", "Prompt Engineering", "Python", "AI Tools", "RAG", "Red Teaming"],
    githubUrl: "https://github.com",
    date: "2024",
    category: "Other",
    icon: Code
  },
  {
    title: "Bluetooth Fuzzing Tool Using L2CAP for IoT Devices",
    description: "Developed a custom fuzzing tool targeting the L2CAP protocol to uncover vulnerabilities in Bluetooth-enabled IoT devices. Improved device security by identifying and reporting protocol implementation flaws",
    image: "iot.jpg",
    technologies: ["Linux", "L2CAP", "Fuzzing", "Bluetooth Protocols", "IoT Security","Python"],
    githubUrl: "https://github.com",
    date: "2024",
    category: "Other",
    icon: Code
  },
  {
    title: "Dawg Pool",
    description: "Designed and implemented Dawg Pool, a system for efficient management and retrieval of Directed Acyclic Word Graphs (DAWGs) to optimize memory and search operations. Enhanced performance in text processing applications using this data structure.",
    image: "carpool.jpg",
    technologies: ["Java", "Firebase Authetication", "Android SDK", "Material UI", "Git"],
    githubUrl: "https://github.com",
    date: "2024",
    category: "Full Stack",
    icon: Globe
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with Next.js and featuring dark/light mode, smooth animations, and optimized performance.",
    image: "portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com",
    date: "2024",
    category: "Frontend",
    icon: Code
  }
];

const categories = ["All", "Full Stack", "Frontend", "Other"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my development work, demonstrating expertise across different 
            technologies and problem domains. Each project represents real-world solutions 
            with modern development practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="card-hover group overflow-hidden">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/isrivarshini" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}