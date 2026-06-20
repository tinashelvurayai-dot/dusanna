export const financialManagementDiplomaCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "financial-management-diploma",
  title: "Financial Management (Diploma)",
  description: "Advanced financial management course for professionals seeking to master corporate finance, investment analysis, risk management, and strategic financial decision-making. Builds on accounting knowledge with comprehensive financial management principles.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "QuickBooks Accounting (Certificate) or equivalent",
  icon: "💰",
  badge: "Diploma",
  fastTrack: true,
  
  // 2. MODULE ARCHITECTURE - 10 Modules (Certificate holders fast-track first 4)
  modules: [
    {
      id: 1,
      title: "Advanced Financial Analysis",
      completed: false,
      fastTrack: true,
      content: `# Mastering Financial Statement Analysis

## Beyond Basic Financial Statements
Financial analysis involves interpreting financial statements to understand business performance, identify trends, and make informed decisions. Advanced analysis moves beyond surface-level review to deep insights.

## Financial Ratio Analysis Framework
Comprehensive ratio analysis includes:

### Liquidity Ratios
- **Current Ratio** - Current assets ÷ Current liabilities
- **Quick Ratio** - (Current assets - Inventory) ÷ Current liabilities
- **Cash Ratio** - Cash ÷ Current liabilities
- **Operating Cash Flow Ratio** - Cash from operations ÷ Current liabilities
- **Interpretation** - Assess ability to meet short-term obligations

### Solvency Ratios
- **Debt-to-Equity Ratio** - Total liabilities ÷ Shareholders' equity
- **Debt-to-Assets Ratio** - Total liabilities ÷ Total assets
- **Equity Ratio** - Shareholders' equity ÷ Total assets
- **Interest Coverage Ratio** - EBIT ÷ Interest expense
- **Interpretation** - Assess long-term financial stability

### Profitability Ratios
- **Gross Profit Margin** - Gross profit ÷ Revenue
- **Operating Profit Margin** - Operating income ÷ Revenue
- **Net Profit Margin** - Net income ÷ Revenue
- **Return on Assets (ROA)** - Net income ÷ Total assets
- **Return on Equity (ROE)** - Net income ÷ Shareholders' equity
- **Interpretation** - Assess earning efficiency

### Efficiency Ratios
- **Inventory Turnover** - Cost of goods sold ÷ Average inventory
- **Accounts Receivable Turnover** - Revenue ÷ Average accounts receivable
- **Accounts Payable Turnover** - Purchases ÷ Average accounts payable
- **Asset Turnover** - Revenue ÷ Total assets
- **Interpretation** - Assess asset utilization efficiency

### Market Value Ratios
- **Price-to-Earnings (P/E)** - Market price per share ÷ Earnings per share
- **Price-to-Book (P/B)** - Market price per share ÷ Book value per share
- **Dividend Yield** - Dividends per share ÷ Market price per share
- **Earnings Yield** - Earnings per share ÷ Market price per share
- **Interpretation** - Assess market perception

## Common-Size Analysis
Standardizing financial statements:
- **Vertical Analysis** - Each item as percentage of total (Revenue for income statement, Total assets for balance sheet)
- **Horizontal Analysis** - Year-over-year percentage changes
- **Cross-sectional Analysis** - Comparing to industry peers
- **Trend Analysis** - Multi-period performance patterns
- **Benchmark Analysis** - Comparing to industry standards

## Cash Flow Analysis Techniques
Advanced cash flow assessment:
- **Free Cash Flow Calculation** - Operating cash flow - Capital expenditures
- **Cash Flow Adequacy Ratio** - Cash from operations ÷ Capital expenditures + Dividends
- **Cash Reinvestment Ratio** - (Cash from operations - Dividends) ÷ Gross fixed assets
- **Operating Cash Flow to Sales** - Cash from operations ÷ Revenue
- **Quality of Earnings Analysis** - Comparing cash flow to net income

## DuPont Analysis
Decomposing return on equity:
- **Three-component model** - ROE = Net profit margin × Asset turnover × Equity multiplier
- **Five-component model** - Further breakdown of components
- **Analysis application** - Identifying drivers of ROE changes
- **Comparative analysis** - Comparing company performance to industry
- **Strategic implications** - Identifying improvement areas

## Forecasting Financial Statements
Projecting future performance:
- **Percentage of Sales Method** - Key items as percentage of projected sales
- **Regression Analysis** - Statistical relationship modeling
- **Time Series Analysis** - Historical pattern projection
- **Pro Forma Statements** - Projected financial statements
- **Sensitivity Analysis** - Testing different assumptions

## Credit Analysis
Assessing creditworthiness:
- **5 Cs of Credit** - Character, Capacity, Capital, Collateral, Conditions
- **Credit Scoring Models** - Quantitative assessment systems
- **Bankruptcy Prediction Models** - Altman Z-score, Ohlson O-score
- **Bond Rating Analysis** - Understanding rating agency criteria
- **Credit Risk Assessment** - Probability of default analysis

## Valuation Ratios
Assessing company value:
- **Enterprise Value Ratios** - EV/EBITDA, EV/Sales, EV/EBIT
- **Growth-adjusted Ratios** - PEG ratio (P/E ÷ Earnings growth rate)
- **Replacement Value Analysis** - Cost to replace assets
- **Liquidation Value Analysis** - Value in forced sale scenario
- **Going Concern Value** - Value as operating business

## Quality of Earnings Assessment
Evaluating earnings reliability:
- **Accruals Analysis** - Comparing cash flows to accrual earnings
- **Revenue Recognition Analysis** - Assessing revenue quality
- **Expense Recognition Analysis** - Assessing expense timing
- **Reserve Analysis** - Evaluating adequacy of reserves
- **One-time Items Analysis** - Identifying non-recurring items

## Industry-Specific Analysis
Tailoring analysis to industries:
- **Retail Industry** - Inventory turnover, same-store sales, gross margin
- **Manufacturing Industry** - Capacity utilization, production efficiency
- **Service Industry** - Employee productivity, client retention
- **Technology Industry** - R&D intensity, customer acquisition cost
- **Financial Industry** - Net interest margin, loan loss provisions

## Financial Statement Manipulation Detection
Identifying potential manipulation:
- **Red Flags** - Unusual ratios or trends
- **Benford's Law Application** - Statistical analysis of numbers
- **Related Party Transactions** - Assessing potential conflicts
- **Off-Balance Sheet Items** - Identifying hidden obligations
- **Aggressive Accounting Practices** - Recognizing borderline practices

## Integrated Financial Analysis
Comprehensive assessment approach:
- **SWOT Analysis Integration** - Combining financial with strategic analysis
- **Competitive Analysis Integration** - Comparing to competitors
- **Economic Analysis Integration** - Considering macroeconomic factors
- **Industry Analysis Integration** - Understanding industry dynamics
- **Management Assessment Integration** - Evaluating management quality

## Financial Analysis Reporting
Communicating analysis results:
- **Executive Summary** - Key findings and recommendations
- **Supporting Analysis** - Detailed calculations and assumptions
- **Visual Presentation** - Charts, graphs, and dashboards
- **Risk Assessment** - Identification of key risks
- **Actionable Recommendations** - Specific improvement suggestions

## Advanced Analytical Tools
Technology-enhanced analysis:
- **Financial Analysis Software** - Specialized analysis tools
- **Business Intelligence Platforms** - Integrated data analysis
- **Predictive Analytics** - Statistical forecasting models
- **Data Visualization Tools** - Advanced presentation of analysis
- **Automated Ratio Calculators** - Streamlined calculation tools`,
      quiz: [
        {
          id: 1,
          question: "What does the current ratio measure?",
          options: [
            "Short-term liquidity and ability to pay current obligations",
            "Asset utilization",
            "Profitability efficiency",
            "Long-term debt capacity"
          ],
          correctAnswer: 0,
          explanation: "The current ratio measures a company's ability to pay short-term obligations by comparing current assets to current liabilities."
        },
        {
          id: 2,
          question: "What is the formula for Return on Equity (ROE)?",
          options: [
            "Gross profit ÷ Revenue",
            "Net income ÷ Total assets",
            "Net income ÷ Shareholders' equity",
            "Revenue ÷ Total assets"
          ],
          correctAnswer: 2,
          explanation: "ROE measures how effectively a company uses shareholders' equity to generate profits: Net income ÷ Shareholders' equity."
        },
        {
          id: 3,
          question: "What does the debt-to-equity ratio indicate?",
          options: [
            "Financial leverage and reliance on debt financing",
            "Short-term liquidity",
            "Inventory efficiency",
            "Profit margin"
          ],
          correctAnswer: 0,
          explanation: "Debt-to-equity ratio shows the proportion of debt used relative to shareholders' equity, indicating financial leverage."
        },
        {
          id: 4,
          question: "What is vertical analysis?",
          options: [
            "Expressing each financial statement item as percentage of a base amount",
            "Market analysis",
            "Industry comparison",
            "Comparing to previous years"
          ],
          correctAnswer: 0,
          explanation: "Vertical analysis expresses each item on a financial statement as a percentage of a base amount (revenue for income statement, total assets for balance sheet)."
        },
        {
          id: 5,
          question: "What does free cash flow measure?",
          options: [
            "Cash available after capital expenditures for expansion, dividends, or debt reduction",
            "Investment cash only",
            "Operating cash only",
            "Total cash generated"
          ],
          correctAnswer: 0,
          explanation: "Free cash flow = Operating cash flow - Capital expenditures, showing cash available for expansion, dividends, or debt reduction."
        },
        {
          id: 6,
          question: "What is DuPont analysis?",
          options: [
            "Market ratio analysis",
            "Single ratio analysis",
            "Breaking down ROE into components to understand performance drivers",
            "Cash flow analysis"
          ],
          correctAnswer: 2,
          explanation: "DuPont analysis decomposes ROE into profit margin, asset turnover, and financial leverage components to identify performance drivers."
        },
        {
          id: 7,
          question: "What are the 5 Cs of credit analysis?",
          options: [
            "Cash, capital, collateral, credit, coverage",
            "Cost, credit, cash, collateral, coverage",
            "Character, capacity, capital, collateral, conditions",
            "Capital, cash, character, cost, conditions"
          ],
          correctAnswer: 2,
          explanation: "The 5 Cs framework assesses creditworthiness: Character (reputation), Capacity (ability to repay), Capital (investment), Collateral (security), Conditions (economic)."
        },
        {
          id: 8,
          question: "What does inventory turnover measure?",
          options: [
            "Inventory age",
            "How quickly inventory is sold and replaced during a period",
            "Storage efficiency",
            "Inventory value"
          ],
          correctAnswer: 1,
          explanation: "Inventory turnover = Cost of goods sold ÷ Average inventory, measuring how efficiently inventory is managed and sold."
        },
        {
          id: 9,
          question: "What is pro forma financial statement?",
          options: [
            "Projected financial statement based on assumptions and forecasts",
            "Historical statement",
            "Audited statement",
            "Simplified statement"
          ],
          correctAnswer: 0,
          explanation: "Pro forma statements are financial projections based on assumptions about future performance and conditions."
        },
        {
          id: 10,
          question: "What does the quick ratio exclude from current assets?",
          options: [
            "Accounts receivable",
            "Marketable securities",
            "Cash",
            "Inventory (less liquid current asset)"
          ],
          correctAnswer: 3,
          explanation: "Quick ratio excludes inventory from current assets because inventory is less liquid and may not be quickly convertible to cash."
        },
        {
          id: 11,
          question: "What is horizontal analysis?",
          options: [
            "Comparing financial data across multiple time periods",
            "Vertical percentage analysis",
            "Cross-sectional analysis",
            "Industry comparison"
          ],
          correctAnswer: 0,
          explanation: "Horizontal analysis compares financial statement items across multiple periods to identify trends and growth patterns."
        },
        {
          id: 12,
          question: "What does P/E ratio indicate?",
          options: [
            "How much investors pay per dollar of earnings",
            "Profit efficiency",
            "Asset value",
            "Liquidity position"
          ],
          correctAnswer: 0,
          explanation: "P/E ratio = Market price per share ÷ Earnings per share, indicating how much investors pay for each dollar of earnings."
        },
        {
          id: 13,
          question: "What is enterprise value?",
          options: [
            "Total company value including debt and excluding cash",
            "Book value only",
            "Asset value only",
            "Market capitalization only"
          ],
          correctAnswer: 0,
          explanation: "Enterprise value = Market capitalization + Debt - Cash, representing total company value from all investors' perspective."
        },
        {
          id: 14,
          question: "What does asset turnover measure?",
          options: [
            "Asset age",
            "Revenue generated per dollar of assets",
            "Asset profitability",
            "Asset value"
          ],
          correctAnswer: 1,
          explanation: "Asset turnover = Revenue ÷ Total assets, measuring how efficiently a company uses assets to generate sales."
        },
        {
          id: 15,
          question: "What is quality of earnings analysis?",
          options: [
            "Only profit level",
            "Revenue amount only",
            "Assessing reliability and sustainability of reported earnings",
            "Expense analysis only"
          ],
          correctAnswer: 2,
          explanation: "Quality of earnings analysis evaluates how reliable, sustainable, and conservative reported earnings are, often comparing cash flows to accrual earnings."
        },
        {
          id: 16,
          question: "What does interest coverage ratio measure?",
          options: [
            "Debt levels",
            "Loan amounts",
            "Interest rates",
            "Ability to pay interest expenses from operating earnings"
          ],
          correctAnswer: 3,
          explanation: "Interest coverage ratio = EBIT ÷ Interest expense, measuring how easily a company can pay interest on outstanding debt."
        },
        {
          id: 17,
          question: "What is common-size income statement?",
          options: [
            "Small statement",
            "Income statement with all items expressed as percentages of revenue",
            "Simple statement",
            "Basic statement"
          ],
          correctAnswer: 1,
          explanation: "Common-size income statement expresses each item as a percentage of total revenue, facilitating comparison across companies and periods."
        },
        {
          id: 18,
          question: "What does accounts receivable turnover measure?",
          options: [
            "How quickly credit sales are collected",
            "Sales volume",
            "Customer credit",
            "Customer count"
          ],
          correctAnswer: 0,
          explanation: "Accounts receivable turnover = Revenue ÷ Average accounts receivable, measuring how efficiently credit sales are collected."
        },
        {
          id: 19,
          question: "What is Altman Z-score used for?",
          options: [
            "Profit forecasting",
            "Market analysis",
            "Predicting probability of bankruptcy",
            "Credit scoring"
          ],
          correctAnswer: 2,
          explanation: "Altman Z-score is a multivariate formula using financial ratios to predict the probability of corporate bankruptcy."
        },
        {
          id: 20,
          question: "What does operating cash flow to sales ratio indicate?",
          options: [
            "Cash generated from operations relative to sales revenue",
            "Operating profit",
            "Cash balance",
            "Sales volume"
          ],
          correctAnswer: 0,
          explanation: "Operating cash flow to sales = Cash from operations ÷ Revenue, indicating cash generation efficiency relative to sales."
        }
      ]
    },
    {
      id: 2,
      title: "Corporate Finance and Capital Budgeting",
      completed: false,
      fastTrack: true,
      content: `# Strategic Investment Decision Making

## Capital Budgeting Fundamentals
Capital budgeting involves evaluating and selecting long-term investment projects that align with corporate strategy and create shareholder value.

## Time Value of Money Concepts
Foundational principles:
- **Future Value (FV)** - Value of money at future date with interest
- **Present Value (PV)** - Current value of future cash flows
- **Discount Rate** - Rate used to calculate present value
- **Compounding** - Earning interest on interest
- **Annuities** - Series of equal payments over time
- **Perpetuities** - Infinite series of equal payments

## Capital Budgeting Techniques
Methods for evaluating investments:

### Non-Discounted Cash Flow Methods
- **Payback Period** - Time to recover initial investment
- **Accounting Rate of Return** - Average accounting profit ÷ Average investment
- **Advantages** - Simple, easy to understand
- **Limitations** - Ignores time value of money, cash flows after payback

### Discounted Cash Flow Methods
- **Net Present Value (NPV)** - Present value of cash inflows minus initial investment
- **Internal Rate of Return (IRR)** - Discount rate that makes NPV zero
- **Profitability Index** - Present value of future cash flows ÷ Initial investment
- **Modified IRR (MIRR)** - Addresses IRR reinvestment assumption issues
- **Advantages** - Considers time value of money, all cash flows

## Net Present Value Analysis
Detailed NPV assessment:
- **Cash Flow Estimation** - Forecasting project cash flows
- **Discount Rate Determination** - Appropriate rate for risk level
- **NPV Calculation** - Sum of discounted cash flows minus investment
- **Decision Rule** - Accept if NPV > 0, reject if NPV < 0
- **Sensitivity Analysis** - Testing NPV under different assumptions

## Internal Rate of Return Analysis
Understanding IRR:
- **IRR Calculation** - Finding discount rate where NPV = 0
- **Decision Rule** - Accept if IRR > required rate of return
- **Multiple IRR Problem** - Projects with alternating cash flows
- **Reinvestment Rate Assumption** - IRR assumes reinvestment at IRR rate
- **Comparison with NPV** - Potential conflicts between IRR and NPV

## Capital Rationing
When capital is limited:
- **Soft Rationing** - Internal limits on capital spending
- **Hard Rationing** - External capital market constraints
- **Profitability Index Use** - Ranking projects when capital limited
- **Linear Programming** - Mathematical optimization for capital allocation
- **Strategic Considerations** - Aligning with corporate strategy

## Risk Analysis in Capital Budgeting
Incorporating risk assessment:
- **Risk-Adjusted Discount Rates** - Higher rates for riskier projects
- **Certainty Equivalents** - Adjusting cash flows for risk
- **Scenario Analysis** - Evaluating best, worst, most likely cases
- **Sensitivity Analysis** - Changing one variable at a time
- **Simulation Analysis** - Monte Carlo simulation of multiple variables
- **Decision Trees** - Modeling sequential decisions and outcomes

## Real Options in Capital Budgeting
Incorporating flexibility value:
- **Option to Expand** - Value of future growth opportunities
- **Option to Abandon** - Value of exit flexibility
- **Option to Delay** - Value of waiting for more information
- **Option to Switch** - Value of operational flexibility
- **Valuation Methods** - Binomial models, Black-Scholes adaptation

## Cost of Capital
Determining appropriate discount rates:

### Cost of Debt
- **After-tax Cost** - Interest rate × (1 - Tax rate)
- **Yield to Maturity** - Market-based debt cost
- **Credit Spread** - Additional cost for credit risk
- **Issuance Costs** - Flotation costs consideration

### Cost of Equity
- **Capital Asset Pricing Model (CAPM)** - Risk-free rate + Beta × Market risk premium
- **Dividend Discount Model** - (Dividends per share ÷ Stock price) + Growth rate
- **Bond Yield Plus Risk Premium** - Debt cost + Equity risk premium
- **Multi-factor Models** - Additional risk factors beyond market

### Weighted Average Cost of Capital (WACC)
- **Formula** - (E/V × Re) + (D/V × Rd × (1 - Tc))
- **Components** - Proportion of equity and debt, respective costs
- **Application** - Discount rate for projects with similar risk to firm
- **Limitations** - Assumes constant capital structure, business risk

## Capital Structure Decisions
Determining debt-equity mix:
- **Trade-off Theory** - Balancing tax benefits against bankruptcy costs
- **Pecking Order Theory** - Preference for internal financing, then debt, then equity
- **Market Timing Theory** - Issuing equity when prices high, repurchasing when low
- **Agency Costs** - Conflicts between managers and shareholders
- **Signaling Theory** - What financing decisions communicate to market

## Dividend Policy
Determining distribution to shareholders:
- **Dividend Irrelevance Theory** - Modigliani-Miller proposition
- **Bird-in-Hand Theory** - Investors prefer certain dividends
- **Tax Preference Theory** - Investors prefer capital gains to dividends
- **Clientele Effect** - Different investor preferences
- **Signaling Effect** - Dividends as signals of future prospects
- **Agency Costs** - Dividends reducing free cash flow problems

## Working Capital Management
Managing short-term assets and liabilities:
- **Cash Management** - Optimal cash balance determination
- **Inventory Management** - Economic order quantity, just-in-time
- **Accounts Receivable Management** - Credit policy optimization
- **Accounts Payable Management** - Payment timing optimization
- **Working Capital Financing** - Short-term financing strategies

## Lease vs Buy Decisions
Evaluating acquisition alternatives:
- **Operating Leases** - Short-term, cancelable leases
- **Capital Leases** - Long-term, non-cancelable leases
- **Financial Analysis** - Comparing present value of lease payments to purchase cost
- **Tax Considerations** - Different tax treatment for leases vs purchases
- **Balance Sheet Impact** - Different accounting treatment

## Mergers and Acquisitions Analysis
Evaluating combination opportunities:
- **Synergy Valuation** - Estimating value creation from combination
- **Acquisition Premium** - Price paid above market value
- **Payment Method Analysis** - Cash vs stock consideration
- **Post-Merger Integration** - Realizing projected synergies
- **Defensive Strategies** - Poison pills, golden parachutes

## International Capital Budgeting
Cross-border investment analysis:
- **Exchange Rate Risk** - Currency fluctuation impact
- **Political Risk** - Country stability considerations
- **Tax Considerations** - Different international tax regimes
- **Repatriation Restrictions** - Limits on returning profits
- **Cost of Capital Adjustments** - Different country risks

## Capital Budgeting in Practice
Real-world implementation:
- **Capital Budgeting Process** - From proposal to post-audit
- **Post-Completion Audit** - Comparing actual to projected results
- **Organizational Issues** - Agency problems, managerial incentives
- **Behavioral Considerations** - Managerial overconfidence, escalation of commitment
- **Ethical Considerations** - Project evaluation integrity

## Advanced Valuation Techniques
Sophisticated valuation methods:
- **Adjusted Present Value (APV)** - Separating project value from financing effects
- **Economic Value Added (EVA)** - Measuring economic profit
- **Real Options Valuation** - Quantifying flexibility value
- **Monte Carlo Simulation** - Probabilistic cash flow modeling
- **Decision Tree Analysis** - Sequential decision modeling

## Capital Budgeting Software Tools
Technology applications:
- **Financial Modeling Software** - Excel-based modeling tools
- **Specialized Capital Budgeting Software** - Dedicated analysis tools
- **Risk Analysis Software** - Monte Carlo simulation tools
- **Real Options Software** - Option pricing applications
- **Integrated ERP Systems** - Capital budgeting modules`,
      quiz: [
        {
          id: 1,
          question: "What is capital budgeting?",
          options: [
            "Daily expense management",
            "Short-term spending planning",
            "Working capital management",
            "Process of evaluating and selecting long-term investment projects"
          ],
          correctAnswer: 3,
          explanation: "Capital budgeting involves analyzing and deciding on long-term investments in projects, equipment, or other assets."
        },
        {
          id: 2,
          question: "What does Net Present Value (NPV) measure?",
          options: [
            "Payback period",
            "Average return",
            "Total project cost",
            "Present value of future cash flows minus initial investment"
          ],
          correctAnswer: 3,
          explanation: "NPV calculates the present value of all future cash inflows minus the initial investment, measuring project value in today's dollars."
        },
        {
          id: 3,
          question: "What is the time value of money?",
          options: [
            "Money supply",
            "Money timing",
            "Currency value",
            "Concept that money available now is worth more than same amount in future"
          ],
          correctAnswer: 3,
          explanation: "Time value of money recognizes that money available today can earn interest and thus is worth more than the same amount in the future."
        },
        {
          id: 4,
          question: "What is Internal Rate of Return (IRR)?",
          options: [
            "Interest rate",
            "Discount rate that makes NPV of project equal to zero",
            "Loan rate",
            "Inflation rate"
          ],
          correctAnswer: 1,
          explanation: "IRR is the discount rate at which the present value of future cash flows equals the initial investment (NPV = 0)."
        },
        {
          id: 5,
          question: "What does payback period measure?",
          options: [
            "Project life",
            "Time required to recover initial investment from cash flows",
            "Total profit",
            "Return rate"
          ],
          correctAnswer: 1,
          explanation: "Payback period calculates how long it takes for a project's cash flows to repay the initial investment."
        },
        {
          id: 6,
          question: "What is WACC?",
          options: [
            "Wealth accumulation cost",
            "Working capital cost",
            "Wage cost",
            "Weighted Average Cost of Capital - average rate firm pays for financing"
          ],
          correctAnswer: 3,
          explanation: "WACC is the average rate a company expects to pay to finance its assets, weighted by proportion of each financing source."
        },
        {
          id: 7,
          question: "What is sensitivity analysis in capital budgeting?",
          options: [
            "Market sensitivity",
            "Price sensitivity",
            "Employee sensitivity",
            "Testing how NPV changes when one assumption is varied"
          ],
          correctAnswer: 3,
          explanation: "Sensitivity analysis examines how changes in one input variable (like sales growth) affect the project's NPV."
        },
        {
          id: 8,
          question: "What are real options?",
          options: [
            "Stock options",
            "Real estate options",
            "Contract options",
            "Managerial flexibilities in investment decisions that create value"
          ],
          correctAnswer: 3,
          explanation: "Real options are opportunities to adjust investment decisions (expand, delay, abandon) that add value beyond basic NPV analysis."
        },
        {
          id: 9,
          question: "What is capital rationing?",
          options: [
            "Capital allocation",
            "Situation where capital is limited and not all positive NPV projects can be funded",
            "Capital abundance",
            "Capital distribution"
          ],
          correctAnswer: 1,
          explanation: "Capital rationing occurs when a company has limited funds and must choose between competing positive NPV projects."
        },
        {
          id: 10,
          question: "What does profitability index measure?",
          options: [
            "Total profit",
            "Profit margin",
            "Present value of benefits per dollar of investment",
            "Return percentage"
          ],
          correctAnswer: 2,
          explanation: "Profitability index = Present value of future cash flows ÷ Initial investment, showing value created per investment dollar."
        },
        {
          id: 11,
          question: "What is scenario analysis?",
          options: [
            "Single outcome analysis",
            "Evaluating NPV under different possible future scenarios",
            "Historical analysis",
            "Competitor analysis"
          ],
          correctAnswer: 1,
          explanation: "Scenario analysis evaluates project NPV under different sets of assumptions (best case, worst case, most likely case)."
        },
        {
          id: 12,
          question: "What is Monte Carlo simulation?",
          options: [
            "Using random sampling to model probability distributions of outcomes",
            "Historical simulation",
            "Gambling analysis",
            "Simple calculation"
          ],
          correctAnswer: 0,
          explanation: "Monte Carlo simulation uses random sampling from probability distributions to model uncertainty in capital budgeting variables."
        },
        {
          id: 13,
          question: "What is the CAPM formula for cost of equity?",
          options: [
            "Interest rate + Premium",
            "Risk-free rate + (Beta × Market risk premium)",
            "Dividend yield + Growth",
            "Risk-free rate + Beta"
          ],
          correctAnswer: 1,
          explanation: "CAPM: Cost of equity = Risk-free rate + Beta × (Market return - Risk-free rate), where market risk premium = Market return - Risk-free rate."
        },
        {
          id: 14,
          question: "What is the trade-off theory of capital structure?",
          options: [
            "Always use equity",
            "Balancing tax benefits of debt against costs of financial distress",
            "Always use debt",
            "No optimal structure"
          ],
          correctAnswer: 1,
          explanation: "Trade-off theory suggests firms balance tax advantages of debt against bankruptcy costs to determine optimal capital structure."
        },
        {
          id: 15,
          question: "What are agency costs in capital budgeting?",
          options: [
            "Insurance costs",
            "Management fees",
            "Costs arising from conflicts between managers and shareholders",
            "Administrative costs"
          ],
          correctAnswer: 2,
          explanation: "Agency costs result from conflicts where managers may not act in shareholders' best interests in investment decisions."
        },
        {
          id: 16,
          question: "What is modified IRR (MIRR)?",
          options: [
            "Real IRR",
            "IRR that assumes reinvestment at cost of capital rather than IRR",
            "Simple IRR",
            "Multiple IRR"
          ],
          correctAnswer: 1,
          explanation: "MIRR addresses IRR's unrealistic reinvestment assumption by assuming cash flows are reinvested at the cost of capital."
        },
        {
          id: 17,
          question: "What is economic value added (EVA)?",
          options: [
            "Market value",
            "Net operating profit after taxes minus capital charge",
            "Accounting profit",
            "Cash flow"
          ],
          correctAnswer: 1,
          explanation: "EVA = NOPAT - (Capital × Cost of capital), measuring economic profit after deducting cost of all capital used."
        },
        {
          id: 18,
          question: "What is pecking order theory?",
          options: [
            "Equity only",
            "Firms prefer internal financing, then debt, then equity",
            "Debt only",
            "Random financing"
          ],
          correctAnswer: 1,
          explanation: "Pecking order theory suggests firms prefer internal funds first, then debt, and equity only as last resort due to information asymmetry."
        },
        {
          id: 19,
          question: "What is adjusted present value (APV)?",
          options: [
            "Payback calculation",
            "IRR calculation",
            "NPV of project if all-equity financed plus present value of financing side effects",
            "Simple NPV"
          ],
          correctAnswer: 2,
          explanation: "APV separates project value from financing effects: Value if all-equity financed + PV of tax shields - PV of financial distress costs."
        },
        {
          id: 20,
          question: "What is decision tree analysis?",
          options: [
            "Simple decision making",
            "Historical decision analysis",
            "Diagramming sequential decisions and uncertain outcomes",
            "Tree planting analysis"
          ],
          correctAnswer: 2,
          explanation: "Decision trees diagram sequential decisions, uncertain outcomes, and probabilities to evaluate complex investment decisions."
        }
      ]
    },
    {
      id: 3,
      title: "Risk Management and Derivatives",
      completed: false,
      fastTrack: true,
      content: `# Financial Risk Identification and Mitigation

## Understanding Financial Risk
Financial risk encompasses potential losses from market movements, credit issues, liquidity constraints, and operational failures. Effective risk management protects value and ensures stability.

## Types of Financial Risk
Comprehensive risk categorization:

### Market Risk
- **Price Risk** - Changes in asset prices
- **Interest Rate Risk** - Changes in interest rates
- **Currency Risk** - Exchange rate fluctuations
- **Commodity Risk** - Price changes in raw materials
- **Equity Risk** - Stock price movements

### Credit Risk
- **Default Risk** - Counterparty fails to meet obligations
- **Settlement Risk** - Failure during transaction settlement
- **Country Risk** - Sovereign or political risk
- **Concentration Risk** - Excessive exposure to single counterparty
- **Migration Risk** - Deterioration in credit quality

### Liquidity Risk
- **Funding Liquidity Risk** - Inability to meet cash flow needs
- **Market Liquidity Risk** - Cannot trade quickly without price impact
- **Asset Liquidity Risk** - Cannot convert assets to cash quickly
- **Time Horizon Risk** - Liquidity needs over different time frames

### Operational Risk
- **Process Risk** - Inadequate or failed processes
- **People Risk** - Human errors or misconduct
- **System Risk** - Technology failures
- **External Event Risk** - Natural disasters, regulatory changes
- **Legal Risk** - Legal actions or non-compliance

## Risk Measurement Techniques
Quantifying risk exposure:

### Value at Risk (VaR)
- **Definition** - Maximum loss over time horizon at confidence level
- **Calculation Methods** - Historical simulation, variance-covariance, Monte Carlo
- **Parameters** - Time horizon, confidence level, holding period
- **Limitations** - Doesn't measure worst-case loss, assumes normal markets
- **Applications** - Trading limits, capital allocation, performance evaluation

### Expected Shortfall (ES)
- **Definition** - Average loss beyond VaR threshold
- **Advantages over VaR** - Captures tail risk, coherent risk measure
- **Calculation** - Average of losses exceeding VaR
- **Regulatory Use** - Basel III banking regulations
- **Implementation** - Stress testing complement

### Stress Testing
- **Scenario Analysis** - Specific adverse scenarios
- **Reverse Stress Testing** - Finding scenarios causing failure
- **Sensitivity Analysis** - Changing key risk factors
- **Macro Stress Testing** - System-wide adverse conditions
- **Regulatory Requirements** - CCAR, DFAST for banks

### Sensitivity Analysis
- **Greek Letters for Options** - Delta, Gamma, Vega, Theta, Rho
- **Duration and Convexity** - Bond price sensitivity to rates
- **Beta Coefficient** - Stock sensitivity to market
- **Basis Point Value** - Price change per basis point rate change
- **Earnings at Risk** - Potential earnings impact

## Risk Management Framework
Structured approach to risk management:

### Risk Governance
- **Board Oversight** - Board risk committee responsibilities
- **Risk Appetite** - Amount of risk willing to accept
- **Risk Limits** - Quantitative risk boundaries
- **Three Lines of Defense** - Business units, risk management, audit
- **Risk Culture** - Organizational attitude toward risk

### Risk Identification
- **Risk Registers** - Comprehensive risk inventories
- **Risk Mapping** - Visual representation of risks
- **Process Analysis** - Identifying risks in business processes
- **External Analysis** - Market, competitor, regulatory risks
- **Emerging Risk Identification** - Anticipating future risks

### Risk Assessment
- **Risk Likelihood** - Probability of occurrence
- **Risk Impact** - Potential financial and operational consequences
- **Risk Prioritization** - Ranking risks by significance
- **Risk Interdependencies** - How risks interact
- **Risk Velocity** - How quickly risk can materialize

### Risk Response
- **Risk Avoidance** - Eliminating risk exposure
- **Risk Reduction** - Mitigating risk impact or likelihood
- **Risk Sharing** - Transferring risk (insurance, derivatives)
- **Risk Acceptance** - Accepting risk within appetite
- **Risk Exploitation** - Taking advantage of risk opportunities

## Derivatives Instruments
Risk transfer tools:

### Forward Contracts
- **Customized Agreements** - Private contracts between parties
- **Delivery Obligation** - Must deliver/receive underlying asset
- **Credit Risk** - Counterparty may default
- **Applications** - Currency, commodity, interest rate hedging
- **Settlement** - Physical delivery or cash settlement

### Futures Contracts
- **Standardized Contracts** - Exchange-traded, standardized terms
- **Daily Settlement** - Marked to market daily with margin calls
- **Clearing House** - Reduces counterparty risk
- **Applications** - Hedging, speculation, arbitrage
- **Liquidity** - Generally more liquid than forwards

### Options Contracts
- **Call Options** - Right to buy at strike price
- **Put Options** - Right to sell at strike price
- **Premium** - Price paid for option
- **American vs European** - Exercise timing differences
- **Applications** - Hedging, income generation, speculation

### Swaps
- **Interest Rate Swaps** - Exchange fixed for floating payments
- **Currency Swaps** - Exchange principal and interest in different currencies
- **Credit Default Swaps** - Protection against credit events
- **Commodity Swaps** - Exchange fixed for floating commodity prices
- **Equity Swaps** - Exchange equity returns for fixed/floating payments

## Hedging Strategies
Using derivatives to reduce risk:

### Natural Hedging
- **Operational Hedging** - Matching revenues and costs in same currency
- **Asset-Liability Matching** - Matching duration of assets and liabilities
- **Netting** - Offsetting positions within organization
- **Diversification** - Reducing concentration risk
- **Strategic Hedging** - Business structure decisions

### Financial Hedging
- **Delta Hedging** - Options hedging using delta
- **Cross Hedging** - Hedging with correlated but different asset
- **Portfolio Hedging** - Hedging entire portfolio risk
- **Dynamic Hedging** - Continuously adjusting hedge positions
- **Static Hedging** - Establishing hedge and maintaining

### Hedge Accounting
- **Hedge Effectiveness** - Measuring how well hedge offsets risk
- **Fair Value Hedges** - Hedging fair value exposure
- **Cash Flow Hedges** - Hedging future cash flow exposure
- **Net Investment Hedges** - Hedging foreign operations
- **Documentation Requirements** - Formal hedge documentation

## Credit Risk Management
Managing counterparty risk:

### Credit Analysis
- **Credit Scoring Models** - Quantitative assessment
- **Credit Rating Agencies** - External credit assessments
- **Internal Ratings** - Company-specific rating systems
- **Probability of Default** - Likelihood counterparty defaults
- **Loss Given Default** - Percentage lost if default occurs

### Credit Mitigation
- **Collateral** - Security for credit exposure
- **Netting Agreements** - Reducing exposure through offsetting
- **Credit Derivatives** - Transferring credit risk
- **Credit Insurance** - Insurance against default
- **Covenants** - Contractual restrictions on borrower

### Credit Portfolio Management
- **Concentration Limits** - Limits to single counterparties/sectors
- **Credit Value Adjustment** - Adjusting value for counterparty risk
- **Wrong-way Risk** - Exposure increasing as credit quality deteriorates
- **Credit Risk Transfer** - Securitization, credit derivatives
- **Economic Capital** - Capital allocated for credit risk

## Operational Risk Management
Managing internal process risks:

### Risk Control Self-Assessment
- **Process Mapping** - Identifying risks in processes
- **Control Identification** - Existing controls assessment
- **Gap Analysis** - Control deficiencies identification
- **Action Planning** - Remediation plans
- **Monitoring** - Tracking control improvements

### Loss Data Collection
- **Internal Loss Data** - Historical operational losses
- **External Loss Data** - Industry loss databases
- **Scenario Analysis** - Potential loss estimation
- **Business Environment Factors** - Adjusting for business changes
- **Insurance Considerations** - Recoveries from insurance

### Key Risk Indicators
- **Leading Indicators** - Predictive risk measures
- **Lagging Indicators** - Historical loss measures
- **Thresholds** - Levels triggering action
- **Escalation Procedures** - Reporting exceedances
- **Trend Analysis** - Monitoring indicator trends

## Enterprise Risk Management (ERM)
Integrated risk approach:
- **Strategic Alignment** - Risk management supporting strategy
- **Holistic View** - Considering all risks together
- **Risk Aggregation** - Combining risks across organization
- **Risk-Adjusted Performance** - Measuring performance considering risk
- **Continuous Improvement** - Evolving risk management practices

## Regulatory Requirements
Compliance with regulations:
- **Basel Accords** - Banking capital requirements
- **Solvency II** - Insurance company requirements
- **Dodd-Frank Act** - US financial reform
- **EMIR** - European derivatives regulation
- **SOX Compliance** - Internal controls requirements

## Risk Management Technology
Supporting tools and systems:
- **Risk Management Information Systems** - Integrated risk data
- **Risk Analytics Platforms** - Advanced risk modeling
- **Stress Testing Systems** - Scenario analysis tools
- **Limit Monitoring Systems** - Real-time limit tracking
- **Reporting Dashboards** - Risk visualization and reporting`,
      quiz: [
        {
          id: 1,
          question: "What is market risk?",
          options: [
            "Product risk",
            "Risk of losses from changes in market prices or rates",
            "Marketing campaign risk",
            "Market entry risk"
          ],
          correctAnswer: 1,
          explanation: "Market risk is potential loss from adverse movements in market prices, including equity, interest rate, currency, and commodity risks."
        },
        {
          id: 2,
          question: "What does Value at Risk (VaR) measure?",
          options: [
            "Minimum loss",
            "Average loss",
            "Certain loss",
            "Maximum potential loss over specified period at given confidence level"
          ],
          correctAnswer: 3,
          explanation: "VaR estimates the maximum loss (worst-case) over a specific time period at a given confidence level (e.g., 95% or 99%)."
        },
        {
          id: 3,
          question: "What is credit risk?",
          options: [
            "Market risk",
            "Credit card risk",
            "Risk that counterparty fails to meet financial obligations",
            "Interest rate risk"
          ],
          correctAnswer: 2,
          explanation: "Credit risk is the possibility of loss from a borrower's or counterparty's failure to repay a loan or meet contractual obligations."
        },
        {
          id: 4,
          question: "What are forward contracts?",
          options: [
            "Insurance contracts",
            "Stock options",
            "Future plans",
            "Customized agreements to buy/sell asset at future date at agreed price"
          ],
          correctAnswer: 3,
          explanation: "Forwards are private agreements between two parties to exchange an asset at a future date for a price agreed today."
        },
        {
          id: 5,
          question: "What is liquidity risk?",
          options: [
            "Market risk",
            "Risk of being unable to meet cash flow needs or trade without significant price impact",
            "Water risk",
            "Liquid asset risk"
          ],
          correctAnswer: 1,
          explanation: "Liquidity risk includes both funding risk (inability to meet obligations) and market liquidity risk (inability to trade without affecting prices)."
        },
        {
          id: 6,
          question: "What are futures contracts?",
          options: [
            "Future predictions",
            "Forward contracts",
            "Standardized exchange-traded contracts to buy/sell asset at future date",
            "Option contracts"
          ],
          correctAnswer: 2,
          explanation: "Futures are standardized contracts traded on exchanges to buy/sell assets at future dates, with daily mark-to-market settlement."
        },
        {
          id: 7,
          question: "What is operational risk?",
          options: [
            "Risk of loss from inadequate or failed processes, people, systems, or external events",
            "Sales risk",
            "Market operation risk",
            "Operating profit risk"
          ],
          correctAnswer: 0,
          explanation: "Operational risk encompasses losses from failed internal processes, people, systems, or external events, excluding strategic and reputation risk."
        },
        {
          id: 8,
          question: "What are options contracts?",
          options: [
            "Required contracts",
            "Optional agreements",
            "Future contracts",
            "Contracts giving right but not obligation to buy/sell asset at strike price"
          ],
          correctAnswer: 3,
          explanation: "Options provide the right (but not obligation) to buy (call) or sell (put) an asset at a specified price within a certain time period."
        },
        {
          id: 9,
          question: "What is hedging?",
          options: [
            "Garden trimming",
            "Using financial instruments to offset potential losses from risk exposures",
            "Risk taking",
            "Speculation"
          ],
          correctAnswer: 1,
          explanation: "Hedging involves taking offsetting positions to reduce or eliminate exposure to adverse price movements in an asset or liability."
        },
        {
          id: 10,
          question: "What are interest rate swaps?",
          options: [
            "Rate changes",
            "Interest exchanges",
            "Agreements to exchange fixed interest payments for floating rate payments",
            "Loan swaps"
          ],
          correctAnswer: 2,
          explanation: "Interest rate swaps involve exchanging fixed interest rate payments for floating rate payments (or vice versa) on a notional principal amount."
        },
        {
          id: 11,
          question: "What is expected shortfall?",
          options: [
            "Expected loss",
            "Certain loss",
            "Average loss that exceeds VaR at given confidence level",
            "Minimum loss"
          ],
          correctAnswer: 2,
          explanation: "Expected shortfall (conditional VaR) measures the average loss in the worst (1-confidence level)% of cases, addressing VaR's tail risk limitation."
        },
        {
          id: 12,
          question: "What are credit default swaps?",
          options: [
            "Credit cards",
            "Contracts providing protection against credit events like defaults",
            "Loan defaults",
            "Loan agreements"
          ],
          correctAnswer: 1,
          explanation: "CDS are derivatives where buyer makes periodic payments to seller in exchange for protection if a credit event (like default) occurs."
        },
        {
          id: 13,
          question: "What is stress testing?",
          options: [
            "Employee stress tests",
            "Market testing",
            "Product testing",
            "Analyzing impact of extreme but plausible adverse scenarios"
          ],
          correctAnswer: 3,
          explanation: "Stress testing evaluates how portfolios, institutions, or systems would perform under severe but plausible adverse conditions."
        },
        {
          id: 14,
          question: "What is delta hedging?",
          options: [
            "Options hedging strategy using delta to create market-neutral position",
            "Complete hedging",
            "River delta",
            "Simple hedging"
          ],
          correctAnswer: 0,
          explanation: "Delta hedging involves taking offsetting positions in the underlying asset to neutralize the price risk of an options position."
        },
        {
          id: 15,
          question: "What are key risk indicators?",
          options: [
            "Metrics providing early warning of increasing risk exposure",
            "Risk causes",
            "Risk measurements",
            "Risk results"
          ],
          correctAnswer: 0,
          explanation: "KRIs are measurable metrics that signal increasing risk exposure, allowing proactive risk management before losses occur."
        },
        {
          id: 16,
          question: "What is enterprise risk management?",
          options: [
            "Market risk only",
            "Department risk management",
            "Integrated approach to managing all risks across organization",
            "Insurance management"
          ],
          correctAnswer: 2,
          explanation: "ERM is a comprehensive, integrated framework for identifying, assessing, and managing risks across the entire organization."
        },
        {
          id: 17,
          question: "What is basis risk?",
          options: [
            "Basic risk",
            "Foundation risk",
            "Risk that hedge doesn't perfectly offset exposure due to price differences",
            "Simple risk"
          ],
          correctAnswer: 2,
          explanation: "Basis risk arises when the hedging instrument and the hedged item don't move perfectly together, leaving residual risk."
        },
        {
          id: 18,
          question: "What are the Greek letters in options?",
          options: [
            "Mathematical constants",
            "Currency letters",
            "Alphabet letters",
            "Risk measures: Delta, Gamma, Vega, Theta, Rho"
          ],
          correctAnswer: 3,
          explanation: "Options Greeks measure sensitivity: Delta (price), Gamma (delta change), Vega (volatility), Theta (time), Rho (interest rates)."
        },
        {
          id: 19,
          question: "What is duration in risk management?",
          options: [
            "Loan term",
            "Contract length",
            "Time period",
            "Measure of bond price sensitivity to interest rate changes"
          ],
          correctAnswer: 3,
          explanation: "Duration measures how much a bond's price changes for a given change in interest rates, used in interest rate risk management."
        },
        {
          id: 20,
          question: "What is counterparty risk?",
          options: [
            "Credit card risk",
            "Market risk",
            "Party risk",
            "Risk that other party in transaction defaults on obligations"
          ],
          correctAnswer: 3,
          explanation: "Counterparty risk is the possibility that the other party in a financial transaction will not fulfill their contractual obligations."
        }
      ]
    },
    {
      id: 4,
      title: "Investment Analysis and Portfolio Management",
      completed: false,
      fastTrack: true,
      content: `# Strategic Asset Allocation and Investment Management

## Investment Management Framework
Investment management involves constructing and maintaining portfolios that meet investor objectives while managing risk. It combines security analysis with portfolio theory.

## Modern Portfolio Theory (MPT)
Harry Markowitz's foundational concepts:
- **Efficient Frontier** - Optimal portfolios offering highest return for given risk
- **Diversification Benefits** - Risk reduction through uncorrelated assets
- **Risk-Return Trade-off** - Higher expected returns require accepting higher risk
- **Portfolio Optimization** - Mathematical portfolio construction
- **Assumptions** - Rational investors, mean-variance preferences

## Capital Asset Pricing Model (CAPM)
William Sharpe's equilibrium model:
- **Security Market Line** - Expected return = Risk-free rate + Beta × Market risk premium
- **Beta Coefficient** - Measure of systematic risk
- **Market Portfolio** - Theoretical portfolio of all risky assets
- **Assumptions** - Perfect markets, homogeneous expectations
- **Applications** - Required return estimation, performance evaluation

## Arbitrage Pricing Theory (APT)
Stephen Ross's multi-factor model:
- **Multiple Risk Factors** - Several systematic risk sources
- **Factor Sensitivities** - Asset sensitivity to each factor
- **No Arbitrage Condition** - Assets with same risk should have same return
- **Advantages over CAPM** - Multiple factors, fewer assumptions
- **Practical Implementation** - Identifying relevant risk factors

## Efficient Market Hypothesis (EMH)
Eugene Fama's market efficiency concepts:
- **Weak Form Efficiency** - Prices reflect all historical information
- **Semi-Strong Form Efficiency** - Prices reflect all public information
- **Strong Form Efficiency** - Prices reflect all public and private information
- **Implications** - Difficulty of consistent outperformance
- **Market Anomalies** - Patterns contradicting EMH

## Behavioral Finance
Psychology in investment decisions:
- **Cognitive Biases** - Systematic thinking errors
- **Emotional Biases** - Feeling-driven decision errors
- **Prospect Theory** - Loss aversion, reference dependence
- **Market Inefficiencies** - How biases affect markets
- **Investment Implications** - Exploiting behavioral patterns

## Security Analysis Approaches

### Fundamental Analysis
- **Top-Down Approach** - Macro → Industry → Company
- **Bottom-Up Approach** - Company → Industry → Macro
- **Financial Statement Analysis** - Ratio analysis, cash flow analysis
- **Valuation Models** - DCF, relative valuation, asset-based
- **Qualitative Factors** - Management, competitive position, industry

### Technical Analysis
- **Price Patterns** - Support, resistance, trends
- **Chart Types** - Line, bar, candlestick, point-and-figure
- **Technical Indicators** - Moving averages, RSI, MACD, Bollinger Bands
- **Volume Analysis** - Price movements with trading volume
- **Market Sentiment** - Investor psychology indicators

### Quantitative Analysis
- **Factor Models** - Identifying return drivers
- **Statistical Arbitrage** - Exploiting statistical relationships
- **Algorithmic Trading** - Rule-based trading systems
- **Machine Learning Applications** - Pattern recognition, prediction
- **Backtesting** - Testing strategies on historical data

## Equity Valuation Methods
Determining stock value:

### Discounted Cash Flow Models
- **Dividend Discount Model** - Value = Dividends ÷ (Required return - Growth)
- **Free Cash Flow to Equity** - Cash available to equity holders
- **Free Cash Flow to Firm** - Cash available to all investors
- **Adjusted Present Value** - Separating operating and financing value
- **Multi-stage Models** - Different growth phases

### Relative Valuation
- **Price Multiples** - P/E, P/B, P/S, P/CF
- **Enterprise Value Multiples** - EV/EBITDA, EV/Sales, EV/EBIT
- **Industry-Specific Multiples** - Relevant to specific sectors
- **Comparable Company Analysis** - Comparing to similar companies
- **Precedent Transaction Analysis** - Comparing to past transactions

### Asset-Based Valuation
- **Liquidation Value** - Value if assets sold separately
- **Replacement Cost** - Cost to replace assets
- **Sum-of-the-Parts** - Valuing business segments separately
- **Net Asset Value** - Assets minus liabilities
- **Adjusted Book Value** - Book value with adjustments

## Fixed Income Analysis
Bond investment analysis:
- **Yield Measures** - Current yield, yield to maturity, yield to call
- **Duration Analysis** - Price sensitivity to rate changes
- **Convexity** - Curvature of price-yield relationship
- **Credit Analysis** - Assessing default risk
- **Term Structure Analysis** - Yield curve analysis

## Alternative Investments
Non-traditional asset classes:
- **Real Estate** - Direct property, REITs
- **Private Equity** - Venture capital, buyouts
- **Hedge Funds** - Various strategies, fee structures
- **Commodities** - Physical goods, futures
- **Collectibles** - Art, wine, other tangible assets

## Portfolio Construction Process
Step-by-step portfolio building:

### Investment Policy Statement
- **Objectives** - Return requirements, risk tolerance
- **Constraints** - Liquidity needs, time horizon, taxes, legal
- **Asset Allocation** - Strategic target allocations
- **Rebalancing Policy** - When and how to rebalance
- **Performance Benchmarks** - Appropriate benchmarks

### Strategic Asset Allocation
- **Long-term Target Mix** - Based on objectives and constraints
- **Efficient Frontier Analysis** - Optimal risk-return combinations
- **Risk Budgeting** - Allocating risk across assets
- **Correlation Considerations** - Diversification benefits
- **Implementation** - How to achieve target allocation

### Tactical Asset Allocation
- **Short-term Deviations** - Temporary allocation changes
- **Market Timing** - Based on market forecasts
- **Valuation Signals** - Over/undervaluation indicators
- **Risk Management** - Controlling tactical risk
- **Performance Contribution** - Measuring tactical value added

## Portfolio Performance Evaluation
Measuring investment success:

### Return Measurement
- **Time-Weighted Return** - Eliminates cash flow timing effects
- **Money-Weighted Return** - Internal rate of return
- **Geometric Mean Return** - Compound average return
- **Risk-Adjusted Returns** - Returns considering risk taken

### Performance Attribution
- **Brinson Model** - Allocation, selection, interaction effects
- **Fixed Income Attribution** - Yield curve, sector, security selection
- **Multi-factor Models** - Factor exposure contributions
- **Style Analysis** - Returns-based style identification
- **Contribution Analysis** - Each holding's contribution

### Risk-Adjusted Performance Measures
- **Sharpe Ratio** - Excess return per unit of total risk
- **Treynor Ratio** - Excess return per unit of systematic risk
- **Jensen's Alpha** - Excess return over CAPM expected return
- **Information Ratio** - Active return per unit of active risk
- **Sortino Ratio** - Excess return per unit of downside risk

## Portfolio Rebalancing
Maintaining target allocations:
- **Calendar Rebalancing** - Regular time intervals
- **Percentage-of-Portfolio Rebalancing** - When allocations deviate by percentage
- **Tolerance Bands** - Allowable deviation ranges
- **Transaction Costs** - Considering rebalancing costs
- **Tax Implications** - Tax-efficient rebalancing

## Investment Strategies
Approaches to portfolio management:

### Passive Management
- **Index Funds** - Matching market index performance
- **Exchange-Traded Funds** - Tradable index funds
- **Advantages** - Low cost, tax efficiency, transparency
- **Implementation** - Full replication, sampling, synthetic
- **Enhanced Indexing** - Minor deviations from index

### Active Management
- **Security Selection** - Choosing individual securities
- **Market Timing** - Adjusting allocations based on forecasts
- **Style Investing** - Growth, value, size-based strategies
- **Sector Rotation** - Moving between industry sectors
- **Concentrated Portfolios** - Focused holdings with high conviction

### Smart Beta Strategies
- **Factor Investing** - Targeting specific return factors
- **Alternative Weighting** - Not market-cap weighted
- **Risk Parity** - Equalizing risk contributions
- **Minimum Variance** - Lowest possible portfolio risk
- **Fundamental Indexing** - Weighting by fundamentals

## Ethical and Sustainable Investing
Incorporating non-financial factors:
- **Socially Responsible Investing** - Avoiding harmful industries
- **Environmental, Social, Governance** - ESG factor integration
- **Impact Investing** - Seeking measurable social/environmental impact
- **Shareholder Advocacy** - Engaging companies on issues
- **Performance Considerations** - ESG and financial performance

## Investment Technology
Tools for investment management:
- **Portfolio Management Systems** - Comprehensive management platforms
- **Risk Analytics Software** - Portfolio risk analysis
- **Trading Platforms** - Execution and order management
- **Research Databases** - Financial data and research
- **Robo-Advisors** - Automated portfolio management`,
      quiz: [
        {
          id: 1,
          question: "What is Modern Portfolio Theory?",
          options: [
            "Simple portfolio building",
            "Mathematical framework for constructing optimal portfolios considering risk-return tradeoff",
            "Market timing theory",
            "Stock picking theory"
          ],
          correctAnswer: 1,
          explanation: "MPT, developed by Harry Markowitz, uses mathematical optimization to construct portfolios maximizing expected return for given risk level."
        },
        {
          id: 2,
          question: "What does CAPM stand for and what does it estimate?",
          options: [
            "Capital Asset Pricing Model - expected return based on systematic risk",
            "Capital Analysis Pricing Model - price analysis",
            "Capital Allocation Pricing Model - asset allocation",
            "Capital Assessment Pricing Model - risk assessment"
          ],
          correctAnswer: 0,
          explanation: "CAPM estimates expected return = Risk-free rate + Beta × (Market return - Risk-free rate), linking return to systematic risk."
        },
        {
          id: 3,
          question: "What is beta in finance?",
          options: [
            "Testing phase",
            "Measure of stock's sensitivity to market movements",
            "Risk-free measure",
            "Profit measure"
          ],
          correctAnswer: 1,
          explanation: "Beta measures how much a stock's returns move with the overall market. Beta = 1 means moves with market, >1 more volatile, <1 less volatile."
        },
        {
          id: 4,
          question: "What is the efficient frontier?",
          options: [
            "Set of optimal portfolios offering highest expected return for given risk level",
            "Efficient markets",
            "Trading efficiency",
            "Market efficiency"
          ],
          correctAnswer: 0,
          explanation: "The efficient frontier graphs the set of portfolios that maximize expected return for each level of portfolio risk (standard deviation)."
        },
        {
          id: 5,
          question: "What is diversification?",
          options: [
            "Single investment",
            "Concentration",
            "Focus investing",
            "Spreading investments across different assets to reduce overall risk"
          ],
          correctAnswer: 3,
          explanation: "Diversification reduces portfolio risk by combining assets with less-than-perfect correlation, minimizing impact of any single asset's poor performance."
        },
        {
          id: 6,
          question: "What are the three forms of Efficient Market Hypothesis?",
          options: [
            "Low, medium, high",
            "Weak, semi-strong, strong - based on information reflected in prices",
            "Simple, complex, complete",
            "Slow, medium, fast"
          ],
          correctAnswer: 1,
          explanation: "Weak form: prices reflect all historical info. Semi-strong: all public info. Strong form: all public and private info."
        },
        {
          id: 7,
          question: "What is fundamental analysis?",
          options: [
            "Basic analysis",
            "Simple analysis",
            "Technical chart analysis",
            "Evaluating securities by analyzing company financials, industry, economy"
          ],
          correctAnswer: 3,
          explanation: "Fundamental analysis evaluates securities by examining financial statements, management, competitors, and economic factors to determine intrinsic value."
        },
        {
          id: 8,
          question: "What is technical analysis?",
          options: [
            "Analyzing security price patterns and trends to predict future movements",
            "Economic analysis",
            "Fundamental analysis",
            "Technical skill analysis"
          ],
          correctAnswer: 0,
          explanation: "Technical analysis studies past market data, primarily price and volume, to identify patterns and trends that may predict future price movements."
        },
        {
          id: 9,
          question: "What is a dividend discount model?",
          options: [
            "Discount shopping",
            "Valuation model valuing stock as present value of expected future dividends",
            "Price reduction model",
            "Stock discount"
          ],
          correctAnswer: 1,
          explanation: "DDM values a stock as the present value of all expected future dividend payments, using required rate of return and dividend growth rate."
        },
        {
          id: 10,
          question: "What is the Sharpe ratio?",
          options: [
            "Risk-adjusted return measure: (Portfolio return - Risk-free rate) ÷ Portfolio standard deviation",
            "Risk measure",
            "Sharp measurement",
            "Return measure"
          ],
          correctAnswer: 0,
          explanation: "Sharpe ratio measures excess return per unit of total risk (standard deviation), comparing portfolio performance to risk-free rate."
        },
        {
          id: 11,
          question: "What is behavioral finance?",
          options: [
            "Employee behavior",
            "Study of psychological influences on investor behavior and market outcomes",
            "Market behavior only",
            "Behavior management"
          ],
          correctAnswer: 1,
          explanation: "Behavioral finance examines how psychological biases and emotions affect investor decisions and create market anomalies contradicting efficient markets."
        },
        {
          id: 12,
          question: "What is portfolio rebalancing?",
          options: [
            "Balance reduction",
            "Adjusting portfolio holdings to maintain target asset allocation",
            "Balance checking",
            "New portfolio"
          ],
          correctAnswer: 1,
          explanation: "Rebalancing involves buying/selling assets to bring portfolio back to target allocation, controlling risk and maintaining strategy."
        },
        {
          id: 13,
          question: "What is arbitrage pricing theory?",
          options: [
            "Single factor model",
            "Pricing arbitration",
            "Multi-factor model where asset returns are influenced by several systematic risk factors",
            "Price setting theory"
          ],
          correctAnswer: 2,
          explanation: "APT models expected returns as linear function of multiple macroeconomic factors, with sensitivity (factor loading) to each factor."
        },
        {
          id: 14,
          question: "What is yield to maturity?",
          options: [
            "Total return if bond held to maturity, assuming all payments made and reinvested at YTM",
            "Simple yield",
            "Coupon yield",
            "Current yield"
          ],
          correctAnswer: 0,
          explanation: "YTM is the internal rate of return earned on a bond if held to maturity, considering coupon payments, face value, current price, and time to maturity."
        },
        {
          id: 15,
          question: "What is duration in bond investing?",
          options: [
            "Measure of bond price sensitivity to interest rate changes, in years",
            "Bond maturity",
            "Payment duration",
            "Bond life"
          ],
          correctAnswer: 0,
          explanation: "Duration measures how much a bond's price changes for a 1% change in interest rates, representing weighted average time to receive cash flows."
        },
        {
          id: 16,
          question: "What is alpha in investment performance?",
          options: [
            "Excess return above benchmark or expected return given risk",
            "Average return",
            "Risk measure",
            "First letter"
          ],
          correctAnswer: 0,
          explanation: "Alpha measures investment performance relative to a benchmark or expected CAPM return, indicating value added by active management."
        },
        {
          id: 17,
          question: "What is tactical asset allocation?",
          options: [
            "Tactical planning",
            "Short-term adjustments to strategic allocation based on market forecasts",
            "Fixed allocation",
            "Strategic allocation"
          ],
          correctAnswer: 1,
          explanation: "TAA involves actively shifting portfolio allocations to capitalize on market opportunities or avoid risks, deviating from long-term strategic targets."
        },
        {
          id: 18,
          question: "What are alternative investments?",
          options: [
            "Stock alternatives",
            "Alternate choices",
            "Bond alternatives",
            "Non-traditional assets like real estate, private equity, hedge funds, commodities"
          ],
          correctAnswer: 3,
          explanation: "Alternative investments include assets beyond traditional stocks/bonds/cash, often with different risk-return characteristics and lower liquidity."
        },
        {
          id: 19,
          question: "What is ESG investing?",
          options: [
            "Economic sector gains",
            "Extra special gains",
            "Enhanced stock growth",
            "Considering environmental, social, governance factors in investment decisions"
          ],
          correctAnswer: 3,
          explanation: "ESG investing integrates environmental, social, and governance factors alongside financial analysis in investment decision-making."
        },
        {
          id: 20,
          question: "What is a robo-advisor?",
          options: [
            "Trading robot",
            "Digital platform providing automated investment management using algorithms",
            "Human advisor",
            "Robot consultant"
          ],
          correctAnswer: 1,
          explanation: "Robo-advisors use algorithms to automatically allocate, manage, and optimize clients' investments, typically with lower fees than human advisors."
        }
      ]
    },
    {
      id: 5,
      title: "International Financial Management",
      completed: false,
      content: `# Managing Finance in Global Markets

## Global Financial Environment
International financial management addresses the unique challenges and opportunities of operating across national borders, including currency risk, political risk, and market differences.

## Foreign Exchange Markets
Understanding currency markets:
- **Market Structure** - Over-the-counter, exchange-traded, interbank
- **Market Participants** - Banks, corporations, investors, central banks, speculators
- **Trading Volume** - Largest financial market globally
- **Market Hours** - 24-hour trading across time zones
- **Exchange Rate Quotations** - Direct vs indirect, cross rates

## Exchange Rate Determination
Factors influencing currency values:
- **Purchasing Power Parity** - Law of one price, absolute and relative PPP
- **Interest Rate Parity** - Covered and uncovered interest parity
- **International Fisher Effect** - Interest rate differentials and exchange rates
- **Balance of Payments Approach** - Current account, capital account influences
- **Asset Market Approach** - Portfolio flows and currency values
- **Technical Factors** - Trading patterns, market sentiment

## Exchange Rate Regimes
Different currency systems:
- **Fixed Exchange Rates** - Pegged to another currency or basket
- **Floating Exchange Rates** - Determined by market forces
- **Managed Float** - Limited intervention by central banks
- **Crawling Peg** - Regular small adjustments
- **Currency Boards** - Fixed with full reserve backing
- **Dollarization** - Using another country's currency

## Foreign Exchange Risk Management
Managing currency exposure:

### Transaction Exposure
- **Definition** - Risk from future foreign currency cash flows
- **Measurement** - Value at risk from exchange rate changes
- **Hedging Instruments** - Forwards, futures, options, money market hedges
- **Natural Hedging** - Matching currency revenues and expenses
- **Pricing Strategies** - Passing through exchange rate changes

### Translation Exposure
- **Definition** - Risk from converting foreign subsidiary financial statements
- **Accounting Methods** - Current rate, temporal, functional currency
- **Hedging Strategies** - Balance sheet hedging, derivatives
- **Financial Statement Impact** - Effects on reported earnings and equity
- **Management Approaches** - Net investment hedges

### Economic Exposure
- **Definition** - Risk from long-term exchange rate effects on competitive position
- **Measurement** - Impact on present value of future cash flows
- **Strategic Responses** - Geographic diversification, operational flexibility
- **Financial Hedging** - Long-term derivative positions
- **Competitive Analysis** - Effects on pricing and market share

## International Capital Budgeting
Evaluating cross-border investments:
- **Cash Flow Estimation** - Projecting foreign currency cash flows
- **Exchange Rate Forecasting** - Predicting future exchange rates
- **Discount Rate Determination** - Adjusting for additional risks
- **Political Risk Assessment** - Country risk analysis
- **Repatriation Considerations** - Restrictions on profit transfers
- **Tax Considerations** - Different international tax regimes

## Country Risk Analysis
Assessing international investment risks:
- **Political Risk** - Government stability, policy changes, expropriation
- **Economic Risk** - Economic stability, growth prospects, inflation
- **Financial Risk** - Currency controls, exchange rate volatility
- **Legal Risk** - Contract enforcement, property rights
- **Cultural Risk** - Business practice differences
- **Risk Mitigation** - Insurance, contracts, local partners

## International Capital Structure
Financing decisions in global context:
- **Cost of Capital Differences** - Varying across countries
- **Access to Capital Markets** - Domestic vs international markets
- **Currency Considerations** - Matching asset and liability currencies
- **Tax Implications** - Different interest deductibility rules
- **Regulatory Constraints** - Foreign ownership restrictions
- **Optimal Global Structure** - Centralized vs decentralized financing

## International Working Capital Management
Managing short-term assets globally:
- **Cash Management** - Centralized vs decentralized, netting, pooling
- **Accounts Receivable** - Credit policy, collection methods
- **Inventory Management** - Global supply chain considerations
- **Accounts Payable** - Payment timing, currency selection
- **Short-term Financing** - Local vs parent company financing

## International Trade Finance
Financing cross-border trade:
- **Payment Methods** - Advance payment, open account, documentary collections
- **Letters of Credit** - Irrevocable, confirmed, standby
- **Trade Credit Insurance** - Protection against non-payment
- **Export Financing** - Government programs, bank facilities
- **Factoring and Forfaiting** - Selling receivables at discount

## Foreign Direct Investment (FDI)
Strategic international investment:
- **Motivations** - Market seeking, resource seeking, efficiency seeking
- **Entry Modes** - Exporting, licensing, joint ventures, wholly-owned subsidiaries
- **Location Decisions** - Country selection factors
- **Transfer Pricing** - Pricing intra-company transactions
- **Political Risk Management** - Investment protection strategies

## International Tax Management
Navigating global taxation:
- **Tax Jurisdictions** - Residence vs source taxation
- **Double Taxation** - Relief through treaties, foreign tax credits
- **Transfer Pricing Regulations** - Arm's length principle
- **Tax Havens** - Low-tax jurisdictions
- **Controlled Foreign Corporations** - Anti-deferral rules
- **Tax Planning Strategies** - Legal minimization approaches

## Global Capital Markets
International financing sources:
- **Eurocurrency Markets** - Offshore currency deposits and loans
- **International Bond Markets** - Foreign bonds, Eurobonds, global bonds
- **International Equity Markets** - Cross-listings, depository receipts
- **Syndicated Loans** - Large loans from bank groups
- **Project Finance** - Financing based on project cash flows
- **Islamic Finance** - Sharia-compliant financing

## International Financial Institutions
Key global financial organizations:
- **International Monetary Fund** - Global monetary cooperation
- **World Bank Group** - Development financing
- **Bank for International Settlements** - Central bank cooperation
- **Regional Development Banks** - Asian, African, Inter-American development banks
- **Export Credit Agencies** - Government-supported trade financing

## International Accounting Standards
Global financial reporting:
- **IFRS vs US GAAP** - Key differences and convergence
- **Foreign Currency Translation** - Accounting for exchange rate effects
- **Consolidation of Foreign Subsidiaries** - Reporting requirements
- **Disclosure Requirements** - Additional international disclosures
- **Auditing Standards** - International auditing requirements

## Emerging Markets Finance
Special considerations for developing economies:
- **Market Characteristics** - Higher growth, higher risk
- **Capital Market Development** - Evolving financial systems
- **Corporate Governance** - Varying standards and practices
- **Currency Risk** - Higher volatility and convertibility issues
- **Investment Strategies** - Approaches for emerging market investing

## Global Financial Strategy
Integrated international approach:
- **Global Capital Budgeting** - Coordinated investment decisions
- **Worldwide Financing Strategy** - Optimal global funding mix
- **Global Cash Management** - Efficient worldwide cash deployment
- **International Risk Management** - Comprehensive risk assessment
- **Performance Evaluation** - Measuring global operations

## Technology in International Finance
Digital tools for global management:
- **Forex Trading Platforms** - Electronic currency trading
- **Global Treasury Management Systems** - Integrated cash management
- **Risk Management Software** - Multi-currency risk analysis
- **Trade Finance Platforms** - Digital trade documentation
- **Blockchain Applications** - Cross-border payments, smart contracts

## Ethical Considerations in International Finance
Global ethical challenges:
- **Corruption and Bribery** - Foreign Corrupt Practices Act, UK Bribery Act
- **Human Rights** - Labor practices, community impacts
- **Environmental Standards** - Varying regulations and expectations
- **Tax Avoidance vs Evasion** - Ethical tax planning boundaries
- **Cultural Sensitivity** - Respecting local customs and practices

## Future Trends in International Finance
Emerging developments:
- **Digital Currencies** - Central bank digital currencies, cryptocurrencies
- **Sustainable Finance** - Green bonds, ESG integration globally
- **Regional Integration** - Economic unions, trade agreements
- **Financial Technology** - Cross-border fintech solutions
- **Geopolitical Shifts** - Changing global economic power balance`,
      quiz: [
        {
          id: 1,
          question: "What is foreign exchange risk?",
          options: [
            "Risk of loss from adverse exchange rate movements",
            "Market risk only",
            "Foreign investment risk",
            "Exchange building risk"
          ],
          correctAnswer: 0,
          explanation: "Foreign exchange risk is the potential for financial loss due to changes in exchange rates affecting the value of foreign currency transactions or investments."
        },
        {
          id: 2,
          question: "What are the three types of foreign exchange exposure?",
          options: [
            "Small, medium, large",
            "Transaction, translation, economic exposure",
            "Minor, major, critical",
            "Short, medium, long term"
          ],
          correctAnswer: 1,
          explanation: "Transaction: risk from future cash flows. Translation: risk from converting financial statements. Economic: risk from long-term competitive impact."
        },
        {
          id: 3,
          question: "What is purchasing power parity?",
          options: [
            "Purchase power",
            "Theory that exchange rates adjust to equalize purchasing power across countries",
            "Price parity",
            "Buying power"
          ],
          correctAnswer: 1,
          explanation: "PPP suggests exchange rates should adjust so identical goods cost the same in different countries when expressed in common currency."
        },
        {
          id: 4,
          question: "What is interest rate parity?",
          options: [
            "Interest equality",
            "Interest similarity",
            "Relationship where interest rate differential equals expected exchange rate change",
            "Rate similarity"
          ],
          correctAnswer: 2,
          explanation: "IRP states that difference in interest rates between two countries equals expected change in exchange rates between their currencies."
        },
        {
          id: 5,
          question: "What is transaction exposure?",
          options: [
            "Translation risk",
            "Transaction risk",
            "Economic risk",
            "Risk from exchange rate changes affecting future foreign currency cash flows"
          ],
          correctAnswer: 3,
          explanation: "Transaction exposure is the risk that exchange rate changes will affect the value of future cash flows from existing foreign currency transactions."
        },
        {
          id: 6,
          question: "What is a forward contract in forex?",
          options: [
            "Agreement to exchange currencies at future date at predetermined rate",
            "Forward planning",
            "Future contract",
            "Option contract"
          ],
          correctAnswer: 0,
          explanation: "A forward contract locks in an exchange rate today for a currency transaction that will occur at a specified future date."
        },
        {
          id: 7,
          question: "What is translation exposure?",
          options: [
            "Language translation",
            "Risk from converting foreign subsidiary financial statements to parent currency",
            "Economic exposure",
            "Transaction exposure"
          ],
          correctAnswer: 1,
          explanation: "Translation exposure arises when consolidating foreign subsidiary financial statements into parent company reporting currency."
        },
        {
          id: 8,
          question: "What is economic exposure?",
          options: [
            "Translation risk",
            "Transaction risk",
            "Economic risk",
            "Long-term risk from exchange rates affecting competitive position and future cash flows"
          ],
          correctAnswer: 3,
          explanation: "Economic exposure is the risk that exchange rate changes will affect a company's long-term competitive position and present value of future cash flows."
        },
        {
          id: 9,
          question: "What is country risk?",
          options: [
            "Market risk",
            "National risk",
            "Risk of doing business in a particular country due to political, economic, social factors",
            "Currency risk"
          ],
          correctAnswer: 2,
          explanation: "Country risk includes political, economic, financial, and social risks specific to operating in a particular foreign country."
        },
        {
          id: 10,
          question: "What are letters of credit?",
          options: [
            "Credit cards",
            "Loan letters",
            "Bank guarantees ensuring payment in international trade if conditions met",
            "Credit letters"
          ],
          correctAnswer: 2,
          explanation: "Letters of credit are bank guarantees that payment will be made to exporter if specified documents are presented, reducing trade payment risk."
        },
        {
          id: 11,
          question: "What is transfer pricing?",
          options: [
            "Price transfer",
            "Price changing",
            "Market pricing",
            "Pricing of transactions between related entities in different countries"
          ],
          correctAnswer: 3,
          explanation: "Transfer pricing refers to prices charged for goods, services, or intangibles between related companies in different tax jurisdictions."
        },
        {
          id: 12,
          question: "What is a currency swap?",
          options: [
            "Rate swap",
            "Currency exchange",
            "Agreement to exchange principal and interest payments in different currencies",
            "Simple swap"
          ],
          correctAnswer: 2,
          explanation: "Currency swaps involve exchanging principal and interest payments in one currency for principal and interest in another currency."
        },
        {
          id: 13,
          question: "What is political risk?",
          options: [
            "Government risk",
            "Risk of loss from political events or government actions in foreign country",
            "Political campaign risk",
            "Policy risk"
          ],
          correctAnswer: 1,
          explanation: "Political risk includes potential losses from political instability, policy changes, expropriation, or restrictions in a foreign country."
        },
        {
          id: 14,
          question: "What are Eurocurrency markets?",
          options: [
            "Markets for currency deposited outside its country of origin",
            "European markets",
            "Euro markets",
            "European currency"
          ],
          correctAnswer: 0,
          explanation: "Eurocurrency markets are offshore markets where currencies are deposited and lent outside their country of origin (e.g., Eurodollars)."
        },
        {
          id: 15,
          question: "What is double taxation?",
          options: [
            "Duplicate tax",
            "Being taxed twice on same income by two different countries",
            "Double tax",
            "High taxation"
          ],
          correctAnswer: 1,
          explanation: "Double taxation occurs when the same income is taxed by both the country where it's earned and the taxpayer's home country."
        },
        {
          id: 16,
          question: "What is foreign direct investment?",
          options: [
            "Stock investment",
            "Investment establishing substantial control in foreign business operations",
            "Portfolio investment",
            "Foreign investment"
          ],
          correctAnswer: 1,
          explanation: "FDI involves establishing substantial, long-term interest and control in a business enterprise in a foreign country."
        },
        {
          id: 17,
          question: "What are American Depository Receipts?",
          options: [
            "Foreign receipts",
            "American receipts",
            "U.S. traded securities representing shares in foreign companies",
            "Stock receipts"
          ],
          correctAnswer: 2,
          explanation: "ADRs are U.S. dollar-denominated certificates traded on U.S. exchanges, representing shares in foreign corporations."
        },
        {
          id: 18,
          question: "What is the International Fisher Effect?",
          options: [
            "Interest effect",
            "Rate effect",
            "Fisher theory",
            "Nominal interest rate differentials reflect expected exchange rate changes"
          ],
          correctAnswer: 3,
          explanation: "IFE suggests that differences in nominal interest rates between countries reflect expected changes in exchange rates."
        },
        {
          id: 19,
          question: "What is cash pooling in international finance?",
          options: [
            "Cash saving",
            "Centralizing cash management across multiple subsidiaries to optimize liquidity",
            "Cash collection",
            "Cash distribution"
          ],
          correctAnswer: 1,
          explanation: "Cash pooling combines cash balances of multiple subsidiaries into centralized accounts to optimize interest earnings and reduce borrowing costs."
        },
        {
          id: 20,
          question: "What are Special Drawing Rights?",
          options: [
            "Drawing rights",
            "IMF international reserve asset based on basket of major currencies",
            "Special rights",
            "Currency rights"
          ],
          correctAnswer: 1,
          explanation: "SDRs are IMF-created international reserve assets based on a basket of five major currencies, used for transactions between IMF and member countries."
        }
      ]
    },
    {
      id: 6,
      title: "Strategic Financial Management",
      completed: false,
      content: `# Integrating Finance with Business Strategy

## Strategic Financial Management Framework
Strategic financial management aligns financial decisions with corporate strategy to create sustainable competitive advantage and maximize long-term shareholder value.

## Financial Strategy Formulation
Developing comprehensive financial strategy:
- **Strategic Analysis** - Internal and external environment assessment
- **Goal Setting** - Financial and strategic objectives
- **Strategy Development** - Financial approaches to achieve goals
- **Implementation Planning** - Resource allocation and timing
- **Performance Measurement** - Monitoring and adjustment

## Value-Based Management
Focusing on value creation:
- **Shareholder Value Creation** - Maximizing returns to shareholders
- **Value Drivers Identification** - Key factors creating value
- **Value-Based Metrics** - EVA, MVA, CFROI, TSR
- **Value Communication** - Communicating value to stakeholders
- **Incentive Alignment** - Linking compensation to value creation

## Corporate Governance and Finance
Financial aspects of governance:
- **Board Financial Oversight** - Audit committee, finance committee
- **Executive Compensation** - Alignment with shareholder interests
- **Financial Transparency** - Accurate and timely disclosure
- **Shareholder Rights** - Protecting investor interests
- **Ethical Financial Practices** - Integrity in financial reporting

## Financial Strategy in Different Growth Stages
Tailoring strategy to company lifecycle:

### Startup Stage
- **Financing Strategy** - Venture capital, angel investors, bootstrapping
- **Financial Focus** - Cash burn rate, runway, milestone funding
- **Risk Management** - Survival focus, limited risk capacity
- **Valuation Approach** - Future potential rather than current earnings
- **Exit Strategy Planning** - IPO, acquisition, next funding round

### Growth Stage
- **Financing Strategy** - Equity issuance, debt financing, retained earnings
- **Financial Focus** - Scaling operations, market share growth
- **Risk Management** - Balancing growth with financial stability
- **Investment Strategy** - Capital investment for expansion
- **Performance Metrics** - Revenue growth, market penetration

### Maturity Stage
- **Financing Strategy** - Debt capacity utilization, dividend policy
- **Financial Focus** - Profitability, cash flow generation, efficiency
- **Risk Management** - Protecting market position, managing decline risk
- **Investment Strategy** - Maintenance, efficiency improvements
- **Performance Metrics** - Return on capital, margins, free cash flow

### Decline/Renewal Stage
- **Financing Strategy** - Debt reduction, restructuring, divestitures
- **Financial Focus** - Cost reduction, cash preservation, turnaround
- **Risk Management** - Survival, restructuring success
- **Investment Strategy** - Selective investment, innovation
- **Performance Metrics** - Cash flow, restructuring progress

## Strategic Cost Management
Cost management aligned with strategy:
- **Strategic Cost Analysis** - Understanding cost drivers
- **Activity-Based Costing** - Accurate cost assignment to activities
- **Target Costing** - Designing costs out before production
- **Value Chain Analysis** - Cost analysis across entire value chain
- **Cost Leadership Strategy** - Achieving competitive advantage through cost

## Strategic Investment Decisions
Long-term investment alignment:
- **Strategic Fit Assessment** - How investments support strategy
- **Portfolio Management** - Balancing investment portfolio
- **Real Options Thinking** - Building flexibility into investments
- **Strategic Risk Assessment** - Considering strategic implications of risks
- **Post-Investment Review** - Learning from investment outcomes

## Strategic Financing Decisions
Long-term financing alignment:
- **Capital Structure Strategy** - Optimal debt-equity mix for strategy
- **Financing Timing** - Market conditions consideration
- **Investor Relations Strategy** - Communicating with capital providers
- **Dividend Policy Strategy** - Balancing retention and distribution
- **Risk Management Integration** - Financing considering risk profile

## Mergers and Acquisitions Strategy
Strategic approach to M&A:
- **Strategic Rationale** - Synergy, market power, diversification
- **Target Identification** - Strategic fit assessment
- **Valuation Strategy** - Determining appropriate acquisition price
- **Integration Planning** - Realizing projected synergies
- **Post-Merger Performance** - Measuring acquisition success

## Strategic Risk Management
Integrating risk with strategy:
- **Strategic Risk Identification** - Risks affecting strategic objectives
- **Risk Appetite Definition** - Amount of risk willing to accept
- **Risk Response Integration** - Aligning risk responses with strategy
- **Risk Culture Development** - Organizational attitude toward risk
- **Risk Reporting** - Communicating risk to decision-makers

## Financial Innovation and Strategy
Leveraging financial innovation:
- **Fintech Applications** - Technology-enabled financial solutions
- **Alternative Financing** - Crowdfunding, peer-to-peer lending
- **Blockchain Applications** - Smart contracts, decentralized finance
- **Data Analytics** - Predictive analytics for financial decisions
- **Digital Transformation** - Technology integration in financial operations

## Sustainability and Financial Strategy
Integrating sustainability:
- **ESG Integration** - Environmental, social, governance factors
- **Sustainable Financing** - Green bonds, sustainability-linked loans
- **Impact Measurement** - Measuring social and environmental impact
- **Stakeholder Capitalism** - Considering all stakeholders, not just shareholders
- **Long-term Value Creation** - Sustainable business practices

## Crisis Management and Financial Strategy
Preparing for and managing crises:
- **Crisis Preparedness** - Contingency planning, stress testing
- **Liquidity Management** - Maintaining crisis liquidity buffers
- **Communication Strategy** - Stakeholder communication during crisis
- **Recovery Planning** - Financial recovery strategies
- **Learning and Adaptation** - Improving based on crisis experience

## Strategic Financial Communication
Communicating financial strategy:
- **Investor Communication** - Clear communication with investors
- **Stakeholder Reporting** - Reporting to all relevant stakeholders
- **Transparency** - Open and honest financial communication
- **Strategic Storytelling** - Connecting financial results to strategy
- **Reputation Management** - Protecting financial reputation

## Performance Measurement and Strategy
Aligning measurement with strategy:
- **Balanced Scorecard** - Financial and non-financial measures
- **Key Performance Indicators** - Strategic metrics tracking
- **Benchmarking** - Comparing to competitors and best practices
- **Strategic Dashboard** - Visual representation of strategic performance
- **Feedback Loops** - Using performance data to adjust strategy

## Strategic Financial Leadership
Financial leadership in strategy:
- **CFO Strategic Role** - CFO as strategic partner to CEO
- **Financial Acumen Development** - Building financial skills across organization
- **Decision Support** - Providing financial insights for strategic decisions
- **Change Leadership** - Leading financial aspects of strategic change
- **Ethical Leadership** - Maintaining financial integrity

## Global Financial Strategy
International strategic considerations:
- **Global Capital Allocation** - Allocating capital across countries
- **Currency Strategy** - Managing multiple currencies strategically
- **Global Tax Strategy** - Optimizing global tax position
- **International Risk Strategy** - Managing global risks
- **Local Adaptation** - Adjusting financial strategy for local markets

## Digital Financial Strategy
Technology-driven financial strategy:
- **Digital Transformation** - Technology integration in finance function
- **Automation Strategy** - Automating financial processes
- **Data Strategy** - Leveraging data for strategic decisions
- **Cybersecurity Strategy** - Protecting financial systems and data
- **Innovation Culture** - Fostering financial innovation

## Future Trends in Strategic Finance
Emerging strategic considerations:
- **Artificial Intelligence** - AI in financial analysis and decision-making
- **Climate Finance** - Financial strategies addressing climate change
- **Inclusive Finance** - Financial inclusion strategies
- **Circular Economy** - Financial strategies for circular business models
- **Geopolitical Considerations** - Financial strategy in changing global landscape

## Implementing Financial Strategy
Turning strategy into action:
- **Strategic Planning Process** - Formal strategic planning
- **Resource Allocation** - Aligning resources with strategic priorities
- **Organizational Alignment** - Ensuring organization supports financial strategy
- **Change Management** - Managing strategic change implementation
- **Continuous Improvement** - Regularly reviewing and improving strategy`,
      quiz: [
        {
          id: 1,
          question: "What is strategic financial management?",
          options: [
            "Accounting management",
            "Short-term finance",
            "Aligning financial decisions with corporate strategy to create competitive advantage",
            "Basic finance"
          ],
          correctAnswer: 2,
          explanation: "Strategic financial management integrates financial planning and decision-making with overall business strategy to maximize long-term value."
        },
        {
          id: 2,
          question: "What is value-based management?",
          options: [
            "Cost management",
            "Profit management",
            "Management approach focusing on creating shareholder value as primary objective",
            "Value management"
          ],
          correctAnswer: 2,
          explanation: "VBM aligns company operations, measurements, and incentives with shareholder value creation, using metrics like EVA and focusing on value drivers."
        },
        {
          id: 3,
          question: "What is Economic Value Added (EVA)?",
          options: [
            "Market value",
            "Measure of economic profit: NOPAT minus capital charge",
            "Economic value",
            "Added value"
          ],
          correctAnswer: 1,
          explanation: "EVA = Net operating profit after taxes - (Capital × Cost of capital), measuring true economic profit after accounting for cost of all capital."
        },
        {
          id: 4,
          question: "What is the balanced scorecard?",
          options: [
            "Financial scorecard",
            "Strategic management system linking financial and non-financial measures across four perspectives",
            "Performance card",
            "Simple scorecard"
          ],
          correctAnswer: 1,
          explanation: "Balanced scorecard translates strategy into objectives and measures across financial, customer, internal process, and learning/growth perspectives."
        },
        {
          id: 5,
          question: "What are strategic risk management?",
          options: [
            "Basic risk management",
            "Operational risk",
            "Identifying and managing risks that could prevent achieving strategic objectives",
            "Financial risk only"
          ],
          correctAnswer: 2,
          explanation: "Strategic risk management focuses on risks that could fundamentally affect a company's strategy, competitive position, or ability to execute plans."
        },
        {
          id: 6,
          question: "What is activity-based costing?",
          options: [
            "Activity cost",
            "Costing method assigning costs to products based on activities required to produce them",
            "Simple costing",
            "Traditional costing"
          ],
          correctAnswer: 1,
          explanation: "ABC assigns overhead costs to products based on the activities required to produce them, providing more accurate product costing than traditional methods."
        },
        {
          id: 7,
          question: "What is target costing?",
          options: [
            "Price setting",
            "Cost target",
            "Designing costs out of products before production to achieve desired profit margin",
            "Target price"
          ],
          correctAnswer: 2,
          explanation: "Target costing determines maximum allowable cost for a product based on market price minus desired profit, then designs product to meet that cost."
        },
        {
          id: 8,
          question: "What is value chain analysis?",
          options: [
            "Analyzing sequence of activities from raw materials to final product to identify value-added steps",
            "Value analysis",
            "Chain analysis",
            "Supply analysis"
          ],
          correctAnswer: 0,
          explanation: "Value chain analysis examines each activity in creating and delivering a product/service to identify where value is added and costs incurred."
        },
        {
          id: 9,
          question: "What is the strategic role of CFO?",
          options: [
            "Bookkeeping role",
            "Reporting role",
            "Strategic partner to CEO in formulating and executing business strategy",
            "Accounting role"
          ],
          correctAnswer: 2,
          explanation: "Modern CFOs serve as strategic partners to CEOs, providing financial insights for strategy, managing capital allocation, and driving value creation."
        },
        {
          id: 10,
          question: "What are key performance indicators in strategic finance?",
          options: [
            "Simple metrics",
            "Accounting measures",
            "Financial ratios",
            "Quantifiable measures tracking progress toward strategic objectives"
          ],
          correctAnswer: 3,
          explanation: "Strategic KPIs are metrics specifically chosen to track progress on strategic priorities, often including both financial and non-financial measures."
        },
        {
          id: 11,
          question: "What is strategic cost analysis?",
          options: [
            "Expense analysis",
            "Simple cost review",
            "Cost analysis",
            "Understanding cost structure and behavior in context of competitive strategy"
          ],
          correctAnswer: 3,
          explanation: "Strategic cost analysis examines costs in relation to competitive strategy, identifying cost drivers and opportunities for strategic cost advantage."
        },
        {
          id: 12,
          question: "What is sustainable finance?",
          options: [
            "Stable finance",
            "Continuous finance",
            "Financial services integrating environmental, social, governance criteria",
            "Long-term finance"
          ],
          correctAnswer: 2,
          explanation: "Sustainable finance considers ESG factors in financial decision-making to support sustainable economic growth and long-term value creation."
        },
        {
          id: 13,
          question: "What is digital transformation in finance?",
          options: [
            "Electronic payments",
            "Digital accounting",
            "Using digital technologies to transform financial operations and capabilities",
            "Online banking"
          ],
          correctAnswer: 2,
          explanation: "Digital transformation in finance involves leveraging technologies like AI, automation, and analytics to improve financial processes, insights, and value."
        },
        {
          id: 14,
          question: "What is crisis management in finance?",
          options: [
            "Risk management",
            "Preparing for and responding to financial crises to protect value and ensure continuity",
            "Crisis response",
            "Emergency management"
          ],
          correctAnswer: 1,
          explanation: "Financial crisis management involves planning for potential crises, maintaining liquidity buffers, and having response plans to protect financial stability."
        },
        {
          id: 15,
          question: "What is strategic investment portfolio management?",
          options: [
            "Portfolio management",
            "Simple investing",
            "Stock picking",
            "Managing collection of investments to support overall business strategy"
          ],
          correctAnswer: 3,
          explanation: "Strategic investment portfolio management allocates capital across investments to achieve strategic objectives while managing risk-return tradeoffs."
        },
        {
          id: 16,
          question: "What is stakeholder capitalism?",
          options: [
            "Business approach considering interests of all stakeholders, not just shareholders",
            "Capitalism only",
            "Owner focus",
            "Shareholder focus"
          ],
          correctAnswer: 0,
          explanation: "Stakeholder capitalism emphasizes creating value for all stakeholders including employees, customers, suppliers, communities, and shareholders."
        },
        {
          id: 17,
          question: "What is financial innovation strategy?",
          options: [
            "Technology only",
            "Simple innovation",
            "New products",
            "Strategic approach to developing and implementing new financial products, services, or processes"
          ],
          correctAnswer: 3,
          explanation: "Financial innovation strategy systematically develops new financial approaches to create competitive advantage, improve efficiency, or better serve customers."
        },
        {
          id: 18,
          question: "What is strategic financial communication?",
          options: [
            "Investor relations",
            "Simple communication",
            "Communicating financial information in way that supports strategic objectives",
            "Financial reporting"
          ],
          correctAnswer: 2,
          explanation: "Strategic financial communication tailors financial messaging to different stakeholders to build trust, support strategy, and enhance reputation."
        },
        {
          id: 19,
          question: "What is global financial strategy?",
          options: [
            "Currency strategy",
            "Foreign finance",
            "Integrated approach to managing finance across multiple countries to support global strategy",
            "International finance"
          ],
          correctAnswer: 2,
          explanation: "Global financial strategy coordinates financial management across countries to support worldwide business strategy while managing international risks."
        },
        {
          id: 20,
          question: "What is the implementation of financial strategy?",
          options: [
            "Translating strategic financial plans into actionable initiatives with resources and accountability",
            "Goal setting only",
            "Theoretical planning",
            "Planning only"
          ],
          correctAnswer: 0,
          explanation: "Strategy implementation involves allocating resources, establishing processes, assigning responsibilities, and monitoring progress to execute financial strategy."
        }
      ]
    }
  ],

  // 3. FINAL EXAM STRUCTURE - 40 Questions
  finalExam: {
    title: "Financial Management Diploma Final Examination",
    description: "Comprehensive assessment covering all 6 modules of Financial Management Diploma program",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What does the current ratio measure?",
        options: [
          "Asset utilization",
          "Long-term debt capacity",
          "Short-term liquidity and ability to pay current obligations",
          "Profitability efficiency"
        ],
        correctAnswer: 2,
        explanation: "Current ratio = Current assets ÷ Current liabilities, measuring ability to pay short-term obligations with short-term assets."
      },
      {
        id: 2,
        question: "What is Net Present Value (NPV)?",
        options: [
          "Average return",
          "Total project cost",
          "Payback period",
          "Present value of future cash flows minus initial investment"
        ],
        correctAnswer: 3,
        explanation: "NPV calculates present value of all future cash inflows minus initial investment, measuring project value in today's dollars."
      },
      {
        id: 3,
        question: "What is market risk?",
        options: [
          "Marketing campaign risk",
          "Risk of losses from changes in market prices or rates",
          "Product risk",
          "Market entry risk"
        ],
        correctAnswer: 1,
        explanation: "Market risk is potential loss from adverse movements in market prices including equity, interest rate, currency, and commodity risks."
      },
      {
        id: 4,
        question: "What is Modern Portfolio Theory?",
        options: [
          "Simple portfolio building",
          "Mathematical framework for constructing optimal portfolios considering risk-return tradeoff",
          "Market timing theory",
          "Stock picking theory"
        ],
        correctAnswer: 1,
        explanation: "MPT uses mathematical optimization to construct portfolios maximizing expected return for given risk level through diversification."
      },
      {
        id: 5,
        question: "What is foreign exchange risk?",
        options: [
          "Exchange building risk",
          "Risk of loss from adverse exchange rate movements",
          "Market risk only",
          "Foreign investment risk"
        ],
        correctAnswer: 1,
        explanation: "Foreign exchange risk is potential financial loss due to changes in exchange rates affecting foreign currency transactions or investments."
      },
      {
        id: 6,
        question: "What is strategic financial management?",
        options: [
          "Aligning financial decisions with corporate strategy to create competitive advantage",
          "Accounting management",
          "Short-term finance",
          "Basic finance"
        ],
        correctAnswer: 0,
        explanation: "Strategic financial management integrates financial planning and decision-making with overall business strategy to maximize long-term value."
      },
      {
        id: 7,
        question: "What is the formula for Return on Equity (ROE)?",
        options: [
          "Gross profit ÷ Revenue",
          "Revenue ÷ Total assets",
          "Net income ÷ Shareholders' equity",
          "Net income ÷ Total assets"
        ],
        correctAnswer: 2,
        explanation: "ROE = Net income ÷ Shareholders' equity, measuring how effectively company uses equity to generate profits."
      },
      {
        id: 8,
        question: "What is the time value of money?",
        options: [
          "Concept that money available now is worth more than same amount in future",
          "Currency value",
          "Money supply",
          "Money timing"
        ],
        correctAnswer: 0,
        explanation: "Time value of money recognizes money available today can earn interest, making it worth more than same amount received later."
      },
      {
        id: 9,
        question: "What does Value at Risk (VaR) measure?",
        options: [
          "Maximum potential loss over specified period at given confidence level",
          "Average loss",
          "Minimum loss",
          "Certain loss"
        ],
        correctAnswer: 0,
        explanation: "VaR estimates maximum loss over specific time period at given confidence level (e.g., 95% or 99%)."
      },
      {
        id: 10,
        question: "What does CAPM stand for and what does it estimate?",
        options: [
          "Capital Allocation Pricing Model - asset allocation",
          "Capital Analysis Pricing Model - price analysis",
          "Capital Asset Pricing Model - expected return based on systematic risk",
          "Capital Assessment Pricing Model - risk assessment"
        ],
        correctAnswer: 2,
        explanation: "CAPM estimates expected return = Risk-free rate + Beta × Market risk premium, linking return to systematic risk."
      },
      {
        id: 11,
        question: "What are the three types of foreign exchange exposure?",
        options: [
          "Short, medium, long term",
          "Small, medium, large",
          "Transaction, translation, economic exposure",
          "Minor, major, critical"
        ],
        correctAnswer: 2,
        explanation: "Transaction: future cash flows. Translation: converting financial statements. Economic: long-term competitive impact."
      },
      {
        id: 12,
        question: "What is value-based management?",
        options: [
          "Cost management",
          "Profit management",
          "Value management",
          "Management approach focusing on creating shareholder value as primary objective"
        ],
        correctAnswer: 3,
        explanation: "VBM aligns operations, measurements, and incentives with shareholder value creation using metrics like EVA."
      },
      {
        id: 13,
        question: "What does the debt-to-equity ratio indicate?",
        options: [
          "Short-term liquidity",
          "Profit margin",
          "Financial leverage and reliance on debt financing",
          "Inventory efficiency"
        ],
        correctAnswer: 2,
        explanation: "Debt-to-equity = Total liabilities ÷ Shareholders' equity, showing proportion of debt used relative to equity."
      },
      {
        id: 14,
        question: "What is Internal Rate of Return (IRR)?",
        options: [
          "Inflation rate",
          "Discount rate that makes NPV of project equal to zero",
          "Loan rate",
          "Interest rate"
        ],
        correctAnswer: 1,
        explanation: "IRR is discount rate at which present value of future cash flows equals initial investment (NPV = 0)."
      },
      {
        id: 15,
        question: "What is credit risk?",
        options: [
          "Risk that counterparty fails to meet financial obligations",
          "Market risk",
          "Interest rate risk",
          "Credit card risk"
        ],
        correctAnswer: 0,
        explanation: "Credit risk is possibility of loss from borrower's or counterparty's failure to repay loan or meet contractual obligations."
      },
      {
        id: 16,
        question: "What is beta in finance?",
        options: [
          "Testing phase",
          "Measure of stock's sensitivity to market movements",
          "Profit measure",
          "Risk-free measure"
        ],
        correctAnswer: 1,
        explanation: "Beta measures how much stock's returns move with overall market. Beta = 1 moves with market, >1 more volatile, <1 less volatile."
      },
      {
        id: 17,
        question: "What is purchasing power parity?",
        options: [
          "Purchase power",
          "Price parity",
          "Buying power",
          "Theory that exchange rates adjust to equalize purchasing power across countries"
        ],
        correctAnswer: 3,
        explanation: "PPP suggests exchange rates adjust so identical goods cost same in different countries when expressed in common currency."
      },
      {
        id: 18,
        question: "What is Economic Value Added (EVA)?",
        options: [
          "Measure of economic profit: NOPAT minus capital charge",
          "Economic value",
          "Added value",
          "Market value"
        ],
        correctAnswer: 0,
        explanation: "EVA = NOPAT - (Capital × Cost of capital), measuring true economic profit after accounting for cost of all capital."
      },
      {
        id: 19,
        question: "What is vertical analysis?",
        options: [
          "Comparing to previous years",
          "Industry comparison",
          "Expressing each financial statement item as percentage of a base amount",
          "Market analysis"
        ],
        correctAnswer: 2,
        explanation: "Vertical analysis expresses each item as percentage of base amount (revenue for income statement, total assets for balance sheet)."
      },
      {
        id: 20,
        question: "What does payback period measure?",
        options: [
          "Total profit",
          "Time required to recover initial investment from cash flows",
          "Return rate",
          "Project life"
        ],
        correctAnswer: 1,
        explanation: "Payback period calculates how long it takes for project's cash flows to repay initial investment."
      },
      {
        id: 21,
        question: "What are forward contracts?",
        options: [
          "Customized agreements to buy/sell asset at future date at agreed price",
          "Future plans",
          "Insurance contracts",
          "Stock options"
        ],
        correctAnswer: 0,
        explanation: "Forwards are private agreements between two parties to exchange asset at future date for price agreed today."
      },
      {
        id: 22,
        question: "What is the efficient frontier?",
        options: [
          "Market efficiency",
          "Set of optimal portfolios offering highest expected return for given risk level",
          "Trading efficiency",
          "Efficient markets"
        ],
        correctAnswer: 1,
        explanation: "Efficient frontier graphs portfolios maximizing expected return for each level of portfolio risk (standard deviation)."
      },
      {
        id: 23,
        question: "What is transaction exposure?",
        options: [
          "Risk from exchange rate changes affecting future foreign currency cash flows",
          "Transaction risk",
          "Translation risk",
          "Economic risk"
        ],
        correctAnswer: 0,
        explanation: "Transaction exposure is risk that exchange rate changes will affect value of future cash flows from existing foreign currency transactions."
      },
      {
        id: 24,
        question: "What is the balanced scorecard?",
        options: [
          "Financial scorecard",
          "Performance card",
          "Simple scorecard",
          "Strategic management system linking financial and non-financial measures across four perspectives"
        ],
        correctAnswer: 3,
        explanation: "Balanced scorecard translates strategy into objectives and measures across financial, customer, internal process, and learning/growth perspectives."
      },
      {
        id: 25,
        question: "What does free cash flow measure?",
        options: [
          "Investment cash only",
          "Operating cash only",
          "Total cash generated",
          "Cash available after capital expenditures for expansion, dividends, or debt reduction"
        ],
        correctAnswer: 3,
        explanation: "Free cash flow = Operating cash flow - Capital expenditures, showing cash available for expansion, dividends, or debt reduction."
      },
      {
        id: 26,
        question: "What is WACC?",
        options: [
          "Wealth accumulation cost",
          "Wage cost",
          "Weighted Average Cost of Capital - average rate firm pays for financing",
          "Working capital cost"
        ],
        correctAnswer: 2,
        explanation: "WACC = (E/V × Re) + (D/V × Rd × (1-Tc)), average rate company expects to pay to finance assets."
      },
      {
        id: 27,
        question: "What is liquidity risk?",
        options: [
          "Water risk",
          "Liquid asset risk",
          "Market risk",
          "Risk of being unable to meet cash flow needs or trade without significant price impact"
        ],
        correctAnswer: 3,
        explanation: "Liquidity risk includes both funding risk (inability to meet obligations) and market liquidity risk (inability to trade without affecting prices)."
      },
      {
        id: 28,
        question: "What is diversification?",
        options: [
          "Single investment",
          "Spreading investments across different assets to reduce overall risk",
          "Concentration",
          "Focus investing"
        ],
        correctAnswer: 1,
        explanation: "Diversification reduces portfolio risk by combining assets with less-than-perfect correlation."
      },
      {
        id: 29,
        question: "What is a forward contract in forex?",
        options: [
          "Agreement to exchange currencies at future date at predetermined rate",
          "Future contract",
          "Forward planning",
          "Option contract"
        ],
        correctAnswer: 0,
        explanation: "Forward contract locks in exchange rate today for currency transaction at specified future date."
      },
      {
        id: 30,
        question: "What is strategic risk management?",
        options: [
          "Operational risk",
          "Financial risk only",
          "Identifying and managing risks that could prevent achieving strategic objectives",
          "Basic risk management"
        ],
        correctAnswer: 2,
        explanation: "Strategic risk management focuses on risks that could fundamentally affect company's strategy or ability to execute plans."
      },
      {
        id: 31,
        question: "What is DuPont analysis?",
        options: [
          "Cash flow analysis",
          "Breaking down ROE into components to understand performance drivers",
          "Market ratio analysis",
          "Single ratio analysis"
        ],
        correctAnswer: 1,
        explanation: "DuPont analysis decomposes ROE into profit margin, asset turnover, and financial leverage components."
      },
      {
        id: 32,
        question: "What is sensitivity analysis in capital budgeting?",
        options: [
          "Employee sensitivity",
          "Testing how NPV changes when one assumption is varied",
          "Market sensitivity",
          "Price sensitivity"
        ],
        correctAnswer: 1,
        explanation: "Sensitivity analysis examines how changes in one input variable affect project's NPV."
      },
      {
        id: 33,
        question: "What are futures contracts?",
        options: [
          "Forward contracts",
          "Option contracts",
          "Standardized exchange-traded contracts to buy/sell asset at future date",
          "Future predictions"
        ],
        correctAnswer: 2,
        explanation: "Futures are standardized contracts traded on exchanges to buy/sell assets at future dates with daily mark-to-market."
      },
      {
        id: 34,
        question: "What are the three forms of Efficient Market Hypothesis?",
        options: [
          "Low, medium, high",
          "Slow, medium, fast",
          "Weak, semi-strong, strong - based on information reflected in prices",
          "Simple, complex, complete"
        ],
        correctAnswer: 2,
        explanation: "Weak: historical info. Semi-strong: public info. Strong: all public and private info reflected in prices."
      },
      {
        id: 35,
        question: "What is translation exposure?",
        options: [
          "Language translation",
          "Transaction exposure",
          "Risk from converting foreign subsidiary financial statements to parent currency",
          "Economic exposure"
        ],
        correctAnswer: 2,
        explanation: "Translation exposure arises when consolidating foreign subsidiary financial statements into parent company reporting currency."
      },
      {
        id: 36,
        question: "What is activity-based costing?",
        options: [
          "Costing method assigning costs to products based on activities required to produce them",
          "Traditional costing",
          "Activity cost",
          "Simple costing"
        ],
        correctAnswer: 0,
        explanation: "ABC assigns overhead costs to products based on activities required, providing more accurate product costing."
      },
      {
        id: 37,
        question: "What are the 5 Cs of credit analysis?",
        options: [
          "Character, capacity, capital, collateral, conditions",
          "Capital, cash, character, cost, conditions",
          "Cost, credit, cash, collateral, coverage",
          "Cash, capital, collateral, credit, coverage"
        ],
        correctAnswer: 0,
        explanation: "5 Cs: Character (reputation), Capacity (ability to repay), Capital (investment), Collateral (security), Conditions (economic)."
      },
      {
        id: 38,
        question: "What are real options?",
        options: [
          "Real estate options",
          "Contract options",
          "Stock options",
          "Managerial flexibilities in investment decisions that create value"
        ],
        correctAnswer: 3,
        explanation: "Real options are opportunities to adjust investment decisions (expand, delay, abandon) that add value beyond basic NPV."
      },
      {
        id: 39,
        question: "What are options contracts?",
        options: [
          "Contracts giving right but not obligation to buy/sell asset at strike price",
          "Required contracts",
          "Optional agreements",
          "Future contracts"
        ],
        correctAnswer: 0,
        explanation: "Options provide right (but not obligation) to buy (call) or sell (put) asset at specified price within certain time period."
      },
      {
        id: 40,
        question: "What is fundamental analysis?",
        options: [
          "Evaluating securities by analyzing company financials, industry, economy",
          "Basic analysis",
          "Technical chart analysis",
          "Simple analysis"
        ],
        correctAnswer: 0,
        explanation: "Fundamental analysis evaluates securities by examining financial statements, management, competitors, and economic factors."
      }
    ]
  }
};
