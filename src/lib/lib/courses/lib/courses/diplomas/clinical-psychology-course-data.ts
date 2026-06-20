export const clinicalPsychologyDiplomaCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "clinical-psychology-diploma",
  title: "Clinical Psychology (Diploma)",
  description: "Advanced clinical psychology course covering psychological assessment, evidence-based interventions, treatment planning, and working with diverse clinical populations.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🏥",
  badge: "Diploma",
  prerequisites: ["mental-health-counseling-certificate"],
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Clinical Assessment Fundamentals",
      content: `
# Module 1: Clinical Assessment Fundamentals

## Purpose of Clinical Assessment
Clinical assessment systematically gathers information to understand a person's psychological functioning, diagnose when appropriate, and plan treatment. Think of it as creating a detailed map before planning a journey to wellness.

## Key Assessment Components
**Clinical Interview:** Structured conversation covering history, symptoms, functioning, and goals. Different from casual conversation-it's purposeful and guided.

**Mental Status Examination:** Systematic observation of current psychological functioning including appearance, behavior, mood, thought process, and cognition.

**Standardized Measures:** Questionnaires or tests with established norms for comparison (like depression or anxiety scales).

**Collateral Information:** Information from other sources like family, previous treatment records, or medical reports.

## Diagnostic Considerations
Diagnosis serves several purposes:
- Guides treatment planning
- Facilitates communication among professionals
- Helps predict course and prognosis
- May be required for insurance or services

The biopsychosocial model considers biological, psychological, and social factors all contributing to psychological concerns.

## Common Assessment Tools
**Symptom Checklists:** Quick screens for specific concerns (PHQ-9 for depression, GAD-7 for anxiety).

**Personality Inventories:** Measures personality traits and patterns (though interpretation requires training).

**Cognitive Screening:** Brief assessments of memory, attention, and executive functioning.

**Functional Assessment:** How symptoms affect daily life in work, relationships, self-care.

## Cultural Considerations in Assessment
Culture affects symptom expression, help-seeking behavior, and what's considered "normal." Assessment should consider:
- Cultural identity and background
- Language preferences and fluency
- Cultural explanations for symptoms
- Stigma concerns within cultural context
- Cultural norms about emotional expression

## Assessment Ethics
**Informed Consent:** Explain assessment purpose, procedures, limits of confidentiality, and how information will be used.

**Competence:** Only assess in areas where you have proper training and supervision.

**Cultural Competence:** Recognize cultural factors that might affect assessment accuracy.

**Feedback:** Provide assessment results in understandable, helpful way.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the purpose of clinical assessment?",
          options: [
            "Systematically gather information to understand and plan treatment",
            "Quickly solve problems",
            "Label people",
            "Make people feel analyzed"
          ],
          correctAnswer: 0,
          explanation: "Clinical assessment systematically gathers information to understand psychological functioning and plan treatment."
        },
        {
          id: 2,
          question: "What is a clinical interview?",
          options: [
            "Casual conversation",
            "Social chat",
            "Therapy session",
            "Structured, purposeful conversation"
          ],
          correctAnswer: 3,
          explanation: "A clinical interview is a structured, purposeful conversation different from casual conversation."
        },
        {
          id: 3,
          question: "What is mental status examination?",
          options: [
            "Personality test",
            "Intelligence test",
            "Medical test",
            "Systematic observation of current psychological functioning"
          ],
          correctAnswer: 3,
          explanation: "Mental status examination systematically observes appearance, behavior, mood, thoughts, and cognition."
        },
        {
          id: 4,
          question: "What are standardized measures?",
          options: [
            "Guesses",
            "Casual observations",
            "Personal opinions",
            "Questionnaires with established norms for comparison"
          ],
          correctAnswer: 3,
          explanation: "Standardized measures have established norms allowing comparison to reference groups."
        },
        {
          id: 5,
          question: "What does diagnosis guide?",
          options: [
            "Treatment planning",
            "Judgment of character",
            "Personal opinions",
            "Social exclusion"
          ],
          correctAnswer: 0,
          explanation: "Diagnosis guides treatment planning and facilitates communication among professionals."
        },
        {
          id: 6,
          question: "What is the biopsychosocial model?",
          options: [
            "Only psychological factors",
            "Only social factors",
            "Biological, psychological, and social factors",
            "Only biological factors"
          ],
          correctAnswer: 2,
          explanation: "The biopsychosocial model considers biological, psychological, and social factors."
        },
        {
          id: 7,
          question: "What are symptom checklists?",
          options: [
            "Quick screens for specific concerns",
            "Treatment plans",
            "Complete diagnoses",
            "Personality tests"
          ],
          correctAnswer: 0,
          explanation: "Symptom checklists are quick screening tools for specific concerns like depression or anxiety."
        },
        {
          id: 8,
          question: "What is functional assessment?",
          options: [
            "How symptoms affect daily life",
            "Blood tests",
            "Brain scans",
            "Medical testing"
          ],
          correctAnswer: 0,
          explanation: "Functional assessment examines how symptoms affect work, relationships, and self-care."
        },
        {
          id: 9,
          question: "How does culture affect assessment?",
          options: [
            "Unimportant factor",
            "Affects symptom expression and help-seeking",
            "Only affects language",
            "No effect"
          ],
          correctAnswer: 1,
          explanation: "Culture affects how symptoms are expressed and whether people seek help."
        },
        {
          id: 10,
          question: "What is informed consent in assessment?",
          options: [
            "Explaining purpose, procedures, and limits",
            "No explanation needed",
            "Secret testing",
            "Assumption of agreement"
          ],
          correctAnswer: 0,
          explanation: "Informed consent means explaining assessment purpose, procedures, and confidentiality limits."
        },
        {
          id: 11,
          question: "What is collateral information?",
          options: [
            "Only client information",
            "Theories",
            "Information from other sources",
            "Guesses"
          ],
          correctAnswer: 2,
          explanation: "Collateral information comes from other sources like family or previous records."
        },
        {
          id: 12,
          question: "What does diagnosis facilitate?",
          options: [
            "Stigma only",
            "Communication among professionals",
            "Personal judgments",
            "Social rejection"
          ],
          correctAnswer: 1,
          explanation: "Diagnosis facilitates communication among different professionals involved in care."
        },
        {
          id: 13,
          question: "What is PHQ-9?",
          options: [
            "Depression screening tool",
            "Anxiety measure",
            "Personality test",
            "Cognitive test"
          ],
          correctAnswer: 0,
          explanation: "PHQ-9 is a common screening tool for depression symptoms."
        },
        {
          id: 14,
          question: "What should assessment consider about culture?",
          options: [
            "Ignore differences",
            "Cultural identity and explanations for symptoms",
            "Assume sameness",
            "Only Western norms"
          ],
          correctAnswer: 1,
          explanation: "Assessment should consider cultural identity and cultural explanations for symptoms."
        },
        {
          id: 15,
          question: "What is competence in assessment?",
          options: [
            "Winging it",
            "Guessing answers",
            "Always assessing",
            "Only assessing in areas with proper training"
          ],
          correctAnswer: 3,
          explanation: "Competence means only conducting assessments in areas where you have proper training."
        },
        {
          id: 16,
          question: "What are personality inventories?",
          options: [
            "Quick screens",
            "Casual observations",
            "Diagnostic tools only",
            "Measures of personality traits and patterns"
          ],
          correctAnswer: 3,
          explanation: "Personality inventories measure personality traits and patterns (interpretation requires training)."
        },
        {
          id: 17,
          question: "What is cognitive screening?",
          options: [
            "Brief assessment of memory and attention",
            "Personality assessment",
            "Emotional evaluation",
            "Social skills test"
          ],
          correctAnswer: 0,
          explanation: "Cognitive screening briefly assesses memory, attention, and executive functioning."
        },
        {
          id: 18,
          question: "What does prognosis mean?",
          options: [
            "Treatment",
            "Predicted course and outcome",
            "Assessment",
            "Diagnosis"
          ],
          correctAnswer: 1,
          explanation: "Prognosis refers to the predicted course and likely outcome of a condition."
        },
        {
          id: 19,
          question: "What is cultural competence?",
          options: [
            "Recognizing cultural factors affecting assessment",
            "Only knowing one culture",
            "Ignoring culture",
            "Assuming universality"
          ],
          correctAnswer: 0,
          explanation: "Cultural competence involves recognizing how cultural factors might affect assessment accuracy."
        },
        {
          id: 20,
          question: "What should happen with assessment results?",
          options: [
            "Never share",
            "Provide in understandable, helpful way",
            "Keep secret",
            "Only give to other professionals"
          ],
          correctAnswer: 1,
          explanation: "Assessment results should be provided to clients in an understandable and helpful manner."
        }
      ]
    },
    {
      id: 2,
      title: "Evidence-Based Interventions",
      content: `
