import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export type StateGroup = 'A' | 'B' | 'C' | 'Default';

export interface Sponsor {
  name: string;
  office: string;
  jurisdictions: string[];
}