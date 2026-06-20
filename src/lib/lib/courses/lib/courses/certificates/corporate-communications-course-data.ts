export const corporateCommunicationsDiploma = {
  // COURSE METADATA
  id: "corporate-communications-diploma",
  title: "Corporate Communications (Diploma)",
  description: "Advanced strategic communication management for organizations. This diploma covers integrated communication planning, leadership communication, change management, internal communications, corporate reputation strategy, and digital transformation in corporate communications.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  upgradePrice: null,
  icon: "🏢",
  badge: "Diploma",
  prerequisites: ["Public Relations (Certificate)"],

  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Strategic Corporate Communication Planning",
      completed: false,
      content: `
# Strategic Corporate Communication Planning

## Integrated Communication Strategy
Welcome to advanced corporate communications. This module explores how to create comprehensive communication strategies that align with organizational goals and business objectives.

### Strategic Planning Framework
- **Business alignment**: Linking communication to business strategy
- **Stakeholder mapping**: Identifying and prioritizing all audiences
- **Environmental scanning**: Analyzing internal and external factors
- **Gap analysis**: Identifying current vs desired state

### Communication Objectives
- **Reputation objectives**: Building and protecting corporate reputation
- **Relationship objectives**: Strengthening stakeholder relationships
- **Business objectives**: Supporting sales, recruitment, investment
- **Behavioral objectives**: Influencing specific stakeholder actions

### Integrated Approach
- **Channel integration**: Coordinating all communication channels
- **Message consistency**: Unified messaging across platforms
- **Timeline coordination**: Strategic timing of communication activities
- **Resource allocation**: Optimizing budget and personnel

### Measurement Framework
- **KPIs development**: Key performance indicators for communication
- **Benchmarking**: Comparing against industry standards
- **ROI calculation**: Demonstrating communication value
- **Continuous improvement**: Using data to refine strategies

### Risk Management
- **Risk assessment**: Identifying potential communication risks
- **Contingency planning**: Preparing for potential issues
- **Crisis prevention**: Proactive reputation protection
- **Issue monitoring**: Tracking emerging concerns

### Strategy Documentation
- **Communication plans**: Detailed strategic documents
- **Executive summaries**: Brief overviews for leadership
- **Implementation guides**: Step-by-step execution plans
- **Review schedules**: Regular strategy evaluation timelines
`,
      quiz: [
        {
          id: 1,
          question: "What is business alignment in communication planning?",
          options: [
            "Aligning with competitor strategies",
            "Linking communication to business strategy",
            "Only communicating business results",
            "Following government business rules"
          ],
          correctAnswer: 1,
          explanation: "Business alignment ensures communication supports organizational goals and objectives."
        },
        {
          id: 2,
          question: "What is stakeholder mapping?",
          options: [
            "Creating physical maps of stakeholders",
            "Tracking stakeholder movements",
            "Identifying and prioritizing all audiences",
            "Only listing employee names"
          ],
          correctAnswer: 2,
          explanation: "Stakeholder mapping identifies all relevant audiences and their importance."
        },
        {
          id: 3,
          question: "What are reputation objectives?",
          options: [
            "Increasing social media followers",
            "Only responding to negative news",
            "Building and protecting corporate reputation",
            "Creating advertising campaigns"
          ],
          correctAnswer: 2,
          explanation: "Reputation objectives focus on how the organization is perceived by stakeholders."
        },
        {
          id: 4,
          question: "What is channel integration?",
          options: [
            "Random channel selection",
            "Eliminating traditional channels",
            "Using only digital channels",
            "Coordinating all communication channels"
          ],
          correctAnswer: 3,
          explanation: "Channel integration ensures all communication platforms work together cohesively."
        },
        {
          id: 5,
          question: "What does environmental scanning involve?",
          options: [
            "Analyzing internal and external factors",
            "Only checking weather conditions",
            "Office environment inspection",
            "Competitor office visits"
          ],
          correctAnswer: 0,
          explanation: "Environmental scanning examines factors that could impact communication effectiveness."
        },
        {
          id: 6,
          question: "What are relationship objectives?",
          options: [
            "Employee personal relationships",
            "Strengthening stakeholder relationships",
            "Social media friendships",
            "Only customer relationship management"
          ],
          correctAnswer: 1,
          explanation: "Relationship objectives focus on building trust and engagement with stakeholders."
        },
        {
          id: 7,
          question: "What is message consistency?",
          options: [
            "Never changing any messages",
            "Only official statements",
            "Repeating same message constantly",
            "Unified messaging across platforms"
          ],
          correctAnswer: 3,
          explanation: "Consistent messaging builds credibility and prevents confusion."
        },
        {
          id: 8,
          question: "What is gap analysis?",
          options: [
            "Identifying current vs desired state",
            "Analyzing generation gaps",
            "Communication technology gaps",
            "Salary gap calculations"
          ],
          correctAnswer: 0,
          explanation: "Gap analysis identifies where current communication falls short of goals."
        },
        {
          id: 9,
          question: "What are business objectives in communication?",
          options: [
            "Only profit maximization",
            "Stock price increases",
            "Supporting sales, recruitment, investment",
            "Market domination"
          ],
          correctAnswer: 2,
          explanation: "Business objectives show how communication contributes to organizational success."
        },
        {
          id: 10,
          question: "What is timeline coordination?",
          options: [
            "Strategic timing of communication activities",
            "Employee work schedules",
            "Project management software",
            "Only meeting deadlines"
          ],
          correctAnswer: 0,
          explanation: "Timeline coordination ensures communication happens at optimal times."
        },
        {
          id: 11,
          question: "What are KPIs in communication?",
          options: [
            "Social media vanity metrics",
            "Only financial metrics",
            "Key performance indicators for measurement",
            "Employee performance reviews"
          ],
          correctAnswer: 2,
          explanation: "KPIs measure the effectiveness and impact of communication efforts."
        },
        {
          id: 12,
          question: "What are behavioral objectives?",
          options: [
            "Customer purchase tracking",
            "Controlling employee behavior",
            "Government regulation compliance",
            "Influencing specific stakeholder actions"
          ],
          correctAnswer: 3,
          explanation: "Behavioral objectives aim to change specific stakeholder behaviors."
        },
        {
          id: 13,
          question: "What is resource allocation?",
          options: [
            "Department budget requests",
            "Equal distribution of resources",
            "Only spending minimum amounts",
            "Optimizing budget and personnel"
          ],
          correctAnswer: 3,
          explanation: "Resource allocation ensures efficient use of communication budgets and staff."
        },
        {
          id: 14,
          question: "What is benchmarking?",
          options: [
            "Financial benchmarking only",
            "Only internal comparisons",
            "Comparing against industry standards",
            "Competitor espionage"
          ],
          correctAnswer: 2,
          explanation: "Benchmarking compares performance against industry best practices."
        },
        {
          id: 15,
          question: "What is risk assessment in communication?",
          options: [
            "Only financial risk analysis",
            "Employee risk behaviors",
            "Identifying potential communication risks",
            "Market risk calculations"
          ],
          correctAnswer: 2,
          explanation: "Risk assessment identifies what could go wrong in communication efforts."
        },
        {
          id: 16,
          question: "What is ROI calculation for communication?",
          options: [
            "Only financial return calculation",
            "Advertising ROI only",
            "Social media return metrics",
            "Demonstrating communication value"
          ],
          correctAnswer: 3,
          explanation: "ROI calculation shows the business value generated by communication activities."
        },
        {
          id: 17,
          question: "What is contingency planning?",
          options: [
            "Only crisis planning",
            "Preparing for potential issues",
            "Backup communication systems",
            "Emergency response plans"
          ],
          correctAnswer: 1,
          explanation: "Contingency planning prepares alternative approaches for potential problems."
        },
        {
          id: 18,
          question: "What is continuous improvement?",
          options: [
            "Always trying new things",
            "Constant strategy changes",
            "Using data to refine strategies",
            "Never satisfied with results"
          ],
          correctAnswer: 2,
          explanation: "Continuous improvement uses insights from measurement to enhance strategies."
        },
        {
          id: 19,
          question: "What are communication plans?",
          options: [
            "Detailed strategic documents",
            "Only meeting agendas",
            "Email distribution lists",
            "Social media calendars"
          ],
          correctAnswer: 0,
          explanation: "Communication plans document strategy, objectives, and implementation details."
        },
        {
          id: 20,
          question: "What is crisis prevention?",
          options: [
            "Avoiding all risks",
            "Hiding potential problems",
            "Proactive reputation protection",
            "Only crisis response planning"
          ],
          correctAnswer: 2,
          explanation: "Crisis prevention involves identifying and addressing issues before they escalate."
        }
      ]
    },
    {
      id: 2,
      title: "Executive and Leadership Communication",
      completed: false,
      content: `
# Executive and Leadership Communication

## Strategic Communication at Leadership Level
This module focuses on how senior leaders communicate to inspire, lead change, build trust, and represent the organization internally and externally.

### Leadership Communication Style
- **Authenticity**: Being genuine and consistent in communication
- **Clarity**: Simplifying complex ideas for diverse audiences
- **Vision casting**: Articulating future direction compellingly
- **Storytelling**: Using narratives to connect and persuade

### Executive Presence
- **Confidence display**: Projecting assurance without arrogance
- **Listening skills**: Demonstrating genuine attention and understanding
- **Non-verbal communication**: Body language, tone, and appearance
- **Adaptability**: Adjusting style for different situations and audiences

### Board and Investor Communication
- **Financial storytelling**: Making numbers meaningful and engaging
- **Strategy explanation**: Clarifying business direction and rationale
- **Transparency management**: Balancing openness with confidentiality
- **Q&A preparation**: Anticipating and preparing for tough questions

### Employee Engagement Communication
- **Town hall leadership**: Effective large-group communication
- **Cascade communication**: Ensuring message consistency through levels
- **Recognition communication**: Celebrating achievements publicly
- **Difficult message delivery**: Communicating bad news with empathy

### Media and Public Speaking
- **Interview techniques**: Effective media interaction skills
- **Speech writing and delivery**: Crafting and presenting formal addresses
- **Panel participation**: Contributing effectively in group discussions
- **Impromptu speaking**: Thinking and speaking clearly on the spot

### Crisis Leadership Communication
- **Visible leadership**: Being present and accountable during crises
- **Empathetic messaging**: Showing genuine concern for affected parties
- **Decision communication**: Explaining rationale for difficult choices
- **Recovery narrative**: Leading the story of comeback and improvement

### Digital Leadership Presence
- **Social media leadership**: Appropriate and effective online presence
- **Video communication**: Using video for authentic connection
- **Virtual leadership**: Leading through digital platforms effectively
- **Personal brand alignment**: Ensuring personal and corporate brand consistency
`,
      quiz: [
        {
          id: 1,
          question: "What is authenticity in leadership communication?",
          options: [
            "Using complex vocabulary",
            "Never showing vulnerability",
            "Being genuine and consistent",
            "Always telling positive stories"
          ],
          correctAnswer: 2,
          explanation: "Authenticity means being true to oneself and consistent in messages and actions."
        },
        {
          id: 2,
          question: "What is vision casting?",
          options: [
            "Imagining unrealistic futures",
            "Predicting market trends",
            "Creating vision statements only",
            "Articulating future direction compellingly"
          ],
          correctAnswer: 3,
          explanation: "Vision casting helps people see and feel inspired by the future direction."
        },
        {
          id: 3,
          question: "What does executive presence include?",
          options: [
            "Many years of experience",
            "Large office size",
            "Confidence, listening, non-verbal communication",
            "Only formal attire"
          ],
          correctAnswer: 2,
          explanation: "Executive presence combines confidence, communication skills, and professional demeanor."
        },
        {
          id: 4,
          question: "What is financial storytelling?",
          options: [
            "Creating fictional financial stories",
            "Making numbers meaningful and engaging",
            "Simplifying all numbers completely",
            "Only reporting financial results"
          ],
          correctAnswer: 1,
          explanation: "Financial storytelling puts numbers in context that connects with audiences emotionally."
        },
        {
          id: 5,
          question: "What is clarity in leadership communication?",
          options: [
            "Speaking quickly and efficiently",
            "Simplifying complex ideas for diverse audiences",
            "Being brief at all times",
            "Using technical jargon precisely"
          ],
          correctAnswer: 1,
          explanation: "Clarity means making complex ideas understandable to different audience types."
        },
        {
          id: 6,
          question: "What are town hall meetings for leaders?",
          options: [
            "Employee complaint sessions",
            "Effective large-group communication forums",
            "Only formal presentations",
            "Annual mandatory meetings"
          ],
          correctAnswer: 1,
          explanation: "Town halls allow leaders to connect directly with large employee groups."
        },
        {
          id: 7,
          question: "What is storytelling in leadership?",
          options: [
            "Using narratives to connect and persuade",
            "Historical story telling only",
            "Sharing personal life details",
            "Entertaining with fictional stories"
          ],
          correctAnswer: 0,
          explanation: "Storytelling makes messages memorable and emotionally resonant."
        },
        {
          id: 8,
          question: "What is cascade communication?",
          options: [
            "Ensuring message consistency through organizational levels",
            "Waterfall communication method",
            "Rapid communication spreading",
            "Only top-down communication"
          ],
          correctAnswer: 0,
          explanation: "Cascade communication ensures messages are consistently delivered through all management levels."
        },
        {
          id: 9,
          question: "What is confidence display?",
          options: [
            "Always being certain",
            "Dominating all conversations",
            "Never admitting mistakes",
            "Projecting assurance without arrogance"
          ],
          correctAnswer: 3,
          explanation: "Confidence display inspires trust while remaining approachable."
        },
        {
          id: 10,
          question: "What is strategy explanation?",
          options: [
            "Only sharing completed strategies",
            "Clarifying business direction and rationale",
            "Competitor strategy analysis",
            "Technical strategy documents"
          ],
          correctAnswer: 1,
          explanation: "Strategy explanation helps people understand why decisions were made."
        },
        {
          id: 11,
          question: "What are listening skills for leaders?",
          options: [
            "Multitasking during conversations",
            "Only hearing direct reports",
            "Quick response formulation",
            "Demonstrating genuine attention and understanding"
          ],
          correctAnswer: 3,
          explanation: "Active listening shows respect and helps leaders understand real concerns."
        },
        {
          id: 12,
          question: "What is recognition communication?",
          options: [
            "Annual award ceremonies",
            "Celebrating achievements publicly",
            "Private praise only",
            "Only financial rewards"
          ],
          correctAnswer: 1,
          explanation: "Public recognition motivates employees and reinforces desired behaviors."
        },
        {
          id: 13,
          question: "What is non-verbal communication for executives?",
          options: [
            "Body language, tone, and appearance",
            "Only hand gestures",
            "Office decoration",
            "Facial expressions only"
          ],
          correctAnswer: 0,
          explanation: "Non-verbal cues often communicate more than words for leaders."
        },
        {
          id: 14,
          question: "How to deliver difficult messages?",
          options: [
            "With empathy and clarity",
            "Quickly and indirectly",
            "Through intermediaries only",
            "Without emotion or explanation"
          ],
          correctAnswer: 0,
          explanation: "Difficult messages require empathy while maintaining clarity and honesty."
        },
        {
          id: 15,
          question: "What is adaptability in leadership communication?",
          options: [
            "Agreeing with everyone",
            "Following trends blindly",
            "Adjusting style for different situations",
            "Changing messages frequently"
          ],
          correctAnswer: 2,
          explanation: "Adaptability means tailoring communication approach to different audiences and contexts."
        },
        {
          id: 16,
          question: "What is transparency management?",
          options: [
            "Only sharing positive information",
            "Hiding sensitive information",
            "Revealing everything publicly",
            "Balancing openness with confidentiality"
          ],
          correctAnswer: 3,
          explanation: "Transparency management decides what to share while protecting necessary confidentiality."
        },
        {
          id: 17,
          question: "What is visible leadership during crisis?",
          options: [
            "Hiding from media",
            "Delegating all communication",
            "Only giving statements",
            "Being present and accountable"
          ],
          correctAnswer: 3,
          explanation: "Visible leadership shows accountability and concern during difficult times."
        },
        {
          id: 18,
          question: "What are Q&A preparation techniques?",
          options: [
            "Anticipating and preparing for tough questions",
            "Having spokespersons answer everything",
            "Avoiding all questions",
            "Only preparing easy questions"
          ],
          correctAnswer: 0,
          explanation: "Q&A preparation helps leaders respond effectively to challenging inquiries."
        },
        {
          id: 19,
          question: "What is empathetic messaging?",
          options: [
            "Avoiding difficult emotions",
            "Showing genuine concern for affected parties",
            "Only saying 'I understand'",
            "Emotional manipulation"
          ],
          correctAnswer: 1,
          explanation: "Empathetic messaging acknowledges people's feelings and experiences."
        },
        {
          id: 20,
          question: "What is recovery narrative?",
          options: [
            "Only reporting recovery statistics",
            "Blaming external factors",
            "Leading the story of comeback and improvement",
            "Forgetting past problems"
          ],
          correctAnswer: 2,
          explanation: "Recovery narrative focuses on positive steps forward after challenges."
        }
      ]
    },
    {
      id: 3,
      title: "Change Management Communication",
      completed: false,
      content: `
# Change Management Communication

## Communicating Organizational Change
This module focuses on strategic communication during organizational transitions, mergers, restructuring, and cultural transformations.

### Change Communication Strategy
- **Change narrative**: Creating compelling story for the change
- **Stakeholder analysis**: Understanding different reactions to change
- **Timeline communication**: Explaining change phases and milestones
- **Resistance management**: Addressing concerns and objections

### Communication Throughout Change Cycle
- **Pre-change communication**: Building awareness and understanding
- **During-change communication**: Supporting implementation
- **Post-change communication**: Reinforcing and stabilizing new state
- **Sustainability communication**: Ensuring lasting change adoption

### Message Development for Change
- **Case for change**: Clear rationale for why change is needed
- **Benefits communication**: What improvements change will bring
- **Impact explanation**: How change affects different groups
- **Support messaging**: Resources available to help with transition

### Leadership Alignment
- **Leader as champion**: Ensuring leaders consistently support change
- **Manager communication kits**: Tools for frontline communication
- **Middle management engagement**: Critical communication layer
- **Visible leadership**: Leaders demonstrating commitment to change

### Employee Engagement in Change
- **Two-way communication channels**: Listening to employee concerns
- **Feedback mechanisms**: Gathering input and addressing issues
- **Success stories**: Sharing early wins and positive examples
- **Recognition**: Celebrating change adoption and contributions

### Overcoming Resistance
- **Concern identification**: Understanding why people resist
- **Myth busting**: Addressing rumors and misinformation
- **Fear addressing**: Acknowledging and responding to anxieties
- **Incentive communication**: Explaining benefits of embracing change

### Cultural Transformation Communication
- **Values communication**: Articulating new cultural expectations
- **Behavior modeling**: Demonstrating desired new behaviors
- **Storytelling**: Sharing examples of cultural change in action
- **Reinforcement communication**: Consistently supporting new culture

### Measurement of Change Communication
- **Adoption tracking**: Measuring how well change is being adopted
- **Sentiment analysis**: Gauging employee feelings about change
- **Communication effectiveness**: Assessing if messages are understood
- **Adjustment communication**: Sharing progress and making corrections
`,
      quiz: [
        {
          id: 1,
          question: "What is a change narrative?",
          options: [
            "Creating compelling story for the change",
            "Technical change documentation",
            "Historical background of change",
            "Only announcing the change"
          ],
          correctAnswer: 0,
          explanation: "A change narrative helps people understand and connect with the reason for change."
        },
        {
          id: 2,
          question: "Why analyze stakeholders during change?",
          options: [
            "Creating stakeholder lists",
            "Understanding different reactions to change",
            "Only identifying supporters",
            "Avoiding resistant stakeholders"
          ],
          correctAnswer: 1,
          explanation: "Stakeholder analysis helps tailor communication to different groups' needs and concerns."
        },
        {
          id: 3,
          question: "What is the case for change?",
          options: [
            "Only business case documents",
            "Financial justification only",
            "Clear rationale for why change is needed",
            "Competitor analysis"
          ],
          correctAnswer: 2,
          explanation: "The case for change explains why the current state is insufficient and change is necessary."
        },
        {
          id: 4,
          question: "What is pre-change communication?",
          options: [
            "Rumors and speculation management",
            "Only final change announcement",
            "Building awareness and understanding before implementation",
            "Employee training programs"
          ],
          correctAnswer: 2,
          explanation: "Pre-change communication prepares people for what's coming and builds understanding."
        },
        {
          id: 5,
          question: "What is timeline communication?",
          options: [
            "Employee deadline announcements",
            "Project management schedules",
            "Explaining change phases and milestones",
            "Only start and end dates"
          ],
          correctAnswer: 2,
          explanation: "Timeline communication helps people understand the change journey and what to expect when."
        },
        {
          id: 6,
          question: "What are benefits communication?",
          options: [
            "Only financial benefits",
            "What improvements change will bring",
            "Future uncertain benefits",
            "Personal benefits for leaders"
          ],
          correctAnswer: 1,
          explanation: "Benefits communication helps people see what they'll gain from the change."
        },
        {
          id: 7,
          question: "What is resistance management?",
          options: [
            "Addressing concerns and objections",
            "Ignoring resistant people",
            "Forcing compliance",
            "Only positive messaging"
          ],
          correctAnswer: 0,
          explanation: "Resistance management proactively addresses concerns to reduce opposition."
        },
        {
          id: 8,
          question: "What is leader as champion?",
          options: [
            "Leadership title changes",
            "Executive bonus programs",
            "Ensuring leaders consistently support change",
            "Only CEO support"
          ],
          correctAnswer: 2,
          explanation: "Leaders must actively and visibly champion the change for it to succeed."
        },
        {
          id: 9,
          question: "What are manager communication kits?",
          options: [
            "Tools for frontline communication",
            "HR policy documents",
            "Technical manuals",
            "Only meeting agendas"
          ],
          correctAnswer: 0,
          explanation: "Communication kits help managers discuss change consistently with their teams."
        },
        {
          id: 10,
          question: "What is impact explanation?",
          options: [
            "Only negative impacts",
            "How change affects different groups",
            "Departmental impact only",
            "Personal impact on leaders"
          ],
          correctAnswer: 1,
          explanation: "Impact explanation helps people understand how change will specifically affect them."
        },
        {
          id: 11,
          question: "What are two-way communication channels?",
          options: [
            "Social media platforms",
            "Only top-down announcements",
            "Listening to employee concerns and feedback",
            "Suggestion boxes only"
          ],
          correctAnswer: 2,
          explanation: "Two-way channels allow employees to express concerns and ask questions."
        },
        {
          id: 12,
          question: "What are success stories in change?",
          options: [
            "Sharing early wins and positive examples",
            "Theoretical success scenarios",
            "Only final success stories",
            "Competitor success stories"
          ],
          correctAnswer: 0,
          explanation: "Success stories demonstrate that change is working and build momentum."
        },
        {
          id: 13,
          question: "What is concern identification?",
          options: [
            "Psychological analysis",
            "Only listing complaints",
            "Understanding why people resist",
            "Ignoring minor concerns"
          ],
          correctAnswer: 2,
          explanation: "Identifying concerns helps address the root causes of resistance."
        },
        {
          id: 14,
          question: "What is middle management engagement?",
          options: [
            "Department head meetings",
            "Only manager training",
            "Critical communication layer between leadership and staff",
            "Middle manager promotions"
          ],
          correctAnswer: 2,
          explanation: "Middle managers are crucial for translating and reinforcing change messages."
        },
        {
          id: 15,
          question: "What is myth busting?",
          options: [
            "Creating new myths",
            "Addressing rumors and misinformation",
            "Only addressing major rumors",
            "Ignoring false information"
          ],
          correctAnswer: 1,
          explanation: "Myth busting prevents misinformation from undermining change efforts."
        },
        {
          id: 16,
          question: "What are values communication?",
          options: [
            "Articulating new cultural expectations",
            "Only corporate value statements",
            "Employee value assessments",
            "Ethical guidelines"
          ],
          correctAnswer: 0,
          explanation: "Values communication explains the beliefs and behaviors expected in the new culture."
        },
        {
          id: 17,
          question: "What is during-change communication?",
          options: [
            "Schedule updates",
            "Problem announcements",
            "Supporting implementation phase",
            "Only progress reports"
          ],
          correctAnswer: 2,
          explanation: "During-change communication provides support and guidance as change is implemented."
        },
        {
          id: 18,
          question: "What is fear addressing?",
          options: [
            "Acknowledging and responding to anxieties",
            "Telling people not to worry",
            "Only logical explanations",
            "Ignoring emotional responses"
          ],
          correctAnswer: 0,
          explanation: "Addressing fears helps people move past emotional barriers to change."
        },
        {
          id: 19,
          question: "What is behavior modeling?",
          options: [
            "Only written behavior codes",
            "Demonstrating desired new behaviors",
            "Employee behavior monitoring",
            "Theoretical behavior examples"
          ],
          correctAnswer: 1,
          explanation: "Leaders must demonstrate the behaviors they expect from others."
        },
        {
          id: 20,
          question: "What is adoption tracking?",
          options: [
            "Measuring how well change is being adopted",
            "Software adoption rates",
            "Only compliance measurement",
            "Attendance tracking"
          ],
          correctAnswer: 0,
          explanation: "Adoption tracking measures whether people are actually changing their behaviors."
        }
      ]
    },
    {
      id: 4,
      title: "Internal Communications and Employee Engagement",
      completed: false,
      content: `
# Internal Communications and Employee Engagement

## Strategic Internal Communication
This module covers how to design and implement effective internal communication systems that engage employees, align with business goals, and drive organizational performance.

### Internal Communication Strategy
- **Purpose definition**: Why internal communication matters
- **Audience segmentation**: Different employee groups and needs
- **Channel strategy**: Selecting appropriate communication channels
- **Content planning**: Creating relevant and engaging content

### Communication Channels and Platforms
- **Digital platforms**: Intranets, collaboration tools, apps
- **Face-to-face communication**: Meetings, town halls, roundtables
- **Print and display**: Newsletters, posters, notice boards
- **Mobile communication**: Apps, SMS, push notifications

### Leadership Communication Systems
- **Cascade systems**: Ensuring consistent message flow
- **Feedback loops**: Gathering employee input and concerns
- **Skip-level meetings**: Direct communication across levels
- **Open door policies**: Accessible leadership communication

### Change and Crisis Internal Communication
- **Transparent updates**: Honest communication during difficulties
- **Rumor control**: Addressing misinformation quickly
- **Support communication**: Resources available to employees
- **Recovery messaging**: Moving forward after challenges

### Employee Voice and Feedback
- **Survey programs**: Regular employee sentiment measurement
- **Suggestion systems**: Formal ways to submit ideas
- **Focus groups**: In-depth discussion with employee groups
- **Pulse surveys**: Quick, frequent sentiment checks

### Recognition and Celebration Communication
- **Achievement announcements**: Public recognition of success
- **Milestone celebrations**: Marking organizational achievements
- **Team spotlight**: Highlighting department accomplishments
- **Personal recognition**: Acknowledging individual contributions

### Onboarding and Integration Communication
- **Welcome communication**: Making new hires feel included
- **Cultural introduction**: Sharing organizational values and norms
- **Role clarification**: Clear expectations and responsibilities
- **Integration support**: Helping new employees connect

### Measurement of Internal Communication
- **Engagement metrics**: Measuring employee involvement
- **Understanding metrics**: Assessing message comprehension
- **Channel effectiveness**: Which channels work best
- **Impact measurement**: How communication affects performance
`,
      quiz: [
        {
          id: 1,
          question: "What is purpose definition in internal communication?",
          options: [
            "Why internal communication matters to organization",
            "Only communication department purpose",
            "Employee communication requests",
            "Legal compliance requirements"
          ],
          correctAnswer: 0,
          explanation: "Purpose definition clarifies how internal communication supports organizational goals."
        },
        {
          id: 2,
          question: "What is audience segmentation for employees?",
          options: [
            "Different employee groups and their needs",
            "Salary level groupings",
            "Only department divisions",
            "Employee performance categories"
          ],
          correctAnswer: 0,
          explanation: "Audience segmentation recognizes different employee groups have different communication needs."
        },
        {
          id: 3,
          question: "What are digital platforms for internal communication?",
          options: [
            "Public websites",
            "Only social media platforms",
            "Competitor digital tools",
            "Intranets, collaboration tools, apps"
          ],
          correctAnswer: 3,
          explanation: "Digital platforms provide efficient, scalable internal communication channels."
        },
        {
          id: 4,
          question: "What is channel strategy?",
          options: [
            "Only newest technology channels",
            "Using all available channels",
            "Traditional channels only",
            "Selecting appropriate communication channels"
          ],
          correctAnswer: 3,
          explanation: "Channel strategy selects the right mix of channels for different messages and audiences."
        },
        {
          id: 5,
          question: "What are cascade systems?",
          options: [
            "Only top-down communication",
            "Information trickle down",
            "Ensuring consistent message flow through levels",
            "Waterfall project management"
          ],
          correctAnswer: 2,
          explanation: "Cascade systems ensure messages are consistently communicated through all management levels."
        },
        {
          id: 6,
          question: "What is content planning for internal communication?",
          options: [
            "Spontaneous communication",
            "External content sharing",
            "Only mandatory announcements",
            "Creating relevant and engaging content"
          ],
          correctAnswer: 3,
          explanation: "Content planning ensures internal communication is valuable and engaging for employees."
        },
        {
          id: 7,
          question: "What are face-to-face communication methods?",
          options: [
            "Meetings, town halls, roundtables",
            "Only formal presentations",
            "Performance reviews",
            "Social gatherings only"
          ],
          correctAnswer: 0,
          explanation: "Face-to-face communication builds personal connections and allows immediate feedback."
        },
        {
          id: 8,
          question: "What are feedback loops?",
          options: [
            "Gathering employee input and concerns",
            "Performance feedback systems",
            "Only manager feedback to employees",
            "Customer feedback collection"
          ],
          correctAnswer: 0,
          explanation: "Feedback loops ensure employee voices are heard and considered."
        },
        {
          id: 9,
          question: "What is transparent updates during difficulties?",
          options: [
            "Only positive spin on problems",
            "Honest communication about challenges",
            "Technical details only",
            "Minimal information sharing"
          ],
          correctAnswer: 1,
          explanation: "Transparent updates build trust during difficult times by being honest about situations."
        },
        {
          id: 10,
          question: "What are skip-level meetings?",
          options: [
            "Direct communication across organizational levels",
            "Department head meetings",
            "Skipping unimportant meetings",
            "Executive only meetings"
          ],
          correctAnswer: 0,
          explanation: "Skip-level meetings allow direct communication between employees and leaders beyond immediate managers."
        },
        {
          id: 11,
          question: "What is rumor control?",
          options: [
            "Ignoring all rumors",
            "Addressing misinformation quickly",
            "Tracking rumor sources",
            "Creating official rumors"
          ],
          correctAnswer: 1,
          explanation: "Rumor control prevents misinformation from spreading and causing unnecessary concern."
        },
        {
          id: 12,
          question: "What are survey programs?",
          options: [
            "Only annual surveys",
            "Market research surveys",
            "Customer satisfaction surveys",
            "Regular employee sentiment measurement"
          ],
          correctAnswer: 3,
          explanation: "Survey programs systematically measure employee opinions and satisfaction."
        },
        {
          id: 13,
          question: "What are open door policies?",
          options: [
            "Physical office doors always open",
            "No appointment needed policies",
            "Accessible leadership communication",
            "Unlimited employee access"
          ],
          correctAnswer: 2,
          explanation: "Open door policies encourage employees to share concerns directly with leaders."
        },
        {
          id: 14,
          question: "What is support communication during crisis?",
          options: [
            "Only emotional support",
            "Financial support information",
            "External support services",
            "Resources available to help employees"
          ],
          correctAnswer: 3,
          explanation: "Support communication informs employees about available help during difficult times."
        },
        {
          id: 15,
          question: "What are suggestion systems?",
          options: [
            "Only complaint systems",
            "Innovation department only",
            "Anonymous reporting systems",
            "Formal ways to submit ideas"
          ],
          correctAnswer: 3,
          explanation: "Suggestion systems provide structured ways for employees to contribute ideas."
        },
        {
          id: 16,
          question: "What are achievement announcements?",
          options: [
            "Public recognition of success",
            "Department meeting announcements",
            "Only major accomplishments",
            "Annual award ceremonies"
          ],
          correctAnswer: 0,
          explanation: "Achievement announcements celebrate successes and reinforce desired behaviors."
        },
        {
          id: 17,
          question: "What are focus groups for employees?",
          options: [
            "Customer focus groups",
            "Product testing groups",
            "In-depth discussion with employee groups",
            "Only management focus groups"
          ],
          correctAnswer: 2,
          explanation: "Focus groups provide qualitative insights into employee experiences and opinions."
        },
        {
          id: 18,
          question: "What is recovery messaging?",
          options: [
            "Financial recovery reports",
            "Only crisis resolution announcements",
            "Moving forward after challenges",
            "Return to normal messaging"
          ],
          correctAnswer: 2,
          explanation: "Recovery messaging focuses on positive steps forward after difficulties."
        },
        {
          id: 19,
          question: "What are pulse surveys?",
          options: [
            "Only health-related surveys",
            "Competitor analysis surveys",
            "Market pulse measurements",
            "Quick, frequent sentiment checks"
          ],
          correctAnswer: 3,
          explanation: "Pulse surveys provide regular, quick insights into employee sentiment."
        },
        {
          id: 20,
          question: "What is welcome communication for new hires?",
          options: [
            "Policy document distribution",
            "Making new employees feel included",
            "Only orientation schedules",
            "Job description review"
          ],
          correctAnswer: 1,
          explanation: "Welcome communication helps new employees feel valued and connected from day one."
        }
      ]
    },
    {
      id: 5,
      title: "Corporate Reputation and Brand Management",
      completed: false,
      content: `
# Corporate Reputation and Brand Management

## Strategic Reputation Management
This module covers how to build, protect, and enhance corporate reputation through strategic communication and consistent brand management.

### Reputation Strategy Development
- **Reputation audit**: Current reputation assessment
- **Desired positioning**: Target reputation definition
- **Gap analysis**: Current vs desired reputation
- **Strategy development**: Plan to close reputation gaps

### Brand Architecture Management
- **Corporate brand**: Overall organizational brand
- **Product/service brands**: Individual offering brands
- **Employer brand**: Organization as workplace
- **Brand hierarchy**: Relationship between different brands

### Reputation Building Activities
- **Thought leadership**: Establishing expertise and authority
- **Corporate social responsibility**: Social and environmental initiatives
- **Quality communication**: Excellence in products/services
- **Innovation storytelling**: Sharing innovative achievements

### Reputation Protection
- **Issue monitoring**: Tracking potential reputation threats
- **Crisis preparedness**: Ready for reputation challenges
- **Stakeholder engagement**: Building supportive relationships
- **Positive content creation**: Building reputation capital

### Measurement of Reputation
- **Reputation surveys**: Stakeholder perception measurement
- **Media analysis**: Coverage tone and volume assessment
- **Social listening**: Online conversation monitoring
- **Competitive benchmarking**: Comparison with peers

### Corporate Storytelling
- **Origin stories**: Organizational history and founding
- **Purpose narrative**: Why organization exists beyond profit
- **Impact stories**: Positive difference organization makes
- **Future vision**: Where organization is heading

### Employer Brand Management
- **Employee value proposition**: Why work for the organization
- **Candidate experience**: Reputation during hiring process
- **Alumni relations**: Former employee relationships
- **Glassdoor management**: Online employer review platforms

### Integrated Brand Communication
- **Visual identity consistency**: Logos, colors, design elements
- **Tone of voice**: Consistent communication style
- **Brand guidelines**: Rules for brand representation
- **Training and enforcement**: Ensuring brand consistency
`,
      quiz: [
        {
          id: 1,
          question: "What is a reputation audit?",
          options: [
            "Financial audit for reputation",
            "Employee reputation review",
            "Competitor reputation analysis",
            "Current reputation assessment"
          ],
          correctAnswer: 3,
          explanation: "A reputation audit assesses current stakeholder perceptions of the organization."
        },
        {
          id: 2,
          question: "What is desired positioning?",
          options: [
            "Competitive positioning strategy",
            "Market position goals",
            "Physical location planning",
            "Target reputation definition"
          ],
          correctAnswer: 3,
          explanation: "Desired positioning defines how the organization wants to be perceived by stakeholders."
        },
        {
          id: 3,
          question: "What is corporate brand?",
          options: [
            "Overall organizational brand",
            "Product brand umbrella",
            "Only logo and visual identity",
            "Company name only"
          ],
          correctAnswer: 0,
          explanation: "The corporate brand represents the entire organization and its reputation."
        },
        {
          id: 4,
          question: "What is gap analysis for reputation?",
          options: [
            "Employee perception gaps",
            "Current vs desired reputation comparison",
            "Only negative reputation gaps",
            "Competitor reputation gaps"
          ],
          correctAnswer: 1,
          explanation: "Gap analysis identifies differences between current and desired reputation."
        },
        {
          id: 5,
          question: "What is thought leadership?",
          options: [
            "Only executive visibility",
            "Academic research publication",
            "Establishing expertise and authority",
            "Industry conference speaking"
          ],
          correctAnswer: 2,
          explanation: "Thought leadership positions the organization as an expert in its field."
        },
        {
          id: 6,
          question: "What are product/service brands?",
          options: [
            "Competitor product brands",
            "Internal project names",
            "Only consumer product brands",
            "Individual offering brands"
          ],
          correctAnswer: 3,
          explanation: "Product/service brands represent specific offerings within the corporate brand."
        },
        {
          id: 7,
          question: "What is corporate social responsibility?",
          options: [
            "Environmental compliance",
            "Only charity donations",
            "Social and environmental initiatives",
            "Employee volunteer programs"
          ],
          correctAnswer: 2,
          explanation: "CSR involves initiatives that benefit society and the environment."
        },
        {
          id: 8,
          question: "What is issue monitoring?",
          options: [
            "Competitor issue tracking",
            "Employee issue reporting",
            "Tracking potential reputation threats",
            "Only current crisis monitoring"
          ],
          correctAnswer: 2,
          explanation: "Issue monitoring identifies emerging concerns that could damage reputation."
        },
        {
          id: 9,
          question: "What is employer brand?",
          options: [
            "Only recruitment advertising",
            "Employee benefits package",
            "HR department reputation",
            "Organization as workplace reputation"
          ],
          correctAnswer: 3,
          explanation: "Employer brand represents the organization's reputation as a place to work."
        },
        {
          id: 10,
          question: "What is quality communication?",
          options: [
            "Customer quality feedback",
            "Excellence in products/services messaging",
            "Manufacturing quality reports",
            "Only product quality claims"
          ],
          correctAnswer: 1,
          explanation: "Quality communication shares stories about product/service excellence."
        },
        {
          id: 11,
          question: "What is brand hierarchy?",
          options: [
            "Product line hierarchy",
            "Only corporate brand ranking",
            "Relationship between different brands",
            "Department brand structure"
          ],
          correctAnswer: 2,
          explanation: "Brand hierarchy defines how different brands relate to each other."
        },
        {
          id: 12,
          question: "What is innovation storytelling?",
          options: [
            "Future technology predictions",
            "Only patent announcements",
            "Sharing innovative achievements",
            "Research and development reports"
          ],
          correctAnswer: 2,
          explanation: "Innovation storytelling shares how the organization creates new value."
        },
        {
          id: 13,
          question: "What are reputation surveys?",
          options: [
            "Stakeholder perception measurement",
            "Market research surveys",
            "Employee opinion surveys",
            "Only customer satisfaction surveys"
          ],
          correctAnswer: 0,
          explanation: "Reputation surveys systematically measure how stakeholders perceive the organization."
        },
        {
          id: 14,
          question: "What is crisis preparedness for reputation?",
          options: [
            "Only crisis response planning",
            "Reputation insurance",
            "Ready for reputation challenges",
            "Legal protection plans"
          ],
          correctAnswer: 2,
          explanation: "Crisis preparedness involves planning to protect reputation during challenges."
        },
        {
          id: 15,
          question: "What is media analysis for reputation?",
          options: [
            "Advertising effectiveness",
            "Only negative media tracking",
            "Journalist relationship tracking",
            "Coverage tone and volume assessment"
          ],
          correctAnswer: 3,
          explanation: "Media analysis evaluates how media coverage affects reputation."
        },
        {
          id: 16,
          question: "What is employee value proposition?",
          options: [
            "Career progression paths",
            "Only salary and benefits",
            "Why work for the organization",
            "Work environment description"
          ],
          correctAnswer: 2,
          explanation: "Employee value proposition explains what makes the organization a great workplace."
        },
        {
          id: 17,
          question: "What are origin stories?",
          options: [
            "Historical documentation",
            "Only founder biographies",
            "Organizational history and founding",
            "Company establishment dates"
          ],
          correctAnswer: 2,
          explanation: "Origin stories share the organization's beginnings and founding values."
        },
        {
          id: 18,
          question: "What is stakeholder engagement for reputation?",
          options: [
            "Building supportive relationships",
            "Only customer engagement",
            "Community partnership building",
            "Investor relations activities"
          ],
          correctAnswer: 0,
          explanation: "Stakeholder engagement builds relationships that support reputation."
        },
        {
          id: 19,
          question: "What is candidate experience?",
          options: [
            "Only interview experience",
            "Recruitment marketing",
            "Reputation during hiring process",
            "Job application process"
          ],
          correctAnswer: 2,
          explanation: "Candidate experience affects employer brand reputation among potential hires."
        },
        {
          id: 20,
          question: "What is positive content creation?",
          options: [
            "Advertising campaigns",
            "Only positive news releases",
            "Social media positivity",
            "Building reputation capital"
          ],
          correctAnswer: 3,
          explanation: "Positive content creation builds a reservoir of goodwill that protects reputation."
        }
      ]
    },
    {
      id: 6,
      title: "Digital Transformation in Corporate Communications",
      completed: false,
      content: `
# Digital Transformation in Corporate Communications

## Technology-Enabled Communication Strategy
This module explores how digital technologies are transforming corporate communications, including AI, data analytics, automation, and emerging digital platforms.

### Digital Communication Strategy
- **Digital readiness assessment**: Current technology capabilities
- **Technology roadmap**: Planned digital communication evolution
- **Integration planning**: Connecting digital and traditional channels
- **Change management**: Helping organization adapt to digital tools

### AI and Automation in Communications
- **Content generation**: AI-assisted writing and content creation
- **Personalization at scale**: Tailored communication using AI
- **Chatbot implementation**: Automated customer and employee communication
- **Sentiment analysis**: AI-powered emotion and opinion detection

### Data-Driven Communication
- **Analytics integration**: Using data to inform communication decisions
- **Audience insights**: Data-driven understanding of stakeholders
- **Predictive analytics**: Anticipating communication needs and responses
- **Performance measurement**: Data-based evaluation of communication effectiveness

### Digital Platform Management
- **Enterprise social networks**: Internal digital collaboration platforms
- **Digital signage**: Electronic displays for internal communication
- **Mobile apps**: Organization-specific communication applications
- **Video platforms**: Internal and external video communication tools

### Social Media Strategy for Corporations
- **Social listening**: Monitoring digital conversations about organization
- **Social media governance**: Policies and guidelines for corporate social use
- **Employee advocacy programs**: Encouraging employee social media participation
- **Crisis management digital tools**: Technology for managing online crises

### Virtual and Hybrid Communication
- **Virtual town halls**: Digital large-group meetings
- **Hybrid event management**: Combining in-person and virtual attendance
- **Digital workspace communication**: Communication in remote work environments
- **Virtual reality applications**: Immersive communication experiences

### Cybersecurity in Digital Communications
- **Data protection**: Safeguarding communication data
- **Secure platforms**: Ensuring communication channel security
- **Privacy compliance**: Following data privacy regulations
- **Crisis communication security**: Protecting communication during crises

### Future Trends and Innovation
- **Emerging technologies**: New tools impacting communication
- **Digital ethics**: Ethical considerations in digital communication
- **Skills development**: Building digital communication competencies
- **Continuous adaptation**: Staying current with digital evolution
`,
      quiz: [
        {
          id: 1,
          question: "What is digital readiness assessment?",
          options: [
            "Competitor digital analysis",
            "Technology budget review",
            "Current technology capabilities evaluation",
            "Only digital skills assessment"
          ],
          correctAnswer: 2,
          explanation: "Digital readiness assessment evaluates current technology infrastructure and capabilities."
        },
        {
          id: 2,
          question: "What is AI-assisted content generation?",
          options: [
            "AI writing and content creation support",
            "Complete AI content replacement",
            "Only automated social media posts",
            "Competitor content generation"
          ],
          correctAnswer: 0,
          explanation: "AI can assist with writing, editing, and creating communication content."
        },
        {
          id: 3,
          question: "What is a technology roadmap?",
          options: [
            "Software implementation schedule",
            "IT department strategic plan",
            "Planned digital communication evolution",
            "Only technology purchase plans"
          ],
          correctAnswer: 2,
          explanation: "A technology roadmap outlines planned digital communication technology adoption."
        },
        {
          id: 4,
          question: "What is personalization at scale?",
          options: [
            "Segmented email marketing",
            "Individual manual personalization",
            "Only mass customization",
            "Tailored communication using AI"
          ],
          correctAnswer: 3,
          explanation: "AI enables personalized communication for large audiences efficiently."
        },
        {
          id: 5,
          question: "What is analytics integration?",
          options: [
            "Website traffic analysis",
            "Only social media analytics",
            "Financial data integration",
            "Using data to inform communication decisions"
          ],
          correctAnswer: 3,
          explanation: "Analytics integration uses data insights to guide communication strategy."
        },
        {
          id: 6,
          question: "What are chatbots for communication?",
          options: [
            "AI conversation simulators",
            "Social media bots",
            "Automated customer and employee communication",
            "Only customer service automation"
          ],
          correctAnswer: 2,
          explanation: "Chatbots provide automated responses to common inquiries through messaging platforms."
        },
        {
          id: 7,
          question: "What are enterprise social networks?",
          options: [
            "Internal digital collaboration platforms",
            "Only LinkedIn for business",
            "Professional networking sites",
            "Public social media for business"
          ],
          correctAnswer: 0,
          explanation: "Enterprise social networks are private digital platforms for internal collaboration."
        },
        {
          id: 8,
          question: "What are audience insights from data?",
          options: [
            "Only demographic information",
            "Customer purchase data",
            "Data-driven understanding of stakeholders",
            "Market research reports"
          ],
          correctAnswer: 2,
          explanation: "Data provides deep understanding of stakeholder preferences and behaviors."
        },
        {
          id: 9,
          question: "What is social listening?",
          options: [
            "Employee social media watching",
            "Competitor social media monitoring",
            "Only tracking brand mentions",
            "Monitoring digital conversations about organization"
          ],
          correctAnswer: 3,
          explanation: "Social listening tracks online conversations to understand perceptions and trends."
        },
        {
          id: 10,
          question: "What is predictive analytics for communication?",
          options: [
            "Only predicting crisis events",
            "Market trend predictions",
            "Customer behavior forecasting",
            "Anticipating communication needs and responses"
          ],
          correctAnswer: 3,
          explanation: "Predictive analytics anticipates what communication will be needed and how it will be received."
        },
        {
          id: 11,
          question: "What is integration planning?",
          options: [
            "Department collaboration planning",
            "Connecting digital and traditional channels",
            "Channel partnership integration",
            "Only software integration"
          ],
          correctAnswer: 1,
          explanation: "Integration planning ensures all communication channels work together seamlessly."
        },
        {
          id: 12,
          question: "What is sentiment analysis?",
          options: [
            "AI-powered emotion and opinion detection",
            "Only positive/negative classification",
            "Market sentiment indicators",
            "Employee sentiment surveys"
          ],
          correctAnswer: 0,
          explanation: "Sentiment analysis uses AI to detect emotions and opinions in text data."
        },
        {
          id: 13,
          question: "What are virtual town halls?",
          options: [
            "Webinar presentations",
            "Only video conferences",
            "Digital large-group meetings",
            "Online shareholder meetings"
          ],
          correctAnswer: 2,
          explanation: "Virtual town halls allow large-scale employee meetings through digital platforms."
        },
        {
          id: 14,
          question: "What is social media governance?",
          options: [
            "Legal compliance for social media",
            "Employee social media restrictions",
            "Only social media rules",
            "Policies and guidelines for corporate social use"
          ],
          correctAnswer: 3,
          explanation: "Social media governance establishes rules and guidelines for organizational social media use."
        },
        {
          id: 15,
          question: "What is digital signage?",
          options: [
            "Only digital advertising screens",
            "Social media visual content",
            "Electronic displays for internal communication",
            "Website signage optimization"
          ],
          correctAnswer: 2,
          explanation: "Digital signage uses electronic displays for internal communication in offices and facilities."
        },
        {
          id: 16,
          question: "What are employee advocacy programs?",
          options: [
            "Employee brand ambassador programs",
            "Social media influencer employees",
            "Only employee social media training",
            "Encouraging employee social media participation"
          ],
          correctAnswer: 3,
          explanation: "Employee advocacy programs encourage employees to share positive content about the organization."
        },
        {
          id: 17,
          question: "What is hybrid event management?",
          options: [
            "Only virtual event planning",
            "Combining in-person and virtual attendance",
            "Multi-location event coordination",
            "Mixed media event production"
          ],
          correctAnswer: 1,
          explanation: "Hybrid events include both physical and virtual participation options."
        },
        {
          id: 18,
          question: "What is data protection for communications?",
          options: [
            "Safeguarding communication data",
            "Only encryption of messages",
            "Privacy policy compliance",
            "IT security measures"
          ],
          correctAnswer: 0,
          explanation: "Data protection ensures communication data is secure and confidential."
        },
        {
          id: 19,
          question: "What are digital workspace communications?",
          options: [
            "Only email and messaging",
            "Remote collaboration tools",
            "Communication in remote work environments",
            "Virtual office platforms"
          ],
          correctAnswer: 2,
          explanation: "Digital workspace communications involve tools and practices for remote and hybrid teams."
        },
        {
          id: 20,
          question: "What is continuous adaptation in digital communication?",
          options: [
            "Only regular technology updates",
            "Staying current with digital evolution",
            "Constant strategy changes",
            "Employee digital training"
          ],
          correctAnswer: 1,
          explanation: "Continuous adaptation means regularly updating digital communication approaches as technology evolves."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "corporate-communications-diploma-exam",
    title: "Corporate Communications Diploma Final Examination",
    description: "Comprehensive examination covering all six modules of the Corporate Communications Diploma program. This exam tests your knowledge of strategic planning, leadership communication, change management, internal communications, reputation management, and digital transformation.",
    passingScore: 70,
    timeLimit: 120, // minutes
    questions: [
      {
        id: 1,
        question: "What is business alignment in communication planning?",
        options: [
          "Aligning with competitor strategies",
          "Only communicating business results",
          "Linking communication to business strategy",
          "Following government business rules"
        ],
        correctAnswer: 2,
        explanation: "From Module 1: Business alignment ensures communication supports organizational goals.",
        module: 1
      },
      {
        id: 2,
        question: "What is authenticity in leadership communication?",
        options: [
          "Being genuine and consistent",
          "Always telling positive stories",
          "Using complex vocabulary",
          "Never showing vulnerability"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Authenticity means being true to oneself and consistent.",
        module: 2
      },
      {
        id: 3,
        question: "What is a change narrative?",
        options: [
          "Creating compelling story for the change",
          "Only announcing the change",
          "Historical background of change",
          "Technical change documentation"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: A change narrative helps people understand the reason for change.",
        module: 3
      },
      {
        id: 4,
        question: "What is purpose definition in internal communication?",
        options: [
          "Legal compliance requirements",
          "Only communication department purpose",
          "Employee communication requests",
          "Why internal communication matters to organization"
        ],
        correctAnswer: 3,
        explanation: "From Module 4: Purpose definition clarifies how internal communication supports goals.",
        module: 4
      },
      {
        id: 5,
        question: "What is a reputation audit?",
        options: [
          "Current reputation assessment",
          "Employee reputation review",
          "Competitor reputation analysis",
          "Financial audit for reputation"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: A reputation audit assesses current stakeholder perceptions.",
        module: 5
      },
      {
        id: 6,
        question: "What is digital readiness assessment?",
        options: [
          "Technology budget review",
          "Only digital skills assessment",
          "Competitor digital analysis",
          "Current technology capabilities evaluation"
        ],
        correctAnswer: 3,
        explanation: "From Module 6: Digital readiness assesses current technology infrastructure.",
        module: 6
      },
      {
        id: 7,
        question: "What is stakeholder mapping?",
        options: [
          "Creating physical maps of stakeholders",
          "Identifying and prioritizing all audiences",
          "Tracking stakeholder movements",
          "Only listing employee names"
        ],
        correctAnswer: 1,
        explanation: "From Module 1: Stakeholder mapping identifies all relevant audiences.",
        module: 1
      },
      {
        id: 8,
        question: "What is vision casting?",
        options: [
          "Predicting market trends",
          "Articulating future direction compellingly",
          "Creating vision statements only",
          "Imagining unrealistic futures"
        ],
        correctAnswer: 1,
        explanation: "From Module 2: Vision casting helps people see inspired future direction.",
        module: 2
      },
      {
        id: 9,
        question: "Why analyze stakeholders during change?",
        options: [
          "Creating stakeholder lists",
          "Avoiding resistant stakeholders",
          "Understanding different reactions to change",
          "Only identifying supporters"
        ],
        correctAnswer: 2,
        explanation: "From Module 3: Stakeholder analysis tailors communication to different groups.",
        module: 3
      },
      {
        id: 10,
        question: "What is audience segmentation for employees?",
        options: [
          "Salary level groupings",
          "Different employee groups and their needs",
          "Employee performance categories",
          "Only department divisions"
        ],
        correctAnswer: 1,
        explanation: "From Module 4: Audience segmentation recognizes different communication needs.",
        module: 4
      },
      {
        id: 11,
        question: "What is desired positioning?",
        options: [
          "Physical location planning",
          "Competitive positioning strategy",
          "Market position goals",
          "Target reputation definition"
        ],
        correctAnswer: 3,
        explanation: "From Module 5: Desired positioning defines how organization wants to be perceived.",
        module: 5
      },
      {
        id: 12,
        question: "What is AI-assisted content generation?",
        options: [
          "Only automated social media posts",
          "AI writing and content creation support",
          "Complete AI content replacement",
          "Competitor content generation"
        ],
        correctAnswer: 1,
        explanation: "From Module 6: AI can assist with writing and creating communication content.",
        module: 6
      },
      {
        id: 13,
        question: "What are reputation objectives?",
        options: [
          "Only responding to negative news",
          "Increasing social media followers",
          "Creating advertising campaigns",
          "Building and protecting corporate reputation"
        ],
        correctAnswer: 3,
        explanation: "From Module 1: Reputation objectives focus on organizational perception.",
        module: 1
      },
      {
        id: 14,
        question: "What does executive presence include?",
        options: [
          "Only formal attire",
          "Many years of experience",
          "Confidence, listening, non-verbal communication",
          "Large office size"
        ],
        correctAnswer: 2,
        explanation: "From Module 2: Executive presence combines confidence and communication skills.",
        module: 2
      },
      {
        id: 15,
        question: "What is the case for change?",
        options: [
          "Financial justification only",
          "Clear rationale for why change is needed",
          "Competitor analysis",
          "Only business case documents"
        ],
        correctAnswer: 1,
        explanation: "From Module 3: The case for change explains why current state is insufficient.",
        module: 3
      },
      {
        id: 16,
        question: "What are digital platforms for internal communication?",
        options: [
          "Public websites",
          "Intranets, collaboration tools, apps",
          "Competitor digital tools",
          "Only social media platforms"
        ],
        correctAnswer: 1,
        explanation: "From Module 4: Digital platforms provide efficient internal communication channels.",
        module: 4
      },
      {
        id: 17,
        question: "What is corporate brand?",
        options: [
          "Company name only",
          "Overall organizational brand",
          "Only logo and visual identity",
          "Product brand umbrella"
        ],
        correctAnswer: 1,
        explanation: "From Module 5: Corporate brand represents entire organization and reputation.",
        module: 5
      },
      {
        id: 18,
        question: "What is a technology roadmap?",
        options: [
          "Only technology purchase plans",
          "Planned digital communication evolution",
          "IT department strategic plan",
          "Software implementation schedule"
        ],
        correctAnswer: 1,
        explanation: "From Module 6: Technology roadmap outlines digital technology adoption plan.",
        module: 6
      },
      {
        id: 19,
        question: "What is channel integration?",
        options: [
          "Using only digital channels",
          "Coordinating all communication channels",
          "Eliminating traditional channels",
          "Random channel selection"
        ],
        correctAnswer: 1,
        explanation: "From Module 1: Channel integration ensures all platforms work together.",
        module: 1
      },
      {
        id: 20,
        question: "What is financial storytelling?",
        options: [
          "Creating fictional financial stories",
          "Making numbers meaningful and engaging",
          "Only reporting financial results",
          "Simplifying all numbers completely"
        ],
        correctAnswer: 1,
        explanation: "From Module 2: Financial storytelling puts numbers in emotional context.",
        module: 2
      },
      {
        id: 21,
        question: "What is pre-change communication?",
        options: [
          "Rumors and speculation management",
          "Only final change announcement",
          "Employee training programs",
          "Building awareness before implementation"
        ],
        correctAnswer: 3,
        explanation: "From Module 3: Pre-change communication prepares people for what's coming.",
        module: 3
      },
      {
        id: 22,
        question: "What is channel strategy?",
        options: [
          "Traditional channels only",
          "Using all available channels",
          "Selecting appropriate communication channels",
          "Only newest technology channels"
        ],
        correctAnswer: 2,
        explanation: "From Module 4: Channel strategy selects right mix for messages and audiences.",
        module: 4
      },
      {
        id: 23,
        question: "What is gap analysis for reputation?",
        options: [
          "Current vs desired reputation comparison",
          "Only negative reputation gaps",
          "Employee perception gaps",
          "Competitor reputation gaps"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Gap analysis identifies reputation differences to address.",
        module: 5
      },
      {
        id: 24,
        question: "What is personalization at scale?",
        options: [
          "Segmented email marketing",
          "Tailored communication using AI",
          "Only mass customization",
          "Individual manual personalization"
        ],
        correctAnswer: 1,
        explanation: "From Module 6: AI enables personalized communication for large audiences.",
        module: 6
      },
      {
        id: 25,
        question: "What does environmental scanning involve?",
        options: [
          "Analyzing internal and external factors",
          "Competitor office visits",
          "Only checking weather conditions",
          "Office environment inspection"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Environmental scanning examines impacting factors.",
        module: 1
      },
      {
        id: 26,
        question: "What is clarity in leadership communication?",
        options: [
          "Simplifying complex ideas for diverse audiences",
          "Using technical jargon precisely",
          "Being brief at all times",
          "Speaking quickly and efficiently"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Clarity makes complex ideas understandable.",
        module: 2
      },
      {
        id: 27,
        question: "What is timeline communication?",
        options: [
          "Explaining change phases and milestones",
          "Only start and end dates",
          "Employee deadline announcements",
          "Project management schedules"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Timeline communication explains change journey.",
        module: 3
      },
      {
        id: 28,
        question: "What are cascade systems?",
        options: [
          "Waterfall project management",
          "Information trickle down",
          "Ensuring consistent message flow through levels",
          "Only top-down communication"
        ],
        correctAnswer: 2,
        explanation: "From Module 4: Cascade systems ensure consistent communication.",
        module: 4
      },
      {
        id: 29,
        question: "What is thought leadership?",
        options: [
          "Establishing expertise and authority",
          "Only executive visibility",
          "Academic research publication",
          "Industry conference speaking"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Thought leadership positions organization as expert.",
        module: 5
      },
      {
        id: 30,
        question: "What is analytics integration?",
        options: [
          "Financial data integration",
          "Using data to inform communication decisions",
          "Only social media analytics",
          "Website traffic analysis"
        ],
        correctAnswer: 1,
        explanation: "From Module 6: Analytics integration uses data insights for strategy.",
        module: 6
      },
      {
        id: 31,
        question: "What are relationship objectives?",
        options: [
          "Strengthening stakeholder relationships",
          "Social media friendships",
          "Employee personal relationships",
          "Only customer relationship management"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Relationship objectives build trust with stakeholders.",
        module: 1
      },
      {
        id: 32,
        question: "What is storytelling in leadership?",
        options: [
          "Entertaining with fictional stories",
          "Sharing personal life details",
          "Historical story telling only",
          "Using narratives to connect and persuade"
        ],
        correctAnswer: 3,
        explanation: "From Module 2: Storytelling makes messages memorable and resonant.",
        module: 2
      },
      {
        id: 33,
        question: "What are benefits communication?",
        options: [
          "Future uncertain benefits",
          "What improvements change will bring",
          "Personal benefits for leaders",
          "Only financial benefits"
        ],
        correctAnswer: 1,
        explanation: "From Module 3: Benefits communication shows what people gain.",
        module: 3
      },
      {
        id: 34,
        question: "What is content planning for internal communication?",
        options: [
          "Spontaneous communication",
          "Creating relevant and engaging content",
          "Only mandatory announcements",
          "External content sharing"
        ],
        correctAnswer: 1,
        explanation: "From Module 4: Content planning ensures valuable communication.",
        module: 4
      },
      {
        id: 35,
        question: "What are product/service brands?",
        options: [
          "Competitor product brands",
          "Only consumer product brands",
          "Individual offering brands",
          "Internal project names"
        ],
        correctAnswer: 2,
        explanation: "From Module 5: Product/service brands represent specific offerings.",
        module: 5
      },
      {
        id: 36,
        question: "What are chatbots for communication?",
        options: [
          "AI conversation simulators",
          "Social media bots",
          "Automated customer and employee communication",
          "Only customer service automation"
        ],
        correctAnswer: 2,
        explanation: "From Module 6: Chatbots provide automated responses to inquiries.",
        module: 6
      },
      {
        id: 37,
        question: "What is message consistency?",
        options: [
          "Only official statements",
          "Unified messaging across platforms",
          "Repeating same message constantly",
          "Never changing any messages"
        ],
        correctAnswer: 1,
        explanation: "From Module 1: Consistent messaging builds credibility.",
        module: 1
      },
      {
        id: 38,
        question: "What are town hall meetings for leaders?",
        options: [
          "Employee complaint sessions",
          "Effective large-group communication forums",
          "Annual mandatory meetings",
          "Only formal presentations"
        ],
        correctAnswer: 1,
        explanation: "From Module 2: Town halls connect leaders with large employee groups.",
        module: 2
      },
      {
        id: 39,
        question: "What is resistance management?",
        options: [
          "Forcing compliance",
          "Only positive messaging",
          "Ignoring resistant people",
          "Addressing concerns and objections"
        ],
        correctAnswer: 3,
        explanation: "From Module 3: Resistance management proactively addresses concerns.",
        module: 3
      },
      {
        id: 40,
        question: "What are face-to-face communication methods?",
        options: [
          "Social gatherings only",
          "Performance reviews",
          "Meetings, town halls, roundtables",
          "Only formal presentations"
        ],
        correctAnswer: 2,
        explanation: "From Module 4: Face-to-face communication builds personal connections.",
        module: 4
      }
    ]
  }
};
