// Construction Management (Diploma) - Complete Course Data
// File: construction-management-diploma.ts

export const constructionManagementDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "construction-management-diploma",
  title: "Construction Management (Diploma)",
  description: "Advanced professional training in construction project planning, execution, and control. This diploma program covers construction methodologies, cost management, safety regulations, and leadership skills for managing complex construction projects from inception to completion.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  upgradePrice: null, // Already a diploma
  icon: "🏗️",
  badge: "Diploma",
  prerequisites: "Certificate in Building Construction recommended",
  
  // 2. MODULE ARCHITECTURE - 10 Modules for Diploma
  modules: [
    // MODULE 1: Construction Industry Fundamentals
    {
      id: 1,
      title: "Construction Industry Fundamentals",
      completed: false,
      content: `
# Module 1: Construction Industry Fundamentals

## Introduction to Construction Management
Construction management is the professional service that uses specialized, project management techniques to oversee the planning, design, and construction of a project, from its beginning to its end. The primary purpose is to control a project's time, cost, and quality.

### Key Construction Sectors
The construction industry is divided into four main sectors:
1. **Residential Construction** - Houses, apartments, condominiums
2. **Commercial Construction** - Office buildings, retail centers, hotels
3. **Industrial Construction** - Factories, power plants, refineries
4. **Infrastructure Construction** - Roads, bridges, dams, utilities

### Construction Project Types
Construction projects vary by delivery method:
- **Design-Bid-Build** - Traditional sequential approach
- **Design-Build** - Single entity handles both design and construction
- **Construction Management at Risk** - Manager commits to delivering within guaranteed maximum price
- **Integrated Project Delivery** - Collaborative approach with shared risk/reward

### Industry Standards and Codes
Construction must comply with:
- **International Building Code (IBC)** - Model building code
- **OSHA Regulations** - Occupational Safety and Health Administration standards
- **Local Building Codes** - Municipal regulations
- **ADA Requirements** - Americans with Disabilities Act compliance

### Project Lifecycle Phases
Every construction project follows five main phases:
1. **Initiation** - Project definition and feasibility studies
2. **Planning** - Detailed design and documentation
3. **Execution** - Construction and implementation
4. **Monitoring & Control** - Quality, cost, and schedule oversight
5. **Closeout** - Project completion and handover

### Construction Management Roles
Key positions in construction management include:
- **Project Manager** - Overall project responsibility
- **Superintendent** - Field operations management
- **Project Engineer** - Technical and documentation support
- **Safety Manager** - Compliance and accident prevention
- **Quality Control Manager** - Standards enforcement

### Industry Challenges
Current challenges in construction management include:
- **Labor shortages** - Skilled worker deficit
- **Material cost volatility** - Price fluctuations
- **Regulatory complexity** - Increasing compliance requirements
- **Technology adoption** - Digital transformation barriers
- **Sustainability demands** - Green building requirements

### Future Trends
Emerging trends shaping construction:
- **Building Information Modeling (BIM)** - 3D modeling integration
- **Prefabrication** - Off-site manufacturing
- **Green Construction** - Sustainable building practices
- **Digital Twins** - Virtual replica of physical assets
- **Automation** - Robotics and AI implementation
`,
      quiz: [
        {
          id: 1,
          question: "What is the primary purpose of construction management?",
          options: [
            "To reduce material costs at any cost",
            "To control a project's time, cost, and quality",
            "To maximize architectural design elements",
            "To complete projects as quickly as possible"
          ],
          correctAnswer: 1,
          explanation: "Construction management focuses on controlling the three main constraints: time, cost, and quality, as stated in the introduction."
        },
        {
          id: 2,
          question: "Which construction sector includes factories and power plants?",
          options: [
            "Industrial Construction",
            "Residential Construction",
            "Commercial Construction",
            "Infrastructure Construction"
          ],
          correctAnswer: 0,
          explanation: "Industrial construction covers manufacturing facilities, power generation plants, and processing facilities."
        },
        {
          id: 3,
          question: "What is the traditional sequential project delivery method called?",
          options: [
            "Design-Bid-Build",
            "Design-Build",
            "Construction Management at Risk",
            "Integrated Project Delivery"
          ],
          correctAnswer: 0,
          explanation: "Design-Bid-Build is the traditional method where design is completed before construction bidding begins."
        },
        {
          id: 4,
          question: "Which phase comes after 'Planning' in the project lifecycle?",
          options: [
            "Monitoring & Control",
            "Closeout",
            "Initiation",
            "Execution"
          ],
          correctAnswer: 3,
          explanation: "The sequential order is: Initiation → Planning → Execution → Monitoring & Control → Closeout."
        },
        {
          id: 5,
          question: "Who has overall project responsibility on a construction site?",
          options: [
            "Project Manager",
            "Project Engineer",
            "Safety Manager",
            "Superintendent"
          ],
          correctAnswer: 0,
          explanation: "The Project Manager bears ultimate responsibility for the project's success."
        },
        {
          id: 6,
          question: "Which regulatory body sets workplace safety standards in construction?",
          options: [
            "EPA",
            "IBC",
            "OSHA",
            "ADA"
          ],
          correctAnswer: 2,
          explanation: "OSHA (Occupational Safety and Health Administration) establishes and enforces workplace safety standards."
        },
        {
          id: 7,
          question: "What does BIM stand for in construction technology?",
          options: [
            "Business Information Modeling",
            "Building Integration Method",
            "Basic Infrastructure Management",
            "Building Information Modeling"
          ],
          correctAnswer: 3,
          explanation: "BIM stands for Building Information Modeling, a 3D model-based process for construction planning."
        },
        {
          id: 8,
          question: "Which project delivery method involves a single entity handling both design and construction?",
          options: [
            "Construction Management at Risk",
            "Design-Build",
            "Traditional Delivery",
            "Design-Bid-Build"
          ],
          correctAnswer: 1,
          explanation: "Design-Build consolidates design and construction responsibilities under one contract."
        },
        {
          id: 9,
          question: "What is the current major challenge mentioned regarding construction workforce?",
          options: [
            "Overqualification",
            "Union disputes",
            "Labor shortages",
            "Excessive wages"
          ],
          correctAnswer: 2,
          explanation: "Labor shortages of skilled workers is a significant industry challenge mentioned."
        },
        {
          id: 10,
          question: "Which trend involves creating a virtual replica of physical assets?",
          options: [
            "Automation",
            "BIM",
            "Digital Twins",
            "Prefabrication"
          ],
          correctAnswer: 2,
          explanation: "Digital Twins are virtual representations of physical assets that update in real-time."
        },
        {
          id: 11,
          question: "How many main sectors is the construction industry divided into?",
          options: [
            "Four",
            "Three",
            "Six",
            "Five"
          ],
          correctAnswer: 0,
          explanation: "The four main sectors are: Residential, Commercial, Industrial, and Infrastructure."
        },
        {
          id: 12,
          question: "What does ADA stand for in construction compliance?",
          options: [
            "Advanced Development Assessment",
            "Architectural Design Agreement",
            "Americans with Disabilities Act",
            "American Design Association"
          ],
          correctAnswer: 2,
          explanation: "ADA refers to the Americans with Disabilities Act, requiring accessible design."
        },
        {
          id: 13,
          question: "Which role focuses on field operations management?",
          options: [
            "Superintendent",
            "Project Manager",
            "Project Engineer",
            "Quality Control Manager"
          ],
          correctAnswer: 0,
          explanation: "The Superintendent manages daily field operations and construction activities."
        },
        {
          id: 14,
          question: "What is the purpose of feasibility studies in the initiation phase?",
          options: [
            "To hire subcontractors",
            "To order materials",
            "To create detailed designs",
            "To determine project viability"
          ],
          correctAnswer: 3,
          explanation: "Feasibility studies assess whether a project is technically and financially viable."
        },
        {
          id: 15,
          question: "Which construction type would a shopping mall fall under?",
          options: [
            "Infrastructure Construction",
            "Commercial Construction",
            "Industrial Construction",
            "Residential Construction"
          ],
          correctAnswer: 1,
          explanation: "Shopping malls are commercial buildings used for retail business operations."
        },
        {
          id: 16,
          question: "What is a key benefit of prefabrication in construction?",
          options: [
            "Reduced on-site construction time",
            "Higher material costs",
            "Increased weather dependency",
            "Less design flexibility"
          ],
          correctAnswer: 0,
          explanation: "Prefabrication allows components to be built off-site, reducing on-site assembly time."
        },
        {
          id: 17,
          question: "Which code serves as a model building code in the US?",
          options: [
            "Uniform Plumbing Code",
            "Local Municipal Code",
            "International Building Code (IBC)",
            "National Electrical Code"
          ],
          correctAnswer: 2,
          explanation: "The IBC is a model code that provides minimum requirements for building systems."
        },
        {
          id: 18,
          question: "What is the main focus of green construction practices?",
          options: [
            "Traditional methods",
            "Low cost",
            "Speed",
            "Sustainability"
          ],
          correctAnswer: 3,
          explanation: "Green construction focuses on sustainable, environmentally-friendly building practices."
        },
        {
          id: 19,
          question: "In which phase are detailed designs created?",
          options: [
            "Closeout",
            "Initiation",
            "Planning",
            "Execution"
          ],
          correctAnswer: 2,
          explanation: "Detailed design development occurs during the Planning phase."
        },
        {
          id: 20,
          question: "Which emerging technology uses robotics and AI in construction?",
          options: [
            "Digital Twins",
            "BIM",
            "Prefabrication",
            "Automation"
          ],
          correctAnswer: 3,
          explanation: "Automation involves using robotics and artificial intelligence to perform construction tasks."
        }
      ]
    },

    // MODULE 2: Project Planning and Scheduling
    {
      id: 2,
      title: "Project Planning and Scheduling",
      completed: false,
      content: `
# Module 2: Project Planning and Scheduling

## Introduction to Construction Planning
Effective planning is the foundation of successful construction management. It involves defining project objectives, determining resources needed, and establishing timelines for project completion.

### Work Breakdown Structure (WBS)
A Work Breakdown Structure is a hierarchical decomposition of the total scope of work to be carried out by the project team. Key principles include:
- **100% Rule** - The WBS includes 100% of the work defined by the project scope
- **Mutual Exclusion** - No overlap in scope definition between elements
- **Outcome Orientation** - Focus on deliverables rather than actions
- **Appropriate Detail Level** - Breakdown to manageable work packages

### Critical Path Method (CPM)
The Critical Path Method is a project modeling technique that:
- **Identifies critical tasks** - Activities that directly impact project duration
- **Calculates float/slack** - Time activities can be delayed without affecting project completion
- **Determines earliest/latest start times** - For optimal scheduling
- **Highlights dependencies** - Relationships between activities

### Gantt Charts and Scheduling Tools
Gantt charts provide visual project schedules showing:
- **Task durations** - Horizontal bars representing time periods
- **Task dependencies** - Arrows showing relationships between tasks
- **Progress tracking** - Bar filling to show completion percentage
- **Milestone markers** - Key project events and deadlines

### Resource Allocation and Leveling
Effective resource management involves:
- **Resource identification** - Determining what resources are needed
- **Allocation planning** - Assigning resources to specific tasks
- **Leveling techniques** - Smoothing resource demand to avoid peaks and valleys
- **Optimization strategies** - Maximizing resource utilization efficiency

### Construction Scheduling Techniques
Common scheduling methods include:
1. **Bar Chart Scheduling** - Simple, visual task timelines
2. **Network Scheduling** - Shows task dependencies and critical paths
3. **Line of Balance** - For repetitive construction projects
4. **4D Scheduling** - Time-based 3D modeling (BIM integration)

### Time Management Strategies
Effective time management practices:
- **Buffer management** - Adding contingency time for uncertainties
- **Fast-tracking** - Performing activities in parallel that were originally sequential
- **Crashing** - Adding resources to reduce duration of critical activities
- **Phased construction** - Completing projects in stages or phases

### Schedule Compression Techniques
Methods to accelerate project completion:
- **Reviewing dependencies** - Identifying unnecessary sequential relationships
- **Increasing work shifts** - Implementing overtime or additional shifts
- **Improving productivity** - Through better methods or technology
- **Reducing scope** - Eliminating non-essential work elements

### Progress Monitoring and Control
Systems for tracking schedule performance:
- **Earned Value Management (EVM)** - Integrates scope, schedule, and cost
- **Percentage complete tracking** - Regular progress assessments
- **Schedule variance analysis** - Comparing planned vs. actual progress
- **Look-ahead scheduling** - Short-term detailed planning (2-4 weeks)

### Delay Analysis and Mitigation
Managing project delays involves:
- **Delay identification** - Recognizing schedule deviations early
- **Impact assessment** - Determining effects on overall project
- **Recovery planning** - Developing strategies to regain lost time
- **Claim management** - Documenting and addressing delay claims

### Schedule Risk Management
Identifying and managing scheduling risks:
- **Risk identification** - Potential events that could cause delays
- **Probability assessment** - Likelihood of risk occurrence
- **Impact analysis** - Potential effect on project schedule
- **Contingency planning** - Reserve time for identified risks
`,
      quiz: [
        {
          id: 1,
          question: "What does WBS stand for in project planning?",
          options: [
            "Work Building Schedule",
            "Work Balance Sheet",
            "Work Breakdown Structure",
            "Weekly Breakdown System"
          ],
          correctAnswer: 2,
          explanation: "WBS stands for Work Breakdown Structure, a hierarchical decomposition of project work."
        },
        {
          id: 2,
          question: "Which rule states that the WBS must include 100% of the project work?",
          options: [
            "Full Inclusion Rule",
            "Total Work Rule",
            "100% Rule",
            "Complete Scope Rule"
          ],
          correctAnswer: 2,
          explanation: "The 100% Rule ensures the WBS captures all work required by the project scope."
        },
        {
          id: 3,
          question: "What does CPM help identify in project scheduling?",
          options: [
            "Critical tasks that impact project duration",
            "Safety violations",
            "Quality issues",
            "Budget overruns"
          ],
          correctAnswer: 0,
          explanation: "CPM identifies critical tasks that directly affect the project's overall duration."
        },
        {
          id: 4,
          question: "What visual tool shows task durations as horizontal bars?",
          options: [
            "PERT Chart",
            "Gantt Chart",
            "Network Diagram",
            "Resource Histogram"
          ],
          correctAnswer: 1,
          explanation: "Gantt charts use horizontal bars to represent task durations on a timeline."
        },
        {
          id: 5,
          question: "What is the process of smoothing resource demand called?",
          options: [
            "Resource Leveling",
            "Resource Allocation",
            "Resource Optimization",
            "Resource Distribution"
          ],
          correctAnswer: 0,
          explanation: "Resource leveling smooths out resource demand to avoid peaks and valleys."
        },
        {
          id: 6,
          question: "Which scheduling method is best for repetitive construction projects?",
          options: [
            "Network Scheduling",
            "Line of Balance",
            "Critical Path Method",
            "Bar Chart Scheduling"
          ],
          correctAnswer: 1,
          explanation: "Line of Balance scheduling is specifically designed for repetitive construction work."
        },
        {
          id: 7,
          question: "What does EVM stand for in progress monitoring?",
          options: [
            "Estimated Value Method",
            "Earned Value Management",
            "Earned Volume Management",
            "Efficiency Value Measurement"
          ],
          correctAnswer: 1,
          explanation: "EVM stands for Earned Value Management, integrating scope, schedule, and cost."
        },
        {
          id: 8,
          question: "What is adding contingency time for uncertainties called?",
          options: [
            "Risk Allocation",
            "Time Padding",
            "Contingency Planning",
            "Buffer Management"
          ],
          correctAnswer: 3,
          explanation: "Buffer management involves adding contingency time to account for uncertainties."
        },
        {
          id: 9,
          question: "Which technique performs activities in parallel that were originally sequential?",
          options: [
            "Acceleration",
            "Phasing",
            "Fast-tracking",
            "Crashing"
          ],
          correctAnswer: 2,
          explanation: "Fast-tracking involves overlapping activities that were planned to be sequential."
        },
        {
          id: 10,
          question: "What is adding resources to reduce activity duration called?",
          options: [
            "Compressing",
            "Expediting",
            "Fast-tracking",
            "Crashing"
          ],
          correctAnswer: 3,
          explanation: "Crashing involves adding resources to critical path activities to reduce duration."
        },
        {
          id: 11,
          question: "How many main principles of WBS were discussed?",
          options: [
            "Four",
            "Three",
            "Six",
            "Five"
          ],
          correctAnswer: 0,
          explanation: "The four principles are: 100% Rule, Mutual Exclusion, Outcome Orientation, Appropriate Detail Level."
        },
        {
          id: 12,
          question: "What does CPM calculate to determine flexibility in non-critical tasks?",
          options: [
            "Cost",
            "Float or Slack",
            "Duration",
            "Quality metrics"
          ],
          correctAnswer: 1,
          explanation: "CPM calculates float/slack, which is how long tasks can be delayed without affecting the project."
        },
        {
          id: 13,
          question: "Which scheduling method integrates time-based 3D modeling?",
          options: [
            "Line of Balance",
            "Network Scheduling",
            "4D Scheduling",
            "Bar Chart Scheduling"
          ],
          correctAnswer: 2,
          explanation: "4D scheduling adds time as the fourth dimension to 3D BIM models."
        },
        {
          id: 14,
          question: "What type of scheduling focuses on the next 2-4 weeks in detail?",
          options: [
            "Master scheduling",
            "Look-ahead scheduling",
            "Strategic scheduling",
            "Long-range scheduling"
          ],
          correctAnswer: 1,
          explanation: "Look-ahead scheduling provides detailed plans for the immediate future (2-4 weeks)."
        },
        {
          id: 15,
          question: "What is the first step in delay management?",
          options: [
            "Impact assessment",
            "Claim management",
            "Recovery planning",
            "Delay identification"
          ],
          correctAnswer: 3,
          explanation: "Delay identification involves recognizing schedule deviations as early as possible."
        },
        {
          id: 16,
          question: "Which WBS principle prevents overlap in scope definition?",
          options: [
            "100% Rule",
            "Mutual Exclusion",
            "Outcome Orientation",
            "Appropriate Detail"
          ],
          correctAnswer: 1,
          explanation: "Mutual Exclusion ensures no overlap in scope between different WBS elements."
        },
        {
          id: 17,
          question: "What do the horizontal bars represent in a Gantt chart?",
          options: [
            "Cost amounts",
            "Resource quantities",
            "Task durations",
            "Quality levels"
          ],
          correctAnswer: 2,
          explanation: "Horizontal bars in Gantt charts represent the duration of each task."
        },
        {
          id: 18,
          question: "What does resource leveling help avoid?",
          options: [
            "Budget overruns",
            "Safety incidents",
            "Peaks and valleys in resource demand",
            "Quality issues"
          ],
          correctAnswer: 2,
          explanation: "Resource leveling smooths resource usage to avoid excessive demand fluctuations."
        },
        {
          id: 19,
          question: "Which technique is used for accelerating project completion by adding resources?",
          options: [
            "Sequencing",
            "Crashing",
            "Fast-tracking",
            "Phasing"
          ],
          correctAnswer: 1,
          explanation: "Crashing reduces project duration by adding resources to critical activities."
        },
        {
          id: 20,
          question: "What does schedule variance analysis compare?",
          options: [
            "Planned vs. actual progress",
            "Planned vs. actual safety",
            "Budget vs. actual costs",
            "Estimated vs. actual quality"
          ],
          correctAnswer: 0,
          explanation: "Schedule variance analysis compares planned progress with actual progress achieved."
        }
      ]
    },

    // MODULE 3: Cost Estimation and Budget Management
    {
      id: 3,
      title: "Cost Estimation and Budget Management",
      completed: false,
      content: `
# Module 3: Cost Estimation and Budget Management

## Introduction to Construction Cost Management
Cost management is crucial for project profitability and involves estimating, budgeting, and controlling costs throughout the project lifecycle. Effective cost management ensures projects are completed within approved budgets.

### Types of Construction Estimates
Five primary estimate types used at different project stages:
1. **Order of Magnitude Estimate** - Initial rough estimate (±20-30% accuracy)
2. **Preliminary Estimate** - Schematic design stage (±15-20% accuracy)
3. **Detailed Estimate** - Construction documents stage (±5-10% accuracy)
4. **Bid Estimate** - Contractor's proposal for construction
5. **Control Estimate** - During construction for change management

### Cost Estimating Methods
Various approaches to cost estimation:
- **Unit Cost Estimating** - Cost per unit of measurement (per square foot, per cubic yard)
- **Assembly Estimating** - Costing systems or assemblies (wall systems, roof systems)
- **Parametric Estimating** - Statistical relationships between variables
- **Square Foot Estimating** - Based on historical cost per square foot data
- **Systems Estimating** - Costing by building systems (structural, mechanical, electrical)

### Direct vs. Indirect Costs
Understanding cost classifications:
- **Direct Costs** - Specifically attributable to project work (materials, labor, equipment)
- **Indirect Costs** - Not directly attributable but necessary (overhead, supervision, utilities)
- **Fixed Costs** - Constant regardless of project scale (permits, insurance)
- **Variable Costs** - Change with project size (materials, hourly labor)
- **Sunk Costs** - Already incurred and unrecoverable

### Quantity Takeoff Process
Systematic measurement of materials:
1. **Review drawings and specifications** - Understand project requirements
2. **Organize takeoff by work breakdown** - Follow WBS structure
3. **Measure quantities accurately** - Using digital or manual methods
4. **Apply waste factors** - Account for material losses (typically 5-10%)
5. **Document all measurements** - For verification and future reference

### Pricing Strategies
Methods for determining project prices:
- **Competitive Bidding** - Multiple contractors submit sealed bids
- **Negotiated Contracts** - Direct negotiation with selected contractor
- **Cost-Plus Contracts** - Reimbursement of costs plus fee
- **Guaranteed Maximum Price (GMP)** - Contractor guarantees not to exceed set price
- **Lump Sum Contracts** - Fixed price for defined scope

### Cost Control Techniques
Monitoring and controlling project expenses:
- **Budget Allocation** - Distributing total budget to work packages
- **Cost Tracking Systems** - Regular monitoring of actual vs. budgeted costs
- **Change Order Management** - Formal process for scope changes
- **Value Engineering** - Improving value without compromising function
- **Cash Flow Management** - Timing of income and expenditures

### Contingency Planning
Managing project uncertainties:
- **Design Contingency** - For design development changes (typically 5-15%)
- **Construction Contingency** - For unforeseen site conditions (typically 5-10%)
- **Management Reserve** - For unknown unknowns (typically 3-5%)
- **Escalation Allowance** - For price increases over time

### Cost Reporting Systems
Communication of financial status:
- **Cost Performance Reports** - Regular financial status updates
- **Earned Value Analysis** - Integration of cost and schedule performance
- **Cash Flow Projections** - Anticipated income and expenditure timing
- **Change Order Logs** - Track all scope changes and their costs
- **Budget Variance Reports** - Differences between planned and actual costs

### Life Cycle Costing
Considering total cost of ownership:
- **Initial Construction Costs** - Design and construction expenses
- **Operation Costs** - Utilities, maintenance, and repairs
- **Replacement Costs** - Component replacement over building life
- **Disposal Costs** - Demolition and waste management
- **Residual Value** - Remaining value at end of life cycle

### International Cost Considerations
Factors affecting global projects:
- **Currency Exchange Rates** - Fluctuations in international currencies
- **Local Labor Rates** - Wage differences by region
- **Material Availability** - Local sourcing vs. importation
- **Tax Implications** - Value-added taxes and duties
- **Inflation Rates** - Economic conditions affecting prices
`,
      quiz: [
        {
          id: 1,
          question: "What is the accuracy range for an Order of Magnitude estimate?",
          options: [
            "±5-10%",
            "±15-20%",
            "±10-15%",
            "±20-30%"
          ],
          correctAnswer: 3,
          explanation: "Order of Magnitude estimates are rough approximations with ±20-30% accuracy."
        },
        {
          id: 2,
          question: "Which estimate type is used during the construction documents stage?",
          options: [
            "Bid Estimate",
            "Detailed Estimate",
            "Preliminary Estimate",
            "Order of Magnitude Estimate"
          ],
          correctAnswer: 1,
          explanation: "Detailed estimates are prepared when construction documents are complete."
        },
        {
          id: 3,
          question: "What is cost per unit of measurement estimating called?",
          options: [
            "Assembly Estimating",
            "Square Foot Estimating",
            "Unit Cost Estimating",
            "Parametric Estimating"
          ],
          correctAnswer: 2,
          explanation: "Unit cost estimating calculates costs based on units like per square foot or cubic yard."
        },
        {
          id: 4,
          question: "Which costs are specifically attributable to project work?",
          options: [
            "Indirect Costs",
            "Sunk Costs",
            "Fixed Costs",
            "Direct Costs"
          ],
          correctAnswer: 3,
          explanation: "Direct costs are directly attributable to specific project activities."
        },
        {
          id: 5,
          question: "What typical waste factor is applied to material quantities?",
          options: [
            "1-3%",
            "15-20%",
            "5-10%",
            "10-15%"
          ],
          correctAnswer: 2,
          explanation: "A 5-10% waste factor is typically added to account for material losses."
        },
        {
          id: 6,
          question: "Which contract type involves reimbursement of costs plus a fee?",
          options: [
            "GMP Contracts",
            "Lump Sum Contracts",
            "Cost-Plus Contracts",
            "Fixed Price Contracts"
          ],
          correctAnswer: 2,
          explanation: "Cost-plus contracts reimburse actual costs plus an agreed-upon fee."
        },
        {
          id: 7,
          question: "What does GMP stand for in contract types?",
          options: [
            "General Material Pricing",
            "General Management Plan",
            "Guaranteed Maximum Price",
            "Guaranteed Minimum Price"
          ],
          correctAnswer: 2,
          explanation: "GMP stands for Guaranteed Maximum Price, where the contractor guarantees not to exceed a set price."
        },
        {
          id: 8,
          question: "What is improving value without compromising function called?",
          options: [
            "Cost Cutting",
            "Efficiency Analysis",
            "Budget Optimization",
            "Value Engineering"
          ],
          correctAnswer: 3,
          explanation: "Value engineering seeks to improve value (function/cost) without reducing necessary functions."
        },
        {
          id: 9,
          question: "Which contingency is for design development changes?",
          options: [
            "Design Contingency",
            "Escalation Allowance",
            "Construction Contingency",
            "Management Reserve"
          ],
          correctAnswer: 0,
          explanation: "Design contingency covers costs associated with design changes during development."
        },
        {
          id: 10,
          question: "What integration method combines cost and schedule performance?",
          options: [
            "Cash Flow Projection",
            "Cost Tracking",
            "Earned Value Analysis",
            "Budget Variance Reporting"
          ],
          correctAnswer: 2,
          explanation: "Earned Value Analysis integrates cost performance with schedule performance."
        },
        {
          id: 11,
          question: "How many primary estimate types were discussed?",
          options: [
            "Three",
            "Six",
            "Five",
            "Four"
          ],
          correctAnswer: 2,
          explanation: "The five types are: Order of Magnitude, Preliminary, Detailed, Bid, and Control estimates."
        },
        {
          id: 12,
          question: "What is estimating based on historical cost per square foot called?",
          options: [
            "Assembly Estimating",
            "Parametric Estimating",
            "Unit Cost Estimating",
            "Square Foot Estimating"
          ],
          correctAnswer: 3,
          explanation: "Square foot estimating uses historical cost data per square foot of building area."
        },
        {
          id: 13,
          question: "Which costs are constant regardless of project scale?",
          options: [
            "Variable Costs",
            "Fixed Costs",
            "Direct Costs",
            "Indirect Costs"
          ],
          correctAnswer: 1,
          explanation: "Fixed costs remain constant regardless of the project's size or duration."
        },
        {
          id: 14,
          question: "What is the first step in quantity takeoff?",
          options: [
            "Measure quantities accurately",
            "Apply waste factors",
            "Review drawings and specifications",
            "Document measurements"
          ],
          correctAnswer: 2,
          explanation: "The first step is reviewing all project documents to understand requirements."
        },
        {
          id: 15,
          question: "Which bidding method involves multiple contractors submitting sealed bids?",
          options: [
            "Direct Award",
            "Competitive Bidding",
            "Selective Bidding",
            "Negotiated Contracts"
          ],
          correctAnswer: 1,
          explanation: "Competitive bidding involves multiple contractors submitting sealed competitive bids."
        },
        {
          id: 16,
          question: "What is the typical range for construction contingency?",
          options: [
            "10-15%",
            "15-20%",
            "1-3%",
            "5-10%"
          ],
          correctAnswer: 3,
          explanation: "Construction contingency typically ranges from 5-10% for unforeseen site conditions."
        },
        {
          id: 17,
          question: "What type of reserve is for 'unknown unknowns'?",
          options: [
            "Management Reserve",
            "Design Contingency",
            "Construction Contingency",
            "Escalation Allowance"
          ],
          correctAnswer: 0,
          explanation: "Management reserve covers risks that cannot be identified in advance."
        },
        {
          id: 18,
          question: "Which costing considers total ownership costs over building life?",
          options: [
            "Replacement Costing",
            "Operational Costing",
            "Initial Costing",
            "Life Cycle Costing"
          ],
          correctAnswer: 3,
          explanation: "Life cycle costing considers all costs from construction through disposal."
        },
        {
          id: 19,
          question: "What international factor involves wage differences by region?",
          options: [
            "Currency Exchange Rates",
            "Material Availability",
            "Local Labor Rates",
            "Tax Implications"
          ],
          correctAnswer: 2,
          explanation: "Local labor rates vary significantly between different regions and countries."
        },
        {
          id: 20,
          question: "What do budget variance reports compare?",
          options: [
            "Direct vs. indirect costs",
            "Current vs. previous costs",
            "Planned vs. actual costs",
            "Material vs. labor costs"
          ],
          correctAnswer: 2,
          explanation: "Budget variance reports compare planned budget amounts with actual expenditures."
        }
      ]
    },

    // MODULE 4: Construction Safety Management
    {
      id: 4,
      title: "Construction Safety Management",
      completed: false,
      content: `
# Module 4: Construction Safety Management

## Importance of Construction Safety
Construction is one of the most hazardous industries, with approximately 20% of all workplace fatalities occurring in construction. Effective safety management protects workers, reduces costs, and improves productivity.

### OSHA Regulations and Standards
The Occupational Safety and Health Administration (OSHA) establishes and enforces safety standards:
- **OSHA 29 CFR 1926** - Construction industry safety standards
- **Recordkeeping Requirements** - OSHA Form 300, 300A, 301
- **Reporting Requirements** - Fatalities within 8 hours, serious injuries within 24 hours
- **Inspections and Citations** - Compliance officers can conduct workplace inspections
- **Penalties** - Fines for violations ranging from $13,653 to $136,532 per violation

### Common Construction Hazards
Primary hazards requiring management attention:
1. **Falls** - Leading cause of construction fatalities (approximately 35% of deaths)
2. **Struck-by Objects** - Moving equipment, falling materials
3. **Electrocutions** - Contact with overhead power lines, faulty wiring
4. **Caught-in/between** - Trench collapses, equipment accidents
5. **Health Hazards** - Silica dust, asbestos, chemical exposures

### Fall Protection Systems
Comprehensive fall protection strategies:
- **Guardrail Systems** - Top rails at 42 inches, midrails, toeboards
- **Safety Net Systems** - Installed as close as practicable under work area
- **Personal Fall Arrest Systems** - Harness, lanyard, anchor point (5,000 lb capacity)
- **Positioning Device Systems** - Allows hands-free work at elevation
- **Warning Line Systems** - For low-slope roof work
- **Controlled Access Zones** - Designated areas for leading edge work

### Scaffolding Safety Requirements
Scaffold safety standards:
- **Capacity Requirements** - Designed to support 4 times maximum intended load
- **Platform Construction** - Minimum width of 18 inches for platforms
- **Guardrail Height** - Top rail at 38-45 inches, midrail at halfway point
- **Inspection Requirements** - Daily inspection by competent person
- **Training Requirements** - Specific scaffold erection and use training

### Electrical Safety
Protection against electrical hazards:
- **Overhead Power Lines** - Minimum clearance distances (10 feet for up to 50kV)
- **Ground-Fault Circuit Interrupters (GFCIs)** - Required for all 120V, 15-20 amp receptacles
- **Lockout/Tagout Procedures** - Control of hazardous energy sources
- **Equipment Inspection** - Regular inspection of tools and cords
- **Qualified Personnel** - Only trained workers for electrical work

### Trenching and Excavation Safety
Preventing cave-in accidents:
- **Protective Systems Required** - For trenches 5 feet deep or more
- **Sloping Options** - Angle based on soil type (Type A: ¾:1, Type B: 1:1, Type C: 1½:1)
- **Shoring Systems** - Aluminum hydraulic or timber shoring
- **Shielding Systems** - Trench boxes for worker protection
- **Daily Inspections** - By competent person, especially after rainstorms

### Personal Protective Equipment (PPE)
Hierarchy of protection:
1. **Hard Hats** - Protection from falling objects
2. **Safety Glasses/Goggles** - Eye protection
3. **High-Visibility Clothing** - For traffic and equipment areas
4. **Hearing Protection** - For noise above 85 decibels
5. **Respiratory Protection** - For dust, fumes, vapors
6. **Safety Footwear** - Steel-toe boots with slip resistance

### Safety Management Systems
Comprehensive safety programs:
- **Safety Policy Development** - Company commitment to safety
- **Responsibility Assignment** - Clear safety roles and responsibilities
- **Hazard Identification** - Regular job hazard analyses
- **Training Programs** - Site-specific safety training
- **Incident Investigation** - Root cause analysis of accidents
- **Emergency Preparedness** - Response plans for emergencies

### Health Hazard Management
Controlling exposure to health hazards:
- **Silica Dust Control** - Water spraying, ventilation, respiratory protection
- **Asbestos Management** - Identification, containment, abatement
- **Lead Exposure Prevention** - During renovation of older structures
- **Noise Control** - Engineering controls, administrative controls, hearing protection
- **Heat Stress Prevention** - Acclimatization, hydration, rest breaks

### Safety Culture Development
Building a positive safety culture:
- **Management Commitment** - Visible leadership in safety
- **Employee Involvement** - Worker participation in safety programs
- **Accountability Systems** - Clear expectations and consequences
- **Continuous Improvement** - Regular program evaluation and enhancement
- **Recognition Programs** - Acknowledging safe behaviors and achievements
`,
      quiz: [
        {
          id: 1,
          question: "What percentage of workplace fatalities occur in construction?",
          options: [
            "Approximately 30%",
            "Approximately 40%",
            "Approximately 10%",
            "Approximately 20%"
          ],
          correctAnswer: 3,
          explanation: "Construction accounts for approximately 20% of all workplace fatalities."
        },
        {
          id: 2,
          question: "Which OSHA regulation covers construction industry standards?",
          options: [
            "29 CFR 1926",
            "29 CFR 1910",
            "29 CFR 1928",
            "29 CFR 1904"
          ],
          correctAnswer: 0,
          explanation: "29 CFR Part 1926 contains OSHA's construction industry safety standards."
        },
        {
          id: 3,
          question: "What is the leading cause of construction fatalities?",
          options: [
            "Electrocutions",
            "Struck-by accidents",
            "Caught-in/between",
            "Falls"
          ],
          correctAnswer: 3,
          explanation: "Falls account for approximately 35% of construction fatalities, making them the leading cause."
        },
        {
          id: 4,
          question: "What is the required capacity for fall arrest anchor points?",
          options: [
            "1,500 pounds",
            "5,000 pounds",
            "2,500 pounds",
            "3,000 pounds"
          ],
          correctAnswer: 1,
          explanation: "Anchor points for fall arrest systems must support 5,000 pounds per worker."
        },
        {
          id: 5,
          question: "How much weight must scaffolds be designed to support?",
          options: [
            "3 times maximum intended load",
            "4 times maximum intended load",
            "2 times maximum intended load",
            "5 times maximum intended load"
          ],
          correctAnswer: 1,
          explanation: "Scaffolds must be designed to support at least 4 times the maximum intended load."
        },
        {
          id: 6,
          question: "What is the minimum clearance from overhead power lines up to 50kV?",
          options: [
            "10 feet",
            "20 feet",
            "25 feet",
            "15 feet"
          ],
          correctAnswer: 0,
          explanation: "Minimum clearance from overhead power lines up to 50kV is 10 feet."
        },
        {
          id: 7,
          question: "At what trench depth are protective systems required?",
          options: [
            "8 feet or more",
            "5 feet or more",
            "6 feet or more",
            "4 feet or more"
          ],
          correctAnswer: 1,
          explanation: "Protective systems are required for trenches 5 feet deep or more."
        },
        {
          id: 8,
          question: "What does GFCI stand for in electrical safety?",
          options: [
            "General Fault Circuit Interrupter",
            "Ground-Fault Current Indicator",
            "Ground-Failure Circuit Indicator",
            "Ground-Fault Circuit Interrupter"
          ],
          correctAnswer: 3,
          explanation: "GFCI stands for Ground-Fault Circuit Interrupter, which protects against electrical shocks."
        },
        {
          id: 9,
          question: "Which soil type requires the steepest slope for trench protection?",
          options: [
            "Type A",
            "Type D",
            "Type B",
            "Type C"
          ],
          correctAnswer: 3,
          explanation: "Type C soil requires a 1½:1 slope (1.5 feet horizontal to 1 foot vertical), the steepest allowed."
        },
        {
          id: 10,
          question: "At what noise level is hearing protection required?",
          options: [
            "Above 85 decibels",
            "Above 75 decibels",
            "Above 90 decibels",
            "Above 95 decibels"
          ],
          correctAnswer: 0,
          explanation: "Hearing protection is required when noise exposure exceeds 85 decibels over 8 hours."
        },
        {
          id: 11,
          question: "How many primary construction hazards were identified?",
          options: [
            "Six",
            "Four",
            "Five",
            "Seven"
          ],
          correctAnswer: 2,
          explanation: "The five primary hazards are: Falls, Struck-by, Electrocutions, Caught-in/between, and Health Hazards."
        },
        {
          id: 12,
          question: "What is the maximum time to report a workplace fatality to OSHA?",
          options: [
            "24 hours",
            "8 hours",
            "48 hours",
            "72 hours"
          ],
          correctAnswer: 1,
          explanation: "Workplace fatalities must be reported to OSHA within 8 hours."
        },
        {
          id: 13,
          question: "What is the minimum platform width for scaffolding?",
          options: [
            "12 inches",
            "36 inches",
            "18 inches",
            "24 inches"
          ],
          correctAnswer: 2,
          explanation: "Scaffold platforms must be at least 18 inches wide."
        },
        {
          id: 14,
          question: "Which fall protection system uses a harness, lanyard, and anchor point?",
          options: [
            "Personal Fall Arrest System",
            "Guardrail System",
            "Positioning Device System",
            "Safety Net System"
          ],
          correctAnswer: 0,
          explanation: "Personal Fall Arrest Systems consist of a harness, connecting device, and anchor point."
        },
        {
          id: 15,
          question: "What procedure controls hazardous energy sources?",
          options: [
            "Isolation",
            "De-energization",
            "Lockout/Tagout",
            "Securement"
          ],
          correctAnswer: 2,
          explanation: "Lockout/Tagout procedures control hazardous energy sources during maintenance."
        },
        {
          id: 16,
          question: "What is the top rail height requirement for guardrails?",
          options: [
            "42-50 inches",
            "40-48 inches",
            "36-42 inches",
            "38-45 inches"
          ],
          correctAnswer: 3,
          explanation: "Guardrail top rails must be between 38 and 45 inches high."
        },
        {
          id: 17,
          question: "Which health hazard requires water spraying for control?",
          options: [
            "Silica Dust",
            "Lead",
            "Asbestos",
            "Noise"
          ],
          correctAnswer: 0,
          explanation: "Water spraying helps control silica dust by keeping it from becoming airborne."
        },
        {
          id: 18,
          question: "What is the first element in building a safety culture?",
          options: [
            "Continuous Improvement",
            "Employee Involvement",
            "Management Commitment",
            "Accountability Systems"
          ],
          correctAnswer: 2,
          explanation: "Management commitment is foundational to developing a positive safety culture."
        },
        {
          id: 19,
          question: "What must be inspected daily on scaffolding?",
          options: [
            "Only guardrails",
            "Only platforms",
            "Entire scaffold by competent person",
            "Only connections"
          ],
          correctAnswer: 2,
          explanation: "Scaffolds must receive a complete daily inspection by a competent person."
        },
        {
          id: 20,
          question: "What type of analysis investigates accident causes?",
          options: [
            "Risk Assessment",
            "Hazard Analysis",
            "Impact Analysis",
            "Root Cause Analysis"
          ],
          correctAnswer: 3,
          explanation: "Root cause analysis identifies underlying reasons for accidents to prevent recurrence."
        }
      ]
    },

    // MODULE 5: Construction Contracts and Legal Aspects
    {
      id: 5,
      title: "Construction Contracts and Legal Aspects",
      completed: false,
      content: `
# Module 5: Construction Contracts and Legal Aspects

## Introduction to Construction Law
Construction law governs the legal relationships and obligations between parties involved in construction projects. Understanding contract law, dispute resolution, and regulatory compliance is essential for construction managers.

### Types of Construction Contracts
Common contract delivery methods:
1. **Lump Sum/Fixed Price Contracts** - Predetermined price for defined scope
2. **Cost-Plus Contracts** - Reimbursement of costs plus fee (fixed, percentage, or incentive)
3. **Unit Price Contracts** - Payment based on measured quantities of work
4. **Guaranteed Maximum Price (GMP)** - Cost-plus with maximum price ceiling
5. **Design-Build Contracts** - Single entity responsible for design and construction
6. **Construction Management Contracts** - Professional services for project management

### Key Contract Clauses
Essential provisions in construction contracts:
- **Scope of Work** - Detailed description of work to be performed
- **Time for Completion** - Project schedule and milestone dates
- **Payment Terms** - Schedule of values, retention amounts, payment timing
- **Change Order Procedures** - Process for scope modifications
- **Dispute Resolution** - Methods for resolving disagreements
- **Termination Provisions** - Conditions for contract termination
- **Warranties and Guarantees** - Quality assurances and duration periods
- **Insurance Requirements** - Types and amounts of required insurance

### AIA Contract Documents
American Institute of Architects standard forms:
- **A101** - Owner-Contractor Agreement (Lump Sum)
- **A201** - General Conditions of the Contract for Construction
- **A401** - Contractor-Subcontractor Agreement
- **B101** - Owner-Architect Agreement
- **G701** - Change Order Form
- **G702** - Application and Certificate for Payment

### Bonds and Insurance
Financial protection mechanisms:
- **Bid Bonds** - Guarantee bidder will enter contract if selected (typically 5-10% of bid)
- **Performance Bonds** - Guarantee contractor will complete project (typically 100% of contract)
- **Payment Bonds** - Guarantee contractor will pay subcontractors and suppliers
- **Builder's Risk Insurance** - Property insurance during construction
- **General Liability Insurance** - Protection against third-party claims
- **Workers' Compensation Insurance** - Coverage for employee injuries

### Change Order Management
Process for scope changes:
1. **Change Identification** - Recognition of needed scope modification
2. **Pricing** - Cost and schedule impact assessment
3. **Negotiation** - Agreement on change terms
4. **Documentation** - Written change order execution
5. **Implementation** - Incorporation into project work
6. **Tracking** - Monitoring change impacts

### Delay Claims and Analysis
Managing project delays:
- **Excusable vs. Non-excusable Delays** - Whether time extensions are warranted
- **Compensable vs. Non-compensable Delays** - Whether additional compensation is due
- **Concurrent Delays** - Multiple delays affecting same time period
- **Delay Documentation** - Daily reports, meeting minutes, correspondence
- **Impact Analysis Methods** - As-planned vs. as-built, time impact analysis

### Dispute Resolution Methods
Approaches to resolving conflicts:
- **Negotiation** - Direct discussion between parties
- **Mediation** - Assisted negotiation with neutral third party
- **Arbitration** - Binding decision by neutral arbitrator(s)
- **Litigation** - Court proceedings and judgments
- **Dispute Review Boards** - Standing boards for ongoing dispute prevention

### Liens and Payment Rights
Legal mechanisms for payment security:
- **Mechanic's Liens** - Security interest in improved property
- **Preliminary Notices** - Required notices to preserve lien rights
- **Payment Bond Claims** - Claims against payment bonds
- **Stop Notices** - Notices to withhold funds from project
- **Trust Fund Statutes** - Requirements for proper fund handling

### Regulatory Compliance
Legal requirements for construction:
- **Building Codes** - International, national, and local codes
- **Zoning Regulations** - Land use and development restrictions
- **Environmental Regulations** - EPA, Clean Water Act, hazardous materials
- **Labor Laws** - Wage and hour requirements, worker classification
- **ADA Compliance** - Americans with Disabilities Act requirements
- **Permitting** - Construction permits and inspections

### Risk Allocation Strategies
Managing and distributing project risks:
- **Risk Identification** - Recognizing potential legal and financial exposures
- **Risk Transfer** - Insurance, bonds, and contractual provisions
- **Risk Mitigation** - Procedures to reduce likelihood or impact
- **Risk Retention** - Accepting and budgeting for certain risks
- **Contingency Planning** - Reserves for unforeseen events

### Ethical Considerations
Professional conduct standards:
- **Conflict of Interest Avoidance** - Disclosure of potential conflicts
- **Fair Dealing** - Equitable treatment of all parties
- **Confidentiality** - Protection of proprietary information
- **Compliance with Laws** - Adherence to all applicable regulations
- **Professional Competence** - Working within areas of expertise
`,
      quiz: [
        {
          id: 1,
          question: "Which contract type has a predetermined price for defined scope?",
          options: [
            "Unit Price Contracts",
            "Lump Sum/Fixed Price Contracts",
            "GMP Contracts",
            "Cost-Plus Contracts"
          ],
          correctAnswer: 1,
          explanation: "Lump sum contracts establish a fixed price for a clearly defined scope of work."
        },
        {
          id: 2,
          question: "What does GMP stand for in contract types?",
          options: [
            "General Management Plan",
            "Guaranteed Maximum Price",
            "General Material Pricing",
            "Guaranteed Minimum Price"
          ],
          correctAnswer: 1,
          explanation: "GMP stands for Guaranteed Maximum Price, where the contractor guarantees not to exceed a set price."
        },
        {
          id: 3,
          question: "Which AIA document contains general conditions for construction contracts?",
          options: [
            "B101",
            "A101",
            "A201",
            "A401"
          ],
          correctAnswer: 2,
          explanation: "AIA Document A201 contains the general conditions that govern most construction projects."
        },
        {
          id: 4,
          question: "What percentage of bid amount is typical for bid bonds?",
          options: [
            "5-10%",
            "10-15%",
            "1-3%",
            "15-20%"
          ],
          correctAnswer: 0,
          explanation: "Bid bonds typically range from 5-10% of the bid amount."
        },
        {
          id: 5,
          question: "What guarantees a contractor will complete the project?",
          options: [
            "Performance Bond",
            "Builder's Risk Insurance",
            "Bid Bond",
            "Payment Bond"
          ],
          correctAnswer: 0,
          explanation: "Performance bonds guarantee the contractor will complete the project according to contract terms."
        },
        {
          id: 6,
          question: "What is the first step in change order management?",
          options: [
            "Negotiation",
            "Pricing",
            "Documentation",
            "Change Identification"
          ],
          correctAnswer: 3,
          explanation: "Change identification involves recognizing that a scope modification is needed."
        },
        {
          id: 7,
          question: "Which delays warrant time extensions but not additional compensation?",
          options: [
            "Excusable Delays",
            "Concurrent Delays",
            "Non-compensable Delays",
            "Compensable Delays"
          ],
          correctAnswer: 2,
          explanation: "Non-compensable delays warrant time extensions but no additional money."
        },
        {
          id: 8,
          question: "What dispute resolution method uses a neutral third party to assist negotiation?",
          options: [
            "Litigation",
            "Negotiation",
            "Mediation",
            "Arbitration"
          ],
          correctAnswer: 2,
          explanation: "Mediation involves a neutral third party facilitating negotiations between disputing parties."
        },
        {
          id: 9,
          question: "What provides a security interest in improved property for unpaid work?",
          options: [
            "Mechanic's Lien",
            "Stop Notice",
            "Performance Bond",
            "Payment Bond"
          ],
          correctAnswer: 0,
          explanation: "Mechanic's liens provide security interest in the property for unpaid labor or materials."
        },
        {
          id: 10,
          question: "Which regulatory area includes the Clean Water Act?",
          options: [
            "Building Codes",
            "Zoning Regulations",
            "Labor Laws",
            "Environmental Regulations"
          ],
          correctAnswer: 3,
          explanation: "The Clean Water Act is part of environmental regulations governing construction activities."
        },
        {
          id: 11,
          question: "How many primary contract types were discussed?",
          options: [
            "Seven",
            "Six",
            "Four",
            "Five"
          ],
          correctAnswer: 1,
          explanation: "The six types are: Lump Sum, Cost-Plus, Unit Price, GMP, Design-Build, and Construction Management."
        },
        {
          id: 12,
          question: "Which AIA form is used for change orders?",
          options: [
            "A101",
            "A201",
            "G702",
            "G701"
          ],
          correctAnswer: 3,
          explanation: "AIA Document G701 is the standard form for change orders."
        },
        {
          id: 13,
          question: "What insurance covers property during construction?",
          options: [
            "Builder's Risk Insurance",
            "General Liability Insurance",
            "Professional Liability",
            "Workers' Compensation"
          ],
          correctAnswer: 0,
          explanation: "Builder's Risk Insurance covers the building and materials during construction."
        },
        {
          id: 14,
          question: "What are delays affecting the same time period called?",
          options: [
            "Compensable Delays",
            "Concurrent Delays",
            "Excusable Delays",
            "Critical Delays"
          ],
          correctAnswer: 1,
          explanation: "Concurrent delays occur when multiple delay events affect the same project timeframe."
        },
        {
          id: 15,
          question: "Which dispute resolution method results in a binding decision by a neutral party?",
          options: [
            "Negotiation",
            "Arbitration",
            "Mediation",
            "Litigation"
          ],
          correctAnswer: 1,
          explanation: "Arbitration results in a binding decision made by a neutral arbitrator or panel."
        },
        {
          id: 16,
          question: "What must be filed to preserve lien rights in many states?",
          options: [
            "Intent to Lien",
            "Claim of Lien",
            "Stop Notice",
            "Preliminary Notice"
          ],
          correctAnswer: 3,
          explanation: "Preliminary notices must often be filed early in the project to preserve lien rights."
        },
        {
          id: 17,
          question: "Which act requires accessibility in buildings?",
          options: [
            "Fair Labor Standards Act",
            "Occupational Safety and Health Act",
            "Americans with Disabilities Act (ADA)",
            "Clean Water Act"
          ],
          correctAnswer: 2,
          explanation: "The ADA requires buildings to be accessible to people with disabilities."
        },
        {
          id: 18,
          question: "What is transferring risk through insurance called?",
          options: [
            "Risk Mitigation",
            "Risk Allocation",
            "Risk Retention",
            "Risk Transfer"
          ],
          correctAnswer: 3,
          explanation: "Risk transfer involves shifting risk to another party, typically through insurance."
        },
        {
          id: 19,
          question: "What ethical principle requires disclosure of potential conflicts?",
          options: [
            "Conflict of Interest Avoidance",
            "Confidentiality",
            "Fair Dealing",
            "Professional Competence"
          ],
          correctAnswer: 0,
          explanation: "Avoiding conflicts of interest requires disclosing situations where personal interests might conflict with professional duties."
        },
        {
          id: 20,
          question: "Which AIA form is used for payment applications?",
          options: [
            "G701",
            "A101",
            "A201",
            "G702"
          ],
          correctAnswer: 3,
          explanation: "AIA Document G702 is the standard application and certificate for payment form."
        }
      ]
    },

    // MODULE 6: Construction Quality Management
    {
      id: 6,
      title: "Construction Quality Management",
      completed: false,
      content: `
# Module 6: Construction Quality Management

## Quality Management Principles
Quality management ensures construction projects meet or exceed requirements while controlling costs. The cost of poor quality in construction typically ranges from 5-15% of project value, making quality management essential for project success.

### Quality Planning
Developing quality objectives and plans:
- **Quality Policy Development** - Organizational commitment to quality
- **Quality Objectives Setting** - Specific, measurable quality targets
- **Quality Standards Identification** - Applicable codes, specifications, and standards
- **Quality Assurance Planning** - Preventive measures to ensure quality
- **Quality Control Planning** - Inspection and testing procedures
- **Resource Allocation** - Personnel, equipment, and budget for quality activities

### Quality Standards and Codes
Primary quality references:
- **International Building Code (IBC)** - Model building code requirements
- **ASTM International Standards** - Material and testing standards
- **ACI Standards** - American Concrete Institute requirements
- **AISC Standards** - American Institute of Steel Construction
- **ANSI Standards** - American National Standards Institute
- **Local Building Codes** - Municipal amendments and requirements
- **Project Specifications** - Detailed quality requirements for specific projects

### Quality Assurance Systems
Preventive quality measures:
- **Document Control** - Management of drawings, specifications, and revisions
- **Supplier Qualification** - Evaluation and approval of material suppliers
- **Process Controls** - Standardized construction methods and procedures
- **Training Programs** - Quality-related training for workforce
- **Pre-construction Meetings** - Quality expectations communication
- **Mock-ups and Prototypes** - Physical examples of required quality

### Quality Control Procedures
Inspection and testing activities:
- **Incoming Material Inspection** - Verification of material compliance
- **In-process Inspection** - Monitoring work during construction
- **Final Inspection** - Comprehensive completion inspection
- **Testing Protocols** - Material and system performance testing
- **Non-conformance Management** - Handling of defective work
- **Corrective Actions** - Addressing quality deficiencies

### Testing and Inspection Methods
Common construction testing:
- **Concrete Testing** - Slump tests, compressive strength tests, air content
- **Soil Testing** - Compaction tests, bearing capacity, moisture content
- **Steel Testing** - Welding inspections, bolt torque verification
- **Masonry Testing** - Mortar testing, prism testing
- **Electrical Testing** - Continuity, insulation resistance, ground fault
- **Mechanical Testing** - Pressure testing, flow testing, balancing
- **Envelope Testing** - Water penetration, air leakage, thermal imaging

### Statistical Quality Control
Quantitative quality management:
- **Control Charts** - Monitoring process stability over time
- **Sampling Plans** - Statistical sampling for acceptance decisions
- **Process Capability Analysis** - Assessing ability to meet specifications
- **Trend Analysis** - Identifying patterns in quality data
- **Pareto Analysis** - Focusing on most significant quality issues
- **Root Cause Analysis** - Identifying underlying causes of defects

### Quality Documentation
Records for quality verification:
- **Inspection Reports** - Detailed records of inspections performed
- **Test Reports** - Laboratory and field test results
- **Non-conformance Reports** - Documentation of quality deviations
- **Corrective Action Reports** - Records of quality issue resolutions
- **As-built Documentation** - Record drawings of actual construction
- **Quality Audits** - Systematic reviews of quality systems

### Quality Costs
Financial aspects of quality:
- **Prevention Costs** - Planning, training, process design (typically 1-3% of project)
- **Appraisal Costs** - Inspection, testing, audits (typically 2-4% of project)
- **Internal Failure Costs** - Rework, scrap, delays (typically 3-8% of project)
- **External Failure Costs** - Warranty claims, liability, reputation damage
- **Optimal Quality Level** - Balancing prevention costs with failure costs

### Continuous Improvement
Ongoing quality enhancement:
- **Lessons Learned** - Capturing and applying project experiences
- **Benchmarking** - Comparing performance with industry best practices
- **Quality Circles** - Team-based problem solving
- **Kaizen Events** - Focused improvement initiatives
- **Quality Management Systems** - ISO 9001 certification and implementation
- **Performance Metrics** - Key performance indicators for quality

### Technology in Quality Management
Digital quality tools:
- **Building Information Modeling (BIM)** - Clash detection, constructability review
- **Digital Checklists** - Mobile inspection applications
- **Photographic Documentation** - Time-stamped progress photos
- **Drone Inspections** - Aerial quality assessments
- **Laser Scanning** - As-built verification against design
- **Quality Management Software** - Centralized quality data management

### Sustainable Quality
Environmental quality considerations:
- **LEED Certification** - Leadership in Energy and Environmental Design
- **Green Building Materials** - Sustainable material selection
- **Energy Efficiency** - Building performance optimization
- **Indoor Environmental Quality** - Air quality, lighting, acoustics
- **Water Efficiency** - Conservation and reuse systems
- **Waste Management** - Construction waste reduction and recycling
`,
      quiz: [
        {
          id: 1,
          question: "What is the typical cost of poor quality in construction projects?",
          options: [
            "15-25% of project value",
            "10-20% of project value",
            "5-15% of project value",
            "1-3% of project value"
          ],
          correctAnswer: 2,
          explanation: "The cost of poor quality typically ranges from 5-15% of total project value."
        },
        {
          id: 2,
          question: "What does IBC stand for in quality standards?",
          options: [
            "International Building Code",
            "International Building Certification",
            "International Building Compliance",
            "Integrated Building Code"
          ],
          correctAnswer: 0,
          explanation: "IBC stands for International Building Code, a model code used throughout the US."
        },
        {
          id: 3,
          question: "Which organization provides concrete standards?",
          options: [
            "American Institute of Steel Construction",
            "ASTM International",
            "American Concrete Institute (ACI)",
            "ANSI"
          ],
          correctAnswer: 2,
          explanation: "The American Concrete Institute (ACI) develops standards for concrete construction."
        },
        {
          id: 4,
          question: "What are preventive measures to ensure quality called?",
          options: [
            "Quality Inspection",
            "Quality Control",
            "Quality Assurance",
            "Quality Testing"
          ],
          correctAnswer: 2,
          explanation: "Quality assurance focuses on preventive measures to ensure quality is built in."
        },
        {
          id: 5,
          question: "Which testing method measures concrete workability?",
          options: [
            "Compressive Strength Test",
            "Slump Test",
            "Setting Time Test",
            "Air Content Test"
          ],
          correctAnswer: 1,
          explanation: "The slump test measures the workability or consistency of fresh concrete."
        },
        {
          id: 6,
          question: "What statistical tool monitors process stability over time?",
          options: [
            "Pareto Analysis",
            "Control Charts",
            "Sampling Plans",
            "Root Cause Analysis"
          ],
          correctAnswer: 1,
          explanation: "Control charts monitor process performance over time to detect variations."
        },
        {
          id: 7,
          question: "What percentage of project cost typically goes to prevention activities?",
          options: [
            "8-10%",
            "5-7%",
            "10-12%",
            "1-3%"
          ],
          correctAnswer: 3,
          explanation: "Prevention costs typically account for 1-3% of total project costs."
        },
        {
          id: 8,
          question: "Which cost category includes rework and scrap?",
          options: [
            "Appraisal Costs",
            "External Failure Costs",
            "Prevention Costs",
            "Internal Failure Costs"
          ],
          correctAnswer: 3,
          explanation: "Internal failure costs include rework, scrap, and delays discovered before project completion."
        },
        {
          id: 9,
          question: "What Japanese term means continuous improvement?",
          options: [
            "Poka-yoke",
            "Kanban",
            "Kaizen",
            "Andon"
          ],
          correctAnswer: 2,
          explanation: "Kaizen is the Japanese philosophy of continuous improvement."
        },
        {
          id: 10,
          question: "Which technology helps detect design conflicts before construction?",
          options: [
            "Building Information Modeling (BIM)",
            "Digital Checklists",
            "Drone Inspections",
            "Laser Scanning"
          ],
          correctAnswer: 0,
          explanation: "BIM enables clash detection to identify design conflicts before construction begins."
        },
        {
          id: 11,
          question: "How many main quality cost categories were discussed?",
          options: [
            "Six",
            "Four",
            "Three",
            "Five"
          ],
          correctAnswer: 1,
          explanation: "The four categories are: Prevention, Appraisal, Internal Failure, and External Failure costs."
        },
        {
          id: 12,
          question: "Which standards organization focuses on materials testing?",
          options: [
            "AISC",
            "ASTM International",
            "ANSI",
            "ACI"
          ],
          correctAnswer: 1,
          explanation: "ASTM International develops technical standards for materials, products, and services."
        },
        {
          id: 13,
          question: "What are physical examples of required quality called?",
          options: [
            "Samples",
            "Mock-ups and Prototypes",
            "Templates",
            "Models"
          ],
          correctAnswer: 1,
          explanation: "Mock-ups and prototypes provide physical examples of expected quality before full production."
        },
        {
          id: 14,
          question: "Which testing verifies soil compaction?",
          options: [
            "Permeability Test",
            "Moisture Content Test",
            "Bearing Capacity Test",
            "Proctor Test"
          ],
          correctAnswer: 3,
          explanation: "Proctor tests determine optimal moisture content and maximum dry density for soil compaction."
        },
        {
          id: 15,
          question: "What analysis focuses on the most significant quality issues?",
          options: [
            "Trend Analysis",
            "Root Cause Analysis",
            "Process Capability Analysis",
            "Pareto Analysis"
          ],
          correctAnswer: 3,
          explanation: "Pareto analysis identifies the most significant factors contributing to quality problems."
        },
        {
          id: 16,
          question: "What is the typical range for appraisal costs?",
          options: [
            "2-4% of project",
            "3-5% of project",
            "1-3% of project",
            "5-7% of project"
          ],
          correctAnswer: 0,
          explanation: "Appraisal costs for inspection and testing typically range from 2-4% of project value."
        },
        {
          id: 17,
          question: "What international quality management standard was mentioned?",
          options: [
            "ISO 50001",
            "ISO 9001",
            "ISO 45001",
            "ISO 14001"
          ],
          correctAnswer: 1,
          explanation: "ISO 9001 is the international standard for quality management systems."
        },
        {
          id: 18,
          question: "Which tool uses aerial photography for quality assessments?",
          options: [
            "BIM",
            "Drone Inspections",
            "Laser Scanning",
            "Thermal Imaging"
          ],
          correctAnswer: 1,
          explanation: "Drone inspections provide aerial views for quality assessment of hard-to-reach areas."
        },
        {
          id: 19,
          question: "What green building certification program was mentioned?",
          options: [
            "WELL",
            "LEED",
            "BREEAM",
            "Green Globes"
          ],
          correctAnswer: 1,
          explanation: "LEED (Leadership in Energy and Environmental Design) is a green building certification program."
        },
        {
          id: 20,
          question: "What documents record actual construction conditions?",
          options: [
            "Inspection Reports",
            "As-built Documentation",
            "Non-conformance Reports",
            "Test Reports"
          ],
          correctAnswer: 1,
          explanation: "As-built documentation records the actual constructed conditions versus the original design."
        }
      ]
    },

    // MODULE 7: Construction Technology and BIM
    {
      id: 7,
      title: "Construction Technology and BIM",
      completed: false,
      content: `
# Module 7: Construction Technology and BIM

## Digital Transformation in Construction
The construction industry is undergoing significant digital transformation, with technology adoption increasing productivity by 15-45% on technology-enabled projects. Understanding and implementing construction technology is now essential for competitive advantage.

### Building Information Modeling (BIM)
BIM is a digital representation of physical and functional characteristics of a facility:
- **3D Modeling** - Geometric representation of building elements
- **4D Scheduling** - Time-based sequencing of construction activities
- **5D Cost Management** - Cost integration with model elements
- **6D Sustainability** - Energy analysis and environmental impact
- **7D Facility Management** - Operations and maintenance data
- **Common Data Environment (CDE)** - Central repository for project information
- **Levels of Development (LOD)** - Specification of model element completeness

### BIM Implementation Strategies
Successful BIM adoption requires:
- **BIM Execution Planning** - Documenting BIM uses, responsibilities, and procedures
- **Software Selection** - Choosing appropriate BIM authoring tools (Revit, ArchiCAD, Tekla)
- **Hardware Requirements** - Workstations with sufficient processing power and graphics capability
- **Training Programs** - Developing BIM competency within the organization
- **Standards Development** - Establishing company-specific BIM standards and protocols
- **Collaboration Protocols** - Defining how project teams will share and coordinate models

### Cloud Computing in Construction
Cloud-based solutions offer:
- **Collaboration Platforms** - Real-time sharing of project information
- **Document Management** - Centralized storage and version control
- **Mobile Access** - Field access to project data via tablets and smartphones
- **Software as a Service (SaaS)** - Subscription-based access to applications
- **Data Analytics** - Processing large datasets for insights
- **Disaster Recovery** - Secure backup of critical project information

### Construction Robotics
Automated systems transforming construction:
- **Robotic Total Stations** - Automated layout and verification
- **Bricklaying Robots** - Automated masonry construction
- **3D Concrete Printing** - Additive manufacturing of concrete structures
- **Demolition Robots** - Remote-controlled demolition equipment
- **Drones/UAVs** - Aerial surveying, inspection, and monitoring
- **Exoskeletons** - Wearable devices augmenting human strength and endurance

### Internet of Things (IoT) on Construction Sites
Connected devices providing real-time data:
- **Equipment Telematics** - Monitoring equipment location, usage, and maintenance needs
- **Wearable Technology** - Tracking worker location, vital signs, and environmental exposure
- **Environmental Sensors** - Monitoring temperature, humidity, noise, and air quality
- **Material Tracking** - RFID and GPS tracking of materials and components
- **Safety Monitoring** - Proximity sensors for equipment and hazard zones
- **Energy Management** - Monitoring energy consumption on site

### Augmented and Virtual Reality
Immersive technologies for construction:
- **Design Visualization** - Client walkthroughs of proposed designs
- **Clash Detection** - Visual identification of system conflicts
- **Safety Training** - Immersive hazard recognition training
- **Equipment Operation Training** - Virtual operation of heavy equipment
- **Maintenance Simulation** - Practice of complex maintenance procedures
- **Progress Visualization** - Comparison of planned vs. actual construction

### Artificial Intelligence and Machine Learning
AI applications in construction:
- **Predictive Analytics** - Forecasting project outcomes based on historical data
- **Risk Assessment** - Identifying and quantifying project risks
- **Schedule Optimization** - AI-generated optimal construction sequences
- **Quality Control** - Image recognition for defect detection
- **Safety Monitoring** - Computer vision for identifying unsafe conditions
- **Document Analysis** - Natural language processing for contract review

### Digital Twin Technology
Virtual replicas of physical assets:
- **Real-time Synchronization** - Continuous updating from IoT sensors
- **Performance Simulation** - Testing operational scenarios
- **Predictive Maintenance** - Anticipating equipment failures
- **Energy Optimization** - Analyzing and improving energy performance
- **Space Utilization** - Optimizing facility layout and usage
- **Lifecycle Management** - Supporting decisions throughout asset life

### Prefabrication and Modular Construction
Off-site manufacturing approaches:
- **Design for Manufacture and Assembly (DfMA)** - Designing for efficient factory production
- **BIM Integration** - Digital coordination of modular components
- **Quality Control** - Controlled factory environment for higher quality
- **Schedule Reduction** - Parallel site and factory work
- **Waste Reduction** - Precise material usage in factory setting
- **Safety Improvement** - Reduced on-site labor and hazards

### Sustainable Construction Technology
Technology enabling green building:
- **Energy Modeling Software** - Analysis of building energy performance
- **Daylight Simulation** - Optimization of natural lighting
- **Water Management Systems** - Smart irrigation and water recycling
- **Renewable Energy Integration** - Solar, wind, and geothermal systems
- **Material Selection Tools** - Databases of sustainable material options
- **Carbon Tracking** - Monitoring and reducing carbon footprint

### Technology Implementation Challenges
Barriers to technology adoption:
- **Initial Investment Costs** - High upfront costs for hardware and software
- **Training Requirements** - Need for workforce upskilling
- **Interoperability Issues** - Compatibility between different systems
- **Data Security Concerns** - Protection of sensitive project information
- **Cultural Resistance** - Reluctance to change traditional practices
- **Regulatory Compliance** - Meeting legal and contractual requirements
`,
      quiz: [
        {
          id: 1,
          question: "What productivity increase can technology adoption provide?",
          options: [
            "15-45%",
            "25-35%",
            "35-55%",
            "5-15%"
          ],
          correctAnswer: 0,
          explanation: "Technology adoption can increase construction productivity by 15-45% on enabled projects."
        },
        {
          id: 2,
          question: "What does BIM stand for?",
          options: [
            "Basic Infrastructure Management",
            "Building Integration Method",
            "Business Information Modeling",
            "Building Information Modeling"
          ],
          correctAnswer: 3,
          explanation: "BIM stands for Building Information Modeling, a digital representation of building characteristics."
        },
        {
          id: 3,
          question: "Which BIM dimension adds scheduling information?",
          options: [
            "3D",
            "5D",
            "6D",
            "4D"
          ],
          correctAnswer: 3,
          explanation: "4D BIM adds time/scheduling information to the 3D model."
        },
        {
          id: 4,
          question: "What is a central repository for project information called?",
          options: [
            "Information Repository",
            "Common Data Environment (CDE)",
            "Document Control Center",
            "Project Management System"
          ],
          correctAnswer: 1,
          explanation: "A Common Data Environment is a central repository for project information in BIM processes."
        },
        {
          id: 5,
          question: "Which technology uses additive manufacturing for concrete structures?",
          options: [
            "Robotic Bricklaying",
            "Automated Demolition",
            "3D Concrete Printing",
            "Drone Surveying"
          ],
          correctAnswer: 2,
          explanation: "3D concrete printing uses additive manufacturing to create concrete structures layer by layer."
        },
        {
          id: 6,
          question: "What does IoT stand for in construction technology?",
          options: [
            "Integrated Operations Tracking",
            "Internet of Things",
            "Integration of Technology",
            "Internet Operations Technology"
          ],
          correctAnswer: 1,
          explanation: "IoT stands for Internet of Things, referring to interconnected devices sharing data."
        },
        {
          id: 7,
          question: "Which technology creates immersive client walkthroughs?",
          options: [
            "Digital Twins",
            "Mixed Reality",
            "Augmented Reality",
            "Virtual Reality"
          ],
          correctAnswer: 3,
          explanation: "Virtual Reality creates fully immersive digital environments for design visualization."
        },
        {
          id: 8,
          question: "What AI application forecasts project outcomes?",
          options: [
            "Predictive Analytics",
            "Schedule Optimization",
            "Quality Control",
            "Risk Assessment"
          ],
          correctAnswer: 0,
          explanation: "Predictive analytics uses AI to forecast project outcomes based on historical data."
        },
        {
          id: 9,
          question: "What is a virtual replica of a physical asset called?",
          options: [
            "Digital Twin",
            "Simulation Model",
            "BIM Model",
            "Virtual Model"
          ],
          correctAnswer: 0,
          explanation: "A Digital Twin is a virtual replica that synchronizes with its physical counterpart in real-time."
        },
        {
          id: 10,
          question: "What design approach focuses on efficient factory production?",
          options: [
            "Design for Manufacture and Assembly (DfMA)",
            "Value Engineering",
            "Lean Construction",
            "Sustainable Design"
          ],
          correctAnswer: 0,
          explanation: "DfMA focuses on designing components for efficient factory manufacturing and on-site assembly."
        },
        {
          id: 11,
          question: "How many BIM dimensions were discussed?",
          options: [
            "Five",
            "Six",
            "Four",
            "Seven"
          ],
          correctAnswer: 3,
          explanation: "The seven dimensions are: 3D Geometry, 4D Time, 5D Cost, 6D Sustainability, 7D Operations."
        },
        {
          id: 12,
          question: "Which software is mentioned as a BIM authoring tool?",
          options: [
            "Revit",
            "AutoCAD",
            "SolidWorks",
            "SketchUp"
          ],
          correctAnswer: 0,
          explanation: "Revit is a popular BIM authoring tool developed by Autodesk."
        },
        {
          id: 13,
          question: "What monitors equipment location and usage?",
          options: [
            "Environmental Sensors",
            "Equipment Telematics",
            "Wearable Technology",
            "Material Tracking"
          ],
          correctAnswer: 1,
          explanation: "Equipment telematics use GPS and sensors to monitor equipment location, usage, and condition."
        },
        {
          id: 14,
          question: "Which technology overlays digital information on the real world?",
          options: [
            "Extended Reality",
            "Virtual Reality",
            "Mixed Reality",
            "Augmented Reality"
          ],
          correctAnswer: 3,
          explanation: "Augmented Reality overlays digital information onto the user's view of the real world."
        },
        {
          id: 15,
          question: "What AI technique uses image recognition for defect detection?",
          options: [
            "Computer Vision",
            "Predictive Analytics",
            "Machine Learning",
            "Natural Language Processing"
          ],
          correctAnswer: 0,
          explanation: "Computer vision uses AI to analyze images and video for quality control and defect detection."
        },
        {
          id: 16,
          question: "What does DfMA stand for?",
          options: [
            "Design for Manufacture and Assembly",
            "Design for Modular Assembly",
            "Digital Fabrication and Manufacturing",
            "Design for Modern Architecture"
          ],
          correctAnswer: 0,
          explanation: "DfMA stands for Design for Manufacture and Assembly, optimizing designs for factory production."
        },
        {
          id: 17,
          question: "Which software analyzes building energy performance?",
          options: [
            "Daylight Simulation",
            "Carbon Tracking",
            "Energy Modeling Software",
            "BIM Software"
          ],
          correctAnswer: 2,
          explanation: "Energy modeling software simulates and analyzes building energy consumption and performance."
        },
        {
          id: 18,
          question: "What is the main barrier to technology adoption mentioned?",
          options: [
            "Cultural Resistance",
            "Initial Investment Costs",
            "Training Requirements",
            "Data Security Concerns"
          ],
          correctAnswer: 1,
          explanation: "High initial investment costs are a primary barrier to construction technology adoption."
        },
        {
          id: 19,
          question: "What wearable technology augments human strength?",
          options: [
            "Wearable Sensors",
            "Smart Glasses",
            "Exoskeletons",
            "Smart Helmets"
          ],
          correctAnswer: 2,
          explanation: "Exoskeletons are wearable devices that augment human strength and reduce fatigue."
        },
        {
          id: 20,
          question: "Which term refers to subscription-based software access?",
          options: [
            "Platform as a Service",
            "Infrastructure as a Service",
            "Software as a Service (SaaS)",
            "Cloud Computing"
          ],
          correctAnswer: 2,
          explanation: "SaaS provides software access via subscription rather than perpetual licensing."
        }
      ]
    },

    // MODULE 8: Sustainable Construction Practices
    {
      id: 8,
      title: "Sustainable Construction Practices",
      completed: false,
      content: `
# Module 8: Sustainable Construction Practices

## Principles of Sustainable Construction
Sustainable construction aims to reduce environmental impact while creating healthy, efficient buildings. The building sector accounts for approximately 40% of global energy consumption and 30% of greenhouse gas emissions, making sustainability essential.

### Green Building Rating Systems
Major certification systems:
- **LEED (Leadership in Energy and Environmental Design)** - Most widely used green building rating system
- **BREEAM (Building Research Establishment Environmental Assessment Method)** - First green building rating system
- **Green Globes** - Alternative to LEED with online assessment
- **WELL Building Standard** - Focus on human health and wellness
- **Living Building Challenge** - Most rigorous sustainability standard
- **ENERGY STAR** - EPA program for energy efficiency
- **Regional Systems** - Local adaptations and requirements

### Energy Efficiency Strategies
Reducing building energy consumption:
- **Building Envelope Optimization** - High-performance insulation, windows, and air sealing
- **High-Efficiency HVAC Systems** - Energy recovery ventilators, variable refrigerant flow systems
- **LED Lighting** - High-efficiency lighting with smart controls
- **Building Automation Systems** - Automated control of building systems
- **Renewable Energy Integration** - Solar photovoltaic, solar thermal, wind turbines
- **Passive Design Strategies** - Building orientation, natural ventilation, daylighting
- **Energy Modeling** - Computer simulation to optimize energy performance

### Water Conservation Methods
Reducing potable water use:
- **Low-Flow Fixtures** - Water-efficient toilets, faucets, and showerheads
- **Rainwater Harvesting** - Collection and use of rainwater for non-potable purposes
- **Greywater Recycling** - Reuse of water from sinks, showers, and laundry
- **Blackwater Treatment** - On-site treatment of sewage for reuse
- **Efficient Irrigation** - Smart irrigation controllers and drought-tolerant landscaping
- **Water Metering** - Submetering to identify consumption patterns
- **Cooling Tower Optimization** - Efficient operation of cooling tower systems

### Sustainable Material Selection
Environmentally preferable materials:
- **Rapidly Renewable Materials** - Bamboo, cork, straw, wool
- **Recycled Content Materials** - Products with post-consumer or post-industrial recycled content
- **Regional Materials** - Sourced within 500 miles to reduce transportation impacts
- **Certified Wood** - FSC (Forest Stewardship Council) certified wood products
- **Low-VOC Materials** - Products with low volatile organic compound emissions
- **Durable Materials** - Long-lasting materials reducing replacement frequency
- **Biobased Materials** - Products made from agricultural byproducts

### Waste Management and Recycling
Minimizing construction waste:
- **Waste Management Planning** - Pre-construction waste reduction planning
- **Source Reduction** - Designing to minimize waste generation
- **Material Reuse** - Salvaging and reusing materials on-site or elsewhere
- **Recycling Programs** - Separation and recycling of construction debris
- **Waste Tracking** - Monitoring waste generation and diversion rates
- **Deconstruction** - Careful dismantling for maximum material recovery
- **Construction Waste Diversion Goals** - Typically 50-75% diversion from landfill

### Indoor Environmental Quality
Creating healthy indoor environments:
- **Ventilation Effectiveness** - Adequate fresh air supply and distribution
- **Low-Emitting Materials** - Reducing indoor air pollutants
- **Daylighting** - Maximizing natural light while controlling glare
- **Views to Outdoors** - Visual connection to exterior environments
- **Thermal Comfort** - Temperature, humidity, and air movement control
- **Acoustic Comfort** - Noise control and appropriate sound levels
- **Controllable Systems** - User control of lighting, temperature, and ventilation

### Site Sustainability
Sustainable land use practices:
- **Brownfield Redevelopment** - Developing previously contaminated sites
- **Stormwater Management** - Reducing impervious surfaces, green roofs, rain gardens
- **Heat Island Reduction** - Reflective materials, shade trees, green roofs
- **Light Pollution Reduction** - Minimizing light trespass and sky glow
- **Habitat Protection** - Preserving or restoring natural habitats
- **Transportation Access** - Proximity to public transit, bicycle facilities
- **Site Restoration** - Restoring disturbed areas after construction

### Life Cycle Assessment
Evaluating environmental impacts:
- **Cradle-to-Grave Analysis** - Environmental impacts from raw material extraction to disposal
- **Embodied Energy** - Energy consumed during material production and transportation
- **Global Warming Potential** - Greenhouse gas emissions over product life
- **Water Consumption** - Total water used throughout product life
- **Resource Depletion** - Consumption of finite resources
- **End-of-Life Options** - Recycling, reuse, or disposal impacts
- **Environmental Product Declarations** - Standardized reporting of environmental impacts

### Green Construction Practices
Sustainable construction methods:
- **Erosion and Sediment Control** - Silt fences, sediment basins, stabilization
- **Construction Activity Pollution Prevention** - Managing air, water, and soil pollution
- **Indoor Air Quality Management** - Protecting HVAC systems, source control
- **Low-Impact Construction Equipment** - Electric or alternative fuel equipment
- **Sustainable Procurement** - Environmental criteria in purchasing decisions
- **Green Cleaning** - Environmentally preferable cleaning products and methods
- **Commissioning** - Verifying building systems perform as designed

### Economic Benefits of Sustainability
Financial advantages:
- **Energy Cost Savings** - 20-50% reduction in energy costs for high-performance buildings
- **Water Cost Savings** - 30-50% reduction in water consumption
- **Increased Property Values** - 5-10% premium for green certified buildings
- **Higher Occupancy Rates** - 3-5% higher occupancy in green buildings
- **Reduced Operating Costs** - Lower maintenance and replacement costs
- **Productivity Improvements** - 5-15% productivity gains in green buildings
- **Risk Mitigation** - Reduced exposure to energy price volatility

### Regulatory and Market Drivers
Forces promoting sustainability:
- **Building Codes** - Increasing energy efficiency requirements
- **Government Incentives** - Tax credits, grants, and expedited permitting
- **Corporate Sustainability Goals** - Corporate social responsibility commitments
- **Tenant Demand** - Increasing preference for green office space
- **Investor Requirements** - ESG (Environmental, Social, Governance) criteria
- **Insurance Benefits** - Lower premiums for green buildings
- **Public Awareness** - Growing consumer demand for sustainability
`,
      quiz: [
        {
          id: 1,
          question: "What percentage of global energy consumption comes from buildings?",
          options: [
            "Approximately 30%",
            "Approximately 60%",
            "Approximately 40%",
            "Approximately 50%"
          ],
          correctAnswer: 2,
          explanation: "The building sector accounts for approximately 40% of global energy consumption."
        },
        {
          id: 2,
          question: "Which is the most widely used green building rating system?",
          options: [
            "BREEAM",
            "WELL",
            "LEED",
            "Green Globes"
          ],
          correctAnswer: 2,
          explanation: "LEED (Leadership in Energy and Environmental Design) is the most widely used system globally."
        },
        {
          id: 3,
          question: "What was the first green building rating system?",
          options: [
            "BREEAM",
            "Green Globes",
            "ENERGY STAR",
            "LEED"
          ],
          correctAnswer: 0,
          explanation: "BREEAM (Building Research Establishment Environmental Assessment Method) was first launched in 1990."
        },
        {
          id: 4,
          question: "Which strategy involves building orientation and natural ventilation?",
          options: [
            "Active Systems",
            "Renewable Energy",
            "Building Automation",
            "Passive Design"
          ],
          correctAnswer: 3,
          explanation: "Passive design uses building orientation, natural ventilation, and daylighting to reduce energy use."
        },
        {
          id: 5,
          question: "What is the collection and use of rainwater called?",
          options: [
            "Rainwater Harvesting",
            "Water Metering",
            "Greywater Recycling",
            "Blackwater Treatment"
          ],
          correctAnswer: 0,
          explanation: "Rainwater harvesting involves collecting and storing rainwater for non-potable uses."
        },
        {
          id: 6,
          question: "What does FSC certification indicate for wood products?",
          options: [
            "Low VOC emissions",
            "Regional sourcing",
            "Recycled content",
            "Sustainable forest management"
          ],
          correctAnswer: 3,
          explanation: "FSC (Forest Stewardship Council) certification indicates wood comes from sustainably managed forests."
        },
        {
          id: 7,
          question: "What are typical construction waste diversion goals?",
          options: [
            "75-90% diversion from landfill",
            "90-100% diversion from landfill",
            "25-50% diversion from landfill",
            "50-75% diversion from landfill"
          ],
          correctAnswer: 3,
          explanation: "Most green projects aim for 50-75% diversion of construction waste from landfills."
        },
        {
          id: 8,
          question: "What does VOC stand for in material selection?",
          options: [
            "Volatile Oxidation Components",
            "Variable Odor Compounds",
            "Volatile Organic Compounds",
            "Variable Organic Content"
          ],
          correctAnswer: 2,
          explanation: "VOCs are Volatile Organic Compounds that can affect indoor air quality and human health."
        },
        {
          id: 9,
          question: "What is developing previously contaminated sites called?",
          options: [
            "Greenfield Development",
            "Brownfield Redevelopment",
            "Site Restoration",
            "Habitat Protection"
          ],
          correctAnswer: 1,
          explanation: "Brownfield redevelopment involves cleaning up and developing previously contaminated sites."
        },
        {
          id: 10,
          question: "What analyzes environmental impacts from raw material to disposal?",
          options: [
            "Environmental Impact Statement",
            "Energy Modeling",
            "Sustainability Audit",
            "Life Cycle Assessment"
          ],
          correctAnswer: 3,
          explanation: "Life Cycle Assessment evaluates environmental impacts throughout a product's entire life."
        },
        {
          id: 11,
          question: "How many main green building rating systems were discussed?",
          options: [
            "Five",
            "Eight",
            "Six",
            "Seven"
          ],
          correctAnswer: 3,
          explanation: "The seven systems are: LEED, BREEAM, Green Globes, WELL, Living Building Challenge, ENERGY STAR, and Regional Systems."
        },
        {
          id: 12,
          question: "What energy savings can high-performance buildings achieve?",
          options: [
            "20-50% reduction",
            "30-60% reduction",
            "10-20% reduction",
            "40-70% reduction"
          ],
          correctAnswer: 0,
          explanation: "High-performance green buildings typically achieve 20-50% energy cost savings."
        },
        {
          id: 13,
          question: "Within what distance should regional materials be sourced?",
          options: [
            "100 miles",
            "250 miles",
            "1000 miles",
            "500 miles"
          ],
          correctAnswer: 3,
          explanation: "Regional materials are typically defined as sourced within 500 miles of the project site."
        },
        {
          id: 14,
          question: "Which standard focuses on human health and wellness?",
          options: [
            "BREEAM",
            "Green Globes",
            "WELL Building Standard",
            "LEED"
          ],
          correctAnswer: 2,
          explanation: "The WELL Building Standard focuses specifically on human health and wellness in buildings."
        },
        {
          id: 15,
          question: "What is energy consumed during material production called?",
          options: [
            "Operational Energy",
            "Life Cycle Energy",
            "Embodied Energy",
            "Production Energy"
          ],
          correctAnswer: 2,
          explanation: "Embodied energy refers to energy consumed during material extraction, manufacturing, and transportation."
        },
        {
          id: 16,
          question: "What does ESG stand for in investment criteria?",
          options: [
            "Energy, Sustainability, Green",
            "Economic, Social, Green",
            "Environmental, Social, Governance",
            "Environmental, Sustainable, Growth"
          ],
          correctAnswer: 2,
          explanation: "ESG stands for Environmental, Social, and Governance criteria used in sustainable investing."
        },
        {
          id: 17,
          question: "What productivity gains are reported in green buildings?",
          options: [
            "5-15%",
            "1-5%",
            "15-25%",
            "10-20%"
          ],
          correctAnswer: 0,
          explanation: "Studies show 5-15% productivity gains in green buildings due to better indoor environmental quality."
        },
        {
          id: 18,
          question: "Which practice involves careful dismantling for material recovery?",
          options: [
            "Recycling",
            "Demolition",
            "Salvage",
            "Deconstruction"
          ],
          correctAnswer: 3,
          explanation: "Deconstruction involves carefully dismantling buildings to maximize material recovery and reuse."
        },
        {
          id: 19,
          question: "What verifies building systems perform as designed?",
          options: [
            "Inspection",
            "Commissioning",
            "Certification",
            "Testing"
          ],
          correctAnswer: 1,
          explanation: "Commissioning verifies that building systems are installed and perform according to design intent."
        },
        {
          id: 20,
          question: "What premium do green certified buildings typically command?",
          options: [
            "5-10% higher property values",
            "10-15% higher property values",
            "15-20% higher property values",
            "1-3% higher property values"
          ],
          correctAnswer: 0,
          explanation: "Green certified buildings typically command 5-10% higher property values than comparable conventional buildings."
        }
      ]
    },

    // MODULE 9: Construction Project Leadership
    {
      id: 9,
      title: "Construction Project Leadership",
      completed: false,
      content: `
# Module 9: Construction Project Leadership

## Leadership in Construction Management
Effective leadership is critical for construction project success. Studies show that projects with strong leadership are 2.5 times more likely to finish on time and within budget. Construction leadership requires technical expertise combined with people management skills.

### Leadership Styles in Construction
Different approaches to leading construction teams:
- **Transformational Leadership** - Inspiring and motivating teams toward shared vision
- **Transactional Leadership** - Focus on supervision, organization, and performance
- **Servant Leadership** - Prioritizing team needs and development
- **Situational Leadership** - Adapting style to team maturity and situation
- **Autocratic Leadership** - Centralized decision-making for rapid response
- **Democratic Leadership** - Team involvement in decision processes
- **Laissez-faire Leadership** - High autonomy for experienced teams

### Communication Strategies
Effective communication in construction:
- **Stakeholder Analysis** - Identifying all parties with project interest
- **Communication Planning** - Formal plan for information distribution
- **Meeting Management** - Productive agenda-driven meetings
- **Reporting Systems** - Regular progress and status reports
- **Conflict Resolution** - Addressing disagreements constructively
- **Active Listening** - Understanding before being understood
- **Non-verbal Communication** - Body language, tone, and presentation

### Team Development and Management
Building effective construction teams:
- **Team Formation Stages** - Forming, storming, norming, performing, adjourning
- **Role Clarification** - Clear definition of responsibilities and authority
- **Skill Assessment** - Identifying team strengths and development needs
- **Motivation Techniques** - Understanding what drives team members
- **Performance Management** - Setting expectations and providing feedback
- **Succession Planning** - Developing future leaders within the organization
- **Diversity and Inclusion** - Leveraging diverse perspectives and backgrounds

### Decision-Making Processes
Structured approaches to project decisions:
- **Rational Decision Making** - Systematic analysis of alternatives
- **Bounded Rationality** - Making satisfactory decisions with limited information
- **Intuitive Decision Making** - Drawing on experience and instinct
- **Participative Decision Making** - Involving team members in decisions
- **Ethical Decision Making** - Considering moral implications of choices
- **Risk-Based Decision Making** - Evaluating options considering uncertainties
- **Data-Driven Decision Making** - Using analytics to inform choices

### Change Management
Leading organizational and project changes:
- **Change Readiness Assessment** - Evaluating organization's preparedness for change
- **Change Vision Development** - Creating compelling case for change
- **Stakeholder Engagement** - Involving affected parties in change process
- **Communication Strategy** - Clear messaging about change and benefits
- **Training and Support** - Preparing team for new ways of working
- **Resistance Management** - Addressing concerns and objections
- **Change Reinforcement** - Ensuring changes become permanent

### Conflict Management
Handling disagreements on construction projects:
- **Conflict Identification** - Recognizing early signs of potential conflicts
- **Conflict Analysis** - Understanding root causes and interests
- **Negotiation Techniques** - Win-win approaches to resolution
- **Mediation Skills** - Facilitating agreement between parties
- **Escalation Procedures** - When and how to involve higher authority
- **Documentation** - Recording agreements and understandings
- **Relationship Preservation** - Maintaining working relationships post-conflict

### Emotional Intelligence
Self-awareness and relationship management:
- **Self-Awareness** - Understanding personal emotions and triggers
- **Self-Regulation** - Controlling emotional responses
- **Motivation** - Internal drive to achieve goals
- **Empathy** - Understanding others' perspectives and feelings
- **Social Skills** - Building relationships and influencing others
- **Stress Management** - Coping with project pressures
- **Resilience** - Recovering from setbacks and challenges

### Time Management for Leaders
Efficient use of leadership time:
- **Priority Setting** - Distinguishing urgent from important tasks
- **Delegation Skills** - Assigning appropriate tasks to team members
- **Meeting Efficiency** - Maximizing value of time spent in meetings
- **Interruption Management** - Handling unexpected demands on time
- **Focus Techniques** - Maintaining concentration on critical tasks
- **Work-Life Balance** - Managing professional and personal commitments
- **Energy Management** - Optimizing personal energy throughout day

### Professional Development
Continuous improvement for construction leaders:
- **Skill Gap Analysis** - Identifying areas for development
- **Training Programs** - Formal education and certification
- **Mentoring Relationships** - Learning from experienced leaders
- **Peer Networks** - Sharing knowledge with other professionals
- **Industry Involvement** - Participation in professional organizations
- **Reading and Research** - Staying current with industry developments
- **Reflective Practice** - Learning from experience through reflection

### Ethical Leadership
Moral dimensions of construction leadership:
- **Integrity** - Consistency between words and actions
- **Accountability** - Taking responsibility for decisions and outcomes
- **Transparency** - Openness in communications and decisions
- **Fairness** - Equitable treatment of all stakeholders
- **Respect** - Valuing individuals and their contributions
- **Social Responsibility** - Considering broader community impacts
- **Compliance** - Adherence to laws, regulations, and standards

### Crisis Leadership
Leading through project emergencies:
- **Crisis Preparedness** - Planning for potential emergencies
- **Rapid Response** - Quick decision-making under pressure
- **Communication During Crisis** - Clear, calm, and frequent updates
- **Team Mobilization** - Coordinating response efforts
- **Stakeholder Management** - Keeping all parties informed
- **Recovery Planning** - Returning to normal operations
- **Lessons Learned** - Improving based on crisis experience

### Innovation Leadership
Fostering creativity and improvement:
- **Innovation Culture** - Creating environment that encourages new ideas
- **Idea Generation** - Techniques for creative problem-solving
- **Risk-Taking Support** - Willingness to try new approaches
- **Implementation Support** - Resources to turn ideas into reality
- **Recognition of Innovation** - Acknowledging creative contributions
- **Learning from Failure** - Viewing setbacks as learning opportunities
- **Continuous Improvement** - Ongoing refinement of processes and methods
`,
      quiz: [
        {
          id: 1,
          question: "How much more likely are well-led projects to finish on time and budget?",
          options: [
            "3 times more likely",
            "2 times more likely",
            "2.5 times more likely",
            "1.5 times more likely"
          ],
          correctAnswer: 2,
          explanation: "Projects with strong leadership are 2.5 times more likely to finish on time and within budget."
        },
        {
          id: 2,
          question: "Which leadership style focuses on inspiring teams toward a shared vision?",
          options: [
            "Transactional Leadership",
            "Servant Leadership",
            "Autocratic Leadership",
            "Transformational Leadership"
          ],
          correctAnswer: 3,
          explanation: "Transformational leaders inspire and motivate teams toward a shared vision and goals."
        },
        {
          id: 3,
          question: "What is the first step in stakeholder communication?",
          options: [
            "Reporting Systems",
            "Meeting Management",
            "Stakeholder Analysis",
            "Communication Planning"
          ],
          correctAnswer: 2,
          explanation: "Stakeholder analysis identifies all parties with an interest in the project."
        },
        {
          id: 4,
          question: "What are the five stages of team development?",
          options: [
            "Planning, Organizing, Implementing, Controlling, Closing",
            "Orientation, Conflict, Cooperation, Productivity, Termination",
            "Initiation, Planning, Execution, Monitoring, Closure",
            "Forming, Storming, Norming, Performing, Adjourning"
          ],
          correctAnswer: 3,
          explanation: "Tuckman's stages are: Forming, Storming, Norming, Performing, and Adjourning."
        },
        {
          id: 5,
          question: "What type of decision-making uses systematic analysis of alternatives?",
          options: [
            "Participative Decision Making",
            "Intuitive Decision Making",
            "Rational Decision Making",
            "Bounded Rationality"
          ],
          correctAnswer: 2,
          explanation: "Rational decision making uses a systematic process to analyze alternatives and consequences."
        },
        {
          id: 6,
          question: "What evaluates an organization's preparedness for change?",
          options: [
            "Stakeholder Engagement",
            "Change Vision Development",
            "Communication Strategy",
            "Change Readiness Assessment"
          ],
          correctAnswer: 3,
          explanation: "Change readiness assessment evaluates how prepared an organization is for proposed changes."
        },
        {
          id: 7,
          question: "Which conflict resolution approach seeks win-win solutions?",
          options: [
            "Competition",
            "Negotiation",
            "Accommodation",
            "Avoidance"
          ],
          correctAnswer: 1,
          explanation: "Negotiation seeks mutually acceptable solutions that address interests of all parties."
        },
        {
          id: 8,
          question: "How many components of emotional intelligence were discussed?",
          options: [
            "Five",
            "Seven",
            "Four",
            "Six"
          ],
          correctAnswer: 0,
          explanation: "The five components are: Self-Awareness, Self-Regulation, Motivation, Empathy, and Social Skills."
        },
        {
          id: 9,
          question: "What is assigning appropriate tasks to team members called?",
          options: [
            "Delegation",
            "Assignment",
            "Distribution",
            "Allocation"
          ],
          correctAnswer: 0,
          explanation: "Delegation involves assigning tasks and authority to team members while maintaining accountability."
        },
        {
          id: 10,
          question: "What involves learning from experienced leaders?",
          options: [
            "Peer Networks",
            "Industry Involvement",
            "Training Programs",
            "Mentoring Relationships"
          ],
          correctAnswer: 3,
          explanation: "Mentoring involves learning from experienced leaders through guidance and advice."
        },
        {
          id: 11,
          question: "How many leadership styles were discussed?",
          options: [
            "Five",
            "Eight",
            "Seven",
            "Six"
          ],
          correctAnswer: 2,
          explanation: "The seven styles are: Transformational, Transactional, Servant, Situational, Autocratic, Democratic, and Laissez-faire."
        },
        {
          id: 12,
          question: "What is understanding before being understood called?",
          options: [
            "Reflective Practice",
            "Effective Communication",
            "Empathetic Response",
            "Active Listening"
          ],
          correctAnswer: 3,
          explanation: "Active listening involves fully concentrating on, understanding, and responding to the speaker."
        },
        {
          id: 13,
          question: "Which decision-making approach considers moral implications?",
          options: [
            "Ethical Decision Making",
            "Data-Driven Decision Making",
            "Risk-Based Decision Making",
            "Rational Decision Making"
          ],
          correctAnswer: 0,
          explanation: "Ethical decision making considers moral principles and implications of choices."
        },
        {
          id: 14,
          question: "What is creating a compelling case for change called?",
          options: [
            "Stakeholder Engagement",
            "Communication Strategy",
            "Change Vision Development",
            "Change Readiness Assessment"
          ],
          correctAnswer: 2,
          explanation: "Change vision development creates a compelling reason for change that motivates stakeholders."
        },
        {
          id: 15,
          question: "Which emotional intelligence component involves controlling responses?",
          options: [
            "Motivation",
            "Self-Regulation",
            "Empathy",
            "Self-Awareness"
          ],
          correctAnswer: 1,
          explanation: "Self-regulation involves controlling or redirecting disruptive emotions and impulses."
        },
        {
          id: 16,
          question: "What distinguishes urgent from important tasks?",
          options: [
            "Task Organization",
            "Time Management",
            "Priority Setting",
            "Schedule Planning"
          ],
          correctAnswer: 2,
          explanation: "Priority setting involves distinguishing between tasks that are urgent versus important."
        },
        {
          id: 17,
          question: "What involves learning from experience through reflection?",
          options: [
            "Skill Gap Analysis",
            "Peer Networks",
            "Training Programs",
            "Reflective Practice"
          ],
          correctAnswer: 3,
          explanation: "Reflective practice involves thinking about experiences to gain insights and improve future performance."
        },
        {
          id: 18,
          question: "Which ethical principle involves consistency between words and actions?",
          options: [
            "Integrity",
            "Accountability",
            "Fairness",
            "Transparency"
          ],
          correctAnswer: 0,
          explanation: "Integrity involves consistency between words and actions, and adherence to moral principles."
        },
        {
          id: 19,
          question: "What is quick decision-making under pressure called?",
          options: [
            "Crisis Preparedness",
            "Rapid Response",
            "Quick Resolution",
            "Emergency Management"
          ],
          correctAnswer: 1,
          explanation: "Rapid response involves making quick decisions during emergencies or crises."
        },
        {
          id: 20,
          question: "What creates an environment that encourages new ideas?",
          options: [
            "Creative Environment",
            "Innovation Culture",
            "Risk-Taking Support",
            "Idea Generation"
          ],
          correctAnswer: 1,
          explanation: "Innovation culture creates an organizational environment that encourages and supports new ideas."
        }
      ]
    },

    // MODULE 10: Capstone Project and Assessment
    {
      id: 10,
      title: "Capstone Project and Assessment",
      completed: false,
      content: `
# Module 10: Capstone Project and Assessment

## Comprehensive Construction Management Integration
This capstone module integrates all previous learning into a comprehensive construction management project. You will apply knowledge from all nine modules to develop a complete construction management plan for a hypothetical commercial building project.

### Project Overview
**Project Name:** GreenTech Office Building  
**Location:** Urban redevelopment site  
**Project Type:** 5-story commercial office building with ground-floor retail  
**Size:** 50,000 square feet  
**Budget:** $15 million  
**Schedule:** 18-month construction duration  
**Sustainability Goal:** LEED Platinum certification

### Project Requirements
Your comprehensive construction management plan must include:

1. **Project Initiation Document**
   - Project charter with objectives and success criteria
   - Stakeholder identification and analysis
   - Initial risk assessment and mitigation strategies
   - Regulatory requirements and permitting strategy

2. **Scope Management Plan**
   - Detailed work breakdown structure (WBS)
   - Scope verification and control procedures
   - Change management process and documentation
   - Interface management between different work packages

3. **Schedule Management Plan**
   - Master project schedule using Critical Path Method
   - Resource-loaded schedule with manpower planning
   - Schedule baseline and control procedures
   - Progress measurement and reporting system

4. **Cost Management Plan**
   - Detailed cost estimate with quantity takeoffs
   - Budget allocation across work packages
   - Cost control and variance analysis procedures
   - Cash flow projections and funding requirements

5. **Quality Management Plan**
   - Quality standards and specifications compliance matrix
   - Inspection and testing requirements schedule
   - Non-conformance management process
   - Quality control procedures for key work elements

6. **Safety Management Plan**
   - Site-specific safety program and procedures
   - Hazard identification and risk assessment
   - Emergency response and evacuation plans
   - Safety training requirements and schedule

7. **Contract and Procurement Plan**
   - Contract strategy and delivery method selection
   - Procurement schedule and bid package development
   - Subcontractor prequalification criteria
   - Contract administration procedures

8. **Sustainability Implementation Plan**
   - LEED Platinum certification strategy and point tracking
   - Sustainable material selection and procurement
   - Energy efficiency measures and renewable energy integration
   - Construction waste management and recycling program

9. **Technology Implementation Plan**
   - BIM execution plan and technology requirements
   - Construction technology tools and applications
   - Data management and communication systems
   - Training requirements for technology adoption

10. **Risk Management Plan**
    - Comprehensive risk register with mitigation strategies
    - Contingency planning and reserve allocation
    - Risk monitoring and control procedures
    - Insurance and bond requirements

11. **Stakeholder Communication Plan**
    - Stakeholder analysis and communication requirements
    - Meeting schedule and reporting requirements
    - Issue escalation and resolution procedures
    - Community relations and public communication strategy

12. **Project Closeout Plan**
    - Commissioning and handover procedures
    - Final documentation and as-built requirements
    - Warranty management and operations training
    - Lessons learned documentation process

### Deliverable Requirements
Your final submission must include:

1. **Executive Summary** (2-3 pages)
   - Project overview and key highlights
   - Major challenges and solutions
   - Summary of management approach
   - Key success factors and metrics

2. **Comprehensive Construction Management Plan** (40-50 pages)
   - Integrated document covering all planning elements
   - Clear organization with table of contents
   - Professional formatting and presentation
   - Appropriate use of tables, charts, and diagrams

3. **Supporting Documentation** (Appendices)
   - Detailed schedules in Gantt chart format
   - Cost estimate breakdown with quantities
   - Sample forms and templates
   - Reference documentation and calculations

### Assessment Criteria
Your capstone project will be evaluated based on:

1. **Comprehensiveness** (30%)
   - Coverage of all required planning elements
   - Integration across different management areas
   - Depth of analysis and detail

2. **Technical Accuracy** (30%)
   - Correct application of construction management principles
   - Appropriate use of industry standards and best practices
   - Accurate calculations and estimates

3. **Practical Applicability** (20%)
   - Realistic and implementable plans and procedures
   - Consideration of practical constraints and challenges
   - Workable solutions to potential problems

4. **Professional Presentation** (20%)
   - Clear organization and logical flow
   - Professional writing and communication
   - Effective use of visual aids and formatting
   - Proper citation of references and sources

### Learning Integration
This capstone requires you to integrate knowledge from all previous modules:

- **Modules 1-3:** Project fundamentals, planning, and cost management
- **Modules 4-5:** Safety, quality, contracts, and legal aspects
- **Modules 6-7:** Quality systems and construction technology
- **Modules 8-9:** Sustainability practices and leadership

### Professional Development
Successfully completing this capstone demonstrates your ability to:
- Develop comprehensive construction management plans
- Integrate multiple management disciplines
- Apply theoretical knowledge to practical situations
- Communicate complex information effectively
- Demonstrate readiness for construction management roles

### Submission Guidelines
- Submit all documents in PDF format
- Include your name and student ID on all documents
- Ensure all calculations are clearly shown
- Use professional construction management terminology
- Cite all references and sources appropriately
- Submit by the stated deadline through the course portal

### Resources and Support
Available resources for capstone completion:
- Course materials from all modules
- Industry standards and reference documents
- Sample templates and forms
- Instructor consultation hours
- Peer discussion forums
- Technical support for software tools
`,
      quiz: [
        {
          id: 1,
          question: "What is the project budget for the GreenTech Office Building?",
          options: [
            "$15 million",
            "$10 million",
            "$25 million",
            "$20 million"
          ],
          correctAnswer: 0,
          explanation: "The GreenTech Office Building has a budget of $15 million."
        },
        {
          id: 2,
          question: "What is the construction duration for the capstone project?",
          options: [
            "18 months",
            "30 months",
            "12 months",
            "24 months"
          ],
          correctAnswer: 0,
          explanation: "The project schedule calls for an 18-month construction duration."
        },
        {
          id: 3,
          question: "What LEED certification level is targeted?",
          options: [
            "LEED Platinum",
            "LEED Silver",
            "LEED Gold",
            "LEED Certified"
          ],
          correctAnswer: 0,
          explanation: "The project aims for LEED Platinum certification, the highest level."
        },
        {
          id: 4,
          question: "How many square feet is the GreenTech Office Building?",
          options: [
            "40,000 square feet",
            "50,000 square feet",
            "60,000 square feet",
            "75,000 square feet"
          ],
          correctAnswer: 1,
          explanation: "The building size is 50,000 square feet."
        },
        {
          id: 5,
          question: "Which document outlines project objectives and success criteria?",
          options: [
            "Project Charter",
            "Project Plan",
            "Scope Statement",
            "Business Case"
          ],
          correctAnswer: 0,
          explanation: "The project charter formally authorizes the project and outlines objectives and success criteria."
        },
        {
          id: 6,
          question: "What method should be used for the master project schedule?",
          options: [
            "Line of Balance",
            "Critical Path Method",
            "Gantt Chart",
            "PERT Chart"
          ],
          correctAnswer: 1,
          explanation: "The schedule should use Critical Path Method for determining project duration and critical activities."
        },
        {
          id: 7,
          question: "What percentage of the grade is based on comprehensiveness?",
          options: [
            "25%",
            "35%",
            "30%",
            "40%"
          ],
          correctAnswer: 2,
          explanation: "Comprehensiveness accounts for 30% of the capstone project grade."
        },
        {
          id: 8,
          question: "How many stories does the GreenTech Office Building have?",
          options: [
            "7 stories",
            "3 stories",
            "5 stories",
            "10 stories"
          ],
          correctAnswer: 2,
          explanation: "The building is a 5-story structure with ground-floor retail."
        },
        {
          id: 9,
          question: "What type of estimate requires detailed quantity takeoffs?",
          options: [
            "Order of Magnitude Estimate",
            "Preliminary Estimate",
            "Conceptual Estimate",
            "Detailed Cost Estimate"
          ],
          correctAnswer: 3,
          explanation: "Detailed cost estimates require comprehensive quantity takeoffs from construction documents."
        },
        {
          id: 10,
          question: "What should the safety plan include for hazard management?",
          options: [
            "Hazard identification and risk assessment",
            "Insurance requirements only",
            "Equipment specifications only",
            "Basic safety rules only"
          ],
          correctAnswer: 0,
          explanation: "A comprehensive safety plan includes hazard identification, risk assessment, and control measures."
        },
        {
          id: 11,
          question: "How many main sections should the comprehensive plan include?",
          options: [
            "8 sections",
            "10 sections",
            "15 sections",
            "12 sections"
          ],
          correctAnswer: 3,
          explanation: "The comprehensive plan should include 12 main sections covering all management areas."
        },
        {
          id: 12,
          question: "What does the scope management plan define?",
          options: [
            "Only schedule requirements",
            "Only project objectives",
            "Work breakdown structure and change control",
            "Only budget constraints"
          ],
          correctAnswer: 2,
          explanation: "Scope management defines the WBS and processes for verifying and controlling scope changes."
        },
        {
          id: 13,
          question: "What percentage is allocated to technical accuracy?",
          options: [
            "30%",
            "25%",
            "40%",
            "35%"
          ],
          correctAnswer: 0,
          explanation: "Technical accuracy accounts for 30% of the assessment criteria."
        },
        {
          id: 14,
          question: "Which plan addresses LEED certification strategy?",
          options: [
            "Quality Management Plan",
            "Technology Implementation Plan",
            "Sustainability Implementation Plan",
            "Risk Management Plan"
          ],
          correctAnswer: 2,
          explanation: "The Sustainability Implementation Plan addresses LEED certification and sustainable practices."
        },
        {
          id: 15,
          question: "What should the final submission format be?",
          options: [
            "Excel spreadsheet",
            "PowerPoint presentation",
            "Word document",
            "PDF format"
          ],
          correctAnswer: 3,
          explanation: "All documents should be submitted in PDF format for consistency and security."
        },
        {
          id: 16,
          question: "What does the project closeout plan include?",
          options: [
            "Only equipment removal",
            "Only site cleanup",
            "Only final payment processing",
            "Commissioning and handover procedures"
          ],
          correctAnswer: 3,
          explanation: "Closeout includes commissioning, documentation, training, and lessons learned."
        },
        {
          id: 17,
          question: "What percentage is for practical applicability?",
          options: [
            "15%",
            "20%",
            "25%",
            "30%"
          ],
          correctAnswer: 1,
          explanation: "Practical applicability accounts for 20% of the assessment criteria."
        },
        {
          id: 18,
          question: "Which plan addresses BIM execution?",
          options: [
            "Technology Implementation Plan",
            "Quality Management Plan",
            "Cost Management Plan",
            "Schedule Management Plan"
          ],
          correctAnswer: 0,
          explanation: "The Technology Implementation Plan addresses BIM and other construction technologies."
        },
        {
          id: 19,
          question: "What should the executive summary length be?",
          options: [
            "1 page only",
            "5-7 pages",
            "2-3 pages",
            "4-5 pages"
          ],
          correctAnswer: 2,
          explanation: "The executive summary should be concise at 2-3 pages."
        },
        {
          id: 20,
          question: "What does professional presentation account for?",
          options: [
            "20% of grade",
            "30% of grade",
            "15% of grade",
            "25% of grade"
          ],
          correctAnswer: 0,
          explanation: "Professional presentation accounts for 20% of the capstone assessment."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions)
  finalExam: [
    // Questions from Module 1
    {
      id: 1,
      moduleId: 1,
      question: "What are the four main sectors of the construction industry?",
      options: [
        "Residential, Commercial, Industrial, Infrastructure",
        "Building, Civil, Industrial, Environmental",
        "Public, Private, Commercial, Industrial",
        "Residential, Commercial, Public, Private"
      ],
      correctAnswer: 0,
      explanation: "The four main sectors are Residential, Commercial, Industrial, and Infrastructure construction."
    },
    {
      id: 2,
      moduleId: 1,
      question: "Which project delivery method involves a single entity handling both design and construction?",
      options: [
        "Design-Bid-Build",
        "Construction Management at Risk",
        "Integrated Project Delivery",
        "Design-Build"
      ],
      correctAnswer: 3,
      explanation: "Design-Build consolidates design and construction responsibilities under one contract with a single entity."
    },
    {
      id: 3,
      moduleId: 1,
      question: "What is the purpose of construction management?",
      options: [
        "To maximize subcontractor profits",
        "To minimize architectural changes",
        "To control project time, cost, and quality",
        "To reduce material costs exclusively"
      ],
      correctAnswer: 2,
      explanation: "Construction management focuses on controlling the three main constraints: time, cost, and quality."
    },
    {
      id: 4,
      moduleId: 1,
      question: "What does OSHA stand for?",
      options: [
        "Occupational Standards and Health Administration",
        "Operational Safety and Health Authority",
        "Occupational Safety and Health Administration",
        "Occupational Safety and Hazard Administration"
      ],
      correctAnswer: 2,
      explanation: "OSHA stands for Occupational Safety and Health Administration, the US agency that sets and enforces workplace safety standards."
    },

    // Questions from Module 2
    {
      id: 5,
      moduleId: 2,
      question: "What does WBS stand for in project planning?",
      options: [
        "Weekly Breakdown System",
        "Work Balance Sheet",
        "Work Building Schedule",
        "Work Breakdown Structure"
      ],
      correctAnswer: 3,
      explanation: "WBS stands for Work Breakdown Structure, a hierarchical decomposition of project work."
    },
    {
      id: 6,
      moduleId: 2,
      question: "What scheduling method identifies critical tasks that impact project duration?",
      options: [
        "Bar Chart Scheduling",
        "Critical Path Method",
        "Line of Balance",
        "Gantt Chart"
      ],
      correctAnswer: 1,
      explanation: "The Critical Path Method identifies tasks that directly affect project duration if delayed."
    },
    {
      id: 7,
      moduleId: 2,
      question: "What is adding resources to reduce activity duration called?",
      options: [
        "Crashing",
        "Fast-tracking",
        "Expediting",
        "Compressing"
      ],
      correctAnswer: 0,
      explanation: "Crashing involves adding resources to critical path activities to reduce their duration."
    },
    {
      id: 8,
      moduleId: 2,
      question: "What does EVM integrate for project performance measurement?",
      options: [
        "Scope, quality, and risk",
        "Scope, schedule, and cost",
        "Time, resources, and quality",
        "Quality, safety, and cost"
      ],
      correctAnswer: 1,
      explanation: "Earned Value Management integrates scope, schedule, and cost performance measurement."
    },

    // Questions from Module 3
    {
      id: 9,
      moduleId: 3,
      question: "What is the accuracy range for an Order of Magnitude estimate?",
      options: [
        "±15-20%",
        "±20-30%",
        "±10-15%",
        "±5-10%"
      ],
      correctAnswer: 1,
      explanation: "Order of Magnitude estimates are rough approximations with ±20-30% accuracy."
    },
    {
      id: 10,
      moduleId: 3,
      question: "Which contract type involves reimbursement of costs plus a fee?",
      options: [
        "Fixed Price Contracts",
        "GMP Contracts",
        "Cost-Plus Contracts",
        "Lump Sum Contracts"
      ],
      correctAnswer: 2,
      explanation: "Cost-plus contracts reimburse actual costs plus an agreed-upon fee to the contractor."
    },
    {
      id: 11,
      moduleId: 3,
      question: "What typical waste factor is applied to material quantities?",
      options: [
        "10-15%",
        "15-20%",
        "5-10%",
        "1-3%"
      ],
      correctAnswer: 2,
      explanation: "A 5-10% waste factor is typically added to account for material losses during construction."
    },
    {
      id: 12,
      moduleId: 3,
      question: "What is improving value without compromising function called?",
      options: [
        "Efficiency Analysis",
        "Value Engineering",
        "Budget Optimization",
        "Cost Cutting"
      ],
      correctAnswer: 1,
      explanation: "Value engineering seeks to improve value (function/cost) without reducing necessary functions."
    },

    // Questions from Module 4
    {
      id: 13,
      moduleId: 4,
      question: "What percentage of construction fatalities are caused by falls?",
      options: [
        "Approximately 25%",
        "Approximately 45%",
        "Approximately 55%",
        "Approximately 35%"
      ],
      correctAnswer: 3,
      explanation: "Falls account for approximately 35% of construction fatalities, making them the leading cause."
    },
    {
      id: 14,
      moduleId: 4,
      question: "What is the required capacity for fall arrest anchor points?",
      options: [
        "3,000 pounds",
        "2,500 pounds",
        "5,000 pounds",
        "1,500 pounds"
      ],
      correctAnswer: 2,
      explanation: "Anchor points for fall arrest systems must support 5,000 pounds per worker."
    },
    {
      id: 15,
      moduleId: 4,
      question: "At what trench depth are protective systems required?",
      options: [
        "8 feet or more",
        "6 feet or more",
        "4 feet or more",
        "5 feet or more"
      ],
      correctAnswer: 3,
      explanation: "Protective systems are required for trenches 5 feet deep or more to prevent cave-ins."
    },
    {
      id: 16,
      moduleId: 4,
      question: "What does GFCI stand for in electrical safety?",
      options: [
        "Ground-Failure Circuit Indicator",
        "Ground-Fault Circuit Interrupter",
        "General Fault Circuit Interrupter",
        "Ground-Fault Current Indicator"
      ],
      correctAnswer: 1,
      explanation: "GFCI stands for Ground-Fault Circuit Interrupter, which protects against electrical shocks."
    },

    // Questions from Module 5
    {
      id: 17,
      moduleId: 5,
      question: "Which AIA document contains general conditions for construction contracts?",
      options: [
        "A101",
        "A201",
        "B101",
        "A401"
      ],
      correctAnswer: 1,
      explanation: "AIA Document A201 contains the general conditions that govern most construction projects."
    },
    {
      id: 18,
      moduleId: 5,
      question: "What guarantees a contractor will complete the project?",
      options: [
        "Bid Bond",
        "Performance Bond",
        "Payment Bond",
        "Builder's Risk Insurance"
      ],
      correctAnswer: 1,
      explanation: "Performance bonds guarantee the contractor will complete the project according to contract terms."
    },
    {
      id: 19,
      moduleId: 5,
      question: "What dispute resolution method uses a neutral third party to assist negotiation?",
      options: [
        "Negotiation",
        "Litigation",
        "Mediation",
        "Arbitration"
      ],
      correctAnswer: 2,
      explanation: "Mediation involves a neutral third party facilitating negotiations between disputing parties."
    },
    {
      id: 20,
      moduleId: 5,
      question: "What provides a security interest in improved property for unpaid work?",
      options: [
        "Performance Bond",
        "Payment Bond",
        "Mechanic's Lien",
        "Stop Notice"
      ],
      correctAnswer: 2,
      explanation: "Mechanic's liens provide security interest in the property for unpaid labor or materials."
    },

    // Questions from Module 6
    {
      id: 21,
      moduleId: 6,
      question: "What is the typical cost of poor quality in construction projects?",
      options: [
        "15-25% of project value",
        "1-3% of project value",
        "5-15% of project value",
        "10-20% of project value"
      ],
      correctAnswer: 2,
      explanation: "The cost of poor quality typically ranges from 5-15% of total project value."
    },
    {
      id: 22,
      moduleId: 6,
      question: "Which organization provides concrete standards?",
      options: [
        "ANSI",
        "American Concrete Institute (ACI)",
        "ASTM International",
        "American Institute of Steel Construction"
      ],
      correctAnswer: 1,
      explanation: "The American Concrete Institute (ACI) develops standards for concrete construction."
    },
    {
      id: 23,
      moduleId: 6,
      question: "What are preventive measures to ensure quality called?",
      options: [
        "Quality Testing",
        "Quality Control",
        "Quality Inspection",
        "Quality Assurance"
      ],
      correctAnswer: 3,
      explanation: "Quality assurance focuses on preventive measures to ensure quality is built into processes."
    },
    {
      id: 24,
      moduleId: 6,
      question: "Which testing method measures concrete workability?",
      options: [
        "Setting Time Test",
        "Compressive Strength Test",
        "Air Content Test",
        "Slump Test"
      ],
      correctAnswer: 3,
      explanation: "The slump test measures the workability or consistency of fresh concrete."
    },

    // Questions from Module 7
    {
      id: 25,
      moduleId: 7,
      question: "What does BIM stand for?",
      options: [
        "Building Integration Method",
        "Business Information Modeling",
        "Basic Infrastructure Management",
        "Building Information Modeling"
      ],
      correctAnswer: 3,
      explanation: "BIM stands for Building Information Modeling, a digital representation of building characteristics."
    },
    {
      id: 26,
      moduleId: 7,
      question: "Which BIM dimension adds scheduling information?",
      options: [
        "3D",
        "5D",
        "6D",
        "4D"
      ],
      correctAnswer: 3,
      explanation: "4D BIM adds time/scheduling information to the 3D model."
    },
    {
      id: 27,
      moduleId: 7,
      question: "What is a virtual replica of a physical asset called?",
      options: [
        "Digital Twin",
        "Simulation Model",
        "BIM Model",
        "Virtual Model"
      ],
      correctAnswer: 0,
      explanation: "A Digital Twin is a virtual replica that synchronizes with its physical counterpart in real-time."
    },
    {
      id: 28,
      moduleId: 7,
      question: "What AI application forecasts project outcomes?",
      options: [
        "Predictive Analytics",
        "Schedule Optimization",
        "Risk Assessment",
        "Quality Control"
      ],
      correctAnswer: 0,
      explanation: "Predictive analytics uses AI to forecast project outcomes based on historical data."
    },

    // Questions from Module 8
    {
      id: 29,
      moduleId: 8,
      question: "What percentage of global energy consumption comes from buildings?",
      options: [
        "Approximately 60%",
        "Approximately 30%",
        "Approximately 40%",
        "Approximately 50%"
      ],
      correctAnswer: 2,
      explanation: "The building sector accounts for approximately 40% of global energy consumption."
    },
    {
      id: 30,
      moduleId: 8,
      question: "Which is the most widely used green building rating system?",
      options: [
        "Green Globes",
        "BREEAM",
        "WELL",
        "LEED"
      ],
      correctAnswer: 3,
      explanation: "LEED (Leadership in Energy and Environmental Design) is the most widely used system globally."
    },
    {
      id: 31,
      moduleId: 8,
      question: "What does FSC certification indicate for wood products?",
      options: [
        "Recycled content",
        "Regional sourcing",
        "Low VOC emissions",
        "Sustainable forest management"
      ],
      correctAnswer: 3,
      explanation: "FSC certification indicates wood comes from sustainably managed forests."
    },
    {
      id: 32,
      moduleId: 8,
      question: "What analyzes environmental impacts from raw material to disposal?",
      options: [
        "Sustainability Audit",
        "Environmental Impact Statement",
        "Energy Modeling",
        "Life Cycle Assessment"
      ],
      correctAnswer: 3,
      explanation: "Life Cycle Assessment evaluates environmental impacts throughout a product's entire life."
    },

    // Questions from Module 9
    {
      id: 33,
      moduleId: 9,
      question: "How much more likely are well-led projects to finish on time and budget?",
      options: [
        "3 times more likely",
        "1.5 times more likely",
        "2.5 times more likely",
        "2 times more likely"
      ],
      correctAnswer: 2,
      explanation: "Projects with strong leadership are 2.5 times more likely to finish on time and within budget."
    },
    {
      id: 34,
      moduleId: 9,
      question: "Which leadership style focuses on inspiring teams toward a shared vision?",
      options: [
        "Autocratic Leadership",
        "Transformational Leadership",
        "Transactional Leadership",
        "Servant Leadership"
      ],
      correctAnswer: 1,
      explanation: "Transformational leaders inspire and motivate teams toward a shared vision and goals."
    },
    {
      id: 35,
      moduleId: 9,
      question: "What are the five stages of team development?",
      options: [
        "Forming, Storming, Norming, Performing, Adjourning",
        "Orientation, Conflict, Cooperation, Productivity, Termination",
        "Initiation, Planning, Execution, Monitoring, Closure",
        "Planning, Organizing, Implementing, Controlling, Closing"
      ],
      correctAnswer: 0,
      explanation: "Tuckman's stages are: Forming, Storming, Norming, Performing, and Adjourning."
    },
    {
      id: 36,
      moduleId: 9,
      question: "What is understanding before being understood called?",
      options: [
        "Active Listening",
        "Effective Communication",
        "Reflective Practice",
        "Empathetic Response"
      ],
      correctAnswer: 0,
      explanation: "Active listening involves fully concentrating on, understanding, and responding to the speaker."
    },

    // Questions from Module 10
    {
      id: 37,
      moduleId: 10,
      question: "What is the project budget for the GreenTech Office Building capstone project?",
      options: [
        "$10 million",
        "$20 million",
        "$25 million",
        "$15 million"
      ],
      correctAnswer: 3,
      explanation: "The GreenTech Office Building has a budget of $15 million."
    },
    {
      id: 38,
      moduleId: 10,
      question: "What LEED certification level is targeted in the capstone project?",
      options: [
        "LEED Silver",
        "LEED Certified",
        "LEED Platinum",
        "LEED Gold"
      ],
      correctAnswer: 2,
      explanation: "The project aims for LEED Platinum certification, the highest level."
    },
    {
      id: 39,
      moduleId: 10,
      question: "What method should be used for the master project schedule in the capstone?",
      options: [
        "PERT Chart",
        "Line of Balance",
        "Gantt Chart",
        "Critical Path Method"
      ],
      correctAnswer: 3,
      explanation: "The schedule should use Critical Path Method for determining project duration."
    },
    {
      id: 40,
      moduleId: 10,
      question: "What percentage of the capstone grade is based on technical accuracy?",
      options: [
        "25%",
        "30%",
        "40%",
        "35%"
      ],
      correctAnswer: 1,
      explanation: "Technical accuracy accounts for 30% of the capstone project assessment."
    }
  ]
};
