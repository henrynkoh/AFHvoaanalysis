'use client';

import { useState } from 'react';
import VOADashboard from '@/components/VOADashboard';
import OneClickAnalyzer from '@/components/OneClickAnalyzer';
import { VOADashboardData } from '@/types/voa';

export default function Home() {
  const [dashboardData, setDashboardData] = useState<VOADashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalysisComplete = (data: VOADashboardData) => {
    setDashboardData(data);
    setIsLoading(false);
  };

  const handleAnalysisStart = () => {
    setIsLoading(true);
    setDashboardData(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AFH Omni-Pulse
          </h1>
          <p className="text-lg text-gray-600">
            Voice of Audience (VOA) Monitoring System for AFH Ecosystem
          </p>
        </header>

        <OneClickAnalyzer
          onAnalysisStart={handleAnalysisStart}
          onAnalysisComplete={handleAnalysisComplete}
          isLoading={isLoading}
        />

        {dashboardData && (
          <div className="mt-8">
            <VOADashboard data={dashboardData} />
          </div>
        )}

        {!dashboardData && !isLoading && (
          <div className="mt-12 text-center text-gray-500">
            <p className="text-lg">Click the button above to start VOA analysis</p>
            <p className="text-sm mt-2">
              The system will scrape and analyze content from AFH-related channels
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

