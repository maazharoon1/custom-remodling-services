export type PageId = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface ServiceCategory {
  id: string;
  name: string;
  summary: string;
  details: string;
  iconName: string;
  considerations: string[];
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  accentBg: string;
  accentText: string;
  badgeBg: string;
  borderClass: string;
}

export interface ReviewItem {
  id: string;
  label: string;
  quote: string;
  projectType: string;
  focusArea: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  width: number;
  height: number;
  aspectRatio: string;
  verified: boolean;
  alt: string;
  caption: string;
  visibleDetails: string[];
}

export interface EstimateFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  cityOrZip: string;
  details: string;
  timeline: string;
}
