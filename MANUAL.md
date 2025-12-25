# AFH Omni-Pulse - Complete User Manual

## Table of Contents

1. [Introduction](#introduction)
2. [System Overview](#system-overview)
3. [Getting Started](#getting-started)
4. [User Interface Guide](#user-interface-guide)
5. [Performing VOA Analysis](#performing-voa-analysis)
6. [Understanding Results](#understanding-results)
7. [Advanced Features](#advanced-features)
8. [Configuration and Settings](#configuration-and-settings)
9. [Troubleshooting](#troubleshooting)
10. [Best Practices](#best-practices)
11. [API Reference](#api-reference)
12. [Appendix](#appendix)

---

## Introduction

### What is AFH Omni-Pulse?

AFH Omni-Pulse is a comprehensive Voice of Audience (VOA) monitoring system specifically designed for the Adult Family Home (AFH) ecosystem. It aggregates, analyzes, and visualizes community sentiment, operational challenges, and strategic opportunities from multiple data sources including Facebook groups, community forums, official updates, and social media platforms.

### Who Should Use This System?

- **AFH Providers**: Facility owners and operators who need to understand community sentiment and operational challenges
- **Investors**: Those evaluating AFH opportunities who need market intelligence
- **Caregivers**: Staff members seeking to understand industry trends and challenges
- **Regulatory Bodies**: Organizations monitoring ecosystem health and compliance issues
- **Community Managers**: Administrators of AFH-related groups and forums
- **Industry Analysts**: Researchers studying the AFH ecosystem
- **Families**: Those seeking to understand the AFH landscape when making placement decisions

### Key Benefits

1. **Time Savings**: Automates hours of manual data collection and analysis
2. **Comprehensive Coverage**: Monitors multiple channels simultaneously
3. **Actionable Insights**: Provides specific solutions, not just problems
4. **Visual Clarity**: Complex data presented in intuitive visualizations
5. **Real-Time Updates**: Get current insights whenever you need them
6. **No Technical Expertise Required**: User-friendly interface for all skill levels

---

## System Overview

### Core Components

#### 1. One-Click Analyzer
The central control panel that initiates the entire VOA analysis workflow. This component handles:
- User interaction and analysis triggering
- Progress indication during processing
- Error handling and user feedback
- Integration with backend analysis services

#### 2. VOA Dashboard
The main results display area containing:
- Summary statistics (total posts, sources, analysis date)
- Comprehensive topics table
- Bottleneck radar chart
- Strategic solutions map

#### 3. Topics Table
Detailed breakdown of all analyzed content showing:
- Sequential numbering for easy reference
- Category classification
- Frequency assessment (Very High, High, Medium, Low)
- Percentage representation
- Actionable solutions
- Contextual remarks

#### 4. Bottleneck Radar Chart
Interactive visualization displaying:
- Five-dimensional bottleneck analysis
- Color-coded severity indicators
- Hover tooltips with detailed information
- Export capabilities for presentations

#### 5. Strategic Solutions Map
Actionable recommendations including:
- Specific issue identification
- Contact information for resolution
- AI/LLM technology recommendations
- Implementation guidance

### Data Flow

```
User Click → API Request → Data Scraping → AI Analysis → Data Processing → Visualization → Results Display
```

1. **User Initiates Analysis**: Clicks the "Analyze VOA Now" button
2. **API Request Sent**: Frontend sends request to `/api/analyze-voa`
3. **Data Collection**: System scrapes data from configured sources
4. **AI Processing**: OpenAI GPT-4o analyzes and categorizes content
5. **Data Structuring**: Results organized into topics, bottlenecks, and solutions
6. **Visualization**: Data rendered in tables and charts
7. **User Review**: Results displayed in dashboard for review and action

---

## Getting Started

### Initial Setup

#### Step 1: Access the Application

1. Open your web browser (Chrome, Firefox, Safari, or Edge recommended)
2. Navigate to the application URL (e.g., `http://localhost:3000` for local development)
3. You should see the AFH Omni-Pulse welcome screen

#### Step 2: Verify System Status

Before your first analysis, check:
- ✅ Internet connection is active
- ✅ OpenAI API key is configured (for AI analysis)
- ✅ All required services are accessible
- ✅ Browser is up to date

#### Step 3: Review Interface Elements

Familiarize yourself with the main interface:
- **Header**: Application title and description
- **One-Click Analyzer Section**: Large button to start analysis
- **Results Area**: Where analysis results will appear (initially empty)
- **Footer/Info Section**: Additional information and help links

### First Analysis

#### Performing Your First VOA Analysis

1. **Locate the Analysis Button**
   - Find the prominent "🚀 Analyze VOA Now" button in the center of the screen
   - The button should be clearly visible with a gradient blue/indigo background

2. **Click to Start**
   - Click the button once
   - The button will change to show a loading state
   - Text will change to "Analyzing VOA..." with a spinning indicator

3. **Wait for Processing**
   - Analysis typically takes 10-30 seconds depending on:
     - Amount of data to process
     - API response times
     - Network speed
   - Progress indicators show the system is working

4. **Review Results**
   - Once complete, results automatically appear below
   - Scroll down to see all sections:
     - Summary statistics
     - Topics table
     - Radar chart
     - Solutions map

---

## User Interface Guide

### Main Dashboard Layout

#### Header Section
- **Title**: "AFH Omni-Pulse"
- **Subtitle**: Brief description of the system
- **Purpose**: Branding and context setting

#### One-Click Analyzer Section
This is the primary interaction point:

**Visual Elements**:
- Large, prominent button (gradient blue/indigo)
- Descriptive text explaining functionality
- Three feature cards below showing workflow steps:
  - Scraping: Data collection
  - AI Analysis: Intelligent processing
  - Visualization: Results display

**Button States**:
- **Default**: Blue gradient, "🚀 Analyze VOA Now"
- **Loading**: Gray background, "Analyzing VOA..." with spinner
- **Disabled**: Gray, non-clickable (during processing)

**Error Display**:
- Red-bordered box appears below button if errors occur
- Shows specific error message
- Button returns to default state

#### Results Section (After Analysis)

**Summary Statistics Card**:
- Three metric boxes:
  - Total Posts Analyzed (large number)
  - Sources Count (number of data sources)
  - Analysis Date (formatted date)

**VOA Topics Table Card**:
- Comprehensive table with all topics
- Scrollable if content is long
- Color-coded frequency badges
- Responsive design for mobile

**Bottleneck Radar Chart Card**:
- Interactive radar visualization
- Five dimension labels around the chart
- Color-coded severity indicators below
- Interpretation guide

**Strategic Solutions Map Card**:
- Table of recommended solutions
- Four columns: Issue, Contact, AI Tech, Description
- Organized by priority/severity

### Navigation and Interaction

#### Scrolling
- Results appear below the analyzer section
- Scroll down to see all results
- Each section is in its own card for clarity

#### Table Interactions
- Tables are scrollable horizontally on smaller screens
- Hover over rows for better visibility
- Click column headers to sort (if implemented)

#### Chart Interactions
- Hover over radar chart points for detailed values
- Legend shows what each element represents
- Color coding helps identify severity levels

---

## Performing VOA Analysis

### Standard Analysis Workflow

#### Step 1: Prepare for Analysis

Before clicking the analyze button:
1. **Determine Your Focus**: What specific aspect of the AFH ecosystem do you want to understand?
   - Overall ecosystem health
   - Specific category (regulatory, staffing, etc.)
   - Recent trends and changes
   - Comparison with previous analyses

2. **Check System Status**: Ensure all systems are operational
   - Verify internet connectivity
   - Confirm API keys are valid
   - Check if maintenance is scheduled

3. **Set Expectations**: Understand what the analysis will provide
   - Current snapshot of ecosystem sentiment
   - Categorized topics with frequencies
   - Bottleneck identification
   - Actionable solutions

#### Step 2: Initiate Analysis

1. **Click the Button**: Single click on "🚀 Analyze VOA Now"
2. **Observe Loading State**: Button changes to show processing
3. **Wait Patiently**: Do not click multiple times or refresh the page
4. **Monitor Progress**: Loading indicators show system is working

#### Step 3: Review Initial Results

Once analysis completes:

1. **Check Summary Statistics**
   - Verify total posts analyzed (should be > 0)
   - Confirm sources were accessed
   - Note the analysis timestamp

2. **Scan Topics Table**
   - Review all five categories
   - Note frequency levels (color-coded)
   - Read percentages to understand distribution
   - Review solutions for each category

3. **Examine Radar Chart**
   - Identify highest bottleneck scores
   - Look for patterns across dimensions
   - Note which areas need immediate attention

4. **Review Solutions Map**
   - Identify relevant issues
   - Note contact information
   - Review AI technology recommendations

### Understanding Analysis Timing

**Typical Analysis Duration**:
- Quick analysis (mock data): 2-5 seconds
- Real scraping + AI analysis: 15-45 seconds
- Comprehensive multi-source analysis: 30-90 seconds

**Factors Affecting Speed**:
- Number of sources configured
- Amount of data to process
- API response times
- Network latency
- Server load

**What to Do If Analysis Takes Too Long**:
- Wait at least 2 minutes before assuming failure
- Check browser console for errors (F12)
- Verify API keys are valid
- Check network connectivity
- Refresh page and try again

### Running Multiple Analyses

**When to Run New Analysis**:
- After significant time has passed (daily, weekly)
- After major events (regulatory changes, industry news)
- When you need updated bottleneck scores
- To track trends over time

**Best Practices**:
- Don't run analyses too frequently (respect rate limits)
- Save or export results before running new analysis
- Compare results over time to identify trends
- Note the date/time of each analysis

---

## Understanding Results

### Summary Statistics

#### Total Posts Analyzed
- **What It Means**: Total number of posts, comments, and discussions processed
- **Typical Range**: 50-1000+ depending on sources and time period
- **What to Look For**: 
  - Higher numbers = more comprehensive analysis
  - Very low numbers may indicate scraping issues
  - Compare with previous analyses to track engagement

#### Sources Count
- **What It Means**: Number of different data sources successfully accessed
- **Typical Range**: 1-5+ sources
- **What to Look For**:
  - More sources = broader perspective
  - Missing sources may indicate access issues
  - Verify all expected sources are included

#### Analysis Date
- **What It Means**: Timestamp when analysis was performed
- **Format**: Human-readable date and time
- **What to Look For**:
  - Use to track when data was collected
  - Important for trend analysis
  - Note timezone if relevant

### VOA Topics Table

#### Reading the Table

**Column 1: Number**
- Sequential identifier (1, 2, 3, etc.)
- Helps reference specific topics in discussions
- Use when sharing specific insights

**Column 2: Category of Topic**
- One of five main categories:
  - Regulatory Fatigue
  - Staffing Crisis
  - Financial Viability
  - Community Trust
  - Tech Barriers
- Bold text for emphasis
- Primary classification of the topic

**Column 3: Frequency**
- Color-coded badge showing frequency level:
  - **Very High** (Red): Critical, urgent attention needed
  - **High** (Orange): Significant concern, monitor closely
  - **Medium** (Yellow): Moderate concern, track trends
  - **Low** (Green): Minor issue, low priority
- Quick visual indicator of importance

**Column 4: Percentage**
- Quantitative representation of topic prevalence
- Shows what portion of all analyzed content relates to this category
- Sum of all percentages should equal 100%
- Use to prioritize resource allocation

**Column 5: Solution: How to Answer / Resolve**
- Specific, actionable recommendations
- May include:
  - Technology solutions
  - Process improvements
  - Resource allocation strategies
  - Contact recommendations
- Read carefully for implementation guidance

**Column 6: Remark**
- Additional context and important notes
- May include:
  - Recent changes or trends
  - Specific examples or cases
  - Historical context
  - Warnings or cautions
- Provides deeper understanding of the issue

#### Interpreting Frequency and Percentage

**Very High Frequency (35%+)**:
- Indicates critical, widespread issue
- Requires immediate attention
- Likely affecting many stakeholders
- May need emergency response

**High Frequency (20-34%)**:
- Significant concern affecting many
- Should be prioritized in planning
- Monitor for escalation
- Allocate resources accordingly

**Medium Frequency (10-19%)**:
- Moderate concern
- Track for trends
- May require targeted intervention
- Don't ignore, but not urgent

**Low Frequency (<10%)**:
- Minor issue or emerging trend
- Monitor for changes
- May not require immediate action
- Could be opportunity rather than problem

### Bottleneck Radar Chart

#### Understanding the Chart

**Chart Structure**:
- Five axes extending from center
- Each axis represents one dimension:
  - Regulatory (top)
  - Staffing (top-right)
  - Financial (bottom-right)
  - Community (bottom-left)
  - Tech (top-left)
- Score range: 0-100
- Higher scores = greater bottlenecks

**Reading the Shape**:
- **Spiky Shape**: Indicates uneven bottlenecks across dimensions
  - Some areas critical, others manageable
  - Focus resources on highest spikes
- **Round Shape**: Indicates balanced bottlenecks
  - All dimensions similar severity
  - May indicate systemic issues
- **Small Shape**: Low overall bottlenecks
  - Ecosystem functioning well
  - Focus on optimization, not crisis management

**Color Coding**:
- **Red (80-100)**: Critical bottleneck
  - Immediate action required
  - May be causing significant problems
  - High priority for resolution
- **Orange (60-79)**: High bottleneck
  - Significant concern
  - Should be addressed soon
  - Monitor closely
- **Yellow (40-59)**: Medium bottleneck
  - Moderate concern
  - Plan for improvement
  - Track trends
- **Green (0-39)**: Low bottleneck
  - Functioning well
  - Maintain current state
  - Opportunity for optimization

#### Dimension-Specific Interpretation

**Regulatory Bottleneck (High Score)**:
- Indicates regulatory challenges
- May include:
  - Complex compliance requirements
  - Frequent rule changes
  - High licensing costs
  - Inspection concerns
- **Action**: Review compliance processes, seek regulatory guidance

**Staffing Bottleneck (High Score)**:
- Indicates workforce challenges
- May include:
  - Recruitment difficulties
  - High turnover
  - Certification delays
  - Training gaps
- **Action**: Improve recruitment, retention strategies, training programs

**Financial Bottleneck (High Score)**:
- Indicates economic pressures
- May include:
  - Rate inadequacy
  - High operating costs
  - Low margins
  - Budget constraints
- **Action**: Review pricing, optimize operations, seek funding

**Community Bottleneck (High Score)**:
- Indicates relationship challenges
- May include:
  - Low trust levels
  - Communication issues
  - Satisfaction concerns
  - Reputation problems
- **Action**: Improve communication, engagement, transparency

**Tech Bottleneck (High Score)**:
- Indicates technology challenges
- May include:
  - Low adoption rates
  - Integration difficulties
  - Training needs
  - System limitations
- **Action**: Provide training, simplify systems, increase support

### Strategic Solutions Map

#### Understanding the Solutions Table

**Issue Identified Column**:
- Specific problem or challenge
- Clear, concise description
- Helps identify if issue applies to you
- May reference specific regulations, processes, or situations

**Who to Contact Column**:
- Specific person, department, or organization
- Formatted as clickable badge (blue background)
- May include:
  - Government agencies
  - Industry organizations
  - Support departments
  - Service providers
- Use to reach out for help

**AI LLM Tech to Use Column**:
- Specific AI/LLM technology recommendation
- Formatted as clickable badge (purple background)
- May include:
  - GPT-4o Vision
  - NLP Agents
  - Financial LLMs
  - RAG systems
  - Custom AI tools
- Research the technology to understand implementation

**Description Column**:
- Detailed explanation of the solution
- How to apply the recommended technology
- Expected outcomes
- Implementation guidance
- May include examples or use cases

#### Using the Solutions Map

1. **Identify Relevant Issues**
   - Review all issues in the table
   - Determine which apply to your situation
   - Prioritize based on bottleneck scores

2. **Contact Recommended Parties**
   - Reach out to contacts listed
   - Prepare questions before contacting
   - Document responses and guidance

3. **Research AI Technologies**
   - Learn about recommended AI/LLM tools
   - Understand capabilities and limitations
   - Evaluate implementation feasibility
   - Consider costs and resources needed

4. **Implement Solutions**
   - Follow description guidance
   - Start with pilot projects
   - Measure results
   - Adjust approach as needed

---

## Advanced Features

### Customizing Analysis Parameters

While the standard one-click analysis works for most users, advanced users can customize:

#### Source Selection
- Choose specific sources to include/exclude
- Prioritize certain sources
- Set date ranges for analysis
- Filter by content type

#### Category Customization
- Add custom categories
- Modify existing categories
- Adjust categorization logic
- Set category priorities

#### Analysis Depth
- Choose analysis granularity
- Set minimum confidence thresholds
- Adjust AI model parameters
- Control processing time vs. accuracy trade-offs

### Exporting Results

#### Export Options (When Implemented)

1. **PDF Export**
   - Complete report with all sections
   - Professional formatting
   - Suitable for presentations
   - Includes charts and tables

2. **CSV Export**
   - Raw data for further analysis
   - Topics table data
   - Solutions map data
   - Compatible with Excel, Google Sheets

3. **JSON Export**
   - Complete data structure
   - For developers and integrations
   - Preserves all metadata
   - Machine-readable format

4. **Image Export**
   - Screenshot of radar chart
   - High-resolution images
   - Suitable for reports
   - Multiple format options (PNG, SVG, PDF)

### Historical Analysis Tracking

#### Comparing Analyses Over Time

1. **Save Analysis Results**
   - Export and store results
   - Label with dates
   - Organize by purpose
   - Create analysis archive

2. **Track Trends**
   - Compare bottleneck scores over time
   - Identify improving or worsening areas
   - Track topic frequency changes
   - Monitor solution effectiveness

3. **Generate Reports**
   - Combine multiple analyses
   - Create trend reports
   - Identify patterns
   - Share with stakeholders

### Integration with Other Tools

#### Database Integration
- Store results in database
- Query historical data
- Generate automated reports
- Set up alerts for threshold changes

#### API Integration
- Connect to other systems
- Automate analysis scheduling
- Integrate with business intelligence tools
- Build custom dashboards

#### Notification Systems
- Email alerts for critical bottlenecks
- Slack/Teams integration
- SMS notifications
- Custom webhook integrations

---

## Configuration and Settings

### Environment Configuration

#### Required Settings

**OPENAI_API_KEY**:
- Location: `.env.local` file
- Format: `OPENAI_API_KEY=sk-...`
- Purpose: Enables AI analysis functionality
- Security: Never share or commit to version control

#### Optional Settings

**APIFY_TOKEN**:
- For Facebook scraping integration
- Get from Apify dashboard
- Enables automated data collection

**THUNDERBIT_API_KEY**:
- For browser automation
- Alternative scraping method
- Useful for complex sites

**DATABASE_URL**:
- For persistent storage
- PostgreSQL, MongoDB, etc.
- Enables historical tracking

### UI Customization

#### Theme Customization
- Modify colors in `tailwind.config.ts`
- Adjust fonts and typography
- Customize component styles
- Brand the interface

#### Layout Customization
- Rearrange components
- Add/remove sections
- Modify card layouts
- Adjust spacing and sizing

### Analysis Configuration

#### Scraping Settings
- Configure source URLs
- Set scraping frequency
- Adjust data collection limits
- Set up authentication

#### AI Settings
- Choose AI model (GPT-4o, GPT-4, etc.)
- Adjust temperature and parameters
- Set response format preferences
- Configure error handling

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: Analysis Button Doesn't Work

**Symptoms**:
- Button doesn't respond to clicks
- No loading state appears
- No error messages

**Possible Causes**:
- JavaScript errors in browser
- Network connectivity issues
- API endpoint not accessible
- Browser compatibility issues

**Solutions**:
1. Check browser console (F12) for errors
2. Verify internet connection
3. Try refreshing the page
4. Clear browser cache
5. Try different browser
6. Check if API is running

#### Issue: Analysis Takes Too Long

**Symptoms**:
- Loading state persists for minutes
- No results appear
- Browser becomes unresponsive

**Possible Causes**:
- Large amount of data to process
- Slow API responses
- Network latency
- Server overload

**Solutions**:
1. Wait at least 2-3 minutes
2. Check network connection speed
3. Verify API status
4. Try during off-peak hours
5. Reduce data source scope
6. Contact support if persistent

#### Issue: No Results Appear

**Symptoms**:
- Analysis completes but no data shown
- Empty tables and charts
- Error message displayed

**Possible Causes**:
- Scraping failed
- API errors
- Data processing issues
- Configuration problems

**Solutions**:
1. Check error message details
2. Verify API keys are valid
3. Check scraping service status
4. Review configuration settings
5. Check browser console for errors
6. Try again after a few minutes

#### Issue: Incorrect Results

**Symptoms**:
- Results don't match expectations
- Categories seem wrong
- Percentages don't add up
- Bottleneck scores seem off

**Possible Causes**:
- Limited data sources
- AI misclassification
- Outdated data
- Configuration issues

**Solutions**:
1. Verify data sources are active
2. Check analysis date
3. Review source content manually
4. Adjust AI prompts if possible
5. Run analysis again
6. Contact support with specific examples

#### Issue: API Key Errors

**Symptoms**:
- "Invalid API key" messages
- Analysis fails immediately
- Authentication errors

**Possible Causes**:
- Missing API key
- Incorrect API key format
- Expired or revoked key
- Insufficient API credits

**Solutions**:
1. Verify `.env.local` file exists
2. Check API key format (starts with `sk-`)
3. Verify key in OpenAI dashboard
4. Check API credit balance
5. Regenerate key if needed
6. Ensure no extra spaces in key

### Getting Help

#### Self-Service Resources
- Review this manual
- Check TUTORIAL.md for step-by-step guides
- Review README.md for technical details
- Search documentation for specific topics

#### Contact Support
- Email: support@afh-ecosystem.com
- Include:
  - Description of issue
  - Steps to reproduce
  - Error messages
  - Screenshots if helpful
  - System information

#### Community Resources
- AFH provider forums
- Industry discussion groups
- User community (if available)
- Knowledge base articles

---

## Best Practices

### Analysis Frequency

**Recommended Schedule**:
- **Daily**: For active monitoring during critical periods
- **Weekly**: For regular ecosystem health checks
- **Monthly**: For trend tracking and reporting
- **As Needed**: After major events or changes

**Considerations**:
- Respect API rate limits
- Balance freshness with resource usage
- Schedule during off-peak hours if possible
- Document analysis dates for comparison

### Result Interpretation

**Do**:
- Review all sections comprehensively
- Consider context and timing
- Compare with previous analyses
- Validate critical findings
- Share insights with stakeholders
- Take action on high-priority items

**Don't**:
- Rely on single analysis for major decisions
- Ignore low-frequency but important topics
- Overreact to temporary spikes
- Share results without context
- Ignore recommended solutions

### Data Management

**Organization**:
- Save important analyses
- Label with dates and purposes
- Organize by topic or timeframe
- Create analysis archive
- Document key findings

**Security**:
- Protect API keys
- Secure stored results
- Respect data privacy
- Follow platform terms of service
- Comply with regulations

### Action Planning

**Priority Setting**:
1. Address critical bottlenecks (80+ scores)
2. Implement solutions for high-frequency topics
3. Monitor medium-priority items
4. Track low-priority for trends

**Implementation**:
- Start with quick wins
- Build momentum with early successes
- Allocate resources appropriately
- Measure results
- Adjust strategies based on outcomes

### Communication

**Sharing Results**:
- Provide context when sharing
- Explain methodology briefly
- Highlight key findings
- Include actionable recommendations
- Use visualizations effectively

**Stakeholder Engagement**:
- Tailor communication to audience
- Use appropriate detail level
- Focus on relevant insights
- Provide clear next steps
- Encourage feedback

---

## API Reference

### Analyze VOA Endpoint

**Endpoint**: `POST /api/analyze-voa`

**Request Body**:
```json
{
  "sources": ["facebook-groups", "afh-council-updates", "community-forums"],
  "dateRange": {
    "start": "2025-01-01",
    "end": "2025-01-31"
  }
}
```

**Response**:
```json
{
  "analysis": {
    "topics": [...],
    "totalPosts": 250,
    "analyzedDate": "2025-01-15T10:30:00Z",
    "sources": ["facebook-groups", "afh-council-updates"]
  },
  "bottlenecks": {
    "regulatory": 95,
    "staffing": 85,
    "financial": 75,
    "community": 60,
    "tech": 30
  },
  "solutions": [...]
}
```

### Error Responses

**400 Bad Request**:
```json
{
  "error": "Invalid request parameters"
}
```

**500 Internal Server Error**:
```json
{
  "error": "Failed to analyze VOA data"
}
```

---

## Appendix

### Glossary

- **VOA**: Voice of Audience - Community sentiment and feedback
- **AFH**: Adult Family Home - Residential care facilities
- **Bottleneck**: System friction point or challenge
- **Frequency**: How often a topic appears in analyzed content
- **RAG**: Retrieval-Augmented Generation - AI technique
- **WAC**: Washington Administrative Code
- **RCW**: Revised Code of Washington
- **HCA**: Home Care Aide
- **SB 5672**: Washington State Bill related to HCA certification

### Keyboard Shortcuts

- **F5 / Cmd+R**: Refresh page
- **F12**: Open browser developer tools
- **Ctrl+F / Cmd+F**: Search page content
- **Esc**: Close modals or dialogs

### System Requirements

**Minimum**:
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Internet connection
- JavaScript enabled
- 4GB RAM
- 100MB disk space

**Recommended**:
- Latest browser version
- High-speed internet
- 8GB+ RAM
- SSD storage
- Multiple monitor setup for analysis

### Version History

**Version 1.0.0** (Current):
- Initial release
- One-click VOA analysis
- Five-category topic classification
- Bottleneck radar chart
- Strategic solutions map
- Comprehensive results table

---

**End of Manual**

For additional support or questions, please refer to the TUTORIAL.md for step-by-step guides or contact support@afh-ecosystem.com.

