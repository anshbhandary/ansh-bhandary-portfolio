
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-4xl font-bold">
          AB
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Ansh Bhandary</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Full Stack Developer & Gaming Enthusiast
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions with modern technologies. 
          I blend my love for gaming with software development to build engaging 
          and user-friendly applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
