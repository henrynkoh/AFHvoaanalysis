/**
 * Voice of Audience (VOA) Types for AFH Ecosystem Monitoring
 */

export type TopicCategory = 
  | 'Regulatory Fatigue'
  | 'Staffing Crisis'
  | 'Financial Viability'
  | 'Community Trust'
  | 'Tech Barriers'
  | 'Labor & Staffing'
  | 'Regulatory/Licensing'
  | 'Financial Shortfall'
  | 'Resident Matching'
  | 'Construction/ADA';

export type FrequencyLevel = 'Very High' | 'High' | 'Medium' | 'Low';

export interface VOATopic {
  number: number;
  category: TopicCategory;
  frequency: FrequencyLevel;
  percentage: number;
  solution: string;
  remark: string;
}

export interface VOAAnalysisResult {
  topics: VOATopic[];
  totalPosts: number;
  analyzedDate: string;
  sources: string[];
}

export interface BottleneckMetric {
  name: string;
  value: number; // 0-100
  label: string;
}

export interface EcosystemBottleneck {
  regulatory: number;
  staffing: number;
  financial: number;
  community: number;
  tech: number;
}

export interface StrategicSolution {
  issue: string;
  contact: string;
  aiTech: string;
  description: string;
}

export interface VOADashboardData {
  analysis: VOAAnalysisResult;
  bottlenecks: EcosystemBottleneck;
  solutions: StrategicSolution[];
}

export interface ScrapeRequest {
  sources: string[];
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface ScrapeResult {
  source: string;
  posts: SocialMediaPost[];
  scrapedAt: string;
}

export interface SocialMediaPost {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  category?: TopicCategory;
}