# Module 2: Evidence-Based Interventions

## What are Evidence-Based Interventions?
Evidence-based interventions are treatment approaches supported by scientific research demonstrating their effectiveness. Think of them as treatments that have been tested and shown to work for specific concerns.

## Major Therapeutic Approaches
**Cognitive Behavioral Therapy (CBT):** Focuses on connections between thoughts, feelings, and behaviors. Helps identify and change unhelpful thinking patterns and behaviors.

**Psychodynamic Therapy:** Explores how past experiences and unconscious processes affect current functioning. Focuses on insight and relationship patterns.

**Humanistic Therapy:** Emphasizes personal growth, self-actualization, and present-moment experience. Client-centered approach with unconditional positive regard.

**Systems Approaches:** Views individuals within their social systems (family, community). Addresses relationship patterns and systemic factors.

## CBT Core Principles
**Cognitive Restructuring:** Identifying and challenging unhelpful thoughts. Example: Changing "I always fail" to "Sometimes I succeed, sometimes I don't."

**Behavioral Activation:** Increasing engagement in rewarding activities to improve mood.

**Exposure Therapy:** Gradually facing feared situations to reduce anxiety.

**Skill Building:** Teaching coping skills like problem-solving or emotion regulation.

## Common Intervention Techniques
**Psychoeducation:** Teaching clients about their condition and treatment.

**Relaxation Training:** Techniques like deep breathing or progressive muscle relaxation.

**Mindfulness:** Practicing present-moment awareness without judgment.

**Behavioral Experiments:** Testing beliefs through real-world experiments.

**Role Playing:** Practicing skills or difficult conversations in session.

## Matching Interventions to Concerns
Different approaches work better for different concerns:
- **Anxiety disorders:** Often respond well to CBT with exposure
- **Depression:** CBT and behavioral activation frequently effective
- **Relationship issues:** Systems or psychodynamic approaches may help
- **Trauma:** Trauma-focused therapies with safety and pacing

## Treatment Planning
Effective treatment planning involves:
1. **Collaborative Goal Setting:** Client and therapist work together on goals
2. **Intervention Selection:** Choosing appropriate techniques
3. **Progress Monitoring:** Regularly checking if interventions are working
4. **Adjustment:** Modifying approach based on progress or challenges

## Ethical Implementation
**Competence:** Only use interventions you're trained to deliver properly.

**Informed Consent:** Explain treatment approach, alternatives, risks, and benefits.

**Monitoring Outcomes:** Track whether interventions are helping.

