import React from "react";
import HeroSection from "./HeroSection";
import FeaturedListings from "./FeaturedListings";
import StatisticsSection from "./StatisticsSection";
import { Button } from "./ui/button";
import { PhoneCall, Home, ListFilter } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Search */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          <Button size="lg" className="flex items-center gap-2">
            <ListFilter size={18} />
            Search Properties
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
          >
            <Home size={18} />
            List Your Property
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="flex items-center gap-2"
          >
            <PhoneCall size={18} />
            Contact an Agent
          </Button>
        </div>

        {/* Featured Listings Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Button variant="outline">View All</Button>
          </div>
          <FeaturedListings />
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Achievements
          </h2>
          <StatisticsSection />
        </section>

        {/* Additional Content - Testimonials Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="bg-muted p-8 rounded-lg text-center max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">
              "Working with this real estate agency was a dream. They found us
              the perfect home within our budget and made the entire process
              smooth and stress-free."
            </p>
            <p className="font-medium">- Sarah Johnson, Happy Homeowner</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dream Home Realty</h3>
              <p className="text-muted-foreground mb-4">
                Your trusted partner in finding the perfect property.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  Facebook
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  Twitter
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Real Estate Avenue</p>
                <p>Cityville, State 12345</p>
                <p className="mt-2">Phone: (555) 123-4567</p>
                <p>Email: info@dreamhomerealty.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Dream Home Realty. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
