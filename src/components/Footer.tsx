import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold text-primary">ModTaskers</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Professional content moderation services creating safer digital communities 
              worldwide. Trusted by platforms since August 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/apply" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Submit Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Ready to enhance your platform's safety?
            </p>
            <Link 
              to="/apply" 
              className="inline-block text-sm text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Apply to join our team →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ModTaskers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Professional Standards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;