**Cultural Adaptation:** Modify interventions respectfully for cultural fit when needed.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are evidence-based interventions?",
          options: [
            "Approaches supported by scientific research",
            "Newest trends",
            "Whatever feels right",
            "Traditional methods only"
          ],
          correctAnswer: 0,
          explanation: "Evidence-based interventions have scientific research demonstrating their effectiveness."
        },
        {
          id: 2,
          question: "What does CBT focus on?",
          options: [
            "Only family systems",
            "Only past experiences",
            "Only unconscious processes",
            "Connections between thoughts, feelings, behaviors"
          ],
          correctAnswer: 3,
          explanation: "CBT focuses on connections between thoughts, feelings, and behaviors."
        },
        {
          id: 3,
          question: "What does psychodynamic therapy explore?",
          options: [
            "Only thinking patterns",
            "Only current behaviors",
            "Only skill building",
            "Past experiences and unconscious processes"
          ],
          correctAnswer: 3,
          explanation: "Psychodynamic therapy explores how past experiences and unconscious processes affect current functioning."
        },
        {
          id: 4,
          question: "What is humanistic therapy emphasis?",
          options: [
            "Behavior change only",
            "Personal growth and self-actualization",
            "Symptom reduction only",
            "Diagnosis"
          ],
          correctAnswer: 1,
          explanation: "Humanistic therapy emphasizes personal growth, self-actualization, and present experience."
        },
        {
          id: 5,
          question: "What are systems approaches?",
          options: [
            "Only biological factors",
            "Only individual focus",
            "Viewing individuals within social systems",
            "Only cognitive factors"
          ],
          correctAnswer: 2,
          explanation: "Systems approaches view individuals within their social systems like family or community."
        },
        {
          id: 6,
          question: "What is cognitive restructuring?",
          options: [
            "Ignoring thoughts",
            "Only accepting thoughts",
            "Suppressing thoughts",
            "Identifying and changing unhelpful thoughts"
          ],
          correctAnswer: 3,
          explanation: "Cognitive restructuring involves identifying and challenging unhelpful thinking patterns."
        },
        {
          id: 7,
          question: "What is behavioral activation?",
          options: [
            "Increasing engagement in rewarding activities",
            "Reducing activity",
            "Only resting",
            "Only talking"
          ],
          correctAnswer: 0,
          explanation: "Behavioral activation increases engagement in rewarding activities to improve mood."
        },
        {
          id: 8,
          question: "What is exposure therapy?",
          options: [
            "Avoiding fears",
            "Only imagining fears",
            "Gradually facing feared situations",
            "Suppressing anxiety"
          ],
          correctAnswer: 2,
          explanation: "Exposure therapy involves gradually facing feared situations to reduce anxiety."
        },
        {
          id: 9,
          question: "What is psychoeducation?",
          options: [
            "Teaching about condition and treatment",
            "Keeping clients uninformed",
            "Only giving advice",
            "Only listening"
          ],
          correctAnswer: 0,
          explanation: "Psychoeducation involves teaching clients about their condition and treatment approach."
        },
        {
          id: 10,
          question: "What works well for anxiety disorders?",
          options: [
            "Only medication",
            "Only family therapy",
            "Only supportive listening",
            "CBT with exposure techniques"
          ],
          correctAnswer: 3,
          explanation: "Anxiety disorders often respond well to CBT approaches including exposure techniques."
        },
        {
          id: 11,
          question: "What is collaborative goal setting?",
          options: [
            "No goals needed",
            "Therapist decides goals",
            "Family sets goals",
            "Client and therapist work together on goals"
          ],
          correctAnswer: 3,
          explanation: "Collaborative goal setting involves client and therapist working together on treatment goals."
        },
        {
          id: 12,
          question: "What is competence in intervention?",
          options: [
            "Copying others",
            "Only using interventions with proper training",
            "Guessing what to do",
            "Using any intervention"
          ],
          correctAnswer: 1,
          explanation: "Competence means only delivering interventions you're properly trained to provide."
        },
        {
          id: 13,
          question: "What is mindfulness?",
          options: [
            "Multitasking",
            "Past analysis",
            "Future planning",
            "Present-moment awareness without judgment"
          ],
          correctAnswer: 3,
          explanation: "Mindfulness involves practicing present-moment awareness without judgment."
        },
        {
          id: 14,
          question: "What are behavioral experiments?",
          options: [
            "Avoiding testing",
            "Guessing outcomes",
            "Only talking",
            "Testing beliefs through real-world experiments"
          ],
          correctAnswer: 3,
          explanation: "Behavioral experiments involve testing beliefs or predictions through real-world activities."
        },
        {
          id: 15,
          question: "What works for depression?",
          options: [
            "Only medication",
            "Only rest",
            "CBT and behavioral activation",
            "Only insight"
          ],
          correctAnswer: 2,
          explanation: "Depression often responds well to CBT approaches including behavioral activation."
        },
        {
          id: 16,
          question: "What is role playing?",
          options: [
            "Avoiding practice",
            "Only observing",
            "Practicing skills in session",
            "Only real situations"
          ],
          correctAnswer: 2,
          explanation: "Role playing involves practicing skills or difficult conversations within therapy sessions."
        },
        {
          id: 17,
          question: "What is progress monitoring?",
          options: [
            "Only at end",
            "Never checking",
            "Regularly checking if interventions work",
            "Assuming progress"
          ],
          correctAnswer: 2,
          explanation: "Progress monitoring involves regularly checking whether interventions are helping."
        },
        {
          id: 18,
          question: "What is cultural adaptation?",
          options: [
            "Only Western methods",
            "Ignoring culture",
            "No changes ever",
            "Modifying interventions for cultural fit"
          ],
          correctAnswer: 3,
          explanation: "Cultural adaptation involves modifying interventions respectfully for better cultural fit."
        },
        {
          id: 19,
          question: "What does informed consent include for interventions?",
          options: [
            "No explanation",
            "Approach, alternatives, risks, benefits",
            "Secrets",
            "Only benefits"
          ],
          correctAnswer: 1,
          explanation: "Informed consent for interventions includes explaining approach, alternatives, risks, and benefits."
        },
        {
          id: 20,
          question: "What is adjustment in treatment?",
          options: [
            "Never changing",
            "Only client changes",
            "Modifying approach based on progress",
            "Sticking to plan regardless"
          ],
          correctAnswer: 2,
          explanation: "Adjustment involves modifying the treatment approach based on progress or challenges."
        }
      ]
    },
    {
      id: 3,
      title: "Treatment Planning and Progress Monitoring",
      content: `
# Module 3: Treatment Planning and Progress Monitoring

## Comprehensive Treatment Planning
Treatment planning translates assessment findings into a roadmap for therapy. It's a collaborative process between clinician and client that evolves over time. Think of it as creating a personalized wellness journey map.

## Key Treatment Plan Components
**Presenting Problems:** Clear description of concerns bringing client to treatment.

**Goals:** Specific, measurable, achievable, relevant, time-bound (SMART) objectives.

**Objectives:** Smaller steps leading to goal achievement.

**Interventions:** Specific techniques and approaches to be used.

**Progress Measures:** How progress will be tracked and evaluated.

**Timeframe:** Estimated duration and frequency of treatment.

## SMART Goal Development
**Specific:** Clear and precise (not "feel better" but "reduce panic attacks from daily to weekly")

**Measurable:** Can be tracked and quantified ("increase social activities from 0 to 2 per week")

**Achievable:** Realistic given resources and constraints

**Relevant:** Meaningful to client's values and life

**Time-bound:** Clear timeframe for achievement

## Collaborative Planning Process
Effective planning involves:
1. **Client Expertise:** Client knows their life, values, and preferences
2. **Clinical Expertise:** Clinician knows interventions and typical courses
3. **Shared Decision-Making:** Balancing both perspectives
4. **Flexibility:** Willingness to adjust as therapy progresses

## Progress Monitoring Methods
**Session-by-Session Tracking:** Brief check-ins at each session about progress and satisfaction.

**Standardized Measures:** Regular administration of validated questionnaires.

**Behavioral Tracking:** Monitoring specific behaviors or symptoms between sessions.

**Functional Indicators:** Observing improvements in daily functioning.

**Therapeutic Alliance Assessment:** Monitoring quality of therapeutic relationship.

## Adjusting Treatment Plans
When to consider adjustments:
- Lack of progress after reasonable time
- New concerns emerge
- Client's life circumstances change
- Therapeutic relationship difficulties
- Client preferences shift

Adjustment involves revisiting goals, trying different interventions, or considering referral.

## Documentation Standards
**Purpose of Documentation:** Communication, continuity of care, legal protection, quality improvement.

**Key Elements:** Assessment findings, treatment plan, progress notes, risk assessments, termination summary.

**Ethical Documentation:** Accurate, timely, professional, confidential, and purposeful.

**Progress Notes:** SOAP format (Subjective, Objective, Assessment, Plan) or similar structure.

## Termination Planning
Planning for therapy conclusion from the beginning:
- **Criteria for termination:** How will we know therapy is complete?
- **Progress review:** Regular check-ins about progress toward termination
- **Relapse prevention:** Planning for maintaining gains after therapy
- **Referral planning:** If additional services might be needed later
- **Closure process:** Saying goodbye meaningfully
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is treatment planning?",
          options: [
            "Standard protocol for all",
            "Collaborative roadmap for therapy",
            "Fixed recipe",
            "Clinician-only decision"
          ],
          correctAnswer: 1,
          explanation: "Treatment planning is a collaborative process creating a roadmap for therapy."
        },
        {
          id: 2,
          question: "What are presenting problems?",
          options: [
            "Only diagnoses",
            "Concerns bringing client to treatment",
            "All life issues",
            "Family issues only"
          ],
          correctAnswer: 1,
          explanation: "Presenting problems are the specific concerns that led someone to seek treatment."
        },
        {
          id: 3,
          question: "What does SMART stand for?",
          options: [
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Simple, Meaningful, Actionable, Realistic, Timely",
            "Significant, Meaningful, Achievable, Realistic, Timely",
            "Strategic, Manageable, Appropriate, Reasonable, Targeted"
          ],
          correctAnswer: 0,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
        },
        {
          id: 4,
          question: "What is specific in SMART goals?",
          options: [
            "Wishful thinking",
            "General hopes",
            "Clear and precise objectives",
            "Vague intentions"
          ],
          correctAnswer: 2,
          explanation: "Specific means clear and precise rather than vague or general."
        },
        {
          id: 5,
          question: "What is measurable in SMART goals?",
          options: [
            "Guessed",
            "Cannot track",
            "Subjective only",
            "Can be tracked and quantified"
          ],
          correctAnswer: 3,
          explanation: "Measurable means progress can be tracked and quantified somehow."
        },
        {
          id: 6,
          question: "What does collaborative planning balance?",
          options: [
            "Only textbook answers",
            "Only client wishes",
            "Client expertise and clinical expertise",
            "Only clinician knowledge"
          ],
          correctAnswer: 2,
          explanation: "Collaborative planning balances client's life knowledge with clinician's professional knowledge."
        },
        {
          id: 7,
          question: "What is session-by-session tracking?",
          options: [
            "Only at end",
            "Brief check-ins each session",
            "Only formal tests",
            "Never checking"
          ],
          correctAnswer: 1,
          explanation: "Session-by-session tracking involves brief progress check-ins at each therapy session."
        },
        {
          id: 8,
          question: "When consider treatment adjustments?",
          options: [
            "Lack of progress after reasonable time",
            "Never change",
            "Only client requests",
            "Always change weekly"
          ],
          correctAnswer: 0,
          explanation: "Consider adjustments when there's lack of progress after a reasonable period."
        },
        {
          id: 9,
          question: "What is purpose of documentation?",
          options: [
            "Only for supervisors",
            "Only billing",
            "Communication and continuity of care",
            "Secret records"
          ],
          correctAnswer: 2,
          explanation: "Documentation serves communication, continuity, legal, and quality improvement purposes."
        },
        {
          id: 10,
          question: "What is SOAP format?",
          options: [
            "Summary, Observations, Analysis, Projection",
            "Subjective, Objective, Assessment, Plan",
            "Simple, Organized, Accurate, Professional",
            "Cleaning method"
          ],
          correctAnswer: 1,
          explanation: "SOAP format organizes notes into Subjective, Objective, Assessment, and Plan sections."
        },
        {
          id: 11,
          question: "What are objectives in treatment plans?",
          options: [
            "Only interventions",
            "Smaller steps leading to goals",
            "Same as goals",
            "Only diagnoses"
          ],
          correctAnswer: 1,
          explanation: "Objectives are smaller, specific steps that lead toward achieving broader goals."
        },
        {
          id: 12,
          question: "What is achievable in SMART goals?",
          options: [
            "Whatever client wants",
            "Realistic given resources",
            "Impossible dreams",
            "Easy without effort"
          ],
          correctAnswer: 1,
          explanation: "Achievable means realistic given the client's resources and circumstances."
        },
        {
          id: 13,
          question: "What is relevant in SMART goals?",
          options: [
            "Theoretically interesting",
            "Clinician's preferences",
            "Meaningful to client's values",
            "Standard for everyone"
          ],
          correctAnswer: 2,
          explanation: "Relevant means meaningful and important to the client's life and values."
        },
        {
          id: 14,
          question: "What is behavioral tracking?",
          options: [
            "Guessing progress",
            "Only at start",
            "Only in session",
            "Monitoring behaviors between sessions"
          ],
          correctAnswer: 3,
          explanation: "Behavioral tracking involves monitoring specific behaviors or symptoms between sessions."
        },
        {
          id: 15,
          question: "What are functional indicators?",
          options: [
            "Only client reports",
            "Only clinician observations",
            "Only test scores",
            "Improvements in daily functioning"
          ],
          correctAnswer: 3,
          explanation: "Functional indicators are improvements in daily life activities and roles."
        },
        {
          id: 16,
          question: "What is ethical documentation?",
          options: [
            "Accurate, timely, professional",
            "Only positive notes",
            "Shared publicly",
            "Falsified records"
          ],
          correctAnswer: 0,
          explanation: "Ethical documentation is accurate, timely, professional, confidential, and purposeful."
        },
        {
          id: 17,
          question: "What is termination planning?",
          options: [
            "Planning conclusion from beginning",
            "Only at end",
            "Surprise ending",
            "Never ending"
          ],
          correctAnswer: 0,
          explanation: "Termination planning considers therapy conclusion from the beginning of treatment."
        },
        {
          id: 18,
          question: "What is relapse prevention?",
          options: [
            "Planning to maintain gains after therapy",
            "Ignoring future",
            "Guaranteeing no problems",
            "Only during therapy"
          ],
          correctAnswer: 0,
          explanation: "Relapse prevention involves planning how to maintain improvements after therapy ends."
        },
        {
          id: 19,
          question: "What is therapeutic alliance assessment?",
          options: [
            "Monitoring quality of therapeutic relationship",
            "Only therapist feelings",
            "Unimportant factor",
            "Only client liking therapist"
          ],
          correctAnswer: 0,
          explanation: "Therapeutic alliance assessment monitors the quality of the working relationship."
        },
        {
          id: 20,
          question: "What is timeframe in treatment plans?",
          options: [
            "No time considered",
            "Fixed for everyone",
            "Open-ended always",
            "Estimated duration and frequency"
          ],
          correctAnswer: 3,
          explanation: "Timeframe includes estimated duration of treatment and session frequency."
        }
      ]
    },
    {
      id: 4,
      title: "Working with Specific Populations",
      content: `
# Module 4: Working with Specific Populations

## Population-Specific Considerations
Different populations have unique needs, strengths, and considerations. Effective clinical work requires understanding these differences while avoiding stereotypes. Think of it as cultural and developmental competence in action.

## Working with Children and Adolescents
**Developmental Considerations:** Treatment must match cognitive and emotional developmental level.

**Family Involvement:** Typically involves parents/caregivers in treatment.

**Play and Creative Techniques:** Often use play, art, or games for expression.

**School Collaboration:** May involve communication with schools.

**Confidentiality Limits:** Different rules about privacy with minors.

**Informed Consent:** Parents typically consent, with child assent when possible.

## Working with Older Adults
**Lifespan Perspective:** Consider entire life history and accumulated wisdom.

**Medical Comorbidity:** Often co-occurring medical conditions.

**Cognitive Changes:** Normal aging vs. concerning cognitive decline.

**Loss and Transitions:** Common experiences of loss (spouse, health, independence).

**Adaptation of Techniques:** May need to adapt for sensory or mobility limitations.

**End-of-Life Considerations:** May involve discussions about mortality and meaning.

## Working with Trauma Survivors
**Safety First:** Establishing physical and emotional safety as foundation.

**Pacing:** Going at client's pace, not pushing too fast.

**Stabilization:** Developing coping skills before trauma processing.

**Triggers:** Understanding and managing trauma reminders.

**Empowerment:** Supporting regaining sense of control and choice.

**Vicarious Trauma:** Clinician self-care when working with trauma.

## Cultural and Diversity Competence
**Cultural Humility:** Ongoing process of learning about different cultures.

**Intersectionality:** Understanding multiple identity factors (race, gender, sexuality, etc.).

**Power Dynamics:** Awareness of privilege and oppression in therapeutic relationship.

**Adapting Interventions:** Modifying approaches for cultural relevance.

**Addressing Stigma:** Helping clients navigate cultural stigma about mental health.

**Language Access:** Ensuring communication in preferred language.

## Working with Couples and Families
**Systems Perspective:** Viewing problems in relationship context.

**Circular Causality:** Understanding mutual influence in relationships.

**Communication Patterns:** Identifying and improving communication.

**Boundaries:** Healthy vs. problematic boundaries in relationships.

**Multipartiality:** Being fair to all members without taking sides.

**Genograms:** Mapping family history and patterns.

## Specialized Considerations
**LGBTQ+ Clients:** Understanding unique stressors and affirming identity.

**Disability Considerations:** Accessibility and understanding disability experience.

**Socioeconomic Factors:** Impact of poverty and resources on treatment.

**Rural vs. Urban:** Different resource availability and community norms.

**Religious/Spiritual:** Integrating or respecting spiritual beliefs.

**Immigrant/Refugee:** Understanding acculturation stress and trauma history.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is required for working with different populations?",
          options: [
            "Only textbook knowledge",
            "Understanding unique needs while avoiding stereotypes",
            "Same approach for all",
            "Personal experience only"
          ],
          correctAnswer: 1,
          explanation: "Effective work requires understanding population differences while avoiding stereotypes."
        },
        {
          id: 2,
          question: "What is key with children and adolescents?",
          options: [
            "Matching developmental level",
            "Ignoring development",
            "Same as adults",
            "Only talking"
          ],
          correctAnswer: 0,
          explanation: "Treatment must match the child's cognitive and emotional developmental level."
        },
        {
          id: 3,
          question: "What often involves with child treatment?",
          options: [
            "No family contact",
            "Family involvement",
            "Only school reports",
            "Only child sessions"
          ],
          correctAnswer: 1,
          explanation: "Child treatment typically involves parents or caregivers in the process."
        },
        {
          id: 4,
          question: "What techniques often used with children?",
          options: [
            "Only talking",
            "Only medication",
            "Only worksheets",
            "Play and creative techniques"
          ],
          correctAnswer: 3,
          explanation: "Children often express themselves through play, art, or games in therapy."
        },
        {
          id: 5,
          question: "What is lifespan perspective with older adults?",
          options: [
            "Only current issues",
            "Considering entire life history",
            "Only aging problems",
            "Ignoring past"
          ],
          correctAnswer: 1,
          explanation: "Lifespan perspective considers the person's entire life history and accumulated wisdom."
        },
        {
          id: 6,
          question: "What is common with older adults?",
          options: [
            "Perfect health",
            "Only psychological issues",
            "Medical conditions co-occurring",
            "No medical issues"
          ],
          correctAnswer: 2,
          explanation: "Older adults often have co-occurring medical conditions affecting treatment."
        },
        {
          id: 7,
          question: "What is first with trauma survivors?",
          options: [
            "Only talking",
            "Immediate exposure",
            "Trauma processing",
            "Establishing safety"
          ],
          correctAnswer: 3,
          explanation: "Establishing physical and emotional safety comes first with trauma work."
        },
        {
          id: 8,
          question: "What is pacing in trauma work?",
          options: [
            "Therapist deciding pace",
            "Rushing through",
            "Fixed timeline",
            "Going at client's pace"
          ],
          correctAnswer: 3,
          explanation: "Pacing means proceeding at the client's comfort level, not pushing too fast."
        },
        {
          id: 9,
          question: "What is cultural humility?",
          options: [
            "Assuming sameness",
            "Ignoring culture",
            "Ongoing process of learning",
            "Knowing everything"
          ],
          correctAnswer: 2,
          explanation: "Cultural humility is an ongoing process of learning about different cultures."
        },
        {
          id: 10,
          question: "What is intersectionality?",
          options: [
            "Ignoring identities",
            "Only one identity",
            "Multiple identity factors interacting",
            "Simple categorization"
          ],
          correctAnswer: 2,
          explanation: "Intersectionality understands how multiple identity factors interact and affect experience."
        },
        {
          id: 11,
          question: "What is systems perspective with families?",
          options: [
            "Viewing problems in relationship context",
            "Ignoring relationships",
            "Only one person's view",
            "Only individual focus"
          ],
          correctAnswer: 0,
          explanation: "Systems perspective views problems within the context of relationship patterns."
        },
        {
          id: 12,
          question: "What is circular causality?",
          options: [
            "One cause only",
            "Random events",
            "Mutual influence in relationships",
            "Linear cause-effect"
          ],
          correctAnswer: 2,
          explanation: "Circular causality understands how family members mutually influence each other."
        },
        {
          id: 13,
          question: "What is multipartiality?",
          options: [
            "Only one perspective",
            "Taking sides",
            "Ignoring some",
            "Being fair to all members"
          ],
          correctAnswer: 3,
          explanation: "Multipartiality means being fair to all family members without taking sides."
        },
        {
          id: 14,
          question: "What are triggers in trauma?",
          options: [
            "Only obvious dangers",
            "Trauma reminders causing distress",
            "Easy to avoid",
            "Only in therapy"
          ],
          correctAnswer: 1,
          explanation: "Triggers are reminders of trauma that can cause emotional or physiological reactions."
        },
        {
          id: 15,
          question: "What is empowerment with trauma?",
          options: [
            "Therapist directing",
            "Regaining sense of control and choice",
            "Avoiding decisions",
            "Taking control for client"
          ],
          correctAnswer: 1,
          explanation: "Empowerment supports trauma survivors in regaining control and choice in their lives."
        },
        {
          id: 16,
          question: "What is vicarious trauma?",
          options: [
            "Client trauma only",
            "Clinician impact from hearing trauma",
            "No impact on therapist",
            "Only physical trauma"
          ],
          correctAnswer: 1,
          explanation: "Vicarious trauma refers to the impact on clinicians from hearing about others' trauma."
        },
        {
          id: 17,
          question: "What are genograms?",
          options: [
            "Medical records",
            "Genetic tests",
            "Family history and pattern maps",
            "Only current family"
          ],
          correctAnswer: 2,
          explanation: "Genograms visually map family history, relationships, and patterns across generations."
        },
        {
          id: 18,
          question: "What with LGBTQ+ clients?",
          options: [
            "Understanding unique stressors",
            "Changing identity",
            "Ignoring identity",
            "Assuming heterosexuality"
          ],
          correctAnswer: 0,
          explanation: "Working with LGBTQ+ clients requires understanding unique stressors and affirming identity."
        },
        {
          id: 19,
          question: "What is language access?",
          options: [
            "No interpreters",
            "Communication in preferred language",
            "Assuming understanding",
            "Only English"
          ],
          correctAnswer: 1,
          explanation: "Language access ensures clients can communicate in their preferred language."
        },
        {
          id: 20,
          question: "What are socioeconomic factors?",
          options: [
            "Only psychological",
            "Unimportant",
            "Equal for all",
            "Impact of poverty and resources"
          ],
          correctAnswer: 3,
          explanation: "Socioeconomic factors like poverty and resource availability significantly impact treatment."
        }
      ]
    },
    {
      id: 5,
      title: "Ethical and Legal Considerations",
      content: `
# Module 5: Ethical and Legal Considerations

## Foundation of Clinical Ethics
Ethical practice protects clients, maintains professional standards, and preserves public trust. Think of ethics as the guardrails that keep clinical work safe and effective. Core ethical principles include beneficence (do good), nonmaleficence (do no harm), autonomy (respect choice), justice (fairness), and fidelity (keep promises).

## Key Ethical Principles in Practice
**Informed Consent:** Clients must understand treatment nature, risks, benefits, alternatives, and limits of confidentiality before consenting.

**Competence:** Only practice within boundaries of your training, experience, and qualifications.

**Confidentiality:** Protect client information with specific exceptions (danger to self/others, abuse reporting requirements).

**Multiple Relationships:** Avoid relationships that could impair professional judgment or exploit clients.

**Boundaries:** Maintain appropriate professional boundaries in all interactions.

**Documentation:** Keep accurate, timely records that serve legitimate purposes.

## Legal Requirements
**Mandated Reporting:** Legal requirement to report suspected child/elder/dependent adult abuse.

**Duty to Warn/Protect:** Legal obligation to take action when client poses serious threat to identifiable others.

**HIPAA Compliance:** Federal regulations protecting health information privacy and security.

**Record Retention:** Legal requirements for how long to keep records.

**Subpoena Response:** Proper procedures if records are legally requested.

**Malpractice Prevention:** Practices that reduce legal liability risks.

## Confidentiality and Its Limits
Confidentiality is fundamental but has important limits:
- **Danger to Self:** Imminent suicide risk
- **Danger to Others:** Specific threat to identifiable person
- **Child/Elder Abuse:** Suspected abuse or neglect
- **Court Order:** Legal subpoena for records
- **Treatment Coordination:** Sharing with treatment team (with consent)
- **Supervision:** Discussing cases with supervisor

Clients should understand these limits from the beginning.

## Boundary Management
**Physical Boundaries:** Appropriate touch, office setup, personal space.

**Emotional Boundaries:** Appropriate self-disclosure, managing countertransference.

**Time Boundaries:** Starting/ending sessions on time, availability between sessions.

**Financial Boundaries:** Clear fee structure, handling missed appointments.

**Social Boundaries:** Appropriate social contact outside sessions.

**Digital Boundaries:** Appropriate use of technology, email, social media.

## Cultural Considerations in Ethics
**Cultural Competence:** Providing services sensitive to cultural differences.

**Cultural Humility:** Recognizing limits of your cultural knowledge.

**Language Access:** Providing services in client's preferred language.

**Cultural Values:** Respecting cultural values that may differ from your own.

**Power Dynamics:** Awareness of cultural power differences in therapeutic relationship.

**Adapting Ethical Standards:** Applying ethical principles in culturally sensitive ways.

## Ethical Decision-Making Models
When facing ethical dilemmas:
1. **Identify Problem:** What ethical principles conflict?
2. **Consult Resources:** Ethics codes, laws, policies, literature
3. **Consider Options:** Brainstorm possible courses of action
4. **Evaluate Options:** Weigh benefits/harms of each
5. **Choose Action:** Select best option
6. **Implement and Evaluate:** Take action and assess outcome
7. **Document:** Record decision-making process

## Supervision and Consultation
**Purpose of Supervision:** Quality assurance, professional development, client protection.

**When to Seek Consultation:** Complex cases, ethical dilemmas, uncertainty.

**Choosing Consultants:** Based on expertise, trustworthiness, availability.

**Documenting Consultation:** Record advice received and decisions made.

**Supervisor Responsibility:** Supervisors are responsible for supervisees' work.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is beneficence?",
          options: [
            "Doing harm",
            "Doing good for clients",
            "Avoiding action",
            "Being neutral"
          ],
          correctAnswer: 1,
          explanation: "Beneficence means doing good and promoting client welfare."
        },
        {
          id: 2,
          question: "What is nonmaleficence?",
          options: [
            "Risking harm",
            "Doing no harm",
            "Causing harm",
            "Ignoring harm"
          ],
          correctAnswer: 1,
          explanation: "Nonmaleficence means avoiding harm to clients."
        },
        {
          id: 3,
          question: "What is informed consent?",
          options: [
            "Assumed agreement",
            "No explanation needed",
            "Only verbal agreement",
            "Understanding treatment before consenting"
          ],
          correctAnswer: 3,
          explanation: "Informed consent means clients understand treatment before agreeing to it."
        },
        {
          id: 4,
          question: "What does competence mean?",
          options: [
            "Practicing within training boundaries",
            "Doing everything",
            "Guessing what to do",
            "Always confident"
          ],
          correctAnswer: 0,
          explanation: "Competence means practicing only within your training and qualifications."
        },
        {
          id: 5,
          question: "What is confidentiality?",
          options: [
            "Telling families everything",
            "Protecting client information",
            "No privacy",
            "Sharing everything"
          ],
          correctAnswer: 1,
          explanation: "Confidentiality means protecting client information with specific exceptions."
        },
        {
          id: 6,
          question: "What are multiple relationships?",
          options: [
            "Only therapeutic",
            "All relationships",
            "Only social",
            "Relationships impairing professional judgment"
          ],
          correctAnswer: 3,
          explanation: "Multiple relationships are additional relationships that could impair judgment or exploit."
        },
        {
          id: 7,
          question: "What is mandated reporting?",
          options: [
            "Never reporting",
            "Legal requirement to report abuse",
            "Optional reporting",
            "Only serious crimes"
          ],
          correctAnswer: 1,
          explanation: "Mandated reporting is legal requirement to report suspected abuse of vulnerable persons."
        },
        {
          id: 8,
          question: "What is duty to warn/protect?",
          options: [
            "Only for police",
            "No duty",
            "Optional action",
            "Obligation when client threatens others"
          ],
          correctAnswer: 3,
          explanation: "Duty to warn/protect is legal obligation when client poses serious threat to others."
        },
        {
          id: 9,
          question: "What are confidentiality limits?",
          options: [
            "No limits",
            "Only client permission",
            "Any concern",
            "Danger to self/others, abuse reporting"
          ],
          correctAnswer: 3,
          explanation: "Confidentiality has limits including danger to self/others and abuse reporting requirements."
        },
        {
          id: 10,
          question: "What are physical boundaries?",
          options: [
            "Appropriate touch and personal space",
            "No boundaries",
            "Only emotional",
            "Only in office"
          ],
          correctAnswer: 0,
          explanation: "Physical boundaries involve appropriate touch, office setup, and personal space."
        },
        {
          id: 11,
          question: "What is cultural competence?",
          options: [
            "Ignoring culture",
            "Services sensitive to cultural differences",
            "Assuming sameness",
            "Only Western approaches"
          ],
          correctAnswer: 1,
          explanation: "Cultural competence means providing services sensitive to cultural differences."
        },
        {
          id: 12,
          question: "What is cultural humility?",
          options: [
            "Recognizing limits of cultural knowledge",
            "No learning needed",
            "Cultural superiority",
            "Knowing everything"
          ],
          correctAnswer: 0,
          explanation: "Cultural humility involves recognizing limits of your cultural knowledge and continuing to learn."
        },
        {
          id: 13,
          question: "What is first step in ethical decision-making?",
          options: [
            "Ask client decide",
            "Act immediately",
            "Ignore dilemma",
            "Identify the ethical problem"
          ],
          correctAnswer: 3,
          explanation: "First step is identifying what ethical principles are in conflict or concern."
        },
        {
          id: 14,
          question: "What is purpose of supervision?",
          options: [
            "Unnecessary",
            "Quality assurance and professional development",
            "Only administrative",
            "Only for beginners"
          ],
          correctAnswer: 1,
          explanation: "Supervision serves quality assurance, professional development, and client protection."
        },
        {
          id: 15,
          question: "What is autonomy?",
          options: [
            "Making decisions for clients",
            "Respecting client choice and self-determination",
            "Therapist control",
            "Ignoring preferences"
          ],
          correctAnswer: 1,
          explanation: "Autonomy means respecting clients' right to make their own choices."
        },
        {
          id: 16,
          question: "What is justice?",
          options: [
            "Unequal treatment",
            "Favoritism",
            "Only legal matters",
            "Fairness and equitable treatment"
          ],
          correctAnswer: 3,
          explanation: "Justice means treating clients fairly and equitably."
        },
        {
          id: 17,
          question: "What is fidelity?",
          options: [
            "No commitments",
            "Keeping promises and being trustworthy",
            "Changing agreements",
            "Breaking promises"
          ],
          correctAnswer: 1,
          explanation: "Fidelity means keeping promises and being trustworthy in professional relationships."
        },
        {
          id: 18,
          question: "What is HIPAA?",
          options: [
            "Health information privacy regulations",
            "Psychological theory",
            "Medical treatment",
            "Therapy technique"
          ],
          correctAnswer: 0,
          explanation: "HIPAA are federal regulations protecting health information privacy and security."
        },
        {
          id: 19,
          question: "When seek consultation?",
          options: [
            "Only for supervision",
            "Only legal issues",
            "Never",
            "Complex cases or ethical dilemmas"
          ],
          correctAnswer: 3,
          explanation: "Seek consultation for complex cases, ethical dilemmas, or when uncertain."
        },
        {
          id: 20,
          question: "Who responsible for supervisees' work?",
          options: [
            "No one",
            "Only supervisee",
            "Only client",
            "Supervisor shares responsibility"
          ],
          correctAnswer: 3,
          explanation: "Supervisors share professional responsibility for their supervisees' clinical work."
        }
      ]
    },
    {
      id: 6,
      title: "Professional Development and Self-Care",
      content: `
# Module 6: Professional Development and Self-Care

## The Reflective Practitioner
Being an effective clinical psychologist requires ongoing self-reflection and professional growth. Think of it as being both a scientist (applying research) and a practitioner (applying skills), while also being human (with your own needs and limits).

## Continuing Education
**Lifelong Learning:** Clinical knowledge constantly evolves-ongoing learning is essential.

**Staying Current:** Reading journals, attending workshops, learning new approaches.

**Specialization Development:** Developing expertise in specific areas over time.

**Cross-Training:** Learning from related fields (medicine, social work, neuroscience).

**Technology Updates:** Staying current with teletherapy, digital tools, and electronic records.

## Supervision and Consultation Throughout Career
**Different Supervision Needs:** Changes as you gain experience but remains valuable.

**Peer Consultation:** Regular meetings with colleagues for case discussion.

**Specialized Consultation:** Seeking experts for specific client concerns or techniques.

**Group Supervision:** Learning from multiple perspectives in group format.

**Mentorship:** Both being mentored and mentoring others.

## Self-Care as Ethical Imperative
**Burnout Prevention:** Regular self-care prevents impairment and protects clients.

**Vicarious Trauma Management:** Addressing impact of working with trauma.

**Compassion Fatigue:** Recognizing and addressing emotional exhaustion from helping.

**Work-Life Balance:** Maintaining healthy boundaries between work and personal life.

**Stress Management:** Regular practices to manage work stress.

## Personal Therapy for Clinicians
**Benefits:** Personal growth, addressing countertransference, experiencing therapy from client perspective.

**Ethical Considerations:** Maintaining boundaries with your own therapist.

**Timing:** During training, during stressful periods, or for personal growth.

**Choosing a Therapist:** Finding someone with appropriate expertise and good fit.

**Confidentiality:** Your therapy is confidential like any client's.

## Managing Professional Relationships
**Collegial Relationships:** Building supportive professional networks.

**Interdisciplinary Collaboration:** Working effectively with other professionals.

**Managing Conflicts:** Professional conflict resolution approaches.

**Professional Organizations:** Benefits of membership and involvement.

**Community Engagement:** Connecting with broader community professionally.

## Career Development
**Career Planning:** Setting professional goals and development plans.

**Specialization Paths:** Clinical, research, teaching, administration, etc.

**Publication and Presentation:** Contributing to professional knowledge.

**Leadership Development:** Growing into supervisory or administrative roles.

**Legacy Planning:** Considering long-term professional contributions.

## Personal Wellness Practices
**Physical Health:** Regular exercise, healthy eating, medical care.

**Mental Health:** Managing your own mental health proactively.

**Social Support:** Maintaining personal relationships outside work.

**Spiritual/Meaning:** Nurturing sense of purpose and meaning.

**Hobbies and Interests:** Engaging in activities unrelated to work.

**Rest and Recovery:** Adequate sleep, vacations, downtime.

## Recognizing and Addressing Impairment
**Signs of Impairment:** Decreased effectiveness, ethical lapses, personal distress.

**Self-Monitoring:** Regular check-ins about your professional functioning.

**Seeking Help Early:** Getting support at first signs of difficulty.

**Collegial Support:** Colleagues gently addressing concerns.

**Temporary Leave:** Taking time off when needed for recovery.

**Return to Work:** Structured return after impairment addressed.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is reflective practitioner?",
          options: [
            "Ongoing self-reflection and growth",
            "Never reflecting",
            "No learning needed",
            "Only following protocols"
          ],
          correctAnswer: 0,
          explanation: "Reflective practitioners engage in ongoing self-reflection and professional growth."
        },
        {
          id: 2,
          question: "Why lifelong learning important?",
          options: [
            "Only beginners learn",
            "Once trained, done",
            "Knowledge static",
            "Clinical knowledge constantly evolves"
          ],
          correctAnswer: 3,
          explanation: "Clinical knowledge constantly evolves, making lifelong learning essential."
        },
        {
          id: 3,
          question: "What is staying current?",
          options: [
            "Reading journals, attending workshops",
            "No updates needed",
            "Only personal experience",
            "Using only old methods"
          ],
          correctAnswer: 0,
          explanation: "Staying current involves reading journals, attending workshops, and learning new approaches."
        },
        {
          id: 4,
          question: "Why supervision valuable throughout career?",
          options: [
            "Only if required",
            "Changes but remains valuable",
            "Unnecessary later",
            "Only for students"
          ],
          correctAnswer: 1,
          explanation: "Supervision needs change with experience but remains valuable throughout career."
        },
        {
          id: 5,
          question: "What is peer consultation?",
          options: [
            "Only formal supervision",
            "Regular meetings with colleagues",
            "No consultation",
            "Only supervisor"
          ],
          correctAnswer: 1,
          explanation: "Peer consultation involves regular meetings with colleagues for case discussion and support."
        },
        {
          id: 6,
          question: "Why self-care ethical imperative?",
          options: [
            "Only for weak people",
            "Only personal choice",
            "Unimportant",
            "Prevents impairment and protects clients"
          ],
          correctAnswer: 3,
          explanation: "Self-care is ethical because it prevents professional impairment and protects clients."
        },
        {
          id: 7,
          question: "What is burnout?",
          options: [
            "Normal tiredness",
            "Motivation",
            "Emotional exhaustion from work stress",
            "Brief stress"
          ],
          correctAnswer: 2,
          explanation: "Burnout is emotional exhaustion and decreased effectiveness from chronic work stress."
        },
        {
          id: 8,
          question: "What is vicarious trauma?",
          options: [
            "Only client trauma",
            "Impact from hearing others' trauma",
            "No impact",
            "Only physical trauma"
          ],
          correctAnswer: 1,
          explanation: "Vicarious trauma is the impact on clinicians from working with trauma survivors."
        },
        {
          id: 9,
          question: "What is compassion fatigue?",
          options: [
            "Emotional exhaustion from helping",
            "Too much empathy",
            "Not caring",
            "No compassion"
          ],
          correctAnswer: 0,
          explanation: "Compassion fatigue is emotional exhaustion from continual helping of others in distress."
        },
        {
          id: 10,
          question: "Benefits of personal therapy for clinicians?",
          options: [
            "Personal growth and understanding client perspective",
            "Only if mandated",
            "No benefits",
            "Weakness"
          ],
          correctAnswer: 0,
          explanation: "Personal therapy offers growth, addresses countertransference, and provides client perspective."
        },
        {
          id: 11,
          question: "What are collegial relationships?",
          options: [
            "Supportive professional networks",
            "Only social",
            "No relationships",
            "Only competition"
          ],
          correctAnswer: 0,
          explanation: "Collegial relationships are supportive professional networks with peers."
        },
        {
          id: 12,
          question: "What is interdisciplinary collaboration?",
          options: [
            "Only same field",
            "Only psychology",
            "Isolated work",
            "Working with other professionals"
          ],
          correctAnswer: 3,
          explanation: "Interdisciplinary collaboration involves working effectively with professionals from other fields."
        },
        {
          id: 13,
          question: "What is career planning?",
          options: [
            "Setting professional goals and plans",
            "Only job search",
            "No planning",
            "Only starting out"
          ],
          correctAnswer: 0,
          explanation: "Career planning involves setting professional goals and development plans."
        },
        {
          id: 14,
          question: "What are specialization paths?",
          options: [
            "Clinical, research, teaching, administration",
            "No specializations",
            "Only one path",
            "Only clinical work"
          ],
          correctAnswer: 0,
          explanation: "Specialization paths include clinical work, research, teaching, administration, and others."
        },
        {
          id: 15,
          question: "Why physical health important?",
          options: [
            "Unimportant",
            "Affects professional functioning",
            "Only personal matter",
            "Unrelated to work"
          ],
          correctAnswer: 1,
          explanation: "Physical health affects energy, mood, and professional effectiveness."
        },
        {
          id: 16,
          question: "What is work-life balance?",
          options: [
            "Only personal life",
            "Only work",
            "Healthy boundaries between work and personal life",
            "No balance needed"
          ],
          correctAnswer: 2,
          explanation: "Work-life balance maintains healthy boundaries between professional and personal life."
        },
        {
          id: 17,
          question: "Signs of professional impairment?",
          options: [
            "Always effective",
            "No signs",
            "Perfect functioning",
            "Decreased effectiveness, ethical lapses"
          ],
          correctAnswer: 3,
          explanation: "Impairment signs include decreased effectiveness and ethical or professional lapses."
        },
        {
          id: 18,
          question: "What is self-monitoring?",
          options: [
            "Regular check-ins about functioning",
            "Only at reviews",
            "Never checking",
            "Only others monitor"
          ],
          correctAnswer: 0,
          explanation: "Self-monitoring involves regular personal check-ins about professional functioning."
        },
        {
          id: 19,
          question: "Why seek help early for difficulties?",
          options: [
            "Wait until crisis",
            "Never seek help",
            "Prevent more serious problems",
            "Only if required"
          ],
          correctAnswer: 2,
          explanation: "Seeking help early prevents minor difficulties from becoming serious problems."
        },
        {
          id: 20,
          question: "What is legacy planning?",
          options: [
            "No planning",
            "Only financial",
            "Only retirement",
            "Considering long-term professional contributions"
          ],
          correctAnswer: 3,
          explanation: "Legacy planning involves considering your long-term professional contributions and impact."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM (40 Questions - 6-7 questions from each module)
  finalExam: {
    id: "clinical-psychology-diploma-exam",
    title: "Clinical Psychology Diploma Final Exam",
    description: "Comprehensive exam covering all six diploma modules. Pass with 70% or higher to earn your diploma.",
    passingScore: 70,
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        question: "What is the purpose of clinical assessment?",
        options: [
          "Quickly solve problems",
          "Make people feel analyzed",
          "Systematically gather information to understand and plan treatment",
          "Label people"
        ],
        correctAnswer: 2,
        explanation: "Clinical assessment systematically gathers information to understand functioning and plan treatment.",
        module: 1
      },
      {
        id: 2,
        question: "What is a clinical interview?",
        options: [
          "Therapy session",
          "Structured, purposeful conversation",
          "Casual conversation",
          "Social chat"
        ],
        correctAnswer: 1,
        explanation: "A clinical interview is structured and purposeful, different from casual conversation.",
        module: 1
      },
      {
        id: 3,
        question: "What does diagnosis guide?",
        options: [
          "Personal opinions",
          "Treatment planning",
          "Judgment of character",
          "Social exclusion"
        ],
        correctAnswer: 1,
        explanation: "Diagnosis guides treatment planning and facilitates professional communication.",
        module: 1
      },
      {
        id: 4,
        question: "What is the biopsychosocial model?",
        options: [
          "Only psychological factors",
          "Biological, psychological, and social factors",
          "Only social factors",
          "Only biological factors"
        ],
        correctAnswer: 1,
        explanation: "Biopsychosocial model considers biological, psychological, and social factors.",
        module: 1
      },
      {
        id: 5,
        question: "What are symptom checklists?",
        options: [
          "Quick screens for specific concerns",
          "Complete diagnoses",
          "Treatment plans",
          "Personality tests"
        ],
        correctAnswer: 0,
        explanation: "Symptom checklists are quick screening tools for specific concerns.",
        module: 1
      },
      {
        id: 6,
        question: "How does culture affect assessment?",
        options: [
          "Only affects language",
          "No effect",
          "Unimportant factor",
          "Affects symptom expression and help-seeking"
        ],
        correctAnswer: 3,
        explanation: "Culture affects how symptoms are expressed and whether people seek help.",
        module: 1
      },
      {
        id: 7,
        question: "What is informed consent in assessment?",
        options: [
          "Secret testing",
          "Explaining purpose, procedures, and limits",
          "No explanation needed",
          "Assumption of agreement"
        ],
        correctAnswer: 1,
        explanation: "Informed consent means explaining assessment purpose, procedures, and limits.",
        module: 1
      },
      
      // Module 2 Questions (7)
      {
        id: 8,
        question: "What are evidence-based interventions?",
        options: [
          "Traditional methods only",
          "Whatever feels right",
          "Newest trends",
          "Approaches supported by scientific research"
        ],
        correctAnswer: 3,
        explanation: "Evidence-based interventions have scientific research demonstrating effectiveness.",
        module: 2
      },
      {
        id: 9,
        question: "What does CBT focus on?",
        options: [
          "Connections between thoughts, feelings, behaviors",
          "Only unconscious processes",
          "Only family systems",
          "Only past experiences"
        ],
        correctAnswer: 0,
        explanation: "CBT focuses on connections between thoughts, feelings, and behaviors.",
        module: 2
      },
      {
        id: 10,
        question: "What is cognitive restructuring?",
        options: [
          "Ignoring thoughts",
          "Identifying and changing unhelpful thoughts",
          "Suppressing thoughts",
          "Only accepting thoughts"
        ],
        correctAnswer: 1,
        explanation: "Cognitive restructuring involves identifying and challenging unhelpful thinking.",
        module: 2
      },
      {
        id: 11,
        question: "What is behavioral activation?",
        options: [
          "Reducing activity",
          "Only resting",
          "Increasing engagement in rewarding activities",
          "Only talking"
        ],
        correctAnswer: 2,
        explanation: "Behavioral activation increases rewarding activities to improve mood.",
        module: 2
      },
      {
        id: 12,
        question: "What is psychoeducation?",
        options: [
          "Keeping clients uninformed",
          "Teaching about condition and treatment",
          "Only listening",
          "Only giving advice"
        ],
        correctAnswer: 1,
        explanation: "Psychoeducation involves teaching clients about their condition and treatment.",
        module: 2
      },
      {
        id: 13,
        question: "What is collaborative goal setting?",
        options: [
          "Therapist decides goals",
          "Client and therapist work together on goals",
          "Family sets goals",
          "No goals needed"
        ],
        correctAnswer: 1,
        explanation: "Collaborative goal setting involves client and therapist working together.",
        module: 2
      },
      {
        id: 14,
        question: "What is competence in intervention?",
        options: [
          "Only using interventions with proper training",
          "Using any intervention",
          "Guessing what to do",
          "Copying others"
        ],
        correctAnswer: 0,
        explanation: "Competence means only delivering interventions you're properly trained to provide.",
        module: 2
      },
      
      // Module 3 Questions (6)
      {
        id: 15,
        question: "What is treatment planning?",
        options: [
          "Collaborative roadmap for therapy",
          "Clinician-only decision",
          "Standard protocol for all",
          "Fixed recipe"
        ],
        correctAnswer: 0,
        explanation: "Treatment planning is collaborative process creating therapy roadmap.",
        module: 3
      },
      {
        id: 16,
        question: "What does SMART stand for?",
        options: [
          "Strategic, Manageable, Appropriate, Reasonable, Targeted",
          "Significant, Meaningful, Achievable, Realistic, Timely",
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Simple, Meaningful, Actionable, Realistic, Timely"
        ],
        correctAnswer: 2,
        explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, Time-bound.",
        module: 3
      },
      {
        id: 17,
        question: "What is progress monitoring?",
        options: [
          "Only at end",
          "Regularly checking if interventions work",
          "Never checking",
          "Assuming progress"
        ],
        correctAnswer: 1,
        explanation: "Progress monitoring involves regularly checking whether interventions help.",
        module: 3
      },
      {
        id: 18,
        question: "When consider treatment adjustments?",
        options: [
          "Lack of progress after reasonable time",
          "Always change weekly",
          "Only client requests",
          "Never change"
        ],
        correctAnswer: 0,
        explanation: "Consider adjustments when there's lack of progress after reasonable time.",
        module: 3
      },
      {
        id: 19,
        question: "What is purpose of documentation?",
        options: [
          "Communication and continuity of care",
          "Secret records",
          "Only for supervisors",
          "Only billing"
        ],
        correctAnswer: 0,
        explanation: "Documentation serves communication, continuity, legal, and quality purposes.",
        module: 3
      },
      {
        id: 20,
        question: "What is termination planning?",
        options: [
          "Planning conclusion from beginning",
          "Only at end",
          "Never ending",
          "Surprise ending"
        ],
        correctAnswer: 0,
        explanation: "Termination planning considers therapy conclusion from beginning.",
        module: 3
      },
      
      // Module 4 Questions (6)
      {
        id: 21,
        question: "What is key with children and adolescents?",
        options: [
          "Only talking",
          "Matching developmental level",
          "Same as adults",
          "Ignoring development"
        ],
        correctAnswer: 1,
        explanation: "Treatment must match child's cognitive and emotional developmental level.",
        module: 4
      },
      {
        id: 22,
        question: "What is lifespan perspective with older adults?",
        options: [
          "Considering entire life history",
          "Only current issues",
          "Only aging problems",
          "Ignoring past"
        ],
        correctAnswer: 0,
        explanation: "Lifespan perspective considers person's entire life history and wisdom.",
        module: 4
      },
      {
        id: 23,
        question: "What is first with trauma survivors?",
        options: [
          "Immediate exposure",
          "Establishing safety",
          "Trauma processing",
          "Only talking"
        ],
        correctAnswer: 1,
        explanation: "Establishing safety comes first in trauma work.",
        module: 4
      },
      {
        id: 24,
        question: "What is cultural humility?",
        options: [
          "Ongoing process of learning",
          "Knowing everything",
          "Assuming sameness",
          "Ignoring culture"
        ],
        correctAnswer: 0,
        explanation: "Cultural humility is ongoing process of learning about different cultures.",
        module: 4
      },
      {
        id: 25,
        question: "What is systems perspective with families?",
        options: [
          "Only individual focus",
          "Ignoring relationships",
          "Only one person's view",
          "Viewing problems in relationship context"
        ],
        correctAnswer: 3,
        explanation: "Systems perspective views problems within relationship context.",
        module: 4
      },
      {
        id: 26,
        question: "What is multipartiality?",
        options: [
          "Only one perspective",
          "Taking sides",
          "Ignoring some",
          "Being fair to all members"
        ],
        correctAnswer: 3,
        explanation: "Multipartiality means being fair to all family members without taking sides.",
        module: 4
      },
      
      // Module 5 Questions (7)
      {
        id: 27,
        question: "What is beneficence?",
        options: [
          "Being neutral",
          "Doing good for clients",
          "Doing harm",
          "Avoiding action"
        ],
        correctAnswer: 1,
        explanation: "Beneficence means doing good and promoting client welfare.",
        module: 5
      },
      {
        id: 28,
        question: "What is nonmaleficence?",
        options: [
          "Doing no harm",
          "Causing harm",
          "Ignoring harm",
          "Risking harm"
        ],
        correctAnswer: 0,
        explanation: "Nonmaleficence means avoiding harm to clients.",
        module: 5
      },
      {
        id: 29,
        question: "What is informed consent?",
        options: [
          "Only verbal agreement",
          "No explanation needed",
          "Understanding treatment before consenting",
          "Assumed agreement"
        ],
        correctAnswer: 2,
        explanation: "Informed consent means clients understand treatment before agreeing.",
        module: 5
      },
      {
        id: 30,
        question: "What is mandated reporting?",
        options: [
          "Legal requirement to report abuse",
          "Never reporting",
          "Only serious crimes",
          "Optional reporting"
        ],
        correctAnswer: 0,
        explanation: "Mandated reporting is legal requirement to report suspected abuse.",
        module: 5
      },
      {
        id: 31,
        question: "What is duty to warn/protect?",
        options: [
          "Obligation when client threatens others",
          "No duty",
          "Only for police",
          "Optional action"
        ],
        correctAnswer: 0,
        explanation: "Duty to warn/protect is legal obligation when client threatens others.",
        module: 5
      },
      {
        id: 32,
        question: "What are confidentiality limits?",
        options: [
          "Any concern",
          "Danger to self/others, abuse reporting",
          "Only client permission",
          "No limits"
        ],
        correctAnswer: 1,
        explanation: "Confidentiality limits include danger to self/others and abuse reporting.",
        module: 5
      },
      {
        id: 33,
        question: "What is cultural competence?",
        options: [
          "Services sensitive to cultural differences",
          "Assuming sameness",
          "Ignoring culture",
          "Only Western approaches"
        ],
        correctAnswer: 0,
        explanation: "Cultural competence means services sensitive to cultural differences.",
        module: 5
      },
      
      // Module 6 Questions (7)
      {
        id: 34,
        question: "Why lifelong learning important?",
        options: [
          "Clinical knowledge constantly evolves",
          "Knowledge static",
          "Only beginners learn",
          "Once trained, done"
        ],
        correctAnswer: 0,
        explanation: "Clinical knowledge constantly evolves, requiring lifelong learning.",
        module: 6
      },
      {
        id: 35,
        question: "Why self-care ethical imperative?",
        options: [
          "Only for weak people",
          "Only personal choice",
          "Prevents impairment and protects clients",
          "Unimportant"
        ],
        correctAnswer: 2,
        explanation: "Self-care prevents professional impairment and protects clients.",
        module: 6
      },
      {
        id: 36,
        question: "What is burnout?",
        options: [
          "Emotional exhaustion from work stress",
          "Normal tiredness",
          "Brief stress",
          "Motivation"
        ],
        correctAnswer: 0,
        explanation: "Burnout is emotional exhaustion from chronic work stress.",
        module: 6
      },
      {
        id: 37,
        question: "Benefits of personal therapy for clinicians?",
        options: [
          "Weakness",
          "No benefits",
          "Only if mandated",
          "Personal growth and understanding client perspective"
        ],
        correctAnswer: 3,
        explanation: "Personal therapy offers growth and client perspective understanding.",
        module: 6
      },
      {
        id: 38,
        question: "What is peer consultation?",
        options: [
          "Regular meetings with colleagues",
          "Only supervisor",
          "No consultation",
          "Only formal supervision"
        ],
        correctAnswer: 0,
        explanation: "Peer consultation involves regular meetings with colleagues.",
        module: 6
      },
      {
        id: 39,
        question: "What is work-life balance?",
        options: [
          "Only personal life",
          "Healthy boundaries between work and personal life",
          "Only work",
          "No balance needed"
        ],
        correctAnswer: 1,
        explanation: "Work-life balance maintains healthy work-personal life boundaries.",
        module: 6
      },
      {
        id: 40,
        question: "Signs of professional impairment?",
        options: [
          "Decreased effectiveness, ethical lapses",
          "No signs",
          "Always effective",
          "Perfect functioning"
        ],
        correctAnswer: 0,
        explanation: "Impairment signs include decreased effectiveness and ethical lapses.",
        module: 6
      }
    ]
  }
};
