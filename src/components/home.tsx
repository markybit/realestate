import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturedListings from "./FeaturedListings";
import StatisticsSection from "./StatisticsSection";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { PhoneCall, Home, ListFilter, Star, Users, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Search */}
      <HeroSection />

      {/* Main Content */}
      <main>
        {/* Call to Action Buttons */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Can We Help You?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're buying, selling, or renting, we're here to make
                your real estate journey seamless
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
              <Button
                size="lg"
                className="flex items-center gap-3 h-16 px-8 text-lg"
              >
                <ListFilter size={20} />
                Search Properties
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-3 h-16 px-8 text-lg"
              >
                <Home size={20} />
                List Your Property
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="flex items-center gap-3 h-16 px-8 text-lg"
              >
                <PhoneCall size={20} />
                Contact an Agent
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-16">
          <FeaturedListings />
        </section>

        {/* Statistics Section */}
        <section className="py-16">
          <StatisticsSection />
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose DreamHome?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine expertise, technology, and personalized service to
                deliver exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Our experienced agents provide professional advice and market
                  insights to help you make informed decisions.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Personalized Service
                </h3>
                <p className="text-muted-foreground">
                  We understand that every client is unique. Our tailored
                  approach ensures your specific needs are met.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">
                  With thousands of successful transactions, we have the track
                  record to deliver exceptional outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied
                clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Working with DreamHome was incredible. They found us the
                  perfect home within our budget and timeline. Highly
                  recommended!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                    alt="Sarah Johnson"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Happy Homeowner
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Professional, knowledgeable, and always available. They made
                  selling our property a breeze. Excellent service!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=mike"
                    alt="Mike Chen"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Mike Chen</p>
                    <p className="text-sm text-muted-foreground">
                      Property Seller
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "From start to finish, the team was amazing. They guided us
                  through every step and negotiated a great deal for us."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=emma"
                    alt="Emma Davis"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Emma Davis</p>
                    <p className="text-sm text-muted-foreground">
                      First-time Buyer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
