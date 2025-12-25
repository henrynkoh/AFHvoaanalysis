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
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    // Smooth scroll effect
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Handle CTA button clicks
  const handleGetStarted = () => {
    scrollToSection('features');
    // Could also open a signup modal or redirect
  };

  const handleWatchDemo = () => {
    setShowDemoModal(true);
  };

  // Handle stat card clicks - navigate to relevant sections
  const handleStatClick = (index: number) => {
    const statSections = ['insights', 'features', 'insights', 'how-it-works'];
    scrollToSection(statSections[index] || 'insights');
  };

  // Handle feature card clicks
  const handleFeatureClick = (index: number) => {
    setSelectedFeature(selectedFeature === index ? null : index);
    scrollToSection('features');
  };

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
    { id: 'case-studies', label: 'Case Studies', icon: CheckCircleIcon },
    { id: 'testimonials', label: 'Testimonials', icon: UserGroupIcon },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Regulatory Compliance Success',
      client: 'Sarah M., AFH Provider',
      location: 'Seattle, WA',
      challenge: 'Facing regulatory fatigue with 95/100 bottleneck score. Struggling to keep up with WAC/RCW updates and bed fee changes. Risk of citations due to compliance gaps.',
      solution: 'Used AFH Omni-Pulse to identify regulatory fatigue as top bottleneck. Implemented AI Compliance Copilot for instant WAC/RCW queries. Contacted DSHS for guidance. Used GPT-4o Vision to scan facility photos for violations.',
      results: [
        'Regulatory bottleneck improved from 95 to 85 in 3 months',
        'Zero citations received after implementation',
        'Compliance research time reduced from 2 hours to 15 minutes weekly',
        'Confidence in regulatory readiness increased significantly'
      ],
      metrics: {
        timeSaved: '1.75 hours/week',
        citationsAvoided: '3 potential citations',
        costSaved: '$4,500+',
        improvement: '10 points'
      },
      color: 'from-red-500 to-orange-500',
      icon: ShieldCheckIcon,
    },
    {
      id: 2,
      title: 'Investment Decision Intelligence',
      client: 'Jennifer L., Real Estate Investor',
      location: 'Bellevue, WA',
      challenge: 'Needed market intelligence to evaluate AFH property investments. Unclear about ecosystem health, regulatory environment, and operational risks in target markets.',
      solution: 'Leveraged AFH Omni-Pulse bottleneck analysis to identify markets with lower regulatory and staffing challenges. Used topic distribution data to understand market sentiment. Tracked financial viability trends across regions.',
      results: [
        'Identified 3 high-opportunity markets with low bottleneck scores',
        'Avoided 2 markets with critical regulatory pressures',
        'ROI improved by 18% through data-driven decisions',
        'Investment confidence increased with objective metrics'
      ],
      metrics: {
        roiImprovement: '18%',
        marketsAnalyzed: '8 markets',
        investmentsMade: '3 properties',
        riskAvoided: '2 high-risk markets'
      },
      color: 'from-blue-500 to-cyan-500',
      icon: ChartBarIcon,
    },
    {
      id: 3,
      title: 'Staffing Crisis Resolution',
      client: 'Michael T., Facility Owner',
      location: 'Tacoma, WA',
      challenge: 'Staffing bottleneck at 85/100. High HCA turnover, certification delays, and recruitment difficulties. Spending 3+ hours daily on staffing issues.',
      solution: 'Analyzed staffing crisis through VOA monitoring. Discovered SB 5672 implementation challenges affecting industry. Implemented automated certification tracking with NLP Agents. Contacted WA Dept of Health for guidance. Developed retention strategies based on community insights.',
      results: [
        'Staffing bottleneck reduced from 85 to 70 in 4 months',
        'HCA turnover decreased by 35%',
        'Certification delays reduced by 40%',
        'Recruitment time cut in half'
      ],
      metrics: {
        turnoverReduction: '35%',
        timeSaved: '2.5 hours/day',
        certificationImprovement: '40%',
        costSaved: '$12,000+/year'
      },
      color: 'from-purple-500 to-pink-500',
      icon: UserGroupIcon,
    },
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
                <button 
                  onClick={handleGetStarted}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2 cursor-pointer"
                >
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span>Get Started Free</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleWatchDemo}
                  className="px-8 py-4 bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl text-purple-300 font-semibold text-lg hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Watch Demo
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleStatClick(index)}
                      className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-left group"
                    >
                      <Icon className="w-8 h-8 text-purple-400 mb-3 group-hover:text-purple-300 transition-colors" />
                      <div className="text-3xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{stat.value}</div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
                      <div className="mt-2 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to learn more →</div>
                    </button>
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
                  const isSelected = selectedFeature === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleFeatureClick(index)}
                      className={`group relative bg-slate-800/50 backdrop-blur border rounded-2xl p-8 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-left ${
                        isSelected 
                          ? 'border-purple-500/80 bg-slate-800/70 shadow-lg shadow-purple-500/30' 
                          : 'border-purple-500/20 hover:border-purple-500/50'
                      }`}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isSelected ? 'scale-110' : ''}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                      <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">{feature.description}</p>
                      {isSelected && (
                        <div className="mt-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                          <p className="text-purple-200 text-sm">
                            💡 This feature uses advanced AI to analyze thousands of posts and provide actionable insights in seconds. Click again to close.
                          </p>
                        </div>
                      )}
                      <div className="mt-3 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Click for details →
                      </div>
                    </button>
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
                  { step: 2, title: 'One-Click Analysis', desc: 'Click &quot;Analyze VOA Now&quot; - that&apos;s it!' },
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
                <button 
                  onClick={() => {
                    setSelectedInsight(selectedInsight === 'topics' ? null : 'topics');
                    if (selectedInsight !== 'topics') {
                      scrollToSection('case-studies');
                    }
                  }}
                  className={`bg-slate-800/50 backdrop-blur border rounded-2xl p-8 transition-all duration-300 cursor-pointer text-left group ${
                    selectedInsight === 'topics'
                      ? 'border-purple-500/80 bg-slate-800/70 shadow-lg shadow-purple-500/30 scale-105' 
                      : 'border-purple-500/20 hover:border-purple-500/50 hover:bg-slate-800/70 hover:scale-105 active:scale-95'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors">Topic Distribution</h3>
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
                  {selectedInsight === 'topics' && (
                    <div className="mt-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                      <p className="text-purple-200 text-sm mb-2 font-semibold">📊 Topic Details:</p>
                      <ul className="space-y-2 text-purple-200 text-sm">
                        {[
                          { label: 'Regulatory Fatigue (35%)', detail: 'Includes licensing challenges, bed fee increases ($450), WAC/RCW updates, and compliance complexity' },
                          { label: 'Staffing Crisis (25%)', detail: 'Covers HCA recruitment, SB 5672 implementation, certification delays, and retention issues' },
                          { label: 'Financial Viability (20%)', detail: 'Addresses Medicaid rate gaps, budget deficits, property conversion costs, and margin pressures' },
                          { label: 'Community Trust (12%)', detail: 'Focuses on family satisfaction, communication effectiveness, reputation management, and relationships' },
                          { label: 'Tech Barriers (8%)', detail: 'Explores technology adoption challenges, digital transformation resistance, and automation opportunities' },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-purple-400">•</span>
                            <span><strong>{item.label}:</strong> {item.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for details →
                  </div>
                </button>

                <button 
                  onClick={() => {
                    setSelectedInsight(selectedInsight === 'bottlenecks' ? null : 'bottlenecks');
                    if (selectedInsight !== 'bottlenecks') {
                      scrollToSection('how-it-works');
                    }
                  }}
                  className={`bg-slate-800/50 backdrop-blur border rounded-2xl p-8 transition-all duration-300 cursor-pointer text-left group ${
                    selectedInsight === 'bottlenecks'
                      ? 'border-purple-500/80 bg-slate-800/70 shadow-lg shadow-purple-500/30 scale-105' 
                      : 'border-purple-500/20 hover:border-purple-500/50 hover:bg-slate-800/70 hover:scale-105 active:scale-95'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors">Bottleneck Scores</h3>
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
                  {selectedInsight === 'bottlenecks' && (
                    <div className="mt-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                      <p className="text-purple-200 text-sm mb-3 font-semibold">📈 Score Interpretation:</p>
                      <ul className="space-y-2 text-purple-200 text-sm">
                        {[
                          { label: 'Regulatory (95/100)', detail: 'Critical - Immediate action required. Measures licensing pressure, compliance complexity, and regulatory changes impact.' },
                          { label: 'Staffing (85/100)', detail: 'High - Address soon. Tracks recruitment difficulties, retention rates, and certification bottlenecks.' },
                          { label: 'Financial (75/100)', detail: 'High - Monitor closely. Evaluates rate adequacy, cost pressures, and profitability concerns.' },
                          { label: 'Community (60/100)', detail: 'Medium - Plan improvements. Assesses trust levels, satisfaction metrics, and relationship quality.' },
                          { label: 'Tech (30/100)', detail: 'Low - Opportunity area. Evaluates technology adoption, digital readiness, and automation potential.' },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-purple-400">•</span>
                            <span><strong>{item.label}:</strong> {item.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for details →
                  </div>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Section */}
        {activeSection === 'case-studies' && (
          <section className="min-h-screen p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Top 3 Case Studies
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Real success stories from AFH professionals who transformed their operations using AFH Omni-Pulse
                </p>
              </div>

              <div className="space-y-12">
                {caseStudies.map((study, index) => {
                  const Icon = study.icon;
                  const isSelected = selectedCaseStudy === study.id;
                  return (
                    <div
                      key={study.id}
                      onClick={() => setSelectedCaseStudy(selectedCaseStudy === study.id ? null : study.id)}
                      className={`bg-slate-800/50 backdrop-blur border rounded-2xl p-8 md:p-12 transition-all duration-300 cursor-pointer group ${
                        isSelected 
                          ? 'border-purple-500/80 bg-slate-800/70 shadow-lg shadow-purple-500/30 scale-[1.01]' 
                          : 'border-purple-500/20 hover:border-purple-500/50 hover:scale-[1.005]'
                      }`}
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                          <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-1">{study.title}</h3>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <span className="font-semibold">{study.client}</span>
                              <span>•</span>
                              <span>{study.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-purple-900/50 rounded-lg border border-purple-500/30">
                          <span className="text-purple-300 font-semibold">Case Study #{study.id}</span>
                        </div>
                      </div>

                      {/* Challenge */}
                      <div className="mb-8">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <h4 className="text-xl font-bold text-white">The Challenge</h4>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed pl-4 border-l-2 border-red-500/30">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <h4 className="text-xl font-bold text-white">The Solution</h4>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed pl-4 border-l-2 border-blue-500/30">
                          {study.solution}
                        </p>
                      </div>

                      {/* Results Grid */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                            <CheckCircleIcon className="w-6 h-6 text-green-400" />
                            <span>Key Results</span>
                          </h4>
                          <ul className="space-y-3">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                            <ChartBarIcon className="w-6 h-6 text-purple-400" />
                            <span>Measurable Impact</span>
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(study.metrics).map(([key, value], idx) => (
                              <div
                                key={idx}
                                className="bg-slate-700/50 rounded-lg p-4 border border-purple-500/20"
                              >
                                <div className="text-sm text-gray-400 mb-1 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                                <div className="text-2xl font-bold text-white">{value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Click for details hint */}
                      <div className="mt-6 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {isSelected ? 'Click again to collapse details' : 'Click for details →'}
                      </div>

                      {/* Divider */}
                      {index < caseStudies.length - 1 && (
                        <div className="border-t border-purple-500/20 pt-8 mt-8">
                          <div className="flex justify-center">
                            <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur border border-purple-500/30 rounded-2xl p-12">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Ready to Achieve Similar Results?
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Join these successful AFH professionals and transform your operations with AI-powered ecosystem intelligence.
                  </p>
                  <button 
                    onClick={handleGetStarted}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2 mx-auto cursor-pointer"
                  >
                    <RocketLaunchIcon className="w-5 h-5" />
                    <span>Start Your Success Story</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
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
                    caseStudy: 1,
                    details: 'Sarah is an experienced AFH provider operating multiple facilities in the Seattle area. She has been in the industry for over 10 years and specializes in high-acuity resident care. Her success with AFH Omni-Pulse has helped her avoid regulatory citations and improve operational efficiency significantly.'
                  },
                  {
                    name: 'Michael T.',
                    role: 'Facility Owner',
                    quote: 'Finally, a tool that actually understands the AFH ecosystem.',
                    icon: ChartBarIcon,
                    caseStudy: 3,
                    details: 'Michael owns and operates a mid-sized AFH facility in Tacoma. He was struggling with staffing challenges that were impacting resident care quality. Through AFH Omni-Pulse, he identified specific solutions that reduced turnover by 35% and improved staff retention dramatically.'
                  },
                  {
                    name: 'Jennifer L.',
                    role: 'Investor',
                    quote: 'Provides the market intelligence I need for better decisions.',
                    icon: RocketLaunchIcon,
                    caseStudy: 2,
                    details: 'Jennifer is a real estate investor focused on healthcare properties. She uses AFH Omni-Pulse to evaluate market conditions and identify investment opportunities. The bottleneck analysis helps her make data-driven decisions, resulting in an 18% ROI improvement on her investments.'
                  },
                ].map((testimonial, index) => {
                  const Icon = testimonial.icon;
                  const isSelected = selectedTestimonial === index;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedTestimonial(isSelected ? null : index);
                        if (!isSelected) {
                          scrollToSection('case-studies');
                          setTimeout(() => setSelectedCaseStudy(testimonial.caseStudy), 500);
                        }
                      }}
                      className={`bg-slate-800/50 backdrop-blur border rounded-2xl p-8 transition-all duration-300 cursor-pointer text-left group ${
                        isSelected
                          ? 'border-purple-500/80 bg-slate-800/70 shadow-lg shadow-purple-500/30 scale-105' 
                          : 'border-purple-500/20 hover:border-purple-500/50 hover:bg-slate-800/70 hover:scale-105 active:scale-95'
                      }`}
                    >
                      <Icon className="w-12 h-12 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                      <p className="text-gray-300 text-lg mb-6 italic group-hover:text-white transition-colors">&quot;{testimonial.quote}&quot;</p>
                      <div>
                        <div className="font-bold text-white group-hover:text-purple-300 transition-colors">{testimonial.name}</div>
                        <div className="text-purple-400 text-sm group-hover:text-purple-300 transition-colors">{testimonial.role}</div>
                      </div>
                      {isSelected && (
                        <div className="mt-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                          <p className="text-purple-200 text-sm">
                            💡 <strong>About {testimonial.name}:</strong> {testimonial.details}
                          </p>
                        </div>
                      )}
                      <div className="mt-4 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Click for details →
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Demo Modal */}
      {showDemoModal && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDemoModal(false)}
        >
          <div 
            className="bg-slate-800 rounded-2xl border border-purple-500/30 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">AFH Omni-Pulse Demo</h2>
              <button
                onClick={() => setShowDemoModal(false)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>
            <div className="bg-slate-900 rounded-xl p-8 mb-6">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <RocketLaunchIcon className="w-20 h-20 text-purple-400 mx-auto mb-4" />
                  <p className="text-white text-xl mb-2">Demo Video Coming Soon</p>
                  <p className="text-gray-400">In the meantime, explore the features below!</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Quick Overview:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <BoltIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">One-Click Analysis</span>
                  </div>
                  <p className="text-gray-300 text-sm">Click &quot;Analyze VOA Now&quot; to get instant insights</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <ChartBarIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">AI-Powered Results</span>
                  </div>
                  <p className="text-gray-300 text-sm">Get comprehensive analysis in 30 seconds</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <SparklesIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">Visual Analytics</span>
                  </div>
                  <p className="text-gray-300 text-sm">Interactive charts and data tables</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">Actionable Solutions</span>
                  </div>
                  <p className="text-gray-300 text-sm">Specific recommendations with contacts</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setShowDemoModal(false);
                  handleGetStarted();
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

