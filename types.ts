
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface AIResult {
  problem: string;
  severity: 'Low' | 'Medium' | 'High' | 'Emergency';
  estimatedCost: string;
  recommendation: string;
  canDIY: boolean;
}
