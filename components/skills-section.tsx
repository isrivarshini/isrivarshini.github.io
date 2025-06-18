/*"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Testing", level: 80 },
      { name: "CI/CD", level: 75 }
    ]
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "React Developer Certification",
  "Full Stack Web Development",
  "Agile Development Methodology"
];

export function SkillsSection() {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated: Record<string, number> = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          animated[skill.name] = skill.level;
        });
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header *//*}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels 
            across different areas of software development.
          </p>
        </div>

        {/* Skills Grid *//*}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                    <Progress 
                      value={animatedSkills[skill.name] || 0} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Education *//*}
        <Card className="card-hover">
        <CardHeader>
        <CardTitle className="text-xl text-center">Education</CardTitle>
        </CardHeader>
         <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Master’s in Computer Science</h3>
            <p className="text-sm text-muted-foreground">University of Georgia — 2023–2025</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Bachelor’s in Information Technology</h3>
            <p className="text-sm text-muted-foreground">Malla Reddy Engineering College — 2019–2023</p>
          </div>
          </CardContent>
          </Card>
      </div>
    </section>
  );
}*/
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./flipCard.css";

export function SkillsSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const workExperience = [
    {
      title: "Mobile Application Developer",
      company: "The University of Georgia",
      date: "January 2024 - May 2025",
      responsibilities: [
        "Led end-to-end development of HomePro, an Android app for real-time home service booking with provider discovery and order tracking",
        "Integrated Firebase Auth, Realtime DB, and Storage to enable OTP-based login, secure profile creation, and efficient data handling.",
        "Resolved 90% of beta bugs and implemented modular UI with Java/XML, ensuring app stability and fast release through Agile sprints.",],
    },
    {
      title: "Data Analyst",
      company: "Perfect Infra",
      date: "January 2022 - May 2023",
      responsibilities: [
        "Conducted 10+ construction project reviews using quantitative and qualitative methods to identify efficiency gaps and safety risks.",
        "Built interactive Power BI dashboards with DAX metrics (CPI, SPI, cost variance) to support clear stakeholder reporting.",
        "Optimized SQL stored procedures and views for high-volume data analysis, enabling accurate forecasting and financial reporting.",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Work Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A snapshot of my professional journey and academic background in technology and development.
          </p>
        </div>

        {/* Work Experience Cards */}
        <Card className="card-hover mb-16">
          <CardHeader>
            <CardTitle className="text-center text-3xl">Work Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-10">
            {workExperience.map((job, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-4">
                {/* Job Info Card */}
                <Card className="p-4">
                  <CardContent className="space-y-2">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.date}</p>
                  </CardContent>
                </Card>

                {/* Flip Card for Responsibilities */}
                <div className="flip-card-container" onClick={() => toggleFlip(index)}>
                <div className={`flip-card-inner ${flippedCards[index] ? "flipped" : ""}`}>
                  {/* Front Side */}
                  <div className="flip-card-front p-4 rounded-lg bg-muted/20">
                    <p className="text-sm font-semibold text-lg text-center mt-8">
                      What did I do here? Smash that card to find out! 🎯
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back p-4 rounded-lg bg-muted/10">
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Master’s in Computer Science</h3>
              <p className="text-sm text-muted-foreground">University of Georgia — 2023–2025</p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Bachelor’s in Information Technology</h3>
              <p className="text-sm text-muted-foreground">Malla Reddy Engineering College — 2019–2023</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

