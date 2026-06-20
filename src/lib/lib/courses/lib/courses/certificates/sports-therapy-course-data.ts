export const sportsTherapyDiplomaCourse = {
  id: "sports-therapy-diploma",
  title: "Sports Therapy (Diploma)",
  description: "Advanced training in injury prevention, assessment, and rehabilitation for athletes and active individuals. Learn comprehensive therapeutic techniques and develop clinical reasoning skills for sports-related conditions.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "⚕️",
  badge: "Diploma",
  
  modules: [
    {
      id: 1,
      title: "Advanced Injury Assessment",
      completed: false,
      content: `# Comprehensive Sports Injury Evaluation

Welcome to Sports Therapy! This module builds on your foundational knowledge to develop advanced assessment skills for athletic injuries.

## **The SOAP Method Framework**

Professional sports therapists use the SOAP method for systematic assessment:
- **Subjective** - Athlete's description of injury and history
- **Objective** - Your physical examination findings
- **Assessment** - Clinical judgment and diagnosis
- **Plan** - Treatment strategy and goals

**Clinical Insight:** The subjective interview often provides 70% of diagnostic clues before you even touch the athlete. Listen carefully to their story.

## **Palpation Skills Development**

Advanced palpation involves more than just finding tender spots:
1. **Structural Palpation** - Identifying anatomical landmarks
2. **Functional Palpation** - Assessing tissue during movement
3. **Comparative Palpation** - Comparing injured vs. uninjured sides
4. **Temperature Assessment** - Feeling for heat differences

**Key Technique:** Use the pads of your fingers, not tips, for better sensitivity. Work systematically from superficial to deep tissues.

## **Special Orthopedic Tests**

Learn essential tests for common sports injuries:
- **Shoulder:** Apprehension test, Empty Can test
- **Knee:** Lachman test, McMurray test, Valgus/Varus stress
- **Ankle:** Anterior drawer test, Talar tilt
- **Spine:** Straight leg raise, Slump test

**Professional Note:** No single test is 100% diagnostic. Use test clusters (3+ positive tests) for higher accuracy in your assessments.`,

      quiz: [
        {
          id: 1,
          question: "What does the 'S' stand for in the SOAP method?",
          options: [
            "Systemic",
            "Symptomatic",
            "Subjective",
            "Structural"
          ],
          correctAnswer: 2,
          explanation: "Correct! Subjective refers to the athlete's own description of their injury and history."
        },
        {
          id: 2,
          question: "What percentage of diagnostic clues often comes from the subjective interview?",
          options: [
            "90%",
            "70%",
            "30%",
            "50%"
          ],
          correctAnswer: 1,
          explanation: "Right! The athlete's story provides most diagnostic information before physical examination."
        },
        {
          id: 3,
          question: "Which palpation type identifies anatomical landmarks?",
          options: [
            "Structural Palpation",
            "Functional Palpation",
            "Temperature Assessment",
            "Comparative Palpation"
          ],
          correctAnswer: 0,
          explanation: "Correct! Structural palpation locates bones, joints, and other fixed landmarks."
        },
        {
          id: 4,
          question: "What should you use for better sensitivity during palpation?",
          options: [
            "Fingertips only",
            "Pads of your fingers",
            "Back of your hand",
            "Thumb only"
          ],
          correctAnswer: 1,
          explanation: "Yes! Finger pads have more sensory receptors than fingertips for better tactile feedback."
        },
        {
          id: 5,
          question: "What is the Lachman test used to assess?",
          options: [
            "Hip range of motion",
            "Shoulder dislocation risk",
            "Knee ligament stability",
            "Ankle sprain severity"
          ],
          correctAnswer: 2,
          explanation: "Correct! The Lachman test evaluates anterior cruciate ligament (ACL) integrity in the knee."
        },
        {
          id: 6,
          question: "What does 'O' represent in the SOAP method?",
          options: [
            "Orthopedic tests",
            "Outcome measures",
            "Observation results",
            "Objective findings"
          ],
          correctAnswer: 3,
          explanation: "Right! Objective includes measurable examination findings and test results."
        },
        {
          id: 7,
          question: "Which test assesses for shoulder instability?",
          options: [
            "Straight leg raise",
            "Apprehension test",
            "McMurray test",
            "Talar tilt test"
          ],
          correctAnswer: 1,
          explanation: "Correct! The apprehension test checks for anterior shoulder instability."
        },
        {
          id: 8,
          question: "How many positive tests should cluster for higher diagnostic accuracy?",
          options: [
            "Two minimum",
            "Three or more",
            "One is sufficient",
            "Five required"
          ],
          correctAnswer: 1,
          explanation: "Yes! Multiple positive tests increase confidence in your assessment."
        },
        {
          id: 9,
          question: "Which palpation assesses tissue during movement?",
          options: [
            "Structural Palpation",
            "Temperature Assessment",
            "Comparative Palpation",
            "Functional Palpation"
          ],
          correctAnswer: 3,
          explanation: "Right! Functional palpation evaluates tissues while the athlete moves."
        },
        {
          id: 10,
          question: "What does the McMurray test detect?",
          options: [
            "Achilles tendon issues",
            "Hip labral tears",
            "Meniscal tears in knee",
            "Rotator cuff injuries"
          ],
          correctAnswer: 2,
          explanation: "Correct! The McMurray test helps identify meniscus damage in the knee."
        },
        {
          id: 11,
          question: "What should you work from during systematic palpation?",
          options: [
            "Only tender areas",
            "Random pattern",
            "Deep to superficial",
            "Superficial to deep tissues"
          ],
          correctAnswer: 3,
          explanation: "Yes! Starting superficially allows you to assess layer by layer without missing structures."
        },
        {
          id: 12,
          question: "What does the 'A' stand for in SOAP?",
          options: [
            "Acute findings",
            "Athlete's status",
            "Assessment",
            "Analysis"
          ],
          correctAnswer: 2,
          explanation: "Correct! Assessment is your clinical judgment and working diagnosis."
        },
        {
          id: 13,
          question: "Which test evaluates ankle ligament stability?",
          options: [
            "Anterior drawer test",
            "Lachman test",
            "Empty Can test",
            "Slump test"
          ],
          correctAnswer: 0,
          explanation: "Right! The anterior drawer test assesses anterior talofibular ligament in the ankle."
        },
        {
          id: 14,
          question: "What type of palpation compares injured vs. uninjured sides?",
          options: [
            "Comparative Palpation",
            "Structural Palpation",
            "Temperature Assessment",
            "Functional Palpation"
          ],
          correctAnswer: 0,
          explanation: "Correct! Always compare to the uninjured side to establish what's normal for that athlete."
        },
        {
          id: 15,
          question: "What does the Empty Can test assess?",
          options: [
            "ACL integrity",
            "Supraspinatus strength",
            "Hamstring flexibility",
            "Ankle stability"
          ],
          correctAnswer: 1,
          explanation: "Yes! This test specifically evaluates the supraspinatus muscle of the rotator cuff."
        },
        {
          id: 16,
          question: "What does the 'P' represent in SOAP?",
          options: [
            "Prognosis estimate",
            "Pain assessment",
            "Plan of treatment",
            "Prevention strategy"
          ],
          correctAnswer: 2,
          explanation: "Correct! Plan outlines your treatment approach and rehabilitation goals."
        },
        {
          id: 17,
          question: "Which test is used for spinal nerve tension?",
          options: [
            "Apprehension test",
            "Straight leg raise",
            "McMurray test",
            "Valgus stress test"
          ],
          correctAnswer: 1,
          explanation: "Right! Straight leg raise assesses sciatic nerve tension and lumbar spine issues."
        },
        {
          id: 18,
          question: "What assesses heat differences in tissues?",
          options: [
            "Structural Palpation",
            "Temperature Assessment",
            "Functional Palpation",
            "Comparative Palpation"
          ],
          correctAnswer: 1,
          explanation: "Correct! Increased local temperature often indicates inflammation or infection."
        },
        {
          id: 19,
          question: "What does the Talar tilt test evaluate?",
          options: [
            "Ankle ligament stability",
            "Knee collateral ligaments",
            "Hip impingement",
            "Shoulder range"
          ],
          correctAnswer: 0,
          explanation: "Yes! Talar tilt assesses calcaneofibular ligament stability in the ankle."
        },
        {
          id: 20,
          question: "Why is no single test 100% diagnostic?",
          options: [
            "All tests are equally inaccurate",
            "Equipment is never reliable",
            "Athletes always lie about symptoms",
            "Tests have limitations and false results"
          ],
          correctAnswer: 3,
          explanation: "Correct! All tests have sensitivity/specificity limitations, requiring clinical correlation."
        }
      ]
    },
    {
      id: 2,
      title: "Therapeutic Modalities",
      completed: false,
      content: `# Evidence-Based Treatment Applications

This module explores various therapeutic modalities and their appropriate uses in sports therapy practice.

## **Cryotherapy and Thermotherapy**

Understanding when to use cold vs. heat:
- **Cryotherapy (Cold)** - Acute injuries (first 48-72 hours), inflammation control, pain reduction
- **Thermotherapy (Heat)** - Chronic conditions, muscle relaxation, stiffness reduction, pre-activity

**Clinical Guidelines:** Remember PRICE for acute injuries: Protection, Rest, Ice, Compression, Elevation. Heat generally contraindicated in acute phase.

## **Electrotherapy Applications**

Modern electrotherapy options and indications:
1. **TENS** - Pain gate control, chronic pain management
2. **NMES** - Muscle re-education, atrophy prevention
3. **Interferential** - Deep pain relief, edema reduction
4. **Ultrasound** - Soft tissue healing, scar tissue management

**Safety First:** Always check contraindications like pacemakers, pregnancy, malignancy, or impaired sensation before using electrotherapy.

## **Manual Therapy Techniques**

Hands-on approaches for different conditions:
- **Soft Tissue Mobilization** - Myofascial release, trigger point therapy
- **Joint Mobilization** - Graded oscillations for stiffness
- **Traction** - Spinal or peripheral joint decompression
- **Massage Techniques** - Effleurage, petrissage, tapotement

**Professional Approach:** Match technique to tissue irritability. More acute = gentler techniques. Chronic = more vigorous approaches.`,

      quiz: [
        {
          id: 1,
          question: "What does PRICE stand for in acute injury management?",
          options: [
            "Prevention, Rest, Ice, Care, Elevation",
            "Pain Relief, Ice, Compression, Exercise",
            "Protection, Rest, Ice, Compression, Elevation",
            "Protection, Rehabilitation, Ice, Compression, Evaluation"
          ],
          correctAnswer: 2,
          explanation: "Correct! PRICE is the standard acute injury management protocol."
        },
        {
          id: 2,
          question: "When is cryotherapy typically indicated?",
          options: [
            "Muscle relaxation",
            "Pre-activity warm-up",
            "Acute injuries first 48-72 hours",
            "Chronic stiffness only"
          ],
          correctAnswer: 2,
          explanation: "Right! Cold therapy reduces inflammation and pain in the acute phase."
        },
        {
          id: 3,
          question: "What does TENS stand for?",
          options: [
            "Therapeutic Electrical Neural Stimulation",
            "Transdermal Electrical Neural Support",
            "Tissue Electrical Nerve Stimulation",
            "Transcutaneous Electrical Nerve Stimulation"
          ],
          correctAnswer: 3,
          explanation: "Correct! TENS uses electrical currents for pain relief through gate control theory."
        },
        {
          id: 4,
          question: "What is heat therapy generally contraindicated for?",
          options: [
            "Chronic muscle tension",
            "Morning stiffness",
            "Acute inflammatory phase",
            "Pre-exercise warm-up"
          ],
          correctAnswer: 2,
          explanation: "Yes! Heat can increase bleeding and swelling in acute injuries."
        },
        {
          id: 5,
          question: "What does NMES stand for?",
          options: [
            "Nerve Muscle Electrical Support",
            "Neurological Muscle Enhancement Stimulation",
            "Neuromuscular Electrical Stimulation",
            "Neural Modulation Electrical System"
          ],
          correctAnswer: 2,
          explanation: "Correct! NMES stimulates muscles directly to prevent atrophy or improve strength."
        },
        {
          id: 6,
          question: "What should you always check before using electrotherapy?",
          options: [
            "Only athlete's pain level",
            "Contraindications like pacemakers",
            "Treatment room temperature",
            "Equipment battery level"
          ],
          correctAnswer: 1,
          explanation: "Right! Safety requires checking for pacemakers, pregnancy, and other contraindications."
        },
        {
          id: 7,
          question: "What is thermotherapy best for?",
          options: [
            "Acute swelling reduction",
            "Bleeding control",
            "Chronic conditions and stiffness",
            "Fresh injuries"
          ],
          correctAnswer: 2,
          explanation: "Correct! Heat relaxes tissues and increases blood flow for chronic issues."
        },
        {
          id: 8,
          question: "Which technique uses graded joint oscillations?",
          options: [
            "Traction",
            "Soft Tissue Mobilization",
            "Joint Mobilization",
            "Massage"
          ],
          correctAnswer: 2,
          explanation: "Yes! Joint mobilizations use graded oscillatory movements to improve mobility."
        },
        {
          id: 9,
          question: "What is interferential therapy used for?",
          options: [
            "Cardiovascular training",
            "Surface pain only",
            "Deep pain relief",
            "Bone healing"
          ],
          correctAnswer: 2,
          explanation: "Right! Interferential currents penetrate deeper tissues for pain and edema management."
        },
        {
          id: 10,
          question: "What technique addresses myofascial restrictions?",
          options: [
            "Joint Mobilization",
            "Traction",
            "Cryotherapy",
            "Soft Tissue Mobilization"
          ],
          correctAnswer: 3,
          explanation: "Correct! Soft tissue techniques release fascial restrictions and trigger points."
        },
        {
          id: 11,
          question: "What does ultrasound therapy promote?",
          options: [
            "Nerve regeneration",
            "Bone fracture repair",
            "Soft tissue healing",
            "Cartilage growth"
          ],
          correctAnswer: 2,
          explanation: "Yes! Ultrasound uses sound waves to stimulate tissue repair at cellular level."
        },
        {
          id: 12,
          question: "What should guide manual therapy intensity?",
          options: [
            "Therapist's strength",
            "Time available",
            "Athlete's request",
            "Tissue irritability level"
          ],
          correctAnswer: 3,
          explanation: "Correct! Match technique vigor to how irritable the tissues are."
        },
        {
          id: 13,
          question: "What is tapotement?",
          options: [
            "A percussion massage technique",
            "A joint mobilization grade",
            "A cryotherapy method",
            "An electrotherapy setting"
          ],
          correctAnswer: 0,
          explanation: "Right! Tapotement includes cupping, hacking, and beating massage strokes."
        },
        {
          id: 14,
          question: "What is traction used for?",
          options: [
            "Inflammation reduction",
            "Muscle strengthening",
            "Pain gate control",
            "Joint decompression"
          ],
          correctAnswer: 3,
          explanation: "Correct! Traction separates joint surfaces to relieve pressure on structures."
        },
        {
          id: 15,
          question: "What is effleurage?",
          options: [
            "A gliding massage stroke",
            "A kneading technique",
            "A percussion method",
            "A vibration application"
          ],
          correctAnswer: 0,
          explanation: "Yes! Effleurage uses long, gliding strokes to warm tissues and promote circulation."
        },
        {
          id: 16,
          question: "What does chronic condition treatment allow?",
          options: [
            "No manual therapy",
            "Only electrotherapy",
            "More vigorous techniques",
            "Only gentle approaches"
          ],
          correctAnswer: 2,
          explanation: "Correct! Chronic tissues tolerate more aggressive treatment than acute injuries."
        },
        {
          id: 17,
          question: "What is petrissage?",
          options: [
            "A joint manipulation",
            "A kneading massage technique",
            "A gliding stroke",
            "A percussion method"
          ],
          correctAnswer: 1,
          explanation: "Right! Petrissage involves lifting, squeezing, and kneading soft tissues."
        },
        {
          id: 18,
          question: "What should be gentle in acute conditions?",
          options: [
            "All manual techniques",
            "Only cryotherapy",
            "Only thermotherapy",
            "Only electrotherapy"
          ],
          correctAnswer: 0,
          explanation: "Correct! Acute injuries require gentle approaches to avoid increasing inflammation."
        },
        {
          id: 19,
          question: "What does ultrasound help manage?",
          options: [
            "Bone density",
            "Scar tissue",
            "Cardiovascular health",
            "Neurological function"
          ],
          correctAnswer: 1,
          explanation: "Yes! Ultrasound can help soften and remodel scar tissue formation."
        },
        {
          id: 20,
          question: "What is the pain gate theory?",
          options: [
            "Joint mobilization effect",
            "TENS principle of pain relief",
            "Massage benefit",
            "Cryotherapy mechanism"
          ],
          correctAnswer: 1,
          explanation: "Correct! TENS works by stimulating large nerve fibers to 'close the gate' on pain signals."
        }
      ]
    },
    {
      id: 3,
      title: "Rehabilitation Programming",
      completed: false,
      content: `# Structured Recovery and Return to Sport

Learn to design progressive rehabilitation programs that safely return athletes to their sports.

## **Phases of Rehabilitation**

Effective rehab follows logical progression:
1. **Acute Phase** - Protection, pain/swelling control (days 1-3)
2. **Subacute Phase** - Early mobility, basic strengthening (days 4-14)
3. **Remodeling Phase** - Progressive loading, functional training (weeks 2-6)
4. **Return to Sport** - Sport-specific drills, performance testing (weeks 6+)

**Critical Concept:** Each phase has specific goals. Don't progress until current phase goals are achieved.

## **Exercise Progression Principles**

How to safely increase demands:
- **Pain Guidance** - Stay below significant pain threshold (3/10 max)
- **Load Management** - Gradually increase intensity, volume, frequency
- **Complexity Advancement** - Simple → Complex, Stable → Unstable
- **Specificity Development** - General → Sport-specific movements

**Professional Standard:** Document progression criteria clearly. Use objective measures, not just subjective feeling.

## **Functional Movement Integration**

Bridge from rehab exercises to sport performance:
- **Closed Chain Activities** - Weight-bearing exercises first
- **Plyometric Progressions** - Land → Jump → Hop → Bound
- **Agility Drills** - Straight line → Multi-directional
- **Sport-Specific Patterns** - Mimic actual sport movements

**Return-to-Sport Test:** Athlete should demonstrate 90%+ strength symmetry and pain-free sport movements before full return.`,

      quiz: [
        {
          id: 1,
          question: "What is the first phase of rehabilitation?",
          options: [
            "Remodeling Phase",
            "Acute Phase",
            "Return to Sport",
            "Subacute Phase"
          ],
          correctAnswer: 1,
          explanation: "Correct! Acute phase focuses on protection and initial healing."
        },
        {
          id: 2,
          question: "What pain threshold should rehab exercises stay below?",
          options: [
            "3 out of 10",
            "7 out of 10",
            "5 out of 10",
            "10 out of 10"
          ],
          correctAnswer: 0,
          explanation: "Right! Significant pain (above 3/10) can indicate tissue irritation."
        },
        {
          id: 3,
          question: "What does the subacute phase focus on?",
          options: [
            "Early mobility and basic strengthening",
            "Sport-specific training",
            "Maximum strength building",
            "Protection only"
          ],
          correctAnswer: 0,
          explanation: "Correct! Subacute phase introduces gentle movement and light resistance."
        },
        {
          id: 4,
          question: "When should you progress to next rehab phase?",
          options: [
            "After fixed time period",
            "After every session",
            "When athlete feels ready",
            "When current phase goals are achieved"
          ],
          correctAnswer: 3,
          explanation: "Yes! Progression depends on achieving specific criteria, not just time."
        },
        {
          id: 5,
          question: "What is the plyometric progression order?",
          options: [
            "Jump → Hop → Land → Bound",
            "Hop → Bound → Land → Jump",
            "Bound → Hop → Jump → Land",
            "Land → Jump → Hop → Bound"
          ],
          correctAnswer: 3,
          explanation: "Correct! Start with landing mechanics before progressing to more explosive movements."
        },
        {
          id: 6,
          question: "What should guide load increases?",
          options: [
            "Therapist's preference",
            "Available equipment",
            "Gradual progression principle",
            "Athlete's requests"
          ],
          correctAnswer: 2,
          explanation: "Right! Gradual, systematic increases prevent re-injury."
        },
        {
          id: 7,
          question: "What does the remodeling phase involve?",
          options: [
            "Complete rest",
            "Only pain management",
            "Sport competition",
            "Progressive loading and functional training"
          ],
          correctAnswer: 3,
          explanation: "Correct! Remodeling phase builds tissue strength and resilience."
        },
        {
          id: 8,
          question: "What type of exercises come first?",
          options: [
            "Plyometric jumps",
            "Open chain non-weight-bearing",
            "Sport-specific drills",
            "Closed chain weight-bearing"
          ],
          correctAnswer: 3,
          explanation: "Yes! Weight-bearing exercises are generally safer and more functional initially."
        },
        {
          id: 9,
          question: "What should progression criteria be based on?",
          options: [
            "Weather conditions",
            "Objective measures",
            "Time of day",
            "Subjective feeling only"
          ],
          correctAnswer: 1,
          explanation: "Right! Use measurable criteria like strength, range, or performance tests."
        },
        {
          id: 10,
          question: "What is the final rehabilitation phase?",
          options: [
            "Subacute Phase",
            "Return to Sport",
            "Remodeling Phase",
            "Acute Phase"
          ],
          correctAnswer: 1,
          explanation: "Correct! Return to sport phase prepares athlete for competition demands."
        },
        {
          id: 11,
          question: "What strength symmetry is needed before sport return?",
          options: [
            "75% minimum",
            "100% exactly",
            "50% minimum",
            "90% or more"
          ],
          correctAnswer: 3,
          explanation: "Yes! 90%+ strength symmetry reduces re-injury risk significantly."
        },
        {
          id: 12,
          question: "What progression goes from simple to complex?",
          options: [
            "Specificity Development",
            "Pain Guidance",
            "Load Management",
            "Complexity Advancement"
          ],
          correctAnswer: 3,
          explanation: "Correct! Start with simple movements before adding complexity."
        },
        {
          id: 13,
          question: "What should agility drills progress to?",
          options: [
            "Only jumping",
            "Only straight lines",
            "Multi-directional movements",
            "Only backward running"
          ],
          correctAnswer: 2,
          explanation: "Right! Sports require movements in all directions, not just forward."
        },
        {
          id: 14,
          question: "What does the acute phase typically last?",
          options: [
            "Weeks 1-2",
            "Days 1-3",
            "Weeks 2-6",
            "Days 4-14"
          ],
          correctAnswer: 1,
          explanation: "Correct! Acute phase is short, focusing on immediate post-injury management."
        },
        {
          id: 15,
          question: "What progression goes from stable to unstable?",
          options: [
            "Pain Guidance",
            "Load Management",
            "Complexity Advancement",
            "Specificity Development"
          ],
          correctAnswer: 2,
          explanation: "Yes! Progress from stable surfaces (floor) to unstable (balance pads) gradually."
        },
        {
          id: 16,
          question: "What should mimic actual sport movements?",
          options: [
            "Only basic exercises",
            "Sport-specific patterns",
            "Only stretching",
            "Only cardio"
          ],
          correctAnswer: 1,
          explanation: "Correct! Final stage rehab should replicate sport demands."
        },
        {
          id: 17,
          question: "What does subacute phase typically span?",
          options: [
            "Weeks 6+",
            "Weeks 2-6",
            "Days 4-14",
            "Days 1-3"
          ],
          correctAnswer: 2,
          explanation: "Right! Subacute phase covers early healing and initial mobilization."
        },
        {
          id: 18,
          question: "What progression goes from general to specific?",
          options: [
            "Specificity Development",
            "Load Management",
            "Complexity Advancement",
            "Pain Guidance"
          ],
          correctAnswer: 0,
          explanation: "Correct! Start with general fitness, progress to sport-specific demands."
        },
        {
          id: 19,
          question: "What should be pain-free before sport return?",
          options: [
            "All sport movements",
            "Only walking",
            "Only stretching",
            "Only resting state"
          ],
          correctAnswer: 0,
          explanation: "Yes! Athlete must perform sport skills pain-free before competition."
        },
        {
          id: 20,
          question: "How many rehabilitation phases are there?",
          options: [
            "Four",
            "Three",
            "Five",
            "Six"
          ],
          correctAnswer: 0,
          explanation: "Correct! The four phases provide structured progression from injury to sport."
        }
      ]
    },
    {
      id: 4,
      title: "Common Sports Injuries",
      completed: false,
      content: `# Recognition and Management of Athletic Conditions

Learn to identify, assess, and manage the most frequent injuries encountered in sports therapy practice.

## **Upper Extremity Injuries**

Common shoulder and arm conditions:
- **Rotator Cuff Pathology** - Impingement, tendinopathy, tears
- **Shoulder Instability** - Anterior dislocation, multidirectional laxity
- **Elbow Tendinopathy** - Tennis elbow (lateral), Golfer's elbow (medial)
- **Wrist/Hand Injuries** - Sprains, fractures, de Quervain's tenosynovitis

**Sport-Specific Note:** Overhead athletes (baseball, tennis, swimming) have unique injury patterns requiring specialized management approaches.

## **Lower Extremity Injuries**

Frequent leg and foot conditions:
- **Knee Ligament Injuries** - ACL, MCL, PCL tears
- **Meniscal Tears** - Medial/lateral, bucket handle tears
- **Ankle Sprains** - Inversion (most common), eversion, high ankle
- **Achilles Tendinopathy** - Insertional, mid-portion
- **Plantar Fasciitis** - Heel pain, morning stiffness

**Prevention Focus:** Many lower extremity injuries relate to biomechanical factors - assess alignment, strength imbalances, and movement patterns.

## **Spinal Conditions in Athletes**

Back and neck issues in sports:
- **Lumbar Disc Pathology** - Bulges, herniations, sciatica
- **Spondylolysis** - Stress fracture in pars interarticularis
- **Muscle Strains** - Erector spinae, quadratus lumborum
- **Cervical Issues** - Stingers/burners, whiplash-type injuries

**Red Flags:** Know warning signs requiring immediate referral: bowel/bladder changes, progressive weakness, severe night pain, trauma history.`,

      quiz: [
        {
          id: 1,
          question: "What is the most common type of ankle sprain?",
          options: [
            "Eversion sprain",
            "Syndesmotic sprain",
            "Inversion sprain",
            "High ankle sprain"
          ],
          correctAnswer: 2,
          explanation: "Correct! Inversion (rolling outward) accounts for 85% of ankle sprains."
        },
        {
          id: 2,
          question: "Which athletes have unique shoulder injury patterns?",
          options: [
            "Cyclists only",
            "Swimmers only",
            "Overhead athletes",
            "Runners only"
          ],
          correctAnswer: 2,
          explanation: "Right! Baseball, tennis, volleyball, and swimming place unique demands on shoulders."
        },
        {
          id: 3,
          question: "What is tennis elbow medically called?",
          options: [
            "Medial epicondylitis",
            "Olecranon bursitis",
            "Cubital tunnel syndrome",
            "Lateral epicondylitis"
          ],
          correctAnswer: 3,
          explanation: "Correct! Tennis elbow affects the lateral (outer) elbow where tendons attach."
        },
        {
          id: 4,
          question: "What is a common stress fracture in young athletes?",
          options: [
            "Tibial stress fracture",
            "Femoral neck fracture",
            "Spondylolysis",
            "Metatarsal fracture"
          ],
          correctAnswer: 2,
          explanation: "Yes! Spondylolysis is a pars interarticularis fracture common in gymnastics and football."
        },
        {
          id: 5,
          question: "What does ACL stand for?",
          options: [
            "Acute Capsular Ligament",
            "Anterior Collateral Ligament",
            "Anterior Cruciate Ligament",
            "Articular Cartilage Layer"
          ],
          correctAnswer: 2,
          explanation: "Correct! The ACL is a key knee stabilizer often injured in cutting sports."
        },
        {
          id: 6,
          question: "What should you assess for injury prevention?",
          options: [
            "Biomechanical factors",
            "Only sport type",
            "Only pain levels",
            "Only age"
          ],
          correctAnswer: 0,
          explanation: "Right! Alignment, strength balance, and movement patterns influence injury risk."
        },
        {
          id: 7,
          question: "What is golfer's elbow?",
          options: [
            "Ulnar nerve entrapment",
            "Lateral epicondylitis",
            "Medial epicondylitis",
            "Radial tunnel syndrome"
          ],
          correctAnswer: 2,
          explanation: "Correct! Golfer's elbow affects the medial (inner) elbow tendons."
        },
        {
          id: 8,
          question: "What are warning signs requiring immediate referral?",
          options: [
            "Occasional clicking",
            "Morning stiffness",
            "Mild soreness",
            "Bowel/bladder changes"
          ],
          correctAnswer: 3,
          explanation: "Yes! Neurological symptoms like bowel/bladder issues require urgent medical attention."
        },
        {
          id: 9,
          question: "What causes plantar fasciitis pain?",
          options: [
            "Ankle pain",
            "Knee referred pain",
            "Toe pain only",
            "Heel and arch pain"
          ],
          correctAnswer: 3,
          explanation: "Right! Plantar fasciitis typically causes heel pain worse with first morning steps."
        },
        {
          id: 10,
          question: "What is a 'stinger' or 'burner'?",
          options: [
            "Wrist sprain",
            "Cervical nerve injury",
            "Elbow fracture",
            "Shoulder dislocation"
          ],
          correctAnswer: 1,
          explanation: "Correct! These are brachial plexus injuries causing arm burning/numbness."
        },
        {
          id: 11,
          question: "What percentage of ankle sprains are inversion type?",
          options: [
            "50%",
            "10%",
            "30%",
            "85%"
          ],
          correctAnswer: 3,
          explanation: "Yes! Inversion sprains are by far the most common ankle injury."
        },
        {
          id: 12,
          question: "What does MCL stand for?",
          options: [
            "Muscular Capsular Ligament",
            "Medial Cartilaginous Layer",
            "Medial Collateral Ligament",
            "Middle Cruciate Ligament"
          ],
          correctAnswer: 2,
          explanation: "Correct! The MCL stabilizes the inner knee against valgus forces."
        },
        {
          id: 13,
          question: "What is de Quervain's tenosynovitis?",
          options: [
            "Thumb/wrist tendon inflammation",
            "Ankle sprain",
            "Shoulder impingement",
            "Elbow tendon issue"
          ],
          correctAnswer: 0,
          explanation: "Right! This affects thumb tendons, common in racquet sports and new parents."
        },
        {
          id: 14,
          question: "What requires immediate medical referral?",
          options: [
            "Progressive weakness",
            "Weather-related pain",
            "Minor soreness",
            "Occasional stiffness"
          ],
          correctAnswer: 0,
          explanation: "Correct! Progressive neurological symptoms indicate potentially serious conditions."
        },
        {
          id: 15,
          question: "What is Achilles tendinopathy?",
          options: [
            "Shoulder tendon tear",
            "Knee tendon problem",
            "Heel cord tendon issue",
            "Hip tendon injury"
          ],
          correctAnswer: 2,
          explanation: "Yes! This affects the large tendon connecting calf muscles to heel bone."
        },
        {
          id: 16,
          question: "What are red flag symptoms?",
          options: [
            "Severe night pain",
            "Morning stiffness",
            "Weather sensitivity",
            "Exercise-induced pain"
          ],
          correctAnswer: 0,
          explanation: "Correct! Severe unrelenting night pain can indicate serious pathology."
        },
        {
          id: 17,
          question: "What does PCL stand for?",
          options: [
            "Primary Collateral Ligament",
            "Posterior Cruciate Ligament",
            "Posterior Capsular Ligament",
            "Patellar Cartilage Layer"
          ],
          correctAnswer: 1,
          explanation: "Right! The PCL prevents backward tibial movement, injured in dashboard injuries."
        },
        {
          id: 18,
          question: "What is sciatica?",
          options: [
            "Knee referred pain",
            "Leg pain from nerve compression",
            "Hip joint arthritis",
            "Low back muscle strain"
          ],
          correctAnswer: 1,
          explanation: "Correct! Sciatica involves radiating leg pain from lumbar nerve root irritation."
        },
        {
          id: 19,
          question: "What is a bucket handle meniscal tear?",
          options: [
            "Small stable tear",
            "Large displaced tear",
            "Radial tear",
            "Degenerative tear"
          ],
          correctAnswer: 1,
          explanation: "Yes! This tear pattern can cause locking and requires different management."
        },
        {
          id: 20,
          question: "How many injury categories were discussed?",
          options: [
            "Two",
            "Three",
            "Four",
            "Five"
          ],
          correctAnswer: 1,
          explanation: "Correct! Upper extremity, lower extremity, and spinal conditions."
        }
      ]
    },
    {
      id: 5,
      title: "Sports Nutrition and Hydration",
      completed: false,
      content: `# Fueling Performance and Recovery

Understand the nutritional needs of athletes and how proper fueling impacts performance, recovery, and injury prevention.

## **Macronutrient Requirements**

Optimal ratios for different sports:
- **Carbohydrates** - Primary fuel source (45-65% of calories)
- **Proteins** - Muscle repair and building (10-35%)
- **Fats** - Energy, hormone production, absorption (20-35%)

**Timing Matters:** Pre-exercise carbs fuel performance, post-exercise protein aids recovery, and consistent hydration maintains function.

## **Hydration Strategies**

Preventing dehydration and hyponatremia:
- **Daily Needs** - 30-35 ml per kg body weight baseline
- **Exercise Replacement** - 400-800 ml per hour during activity
- **Electrolyte Balance** - Sodium, potassium, magnesium replacement
- **Monitoring** - Urine color, body weight changes, thirst cues

**Performance Fact:** As little as 2% dehydration can impair performance. Athletes should drink to thirst plus a little extra.

## **Supplementation Considerations**

Evidence-based supplement use:
- **Generally Useful** - Protein powders, creatine, caffeine, beta-alanine
- **Situation-Specific** - Iron (for deficiency), vitamin D (low sunlight)
- **Limited Evidence** - Most single herbs, proprietary blends
- **Potentially Harmful** - Stimulant stacks, prohormones, excessive doses

**Safety First:** Recommend third-party tested supplements only. Educate athletes about WADA-banned substances in their sports.`,

      quiz: [
        {
          id: 1,
          question: "What are carbohydrates' primary role for athletes?",
          options: [
            "Vitamin absorption",
            "Muscle building only",
            "Hormone production",
            "Primary fuel source"
          ],
          correctAnswer: 3,
          explanation: "Correct! Carbs provide readily available energy for muscular work."
        },
        {
          id: 2,
          question: "What percentage dehydration impairs performance?",
          options: [
            "2%",
            "5%",
            "10%",
            "15%"
          ],
          correctAnswer: 0,
          explanation: "Right! Even mild dehydration affects strength, endurance, and cognitive function."
        },
        {
          id: 3,
          question: "What does protein primarily support?",
          options: [
            "Hydration status",
            "Muscle repair and building",
            "Joint lubrication",
            "Immediate energy"
          ],
          correctAnswer: 1,
          explanation: "Correct! Protein provides amino acids for tissue repair and synthesis."
        },
        {
          id: 4,
          question: "When should athletes consume carbohydrates?",
          options: [
            "Only post-exercise",
            "Randomly timed",
            "Pre-exercise for fuel",
            "Only during sleep"
          ],
          correctAnswer: 2,
          explanation: "Yes! Pre-exercise carbs top up glycogen stores for optimal performance."
        },
        {
          id: 5,
          question: "What is hyponatremia?",
          options: [
            "Low blood sodium",
            "Dehydration",
            "High blood sugar",
            "Iron deficiency"
          ],
          correctAnswer: 0,
          explanation: "Correct! Hyponatremia occurs from excessive water intake without electrolyte replacement."
        },
        {
          id: 6,
          question: "What should hydration be based on?",
          options: [
            "Fixed schedule only",
            "Thirst plus extra",
            "Coach's instruction",
            "Teammate's habits"
          ],
          correctAnswer: 1,
          explanation: "Right! Drink to thirst plus additional fluids in hot conditions or intense exercise."
        },
        {
          id: 7,
          question: "What role do fats play?",
          options: [
            "Only vitamin C storage",
            "Only muscle building",
            "Energy and hormone production",
            "Only hydration"
          ],
          correctAnswer: 2,
          explanation: "Correct! Fats provide sustained energy and are essential for hormone synthesis."
        },
        {
          id: 8,
          question: "What is generally useful supplementation?",
          options: [
            "Protein powders",
            "All prohormones",
            "All herbal blends",
            "All stimulants"
          ],
          correctAnswer: 0,
          explanation: "Yes! Protein supplements can help meet increased needs conveniently."
        },
        {
          id: 9,
          question: "How much fluid per hour during exercise?",
          options: [
            "2000+ ml",
            "1000-1500 ml",
            "100-200 ml",
            "400-800 ml"
          ],
          correctAnswer: 3,
          explanation: "Right! This range matches typical sweat rates for most athletes."
        },
        {
          id: 10,
          question: "When does protein aid recovery?",
          options: [
            "Before bed only",
            "Pre-exercise only",
            "During exercise",
            "Post-exercise"
          ],
          correctAnswer: 3,
          explanation: "Correct! Post-exercise protein supports muscle repair and adaptation."
        },
        {
          id: 11,
          question: "What should you recommend for supplements?",
          options: [
            "Third-party tested products",
            "All natural products",
            "Cheapest options",
            "Most advertised brands"
          ],
          correctAnswer: 0,
          explanation: "Yes! Third-party testing ensures purity and accurate labeling."
        },
        {
          id: 12,
          question: "What is baseline daily fluid need calculation?",
          options: [
            "Body weight in pounds as ounces",
            "30-35 ml per kg body weight",
            "8 glasses fixed",
            "One liter minimum"
          ],
          correctAnswer: 1,
          explanation: "Correct! This formula personalizes hydration needs based on body size."
        },
        {
          id: 13,
          question: "What is creatine used for?",
          options: [
            "Joint health",
            "Hydration only",
            "Sleep improvement",
            "Strength and power improvement"
          ],
          correctAnswer: 3,
          explanation: "Right! Creatine enhances high-intensity performance and recovery."
        },
        {
          id: 14,
          question: "What should athletes be educated about?",
          options: [
            "Only protein timing",
            "Only calorie counting",
            "Only carb loading",
            "WADA-banned substances"
          ],
          correctAnswer: 3,
          explanation: "Correct! Athletes must know which supplements could cause doping violations."
        },
        {
          id: 15,
          question: "What electrolyte is crucial during exercise?",
          options: [
            "Iron only",
            "Zinc only",
            "Sodium",
            "Calcium only"
          ],
          correctAnswer: 2,
          explanation: "Yes! Sodium replacement is key for maintaining fluid balance and preventing hyponatremia."
        },
        {
          id: 16,
          question: "What is situation-specific supplementation?",
          options: [
            "Caffeine for children",
            "Iron for deficiency",
            "Creatine for endurance",
            "Protein for everyone"
          ],
          correctAnswer: 1,
          explanation: "Correct! Iron supplements should only be used when deficiency is confirmed."
        },
        {
          id: 17,
          question: "How can hydration be monitored?",
          options: [
            "Only sweat rate",
            "Urine color",
            "Only thirst",
            "Only weight"
          ],
          correctAnswer: 1,
          explanation: "Right! Pale yellow urine generally indicates good hydration status."
        },
        {
          id: 18,
          question: "What has limited evidence for effectiveness?",
          options: [
            "Caffeine",
            "Creatine",
            "Most single herbs",
            "Protein powder"
          ],
          correctAnswer: 2,
          explanation: "Correct! Many herbal supplements lack strong research support for athletic performance."
        },
        {
          id: 19,
          question: "What macronutrient range is for fats?",
          options: [
            "5-10% of calories",
            "45-65% of calories",
            "10-35% of calories",
            "20-35% of calories"
          ],
          correctAnswer: 3,
          explanation: "Yes! Healthy fats should comprise 20-35% of total calorie intake."
        },
        {
          id: 20,
          question: "What organization bans substances in sports?",
          options: [
            "FDA only",
            "CDC",
            "USDA",
            "WADA"
          ],
          correctAnswer: 3,
          explanation: "Correct! World Anti-Doping Agency maintains the prohibited substances list."
        }
      ]
    },
    {
      id: 6,
      title: "Professional Practice and Ethics",
      completed: false,
      content: `# Standards and Responsibilities in Sports Therapy

Learn the professional conduct, legal considerations, and ethical decision-making required in sports therapy practice.

## **Scope of Practice Boundaries**

Understanding what sports therapists can and cannot do:
- **Within Scope** - Assessment, rehabilitation, taping, basic emergency care
- **Beyond Scope** - Diagnosis (medical), prescription, surgery, imaging interpretation
- **Referral Pathways** - When and how to refer to physicians, specialists
- **Collaborative Care** - Working with coaches, athletic trainers, physiotherapists

**Legal Note:** Practice within your qualifications and jurisdiction's regulations. Document all assessments and treatments clearly.

## **Informed Consent Process**

Essential elements for ethical practice:
1. **Information Disclosure** - Explain procedures, risks, benefits, alternatives
2. **Understanding** - Ensure athlete comprehends information
3. **Voluntariness** - Free from coercion or undue influence
4. **Competence** - Athlete has capacity to consent
5. **Documentation** - Record consent obtained

**Special Populations:** Minors require parental consent. Concussed athletes may have impaired decision-making capacity.

## **Confidentiality and Privacy**

Protecting athlete information:
- **HIPAA/GDPR Compliance** - Legal requirements for health information
- **Sharing Information** - Only with consent or legal requirement
- **Team Dynamics** - Balancing individual privacy with team needs
- **Digital Security** - Protecting electronic records and communications

**Ethical Dilemma:** What if an athlete's injury could risk team safety? Balance confidentiality with duty of care to others.`,

      quiz: [
        {
          id: 1,
          question: "What is within a sports therapist's scope?",
          options: [
            "Interpreting X-rays",
            "Prescribing medication",
            "Medical diagnosis",
            "Assessment and rehabilitation"
          ],
          correctAnswer: 3,
          explanation: "Correct! Assessment and rehab are core sports therapy skills."
        },
        {
          id: 2,
          question: "What must be obtained before treatment?",
          options: [
            "Payment first",
            "Informed consent",
            "Coach approval",
            "Team doctor referral"
          ],
          correctAnswer: 1,
          explanation: "Right! Informed consent is an ethical and often legal requirement."
        },
        {
          id: 3,
          question: "What is beyond sports therapy scope?",
          options: [
            "Medical diagnosis",
            "Taping techniques",
            "Exercise prescription",
            "Movement assessment"
          ],
          correctAnswer: 0,
          explanation: "Correct! Diagnosis is a medical act requiring physician training."
        },
        {
          id: 4,
          question: "Who requires parental consent?",
          options: [
            "Only adults",
            "All athletes",
            "Only professionals",
            "Minors"
          ],
          correctAnswer: 3,
          explanation: "Yes! Minors cannot provide legal consent, requiring parent/guardian agreement."
        },
        {
          id: 5,
          question: "What does HIPAA protect?",
          options: [
            "Only research data",
            "Health information privacy",
            "Only team strategies",
            "Only payment information"
          ],
          correctAnswer: 1,
          explanation: "Correct! HIPAA regulates protected health information in the US."
        },
        {
          id: 6,
          question: "What should you always document clearly?",
          options: [
            "Only successful treatments",
            "Only athlete complaints",
            "Only positive outcomes",
            "Assessments and treatments"
          ],
          correctAnswer: 3,
          explanation: "Right! Complete documentation protects both athlete and therapist."
        },
        {
          id: 7,
          question: "What is informed consent based on?",
          options: [
            "Team's schedule",
            "Understanding of information",
            "Therapist's experience",
            "Athlete's athletic ability"
          ],
          correctAnswer: 1,
          explanation: "Correct! The athlete must comprehend risks, benefits, and alternatives."
        },
        {
          id: 8,
          question: "When can information be shared without consent?",
          options: [
            "Legal requirement",
            "Coach's request",
            "Media inquiry",
            "Team convenience"
          ],
          correctAnswer: 0,
          explanation: "Yes! Legal requirements override confidentiality in specific situations."
        },
        {
          id: 9,
          question: "What should practice be within?",
          options: [
            "Athlete's expectations",
            "Coach's preferences",
            "Qualifications and regulations",
            "Team budget"
          ],
          correctAnswer: 2,
          explanation: "Right! Always work within your certified competencies and local laws."
        },
        {
          id: 10,
          question: "What might impair decision-making capacity?",
          options: [
            "Sport type",
            "Minor soreness",
            "Concussion",
            "Fitness level"
          ],
          correctAnswer: 2,
          explanation: "Correct! Concussion can affect cognitive function and judgment."
        },
        {
          id: 11,
          question: "What should be free from coercion?",
          options: [
            "Exercise selection",
            "Consent voluntariness",
            "Treatment choice",
            "All decisions"
          ],
          correctAnswer: 1,
          explanation: "Yes! Athletes must feel free to accept or refuse treatment without pressure."
        },
        {
          id: 12,
          question: "What balances individual privacy with team needs?",
          options: [
            "Ethical team dynamics",
            "Only team safety",
            "Only confidentiality",
            "Only coach's authority"
          ],
          correctAnswer: 0,
          explanation: "Correct! Sometimes team safety requires limited information sharing."
        },
        {
          id: 13,
          question: "What is a key element of informed consent?",
          options: [
            "Therapist's reputation",
            "Treatment effectiveness",
            "Equipment quality",
            "Information disclosure"
          ],
          correctAnswer: 3,
          explanation: "Right! Athletes must know what you're proposing and why."
        },
        {
          id: 14,
          question: "What protects electronic records?",
          options: [
            "Only verbal communication",
            "Only memory",
            "Only paper records",
            "Digital security measures"
          ],
          correctAnswer: 3,
          explanation: "Correct! Electronic health records require appropriate security protocols."
        },
        {
          id: 15,
          question: "What requires referral to physicians?",
          options: [
            "Only chronic conditions",
            "Only major injuries",
            "All injuries",
            "Conditions beyond scope"
          ],
          correctAnswer: 3,
          explanation: "Yes! Know when to refer for medical diagnosis or management."
        },
        {
          id: 16,
          question: "What does GDPR regulate in Europe?",
          options: [
            "Only medical devices",
            "Only training methods",
            "Data protection and privacy",
            "Only supplement sales"
          ],
          correctAnswer: 2,
          explanation: "Correct! GDPR provides strong data protection for EU citizens."
        },
        {
          id: 17,
          question: "What is an ethical dilemma example?",
          options: [
            "Routine assessment",
            "Injury risk to team safety",
            "Standard exercise prescription",
            "Basic taping application"
          ],
          correctAnswer: 1,
          explanation: "Right! Balancing individual privacy with others' safety creates ethical challenges."
        },
        {
          id: 18,
          question: "What should ensure comprehension?",
          options: [
            "Understanding element",
            "Only translator use",
            "Only verbal explanation",
            "Only written forms"
          ],
          correctAnswer: 0,
          explanation: "Correct! Consent requires actual understanding, not just signature."
        },
        {
          id: 19,
          question: "Who might sports therapists collaborate with?",
          options: [
            "Coaches and athletic trainers",
            "Only physicians",
            "Only athletes",
            "Only other therapists"
          ],
          correctAnswer: 0,
          explanation: "Yes! Sports therapy often involves multidisciplinary teamwork."
        },
        {
          id: 20,
          question: "How many informed consent elements were listed?",
          options: [
            "Three",
            "Five",
            "Four",
            "Six"
          ],
          correctAnswer: 1,
          explanation: "Correct! Information, understanding, voluntariness, competence, and documentation."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Sports Therapy Diploma Final Exam",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What does the 'S' stand for in the SOAP method?",
        options: [
          "Systemic",
          "Subjective",
          "Structural",
          "Symptomatic"
        ],
        correctAnswer: 1,
        explanation: "Correct! Subjective information comes from the athlete's description."
      },
      {
        id: 2,
        question: "What does PRICE stand for in acute injury management?",
        options: [
          "Pain Relief, Ice, Compression, Exercise",
          "Protection, Rest, Ice, Compression, Elevation",
          "Protection, Rehabilitation, Ice, Compression, Evaluation",
          "Prevention, Rest, Ice, Care, Elevation"
        ],
        correctAnswer: 1,
        explanation: "Right! PRICE is standard acute injury protocol."
      },
      {
        id: 3,
        question: "What is the first phase of rehabilitation?",
        options: [
          "Remodeling Phase",
          "Acute Phase",
          "Subacute Phase",
          "Return to Sport"
        ],
        correctAnswer: 1,
        explanation: "Correct! Acute phase focuses on initial protection and healing."
      },
      {
        id: 4,
        question: "What is the most common type of ankle sprain?",
        options: [
          "High ankle sprain",
          "Syndesmotic sprain",
          "Eversion sprain",
          "Inversion sprain"
        ],
        correctAnswer: 3,
        explanation: "Yes! Inversion sprains account for about 85% of ankle injuries."
      },
      {
        id: 5,
        question: "What are carbohydrates' primary role for athletes?",
        options: [
          "Hormone production",
          "Muscle building only",
          "Vitamin absorption",
          "Primary fuel source"
        ],
        correctAnswer: 3,
        explanation: "Correct! Carbs provide energy for muscular work."
      },
      {
        id: 6,
        question: "What is within a sports therapist's scope?",
        options: [
          "Medical diagnosis",
          "Assessment and rehabilitation",
          "Prescribing medication",
          "Interpreting X-rays"
        ],
        correctAnswer: 1,
        explanation: "Right! Assessment and rehab are core sports therapy skills."
      },
      {
        id: 7,
        question: "What percentage of diagnostic clues comes from subjective interview?",
        options: [
          "30%",
          "70%",
          "90%",
          "50%"
        ],
        correctAnswer: 1,
        explanation: "Correct! The athlete's story provides most diagnostic information."
      },
      {
        id: 8,
        question: "When is cryotherapy typically indicated?",
        options: [
          "Pre-activity warm-up",
          "Chronic stiffness only",
          "Acute injuries first 48-72 hours",
          "Muscle relaxation"
        ],
        correctAnswer: 2,
        explanation: "Yes! Cold reduces inflammation and pain in acute phase."
      },
      {
        id: 9,
        question: "What pain threshold should rehab exercises stay below?",
        options: [
          "10 out of 10",
          "7 out of 10",
          "3 out of 10",
          "5 out of 10"
        ],
        correctAnswer: 2,
        explanation: "Correct! Pain above 3/10 may indicate tissue irritation."
      },
      {
        id: 10,
        question: "Which athletes have unique shoulder injury patterns?",
        options: [
          "Runners only",
          "Swimmers only",
          "Cyclists only",
          "Overhead athletes"
        ],
        correctAnswer: 3,
        explanation: "Right! Baseball, tennis, volleyball athletes need specialized shoulder care."
      },
      {
        id: 11,
        question: "What percentage dehydration impairs performance?",
        options: [
          "10%",
          "15%",
          "2%",
          "5%"
        ],
        correctAnswer: 2,
        explanation: "Correct! Even mild dehydration affects performance."
      },
      {
        id: 12,
        question: "What must be obtained before treatment?",
        options: [
          "Coach approval",
          "Payment first",
          "Informed consent",
          "Team doctor referral"
        ],
        correctAnswer: 2,
        explanation: "Yes! Informed consent is an ethical and legal requirement."
      },
      {
        id: 13,
        question: "Which palpation identifies anatomical landmarks?",
        options: [
          "Comparative Palpation",
          "Structural Palpation",
          "Temperature Assessment",
          "Functional Palpation"
        ],
        correctAnswer: 1,
        explanation: "Correct! Structural palpation locates bones and fixed landmarks."
      },
      {
        id: 14,
        question: "What does TENS stand for?",
        options: [
          "Therapeutic Electrical Neural Stimulation",
          "Transdermal Electrical Neural Support",
          "Transcutaneous Electrical Nerve Stimulation",
          "Tissue Electrical Nerve Stimulation"
        ],
        correctAnswer: 2,
        explanation: "Right! TENS uses electrical currents for pain relief."
      },
      {
        id: 15,
        question: "When should you progress to next rehab phase?",
        options: [
          "After every session",
          "When athlete feels ready",
          "After fixed time period",
          "When current phase goals are achieved"
        ],
        correctAnswer: 3,
        explanation: "Correct! Progression depends on achieving specific criteria."
      },
      {
        id: 16,
        question: "What is tennis elbow medically called?",
        options: [
          "Medial epicondylitis",
          "Olecranon bursitis",
          "Lateral epicondylitis",
          "Cubital tunnel syndrome"
        ],
        correctAnswer: 2,
        explanation: "Yes! Tennis elbow affects lateral elbow tendons."
      },
      {
        id: 17,
        question: "What does protein primarily support?",
        options: [
          "Immediate energy",
          "Muscle repair and building",
          "Hydration status",
          "Joint lubrication"
        ],
        correctAnswer: 1,
        explanation: "Correct! Protein provides amino acids for tissue repair."
      },
      {
        id: 18,
        question: "What is beyond sports therapy scope?",
        options: [
          "Exercise prescription",
          "Taping techniques",
          "Movement assessment",
          "Medical diagnosis"
        ],
        correctAnswer: 3,
        explanation: "Right! Diagnosis requires medical training."
      },
      {
        id: 19,
        question: "What is the Lachman test used to assess?",
        options: [
          "Hip range of motion",
          "Ankle sprain severity",
          "Shoulder dislocation risk",
          "Knee ligament stability"
        ],
        correctAnswer: 3,
        explanation: "Correct! Lachman test evaluates ACL integrity."
      },
      {
        id: 20,
        question: "What is heat therapy generally contraindicated for?",
        options: [
          "Acute inflammatory phase",
          "Chronic muscle tension",
          "Pre-exercise warm-up",
          "Morning stiffness"
        ],
        correctAnswer: 0,
        explanation: "Yes! Heat can increase bleeding in acute injuries."
      },
      {
        id: 21,
        question: "What is the plyometric progression order?",
        options: [
          "Hop → Bound → Land → Jump",
          "Jump → Hop → Land → Bound",
          "Bound → Hop → Jump → Land",
          "Land → Jump → Hop → Bound"
        ],
        correctAnswer: 3,
        explanation: "Correct! Start with landing mechanics first."
      },
      {
        id: 22,
        question: "What is a common stress fracture in young athletes?",
        options: [
          "Metatarsal fracture",
          "Femoral neck fracture",
          "Spondylolysis",
          "Tibial stress fracture"
        ],
        correctAnswer: 2,
        explanation: "Right! Spondylolysis affects lumbar spine in gymnasts, football players."
      },
      {
        id: 23,
        question: "What is hyponatremia?",
        options: [
          "High blood sugar",
          "Low blood sodium",
          "Dehydration",
          "Iron deficiency"
        ],
        correctAnswer: 1,
        explanation: "Correct! Excessive water without electrolytes causes hyponatremia."
      },
      {
        id: 24,
        question: "Who requires parental consent?",
        options: [
          "Only professionals",
          "Only adults",
          "Minors",
          "All athletes"
        ],
        correctAnswer: 2,
        explanation: "Yes! Minors cannot provide legal consent."
      },
      {
        id: 25,
        question: "How many positive tests should cluster for diagnostic accuracy?",
        options: [
          "Two minimum",
          "Three or more",
          "One is sufficient",
          "Five required"
        ],
        correctAnswer: 1,
        explanation: "Correct! Multiple tests increase confidence in assessment."
      },
      {
        id: 26,
        question: "What should you always check before using electrotherapy?",
        options: [
          "Treatment room temperature",
          "Only athlete's pain level",
          "Equipment battery level",
          "Contraindications like pacemakers"
        ],
        correctAnswer: 3,
        explanation: "Right! Safety requires checking for contraindications."
      },
      {
        id: 27,
        question: "What strength symmetry is needed before sport return?",
        options: [
          "90% or more",
          "100% exactly",
          "50% minimum",
          "75% minimum"
        ],
        correctAnswer: 0,
        explanation: "Correct! 90%+ symmetry reduces re-injury risk."
      },
      {
        id: 28,
        question: "What does ACL stand for?",
        options: [
          "Anterior Collateral Ligament",
          "Anterior Cruciate Ligament",
          "Acute Capsular Ligament",
          "Articular Cartilage Layer"
        ],
        correctAnswer: 1,
        explanation: "Yes! ACL is key knee stabilizer often injured."
      },
      {
        id: 29,
        question: "When should athletes consume carbohydrates?",
        options: [
          "Only post-exercise",
          "Randomly timed",
          "Only during sleep",
          "Pre-exercise for fuel"
        ],
        correctAnswer: 3,
        explanation: "Correct! Pre-exercise carbs fuel performance."
      },
      {
        id: 30,
        question: "What does HIPAA protect?",
        options: [
          "Only research data",
          "Only team strategies",
          "Health information privacy",
          "Only payment information"
        ],
        correctAnswer: 2,
        explanation: "Right! HIPAA regulates protected health information."
      },
      {
        id: 31,
        question: "What assesses for shoulder instability?",
        options: [
          "McMurray test",
          "Talar tilt test",
          "Apprehension test",
          "Straight leg raise"
        ],
        correctAnswer: 2,
        explanation: "Correct! Apprehension test checks anterior shoulder instability."
      },
      {
        id: 32,
        question: "Which technique uses graded joint oscillations?",
        options: [
          "Massage",
          "Soft Tissue Mobilization",
          "Joint Mobilization",
          "Traction"
        ],
        correctAnswer: 2,
        explanation: "Yes! Joint mobilizations use graded oscillatory movements."
      },
      {
        id: 33,
        question: "What does the subacute phase focus on?",
        options: [
          "Early mobility and basic strengthening",
          "Maximum strength building",
          "Protection only",
          "Sport-specific training"
        ],
        correctAnswer: 0,
        explanation: "Correct! Subacute phase introduces gentle movement."
      },
      {
        id: 34,
        question: "What should you assess for injury prevention?",
        options: [
          "Only age",
          "Only sport type",
          "Biomechanical factors",
          "Only pain levels"
        ],
        correctAnswer: 2,
        explanation: "Right! Alignment and movement patterns influence injury risk."
      },
      {
        id: 35,
        question: "What should hydration be based on?",
        options: [
          "Teammate's habits",
          "Coach's instruction",
          "Fixed schedule only",
          "Thirst plus extra"
        ],
        correctAnswer: 3,
        explanation: "Correct! Drink to thirst plus additional in hot conditions."
      },
      {
        id: 36,
        question: "What should you always document clearly?",
        options: [
          "Only athlete complaints",
          "Assessments and treatments",
          "Only successful treatments",
          "Only positive outcomes"
        ],
        correctAnswer: 1,
        explanation: "Yes! Complete documentation protects everyone involved."
      },
      {
        id: 37,
        question: "What type of palpation assesses tissue during movement?",
        options: [
          "Comparative Palpation",
          "Functional Palpation",
          "Structural Palpation",
          "Temperature Assessment"
        ],
        correctAnswer: 1,
        explanation: "Correct! Functional palpation evaluates tissues during motion."
      },
      {
        id: 38,
        question: "What is interferential therapy used for?",
        options: [
          "Deep pain relief",
          "Surface pain only",
          "Cardiovascular training",
          "Bone healing"
        ],
        correctAnswer: 0,
        explanation: "Right! Interferential currents penetrate deeper tissues."
      },
      {
        id: 39,
        question: "What is the final rehabilitation phase?",
        options: [
          "Subacute Phase",
          "Return to Sport",
          "Remodeling Phase",
          "Acute Phase"
        ],
        correctAnswer: 1,
        explanation: "Correct! Return to sport phase prepares for competition."
      },
      {
        id: 40,
        question: "What are warning signs requiring immediate referral?",
        options: [
          "Morning stiffness",
          "Mild soreness",
          "Occasional clicking",
          "Bowel/bladder changes"
        ],
        correctAnswer: 3,
        explanation: "Yes! Neurological symptoms require urgent medical attention."
      }
    ]
  }
};
