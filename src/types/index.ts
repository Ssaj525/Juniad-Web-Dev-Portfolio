export interface Project {
  id: number;
  title: string;
  cat: string;
  tag: string;
  year: number;
  client: string;
  role: string;
  timeline: string;
  tools: string[];
  challenge: string;
  approach: string;
  stats: [string, string][];
  image?: string;
  images?: string[];
  liveUrl?: string;
}

export type CategoryFilter = 'All' | 'Website' | 'Chrome Extension' | 'Data Science';

