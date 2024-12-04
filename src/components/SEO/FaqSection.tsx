import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | string[];
}

const faqs: FaqItem[] = [
  {
    question: "What is a land payment calculator?",
    answer: "A land payment calculator is a financial tool that helps determine your monthly payments when purchasing land. It considers factors such as the property price, down payment, interest rate, and loan term to provide accurate payment estimates and total cost analysis."
  },
  {
    question: "When should I use a land payment calculator?",
    answer: [
      "• Before purchasing land to understand monthly costs",
      "• When comparing different financing options",
      "• To determine affordable down payment amounts",
      "• For planning long-term financial commitments",
      "• When refinancing existing land loans"
    ]
  },
  {
    question: "How are land payments calculated?",
    answer: "Land payments are calculated using the loan amount (property price minus down payment), interest rate, and loan term. The calculator uses an amortization formula to determine monthly payments and provides additional metrics like total interest paid and loan-to-value ratio."
  },
  {
    question: "What factors affect land loan payments?",
    answer: "Several factors influence land loan payments: the purchase price, down payment amount, interest rate, loan term, property type, and your credit score. A larger down payment or shorter loan term typically results in lower total costs but higher monthly payments."
  }
];

export default function FaqSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              <ul className="space-y-2 text-gray-600">
                {faq.answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}