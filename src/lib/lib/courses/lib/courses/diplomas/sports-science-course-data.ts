// sports-science-diploma.ts
export const sportsScienceDiploma = {
  id: "sports-science-diploma",
  title: "Sports Science (Diploma)",
  description: "Advanced study of human performance, exercise physiology, biomechanics, and sports psychology. Builds upon personal training fundamentals to develop expertise in optimizing athletic performance and specialized training methodologies.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🏃‍♂️",
  badge: "Diploma",
  prerequisites: ["personal-training-certificate"],
  modules: [
    {
      id: 1,
      title: "Advanced Exercise Physiology",
      content: `# Module 1: Advanced Exercise Physiology

Welcome to advanced sports science! This module explores the sophisticated physiological adaptations that occur during exercise training.

## Energy Systems in Detail

**Three Primary Energy Systems:**

**1. Phosphagen System (ATP-CP System)**
- Provides immediate energy for explosive movements
- Lasts 0-10 seconds at maximum effort
- Used in weightlifting, sprinting, jumping
- Limited by creatine phosphate stores

**2. Glycolytic System (Anaerobic System)**
- Breaks down glucose without oxygen
- Provides energy for 30 seconds to 2 minutes
- Produces lactic acid as byproduct
- Used in 400m runs, 100m swims

**3. Oxidative System (Aerobic System)**
- Uses oxygen to break down carbohydrates and fats
- Provides long-term energy for sustained activity
- Most efficient energy production
- Used in endurance sports, team sports

## Cardiorespiratory Adaptations

**Heart Adaptations:**
- Increased left ventricle volume
- Enhanced stroke volume efficiency
- Improved cardiac output
- Lower resting heart rate

**Lung Adaptations:**
- Increased lung capacity
- Improved oxygen diffusion
- Enhanced respiratory muscle endurance
- Better ventilation efficiency

**Blood Adaptations:**
- Increased red blood cell production
- Enhanced oxygen-carrying capacity
- Improved blood volume regulation
- Better waste product removal

## Neuromuscular Adaptations

**Neural Adaptations:**
- Improved motor unit recruitment
- Enhanced synchronization of motor units
- Increased firing rate of motor neurons
- Better intermuscular coordination

**Muscle Fiber Adaptations:**
- Type I (slow-twitch) endurance improvements
- Type II (fast-twitch) power improvements
- Increased muscle cross-sectional area
- Enhanced metabolic enzyme activity

## Hormonal Responses to Exercise

**Key Exercise Hormones:**
- **Cortisol:** Stress hormone that mobilizes energy
- **Testosterone:** Promotes muscle protein synthesis
- **Growth Hormone:** Stimulates tissue repair and growth
- **Insulin:** Regulates glucose uptake and storage
- **Epinephrine:** Increases heart rate and energy availability

Understanding these physiological principles enables precise training program design for specific performance outcomes.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which energy system provides immediate energy for explosive movements?",
          options: [
            "Lipolytic System",
            "Oxidative System",
            "Glycolytic System",
            "Phosphagen System"
          ],
          correctAnswer: 3,
          explanation: "The Phosphagen (ATP-CP) system provides immediate energy for high-intensity, short-duration activities."
        },
        {
          id: 2,
          question: "How long does the Phosphagen System provide maximum energy?",
          options: [
            "10-30 minutes",
            "0-10 seconds",
            "2-5 minutes",
            "30-60 seconds"
          ],
          correctAnswer: 1,
          explanation: "This system is extremely powerful but depletes quickly, lasting only up to 10 seconds at maximum effort."
        },
        {
          id: 3,
          question: "What is the primary fuel for the Glycolytic System?",
          options: [
            "Glucose",
            "Amino acids",
            "Creatine phosphate",
            "Fatty acids"
          ],
          correctAnswer: 0,
          explanation: "The glycolytic system breaks down glucose without oxygen to produce energy rapidly."
        },
        {
          id: 4,
          question: "What byproduct does the Glycolytic System produce?",
          options: [
            "Water",
            "Lactic acid",
            "Ammonia",
            "Carbon dioxide"
          ],
          correctAnswer: 1,
          explanation: "Lactic acid accumulation contributes to muscle fatigue during high-intensity anaerobic exercise."
        },
        {
          id: 5,
          question: "Which system uses oxygen to break down fuels?",
          options: [
            "Oxidative System",
            "All of the above",
            "Glycolytic System",
            "Phosphagen System"
          ],
          correctAnswer: 0,
          explanation: "The oxidative (aerobic) system requires oxygen and is the most efficient energy-producing pathway."
        },
        {
          id: 6,
          question: "What heart adaptation improves stroke volume?",
          options: [
            "Smaller chamber size",
            "Thicker heart walls",
            "Increased left ventricle volume",
            "Faster heart rate"
          ],
          correctAnswer: 2,
          explanation: "Increased left ventricle volume allows more blood filling and thus greater stroke volume per beat."
        },
        {
          id: 7,
          question: "What is a common cardiorespiratory adaptation?",
          options: [
            "Lower resting heart rate",
            "Higher resting blood pressure",
            "Reduced lung capacity",
            "Decreased blood volume"
          ],
          correctAnswer: 0,
          explanation: "Training enhances heart efficiency, allowing the same cardiac output with fewer beats at rest."
        },
        {
          id: 8,
          question: "What improves with lung adaptations?",
          options: [
            "Bone density",
            "Digestive efficiency",
            "Blood clotting",
            "Oxygen diffusion"
          ],
          correctAnswer: 3,
          explanation: "Enhanced oxygen diffusion allows more efficient gas exchange between lungs and bloodstream."
        },
        {
          id: 9,
          question: "What blood adaptation enhances performance?",
          options: [
            "Increased red blood cell production",
            "Reduced hemoglobin",
            "Decreased plasma volume",
            "Thicker blood consistency"
          ],
          correctAnswer: 0,
          explanation: "More red blood cells increase oxygen-carrying capacity, improving aerobic performance."
        },
        {
          id: 10,
          question: "What neural adaptation improves strength?",
          options: [
            "Reduced nerve sensitivity",
            "Fewer nerve endings",
            "Slower nerve conduction",
            "Improved motor unit recruitment"
          ],
          correctAnswer: 3,
          explanation: "Better motor unit recruitment allows more muscle fibers to be activated simultaneously."
        },
        {
          id: 11,
          question: "What is enhanced motor unit synchronization?",
          options: [
            "Motor units firing together",
            "Reflex speed increase",
            "Nerve cell division",
            "Muscle fiber enlargement"
          ],
          correctAnswer: 0,
          explanation: "Synchronized firing allows more coordinated and powerful muscle contractions."
        },
        {
          id: 12,
          question: "Which are Type I muscle fibers?",
          options: [
            "Intermediate fibers",
            "Fast-twitch fibers",
            "Elastic fibers",
            "Slow-twitch fibers"
          ],
          correctAnswer: 3,
          explanation: "Type I fibers are slow-twitch, fatigue-resistant fibers ideal for endurance activities."
        },
        {
          id: 13,
          question: "What do Type II fibers specialize in?",
          options: [
            "Coordination",
            "Endurance only",
            "Power and speed",
            "Flexibility"
          ],
          correctAnswer: 2,
          explanation: "Type II fast-twitch fibers generate rapid, powerful contractions for explosive movements."
        },
        {
          id: 14,
          question: "Which hormone mobilizes energy during stress?",
          options: [
            "Testosterone",
            "Insulin",
            "Cortisol",
            "Estrogen"
          ],
          correctAnswer: 2,
          explanation: "Cortisol helps mobilize glucose and fatty acids for energy during exercise and stress."
        },
        {
          id: 15,
          question: "What does testosterone promote?",
          options: [
            "Muscle protein synthesis",
            "Water retention",
            "Fat storage",
            "Bone breakdown"
          ],
          correctAnswer: 0,
          explanation: "Testosterone stimulates muscle growth and repair through increased protein synthesis."
        },
        {
          id: 16,
          question: "What stimulates tissue repair?",
          options: [
            "Cortisol",
            "Thyroxine",
            "Adrenaline",
            "Growth hormone"
          ],
          correctAnswer: 3,
          explanation: "Growth hormone promotes tissue repair, muscle growth, and fat metabolism during recovery."
        },
        {
          id: 17,
          question: "What regulates glucose uptake?",
          options: [
            "Cortisol",
            "Insulin",
            "Testosterone",
            "Epinephrine"
          ],
          correctAnswer: 1,
          explanation: "Insulin facilitates glucose uptake into cells for energy production and storage."
        },
        {
          id: 18,
          question: "What increases heart rate during exercise?",
          options: [
            "Epinephrine",
            "Growth hormone",
            "Insulin",
            "Testosterone"
          ],
          correctAnswer: 0,
          explanation: "Epinephrine (adrenaline) prepares the body for exercise by increasing heart rate and energy availability."
        },
        {
          id: 19,
          question: "What is cardiac output?",
          options: [
            "Blood pressure × resistance",
            "Volume × pressure",
            "Oxygen uptake × efficiency",
            "Heart rate × stroke volume"
          ],
          correctAnswer: 3,
          explanation: "Cardiac output measures total blood volume pumped by the heart per minute."
        },
        {
          id: 20,
          question: "What enhances intermuscular coordination?",
          options: [
            "Neural adaptations",
            "Cardiovascular fitness",
            "Muscle growth only",
            "Flexibility training"
          ],
          correctAnswer: 0,
          explanation: "Neural adaptations improve how different muscles work together for efficient movement."
        }
      ]
    },
    {
      id: 2,
      title: "Biomechanics of Human Movement",
      content: `# Module 2: Biomechanics of Human Movement

Biomechanics applies physics principles to understand human movement. This knowledge optimizes performance and prevents injuries.

## Mechanical Principles

**Forces and Motion:**
- **Newton's Laws** applied to human movement
- **Force production** and application vectors
- **Ground reaction forces** during locomotion
- **Center of mass** and stability relationships

**Levers in the Body:**
- **First-class levers:** Neck extension (fulcrum between force and load)
- **Second-class levers:** Calf raises (load between fulcrum and force)
- **Third-class levers:** Bicep curls (force between fulcrum and load)
- Most body levers are third-class, favoring speed over force

## Gait Analysis

**Walking Gait Cycle:**
1. **Heel strike:** Initial contact
2. **Foot flat:** Loading response
3. **Midstance:** Single leg support
4. **Heel off:** Propulsion begins
5. **Toe off:** Push-off phase
6. **Swing phase:** Leg advancement

**Running Gait Differences:**
- No double support phase
- Flight phase present
- Greater ground reaction forces
- Different joint angle patterns
- Increased muscle activation

## Joint Biomechanics

**Joint Forces and Moments:**
- **Compressive forces:** Joint surfaces pushed together
- **Shear forces:** Parallel to joint surfaces
- **Torsional forces:** Rotational stresses
- **Bending moments:** Causes joint flexion/extension

**Common Injury Mechanisms:**
- Excessive compressive loading
- Repetitive shear stress
- Sudden torsional trauma
- Chronic bending overload

## Movement Efficiency

**Economy of Movement:**
- Minimizing energy expenditure for given speed
- Optimizing stride length and frequency
- Reducing unnecessary movements
- Improving force transmission

**Technique Optimization:**
- Proper joint alignment
- Optimal muscle sequencing
- Efficient force application
- Reduced energy leaks

**Biomechanical Analysis Tools:**
- Motion capture systems
- Force platform measurements
- Electromyography (muscle activity)
- Pressure distribution mapping

Understanding biomechanics allows coaches to refine technique, improve efficiency, and prevent injuries in athletes.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What physics principles apply to human movement?",
          options: [
            "Newton's Laws",
            "Einstein's Theory",
            "Quantum Mechanics",
            "Thermodynamics only"
          ],
          correctAnswer: 0,
          explanation: "Newton's Laws of Motion provide the foundation for understanding forces and movement in biomechanics."
        },
        {
          id: 2,
          question: "What are ground reaction forces?",
          options: [
            "Air resistance forces",
            "Muscle contraction forces",
            "Gravity's effect only",
            "Forces exerted by ground on body"
          ],
          correctAnswer: 3,
          explanation: "Ground reaction forces are equal and opposite to forces the body applies to the ground during movement."
        },
        {
          id: 3,
          question: "What affects stability?",
          options: [
            "Center of mass position",
            "Joint flexibility",
            "Muscle size only",
            "Breathing pattern"
          ],
          correctAnswer: 0,
          explanation: "Lower center of mass and larger base of support increase stability during movement."
        },
        {
          id: 4,
          question: "What type of lever is most common in the body?",
          options: [
            "First-class levers",
            "Fourth-class levers",
            "Second-class levers",
            "Third-class levers"
          ],
          correctAnswer: 3,
          explanation: "Most body levers are third-class, providing speed advantage at the expense of force."
        },
        {
          id: 5,
          question: "What characterizes third-class levers?",
          options: [
            "Load between fulcrum and force",
            "Fulcrum between force and load",
            "Force between fulcrum and load",
            "Equal force and load"
          ],
          correctAnswer: 2,
          explanation: "Third-class levers have the effort (muscle force) applied between the fulcrum (joint) and load."
        },
        {
          id: 6,
          question: "What is the first phase of walking gait?",
          options: [
            "Foot flat",
            "Heel strike",
            "Toe off",
            "Swing phase"
          ],
          correctAnswer: 1,
          explanation: "Heel strike initiates the gait cycle as the heel makes initial contact with the ground."
        },
        {
          id: 7,
          question: "What happens during midstance?",
          options: [
            "Single leg support",
            "Both feet on ground",
            "Push-off preparation",
            "Flight phase"
          ],
          correctAnswer: 0,
          explanation: "Midstance is when body weight is directly over the supporting foot during single-leg support."
        },
        {
          id: 8,
          question: "What distinguishes running gait?",
          options: [
            "Flight phase present",
            "Less muscle activation",
            "Slower movements",
            "Double support phase"
          ],
          correctAnswer: 0,
          explanation: "Running includes a flight phase where neither foot contacts the ground, unlike walking."
        },
        {
          id: 9,
          question: "What are compressive forces?",
          options: [
            "Rotational stresses",
            "Bending movements",
            "Parallel sliding forces",
            "Joint surfaces pushed together"
          ],
          correctAnswer: 3,
          explanation: "Compressive forces push joint surfaces together, common in weight-bearing activities."
        },
        {
          id: 10,
          question: "What are shear forces?",
          options: [
            "Rotational stress",
            "Bending stress",
            "Perpendicular compression",
            "Parallel to joint surfaces"
          ],
          correctAnswer: 3,
          explanation: "Shear forces act parallel to joint surfaces and can damage ligaments and cartilage."
        },
        {
          id: 11,
          question: "What is torsional force?",
          options: [
            "Compression stress",
            "Rotational stress",
            "Shear stress",
            "Bending stress"
          ],
          correctAnswer: 1,
          explanation: "Torsional forces involve twisting that can cause spiral fractures and ligament tears."
        },
        {
          id: 12,
          question: "What causes joint bending?",
          options: [
            "Bending moments",
            "Compressive forces",
            "Shear forces",
            "Torsional forces"
          ],
          correctAnswer: 0,
          explanation: "Bending moments create flexion or extension at joints through applied forces."
        },
        {
          id: 13,
          question: "What is economy of movement?",
          options: [
            "Increasing muscle size",
            "Minimizing energy expenditure",
            "Reducing rest time",
            "Maximizing speed only"
          ],
          correctAnswer: 1,
          explanation: "Movement economy refers to the energy cost of maintaining a given speed or workload."
        },
        {
          id: 14,
          question: "What optimizes stride efficiency?",
          options: [
            "Random variation",
            "Maximum frequency only",
            "Maximum length only",
            "Optimal length and frequency"
          ],
          correctAnswer: 3,
          explanation: "Each individual has an optimal combination of stride length and frequency for minimal energy cost."
        },
        {
          id: 15,
          question: "What are energy leaks?",
          options: [
            "Poor hydration",
            "Unnecessary movements wasting energy",
            "Inadequate warm-up",
            "Nutritional deficiencies"
          ],
          correctAnswer: 1,
          explanation: "Energy leaks occur when movement inefficiencies waste energy that should propel the body forward."
        },
        {
          id: 16,
          question: "What improves force transmission?",
          options: [
            "Proper joint alignment",
            "Flexible joints only",
            "Strong muscles only",
            "Light body weight"
          ],
          correctAnswer: 0,
          explanation: "Proper alignment allows optimal force transfer through the kinetic chain without energy loss."
        },
        {
          id: 17,
          question: "What measures muscle activity?",
          options: [
            "Electromyography",
            "Force platforms",
            "Motion capture",
            "Pressure mapping"
          ],
          correctAnswer: 0,
          explanation: "EMG detects electrical activity in muscles, indicating timing and intensity of activation."
        },
        {
          id: 18,
          question: "What analyzes ground forces?",
          options: [
            "Motion capture",
            "EMG systems",
            "Force platforms",
            "Video analysis"
          ],
          correctAnswer: 2,
          explanation: "Force platforms measure ground reaction forces in three dimensions during movement."
        },
        {
          id: 19,
          question: "What maps pressure distribution?",
          options: [
            "Pressure measurement systems",
            "Heart rate monitors",
            "EMG electrodes",
            "Motion capture"
          ],
          correctAnswer: 0,
          explanation: "Pressure mapping systems show how force is distributed across foot or hand surfaces."
        },
        {
          id: 20,
          question: "What prevents injuries biomechanically?",
          options: [
            "Proper force distribution",
            "Rapid movements",
            "Minimum strength",
            "Maximum flexibility"
          ],
          correctAnswer: 0,
          explanation: "Proper biomechanics distribute forces optimally across tissues, reducing injury risk."
        }
      ]
    },
    {
      id: 3,
      title: "Sports Nutrition Science",
      content: `# Module 3: Sports Nutrition Science

Optimal nutrition fuels performance, enhances recovery, and supports adaptation. This module covers evidence-based nutritional strategies for athletes.

## Macronutrient Requirements

**Carbohydrates:**
- Primary fuel for moderate to high-intensity exercise
- **Daily requirements:** 3-12 g/kg body weight
- **Timing:** Pre-, during, and post-exercise
- **Types:** Simple sugars for immediate energy, complex carbs for sustained energy
- **Glycogen storage:** Liver and muscle glycogen reserves

**Proteins:**
- Building blocks for muscle repair and growth
- **Daily requirements:** 1.2-2.0 g/kg body weight
- **Timing:** Evenly distributed throughout day
- **Quality:** Complete proteins with all essential amino acids
- **Anabolic response:** Maximized with 20-40g doses post-exercise

**Fats:**
- Energy source for low-intensity exercise
- **Daily requirements:** 20-35% of total calories
- **Types:** Focus on unsaturated fats, limit saturated
- **Essential fats:** Omega-3 and omega-6 fatty acids
- **Fat adaptation:** Strategic low-carb periods for endurance athletes

## Micronutrients & Hydration

**Key Micronutrients for Athletes:**
- **Iron:** Oxygen transport and energy production
- **Calcium:** Bone health and muscle contraction
- **Vitamin D:** Bone health and immune function
- **B Vitamins:** Energy metabolism
- **Antioxidants:** Reduce exercise-induced oxidative stress

**Hydration Strategies:**
- **Pre-hydration:** 500ml 2-3 hours before exercise
- **During exercise:** 150-350ml every 15-20 minutes
- **Post-exercise:** 1.5L per kg body weight lost
- **Electrolytes:** Sodium, potassium, magnesium replacement
- **Monitoring:** Urine color, body weight changes, thirst

## Nutrient Timing Strategies

**Pre-Exercise Nutrition (1-4 hours before):**
- High carbohydrate meal
- Moderate protein
- Low fat and fiber
- Adequate hydration

**During Exercise Nutrition:**
- Carbohydrate intake: 30-60g per hour
- Electrolyte replacement
- Fluid maintenance
- For events >2 hours: Up to 90g carbs per hour

**Post-Exercise Recovery:**
- **Carbohydrates:** 1.0-1.2 g/kg within first hour
- **Protein:** 20-40g within first hour
- **Fluid/electrolytes:** Full replacement
- **Window of opportunity:** First 30-60 minutes optimal

## Special Considerations

**Weight Management:**
- Gradual weight loss (0.5-1.0 kg/week)
- Maintain training performance
- Adequate protein intake during deficit
- Strategic carbohydrate cycling

**Competition Nutrition:**
- Carb loading strategies
- Travel nutrition planning
- Competition day meal timing
- Recovery between events

**Supplements:**
- Evidence-based supplements only
- Third-party tested products
- Individual needs assessment
- Medical supervision when needed

Proper nutrition implementation can improve performance by 5-10% while supporting health and recovery.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary fuel for high-intensity exercise?",
          options: [
            "Vitamins",
            "Carbohydrates",
            "Fats",
            "Proteins"
          ],
          correctAnswer: 1,
          explanation: "Carbohydrates are the preferred fuel for moderate to high-intensity exercise due to faster energy production."
        },
        {
          id: 2,
          question: "What are daily carb requirements for athletes?",
          options: [
            "0.5-1 g/kg body weight",
            "3-12 g/kg body weight",
            "1-2 g/kg body weight",
            "15-20 g/kg body weight"
          ],
          correctAnswer: 1,
          explanation: "Carbohydrate needs vary from 3-12 g/kg depending on training intensity, duration, and goals."
        },
        {
          id: 3,
          question: "Where is glycogen stored?",
          options: [
            "Bones",
            "Fat cells",
            "Liver and muscles",
            "Blood only"
          ],
          correctAnswer: 2,
          explanation: "Glycogen is stored in liver (regulates blood glucose) and muscles (local energy source)."
        },
        {
          id: 4,
          question: "What are protein building blocks?",
          options: [
            "Glucose units",
            "Nucleotides",
            "Fatty acids",
            "Amino acids"
          ],
          correctAnswer: 3,
          explanation: "Proteins are composed of amino acids, which repair and build muscle tissue."
        },
        {
          id: 5,
          question: "What are daily protein requirements for athletes?",
          options: [
            "1.2-2.0 g/kg body weight",
            "10-12 g/kg body weight",
            "3-4 g/kg body weight",
            "0.5-0.8 g/kg body weight"
          ],
          correctAnswer: 0,
          explanation: "Athletes need 1.2-2.0 g/kg protein daily to support repair, growth, and adaptation."
        },
        {
          id: 6,
          question: "What optimizes post-exercise protein synthesis?",
          options: [
            "50-100g protein doses",
            "5-10g protein doses",
            "20-40g protein doses",
            "No protein needed"
          ],
          correctAnswer: 2,
          explanation: "20-40g of high-quality protein maximizes muscle protein synthesis after exercise."
        },
        {
          id: 7,
          question: "What percentage of calories from fats?",
          options: [
            "20-35%",
            "40-50%",
            "60-70%",
            "10-15%"
          ],
          correctAnswer: 0,
          explanation: "20-35% of total calories from fats supports health and performance for most athletes."
        },
        {
          id: 8,
          question: "What are essential fatty acids?",
          options: [
            "Omega-3 and omega-6",
            "Trans fats",
            "Saturated fats",
            "Cholesterol"
          ],
          correctAnswer: 0,
          explanation: "Omega-3 and omega-6 fatty acids must come from diet as the body cannot produce them."
        },
        {
          id: 9,
          question: "What transports oxygen in blood?",
          options: [
            "Sodium",
            "Iron",
            "Vitamin D",
            "Calcium"
          ],
          correctAnswer: 1,
          explanation: "Iron is essential for hemoglobin production, which carries oxygen in red blood cells."
        },
        {
          id: 10,
          question: "What supports bone health?",
          options: [
            "Sodium and potassium",
            "Iron and B12",
            "Calcium and Vitamin D",
            "Vitamin C only"
          ],
          correctAnswer: 2,
          explanation: "Calcium builds bone structure while Vitamin D enhances calcium absorption."
        },
        {
          id: 11,
          question: "What reduces oxidative stress?",
          options: [
            "Proteins",
            "Antioxidants",
            "Carbohydrates",
            "Saturated fats"
          ],
          correctAnswer: 1,
          explanation: "Antioxidants neutralize free radicals produced during intense exercise."
        },
        {
          id: 12,
          question: "How much pre-exercise hydration?",
          options: [
            "500ml 2-3 hours before",
            "1 liter immediately before",
            "100ml right before",
            "No hydration needed"
          ],
          correctAnswer: 0,
          explanation: "500ml 2-3 hours before allows proper hydration without gastrointestinal discomfort."
        },
        {
          id: 13,
          question: "How often to drink during exercise?",
          options: [
            "Every 60 minutes",
            "Only when thirsty",
            "Never during exercise",
            "Every 15-20 minutes"
          ],
          correctAnswer: 3,
          explanation: "Regular sips every 15-20 minutes maintain hydration without overloading the stomach."
        },
        {
          id: 14,
          question: "What electrolytes need replacement?",
          options: [
            "Iron and calcium",
            "Vitamin C and E",
            "Sodium, potassium, magnesium",
            "Zinc and copper"
          ],
          correctAnswer: 2,
          explanation: "These electrolytes are lost in sweat and crucial for nerve function and fluid balance."
        },
        {
          id: 15,
          question: "What characterizes pre-exercise meals?",
          options: [
            "High carb, low fat/fiber",
            "High fiber, low fluid",
            "High fat, low protein",
            "High protein, low carb"
          ],
          correctAnswer: 0,
          explanation: "High carbs fuel exercise while low fat/fiber prevents gastrointestinal issues."
        },
        {
          id: 16,
          question: "How many carbs per hour during exercise?",
          options: [
            "30-60g per hour",
            "No carbs needed",
            "5-10g per hour",
            "100-150g per hour"
          ],
          correctAnswer: 0,
          explanation: "30-60g carbohydrates per hour maintains blood glucose during prolonged exercise."
        },
        {
          id: 17,
          question: "What is the recovery window?",
          options: [
            "Next day only",
            "First 30-60 minutes post-exercise",
            "During exercise only",
            "2-4 hours post-exercise"
          ],
          correctAnswer: 1,
          explanation: "The first 30-60 minutes post-exercise is when nutrients are most effectively utilized for recovery."
        },
        {
          id: 18,
          question: "What is safe weight loss rate?",
          options: [
            "2-3 kg/week",
            "0.5-1.0 kg/week",
            "5-10 kg/week",
            "No weight loss"
          ],
          correctAnswer: 1,
          explanation: "0.5-1.0 kg/week preserves muscle mass and maintains performance during weight loss."
        },
        {
          id: 19,
          question: "What is carb loading?",
          options: [
            "High protein only",
            "Fasting before events",
            "Increasing carb intake before competition",
            "Decreasing all food intake"
          ],
          correctAnswer: 2,
          explanation: "Carbohydrate loading maximizes glycogen stores before endurance competitions."
        },
        {
          id: 20,
          question: "What supplements should be used?",
          options: [
            "Only protein powders",
            "Evidence-based only",
            "Most expensive ones",
            "All available supplements"
          ],
          correctAnswer: 1,
          explanation: "Only supplements with strong scientific evidence should be considered for athletes."
        }
      ]
    },
    {
      id: 4,
      title: "Sports Psychology & Mental Training",
      content: `# Module 4: Sports Psychology & Mental Training

Mental skills are as trainable as physical skills. This module explores psychological principles for optimal performance and well-being.

## Foundations of Sport Psychology

**Performance Psychology Components:**
- **Motivation:** Direction and intensity of effort
- **Confidence:** Belief in one's abilities
- **Focus:** Attention control and concentration
- **Emotion Regulation:** Managing competitive anxiety
- **Resilience:** Bouncing back from setbacks

**The Mental Performance Pyramid:**
1. **Foundation:** Self-awareness and values
2. **Middle:** Mental skills development
3. **Peak:** Flow states and optimal performance

## Goal Setting Strategies

**Effective Goal Characteristics:**
- **Process Goals:** Focus on execution (technique, effort)
- **Performance Goals:** Self-referenced standards (personal bests)
- **Outcome Goals:** Result-focused (winning, placement)
- **Balanced Approach:** 70% process, 20% performance, 10% outcome

**SMARTER Goal Framework:**
- Specific
- Measurable
- Achievable
- Relevant
- Time-bound
- Evaluated
- Revised

## Attention Control & Focus

**Types of Attention:**
- **Broad External:** Assessing environment (game situation)
- **Broad Internal:** Analysis and planning (strategy)
- **Narrow External:** Specific external focus (ball, opponent)
- **Narrow Internal:** Mental rehearsal, technique focus

**Focus Training Techniques:**
- Cue words and trigger phrases
- Pre-performance routines
- Breathing control exercises
- Mindfulness and meditation
- Concentration grids and drills

## Anxiety & Arousal Management

**Competitive Anxiety Components:**
- **Cognitive Anxiety:** Worry, negative thoughts
- **Somatic Anxiety:** Physical symptoms (sweating, tension)
- **Perceived Control:** Belief in coping ability

**Optimal Arousal Levels:**
- Inverted-U hypothesis
- Individual zones of optimal functioning
- Sport-specific arousal needs
- Task complexity considerations

**Anxiety Management Techniques:**
- Cognitive restructuring
- Progressive muscle relaxation
- Systematic desensitization
- Biofeedback training
- Visualization and imagery

## Team Dynamics & Leadership

**Team Cohesion Components:**
- **Task Cohesion:** Working toward shared goals
- **Social Cohesion:** Interpersonal relationships
- **Developing Trust:** Psychological safety
- **Communication Patterns:** Effective information exchange

**Leadership Styles:**
- **Autocratic:** Coach-centered decision making
- **Democratic:** Player involvement in decisions
- **Laissez-faire:** Minimal coach direction
- **Situational Leadership:** Adapting style to situation

**Conflict Resolution:**
- Identifying conflict sources
- Active listening techniques
- Win-win negotiation strategies
- Team-building activities

Mental training programs can improve performance by 10-20% when systematically applied.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is motivation in sports?",
          options: [
            "Natural talent only",
            "Winning at all costs",
            "Physical ability only",
            "Direction and intensity of effort"
          ],
          correctAnswer: 3,
          explanation: "Motivation encompasses both the direction (what one tries to do) and intensity (how hard one tries)."
        },
        {
          id: 2,
          question: "What is sport confidence?",
          options: [
            "Guaranteed success",
            "Belief in one's abilities",
            "Physical strength only",
            "Lack of nervousness"
          ],
          correctAnswer: 1,
          explanation: "Confidence is the belief in one's ability to successfully perform a specific task."
        },
        {
          id: 3,
          question: "What is focus in sports?",
          options: [
            "Attention control and concentration",
            "Physical positioning",
            "Ignoring everything",
            "Staring at one point"
          ],
          correctAnswer: 0,
          explanation: "Focus involves selectively attending to relevant cues while ignoring distractions."
        },
        {
          id: 4,
          question: "What is emotion regulation?",
          options: [
            "Only positive emotions",
            "Managing competitive anxiety",
            "Ignoring feelings",
            "Eliminating all emotions"
          ],
          correctAnswer: 1,
          explanation: "Emotion regulation involves monitoring and modifying emotional responses for optimal performance."
        },
        {
          id: 5,
          question: "What is resilience?",
          options: [
            "Never experiencing failure",
            "Physical toughness only",
            "Bouncing back from setbacks",
            "Genetic predisposition"
          ],
          correctAnswer: 2,
          explanation: "Resilience is the ability to recover quickly from difficulties and adapt to adversity."
        },
        {
          id: 6,
          question: "What are process goals?",
          options: [
            "Comparing to others",
            "Focus on execution",
            "Winning outcomes",
            "Final results only"
          ],
          correctAnswer: 1,
          explanation: "Process goals focus on the actions and behaviors within the athlete's control."
        },
        {
          id: 7,
          question: "What are performance goals?",
          options: [
            "Team requirements",
            "Beating opponents only",
            "Coach's expectations",
            "Self-referenced standards"
          ],
          correctAnswer: 3,
          explanation: "Performance goals involve achieving personal standards rather than comparing to others."
        },
        {
          id: 8,
          question: "What are outcome goals?",
          options: [
            "Result-focused",
            "Effort levels",
            "Technique improvement",
            "Learning process"
          ],
          correctAnswer: 0,
          explanation: "Outcome goals focus on competitive results such as winning, placing, or qualifying."
        },
        {
          id: 9,
          question: "What is balanced goal setting?",
          options: [
            "100% outcome goals",
            "Only performance goals",
            "Equal all types",
            "70% process, 20% performance, 10% outcome"
          ],
          correctAnswer: 3,
          explanation: "This balanced approach emphasizes controllable factors while acknowledging outcomes."
        },
        {
          id: 10,
          question: "What is broad external attention?",
          options: [
            "Technical focus",
            "Mental rehearsal",
            "Breathing control",
            "Assessing environment"
          ],
          correctAnswer: 3,
          explanation: "Broad external attention scans the environment for relevant cues and information."
        },
        {
          id: 11,
          question: "What is narrow internal attention?",
          options: [
            "Crowd observation",
            "Mental rehearsal",
            "Opponent watching",
            "Game situation awareness"
          ],
          correctAnswer: 1,
          explanation: "Narrow internal focus involves mental processes like visualization or technical analysis."
        },
        {
          id: 12,
          question: "What are pre-performance routines?",
          options: [
            "Last-minute changes",
            "Random warm-ups",
            "Coach's instructions only",
            "Consistent preparation sequences"
          ],
          correctAnswer: 3,
          explanation: "Consistent routines create psychological readiness and reduce pre-competition anxiety."
        },
        {
          id: 13,
          question: "What is cognitive anxiety?",
          options: [
            "Lack of preparation",
            "Physical symptoms",
            "Worry and negative thoughts",
            "Overconfidence"
          ],
          correctAnswer: 2,
          explanation: "Cognitive anxiety involves mental components like worry, doubt, and negative self-talk."
        },
        {
          id: 14,
          question: "What is somatic anxiety?",
          options: [
            "Strategic planning",
            "Mental worry only",
            "Confidence issues",
            "Physical symptoms"
          ],
          correctAnswer: 3,
          explanation: "Somatic anxiety manifests as physical symptoms like sweating, trembling, or increased heart rate."
        },
        {
          id: 15,
          question: "What is optimal arousal theory?",
          options: [
            "Linear relationship",
            "No arousal best",
            "Inverted-U hypothesis",
            "More arousal always better"
          ],
          correctAnswer: 2,
          explanation: "The Inverted-U hypothesis suggests performance increases with arousal up to an optimal point, then decreases."
        },
        {
          id: 16,
          question: "What is cognitive restructuring?",
          options: [
            "Changing thought patterns",
            "Ignoring thoughts",
            "Medication use",
            "Physical relaxation only"
          ],
          correctAnswer: 0,
          explanation: "Cognitive restructuring identifies and modifies irrational or unhelpful thought patterns."
        },
        {
          id: 17,
          question: "What is task cohesion?",
          options: [
            "Personal achievements",
            "Coach-player relationship",
            "Social friendships",
            "Working toward shared goals"
          ],
          correctAnswer: 3,
          explanation: "Task cohesion involves commitment to team objectives and coordinated effort toward goals."
        },
        {
          id: 18,
          question: "What is social cohesion?",
          options: [
            "Skill development",
            "Interpersonal relationships",
            "Training attendance",
            "Winning games only"
          ],
          correctAnswer: 1,
          explanation: "Social cohesion refers to the quality of interpersonal relationships and social interactions within the team."
        },
        {
          id: 19,
          question: "What is autocratic leadership?",
          options: [
            "Coach-centered decision making",
            "Equal decision making",
            "No leadership",
            "Player involvement"
          ],
          correctAnswer: 0,
          explanation: "Autocratic leaders make decisions independently with minimal input from athletes."
        },
        {
          id: 20,
          question: "What is situational leadership?",
          options: [
            "Adapting style to situation",
            "Player-led only",
            "One style always",
            "No leadership structure"
          ],
          correctAnswer: 0,
          explanation: "Situational leadership adjusts approach based on athlete needs, task demands, and context."
        }
      ]
    },
    {
      id: 5,
      title: "Strength & Conditioning Programming",
      content: `# Module 5: Strength & Conditioning Programming

Advanced programming principles for developing athletic performance across different sports and training phases.

## Periodization Models

**Linear Periodization:**
- Progressive overload in sequential phases
- General preparation → specific preparation → competition
- Volume decreases while intensity increases
- Suitable for beginners and annual planning

**Undulating Periodization:**
- Frequent variation in volume and intensity
- Daily or weekly wave-like patterns
- Maintains multiple fitness qualities simultaneously
- Suitable for intermediate to advanced athletes

**Block Periodization:**
- Concentrated loading in focused blocks
- Accumulation → transmutation → realization
- High specialization within each block
- Suitable for advanced athletes with specific goals

**Concurrent Training:**
- Simultaneous development of multiple qualities
- Careful management of interference effect
- Strategic sequencing of sessions
- Appropriate for team sports and multi-event athletes

## Strength Development Methods

**Maximal Strength Methods:**
- **Heavy Loads:** 85-100% 1RM, 1-6 reps
- **Low Volume:** 3-5 sets, long rest periods (3-5 minutes)
- **Exercise Selection:** Compound multi-joint movements
- **Frequency:** 2-4 times per week per muscle group

**Power Development Methods:**
- **Velocity Focus:** Move submaximal loads explosively
- **Olympic Lifts:** Clean, snatch variations
- **Plyometrics:** Jump training with quick ground contacts
- **Contrast Training:** Heavy strength paired with explosive movements

**Hypertrophy Methods:**
- **Moderate Loads:** 67-85% 1RM, 6-12 reps
- **Higher Volume:** 3-6 sets, shorter rest (60-90 seconds)
- **Metabolic Stress:** Techniques like drop sets, supersets
- **Time Under Tension:** Controlled tempo prescriptions

## Speed & Agility Programming

**Linear Speed Development:**
- **Acceleration:** 0-20m focused work
- **Maximum Velocity:** 20-60m technique refinement
- **Speed Endurance:** Maintaining speed over repetitions
- **Resisted/Predicted Methods:** Sleds, bands, downhill/uphill

**Multi-directional Speed:**
- **Change of Direction:** Planned direction changes
- **Agility:** Reactive movement to stimuli
- **Deceleration Training:** Eccentric control development
- **Footwork Patterns:** Ladder, cone, and reactive drills

## Recovery Integration

**Training Stress Balance:**
- **Acute:Chronic Workload Ratio:** Monitoring training load
- **Fatigue Management:** Strategic deloading periods
- **Recovery Modalities:** Active recovery, contrast therapy, compression
- **Sleep Optimization:** Sleep quality and quantity monitoring

**Monitoring Tools:**
- **Subjective:** Questionnaires, perceived exertion
- **Objective:** Heart rate variability, jump performance
- **Performance Testing:** Regular benchmark assessments
- **Biomarkers:** Blood, saliva, or urine markers when available

## Sport-Specific Applications

**Team Sport Considerations:**
- In-season versus off-season programming
- Game schedule integration
- Position-specific demands
- Travel and recovery challenges

**Individual Sport Considerations:**
- Competition peaking strategies
- Technical skill integration
- Weight category management
- Solo training versus group training

Advanced programming requires balancing stress and recovery while progressing toward specific performance goals.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is linear periodization?",
          options: [
            "Sequential phases of training",
            "Random training variation",
            "No structure",
            "Same training always"
          ],
          correctAnswer: 0,
          explanation: "Linear periodization progresses through distinct training phases with specific focuses."
        },
        {
          id: 2,
          question: "What changes in linear periodization?",
          options: [
            "Volume decreases, intensity increases",
            "Random changes",
            "Volume increases, intensity decreases",
            "Both stay same"
          ],
          correctAnswer: 0,
          explanation: "As competition approaches, volume typically decreases while intensity increases."
        },
        {
          id: 3,
          question: "What is undulating periodization?",
          options: [
            "Frequent variation in volume/intensity",
            "Only intensity changes",
            "No variation",
            "Only volume changes"
          ],
          correctAnswer: 0,
          explanation: "Undulating periodization varies training stress frequently to maintain multiple qualities."
        },
        {
          id: 4,
          question: "What characterizes block periodization?",
          options: [
            "No specific focus",
            "Random training",
            "Concentrated loading blocks",
            "Equal focus on all qualities"
          ],
          correctAnswer: 2,
          explanation: "Block periodization focuses intensely on specific fitness qualities in concentrated blocks."
        },
        {
          id: 5,
          question: "What is concurrent training?",
          options: [
            "Only endurance",
            "No strength training",
            "One quality at a time",
            "Simultaneous multiple qualities"
          ],
          correctAnswer: 3,
          explanation: "Concurrent training develops multiple fitness qualities simultaneously."
        },
        {
          id: 6,
          question: "What loads for maximal strength?",
          options: [
            "60-75% 1RM",
            "30-50% 1RM",
            "40-60% 1RM",
            "85-100% 1RM"
          ],
          correctAnswer: 3,
          explanation: "Heavy loads near maximum develop neurological adaptations for maximal strength."
        },
        {
          id: 7,
          question: "What reps for maximal strength?",
          options: [
            "15-20 reps",
            "8-12 reps",
            "25-30 reps",
            "1-6 reps"
          ],
          correctAnswer: 3,
          explanation: "Low repetitions with heavy loads optimize neural drive and maximal force production."
        },
        {
          id: 8,
          question: "What is power training focus?",
          options: [
            "Maximum weight only",
            "Endurance only",
            "Velocity of movement",
            "Flexibility"
          ],
          correctAnswer: 2,
          explanation: "Power training emphasizes moving submaximal loads as quickly as possible."
        },
        {
          id: 9,
          question: "What are Olympic lifts?",
          options: [
            "Clean and snatch variations",
            "Leg extensions",
            "Bench press only",
            "Bicep curls"
          ],
          correctAnswer: 0,
          explanation: "Olympic lifts develop explosive power through triple extension movements."
        },
        {
          id: 10,
          question: "What is hypertrophy training load?",
          options: [
            "67-85% 1RM",
            "40-60% 1RM",
            "30-50% 1RM",
            "85-100% 1RM"
          ],
          correctAnswer: 0,
          explanation: "Moderate loads with higher volume create metabolic stress for muscle growth."
        },
        {
          id: 11,
          question: "What reps for hypertrophy?",
          options: [
            "15-20 reps",
            "25+ reps",
            "6-12 reps",
            "1-5 reps"
          ],
          correctAnswer: 2,
          explanation: "6-12 repetitions optimize mechanical tension and metabolic stress for hypertrophy."
        },
        {
          id: 12,
          question: "What is acceleration training?",
          options: [
            "0-20m focused work",
            "Maximum speed only",
            "Long distance",
            "Endurance running"
          ],
          correctAnswer: 0,
          explanation: "Acceleration training focuses on the initial phase of sprinting from a stationary start."
        },
        {
          id: 13,
          question: "What is maximum velocity training?",
          options: [
            "Starting technique only",
            "20-60m technique refinement",
            "Jogging speed",
            "Marathon pace"
          ],
          correctAnswer: 1,
          explanation: "Maximum velocity work refines sprint mechanics at top speed."
        },
        {
          id: 14,
          question: "What is change of direction?",
          options: [
            "Straight line only",
            "No direction changes",
            "Random movements only",
            "Planned direction changes"
          ],
          correctAnswer: 3,
          explanation: "Change of direction involves pre-planned alterations in movement direction."
        },
        {
          id: 15,
          question: "What is agility?",
          options: [
            "Reactive movement to stimuli",
            "Endurance training",
            "Planned patterns only",
            "Strength training"
          ],
          correctAnswer: 0,
          explanation: "Agility involves reacting to unpredictable stimuli with appropriate movement responses."
        },
        {
          id: 16,
          question: "What is acute:chronic workload ratio?",
          options: [
            "Nutrition ratio",
            "Hydration schedule",
            "Monitoring training load balance",
            "Sleep timing"
          ],
          correctAnswer: 2,
          explanation: "This ratio compares recent training load to longer-term average to manage injury risk."
        },
        {
          id: 17,
          question: "What are deloading periods?",
          options: [
            "Increased training",
            "Testing weeks",
            "Competition periods",
            "Strategic recovery phases"
          ],
          correctAnswer: 3,
          explanation: "Deloading reduces training stress to facilitate recovery and supercompensation."
        },
        {
          id: 18,
          question: "What is subjective monitoring?",
          options: [
            "Blood tests",
            "Questionnaires and perceived exertion",
            "Performance tests",
            "Heart rate only"
          ],
          correctAnswer: 1,
          explanation: "Subjective measures assess how athletes feel, providing valuable context to objective data."
        },
        {
          id: 19,
          question: "What is heart rate variability?",
          options: [
            "Autonomic nervous system indicator",
            "Exercise heart rate",
            "Maximum heart rate",
            "Resting heart rate only"
          ],
          correctAnswer: 0,
          explanation: "HRV reflects autonomic nervous system balance and recovery status."
        },
        {
          id: 20,
          question: "What are peaking strategies?",
          options: [
            "No special preparation",
            "Random training before events",
            "Competition performance optimization",
            "Year-round same training"
          ],
          correctAnswer: 2,
          explanation: "Peaking strategies manipulate training variables to optimize performance at specific competitions."
        }
      ]
    },
    {
      id: 6,
      title: "Sports Injury Prevention & Rehabilitation",
      content: `# Module 6: Sports Injury Prevention & Rehabilitation

Advanced understanding of injury mechanisms, prevention strategies, and rehabilitation principles for return to sport.

## Injury Risk Factors

**Intrinsic Risk Factors:**
- **Previous Injury:** History increases re-injury risk
- **Biomechanical Factors:** Alignment, flexibility, strength imbalances
- **Physiological Factors:** Age, sex, maturation status
- **Psychological Factors:** Stress, anxiety, risk-taking behavior

**Extrinsic Risk Factors:**
- **Training Load Errors:** Rapid increases in volume/intensity
- **Equipment Factors:** Footwear, protective gear, playing surface
- **Environmental Factors:** Weather, altitude, pollution
- **Competition Factors:** Schedule density, travel, opponent quality

## Common Sports Injuries

**Overuse Injuries:**
- **Tendinopathies:** Achilles, patellar, rotator cuff
- **Stress Fractures:** Repetitive loading beyond bone adaptation
- **Compartment Syndromes:** Increased pressure within muscle compartments
- **Bursitis:** Inflammation of fluid-filled sacs

**Acute Injuries:**
- **Ligament Sprains:** ACL, ankle, shoulder
- **Muscle Strains:** Hamstring, quadriceps, calf
- **Fractures:** Bone breaks from traumatic force
- **Concussions:** Traumatic brain injuries

## Injury Prevention Frameworks

**FIFA 11+ Program:**
- Comprehensive warm-up program
- Reduces football injuries by 30-50%
- Includes running, strength, plyometrics, balance
- Takes approximately 20 minutes

**ACL Injury Prevention Programs:**
- Neuromuscular training emphasis
- Focus on landing and cutting mechanics
- Strength and balance components
- Particularly effective for female athletes

**Load Management Principles:**
- **Acute:Chronic Workload Ratio:** 0.8-1.3 optimal range
- **Coupled Stressors:** Consider life stress with training stress
- **Individual Response:** Monitor athlete-specific adaptations
- **Progressive Overload:** Gradual, systematic increases

## Rehabilitation Principles

**Phases of Rehabilitation:**
1. **Acute Phase:** Pain/swelling control, range of motion
2. **Subacute Phase:** Strength restoration, proprioception
3. **Functional Phase:** Sport-specific movements, power
4. **Return to Sport:** Graduated exposure, decision making

**Rehabilitation Progressions:**
- Pain-free range of motion → strength → endurance → power
- Simple → complex movements
- Low load → high load
- Controlled → unpredictable environments

**Criteria for Progression:**
- Pain levels (VAS scale)
- Strength symmetry (>90% of uninjured side)
- Functional performance tests
- Psychological readiness
- Sport-specific demands

## Return to Sport Decision Making

**Staged Return Framework:**
1. **Restoration Phase:** Basic fitness and movement patterns
2. **Sport-Specific Phase:** Position-specific demands
3. **Exposure Phase:** Controlled practice situations
4. **Return Phase:** Full competition participation

**Decision Considerations:**
- Medical clearance from healthcare team
- Objective physical performance data
- Subjective athlete readiness
- Risk-benefit analysis
- Long-term career implications

**Re-injury Prevention:**
- Continued strength maintenance
- Ongoing movement quality monitoring
- Load management education
- Psychological support
- Regular re-assessment

Effective injury management balances optimal recovery with safe return to full performance.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a major intrinsic risk factor?",
          options: [
            "Equipment quality",
            "Previous injury history",
            "Opponent strength",
            "Weather conditions"
          ],
          correctAnswer: 1,
          explanation: "Previous injury significantly increases risk of re-injury to the same area."
        },
        {
          id: 2,
          question: "What are biomechanical risk factors?",
          options: [
            "Alignment and strength imbalances",
            "Psychological stress",
            "Training frequency",
            "Nutrition habits"
          ],
          correctAnswer: 0,
          explanation: "Biomechanical factors like poor alignment or muscle imbalances predispose to injury."
        },
        {
          id: 3,
          question: "What is an extrinsic risk factor?",
          options: [
            "Age and sex",
            "Genetic factors",
            "Previous injuries",
            "Training load errors"
          ],
          correctAnswer: 3,
          explanation: "Extrinsic factors are external influences like training errors, equipment, or environment."
        },
        {
          id: 4,
          question: "What causes overuse injuries?",
          options: [
            "Repetitive loading beyond tissue adaptation",
            "Single traumatic event",
            "Genetic predisposition only",
            "Poor nutrition only"
          ],
          correctAnswer: 0,
          explanation: "Overuse injuries result from cumulative microtrauma exceeding tissue repair capacity."
        },
        {
          id: 5,
          question: "What are tendinopathies?",
          options: [
            "Tendon overuse injuries",
            "Bone fractures",
            "Muscle tears",
            "Ligament sprains"
          ],
          correctAnswer: 0,
          explanation: "Tendinopathies involve degeneration or inflammation of tendons from overuse."
        },
        {
          id: 6,
          question: "What are stress fractures?",
          options: [
            "Complete bone breaks",
            "Muscle strains",
            "Bone cracks from repetitive loading",
            "Joint dislocations"
          ],
          correctAnswer: 2,
          explanation: "Stress fractures are small cracks in bones from repetitive force accumulation."
        },
        {
          id: 7,
          question: "What are acute injuries?",
          options: [
            "Gradual onset injuries",
            "Chronic conditions",
            "Genetic conditions",
            "Traumatic sudden injuries"
          ],
          correctAnswer: 3,
          explanation: "Acute injuries result from sudden trauma like falls, collisions, or awkward landings."
        },
        {
          id: 8,
          question: "What is the FIFA 11+ program?",
          options: [
            "Mental training",
            "Comprehensive warm-up program",
            "Nutrition plan",
            "Cool-down routine"
          ],
          correctAnswer: 1,
          explanation: "FIFA 11+ is an evidence-based warm-up program that reduces football injuries."
        },
        {
          id: 9,
          question: "What does ACL prevention focus on?",
          options: [
            "Landing and cutting mechanics",
            "Cardiovascular fitness",
            "Only flexibility",
            "Only strength training"
          ],
          correctAnswer: 0,
          explanation: "ACL prevention emphasizes proper movement patterns during high-risk activities."
        },
        {
          id: 10,
          question: "What is optimal acute:chronic workload ratio?",
          options: [
            "0.8-1.3 range",
            "1.5-2.5 range",
            "2.0-3.0 range",
            "0.1-0.5 range"
          ],
          correctAnswer: 0,
          explanation: "0.8-1.3 represents balanced training load with minimal injury risk."
        },
        {
          id: 11,
          question: "What is the acute rehabilitation phase?",
          options: [
            "Sport-specific training",
            "Pain and swelling control",
            "Return to competition",
            "Strength restoration"
          ],
          correctAnswer: 1,
          explanation: "Acute phase focuses on initial healing and symptom management."
        },
        {
          id: 12,
          question: "What is subacute rehabilitation phase?",
          options: [
            "Full competition",
            "Career planning",
            "Strength and proprioception restoration",
            "Initial injury management"
          ],
          correctAnswer: 2,
          explanation: "Subacute phase rebuilds strength, balance, and basic movement patterns."
        },
        {
          id: 13,
          question: "What is functional rehabilitation phase?",
          options: [
            "Pain management only",
            "Sport-specific movements",
            "Basic range of motion",
            "Psychological counseling"
          ],
          correctAnswer: 1,
          explanation: "Functional phase prepares athletes for the specific demands of their sport."
        },
        {
          id: 14,
          question: "What are rehabilitation progressions?",
          options: [
            "No progression",
            "Simple to complex movements",
            "Random progression",
            "Complex to simple"
          ],
          correctAnswer: 1,
          explanation: "Rehabilitation systematically progresses from basic to advanced activities."
        },
        {
          id: 15,
          question: "What is strength symmetry criteria?",
          options: [
            "200% of uninjured side",
            ">90% of uninjured side",
            "Equal to injured side",
            "50% of uninjured side"
          ],
          correctAnswer: 1,
          explanation: ">90% strength symmetry indicates sufficient recovery for progression."
        },
        {
          id: 16,
          question: "What is restoration phase in RTS?",
          options: [
            "Basic fitness restoration",
            "Full competition",
            "Retirement planning",
            "Coach education"
          ],
          correctAnswer: 0,
          explanation: "Restoration phase rebuilds general physical capacities before sport-specific demands."
        },
        {
          id: 17,
          question: "What is sport-specific phase?",
          options: [
            "Psychological assessment",
            "Position-specific demands",
            "General fitness only",
            "Medical treatment"
          ],
          correctAnswer: 1,
          explanation: "Sport-specific phase addresses the unique demands of the athlete's position and sport."
        },
        {
          id: 18,
          question: "What is exposure phase?",
          options: [
            "Full competition immediately",
            "No practice at all",
            "Controlled practice situations",
            "Only watching games"
          ],
          correctAnswer: 2,
          explanation: "Exposure phase gradually reintroduces athletes to training and competitive environments."
        },
        {
          id: 19,
          question: "What is risk-benefit analysis?",
          options: [
            "Focusing only on benefits",
            "Weighing return benefits against re-injury risks",
            "Ignoring risks",
            "No analysis needed"
          ],
          correctAnswer: 1,
          explanation: "Risk-benefit analysis considers both potential performance gains and injury risks."
        },
        {
          id: 20,
          question: "What is re-injury prevention?",
          options: [
            "Ignoring the injury",
            "Continued strength maintenance",
            "Changing sports",
            "Stopping all training"
          ],
          correctAnswer: 1,
          explanation: "Re-injury prevention involves ongoing strategies to maintain recovery gains."
        }
      ]
    }
  ],
  finalExam: {
    title: "Sports Science Diploma Final Exam",
    description: "Comprehensive examination covering all 6 modules of advanced sports science principles, physiological adaptations, biomechanics, nutrition, psychology, programming, and injury management.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "Which energy system provides immediate energy for explosive movements?",
        options: [
          "Phosphagen System",
          "Glycolytic System",
          "Lipolytic System",
          "Oxidative System"
        ],
        correctAnswer: 0,
        explanation: "The Phosphagen system provides rapid ATP for short, intense bursts of activity.",
        module: 1
      },
      {
        id: 2,
        question: "What byproduct does the Glycolytic System produce?",
        options: [
          "Ammonia",
          "Lactic acid",
          "Water",
          "Carbon dioxide"
        ],
        correctAnswer: 1,
        explanation: "Lactic acid accumulation contributes to muscular fatigue during high-intensity exercise.",
        module: 1
      },
      {
        id: 3,
        question: "What is a common cardiorespiratory adaptation?",
        options: [
          "Decreased blood volume",
          "Lower resting heart rate",
          "Higher resting blood pressure",
          "Reduced lung capacity"
        ],
        correctAnswer: 1,
        explanation: "Training increases heart efficiency, allowing lower heart rates at rest.",
        module: 1
      },
      {
        id: 4,
        question: "What physics principles apply to human movement?",
        options: [
          "Thermodynamics only",
          "Quantum Mechanics",
          "Newton's Laws",
          "Einstein's Theory"
        ],
        correctAnswer: 2,
        explanation: "Newton's Laws of Motion provide the foundation for biomechanical analysis.",
        module: 2
      },
      {
        id: 5,
        question: "What characterizes third-class levers?",
        options: [
          "Fulcrum between force and load",
          "Load between fulcrum and force",
          "Equal force and load",
          "Force between fulcrum and load"
        ],
        correctAnswer: 3,
        explanation: "Most body levers are third-class, providing speed advantage over force.",
        module: 2
      },
      {
        id: 6,
        question: "What distinguishes running gait?",
        options: [
          "Double support phase",
          "Slower movements",
          "Flight phase present",
          "Less muscle activation"
        ],
        correctAnswer: 2,
        explanation: "Running includes a flight phase where neither foot contacts the ground.",
        module: 2
      },
      {
        id: 7,
        question: "What is the primary fuel for high-intensity exercise?",
        options: [
          "Vitamins",
          "Carbohydrates",
          "Proteins",
          "Fats"
        ],
        correctAnswer: 1,
        explanation: "Carbohydrates provide rapid energy production for intense exercise.",
        module: 3
      },
      {
        id: 8,
        question: "What optimizes post-exercise protein synthesis?",
        options: [
          "50-100g protein doses",
          "20-40g protein doses",
          "5-10g protein doses",
          "No protein needed"
        ],
        correctAnswer: 1,
        explanation: "20-40g of protein maximizes muscle repair and growth after exercise.",
        module: 3
      },
      {
        id: 9,
        question: "What is the recovery window?",
        options: [
          "Next day only",
          "2-4 hours post-exercise",
          "During exercise only",
          "First 30-60 minutes post-exercise"
        ],
        correctAnswer: 3,
        explanation: "Nutrients are most effectively utilized for recovery immediately after exercise.",
        module: 3
      },
      {
        id: 10,
        question: "What is sport confidence?",
        options: [
          "Physical strength only",
          "Belief in one's abilities",
          "Lack of nervousness",
          "Guaranteed success"
        ],
        correctAnswer: 1,
        explanation: "Confidence is the belief in one's capability to perform successfully.",
        module: 4
      },
      {
        id: 11,
        question: "What are process goals?",
        options: [
          "Comparing to others",
          "Final results only",
          "Winning outcomes",
          "Focus on execution"
        ],
        correctAnswer: 3,
        explanation: "Process goals focus on controllable actions and behaviors.",
        module: 4
      },
      {
        id: 12,
        question: "What is optimal arousal theory?",
        options: [
          "More arousal always better",
          "No arousal best",
          "Inverted-U hypothesis",
          "Linear relationship"
        ],
        correctAnswer: 2,
        explanation: "Optimal performance occurs at moderate arousal levels per the Inverted-U hypothesis.",
        module: 4
      },
      {
        id: 13,
        question: "What is linear periodization?",
        options: [
          "No structure",
          "Random training variation",
          "Same training always",
          "Sequential phases of training"
        ],
        correctAnswer: 3,
        explanation: "Linear periodization progresses through distinct training phases.",
        module: 5
      },
      {
        id: 14,
        question: "What loads for maximal strength?",
        options: [
          "30-50% 1RM",
          "40-60% 1RM",
          "60-75% 1RM",
          "85-100% 1RM"
        ],
        correctAnswer: 3,
        explanation: "Heavy loads near maximum develop neurological adaptations for strength.",
        module: 5
      },
      {
        id: 15,
        question: "What is power training focus?",
        options: [
          "Endurance only",
          "Velocity of movement",
          "Flexibility",
          "Maximum weight only"
        ],
        correctAnswer: 1,
        explanation: "Power training emphasizes moving submaximal loads as quickly as possible.",
        module: 5
      },
      {
        id: 16,
        question: "What is a major intrinsic risk factor?",
        options: [
          "Equipment quality",
          "Previous injury history",
          "Opponent strength",
          "Weather conditions"
        ],
        correctAnswer: 1,
        explanation: "Previous injury significantly increases re-injury risk.",
        module: 6
      },
      {
        id: 17,
        question: "What causes overuse injuries?",
        options: [
          "Repetitive loading beyond tissue adaptation",
          "Genetic predisposition only",
          "Poor nutrition only",
          "Single traumatic event"
        ],
        correctAnswer: 0,
        explanation: "Overuse injuries result from cumulative microtrauma exceeding repair capacity.",
        module: 6
      },
      {
        id: 18,
        question: "What is the acute rehabilitation phase?",
        options: [
          "Pain and swelling control",
          "Strength restoration",
          "Return to competition",
          "Sport-specific training"
        ],
        correctAnswer: 0,
        explanation: "Acute phase focuses on initial healing and symptom management.",
        module: 6
      },
      {
        id: 19,
        question: "What neural adaptation improves strength?",
        options: [
          "Improved motor unit recruitment",
          "Reduced nerve sensitivity",
          "Slower nerve conduction",
          "Fewer nerve endings"
        ],
        correctAnswer: 0,
        explanation: "Better motor unit recruitment allows more muscle fiber activation.",
        module: 1
      },
      {
        id: 20,
        question: "What are ground reaction forces?",
        options: [
          "Gravity's effect only",
          "Forces exerted by ground on body",
          "Air resistance forces",
          "Muscle contraction forces"
        ],
        correctAnswer: 1,
        explanation: "Ground reaction forces are equal and opposite to body forces applied to ground.",
        module: 2
      },
      {
        id: 21,
        question: "What are daily carb requirements for athletes?",
        options: [
          "0.5-1 g/kg body weight",
          "15-20 g/kg body weight",
          "3-12 g/kg body weight",
          "1-2 g/kg body weight"
        ],
        correctAnswer: 2,
        explanation: "Carbohydrate needs vary based on training intensity and goals.",
        module: 3
      },
      {
        id: 22,
        question: "What is balanced goal setting?",
        options: [
          "Only performance goals",
          "70% process, 20% performance, 10% outcome",
          "100% outcome goals",
          "Equal all types"
        ],
        correctAnswer: 1,
        explanation: "Balanced approach emphasizes controllable factors while acknowledging outcomes.",
        module: 4
      },
      {
        id: 23,
        question: "What changes in linear periodization?",
        options: [
          "Volume decreases, intensity increases",
          "Random changes",
          "Volume increases, intensity decreases",
          "Both stay same"
        ],
        correctAnswer: 0,
        explanation: "Volume typically decreases while intensity increases toward competition.",
        module: 5
      },
      {
        id: 24,
        question: "What is optimal acute:chronic workload ratio?",
        options: [
          "1.5-2.5 range",
          "2.0-3.0 range",
          "0.1-0.5 range",
          "0.8-1.3 range"
        ],
        correctAnswer: 3,
        explanation: "0.8-1.3 represents balanced training load with minimal injury risk.",
        module: 6
      },
      {
        id: 25,
        question: "What stimulates tissue repair?",
        options: [
          "Thyroxine",
          "Cortisol",
          "Adrenaline",
          "Growth hormone"
        ],
        correctAnswer: 3,
        explanation: "Growth hormone promotes tissue repair and muscle growth during recovery.",
        module: 1
      },
      {
        id: 26,
        question: "What is economy of movement?",
        options: [
          "Increasing muscle size",
          "Maximizing speed only",
          "Reducing rest time",
          "Minimizing energy expenditure"
        ],
        correctAnswer: 3,
        explanation: "Movement economy refers to energy cost of maintaining given speed.",
        module: 2
      },
      {
        id: 27,
        question: "What electrolytes need replacement?",
        options: [
          "Vitamin C and E",
          "Zinc and copper",
          "Iron and calcium",
          "Sodium, potassium, magnesium"
        ],
        correctAnswer: 3,
        explanation: "These electrolytes are lost in sweat and crucial for nerve function.",
        module: 3
      },
      {
        id: 28,
        question: "What is cognitive anxiety?",
        options: [
          "Lack of preparation",
          "Physical symptoms",
          "Overconfidence",
          "Worry and negative thoughts"
        ],
        correctAnswer: 3,
        explanation: "Cognitive anxiety involves mental worry, doubt, and negative self-talk.",
        module: 4
      },
      {
        id: 29,
        question: "What is undulating periodization?",
        options: [
          "No variation",
          "Only volume changes",
          "Frequent variation in volume/intensity",
          "Only intensity changes"
        ],
        correctAnswer: 2,
        explanation: "Undulating periodization varies training stress frequently.",
        module: 5
      },
      {
        id: 30,
        question: "What are tendinopathies?",
        options: [
          "Ligament sprains",
          "Tendon overuse injuries",
          "Muscle tears",
          "Bone fractures"
        ],
        correctAnswer: 1,
        explanation: "Tendinopathies involve tendon degeneration from overuse.",
        module: 6
      },
      {
        id: 31,
        question: "How long does Phosphagen System provide energy?",
        options: [
          "0-10 seconds",
          "30-60 seconds",
          "2-5 minutes",
          "10-30 minutes"
        ],
        correctAnswer: 0,
        explanation: "Phosphagen system provides immediate but very short-duration energy.",
        module: 1
      },
      {
        id: 32,
        question: "What is the first phase of walking gait?",
        options: [
          "Heel strike",
          "Toe off",
          "Swing phase",
          "Foot flat"
        ],
        correctAnswer: 0,
        explanation: "Heel strike initiates the gait cycle as heel makes ground contact.",
        module: 2
      },
      {
        id: 33,
        question: "How many carbs per hour during exercise?",
        options: [
          "5-10g per hour",
          "100-150g per hour",
          "No carbs needed",
          "30-60g per hour"
        ],
        correctAnswer: 3,
        explanation: "30-60g carbohydrates per hour maintains blood glucose during exercise.",
        module: 3
      },
      {
        id: 34,
        question: "What is somatic anxiety?",
        options: [
          "Mental worry only",
          "Physical symptoms",
          "Strategic planning",
          "Confidence issues"
        ],
        correctAnswer: 1,
        explanation: "Somatic anxiety manifests as physical symptoms like sweating or trembling.",
        module: 4
      },
      {
        id: 35,
        question: "What reps for maximal strength?",
        options: [
          "15-20 reps",
          "1-6 reps",
          "25-30 reps",
          "8-12 reps"
        ],
        correctAnswer: 1,
        explanation: "Low repetitions with heavy loads optimize neural adaptations.",
        module: 5
      },
      {
        id: 36,
        question: "What is subacute rehabilitation phase?",
        options: [
          "Full competition",
          "Initial injury management",
          "Strength and proprioception restoration",
          "Career planning"
        ],
        correctAnswer: 2,
        explanation: "Subacute phase rebuilds strength, balance, and basic movements.",
        module: 6
      },
      {
        id: 37,
        question: "What increases with left ventricle volume?",
        options: [
          "Blood pressure",
          "Resting heart rate",
          "Stroke volume",
          "Resistance"
        ],
        correctAnswer: 2,
        explanation: "Increased left ventricle volume allows greater blood filling per beat.",
        module: 1
      },
      {
        id: 38,
        question: "What type of lever is most common?",
        options: [
          "Third-class levers",
          "Second-class levers",
          "Fourth-class levers",
          "First-class levers"
        ],
        correctAnswer: 0,
        explanation: "Most body levers are third-class, providing speed over force.",
        module: 2
      },
      {
        id: 39,
        question: "What is carb loading?",
        options: [
          "Decreasing all food intake",
          "Increasing carb intake before competition",
          "Fasting before events",
          "High protein only"
        ],
        correctAnswer: 1,
        explanation: "Carbohydrate loading maximizes glycogen stores before endurance events.",
        module: 3
      },
      {
        id: 40,
        question: "What is strength symmetry criteria?",
        options: [
          "Equal to injured side",
          ">90% of uninjured side",
          "50% of uninjured side",
          "200% of uninjured side"
        ],
        correctAnswer: 1,
        explanation: ">90% strength symmetry indicates sufficient recovery for progression.",
        module: 6
      }
    ]
  }
};

export default sportsScienceDiploma;
