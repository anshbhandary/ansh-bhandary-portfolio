
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Mail, Code2, Gamepad2 } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto text-center animate-fade-in relative z-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Ansh Bhandary</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span>Full Stack Developer</span>
            </div>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-accent" />
              <span>Gaming Enthusiast</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions with modern technologies. 
            I blend my love for gaming with software development to build engaging 
            and user-friendly applications.
          </p>
          
          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-10 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Quick contact icons */}
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://github.com/anshbhandary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-white" />
            </a>
            <a 
              href="mailto:anshbhandary2002@gmail.com"
              className="w-12 h-12 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center hover:border-primary transition-colors"
          >
            <ChevronDown className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
