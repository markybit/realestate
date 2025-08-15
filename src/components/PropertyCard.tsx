import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  propertyType: string;
  isFeatured?: boolean;
  onFavorite?: () => void;
  onClick?: () => void;
}

const PropertyCard = ({
  image = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  price = 450000,
  address = "123 Main Street, Anytown, USA",
  beds = 3,
  baths = 2,
  sqft = 1800,
  propertyType = "House",
  isFeatured = false,
  onFavorite = () => {},
  onClick = () => {},
}: PropertyCardProps) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={`Property at ${address}`}
          className="w-full h-48 object-cover"
        />
        {isFeatured && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            onFavorite();
          }}
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      <CardContent className="pt-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{formattedPrice}</h3>
          <Badge variant="outline" className="text-xs">
            {propertyType}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground truncate">{address}</p>

        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-center">
            <p className="font-semibold">{beds}</p>
            <p className="text-xs text-muted-foreground">Beds</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{baths}</p>
            <p className="text-xs text-muted-foreground">Baths</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{sqft.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Sq Ft</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
