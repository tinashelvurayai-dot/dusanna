// mining-engineering-diploma.ts

export const miningEngineeringDiploma = {
  // COURSE METADATA & IDENTIFICATION
  id: "mining-engineering-diploma",
  title: "Mining Engineering (Diploma)",
  description: "Advanced mining engineering principles including mine design, geotechnical engineering, mineral processing, and mine management for efficient and sustainable mining operations.",
  duration: "8 weeks",
  timeCommitment: "6-7 hours per week",
  price: 18,
  prerequisite: "Quarry Operations (Certificate) or equivalent knowledge",
  icon: "⚒️",
  badge: "Diploma",
  learningOutcomes: [
    "Design and plan mining operations systematically",
    "Apply geotechnical principles to mine stability",
    "Implement mineral processing techniques",
    "Manage mine ventilation and environmental systems",
    "Apply mine economics and valuation methods",
    "Implement advanced safety and risk management systems"
  ],

  // MODULE ARCHITECTURE - 6 COMPREHENSIVE MODULES
  modules: [
    {
      id: 1,
      title: "Mine Planning and Design",
      content: `
## Systematic Mine Development

Mine planning transforms mineral resources into viable mining operations through systematic design and scheduling. Advanced planning ensures economic viability, safety, and operational efficiency.

### Mine Design Principles

Fundamental design considerations for mining operations:
- **Geological Understanding**: Interpretation of ore body geometry and characteristics
- **Mining Method Selection**: Choosing appropriate extraction methods
- **Access Design**: Designing entry points and haulage systems
- **Production Scheduling**: Planning extraction sequences and rates
- **Infrastructure Planning**: Designing support facilities and services

Each design element must balance technical feasibility with economic viability.

### Reserve Estimation Methods

Quantifying mineral resources and reserves:
- **Sampling Techniques**: Systematic collection of geological data
- **Grade Estimation**: Determining mineral content variations
- **Volume Calculations**: Computing ore body volumes from geological data
- **Classification Systems**: Categorizing resources by confidence levels
- **Cut-off Grades**: Determining economic limits for extraction

Accurate reserve estimation forms the foundation of mine planning.

### Open Pit Design

Design principles for surface mining operations:
- **Pit Geometry**: Designing slope angles and bench configurations
- **Haul Road Design**: Planning efficient transport routes
- **Drainage Systems**: Managing surface and groundwater
- **Waste Dump Planning**: Designing storage for non-ore materials
- **Progressive Rehabilitation**: Planning concurrent reclamation

Open pit designs must optimize extraction while maintaining stability.

### Underground Layout Design

Designing subsurface mining operations:
- **Access Design**: Shafts, declines, and adits for entry
- **Level Development**: Horizontal working horizons
- **Stope Design**: Extraction cavity design and sequencing
- **Ventilation Circuit**: Air flow planning and control
- **Material Handling**: Ore transport systems design

Underground designs prioritize safety and operational efficiency.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves interpretation of ore body geometry?",
          options: [
            "Mining Method Selection",
            "Geological Understanding",
            "Production Scheduling",
            "Access Design"
          ],
          correctAnswer: 1,
          explanation: "Geological understanding involves analyzing the shape, size, and characteristics of mineral deposits."
        },
        {
          id: 2,
          question: "What involves choosing appropriate extraction methods?",
          options: [
            "Infrastructure Planning",
            "Access Design",
            "Geological Understanding",
            "Mining Method Selection"
          ],
          correctAnswer: 3,
          explanation: "Mining method selection matches extraction techniques to ore body characteristics and conditions."
        },
        {
          id: 3,
          question: "What involves systematic collection of geological data?",
          options: [
            "Volume Calculations",
            "Classification Systems",
            "Sampling Techniques",
            "Grade Estimation"
          ],
          correctAnswer: 2,
          explanation: "Sampling techniques systematically collect representative geological data for analysis."
        },
        {
          id: 4,
          question: "What determines mineral content variations?",
          options: [
            "Sampling Techniques",
            "Cut-off Grades",
            "Grade Estimation",
            "Volume Calculations"
          ],
          correctAnswer: 2,
          explanation: "Grade estimation quantifies how mineral content varies throughout the ore body."
        },
        {
          id: 5,
          question: "What designs slope angles and bench configurations?",
          options: [
            "Drainage Systems",
            "Waste Dump Planning",
            "Haul Road Design",
            "Pit Geometry"
          ],
          correctAnswer: 3,
          explanation: "Pit geometry designs the overall shape and internal structure of open pit mines."
        },
        {
          id: 6,
          question: "What plans efficient transport routes?",
          options: [
            "Progressive Rehabilitation",
            "Pit Geometry",
            "Haul Road Design",
            "Drainage Systems"
          ],
          correctAnswer: 2,
          explanation: "Haul road design creates safe and efficient routes for material transport within pits."
        },
        {
          id: 7,
          question: "What are shafts, declines, and adits for entry?",
          options: [
            "Ventilation Circuit",
            "Access Design",
            "Stope Design",
            "Level Development"
          ],
          correctAnswer: 1,
          explanation: "Access design creates entry points to underground mining areas."
        },
        {
          id: 8,
          question: "What are horizontal working horizons?",
          options: [
            "Access Design",
            "Level Development",
            "Material Handling",
            "Stope Design"
          ],
          correctAnswer: 1,
          explanation: "Level development creates horizontal working platforms at different depths."
        },
        {
          id: 9,
          question: "What computes ore body volumes from geological data?",
          options: [
            "Cut-off Grades",
            "Grade Estimation",
            "Classification Systems",
            "Volume Calculations"
          ],
          correctAnswer: 3,
          explanation: "Volume calculations determine how much mineralized material exists in the deposit."
        },
        {
          id: 10,
          question: "What categorizes resources by confidence levels?",
          options: [
            "Classification Systems",
            "Sampling Techniques",
            "Cut-off Grades",
            "Volume Calculations"
          ],
          correctAnswer: 0,
          explanation: "Classification systems categorize resources based on geological confidence and economic viability."
        },
        {
          id: 11,
          question: "What manages surface and groundwater?",
          options: [
            "Waste Dump Planning",
            "Haul Road Design",
            "Drainage Systems",
            "Pit Geometry"
          ],
          correctAnswer: 2,
          explanation: "Drainage systems control water flow to maintain pit stability and safety."
        },
        {
          id: 12,
          question: "What designs storage for non-ore materials?",
          options: [
            "Haul Road Design",
            "Progressive Rehabilitation",
            "Drainage Systems",
            "Waste Dump Planning"
          ],
          correctAnswer: 3,
          explanation: "Waste dump planning designs areas for safe storage of non-valuable materials."
        },
        {
          id: 13,
          question: "What designs extraction cavity design and sequencing?",
          options: [
            "Stope Design",
            "Level Development",
            "Ventilation Circuit",
            "Material Handling"
          ],
          correctAnswer: 0,
          explanation: "Stope design plans the extraction cavities and their development sequence."
        },
        {
          id: 14,
          question: "What plans air flow planning and control?",
          options: [
            "Stope Design",
            "Material Handling",
            "Access Design",
            "Ventilation Circuit"
          ],
          correctAnswer: 3,
          explanation: "Ventilation circuits design air flow paths to maintain air quality underground."
        },
        {
          id: 15,
          question: "What determines economic limits for extraction?",
          options: [
            "Cut-off Grades",
            "Classification Systems",
            "Volume Calculations",
            "Grade Estimation"
          ],
          correctAnswer: 0,
          explanation: "Cut-off grades determine the minimum mineral content that makes extraction economical."
        },
        {
          id: 16,
          question: "What designs support facilities and services?",
          options: [
            "Infrastructure Planning",
            "Production Scheduling",
            "Mining Method Selection",
            "Access Design"
          ],
          correctAnswer: 0,
          explanation: "Infrastructure planning designs all supporting facilities needed for mining operations."
        },
        {
          id: 17,
          question: "What plans extraction sequences and rates?",
          options: [
            "Geological Understanding",
            "Production Scheduling",
            "Infrastructure Planning",
            "Mining Method Selection"
          ],
          correctAnswer: 1,
          explanation: "Production scheduling determines when and how much material will be extracted."
        },
        {
          id: 18,
          question: "What plans concurrent reclamation?",
          options: [
            "Progressive Rehabilitation",
            "Waste Dump Planning",
            "Drainage Systems",
            "Pit Geometry"
          ],
          correctAnswer: 0,
          explanation: "Progressive rehabilitation plans reclamation activities alongside mining operations."
        },
        {
          id: 19,
          question: "What designs ore transport systems?",
          options: [
            "Stope Design",
            "Level Development",
            "Material Handling",
            "Ventilation Circuit"
          ],
          correctAnswer: 2,
          explanation: "Material handling designs systems to transport ore from extraction points to surface."
        },
        {
          id: 20,
          question: "How many mine design principles were specifically listed?",
          options: [
            "Seven",
            "Five",
            "Nine",
            "Three"
          ],
          correctAnswer: 1,
          explanation: "Five principles: geological understanding, mining method selection, access design, production scheduling, infrastructure planning."
        }
      ]
    },
    {
      id: 2,
      title: "Geotechnical Engineering",
      content: `
## Rock Mechanics and Ground Control

Geotechnical engineering applies rock mechanics principles to ensure mine stability and safety. Understanding ground behavior is essential for designing stable excavations and support systems.

### Rock Mass Characterization

Systematic assessment of rock properties:
- **Rock Quality Designation**: Quantitative measure of rock quality
- **Rock Mass Rating**: Comprehensive classification system
- **Joint Characteristics**: Analysis of rock discontinuities
- **Strength Testing**: Determining rock compressive and tensile strength
- **Deformation Properties**: Understanding how rock deforms under stress

Characterization provides data for stability analysis and support design.

### Stress Analysis

Understanding stress distribution in rock masses:
- **In-situ Stresses**: Natural stresses present in undisturbed rock
- **Induced Stresses**: Stresses caused by mining excavations
- **Stress Redistribution**: How stresses change around openings
- **Stress Concentration**: Areas where stresses are amplified
- **Stress Measurement**: Techniques for measuring rock stresses

Stress analysis predicts where stability problems may occur.

### Ground Support Systems

Methods to stabilize underground excavations:
- **Rock Bolting**: Installing reinforcement in rock masses
- **Shotcrete**: Sprayed concrete for surface support
- **Steel Sets**: Structural steel supports for large openings
- **Cable Bolting**: Long tendon support for major structures
- **Mesh and Lagging**: Surface containment systems

Support systems prevent rock falls and maintain excavation stability.

### Slope Stability Analysis

Evaluating stability of surface mine slopes:
- **Failure Modes**: Different ways slopes can fail
- **Factor of Safety**: Quantitative stability measure
- **Monitoring Systems**: Instruments to detect slope movement
- **Stabilization Methods**: Techniques to improve slope stability
- **Design Optimization**: Balancing safety with economic extraction

Slope stability analysis prevents catastrophic failures in open pits.

### Numerical Modeling

Computer-based analysis of geotechnical problems:
- **Finite Element Analysis**: Stress and deformation modeling
- **Discrete Element Modeling**: Behavior of jointed rock masses
- **Boundary Element Methods**: Efficient stress analysis
- **Model Calibration**: Matching models with observed behavior
- **Sensitivity Analysis**: Understanding key influencing factors

Numerical modeling predicts ground behavior under various conditions.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a quantitative measure of rock quality?",
          options: [
            "Rock Mass Rating",
            "Rock Quality Designation",
            "Joint Characteristics",
            "Strength Testing"
          ],
          correctAnswer: 1,
          explanation: "Rock Quality Designation (RQD) quantifies rock quality based on drill core recovery."
        },
        {
          id: 2,
          question: "What is a comprehensive classification system?",
          options: [
            "Rock Mass Rating",
            "Joint Characteristics",
            "Rock Quality Designation",
            "Deformation Properties"
          ],
          correctAnswer: 0,
          explanation: "Rock Mass Rating (RMR) provides a comprehensive assessment of rock mass quality."
        },
        {
          id: 3,
          question: "What analyzes rock discontinuities?",
          options: [
            "Deformation Properties",
            "Rock Mass Rating",
            "Strength Testing",
            "Joint Characteristics"
          ],
          correctAnswer: 3,
          explanation: "Joint characteristics analysis examines the orientation, spacing, and condition of rock fractures."
        },
        {
          id: 4,
          question: "What are natural stresses in undisturbed rock?",
          options: [
            "Stress Concentration",
            "Stress Redistribution",
            "Induced Stresses",
            "In-situ Stresses"
          ],
          correctAnswer: 3,
          explanation: "In-situ stresses exist naturally in rock before any mining disturbance occurs."
        },
        {
          id: 5,
          question: "What are stresses caused by mining excavations?",
          options: [
            "In-situ Stresses",
            "Stress Redistribution",
            "Induced Stresses",
            "Stress Measurement"
          ],
          correctAnswer: 2,
          explanation: "Induced stresses result from the creation of excavations that alter the natural stress field."
        },
        {
          id: 6,
          question: "What installs reinforcement in rock masses?",
          options: [
            "Steel Sets",
            "Shotcrete",
            "Cable Bolting",
            "Rock Bolting"
          ],
          correctAnswer: 3,
          explanation: "Rock bolting installs steel rods to reinforce rock masses around excavations."
        },
        {
          id: 7,
          question: "What uses sprayed concrete for surface support?",
          options: [
            "Rock Bolting",
            "Mesh and Lagging",
            "Shotcrete",
            "Steel Sets"
          ],
          correctAnswer: 2,
          explanation: "Shotcrete provides immediate surface support and prevents weathering of exposed rock."
        },
        {
          id: 8,
          question: "What are different ways slopes can fail?",
          options: [
            "Monitoring Systems",
            "Failure Modes",
            "Factor of Safety",
            "Stabilization Methods"
          ],
          correctAnswer: 1,
          explanation: "Failure modes describe different mechanisms of slope failure like planar, wedge, or circular failures."
        },
        {
          id: 9,
          question: "What is a quantitative stability measure?",
          options: [
            "Monitoring Systems",
            "Failure Modes",
            "Design Optimization",
            "Factor of Safety"
          ],
          correctAnswer: 3,
          explanation: "Factor of Safety quantifies how much stronger a slope is compared to the forces trying to make it fail."
        },
        {
          id: 10,
          question: "What involves stress and deformation modeling?",
          options: [
            "Boundary Element Methods",
            "Model Calibration",
            "Finite Element Analysis",
            "Discrete Element Modeling"
          ],
          correctAnswer: 2,
          explanation: "Finite Element Analysis divides rock masses into small elements to model stress and deformation."
        },
        {
          id: 11,
          question: "What determines rock compressive strength?",
          options: [
            "Strength Testing",
            "Rock Quality Designation",
            "Deformation Properties",
            "Joint Characteristics"
          ],
          correctAnswer: 0,
          explanation: "Strength testing measures how much stress rock can withstand before failing."
        },
        {
          id: 12,
          question: "What understands how rock deforms under stress?",
          options: [
            "Strength Testing",
            "Rock Mass Rating",
            "Joint Characteristics",
            "Deformation Properties"
          ],
          correctAnswer: 3,
          explanation: "Deformation properties describe how rock strains when subjected to stress."
        },
        {
          id: 13,
          question: "What examines how stresses change around openings?",
          options: [
            "Induced Stresses",
            "Stress Redistribution",
            "Stress Measurement",
            "Stress Concentration"
          ],
          correctAnswer: 1,
          explanation: "Stress redistribution analyzes how creating openings alters the original stress field."
        },
        {
          id: 14,
          question: "What examines areas where stresses are amplified?",
          options: [
            "Stress Measurement",
            "Stress Concentration",
            "In-situ Stresses",
            "Stress Redistribution"
          ],
          correctAnswer: 1,
          explanation: "Stress concentration identifies locations where stresses are significantly higher than average."
        },
        {
          id: 15,
          question: "What uses structural steel for large openings?",
          options: [
            "Steel Sets",
            "Shotcrete",
            "Mesh and Lagging",
            "Cable Bolting"
          ],
          correctAnswer: 0,
          explanation: "Steel sets provide strong structural support for large underground openings."
        },
        {
          id: 16,
          question: "What uses long tendons for major structures?",
          options: [
            "Cable Bolting",
            "Steel Sets",
            "Mesh and Lagging",
            "Rock Bolting"
          ],
          correctAnswer: 0,
          explanation: "Cable bolting provides deep reinforcement for large underground structures."
        },
        {
          id: 17,
          question: "What instruments detect slope movement?",
          options: [
            "Design Optimization",
            "Factor of Safety",
            "Stabilization Methods",
            "Monitoring Systems"
          ],
          correctAnswer: 3,
          explanation: "Monitoring systems use instruments to detect early signs of slope movement."
        },
        {
          id: 18,
          question: "What techniques improve slope stability?",
          options: [
            "Monitoring Systems",
            "Stabilization Methods",
            "Failure Modes",
            "Design Optimization"
          ],
          correctAnswer: 1,
          explanation: "Stabilization methods include drainage, reinforcement, or geometry changes to improve stability."
        },
        {
          id: 19,
          question: "What examines behavior of jointed rock masses?",
          options: [
            "Boundary Element Methods",
            "Discrete Element Modeling",
            "Finite Element Analysis",
            "Sensitivity Analysis"
          ],
          correctAnswer: 1,
          explanation: "Discrete Element Modeling analyzes how individual rock blocks interact in jointed rock masses."
        },
        {
          id: 20,
          question: "How many ground support systems were specifically listed?",
          options: [
            "Nine",
            "Five",
            "Three",
            "Seven"
          ],
          correctAnswer: 1,
          explanation: "Five systems: rock bolting, shotcrete, steel sets, cable bolting, mesh and lagging."
        }
      ]
    },
    {
      id: 3,
      title: "Mineral Processing",
      content: `
## Ore Treatment and Beneficiation

Mineral processing transforms mined ore into marketable products through physical and chemical treatment. Advanced processing maximizes recovery and product quality while minimizing environmental impact.

### Comminution Circuits

Size reduction processes for mineral liberation:
- **Primary Crushing**: Initial size reduction of run-of-mine ore
- **Secondary Crushing**: Further reduction before grinding
- **Grinding Mills**: Fine size reduction for mineral liberation
- **Classification Systems**: Separating particles by size
- **Circuit Optimization**: Balancing crushing and grinding stages

Comminution is typically the most energy-intensive processing stage.

### Separation Techniques

Methods for separating valuable minerals from waste:
- **Gravity Separation**: Using density differences for separation
- **Magnetic Separation**: Using magnetic properties differences
- **Electrostatic Separation**: Using electrical conductivity differences
- **Flotation**: Using surface chemistry differences
- **Sensor-based Sorting**: Using optical or other sensors for separation

Separation techniques are selected based on mineral properties.

### Hydrometallurgical Processing

Chemical processing of minerals in aqueous solutions:
- **Leaching**: Dissolving valuable minerals into solution
- **Solvent Extraction**: Concentrating metals from leach solutions
- **Ion Exchange**: Using resins to recover specific ions
- **Precipitation**: Recovering metals from solution as solids
- **Electrowinning**: Electrochemical recovery of metals

Hydrometallurgy is particularly important for oxide ores and certain metals.

### Pyrometallurgical Processing

High-temperature processing of minerals:
- **Roasting**: Thermal treatment in oxidizing or reducing atmospheres
- **Smelting**: Melting to separate metals from impurities
- **Refining**: Purification of crude metals
- **Calcining**: Thermal decomposition of minerals
- **Sintering**: Agglomerating fine materials for processing

Pyrometallurgy is energy-intensive but essential for many metal productions.

### Tailings Management

Handling and storing processing waste materials:
- **Tailings Storage Facilities**: Engineered structures for waste storage
- **Water Recovery**: Recycling water from tailings
- **Paste Thickening**: Creating thickened tailings for disposal
- **Tailings Reprocessing**: Recovering additional values from waste
- **Closure Planning**: Designing long-term stable storage

Proper tailings management prevents environmental contamination.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves initial size reduction of run-of-mine ore?",
          options: [
            "Grinding Mills",
            "Primary Crushing",
            "Secondary Crushing",
            "Classification Systems"
          ],
          correctAnswer: 1,
          explanation: "Primary crushing reduces large mine-run ore to manageable sizes for further processing."
        },
        {
          id: 2,
          question: "What involves further reduction before grinding?",
          options: [
            "Primary Crushing",
            "Grinding Mills",
            "Circuit Optimization",
            "Secondary Crushing"
          ],
          correctAnswer: 3,
          explanation: "Secondary crushing further reduces ore size to prepare it for fine grinding."
        },
        {
          id: 3,
          question: "What uses density differences for separation?",
          options: [
            "Gravity Separation",
            "Magnetic Separation",
            "Electrostatic Separation",
            "Flotation"
          ],
          correctAnswer: 0,
          explanation: "Gravity separation exploits density differences between minerals using water or air."
        },
        {
          id: 4,
          question: "What uses magnetic properties differences?",
          options: [
            "Sensor-based Sorting",
            "Electrostatic Separation",
            "Gravity Separation",
            "Magnetic Separation"
          ],
          correctAnswer: 3,
          explanation: "Magnetic separation separates minerals based on their magnetic susceptibility."
        },
        {
          id: 5,
          question: "What dissolves valuable minerals into solution?",
          options: [
            "Precipitation",
            "Solvent Extraction",
            "Ion Exchange",
            "Leaching"
          ],
          correctAnswer: 3,
          explanation: "Leaching uses chemical solutions to dissolve valuable minerals from ore."
        },
        {
          id: 6,
          question: "What concentrates metals from leach solutions?",
          options: [
            "Ion Exchange",
            "Solvent Extraction",
            "Leaching",
            "Electrowinning"
          ],
          correctAnswer: 1,
          explanation: "Solvent extraction selectively transfers metals from aqueous solutions to organic solvents."
        },
        {
          id: 7,
          question: "What involves thermal treatment in specific atmospheres?",
          options: [
            "Calcining",
            "Roasting",
            "Refining",
            "Smelting"
          ],
          correctAnswer: 1,
          explanation: "Roasting thermally treats minerals to alter their chemical composition for easier processing."
        },
        {
          id: 8,
          question: "What involves melting to separate metals from impurities?",
          options: [
            "Roasting",
            "Smelting",
            "Sintering",
            "Refining"
          ],
          correctAnswer: 1,
          explanation: "Smelting melts ore to separate metals from waste materials (slag)."
        },
        {
          id: 9,
          question: "What are engineered structures for waste storage?",
          options: [
            "Water Recovery",
            "Tailings Reprocessing",
            "Tailings Storage Facilities",
            "Paste Thickening"
          ],
          correctAnswer: 2,
          explanation: "Tailings storage facilities are carefully engineered to safely contain processing waste."
        },
        {
          id: 10,
          question: "What involves recycling water from tailings?",
          options: [
            "Water Recovery",
            "Paste Thickening",
            "Tailings Storage Facilities",
            "Closure Planning"
          ],
          correctAnswer: 0,
          explanation: "Water recovery recycles process water from tailings, reducing fresh water consumption."
        },
        {
          id: 11,
          question: "What involves fine size reduction for mineral liberation?",
          options: [
            "Primary Crushing",
            "Secondary Crushing",
            "Classification Systems",
            "Grinding Mills"
          ],
          correctAnswer: 3,
          explanation: "Grinding mills reduce ore to very fine sizes to liberate individual mineral grains."
        },
        {
          id: 12,
          question: "What separates particles by size?",
          options: [
            "Classification Systems",
            "Grinding Mills",
            "Circuit Optimization",
            "Secondary Crushing"
          ],
          correctAnswer: 0,
          explanation: "Classification systems separate fine and coarse particles to optimize grinding efficiency."
        },
        {
          id: 13,
          question: "What uses surface chemistry differences?",
          options: [
            "Sensor-based Sorting",
            "Flotation",
            "Magnetic Separation",
            "Electrostatic Separation"
          ],
          correctAnswer: 1,
          explanation: "Flotation uses differences in surface properties to separate minerals in slurry."
        },
        {
          id: 14,
          question: "What uses optical sensors for separation?",
          options: [
            "Sensor-based Sorting",
            "Flotation",
            "Gravity Separation",
            "Electrostatic Separation"
          ],
          correctAnswer: 0,
          explanation: "Sensor-based sorting uses cameras or other sensors to identify and separate particles."
        },
        {
          id: 15,
          question: "What uses resins to recover specific ions?",
          options: [
            "Precipitation",
            "Electrowinning",
            "Solvent Extraction",
            "Ion Exchange"
          ],
          correctAnswer: 3,
          explanation: "Ion exchange uses special resins to selectively capture specific metal ions from solution."
        },
        {
          id: 16,
          question: "What recovers metals from solution as solids?",
          options: [
            "Precipitation",
            "Leaching",
            "Electrowinning",
            "Ion Exchange"
          ],
          correctAnswer: 0,
          explanation: "Precipitation causes dissolved metals to form solid compounds that can be recovered."
        },
        {
          id: 17,
          question: "What involves purification of crude metals?",
          options: [
            "Smelting",
            "Calcining",
            "Refining",
            "Sintering"
          ],
          correctAnswer: 2,
          explanation: "Refining further purifies metals obtained from smelting to achieve required purity."
        },
        {
          id: 18,
          question: "What creates thickened tailings for disposal?",
          options: [
            "Closure Planning",
            "Water Recovery",
            "Paste Thickening",
            "Tailings Reprocessing"
          ],
          correctAnswer: 2,
          explanation: "Paste thickening creates higher density tailings that are safer to store."
        },
        {
          id: 19,
          question: "What recovers additional values from waste?",
          options: [
            "Water Recovery",
            "Tailings Reprocessing",
            "Paste Thickening",
            "Closure Planning"
          ],
          correctAnswer: 1,
          explanation: "Tailings reprocessing extracts remaining valuable minerals from previously discarded material."
        },
        {
          id: 20,
          question: "How many separation techniques were specifically listed?",
          options: [
            "Five",
            "Seven",
            "Three",
            "Nine"
          ],
          correctAnswer: 0,
          explanation: "Five techniques: gravity, magnetic, electrostatic, flotation, and sensor-based separation."
        }
      ]
    },
    {
      id: 4,
      title: "Mine Ventilation and Environment",
      content: `
## Air Quality and Environmental Control

Mine ventilation provides fresh air, removes contaminants, and controls temperature in underground operations. Environmental management minimizes mining impacts on surrounding ecosystems.

### Ventilation System Design

Planning air flow in underground mines:
- **Main Fans**: Primary fans that move air through the mine
- **Ventilation Circuits**: Air flow pathways through mine workings
- **Airway Resistance**: Calculating resistance to air flow
- **Auxiliary Ventilation**: Local air supply to working faces
- **Control Devices**: Regulators, doors, and stoppings for air control

Proper ventilation design ensures adequate air quantity and quality throughout the mine.

### Contaminant Control

Managing hazardous substances in mine air:
- **Dust Control**: Methods to reduce airborne particulate matter
- **Gas Monitoring**: Detection and measurement of harmful gases
- **Radiation Control**: Managing radioactive elements in some mines
- **Fume Extraction**: Removing harmful fumes from work areas
- **Contaminant Dilution**: Using fresh air to dilute contaminants

Contaminant control protects worker health and safety.

### Thermal Environment Management

Controlling temperature in deep or hot mines:
- **Heat Sources**: Identifying where heat enters the mine
- **Cooling Systems**: Mechanical cooling of mine air
- **Heat Exchangers**: Transferring heat from mine air
- **Personal Cooling**: Equipment to cool individual workers
- **Climate Prediction**: Forecasting thermal conditions

Thermal management becomes critical in deep mining operations.

### Water Management Systems

Controlling water in mining operations:
- **Dewatering**: Removing water from mining areas
- "Water Treatment": Treating contaminated mine water
- "Water Recycling": Reusing water in processing operations
- "Drainage Design": Designing systems to control water flow
- "Seepage Control": Preventing unwanted water movement

Water management protects both operations and the environment.

### Environmental Monitoring

Systematic assessment of environmental impacts:
- "Air Quality Monitoring": Measuring atmospheric contaminants
- "Water Quality Testing": Regular testing of surface and groundwater
- "Noise Monitoring": Measuring sound levels around operations
- "Biodiversity Assessment": Monitoring effects on plants and animals
- "Compliance Reporting": Documenting environmental performance

Monitoring ensures operations meet environmental standards.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are primary fans that move air through the mine?",
          options: [
            "Auxiliary Ventilation",
            "Ventilation Circuits",
            "Main Fans",
            "Airway Resistance"
          ],
          correctAnswer: 2,
          explanation: "Main fans provide the primary pressure to move air through the entire ventilation system."
        },
        {
          id: 2,
          question: "What are air flow pathways through mine workings?",
          options: [
            "Control Devices",
            "Main Fans",
            "Ventilation Circuits",
            "Airway Resistance"
          ],
          correctAnswer: 2,
          explanation: "Ventilation circuits design how air flows from intake to exhaust through all mine areas."
        },
        {
          id: 3,
          question: "What involves calculating resistance to air flow?",
          options: [
            "Ventilation Circuits",
            "Auxiliary Ventilation",
            "Airway Resistance",
            "Control Devices"
          ],
          correctAnswer: 2,
          explanation: "Airway resistance calculations determine how much pressure is needed to move air."
        },
        {
          id: 4,
          question: "What involves methods to reduce airborne particulate matter?",
          options: [
            "Dust Control",
            "Fume Extraction",
            "Radiation Control",
            "Gas Monitoring"
          ],
          correctAnswer: 0,
          explanation: "Dust control minimizes airborne particles that can cause respiratory diseases."
        },
        {
          id: 5,
          question: "What involves detection of harmful gases?",
          options: [
            "Radiation Control",
            "Gas Monitoring",
            "Dust Control",
            "Contaminant Dilution"
          ],
          correctAnswer: 1,
          explanation: "Gas monitoring detects and measures concentrations of harmful gases like methane or CO."
        },
        {
          id: 6,
          question: "What identifies where heat enters the mine?",
          options: [
            "Climate Prediction",
            "Cooling Systems",
            "Heat Exchangers",
            "Heat Sources"
          ],
          correctAnswer: 3,
          explanation: "Identifying heat sources helps design effective cooling strategies."
        },
        {
          id: 7,
          question: "What involves mechanical cooling of mine air?",
          options: [
            "Heat Exchangers",
            "Personal Cooling",
            "Heat Sources",
            "Cooling Systems"
          ],
          correctAnswer: 3,
          explanation: "Cooling systems use refrigeration or other methods to lower air temperature."
        },
        {
          id: 8,
          question: "What involves removing water from mining areas?",
          options: [
            "Water Recycling",
            "Water Treatment",
            "Drainage Design",
            "Dewatering"
          ],
          correctAnswer: 3,
          explanation: "Dewatering keeps mining areas dry for safe and efficient operations."
        },
        {
          id: 9,
          question: "What involves treating contaminated mine water?",
          options: [
            "Water Recycling",
            "Water Treatment",
            "Dewatering",
            "Seepage Control"
          ],
          correctAnswer: 1,
          explanation: "Water treatment removes contaminants before water is discharged or reused."
        },
        {
          id: 10,
          question: "What involves measuring atmospheric contaminants?",
          options: [
            "Air Quality Monitoring",
            "Biodiversity Assessment",
            "Water Quality Testing",
            "Noise Monitoring"
          ],
          correctAnswer: 0,
          explanation: "Air quality monitoring measures pollutants in the air around mining operations."
        },
        {
          id: 11,
          question: "What provides local air supply to working faces?",
          options: [
            "Main Fans",
            "Airway Resistance",
            "Control Devices",
            "Auxiliary Ventilation"
          ],
          correctAnswer: 3,
          explanation: "Auxiliary ventilation supplies fresh air directly to development faces and dead-end areas."
        },
        {
          id: 12,
          question: "What includes regulators and doors for air control?",
          options: [
            "Airway Resistance",
            "Control Devices",
            "Ventilation Circuits",
            "Auxiliary Ventilation"
          ],
          correctAnswer: 1,
          explanation: "Control devices direct and regulate air flow through different parts of the mine."
        },
        {
          id: 13,
          question: "What manages radioactive elements in some mines?",
          options: [
            "Contaminant Dilution",
            "Fume Extraction",
            "Gas Monitoring",
            "Radiation Control"
          ],
          correctAnswer: 3,
          explanation: "Radiation control protects workers from harmful radiation in some mineral deposits."
        },
        {
          id: 14,
          question: "What removes harmful fumes from work areas?",
          options: [
            "Dust Control",
            "Contaminant Dilution",
            "Fume Extraction",
            "Radiation Control"
          ],
          correctAnswer: 2,
          explanation: "Fume extraction removes diesel fumes or chemical vapors from confined work areas."
        },
        {
          id: 15,
          question: "What transfers heat from mine air?",
          options: [
            "Personal Cooling",
            "Heat Exchangers",
            "Climate Prediction",
            "Cooling Systems"
          ],
          correctAnswer: 1,
          explanation: "Heat exchangers transfer heat from mine air to cooling water or other mediums."
        },
        {
          id: 16,
          question: "What involves equipment to cool individual workers?",
          options: [
            "Heat Exchangers",
            "Personal Cooling",
            "Climate Prediction",
            "Heat Sources"
          ],
          correctAnswer: 1,
          explanation: "Personal cooling vests or other equipment protect workers in extremely hot conditions."
        },
        {
          id: 17,
          question: "What involves reusing water in processing operations?",
          options: [
            "Water Recycling",
            "Drainage Design",
            "Water Treatment",
            "Seepage Control"
          ],
          correctAnswer: 0,
          explanation: "Water recycling reduces fresh water consumption and minimizes discharge."
        },
        {
          id: 18,
          question: "What designs systems to control water flow?",
          options: [
            "Dewatering",
            "Seepage Control",
            "Drainage Design",
            "Water Recycling"
          ],
          correctAnswer: 2,
          explanation: "Drainage design controls surface and groundwater flow around mining operations."
        },
        {
          id: 19,
          question: "What involves regular testing of groundwater?",
          options: [
            "Noise Monitoring",
            "Compliance Reporting",
            "Water Quality Testing",
            "Air Quality Monitoring"
          ],
          correctAnswer: 2,
          explanation: "Water quality testing monitors contaminants in surface and groundwater near mining areas."
        },
        {
          id: 20,
          question: "How many ventilation system components were specifically listed?",
          options: [
            "Nine",
            "Three",
            "Five",
            "Seven"
          ],
          correctAnswer: 2,
          explanation: "Five components: main fans, ventilation circuits, airway resistance, auxiliary ventilation, control devices."
        }
      ]
    },
    {
      id: 5,
      title: "Mine Economics and Valuation",
      content: `
## Financial Analysis of Mining Projects

Mine economics evaluates the financial viability of mining projects through systematic analysis of costs, revenues, and risks. Proper valuation supports investment decisions and operational planning.

### Capital Cost Estimation

Estimating initial investment requirements:
- **Equipment Costs**: Purchasing mining and processing equipment
- **Infrastructure Costs**: Building access, utilities, and facilities
- **Pre-production Development**: Development work before production starts
- **Contingency Allowances**: Provisions for unexpected costs
- **Working Capital**: Funds for initial operations until revenue starts

Accurate capital cost estimation is critical for project financing.

### Operating Cost Analysis

Analyzing ongoing production costs:
- **Labor Costs**: Wages, benefits, and training expenses
- **Energy Costs**: Electricity, fuel, and power requirements
- **Maintenance Costs**: Equipment repair and replacement
- **Consumable Costs**: Explosives, chemicals, and supplies
- **Overhead Costs**: Administration, safety, and environmental management

Operating costs determine the economic viability of continuing operations.

### Revenue Forecasting

Predicting income from mineral sales:
- **Production Scheduling**: Planning ore extraction rates and timing
- **Grade Reconciliation**: Comparing planned versus actual grades
- **Metal Prices**: Forecasting commodity price trends
- **Product Specifications**: Meeting market quality requirements
- **Sales Contracts**: Negotiating terms with buyers

Revenue forecasting combines technical production plans with market analysis.

### Financial Evaluation Methods

Quantitative assessment of project economics:
- **Net Present Value**: Discounted cash flow analysis
- **Internal Rate of Return**: Percentage return on investment
- **Payback Period**: Time to recover initial investment
- **Sensitivity Analysis**: Testing impact of changing assumptions
- **Risk Assessment**: Evaluating financial risks and uncertainties

Financial evaluation supports go/no-go investment decisions.

### Mineral Resource Valuation

Valuing mineral assets and companies:
- **Discounted Cash Flow**: Standard valuation method for mining projects
- **Comparable Transactions**: Analysis of similar asset sales
- **Market Multiples**: Valuation based on market metrics
- **Option Pricing Models**: Accounting for flexibility in mining
- **Royalty and Streaming Valuations**: Specialized mining finance instruments

Proper valuation is essential for transactions and financial reporting.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves purchasing mining and processing equipment?",
          options: [
            "Infrastructure Costs",
            "Contingency Allowances",
            "Equipment Costs",
            "Pre-production Development"
          ],
          correctAnswer: 2,
          explanation: "Equipment costs include all machinery needed for mining and processing operations."
        },
        {
          id: 2,
          question: "What involves building access and facilities?",
          options: [
            "Equipment Costs",
            "Pre-production Development",
            "Infrastructure Costs",
            "Working Capital"
          ],
          correctAnswer: 2,
          explanation: "Infrastructure costs cover all permanent facilities needed to support mining operations."
        },
        {
          id: 3,
          question: "What involves wages, benefits, and training expenses?",
          options: [
            "Labor Costs",
            "Maintenance Costs",
            "Energy Costs",
            "Consumable Costs"
          ],
          correctAnswer: 0,
          explanation: "Labor costs include all personnel-related expenses for mining operations."
        },
        {
          id: 4,
          question: "What involves electricity and fuel requirements?",
          options: [
            "Overhead Costs",
            "Labor Costs",
            "Maintenance Costs",
            "Energy Costs"
          ],
          correctAnswer: 3,
          explanation: "Energy costs are often a major operating expense in mining operations."
        },
        {
          id: 5,
          question: "What involves planning ore extraction rates?",
          options: [
            "Grade Reconciliation",
            "Metal Prices",
            "Production Scheduling",
            "Product Specifications"
          ],
          correctAnswer: 2,
          explanation: "Production scheduling determines how much ore will be mined and processed over time."
        },
        {
          id: 6,
          question: "What involves comparing planned versus actual grades?",
          options: [
            "Metal Prices",
            "Sales Contracts",
            "Grade Reconciliation",
            "Production Scheduling"
          ],
          correctAnswer: 2,
          explanation: "Grade reconciliation compares estimated grades with actual production grades."
        },
        {
          id: 7,
          question: "What involves discounted cash flow analysis?",
          options: [
            "Sensitivity Analysis",
            "Net Present Value",
            "Internal Rate of Return",
            "Payback Period"
          ],
          correctAnswer: 1,
          explanation: "Net Present Value calculates the present value of future cash flows minus initial investment."
        },
        {
          id: 8,
          question: "What involves percentage return on investment?",
          options: [
            "Internal Rate of Return",
            "Risk Assessment",
            "Payback Period",
            "Net Present Value"
          ],
          correctAnswer: 0,
          explanation: "Internal Rate of Return calculates the discount rate that makes NPV equal to zero."
        },
        {
          id: 9,
          question: "What is the standard valuation method for mining projects?",
          options: [
            "Market Multiples",
            "Discounted Cash Flow",
            "Comparable Transactions",
            "Option Pricing Models"
          ],
          correctAnswer: 1,
          explanation: "Discounted Cash Flow is the most widely accepted method for valuing mining projects."
        },
        {
          id: 10,
          question: "What involves analysis of similar asset sales?",
          options: [
            "Market Multiples",
            "Comparable Transactions",
            "Royalty Valuations",
            "Discounted Cash Flow"
          ],
          correctAnswer: 1,
          explanation: "Comparable transactions analysis looks at prices paid for similar mining assets."
        },
        {
          id: 11,
          question: "What involves development work before production starts?",
          options: [
            "Infrastructure Costs",
            "Working Capital",
            "Contingency Allowances",
            "Pre-production Development"
          ],
          correctAnswer: 3,
          explanation: "Pre-production development includes all work needed to prepare for mining operations."
        },
        {
          id: 12,
          question: "What provides for unexpected costs?",
          options: [
            "Contingency Allowances",
            "Working Capital",
            "Equipment Costs",
            "Pre-production Development"
          ],
          correctAnswer: 0,
          explanation: "Contingency allowances provide buffers for cost overruns and unforeseen expenses."
        },
        {
          id: 13,
          question: "What involves equipment repair and replacement?",
          options: [
            "Labor Costs",
            "Maintenance Costs",
            "Consumable Costs",
            "Overhead Costs"
          ],
          correctAnswer: 1,
          explanation: "Maintenance costs keep equipment operational and extend its service life."
        },
        {
          id: 14,
          question: "What involves explosives and chemical supplies?",
          options: [
            "Overhead Costs",
            "Maintenance Costs",
            "Energy Costs",
            "Consumable Costs"
          ],
          correctAnswer: 3,
          explanation: "Consumable costs include materials that are used up during mining operations."
        },
        {
          id: 15,
          question: "What involves forecasting commodity price trends?",
          options: [
            "Product Specifications",
            "Sales Contracts",
            "Production Scheduling",
            "Metal Prices"
          ],
          correctAnswer: 3,
          explanation: "Metal price forecasting predicts future prices for the minerals being produced."
        },
        {
          id: 16,
          question: "What involves meeting market quality requirements?",
          options: [
            "Grade Reconciliation",
            "Metal Prices",
            "Product Specifications",
            "Sales Contracts"
          ],
          correctAnswer: 2,
          explanation: "Product specifications define the quality standards required by buyers."
        },
        {
          id: 17,
          question: "What involves time to recover initial investment?",
          options: [
            "Risk Assessment",
            "Internal Rate of Return",
            "Sensitivity Analysis",
            "Payback Period"
          ],
          correctAnswer: 3,
          explanation: "Payback period calculates how long it takes to recover the initial investment."
        },
        {
          id: 18,
          question: "What involves testing impact of changing assumptions?",
          options: [
            "Sensitivity Analysis",
            "Payback Period",
            "Net Present Value",
            "Risk Assessment"
          ],
          correctAnswer: 0,
          explanation: "Sensitivity analysis tests how changes in key assumptions affect project economics."
        },
        {
          id: 19,
          question: "What involves valuation based on market metrics?",
          options: [
            "Royalty Valuations",
            "Option Pricing Models",
            "Comparable Transactions",
            "Market Multiples"
          ],
          correctAnswer: 3,
          explanation: "Market multiples valuation uses ratios like price-to-earnings from similar companies."
        },
        {
          id: 20,
          question: "How many capital cost components were specifically listed?",
          options: [
            "Seven",
            "Three",
            "Nine",
            "Five"
          ],
          correctAnswer: 3,
          explanation: "Five components: equipment, infrastructure, pre-production development, contingency, working capital."
        }
      ]
    },
    {
      id: 6,
      title: "Mine Safety and Risk Management",
      content: `
## Advanced Safety Systems

Mine safety management systematically identifies, assesses, and controls risks in mining operations. Advanced safety systems prevent accidents and ensure regulatory compliance.

### Hazard Identification Systems

Systematic methods for identifying potential hazards:
- **Job Safety Analysis**: Step-by-step analysis of work tasks
- **Risk Assessment Matrices**: Quantitative hazard evaluation
- **Bow-tie Analysis**: Visualizing causes and consequences of hazards
- **What-If Analysis**: Systematic questioning of potential problems
- **Checklist Reviews**: Standardized safety checklist applications

Comprehensive hazard identification forms the foundation of safety management.

### Safety Management Systems

Structured approaches to safety management:
- **Safety Policies**: Formal statements of safety commitments
- **Safety Procedures**: Detailed safe work instructions
- **Training Programs**: Systematic safety training for all workers
- **Safety Audits**: Regular systematic safety reviews
- **Performance Monitoring**: Tracking safety metrics and trends

Management systems institutionalize safety throughout the organization.

### Emergency Response Planning

Preparing for mining emergencies:
- **Emergency Procedures**: Specific actions for different emergencies
- **Communication Systems**: Emergency notification and coordination
- **Rescue Equipment**: Specialized equipment for mine rescue
- **Training Drills**: Regular practice of emergency responses
- **Medical Response**: On-site and off-site medical capabilities

Effective emergency planning minimizes harm when incidents occur.

### Risk Control Measures

Methods to eliminate or reduce risks:
- **Engineering Controls**: Physical changes to eliminate hazards
- **Administrative Controls**: Procedures and policies to reduce exposure
- **Personal Protective Equipment**: Last line of defense for workers
- **Hierarchy of Controls**: Systematic approach to risk reduction
- **Safety-in-Design**: Incorporating safety into mine design

Risk control follows a systematic hierarchy from elimination to PPE.

### Safety Culture Development

Creating a positive safety environment:
- **Leadership Commitment**: Visible safety leadership from management
- **Worker Involvement**: Engaging workers in safety decisions
- **Safety Communication**: Clear and consistent safety messaging
- **Behavior-based Safety**: Focusing on safe behaviors
- **Continuous Improvement**: Ongoing safety system enhancement

A strong safety culture ensures safety becomes a core value, not just a priority.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves step-by-step analysis of work tasks?",
          options: [
            "Bow-tie Analysis",
            "Risk Assessment Matrices",
            "Job Safety Analysis",
            "What-If Analysis"
          ],
          correctAnswer: 2,
          explanation: "Job Safety Analysis breaks down tasks into steps to identify hazards at each stage."
        },
        {
          id: 2,
          question: "What involves quantitative hazard evaluation?",
          options: [
            "What-If Analysis",
            "Checklist Reviews",
            "Job Safety Analysis",
            "Risk Assessment Matrices"
          ],
          correctAnswer: 3,
          explanation: "Risk assessment matrices quantify hazards based on likelihood and severity."
        },
        {
          id: 3,
          question: "What are formal statements of safety commitments?",
          options: [
            "Safety Policies",
            "Safety Audits",
            "Safety Procedures",
            "Training Programs"
          ],
          correctAnswer: 0,
          explanation: "Safety policies formally state the organization's commitment to safety."
        },
        {
          id: 4,
          question: "What are detailed safe work instructions?",
          options: [
            "Performance Monitoring",
            "Training Programs",
            "Safety Policies",
            "Safety Procedures"
          ],
          correctAnswer: 3,
          explanation: "Safety procedures provide specific instructions for safely performing tasks."
        },
        {
          id: 5,
          question: "What involves specific actions for different emergencies?",
          options: [
            "Training Drills",
            "Emergency Procedures",
            "Communication Systems",
            "Rescue Equipment"
          ],
          correctAnswer: 1,
          explanation: "Emergency procedures detail exactly what to do in specific emergency situations."
        },
        {
          id: 6,
          question: "What involves emergency notification and coordination?",
          options: [
            "Communication Systems",
            "Emergency Procedures",
            "Training Drills",
            "Medical Response"
          ],
          correctAnswer: 0,
          explanation: "Communication systems ensure rapid notification and coordination during emergencies."
        },
        {
          id: 7,
          question: "What involves physical changes to eliminate hazards?",
          options: [
            "Personal Protective Equipment",
            "Engineering Controls",
            "Safety-in-Design",
            "Administrative Controls"
          ],
          correctAnswer: 1,
          explanation: "Engineering controls physically remove hazards or create barriers against them."
        },
        {
          id: 8,
          question: "What involves procedures to reduce exposure?",
          options: [
            "Personal Protective Equipment",
            "Engineering Controls",
            "Administrative Controls",
            "Hierarchy of Controls"
          ],
          correctAnswer: 2,
          explanation: "Administrative controls use procedures and policies to minimize hazard exposure."
        },
        {
          id: 9,
          question: "What involves visible safety leadership from management?",
          options: [
            "Leadership Commitment",
            "Safety Communication",
            "Worker Involvement",
            "Behavior-based Safety"
          ],
          correctAnswer: 0,
          explanation: "Leadership commitment demonstrates that safety is truly important to management."
        },
        {
          id: 10,
          question: "What involves engaging workers in safety decisions?",
          options: [
            "Worker Involvement",
            "Safety Communication",
            "Leadership Commitment",
            "Continuous Improvement"
          ],
          correctAnswer: 0,
          explanation: "Worker involvement taps into frontline knowledge and builds ownership of safety."
        },
        {
          id: 11,
          question: "What visualizes causes and consequences of hazards?",
          options: [
            "Risk Assessment Matrices",
            "Bow-tie Analysis",
            "Checklist Reviews",
            "What-If Analysis"
          ],
          correctAnswer: 1,
          explanation: "Bow-tie analysis visually maps how hazards can lead to incidents and their consequences."
        },
        {
          id: 12,
          question: "What involves systematic questioning of potential problems?",
          options: [
            "Bow-tie Analysis",
            "What-If Analysis",
            "Checklist Reviews",
            "Job Safety Analysis"
          ],
          correctAnswer: 1,
          explanation: "What-If analysis systematically asks 'what if' questions to identify potential problems."
        },
        {
          id: 13,
          question: "What involves systematic safety training for all workers?",
          options: [
            "Performance Monitoring",
            "Training Programs",
            "Safety Procedures",
            "Safety Audits"
          ],
          correctAnswer: 1,
          explanation: "Training programs ensure all workers have the knowledge and skills to work safely."
        },
        {
          id: 14,
          question: "What involves regular systematic safety reviews?",
          options: [
            "Safety Audits",
            "Performance Monitoring",
            "Training Programs",
            "Safety Policies"
          ],
          correctAnswer: 0,
          explanation: "Safety audits systematically review safety systems and compliance."
        },
        {
          id: 15,
          question: "What involves specialized equipment for mine rescue?",
          options: [
            "Communication Systems",
            "Training Drills",
            "Rescue Equipment",
            "Medical Response"
          ],
          correctAnswer: 2,
          explanation: "Rescue equipment includes specialized tools and breathing apparatus for mine rescue."
        },
        {
          id: 16,
          question: "What involves regular practice of emergency responses?",
          options: [
            "Training Drills",
            "Medical Response",
            "Rescue Equipment",
            "Emergency Procedures"
          ],
          correctAnswer: 0,
          explanation: "Training drills ensure workers know how to respond effectively in real emergencies."
        },
        {
          id: 17,
          question: "What is the last line of defense for workers?",
          options: [
            "Administrative Controls",
            "Engineering Controls",
            "Personal Protective Equipment",
            "Safety-in-Design"
          ],
          correctAnswer: 2,
          explanation: "PPE protects workers when hazards cannot be eliminated or sufficiently controlled."
        },
        {
          id: 18,
          question: "What involves incorporating safety into mine design?",
          options: [
            "Safety-in-Design",
            "Engineering Controls",
            "Hierarchy of Controls",
            "Administrative Controls"
          ],
          correctAnswer: 0,
          explanation: "Safety-in-Design builds safety features directly into mine plans and equipment."
        },
        {
          id: 19,
          question: "What involves focusing on safe behaviors?",
          options: [
            "Safety Communication",
            "Continuous Improvement",
            "Behavior-based Safety",
            "Worker Involvement"
          ],
          correctAnswer: 2,
          explanation: "Behavior-based safety focuses on observing and reinforcing safe work behaviors."
        },
        {
          id: 20,
          question: "How many safety management system components were listed?",
          options: [
            "Three",
            "Five",
            "Nine",
            "Seven"
          ],
          correctAnswer: 1,
          explanation: "Five components: safety policies, procedures, training programs, safety audits, performance monitoring."
        }
      ]
    }
  ],

  // FINAL EXAM - 40 COMPREHENSIVE QUESTIONS
  finalExam: {
    id: "mining-engineering-diploma-exam",
    title: "Mining Engineering Diploma Final Exam",
    description: "Comprehensive examination covering all 6 modules of the Mining Engineering Diploma course.",
    passingScore: 70,
    timeLimit: 75, // minutes
    questions: [
      {
        id: 1,
        question: "What involves interpretation of ore body geometry?",
        options: [
          "Geological Understanding",
          "Production Scheduling",
          "Mining Method Selection",
          "Access Design"
        ],
        correctAnswer: 0,
        explanation: "Geological understanding involves analyzing the shape, size, and characteristics of mineral deposits.",
        module: 1
      },
      {
        id: 2,
        question: "What is a quantitative measure of rock quality?",
        options: [
          "Rock Mass Rating",
          "Strength Testing",
          "Joint Characteristics",
          "Rock Quality Designation"
        ],
        correctAnswer: 3,
        explanation: "Rock Quality Designation (RQD) quantifies rock quality based on drill core recovery.",
        module: 2
      },
      {
        id: 3,
        question: "What involves initial size reduction of run-of-mine ore?",
        options: [
          "Classification Systems",
          "Secondary Crushing",
          "Primary Crushing",
          "Grinding Mills"
        ],
        correctAnswer: 2,
        explanation: "Primary crushing reduces large mine-run ore to manageable sizes for further processing.",
        module: 3
      },
      {
        id: 4,
        question: "What are primary fans that move air through the mine?",
        options: [
          "Airway Resistance",
          "Auxiliary Ventilation",
          "Ventilation Circuits",
          "Main Fans"
        ],
        correctAnswer: 3,
        explanation: "Main fans provide the primary pressure to move air through the entire ventilation system.",
        module: 4
      },
      {
        id: 5,
        question: "What involves purchasing mining and processing equipment?",
        options: [
          "Equipment Costs",
          "Pre-production Development",
          "Infrastructure Costs",
          "Contingency Allowances"
        ],
        correctAnswer: 0,
        explanation: "Equipment costs include all machinery needed for mining and processing operations.",
        module: 5
      },
      {
        id: 6,
        question: "What involves step-by-step analysis of work tasks?",
        options: [
          "What-If Analysis",
          "Risk Assessment Matrices",
          "Bow-tie Analysis",
          "Job Safety Analysis"
        ],
        correctAnswer: 3,
        explanation: "Job Safety Analysis breaks down tasks into steps to identify hazards at each stage.",
        module: 6
      },
      {
        id: 7,
        question: "What involves choosing appropriate extraction methods?",
        options: [
          "Geological Understanding",
          "Access Design",
          "Mining Method Selection",
          "Infrastructure Planning"
        ],
        correctAnswer: 2,
        explanation: "Mining method selection matches extraction techniques to ore body characteristics.",
        module: 1
      },
      {
        id: 8,
        question: "What is a comprehensive classification system?",
        options: [
          "Rock Mass Rating",
          "Rock Quality Designation",
          "Deformation Properties",
          "Joint Characteristics"
        ],
        correctAnswer: 0,
        explanation: "Rock Mass Rating (RMR) provides a comprehensive assessment of rock mass quality.",
        module: 2
      },
      {
        id: 9,
        question: "What involves further reduction before grinding?",
        options: [
          "Secondary Crushing",
          "Grinding Mills",
          "Primary Crushing",
          "Circuit Optimization"
        ],
        correctAnswer: 0,
        explanation: "Secondary crushing further reduces ore size to prepare it for fine grinding.",
        module: 3
      },
      {
        id: 10,
        question: "What are air flow pathways through mine workings?",
        options: [
          "Control Devices",
          "Ventilation Circuits",
          "Main Fans",
          "Airway Resistance"
        ],
        correctAnswer: 1,
        explanation: "Ventilation circuits design how air flows from intake to exhaust through all mine areas.",
        module: 4
      },
      {
        id: 11,
        question: "What involves building access and facilities?",
        options: [
          "Infrastructure Costs",
          "Working Capital",
          "Pre-production Development",
          "Equipment Costs"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure costs cover all permanent facilities needed to support mining operations.",
        module: 5
      },
      {
        id: 12,
        question: "What involves quantitative hazard evaluation?",
        options: [
          "Risk Assessment Matrices",
          "Checklist Reviews",
          "Job Safety Analysis",
          "What-If Analysis"
        ],
        correctAnswer: 0,
        explanation: "Risk assessment matrices quantify hazards based on likelihood and severity.",
        module: 6
      },
      {
        id: 13,
        question: "What involves systematic collection of geological data?",
        options: [
          "Classification Systems",
          "Volume Calculations",
          "Grade Estimation",
          "Sampling Techniques"
        ],
        correctAnswer: 3,
        explanation: "Sampling techniques systematically collect representative geological data for analysis.",
        module: 1
      },
      {
        id: 14,
        question: "What analyzes rock discontinuities?",
        options: [
          "Strength Testing",
          "Deformation Properties",
          "Rock Mass Rating",
          "Joint Characteristics"
        ],
        correctAnswer: 3,
        explanation: "Joint characteristics analysis examines orientation, spacing, and condition of rock fractures.",
        module: 2
      },
      {
        id: 15,
        question: "What uses density differences for separation?",
        options: [
          "Gravity Separation",
          "Magnetic Separation",
          "Flotation",
          "Electrostatic Separation"
        ],
        correctAnswer: 0,
        explanation: "Gravity separation exploits density differences between minerals using water or air.",
        module: 3
      },
      {
        id: 16,
        question: "What involves calculating resistance to air flow?",
        options: [
          "Auxiliary Ventilation",
          "Ventilation Circuits",
          "Control Devices",
          "Airway Resistance"
        ],
        correctAnswer: 3,
        explanation: "Airway resistance calculations determine how much pressure is needed to move air.",
        module: 4
      },
      {
        id: 17,
        question: "What involves wages, benefits, and training expenses?",
        options: [
          "Labor Costs",
          "Consumable Costs",
          "Maintenance Costs",
          "Energy Costs"
        ],
        correctAnswer: 0,
        explanation: "Labor costs include all personnel-related expenses for mining operations.",
        module: 5
      },
      {
        id: 18,
        question: "What are formal statements of safety commitments?",
        options: [
          "Training Programs",
          "Safety Audits",
          "Safety Procedures",
          "Safety Policies"
        ],
        correctAnswer: 3,
        explanation: "Safety policies formally state the organization's commitment to safety.",
        module: 6
      },
      {
        id: 19,
        question: "What determines mineral content variations?",
        options: [
          "Grade Estimation",
          "Volume Calculations",
          "Sampling Techniques",
          "Cut-off Grades"
        ],
        correctAnswer: 0,
        explanation: "Grade estimation quantifies how mineral content varies throughout the ore body.",
        module: 1
      },
      {
        id: 20,
        question: "What are natural stresses in undisturbed rock?",
        options: [
          "In-situ Stresses",
          "Stress Concentration",
          "Induced Stresses",
          "Stress Redistribution"
        ],
        correctAnswer: 0,
        explanation: "In-situ stresses exist naturally in rock before any mining disturbance occurs.",
        module: 2
      },
      {
        id: 21,
        question: "What uses magnetic properties differences?",
        options: [
          "Sensor-based Sorting",
          "Magnetic Separation",
          "Gravity Separation",
          "Electrostatic Separation"
        ],
        correctAnswer: 1,
        explanation: "Magnetic separation separates minerals based on their magnetic susceptibility.",
        module: 3
      },
      {
        id: 22,
        question: "What involves methods to reduce airborne particulate matter?",
        options: [
          "Radiation Control",
          "Dust Control",
          "Fume Extraction",
          "Gas Monitoring"
        ],
        correctAnswer: 1,
        explanation: "Dust control minimizes airborne particles that can cause respiratory diseases.",
        module: 4
      },
      {
        id: 23,
        question: "What involves electricity and fuel requirements?",
        options: [
          "Maintenance Costs",
          "Labor Costs",
          "Overhead Costs",
          "Energy Costs"
        ],
        correctAnswer: 3,
        explanation: "Energy costs are often a major operating expense in mining operations.",
        module: 5
      },
      {
        id: 24,
        question: "What are detailed safe work instructions?",
        options: [
          "Safety Procedures",
          "Safety Policies",
          "Performance Monitoring",
          "Training Programs"
        ],
        correctAnswer: 0,
        explanation: "Safety procedures provide specific instructions for safely performing tasks.",
        module: 6
      },
      {
        id: 25,
        question: "What designs slope angles and bench configurations?",
        options: [
          "Pit Geometry",
          "Waste Dump Planning",
          "Drainage Systems",
          "Haul Road Design"
        ],
        correctAnswer: 0,
        explanation: "Pit geometry designs the overall shape and internal structure of open pit mines.",
        module: 1
      },
      {
        id: 26,
        question: "What installs reinforcement in rock masses?",
        options: [
          "Steel Sets",
          "Cable Bolting",
          "Rock Bolting",
          "Shotcrete"
        ],
        correctAnswer: 2,
        explanation: "Rock bolting installs steel rods to reinforce rock masses around excavations.",
        module: 2
      },
      {
        id: 27,
        question: "What dissolves valuable minerals into solution?",
        options: [
          "Solvent Extraction",
          "Precipitation",
          "Ion Exchange",
          "Leaching"
        ],
        correctAnswer: 3,
        explanation: "Leaching uses chemical solutions to dissolve valuable minerals from ore.",
        module: 3
      },
      {
        id: 28,
        question: "What identifies where heat enters the mine?",
        options: [
          "Cooling Systems",
          "Heat Sources",
          "Heat Exchangers",
          "Climate Prediction"
        ],
        correctAnswer: 1,
        explanation: "Identifying heat sources helps design effective cooling strategies.",
        module: 4
      },
      {
        id: 29,
        question: "What involves planning ore extraction rates?",
        options: [
          "Metal Prices",
          "Grade Reconciliation",
          "Product Specifications",
          "Production Scheduling"
        ],
        correctAnswer: 3,
        explanation: "Production scheduling determines how much ore will be mined and processed over time.",
        module: 5
      },
      {
        id: 30,
        question: "What involves specific actions for different emergencies?",
        options: [
          "Emergency Procedures",
          "Rescue Equipment",
          "Training Drills",
          "Communication Systems"
        ],
        correctAnswer: 0,
        explanation: "Emergency procedures detail exactly what to do in specific emergency situations.",
        module: 6
      },
      {
        id: 31,
        question: "What plans efficient transport routes?",
        options: [
          "Progressive Rehabilitation",
          "Haul Road Design",
          "Drainage Systems",
          "Pit Geometry"
        ],
        correctAnswer: 1,
        explanation: "Haul road design creates safe and efficient routes for material transport within pits.",
        module: 1
      },
      {
        id: 32,
        question: "What uses sprayed concrete for surface support?",
        options: [
          "Rock Bolting",
          "Steel Sets",
          "Mesh and Lagging",
          "Shotcrete"
        ],
        correctAnswer: 3,
        explanation: "Shotcrete provides immediate surface support and prevents weathering of exposed rock.",
        module: 2
      },
      {
        id: 33,
        question: "What concentrates metals from leach solutions?",
        options: [
          "Electrowinning",
          "Ion Exchange",
          "Solvent Extraction",
          "Leaching"
        ],
        correctAnswer: 2,
        explanation: "Solvent extraction selectively transfers metals from aqueous solutions to organic solvents.",
        module: 3
      },
      {
        id: 34,
        question: "What involves mechanical cooling of mine air?",
        options: [
          "Heat Exchangers",
          "Personal Cooling",
          "Heat Sources",
          "Cooling Systems"
        ],
        correctAnswer: 3,
        explanation: "Cooling systems use refrigeration or other methods to lower air temperature.",
        module: 4
      },
      {
        id: 35,
        question: "What involves comparing planned versus actual grades?",
        options: [
          "Metal Prices",
          "Sales Contracts",
          "Production Scheduling",
          "Grade Reconciliation"
        ],
        correctAnswer: 3,
        explanation: "Grade reconciliation compares estimated grades with actual production grades.",
        module: 5
      },
      {
        id: 36,
        question: "What involves emergency notification and coordination?",
        options: [
          "Training Drills",
          "Communication Systems",
          "Medical Response",
          "Emergency Procedures"
        ],
        correctAnswer: 1,
        explanation: "Communication systems ensure rapid notification and coordination during emergencies.",
        module: 6
      },
      {
        id: 37,
        question: "What are shafts, declines, and adits for entry?",
        options: [
          "Level Development",
          "Access Design",
          "Stope Design",
          "Ventilation Circuit"
        ],
        correctAnswer: 1,
        explanation: "Access design creates entry points to underground mining areas.",
        module: 1
      },
      {
        id: 38,
        question: "What are different ways slopes can fail?",
        options: [
          "Monitoring Systems",
          "Stabilization Methods",
          "Factor of Safety",
          "Failure Modes"
        ],
        correctAnswer: 3,
        explanation: "Failure modes describe different mechanisms of slope failure.",
        module: 2
      },
      {
        id: 39,
        question: "What involves thermal treatment in specific atmospheres?",
        options: [
          "Roasting",
          "Smelting",
          "Calcining",
          "Refining"
        ],
        correctAnswer: 0,
        explanation: "Roasting thermally treats minerals to alter their chemical composition.",
        module: 3
      },
      {
        id: 40,
        question: "What involves physical changes to eliminate hazards?",
        options: [
          "Administrative Controls",
          "Engineering Controls",
          "Safety-in-Design",
          "Personal Protective Equipment"
        ],
        correctAnswer: 1,
        explanation: "Engineering controls physically remove hazards or create barriers against them.",
        module: 6
      }
    ]
  }
};

export default miningEngineeringDiploma;
