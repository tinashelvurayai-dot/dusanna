// Automotive Engineering (Diploma) - Complete Course Data
export const automotiveEngineeringDiploma = {
  id: "automotive-engineering-diploma",
  title: "Automotive Engineering (Diploma)",
  description: "Advanced engineering principles for automotive systems. Learn vehicle dynamics, powertrain design, electronics integration, and advanced manufacturing for modern vehicles.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🚗",
  badge: "Diploma",
  prerequisites: ["motor-mechanics-certificate"],
  modules: [
    {
      id: 1,
      title: "Vehicle Dynamics and Design",
      content: `# Module 1: Vehicle Dynamics and Design

## Engineering Principles in Motion
Vehicle dynamics combines mechanical engineering with physics to understand how vehicles move, handle, and respond to driver inputs. Design principles ensure safety, efficiency, and performance.

## Fundamental Dynamics Concepts
**Mass distribution** affects handling and stability characteristics.
**Center of gravity** location influences roll behavior and braking.
**Suspension geometry** determines wheel movement and contact patch.
**Aerodynamic forces** impact fuel efficiency and high-speed stability.
**Weight transfer** occurs during acceleration, braking, and cornering.

## Suspension System Engineering
Advanced suspension design principles:
- **Spring rate calculation** based on vehicle weight and intended use
- **Damping characteristics** for optimal ride comfort and control
- **Anti-roll bar sizing** to control body roll during cornering
- **Geometry optimization** for camber gain and toe change
- **Compliance analysis** for bushings and mounting points

## Chassis Design Considerations
**Structural integrity** ensures safety during impacts.
**Torsional stiffness** affects handling precision and noise.
**Weight optimization** balances strength with fuel efficiency.
**Crash energy management** zones absorb impact forces.
**Manufacturing feasibility** considers production methods and costs.

## Performance Metrics
**Lateral acceleration** measures cornering capability.
**Braking distance** evaluates stopping performance.
**Suspension travel** affects ride quality and terrain capability.
**Steering response** time and feel for driver feedback.
**NVH characteristics** (Noise, Vibration, Harshness) for comfort.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What combines mechanical engineering with physics?",
          options: [
            "Vehicle dynamics",
            "Engine design",
            "Electrical systems",
            "Manufacturing"
          ],
          correctAnswer: 0,
          explanation: "Vehicle dynamics combines mechanical engineering with physics to understand vehicle motion."
        },
        {
          id: 2,
          question: "What affects handling and stability?",
          options: [
            "Mass distribution",
            "Paint color",
            "Seat material",
            "Radio system"
          ],
          correctAnswer: 0,
          explanation: "Mass distribution affects vehicle handling and stability characteristics."
        },
        {
          id: 3,
          question: "What influences roll behavior?",
          options: [
            "Wheel size",
            "Fuel type",
            "Center of gravity",
            "Tire pressure"
          ],
          correctAnswer: 2,
          explanation: "Center of gravity location influences roll behavior during cornering."
        },
        {
          id: 4,
          question: "What determines wheel movement?",
          options: [
            "Suspension geometry",
            "Brake size",
            "Engine power",
            "Transmission type"
          ],
          correctAnswer: 0,
          explanation: "Suspension geometry determines how wheels move in relation to the chassis."
        },
        {
          id: 5,
          question: "What is calculated based on vehicle weight?",
          options: [
            "Spring rate",
            "Top speed",
            "Cargo capacity",
            "Fuel economy"
          ],
          correctAnswer: 0,
          explanation: "Spring rate is calculated based on vehicle weight and intended use."
        },
        {
          id: 6,
          question: "What impacts fuel efficiency?",
          options: [
            "Aerodynamic forces",
            "Window tint",
            "Radio volume",
            "Seat heaters"
          ],
          correctAnswer: 0,
          explanation: "Aerodynamic forces impact fuel efficiency, especially at higher speeds."
        },
        {
          id: 7,
          question: "What occurs during acceleration and braking?",
          options: [
            "Temperature rise",
            "Color change",
            "Sound increase",
            "Weight transfer"
          ],
          correctAnswer: 3,
          explanation: "Weight transfer occurs during acceleration, braking, and cornering."
        },
        {
          id: 8,
          question: "What is for optimal ride comfort?",
          options: [
            "Spring rate only",
            "Damping characteristics",
            "Tire size",
            "Wheel weight"
          ],
          correctAnswer: 1,
          explanation: "Damping characteristics are optimized for ride comfort and control balance."
        },
        {
          id: 9,
          question: "What ensures safety during impacts?",
          options: [
            "Carpet quality",
            "Structural integrity",
            "Paint thickness",
            "Sound system"
          ],
          correctAnswer: 1,
          explanation: "Structural integrity ensures passenger safety during collision impacts."
        },
        {
          id: 10,
          question: "What controls body roll during cornering?",
          options: [
            "Shock stiffness",
            "Anti-roll bar sizing",
            "Tire pressure",
            "Spring rate only"
          ],
          correctAnswer: 1,
          explanation: "Anti-roll bar sizing controls the amount of body roll during cornering."
        },
        {
          id: 11,
          question: "What affects handling precision?",
          options: [
            "Paint quality",
            "Torsional stiffness",
            "Radio reception",
            "Interior color"
          ],
          correctAnswer: 1,
          explanation: "Torsional stiffness affects handling precision and responsiveness."
        },
        {
          id: 12,
          question: "What is optimized for camber gain?",
          options: [
            "Engine mounting",
            "Suspension geometry",
            "Brake design",
            "Exhaust routing"
          ],
          correctAnswer: 1,
          explanation: "Suspension geometry is optimized for proper camber gain during suspension travel."
        },
        {
          id: 13,
          question: "What balances strength with efficiency?",
          options: [
            "Sound deadening",
            "Color matching",
            "Upholstery choice",
            "Weight optimization"
          ],
          correctAnswer: 3,
          explanation: "Weight optimization balances structural strength with fuel efficiency."
        },
        {
          id: 14,
          question: "What absorbs impact forces?",
          options: [
            "Bumper covers",
            "Roof lining",
            "Wheel wells",
            "Crash energy zones"
          ],
          correctAnswer: 3,
          explanation: "Crash energy management zones are designed to absorb impact forces."
        },
        {
          id: 15,
          question: "What measures cornering capability?",
          options: [
            "Lateral acceleration",
            "Engine rpm",
            "Straight speed",
            "Brake temperature"
          ],
          correctAnswer: 0,
          explanation: "Lateral acceleration (g-force) measures vehicle cornering capability."
        },
        {
          id: 16,
          question: "What considers production methods?",
          options: [
            "Manufacturing feasibility",
            "Color options",
            "Feature list",
            "Design aesthetics"
          ],
          correctAnswer: 0,
          explanation: "Manufacturing feasibility considers production methods and associated costs."
        },
        {
          id: 17,
          question: "What evaluates stopping performance?",
          options: [
            "Rotor size",
            "Braking distance",
            "Pedal feel",
            "Pad material"
          ],
          correctAnswer: 1,
          explanation: "Braking distance from specific speeds evaluates stopping performance."
        },
        {
          id: 18,
          question: "What affects ride quality?",
          options: [
            "Seat padding",
            "Steering wheel",
            "Suspension travel",
            "Mirror size"
          ],
          correctAnswer: 2,
          explanation: "Suspension travel affects ride quality over bumps and terrain capability."
        },
        {
          id: 19,
          question: "What is for driver feedback?",
          options: [
            "Dashboard design",
            "Steering response",
            "Seat comfort",
            "Climate control"
          ],
          correctAnswer: 1,
          explanation: "Steering response time and feel provide important driver feedback."
        },
        {
          id: 20,
          question: "What affects passenger comfort?",
          options: [
            "Storage space",
            "Cup holders",
            "Radio quality",
            "NVH characteristics"
          ],
          correctAnswer: 3,
          explanation: "NVH (Noise, Vibration, Harshness) characteristics affect passenger comfort."
        }
      ]
    },
    {
      id: 2,
      title: "Powertrain Engineering",
      content: `# Module 2: Powertrain Engineering

## Power Delivery Systems
Powertrain engineering covers everything from engine combustion to wheel torque. Modern systems balance performance, efficiency, and emissions compliance.

## Internal Combustion Engine Design
**Combustion chamber design** affects efficiency and emissions.
**Valvetrain optimization** balances power, efficiency, and noise.
**Forced induction systems** increase power density (turbochargers, superchargers).
**Fuel injection strategies** optimize mixture formation and combustion.
**Exhaust aftertreatment** reduces harmful emissions (catalysts, filters).

## Transmission Systems
**Gear ratio selection** balances acceleration and fuel economy.
**Synchronizer design** ensures smooth shifting.
**Torque converter operation** in automatic transmissions.
**Dual-clutch systems** for rapid gear changes.
**Continuously variable transmissions** for optimal efficiency.

## Hybrid and Electric Powertrains
**Electric motor selection** based on torque and power requirements.
**Battery system design** for energy capacity and power delivery.
**Power electronics** manage energy flow between components.
**Regenerative braking** recovers kinetic energy.
**Thermal management** for battery and motor cooling.

## Drivetrain Components
**Differential design** for torque distribution between wheels.
**Axle shaft sizing** for torque capacity and durability.
**Transfer cases** in four-wheel drive systems.
**Final drive ratios** determine overall gearing.
**Lubrication systems** for component longevity.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What covers engine to wheel torque?",
          options: [
            "Powertrain engineering",
            "Suspension design",
            "Body engineering",
            "Interior design"
          ],
          correctAnswer: 0,
          explanation: "Powertrain engineering covers all components from engine to wheels."
        },
        {
          id: 2,
          question: "What affects efficiency and emissions?",
          options: [
            "Combustion chamber design",
            "Oil cap location",
            "Exhaust tip design",
            "Air filter color"
          ],
          correctAnswer: 0,
          explanation: "Combustion chamber design affects engine efficiency and emissions output."
        },
        {
          id: 3,
          question: "What balances power and efficiency?",
          options: [
            "Valvetrain optimization",
            "Sound system",
            "Seat adjustment",
            "Paint application"
          ],
          correctAnswer: 0,
          explanation: "Valvetrain optimization balances power, efficiency, and noise characteristics."
        },
        {
          id: 4,
          question: "What balances acceleration and economy?",
          options: [
            "Oil viscosity",
            "Gear ratio selection",
            "Tire pressure",
            "Fuel type"
          ],
          correctAnswer: 1,
          explanation: "Gear ratio selection balances acceleration performance with fuel economy."
        },
        {
          id: 5,
          question: "What increases power density?",
          options: [
            "Better speakers",
            "Forced induction systems",
            "Brighter lights",
            "Larger wheels"
          ],
          correctAnswer: 1,
          explanation: "Forced induction systems like turbochargers increase engine power density."
        },
        {
          id: 6,
          question: "What ensures smooth shifting?",
          options: [
            "Shift knob shape",
            "Boot material",
            "Synchronizer design",
            "Gear material"
          ],
          correctAnswer: 2,
          explanation: "Synchronizer design ensures smooth gear engagement during shifting."
        },
        {
          id: 7,
          question: "What optimizes mixture formation?",
          options: [
            "Fuel tank shape",
            "Fuel cap design",
            "Fuel line color",
            "Fuel injection strategies"
          ],
          correctAnswer: 3,
          explanation: "Fuel injection strategies optimize air-fuel mixture formation for combustion."
        },
        {
          id: 8,
          question: "What operates in automatic transmissions?",
          options: [
            "Clutch pedal",
            "Shift lever",
            "Gear selector",
            "Torque converter"
          ],
          correctAnswer: 3,
          explanation: "Torque converters provide hydraulic coupling in automatic transmissions."
        },
        {
          id: 9,
          question: "What reduces harmful emissions?",
          options: [
            "Exhaust hangers",
            "Exhaust tips",
            "Exhaust aftertreatment",
            "Exhaust paint"
          ],
          correctAnswer: 2,
          explanation: "Exhaust aftertreatment systems reduce harmful emissions from engines."
        },
        {
          id: 10,
          question: "What allows rapid gear changes?",
          options: [
            "Automatic transmissions",
            "Manual transmissions",
            "Dual-clutch systems",
            "CVT systems"
          ],
          correctAnswer: 2,
          explanation: "Dual-clutch systems allow rapid gear changes with minimal power interruption."
        },
        {
          id: 11,
          question: "What is based on torque requirements?",
          options: [
            "Electric motor selection",
            "Cable length",
            "Battery color",
            "Charger type"
          ],
          correctAnswer: 0,
          explanation: "Electric motor selection is based on torque and power requirements."
        },
        {
          id: 12,
          question: "What provides optimal efficiency?",
          options: [
            "Manual transmissions",
            "Continuously variable transmissions",
            "Dual-clutch systems",
            "Automatic transmissions"
          ],
          correctAnswer: 1,
          explanation: "CVTs provide optimal efficiency by maintaining engine at ideal rpm."
        },
        {
          id: 13,
          question: "What is for energy capacity?",
          options: [
            "Battery case color",
            "Battery terminals",
            "Battery mounts",
            "Battery system design"
          ],
          correctAnswer: 3,
          explanation: "Battery system design addresses energy capacity and power delivery needs."
        },
        {
          id: 14,
          question: "What manages energy flow?",
          options: [
            "Power electronics",
            "Wiring harness",
            "Fuse box",
            "Relay panel"
          ],
          correctAnswer: 0,
          explanation: "Power electronics manage energy flow between battery, motor, and accessories."
        },
        {
          id: 15,
          question: "What recovers kinetic energy?",
          options: [
            "Regenerative braking",
            "Parking brake",
            "Drum brakes",
            "Disc brakes"
          ],
          correctAnswer: 0,
          explanation: "Regenerative braking recovers kinetic energy during deceleration."
        },
        {
          id: 16,
          question: "What distributes torque between wheels?",
          options: [
            "Wheel bearings",
            "Differential design",
            "Brake rotors",
            "Axle shafts"
          ],
          correctAnswer: 1,
          explanation: "Differential design controls torque distribution between driven wheels."
        },
        {
          id: 17,
          question: "What is for battery and motor cooling?",
          options: [
            "Ventilation",
            "Heating system",
            "Air conditioning",
            "Thermal management"
          ],
          correctAnswer: 3,
          explanation: "Thermal management systems cool batteries and electric motors."
        },
        {
          id: 18,
          question: "What is for torque capacity?",
          options: [
            "Axle color",
            "Axle seals",
            "Axle brackets",
            "Axle shaft sizing"
          ],
          correctAnswer: 3,
          explanation: "Axle shaft sizing ensures adequate torque capacity and durability."
        },
        {
          id: 19,
          question: "What determines overall gearing?",
          options: [
            "Transmission ratios",
            "Final drive ratios",
            "Wheel diameter",
            "Tire size"
          ],
          correctAnswer: 1,
          explanation: "Final drive ratios in differentials determine overall vehicle gearing."
        },
        {
          id: 20,
          question: "What ensures component longevity?",
          options: [
            "Lubrication systems",
            "Cleaning systems",
            "Storage systems",
            "Paint systems"
          ],
          correctAnswer: 0,
          explanation: "Proper lubrication systems ensure powertrain component longevity."
        }
      ]
    },
    {
      id: 3,
      title: "Automotive Electronics",
      content: `# Module 3: Automotive Electronics

## The Digital Nervous System
Modern vehicles contain more computing power than early spacecraft. Automotive electronics integrate sensors, processors, and actuators for control, safety, and connectivity.

## Electronic Control Units (ECUs)
**Engine Control Module (ECM)** manages fuel, ignition, and emissions.
**Transmission Control Module (TCM)** controls shifting and clutch operation.
**Body Control Module (BCM)** handles lighting, locks, and accessories.
**Anti-lock Braking System (ABS)** controller prevents wheel lockup.
**Airbag Control Module** deploys safety restraints during crashes.

## Sensor Technologies
**Position sensors** monitor crankshaft, camshaft, and throttle position.
**Pressure sensors** measure manifold, fuel, and tire pressures.
**Temperature sensors** track engine, coolant, and ambient temperatures.
**Speed sensors** detect wheel and vehicle speed.
**Proximity sensors** enable parking assist and collision avoidance.

## Communication Networks
**Controller Area Network (CAN)** for high-speed control systems.
**Local Interconnect Network (LIN)** for simple, low-cost devices.
**FlexRay** for high-reliability systems like braking and steering.
**Ethernet** for high-bandwidth infotainment and camera systems.
**Diagnostic protocols** (OBD-II) for troubleshooting and emissions testing.

## Advanced Driver Assistance Systems (ADAS)
**Adaptive Cruise Control** maintains following distance.
**Lane Keeping Assist** helps prevent unintentional lane departure.
**Automatic Emergency Braking** detects potential collisions.
**Blind Spot Monitoring** alerts to vehicles in adjacent lanes.
**Parking Assistance** provides guidance and automatic parking.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What integrates sensors and processors?",
          options: [
            "Mechanical systems",
            "Hydraulic systems",
            "Automotive electronics",
            "Pneumatic systems"
          ],
          correctAnswer: 2,
          explanation: "Automotive electronics integrate sensors, processors, and actuators."
        },
        {
          id: 2,
          question: "What manages fuel and ignition?",
          options: [
            "Transmission Control Module",
            "ABS Controller",
            "Engine Control Module",
            "Body Control Module"
          ],
          correctAnswer: 2,
          explanation: "Engine Control Module manages fuel injection, ignition timing, and emissions."
        },
        {
          id: 3,
          question: "What monitors crankshaft position?",
          options: [
            "Temperature sensors",
            "Position sensors",
            "Pressure sensors",
            "Speed sensors"
          ],
          correctAnswer: 1,
          explanation: "Position sensors monitor crankshaft, camshaft, and throttle positions."
        },
        {
          id: 4,
          question: "What is for high-speed control systems?",
          options: [
            "Ethernet",
            "Controller Area Network",
            "Local Interconnect Network",
            "FlexRay"
          ],
          correctAnswer: 1,
          explanation: "CAN bus is used for high-speed communication between control systems."
        },
        {
          id: 5,
          question: "What controls shifting operation?",
          options: [
            "Engine Control Module",
            "Airbag Controller",
            "Transmission Control Module",
            "Body Control Module"
          ],
          correctAnswer: 2,
          explanation: "Transmission Control Module controls automatic shifting and clutch operation."
        },
        {
          id: 6,
          question: "What measures manifold pressure?",
          options: [
            "Temperature sensors",
            "Pressure sensors",
            "Speed sensors",
            "Position sensors"
          ],
          correctAnswer: 1,
          explanation: "Pressure sensors measure manifold, fuel, and various system pressures."
        },
        {
          id: 7,
          question: "What handles lighting and locks?",
          options: [
            "Transmission Control Module",
            "Engine Control Module",
            "ABS Controller",
            "Body Control Module"
          ],
          correctAnswer: 3,
          explanation: "Body Control Module handles lighting, door locks, and accessory control."
        },
        {
          id: 8,
          question: "What is for simple low-cost devices?",
          options: [
            "Controller Area Network",
            "FlexRay",
            "Ethernet",
            "Local Interconnect Network"
          ],
          correctAnswer: 3,
          explanation: "LIN bus is used for simple, low-cost devices like switches and sensors."
        },
        {
          id: 9,
          question: "What prevents wheel lockup?",
          options: [
            "Engine Control Module",
            "Anti-lock Braking System",
            "Transmission Control Module",
            "Body Control Module"
          ],
          correctAnswer: 1,
          explanation: "ABS controller prevents wheel lockup during hard braking."
        },
        {
          id: 10,
          question: "What tracks engine temperature?",
          options: [
            "Speed sensors",
            "Position sensors",
            "Temperature sensors",
            "Pressure sensors"
          ],
          correctAnswer: 2,
          explanation: "Temperature sensors track engine, coolant, and various system temperatures."
        },
        {
          id: 11,
          question: "What is for high-reliability systems?",
          options: [
            "Ethernet",
            "Controller Area Network",
            "FlexRay",
            "Local Interconnect Network"
          ],
          correctAnswer: 2,
          explanation: "FlexRay is used for high-reliability systems like braking and steering."
        },
        {
          id: 12,
          question: "What detects wheel speed?",
          options: [
            "Pressure sensors",
            "Speed sensors",
            "Position sensors",
            "Temperature sensors"
          ],
          correctAnswer: 1,
          explanation: "Speed sensors detect individual wheel speeds for ABS and stability control."
        },
        {
          id: 13,
          question: "What deploys safety restraints?",
          options: [
            "Body Control Module",
            "Airbag Control Module",
            "Transmission Control Module",
            "Engine Control Module"
          ],
          correctAnswer: 1,
          explanation: "Airbag Control Module deploys airbags and seatbelt pretensioners during crashes."
        },
        {
          id: 14,
          question: "What is for infotainment systems?",
          options: [
            "Ethernet",
            "Local Interconnect Network",
            "Controller Area Network",
            "FlexRay"
          ],
          correctAnswer: 0,
          explanation: "Ethernet provides high bandwidth for infotainment and camera systems."
        },
        {
          id: 15,
          question: "What enables parking assist?",
          options: [
            "Proximity sensors",
            "Pressure sensors",
            "Temperature sensors",
            "Position sensors"
          ],
          correctAnswer: 0,
          explanation: "Proximity sensors enable parking assist and collision avoidance systems."
        },
        {
          id: 16,
          question: "What maintains following distance?",
          options: [
            "Automatic Emergency Braking",
            "Lane Keeping Assist",
            "Adaptive Cruise Control",
            "Blind Spot Monitoring"
          ],
          correctAnswer: 2,
          explanation: "Adaptive Cruise Control maintains set following distance from vehicle ahead."
        },
        {
          id: 17,
          question: "What is for troubleshooting?",
          options: [
            "Communication protocols",
            "Diagnostic protocols",
            "Entertainment protocols",
            "Navigation protocols"
          ],
          correctAnswer: 1,
          explanation: "Diagnostic protocols like OBD-II enable troubleshooting and emissions testing."
        },
        {
          id: 18,
          question: "What helps prevent lane departure?",
          options: [
            "Lane Keeping Assist",
            "Adaptive Cruise Control",
            "Automatic Emergency Braking",
            "Blind Spot Monitoring"
          ],
          correctAnswer: 0,
          explanation: "Lane Keeping Assist helps prevent unintentional lane departure."
        },
        {
          id: 19,
          question: "What detects potential collisions?",
          options: [
            "Blind Spot Monitoring",
            "Automatic Emergency Braking",
            "Lane Keeping Assist",
            "Adaptive Cruise Control"
          ],
          correctAnswer: 1,
          explanation: "Automatic Emergency Braking detects potential forward collisions."
        },
        {
          id: 20,
          question: "What alerts to adjacent vehicles?",
          options: [
            "Parking Assistance",
            "Blind Spot Monitoring",
            "Adaptive Cruise Control",
            "Lane Keeping Assist"
          ],
          correctAnswer: 1,
          explanation: "Blind Spot Monitoring alerts drivers to vehicles in adjacent lanes."
        }
      ]
    },
    {
      id: 4,
      title: "Materials and Manufacturing",
      content: `# Module 4: Materials and Manufacturing

## Materials Science in Automotive Design
Modern vehicles use advanced materials to achieve strength, weight, and cost targets. Manufacturing processes transform raw materials into complex automotive components.

## Structural Materials
**High-strength steel** provides crash protection with reasonable cost.
**Aluminum alloys** reduce weight for improved efficiency.
**Carbon fiber composites** offer high strength-to-weight ratio.
**Magnesium alloys** provide lightweight structural components.
**Plastics and polymers** for non-structural components and trim.

## Manufacturing Processes
**Stamping** forms sheet metal into body panels.
**Casting** produces complex metal parts like engine blocks.
**Forging** creates high-strength components like crankshafts.
**Injection molding** makes plastic and composite parts.
**Additive manufacturing** (3D printing) for prototypes and complex parts.

## Joining Technologies
**Resistance spot welding** joins sheet metal in body assembly.
**Laser welding** provides precise, high-strength joints.
**Adhesive bonding** reduces stress concentrations and seals joints.
**Mechanical fastening** (bolts, rivets) for serviceable connections.
**Friction stir welding** joins difficult-to-weld materials like aluminum.

## Surface Treatments
**Electrocoating** (E-coat) provides corrosion protection.
**Powder coating** creates durable, attractive finishes.
**Anodizing** protects aluminum surfaces.
**Plating** (chrome, zinc) for decorative and protective finishes.
**Heat treatment** improves material properties like hardness.

## Quality Control
**Dimensional inspection** ensures parts meet specifications.
**Non-destructive testing** finds defects without damaging parts.
**Material testing** verifies mechanical properties.
**Process monitoring** maintains consistent manufacturing quality.
**Statistical process control** identifies trends and variations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What provides crash protection?",
          options: [
            "Plastic",
            "Aluminum",
            "Regular steel",
            "High-strength steel"
          ],
          correctAnswer: 3,
          explanation: "High-strength steel provides excellent crash protection with reasonable cost."
        },
        {
          id: 2,
          question: "What forms sheet metal into panels?",
          options: [
            "Molding",
            "Stamping",
            "Casting",
            "Forging"
          ],
          correctAnswer: 1,
          explanation: "Stamping forms sheet metal into body panels using dies and presses."
        },
        {
          id: 3,
          question: "What reduces weight for efficiency?",
          options: [
            "Steel alloys",
            "Lead alloys",
            "Copper alloys",
            "Aluminum alloys"
          ],
          correctAnswer: 3,
          explanation: "Aluminum alloys reduce vehicle weight, improving fuel efficiency."
        },
        {
          id: 4,
          question: "What joins sheet metal in body assembly?",
          options: [
            "Adhesive bonding",
            "Bolting",
            "Resistance spot welding",
            "Laser welding"
          ],
          correctAnswer: 2,
          explanation: "Resistance spot welding is commonly used to join sheet metal in auto bodies."
        },
        {
          id: 5,
          question: "What offers high strength-to-weight ratio?",
          options: [
            "Aluminum",
            "Plastic",
            "Carbon fiber composites",
            "Steel"
          ],
          correctAnswer: 2,
          explanation: "Carbon fiber composites offer very high strength-to-weight ratios."
        },
        {
          id: 6,
          question: "What produces complex metal parts?",
          options: [
            "Stamping",
            "Forging",
            "Casting",
            "Molding"
          ],
          correctAnswer: 2,
          explanation: "Casting produces complex metal parts like engine blocks and cylinder heads."
        },
        {
          id: 7,
          question: "What provides precise joints?",
          options: [
            "Riveting",
            "Adhesive bonding",
            "Laser welding",
            "Spot welding"
          ],
          correctAnswer: 2,
          explanation: "Laser welding provides precise, high-strength joints with minimal distortion."
        },
        {
          id: 8,
          question: "What creates high-strength components?",
          options: [
            "Stamping",
            "Casting",
            "Forging",
            "Molding"
          ],
          correctAnswer: 2,
          explanation: "Forging creates high-strength components like crankshafts and connecting rods."
        },
        {
          id: 9,
          question: "What reduces stress concentrations?",
          options: [
            "Spot welding",
            "Adhesive bonding",
            "Bolting",
            "Laser welding"
          ],
          correctAnswer: 1,
          explanation: "Adhesive bonding reduces stress concentrations and provides sealing."
        },
        {
          id: 10,
          question: "What makes plastic parts?",
          options: [
            "Stamping",
            "Casting",
            "Forging",
            "Injection molding"
          ],
          correctAnswer: 3,
          explanation: "Injection molding produces plastic and composite automotive components."
        },
        {
          id: 11,
          question: "What provides lightweight structural parts?",
          options: [
            "Steel alloys",
            "Magnesium alloys",
            "Copper alloys",
            "Lead alloys"
          ],
          correctAnswer: 1,
          explanation: "Magnesium alloys provide lightweight structural components."
        },
        {
          id: 12,
          question: "What is for serviceable connections?",
          options: [
            "Adhesive bonding",
            "Mechanical fastening",
            "Welding",
            "Brazing"
          ],
          correctAnswer: 1,
          explanation: "Mechanical fastening allows for service and repair of components."
        },
        {
          id: 13,
          question: "What is for prototypes?",
          options: [
            "Subtractive manufacturing",
            "Additive manufacturing",
            "Forming manufacturing",
            "Joining manufacturing"
          ],
          correctAnswer: 1,
          explanation: "Additive manufacturing (3D printing) is used for prototypes and complex parts."
        },
        {
          id: 14,
          question: "What joins difficult-to-weld materials?",
          options: [
            "Spot welding",
            "Laser welding",
            "Friction stir welding",
            "Arc welding"
          ],
          correctAnswer: 2,
          explanation: "Friction stir welding joins difficult-to-weld materials like aluminum alloys."
        },
        {
          id: 15,
          question: "What provides corrosion protection?",
          options: [
            "Plating",
            "Anodizing",
            "Painting",
            "Electrocoating"
          ],
          correctAnswer: 3,
          explanation: "Electrocoating (E-coat) provides excellent corrosion protection."
        },
        {
          id: 16,
          question: "What creates durable finishes?",
          options: [
            "Brushing",
            "Spray painting",
            "Dipping",
            "Powder coating"
          ],
          correctAnswer: 3,
          explanation: "Powder coating creates durable, attractive finishes on metal parts."
        },
        {
          id: 17,
          question: "What protects aluminum surfaces?",
          options: [
            "Painting",
            "Anodizing",
            "Coating",
            "Plating"
          ],
          correctAnswer: 1,
          explanation: "Anodizing creates a protective oxide layer on aluminum surfaces."
        },
        {
          id: 18,
          question: "What ensures parts meet specifications?",
          options: [
            "Weight measurement",
            "Visual inspection",
            "Dimensional inspection",
            "Color matching"
          ],
          correctAnswer: 2,
          explanation: "Dimensional inspection ensures manufactured parts meet design specifications."
        },
        {
          id: 19,
          question: "What finds defects without damage?",
          options: [
            "Visual testing",
            "Non-destructive testing",
            "Destructive testing",
            "Sample testing"
          ],
          correctAnswer: 1,
          explanation: "Non-destructive testing finds defects without damaging the parts."
        },
        {
          id: 20,
          question: "What improves material hardness?",
          options: [
            "Cold treatment",
            "Surface treatment",
            "Chemical treatment",
            "Heat treatment"
          ],
          correctAnswer: 3,
          explanation: "Heat treatment improves material properties like hardness and strength."
        }
      ]
    },
    {
      id: 5,
      title: "Thermal Management",
      content: `# Module 5: Thermal Management

## Heat Transfer in Automotive Systems
Thermal management ensures optimal operating temperatures for all vehicle systems. Effective heat transfer improves performance, efficiency, and component longevity.

## Engine Cooling Systems
**Radiator design** maximizes heat rejection to atmosphere.
**Coolant flow optimization** ensures even temperature distribution.
**Thermostat operation** maintains optimal engine temperature.
**Coolant pump design** provides adequate flow at all conditions.
**Coolant chemistry** prevents corrosion and maintains properties.

## Air Management Systems
**Intercooler design** reduces intake air temperature in forced induction.
**Charge air cooling** improves combustion efficiency and power.
**Engine bay airflow** manages underhood temperatures.
**Brake cooling** prevents fade during sustained braking.
**Transmission cooling** maintains optimal fluid temperature.

## HVAC Systems
**Refrigeration cycle** principles for air conditioning.
**Compressor design** for refrigerant circulation.
**Evaporator and condenser** design for heat exchange.
**Heating systems** utilize engine coolant warmth.
**Climate control algorithms** for passenger comfort.

## Battery Thermal Management
**Active cooling systems** for high-performance batteries.
**Heating systems** for cold weather operation.
**Thermal runaway prevention** for safety.
**Temperature uniformity** across battery cells.
**Coolant vs air cooling** trade-offs for electric vehicles.

## Thermal Analysis Methods
**Computational Fluid Dynamics (CFD)** simulates airflow and heat transfer.
**Finite Element Analysis (FEA)** predicts thermal stresses.
**Thermal imaging** identifies hot spots in prototypes.
**Temperature mapping** during testing validates designs.
**Heat flux measurement** quantifies thermal loads.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What ensures optimal operating temperatures?",
          options: [
            "Thermal management",
            "Fuel management",
            "Electrical management",
            "Noise management"
          ],
          correctAnswer: 0,
          explanation: "Thermal management ensures optimal temperatures for all vehicle systems."
        },
        {
          id: 2,
          question: "What maximizes heat rejection?",
          options: [
            "Radiator design",
            "Exhaust design",
            "Intake design",
            "Engine design"
          ],
          correctAnswer: 0,
          explanation: "Radiator design maximizes heat rejection from coolant to atmosphere."
        },
        {
          id: 3,
          question: "What principles are for air conditioning?",
          options: [
            "Cooling cycle",
            "Power cycle",
            "Refrigeration cycle",
            "Combustion cycle"
          ],
          correctAnswer: 2,
          explanation: "Refrigeration cycle principles are used in automotive air conditioning."
        },
        {
          id: 4,
          question: "What ensures even temperature distribution?",
          options: [
            "Radiator size",
            "Thermostat setting",
            "Fan speed",
            "Coolant flow optimization"
          ],
          correctAnswer: 3,
          explanation: "Coolant flow optimization ensures even temperature distribution in engine."
        },
        {
          id: 5,
          question: "What reduces intake air temperature?",
          options: [
            "Throttle body",
            "Intake manifold",
            "Air filter design",
            "Intercooler design"
          ],
          correctAnswer: 3,
          explanation: "Intercoolers reduce intake air temperature in forced induction systems."
        },
        {
          id: 6,
          question: "What maintains optimal engine temperature?",
          options: [
            "Water pump operation",
            "Thermostat operation",
            "Radiator operation",
            "Fan operation"
          ],
          correctAnswer: 1,
          explanation: "Thermostats maintain optimal engine temperature by regulating coolant flow."
        },
        {
          id: 7,
          question: "What is for refrigerant circulation?",
          options: [
            "Fan design",
            "Valve design",
            "Compressor design",
            "Pump design"
          ],
          correctAnswer: 2,
          explanation: "Compressors circulate refrigerant in air conditioning systems."
        },
        {
          id: 8,
          question: "What improves combustion efficiency?",
          options: [
            "Charge air cooling",
            "Exhaust cooling",
            "Brake cooling",
            "Oil cooling"
          ],
          correctAnswer: 0,
          explanation: "Charge air cooling improves combustion efficiency and power output."
        },
        {
          id: 9,
          question: "What provides adequate coolant flow?",
          options: [
            "Thermostat design",
            "Hose design",
            "Radiator design",
            "Coolant pump design"
          ],
          correctAnswer: 3,
          explanation: "Coolant pump design provides adequate flow at all operating conditions."
        },
        {
          id: 10,
          question: "What is for heat exchange?",
          options: [
            "Evaporator and condenser",
            "Pump and reservoir",
            "Compressor and expansion valve",
            "Radiator and thermostat"
          ],
          correctAnswer: 0,
          explanation: "Evaporators and condensers facilitate heat exchange in AC systems."
        },
        {
          id: 11,
          question: "What manages underhood temperatures?",
          options: [
            "Engine bay airflow",
            "Coolant flow",
            "Intake flow",
            "Exhaust flow"
          ],
          correctAnswer: 0,
          explanation: "Engine bay airflow management controls underhood temperatures."
        },
        {
          id: 12,
          question: "What utilizes engine warmth?",
          options: [
            "Air conditioning",
            "Heating systems",
            "Cooling systems",
            "Ventilation systems"
          ],
          correctAnswer: 1,
          explanation: "Heating systems utilize engine coolant warmth for cabin heating."
        },
        {
          id: 13,
          question: "What prevents fade during braking?",
          options: [
            "Brake bleeding",
            "Brake adjustment",
            "Brake cooling",
            "Brake replacement"
          ],
          correctAnswer: 2,
          explanation: "Brake cooling prevents fade during sustained or repeated braking."
        },
        {
          id: 14,
          question: "What is for passenger comfort?",
          options: [
            "Suspension algorithms",
            "Climate control algorithms",
            "Engine control algorithms",
            "Transmission algorithms"
          ],
          correctAnswer: 1,
          explanation: "Climate control algorithms maintain passenger comfort automatically."
        },
        {
          id: 15,
          question: "What maintains fluid temperature?",
          options: [
            "Transmission cooling",
            "Brake cooling",
            "Power steering cooling",
            "Engine cooling"
          ],
          correctAnswer: 0,
          explanation: "Transmission cooling maintains optimal fluid temperature for longevity."
        },
        {
          id: 16,
          question: "What is for high-performance batteries?",
          options: [
            "Natural cooling",
            "Passive cooling systems",
            "No cooling",
            "Active cooling systems"
          ],
          correctAnswer: 3,
          explanation: "Active cooling systems manage temperatures in high-performance batteries."
        },
        {
          id: 17,
          question: "What prevents corrosion?",
          options: [
            "Fuel chemistry",
            "Oil chemistry",
            "Coolant chemistry",
            "Brake fluid chemistry"
          ],
          correctAnswer: 2,
          explanation: "Proper coolant chemistry prevents corrosion in cooling systems."
        },
        {
          id: 18,
          question: "What is for cold weather operation?",
          options: [
            "Battery monitoring",
            "Battery charging systems",
            "Battery heating systems",
            "Battery cooling systems"
          ],
          correctAnswer: 2,
          explanation: "Heating systems maintain battery performance in cold weather."
        },
        {
          id: 19,
          question: "What simulates airflow and heat transfer?",
          options: [
            "Computational Fluid Dynamics",
            "Temperature mapping",
            "Finite Element Analysis",
            "Thermal imaging"
          ],
          correctAnswer: 0,
          explanation: "CFD simulates airflow and heat transfer in virtual environments."
        },
        {
          id: 20,
          question: "What predicts thermal stresses?",
          options: [
            "Thermal imaging",
            "Finite Element Analysis",
            "Computational Fluid Dynamics",
            "Heat flux measurement"
          ],
          correctAnswer: 1,
          explanation: "FEA predicts thermal stresses and deformations in components."
        }
      ]
    },
    {
      id: 6,
      title: "Testing and Validation",
      content: `# Module 6: Testing and Validation

## Ensuring Engineering Excellence
Testing validates that designs meet requirements and perform reliably. Comprehensive testing programs ensure safety, durability, and customer satisfaction.

## Laboratory Testing
**Component testing** validates individual parts under controlled conditions.
**Material testing** determines mechanical properties and durability.
**Environmental testing** subjects components to temperature, humidity, and corrosion.
**Fatigue testing** simulates years of use in accelerated time.
**Vibration testing** ensures components can withstand road-induced vibrations.

## Vehicle Testing Programs
**Durability testing** subjects complete vehicles to extreme conditions.
**Performance testing** measures acceleration, braking, and handling.
**Fuel economy testing** follows standardized procedures (EPA, WLTP).
**Emissions testing** verifies compliance with regulations.
**Noise testing** quantifies interior and exterior sound levels.

## Safety Testing
**Crash testing** evaluates occupant protection in collisions.
**Pedestrian protection** testing assesses injury risk to pedestrians.
**Rollover testing** measures roof strength and occupant protection.
**Child safety seat** testing ensures proper installation and protection.
**Advanced driver assistance** testing validates system performance.

## Electrification Testing
**Battery testing** evaluates capacity, power, and cycle life.
**Motor testing** measures efficiency, torque, and thermal performance.
**Charging system** testing verifies compatibility and safety.
**High-voltage safety** testing ensures protection against shocks.
**Range verification** testing under various conditions.

## Validation Processes
**Design Verification Plan** outlines required tests and criteria.
**Failure Mode and Effects Analysis (FMEA)** identifies potential failures.
**Test-to-failure** determines safety margins and weak points.
**Correlation analysis** compares test results with simulation predictions.
**Certification testing** for regulatory approval and homologation.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What validates designs meet requirements?",
          options: [
            "Assuming",
            "Testing",
            "Hoping",
            "Guessing"
          ],
          correctAnswer: 1,
          explanation: "Testing validates that designs meet requirements and perform reliably."
        },
        {
          id: 2,
          question: "What validates individual parts?",
          options: [
            "Component testing",
            "System testing",
            "Vehicle testing",
            "Field testing"
          ],
          correctAnswer: 0,
          explanation: "Component testing validates individual parts under controlled conditions."
        },
        {
          id: 3,
          question: "What evaluates occupant protection?",
          options: [
            "Performance testing",
            "Durability testing",
            "Emissions testing",
            "Crash testing"
          ],
          correctAnswer: 3,
          explanation: "Crash testing evaluates occupant protection during collision events."
        },
        {
          id: 4,
          question: "What determines mechanical properties?",
          options: [
            "Vehicle testing",
            "Component testing",
            "Material testing",
            "System testing"
          ],
          correctAnswer: 2,
          explanation: "Material testing determines mechanical properties and durability."
        },
        {
          id: 5,
          question: "What subjects vehicles to extreme conditions?",
          options: [
            "Performance testing",
            "Emissions testing",
            "Durability testing",
            "Noise testing"
          ],
          correctAnswer: 2,
          explanation: "Durability testing subjects complete vehicles to extreme conditions."
        },
        {
          id: 6,
          question: "What subjects components to temperature?",
          options: [
            "Shock testing",
            "Environmental testing",
            "Fatigue testing",
            "Vibration testing"
          ],
          correctAnswer: 1,
          explanation: "Environmental testing subjects components to temperature, humidity, and corrosion."
        },
        {
          id: 7,
          question: "What measures acceleration and handling?",
          options: [
            "Durability testing",
            "Noise testing",
            "Emissions testing",
            "Performance testing"
          ],
          correctAnswer: 3,
          explanation: "Performance testing measures acceleration, braking, and handling characteristics."
        },
        {
          id: 8,
          question: "What simulates years of use?",
          options: [
            "Fatigue testing",
            "Shock testing",
            "Environmental testing",
            "Vibration testing"
          ],
          correctAnswer: 0,
          explanation: "Fatigue testing simulates years of use in accelerated time frames."
        },
        {
          id: 9,
          question: "What follows standardized procedures?",
          options: [
            "Performance testing",
            "Noise testing",
            "Fuel economy testing",
            "Durability testing"
          ],
          correctAnswer: 2,
          explanation: "Fuel economy testing follows standardized procedures like EPA or WLTP cycles."
        },
        {
          id: 10,
          question: "What assesses injury risk to pedestrians?",
          options: [
            "Occupant protection testing",
            "Child safety testing",
            "Rollover testing",
            "Pedestrian protection testing"
          ],
          correctAnswer: 3,
          explanation: "Pedestrian protection testing assesses injury risk to pedestrians in collisions."
        },
        {
          id: 11,
          question: "What withstands road vibrations?",
          options: [
            "Vibration testing",
            "Environmental testing",
            "Fatigue testing",
            "Shock testing"
          ],
          correctAnswer: 0,
          explanation: "Vibration testing ensures components can withstand road-induced vibrations."
        },
        {
          id: 12,
          question: "What verifies compliance with regulations?",
          options: [
            "Performance testing",
            "Noise testing",
            "Emissions testing",
            "Durability testing"
          ],
          correctAnswer: 2,
          explanation: "Emissions testing verifies compliance with environmental regulations."
        },
        {
          id: 13,
          question: "What measures roof strength?",
          options: [
            "Child seat testing",
            "Crash testing",
            "Rollover testing",
            "Pedestrian testing"
          ],
          correctAnswer: 2,
          explanation: "Rollover testing measures roof strength and occupant protection."
        },
        {
          id: 14,
          question: "What quantifies sound levels?",
          options: [
            "Noise testing",
            "Performance testing",
            "Emissions testing",
            "Durability testing"
          ],
          correctAnswer: 0,
          explanation: "Noise testing quantifies interior and exterior vehicle sound levels."
        },
        {
          id: 15,
          question: "What evaluates battery capacity?",
          options: [
            "Range testing",
            "Battery testing",
            "Motor testing",
            "Charging testing"
          ],
          correctAnswer: 1,
          explanation: "Battery testing evaluates capacity, power output, and cycle life."
        },
        {
          id: 16,
          question: "What ensures proper installation?",
          options: [
            "Pedestrian testing",
            "Rollover testing",
            "Occupant testing",
            "Child safety seat testing"
          ],
          correctAnswer: 3,
          explanation: "Child safety seat testing ensures proper installation and child protection."
        },
        {
          id: 17,
          question: "What measures motor efficiency?",
          options: [
            "Charging testing",
            "Range testing",
            "Motor testing",
            "Battery testing"
          ],
          correctAnswer: 2,
          explanation: "Motor testing measures efficiency, torque output, and thermal performance."
        },
        {
          id: 18,
          question: "What validates system performance?",
          options: [
            "Basic system testing",
            "Advanced driver assistance testing",
            "Material testing",
            "Component testing"
          ],
          correctAnswer: 1,
          explanation: "ADAS testing validates the performance of driver assistance systems."
        },
        {
          id: 19,
          question: "What verifies charging compatibility?",
          options: [
            "Range testing",
            "Charging system testing",
            "Motor testing",
            "Battery testing"
          ],
          correctAnswer: 1,
          explanation: "Charging system testing verifies compatibility and safety with chargers."
        },
        {
          id: 20,
          question: "What outlines required tests?",
          options: [
            "Test Report",
            "Analysis Report",
            "Test Procedure",
            "Design Verification Plan"
          ],
          correctAnswer: 3,
          explanation: "Design Verification Plan outlines all required tests and acceptance criteria."
        }
      ]
    }
  ],
  finalExam: {
    title: "Automotive Engineering Diploma Final Exam",
    description: "Comprehensive examination covering all 6 modules of Automotive Engineering Diploma course.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What combines mechanical engineering with physics?",
        options: [
          "Vehicle dynamics",
          "Electrical systems",
          "Manufacturing",
          "Engine design"
        ],
        correctAnswer: 0,
        explanation: "Vehicle dynamics combines mechanical engineering with physics.",
        module: 1
      },
      {
        id: 2,
        question: "What covers engine to wheel torque?",
        options: [
          "Powertrain engineering",
          "Body engineering",
          "Interior design",
          "Suspension design"
        ],
        correctAnswer: 0,
        explanation: "Powertrain engineering covers all components from engine to wheels.",
        module: 2
      },
      {
        id: 3,
        question: "What integrates sensors and processors?",
        options: [
          "Hydraulic systems",
          "Automotive electronics",
          "Pneumatic systems",
          "Mechanical systems"
        ],
        correctAnswer: 1,
        explanation: "Automotive electronics integrate sensors, processors, and actuators.",
        module: 3
      },
      {
        id: 4,
        question: "What provides crash protection?",
        options: [
          "High-strength steel",
          "Aluminum",
          "Plastic",
          "Regular steel"
        ],
        correctAnswer: 0,
        explanation: "High-strength steel provides excellent crash protection.",
        module: 4
      },
      {
        id: 5,
        question: "What ensures optimal operating temperatures?",
        options: [
          "Fuel management",
          "Electrical management",
          "Thermal management",
          "Noise management"
        ],
        correctAnswer: 2,
        explanation: "Thermal management ensures optimal temperatures for all systems.",
        module: 5
      },
      {
        id: 6,
        question: "What validates designs meet requirements?",
        options: [
          "Guessing",
          "Assuming",
          "Hoping",
          "Testing"
        ],
        correctAnswer: 3,
        explanation: "Testing validates that designs meet requirements and perform reliably.",
        module: 6
      },
      {
        id: 7,
        question: "What affects handling and stability?",
        options: [
          "Radio system",
          "Seat material",
          "Mass distribution",
          "Paint color"
        ],
        correctAnswer: 2,
        explanation: "Mass distribution affects vehicle handling and stability.",
        module: 1
      },
      {
        id: 8,
        question: "What affects efficiency and emissions?",
        options: [
          "Exhaust tip design",
          "Air filter color",
          "Oil cap location",
          "Combustion chamber design"
        ],
        correctAnswer: 3,
        explanation: "Combustion chamber design affects efficiency and emissions.",
        module: 2
      },
      {
        id: 9,
        question: "What manages fuel and ignition?",
        options: [
          "Engine Control Module",
          "Body Control Module",
          "ABS Controller",
          "Transmission Control Module"
        ],
        correctAnswer: 0,
        explanation: "Engine Control Module manages fuel injection and ignition timing.",
        module: 3
      },
      {
        id: 10,
        question: "What forms sheet metal into panels?",
        options: [
          "Forging",
          "Stamping",
          "Casting",
          "Molding"
        ],
        correctAnswer: 1,
        explanation: "Stamping forms sheet metal into body panels.",
        module: 4
      },
      {
        id: 11,
        question: "What maximizes heat rejection?",
        options: [
          "Intake design",
          "Exhaust design",
          "Radiator design",
          "Engine design"
        ],
        correctAnswer: 2,
        explanation: "Radiator design maximizes heat rejection to atmosphere.",
        module: 5
      },
      {
        id: 12,
        question: "What validates individual parts?",
        options: [
          "System testing",
          "Vehicle testing",
          "Field testing",
          "Component testing"
        ],
        correctAnswer: 3,
        explanation: "Component testing validates individual parts under controlled conditions.",
        module: 6
      },
      {
        id: 13,
        question: "What influences roll behavior?",
        options: [
          "Fuel type",
          "Tire pressure",
          "Center of gravity",
          "Wheel size"
        ],
        correctAnswer: 2,
        explanation: "Center of gravity location influences roll behavior.",
        module: 1
      },
      {
        id: 14,
        question: "What balances power and efficiency?",
        options: [
          "Valvetrain optimization",
          "Paint application",
          "Sound system",
          "Seat adjustment"
        ],
        correctAnswer: 0,
        explanation: "Valvetrain optimization balances power, efficiency, and noise.",
        module: 2
      },
      {
        id: 15,
        question: "What monitors crankshaft position?",
        options: [
          "Position sensors",
          "Pressure sensors",
          "Speed sensors",
          "Temperature sensors"
        ],
        correctAnswer: 0,
        explanation: "Position sensors monitor crankshaft, camshaft, and throttle positions.",
        module: 3
      },
      {
        id: 16,
        question: "What reduces weight for efficiency?",
        options: [
          "Aluminum alloys",
          "Lead alloys",
          "Copper alloys",
          "Steel alloys"
        ],
        correctAnswer: 0,
        explanation: "Aluminum alloys reduce vehicle weight for improved efficiency.",
        module: 4
      },
      {
        id: 17,
        question: "What principles are for air conditioning?",
        options: [
          "Power cycle",
          "Combustion cycle",
          "Cooling cycle",
          "Refrigeration cycle"
        ],
        correctAnswer: 3,
        explanation: "Refrigeration cycle principles are used in automotive air conditioning.",
        module: 5
      },
      {
        id: 18,
        question: "What evaluates occupant protection?",
        options: [
          "Durability testing",
          "Crash testing",
          "Emissions testing",
          "Performance testing"
        ],
        correctAnswer: 1,
        explanation: "Crash testing evaluates occupant protection during collisions.",
        module: 6
      },
      {
        id: 19,
        question: "What determines wheel movement?",
        options: [
          "Transmission type",
          "Brake size",
          "Engine power",
          "Suspension geometry"
        ],
        correctAnswer: 3,
        explanation: "Suspension geometry determines how wheels move.",
        module: 1
      },
      {
        id: 20,
        question: "What balances acceleration and economy?",
        options: [
          "Oil viscosity",
          "Gear ratio selection",
          "Fuel type",
          "Tire pressure"
        ],
        correctAnswer: 1,
        explanation: "Gear ratio selection balances acceleration with fuel economy.",
        module: 2
      },
      {
        id: 21,
        question: "What is for high-speed control systems?",
        options: [
          "Ethernet",
          "FlexRay",
          "Controller Area Network",
          "Local Interconnect Network"
        ],
        correctAnswer: 2,
        explanation: "CAN bus is used for high-speed communication between control systems.",
        module: 3
      },
      {
        id: 22,
        question: "What joins sheet metal in body assembly?",
        options: [
          "Laser welding",
          "Resistance spot welding",
          "Adhesive bonding",
          "Bolting"
        ],
        correctAnswer: 1,
        explanation: "Resistance spot welding joins sheet metal in auto bodies.",
        module: 4
      },
      {
        id: 23,
        question: "What ensures even temperature distribution?",
        options: [
          "Fan speed",
          "Thermostat setting",
          "Radiator size",
          "Coolant flow optimization"
        ],
        correctAnswer: 3,
        explanation: "Coolant flow optimization ensures even temperature distribution.",
        module: 5
      },
      {
        id: 24,
        question: "What determines mechanical properties?",
        options: [
          "System testing",
          "Component testing",
          "Material testing",
          "Vehicle testing"
        ],
        correctAnswer: 2,
        explanation: "Material testing determines mechanical properties and durability.",
        module: 6
      },
      {
        id: 25,
        question: "What is calculated based on vehicle weight?",
        options: [
          "Fuel economy",
          "Top speed",
          "Cargo capacity",
          "Spring rate"
        ],
        correctAnswer: 3,
        explanation: "Spring rate is calculated based on vehicle weight and intended use.",
        module: 1
      },
      {
        id: 26,
        question: "What increases power density?",
        options: [
          "Larger wheels",
          "Brighter lights",
          "Better speakers",
          "Forced induction systems"
        ],
        correctAnswer: 3,
        explanation: "Forced induction systems like turbochargers increase power density.",
        module: 2
      },
      {
        id: 27,
        question: "What controls shifting operation?",
        options: [
          "Airbag Controller",
          "Body Control Module",
          "Engine Control Module",
          "Transmission Control Module"
        ],
        correctAnswer: 3,
        explanation: "Transmission Control Module controls automatic shifting.",
        module: 3
      },
      {
        id: 28,
        question: "What offers high strength-to-weight ratio?",
        options: [
          "Carbon fiber composites",
          "Aluminum",
          "Plastic",
          "Steel"
        ],
        correctAnswer: 0,
        explanation: "Carbon fiber composites offer high strength-to-weight ratios.",
        module: 4
      },
      {
        id: 29,
        question: "What reduces intake air temperature?",
        options: [
          "Intercooler design",
          "Air filter design",
          "Intake manifold",
          "Throttle body"
        ],
        correctAnswer: 0,
        explanation: "Intercoolers reduce intake air temperature in forced induction.",
        module: 5
      },
      {
        id: 30,
        question: "What subjects vehicles to extreme conditions?",
        options: [
          "Durability testing",
          "Noise testing",
          "Performance testing",
          "Emissions testing"
        ],
        correctAnswer: 0,
        explanation: "Durability testing subjects vehicles to extreme conditions.",
        module: 6
      },
      {
        id: 31,
        question: "What impacts fuel efficiency?",
        options: [
          "Aerodynamic forces",
          "Seat heaters",
          "Radio volume",
          "Window tint"
        ],
        correctAnswer: 0,
        explanation: "Aerodynamic forces impact fuel efficiency at higher speeds.",
        module: 1
      },
      {
        id: 32,
        question: "What optimizes mixture formation?",
        options: [
          "Fuel line color",
          "Fuel tank shape",
          "Fuel injection strategies",
          "Fuel cap design"
        ],
        correctAnswer: 2,
        explanation: "Fuel injection strategies optimize air-fuel mixture formation.",
        module: 2
      },
      {
        id: 33,
        question: "What handles lighting and locks?",
        options: [
          "Body Control Module",
          "Engine Control Module",
          "Transmission Control Module",
          "ABS Controller"
        ],
        correctAnswer: 0,
        explanation: "Body Control Module handles lighting, door locks, and accessories.",
        module: 3
      },
      {
        id: 34,
        question: "What produces complex metal parts?",
        options: [
          "Stamping",
          "Casting",
          "Molding",
          "Forging"
        ],
        correctAnswer: 1,
        explanation: "Casting produces complex metal parts like engine blocks.",
        module: 4
      },
      {
        id: 35,
        question: "What maintains optimal engine temperature?",
        options: [
          "Thermostat operation",
          "Radiator operation",
          "Water pump operation",
          "Fan operation"
        ],
        correctAnswer: 0,
        explanation: "Thermostats maintain optimal engine temperature.",
        module: 5
      },
      {
        id: 36,
        question: "What subjects components to temperature?",
        options: [
          "Fatigue testing",
          "Vibration testing",
          "Environmental testing",
          "Shock testing"
        ],
        correctAnswer: 2,
        explanation: "Environmental testing subjects components to temperature and humidity.",
        module: 6
      },
      {
        id: 37,
        question: "What occurs during acceleration and braking?",
        options: [
          "Sound increase",
          "Weight transfer",
          "Temperature rise",
          "Color change"
        ],
        correctAnswer: 1,
        explanation: "Weight transfer occurs during acceleration, braking, and cornering.",
        module: 1
      },
      {
        id: 38,
        question: "What reduces harmful emissions?",
        options: [
          "Exhaust paint",
          "Exhaust hangers",
          "Exhaust aftertreatment",
          "Exhaust tips"
        ],
        correctAnswer: 2,
        explanation: "Exhaust aftertreatment systems reduce harmful emissions.",
        module: 2
      },
      {
        id: 39,
        question: "What prevents wheel lockup?",
        options: [
          "Transmission Control Module",
          "Anti-lock Braking System",
          "Engine Control Module",
          "Body Control Module"
        ],
        correctAnswer: 1,
        explanation: "ABS controller prevents wheel lockup during hard braking.",
        module: 3
      },
      {
        id: 40,
        question: "What measures acceleration and handling?",
        options: [
          "Noise testing",
          "Performance testing",
          "Durability testing",
          "Emissions testing"
        ],
        correctAnswer: 1,
        explanation: "Performance testing measures acceleration, braking, and handling.",
        module: 6
      }
    ]
  }
};

export default automotiveEngineeringDiploma;
