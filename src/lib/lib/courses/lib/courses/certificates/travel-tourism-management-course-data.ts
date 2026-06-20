// Travel & Tourism Management (Diploma) - Complete Course Data
// All modules, content, quizzes, and exam in one file

export const travelTourismDiplomaCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "travel-tourism-management-diploma",
  title: "Travel & Tourism Management (Diploma)",
  description: "Advanced management training for tourism professionals covering strategic planning, destination marketing, financial management, quality assurance, crisis management, and sustainable leadership in the tourism industry.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "✈️",
  badge: "Diploma",
  category: "Tourism & Travel",
  prerequisites: ["tourism-certificate"], // Links to Certificate course
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules)
  modules: [
    // MODULE 1: STRATEGIC TOURISM PLANNING
    {
      id: 1,
      title: "Strategic Planning for Tourism",
      content: `# Advanced Tourism Strategy Development

## Strategic Vision in Tourism Management
Strategic planning provides the roadmap for tourism success. It involves setting clear goals, analyzing opportunities, and creating actionable plans to achieve competitive advantage in the tourism market.

## Components of Tourism Strategy

**Vision and Mission Development**
- Creating compelling destination visions that inspire stakeholders
- Defining clear mission statements that guide daily operations
- Aligning organizational goals with community aspirations
- Establishing measurable objectives for tourism development

**SWOT Analysis Framework**
- **Strengths**: Internal advantages like unique attractions, skilled workforce
- **Weaknesses**: Internal challenges such as infrastructure gaps, seasonality
- **Opportunities**: External possibilities like new markets, partnerships
- **Threats**: External risks including competition, economic changes

**Stakeholder Engagement Strategy**
- Identifying key stakeholders (communities, businesses, government)
- Creating effective communication channels
- Building collaborative partnerships
- Managing conflicting interests and expectations

## Implementation Planning
Successful strategy requires detailed implementation:
- **Action Plans**: Specific steps with timelines and responsibilities
- **Resource Allocation**: Budgeting for human, financial, and physical resources
- **Performance Indicators**: Metrics to track progress and success
- **Contingency Plans**: Backup strategies for unexpected challenges

Strategic planning transforms vision into reality through systematic execution and continuous improvement.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does strategic planning provide for tourism success?",
          options: [
            "Simple marketing ideas",
            "A roadmap with clear goals and actionable plans",
            "Only financial projections",
            "Basic operational checklists"
          ],
          correctAnswer: 1,
          explanation: "Strategic planning creates comprehensive roadmaps guiding all tourism development efforts."
        },
        {
          id: 2,
          question: "What does a tourism vision statement do?",
          options: [
            "Lists daily operational tasks",
            "Describes competitor activities",
            "Inspires stakeholders and provides long-term direction",
            "Details financial budgets only"
          ],
          correctAnswer: 2,
          explanation: "Vision statements create inspirational direction for destination development."
        },
        {
          id: 3,
          question: "What does SWOT analysis examine?",
          options: [
            "Internal strengths/weaknesses and external opportunities/threats",
            "Weather patterns and seasons",
            "Only financial performance",
            "Tourist numbers only"
          ],
          correctAnswer: 0,
          explanation: "SWOT analyzes both internal capabilities and external market conditions."
        },
        {
          id: 4,
          question: "What are strengths in tourism SWOT analysis?",
          options: [
            "Competitor activities",
            "External market conditions",
            "Government regulations",
            "Internal advantages like unique attractions"
          ],
          correctAnswer: 3,
          explanation: "Strengths are internal positive factors within the destination's control."
        },
        {
          id: 5,
          question: "Why is stakeholder engagement important?",
          options: [
            "Focuses solely on business owners",
            "Only collects tourist feedback",
            "Builds collaborative partnerships and manages expectations",
            "Avoids community involvement"
          ],
          correctAnswer: 2,
          explanation: "Engagement ensures diverse perspectives and support for tourism initiatives."
        },
        {
          id: 6,
          question: "What does a mission statement provide?",
          options: [
            "Only long-term dreams",
            "Financial statements",
            "Guidance for daily operations and decision-making",
            "Competitor analysis"
          ],
          correctAnswer: 2,
          explanation: "Mission statements guide everyday actions toward achieving the vision."
        },
        {
          id: 7,
          question: "What are opportunities in tourism strategy?",
          options: [
            "Internal staff skills",
            "Existing attractions",
            "External possibilities like new markets or partnerships",
            "Current operations"
          ],
          correctAnswer: 2,
          explanation: "Opportunities are favorable external conditions the destination can leverage."
        },
        {
          id: 8,
          question: "What is an action plan?",
          options: [
            "Marketing brochures",
            "Specific steps with timelines and responsibilities",
            "General ideas without details",
            "Only financial documents"
          ],
          correctAnswer: 1,
          explanation: "Action plans translate strategy into executable tasks with clear accountability."
        },
        {
          id: 9,
          question: "What are threats in tourism planning?",
          options: [
            "External risks including competition and economic changes",
            "Visitor satisfaction",
            "Marketing campaigns",
            "Internal staff meetings"
          ],
          correctAnswer: 0,
          explanation: "Threats are external challenges that could negatively impact tourism."
        },
        {
          id: 10,
          question: "Why measure performance indicators?",
          options: [
            "Track progress and success of strategic initiatives",
            "Avoid strategic adjustments",
            "Compare with unrelated industries",
            "Only count tourist numbers"
          ],
          correctAnswer: 0,
          explanation: "Performance measurement enables evidence-based management decisions."
        },
        {
          id: 11,
          question: "What does resource allocation involve?",
          options: [
            "Building without planning",
            "Budgeting human, financial, and physical resources",
            "Only spending money",
            "Hiring staff randomly"
          ],
          correctAnswer: 1,
          explanation: "Strategic resource allocation ensures efficient use of available assets."
        },
        {
          id: 12,
          question: "What are weaknesses in tourism development?",
          options: [
            "Natural attractions",
            "Visitor preferences",
            "Internal challenges like infrastructure gaps",
            "Global trends"
          ],
          correctAnswer: 2,
          explanation: "Weaknesses are internal limitations needing improvement or management."
        },
        {
          id: 13,
          question: "Why create contingency plans?",
          options: [
            "Only plan for success",
            "Ignore potential problems",
            "Prepare backup strategies for unexpected challenges",
            "Assume perfect conditions"
          ],
          correctAnswer: 2,
          explanation: "Contingency planning ensures resilience during unexpected events."
        },
        {
          id: 14,
          question: "What does aligning goals mean?",
          options: [
            "Only focusing on profits",
            "Ignoring local needs",
            "Copying competitors exactly",
            "Matching organizational objectives with community aspirations"
          ],
          correctAnswer: 3,
          explanation: "Goal alignment creates shared purpose and community support."
        },
        {
          id: 15,
          question: "What transforms vision into reality?",
          options: [
            "Only wishful thinking",
            "Systematic execution and continuous improvement",
            "Random actions",
            "Competitor imitation"
          ],
          correctAnswer: 1,
          explanation: "Consistent implementation and adaptation achieve strategic goals."
        },
        {
          id: 16,
          question: "What are performance indicators?",
          options: [
            "Only financial profits",
            "Building sizes",
            "Metrics to track progress and success",
            "Staff numbers"
          ],
          correctAnswer: 2,
          explanation: "Indicators provide measurable evidence of strategic achievement."
        },
        {
          id: 17,
          question: "Why analyze competitive advantage?",
          options: [
            "Standardize all offerings",
            "Ignore market differences",
            "Only copy successful destinations",
            "Identify unique benefits that attract visitors"
          ],
          correctAnswer: 3,
          explanation: "Competitive advantage analysis helps destinations differentiate themselves."
        },
        {
          id: 18,
          question: "What does stakeholder identification involve?",
          options: [
            "Focusing on foreign investors only",
            "Only counting tourists",
            "Recognizing communities, businesses, and government entities",
            "Ignoring local residents"
          ],
          correctAnswer: 2,
          explanation: "Comprehensive identification ensures all affected parties are considered."
        },
        {
          id: 19,
          question: "What is systematic execution?",
          options: [
            "Only emergency responses",
            "Organized implementation following strategic plans",
            "Following trends blindly",
            "Random trial and error"
          ],
          correctAnswer: 1,
          explanation: "Systematic execution ensures coordinated efforts toward common goals."
        },
        {
          id: 20,
          question: "Why manage conflicting interests?",
          options: [
            "Only satisfy tourists",
            "Balance different stakeholder needs and expectations",
            "Focus on profits alone",
            "Ignore community concerns"
          ],
          correctAnswer: 1,
          explanation: "Conflict management creates sustainable, widely-supported tourism development."
        }
      ]
    },

    // MODULE 2: DESTINATION MARKETING MANAGEMENT
    {
      id: 2,
      title: "Destination Marketing Strategies",
      content: `# Advanced Tourism Marketing and Promotion

## Integrated Destination Marketing
Destination marketing combines various promotional approaches to attract visitors while managing destination image and reputation effectively.

## Marketing Mix for Destinations

**Product Development**
- Creating compelling tourism experiences and packages
- Developing thematic tourism products (cultural, adventure, wellness)
- Enhancing existing attractions and creating new ones
- Ensuring quality standards across tourism offerings

**Pricing Strategies**
- Value-based pricing reflecting experience quality
- Seasonal pricing to manage demand fluctuations
- Package pricing for bundled experiences
- Competitive pricing analysis and positioning

**Promotion Channels**
- Digital marketing (social media, content marketing, SEO)
- Traditional advertising (print, television, radio)
- Public relations and media relations
- Trade shows and travel industry partnerships

**Place Distribution**
- Online travel agencies and booking platforms
- Travel trade partnerships and tour operators
- Direct booking through destination websites
- Visitor information center networks

## Brand Management
Building and maintaining strong destination brands:
- **Brand Identity**: Core values, personality, and visual elements
- **Brand Positioning**: How the destination is perceived relative to competitors
- **Brand Consistency**: Maintaining uniform messaging across all channels
- **Brand Evolution**: Adapting the brand as markets and trends change

## Market Research and Analysis
Informed marketing decisions require:
- **Visitor Profiling**: Understanding target market demographics and preferences
- **Market Segmentation**: Dividing markets into manageable groups
- **Competitive Analysis**: Studying competing destinations' strategies
- **Trend Monitoring**: Tracking industry changes and emerging opportunities

Effective destination marketing creates compelling reasons to visit while delivering promised experiences.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does integrated destination marketing combine?",
          options: [
            "Only online advertising",
            "Various promotional approaches for coordinated efforts",
            "Just price discounts",
            "Random marketing activities"
          ],
          correctAnswer: 1,
          explanation: "Integration ensures all marketing efforts work together toward common goals."
        },
        {
          id: 2,
          question: "What is product development in tourism?",
          options: [
            "Only building physical structures",
            "Creating compelling experiences and packages",
            "Just counting visitors",
            "Managing staff schedules"
          ],
          correctAnswer: 1,
          explanation: "Tourism products are experiences that attract and satisfy visitors."
        },
        {
          id: 3,
          question: "What does value-based pricing reflect?",
          options: [
            "Experience quality and perceived value",
            "Competitor prices only",
            "Only production costs",
            "Government regulations"
          ],
          correctAnswer: 0,
          explanation: "Value pricing aligns prices with customer perceptions of worth."
        },
        {
          id: 4,
          question: "What are promotion channels?",
          options: [
            "Financial reporting systems",
            "Methods to communicate with potential visitors",
            "Staff training programs",
            "Only physical locations"
          ],
          correctAnswer: 1,
          explanation: "Promotion channels deliver marketing messages to target audiences."
        },
        {
          id: 5,
          question: "What is brand identity?",
          options: [
            "Advertising budgets",
            "Core values, personality, and visual elements",
            "Only logo design",
            "Staff uniforms"
          ],
          correctAnswer: 1,
          explanation: "Brand identity defines how a destination presents itself to the world."
        },
        {
          id: 6,
          question: "Why use seasonal pricing?",
          options: [
            "Always charge maximum prices",
            "Standardize prices regardless of demand",
            "Ignore market conditions",
            "Manage demand fluctuations throughout the year"
          ],
          correctAnswer: 3,
          explanation: "Seasonal pricing balances visitor numbers and optimizes revenue."
        },
        {
          id: 7,
          question: "What is place distribution?",
          options: [
            "Geographic mapping",
            "Making tourism products available through various channels",
            "Transportation routes",
            "Only physical location of attractions"
          ],
          correctAnswer: 1,
          explanation: "Distribution ensures potential visitors can access and book experiences."
        },
        {
          id: 8,
          question: "What does brand positioning determine?",
          options: [
            "Only physical location on maps",
            "Budget allocation percentages",
            "How destination is perceived relative to competitors",
            "Staff organizational structure"
          ],
          correctAnswer: 2,
          explanation: "Positioning creates distinct market presence and competitive advantage."
        },
        {
          id: 9,
          question: "What is visitor profiling?",
          options: [
            "Checking identification documents",
            "Monitoring hotel occupancy",
            "Counting arrivals only",
            "Understanding target market demographics and preferences"
          ],
          correctAnswer: 3,
          explanation: "Profiling helps create targeted marketing messages and experiences."
        },
        {
          id: 10,
          question: "What are thematic tourism products?",
          options: [
            "Business meetings",
            "Transportation services",
            "Only general sightseeing",
            "Experiences focused on specific interests like culture or adventure"
          ],
          correctAnswer: 3,
          explanation: "Thematic products attract specific market segments with shared interests."
        },
        {
          id: 11,
          question: "Why analyze competitors?",
          options: [
            "Understand their strategies and identify opportunities",
            "Copy them exactly",
            "Ignore market differences",
            "Focus only on internal operations"
          ],
          correctAnswer: 0,
          explanation: "Competitive analysis informs strategic differentiation and improvement."
        },
        {
          id: 12,
          question: "What is package pricing?",
          options: [
            "Ignoring component values",
            "Bundling multiple experiences at combined rates",
            "Only offering free packages",
            "Pricing each element separately always"
          ],
          correctAnswer: 1,
          explanation: "Packages create value perception and encourage longer stays."
        },
        {
          id: 13,
          question: "What does brand consistency require?",
          options: [
            "Different stories for different audiences",
            "Changing messages frequently",
            "Ignoring visual identity",
            "Uniform messaging across all communication channels"
          ],
          correctAnswer: 3,
          explanation: "Consistency builds trust and recognition in destination branding."
        },
        {
          id: 14,
          question: "What is market segmentation?",
          options: [
            "Only focusing on large groups",
            "Dividing markets into manageable groups with similar characteristics",
            "Ignoring demographic differences",
            "Treating all tourists identically"
          ],
          correctAnswer: 1,
          explanation: "Segmentation allows tailored marketing approaches for different groups."
        },
        {
          id: 15,
          question: "Why enhance existing attractions?",
          options: [
            "Maintain competitiveness and visitor satisfaction",
            "Reduce maintenance costs",
            "Ignore visitor feedback",
            "Only build new attractions"
          ],
          correctAnswer: 0,
          explanation: "Continuous improvement keeps destinations relevant and appealing."
        },
        {
          id: 16,
          question: "What is digital marketing?",
          options: [
            "Online promotion through social media, content, and SEO",
            "Only print advertisements",
            "Face-to-face selling",
            "Billboard advertising"
          ],
          correctAnswer: 0,
          explanation: "Digital marketing reaches global audiences cost-effectively."
        },
        {
          id: 17,
          question: "Why track industry trends?",
          options: [
            "Standardize offerings permanently",
            "Identify emerging opportunities and adapt strategies",
            "Only follow historical patterns",
            "Ignore market changes"
          ],
          correctAnswer: 1,
          explanation: "Trend awareness enables proactive rather than reactive management."
        },
        {
          id: 18,
          question: "What are trade shows used for?",
          options: [
            "Only selling to individual tourists",
            "Building travel industry partnerships and networks",
            "Staff vacations",
            "Financial auditing"
          ],
          correctAnswer: 1,
          explanation: "Trade shows connect destinations with tourism trade professionals."
        },
        {
          id: 19,
          question: "What does brand evolution involve?",
          options: [
            "Changing brand randomly",
            "Ignoring market feedback",
            "Adapting brand as markets and trends change",
            "Keeping brand static forever"
          ],
          correctAnswer: 2,
          explanation: "Brand evolution ensures continued relevance in changing markets."
        },
        {
          id: 20,
          question: "What ensures quality standards across offerings?",
          options: [
            "Systematic quality control and certification programs",
            "Ignoring quality issues",
            "Focusing only on price",
            "Random inspections only"
          ],
          correctAnswer: 0,
          explanation: "Quality consistency builds destination reputation and repeat visitation."
        }
      ]
    },

    // MODULE 3: FINANCIAL MANAGEMENT IN TOURISM
    {
      id: 3,
      title: "Tourism Financial Management",
      content: `# Financial Planning and Analysis for Tourism

## Financial Management Framework
Effective financial management ensures tourism operations remain sustainable while delivering quality experiences and generating economic benefits.

## Key Financial Concepts

**Revenue Management**
- Dynamic pricing based on demand forecasting
- Yield management for optimizing revenue per available unit
- Channel management across different booking platforms
- Inventory control and allocation strategies

**Cost Control Systems**
- Fixed vs variable cost analysis
- Direct vs indirect cost allocation
- Efficiency improvements through process optimization
- Budget variance analysis and corrective actions

**Investment Analysis**
- Capital budgeting for tourism infrastructure
- Return on investment calculations for projects
- Payback period and net present value analysis
- Risk assessment for tourism investments

**Financial Performance Metrics**
- Occupancy rates and revenue per available room (RevPAR)
- Average daily rate (ADR) and revenue per guest
- Cost per acquisition for marketing efforts
- Profit margins and break-even analysis

## Budgeting and Forecasting

**Operational Budgeting**
- Revenue projections based on market analysis
- Expense forecasting for operations and maintenance
- Cash flow management and working capital requirements
- Contingency budgeting for unexpected events

**Capital Budgeting**
- Long-term investment planning for infrastructure
- Funding strategies (grants, loans, private investment)
- Phased development approaches
- Lifecycle cost considerations

## Financial Sustainability
Ensuring long-term financial health:
- **Diversified Revenue Streams**: Multiple income sources beyond room nights
- **Reserve Funds**: Savings for maintenance and unexpected needs
- **Economic Impact Monitoring**: Tracking tourism's contribution to local economy
- **Value for Money**: Balancing quality experiences with financial viability

Sound financial management provides the foundation for sustainable tourism development and growth.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does financial management ensure in tourism?",
          options: [
            "Only maximum short-term profits",
            "Focusing only on tourist numbers",
            "Sustainable operations delivering quality experiences",
            "Ignoring community benefits"
          ],
          correctAnswer: 2,
          explanation: "Financial management balances economic viability with quality and sustainability."
        },
        {
          id: 2,
          question: "What is revenue management?",
          options: [
            "Optimizing income through dynamic pricing and inventory control",
            "Ignoring market demand",
            "Only collecting payments",
            "Reducing prices always"
          ],
          correctAnswer: 0,
          explanation: "Revenue management strategically maximizes income potential."
        },
        {
          id: 3,
          question: "What is dynamic pricing based on?",
          options: [
            "Demand forecasting and market conditions",
            "Competitor prices only",
            "Historical patterns without adjustment",
            "Fixed schedules only"
          ],
          correctAnswer: 0,
          explanation: "Dynamic pricing adjusts to current market demand and conditions."
        },
        {
          id: 4,
          question: "What does yield management optimize?",
          options: [
            "Staff working hours",
            "Marketing expenses",
            "Revenue per available unit (room, seat, ticket)",
            "Only total visitor numbers"
          ],
          correctAnswer: 2,
          explanation: "Yield management maximizes revenue from limited capacity."
        },
        {
          id: 5,
          question: "What are fixed costs?",
          options: [
            "Costs that vary daily",
            "Unexpected emergency costs",
            "Only marketing expenses",
            "Expenses that don't change with visitor numbers"
          ],
          correctAnswer: 3,
          explanation: "Fixed costs remain constant regardless of business volume."
        },
        {
          id: 6,
          question: "What is capital budgeting?",
          options: [
            "Monthly revenue counting",
            "Planning long-term investments in infrastructure",
            "Staff salary management",
            "Only daily expense tracking"
          ],
          correctAnswer: 1,
          explanation: "Capital budgeting evaluates major long-term investment decisions."
        },
        {
          id: 7,
          question: "What does ROI calculation measure?",
          options: [
            "Visitor satisfaction",
            "Only total spending",
            "Employee happiness",
            "Return on investment for projects and initiatives"
          ],
          correctAnswer: 3,
          explanation: "ROI compares investment gains against investment costs."
        },
        {
          id: 8,
          question: "What is occupancy rate?",
          options: [
            "Marketing budget size",
            "Total revenue amount",
            "Percentage of available capacity being used",
            "Staff-to-guest ratio"
          ],
          correctAnswer: 2,
          explanation: "Occupancy indicates utilization of available tourism capacity."
        },
        {
          id: 9,
          question: "What does ADR measure?",
          options: [
            "Total annual revenue",
            "Employee turnover rate",
            "Average daily rate per occupied unit",
            "Marketing cost per click"
          ],
          correctAnswer: 2,
          explanation: "ADR indicates pricing performance and market positioning."
        },
        {
          id: 10,
          question: "What is operational budgeting?",
          options: [
            "Competitor analysis",
            "Market research",
            "Only long-term building plans",
            "Revenue and expense planning for daily operations"
          ],
          correctAnswer: 3,
          explanation: "Operational budgets guide day-to-day financial management."
        },
        {
          id: 11,
          question: "What are variable costs?",
          options: [
            "Fixed monthly rents",
            "Insurance premiums",
            "Long-term loan payments",
            "Expenses that change with business volume"
          ],
          correctAnswer: 3,
          explanation: "Variable costs increase or decrease with tourism activity levels."
        },
        {
          id: 12,
          question: "What is cash flow management?",
          options: [
            "Debt accumulation",
            "Asset valuation",
            "Only profit calculation",
            "Ensuring sufficient funds for daily operations"
          ],
          correctAnswer: 3,
          explanation: "Cash flow management prevents liquidity problems in operations."
        },
        {
          id: 13,
          question: "What does break-even analysis determine?",
          options: [
            "Point where revenues equal costs",
            "Optimal pricing only",
            "Marketing effectiveness",
            "Maximum profit potential"
          ],
          correctAnswer: 0,
          explanation: "Break-even analysis identifies minimum performance needed for viability."
        },
        {
          id: 14,
          question: "Why diversify revenue streams?",
          options: [
            "Ignore ancillary services",
            "Reduce dependence on single income sources",
            "Standardize all pricing",
            "Focus only on room revenue"
          ],
          correctAnswer: 1,
          explanation: "Diversification provides financial stability during market fluctuations."
        },
        {
          id: 15,
          question: "What are reserve funds for?",
          options: [
            "Marketing experiments",
            "Price reductions",
            "Only staff bonuses",
            "Maintenance and unexpected needs"
          ],
          correctAnswer: 3,
          explanation: "Reserve funds ensure financial resilience for unexpected events."
        },
        {
          id: 16,
          question: "What is budget variance analysis?",
          options: [
            "Setting prices randomly",
            "Ignoring expenses",
            "Only tracking revenues",
            "Comparing actual results with budgeted expectations"
          ],
          correctAnswer: 3,
          explanation: "Variance analysis identifies performance gaps for corrective action."
        },
        {
          id: 17,
          question: "What does economic impact monitoring track?",
          options: [
            "Only business profits",
            "Tourism's contribution to local economy",
            "Visitor numbers only",
            "Marketing costs"
          ],
          correctAnswer: 1,
          explanation: "Economic impact assessment justifies tourism investments to communities."
        },
        {
          id: 18,
          question: "What is channel management?",
          options: [
            "Optimizing distribution across booking platforms",
            "Standardizing all channels",
            "Only direct sales",
            "Ignoring online platforms"
          ],
          correctAnswer: 0,
          explanation: "Channel management balances reach, cost, and control across distributors."
        },
        {
          id: 19,
          question: "What is value for money balancing?",
          options: [
            "Quality experiences with financial viability",
            "Only lowest prices",
            "Maximum luxury regardless of cost",
            "Ignoring customer perceptions"
          ],
          correctAnswer: 0,
          explanation: "Value balancing ensures sustainable quality-price relationships."
        },
        {
          id: 20,
          question: "What does lifecycle cost consideration involve?",
          options: [
            "Total costs over asset's entire useful life",
            "Only initial purchase price",
            "Marketing expenses",
            "Operating costs only"
          ],
          correctAnswer: 0,
          explanation: "Lifecycle costing informs better long-term investment decisions."
        }
      ]
    },

    // MODULE 4: QUALITY ASSURANCE AND STANDARDS
    {
      id: 4,
      title: "Quality Management in Tourism",
      content: `# Excellence Through Quality Systems

## Quality Management Framework
Quality assurance ensures consistent delivery of excellent experiences while meeting or exceeding visitor expectations and industry standards.

## Quality Systems Implementation

**Quality Standards Development**
- Establishing clear service standards and protocols
- Creating measurable quality indicators
- Developing quality manuals and procedures
- Implementing certification programs (ISO, star ratings)

**Service Excellence Models**
- Customer journey mapping and touchpoint analysis
- Service blueprinting for consistent delivery
- Mystery guest programs and quality audits
- Continuous improvement cycles (Plan-Do-Check-Act)

**Staff Training and Empowerment**
- Quality-focused training programs
- Empowerment to resolve issues immediately
- Recognition and reward systems for quality achievements
- Quality circles and team-based improvement initiatives

**Visitor Feedback Systems**
- Multiple feedback collection channels (surveys, reviews, interviews)
- Real-time feedback mechanisms
- Systematic analysis of feedback data
- Closing the loop with follow-up actions

## Quality Measurement Tools

**Performance Metrics**
- Customer satisfaction scores (CSAT)
- Net promoter scores (NPS)
- Service quality gap analysis
- Complaint resolution rates and times

**Benchmarking Practices**
- Internal benchmarking across departments
- Competitive benchmarking against industry leaders
- Best practice research and adaptation
- Continuous performance comparison

## Quality Culture Development
Creating organizations where quality thrives:
- **Leadership Commitment**: Visible management support for quality
- **Employee Engagement**: Involving all staff in quality improvement
- **Quality as Strategy**: Integrating quality into business planning
- **Celebrating Success**: Recognizing and rewarding quality achievements

Quality management transforms good destinations into exceptional ones through systematic excellence.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does quality assurance ensure?",
          options: [
            "Standardized low-cost operations",
            "Only minimum legal compliance",
            "Consistent delivery of excellent experiences",
            "Maximum profits regardless of service"
          ],
          correctAnswer: 2,
          explanation: "Quality assurance systematically maintains high service standards."
        },
        {
          id: 2,
          question: "What are quality standards?",
          options: [
            "Competitor pricing information",
            "Only general ideas about service",
            "Marketing campaign details",
            "Clear service protocols and measurable indicators"
          ],
          correctAnswer: 3,
          explanation: "Standards provide specific, measurable targets for service delivery."
        },
        {
          id: 3,
          question: "What is customer journey mapping?",
          options: [
            "Analyzing all visitor touchpoints and experiences",
            "Departure processes only",
            "Only arrival procedures",
            "Transportation routes"
          ],
          correctAnswer: 0,
          explanation: "Journey mapping identifies all interaction points needing quality management."
        },
        {
          id: 4,
          question: "What are mystery guest programs?",
          options: [
            "Secret evaluations of service quality",
            "Financial audits",
            "Public marketing events",
            "Only staff training sessions"
          ],
          correctAnswer: 0,
          explanation: "Mystery guests provide unbiased assessment of actual service delivery."
        },
        {
          id: 5,
          question: "Why empower staff?",
          options: [
            "Reduce training requirements",
            "Enable immediate issue resolution and service recovery",
            "Standardize all responses",
            "Limit decision-making authority"
          ],
          correctAnswer: 1,
          explanation: "Empowerment allows quick response to visitor needs and issues."
        },
        {
          id: 6,
          question: "What is service blueprinting?",
          options: [
            "Designing consistent service delivery processes",
            "Marketing strategy development",
            "Only building floor plans",
            "Financial forecasting"
          ],
          correctAnswer: 0,
          explanation: "Blueprints ensure reliable, repeatable service experiences."
        },
        {
          id: 7,
          question: "What are multiple feedback channels?",
          options: [
            "Staff meetings only",
            "Competitor analysis",
            "Only complaint boxes",
            "Various ways to collect visitor opinions and suggestions"
          ],
          correctAnswer: 3,
          explanation: "Multiple channels capture diverse feedback from different visitor types."
        },
        {
          id: 8,
          question: "What does CSAT measure?",
          options: [
            "Staff productivity",
            "Only price perceptions",
            "Marketing effectiveness",
            "Customer satisfaction scores"
          ],
          correctAnswer: 3,
          explanation: "CSAT quantifies visitor satisfaction with specific experiences."
        },
        {
          id: 9,
          question: "What is the Net Promoter Score?",
          options: [
            "Length of stay",
            "Number of attractions visited",
            "Only average spending",
            "Likelihood visitors will recommend the destination"
          ],
          correctAnswer: 3,
          explanation: "NPS measures loyalty and advocacy potential."
        },
        {
          id: 10,
          question: "What is benchmarking?",
          options: [
            "Comparing performance against standards or competitors",
            "Only internal performance tracking",
            "Setting arbitrary targets",
            "Ignoring industry standards"
          ],
          correctAnswer: 0,
          explanation: "Benchmarking identifies performance gaps and improvement opportunities."
        },
        {
          id: 11,
          question: "What are quality circles?",
          options: [
            "Staff social events",
            "Team-based improvement initiatives",
            "Only management meetings",
            "Visitor focus groups"
          ],
          correctAnswer: 1,
          explanation: "Quality circles engage frontline staff in identifying improvements."
        },
        {
          id: 12,
          question: "What does closing the feedback loop mean?",
          options: [
            "Analyzing data without action",
            "Following up on feedback with actions and communication",
            "Ignoring visitor comments",
            "Only collecting feedback"
          ],
          correctAnswer: 1,
          explanation: "Closing the loop demonstrates responsiveness to visitor input."
        },
        {
          id: 13,
          question: "What is service quality gap analysis?",
          options: [
            "Tracking staff attendance",
            "Only measuring service speed",
            "Counting service interactions",
            "Identifying differences between expected and delivered service"
          ],
          correctAnswer: 3,
          explanation: "Gap analysis reveals specific areas needing quality improvement."
        },
        {
          id: 14,
          question: "Why involve all staff in quality improvement?",
          options: [
            "Limits improvement to managers only",
            "Reduces training needs",
            "Standardizes thinking",
            "Creates ownership and diverse improvement ideas"
          ],
          correctAnswer: 3,
          explanation: "Employee engagement generates practical, implementable improvement ideas."
        },
        {
          id: 15,
          question: "What are certification programs?",
          options: [
            "Visitor identification systems",
            "Formal recognition of quality standards achievement",
            "Staff training certificates",
            "Only marketing tools"
          ],
          correctAnswer: 1,
          explanation: "Certifications provide independent validation of quality standards."
        },
        {
          id: 16,
          question: "What is continuous improvement?",
          options: [
            "Only major overhauls",
            "Ongoing enhancement of processes and services",
            "Maintaining status quo",
            "Ignoring small improvements"
          ],
          correctAnswer: 1,
          explanation: "Continuous improvement creates gradual but significant quality enhancement."
        },
        {
          id: 17,
          question: "What does leadership commitment demonstrate?",
          options: [
            "Delegation without involvement",
            "Visible management support for quality initiatives",
            "Focus on profits only",
            "Only financial investment"
          ],
          correctAnswer: 1,
          explanation: "Leadership commitment drives organizational focus on quality."
        },
        {
          id: 18,
          question: "What are real-time feedback mechanisms?",
          options: [
            "Historical data analysis",
            "Competitor reviews",
            "Immediate collection of visitor reactions",
            "Only annual surveys"
          ],
          correctAnswer: 2,
          explanation: "Real-time feedback enables immediate service recovery and improvement."
        },
        {
          id: 19,
          question: "Why celebrate quality successes?",
          options: [
            "Reinforces quality culture and motivates staff",
            "Creates competition only",
            "Only recognizes managers",
            "Increases costs unnecessarily"
          ],
          correctAnswer: 0,
          explanation: "Celebration reinforces the importance of quality achievements."
        },
        {
          id: 20,
          question: "What does integrating quality into strategy mean?",
          options: [
            "Making quality central to business planning and decisions",
            "Focusing quality only on operations",
            "Treating quality as separate department",
            "Limiting quality to customer service"
          ],
          correctAnswer: 0,
          explanation: "Strategic integration ensures quality drives all organizational decisions."
        }
      ]
    },

    // MODULE 5: CRISIS AND RISK MANAGEMENT
    {
      id: 5,
      title: "Tourism Crisis Management",
      content: `# Managing Challenges and Ensuring Resilience

## Comprehensive Risk Management
Proactive identification and management of risks ensures tourism destinations can withstand challenges and recover quickly from disruptions.

## Risk Identification and Assessment

**Risk Categories**
- Natural disasters (earthquakes, hurricanes, floods)
- Health emergencies (pandemics, food safety issues)
- Security threats (terrorism, crime, political instability)
- Economic risks (recessions, currency fluctuations)
- Reputational risks (negative publicity, social media crises)

**Risk Assessment Process**
- Risk identification through systematic scanning
- Probability and impact analysis
- Vulnerability assessment of tourism systems
- Prioritization of risks for management attention

## Crisis Management Framework

**Preparedness Planning**
- Crisis management team establishment
- Communication protocols and contact lists
- Resource inventories and access arrangements
- Training and simulation exercises

**Emergency Response Systems**
- Alert and notification procedures
- Evacuation plans and safe locations
- Emergency services coordination
- Visitor assistance and support systems

**Business Continuity Planning**
- Critical function identification
- Alternative operation arrangements
- Supply chain resilience strategies
- Financial contingency planning

## Communication Management

**Stakeholder Communication**
- Transparent, timely information sharing
- Consistent messaging across all channels
- Media relations and press conference management
- Social media monitoring and response

**Recovery and Restoration**
- Phased recovery planning
- Marketing for recovery and confidence rebuilding
- Learning from incidents for system improvement
- Psychological support for affected stakeholders

## Resilience Building
Creating destinations that can adapt and thrive:
- **Diversification**: Multiple markets, products, and seasons
- **Flexibility**: Adaptive capacity in operations and planning
- **Collaboration**: Strong partnerships for mutual support
- **Learning Culture**: Continuous improvement from experiences

Effective crisis management protects destinations, visitors, and communities while maintaining tourism sustainability.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does comprehensive risk management ensure?",
          options: [
            "Only maximum profits during crises",
            "Destinations withstand challenges and recover quickly",
            "Ignoring potential problems",
            "Standard operations without adaptation"
          ],
          correctAnswer: 1,
          explanation: "Risk management builds resilience against various potential disruptions."
        },
        {
          id: 2,
          question: "What are natural disaster risks?",
          options: [
            "Staff turnover",
            "Only economic changes",
            "Earthquakes, hurricanes, floods affecting tourism",
            "Marketing campaign failures"
          ],
          correctAnswer: 2,
          explanation: "Natural disasters can severely disrupt tourism operations and infrastructure."
        },
        {
          id: 3,
          question: "What is risk assessment?",
          options: [
            "Only identifying problems after they occur",
            "Ignoring unlikely events",
            "Focusing only on financial risks",
            "Analyzing probability and impact of potential threats"
          ],
          correctAnswer: 3,
          explanation: "Assessment prioritizes risks based on likelihood and potential damage."
        },
        {
          id: 4,
          question: "What are health emergency risks?",
          options: [
            "Seasonal fluctuations",
            "Visitor preferences",
            "Only staff illnesses",
            "Pandemics and food safety issues impacting tourism"
          ],
          correctAnswer: 3,
          explanation: "Health emergencies can drastically affect travel willingness and regulations."
        },
        {
          id: 5,
          question: "What is a crisis management team?",
          options: [
            "External consultants only",
            "Marketing department only",
            "Designated group responsible for emergency response",
            "Only government officials"
          ],
          correctAnswer: 2,
          explanation: "Designated teams ensure coordinated, effective crisis response."
        },
        {
          id: 6,
          question: "What are security threats?",
          options: [
            "Economic trends",
            "Only weather conditions",
            "Terrorism, crime, political instability risks",
            "Competitor activities"
          ],
          correctAnswer: 2,
          explanation: "Security concerns significantly affect destination choice and safety perceptions."
        },
        {
          id: 7,
          question: "What are communication protocols?",
          options: [
            "Only social media posts",
            "Pre-established methods for information sharing during crises",
            "Annual reports",
            "Informal conversations"
          ],
          correctAnswer: 1,
          explanation: "Protocols ensure timely, accurate communication during emergencies."
        },
        {
          id: 8,
          question: "What is business continuity planning?",
          options: [
            "Only closing during emergencies",
            "Ignoring operational impacts",
            "Maintaining critical operations during disruptions",
            "Focusing only on evacuation"
          ],
          correctAnswer: 2,
          explanation: "Continuity planning ensures essential functions continue during crises."
        },
        {
          id: 9,
          question: "What are reputational risks?",
          options: [
            "Booking system failures",
            "Negative publicity and social media crises",
            "Only financial losses",
            "Staff shortages"
          ],
          correctAnswer: 1,
          explanation: "Reputation damage can have long-lasting impacts on destination appeal."
        },
        {
          id: 10,
          question: "Why conduct simulation exercises?",
          options: [
            "Marketing demonstrations",
            "Only theoretical planning",
            "Practice and improve crisis response capabilities",
            "Entertainment for staff"
          ],
          correctAnswer: 2,
          explanation: "Simulations identify gaps and improve preparedness through practice."
        },
        {
          id: 11,
          question: "What is vulnerability assessment?",
          options: [
            "Measuring profits",
            "Analyzing competitor strengths",
            "Only counting tourist numbers",
            "Evaluating weaknesses in tourism systems"
          ],
          correctAnswer: 3,
          explanation: "Vulnerability analysis identifies areas needing strengthening."
        },
        {
          id: 12,
          question: "What are evacuation plans?",
          options: [
            "Only arrival procedures",
            "Check-in processes",
            "Procedures for safe visitor relocation during emergencies",
            "Tour itineraries"
          ],
          correctAnswer: 2,
          explanation: "Evacuation plans ensure visitor safety during critical situations."
        },
        {
          id: 13,
          question: "What does transparent communication mean?",
          options: [
            "Delaying bad news",
            "Withholding difficult information",
            "Open, honest information sharing with stakeholders",
            "Only positive news"
          ],
          correctAnswer: 2,
          explanation: "Transparency builds trust and credibility during crises."
        },
        {
          id: 14,
          question: "What is phased recovery planning?",
          options: [
            "Immediate full reopening",
            "Ignoring recovery needs",
            "Permanent closure",
            "Staged approach to restoring normal operations"
          ],
          correctAnswer: 3,
          explanation: "Phased recovery ensures safe, sustainable return to normal operations."
        },
        {
          id: 15,
          question: "Why diversify markets and products?",
          options: [
            "Reduce dependence on single revenue sources",
            "Standardize all offerings",
            "Ignore emerging markets",
            "Focus only on most profitable segments"
          ],
          correctAnswer: 0,
          explanation: "Diversification provides stability when specific segments are affected."
        },
        {
          id: 16,
          question: "What is supply chain resilience?",
          options: [
            "Ensuring continued access to essential goods and services",
            "Ignoring supplier risks",
            "Single supplier dependence",
            "Only local purchasing"
          ],
          correctAnswer: 0,
          explanation: "Resilient supply chains prevent operational disruptions."
        },
        {
          id: 17,
          question: "What does learning from incidents involve?",
          options: [
            "Improving systems based on crisis experiences",
            "Only documenting events",
            "Blaming individuals",
            "Forgetting past problems"
          ],
          correctAnswer: 0,
          explanation: "Learning transforms crisis experiences into improved preparedness."
        },
        {
          id: 18,
          question: "Why monitor social media during crises?",
          options: [
            "Only promote positive content",
            "Address misinformation and manage reputation",
            "Limit public communication",
            "Ignore public sentiment"
          ],
          correctAnswer: 1,
          explanation: "Social media monitoring enables timely response to public concerns."
        },
        {
          id: 19,
          question: "What is adaptive capacity?",
          options: [
            "Ability to adjust operations during changing conditions",
            "Standardized responses only",
            "Rigid adherence to plans",
            "Resistance to change"
          ],
          correctAnswer: 0,
          explanation: "Adaptability enables effective response to unexpected situations."
        },
        {
          id: 20,
          question: "What does collaboration during crises provide?",
          options: [
            "Mutual support and shared resources",
            "Competitive advantage",
            "Isolated response efforts",
            "Information withholding"
          ],
          correctAnswer: 0,
          explanation: "Collaboration enhances overall destination resilience and recovery."
        }
      ]
    },

    // MODULE 6: SUSTAINABLE LEADERSHIP
    {
      id: 6,
      title: "Sustainable Tourism Leadership",
      content: `# Leading for Long-Term Success

## Leadership for Sustainable Tourism
Effective leadership balances economic, environmental, and social considerations to create tourism that benefits current and future generations.

## Sustainable Leadership Principles

**Triple Bottom Line Approach**
- **Economic Responsibility**: Profitable operations supporting communities
- **Environmental Stewardship**: Protecting natural resources and ecosystems
- **Social Equity**: Fair benefits distribution and community well-being
- **Integrated Decision-Making**: Considering all three dimensions together

**Stakeholder-Centric Leadership**
- Inclusive decision-making processes
- Transparent communication and accountability
- Building trust through consistent actions
- Managing diverse stakeholder expectations

**Innovation and Adaptation**
- Embracing sustainable technologies and practices
- Encouraging creative solutions to challenges
- Adapting to changing environmental conditions
- Leading industry transformation toward sustainability

## Implementation Strategies

**Policy Development**
- Creating sustainability policies and codes of conduct
- Establishing environmental management systems
- Developing social responsibility programs
- Implementing sustainable procurement practices

**Partnership Building**
- Collaborating with communities, NGOs, and government
- Creating tourism value chains that share benefits
- Building industry coalitions for sustainable practices
- Engaging visitors in sustainability efforts

**Measurement and Reporting**
- Sustainability performance indicators
- Regular sustainability reporting and disclosure
- Third-party verification and certification
- Continuous improvement based on performance data

## Leadership Competencies

**Strategic Vision**
- Long-term thinking beyond immediate profits
- Creating compelling sustainability visions
- Aligning organizational culture with sustainability values
- Inspiring others to embrace sustainable practices

**Change Management**
- Overcoming resistance to sustainable practices
- Creating momentum for sustainability initiatives
- Managing transition to more sustainable operations
- Celebrating sustainability achievements

**Ethical Decision-Making**
- Balancing competing interests fairly
- Considering impacts on future generations
- Upholding integrity in all operations
- Leading by example in sustainable practices

Sustainable leadership creates destinations that thrive economically while protecting what makes them special for future visitors.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does sustainable leadership balance?",
          options: [
            "Only profits and growth",
            "Economic, environmental, and social considerations",
            "Staff needs and visitor demands",
            "Marketing and operations"
          ],
          correctAnswer: 1,
          explanation: "Sustainable leadership considers all three pillars of sustainability."
        },
        {
          id: 2,
          question: "What is the triple bottom line?",
          options: [
            "Economic, environmental, and social responsibility",
            "Only financial profits",
            "Marketing reach and effectiveness",
            "Visitor numbers and spending"
          ],
          correctAnswer: 0,
          explanation: "Triple bottom line expands success measures beyond financial performance."
        },
        {
          id: 3,
          question: "What is economic responsibility?",
          options: [
            "Cost reduction at any expense",
            "Ignoring community economic impacts",
            "Profitable operations supporting communities",
            "Only maximum shareholder returns"
          ],
          correctAnswer: 2,
          explanation: "Economic responsibility includes creating community economic benefits."
        },
        {
          id: 4,
          question: "What is environmental stewardship?",
          options: [
            "Ignoring environmental impacts",
            "Protecting natural resources and ecosystems",
            "Focusing only on built environments",
            "Only using natural resources"
          ],
          correctAnswer: 1,
          explanation: "Stewardship involves responsible management of natural assets."
        },
        {
          id: 5,
          question: "What is social equity?",
          options: [
            "Only tourist satisfaction",
            "Staff compensation only",
            "Government tax revenue",
            "Fair benefits distribution and community well-being"
          ],
          correctAnswer: 3,
          explanation: "Social equity ensures tourism benefits are shared fairly."
        },
        {
          id: 6,
          question: "What is inclusive decision-making?",
          options: [
            "Ignoring community input",
            "Only management decisions",
            "Involving diverse stakeholders in decisions",
            "Government control only"
          ],
          correctAnswer: 2,
          explanation: "Inclusion ensures decisions consider multiple perspectives."
        },
        {
          id: 7,
          question: "What does transparent communication build?",
          options: [
            "Trust through open information sharing",
            "Bureaucratic processes",
            "Only confusion",
            "Competitive advantage"
          ],
          correctAnswer: 0,
          explanation: "Transparency creates credibility and stakeholder confidence."
        },
        {
          id: 8,
          question: "Why embrace sustainable technologies?",
          options: [
            "Increase complexity",
            "Only reduce costs",
            "Follow trends blindly",
            "Reduce environmental impacts and improve efficiency"
          ],
          correctAnswer: 3,
          explanation: "Sustainable technologies often offer environmental and economic benefits."
        },
        {
          id: 9,
          question: "What are sustainability policies?",
          options: [
            "Formal commitments to sustainable practices",
            "Only marketing statements",
            "Informal suggestions",
            "Competitor analysis documents"
          ],
          correctAnswer: 0,
          explanation: "Policies provide formal frameworks for sustainable operations."
        },
        {
          id: 10,
          question: "Why build partnerships for sustainability?",
          options: [
            "Limit information sharing",
            "Collaborate for greater impact and shared learning",
            "Compete on sustainability",
            "Work in isolation"
          ],
          correctAnswer: 1,
          explanation: "Partnerships leverage collective resources and knowledge."
        },
        {
          id: 11,
          question: "What is integrated decision-making?",
          options: [
            "Ignoring social impacts",
            "Only economic considerations",
            "Separate environmental decisions",
            "Considering all sustainability dimensions together"
          ],
          correctAnswer: 3,
          explanation: "Integration ensures balanced consideration of all sustainability aspects."
        },
        {
          id: 12,
          question: "What are sustainability performance indicators?",
          options: [
            "Visitor numbers only",
            "Only financial metrics",
            "Metrics tracking environmental and social performance",
            "Marketing statistics"
          ],
          correctAnswer: 2,
          explanation: "Sustainability indicators measure progress beyond financial performance."
        },
        {
          id: 13,
          question: "What is long-term thinking?",
          options: [
            "Only quarterly results",
            "Considering impacts beyond immediate timeframes",
            "Current visitor satisfaction",
            "Short-term profits only"
          ],
          correctAnswer: 1,
          explanation: "Long-term perspective ensures sustainable tourism for future generations."
        },
        {
          id: 14,
          question: "What does change management involve?",
          options: [
            "Ignoring organizational culture",
            "Overcoming resistance and creating momentum for change",
            "Maintaining status quo",
            "Implementing changes without preparation"
          ],
          correctAnswer: 1,
          explanation: "Change management ensures successful adoption of sustainable practices."
        },
        {
          id: 15,
          question: "What are sustainable procurement practices?",
          options: [
            "Ignoring supplier practices",
            "Purchasing decisions considering environmental and social impacts",
            "Only lowest price purchasing",
            "Local purchasing only"
          ],
          correctAnswer: 1,
          explanation: "Sustainable procurement extends sustainability through supply chains."
        },
        {
          id: 16,
          question: "Why engage visitors in sustainability?",
          options: [
            "Limit their experiences",
            "Ignore their impacts",
            "Encourage responsible behavior and spread awareness",
            "Only collect their money"
          ],
          correctAnswer: 2,
          explanation: "Visitor engagement creates sustainability ambassadors."
        },
        {
          id: 17,
          question: "What is ethical decision-making?",
          options: [
            "Considering impacts on all stakeholders fairly",
            "Short-term convenience",
            "Profit maximization",
            "Only legal compliance"
          ],
          correctAnswer: 0,
          explanation: "Ethical decisions consider broader impacts and future consequences."
        },
        {
          id: 18,
          question: "What does leading by example mean?",
          options: [
            "Only giving instructions",
            "Hiring sustainability managers",
            "Demonstrating sustainable practices through personal actions",
            "Delegating sustainability tasks"
          ],
          correctAnswer: 2,
          explanation: "Leadership example inspires others to adopt sustainable practices."
        },
        {
          id: 19,
          question: "What is third-party verification?",
          options: [
            "Marketing claims only",
            "Independent confirmation of sustainability claims",
            "Only internal reporting",
            "Competitor comparisons"
          ],
          correctAnswer: 1,
          explanation: "Third-party verification adds credibility to sustainability reporting."
        },
        {
          id: 20,
          question: "Why celebrate sustainability achievements?",
          options: [
            "Ignore progress",
            "Only focus on problems",
            "Reinforce positive behaviors and build momentum",
            "Create competition only"
          ],
          correctAnswer: 2,
          explanation: "Celebration motivates continued sustainability efforts."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Mixed from all modules)
  finalExam: {
    id: "travel-tourism-diploma-exam",
    title: "Travel & Tourism Management Diploma Final Examination",
    description: "Comprehensive exam covering all 6 advanced modules. You need to answer 40 questions to complete your diploma.",
    passingScore: 75,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        moduleId: 1,
        question: "What does strategic planning provide for tourism success?",
        options: [
          "Basic operational checklists",
          "Simple marketing ideas",
          "Only financial projections",
          "A roadmap with clear goals and actionable plans"
        ],
        correctAnswer: 3,
        explanation: "Strategic planning creates comprehensive roadmaps for tourism development."
      },
      {
        id: 2,
        moduleId: 1,
        question: "What does SWOT analysis examine?",
        options: [
          "Only financial performance",
          "Weather patterns and seasons",
          "Tourist numbers only",
          "Internal strengths/weaknesses and external opportunities/threats"
        ],
        correctAnswer: 3,
        explanation: "SWOT analyzes both internal capabilities and external market conditions."
      },
      {
        id: 3,
        moduleId: 1,
        question: "What are strengths in tourism SWOT analysis?",
        options: [
          "Internal advantages like unique attractions",
          "External market conditions",
          "Competitor activities",
          "Government regulations"
        ],
        correctAnswer: 0,
        explanation: "Strengths are internal positive factors within the destination's control."
      },
      {
        id: 4,
        moduleId: 1,
        question: "What is an action plan?",
        options: [
          "General ideas without details",
          "Only financial documents",
          "Specific steps with timelines and responsibilities",
          "Marketing brochures"
        ],
        correctAnswer: 2,
        explanation: "Action plans translate strategy into executable tasks."
      },
      {
        id: 5,
        moduleId: 1,
        question: "What are threats in tourism planning?",
        options: [
          "Visitor satisfaction",
          "External risks including competition and economic changes",
          "Internal staff meetings",
          "Marketing campaigns"
        ],
        correctAnswer: 1,
        explanation: "Threats are external challenges that could negatively impact tourism."
      },
      {
        id: 6,
        moduleId: 1,
        question: "Why measure performance indicators?",
        options: [
          "Avoid strategic adjustments",
          "Track progress and success of strategic initiatives",
          "Only count tourist numbers",
          "Compare with unrelated industries"
        ],
        correctAnswer: 1,
        explanation: "Performance measurement enables evidence-based management decisions."
      },

      // Questions from Module 2
      {
        id: 7,
        moduleId: 2,
        question: "What is product development in tourism?",
        options: [
          "Just counting visitors",
          "Only building physical structures",
          "Managing staff schedules",
          "Creating compelling experiences and packages"
        ],
        correctAnswer: 3,
        explanation: "Tourism products are experiences that attract and satisfy visitors."
      },
      {
        id: 8,
        moduleId: 2,
        question: "What does value-based pricing reflect?",
        options: [
          "Government regulations",
          "Competitor prices only",
          "Experience quality and perceived value",
          "Only production costs"
        ],
        correctAnswer: 2,
        explanation: "Value pricing aligns prices with customer perceptions of worth."
      },
      {
        id: 9,
        moduleId: 2,
        question: "What is brand identity?",
        options: [
          "Advertising budgets",
          "Staff uniforms",
          "Core values, personality, and visual elements",
          "Only logo design"
        ],
        correctAnswer: 2,
        explanation: "Brand identity defines how a destination presents itself."
      },
      {
        id: 10,
        moduleId: 2,
        question: "What is visitor profiling?",
        options: [
          "Counting arrivals only",
          "Monitoring hotel occupancy",
          "Understanding target market demographics and preferences",
          "Checking identification documents"
        ],
        correctAnswer: 2,
        explanation: "Profiling helps create targeted marketing messages and experiences."
      },
      {
        id: 11,
        moduleId: 2,
        question: "Why analyze competitors?",
        options: [
          "Copy them exactly",
          "Understand their strategies and identify opportunities",
          "Focus only on internal operations",
          "Ignore market differences"
        ],
        correctAnswer: 1,
        explanation: "Competitive analysis informs strategic differentiation."
      },
      {
        id: 12,
        moduleId: 2,
        question: "What is market segmentation?",
        options: [
          "Dividing markets into manageable groups with similar characteristics",
          "Treating all tourists identically",
          "Only focusing on large groups",
          "Ignoring demographic differences"
        ],
        correctAnswer: 0,
        explanation: "Segmentation allows tailored marketing approaches."
      },

      // Questions from Module 3
      {
        id: 13,
        moduleId: 3,
        question: "What is revenue management?",
        options: [
          "Only collecting payments",
          "Ignoring market demand",
          "Reducing prices always",
          "Optimizing income through dynamic pricing and inventory control"
        ],
        correctAnswer: 3,
        explanation: "Revenue management strategically maximizes income potential."
      },
      {
        id: 14,
        moduleId: 3,
        question: "What is dynamic pricing based on?",
        options: [
          "Historical patterns without adjustment",
          "Demand forecasting and market conditions",
          "Competitor prices only",
          "Fixed schedules only"
        ],
        correctAnswer: 1,
        explanation: "Dynamic pricing adjusts to current market demand."
      },
      {
        id: 15,
        moduleId: 3,
        question: "What is capital budgeting?",
        options: [
          "Planning long-term investments in infrastructure",
          "Staff salary management",
          "Monthly revenue counting",
          "Only daily expense tracking"
        ],
        correctAnswer: 0,
        explanation: "Capital budgeting evaluates major long-term investment decisions."
      },
      {
        id: 16,
        moduleId: 3,
        question: "What does ROI calculation measure?",
        options: [
          "Only total spending",
          "Return on investment for projects and initiatives",
          "Visitor satisfaction",
          "Employee happiness"
        ],
        correctAnswer: 1,
        explanation: "ROI compares investment gains against investment costs."
      },
      {
        id: 17,
        moduleId: 3,
        question: "What does break-even analysis determine?",
        options: [
          "Maximum profit potential",
          "Point where revenues equal costs",
          "Marketing effectiveness",
          "Optimal pricing only"
        ],
        correctAnswer: 1,
        explanation: "Break-even analysis identifies minimum performance needed for viability."
      },
      {
        id: 18,
        moduleId: 3,
        question: "Why diversify revenue streams?",
        options: [
          "Standardize all pricing",
          "Reduce dependence on single income sources",
          "Ignore ancillary services",
          "Focus only on room revenue"
        ],
        correctAnswer: 1,
        explanation: "Diversification provides financial stability during market fluctuations."
      },

      // Questions from Module 4
      {
        id: 19,
        moduleId: 4,
        question: "What does quality assurance ensure?",
        options: [
          "Standardized low-cost operations",
          "Only minimum legal compliance",
          "Maximum profits regardless of service",
          "Consistent delivery of excellent experiences"
        ],
        correctAnswer: 3,
        explanation: "Quality assurance systematically maintains high service standards."
      },
      {
        id: 20,
        moduleId: 4,
        question: "What is customer journey mapping?",
        options: [
          "Only arrival procedures",
          "Analyzing all visitor touchpoints and experiences",
          "Transportation routes",
          "Departure processes only"
        ],
        correctAnswer: 1,
        explanation: "Journey mapping identifies all interaction points needing quality management."
      },
      {
        id: 21,
        moduleId: 4,
        question: "Why empower staff?",
        options: [
          "Enable immediate issue resolution and service recovery",
          "Reduce training requirements",
          "Standardize all responses",
          "Limit decision-making authority"
        ],
        correctAnswer: 0,
        explanation: "Empowerment allows quick response to visitor needs and issues."
      },
      {
        id: 22,
        moduleId: 4,
        question: "What does CSAT measure?",
        options: [
          "Staff productivity",
          "Marketing effectiveness",
          "Customer satisfaction scores",
          "Only price perceptions"
        ],
        correctAnswer: 2,
        explanation: "CSAT quantifies visitor satisfaction with specific experiences."
      },
      {
        id: 23,
        moduleId: 4,
        question: "What is benchmarking?",
        options: [
          "Ignoring industry standards",
          "Only internal performance tracking",
          "Setting arbitrary targets",
          "Comparing performance against standards or competitors"
        ],
        correctAnswer: 3,
        explanation: "Benchmarking identifies performance gaps and improvement opportunities."
      },
      {
        id: 24,
        moduleId: 4,
        question: "What does closing the feedback loop mean?",
        options: [
          "Following up on feedback with actions and communication",
          "Only collecting feedback",
          "Analyzing data without action",
          "Ignoring visitor comments"
        ],
        correctAnswer: 0,
        explanation: "Closing the loop demonstrates responsiveness to visitor input."
      },

      // Questions from Module 5
      {
        id: 25,
        moduleId: 5,
        question: "What are natural disaster risks?",
        options: [
          "Staff turnover",
          "Marketing campaign failures",
          "Only economic changes",
          "Earthquakes, hurricanes, floods affecting tourism"
        ],
        correctAnswer: 3,
        explanation: "Natural disasters can severely disrupt tourism operations."
      },
      {
        id: 26,
        moduleId: 5,
        question: "What is risk assessment?",
        options: [
          "Analyzing probability and impact of potential threats",
          "Focusing only on financial risks",
          "Ignoring unlikely events",
          "Only identifying problems after they occur"
        ],
        correctAnswer: 0,
        explanation: "Assessment prioritizes risks based on likelihood and potential damage."
      },
      {
        id: 27,
        moduleId: 5,
        question: "What is business continuity planning?",
        options: [
          "Ignoring operational impacts",
          "Focusing only on evacuation",
          "Maintaining critical operations during disruptions",
          "Only closing during emergencies"
        ],
        correctAnswer: 2,
        explanation: "Continuity planning ensures essential functions continue during crises."
      },
      {
        id: 28,
        moduleId: 5,
        question: "Why conduct simulation exercises?",
        options: [
          "Practice and improve crisis response capabilities",
          "Entertainment for staff",
          "Only theoretical planning",
          "Marketing demonstrations"
        ],
        correctAnswer: 0,
        explanation: "Simulations identify gaps and improve preparedness through practice."
      },
      {
        id: 29,
        moduleId: 5,
        question: "What does transparent communication mean?",
        options: [
          "Delaying bad news",
          "Withholding difficult information",
          "Only positive news",
          "Open, honest information sharing with stakeholders"
        ],
        correctAnswer: 3,
        explanation: "Transparency builds trust and credibility during crises."
      },
      {
        id: 30,
        moduleId: 5,
        question: "Why diversify markets and products?",
        options: [
          "Ignore emerging markets",
          "Focus only on most profitable segments",
          "Reduce dependence on single revenue sources",
          "Standardize all offerings"
        ],
        correctAnswer: 2,
        explanation: "Diversification provides stability when specific segments are affected."
      },

      // Questions from Module 6
      {
        id: 31,
        moduleId: 6,
        question: "What is the triple bottom line?",
        options: [
          "Economic, environmental, and social responsibility",
          "Visitor numbers and spending",
          "Marketing reach and effectiveness",
          "Only financial profits"
        ],
        correctAnswer: 0,
        explanation: "Triple bottom line expands success measures beyond financial performance."
      },
      {
        id: 32,
        moduleId: 6,
        question: "What is environmental stewardship?",
        options: [
          "Focusing only on built environments",
          "Protecting natural resources and ecosystems",
          "Only using natural resources",
          "Ignoring environmental impacts"
        ],
        correctAnswer: 1,
        explanation: "Stewardship involves responsible management of natural assets."
      },
      {
        id: 33,
        moduleId: 6,
        question: "What is social equity?",
        options: [
          "Only tourist satisfaction",
          "Staff compensation only",
          "Government tax revenue",
          "Fair benefits distribution and community well-being"
        ],
        correctAnswer: 3,
        explanation: "Social equity ensures tourism benefits are shared fairly."
      },
      {
        id: 34,
        moduleId: 6,
        question: "What is inclusive decision-making?",
        options: [
          "Involving diverse stakeholders in decisions",
          "Government control only",
          "Ignoring community input",
          "Only management decisions"
        ],
        correctAnswer: 0,
        explanation: "Inclusion ensures decisions consider multiple perspectives."
      },
      {
        id: 35,
        moduleId: 6,
        question: "Why embrace sustainable technologies?",
        options: [
          "Reduce environmental impacts and improve efficiency",
          "Increase complexity",
          "Follow trends blindly",
          "Only reduce costs"
        ],
        correctAnswer: 0,
        explanation: "Sustainable technologies offer environmental and economic benefits."
      },
      {
        id: 36,
        moduleId: 6,
        question: "What are sustainability performance indicators?",
        options: [
          "Marketing statistics",
          "Only financial metrics",
          "Metrics tracking environmental and social performance",
          "Visitor numbers only"
        ],
        correctAnswer: 2,
        explanation: "Sustainability indicators measure progress beyond financial performance."
      },
      {
        id: 37,
        moduleId: 6,
        question: "What does change management involve?",
        options: [
          "Maintaining status quo",
          "Implementing changes without preparation",
          "Ignoring organizational culture",
          "Overcoming resistance and creating momentum for change"
        ],
        correctAnswer: 3,
        explanation: "Change management ensures successful adoption of sustainable practices."
      },
      {
        id: 38,
        moduleId: 6,
        question: "What is ethical decision-making?",
        options: [
          "Short-term convenience",
          "Profit maximization",
          "Only legal compliance",
          "Considering impacts on all stakeholders fairly"
        ],
        correctAnswer: 3,
        explanation: "Ethical decisions consider broader impacts and future consequences."
      },
      {
        id: 39,
        moduleId: 6,
        question: "What does leading by example mean?",
        options: [
          "Delegating sustainability tasks",
          "Only giving instructions",
          "Demonstrating sustainable practices through personal actions",
          "Hiring sustainability managers"
        ],
        correctAnswer: 2,
        explanation: "Leadership example inspires others to adopt sustainable practices."
      },
      {
        id: 40,
        moduleId: 6,
        question: "Why celebrate sustainability achievements?",
        options: [
          "Reinforce positive behaviors and build momentum",
          "Create competition only",
          "Only focus on problems",
          "Ignore progress"
        ],
        correctAnswer: 0,
        explanation: "Celebration motivates continued sustainability efforts."
      }
    ]
  },

  // 4. DIPLOMA COMPLETION CERTIFICATE DATA
  diploma: {
    title: "Travel & Tourism Management Diploma",
    issuingOrganization: "Edusanna Academy",
    description: "This diploma certifies advanced knowledge and management competencies in travel and tourism, including strategic planning, destination marketing, financial management, quality assurance, crisis management, and sustainable leadership.",
    competencies: [
      "Strategic tourism planning and development",
      "Destination marketing and brand management",
      "Financial management and revenue optimization",
      "Quality assurance systems and service excellence",
      "Crisis management and risk mitigation",
      "Sustainable tourism leadership and ethics"
    ],
    level: "Advanced Management",
    issueDate: new Date().toISOString().split('T')[0]
  }
};

export default travelTourismDiplomaCourse;
