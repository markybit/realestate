import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

interface FeaturedListingsProps {
  properties?: Property[];
  title?: string;
  subtitle?: string;
}

const FeaturedListings = ({
  properties = [
    {
      id: "1",
      title: "Modern Apartment with City View",
      price: 450000,
      location: "Downtown, New York",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    },
    {
      id: "2",
      title: "Luxury Villa with Pool",
      price: 1250000,
      location: "Beverly Hills, Los Angeles",
      beds: 5,
      baths: 4,
      sqft: 3500,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: "3",
      title: "Cozy Suburban Family Home",
      price: 750000,
      location: "Westfield, New Jersey",
      beds: 4,
      baths: 3,
      sqft: 2400,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: "4",
      title: "Waterfront Condo",
      price: 650000,
      location: "Miami Beach, Florida",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    },
    {
      id: "5",
      title: "Historic Brownstone",
      price: 1100000,
      location: "Brooklyn, New York",
      beds: 4,
      baths: 3,
      sqft: 2800,
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    },
    {
      id: "6",
      title: "Mountain View Cabin",
      price: 520000,
      location: "Aspen, Colorado",
      beds: 3,
      baths: 2,
      sqft: 1600,
      image:
        "https://images.unsplash.com/photo-1542889601-399c4f3a8402?w=800&q=80",
    },
  ],
  title = "Featured Properties",
  subtitle = "Explore our handpicked selection of premium properties",
}: FeaturedListingsProps) => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              price={property.price}
              address={property.location}
              beds={property.beds}
              baths={property.baths}
              sqft={property.sqft}
              propertyType="House"
              isFeatured={true}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="px-8 py-6 text-lg">
            View All Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
