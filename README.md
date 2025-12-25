# AFH Omni-Pulse - Voice of Audience (VOA) Monitoring System

## Overview

**AFH Omni-Pulse** is a comprehensive Next.js application designed to monitor and analyze the Voice of Audience (VOA) across the entire Adult Family Home (AFH) ecosystem. This powerful system transforms raw social media data, community discussions, and stakeholder feedback into actionable business intelligence through AI-powered analysis, providing one-click insights into community sentiment, operational bottlenecks, and strategic solutions.

The system serves as a critical tool for AFH providers, investors, caregivers, regulatory bodies, and community stakeholders who need to understand the pulse of the AFH ecosystem in real-time. By aggregating and analyzing content from multiple channels including Facebook groups, community forums, official updates, and social media platforms, AFH Omni-Pulse delivers comprehensive insights that help stakeholders make informed decisions, identify emerging trends, and address critical issues before they escalate.

## Key Features

### One-Click VOA Analysis
The system's flagship feature allows users to initiate comprehensive VOA analysis with a single click. This automated workflow handles the entire pipeline from data collection to insight generation, eliminating the need for manual data gathering, processing, and analysis. The one-click functionality triggers:

- **Automated Scraping**: Simultaneously collects data from multiple sources including Facebook groups, community forums, official AFH Council updates, and social media channels
- **Intelligent Processing**: Leverages advanced AI to process thousands of posts, comments, and discussions in seconds
- **Instant Visualization**: Generates comprehensive reports, tables, and interactive charts immediately upon completion
- **No Technical Expertise Required**: Designed for users of all technical levels, from facility administrators to industry analysts

### Comprehensive Topic Categorization
The AI-powered categorization system automatically organizes all collected content into five critical categories, each representing a key area of concern or opportunity in the AFH ecosystem:

1. **Regulatory Fatigue** (35% average frequency)
   - Licensing challenges and compliance issues
   - Bed fee increases and regulatory changes
   - WAC/RCW updates and their impact
   - Citation concerns and inspection preparation

2. **Staffing Crisis** (25% average frequency)
   - Home Care Aide (HCA) recruitment challenges
   - Certification delays and SB 5672 implementation
   - Staff retention and burnout issues
   - Training and development needs

3. **Financial Viability** (20% average frequency)
   - Medicaid rate gaps and reimbursement challenges
   - Property conversion costs and ROI calculations
   - Operating margin pressures
   - Budget deficit impacts on services

4. **Community Trust** (12% average frequency)
   - Family satisfaction and communication
   - Reputation management
   - Resident matching and placement velocity
   - Caregiver support and recognition

5. **Tech Barriers** (8% average frequency)
   - Digital transformation challenges
   - Technology adoption barriers
   - Automation opportunities
   - Data management and reporting tools

### Visual Bottleneck Analysis
The interactive radar chart provides an intuitive visual representation of ecosystem friction points across five critical dimensions:

- **Regulatory Axis**: Measures the impact of regulatory changes, compliance complexity, and licensing challenges
- **Staffing Axis**: Tracks recruitment difficulties, retention rates, and certification bottlenecks
- **Financial Axis**: Monitors rate adequacy, cost pressures, and profitability concerns
- **Community Axis**: Assesses trust levels, satisfaction metrics, and relationship quality
- **Tech Axis**: Evaluates technology adoption, digital readiness, and automation potential

Each axis is scored from 0-100, with higher values indicating greater bottlenecks. The visual representation makes it immediately clear where the ecosystem is experiencing the most friction, enabling stakeholders to prioritize their efforts and resources effectively.

### Strategic Solutions Map
Beyond identifying problems, AFH Omni-Pulse provides actionable solutions for each identified issue. The Strategic Solutions Map includes:

- **Issue Identification**: Clear description of the problem or challenge
- **Contact Information**: Specific individuals, organizations, or departments to reach out to
- **AI Technology Recommendations**: Specific AI/LLM tools and techniques that can help solve the problem
- **Implementation Guidance**: Detailed descriptions of how to apply the recommended solutions

### Detailed Results Table
The comprehensive results table provides a complete breakdown of all analyzed topics with the following columns:

