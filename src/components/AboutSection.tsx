
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const education = [
    "Sudana Residential School, Puttur",
    "Vivekananda PU College, Nagara Puttur", 
    "B.Tech in Computer Science - Sahyadri College of Engineering and Management, Mangalore (2020–2024)"
  ];

  const experience = [
    {
      title: "DotNet Developer",
      company: "UST Global",
      description: "Developed 'Eventify' - a full stack event management project using microservices architecture, C#, Angular, and Ocelot Gateway"
    },
    {
      title: "Graduate Trainee",
      company: "GlowTouch Technologies", 
      description: "Worked on website hosting, DNS management, and WordPress development"
    },
    {
      title: "MERN Stack Intern",
      company: "Swizosoft",
      description: "Completed comprehensive training in MongoDB, Express.js, React, and Node.js"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a love for gaming, creative arts, and cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate gaming enthusiast and budding software developer with a strong 
                background in full stack development and machine learning projects. My curiosity 
                for new technologies drives me to constantly learn and explore innovative solutions.
              </p>
              <p>
                Beyond coding, I have a deep appreciation for creative arts and unique game art styles. 
                Chess is one of my favorite hobbies, teaching me strategic thinking that I apply to 
                problem-solving in development.
              </p>
              <p>
                My goal is to be supportive and successful in everything I do, whether it's 
                collaborating with teams or building applications that make a real impact.
              </p>
              <p>
                My final year project focused on retinal disease detection using OCT images with 
                deep learning models including ResNet, InceptionNet, and DenseNet, showcasing my 
                interest in applying technology to solve real-world healthcare challenges.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Education</h3>
              <div className="space-y-3">
                {education.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">Work Experience</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{exp.title}</h4>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
