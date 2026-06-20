// market-research-diploma.ts

export const marketResearchDiploma = {
  // COURSE METADATA & IDENTIFICATION
  id: "market-research-diploma",
  title: "Market Research (Diploma)",
  description: "Advanced market research techniques for strategic decision-making. Learn to design, execute, and analyze comprehensive market research studies to drive business growth and innovation.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Questionnaire Design (Certificate) or equivalent knowledge",
  icon: "📊",
  badge: "Diploma",
  learningOutcomes: [
    "Design comprehensive market research studies",
    "Apply advanced data collection methods",
    "Analyze complex market data",
    "Interpret research findings for business strategy",
    "Present research insights effectively",
    "Manage market research projects end-to-end"
  ],

  // MODULE ARCHITECTURE - 10 COMPREHENSIVE MODULES
  modules: [
    {
      id: 1,
      title: "Advanced Research Design",
      content: `
## Strategic Research Planning

Market research begins with a solid research design that aligns with business objectives. Advanced research design goes beyond basic surveys to create comprehensive studies that provide deep insights.

### Research Design Frameworks

Three advanced frameworks guide strategic research:
1. **Exploratory Research**: Used when little is known about a topic
2. **Descriptive Research**: Documents characteristics of markets
3. **Causal Research**: Determines cause-effect relationships

Each framework serves different purposes and requires different methodologies.

### Research Objectives Formulation

Clear objectives drive effective research:
- **Business Objectives**: What the company needs to achieve
- **Research Objectives**: What the research must accomplish
- **Information Needs**: Specific data required for decisions
- **Success Metrics**: How research success will be measured

Objectives should be SMART: Specific, Measurable, Achievable, Relevant, Time-bound.

### Research Proposals

Professional research proposals include:
- **Executive Summary**: Brief overview of the study
- **Background**: Context and business problem
- **Objectives**: Clear research goals
- **Methodology**: Detailed research approach
- **Timeline**: Project schedule with milestones
- **Budget**: Cost breakdown and justification
- **Deliverables**: Expected outputs and formats

A strong proposal secures buy-in and guides execution.

### Ethical Considerations

Advanced research maintains high ethical standards:
- **Informed Consent**: Participants understand and agree
- **Confidentiality**: Protecting participant information
- **Data Privacy**: Compliance with regulations
- **Transparency**: Clear about research purposes
- **Avoiding Harm**: Protecting participants from negative consequences

Ethical research builds trust and produces reliable data.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of research is used when little is known about a topic?",
          options: [
            "Causal Research",
            "Descriptive Research",
            "Exploratory Research",
            "Quantitative Research"
          ],
          correctAnswer: 2,
          explanation: "Exploratory research helps understand new or unclear topics before designing more structured studies."
        },
        {
          id: 2,
          question: "Which research documents characteristics of markets?",
          options: [
            "Qualitative Research",
            "Descriptive Research",
            "Exploratory Research",
            "Causal Research"
          ],
          correctAnswer: 1,
          explanation: "Descriptive research measures and describes market characteristics, behaviors, and trends."
        },
        {
          id: 3,
          question: "What determines cause-effect relationships?",
          options: [
            "Exploratory Research",
            "Secondary Research",
            "Descriptive Research",
            "Causal Research"
          ],
          correctAnswer: 3,
          explanation: "Causal research uses experiments to determine if changes in one variable cause changes in another."
        },
        {
          id: 4,
          question: "What does SMART stand for in research objectives?",
          options: [
            "Strategic, Meaningful, Actionable, Relevant, Timely",
            "Simple, Measurable, Achievable, Realistic, Timely",
            "Simple, Meaningful, Achievable, Relevant, Time-bound",
            "Specific, Measurable, Achievable, Relevant, Time-bound"
          ],
          correctAnswer: 3,
          explanation: "SMART objectives are Specific, Measurable, Achievable, Relevant, and Time-bound for clear guidance."
        },
        {
          id: 5,
          question: "What provides a brief overview of the study?",
          options: [
            "Methodology",
            "Budget",
            "Background",
            "Executive Summary"
          ],
          correctAnswer: 3,
          explanation: "The executive summary gives decision-makers a quick understanding of the research proposal."
        },
        {
          id: 6,
          question: "What section explains the business problem?",
          options: [
            "Background",
            "Timeline",
            "Objectives",
            "Executive Summary"
          ],
          correctAnswer: 0,
          explanation: "The background section provides context and explains why the research is needed."
        },
        {
          id: 7,
          question: "What details the research approach?",
          options: [
            "Background",
            "Methodology",
            "Budget",
            "Objectives"
          ],
          correctAnswer: 1,
          explanation: "The methodology section describes how the research will be conducted step by step."
        },
        {
          id: 8,
          question: "What includes project milestones?",
          options: [
            "Budget",
            "Timeline",
            "Methodology",
            "Deliverables"
          ],
          correctAnswer: 1,
          explanation: "The timeline outlines the project schedule with key milestones for tracking progress."
        },
        {
          id: 9,
          question: "What ethical principle requires participant understanding?",
          options: [
            "Informed Consent",
            "Data Privacy",
            "Transparency",
            "Confidentiality"
          ],
          correctAnswer: 0,
          explanation: "Informed consent means participants fully understand the research before agreeing to participate."
        },
        {
          id: 10,
          question: "What protects participant information?",
          options: [
            "Avoiding Harm",
            "Transparency",
            "Confidentiality",
            "Informed Consent"
          ],
          correctAnswer: 2,
          explanation: "Confidentiality ensures participant information is kept private and not disclosed improperly."
        },
        {
          id: 11,
          question: "What ensures compliance with regulations?",
          options: [
            "Data Privacy",
            "Confidentiality",
            "Avoiding Harm",
            "Transparency"
          ],
          correctAnswer: 0,
          explanation: "Data privacy compliance follows laws and regulations about collecting and using personal data."
        },
        {
          id: 12,
          question: "What means being clear about research purposes?",
          options: [
            "Informed Consent",
            "Avoiding Harm",
            "Data Privacy",
            "Transparency"
          ],
          correctAnswer: 3,
          explanation: "Transparency involves openly explaining research purposes, methods, and potential uses of data."
        },
        {
          id: 13,
          question: "What protects participants from negative consequences?",
          options: [
            "Informed Consent",
            "Avoiding Harm",
            "Data Privacy",
            "Transparency"
          ],
          correctAnswer: 1,
          explanation: "Avoiding harm means taking steps to prevent physical, psychological, or social harm to participants."
        },
        {
          id: 14,
          question: "How many research design frameworks were mentioned?",
          options: [
            "Two",
            "Four",
            "Five",
            "Three"
          ],
          correctAnswer: 3,
          explanation: "Three frameworks: exploratory, descriptive, and causal research."
        },
        {
          id: 15,
          question: "What drives effective research design?",
          options: [
            "Available budget",
            "Clear objectives",
            "Company size",
            "Time constraints"
          ],
          correctAnswer: 1,
          explanation: "Clear research objectives guide all design decisions and ensure the study addresses business needs."
        },
        {
          id: 16,
          question: "What should research objectives align with?",
          options: [
            "Business objectives",
            "Latest trends",
            "Available technology",
            "Competitor activities"
          ],
          correctAnswer: 0,
          explanation: "Research objectives must directly support business objectives to provide actionable insights."
        },
        {
          id: 17,
          question: "What secures buy-in for research projects?",
          options: [
            "Strong methodology",
            "Professional proposals",
            "Quick timeline",
            "Low cost"
          ],
          correctAnswer: 1,
          explanation: "Professional research proposals demonstrate planning and secure stakeholder approval."
        },
        {
          id: 18,
          question: "What builds trust in research?",
          options: [
            "Complex methods",
            "Long reports",
            "High budgets",
            "Ethical standards"
          ],
          correctAnswer: 3,
          explanation: "High ethical standards build trust with participants, clients, and stakeholders."
        },
        {
          id: 19,
          question: "What guides research execution?",
          options: [
            "Clear proposals",
            "Available tools",
            "Industry standards",
            "Competitor research"
          ],
          correctAnswer: 0,
          explanation: "Clear proposals provide a roadmap for executing research effectively."
        },
        {
          id: 20,
          question: "How many components were listed for research proposals?",
          options: [
            "Five",
            "Eleven",
            "Nine",
            "Seven"
          ],
          correctAnswer: 3,
          explanation: "Seven components: executive summary, background, objectives, methodology, timeline, budget, deliverables."
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Data Collection Methods",
      content: `
## Sophisticated Data Gathering

Advanced market research employs multiple data collection methods to gain comprehensive insights. Each method has strengths and limitations for different research questions.

### Quantitative Methods Expansion

Beyond basic surveys, advanced quantitative methods include:
- **Longitudinal Studies**: Tracking changes over time
- **Panel Research**: Repeated measurements from same respondents
- **Experimental Designs**: Controlled tests of causal relationships
- **Conjoint Analysis**: Measuring preferences for product features
- **MaxDiff Analysis**: Determining most and least important attributes

These methods provide robust statistical insights.

### Qualitative Methods Deep Dive

Advanced qualitative techniques include:
- **In-Depth Interviews**: One-on-one detailed conversations
- **Focus Groups**: Guided group discussions
- **Ethnographic Research**: Observing behavior in natural settings
- **Diary Studies**: Participants record experiences over time
- **Online Communities**: Extended engagement with target audiences

Qualitative methods uncover underlying motivations and contexts.

### Mixed Methods Approach

Combining quantitative and qualitative methods:
- **Sequential Design**: One method informs the next
- **Concurrent Design**: Both methods used simultaneously
- **Transformative Design**: Methods integrated for deeper insights
- **Triangulation**: Using multiple methods to validate findings

Mixed methods provide both breadth and depth of understanding.

### Technology-Enabled Methods

Modern data collection technologies:
- **Mobile Surveys**: Reaching respondents anywhere
- **Social Media Listening**: Analyzing online conversations
- **Web Analytics**: Tracking digital behavior
- **Eye Tracking**: Measuring visual attention
- **Biometric Measures**: Physiological responses to stimuli

Technology expands research possibilities and efficiency.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What tracks changes over time with same respondents?",
          options: [
            "Conjoint Analysis",
            "Cross-sectional Studies",
            "Experimental Designs",
            "Longitudinal Studies"
          ],
          correctAnswer: 3,
          explanation: "Longitudinal studies follow the same respondents over time to track changes and trends."
        },
        {
          id: 2,
          question: "What involves repeated measurements from same people?",
          options: [
            "Longitudinal Studies",
            "Panel Research",
            "MaxDiff Analysis",
            "Experimental Designs"
          ],
          correctAnswer: 1,
          explanation: "Panel research collects data repeatedly from the same group of respondents over time."
        },
        {
          id: 3,
          question: "What tests causal relationships in controlled settings?",
          options: [
            "Experimental Designs",
            "Panel Research",
            "Conjoint Analysis",
            "Focus Groups"
          ],
          correctAnswer: 0,
          explanation: "Experimental designs manipulate variables in controlled settings to test cause-effect relationships."
        },
        {
          id: 4,
          question: "What measures preferences for product features?",
          options: [
            "Conjoint Analysis",
            "In-Depth Interviews",
            "MaxDiff Analysis",
            "Experimental Designs"
          ],
          correctAnswer: 0,
          explanation: "Conjoint analysis measures how consumers value different product features and attributes."
        },
        {
          id: 5,
          question: "What determines most and least important attributes?",
          options: [
            "MaxDiff Analysis",
            "Conjoint Analysis",
            "Ethnographic Research",
            "Longitudinal Studies"
          ],
          correctAnswer: 0,
          explanation: "MaxDiff analysis identifies which attributes are most and least important to consumers."
        },
        {
          id: 6,
          question: "What involves one-on-one detailed conversations?",
          options: [
            "In-Depth Interviews",
            "Diary Studies",
            "Online Communities",
            "Focus Groups"
          ],
          correctAnswer: 0,
          explanation: "In-depth interviews provide detailed individual perspectives through extended conversations."
        },
        {
          id: 7,
          question: "What uses guided group discussions?",
          options: [
            "Ethnographic Research",
            "Diary Studies",
            "In-Depth Interviews",
            "Focus Groups"
          ],
          correctAnswer: 3,
          explanation: "Focus groups gather insights through moderated discussions with multiple participants."
        },
        {
          id: 8,
          question: "What observes behavior in natural settings?",
          options: [
            "Diary Studies",
            "Ethnographic Research",
            "Online Communities",
            "Focus Groups"
          ],
          correctAnswer: 1,
          explanation: "Ethnographic research observes people in their natural environments to understand context."
        },
        {
          id: 9,
          question: "What has participants record experiences over time?",
          options: [
            "Online Communities",
            "Ethnographic Research",
            "In-Depth Interviews",
            "Diary Studies"
          ],
          correctAnswer: 3,
          explanation: "Diary studies involve participants recording experiences, thoughts, or behaviors over time."
        },
        {
          id: 10,
          question: "What involves extended engagement with audiences?",
          options: [
            "Online Communities",
            "Diary Studies",
            "Focus Groups",
            "Experimental Designs"
          ],
          correctAnswer: 0,
          explanation: "Online communities maintain ongoing engagement with target audiences for deeper insights."
        },
        {
          id: 11,
          question: "What design has one method inform the next?",
          options: [
            "Triangulation",
            "Concurrent Design",
            "Sequential Design",
            "Transformative Design"
          ],
          correctAnswer: 2,
          explanation: "Sequential design uses results from one method to inform the design of the next method."
        },
        {
          id: 12,
          question: "What uses both methods simultaneously?",
          options: [
            "Sequential Design",
            "Triangulation",
            "Concurrent Design",
            "Transformative Design"
          ],
          correctAnswer: 2,
          explanation: "Concurrent design employs quantitative and qualitative methods at the same time."
        },
        {
          id: 13,
          question: "What integrates methods for deeper insights?",
          options: [
            "Triangulation",
            "Concurrent Design",
            "Sequential Design",
            "Transformative Design"
          ],
          correctAnswer: 3,
          explanation: "Transformative design fully integrates methods to address complex research questions."
        },
        {
          id: 14,
          question: "What uses multiple methods to validate findings?",
          options: [
            "Triangulation",
            "Sequential Design",
            "Concurrent Design",
            "Transformative Design"
          ],
          correctAnswer: 0,
          explanation: "Triangulation strengthens findings by using multiple methods to study the same phenomenon."
        },
        {
          id: 15,
          question: "What reaches respondents anywhere via mobile devices?",
          options: [
            "Social Media Listening",
            "Eye Tracking",
            "Mobile Surveys",
            "Web Analytics"
          ],
          correctAnswer: 2,
          explanation: "Mobile surveys allow data collection from respondents anywhere using smartphones or tablets."
        },
        {
          id: 16,
          question: "What analyzes online conversations?",
          options: [
            "Social Media Listening",
            "Biometric Measures",
            "Mobile Surveys",
            "Web Analytics"
          ],
          correctAnswer: 0,
          explanation: "Social media listening analyzes conversations and sentiment on social media platforms."
        },
        {
          id: 17,
          question: "What tracks digital behavior on websites?",
          options: [
            "Web Analytics",
            "Eye Tracking",
            "Mobile Surveys",
            "Social Media Listening"
          ],
          correctAnswer: 0,
          explanation: "Web analytics track user behavior on websites and digital platforms."
        },
        {
          id: 18,
          question: "What measures visual attention?",
          options: [
            "Mobile Surveys",
            "Web Analytics",
            "Biometric Measures",
            "Eye Tracking"
          ],
          correctAnswer: 3,
          explanation: "Eye tracking measures where people look and how long they focus on different elements."
        },
        {
          id: 19,
          question: "What measures physiological responses?",
          options: [
            "Biometric Measures",
            "Web Analytics",
            "Social Media Listening",
            "Eye Tracking"
          ],
          correctAnswer: 0,
          explanation: "Biometric measures track physiological responses like heart rate, skin conductance, or brain activity."
        },
        {
          id: 20,
          question: "How many quantitative methods were specifically listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five quantitative methods: longitudinal studies, panel research, experimental designs, conjoint analysis, MaxDiff analysis."
        }
      ]
    },
    {
      id: 3,
      title: "Sampling Strategies",
      content: `
## Advanced Sampling Techniques

Sampling determines who participates in research. Advanced strategies ensure samples are representative, efficient, and appropriate for research objectives.

### Probability Sampling Methods

Methods where every population member has known selection probability:
- **Simple Random Sampling**: Equal chance for every member
- **Systematic Sampling**: Selecting every nth member
- **Stratified Sampling**: Dividing population into subgroups
- **Cluster Sampling**: Selecting groups rather than individuals
- **Multistage Sampling**: Combining multiple sampling methods

Probability sampling allows statistical generalization to populations.

### Non-Probability Sampling Methods

Methods without known selection probabilities:
- **Convenience Sampling**: Easily accessible participants
- **Judgmental Sampling**: Expert selection of participants
- **Quota Sampling**: Ensuring sample matches population proportions
- **Snowball Sampling**: Participants refer others
- **Purposive Sampling**: Selecting specific types of participants

Non-probability sampling is often faster and cheaper.

### Sample Size Determination

Factors affecting sample size decisions:
- **Population Size**: Larger populations may need larger samples
- **Confidence Level**: How certain you want to be (usually 95%)
- **Margin of Error**: Acceptable error in estimates
- **Population Variability**: More variability requires larger samples
- **Analysis Requirements**: Complex analyses may need larger samples
- **Budget and Time**: Practical constraints on sample size

Statistical formulas calculate required sample sizes.

### Sampling Challenges and Solutions

Common sampling issues and how to address them:
- **Non-response Bias**: People who don't participate differ from those who do
- **Coverage Error**: Sampling frame doesn't match population
- **Selection Bias**: Systematic exclusion of certain groups
- **Sampling Error**: Natural variation between sample and population
- **Measurement Error**: Problems with how data is collected

Advanced researchers anticipate and mitigate these challenges.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What gives equal chance to every population member?",
          options: [
            "Stratified Sampling",
            "Cluster Sampling",
            "Systematic Sampling",
            "Simple Random Sampling"
          ],
          correctAnswer: 3,
          explanation: "Simple random sampling gives every population member an equal chance of selection."
        },
        {
          id: 2,
          question: "What selects every nth member from a list?",
          options: [
            "Simple Random Sampling",
            "Stratified Sampling",
            "Systematic Sampling",
            "Multistage Sampling"
          ],
          correctAnswer: 2,
          explanation: "Systematic sampling selects participants at regular intervals from a sampling frame."
        },
        {
          id: 3,
          question: "What divides population into subgroups?",
          options: [
            "Stratified Sampling",
            "Convenience Sampling",
            "Systematic Sampling",
            "Cluster Sampling"
          ],
          correctAnswer: 0,
          explanation: "Stratified sampling divides the population into subgroups (strata) and samples from each."
        },
        {
          id: 4,
          question: "What selects groups rather than individuals?",
          options: [
            "Cluster Sampling",
            "Stratified Sampling",
            "Judgmental Sampling",
            "Multistage Sampling"
          ],
          correctAnswer: 0,
          explanation: "Cluster sampling selects groups or clusters of participants rather than individuals."
        },
        {
          id: 5,
          question: "What combines multiple sampling methods?",
          options: [
            "Simple Random Sampling",
            "Quota Sampling",
            "Multistage Sampling",
            "Cluster Sampling"
          ],
          correctAnswer: 2,
          explanation: "Multistage sampling uses two or more sampling methods in sequence."
        },
        {
          id: 6,
          question: "What uses easily accessible participants?",
          options: [
            "Snowball Sampling",
            "Quota Sampling",
            "Judgmental Sampling",
            "Convenience Sampling"
          ],
          correctAnswer: 3,
          explanation: "Convenience sampling selects participants who are easily available or accessible."
        },
        {
          id: 7,
          question: "What involves expert selection of participants?",
          options: [
            "Judgmental Sampling",
            "Purposive Sampling",
            "Convenience Sampling",
            "Quota Sampling"
          ],
          correctAnswer: 0,
          explanation: "Judgmental sampling relies on researcher judgment to select appropriate participants."
        },
        {
          id: 8,
          question: "What ensures sample matches population proportions?",
          options: [
            "Purposive Sampling",
            "Snowball Sampling",
            "Judgmental Sampling",
            "Quota Sampling"
          ],
          correctAnswer: 3,
          explanation: "Quota sampling ensures the sample includes specified proportions of different subgroups."
        },
        {
          id: 9,
          question: "What has participants refer others?",
          options: [
            "Snowball Sampling",
            "Convenience Sampling",
            "Purposive Sampling",
            "Quota Sampling"
          ],
          correctAnswer: 0,
          explanation: "Snowball sampling uses current participants to refer or recruit additional participants."
        },
        {
          id: 10,
          question: "What selects specific types of participants?",
          options: [
            "Judgmental Sampling",
            "Quota Sampling",
            "Purposive Sampling",
            "Snowball Sampling"
          ],
          correctAnswer: 2,
          explanation: "Purposive sampling deliberately selects specific types of participants for the study."
        },
        {
          id: 11,
          question: "What affects how certain you want to be about results?",
          options: [
            "Population Size",
            "Population Variability",
            "Confidence Level",
            "Margin of Error"
          ],
          correctAnswer: 2,
          explanation: "Confidence level (usually 95%) indicates how certain you want to be that results are accurate."
        },
        {
          id: 12,
          question: "What is acceptable error in estimates?",
          options: [
            "Analysis Requirements",
            "Population Variability",
            "Confidence Level",
            "Margin of Error"
          ],
          correctAnswer: 3,
          explanation: "Margin of error is the acceptable amount of error in sample estimates compared to population values."
        },
        {
          id: 13,
          question: "What requires larger samples when high?",
          options: [
            "Confidence Level",
            "Budget and Time",
            "Margin of Error",
            "Population Variability"
          ],
          correctAnswer: 3,
          explanation: "Higher population variability requires larger samples to achieve accurate estimates."
        },
        {
          id: 14,
          question: "What may need larger samples for complex analyses?",
          options: [
            "Analysis Requirements",
            "Population Size",
            "Population Variability",
            "Budget and Time"
          ],
          correctAnswer: 0,
          explanation: "Complex statistical analyses often require larger sample sizes for reliable results."
        },
        {
          id: 15,
          question: "What imposes practical limits on sample size?",
          options: [
            "Population Size",
            "Budget and Time",
            "Analysis Requirements",
            "Confidence Level"
          ],
          correctAnswer: 1,
          explanation: "Budget and time constraints often determine maximum feasible sample sizes."
        },
        {
          id: 16,
          question: "What occurs when non-participants differ from participants?",
          options: [
            "Sampling Error",
            "Coverage Error",
            "Non-response Bias",
            "Selection Bias"
          ],
          correctAnswer: 2,
          explanation: "Non-response bias occurs when people who don't participate differ systematically from those who do."
        },
        {
          id: 17,
          question: "What happens when sampling frame doesn't match population?",
          options: [
            "Measurement Error",
            "Selection Bias",
            "Coverage Error",
            "Non-response Bias"
          ],
          correctAnswer: 2,
          explanation: "Coverage error occurs when the sampling frame excludes parts of the target population."
        },
        {
          id: 18,
          question: "What is systematic exclusion of certain groups?",
          options: [
            "Sampling Error",
            "Measurement Error",
            "Coverage Error",
            "Selection Bias"
          ],
          correctAnswer: 3,
          explanation: "Selection bias occurs when certain groups are systematically excluded from the sample."
        },
        {
          id: 19,
          question: "What is natural variation between sample and population?",
          options: [
            "Non-response Bias",
            "Sampling Error",
            "Selection Bias",
            "Measurement Error"
          ],
          correctAnswer: 1,
          explanation: "Sampling error is the natural statistical variation between sample results and true population values."
        },
        {
          id: 20,
          question: "How many probability sampling methods were listed?",
          options: [
            "Nine",
            "Seven",
            "Three",
            "Five"
          ],
          correctAnswer: 3,
          explanation: "Five probability methods: simple random, systematic, stratified, cluster, and multistage sampling."
        }
      ]
    },
    {
      id: 4,
      title: "Data Analysis Techniques",
      content: `
## Advanced Statistical Analysis

Sophisticated data analysis transforms raw data into actionable insights. Advanced techniques reveal patterns, relationships, and predictions beyond basic statistics.

### Descriptive Analysis Deep Dive

Beyond basic statistics:
- **Measures of Central Tendency**: Mean, median, mode with context
- **Measures of Dispersion**: Standard deviation, variance, range
- **Distribution Analysis**: Skewness, kurtosis, normal distribution tests
- **Cross-tabulation**: Relationships between categorical variables
- **Trend Analysis**: Patterns over time

Descriptive analysis provides foundation for advanced techniques.

### Inferential Statistics

Drawing conclusions about populations from samples:
- **Hypothesis Testing**: Testing assumptions about populations
- **Confidence Intervals**: Range where population parameter likely falls
- **T-tests**: Comparing means between two groups
- **ANOVA**: Comparing means among multiple groups
- **Chi-square Tests**: Testing relationships between categorical variables

Inferential statistics support generalization from samples to populations.

### Multivariate Analysis

Analyzing multiple variables simultaneously:
- **Regression Analysis**: Predicting relationships between variables
- **Factor Analysis**: Identifying underlying dimensions
- **Cluster Analysis**: Grouping similar cases together
- **Discriminant Analysis**: Classifying cases into groups
- **Conjoint Analysis**: Measuring attribute importance

Multivariate techniques reveal complex relationships.

### Data Visualization for Analysis

Visual techniques that aid analysis:
- **Scatter Plots**: Visualizing relationships between variables
- **Box Plots**: Showing distribution and outliers
- **Heat Maps**: Visualizing matrix data
- **Decision Trees**: Showing classification paths
- **Network Diagrams**: Visualizing relationships

Visualization helps identify patterns and communicate findings.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What includes mean, median, and mode?",
          options: [
            "Measures of Dispersion",
            "Distribution Analysis",
            "Cross-tabulation",
            "Measures of Central Tendency"
          ],
          correctAnswer: 3,
          explanation: "Measures of central tendency describe the center or typical value of a dataset."
        },
        {
          id: 2,
          question: "What includes standard deviation and variance?",
          options: [
            "Distribution Analysis",
            "Measures of Dispersion",
            "Measures of Central Tendency",
            "Trend Analysis"
          ],
          correctAnswer: 1,
          explanation: "Measures of dispersion describe how spread out or variable the data is."
        },
        {
          id: 3,
          question: "What examines skewness and kurtosis?",
          options: [
            "Measures of Dispersion",
            "Trend Analysis",
            "Cross-tabulation",
            "Distribution Analysis"
          ],
          correctAnswer: 3,
          explanation: "Distribution analysis examines the shape and characteristics of data distributions."
        },
        {
          id: 4,
          question: "What shows relationships between categorical variables?",
          options: [
            "Distribution Analysis",
            "Hypothesis Testing",
            "Trend Analysis",
            "Cross-tabulation"
          ],
          correctAnswer: 3,
          explanation: "Cross-tabulation shows how two categorical variables relate to each other."
        },
        {
          id: 5,
          question: "What identifies patterns over time?",
          options: [
            "Trend Analysis",
            "Cross-tabulation",
            "Confidence Intervals",
            "Hypothesis Testing"
          ],
          correctAnswer: 0,
          explanation: "Trend analysis identifies and analyzes patterns, changes, or movements over time."
        },
        {
          id: 6,
          question: "What tests assumptions about populations?",
          options: [
            "Trend Analysis",
            "Confidence Intervals",
            "Hypothesis Testing",
            "T-tests"
          ],
          correctAnswer: 2,
          explanation: "Hypothesis testing uses sample data to test assumptions or claims about populations."
        },
        {
          id: 7,
          question: "What shows where population parameter likely falls?",
          options: [
            "Confidence Intervals",
            "T-tests",
            "Hypothesis Testing",
            "ANOVA"
          ],
          correctAnswer: 0,
          explanation: "Confidence intervals provide a range where the true population parameter is likely to be."
        },
        {
          id: 8,
          question: "What compares means between two groups?",
          options: [
            "ANOVA",
            "Confidence Intervals",
            "Chi-square Tests",
            "T-tests"
          ],
          correctAnswer: 3,
          explanation: "T-tests compare whether means of two groups are statistically different."
        },
        {
          id: 9,
          question: "What compares means among multiple groups?",
          options: [
            "ANOVA",
            "Regression Analysis",
            "T-tests",
            "Chi-square Tests"
          ],
          correctAnswer: 0,
          explanation: "ANOVA (Analysis of Variance) compares means across three or more groups."
        },
        {
          id: 10,
          question: "What tests relationships between categorical variables?",
          options: [
            "Regression Analysis",
            "Factor Analysis",
            "Chi-square Tests",
            "ANOVA"
          ],
          correctAnswer: 2,
          explanation: "Chi-square tests examine relationships between categorical variables."
        },
        {
          id: 11,
          question: "What predicts relationships between variables?",
          options: [
            "Regression Analysis",
            "Factor Analysis",
            "Cluster Analysis",
            "Chi-square Tests"
          ],
          correctAnswer: 0,
          explanation: "Regression analysis models and predicts relationships between dependent and independent variables."
        },
        {
          id: 12,
          question: "What identifies underlying dimensions?",
          options: [
            "Discriminant Analysis",
            "Factor Analysis",
            "Regression Analysis",
            "Cluster Analysis"
          ],
          correctAnswer: 1,
          explanation: "Factor analysis identifies underlying factors or dimensions that explain patterns in data."
        },
        {
          id: 13,
          question: "What groups similar cases together?",
          options: [
            "Conjoint Analysis",
            "Factor Analysis",
            "Discriminant Analysis",
            "Cluster Analysis"
          ],
          correctAnswer: 3,
          explanation: "Cluster analysis groups cases that are similar to each other and different from other groups."
        },
        {
          id: 14,
          question: "What classifies cases into groups?",
          options: [
            "Discriminant Analysis",
            "Cluster Analysis",
            "Regression Analysis",
            "Conjoint Analysis"
          ],
          correctAnswer: 0,
          explanation: "Discriminant analysis classifies cases into predefined groups based on multiple variables."
        },
        {
          id: 15,
          question: "What visualizes relationships between variables?",
          options: [
            "Decision Trees",
            "Box Plots",
            "Scatter Plots",
            "Heat Maps"
          ],
          correctAnswer: 2,
          explanation: "Scatter plots show relationships between two continuous variables as points on a graph."
        },
        {
          id: 16,
          question: "What shows distribution and outliers?",
          options: [
            "Box Plots",
            "Heat Maps",
            "Scatter Plots",
            "Network Diagrams"
          ],
          correctAnswer: 0,
          explanation: "Box plots display data distribution, median, quartiles, and outliers in a standardized format."
        },
        {
          id: 17,
          question: "What visualizes matrix data?",
          options: [
            "Decision Trees",
            "Heat Maps",
            "Network Diagrams",
            "Box Plots"
          ],
          correctAnswer: 1,
          explanation: "Heat maps use color intensity to represent values in a matrix or table format."
        },
        {
          id: 18,
          question: "What shows classification paths?",
          options: [
            "Decision Trees",
            "Network Diagrams",
            "Scatter Plots",
            "Heat Maps"
          ],
          correctAnswer: 0,
          explanation: "Decision trees show classification or decision paths based on multiple conditions."
        },
        {
          id: 19,
          question: "What visualizes relationships between entities?",
          options: [
            "Network Diagrams",
            "Heat Maps",
            "Box Plots",
            "Decision Trees"
          ],
          correctAnswer: 0,
          explanation: "Network diagrams show relationships and connections between entities or nodes."
        },
        {
          id: 20,
          question: "How many multivariate analysis techniques were listed?",
          options: [
            "Three",
            "Seven",
            "Five",
            "Nine"
          ],
          correctAnswer: 2,
          explanation: "Five multivariate techniques: regression, factor analysis, cluster analysis, discriminant analysis, conjoint analysis."
        }
      ]
    },
    {
      id: 5,
      title: "Consumer Behavior Analysis",
      content: `
## Understanding Market Psychology

Consumer behavior analysis examines why people make purchase decisions. Advanced techniques uncover motivations, influences, and decision processes.

### Consumer Decision Process

Stages consumers go through when making decisions:
- **Problem Recognition**: Becoming aware of a need
- **Information Search**: Seeking information about options
- **Evaluation of Alternatives**: Comparing different choices
- **Purchase Decision**: Selecting and buying a product
- **Post-Purchase Evaluation**: Assessing satisfaction after purchase

Understanding each stage helps target marketing efforts effectively.

### Influences on Consumer Behavior

Factors affecting purchase decisions:
- **Cultural Factors**: Culture, subculture, social class
- **Social Factors**: Reference groups, family, social roles
- **Personal Factors**: Age, occupation, lifestyle, personality
- **Psychological Factors**: Motivation, perception, learning, beliefs
- **Situational Factors**: Physical environment, time, mood

Multiple influences interact to shape behavior.

### Advanced Behavioral Models

Theoretical models explaining consumer behavior:
- **Theory of Planned Behavior**: Attitudes, norms, and control predict behavior
- **Consumer Decision Model**: Integrates multiple influences
- **Elaboration Likelihood Model**: Central vs. peripheral processing
- **Habitual Behavior Model**: Routine vs. deliberate decisions
- **Experiential Consumption Model**: Emotional and sensory experiences

Models provide frameworks for understanding complex behavior.

### Behavioral Research Methods

Specialized methods for studying behavior:
- **Observation Studies**: Watching behavior in natural settings
- **Experiments**: Testing causal relationships in behavior
- **Neuro-marketing**: Studying brain responses to marketing
- **Behavioral Economics**: Applying psychology to economic decisions
- **Digital Footprint Analysis**: Analyzing online behavior traces

Multiple methods provide comprehensive behavioral insights.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is becoming aware of a need?",
          options: [
            "Evaluation of Alternatives",
            "Information Search",
            "Purchase Decision",
            "Problem Recognition"
          ],
          correctAnswer: 3,
          explanation: "Problem recognition occurs when consumers become aware of a gap between actual and desired states."
        },
        {
          id: 2,
          question: "What involves seeking information about options?",
          options: [
            "Problem Recognition",
            "Purchase Decision",
            "Post-Purchase Evaluation",
            "Information Search"
          ],
          correctAnswer: 3,
          explanation: "Information search involves consumers gathering information about available products or services."
        },
        {
          id: 3,
          question: "What compares different choices?",
          options: [
            "Information Search",
            "Evaluation of Alternatives",
            "Post-Purchase Evaluation",
            "Purchase Decision"
          ],
          correctAnswer: 1,
          explanation: "Evaluation of alternatives involves comparing different options based on criteria important to the consumer."
        },
        {
          id: 4,
          question: "What is selecting and buying a product?",
          options: [
            "Purchase Decision",
            "Post-Purchase Evaluation",
            "Evaluation of Alternatives",
            "Problem Recognition"
          ],
          correctAnswer: 0,
          explanation: "The purchase decision is when the consumer selects a specific product and completes the transaction."
        },
        {
          id: 5,
          question: "What assesses satisfaction after purchase?",
          options: [
            "Post-Purchase Evaluation",
            "Problem Recognition",
            "Purchase Decision",
            "Information Search"
          ],
          correctAnswer: 0,
          explanation: "Post-purchase evaluation involves consumers assessing whether they are satisfied with their choice."
        },
        {
          id: 6,
          question: "What includes culture and social class?",
          options: [
            "Personal Factors",
            "Cultural Factors",
            "Social Factors",
            "Psychological Factors"
          ],
          correctAnswer: 1,
          explanation: "Cultural factors include broad cultural values, subcultures, and social class influences."
        },
        {
          id: 7,
          question: "What includes reference groups and family?",
          options: [
            "Social Factors",
            "Situational Factors",
            "Personal Factors",
            "Cultural Factors"
          ],
          correctAnswer: 0,
          explanation: "Social factors include influences from other people, such as reference groups, family, and social roles."
        },
        {
          id: 8,
          question: "What includes age and lifestyle?",
          options: [
            "Social Factors",
            "Personal Factors",
            "Psychological Factors",
            "Situational Factors"
          ],
          correctAnswer: 1,
          explanation: "Personal factors include demographic characteristics, lifestyle, personality, and self-concept."
        },
        {
          id: 9,
          question: "What includes motivation and perception?",
          options: [
            "Psychological Factors",
            "Cultural Factors",
            "Situational Factors",
            "Personal Factors"
          ],
          correctAnswer: 0,
          explanation: "Psychological factors include internal processes like motivation, perception, learning, and attitudes."
        },
        {
          id: 10,
          question: "What includes physical environment and time?",
          options: [
            "Psychological Factors",
            "Social Factors",
            "Situational Factors",
            "Cultural Factors"
          ],
          correctAnswer: 2,
          explanation: "Situational factors include temporary conditions like physical environment, time pressure, and mood."
        },
        {
          id: 11,
          question: "What predicts behavior from attitudes, norms, and control?",
          options: [
            "Theory of Planned Behavior",
            "Habitual Behavior Model",
            "Elaboration Likelihood Model",
            "Consumer Decision Model"
          ],
          correctAnswer: 0,
          explanation: "Theory of Planned Behavior predicts behavior based on attitudes, subjective norms, and perceived behavioral control."
        },
        {
          id: 12,
          question: "What integrates multiple influences on behavior?",
          options: [
            "Consumer Decision Model",
            "Theory of Planned Behavior",
            "Elaboration Likelihood Model",
            "Experiential Consumption Model"
          ],
          correctAnswer: 0,
          explanation: "The Consumer Decision Model integrates cultural, social, personal, and psychological influences."
        },
        {
          id: 13,
          question: "What distinguishes central vs. peripheral processing?",
          options: [
            "Consumer Decision Model",
            "Elaboration Likelihood Model",
            "Habitual Behavior Model",
            "Experiential Consumption Model"
          ],
          correctAnswer: 1,
          explanation: "Elaboration Likelihood Model distinguishes between careful thinking (central route) and heuristic processing (peripheral route)."
        },
        {
          id: 14,
          question: "What distinguishes routine vs. deliberate decisions?",
          options: [
            "Experiential Consumption Model",
            "Habitual Behavior Model",
            "Theory of Planned Behavior",
            "Elaboration Likelihood Model"
          ],
          correctAnswer: 1,
          explanation: "The Habitual Behavior Model distinguishes between automatic routine behaviors and deliberate decisions."
        },
        {
          id: 15,
          question: "What focuses on emotional and sensory experiences?",
          options: [
            "Experiential Consumption Model",
            "Habitual Behavior Model",
            "Theory of Planned Behavior",
            "Consumer Decision Model"
          ],
          correctAnswer: 0,
          explanation: "Experiential Consumption Model emphasizes emotional, sensory, and symbolic aspects of consumption."
        },
        {
          id: 16,
          question: "What watches behavior in natural settings?",
          options: [
            "Neuro-marketing",
            "Observation Studies",
            "Experiments",
            "Behavioral Economics"
          ],
          correctAnswer: 1,
          explanation: "Observation studies involve systematically watching and recording behavior in natural settings."
        },
        {
          id: 17,
          question: "What tests causal relationships in behavior?",
          options: [
            "Observation Studies",
            "Behavioral Economics",
            "Digital Footprint Analysis",
            "Experiments"
          ],
          correctAnswer: 3,
          explanation: "Experiments manipulate variables to test cause-effect relationships in consumer behavior."
        },
        {
          id: 18,
          question: "What studies brain responses to marketing?",
          options: [
            "Experiments",
            "Neuro-marketing",
            "Behavioral Economics",
            "Digital Footprint Analysis"
          ],
          correctAnswer: 1,
          explanation: "Neuro-marketing uses neuroscience techniques to study brain responses to marketing stimuli."
        },
        {
          id: 19,
          question: "What applies psychology to economic decisions?",
          options: [
            "Digital Footprint Analysis",
            "Observation Studies",
            "Neuro-marketing",
            "Behavioral Economics"
          ],
          correctAnswer: 3,
          explanation: "Behavioral economics applies psychological insights to understand economic decision-making."
        },
        {
          id: 20,
          question: "How many consumer decision stages are there?",
          options: [
            "Seven",
            "Five",
            "Nine",
            "Three"
          ],
          correctAnswer: 1,
          explanation: "Five stages: problem recognition, information search, evaluation of alternatives, purchase decision, post-purchase evaluation."
        }
      ]
    },
    {
      id: 6,
      title: "Competitive Intelligence",
      content: `
## Strategic Market Analysis

Competitive intelligence systematically gathers and analyzes information about competitors. Advanced techniques provide strategic insights for competitive advantage.

### Intelligence Gathering Methods

Systematic approaches to collecting competitor information:
- **Public Sources**: Annual reports, SEC filings, press releases
- **Industry Analysis**: Trade publications, conferences, associations
- **Customer Feedback**: What customers say about competitors
- **Employee Insights**: Information from current or former employees
- **Market Experiments**: Testing competitive responses

Multiple sources provide comprehensive intelligence.

### Competitor Analysis Frameworks

Structured approaches to analyzing competitors:
- **SWOT Analysis**: Strengths, Weaknesses, Opportunities, Threats
- **Porter's Five Forces**: Industry competitive forces analysis
- **Strategic Group Mapping**: Identifying competitor groups and positions
- **Value Chain Analysis**: Examining competitor activities
- **Benchmarking**: Comparing performance against competitors

Frameworks organize intelligence for strategic insights.

### Market Positioning Analysis

Understanding competitive positions in the market:
- **Perceptual Mapping**: Visualizing brand positions in consumers' minds
- **Gap Analysis**: Identifying unmet market needs
- **Market Share Analysis**: Measuring competitive positions
- **Growth Vector Analysis**: Analyzing competitor expansion directions
- **Strategic Intent Analysis**: Understanding competitor goals and motivations

Positioning analysis reveals competitive opportunities.

### Ethical Intelligence Practices

Conducting competitive intelligence ethically:
- **Legal Boundaries**: What information can be legally collected
- **Ethical Standards**: Professional codes of conduct
- **Transparent Methods**: Avoiding deception in gathering information
- **Respecting Confidentiality**: Not using improperly obtained information
- **Adding Value**: Using intelligence to improve competition, not harm it

Ethical practices maintain professional standards and legal compliance.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What includes annual reports and SEC filings?",
          options: [
            "Customer Feedback",
            "Employee Insights",
            "Public Sources",
            "Industry Analysis"
          ],
          correctAnswer: 2,
          explanation: "Public sources include legally required disclosures, reports, and publicly available information."
        },
        {
          id: 2,
          question: "What includes trade publications and conferences?",
          options: [
            "Employee Insights",
            "Market Experiments",
            "Industry Analysis",
            "Public Sources"
          ],
          correctAnswer: 2,
          explanation: "Industry analysis involves studying industry publications, events, and professional associations."
        },
        {
          id: 3,
          question: "What involves what customers say about competitors?",
          options: [
            "Employee Insights",
            "Industry Analysis",
            "Market Experiments",
            "Customer Feedback"
          ],
          correctAnswer: 3,
          explanation: "Customer feedback includes reviews, complaints, and discussions about competitor products or services."
        },
        {
          id: 4,
          question: "What uses information from current or former employees?",
          options: [
            "Employee Insights",
            "Public Sources",
            "Customer Feedback",
            "Market Experiments"
          ],
          correctAnswer: 0,
          explanation: "Employee insights can provide internal perspectives on competitor operations and strategies."
        },
        {
          id: 5,
          question: "What involves testing competitive responses?",
          options: [
            "Employee Insights",
            "Industry Analysis",
            "Customer Feedback",
            "Market Experiments"
          ],
          correctAnswer: 3,
          explanation: "Market experiments test how competitors respond to specific market actions or changes."
        },
        {
          id: 6,
          question: "What analyzes strengths, weaknesses, opportunities, threats?",
          options: [
            "Porter's Five Forces",
            "SWOT Analysis",
            "Value Chain Analysis",
            "Strategic Group Mapping"
          ],
          correctAnswer: 1,
          explanation: "SWOT analysis examines internal strengths/weaknesses and external opportunities/threats."
        },
        {
          id: 7,
          question: "What analyzes industry competitive forces?",
          options: [
            "Porter's Five Forces",
            "Benchmarking",
            "Strategic Group Mapping",
            "SWOT Analysis"
          ],
          correctAnswer: 0,
          explanation: "Porter's Five Forces analyzes competitive rivalry, supplier power, buyer power, threat of substitutes, and threat of new entrants."
        },
        {
          id: 8,
          question: "What identifies competitor groups and positions?",
          options: [
            "Strategic Group Mapping",
            "Benchmarking",
            "Porter's Five Forces",
            "Value Chain Analysis"
          ],
          correctAnswer: 0,
          explanation: "Strategic group mapping identifies clusters of competitors with similar strategies and market positions."
        },
        {
          id: 9,
          question: "What examines competitor activities?",
          options: [
            "SWOT Analysis",
            "Benchmarking",
            "Value Chain Analysis",
            "Strategic Group Mapping"
          ],
          correctAnswer: 2,
          explanation: "Value chain analysis examines the sequence of activities competitors use to create value."
        },
        {
          id: 10,
          question: "What compares performance against competitors?",
          options: [
            "Strategic Group Mapping",
            "Value Chain Analysis",
            "Porter's Five Forces",
            "Benchmarking"
          ],
          correctAnswer: 3,
          explanation: "Benchmarking compares performance metrics against competitors or industry standards."
        },
        {
          id: 11,
          question: "What visualizes brand positions in consumers' minds?",
          options: [
            "Gap Analysis",
            "Market Share Analysis",
            "Perceptual Mapping",
            "Growth Vector Analysis"
          ],
          correctAnswer: 2,
          explanation: "Perceptual mapping creates visual representations of how consumers perceive different brands."
        },
        {
          id: 12,
          question: "What identifies unmet market needs?",
          options: [
            "Gap Analysis",
            "Perceptual Mapping",
            "Strategic Intent Analysis",
            "Market Share Analysis"
          ],
          correctAnswer: 0,
          explanation: "Gap analysis identifies differences between current market offerings and customer needs or desires."
        },
        {
          id: 13,
          question: "What measures competitive positions?",
          options: [
            "Growth Vector Analysis",
            "Market Share Analysis",
            "Strategic Intent Analysis",
            "Gap Analysis"
          ],
          correctAnswer: 1,
          explanation: "Market share analysis measures each competitor's portion of total market sales or volume."
        },
        {
          id: 14,
          question: "What analyzes competitor expansion directions?",
          options: [
            "Strategic Intent Analysis",
            "Market Share Analysis",
            "Growth Vector Analysis",
            "Perceptual Mapping"
          ],
          correctAnswer: 2,
          explanation: "Growth vector analysis examines the directions in which competitors are expanding or diversifying."
        },
        {
          id: 15,
          question: "What understands competitor goals and motivations?",
          options: [
            "Growth Vector Analysis",
            "Gap Analysis",
            "Strategic Intent Analysis",
            "Market Share Analysis"
          ],
          correctAnswer: 2,
          explanation: "Strategic intent analysis examines what competitors are trying to achieve and their underlying motivations."
        },
        {
          id: 16,
          question: "What concerns what information can be legally collected?",
          options: [
            "Transparent Methods",
            "Legal Boundaries",
            "Respecting Confidentiality",
            "Ethical Standards"
          ],
          correctAnswer: 1,
          explanation: "Legal boundaries define what competitive intelligence activities are permitted by law."
        },
        {
          id: 17,
          question: "What involves professional codes of conduct?",
          options: [
            "Transparent Methods",
            "Legal Boundaries",
            "Adding Value",
            "Ethical Standards"
          ],
          correctAnswer: 3,
          explanation: "Ethical standards include professional guidelines for conducting competitive intelligence."
        },
        {
          id: 18,
          question: "What means avoiding deception in gathering information?",
          options: [
            "Transparent Methods",
            "Respecting Confidentiality",
            "Adding Value",
            "Ethical Standards"
          ],
          correctAnswer: 0,
          explanation: "Transparent methods involve gathering information openly without deception or misrepresentation."
        },
        {
          id: 19,
          question: "What means not using improperly obtained information?",
          options: [
            "Legal Boundaries",
            "Transparent Methods",
            "Adding Value",
            "Respecting Confidentiality"
          ],
          correctAnswer: 3,
          explanation: "Respecting confidentiality means not using information that was obtained improperly or is confidential."
        },
        {
          id: 20,
          question: "How many intelligence gathering methods were listed?",
          options: [
            "Three",
            "Seven",
            "Nine",
            "Five"
          ],
          correctAnswer: 3,
          explanation: "Five methods: public sources, industry analysis, customer feedback, employee insights, market experiments."
        }
      ]
    },
    {
      id: 7,
      title: "Market Segmentation",
      content: `
## Targeted Market Strategy

Market segmentation divides heterogeneous markets into homogeneous subgroups. Advanced segmentation enables precise targeting and positioning strategies.

### Segmentation Bases

Different ways to segment markets:
- **Demographic Segmentation**: Age, gender, income, education
- **Geographic Segmentation**: Location, region, climate, population density
- **Psychographic Segmentation**: Lifestyle, values, personality, interests
- **Behavioral Segmentation**: Usage patterns, benefits sought, loyalty status
- **Firmographic Segmentation**: For B2B markets - company size, industry, location

Multiple bases can be combined for sophisticated segmentation.

### Segmentation Evaluation Criteria

Assessing segment viability and attractiveness:
- **Measurable**: Can size and characteristics be measured?
- **Accessible**: Can segments be reached effectively?
- **Substantial**: Are segments large enough to be profitable?
- **Differentiable**: Do segments respond differently to marketing?
- **Actionable**: Can effective programs be developed for segments?

Segments must meet these criteria to be strategically useful.

### Target Market Selection

Choosing which segments to target:
- **Undifferentiated Strategy**: One marketing mix for entire market
- **Differentiated Strategy**: Different mixes for different segments
- **Concentrated Strategy**: Focusing on one or few segments
- **Micromarketing**: Customizing for individuals or local areas
- **Target Market Evaluation**: Assessing segment attractiveness and fit

Selection depends on company resources and market characteristics.

### Positioning Strategy

Creating distinct market positions:
- **Positioning Statements**: Clear statements of market position
- **Perceptual Maps**: Visual representations of competitive positions
- **Repositioning**: Changing market perceptions over time
- **Value Propositions**: Benefits offered to target segments
- **Positioning Implementation**: Communicating positions effectively

Positioning creates competitive advantage in target segments.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What segments by age, gender, and income?",
          options: [
            "Psychographic Segmentation",
            "Geographic Segmentation",
            "Behavioral Segmentation",
            "Demographic Segmentation"
          ],
          correctAnswer: 3,
          explanation: "Demographic segmentation divides markets based on population characteristics like age, gender, income, and education."
        },
        {
          id: 2,
          question: "What segments by location and region?",
          options: [
            "Demographic Segmentation",
            "Geographic Segmentation",
            "Psychographic Segmentation",
            "Firmographic Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Geographic segmentation divides markets based on location, region, climate, or population density."
        },
        {
          id: 3,
          question: "What segments by lifestyle and values?",
          options: [
            "Geographic Segmentation",
            "Behavioral Segmentation",
            "Psychographic Segmentation",
            "Firmographic Segmentation"
          ],
          correctAnswer: 2,
          explanation: "Psychographic segmentation divides markets based on lifestyle, values, personality, and interests."
        },
        {
          id: 4,
          question: "What segments by usage patterns and benefits sought?",
          options: [
            "Demographic Segmentation",
            "Behavioral Segmentation",
            "Firmographic Segmentation",
            "Psychographic Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Behavioral segmentation divides markets based on product usage, benefits sought, or loyalty status."
        },
        {
          id: 5,
          question: "What segments B2B markets by company characteristics?",
          options: [
            "Geographic Segmentation",
            "Firmographic Segmentation",
            "Behavioral Segmentation",
            "Demographic Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Firmographic segmentation divides business markets based on company size, industry, location, etc."
        },
        {
          id: 6,
          question: "What asks if segment size can be measured?",
          options: [
            "Differentiable",
            "Substantial",
            "Accessible",
            "Measurable"
          ],
          correctAnswer: 3,
          explanation: "Measurable means the segment's size and characteristics can be quantified and analyzed."
        },
        {
          id: 7,
          question: "What asks if segments can be reached effectively?",
          options: [
            "Actionable",
            "Measurable",
            "Substantial",
            "Accessible"
          ],
          correctAnswer: 3,
          explanation: "Accessible means the segment can be reached with marketing communications and distribution."
        },
        {
          id: 8,
          question: "What asks if segments are large enough to be profitable?",
          options: [
            "Actionable",
            "Substantial",
            "Differentiable",
            "Accessible"
          ],
          correctAnswer: 1,
          explanation: "Substantial means the segment is large enough to justify developing targeted marketing programs."
        },
        {
          id: 9,
          question: "What asks if segments respond differently to marketing?",
          options: [
            "Differentiable",
            "Actionable",
            "Measurable",
            "Substantial"
          ],
          correctAnswer: 0,
          explanation: "Differentiable means segments respond differently to marketing mixes and can be treated separately."
        },
        {
          id: 10,
          question: "What asks if effective programs can be developed?",
          options: [
            "Actionable",
            "Differentiable",
            "Accessible",
            "Measurable"
          ],
          correctAnswer: 0,
          explanation: "Actionable means the company has resources to develop and implement effective marketing programs."
        },
        {
          id: 11,
          question: "What uses one marketing mix for entire market?",
          options: [
            "Undifferentiated Strategy",
            "Concentrated Strategy",
            "Micromarketing",
            "Differentiated Strategy"
          ],
          correctAnswer: 0,
          explanation: "Undifferentiated strategy treats the entire market as homogeneous with one marketing mix."
        },
        {
          id: 12,
          question: "What uses different mixes for different segments?",
          options: [
            "Concentrated Strategy",
            "Differentiated Strategy",
            "Undifferentiated Strategy",
            "Target Market Evaluation"
          ],
          correctAnswer: 1,
          explanation: "Differentiated strategy develops different marketing mixes for different market segments."
        },
        {
          id: 13,
          question: "What focuses on one or few segments?",
          options: [
            "Undifferentiated Strategy",
            "Micromarketing",
            "Concentrated Strategy",
            "Differentiated Strategy"
          ],
          correctAnswer: 2,
          explanation: "Concentrated strategy focuses resources on one or a few market segments."
        },
        {
          id: 14,
          question: "What customizes for individuals or local areas?",
          options: [
            "Micromarketing",
            "Concentrated Strategy",
            "Target Market Evaluation",
            "Differentiated Strategy"
          ],
          correctAnswer: 0,
          explanation: "Micromarketing involves customizing products and marketing for individuals or local areas."
        },
        {
          id: 15,
          question: "What creates clear statements of market position?",
          options: [
            "Perceptual Maps",
            "Positioning Statements",
            "Repositioning",
            "Value Propositions"
          ],
          correctAnswer: 1,
          explanation: "Positioning statements clearly communicate how a brand wants to be perceived in the market."
        },
        {
          id: 16,
          question: "What creates visual representations of competitive positions?",
          options: [
            "Positioning Statements",
            "Perceptual Maps",
            "Positioning Implementation",
            "Value Propositions"
          ],
          correctAnswer: 1,
          explanation: "Perceptual maps visually represent how consumers perceive competing brands on key dimensions."
        },
        {
          id: 17,
          question: "What changes market perceptions over time?",
          options: [
            "Repositioning",
            "Perceptual Maps",
            "Positioning Implementation",
            "Value Propositions"
          ],
          correctAnswer: 0,
          explanation: "Repositioning involves changing how a brand is perceived relative to competitors."
        },
        {
          id: 18,
          question: "What describes benefits offered to target segments?",
          options: [
            "Value Propositions",
            "Positioning Statements",
            "Positioning Implementation",
            "Repositioning"
          ],
          correctAnswer: 0,
          explanation: "Value propositions describe the benefits and value a brand offers to its target customers."
        },
        {
          id: 19,
          question: "How many segmentation bases were specifically listed?",
          options: [
            "Nine",
            "Three",
            "Seven",
            "Five"
          ],
          correctAnswer: 3,
          explanation: "Five bases: demographic, geographic, psychographic, behavioral, and firmographic segmentation."
        },
        {
          id: 20,
          question: "How many segmentation evaluation criteria were listed?",
          options: [
            "Five",
            "Three",
            "Nine",
            "Seven"
          ],
          correctAnswer: 0,
          explanation: "Five criteria: measurable, accessible, substantial, differentiable, and actionable."
        }
      ]
    },
    {
      id: 8,
      title: "Product and Service Research",
      content: `
## Innovation and Development Insights

Product and service research guides development, improvement, and innovation. Advanced techniques ensure offerings meet market needs and achieve competitive advantage.

### Concept Development Research

Researching new product or service concepts:
- **Idea Generation**: Sources for new product ideas
- **Concept Testing**: Evaluating initial product concepts
- **Feature Prioritization**: Determining which features to include
- **Price Sensitivity Testing**: Determining acceptable price ranges
- **Market Sizing**: Estimating potential market size

Concept research reduces uncertainty in early development stages.

### Product Development Research

Research during product design and development:
- **Usability Testing**: Testing ease of use and user experience
- **Prototype Testing**: Testing early versions with users
- **Packaging Research**: Testing packaging designs and effectiveness
- **Name Testing**: Evaluating potential product names
- **Design Optimization**: Refining product design based on feedback

Development research improves product design before launch.

### Product Testing Methods

Testing products with target customers:
- **In-Home Usage Tests**: Products tested in normal usage environments
- **Central Location Tests**: Controlled testing in research facilities
- **Blind Testing**: Testing without brand identification
- **Comparative Testing**: Testing against competitive products
- **Extended Use Testing**: Testing over longer periods

Different testing methods provide different types of insights.

### Service Quality Research

Research specific to service offerings:
- **SERVQUAL Model**: Measuring service quality dimensions
- **Mystery Shopping**: Evaluating service delivery anonymously
- **Service Blueprinting**: Mapping service processes and touchpoints
- **Customer Journey Mapping**: Tracking customer service experiences
- **Service Gap Analysis**: Identifying gaps in service delivery

Service research ensures consistent, high-quality service delivery.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves sources for new product ideas?",
          options: [
            "Feature Prioritization",
            "Idea Generation",
            "Market Sizing",
            "Concept Testing"
          ],
          correctAnswer: 1,
          explanation: "Idea generation involves systematically collecting and developing new product or service concepts."
        },
        {
          id: 2,
          question: "What evaluates initial product concepts?",
          options: [
            "Market Sizing",
            "Concept Testing",
            "Price Sensitivity Testing",
            "Idea Generation"
          ],
          correctAnswer: 1,
          explanation: "Concept testing evaluates initial product ideas before significant development resources are committed."
        },
        {
          id: 3,
          question: "What determines which features to include?",
          options: [
            "Usability Testing",
            "Price Sensitivity Testing",
            "Concept Testing",
            "Feature Prioritization"
          ],
          correctAnswer: 3,
          explanation: "Feature prioritization determines which product features are most important to target customers."
        },
        {
          id: 4,
          question: "What determines acceptable price ranges?",
          options: [
            "Price Sensitivity Testing",
            "Feature Prioritization",
            "Prototype Testing",
            "Market Sizing"
          ],
          correctAnswer: 0,
          explanation: "Price sensitivity testing determines what prices customers are willing to pay for a product."
        },
        {
          id: 5,
          question: "What estimates potential market size?",
          options: [
            "Prototype Testing",
            "Market Sizing",
            "Usability Testing",
            "Price Sensitivity Testing"
          ],
          correctAnswer: 1,
          explanation: "Market sizing estimates the potential sales volume or revenue for a new product."
        },
        {
          id: 6,
          question: "What tests ease of use and user experience?",
          options: [
            "Prototype Testing",
            "Usability Testing",
            "Name Testing",
            "Packaging Research"
          ],
          correctAnswer: 1,
          explanation: "Usability testing evaluates how easy and intuitive a product is to use."
        },
        {
          id: 7,
          question: "What tests early versions with users?",
          options: [
            "Packaging Research",
            "Usability Testing",
            "Prototype Testing",
            "Design Optimization"
          ],
          correctAnswer: 2,
          explanation: "Prototype testing involves testing early product versions to identify problems and improvements."
        },
        {
          id: 8,
          question: "What tests packaging designs and effectiveness?",
          options: [
            "Packaging Research",
            "Name Testing",
            "Design Optimization",
            "Prototype Testing"
          ],
          correctAnswer: 0,
          explanation: "Packaging research tests how packaging affects product perception, protection, and sales."
        },
        {
          id: 9,
          question: "What evaluates potential product names?",
          options: [
            "Design Optimization",
            "Name Testing",
            "Usability Testing",
            "Packaging Research"
          ],
          correctAnswer: 1,
          explanation: "Name testing evaluates how potential product names are perceived and remembered."
        },
        {
          id: 10,
          question: "What refines product design based on feedback?",
          options: [
            "Concept Testing",
            "Prototype Testing",
            "Design Optimization",
            "Name Testing"
          ],
          correctAnswer: 2,
          explanation: "Design optimization involves refining product design based on testing feedback and research insights."
        },
        {
          id: 11,
          question: "What tests products in normal usage environments?",
          options: [
            "Blind Testing",
            "Comparative Testing",
            "In-Home Usage Tests",
            "Central Location Tests"
          ],
          correctAnswer: 2,
          explanation: "In-home usage tests involve products being used in normal home or work environments."
        },
        {
          id: 12,
          question: "What involves controlled testing in research facilities?",
          options: [
            "Extended Use Testing",
            "Central Location Tests",
            "In-Home Usage Tests",
            "Blind Testing"
          ],
          correctAnswer: 1,
          explanation: "Central location tests are conducted in controlled research facilities for consistent conditions."
        },
        {
          id: 13,
          question: "What tests without brand identification?",
          options: [
            "Extended Use Testing",
            "Blind Testing",
            "Comparative Testing",
            "Central Location Tests"
          ],
          correctAnswer: 1,
          explanation: "Blind testing removes brand identification to focus on product attributes alone."
        },
        {
          id: 14,
          question: "What tests against competitive products?",
          options: [
            "Blind Testing",
            "In-Home Usage Tests",
            "Comparative Testing",
            "Extended Use Testing"
          ],
          correctAnswer: 2,
          explanation: "Comparative testing compares a product directly against competitor products."
        },
        {
          id: 15,
          question: "What involves testing over longer periods?",
          options: [
            "Blind Testing",
            "Central Location Tests",
            "Comparative Testing",
            "Extended Use Testing"
          ],
          correctAnswer: 3,
          explanation: "Extended use testing involves products being used over days, weeks, or months."
        },
        {
          id: 16,
          question: "What measures service quality dimensions?",
          options: [
            "SERVQUAL Model",
            "Mystery Shopping",
            "Customer Journey Mapping",
            "Service Blueprinting"
          ],
          correctAnswer: 0,
          explanation: "SERVQUAL model measures service quality across reliability, responsiveness, assurance, empathy, and tangibles."
        },
        {
          id: 17,
          question: "What evaluates service delivery anonymously?",
          options: [
            "Mystery Shopping",
            "Customer Journey Mapping",
            "SERVQUAL Model",
            "Service Gap Analysis"
          ],
          correctAnswer: 0,
          explanation: "Mystery shopping involves anonymous evaluators posing as customers to assess service quality."
        },
        {
          id: 18,
          question: "What maps service processes and touchpoints?",
          options: [
            "Customer Journey Mapping",
            "Mystery Shopping",
            "Service Blueprinting",
            "Service Gap Analysis"
          ],
          correctAnswer: 2,
          explanation: "Service blueprinting visually maps all service processes, touchpoints, and supporting systems."
        },
        {
          id: 19,
          question: "What tracks customer service experiences?",
          options: [
            "Customer Journey Mapping",
            "Service Gap Analysis",
            "Service Blueprinting",
            "SERVQUAL Model"
          ],
          correctAnswer: 0,
          explanation: "Customer journey mapping tracks all customer interactions and experiences with a service."
        },
        {
          id: 20,
          question: "How many concept development research methods were listed?",
          options: [
            "Five",
            "Nine",
            "Seven",
            "Three"
          ],
          correctAnswer: 0,
          explanation: "Five methods: idea generation, concept testing, feature prioritization, price sensitivity testing, market sizing."
        }
      ]
    },
    {
      id: 9,
      title: "Pricing Research",
      content: `
## Value and Revenue Optimization

Pricing research determines optimal prices that maximize revenue while maintaining customer value perceptions. Advanced techniques balance multiple pricing objectives.

### Pricing Research Methods

Specific methods for pricing research:
- **Van Westendorp Price Sensitivity Meter**: Determining acceptable price ranges
- **Gabor-Granger Method**: Testing specific price points
- **Conjoint Analysis**: Determining price trade-offs with features
- **Brand Price Trade-off**: Measuring brand value versus price
- **Experimental Pricing**: Testing prices in controlled experiments

Different methods address different pricing questions.

### Price Elasticity Analysis

Understanding how price changes affect demand:
- **Price Elasticity**: Responsiveness of demand to price changes
- **Cross-Price Elasticity**: Effect of competitor price changes
- **Income Elasticity**: Effect of consumer income changes
- **Promotional Elasticity**: Effect of temporary price reductions
- **Segment Elasticity**: Price sensitivity differences by segment

Elasticity analysis informs pricing strategy and revenue management.

### Value-Based Pricing Research

Setting prices based on perceived value:
- **Value Mapping**: Linking price to perceived benefits
- **Economic Value Analysis**: Calculating customer economic benefits
- **Willingness-to-Pay Research**: Determining maximum acceptable prices
- **Value Communication**: Researching how to communicate value
- **Value Segmentation**: Different value perceptions by segment

Value-based pricing aligns price with customer perceptions of worth.

### Strategic Pricing Research

Research for broader pricing strategies:
- **Price Positioning Research**: How price affects brand positioning
- **Competitive Pricing Analysis**: Understanding competitor pricing strategies
- **Price Discrimination Research**: Different prices for different segments
- **Dynamic Pricing Research**: Variable pricing based on conditions
- **Psychological Pricing Research**: Psychological effects of price presentation

Strategic research supports comprehensive pricing approaches.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What determines acceptable price ranges?",
          options: [
            "Gabor-Granger Method",
            "Conjoint Analysis",
            "Van Westendorp Price Sensitivity Meter",
            "Brand Price Trade-off"
          ],
          correctAnswer: 2,
          explanation: "Van Westendorp method identifies price ranges that are too cheap, cheap, expensive, and too expensive."
        },
        {
          id: 2,
          question: "What tests specific price points?",
          options: [
            "Van Westendorp Price Sensitivity Meter",
            "Experimental Pricing",
            "Gabor-Granger Method",
            "Conjoint Analysis"
          ],
          correctAnswer: 2,
          explanation: "Gabor-Granger method tests specific price points to determine purchase likelihood at each price."
        },
        {
          id: 3,
          question: "What determines price trade-offs with features?",
          options: [
            "Gabor-Granger Method",
            "Brand Price Trade-off",
            "Experimental Pricing",
            "Conjoint Analysis"
          ],
          correctAnswer: 3,
          explanation: "Conjoint analysis determines how customers trade off price against product features and benefits."
        },
        {
          id: 4,
          question: "What measures brand value versus price?",
          options: [
            "Experimental Pricing",
            "Brand Price Trade-off",
            "Conjoint Analysis",
            "Van Westendorp Price Sensitivity Meter"
          ],
          correctAnswer: 1,
          explanation: "Brand price trade-off measures how brand strength affects willingness to pay higher prices."
        },
        {
          id: 5,
          question: "What tests prices in controlled experiments?",
          options: [
            "Conjoint Analysis",
            "Experimental Pricing",
            "Brand Price Trade-off",
            "Gabor-Granger Method"
          ],
          correctAnswer: 1,
          explanation: "Experimental pricing tests different prices in controlled market experiments."
        },
        {
          id: 6,
          question: "What measures responsiveness of demand to price changes?",
          options: [
            "Income Elasticity",
            "Price Elasticity",
            "Promotional Elasticity",
            "Cross-Price Elasticity"
          ],
          correctAnswer: 1,
          explanation: "Price elasticity measures how quantity demanded changes when price changes."
        },
        {
          id: 7,
          question: "What measures effect of competitor price changes?",
          options: [
            "Income Elasticity",
            "Segment Elasticity",
            "Price Elasticity",
            "Cross-Price Elasticity"
          ],
          correctAnswer: 3,
          explanation: "Cross-price elasticity measures how demand for a product changes when competitor prices change."
        },
        {
          id: 8,
          question: "What measures effect of consumer income changes?",
          options: [
            "Cross-Price Elasticity",
            "Promotional Elasticity",
            "Income Elasticity",
            "Segment Elasticity"
          ],
          correctAnswer: 2,
          explanation: "Income elasticity measures how demand changes when consumer incomes change."
        },
        {
          id: 9,
          question: "What measures effect of temporary price reductions?",
          options: [
            "Income Elasticity",
            "Segment Elasticity",
            "Promotional Elasticity",
            "Price Elasticity"
          ],
          correctAnswer: 2,
          explanation: "Promotional elasticity measures how temporary price reductions affect demand."
        },
        {
          id: 10,
          question: "What measures price sensitivity differences by segment?",
          options: [
            "Income Elasticity",
            "Promotional Elasticity",
            "Segment Elasticity",
            "Cross-Price Elasticity"
          ],
          correctAnswer: 2,
          explanation: "Segment elasticity measures how price sensitivity differs across market segments."
        },
        {
          id: 11,
          question: "What links price to perceived benefits?",
          options: [
            "Value Communication",
            "Value Mapping",
            "Willingness-to-Pay Research",
            "Economic Value Analysis"
          ],
          correctAnswer: 1,
          explanation: "Value mapping visually links different price points to different levels of perceived benefits."
        },
        {
          id: 12,
          question: "What calculates customer economic benefits?",
          options: [
            "Willingness-to-Pay Research",
            "Value Segmentation",
            "Value Mapping",
            "Economic Value Analysis"
          ],
          correctAnswer: 3,
          explanation: "Economic value analysis calculates the economic benefits customers receive from a product."
        },
        {
          id: 13,
          question: "What determines maximum acceptable prices?",
          options: [
            "Economic Value Analysis",
            "Value Communication",
            "Value Segmentation",
            "Willingness-to-Pay Research"
          ],
          correctAnswer: 3,
          explanation: "Willingness-to-pay research determines the maximum price customers are willing to pay."
        },
        {
          id: 14,
          question: "What researches how to communicate value?",
          options: [
            "Value Communication",
            "Value Segmentation",
            "Value Mapping",
            "Willingness-to-Pay Research"
          ],
          correctAnswer: 0,
          explanation: "Value communication research determines the most effective ways to communicate product value."
        },
        {
          id: 15,
          question: "What identifies different value perceptions by segment?",
          options: [
            "Economic Value Analysis",
            "Value Segmentation",
            "Value Communication",
            "Willingness-to-Pay Research"
          ],
          correctAnswer: 1,
          explanation: "Value segmentation identifies groups with different perceptions of product value."
        },
        {
          id: 16,
          question: "What researches how price affects brand positioning?",
          options: [
            "Competitive Pricing Analysis",
            "Price Positioning Research",
            "Dynamic Pricing Research",
            "Price Discrimination Research"
          ],
          correctAnswer: 1,
          explanation: "Price positioning research examines how price affects brand perception and market position."
        },
        {
          id: 17,
          question: "What researches competitor pricing strategies?",
          options: [
            "Psychological Pricing Research",
            "Price Positioning Research",
            "Dynamic Pricing Research",
            "Competitive Pricing Analysis"
          ],
          correctAnswer: 3,
          explanation: "Competitive pricing analysis examines competitor pricing strategies and responses."
        },
        {
          id: 18,
          question: "What researches different prices for different segments?",
          options: [
            "Price Discrimination Research",
            "Dynamic Pricing Research",
            "Psychological Pricing Research",
            "Competitive Pricing Analysis"
          ],
          correctAnswer: 0,
          explanation: "Price discrimination research examines charging different prices to different market segments."
        },
        {
          id: 19,
          question: "What researches variable pricing based on conditions?",
          options: [
            "Price Positioning Research",
            "Price Discrimination Research",
            "Psychological Pricing Research",
            "Dynamic Pricing Research"
          ],
          correctAnswer: 3,
          explanation: "Dynamic pricing research examines variable pricing based on demand, time, or other conditions."
        },
        {
          id: 20,
          question: "How many pricing research methods were specifically listed?",
          options: [
            "Seven",
            "Nine",
            "Five",
            "Three"
          ],
          correctAnswer: 2,
          explanation: "Five methods: Van Westendorp, Gabor-Granger, conjoint analysis, brand price trade-off, experimental pricing."
        }
      ]
    },
    {
      id: 10,
      title: "Research Communication and Reporting",
      content: `
## Insight Communication Excellence

Advanced research communication transforms data into compelling stories that drive action. Effective reporting ensures research insights influence decisions and create value.

### Research Report Structure

Comprehensive report organization:
- **Executive Summary**: Key findings and recommendations
- **Introduction**: Research objectives and background
- **Methodology**: Detailed research approach
- **Findings**: Organized presentation of results
- **Analysis**: Interpretation and meaning of findings
- **Conclusions**: Summary of key insights
- **Recommendations**: Actionable suggestions
- **Appendices**: Supporting technical details

Well-structured reports guide readers through complex information.

### Data Visualization Principles

Effective visual communication of data:
- **Clarity**: Visuals should be immediately understandable
- **Accuracy**: Visuals should represent data truthfully
- **Efficiency**: Visuals should communicate efficiently
- **Aesthetics**: Visuals should be professionally appealing
- **Appropriateness**: Visuals should match audience and purpose

Good visualization enhances understanding and impact.

### Presentation Techniques

Effective oral presentation of research:
- **Audience Analysis**: Understanding audience needs and knowledge
- **Storytelling**: Creating narrative flow around findings
- **Visual Support**: Effective use of slides and visuals
- **Delivery Skills**: Engaging presentation style and delivery
- **Q&A Preparation**: Anticipating and preparing for questions

Strong presentations make research findings memorable and actionable.

### Action Planning Integration

Ensuring research leads to action:
- **Stakeholder Engagement**: Involving decision-makers throughout
- **Actionable Recommendations**: Clear, specific suggested actions
- **Implementation Planning**: How recommendations will be implemented
- **Impact Measurement**: How results will be measured
- **Follow-up Research**: Planning future research needs

Integration ensures research creates real business value.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What presents key findings and recommendations?",
          options: [
            "Executive Summary",
            "Methodology",
            "Introduction",
            "Findings"
          ],
          correctAnswer: 0,
          explanation: "The executive summary provides a concise overview for busy decision-makers."
        },
        {
          id: 2,
          question: "What presents research objectives and background?",
          options: [
            "Executive Summary",
            "Analysis",
            "Introduction",
            "Conclusions"
          ],
          correctAnswer: 2,
          explanation: "The introduction provides context and explains why the research was conducted."
        },
        {
          id: 3,
          question: "What details the research approach?",
          options: [
            "Introduction",
            "Recommendations",
            "Methodology",
            "Findings"
          ],
          correctAnswer: 2,
          explanation: "The methodology section explains how the research was conducted for credibility assessment."
        },
        {
          id: 4,
          question: "What presents organized results?",
          options: [
            "Findings",
            "Conclusions",
            "Methodology",
            "Analysis"
          ],
          correctAnswer: 0,
          explanation: "The findings section presents research results in an organized, logical manner."
        },
        {
          id: 5,
          question: "What interprets the meaning of findings?",
          options: [
            "Conclusions",
            "Findings",
            "Recommendations",
            "Analysis"
          ],
          correctAnswer: 3,
          explanation: "The analysis section interprets what the findings mean in business context."
        },
        {
          id: 6,
          question: "What summarizes key insights?",
          options: [
            "Recommendations",
            "Analysis",
            "Conclusions",
            "Appendices"
          ],
          correctAnswer: 2,
          explanation: "The conclusions section summarizes the main insights from the research."
        },
        {
          id: 7,
          question: "What provides actionable suggestions?",
          options: [
            "Executive Summary",
            "Recommendations",
            "Appendices",
            "Conclusions"
          ],
          correctAnswer: 1,
          explanation: "The recommendations section provides specific, actionable suggestions based on findings."
        },
        {
          id: 8,
          question: "What includes supporting technical details?",
          options: [
            "Executive Summary",
            "Introduction",
            "Recommendations",
            "Appendices"
          ],
          correctAnswer: 3,
          explanation: "Appendices contain supporting technical details, questionnaires, or data tables."
        },
        {
          id: 9,
          question: "What means visuals should be immediately understandable?",
          options: [
            "Aesthetics",
            "Accuracy",
            "Efficiency",
            "Clarity"
          ],
          correctAnswer: 3,
          explanation: "Clarity means visualizations should be immediately understandable without confusion."
        },
        {
          id: 10,
          question: "What means visuals should represent data truthfully?",
          options: [
            "Clarity",
            "Efficiency",
            "Accuracy",
            "Appropriateness"
          ],
          correctAnswer: 2,
          explanation: "Accuracy means visualizations should truthfully represent the underlying data."
        },
        {
          id: 11,
          question: "What means visuals should communicate efficiently?",
          options: [
            "Efficiency",
            "Aesthetics",
            "Accuracy",
            "Appropriateness"
          ],
          correctAnswer: 0,
          explanation: "Efficiency means visualizations should communicate maximum information with minimum effort."
        },
        {
          id: 12,
          question: "What means visuals should be professionally appealing?",
          options: [
            "Aesthetics",
            "Efficiency",
            "Clarity",
            "Appropriateness"
          ],
          correctAnswer: 0,
          explanation: "Aesthetics means visualizations should be visually appealing and professionally presented."
        },
        {
          id: 13,
          question: "What means visuals should match audience and purpose?",
          options: [
            "Aesthetics",
            "Appropriateness",
            "Clarity",
            "Accuracy"
          ],
          correctAnswer: 1,
          explanation: "Appropriateness means visualizations should be suitable for the audience and communication purpose."
        },
        {
          id: 14,
          question: "What involves understanding audience needs and knowledge?",
          options: [
            "Audience Analysis",
            "Delivery Skills",
            "Visual Support",
            "Storytelling"
          ],
          correctAnswer: 0,
          explanation: "Audience analysis involves understanding who will receive the presentation and what they need."
        },
        {
          id: 15,
          question: "What creates narrative flow around findings?",
          options: [
            "Audience Analysis",
            "Visual Support",
            "Q&A Preparation",
            "Storytelling"
          ],
          correctAnswer: 3,
          explanation: "Storytelling creates a compelling narrative that makes findings memorable and engaging."
        },
        {
          id: 16,
          question: "What involves effective use of slides and visuals?",
          options: [
            "Storytelling",
            "Q&A Preparation",
            "Visual Support",
            "Delivery Skills"
          ],
          correctAnswer: 2,
          explanation: "Visual support involves using slides, charts, and other visuals effectively during presentations."
        },
        {
          id: 17,
          question: "What involves engaging presentation style and delivery?",
          options: [
            "Delivery Skills",
            "Q&A Preparation",
            "Visual Support",
            "Audience Analysis"
          ],
          correctAnswer: 0,
          explanation: "Delivery skills involve how the presenter communicates, engages, and connects with the audience."
        },
        {
          id: 18,
          question: "What involves anticipating and preparing for questions?",
          options: [
            "Visual Support",
            "Q&A Preparation",
            "Delivery Skills",
            "Storytelling"
          ],
          correctAnswer: 1,
          explanation: "Q&A preparation involves anticipating questions and preparing thoughtful responses."
        },
        {
          id: 19,
          question: "How many research report sections were specifically listed?",
          options: [
            "Five",
            "Seven",
            "Nine",
            "Eleven"
          ],
          correctAnswer: 2,
          explanation: "Eight sections: executive summary, introduction, methodology, findings, analysis, conclusions, recommendations, appendices."
        },
        {
          id: 20,
          question: "How many data visualization principles were listed?",
          options: [
            "Nine",
            "Three",
            "Five",
            "Seven"
          ],
          correctAnswer: 2,
          explanation: "Five principles: clarity, accuracy, efficiency, aesthetics, appropriateness."
        }
      ]
    }
  ],

  // FINAL EXAM - 40 COMPREHENSIVE QUESTIONS
  finalExam: {
    id: "market-research-diploma-exam",
    title: "Market Research Diploma Final Exam",
    description: "Comprehensive examination covering all 10 modules of the Market Research Diploma course.",
    passingScore: 70,
    timeLimit: 90, // minutes
    questions: [
      {
        id: 1,
        question: "What type of research is used when little is known about a topic?",
        options: [
          "Causal Research",
          "Descriptive Research",
          "Exploratory Research",
          "Quantitative Research"
        ],
        correctAnswer: 2,
        explanation: "Exploratory research helps understand new or unclear topics before designing more structured studies.",
        module: 1
      },
      {
        id: 2,
        question: "What tracks changes over time with same respondents?",
        options: [
          "Conjoint Analysis",
          "Cross-sectional Studies",
          "Experimental Designs",
          "Longitudinal Studies"
        ],
        correctAnswer: 3,
        explanation: "Longitudinal studies follow the same respondents over time to track changes and trends.",
        module: 2
      },
      {
        id: 3,
        question: "What gives equal chance to every population member?",
        options: [
          "Simple Random Sampling",
          "Systematic Sampling",
          "Stratified Sampling",
          "Cluster Sampling"
        ],
        correctAnswer: 0,
        explanation: "Simple random sampling gives every population member an equal chance of selection.",
        module: 3
      },
      {
        id: 4,
        question: "What includes mean, median, and mode?",
        options: [
          "Measures of Dispersion",
          "Cross-tabulation",
          "Measures of Central Tendency",
          "Distribution Analysis"
        ],
        correctAnswer: 2,
        explanation: "Measures of central tendency describe the center or typical value of a dataset.",
        module: 4
      },
      {
        id: 5,
        question: "What is becoming aware of a need in consumer decision process?",
        options: [
          "Problem Recognition",
          "Purchase Decision",
          "Evaluation of Alternatives",
          "Information Search"
        ],
        correctAnswer: 0,
        explanation: "Problem recognition occurs when consumers become aware of a gap between actual and desired states.",
        module: 5
      },
      {
        id: 6,
        question: "What includes annual reports and SEC filings in competitive intelligence?",
        options: [
          "Customer Feedback",
          "Employee Insights",
          "Public Sources",
          "Industry Analysis"
        ],
        correctAnswer: 2,
        explanation: "Public sources include legally required disclosures, reports, and publicly available information.",
        module: 6
      },
      {
        id: 7,
        question: "What segments by age, gender, and income?",
        options: [
          "Demographic Segmentation",
          "Behavioral Segmentation",
          "Geographic Segmentation",
          "Psychographic Segmentation"
        ],
        correctAnswer: 0,
        explanation: "Demographic segmentation divides markets based on population characteristics.",
        module: 7
      },
      {
        id: 8,
        question: "What involves sources for new product ideas?",
        options: [
          "Market Sizing",
          "Idea Generation",
          "Concept Testing",
          "Feature Prioritization"
        ],
        correctAnswer: 1,
        explanation: "Idea generation involves systematically collecting and developing new product concepts.",
        module: 8
      },
      {
        id: 9,
        question: "What determines acceptable price ranges?",
        options: [
          "Brand Price Trade-off",
          "Conjoint Analysis",
          "Van Westendorp Price Sensitivity Meter",
          "Gabor-Granger Method"
        ],
        correctAnswer: 2,
        explanation: "Van Westendorp method identifies price ranges that are acceptable to customers.",
        module: 9
      },
      {
        id: 10,
        question: "What presents key findings and recommendations in research reports?",
        options: [
          "Introduction",
          "Executive Summary",
          "Methodology",
          "Findings"
        ],
        correctAnswer: 1,
        explanation: "The executive summary provides a concise overview for decision-makers.",
        module: 10
      },
      {
        id: 11,
        question: "Which research documents characteristics of markets?",
        options: [
          "Causal Research",
          "Descriptive Research",
          "Qualitative Research",
          "Exploratory Research"
        ],
        correctAnswer: 1,
        explanation: "Descriptive research measures and describes market characteristics, behaviors, and trends.",
        module: 1
      },
      {
        id: 12,
        question: "What involves repeated measurements from same people?",
        options: [
          "Longitudinal Studies",
          "Panel Research",
          "MaxDiff Analysis",
          "Experimental Designs"
        ],
        correctAnswer: 1,
        explanation: "Panel research collects data repeatedly from the same group of respondents over time.",
        module: 2
      },
      {
        id: 13,
        question: "What selects every nth member from a list?",
        options: [
          "Simple Random Sampling",
          "Systematic Sampling",
          "Multistage Sampling",
          "Stratified Sampling"
        ],
        correctAnswer: 1,
        explanation: "Systematic sampling selects participants at regular intervals from a sampling frame.",
        module: 3
      },
      {
        id: 14,
        question: "What includes standard deviation and variance?",
        options: [
          "Measures of Dispersion",
          "Measures of Central Tendency",
          "Trend Analysis",
          "Distribution Analysis"
        ],
        correctAnswer: 0,
        explanation: "Measures of dispersion describe how spread out or variable the data is.",
        module: 4
      },
      {
        id: 15,
        question: "What involves seeking information about options?",
        options: [
          "Problem Recognition",
          "Post-Purchase Evaluation",
          "Purchase Decision",
          "Information Search"
        ],
        correctAnswer: 3,
        explanation: "Information search involves gathering information about available products or services.",
        module: 5
      },
      {
        id: 16,
        question: "What analyzes strengths, weaknesses, opportunities, threats?",
        options: [
          "Value Chain Analysis",
          "SWOT Analysis",
          "Porter's Five Forces",
          "Strategic Group Mapping"
        ],
        correctAnswer: 1,
        explanation: "SWOT analysis examines internal strengths/weaknesses and external opportunities/threats.",
        module: 6
      },
      {
        id: 17,
        question: "What asks if segment size can be measured?",
        options: [
          "Accessible",
          "Substantial",
          "Measurable",
          "Differentiable"
        ],
        correctAnswer: 2,
        explanation: "Measurable means the segment's size and characteristics can be quantified.",
        module: 7
      },
      {
        id: 18,
        question: "What tests ease of use and user experience?",
        options: [
          "Prototype Testing",
          "Name Testing",
          "Packaging Research",
          "Usability Testing"
        ],
        correctAnswer: 3,
        explanation: "Usability testing evaluates how easy and intuitive a product is to use.",
        module: 8
      },
      {
        id: 19,
        question: "What measures responsiveness of demand to price changes?",
        options: [
          "Cross-Price Elasticity",
          "Income Elasticity",
          "Promotional Elasticity",
          "Price Elasticity"
        ],
        correctAnswer: 3,
        explanation: "Price elasticity measures how quantity demanded changes when price changes.",
        module: 9
      },
      {
        id: 20,
        question: "What means visuals should be immediately understandable?",
        options: [
          "Accuracy",
          "Clarity",
          "Aesthetics",
          "Efficiency"
        ],
        correctAnswer: 1,
        explanation: "Clarity means visualizations should be immediately understandable without confusion.",
        module: 10
      },
      {
        id: 21,
        question: "What ethical principle requires participant understanding?",
        options: [
          "Data Privacy",
          "Confidentiality",
          "Informed Consent",
          "Transparency"
        ],
        correctAnswer: 2,
        explanation: "Informed consent means participants fully understand the research before agreeing.",
        module: 1
      },
      {
        id: 22,
        question: "What tests causal relationships in controlled settings?",
        options: [
          "Focus Groups",
          "Experimental Designs",
          "Panel Research",
          "Conjoint Analysis"
        ],
        correctAnswer: 1,
        explanation: "Experimental designs manipulate variables in controlled settings.",
        module: 2
      },
      {
        id: 23,
        question: "What divides population into subgroups?",
        options: [
          "Cluster Sampling",
          "Convenience Sampling",
          "Stratified Sampling",
          "Systematic Sampling"
        ],
        correctAnswer: 2,
        explanation: "Stratified sampling divides population into subgroups and samples from each.",
        module: 3
      },
      {
        id: 24,
        question: "What tests assumptions about populations?",
        options: [
          "Hypothesis Testing",
          "Trend Analysis",
          "Confidence Intervals",
          "T-tests"
        ],
        correctAnswer: 0,
        explanation: "Hypothesis testing uses sample data to test assumptions about populations.",
        module: 4
      },
      {
        id: 25,
        question: "What includes culture and social class influences?",
        options: [
          "Personal Factors",
          "Cultural Factors",
          "Psychological Factors",
          "Social Factors"
        ],
        correctAnswer: 1,
        explanation: "Cultural factors include broad cultural values, subcultures, and social class.",
        module: 5
      },
      {
        id: 26,
        question: "What analyzes industry competitive forces?",
        options: [
          "SWOT Analysis",
          "Benchmarking",
          "Porter's Five Forces",
          "Strategic Group Mapping"
        ],
        correctAnswer: 2,
        explanation: "Porter's Five Forces analyzes competitive rivalry and other industry forces.",
        module: 6
      },
      {
        id: 27,
        question: "What uses one marketing mix for entire market?",
        options: [
          "Undifferentiated Strategy",
          "Concentrated Strategy",
          "Micromarketing",
          "Differentiated Strategy"
        ],
        correctAnswer: 0,
        explanation: "Undifferentiated strategy treats the entire market as homogeneous.",
        module: 7
      },
      {
        id: 28,
        question: "What tests products in normal usage environments?",
        options: [
          "In-Home Usage Tests",
          "Comparative Testing",
          "Central Location Tests",
          "Blind Testing"
        ],
        correctAnswer: 0,
        explanation: "In-home usage tests involve products being used in normal environments.",
        module: 8
      },
      {
        id: 29,
        question: "What links price to perceived benefits?",
        options: [
          "Value Mapping",
          "Value Communication",
          "Economic Value Analysis",
          "Willingness-to-Pay Research"
        ],
        correctAnswer: 0,
        explanation: "Value mapping visually links price points to perceived benefits.",
        module: 9
      },
      {
        id: 30,
        question: "What involves understanding audience needs and knowledge?",
        options: [
          "Storytelling",
          "Audience Analysis",
          "Visual Support",
          "Delivery Skills"
        ],
        correctAnswer: 1,
        explanation: "Audience analysis involves understanding who will receive the presentation.",
        module: 10
      },
      {
        id: 31,
        question: "What protects participant information?",
        options: [
          "Avoiding Harm",
          "Informed Consent",
          "Confidentiality",
          "Transparency"
        ],
        correctAnswer: 2,
        explanation: "Confidentiality ensures participant information is kept private.",
        module: 1
      },
      {
        id: 32,
        question: "What measures preferences for product features?",
        options: [
          "Conjoint Analysis",
          "MaxDiff Analysis",
          "Experimental Designs",
          "In-Depth Interviews"
        ],
        correctAnswer: 0,
        explanation: "Conjoint analysis measures how consumers value different product features.",
        module: 2
      },
      {
        id: 33,
        question: "What uses easily accessible participants?",
        options: [
          "Quota Sampling",
          "Convenience Sampling",
          "Judgmental Sampling",
          "Snowball Sampling"
        ],
        correctAnswer: 1,
        explanation: "Convenience sampling selects participants who are easily available.",
        module: 3
      },
      {
        id: 34,
        question: "What compares means between two groups?",
        options: [
          "ANOVA",
          "T-tests",
          "Confidence Intervals",
          "Chi-square Tests"
        ],
        correctAnswer: 1,
        explanation: "T-tests compare whether means of two groups are statistically different.",
        module: 4
      },
      {
        id: 35,
        question: "What predicts behavior from attitudes, norms, and control?",
        options: [
          "Theory of Planned Behavior",
          "Consumer Decision Model",
          "Habitual Behavior Model",
          "Elaboration Likelihood Model"
        ],
        correctAnswer: 0,
        explanation: "Theory of Planned Behavior predicts behavior based on attitudes, norms, and control.",
        module: 5
      },
      {
        id: 36,
        question: "What visualizes brand positions in consumers' minds?",
        options: [
          "Perceptual Mapping",
          "Gap Analysis",
          "Market Share Analysis",
          "Growth Vector Analysis"
        ],
        correctAnswer: 0,
        explanation: "Perceptual mapping creates visual representations of brand perceptions.",
        module: 6
      },
      {
        id: 37,
        question: "What creates clear statements of market position?",
        options: [
          "Positioning Statements",
          "Value Propositions",
          "Perceptual Maps",
          "Repositioning"
        ],
        correctAnswer: 0,
        explanation: "Positioning statements communicate how a brand wants to be perceived.",
        module: 7
      },
      {
        id: 38,
        question: "What measures service quality dimensions?",
        options: [
          "Service Blueprinting",
          "SERVQUAL Model",
          "Mystery Shopping",
          "Customer Journey Mapping"
        ],
        correctAnswer: 1,
        explanation: "SERVQUAL model measures service quality across multiple dimensions.",
        module: 8
      },
      {
        id: 39,
        question: "What researches how price affects brand positioning?",
        options: [
          "Competitive Pricing Analysis",
          "Price Positioning Research",
          "Price Discrimination Research",
          "Dynamic Pricing Research"
        ],
        correctAnswer: 1,
        explanation: "Price positioning research examines how price affects brand perception.",
        module: 9
      },
      {
        id: 40,
        question: "What creates narrative flow around findings?",
        options: [
          "Storytelling",
          "Visual Support",
          "Q&A Preparation",
          "Audience Analysis"
        ],
        correctAnswer: 0,
        explanation: "Storytelling creates a compelling narrative that makes findings memorable.",
        module: 10
      }
    ]
  }
};

export default marketResearchDiploma;