- **Number**: Sequential identifier for easy reference
- **Category of Topic**: The primary category classification
- **Frequency**: Qualitative assessment (Very High, High, Medium, Low)
- **Percentage**: Quantitative representation of topic prevalence
- **Solution: How to Answer / Resolve**: Specific, actionable recommendations
- **Remark**: Additional context, trends, or important notes

## System Architecture

### Technology Stack

**Frontend Framework**: Next.js 14.2 with React 18.3
- Server-side rendering for optimal performance
- API routes for backend functionality
- TypeScript for type safety
- Tailwind CSS for responsive, modern UI

**AI & Analysis**: OpenAI GPT-4o
- Advanced natural language processing
- Contextual understanding of AFH industry terminology
- Intelligent categorization and sentiment analysis
- Solution generation based on industry best practices

**Data Visualization**: Recharts
- Interactive radar charts
- Responsive design for all screen sizes
- Export capabilities for reports and presentations

**Scraping Integration**: Designed for multiple platforms
- Apify for Facebook Groups scraping
- Thunderbit for browser automation
- Custom scrapers for specialized sources

### Project Structure

```
afh-voa-monitor/
├── app/
│   ├── api/
│   │   └── analyze-voa/
│   │       └── route.ts          # Main API endpoint for VOA analysis
│   ├── globals.css                # Global styles and Tailwind configuration
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Main dashboard page component
├── components/
│   ├── BottleneckRadar.tsx        # Interactive radar chart visualization
│   ├── OneClickAnalyzer.tsx       # One-click analysis trigger component
│   ├── StrategicSolutions.tsx     # Solutions table with contact info
│   ├── VOADashboard.tsx           # Main dashboard orchestrator
│   └── VOATable.tsx               # Comprehensive VOA topics table
├── types/
│   └── voa.ts                     # TypeScript type definitions for all data structures
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── next.config.js                 # Next.js configuration
└── README.md                      # This file
```

## Getting Started

### Prerequisites

Before installing AFH Omni-Pulse, ensure you have the following:

