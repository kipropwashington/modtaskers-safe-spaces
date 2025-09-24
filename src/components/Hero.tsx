import { ArrowRight, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMjEzIDEwMCUgOTAlIC8wLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-primary-light px-4 py-2 text-sm font-medium text-primary">
            <Shield className="mr-2 h-4 w-4" />
            Trusted Content Moderation Since August 2024
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            Professional Content Moderation for{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Safe Communities
            </span>
          </h1>
          
          <p className="mb-8 text-xl leading-relaxed text-primary-foreground/90 md:text-2xl">
            ModTaskers provides expert moderation services for 18+ content and chat platforms, 
            ensuring trust, safety, and discretion across digital communities worldwide.
          </p>
          
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hero">
              <Link to="/apply">
                Submit Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <a href="#about">
                Learn More About Us
              </a>
            </Button>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <Shield className="mx-auto mb-4 h-8 w-8 text-white" />
              <h3 className="mb-2 text-lg font-semibold text-white">Trust & Safety</h3>
              <p className="text-sm text-white/80">
                Rigorous moderation standards to protect your community
              </p>
            </div>
            
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <Users className="mx-auto mb-4 h-8 w-8 text-white" />
              <h3 className="mb-2 text-lg font-semibold text-white">Expert Team</h3>
              <p className="text-sm text-white/80">
                Professional moderators from Kenya, Philippines, and Nepal
              </p>
            </div>
            
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <Globe className="mx-auto mb-4 h-8 w-8 text-white" />
              <h3 className="mb-2 text-lg font-semibold text-white">Global Coverage</h3>
              <p className="text-sm text-white/80">
                24/7 moderation across multiple time zones and languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;