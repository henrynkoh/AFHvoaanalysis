'use client';

import { useState } from 'react';
import { 
  ChartBarIcon, 
  BoltIcon, 
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ChartPieIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const features = [
    {
      icon: BoltIcon,
      title: 'One-Click Analysis',
      description: 'Get comprehensive ecosystem insights in just 30 seconds',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ChartBarIcon,
      title: 'AI-Powered Intelligence',
      description: 'Advanced GPT-4o analysis understands AFH ecosystem context',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: SparklesIcon,
      title: 'Visual Analytics',
      description: 'Interactive radar charts and comprehensive data tables',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Actionable Solutions',
      description: 'Every insight comes with specific solutions and contacts',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { label: 'Time Saved Daily', value: '2-3 hours', icon: ClockIcon },
    { label: 'Topics Analyzed', value: '5 Categories', icon: ChartPieIcon },
    { label: 'Bottleneck Dimensions', value: '5 Metrics', icon: CpuChipIcon },
    { label: 'Data Sources', value: 'Unlimited', icon: MagnifyingGlassIcon },
  ];

  const sections = [
    { id: 'home', label: 'Home', icon: RocketLaunchIcon },
    { id: 'features', label: 'Features', icon: SparklesIcon },
    { id: 'how-it-works', label: 'How It Works', icon: BoltIcon },
    { id: 'insights', label: 'Insights', icon: ChartBarIcon },
    { id: 'testimonials', label: 'Testimonials', icon: UserGroupIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Sidebar Navigation */}
      <aside className={`
        fixed left-0 top-0 h-full bg-slate-800/90 backdrop-blur-lg border-r border-purple-500/20
        transition-all duration-300 z-50
        ${sidebarOpen ? 'w-64' : 'w-20'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-6 border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              {sidebarOpen && (
                <div>
                  <h2 className="text-white font-bold text-lg">AFH Omni-Pulse</h2>
                  <p className="text-purple-300 text-xs">VOA Monitoring</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50' 
                      : 'text-purple-200 hover:bg-purple-900/50 hover:text-white'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                  {sidebarOpen && <span className="font-medium">{section.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Toggle Button */}
          <div className="p-4 border-t border-purple-500/20">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-purple-900/50 text-purple-200 hover:bg-purple-800/50 transition-colors"
            >
              <span className={sidebarOpen ? 'rotate-180' : ''}>←</span>
              {sidebarOpen && <span>Collapse</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Hero Section */}
        {activeSection === 'home' && (
          <section className="min-h-screen flex flex-col">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-20">
              {/* Main Heading */}
              <div className="text-center mb-12 space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-4">
                  <SparklesIcon className="w-4 h-4 text-purple-300" />
                  <span className="text-purple-300 text-sm font-medium">AI-Powered Ecosystem Intelligence</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  AFH Omni-Pulse
                </h1>
                
                <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
                  Transform Your AFH Ecosystem Monitoring with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> One-Click Intelligence</span>
                </p>
                
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Stop spending hours manually monitoring. Get comprehensive Voice of Audience insights in 30 seconds with AI-powered analysis.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mb-16">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span>Get Started Free</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl text-purple-300 font-semibold text-lg hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  Watch Demo
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-8 h-8 text-purple-400 mb-3" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {activeSection === 'features' && (
          <section className="min-h-screen p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Powerful Features
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Everything you need to monitor and understand the AFH ecosystem
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400 text-lg">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* How It Works Section */}
        {activeSection === 'how-it-works' && (
          <section className="min-h-screen p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  How It Works
                </h2>
                <p className="text-xl text-gray-300">Simple, fast, and powerful</p>
              </div>

              <div className="space-y-8">
                {[
                  { step: 1, title: 'Configure Sources', desc: 'Add Facebook groups, forums, and channels to monitor' },
                  { step: 2, title: 'One-Click Analysis', desc: 'Click "Analyze VOA Now" - that\'s it!' },
                  { step: 3, title: 'AI Processing', desc: 'GPT-4o analyzes thousands of posts in seconds' },
                  { step: 4, title: 'Get Insights', desc: 'Review topics, bottlenecks, and solutions' },
                  { step: 5, title: 'Take Action', desc: 'Implement recommended solutions with guidance' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Insights Section */}
        {activeSection === 'insights' && (
          <section className="min-h-screen p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Ecosystem Insights
                </h2>
                <p className="text-xl text-gray-300">Real data from AFH communities</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Topic Distribution</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Regulatory Fatigue', value: 35, color: 'bg-red-500' },
                      { label: 'Staffing Crisis', value: 25, color: 'bg-orange-500' },
                      { label: 'Financial Viability', value: 20, color: 'bg-yellow-500' },
                      { label: 'Community Trust', value: 12, color: 'bg-blue-500' },
                      { label: 'Tech Barriers', value: 8, color: 'bg-green-500' },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{item.label}</span>
                          <span className="text-white font-semibold">{item.value}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-3">
                          <div
                            className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Bottleneck Scores</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Regulatory', value: 95, color: 'text-red-400' },
                      { label: 'Staffing', value: 85, color: 'text-orange-400' },
                      { label: 'Financial', value: 75, color: 'text-yellow-400' },
                      { label: 'Community', value: 60, color: 'text-blue-400' },
                      { label: 'Tech', value: 30, color: 'text-green-400' },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{item.label}</span>
                          <span className={`${item.color} font-bold text-xl`}>{item.value}/100</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-4">
                          <div
                            className={`bg-gradient-to-r ${item.color.replace('text-', 'from-')} to-purple-600 h-4 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {activeSection === 'testimonials' && (
          <section className="min-h-screen p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  What Users Say
                </h2>
                <p className="text-xl text-gray-300">Real feedback from AFH professionals</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Sarah M.',
                    role: 'AFH Provider',
                    quote: 'Saves me 2+ hours daily. The bottleneck analysis is invaluable.',
                    icon: UserGroupIcon,
                  },
                  {
                    name: 'Michael T.',
                    role: 'Facility Owner',
                    quote: 'Finally, a tool that actually understands the AFH ecosystem.',
                    icon: ChartBarIcon,
                  },
                  {
                    name: 'Jennifer L.',
                    role: 'Investor',
                    quote: 'Provides the market intelligence I need for better decisions.',
                    icon: RocketLaunchIcon,
                  },
                ].map((testimonial, index) => {
                  const Icon = testimonial.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <Icon className="w-12 h-12 text-purple-400 mb-4" />
                      <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-purple-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

    </div>
  );
}