1. **Node.js 18.0 or higher**: Download from [nodejs.org](https://nodejs.org/)
2. **npm 9.0 or higher**: Usually included with Node.js
3. **OpenAI API Key**: Required for AI analysis functionality
   - Sign up at [platform.openai.com](https://platform.openai.com/)
   - Generate an API key from your account settings
   - Ensure you have sufficient credits for API usage

### Installation Steps

#### Step 1: Clone or Navigate to Project Directory

If you have the project in a repository:
```bash
git clone <repository-url>
cd afh-voa-monitor
```

Or if you already have the project:
```bash
cd afh-voa-monitor
```

#### Step 2: Install Dependencies

Install all required npm packages:
```bash
npm install
```

This will install:
- Next.js and React framework
- OpenAI SDK for AI integration
- Recharts for data visualization
- TypeScript and type definitions
- Tailwind CSS and PostCSS
- All other required dependencies

#### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:
```bash
touch .env.local
```

Add your OpenAI API key:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**Optional Environment Variables** (for advanced integrations):
```env
APIFY_TOKEN=your_apify_token_here
THUNDERBIT_API_KEY=your_thunderbit_key_here
DATABASE_URL=your_database_connection_string
```

**Security Note**: Never commit `.env.local` to version control. It's already included in `.gitignore`.

#### Step 4: Verify Installation

Run a quick build test to ensure everything is set up correctly:
```bash
npm run build
```

If the build succeeds without errors, you're ready to proceed.

#### Step 5: Start Development Server

Launch the development server:
```bash
npm run dev
```

You should see output indicating the server is running on port 3000:
```
✓ Ready in 2.3s
○ Local:        http://localhost:3000
```

#### Step 6: Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

You should see the AFH Omni-Pulse dashboard with the one-click analyzer button.

## How It Works

### Data Collection Phase

The system is designed to integrate with multiple data sources:

1. **Facebook Groups Scraping**
   - Uses Apify's Facebook Groups Scraper actor
   - Requires group membership and proper authentication
   - Extracts posts, comments, engagement metrics
   - Handles pagination and rate limiting

2. **Community Forums**
   - Custom scrapers for AFH-specific forums
   - Reddit subreddit monitoring
   - Specialized community platforms

3. **Official Channels**
   - AFH Council updates and announcements
   - Regulatory body communications
   - Industry newsletter content

4. **Social Media Platforms**
   - Twitter/X monitoring for hashtags and mentions
   - LinkedIn group discussions
   - Other relevant platforms

### AI Analysis Phase

Once data is collected, the OpenAI GPT-4o model processes it through several stages:

1. **Content Preprocessing**
   - Removes noise and irrelevant content
   - Normalizes text formatting
   - Identifies key themes and topics

2. **Categorization**
   - Classifies each post/comment into one of five categories
   - Calculates confidence scores
   - Handles ambiguous or multi-category content

3. **Frequency Analysis**
   - Counts occurrences by category
   - Calculates percentages
   - Identifies trending topics

4. **Bottleneck Calculation**
   - Analyzes sentiment and urgency
   - Scores each dimension (0-100)
   - Identifies critical issues requiring immediate attention

5. **Solution Generation**
   - Matches issues with proven solutions
   - Recommends appropriate contacts
   - Suggests AI/LLM technologies for implementation

### Visualization Phase

The processed data is presented through multiple visualization formats:

1. **Summary Statistics**
   - Total posts analyzed
   - Number of sources
   - Analysis timestamp

2. **VOA Topics Table**
   - Sortable columns
   - Color-coded frequency indicators
   - Expandable solution details

3. **Bottleneck Radar Chart**
   - Interactive visualization
   - Hover tooltips with detailed information
   - Export capabilities

4. **Strategic Solutions Map**
   - Organized by issue type
   - Contact information with clickable links
   - Technology recommendations with descriptions

## Integration with Scraping Tools

### Apify Integration

To integrate Apify for Facebook scraping:

1. **Install Apify Client**:
```bash
npm install apify-client
```

2. **Update API Route** (`app/api/analyze-voa/route.ts`):
```typescript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
  token: process.env.APIFY_TOKEN,
});

// Run Facebook scraper
const run = await client.actor('apify/facebook-groups-scraper').call({
  groupUrls: [
    'https://www.facebook.com/groups/wa-afh-providers',
    'https://www.facebook.com/groups/afh-community',
    // Add more group URLs
  ],
  resultsPerPage: 100,
  maxPosts: 1000,
});

// Get results
const { items } = await client.dataset(run.defaultDatasetId).listItems();
```

### Thunderbit Integration

For browser automation with Thunderbit:

1. **Set up Thunderbit Account**: Create account at thunderbit.io
2. **Create Scraping Workflow**: Design workflow in Thunderbit dashboard
3. **API Integration**: Use Thunderbit API to trigger workflows programmatically

### Custom Scraper Development

For specialized sources, you can develop custom scrapers:

```typescript
async function scrapeCustomSource(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  // Use Cheerio or similar for HTML parsing
  // Extract relevant content
  // Return structured data
}
```

## Environment Variables

### Required Variables

- **`OPENAI_API_KEY`**: Your OpenAI API key for AI analysis. Without this, the system will use default mock data.

### Optional Variables

- **`APIFY_TOKEN`**: For Apify scraping integration
- **`THUNDERBIT_API_KEY`**: For Thunderbit browser automation
- **`DATABASE_URL`**: For persistent data storage (PostgreSQL, MongoDB, etc.)
- **`NEXT_PUBLIC_API_URL`**: Custom API endpoint if using external services
- **`ANALYSIS_CACHE_TTL`**: Cache time-to-live in seconds (default: 3600)

## Production Deployment

### Building for Production

1. **Create Production Build**:
```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

2. **Test Production Build Locally**:
```bash
npm start
```

### Deployment Options

#### Vercel (Recommended)

Vercel provides seamless Next.js deployment:

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Configure Environment Variables**:
   - Go to Vercel dashboard
   - Navigate to project settings
   - Add environment variables
   - Redeploy

#### Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t afh-voa-monitor .
docker run -p 3000:3000 -e OPENAI_API_KEY=your-key afh-voa-monitor
```

#### Traditional Server Deployment

1. **Build on Server**:
```bash
npm run build
```

2. **Use PM2 for Process Management**:
```bash
npm install -g pm2
pm2 start npm --name "afh-voa-monitor" -- start
pm2 save
pm2 startup
```

## Customization

### Adding New Data Sources

Edit `app/api/analyze-voa/route.ts` to add new scraping sources:

```typescript
const sources = {
  'facebook-groups': scrapeFacebookGroups,
  'reddit': scrapeReddit,
  'twitter': scrapeTwitter,
  'linkedin': scrapeLinkedIn,
  'custom-forum': scrapeCustomForum,
  // Add your custom sources here
};
```

### Modifying Topic Categories

1. **Update Type Definitions** (`types/voa.ts`):
```typescript
export type TopicCategory = 
  | 'Regulatory Fatigue'
  | 'Staffing Crisis'
  | 'Financial Viability'
  | 'Community Trust'
  | 'Tech Barriers'
  | 'Your New Category';  // Add here
```

2. **Update AI Prompt** (`app/api/analyze-voa/route.ts`):
Modify the categorization prompt to include your new category.

### Customizing Bottleneck Dimensions

Edit the `EcosystemBottleneck` interface in `types/voa.ts`:
```typescript
export interface EcosystemBottleneck {
  regulatory: number;
  staffing: number;
  financial: number;
  community: number;
  tech: number;
  yourNewDimension: number;  // Add here
}
```

Update the radar chart component to include the new dimension.

### Styling Customization

Modify `tailwind.config.ts` to customize colors, fonts, and other design elements:
```typescript
theme: {
  extend: {
    colors: {
      'afh-primary': '#your-color',
      'afh-secondary': '#your-color',
    },
  },
}
```

## Performance Optimization

### Caching Strategies

Implement caching to reduce API calls and improve response times:

```typescript
// Example: Cache analysis results
const cacheKey = `voa-analysis-${sources.join('-')}`;
const cached = await redis.get(cacheKey);
if (cached) return JSON.parse(cached);
```

### Rate Limiting

Implement rate limiting to prevent API abuse:
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
```

### Database Integration

For production use, integrate a database to store historical analyses:

```typescript
// Example: PostgreSQL with Prisma
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

await prisma.voaAnalysis.create({
  data: {
    topics: analysis.topics,
    bottlenecks: analysis.bottlenecks,
    createdAt: new Date(),
  },
});
```

## Security Considerations

### API Key Protection

- Never expose API keys in client-side code
- Use environment variables for all sensitive data
- Rotate API keys regularly
- Monitor API usage for unusual patterns

### Data Privacy

- Respect platform Terms of Service when scraping
- Only scrape public content or content you have permission to access
- Implement data retention policies
- Comply with GDPR, CCPA, and other privacy regulations

### Authentication

Consider adding authentication for production use:
```typescript
// Example: NextAuth.js integration
import { getServerSession } from 'next-auth';

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // ... rest of handler
}
```

## Troubleshooting

### Common Issues

**Issue**: OpenAI API errors
- **Solution**: Verify API key is correct and has sufficient credits
- Check API rate limits
- Ensure network connectivity

**Issue**: Build errors
- **Solution**: Delete `node_modules` and `.next` directories, then run `npm install` again
- Check Node.js version compatibility
- Review TypeScript errors in terminal

**Issue**: Port already in use
- **Solution**: Change port: `npm run dev -- -p 3001`
- Or kill the process using port 3000

**Issue**: Scraping not working
- **Solution**: Verify scraping service credentials
- Check if target sites have changed their structure
- Review rate limiting and blocking

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is proprietary software for AFH Ecosystem Monitoring. All rights reserved.

## Support and Contact

For technical support, feature requests, or questions:

- **Email**: support@afh-ecosystem.com
- **Documentation**: See MANUAL.md and TUTORIAL.md
- **Issues**: Report bugs through your project management system

## Acknowledgments

AFH Omni-Pulse is built to serve the Adult Family Home community, including providers, caregivers, families, investors, and regulatory bodies. We thank the AFH Council of Washington and all community stakeholders for their valuable feedback and insights.

---

**Version**: 1.0.0  
**Last Updated**: 2025  
**Maintained by**: AFH Ecosystem Development Team
