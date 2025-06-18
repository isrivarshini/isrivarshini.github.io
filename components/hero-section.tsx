"use client";
import Image from 'next/image';
import { useTheme } from "next-themes";
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  //new block
  const { theme, setTheme } = useTheme();
  const [showPopup, setShowPopup] = useState(true);

  const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
  setShowPopup(false); // dismiss popup after toggling
};
 //end new block 
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/SriVarshini_Resume.pdf';
    link.download = 'SriVarshini_Resume.pdf';
    link.click();
  };

  if (!mounted) return null;

  /*function dismissPopup(): void {
  setShowPopup(false);
  localStorage.setItem("themePopupDismissed", "true");
}*/
function dismissPopup(event: React.MouseEvent<HTMLButtonElement>): void {
  throw new Error("Function not implemented.");
}



  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Theme Toggle Popup */}
         {showPopup && (
          <div className="fixed top-6 left-6 z-50 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 border border-muted shadow-xl rounded-xl px-6 py-4 flex items-center gap-4 animate-in fade-in duration-500">
            <p className="text-sm text-muted-foreground">
            {theme === "light"
                ? "Pssst... it's brighter in here! Want to try Night Mode 🌙 ?"
                : "It's cozy in the dark Want to flip the lights back on ☀️?"}
            </p>
            <button
              onClick={toggleTheme}
              className={`px-8 py-3 text-xs font-semibold rounded-md transition-colors ${
                theme === "light"
                  ? "bg-black text-white hover:bg-zinc-800"
                  : "bg-white text-black hover:bg-zinc-200"
                  }`}
            >
            {theme === "light" ? " 🌙 Mode" : " ☀️ Mode"}
            </button>

            <button
              onClick={dismissPopup}
              className="text-xs text-muted-foreground hover:text-foreground ml-2"
              >
              Dismiss
          </button>
        </div>
      )}

    {/* Background Elements */}
    <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center pt-16  pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
        {/* Logo */}
        <div className="mb-8 animate-in slide-in-from-bottom duration-1000">
          <div className="flex justify-center items-center space-x-4">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              className="w-80 h-80 rounded-full shadow-lg"
            />
        </div>

        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-in slide-in-from-bottom duration-1000 text-center">
            Hi, I&apos;m {''}
          <span className="text-primary font-BebasNeue underline-offset-4 bg-clip-text font-extrabold drop-shadow-md focus-in-contract">SRI VARSHINI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-in slide-in-from-bottom duration-1000 delay-200">
          Software Developer & Mobile Application Developer
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-400">
          Passionate about creating innovative web applications and solving complex problems 
          with modern technologies. Experienced in React, Node.js, and cloud platforms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in slide-in-from-bottom duration-1000 delay-600">
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-3 text-lg"
            onClick={scrollToAbout}
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-lg"
            onClick={downloadResume}
          >
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-in slide-in-from-bottom duration-1000 delay-800">
          <Button 
            variant="ghost" 
            size="lg" 
            className="rounded-full h-12 w-12 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/isrivarshini" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="rounded-full h-12 w-12 hover:bg-secondary/10"
            asChild
          >
            <a href="https://www.linkedin.com/in/sriinakollu07/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="rounded-full h-12 w-12 hover:bg-accent/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </div>
    </section>
  );
}