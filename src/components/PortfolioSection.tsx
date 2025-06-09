
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Eventify",
      description: "A comprehensive full-stack event management platform built using microservices architecture. Features user registration, event creation, booking management, and real-time notifications.",
      technologies: ["C#", "Angular", "Microservices", "Ocelot Gateway", "SQL Server"],
      category: "Full Stack",
      featured: true
    },
    {
      title: "Retinal Disease Detection",
      description: "Final year project implementing deep learning models for automated detection of retinal diseases using OCT (Optical Coherence Tomography) images with high accuracy.",
      technologies: ["Python", "ResNet", "InceptionNet", "DenseNet", "TensorFlow"],
      category: "Machine Learning",
      featured: true
    },
    {
      title: "Tours and Travels Data Management",
      description: "A comprehensive data management system for travel agencies built with Java applets and SQL database integration for booking management and customer data handling.",
      technologies: ["Java", "Java Applets", "SQL", "Database Design"],
      category: "Desktop Application",
      featured: false
    },
    {
      title: "Epic Store Gaming Website",
      description: "A dynamic gaming e-commerce platform inspired by Epic Games Store, featuring game listings, user accounts, shopping cart functionality, and secure payment integration.",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS", "Bootstrap"],
      category: "Web Development", 
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and creative problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
