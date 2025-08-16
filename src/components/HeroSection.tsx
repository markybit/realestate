import React from "react";
import { Search, MapPin, Home, DollarSign, BedDouble } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface HeroSectionProps {
  backgroundImage?: string;
}

const HeroSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-background">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed">
          Discover the perfect property that matches your lifestyle and
          preferences with our expert guidance
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-5xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location */}
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Location</span>
              </div>
              <Input
                placeholder="City, neighborhood, or address"
                className="w-full bg-white"
              />
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Home className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Property Type</span>
              </div>
              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any type</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <DollarSign className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Price Range</span>
              </div>
              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Any price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any price</SelectItem>
                  <SelectItem value="0-100000">$0 - $100,000</SelectItem>
                  <SelectItem value="100000-250000">
                    $100,000 - $250,000
                  </SelectItem>
                  <SelectItem value="250000-500000">
                    $250,000 - $500,000
                  </SelectItem>
                  <SelectItem value="500000-1000000">
                    $500,000 - $1,000,000
                  </SelectItem>
                  <SelectItem value="1000000+">$1,000,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Beds/Baths */}
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <BedDouble className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Beds & Baths</span>
              </div>
              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1+">1+ bed, 1+ bath</SelectItem>
                  <SelectItem value="2+">2+ beds, 2+ baths</SelectItem>
                  <SelectItem value="3+">3+ beds, 2+ baths</SelectItem>
                  <SelectItem value="4+">4+ beds, 3+ baths</SelectItem>
                  <SelectItem value="5+">5+ beds, 3+ baths</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-8 flex justify-center">
            <Button className="px-12 py-6 text-xl font-semibold" size="lg">
              <Search className="mr-3 h-6 w-6" /> Search Properties
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
