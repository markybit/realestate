import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Calendar } from "lucide-react";

interface StatisticItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatisticItem = (
  { icon, value, label }: StatisticItemProps = {
    icon: <Building2 size={32} />,
    value: "0",
    label: "Statistic",
  },
) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-3 text-primary">{icon}</div>
      <motion.h3
        className="text-3xl font-bold mb-1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.h3>
      <p className="text-muted-foreground text-center">{label}</p>
    </div>
  );
};

interface StatisticsSectionProps {
  statistics?: {
    propertiesSold: string;
    happyClients: string;
    yearsInBusiness: string;
  };
}

const StatisticsSection = ({
  statistics = {
    propertiesSold: "1,500+",
    happyClients: "950+",
    yearsInBusiness: "15+",
  },
}: StatisticsSectionProps) => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in our numbers. Each statistic represents our
            commitment to excellence and customer satisfaction in the real
            estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatisticItem
            icon={<Building2 size={32} />}
            value={statistics.propertiesSold}
            label="Properties Sold"
          />
          <StatisticItem
            icon={<Users size={32} />}
            value={statistics.happyClients}
            label="Happy Clients"
          />
          <StatisticItem
            icon={<Calendar size={32} />}
            value={statistics.yearsInBusiness}
            label="Years in Business"
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
