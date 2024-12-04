import React from 'react';
import { Calculator, DollarSign, PieChart, BarChart3 } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FaqSection from './FaqSection';

export default function SeoContent() {
  const features = [
    {
      icon: Calculator,
      title: "Accurate Land Payments",
      description: "Calculate your monthly land payments with precision using our advanced mortgage calculator tailored for land purchases."
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Plan your land purchase with confidence by understanding total costs, interest, and payment schedules."
    },
    {
      icon: PieChart,
      title: "Down Payment Analysis",
      description: "Evaluate different down payment scenarios and their impact on your monthly payments and total costs."
    },
    {
      icon: BarChart3,
      title: "Loan Insights",
      description: "Get detailed insights into loan-to-value ratios, total interest paid, and complete payment breakdowns."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Land Payment Calculations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our land payment calculator helps you determine affordable monthly payments for your land purchase, considering factors like down payment, interest rates, and loan terms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Why Use a Land Payment Calculator?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">For Land Buyers</h4>
            <ul className="space-y-2">
              <li>• Estimate monthly payments</li>
              <li>• Compare loan terms</li>
              <li>• Plan down payments</li>
              <li>• Understand total costs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">For Financial Planning</h4>
            <ul className="space-y-2">
              <li>• Budget preparation</li>
              <li>• Interest cost analysis</li>
              <li>• Payment scheduling</li>
              <li>• Loan comparison</li>
            </ul>
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
}