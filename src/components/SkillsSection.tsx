
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const technicalSkills = [
    { name: "C#", level: 90 },
    { name: "Angular", level: 85 },
    { name: "Java", level: 80 },
    { name: "JavaScript", level: 88 },
    { name: "HTML/CSS", level: 92 },
    { name: "ASP.NET", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "SQL", level: 82 }
  ];

  const softSkills = [
    "Communication",
    "Teamwork", 
    "Problem Solving",
    "Adaptability",
    "Personal Effectiveness",
    "Strategic Thinking",
    "Creative Problem Solving",
    "Leadership"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <p className="font-medium text-sm">{skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
