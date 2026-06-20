// Broadcast Journalism (Diploma) - Complete Course Data
// Advanced diploma course building on News Anchoring Certificate
// All modules and exam in one file for easy implementation

export const broadcastJournalismDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "broadcast-journalism-diploma",
  title: "Broadcast Journalism (Diploma)",
  description: "An advanced diploma course covering comprehensive broadcast journalism skills, from investigative reporting to multimedia production. Builds upon anchoring fundamentals to develop complete broadcast journalism expertise.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  icon: "🎥",
  badge: "Diploma",
  prerequisites: ["news-anchoring-certificate"],
  creditTransfer: true,
  
  // 2. MODULE ARCHITECTURE - 6 Advanced Modules
  modules: [
    {
      id: 1,
      title: "Advanced News Gathering & Investigation",
      completed: false,
      content: `# Module 1: Advanced News Gathering & Investigation

## Professional News Discovery
This module explores advanced techniques for finding, verifying, and developing news stories for broadcast. You'll learn investigative methodologies and source development skills essential for professional journalism.

### Investigative Journalism Principles
Investigative journalism involves systematic, in-depth examination of issues that someone wants to keep hidden. It requires persistence, critical thinking, and ethical rigor.

**Investigative approaches:**
- **Document analysis**: Reviewing records, databases, and documents
- **Source cultivation**: Developing relationships with informed sources
- **Data journalism**: Using data analysis to reveal patterns and stories
- **Follow-the-money**: Tracing financial connections and interests

### Source Development and Protection
Reliable sources are the foundation of investigative work. Developing and protecting sources requires specific skills and ethical commitments.

**Source management:**
- **Source verification**: Confirming source credibility and information
- **Relationship building**: Establishing trust with potential sources
- **Confidentiality protocols**: Protecting source identities when necessary
- **Multiple sourcing**: Corroborating information across different sources

### Public Records and FOIA Requests
Public records laws provide access to government information. Mastering records requests is essential for investigative journalism.

**Records access techniques:**
- **Freedom of Information Act (FOIA) requests**: Formal requests for federal records
- **State public records laws**: Understanding local access regulations
- **Record navigation**: Finding relevant information within obtained documents
- **Appeal processes**: Challenging improperly denied requests

### Data Journalism for Broadcast
Data journalism transforms numbers into compelling broadcast stories. Visualization and clear explanation make data accessible to television audiences.

**Data techniques:**
- **Data acquisition**: Finding relevant datasets for stories
- **Data cleaning**: Preparing data for analysis and visualization
- **Statistical analysis**: Identifying meaningful patterns and trends
- **Visual storytelling**: Creating graphics that communicate data clearly

### Investigative Story Structure
Investigative stories require special narrative structures that build evidence while maintaining audience engagement.

**Story development:**
- **Hypothesis testing**: Developing and testing story theories
- **Evidence accumulation**: Gathering supporting documentation
- **Narrative construction**: Building stories that reveal findings progressively
- **Impact demonstration**: Showing why findings matter to viewers

---

## Key Learning Points
- Investigative journalism systematically examines hidden issues
- Source development requires relationship building and protection
- Public records laws provide essential information access
- Data journalism transforms numbers into broadcast stories
- Investigative stories require special narrative structures

Master these advanced news gathering skills to uncover important stories!`,
      
      quiz: [
        {
          id: 1,
          question: "What involves systematic examination of hidden issues?",
          options: [
            "Investigative journalism",
            "Sports commentary",
            "Weather forecasting",
            "Basic news reporting"
          ],
          correctAnswer: 0,
          explanation: "Investigative journalism digs deeper than surface reporting."
        },
        {
          id: 2,
          question: "What requires reviewing records and databases?",
          options: [
            "Document analysis",
            "Guessing stories",
            "Source interviews only",
            "Random investigation"
          ],
          correctAnswer: 0,
          explanation: "Documents provide tangible evidence for stories."
        },
        {
          id: 3,
          question: "What is the foundation of investigative work?",
          options: [
            "Social media trends",
            "Personal opinions",
            "Reliable sources",
            "Government statements"
          ],
          correctAnswer: 2,
          explanation: "Sources provide information and verification."
        },
        {
          id: 4,
          question: "What confirms source credibility?",
          options: [
            "Source appearance",
            "Source verification",
            "Source location",
            "Source popularity"
          ],
          correctAnswer: 1,
          explanation: "Verification ensures information reliability."
        },
        {
          id: 5,
          question: "What provides access to government information?",
          options: [
            "Social media platforms",
            "Private databases only",
            "Public records laws",
            "Personal connections"
          ],
          correctAnswer: 2,
          explanation: "Laws guarantee public access to many government records."
        },
        {
          id: 6,
          question: "What are formal requests for federal records?",
          options: [
            "Phone calls",
            "FOIA requests",
            "Social media posts",
            "Personal letters"
          ],
          correctAnswer: 1,
          explanation: "FOIA is the Freedom of Information Act."
        },
        {
          id: 7,
          question: "What transforms numbers into broadcast stories?",
          options: [
            "Celebrity interviews",
            "Data journalism",
            "Weather reports",
            "Entertainment reporting"
          ],
          correctAnswer: 1,
          explanation: "Data journalism makes statistics understandable and compelling."
        },
        {
          id: 8,
          question: "What involves finding relevant datasets?",
          options: [
            "Data creation",
            "Data ignoring",
            "Data guessing",
            "Data acquisition"
          ],
          correctAnswer: 3,
          explanation: "Finding appropriate data is the first step in data journalism."
        },
        {
          id: 9,
          question: "What identifies meaningful patterns?",
          options: [
            "Statistical analysis",
            "Personal intuition",
            "Public opinion",
            "Random observation"
          ],
          correctAnswer: 0,
          explanation: "Analysis reveals stories within data."
        },
        {
          id: 10,
          question: "What creates graphics that communicate data?",
          options: [
            "Audio explanations",
            "Text descriptions only",
            "Printed reports",
            "Visual storytelling"
          ],
          correctAnswer: 3,
          explanation: "Visuals help television audiences understand data."
        },
        {
          id: 11,
          question: "What develops and tests story theories?",
          options: [
            "Story guessing",
            "Report copying",
            "Hypothesis testing",
            "Opinion forming"
          ],
          correctAnswer: 2,
          explanation: "Investigative work tests ideas with evidence."
        },
        {
          id: 12,
          question: "What builds stories progressively?",
          options: [
            "Chronological listing",
            "Random sequencing",
            "Narrative construction",
            "Information dumping"
          ],
          correctAnswer: 2,
          explanation: "Effective narratives reveal findings strategically."
        },
        {
          id: 13,
          question: "What requires persistence and ethical rigor?",
          options: [
            "Sports coverage",
            "All reporting equally",
            "Investigative journalism",
            "Entertainment news"
          ],
          correctAnswer: 2,
          explanation: "Investigative work demands special dedication and ethics."
        },
        {
          id: 14,
          question: "What protects source identities?",
          options: [
            "Station broadcasts",
            "Confidentiality protocols",
            "Social media posts",
            "Public announcements"
          ],
          correctAnswer: 1,
          explanation: "Protecting sources maintains trust and safety."
        },
        {
          id: 15,
          question: "What corroborates information across sources?",
          options: [
            "Single source reliance",
            "Government statements only",
            "Multiple sourcing",
            "Personal observations"
          ],
          correctAnswer: 2,
          explanation: "Multiple sources increase story reliability."
        },
        {
          id: 16,
          question: "What understands local access regulations?",
          options: [
            "Personal preferences",
            "Only federal laws",
            "Station policies",
            "State public records laws"
          ],
          correctAnswer: 3,
          explanation: "State laws vary and must be understood locally."
        },
        {
          id: 17,
          question: "What challenges improperly denied requests?",
          options: [
            "Giving up",
            "Complaining publicly",
            "Appeal processes",
            "Accepting denials"
          ],
          correctAnswer: 2,
          explanation: "Appeals can overcome improper access denials."
        },
        {
          id: 18,
          question: "What prepares data for analysis?",
          options: [
            "Data cleaning",
            "Data collection only",
            "Data publication",
            "Data storage"
          ],
          correctAnswer: 0,
          explanation: "Clean data produces accurate analysis."
        },
        {
          id: 19,
          question: "What gathers supporting documentation?",
          options: [
            "Guesswork",
            "Evidence accumulation",
            "Opinion gathering",
            "Rumor collection"
          ],
          correctAnswer: 1,
          explanation: "Evidence builds credible investigative stories."
        },
        {
          id: 20,
          question: "What shows why findings matter?",
          options: [
            "Process description",
            "Data presentation only",
            "Source listing",
            "Impact demonstration"
          ],
          correctAnswer: 3,
          explanation: "Showing impact connects findings to viewer concerns."
        }
      ]
    },
    
    {
      id: 2,
      title: "Broadcast Writing & Storytelling",
      completed: false,
      content: `# Module 2: Broadcast Writing & Storytelling

## Writing for the Ear and Eye
This module covers advanced writing techniques specifically for broadcast journalism. You'll learn to write for television's unique requirements of simplicity, clarity, and visual synergy.

### Broadcast Writing Principles
Broadcast writing differs significantly from print journalism. It must be conversational, clear, and designed to be heard rather than read.

**Broadcast writing characteristics:**
- **Conversational tone**: Writing as people speak
- **Simple sentence structure**: Short, clear sentences
- **Active voice**: Emphasizing who does what
- **Present tense focus**: Creating immediacy and relevance

### Writing for Visual Media
Television writing must complement and enhance visual elements. Words and images should work together to tell complete stories.

**Visual writing techniques:**
- **Complementary writing**: Words that enhance rather than repeat visuals
- **Natural sound incorporation**: Writing around ambient and interview audio
- **Visual cue alignment**: Timing words with appropriate visual changes
- **Graphic integration**: Writing to introduce and explain on-screen graphics

### Story Structure for Broadcast
Broadcast stories follow specific structures that work within time constraints and maintain viewer attention.

**Broadcast story structures:**
- **Inverted pyramid for TV**: Most important information first, but with narrative flow
- **Package structure**: Introduction, body, conclusion with natural transitions
- **Reader-VO-SOT patterns**: Combining anchor reads, voiceovers, and soundbites
- **Teases and tags**: Beginning and ending elements that engage viewers

### Script Formatting Standards
Professional broadcast scripts follow specific formatting conventions that help production teams and on-air talent.

**Script formatting elements:**
- **Two-column format**: Video instructions left, audio script right
- **Time notations**: Indicating story duration
- **Technical directions**: Camera shots, graphics, sound cues
- **Talent notations**: Anchor names, reporter identifications

### Writing for Different Broadcast Formats
Different broadcast formats require different writing approaches, from short news readers to long-form documentaries.

**Format-specific writing:**
- **News readers**: Short anchor-read stories (15-30 seconds)
- **Voiceovers**: Anchor narration over video (30-60 seconds)
- **Packages**: Reporter-produced stories (1:30-2:30 minutes)
- **Documentaries**: Long-form storytelling with complex narratives

### Ethical Writing Practices
Broadcast writing carries ethical responsibilities regarding accuracy, fairness, and clarity.

**Writing ethics:**
- **Accuracy verification**: Confirming all facts before writing
- **Fair representation**: Presenting multiple perspectives when appropriate
- **Clarity over cleverness**: Choosing clear expression over witty phrasing
- **Transparent sourcing**: Attributing information clearly and appropriately

---

## Key Learning Points
- Broadcast writing must be conversational and clear
- Writing should complement visual elements, not duplicate them
- Specific story structures work best for television
- Professional scripts follow standard formatting conventions
- Different formats require different writing approaches
- Ethical writing practices maintain journalistic integrity

Master broadcast writing to create compelling television journalism!`,
      
      quiz: [
        {
          id: 1,
          question: "How should broadcast writing sound?",
          options: [
            "Formal like academic papers",
            "Conversational like speech",
            "Poetic like literature",
            "Complex like legal documents"
          ],
          correctAnswer: 1,
          explanation: "Conversational writing connects with television audiences."
        },
        {
          id: 2,
          question: "What sentence structure works best for broadcast?",
          options: [
            "Sentence fragments only",
            "Short and clear sentences",
            "Long, complex sentences",
            "Questions without answers"
          ],
          correctAnswer: 1,
          explanation: "Simple sentences are easier to understand when heard."
        },
        {
          id: 3,
          question: "What voice emphasizes who does what?",
          options: [
            "Formal voice",
            "Passive voice",
            "Active voice",
            "Neutral voice"
          ],
          correctAnswer: 2,
          explanation: "Active voice creates stronger, clearer sentences."
        },
        {
          id: 4,
          question: "What creates immediacy and relevance?",
          options: [
            "Past tense only",
            "Future tense speculation",
            "Conditional tense",
            "Present tense focus"
          ],
          correctAnswer: 3,
          explanation: "Present tense makes stories feel current and relevant."
        },
        {
          id: 5,
          question: "How should words relate to visuals?",
          options: [
            "Ignore completely",
            "Contradict intentionally",
            "Repeat exactly",
            "Complement rather than repeat"
          ],
          correctAnswer: 3,
          explanation: "Complementary writing uses words and images together effectively."
        },
        {
          id: 6,
          question: "What includes ambient and interview audio?",
          options: [
            "Script reading only",
            "Natural sound incorporation",
            "Music addition",
            "Silence"
          ],
          correctAnswer: 1,
          explanation: "Natural sound adds authenticity to broadcast stories."
        },
        {
          id: 7,
          question: "What combines anchor reads and soundbites?",
          options: [
            "Silent video only",
            "Reader-VO-SOT patterns",
            "Music videos",
            "Only anchor monologues"
          ],
          correctAnswer: 1,
          explanation: "These patterns create varied, engaging storytelling."
        },
        {
          id: 8,
          question: "What format has video left, audio right?",
          options: [
            "Single column format",
            "Two-column format",
            "Paragraph format",
            "Bullet point format"
          ],
          correctAnswer: 1,
          explanation: "Two-column scripts help production teams coordinate elements."
        },
        {
          id: 9,
          question: "What indicates story duration?",
          options: [
            "Font sizes",
            "Time notations",
            "Page numbers",
            "Word counts"
          ],
          correctAnswer: 1,
          explanation: "Time notations help producers manage broadcast schedules."
        },
        {
          id: 10,
          question: "What are short anchor-read stories?",
          options: [
            "Live shots",
            "News readers",
            "Documentaries",
            "Investigative reports"
          ],
          correctAnswer: 1,
          explanation: "Readers are brief stories read entirely by anchors."
        },
        {
          id: 11,
          question: "What are reporter-produced stories?",
          options: [
            "Voiceovers",
            "Teases",
            "Readers",
            "Packages"
          ],
          correctAnswer: 3,
          explanation: "Packages include reporter narration, interviews, and video."
        },
        {
          id: 12,
          question: "What confirms all facts before writing?",
          options: [
            "Creative writing",
            "Source guessing",
            "Accuracy verification",
            "Assumption making"
          ],
          correctAnswer: 2,
          explanation: "Verification ensures broadcast accuracy."
        },
        {
          id: 13,
          question: "What presents multiple perspectives?",
          options: [
            "Fair representation",
            "Personal opinion",
            "Single viewpoint",
            "Popular opinion only"
          ],
          correctAnswer: 0,
          explanation: "Fairness includes relevant viewpoints in stories."
        },
        {
          id: 14,
          question: "What should be chosen over witty phrasing?",
          options: [
            "Drama",
            "Humor",
            "Clarity",
            "Complexity"
          ],
          correctAnswer: 2,
          explanation: "Clear communication serves viewers better than cleverness."
        },
        {
          id: 15,
          question: "What attributes information appropriately?",
          options: [
            "Transparent sourcing",
            "Personal knowledge",
            "Common knowledge assumption",
            "Anonymous reporting"
          ],
          correctAnswer: 0,
          explanation: "Clear sourcing maintains credibility and transparency."
        },
        {
          id: 16,
          question: "What includes camera shots and graphics?",
          options: [
            "Personal notes",
            "Source information",
            "Only dialogue",
            "Technical directions"
          ],
          correctAnswer: 3,
          explanation: "Technical directions guide production elements."
        },
        {
          id: 17,
          question: "What begins and ends with engaging elements?",
          options: [
            "Credits only",
            "Only main content",
            "Advertisements",
            "Teases and tags"
          ],
          correctAnswer: 3,
          explanation: "Teases grab attention; tags provide closure."
        },
        {
          id: 18,
          question: "What has complex narratives?",
          options: [
            "Sports highlights",
            "News readers",
            "Documentaries",
            "Weather reports"
          ],
          correctAnswer: 2,
          explanation: "Documentaries explore topics in depth over longer formats."
        },
        {
          id: 19,
          question: "What maintains journalistic integrity?",
          options: [
            "Entertaining writing only",
            "Beautiful writing",
            "Ethical writing practices",
            "Fast writing"
          ],
          correctAnswer: 2,
          explanation: "Ethics distinguish journalism from other communication forms."
        },
        {
          id: 20,
          question: "What creates compelling television journalism?",
          options: [
            "Expensive equipment",
            "Famous reporters",
            "Mastering broadcast writing",
            "Only good video"
          ],
          correctAnswer: 2,
          explanation: "Writing forms the foundation of broadcast storytelling."
        }
      ]
    },
    
    {
      id: 3,
      title: "Field Production & Live Reporting",
      completed: false,
      content: `# Module 3: Field Production & Live Reporting

## Producing Stories On Location
This module covers advanced field production techniques and live reporting skills. You'll learn to gather, produce, and transmit stories from anywhere.

### Field Production Planning
Successful field production requires thorough planning and preparation before leaving the newsroom.

**Pre-production planning:**
- **Story research**: Understanding the story and context
- **Location scouting**: Identifying appropriate shooting locations
- **Equipment preparation**: Ensuring all necessary gear is ready
- **Logistics coordination**: Arranging transportation, permissions, and access

### Camera Techniques for Journalism
Broadcast journalists need basic camera skills to gather visual material that tells stories effectively.

**Journalistic camera work:**
- **Composition principles**: Framing shots that communicate clearly
- **Sequence shooting**: Gathering related shots that edit together
- **Natural sound capture**: Recording ambient audio that enhances stories
- **Lighting considerations**: Working with available light effectively

### Audio Gathering for Broadcast
Clear, high-quality audio is essential for professional broadcast journalism. Different situations require different audio approaches.

**Audio techniques:**
- **Microphone selection**: Choosing appropriate mics for different situations
- **Interview audio**: Recording clear, usable interview sound
- **Natural sound gathering**: Capturing environmental audio that adds context
- **Audio monitoring**: Checking audio quality during recording

### Live Reporting Techniques
Live reporting requires special skills to deliver information clearly while managing technical elements and unpredictable situations.

**Live reporting skills:**
- **Location selection**: Choosing backgrounds that support stories
- **Communication management**: Coordinating with control room and crews
- **Improvisation ability**: Adapting to changing situations
- **Time management**: Delivering information within allotted time

### Satellite and Microwave Technology
Understanding transmission technology enables reliable live reporting from remote locations.

**Transmission methods:**
- **Satellite trucks**: Mobile units for live transmission
- **Microwave links**: Line-of-sight transmission for shorter distances
- **LiveU/Dejero units**: Cellular-based live transmission systems
- **Backup systems**: Alternative transmission methods when primary fails

### Multi-Platform Field Reporting
Modern field reporting often involves creating content for multiple platforms simultaneously.

**Multi-platform approaches:**
- **Broadcast content**: High-quality video for television
- **Digital content**: Additional material for websites and apps
- **Social media content**: Real-time updates for social platforms
- **Content adaptation**: Repurposing material for different platforms

### Safety and Security in the Field
Field reporting can involve risks. Understanding safety protocols protects journalists and crews.

**Field safety considerations:**
- **Risk assessment**: Evaluating potential dangers before going into field
- **Emergency procedures**: Knowing how to handle dangerous situations
- **Equipment security**: Protecting valuable gear in various environments
- **Personal safety**: Maintaining awareness and taking precautions

---

## Key Learning Points
- Thorough planning enables successful field production
- Basic camera skills help gather effective visual material
- High-quality audio is essential for professional journalism
- Live reporting requires special skills and adaptability
- Understanding transmission technology enables reliable reporting
- Multi-platform reporting creates content for different audiences
- Safety protocols protect journalists in the field

Master field production to tell compelling stories from anywhere!`,
      
      quiz: [
        {
          id: 1,
          question: "What requires thorough planning before leaving?",
          options: [
            "Field production",
            "Editing only",
            "Script writing",
            "Studio anchoring"
          ],
          correctAnswer: 0,
          explanation: "Planning prevents problems during field production."
        },
        {
          id: 2,
          question: "What involves understanding story and context?",
          options: [
            "Story research",
            "Travel arrangements",
            "Camera operation",
            "Equipment packing"
          ],
          correctAnswer: 0,
          explanation: "Research informs effective field production decisions."
        },
        {
          id: 3,
          question: "What identifies appropriate shooting locations?",
          options: [
            "Location scouting",
            "Crowd following",
            "Studio shooting only",
            "Random selection"
          ],
          correctAnswer: 0,
          explanation: "Good locations enhance visual storytelling."
        },
        {
          id: 4,
          question: "What frames shots that communicate clearly?",
          options: [
            "Maximum zoom",
            "Composition principles",
            "Constant movement",
            "Random framing"
          ],
          correctAnswer: 1,
          explanation: "Good composition helps viewers understand visual information."
        },
        {
          id: 5,
          question: "What gathers related shots that edit together?",
          options: [
            "Random shooting",
            "Duplicate shooting",
            "Sequence shooting",
            "Single shot only"
          ],
          correctAnswer: 2,
          explanation: "Sequences create visual stories through editing."
        },
        {
          id: 6,
          question: "What records ambient audio that enhances stories?",
          options: [
            "Natural sound capture",
            "Music addition",
            "Silence only",
            "Voiceover only"
          ],
          correctAnswer: 0,
          explanation: "Natural sound adds authenticity and context."
        },
        {
          id: 7,
          question: "What is essential for professional journalism?",
          options: [
            "Fast reporting",
            "Beautiful images",
            "High-quality audio",
            "Only good video"
          ],
          correctAnswer: 2,
          explanation: "Clear audio carries much of the information in broadcast stories."
        },
        {
          id: 8,
          question: "What chooses appropriate mics for situations?",
          options: [
            "Microphone selection",
            "No microphone use",
            "Using any mic available",
            "Only wireless mics"
          ],
          correctAnswer: 0,
          explanation: "Proper mic selection ensures good audio quality."
        },
        {
          id: 9,
          question: "What requires adapting to changing situations?",
          options: [
            "Studio control only",
            "Improvisation ability",
            "Strict scripting",
            "Pre-recorded content"
          ],
          correctAnswer: 1,
          explanation: "Live field situations often require adaptation."
        },
        {
          id: 10,
          question: "What are mobile units for live transmission?",
          options: [
            "Regular cars",
            "Satellite trucks",
            "Editing suites",
            "Studio cameras"
          ],
          correctAnswer: 1,
          explanation: "Satellite trucks transmit live video from remote locations."
        },
        {
          id: 11,
          question: "What is line-of-sight transmission?",
          options: [
            "Satellite transmission",
            "Microwave links",
            "Cellular transmission",
            "Internet streaming"
          ],
          correctAnswer: 1,
          explanation: "Microwave requires clear paths between antennas."
        },
        {
          id: 12,
          question: "What creates content for multiple platforms?",
          options: [
            "Radio reporting only",
            "Print reporting",
            "Only television reporting",
            "Multi-platform reporting"
          ],
          correctAnswer: 3,
          explanation: "Modern journalism often serves multiple platforms simultaneously."
        },
        {
          id: 13,
          question: "What provides real-time updates?",
          options: [
            "Monthly reports",
            "Social media content",
            "Only broadcast content",
            "Annual summaries"
          ],
          correctAnswer: 1,
          explanation: "Social media allows immediate updates from the field."
        },
        {
          id: 14,
          question: "What evaluates potential dangers?",
          options: [
            "Risk assessment",
            "Following others",
            "Ignoring risks",
            "Assuming safety"
          ],
          correctAnswer: 0,
          explanation: "Assessment helps prepare for and avoid dangers."
        },
        {
          id: 15,
          question: "What handles dangerous situations?",
          options: [
            "Panic responses",
            "Waiting for help",
            "Ignoring problems",
            "Emergency procedures"
          ],
          correctAnswer: 3,
          explanation: "Procedures provide guidance during emergencies."
        },
        {
          id: 16,
          question: "What ensures all necessary gear is ready?",
          options: [
            "Borrowing equipment",
            "Using whatever's available",
            "Equipment preparation",
            "Last-minute packing"
          ],
          correctAnswer: 2,
          explanation: "Preparation prevents equipment problems in the field."
        },
        {
          id: 17,
          question: "What works with available light effectively?",
          options: [
            "Ignoring light",
            "Only studio lighting",
            "Always using flash",
            "Lighting considerations"
          ],
          correctAnswer: 3,
          explanation: "Understanding light improves video quality in the field."
        },
        {
          id: 18,
          question: "What checks audio quality during recording?",
          options: [
            "Assuming good audio",
            "Audio monitoring",
            "Checking later",
            "Guessing audio quality"
          ],
          correctAnswer: 1,
          explanation: "Monitoring catches audio problems immediately."
        },
        {
          id: 19,
          question: "What protects valuable gear?",
          options: [
            "Sharing gear widely",
            "Using cheap equipment",
            "Leaving gear unattended",
            "Equipment security"
          ],
          correctAnswer: 3,
          explanation: "Security prevents theft and damage."
        },
        {
          id: 20,
          question: "What tells compelling stories from anywhere?",
          options: [
            "Second-hand reporting",
            "Office-based reporting",
            "Only studio work",
            "Mastering field production"
          ],
          correctAnswer: 3,
          explanation: "Field skills enable on-location storytelling."
        }
      ]
    },
    
    {
      id: 4,
      title: "Advanced Video Editing & Production",
      completed: false,
      content: `# Module 4: Advanced Video Editing & Production

## Crafting Compelling Visual Stories
This module covers professional video editing techniques and production principles for broadcast journalism. You'll learn to transform raw footage into polished stories.

### Broadcast Editing Principles
Editing for broadcast journalism follows specific principles that serve journalistic integrity and audience understanding.

**Editing ethics and principles:**
- **Truthful representation**: Editing that accurately represents events
- **Context preservation**: Maintaining proper context of shots and sounds
- **Pace and rhythm**: Creating editing rhythms that support storytelling
- **Visual continuity**: Ensuring smooth visual flow between shots

### Nonlinear Editing Systems
Modern broadcast editing uses nonlinear editing (NLE) systems that allow flexible, non-destructive editing.

**NLE fundamentals:**
- **Timeline editing**: Arranging clips along a visual timeline
- **Clip management**: Organizing footage for efficient editing
- **Transition effects**: Using cuts, dissolves, and other transitions appropriately
- **Multi-track editing**: Layering video, audio, and graphics tracks

### Story Assembly Techniques
Assembling stories from raw footage requires systematic approaches to create coherent narratives.

**Assembly methods:**
- **Rough cutting**: Creating initial story structure
- **Fine cutting**: Refining timing and shot selection
- **Pacing adjustment**: Controlling story rhythm through editing
- **Sequence building**: Constructing logical visual sequences

### Audio Editing for Broadcast
Audio editing enhances storytelling through careful sound design and mixing.

**Audio editing techniques:**
- **Soundbite selection**: Choosing the most effective interview segments
- **Natural sound integration**: Weaving ambient sound into stories
- **Voiceover editing**: Smoothing reporter narration
- **Audio mixing**: Balancing all audio elements for clarity

### Graphics and Effects
Graphics and effects enhance understanding when used appropriately in journalistic contexts.

**Graphic considerations:**
- **Lower thirds**: Text identification of people and places
- **Full-screen graphics**: Maps, charts, and explanatory graphics
- **Effects appropriateness**: Using effects that serve the story, not distract
- **Brand consistency**: Following station graphic standards

### Color Correction and Grading
Color correction ensures consistent, accurate color representation, while grading can enhance mood when appropriate.

**Color techniques:**
- **Exposure correction**: Fixing lighting problems in footage
- **Color balancing**: Ensuring consistent color across shots
- **Contrast adjustment**: Improving visual clarity
- **Style considerations**: Applying appropriate visual styles for stories

### Editing for Different Formats
Different broadcast formats require different editing approaches and pacing.

**Format-specific editing:**
- **News package editing**: Fast-paced, information-dense editing
- **Documentary editing**: Slower pacing for complex narratives
- **Feature editing**: More creative approaches for human interest stories
- **Live editing**: Quick editing for immediate broadcast

### Quality Control and Technical Standards
Broadcast editing must meet specific technical standards for air quality.

**Quality considerations:**
- **Technical specifications**: Meeting station technical requirements
- **Audio level standards**: Complying with broadcast audio standards
- **Format compliance**: Ensuring compatibility with broadcast systems
- **Final review processes**: Checking finished pieces before air

---

## Key Learning Points
- Broadcast editing must maintain journalistic integrity
- Nonlinear editing systems provide flexible editing capabilities
- Systematic story assembly creates coherent narratives
- Audio editing enhances storytelling through sound design
- Graphics should enhance understanding, not distract
- Color correction ensures consistent, accurate representation
- Different formats require different editing approaches
- Technical standards must be met for broadcast quality

Master video editing to craft professional broadcast stories!`,
      
      quiz: [
        {
          id: 1,
          question: "What accurately represents events?",
          options: [
            "Entertaining manipulation",
            "Truthful representation",
            "Creative interpretation",
            "Dramatic enhancement"
          ],
          correctAnswer: 1,
          explanation: "Journalistic editing must represent reality accurately."
        },
        {
          id: 2,
          question: "What maintains proper context?",
          options: [
            "Context changing",
            "Context ignoring",
            "Context removal",
            "Context preservation"
          ],
          correctAnswer: 3,
          explanation: "Proper context ensures accurate understanding."
        },
        {
          id: 3,
          question: "What allows flexible, non-destructive editing?",
          options: [
            "Live switching",
            "Film editing",
            "Nonlinear editing systems",
            "Linear editing systems"
          ],
          correctAnswer: 2,
          explanation: "NLEs allow changes without damaging original footage."
        },
        {
          id: 4,
          question: "What arranges clips along a visual timeline?",
          options: [
            "Timeline editing",
            "Live broadcasting",
            "Random editing",
            "Sequential shooting only"
          ],
          correctAnswer: 0,
          explanation: "Timelines visualize story structure during editing."
        },
        {
          id: 5,
          question: "What creates initial story structure?",
          options: [
            "Color correction",
            "Final editing",
            "Rough cutting",
            "Audio mixing"
          ],
          correctAnswer: 2,
          explanation: "Rough cuts establish basic story flow."
        },
        {
          id: 6,
          question: "What refines timing and shot selection?",
          options: [
            "File management",
            "Fine cutting",
            "Rough assembly",
            "Shot logging"
          ],
          correctAnswer: 1,
          explanation: "Fine cutting polishes the edit for broadcast."
        },
        {
          id: 7,
          question: "What chooses effective interview segments?",
          options: [
            "Soundbite selection",
            "Creating dialogue",
            "Using all interviews",
            "Ignoring interviews"
          ],
          correctAnswer: 0,
          explanation: "Selecting the best soundbites creates stronger stories."
        },
        {
          id: 8,
          question: "What weaves ambient sound into stories?",
          options: [
            "Silence only",
            "Natural sound integration",
            "Voiceover only",
            "Music replacement"
          ],
          correctAnswer: 1,
          explanation: "Natural sound adds authenticity and atmosphere."
        },
        {
          id: 9,
          question: "What identifies people and places?",
          options: [
            "Voice identification",
            "Full-screen graphics",
            "Lower thirds",
            "Background music"
          ],
          correctAnswer: 2,
          explanation: "Lower thirds provide essential identification information."
        },
        {
          id: 10,
          question: "What includes maps and charts?",
          options: [
            "Lower thirds only",
            "Interview clips",
            "Full-screen graphics",
            "Video footage"
          ],
          correctAnswer: 2,
          explanation: "Full-screen graphics explain complex information visually."
        },
        {
          id: 11,
          question: "What fixes lighting problems?",
          options: [
            "Color addition",
            "Style application",
            "Contrast reduction",
            "Exposure correction"
          ],
          correctAnswer: 3,
          explanation: "Exposure correction fixes over- or under-exposed footage."
        },
        {
          id: 12,
          question: "What ensures consistent color?",
          options: [
            "Random color",
            "Color ignoring",
            "Color balancing",
            "Black and white only"
          ],
          correctAnswer: 2,
          explanation: "Color balancing makes shots match visually."
        },
        {
          id: 13,
          question: "What has fast-paced, information-dense editing?",
          options: [
            "Feature editing",
            "Experimental editing",
            "News package editing",
            "Documentary editing"
          ],
          correctAnswer: 2,
          explanation: "News packages convey information efficiently."
        },
        {
          id: 14,
          question: "What has slower pacing for complex narratives?",
          options: [
            "Documentary editing",
            "Commercial editing",
            "News editing",
            "Music video editing"
          ],
          correctAnswer: 0,
          explanation: "Documentaries allow more time for complex storytelling."
        },
        {
          id: 15,
          question: "What meets station technical requirements?",
          options: [
            "Personal preferences",
            "Creative choices",
            "Budget limitations",
            "Technical specifications"
          ],
          correctAnswer: 3,
          explanation: "Technical specs ensure broadcast compatibility."
        },
        {
          id: 16,
          question: "What complies with broadcast audio standards?",
          options: [
            "Audio level standards",
            "Maximum volume",
            "Minimum volume",
            "Random audio levels"
          ],
          correctAnswer: 0,
          explanation: "Standard audio levels ensure consistent broadcast quality."
        },
        {
          id: 17,
          question: "What ensures compatibility with broadcast systems?",
          options: [
            "Format compliance",
            "Any format use",
            "Experimental formats",
            "Old formats only"
          ],
          correctAnswer: 0,
          explanation: "Compatible formats work with broadcast equipment."
        },
        {
          id: 18,
          question: "What creates editing rhythms for storytelling?",
          options: [
            "Random timing",
            "Pace and rhythm",
            "Constant speed",
            "No rhythm"
          ],
          correctAnswer: 1,
          explanation: "Rhythmic editing enhances storytelling effectiveness."
        },
        {
          id: 19,
          question: "What ensures smooth visual flow?",
          options: [
            "Visual disruption",
            "Still images only",
            "Visual continuity",
            "Constant cutting"
          ],
          correctAnswer: 2,
          explanation: "Continuity creates comfortable viewing experiences."
        },
        {
          id: 20,
          question: "What crafts professional broadcast stories?",
          options: [
            "Anchoring only",
            "Mastering video editing",
            "Only shooting footage",
            "Writing scripts"
          ],
          correctAnswer: 1,
          explanation: "Editing transforms raw material into finished stories."
        }
      ]
    },
    
    {
      id: 5,
      title: "Media Law & Ethics in Broadcast",
      completed: false,
      content: `# Module 5: Media Law & Ethics in Broadcast

## Legal and Ethical Foundations
This module covers the legal and ethical frameworks governing broadcast journalism. You'll learn to navigate complex legal issues while maintaining high ethical standards.

### First Amendment Principles
The First Amendment provides crucial protections for journalism, but also carries responsibilities.

**First Amendment applications:**
- **Press freedoms**: Rights to gather and publish information
- **Limitations and responsibilities**: Understanding where freedoms have limits
- **Prior restraint**: Legal restrictions on publishing certain information
- **Public forum doctrine**: Rights in different types of public spaces

### Defamation and Libel Law
Defamation law protects individuals from false, damaging statements. Broadcast journalists must understand these risks.

**Defamation considerations:**
- **Elements of defamation**: False statement, publication, identification, harm, fault
- **Defenses against defamation**: Truth, privilege, fair comment
- **Public vs. private figures**: Different standards for different people
- **Actual malice standard**: Knowing falsity or reckless disregard for truth

### Privacy Law and Ethics
Privacy law balances news gathering with individual privacy rights. Ethical considerations often exceed legal requirements.

**Privacy issues:**
- **Intrusion**: Physical or technological invasion of privacy
- **Private facts**: Publishing embarrassing private information
- **False light**: Creating misleading impressions about people
- **Appropriation**: Unauthorized use of someone's name or likeness

### Copyright and Fair Use
Copyright law protects creative works, while fair use allows limited use for purposes like news reporting.

**Copyright considerations:**
- **Copyright basics**: What is protected and for how long
- **Fair use doctrine**: Using copyrighted material for news purposes
- **Licensing requirements**: When permission is needed
- **Public domain material**: Works no longer under copyright protection

### Broadcast Regulation
Broadcast journalism operates under specific federal regulations that don't apply to print or digital media.

**Broadcast regulations:**
- **FCC jurisdiction**: Federal Communications Commission oversight
- **Equal time rule**: Requirements for political candidates
- **Indecency regulations**: Restrictions on broadcast content
- **Public interest standard**: Serving community needs and interests

### Ethical Decision-Making
Ethical guidelines help journalists navigate complex situations where the law provides limited guidance.

**Ethical frameworks:**
- **SPJ Code of Ethics**: Society of Professional Journalists guidelines
- **Harm minimization**: Considering potential harm from reporting
- **Transparency**: Being open about methods and limitations
- **Accountability**: Taking responsibility for journalistic work

### Confidential Sources and Whistleblowers
Protecting sources is both an ethical commitment and sometimes a legal issue.

**Source protection:**
- **Confidentiality promises**: When and how to protect sources
- **Shield laws**: Legal protections for journalists in some jurisdictions
- **Subpoena responses**: Legal demands for information or testimony
- **Whistleblower protocols**: Working with people revealing wrongdoing

### Access and Freedom of Information
Laws provide access to government information, but journalists must know how to use them effectively.

**Access issues:**
- **Sunshine laws**: Requirements for open government meetings
- **Record request strategies**: Effective approaches to obtaining documents
- **Appeal processes**: Challenging improper denials of access
- **Digital access issues**: Obtaining electronic records and data

---

## Key Learning Points
- First Amendment protections come with responsibilities
- Defamation law requires careful fact-checking and attribution
- Privacy considerations often exceed legal requirements
- Copyright and fair use allow limited use of others' material
- Broadcast has specific regulatory requirements
- Ethical guidelines help navigate complex situations
- Source protection involves both ethics and law
- Access laws provide tools for obtaining information

Understand media law and ethics to practice responsible broadcast journalism!`,
      
      quiz: [
        {
          id: 1,
          question: "What provides crucial protections for journalism?",
          options: [
            "Privacy law",
            "Copyright law",
            "Broadcast regulations",
            "First Amendment"
          ],
          correctAnswer: 3,
          explanation: "The First Amendment protects freedom of the press."
        },
        {
          id: 2,
          question: "What protects from false, damaging statements?",
          options: [
            "Privacy law",
            "Contract law",
            "Defamation law",
            "Copyright law"
          ],
          correctAnswer: 2,
          explanation: "Defamation includes libel (written) and slander (spoken)."
        },
        {
          id: 3,
          question: "What are elements of defamation?",
          options: [
            "Opinion, publication, no identification, no harm",
            "False statement, publication, identification, harm, fault",
            "Fact, limited distribution, public figure, no fault",
            "True statement, private conversation, general reference"
          ],
          correctAnswer: 1,
          explanation: "All elements must be present for defamation claims."
        },
        {
          id: 4,
          question: "What is knowing falsity or reckless disregard?",
          options: [
            "Actual malice standard",
            "Negligence standard",
            "Reasonable care",
            "Strict liability"
          ],
          correctAnswer: 0,
          explanation: "Actual malice applies to public figures in defamation cases."
        },
        {
          id: 5,
          question: "What balances news gathering with privacy rights?",
          options: [
            "Privacy law",
            "Copyright law",
            "Defamation law",
            "Contract law"
          ],
          correctAnswer: 0,
          explanation: "Privacy law protects individuals from certain intrusions."
        },
        {
          id: 6,
          question: "What is physical invasion of privacy?",
          options: [
            "Private facts",
            "Appropriation",
            "Intrusion",
            "False light"
          ],
          correctAnswer: 2,
          explanation: "Intrusion involves unwanted physical or technological invasion."
        },
        {
          id: 7,
          question: "What protects creative works?",
          options: [
            "Contract law",
            "Privacy law",
            "Copyright law",
            "Defamation law"
          ],
          correctAnswer: 2,
          explanation: "Copyright protects original works of authorship."
        },
        {
          id: 8,
          question: "What allows limited use for news purposes?",
          options: [
            "Purchase requirement",
            "Fair use doctrine",
            "Complete freedom",
            "No use allowed"
          ],
          correctAnswer: 1,
          explanation: "Fair use allows limited use without permission for purposes like news."
        },
        {
          id: 9,
          question: "What oversees broadcast regulation?",
          options: [
            "Local governments",
            "State agencies",
            "FCC jurisdiction",
            "International bodies"
          ],
          correctAnswer: 2,
          explanation: "The Federal Communications Commission regulates broadcasting."
        },
        {
          id: 10,
          question: "What has requirements for political candidates?",
          options: [
            "Equal time rule",
            "Public interest standard",
            "Fairness doctrine",
            "Indecency regulations"
          ],
          correctAnswer: 0,
          explanation: "Equal time requires comparable opportunities for candidates."
        },
        {
          id: 11,
          question: "What provides ethical guidelines?",
          options: [
            "SPJ Code of Ethics",
            "Personal preferences",
            "Station policies only",
            "Government regulations"
          ],
          correctAnswer: 0,
          explanation: "SPJ provides widely accepted ethical standards for journalists."
        },
        {
          id: 12,
          question: "What considers potential harm from reporting?",
          options: [
            "Harm minimization",
            "Maximum impact",
            "Entertainment value",
            "Ratings only"
          ],
          correctAnswer: 0,
          explanation: "Ethical journalism considers potential consequences."
        },
        {
          id: 13,
          question: "What involves protecting source identities?",
          options: [
            "Government reporting",
            "Confidentiality promises",
            "Public identification",
            "Social media posting"
          ],
          correctAnswer: 1,
          explanation: "Protecting sources maintains trust and enables reporting."
        },
        {
          id: 14,
          question: "What provides legal protections in some jurisdictions?",
          options: [
            "Shield laws",
            "Copyright laws",
            "Privacy laws",
            "Defamation laws"
          ],
          correctAnswer: 0,
          explanation: "Shield laws protect journalists from revealing sources."
        },
        {
          id: 15,
          question: "What requires open government meetings?",
          options: [
            "Defamation laws",
            "Privacy laws",
            "Sunshine laws",
            "Copyright laws"
          ],
          correctAnswer: 2,
          explanation: "Sunshine laws ensure government transparency."
        },
        {
          id: 16,
          question: "What helps navigate complex situations?",
          options: [
            "Personal feelings",
            "Audience preferences",
            "Only legal requirements",
            "Ethical guidelines"
          ],
          correctAnswer: 3,
          explanation: "Ethics provide guidance beyond legal requirements."
        },
        {
          id: 17,
          question: "What involves working with people revealing wrongdoing?",
          options: [
            "Legal threats",
            "Public announcements",
            "Government cooperation",
            "Whistleblower protocols"
          ],
          correctAnswer: 3,
          explanation: "Whistleblowers provide important information about problems."
        },
        {
          id: 18,
          question: "What challenges improper denials of access?",
          options: [
            "Public complaints",
            "Accepting denials",
            "Giving up",
            "Appeal processes"
          ],
          correctAnswer: 3,
          explanation: "Appeals can overcome improper access restrictions."
        },
        {
          id: 19,
          question: "What serves community needs and interests?",
          options: [
            "Commercial interests only",
            "Public interest standard",
            "Personal interests",
            "Government interests"
          ],
          correctAnswer: 1,
          explanation: "Broadcasters must serve public interest as part of licensing."
        },
        {
          id: 20,
          question: "What practices responsible broadcast journalism?",
          options: [
            "Avoiding controversial topics",
            "Following only personal ethics",
            "Understanding media law and ethics",
            "Ignoring legal issues"
          ],
          correctAnswer: 2,
          explanation: "Legal and ethical understanding enables responsible practice."
        }
      ]
    },
    
    {
      id: 6,
      title: "Broadcast Management & Innovation",
      completed: false,
      content: `# Module 6: Broadcast Management & Innovation

## Leading in Changing Media Landscape
This final module covers broadcast management, audience engagement, and innovation in modern journalism. You'll learn to lead and adapt in evolving media environments.

### Newsroom Management
Effective newsroom management balances editorial excellence with operational efficiency in fast-paced environments.

**Management principles:**
- **Editorial leadership**: Guiding journalistic quality and ethics
- **Resource allocation**: Managing personnel, equipment, and budgets
- **Workflow optimization**: Streamlining news gathering and production
- **Team development**: Building and maintaining effective news teams

### Audience Engagement Strategies
Modern broadcasting requires active audience engagement across multiple platforms.

**Engagement approaches:**
- **Multi-platform distribution**: Reaching audiences through various channels
- **Community engagement**: Connecting with local communities
- **Audience feedback integration**: Using viewer input to improve content
- **Social media strategy**: Effective use of social platforms for journalism

### Digital Transformation
Broadcast journalism is evolving with digital technology, requiring adaptation and innovation.

**Digital evolution:**
- **Streaming and on-demand**: Delivering content beyond traditional broadcast
- **Mobile journalism**: Creating content specifically for mobile devices
- **Interactive storytelling**: Engaging audiences through interactive elements
- **Data-driven content**: Using analytics to inform editorial decisions

### Revenue Models and Sustainability
Understanding broadcast economics helps ensure journalistic sustainability.

**Revenue considerations:**
- **Traditional advertising**: Commercial sponsorship of broadcast content
- **Subscription models**: Viewer-paid content access
- **Sponsored content**: Brand-supported journalism with transparency
- **Grant funding**: Foundation support for specific journalism projects

### Innovation in Journalism
Journalistic innovation develops new approaches to storytelling and audience service.

**Innovation areas:**
- **Immersive journalism**: VR, AR, and immersive storytelling techniques
- **Collaborative journalism**: Partnerships across news organizations
- **Solutions journalism**: Focusing on responses to problems, not just problems
- **Explanatory journalism**: Making complex issues understandable

### Leadership in Journalism
Journalistic leadership involves guiding teams through change while maintaining core values.

**Leadership skills:**
- **Vision development**: Articulating clear direction for journalism
- **Change management**: Guiding teams through technological and cultural changes
- **Mentorship**: Developing next-generation journalists
- **Advocacy**: Promoting journalism's value to society

### Future Trends in Broadcasting
Understanding emerging trends helps prepare for future developments in journalism.

**Emerging trends:**
- **Artificial intelligence**: AI tools for journalism production and distribution
- **Personalized content**: Tailoring news to individual preferences and needs
- **Automated production**: Technology-assisted news gathering and production
- **Global collaboration**: International cooperation on major stories

### Career Development in Broadcast Journalism
Building sustainable careers requires ongoing development and adaptation.

**Career development:**
- **Skill diversification**: Developing multiple journalism competencies
- **Portfolio building**: Creating bodies of work that demonstrate ability
- **Networking**: Building professional relationships across the industry
- **Continuous learning**: Staying current with evolving practices and technologies

---

## Key Learning Points
- Effective newsroom management balances quality and efficiency
- Audience engagement requires multi-platform strategies
- Digital transformation creates new opportunities and challenges
- Understanding revenue models supports journalistic sustainability
- Innovation develops new approaches to storytelling
- Leadership guides journalism through changing landscapes
- Future trends will continue transforming broadcast journalism
- Career development requires ongoing learning and adaptation

Master these management and innovation skills to lead in broadcast journalism!`,
      
      quiz: [
        {
          id: 1,
          question: "What balances editorial excellence with efficiency?",
          options: [
            "Only production",
            "Only reporting",
            "Newsroom management",
            "Only advertising"
          ],
          correctAnswer: 2,
          explanation: "Management coordinates all newsroom functions effectively."
        },
        {
          id: 2,
          question: "What guides journalistic quality and ethics?",
          options: [
            "Editorial leadership",
            "Marketing only",
            "Technical operations",
            "Financial management"
          ],
          correctAnswer: 0,
          explanation: "Editorial leadership maintains journalistic standards."
        },
        {
          id: 3,
          question: "What manages personnel and budgets?",
          options: [
            "Only story assignment",
            "Only equipment use",
            "Only social media",
            "Resource allocation"
          ],
          correctAnswer: 3,
          explanation: "Resource management ensures effective operations."
        },
        {
          id: 4,
          question: "What reaches audiences through various channels?",
          options: [
            "Multi-platform distribution",
            "Only television broadcast",
            "Only print distribution",
            "Only radio broadcast"
          ],
          correctAnswer: 0,
          explanation: "Modern audiences access content through multiple platforms."
        },
        {
          id: 5,
          question: "What connects with local communities?",
          options: [
            "Only international reporting",
            "Community engagement",
            "Only national reporting",
            "Only online interaction"
          ],
          correctAnswer: 1,
          explanation: "Community connection builds audience trust and relevance."
        },
        {
          id: 6,
          question: "What delivers content beyond traditional broadcast?",
          options: [
            "Only radio broadcasts",
            "Only live television",
            "Streaming and on-demand",
            "Only scheduled programming"
          ],
          correctAnswer: 2,
          explanation: "Digital platforms provide additional distribution channels."
        },
        {
          id: 7,
          question: "What creates content for mobile devices?",
          options: [
            "Only radio production",
            "Only television production",
            "Only print journalism",
            "Mobile journalism"
          ],
          correctAnswer: 3,
          explanation: "Mobile platforms require specific content approaches."
        },
        {
          id: 8,
          question: "What involves commercial sponsorship?",
          options: [
            "Only government funding",
            "Traditional advertising",
            "Only grant funding",
            "Only subscription models"
          ],
          correctAnswer: 1,
          explanation: "Advertising has traditionally funded much broadcast journalism."
        },
        {
          id: 9,
          question: "What involves viewer-paid content access?",
          options: [
            "Only donations",
            "Subscription models",
            "Only advertising",
            "Only sponsorships"
          ],
          correctAnswer: 1,
          explanation: "Subscriptions provide direct audience financial support."
        },
        {
          id: 10,
          question: "What includes VR and AR techniques?",
          options: [
            "Only print journalism",
            "Only traditional reporting",
            "Only radio journalism",
            "Immersive journalism"
          ],
          correctAnswer: 3,
          explanation: "Immersive technologies create new storytelling possibilities."
        },
        {
          id: 11,
          question: "What involves partnerships across organizations?",
          options: [
            "Only independent work",
            "Only competitive journalism",
            "Only secret investigations",
            "Collaborative journalism"
          ],
          correctAnswer: 3,
          explanation: "Collaboration enables larger-scale journalism projects."
        },
        {
          id: 12,
          question: "What focuses on responses to problems?",
          options: [
            "Only problem reporting",
            "Solutions journalism",
            "Only controversy reporting",
            "Only entertainment reporting"
          ],
          correctAnswer: 1,
          explanation: "Solutions journalism explores how problems are addressed."
        },
        {
          id: 13,
          question: "What articulates clear direction?",
          options: [
            "Only daily management",
            "Only financial management",
            "Vision development",
            "Only technical operations"
          ],
          correctAnswer: 2,
          explanation: "Vision provides purpose and direction for journalism."
        },
        {
          id: 14,
          question: "What guides teams through changes?",
          options: [
            "Resistance to change",
            "Change management",
            "Following old methods only",
            "Ignoring changes"
          ],
          correctAnswer: 1,
          explanation: "Change management helps teams adapt successfully."
        },
        {
          id: 15,
          question: "What develops next-generation journalists?",
          options: [
            "Mentorship",
            "Only personal success",
            "Only competition",
            "Only independent work"
          ],
          correctAnswer: 0,
          explanation: "Mentorship builds future journalistic capacity."
        },
        {
          id: 16,
          question: "What includes AI tools for journalism?",
          options: [
            "Artificial intelligence",
            "Only traditional methods",
            "Only manual processes",
            "Only human reporting"
          ],
          correctAnswer: 0,
          explanation: "AI offers new tools for journalism production and analysis."
        },
        {
          id: 17,
          question: "What tailors news to individual preferences?",
          options: [
            "Only identical content for all",
            "Only scheduled programming",
            "Only mass audience content",
            "Personalized content"
          ],
          correctAnswer: 3,
          explanation: "Personalization adapts content to individual interests."
        },
        {
          id: 18,
          question: "What develops multiple competencies?",
          options: [
            "Skill diversification",
            "Only traditional skills",
            "Only management skills",
            "Only single skills"
          ],
          correctAnswer: 0,
          explanation: "Multiple skills increase career flexibility and value."
        },
        {
          id: 19,
          question: "What creates bodies of work demonstrating ability?",
          options: [
            "Only academic degrees",
            "Portfolio building",
            "Only job applications",
            "Only personal recommendations"
          ],
          correctAnswer: 1,
          explanation: "Portfolios demonstrate practical journalistic ability."
        },
        {
          id: 20,
          question: "What leads in broadcast journalism?",
          options: [
            "Only production skills",
            "Only technical skills",
            "Only reporting skills",
            "Mastering management and innovation"
          ],
          correctAnswer: 3,
          explanation: "Leadership requires combining multiple skill sets."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM STRUCTURE - 40 Comprehensive Questions
  finalExam: {
    title: "Broadcast Journalism Diploma Final Examination",
    description: "Comprehensive exam covering all 6 advanced modules. Tests knowledge of investigative techniques, broadcast writing, field production, video editing, media law, and broadcast management.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What involves systematic examination of hidden issues?",
        options: [
          "Sports commentary",
          "Investigative journalism",
          "Basic news reporting",
          "Weather forecasting"
        ],
        correctAnswer: 1,
        explanation: "Investigative journalism digs deeper than surface reporting.",
        module: 1
      },
      {
        id: 2,
        question: "What is the foundation of investigative work?",
        options: [
          "Personal opinions",
          "Government statements",
          "Social media trends",
          "Reliable sources"
        ],
        correctAnswer: 3,
        explanation: "Sources provide information and verification.",
        module: 1
      },
      {
        id: 3,
        question: "How should broadcast writing sound?",
        options: [
          "Formal like academic papers",
          "Poetic like literature",
          "Complex like legal documents",
          "Conversational like speech"
        ],
        correctAnswer: 3,
        explanation: "Conversational writing connects with television audiences.",
        module: 2
      },
      {
        id: 4,
        question: "What sentence structure works best for broadcast?",
        options: [
          "Questions without answers",
          "Sentence fragments only",
          "Long, complex sentences",
          "Short and clear sentences"
        ],
        correctAnswer: 3,
        explanation: "Simple sentences are easier to understand when heard.",
        module: 2
      },
      {
        id: 5,
        question: "What requires thorough planning before leaving?",
        options: [
          "Field production",
          "Script writing",
          "Studio anchoring",
          "Editing only"
        ],
        correctAnswer: 0,
        explanation: "Planning prevents problems during field production.",
        module: 3
      },
      {
        id: 6,
        question: "What is essential for professional journalism?",
        options: [
          "Fast reporting",
          "Only good video",
          "High-quality audio",
          "Beautiful images"
        ],
        correctAnswer: 2,
        explanation: "Clear audio carries much of the information in broadcast stories.",
        module: 3
      },
      {
        id: 7,
        question: "What accurately represents events?",
        options: [
          "Entertaining manipulation",
          "Truthful representation",
          "Dramatic enhancement",
          "Creative interpretation"
        ],
        correctAnswer: 1,
        explanation: "Journalistic editing must represent reality accurately.",
        module: 4
      },
      {
        id: 8,
        question: "What allows flexible, non-destructive editing?",
        options: [
          "Live switching",
          "Film editing",
          "Linear editing systems",
          "Nonlinear editing systems"
        ],
        correctAnswer: 3,
        explanation: "NLEs allow changes without damaging original footage.",
        module: 4
      },
      {
        id: 9,
        question: "What provides crucial protections for journalism?",
        options: [
          "First Amendment",
          "Copyright law",
          "Broadcast regulations",
          "Privacy law"
        ],
        correctAnswer: 0,
        explanation: "The First Amendment protects freedom of the press.",
        module: 5
      },
      {
        id: 10,
        question: "What protects from false, damaging statements?",
        options: [
          "Privacy law",
          "Copyright law",
          "Contract law",
          "Defamation law"
        ],
        correctAnswer: 3,
        explanation: "Defamation includes libel (written) and slander (spoken).",
        module: 5
      },
      {
        id: 11,
        question: "What balances editorial excellence with efficiency?",
        options: [
          "Only production",
          "Only advertising",
          "Only reporting",
          "Newsroom management"
        ],
        correctAnswer: 3,
        explanation: "Management coordinates all newsroom functions effectively.",
        module: 6
      },
      {
        id: 12,
        question: "What reaches audiences through various channels?",
        options: [
          "Only radio broadcast",
          "Only print distribution",
          "Only television broadcast",
          "Multi-platform distribution"
        ],
        correctAnswer: 3,
        explanation: "Modern audiences access content through multiple platforms.",
        module: 6
      },
      {
        id: 13,
        question: "What requires reviewing records and databases?",
        options: [
          "Document analysis",
          "Guessing stories",
          "Random investigation",
          "Source interviews only"
        ],
        correctAnswer: 0,
        explanation: "Documents provide tangible evidence for stories.",
        module: 1
      },
      {
        id: 14,
        question: "What are formal requests for federal records?",
        options: [
          "Social media posts",
          "FOIA requests",
          "Personal letters",
          "Phone calls"
        ],
        correctAnswer: 1,
        explanation: "FOIA is the Freedom of Information Act.",
        module: 1
      },
      {
        id: 15,
        question: "What voice emphasizes who does what?",
        options: [
          "Active voice",
          "Neutral voice",
          "Formal voice",
          "Passive voice"
        ],
        correctAnswer: 0,
        explanation: "Active voice creates stronger, clearer sentences.",
        module: 2
      },
      {
        id: 16,
        question: "What are reporter-produced stories?",
        options: [
          "Packages",
          "Teases",
          "Voiceovers",
          "Readers"
        ],
        correctAnswer: 0,
        explanation: "Packages include reporter narration, interviews, and video.",
        module: 2
      },
      {
        id: 17,
        question: "What chooses appropriate mics for situations?",
        options: [
          "Using any mic available",
          "Microphone selection",
          "Only wireless mics",
          "No microphone use"
        ],
        correctAnswer: 1,
        explanation: "Proper mic selection ensures good audio quality.",
        module: 3
      },
      {
        id: 18,
        question: "What are mobile units for live transmission?",
        options: [
          "Editing suites",
          "Studio cameras",
          "Regular cars",
          "Satellite trucks"
        ],
        correctAnswer: 3,
        explanation: "Satellite trucks transmit live video from remote locations.",
        module: 3
      },
      {
        id: 19,
        question: "What chooses effective interview segments?",
        options: [
          "Using all interviews",
          "Ignoring interviews",
          "Soundbite selection",
          "Creating dialogue"
        ],
        correctAnswer: 2,
        explanation: "Selecting the best soundbites creates stronger stories.",
        module: 4
      },
      {
        id: 20,
        question: "What identifies people and places?",
        options: [
          "Full-screen graphics",
          "Voice identification",
          "Lower thirds",
          "Background music"
        ],
        correctAnswer: 2,
        explanation: "Lower thirds provide essential identification information.",
        module: 4
      },
      {
        id: 21,
        question: "What balances news gathering with privacy rights?",
        options: [
          "Defamation law",
          "Copyright law",
          "Privacy law",
          "Contract law"
        ],
        correctAnswer: 2,
        explanation: "Privacy law protects individuals from certain intrusions.",
        module: 5
      },
      {
        id: 22,
        question: "What oversees broadcast regulation?",
        options: [
          "State agencies",
          "Local governments",
          "FCC jurisdiction",
          "International bodies"
        ],
        correctAnswer: 2,
        explanation: "The Federal Communications Commission regulates broadcasting.",
        module: 5
      },
      {
        id: 23,
        question: "What guides journalistic quality and ethics?",
        options: [
          "Technical operations",
          "Marketing only",
          "Financial management",
          "Editorial leadership"
        ],
        correctAnswer: 3,
        explanation: "Editorial leadership maintains journalistic standards.",
        module: 6
      },
      {
        id: 24,
        question: "What delivers content beyond traditional broadcast?",
        options: [
          "Only live television",
          "Only radio broadcasts",
          "Only scheduled programming",
          "Streaming and on-demand"
        ],
        correctAnswer: 3,
        explanation: "Digital platforms provide additional distribution channels.",
        module: 6
      },
      {
        id: 25,
        question: "What confirms source credibility?",
        options: [
          "Source appearance",
          "Source verification",
          "Source location",
          "Source popularity"
        ],
        correctAnswer: 1,
        explanation: "Verification ensures information reliability.",
        module: 1
      },
      {
        id: 26,
        question: "What transforms numbers into broadcast stories?",
        options: [
          "Weather reports",
          "Celebrity interviews",
          "Data journalism",
          "Entertainment reporting"
        ],
        correctAnswer: 2,
        explanation: "Data journalism makes statistics understandable and compelling.",
        module: 1
      },
      {
        id: 27,
        question: "What creates immediacy and relevance?",
        options: [
          "Past tense only",
          "Present tense focus",
          "Future tense speculation",
          "Conditional tense"
        ],
        correctAnswer: 1,
        explanation: "Present tense makes stories feel current and relevant.",
        module: 2
      },
      {
        id: 28,
        question: "What confirms all facts before writing?",
        options: [
          "Assumption making",
          "Accuracy verification",
          "Source guessing",
          "Creative writing"
        ],
        correctAnswer: 1,
        explanation: "Verification ensures broadcast accuracy.",
        module: 2
      },
      {
        id: 29,
        question: "What frames shots that communicate clearly?",
        options: [
          "Composition principles",
          "Maximum zoom",
          "Constant movement",
          "Random framing"
        ],
        correctAnswer: 0,
        explanation: "Good composition helps viewers understand visual information.",
        module: 3
      },
      {
        id: 30,
        question: "What creates content for multiple platforms?",
        options: [
          "Radio reporting only",
          "Only television reporting",
          "Multi-platform reporting",
          "Print reporting"
        ],
        correctAnswer: 2,
        explanation: "Modern journalism often serves multiple platforms simultaneously.",
        module: 3
      },
      {
        id: 31,
        question: "What creates initial story structure?",
        options: [
          "Color correction",
          "Rough cutting",
          "Audio mixing",
          "Final editing"
        ],
        correctAnswer: 1,
        explanation: "Rough cuts establish basic story flow.",
        module: 4
      },
      {
        id: 32,
        question: "What weaves ambient sound into stories?",
        options: [
          "Music replacement",
          "Voiceover only",
          "Silence only",
          "Natural sound integration"
        ],
        correctAnswer: 3,
        explanation: "Natural sound adds authenticity and atmosphere.",
        module: 4
      },
      {
        id: 33,
        question: "What allows limited use for news purposes?",
        options: [
          "No use allowed",
          "Complete freedom",
          "Purchase requirement",
          "Fair use doctrine"
        ],
        correctAnswer: 3,
        explanation: "Fair use allows limited use without permission for purposes like news.",
        module: 5
      },
      {
        id: 34,
        question: "What provides ethical guidelines?",
        options: [
          "Station policies only",
          "Personal preferences",
          "Government regulations",
          "SPJ Code of Ethics"
        ],
        correctAnswer: 3,
        explanation: "SPJ provides widely accepted ethical standards for journalists.",
        module: 5
      },
      {
        id: 35,
        question: "What manages personnel and budgets?",
        options: [
          "Only social media",
          "Only equipment use",
          "Resource allocation",
          "Only story assignment"
        ],
        correctAnswer: 2,
        explanation: "Resource management ensures effective operations.",
        module: 6
      },
      {
        id: 36,
        question: "What connects with local communities?",
        options: [
          "Only online interaction",
          "Only national reporting",
          "Only international reporting",
          "Community engagement"
        ],
        correctAnswer: 3,
        explanation: "Community connection builds audience trust and relevance.",
        module: 6
      },
      {
        id: 37,
        question: "What protects source identities?",
        options: [
          "Station broadcasts",
          "Confidentiality protocols",
          "Public announcements",
          "Social media posts"
        ],
        correctAnswer: 1,
        explanation: "Protecting sources maintains trust and safety.",
        module: 1
      },
      {
        id: 38,
        question: "How should words relate to visuals?",
        options: [
          "Contradict intentionally",
          "Complement rather than repeat",
          "Repeat exactly",
          "Ignore completely"
        ],
        correctAnswer: 1,
        explanation: "Complementary writing uses words and images together effectively.",
        module: 2
      },
      {
        id: 39,
        question: "What evaluates potential dangers?",
        options: [
          "Risk assessment",
          "Ignoring risks",
          "Following others",
          "Assuming safety"
        ],
        correctAnswer: 0,
        explanation: "Assessment helps prepare for and avoid dangers.",
        module: 3
      },
      {
        id: 40,
        question: "What articulates clear direction?",
        options: [
          "Only technical operations",
          "Vision development",
          "Only daily management",
          "Only financial management"
        ],
        correctAnswer: 1,
        explanation: "Vision provides purpose and direction for journalism.",
        module: 6
      }
    ]
  }
};

// Export for use in your application
export default broadcastJournalismDiploma;
