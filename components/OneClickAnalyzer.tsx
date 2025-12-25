'use client';

import { useState } from 'react';
import { VOADashboardData } from '@/types/voa';

interface OneClickAnalyzerProps {
  onAnalysisStart: () => void;
  onAnalysisComplete: (data: VOADashboardData) => void;
  isLoading: boolean;
}

export default function OneClickAnalyzer({
  onAnalysisStart,
  onAnalysisComplete,
  isLoading,
}: OneClickAnalyzerProps) {
  const [error, setError] = useState<string | null>(null);

  const handleOneClickAnalysis = async () => {
    setError(null);
    onAnalysisStart();

    try {
      const response = await fetch('/api/analyze-voa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sources: [
            'facebook-groups',
            'afh-council-updates',
            'community-forums',
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Analysis failed. Please try again.');
      }

      const data: VOADashboardData = await response.json();
      onAnalysisComplete(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      onAnalysisStart(); // Reset loading state
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          One-Click VOA Analysis
        </h2>
        <p className="text-gray-600 text-center max-w-2xl">
          Scrape and analyze all AFH-related content from Facebook groups, 
          community forums, and official channels. Get instant insights into 
          ecosystem bottlenecks and solutions.
        </p>
        
        <button
          onClick={handleOneClickAnalysis}
          disabled={isLoading}
          className={`
            px-8 py-4 rounded-lg font-semibold text-white text-lg
            transition-all duration-200 transform
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 shadow-lg hover:shadow-xl'
            }
          `}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing VOA...
            </span>
          ) : (
            '🚀 Analyze VOA Now'
          )}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-1">Scraping</h3>
            <p className="text-sm text-blue-700">
              Collecting posts from all AFH channels
            </p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-900 mb-1">AI Analysis</h3>
            <p className="text-sm text-indigo-700">
              LLM-powered categorization and insights
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-1">Visualization</h3>
            <p className="text-sm text-purple-700">
              Generate tables and radar charts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

