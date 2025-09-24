import { Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    "Professional content review and moderation",
    "Real-time chat monitoring and intervention",
    "Community guideline enforcement",
    "User safety and harassment prevention",
    "Cultural sensitivity and context awareness",
    "Scalable moderation solutions"
  ];

  const countries = [
    { name: "Kenya", flag: "🇰🇪", expertise: "Community Management" },
    { name: "Philippines", flag: "🇵🇭", expertise: "Content Moderation" },
    { name: "Nepal", flag: "🇳🇵", expertise: "Chat Monitoring" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Calendar className="mr-2 h-4 w-4" />
              Established August 2024
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              About ModTaskers
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Building safer digital communities through professional moderation services
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Our Story */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Founded in August 2024, ModTaskers emerged from the growing need for 
                professional, culturally-aware content moderation services. We specialize 
                in creating safe, respectful environments for 18+ content platforms and 
                chat communities.
              </p>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Our commitment to discretion, cultural sensitivity, and professional 
                excellence makes us the trusted partner for platforms requiring 
                sophisticated moderation solutions.
              </p>

              {/* Services */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground mb-4">Our Services</h4>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Team */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">Global Excellence</h3>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Our international team brings diverse perspectives and cultural insights 
                to content moderation. With moderators across three countries, we provide 
                round-the-clock coverage and culturally-informed decision making.
              </p>

              <div className="space-y-4">
                {countries.map((country, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <span className="mr-4 text-3xl">{country.flag}</span>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{country.name}</h4>
                          <p className="text-sm text-muted-foreground">{country.expertise}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Impact Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-primary/5 p-4 text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Coverage</div>
                </div>
                <div className="rounded-lg bg-primary/5 p-4 text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;