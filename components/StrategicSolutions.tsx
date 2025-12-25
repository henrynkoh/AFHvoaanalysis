'use client';

import { StrategicSolution } from '@/types/voa';

interface StrategicSolutionsProps {
  solutions: StrategicSolution[];
}

export default function StrategicSolutions({ solutions }: StrategicSolutionsProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Issue Identified
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Who to Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              AI LLM Tech to Use
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {solutions.map((solution, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                {solution.issue}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {solution.contact}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {solution.aiTech}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 max-w-md">
                {solution.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

