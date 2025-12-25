'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { EcosystemBottleneck } from '@/types/voa';

interface BottleneckRadarProps {
  bottlenecks: EcosystemBottleneck;
}

export default function BottleneckRadar({ bottlenecks }: BottleneckRadarProps) {
  const data = [
    {
      subject: 'Regulatory',
      value: bottlenecks.regulatory,
      fullMark: 100,
    },
    {
      subject: 'Staffing',
      value: bottlenecks.staffing,
      fullMark: 100,
    },
    {
      subject: 'Financial',
      value: bottlenecks.financial,
      fullMark: 100,
    },
    {
      subject: 'Community',
      value: bottlenecks.community,
      fullMark: 100,
    },
    {
      subject: 'Tech',
      value: bottlenecks.tech,
      fullMark: 100,
    },
  ];

  const getBottleneckLevel = (value: number) => {
    if (value >= 80) return { level: 'Critical', color: '#ef4444' };
    if (value >= 60) return { level: 'High', color: '#f97316' };
    if (value >= 40) return { level: 'Medium', color: '#eab308' };
    return { level: 'Low', color: '#22c55e' };
  };

  return (
    <div className="space-y-6">
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#374151', fontSize: 14, fontWeight: 'bold' }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Radar
            name="Bottleneck Score"
            dataKey="value"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
        {data.map((item) => {
          const { level, color } = getBottleneckLevel(item.value);
          return (
            <div
              key={item.subject}
              className="bg-gray-50 p-4 rounded-lg border-2"
              style={{ borderColor: color }}
            >
              <h3 className="font-semibold text-gray-900 mb-2">{item.subject}</h3>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold" style={{ color }}>
                  {item.value}
                </span>
                <span className="text-sm text-gray-600">/100</span>
              </div>
              <p className="text-sm mt-2" style={{ color }}>
                {level} Bottleneck
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mt-6">
        <h3 className="font-semibold text-blue-900 mb-2">Interpretation Guide</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>80-100:</strong> Critical bottleneck requiring immediate attention</li>
          <li>• <strong>60-79:</strong> High friction point, significant impact on operations</li>
          <li>• <strong>40-59:</strong> Medium-level concern, monitor closely</li>
          <li>• <strong>0-39:</strong> Low bottleneck, system functioning well in this area</li>
        </ul>
      </div>
    </div>
  );
}

