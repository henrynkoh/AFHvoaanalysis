'use client';

import { VOADashboardData } from '@/types/voa';
import VOATable from './VOATable';
import BottleneckRadar from './BottleneckRadar';
import StrategicSolutions from './StrategicSolutions';

interface VOADashboardProps {
  data: VOADashboardData;
}

export default function VOADashboard({ data }: VOADashboardProps) {
  return (
    <div className="space-y-8">
      {/* Summary Stats */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Analysis Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Posts Analyzed</p>
            <p className="text-3xl font-bold text-blue-600">{data.analysis.totalPosts}</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Sources</p>
            <p className="text-3xl font-bold text-indigo-600">{data.analysis.sources.length}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Analysis Date</p>
            <p className="text-lg font-semibold text-purple-600">
              {new Date(data.analysis.analyzedDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* VOA Topics Table */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          VOA Topics Analysis
        </h2>
        <VOATable topics={data.analysis.topics} />
      </div>

      {/* Bottleneck Radar Chart */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          AFH Ecosystem Bottleneck Analysis
        </h2>
        <p className="text-gray-600 mb-6">
          Visual representation of system friction points. Higher values indicate greater bottlenecks.
        </p>
        <BottleneckRadar bottlenecks={data.bottlenecks} />
      </div>

      {/* Strategic Solutions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Strategic Problem-Solving Map
        </h2>
        <StrategicSolutions solutions={data.solutions} />
      </div>
    </div>
  );
}

