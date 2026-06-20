// Manufacturing Engineering (Diploma) - Complete Course Data
// File: manufacturing-engineering-diploma.ts

export const manufacturingEngineeringDiploma = {
  // COURSE METADATA
  id: "manufacturing-engineering-diploma",
  title: "Manufacturing Engineering (Diploma)",
  description: "Advanced course covering modern manufacturing engineering principles, processes, and technologies. Learn about production systems, quality control, automation, and industrial engineering concepts for manufacturing excellence.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🏭",
  badge: "Diploma",
  prerequisite: "manufacturing-processes-certificate", // Assuming Certificate as prerequisite
  
  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Advanced Manufacturing Systems",
      content: `# Module 1: Advanced Manufacturing Systems

## Introduction to Modern Manufacturing
Modern manufacturing has evolved from traditional methods to integrated systems that combine people, machines, materials, and information. Advanced manufacturing systems focus on efficiency, flexibility, and quality throughout the production process.

### Types of Manufacturing Systems
**Flexible Manufacturing Systems (FMS)** - Automated systems that can produce different products with minimal changeover time
**Computer Integrated Manufacturing (CIM)** - Complete integration of all manufacturing processes through computers
**Lean Manufacturing Systems** - Focus on waste elimination and continuous improvement
**Just-In-Time (JIT) Systems** - Production based on demand with minimal inventory
**Cellular Manufacturing** - Grouping machines and processes for product families

### Production Planning and Control
**Master Production Schedule** - Overall plan for production activities
**Material Requirements Planning (MRP)** - Planning materials needed for production
**Capacity Planning** - Ensuring adequate resources for production needs
**Shop Floor Control** - Managing production activities on the factory floor
**Production Tracking** - Monitoring work progress through the system

### Manufacturing Resource Planning (MRP II)
**Integration of Business Functions** - Combining manufacturing with finance, sales, and engineering
**Closed-Loop System** - Feedback mechanisms for continuous improvement
**Capacity Requirements Planning** - Detailed analysis of resource needs
**Shop Floor Control Integration** - Real-time production monitoring
**Business Planning Alignment** - Manufacturing aligned with overall business goals

### Enterprise Resource Planning (ERP)
**Company-Wide Integration** - All business processes in one system
**Real-Time Information** - Immediate access to production data
**Supply Chain Integration** - Connecting with suppliers and customers
**Financial Integration** - Manufacturing costs tied to accounting
**Decision Support** - Data-driven manufacturing decisions

### Advanced Production Strategies
**Mass Customization** - Large-scale production of customized products
**Agile Manufacturing** - Rapid response to market changes
**Sustainable Manufacturing** - Environmentally conscious production
**Digital Manufacturing** - Virtual design and production
**Smart Manufacturing** - Connected, intelligent factory systems

### Factory Layout and Material Flow
**Process Layout** - Machines grouped by function
**Product Layout** - Machines arranged by production sequence
**Fixed-Position Layout** - Product stays stationary, resources move
**Hybrid Layouts** - Combination of different layout types
**Material Handling Systems** - Efficient movement of materials through factory

### Performance Metrics in Manufacturing
**Overall Equipment Effectiveness (OEE)** - Measures equipment productivity
**Throughput Time** - Time from start to completion
**Work-In-Process Inventory** - Materials being processed
**First Pass Yield** - Quality of initial production
**On-Time Delivery** - Meeting customer delivery promises

### Implementation Considerations
**Technology Selection** - Choosing appropriate manufacturing technologies
**Workforce Training** - Preparing employees for advanced systems
**Change Management** - Managing organizational transitions
**System Integration** - Connecting different manufacturing systems
**Continuous Improvement** - Ongoing optimization of manufacturing processes`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does FMS stand for in manufacturing?",
          options: [
            "Fast Manufacturing System",
            "Fundamental Manufacturing System",
            "Fixed Manufacturing System",
            "Flexible Manufacturing System"
          ],
          correctAnswer: 3,
          explanation: "FMS stands for Flexible Manufacturing System - automated systems that can produce different products with minimal changeover."
        },
        {
          id: 2,
          question: "What is the complete integration of manufacturing processes through computers called?",
          options: [
            "Cellular Manufacturing",
            "Computer Integrated Manufacturing",
            "Just-In-Time Manufacturing",
            "Lean Manufacturing"
          ],
          correctAnswer: 1,
          explanation: "Computer Integrated Manufacturing (CIM) connects all manufacturing processes through computer systems for seamless operation."
        },
        {
          id: 3,
          question: "Which manufacturing approach focuses on waste elimination?",
          options: [
            "Batch Production",
            "Custom Manufacturing",
            "Lean Manufacturing",
            "Mass Production"
          ],
          correctAnswer: 2,
          explanation: "Lean Manufacturing specifically focuses on identifying and eliminating waste in all forms throughout the manufacturing process."
        },
        {
          id: 4,
          question: "What does JIT stand for in manufacturing systems?",
          options: [
            "Joint Industrial Training",
            "Job-Integrated Technology",
            "Justified Inventory Transfer",
            "Just-In-Time"
          ],
          correctAnswer: 3,
          explanation: "JIT stands for Just-In-Time - producing only what's needed, when it's needed, with minimal inventory."
        },
        {
          id: 5,
          question: "What type of layout groups machines by function?",
          options: [
            "Fixed-Position Layout",
            "Process Layout",
            "Cellular Layout",
            "Product Layout"
          ],
          correctAnswer: 1,
          explanation: "Process Layout organizes similar machines or processes together in the same area of the factory."
        },
        {
          id: 6,
          question: "Which system plans materials needed for production?",
          options: [
            "Shop Floor Control",
            "Material Requirements Planning",
            "Capacity Planning",
            "Master Production Schedule"
          ],
          correctAnswer: 1,
          explanation: "Material Requirements Planning (MRP) calculates the materials needed to meet production schedules."
        },
        {
          id: 7,
          question: "What does ERP integrate across a company?",
          options: [
            "All business processes",
            "Only manufacturing processes",
            "Only financial processes",
            "Only production planning"
          ],
          correctAnswer: 0,
          explanation: "Enterprise Resource Planning (ERP) integrates all business functions including manufacturing, finance, sales, and human resources."
        },
        {
          id: 8,
          question: "Which metric measures equipment productivity?",
          options: [
            "Throughput Time",
            "First Pass Yield",
            "On-Time Delivery",
            "Overall Equipment Effectiveness"
          ],
          correctAnswer: 3,
          explanation: "Overall Equipment Effectiveness (OEE) measures how well manufacturing equipment is performing compared to its full potential."
        },
        {
          id: 9,
          question: "What is mass customization?",
          options: [
            "Large-scale production of customized products",
            "Making one custom product",
            "Small batch production",
            "Large-scale production of standard products"
          ],
          correctAnswer: 0,
          explanation: "Mass customization combines the efficiency of mass production with the flexibility of customization to meet individual customer needs."
        },
        {
          id: 10,
          question: "What type of manufacturing rapidly responds to market changes?",
          options: [
            "Agile Manufacturing",
            "Traditional Manufacturing",
            "Lean Manufacturing",
            "Mass Production"
          ],
          correctAnswer: 0,
          explanation: "Agile Manufacturing focuses on quick response to changing customer needs and market conditions."
        },
        {
          id: 11,
          question: "Which layout has products staying stationary while resources move?",
          options: [
            "Product Layout",
            "Process Layout",
            "Fixed-Position Layout",
            "Cellular Layout"
          ],
          correctAnswer: 2,
          explanation: "In Fixed-Position Layout, the product remains in one location while workers, tools, and materials come to it."
        },
        {
          id: 12,
          question: "What does CIM integrate?",
          options: [
            "Only material handling",
            "All manufacturing processes",
            "Only production machines",
            "Only quality control"
          ],
          correctAnswer: 1,
          explanation: "Computer Integrated Manufacturing integrates all manufacturing processes including design, planning, production, and quality control."
        },
        {
          id: 13,
          question: "What is cellular manufacturing?",
          options: [
            "Random machine arrangement",
            "Using biological cells in production",
            "Single machine operations",
            "Grouping machines for product families"
          ],
          correctAnswer: 3,
          explanation: "Cellular Manufacturing organizes machines into cells that can complete entire product families, improving flow and reducing movement."
        },
        {
          id: 14,
          question: "What does MRP II add to basic MRP?",
          options: [
            "Only inventory control",
            "Only material planning",
            "Only production scheduling",
            "Integration with business functions"
          ],
          correctAnswer: 3,
          explanation: "Manufacturing Resource Planning (MRP II) integrates manufacturing planning with other business functions like finance and sales."
        },
        {
          id: 15,
          question: "What measures time from production start to completion?",
          options: [
            "Cycle Time",
            "Throughput Time",
            "Lead Time",
            "Setup Time"
          ],
          correctAnswer: 1,
          explanation: "Throughput Time measures the total time required for a product to move through the manufacturing system from start to finish."
        },
        {
          id: 16,
          question: "Which manufacturing approach is environmentally conscious?",
          options: [
            "Traditional Manufacturing",
            "Mass Production",
            "Sustainable Manufacturing",
            "Custom Manufacturing"
          ],
          correctAnswer: 2,
          explanation: "Sustainable Manufacturing focuses on minimizing environmental impact through efficient resource use and waste reduction."
        },
        {
          id: 17,
          question: "What does OEE measure?",
          options: [
            "Only availability",
            "Only quality rate",
            "Only machine speed",
            "Equipment productivity effectiveness"
          ],
          correctAnswer: 3,
          explanation: "Overall Equipment Effectiveness (OEE) combines availability, performance, and quality metrics to measure overall equipment productivity."
        },
        {
          id: 18,
          question: "Which system manages production activities on the factory floor?",
          options: [
            "Shop Floor Control",
            "Master Production Schedule",
            "Capacity Planning",
            "Material Requirements Planning"
          ],
          correctAnswer: 0,
          explanation: "Shop Floor Control systems manage and monitor production activities happening on the manufacturing floor in real-time."
        },
        {
          id: 19,
          question: "What type of manufacturing uses virtual design and production?",
          options: [
            "Traditional Manufacturing",
            "Batch Manufacturing",
            "Digital Manufacturing",
            "Handcraft Manufacturing"
          ],
          correctAnswer: 2,
          explanation: "Digital Manufacturing uses computer simulations and virtual models to design and test manufacturing processes before physical implementation."
        },
        {
          id: 20,
          question: "What is a key consideration when implementing advanced manufacturing systems?",
          options: [
            "Ignoring workforce needs",
            "Workforce training and preparation",
            "Eliminating all human workers",
            "Avoiding technology updates"
          ],
          correctAnswer: 1,
          explanation: "Proper workforce training is essential when implementing advanced manufacturing systems to ensure successful adoption and operation."
        }
      ]
    },
    {
      id: 2,
      title: "Precision Engineering and Metrology",
      content: `# Module 2: Precision Engineering and Metrology

## Fundamentals of Precision Engineering
Precision engineering focuses on designing and manufacturing components with extremely tight tolerances and high accuracy. It's essential for industries like aerospace, medical devices, and electronics where minute variations can cause failure.

### Principles of Precision
**Accuracy** - How close a measurement is to the true value
**Precision** - How consistent repeated measurements are
**Repeatability** - Getting same results under same conditions
**Reproducibility** - Getting same results under different conditions
**Resolution** - Smallest detectable measurement change

### Tolerance Systems
**Geometric Dimensioning and Tolerancing (GD&T)** - International standard for defining tolerances
**Limit System** - Maximum and minimum allowable dimensions
**Basic Size** - Theoretical exact dimension
**Allowance** - Minimum clearance or maximum interference
**Tolerance Stack-up** - Cumulative effect of multiple tolerances

### Measurement Standards
**International System of Units (SI)** - Global measurement standard
**Primary Standards** - Highest accuracy reference standards
**Secondary Standards** - Calibrated against primary standards
**Working Standards** - Used daily in manufacturing
**Traceability** - Chain of measurements back to primary standards

### Coordinate Measuring Machines (CMM)
**Types of CMMs** - Bridge, cantilever, horizontal arm, gantry
**Probe Systems** - Contact and non-contact measurement
**Software Integration** - Data collection and analysis
**Accuracy Factors** - Temperature, vibration, calibration
**Applications** - Complex part inspection, reverse engineering

### Surface Metrology
**Surface Roughness** - Fine irregularities on surface
**Surface Waviness** - Wider spacing irregularities
**Surface Finish** - Overall surface quality
**Measurement Methods** - Stylus profilometers, optical methods
**Surface Texture Parameters** - Ra, Rz, Rq values

### Optical Measurement Systems
**Vision Systems** - Camera-based measurement
**Laser Scanners** - Non-contact 3D measurement
**Interferometers** - Using light waves for measurement
**Microscopes** - For microscopic measurements
**Projectors** - Profile comparison measurement

### Advanced Measurement Techniques
**Scanning Electron Microscopy (SEM)** - High magnification surface imaging
**Atomic Force Microscopy (AFM)** - Nanoscale surface measurement
**Computed Tomography (CT)** - 3D internal structure measurement
**White Light Interferometry** - Non-contact surface profiling
**Digital Image Correlation** - Full-field strain measurement

### Calibration and Verification
**Calibration Procedures** - Adjusting measurement equipment
**Verification** - Confirming measurement accuracy
**Uncertainty Analysis** - Quantifying measurement reliability
**Calibration Intervals** - Regular recalibration schedules
**Documentation** - Maintaining calibration records

### Environmental Control for Precision
**Temperature Control** - Critical for accurate measurements
**Vibration Isolation** - Preventing measurement errors
**Clean Room Conditions** - For micro and nano manufacturing
**Humidity Control** - Preventing material expansion/contraction
**Lighting Control** - For optical measurements

### Quality Control in Precision Manufacturing
**Statistical Process Control** - Monitoring manufacturing processes
**First Article Inspection** - Initial production sample verification
**In-Process Inspection** - Checking during manufacturing
**Final Inspection** - Complete product verification
**Non-Conformance Reporting** - Documenting deviations

### Applications of Precision Engineering
**Aerospace Components** - Turbine blades, structural parts
**Medical Devices** - Implants, surgical instruments
**Electronics Manufacturing** - Semiconductor chips, circuit boards
**Automotive Industry** - Fuel injection systems, transmission parts
**Optical Systems** - Lenses, mirrors, precision optics`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What measures how close a measurement is to the true value?",
          options: [
            "Resolution",
            "Repeatability",
            "Accuracy",
            "Precision"
          ],
          correctAnswer: 2,
          explanation: "Accuracy refers to how close a measured value is to the actual or true value."
        },
        {
          id: 2,
          question: "What does GD&T stand for in precision engineering?",
          options: [
            "Global Dimension Tracking",
            "Geometric Design Technology",
            "Geometric Dimensioning and Tolerancing",
            "General Dimensioning and Tolerancing"
          ],
          correctAnswer: 2,
          explanation: "GD&T stands for Geometric Dimensioning and Tolerancing, an international standard for defining and communicating tolerances."
        },
        {
          id: 3,
          question: "Which measurement system is the global standard?",
          options: [
            "International System of Units",
            "Customary System",
            "Metric System",
            "Imperial System"
          ],
          correctAnswer: 0,
          explanation: "The International System of Units (SI) is the globally accepted standard for measurements."
        },
        {
          id: 4,
          question: "What does CMM stand for?",
          options: [
            "Contact Measurement Method",
            "Calibrated Measurement Module",
            "Coordinate Measuring Machine",
            "Computerized Measurement Machine"
          ],
          correctAnswer: 2,
          explanation: "CMM stands for Coordinate Measuring Machine, used for precise dimensional measurements of complex parts."
        },
        {
          id: 5,
          question: "What measures fine irregularities on a surface?",
          options: [
            "Surface Texture",
            "Surface Waviness",
            "Surface Roughness",
            "Surface Finish"
          ],
          correctAnswer: 2,
          explanation: "Surface Roughness measures the fine, closely spaced irregularities on a manufactured surface."
        },
        {
          id: 6,
          question: "Which is the highest accuracy reference standard?",
          options: [
            "Factory Standard",
            "Primary Standard",
            "Working Standard",
            "Secondary Standard"
          ],
          correctAnswer: 1,
          explanation: "Primary Standards are the highest accuracy measurement references, maintained by national laboratories."
        },
        {
          id: 7,
          question: "What measures consistency of repeated measurements?",
          options: [
            "Traceability",
            "Resolution",
            "Accuracy",
            "Precision"
          ],
          correctAnswer: 3,
          explanation: "Precision refers to the consistency or repeatability of measurements under unchanged conditions."
        },
        {
          id: 8,
          question: "What type of CMM has a moving bridge structure?",
          options: [
            "Cantilever CMM",
            "Gantry CMM",
            "Bridge CMM",
            "Horizontal Arm CMM"
          ],
          correctAnswer: 2,
          explanation: "Bridge CMMs have a bridge-like structure that moves along guideways, offering good accuracy and stability."
        },
        {
          id: 9,
          question: "What does Ra measure in surface metrology?",
          options: [
            "Waviness height",
            "Average surface roughness",
            "Maximum peak height",
            "Total profile variation"
          ],
          correctAnswer: 1,
          explanation: "Ra (Arithmetic Average Roughness) is the most common parameter for measuring average surface roughness."
        },
        {
          id: 10,
          question: "Which measurement method uses light waves?",
          options: [
            "Stylus Profilometer",
            "Calipers",
            "Interferometer",
            "Micrometer"
          ],
          correctAnswer: 2,
          explanation: "Interferometers use the interference patterns of light waves to make extremely precise measurements."
        },
        {
          id: 11,
          question: "What is traceability in measurement?",
          options: [
            "Tracking equipment location",
            "Chain of measurements to primary standards",
            "Following production batches",
            "Monitoring measurement speed"
          ],
          correctAnswer: 1,
          explanation: "Traceability ensures measurements can be linked back to recognized standards through an unbroken chain of comparisons."
        },
        {
          id: 12,
          question: "What controls measurement errors from equipment vibration?",
          options: [
            "Lighting Control",
            "Humidity Control",
            "Temperature Control",
            "Vibration Isolation"
          ],
          correctAnswer: 3,
          explanation: "Vibration Isolation systems prevent external vibrations from affecting precision measurements and manufacturing."
        },
        {
          id: 13,
          question: "Which technique provides nanoscale surface measurement?",
          options: [
            "Vision System",
            "Atomic Force Microscopy",
            "Laser Scanner",
            "Coordinate Measuring Machine"
          ],
          correctAnswer: 1,
          explanation: "Atomic Force Microscopy (AFM) can measure surface features at the nanometer scale using a physical probe."
        },
        {
          id: 14,
          question: "What is the theoretical exact dimension called?",
          options: [
            "Allowance",
            "Basic Size",
            "Tolerance",
            "Limit Dimension"
          ],
          correctAnswer: 1,
          explanation: "Basic Size is the theoretical exact dimension from which limits are derived by applying tolerances."
        },
        {
          id: 15,
          question: "Which provides 3D internal structure measurement?",
          options: [
            "Optical Microscope",
            "Surface Profilometer",
            "Computed Tomography",
            "Vision System"
          ],
          correctAnswer: 2,
          explanation: "Computed Tomography (CT) scanning creates 3D images of internal structures without destructive testing."
        },
        {
          id: 16,
          question: "What measures the smallest detectable change?",
          options: [
            "Precision",
            "Accuracy",
            "Resolution",
            "Repeatability"
          ],
          correctAnswer: 2,
          explanation: "Resolution is the smallest increment of measurement that an instrument can detect and display."
        },
        {
          id: 17,
          question: "What type of standard is used daily in manufacturing?",
          options: [
            "Primary Standard",
            "Reference Standard",
            "Secondary Standard",
            "Working Standard"
          ],
          correctAnswer: 3,
          explanation: "Working Standards are used routinely in manufacturing for calibration and verification of measuring instruments."
        },
        {
          id: 18,
          question: "Which measurement is non-contact?",
          options: [
            "Micrometer",
            "Dial Indicator",
            "Vernier Caliper",
            "Laser Scanner"
          ],
          correctAnswer: 3,
          explanation: "Laser Scanners use laser beams to measure surfaces without physical contact, preventing part damage."
        },
        {
          id: 19,
          question: "What quantifies measurement reliability?",
          options: [
            "Documentation",
            "Verification",
            "Calibration",
            "Uncertainty Analysis"
          ],
          correctAnswer: 3,
          explanation: "Uncertainty Analysis quantifies the doubt or reliability associated with a measurement result."
        },
        {
          id: 20,
          question: "Which industry heavily uses precision engineering for implants?",
          options: [
            "Electronics",
            "Aerospace",
            "Automotive",
            "Medical Devices"
          ],
          correctAnswer: 3,
          explanation: "The medical device industry requires extremely precise manufacturing for implants and surgical instruments where small variations can affect patient safety."
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Materials Processing",
      content: `# Module 3: Advanced Materials Processing

## Modern Materials Processing Techniques
Advanced materials processing involves innovative methods to transform materials into finished products with enhanced properties, improved performance, and greater efficiency compared to traditional methods.

### Powder Metallurgy
**Powder Production** - Creating fine metal powders
**Compaction** - Pressing powders into shapes
**Sintering** - Heating to bond particles without melting
**Secondary Operations** - Additional processing after sintering
**Applications** - Gears, bearings, cutting tools, filters

### Metal Injection Molding (MIM)
**Process Overview** - Combining plastic injection molding with powder metallurgy
**Feedstock Preparation** - Mixing metal powder with binder
**Injection Molding** - Forming complex shapes
**Debinding** - Removing binder material
**Sintering** - Final densification and strengthening

### Additive Manufacturing for Metals
**Selective Laser Melting (SLM)** - Melting metal powder layer by layer
**Direct Metal Laser Sintering (DMLS)** - Similar to SLM with different parameters
**Electron Beam Melting (EBM)** - Using electron beams for melting
**Binder Jetting** - Using binder to join metal powder
**Applications** - Aerospace components, medical implants, tooling

### Composite Materials Manufacturing
**Fiber Reinforced Composites** - Combining fibers with matrix materials
**Layup Processes** - Hand layup, automated tape laying
**Resin Transfer Molding (RTM)** - Injecting resin into fiber preform
**Autoclave Processing** - Using heat and pressure for curing
**Pultrusion** - Continuous production of composite profiles

### Ceramic Processing
**Powder Preparation** - Producing ceramic powders
**Forming Methods** - Slip casting, pressing, extrusion
**Firing/Kiln Operations** - High temperature processing
**Finishing Operations** - Grinding, lapping, polishing
**Advanced Ceramics** - Structural, electrical, biomedical applications

### Surface Engineering
**Thermal Spraying** - Melting and spraying materials onto surfaces
**Physical Vapor Deposition (PVD)** - Vacuum coating processes
**Chemical Vapor Deposition (CVD)** - Chemical reaction coating
**Electroplating** - Electrochemical metal deposition
**Anodizing** - Electrochemical oxidation for aluminum

### Heat Treatment Technologies
**Advanced Heat Treatment** - Controlled heating and cooling processes
**Case Hardening** - Surface hardening techniques
**Precipitation Hardening** - Strengthening through phase transformations
**Quenching Media** - Different cooling methods and media
**Tempering and Annealing** - Stress relief and property adjustment

### Joining Advanced Materials
**Diffusion Bonding** - Joining through atomic diffusion
**Friction Stir Welding** - Solid-state joining process
**Laser Welding** - Precision joining with laser beams
**Electron Beam Welding** - Vacuum welding process
**Adhesive Bonding for Composites** - Structural adhesive applications

### Micro and Nano Manufacturing
**Micro-Machining** - Manufacturing at microscopic scales
**Nano-Fabrication** - Creating structures at nanometer scale
**Lithography Techniques** - Pattern transfer methods
**Etching Processes** - Chemical and physical material removal
**Deposition Techniques** - Adding material at micro/nano scale

### Smart Materials Processing
**Shape Memory Alloys** - Materials that remember original shape
**Piezoelectric Materials** - Generate electricity from pressure
**Magnetostrictive Materials** - Change shape in magnetic fields
**Processing Considerations** - Special requirements for smart materials
**Applications** - Sensors, actuators, adaptive structures

### Sustainable Materials Processing
**Recycling Technologies** - Recovering materials from waste
**Energy Efficient Processes** - Reducing energy consumption
**Waste Minimization** - Reducing material waste
**Green Manufacturing** - Environmentally friendly processes
**Life Cycle Assessment** - Evaluating environmental impact

### Quality Control in Advanced Processing
**In-Process Monitoring** - Real-time quality checking
**Non-Destructive Testing** - Inspection without damage
**Material Characterization** - Testing material properties
**Process Optimization** - Improving processing parameters
**Statistical Quality Control** - Data-driven quality management`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the heating process that bonds powder particles without melting?",
          options: [
            "Sintering",
            "Compaction",
            "Casting",
            "Melting"
          ],
          correctAnswer: 0,
          explanation: "Sintering heats powdered materials below their melting point to bond particles through atomic diffusion."
        },
        {
          id: 2,
          question: "What does MIM stand for in materials processing?",
          options: [
            "Material Integration Method",
            "Metal Injection Molding",
            "Micro Injection Manufacturing",
            "Multiple Injection Molding"
          ],
          correctAnswer: 1,
          explanation: "MIM stands for Metal Injection Molding, combining plastic injection molding with powder metallurgy."
        },
        {
          id: 3,
          question: "Which additive manufacturing process uses electron beams for metals?",
          options: [
            "Electron Beam Melting",
            "Selective Laser Melting",
            "Fused Deposition Modeling",
            "Binder Jetting"
          ],
          correctAnswer: 0,
          explanation: "Electron Beam Melting (EBM) uses electron beams in a vacuum to melt and fuse metal powder layers."
        },
        {
          id: 4,
          question: "What does RTM stand for in composite manufacturing?",
          options: [
            "Rotational Transfer Molding",
            "Reinforced Thermal Molding",
            "Rapid Tooling Method",
            "Resin Transfer Molding"
          ],
          correctAnswer: 3,
          explanation: "RTM stands for Resin Transfer Molding, where resin is injected into a closed mold containing fiber reinforcement."
        },
        {
          id: 5,
          question: "Which surface coating uses vacuum processes?",
          options: [
            "Thermal Spraying",
            "Physical Vapor Deposition",
            "Electroplating",
            "Anodizing"
          ],
          correctAnswer: 1,
          explanation: "Physical Vapor Deposition (PVD) coats surfaces in vacuum chambers using vaporized material."
        },
        {
          id: 6,
          question: "What is diffusion bonding?",
          options: [
            "Melting and joining",
            "Mechanical fastening",
            "Joining with adhesive",
            "Joining through atomic diffusion"
          ],
          correctAnswer: 3,
          explanation: "Diffusion bonding joins materials through atomic diffusion at high temperature and pressure without melting."
        },
        {
          id: 7,
          question: "Which heat treatment strengthens through phase transformations?",
          options: [
            "Annealing",
            "Precipitation Hardening",
            "Case Hardening",
            "Tempering"
          ],
          correctAnswer: 1,
          explanation: "Precipitation Hardening strengthens materials by forming fine particles that impede dislocation movement."
        },
        {
          id: 8,
          question: "What manufacturing works at microscopic scales?",
          options: [
            "Micro Manufacturing",
            "Macro Manufacturing",
            "Standard Manufacturing",
            "Bulk Manufacturing"
          ],
          correctAnswer: 0,
          explanation: "Micro Manufacturing creates products and features at microscopic scales, often for electronics and medical devices."
        },
        {
          id: 9,
          question: "What materials remember their original shape?",
          options: [
            "Shape Memory Alloys",
            "Piezoelectric Materials",
            "Magnetostrictive Materials",
            "Composite Materials"
          ],
          correctAnswer: 0,
          explanation: "Shape Memory Alloys can return to a predetermined shape when heated after being deformed."
        },
        {
          id: 10,
          question: "What is green manufacturing concerned with?",
          options: [
            "Only product quality",
            "Only production speed",
            "Environmental impact",
            "Only cost reduction"
          ],
          correctAnswer: 2,
          explanation: "Green Manufacturing focuses on environmentally friendly processes that minimize ecological impact."
        },
        {
          id: 11,
          question: "Which composite process uses continuous production?",
          options: [
            "Resin Transfer Molding",
            "Autoclave Processing",
            "Hand Layup",
            "Pultrusion"
          ],
          correctAnswer: 3,
          explanation: "Pultrusion continuously pulls fibers through resin and heated dies to create constant cross-section profiles."
        },
        {
          id: 12,
          question: "What does SLM stand for in metal additive manufacturing?",
          options: [
            "Sequential Layer Melting",
            "Selective Laser Melting",
            "Systematic Laser Molding",
            "Standard Layer Manufacturing"
          ],
          correctAnswer: 1,
          explanation: "SLM stands for Selective Laser Melting, using lasers to fully melt and fuse metal powder layers."
        },
        {
          id: 13,
          question: "Which process uses binder to join metal powder?",
          options: [
            "Selective Laser Melting",
            "Direct Energy Deposition",
            "Binder Jetting",
            "Electron Beam Melting"
          ],
          correctAnswer: 2,
          explanation: "Binder Jetting uses liquid binder to join powder particles, followed by sintering or infiltration."
        },
        {
          id: 14,
          question: "What is autoclave processing used for?",
          options: [
            "Surface coating",
            "Powder compaction",
            "Metal casting",
            "Composite curing"
          ],
          correctAnswer: 3,
          explanation: "Autoclaves use heat and pressure to cure composite materials, ensuring proper consolidation and properties."
        },
        {
          id: 15,
          question: "Which joining method is solid-state?",
          options: [
            "Laser Welding",
            "Electron Beam Welding",
            "Friction Stir Welding",
            "Arc Welding"
          ],
          correctAnswer: 2,
          explanation: "Friction Stir Welding joins materials in solid state using frictional heat without melting."
        },
        {
          id: 16,
          question: "What characterizes materials that generate electricity from pressure?",
          options: [
            "Piezoelectric Effect",
            "Shape Memory Effect",
            "Superelasticity",
            "Magnetostriction"
          ],
          correctAnswer: 0,
          explanation: "Piezoelectric materials generate electrical charge when mechanically stressed."
        },
        {
          id: 17,
          question: "What does CVD stand for in surface engineering?",
          options: [
            "Continuous Vapor Distribution",
            "Chemical Vapor Decomposition",
            "Controlled Vapor Deposition",
            "Chemical Vapor Deposition"
          ],
          correctAnswer: 3,
          explanation: "CVD stands for Chemical Vapor Deposition, where coatings form through chemical reactions of vapor precursors."
        },
        {
          id: 18,
          question: "Which process continuously produces composite profiles?",
          options: [
            "Resin Transfer Molding",
            "Pultrusion",
            "Hand Layup",
            "Filament Winding"
          ],
          correctAnswer: 1,
          explanation: "Pultrusion continuously produces composite profiles with constant cross-sections."
        },
        {
          id: 19,
          question: "What evaluates environmental impact of processes?",
          options: [
            "Production Planning",
            "Life Cycle Assessment",
            "Cost Analysis",
            "Quality Control"
          ],
          correctAnswer: 1,
          explanation: "Life Cycle Assessment evaluates environmental impacts of products or processes throughout their entire life cycle."
        },
        {
          id: 20,
          question: "Which inspection method doesn't damage parts?",
          options: [
            "Partial Testing",
            "Non-Destructive Testing",
            "Destructive Testing",
            "Complete Testing"
          ],
          correctAnswer: 1,
          explanation: "Non-Destructive Testing inspects materials and components without damaging or altering them."
        }
      ]
    },
    {
      id: 4,
      title: "Automation and Robotics in Manufacturing",
      content: `# Module 4: Automation and Robotics in Manufacturing

## Introduction to Manufacturing Automation
Automation in manufacturing involves using control systems and information technologies to reduce human intervention in production processes. Robotics represents the most advanced form of physical automation in factories.

### Levels of Automation
**Manual Operation** - Complete human control
**Semi-Automated** - Humans and machines work together
**Fully Automated** - Machines perform all operations
**Fixed Automation** - Dedicated equipment for specific tasks
**Flexible Automation** - Equipment that can handle variety
**Programmable Automation** - Computer-controlled adaptable systems

### Industrial Robotics
**Robot Anatomy** - Structure, joints, end-effectors
**Degrees of Freedom** - Number of independent movements
**Work Envelope** - Space robot can reach
**Payload Capacity** - Weight robot can handle
**Repeatability** - Position accuracy for repeated tasks

### Types of Industrial Robots
**Articulated Robots** - Jointed arm robots (most common)
**SCARA Robots** - Selective Compliance Assembly Robot Arm
**Cartesian Robots** - Linear motion in X, Y, Z axes
**Delta Robots** - Parallel arm robots for high speed
**Collaborative Robots** - Designed to work safely with humans

### Robot Programming Methods
**Teach Pendant Programming** - Manual teaching of positions
**Offline Programming** - Programming without interrupting production
**Lead-Through Programming** - Physically moving robot through motions
**Sensor-Based Programming** - Using sensor inputs for adaptation
**Simulation Software** - Virtual testing of robot programs

### Robot Applications in Manufacturing
**Material Handling** - Loading, unloading, transferring materials
**Assembly Operations** - Putting components together
**Welding and Joining** - Arc welding, spot welding, adhesive application
**Painting and Coating** - Spray painting, powder coating
**Inspection and Testing** - Quality control and measurement

### Automated Guided Vehicles (AGVs)
**Types of AGVs** - Tow vehicles, unit load carriers, forklift AGVs
**Guidance Systems** - Magnetic tape, laser, vision, inertial
**Navigation Technologies** - Path following, free navigation
**Safety Systems** - Obstacle detection, emergency stops
**Fleet Management** - Coordinating multiple AGVs

### Programmable Logic Controllers (PLCs)
**PLC Architecture** - Input/output modules, processor, programming device
**Ladder Logic Programming** - Graphical programming language
**Scan Cycle** - How PLCs execute programs
**PLC Networks** - Connecting multiple PLCs and devices
**Safety PLCs** - Specialized for safety-critical applications

### Computer Numerical Control (CNC) Systems
**CNC Machine Components** - Controller, drives, motors, feedback
**G-Code Programming** - Standard machine tool programming
**CAD/CAM Integration** - From design to manufacturing
**Multi-Axis Machining** - Complex part production
**Adaptive Control** - Real-time adjustment of machining parameters

### Vision Systems in Automation
**Machine Vision Components** - Cameras, lighting, processors, software
**Inspection Applications** - Defect detection, measurement, verification
**Guidance Applications** - Robot guidance, part location
**Identification** - Barcode reading, optical character recognition
**3D Vision Systems** - Depth perception for complex tasks

### Sensor Integration
**Types of Sensors** - Proximity, position, force, vision, temperature
**Sensor Networks** - Multiple sensors working together
**Data Acquisition** - Collecting and processing sensor data
**Real-Time Monitoring** - Continuous process monitoring
**Predictive Maintenance** - Using sensor data for maintenance planning

### Human-Machine Interface (HMI)
**HMI Design Principles** - User-friendly interface design
**Touchscreen Interfaces** - Modern control interfaces
**Mobile HMIs** - Remote monitoring and control
**Alarm Management** - Handling system alarms and alerts
**Data Visualization** - Presenting production data clearly

### System Integration
**Communication Protocols** - Ethernet/IP, Profinet, Modbus, DeviceNet
**Middleware Solutions** - Connecting different systems
**Data Exchange Standards** - STEP, MTConnect, OPC UA
**System Architecture** - Planning integrated automation systems
**Testing and Commissioning** - Verifying integrated systems work correctly

### Safety in Automated Systems
**Risk Assessment** - Identifying potential hazards
**Safety Standards** - ISO, ANSI, OSHA requirements
**Safety Devices** - Light curtains, safety mats, emergency stops
**Safety-rated Functions** - Certified safety controls
**Collaborative Workspaces** - Safe human-robot interaction

### Future Trends in Manufacturing Automation
**Industrial Internet of Things (IIoT)** - Connected manufacturing devices
**Artificial Intelligence in Automation** - Smart decision-making
**Digital Twins** - Virtual replicas of physical systems
**Cloud Robotics** - Robot intelligence in the cloud
**Augmented Reality** - Overlaying digital information on physical world`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most common type of industrial robot?",
          options: [
            "Delta Robot",
            "SCARA Robot",
            "Cartesian Robot",
            "Articulated Robot"
          ],
          correctAnswer: 3,
          explanation: "Articulated robots with jointed arms are the most common type used in industrial applications."
        },
        {
          id: 2,
          question: "What does SCARA stand for in robotics?",
          options: [
            "Standard Compliance Automated Robotic Arm",
            "Selective Compliance Assembly Robot Arm",
            "Selective Control Automated Robotic Assembly",
            "Systematic Compliance Articulated Robot Assembly"
          ],
          correctAnswer: 1,
          explanation: "SCARA stands for Selective Compliance Assembly Robot Arm, designed for fast, precise assembly tasks."
        },
        {
          id: 3,
          question: "What programming method uses a handheld device to teach positions?",
          options: [
            "Teach Pendant Programming",
            "Offline Programming",
            "Sensor-Based Programming",
            "Lead-Through Programming"
          ],
          correctAnswer: 0,
          explanation: "Teach pendant programming uses a handheld device to manually move the robot and record positions."
        },
        {
          id: 4,
          question: "What does AGV stand for?",
          options: [
            "Automated Guided Vehicle",
            "Autonomous Guided Vehicle",
            "Advanced Guided Vehicle",
            "Automated General Vehicle"
          ],
          correctAnswer: 0,
          explanation: "AGV stands for Automated Guided Vehicle, used for material transport in manufacturing facilities."
        },
        {
          id: 5,
          question: "What is the graphical programming language for PLCs?",
          options: [
            "C++",
            "Java",
            "Ladder Logic",
            "Python"
          ],
          correctAnswer: 2,
          explanation: "Ladder Logic is the traditional graphical programming language used for Programmable Logic Controllers."
        },
        {
          id: 6,
          question: "What does CNC stand for?",
          options: [
            "Computer Numerical Control",
            "Central Numerical Command",
            "Computerized Network Command",
            "Computer Network Control"
          ],
          correctAnswer: 0,
          explanation: "CNC stands for Computer Numerical Control, used for automated control of machine tools."
        },
        {
          id: 7,
          question: "Which robot type uses parallel arms for high speed?",
          options: [
            "Cartesian Robot",
            "Delta Robot",
            "SCARA Robot",
            "Articulated Robot"
          ],
          correctAnswer: 1,
          explanation: "Delta robots use parallel arms for extremely fast and precise pick-and-place operations."
        },
        {
          id: 8,
          question: "What is the space a robot can reach called?",
          options: [
            "Operating Zone",
            "Work Envelope",
            "Movement Field",
            "Payload Area"
          ],
          correctAnswer: 1,
          explanation: "Work envelope describes the three-dimensional space within which a robot can manipulate its end-effector."
        },
        {
          id: 9,
          question: "Which programming is done without interrupting production?",
          options: [
            "Lead-Through Programming",
            "On-the-fly Programming",
            "Teach Pendant Programming",
            "Offline Programming"
          ],
          correctAnswer: 3,
          explanation: "Offline programming creates robot programs on computers without stopping production."
        },
        {
          id: 10,
          question: "What uses cameras for inspection and guidance?",
          options: [
            "Machine Vision Systems",
            "CNC Systems",
            "PLC Systems",
            "HMI Systems"
          ],
          correctAnswer: 0,
          explanation: "Machine vision systems use cameras and image processing for inspection, measurement, and guidance."
        },
        {
          id: 11,
          question: "What does HMI stand for?",
          options: [
            "Human-Mechatronic Interaction",
            "Human-Manufacturing Integration",
            "Human-Machine Interface",
            "Hardware-Machine Interface"
          ],
          correctAnswer: 2,
          explanation: "HMI stands for Human-Machine Interface, the means by which humans interact with automated systems."
        },
        {
          id: 12,
          question: "Which robots are designed to work safely with humans?",
          options: [
            "High-Speed Robots",
            "Traditional Industrial Robots",
            "Collaborative Robots",
            "Fixed Automation Robots"
          ],
          correctAnswer: 2,
          explanation: "Collaborative robots (cobots) have safety features allowing them to work alongside humans without safety cages."
        },
        {
          id: 13,
          question: "What is G-code used for?",
          options: [
            "Robot Programming",
            "CNC Machine Programming",
            "Vision System Programming",
            "PLC Programming"
          ],
          correctAnswer: 1,
          explanation: "G-code is the standard programming language for CNC machine tools."
        },
        {
          id: 14,
          question: "What provides depth perception for complex tasks?",
          options: [
            "Proximity Sensors",
            "Barcode Readers",
            "2D Vision Systems",
            "3D Vision Systems"
          ],
          correctAnswer: 3,
          explanation: "3D vision systems provide depth information for complex inspection and guidance tasks."
        },
        {
          id: 15,
          question: "What uses sensor data for maintenance planning?",
          options: [
            "Predictive Maintenance",
            "Reactive Maintenance",
            "Preventive Maintenance",
            "Corrective Maintenance"
          ],
          correctAnswer: 0,
          explanation: "Predictive maintenance uses sensor data to predict when maintenance should be performed."
        },
        {
          id: 16,
          question: "What are virtual replicas of physical systems called?",
          options: [
            "Augmented Reality",
            "Simulation Models",
            "Digital Twins",
            "Virtual Reality"
          ],
          correctAnswer: 2,
          explanation: "Digital twins are virtual models that mirror physical systems for simulation and analysis."
        },
        {
          id: 17,
          question: "What does IIoT stand for?",
          options: [
            "Intelligent Internet Operations",
            "Industrial Internet of Things",
            "International Internet of Things",
            "Integrated Internet of Technology"
          ],
          correctAnswer: 1,
          explanation: "IIoT stands for Industrial Internet of Things, connecting industrial equipment and systems."
        },
        {
          id: 18,
          question: "Which safety device uses light beams for protection?",
          options: [
            "Emergency Stops",
            "Safety Relays",
            "Safety Mats",
            "Light Curtains"
          ],
          correctAnswer: 3,
          explanation: "Light curtains use arrays of light beams to detect when someone enters a hazardous area."
        },
        {
          id: 19,
          question: "What is the scan cycle in PLCs?",
          options: [
            "PLC startup sequence",
            "How PLCs execute programs",
            "PLC memory cleaning process",
            "How fast PLCs communicate"
          ],
          correctAnswer: 1,
          explanation: "The scan cycle is how PLCs repeatedly read inputs, execute program, and update outputs."
        },
        {
          id: 20,
          question: "Which robot has linear motion in X, Y, Z axes?",
          options: [
            "SCARA Robot",
            "Delta Robot",
            "Cartesian Robot",
            "Articulated Robot"
          ],
          correctAnswer: 2,
          explanation: "Cartesian robots move in straight lines along three perpendicular axes (X, Y, Z)."
        }
      ]
    },
    {
      id: 5,
      title: "Quality Engineering and Six Sigma",
      content: `# Module 5: Quality Engineering and Six Sigma

## Fundamentals of Quality Engineering
Quality engineering focuses on designing and implementing systems to ensure products meet customer requirements consistently. It involves prevention, detection, and correction of quality issues throughout the manufacturing process.

### Quality Management Systems
**ISO 9001 Standards** - International quality management requirements
**Quality Policy** - Organization's commitment to quality
**Quality Objectives** - Measurable quality goals
**Process Approach** - Managing activities as processes
**Continuous Improvement** - Ongoing enhancement of quality

### Statistical Process Control (SPC)
**Control Charts** - Monitoring process variation over time
**Process Capability** - Ability to meet specifications
**Common vs Special Causes** - Types of process variation
**Control Limits** - Statistical boundaries for normal variation
**Out of Control Signals** - Indicators of process problems

### Measurement System Analysis (MSA)
**Gage R&R Studies** - Repeatability and reproducibility analysis
**Accuracy vs Precision** - Measurement system performance
**Linearity** - Consistency across measurement range
**Stability** - Consistency over time
**Bias** - Systematic measurement error

### Design of Experiments (DOE)
**Factorial Designs** - Testing multiple factors simultaneously
**Response Surface Methodology** - Optimizing process responses
**Screening Experiments** - Identifying important factors
**Robust Design** - Making processes insensitive to variation
**Taguchi Methods** - Quality engineering through design

### Six Sigma Methodology
**DMAIC Process** - Define, Measure, Analyze, Improve, Control
**DMADV Process** - Define, Measure, Analyze, Design, Verify
**Sigma Level** - Measure of process capability
**Defects Per Million Opportunities** - Quality performance metric
**Cost of Poor Quality** - Financial impact of quality issues

### Lean Six Sigma
**Combining Lean and Six Sigma** - Eliminating waste and reducing variation
**Value Stream Mapping** - Visualizing material and information flow
**5S Methodology** - Sort, Set in order, Shine, Standardize, Sustain
**Kaizen Events** - Rapid improvement workshops
**Pull Systems** - Production based on customer demand

### Failure Mode and Effects Analysis (FMEA)
**Process FMEA** - Analyzing potential process failures
**Design FMEA** - Analyzing potential product failures
**Risk Priority Number** - Quantifying failure risk
**Severity, Occurrence, Detection** - FMEA rating scales
**Preventive Actions** - Measures to prevent failures

### Root Cause Analysis
**5 Whys Technique** - Asking why repeatedly to find root cause
**Fishbone Diagram** - Visual cause-and-effect analysis
**Pareto Analysis** - Focusing on most significant issues
**Fault Tree Analysis** - Systematic failure analysis
**Corrective Action Process** - Addressing root causes

### Quality Tools and Techniques
**Check Sheets** - Simple data collection forms
**Histograms** - Frequency distribution charts
**Pareto Charts** - Prioritizing problems by frequency
**Scatter Diagrams** - Showing relationships between variables
**Flow Charts** - Visualizing process steps

### Acceptance Sampling
**Sampling Plans** - Statistical sampling methods
**AQL (Acceptable Quality Level)** - Maximum defect percentage
**OC Curves** - Operating characteristic curves
**Single, Double, Multiple Sampling** - Different sampling approaches
**Skip Lot Sampling** - Reduced inspection for good quality

### Quality Audits
**Internal Audits** - Organization auditing itself
**External Audits** - Customers or certification bodies auditing
**Process Audits** - Checking if processes follow procedures
**Product Audits** - Checking product conformance
**System Audits** - Checking entire quality system

### Reliability Engineering
**Failure Rate Analysis** - How often failures occur
**Mean Time Between Failures** - Average time between failures
**Reliability Testing** - Testing under stress conditions
**Accelerated Life Testing** - Rapid reliability assessment
**Weibull Analysis** - Statistical reliability modeling

### Supplier Quality Management
**Supplier Qualification** - Evaluating supplier capabilities
**Supplier Audits** - Assessing supplier quality systems
**Incoming Inspection** - Checking received materials
**Supplier Development** - Helping suppliers improve
**Supplier Scorecards** - Tracking supplier performance

### Quality Costs
**Prevention Costs** - Preventing quality problems
**Appraisal Costs** - Checking for quality problems
**Internal Failure Costs** - Problems found before shipment
**External Failure Costs** - Problems found after shipment
**Optimal Quality Level** - Balancing quality and cost

### Quality Culture and Leadership
**Management Commitment** - Leadership role in quality
**Employee Involvement** - Engaging all employees in quality
**Training and Education** - Building quality knowledge
**Recognition and Rewards** - Motivating quality performance
**Communication** - Sharing quality information and results`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the international quality management standard?",
          options: [
            "ISO 14001",
            "ISO 9001",
            "ISO 27001",
            "ISO 45001"
          ],
          correctAnswer: 1,
          explanation: "ISO 9001 is the international standard for quality management systems."
        },
        {
          id: 2,
          question: "What does SPC stand for?",
          options: [
            "Statistical Process Control",
            "Statistical Product Control",
            "Systematic Process Checking",
            "Standard Production Control"
          ],
          correctAnswer: 0,
          explanation: "SPC stands for Statistical Process Control, using statistical methods to monitor and control processes."
        },
        {
          id: 3,
          question: "What does DMAIC stand for in Six Sigma?",
          options: [
            "Define, Measure, Analyze, Improve, Control",
            "Design, Measure, Analyze, Improve, Control",
            "Define, Monitor, Analyze, Implement, Control",
            "Design, Monitor, Assess, Improve, Check"
          ],
          correctAnswer: 0,
          explanation: "DMAIC stands for Define, Measure, Analyze, Improve, Control - the core Six Sigma improvement methodology."
        },
        {
          id: 4,
          question: "What is a visual tool for cause-and-effect analysis?",
          options: [
            "Control Chart",
            "Histogram",
            "Pareto Chart",
            "Fishbone Diagram"
          ],
          correctAnswer: 3,
          explanation: "Fishbone diagrams (Ishikawa diagrams) visually organize potential causes of problems."
        },
        {
          id: 5,
          question: "What does FMEA stand for?",
          options: [
            "Fault Management and Error Assessment",
            "Failure Management and Error Avoidance",
            "Failure Mode and Effects Analysis",
            "Functional Monitoring and Efficiency Analysis"
          ],
          correctAnswer: 2,
          explanation: "FMEA stands for Failure Mode and Effects Analysis, a systematic method for identifying potential failures."
        },
        {
          id: 6,
          question: "What does Gage R&R measure?",
          options: [
            "Material strength",
            "Measurement system variation",
            "Machine speed",
            "Production rate"
          ],
          correctAnswer: 1,
          explanation: "Gage Repeatability and Reproducibility studies measure variation in measurement systems."
        },
        {
          id: 7,
          question: "Which tool prioritizes problems by frequency?",
          options: [
            "Check Sheet",
            "Flow Chart",
            "Scatter Diagram",
            "Pareto Chart"
          ],
          correctAnswer: 3,
          explanation: "Pareto charts prioritize issues by frequency or impact, following the 80/20 principle."
        },
        {
          id: 8,
          question: "What does AQL stand for?",
          options: [
            "Average Quality Limit",
            "Acceptance Quality Limit",
            "Acceptable Quality Level",
            "Approved Quality Limit"
          ],
          correctAnswer: 2,
          explanation: "AQL stands for Acceptable Quality Level, the maximum defect percentage considered acceptable."
        },
        {
          id: 9,
          question: "What is the 5 Whys technique used for?",
          options: [
            "Measuring process speed",
            "Finding root causes of problems",
            "Setting quality goals",
            "Counting defects"
          ],
          correctAnswer: 1,
          explanation: "The 5 Whys technique repeatedly asks 'why' to drill down to the root cause of a problem."
        },
        {
          id: 10,
          question: "What does MTBF stand for?",
          options: [
            "Maximum Time Before Failure",
            "Mean Time Between Failures",
            "Mean Time Before Fault",
            "Minimum Time Between Functions"
          ],
          correctAnswer: 1,
          explanation: "MTBF stands for Mean Time Between Failures, a reliability metric."
        },
        {
          id: 11,
          question: "Which methodology combines waste elimination and variation reduction?",
          options: [
            "Statistical Process Control",
            "Traditional Quality Control",
            "Total Quality Management",
            "Lean Six Sigma"
          ],
          correctAnswer: 3,
          explanation: "Lean Six Sigma combines Lean's waste elimination with Six Sigma's variation reduction."
        },
        {
          id: 12,
          question: "What are the 5S steps?",
          options: [
            "Sort, Simplify, Shine, Standardize, Sustain",
            "Sort, Set, Shine, Standardize, Sustain",
            "Sort, Straighten, Shine, Standardize, Sustain",
            "Sort, Systematize, Shine, Standardize, Sustain"
          ],
          correctAnswer: 2,
          explanation: "5S stands for Sort, Straighten (Set in order), Shine, Standardize, Sustain - workplace organization method."
        },
        {
          id: 13,
          question: "What does DOE stand for?",
          options: [
            "Design of Equipment",
            "Design of Experiments",
            "Documentation of Errors",
            "Department of Engineering"
          ],
          correctAnswer: 1,
          explanation: "DOE stands for Design of Experiments, statistical planning of tests to understand process behavior."
        },
        {
          id: 14,
          question: "What is process capability?",
          options: [
            "Number of operators needed",
            "Ability to meet specifications",
            "How fast a process runs",
            "How much a process costs"
          ],
          correctAnswer: 1,
          explanation: "Process capability measures how well a process can meet design specifications."
        },
        {
          id: 15,
          question: "What does RPN stand for in FMEA?",
          options: [
            "Required Process Number",
            "Risk Priority Number",
            "Random Probability Number",
            "Reliability Performance Number"
          ],
          correctAnswer: 1,
          explanation: "RPN stands for Risk Priority Number, calculated as Severity × Occurrence × Detection in FMEA."
        },
        {
          id: 16,
          question: "What is value stream mapping?",
          options: [
            "Visualizing material and information flow",
            "Mapping equipment locations",
            "Charting employee movements",
            "Drawing factory layouts"
          ],
          correctAnswer: 0,
          explanation: "Value stream mapping visualizes the flow of materials and information through processes."
        },
        {
          id: 17,
          question: "What are costs of preventing quality problems called?",
          options: [
            "Appraisal Costs",
            "Prevention Costs",
            "External Failure Costs",
            "Internal Failure Costs"
          ],
          correctAnswer: 1,
          explanation: "Prevention costs are incurred to prevent quality problems from occurring."
        },
        {
          id: 18,
          question: "What does DPMO stand for?",
          options: [
            "Defect Prevention Management Objective",
            "Daily Production Maximum Output",
            "Defective Parts Monthly Output",
            "Defects Per Million Opportunities"
          ],
          correctAnswer: 3,
          explanation: "DPMO stands for Defects Per Million Opportunities, a Six Sigma performance metric."
        },
        {
          id: 19,
          question: "What is Kaizen?",
          options: [
            "A type of control chart",
            "Continuous improvement philosophy",
            "A sampling method",
            "A Japanese quality award"
          ],
          correctAnswer: 1,
          explanation: "Kaizen is the Japanese philosophy of continuous, incremental improvement involving everyone."
        },
        {
          id: 20,
          question: "What does OC curve stand for?",
          options: [
            "Operating Characteristic curve",
            "Operation Cost curve",
            "Optimal Control curve",
            "Output Comparison curve"
          ],
          correctAnswer: 0,
          explanation: "OC stands for Operating Characteristic curve, showing probability of acceptance for given quality levels."
        }
      ]
    },
    {
      id: 6,
      title: "Sustainable Manufacturing and Industry 4.0",
      content: `# Module 6: Sustainable Manufacturing and Industry 4.0

## Sustainable Manufacturing Principles
Sustainable manufacturing involves creating products through economically-sound processes that minimize environmental impact while conserving energy and natural resources. It represents a holistic approach to manufacturing that considers the entire product lifecycle.

### Pillars of Sustainable Manufacturing
**Environmental Sustainability** - Reducing ecological footprint
**Economic Sustainability** - Maintaining profitability and growth
**Social Sustainability** - Considering workers and communities
**Life Cycle Thinking** - Considering impacts from cradle to grave
**Circular Economy** - Closing material loops through recycling

### Environmental Management Systems
**ISO 14001 Standard** - Environmental management requirements
**Environmental Policy** - Organization's environmental commitments
**Aspect and Impact Analysis** - Identifying environmental effects
**Legal Compliance** - Meeting environmental regulations
**Continuous Environmental Improvement** - Ongoing enhancement

### Energy Efficiency in Manufacturing
**Energy Audits** - Assessing energy use patterns
**Energy Management Systems** - ISO 50001 standards
**Waste Heat Recovery** - Capturing and reusing thermal energy
**Efficient Motors and Drives** - Reducing electrical energy use
**Lighting Efficiency** - Optimizing factory lighting systems

### Waste Management and Reduction
**Waste Hierarchy** - Prevent, Reduce, Reuse, Recycle, Recover, Dispose
**Zero Waste Goals** - Aiming for complete waste elimination
**Material Efficiency** - Maximizing useful output from inputs
**By-product Utilization** - Finding uses for manufacturing by-products
**Hazardous Waste Management** - Safe handling of dangerous materials

### Water Conservation
**Water Footprint Assessment** - Measuring water use and impact
**Water Recycling Systems** - Reusing process water
**Rainwater Harvesting** - Collecting and using rainwater
**Efficient Cleaning Processes** - Reducing water use in cleaning
**Wastewater Treatment** - Treating and reusing wastewater

### Green Materials and Processes
**Bio-based Materials** - Materials from renewable biological sources
**Recycled Materials** - Using post-consumer or post-industrial materials
**Low-impact Processes** - Manufacturing methods with minimal environmental impact
**Cleaner Production** - Preventing pollution at source
**Green Chemistry** - Designing chemical products and processes to reduce hazards

### Carbon Footprint Reduction
**Carbon Accounting** - Measuring greenhouse gas emissions
**Carbon Neutral Goals** - Achieving net-zero carbon emissions
**Renewable Energy Adoption** - Using solar, wind, geothermal power
**Energy-efficient Equipment** - Reducing energy consumption
**Supply Chain Emissions** - Addressing emissions throughout value chain

### Industry 4.0 Technologies
**Cyber-Physical Systems** - Integration of physical and digital worlds
**Internet of Things (IoT)** - Networked physical devices
**Big Data and Analytics** - Processing large manufacturing datasets
**Cloud Computing** - Remote data storage and processing
**Artificial Intelligence** - Machine learning for optimization

### Smart Factory Concepts
**Digital Twins** - Virtual models of physical systems
**Predictive Maintenance** - Using data to predict equipment failures
**Real-time Monitoring** - Continuous tracking of production
**Autonomous Systems** - Self-optimizing manufacturing systems
**Interoperability** - Different systems working together seamlessly

### Additive Manufacturing for Sustainability
**Material Efficiency** - Adding material only where needed
**Lightweight Design** - Reducing material use through design
**Part Consolidation** - Combining multiple parts into one
**Localized Production** - Reducing transportation emissions
**Customization** - Producing exactly what's needed

### Supply Chain Sustainability
**Green Procurement** - Environmentally responsible purchasing
**Supplier Environmental Performance** - Evaluating suppliers' environmental practices
**Logistics Optimization** - Efficient transportation and distribution
**Packaging Reduction** - Minimizing packaging materials
**Reverse Logistics** - Managing product returns and recycling

### Circular Economy in Manufacturing
**Design for Disassembly** - Products designed to be taken apart easily
**Remanufacturing** - Restoring used products to like-new condition
**Refurbishment** - Repairing and updating used products
**Material Recovery** - Extracting materials from end-of-life products
**Product-as-a-Service** - Selling services rather than products

### Sustainable Business Models
**Extended Producer Responsibility** - Manufacturers responsible for product lifecycle
**Product Service Systems** - Combining products and services
**Sharing Economy** - Shared use of products and resources
**Performance-based Contracts** - Payment based on performance outcomes
**Cradle-to-Cradle Design** - Products designed for continuous reuse

### Social Sustainability
**Workplace Health and Safety** - Protecting worker wellbeing
**Fair Labor Practices** - Ethical treatment of workers
**Community Engagement** - Positive relationships with local communities
**Diversity and Inclusion** - Diverse workforce and inclusive practices
**Skills Development** - Training and education for workers

### Implementation Strategies
**Sustainability Roadmaps** - Planning sustainable transformation
**Stakeholder Engagement** - Involving all relevant parties
**Performance Measurement** - Tracking sustainability metrics
**Reporting and Transparency** - Communicating sustainability performance
**Continuous Improvement** - Ongoing sustainability enhancement`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three pillars of sustainable manufacturing?",
          options: [
            "Design, Manufacturing, Service",
            "Speed, Quality, Cost",
            "Production, Distribution, Sales",
            "Environmental, Economic, Social"
          ],
          correctAnswer: 3,
          explanation: "The three pillars are Environmental (planet), Economic (profit), and Social (people) sustainability."
        },
        {
          id: 2,
          question: "What is the international environmental management standard?",
          options: [
            "ISO 14001",
            "ISO 50001",
            "ISO 9001",
            "ISO 45001"
          ],
          correctAnswer: 0,
          explanation: "ISO 14001 is the international standard for environmental management systems."
        },
        {
          id: 3,
          question: "What does IoT stand for in Industry 4.0?",
          options: [
            "Internet of Things",
            "Industrial Operating Technology",
            "Integrated Operations Technology",
            "Internet of Technology"
          ],
          correctAnswer: 0,
          explanation: "IoT stands for Internet of Things - networked physical devices with sensors and connectivity."
        },
        {
          id: 4,
          question: "What are virtual models of physical systems called?",
          options: [
            "Augmented Reality",
            "Digital Twins",
            "Virtual Reality",
            "Simulation Software"
          ],
          correctAnswer: 1,
          explanation: "Digital twins are virtual replicas of physical systems used for simulation and analysis."
        },
        {
          id: 5,
          question: "What is the waste hierarchy order?",
          options: [
            "Prevent, Reduce, Reuse, Recycle",
            "Recycle, Reuse, Reduce, Prevent",
            "Dispose, Recover, Recycle, Reuse",
            "Reduce, Recycle, Reuse, Prevent"
          ],
          correctAnswer: 0,
          explanation: "The waste hierarchy prioritizes prevention first, then reduction, reuse, and finally recycling."
        },
        {
          id: 6,
          question: "What does EPR stand for?",
          options: [
            "Efficient Production Requirements",
            "Extended Producer Responsibility",
            "Energy Performance Rating",
            "Environmental Protection Regulation"
          ],
          correctAnswer: 1,
          explanation: "EPR stands for Extended Producer Responsibility - manufacturers responsible for product end-of-life."
        },
        {
          id: 7,
          question: "What is the circular economy concept?",
          options: [
            "Waste-to-energy conversion",
            "Linear production model",
            "Single-use product design",
            "Closing material loops through recycling"
          ],
          correctAnswer: 3,
          explanation: "Circular economy aims to keep materials in use through recycling and reuse, eliminating waste."
        },
        {
          id: 8,
          question: "What does ISO 50001 cover?",
          options: [
            "Quality Management",
            "Environmental Management",
            "Energy Management",
            "Safety Management"
          ],
          correctAnswer: 2,
          explanation: "ISO 50001 is the international standard for energy management systems."
        },
        {
          id: 9,
          question: "What is predictive maintenance?",
          options: [
            "Preventive maintenance based on time",
            "Using data to predict when maintenance is needed",
            "Scheduled maintenance at fixed intervals",
            "Maintenance after equipment fails"
          ],
          correctAnswer: 1,
          explanation: "Predictive maintenance uses sensor data and analytics to predict equipment failures before they occur."
        },
        {
          id: 10,
          question: "What is cradle-to-cradle design?",
          options: [
            "Design for lowest initial cost",
            "Design for continuous reuse and recycling",
            "Design for single use and disposal",
            "Design for maximum production speed"
          ],
          correctAnswer: 1,
          explanation: "Cradle-to-cradle design creates products that can be continuously recycled or biodegraded safely."
        },
        {
          id: 11,
          question: "What are cyber-physical systems?",
          options: [
            "Only computer systems",
            "Manual control systems",
            "Only physical machines",
            "Integration of physical and digital systems"
          ],
          correctAnswer: 3,
          explanation: "Cyber-physical systems integrate computational algorithms with physical processes."
        },
        {
          id: 12,
          question: "What is zero waste manufacturing?",
          options: [
            "Only recycling some materials",
            "No waste generation at all",
            "Aiming to eliminate waste completely",
            "Ignoring waste production"
          ],
          correctAnswer: 2,
          explanation: "Zero waste aims to eliminate all waste through prevention, reuse, and recycling."
        },
        {
          id: 13,
          question: "What does AI stand for in manufacturing?",
          options: [
            "Artificial Intelligence",
            "Automated Inspection",
            "Automated Intelligence",
            "Advanced Integration"
          ],
          correctAnswer: 0,
          explanation: "AI stands for Artificial Intelligence - using machine learning and algorithms for optimization."
        },
        {
          id: 14,
          question: "What is green procurement?",
          options: [
            "Avoiding all purchasing",
            "Only buying local materials",
            "Environmentally responsible purchasing",
            "Buying the cheapest materials"
          ],
          correctAnswer: 2,
          explanation: "Green procurement considers environmental factors when purchasing materials and services."
        },
        {
          id: 15,
          question: "What is remanufacturing?",
          options: [
            "Restoring used products to like-new condition",
            "Throwing away old products",
            "Only repairing broken parts",
            "Simple cleaning of used products"
          ],
          correctAnswer: 0,
          explanation: "Remanufacturing completely disassembles, cleans, repairs, and reassembles products to original specifications."
        },
        {
          id: 16,
          question: "What is a product service system?",
          options: [
            "Selling only products",
            "Selling only services",
            "Free product giveaways",
            "Combining products and services"
          ],
          correctAnswer: 3,
          explanation: "Product service systems combine tangible products with intangible services to meet customer needs."
        },
        {
          id: 17,
          question: "What does water footprint measure?",
          options: [
            "Total water use and impact",
            "Only direct water use",
            "Only water recycling rate",
            "Only wastewater produced"
          ],
          correctAnswer: 0,
          explanation: "Water footprint measures total freshwater used directly and indirectly throughout product lifecycle."
        },
        {
          id: 18,
          question: "What is smart factory interoperability?",
          options: [
            "Separate databases for each department",
            "Different systems working together seamlessly",
            "Manual data transfer between systems",
            "Isolated systems working independently"
          ],
          correctAnswer: 1,
          explanation: "Interoperability allows different systems and devices to communicate and work together effectively."
        },
        {
          id: 19,
          question: "What is carbon neutrality?",
          options: [
            "Ignoring carbon emissions",
            "Achieving net-zero carbon emissions",
            "Only reducing some emissions",
            "Only measuring emissions"
          ],
          correctAnswer: 1,
          explanation: "Carbon neutrality means balancing emitted carbon with carbon removal or offsets for net-zero impact."
        },
        {
          id: 20,
          question: "What is design for disassembly?",
          options: [
            "Ignoring end-of-life considerations",
            "Only designing for assembly",
            "Making products impossible to take apart",
            "Designing products to be easily taken apart"
          ],
          correctAnswer: 3,
          explanation: "Design for disassembly creates products that can be easily taken apart for repair, upgrade, or recycling."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "manuf-eng-diploma-exam",
    title: "Manufacturing Engineering Diploma Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need to score at least 75% to pass the diploma.",
    passingScore: 75,
    questions: [
      // Module 1 Questions
      {
        id: 1,
        module: 1,
        question: "What does FMS stand for in manufacturing systems?",
        options: [
          "Fixed Manufacturing System",
          "Fundamental Manufacturing System",
          "Flexible Manufacturing System",
          "Fast Manufacturing System"
        ],
        correctAnswer: 2,
        explanation: "FMS stands for Flexible Manufacturing System - automated systems that can handle product variety."
      },
      {
        id: 2,
        module: 1,
        question: "What is the complete integration of manufacturing processes through computers?",
        options: [
          "Just-In-Time Manufacturing",
          "Cellular Manufacturing",
          "Lean Manufacturing",
          "Computer Integrated Manufacturing"
        ],
        correctAnswer: 3,
        explanation: "CIM connects all manufacturing processes through computer systems."
      },
      // Module 2 Questions
      {
        id: 3,
        module: 2,
        question: "What measures closeness to true value?",
        options: [
          "Precision",
          "Accuracy",
          "Resolution",
          "Repeatability"
        ],
        correctAnswer: 1,
        explanation: "Accuracy measures how close measurements are to the true value."
      },
      {
        id: 4,
        module: 2,
        question: "What does GD&T stand for?",
        options: [
          "Geometric Dimensioning and Tolerancing",
          "Geometric Design Technology",
          "General Dimensioning and Tolerancing",
          "Global Dimension Tracking"
        ],
        correctAnswer: 0,
        explanation: "GD&T is the international standard for defining tolerances."
      },
      // Module 3 Questions
      {
        id: 5,
        module: 3,
        question: "What bonds powder particles without melting?",
        options: [
          "Sintering",
          "Compaction",
          "Melting",
          "Casting"
        ],
        correctAnswer: 0,
        explanation: "Sintering heats powders below melting point to bond particles."
      },
      {
        id: 6,
        module: 3,
        question: "What does MIM stand for?",
        options: [
          "Metal Injection Molding",
          "Micro Injection Manufacturing",
          "Material Integration Method",
          "Multiple Injection Molding"
        ],
        correctAnswer: 0,
        explanation: "MIM combines plastic injection molding with powder metallurgy."
      },
      // Module 4 Questions
      {
        id: 7,
        module: 4,
        question: "What is the most common industrial robot type?",
        options: [
          "Cartesian Robot",
          "Delta Robot",
          "SCARA Robot",
          "Articulated Robot"
        ],
        correctAnswer: 3,
        explanation: "Articulated robots with jointed arms are most common."
      },
      {
        id: 8,
        module: 4,
        question: "What does AGV stand for?",
        options: [
          "Automated General Vehicle",
          "Autonomous Guided Vehicle",
          "Automated Guided Vehicle",
          "Advanced Guided Vehicle"
        ],
        correctAnswer: 2,
        explanation: "AGVs transport materials in manufacturing facilities."
      },
      // Module 5 Questions
      {
        id: 9,
        module: 5,
        question: "What is the international quality management standard?",
        options: [
          "ISO 27001",
          "ISO 9001",
          "ISO 14001",
          "ISO 45001"
        ],
        correctAnswer: 1,
        explanation: "ISO 9001 is the quality management system standard."
      },
      {
        id: 10,
        module: 5,
        question: "What does DMAIC stand for?",
        options: [
          "Design, Monitor, Assess, Improve, Check",
          "Define, Monitor, Analyze, Implement, Control",
          "Define, Measure, Analyze, Improve, Control",
          "Design, Measure, Analyze, Improve, Control"
        ],
        correctAnswer: 2,
        explanation: "DMAIC is the Six Sigma improvement methodology."
      },
      // Module 6 Questions
      {
        id: 11,
        module: 6,
        question: "What are the three sustainability pillars?",
        options: [
          "Design, Manufacturing, Service",
          "Production, Distribution, Sales",
          "Environmental, Economic, Social",
          "Speed, Quality, Cost"
        ],
        correctAnswer: 2,
        explanation: "Environmental, Economic, and Social sustainability."
      },
      {
        id: 12,
        module: 6,
        question: "What does IoT stand for?",
        options: [
          "Internet of Things",
          "Industrial Operating Technology",
          "Internet of Technology",
          "Integrated Operations Technology"
        ],
        correctAnswer: 0,
        explanation: "IoT connects physical devices with sensors and networks."
      },
      // Additional mixed questions from all modules
      {
        id: 13,
        module: 2,
        question: "What measures measurement consistency?",
        options: [
          "Accuracy",
          "Precision",
          "Resolution",
          "Traceability"
        ],
        correctAnswer: 1,
        explanation: "Precision measures consistency of repeated measurements."
      },
      {
        id: 14,
        module: 3,
        question: "Which additive manufacturing uses electron beams?",
        options: [
          "Electron Beam Melting",
          "Fused Deposition Modeling",
          "Binder Jetting",
          "Selective Laser Melting"
        ],
        correctAnswer: 0,
        explanation: "EBM uses electron beams in vacuum to melt metal powder."
      },
      {
        id: 15,
        module: 4,
        question: "What does SCARA stand for?",
        options: [
          "Selective Compliance Assembly Robot Arm",
          "Selective Control Automated Robotic Assembly",
          "Systematic Compliance Articulated Robot Assembly",
          "Standard Compliance Automated Robotic Arm"
        ],
        correctAnswer: 0,
        explanation: "SCARA robots are designed for fast, precise assembly."
      },
      {
        id: 16,
        module: 5,
        question: "What is a fishbone diagram used for?",
        options: [
          "Process mapping",
          "Quality measurement",
          "Cause-and-effect analysis",
          "Statistical control"
        ],
        correctAnswer: 2,
        explanation: "Fishbone diagrams organize potential causes of problems."
      },
      {
        id: 17,
        module: 6,
        question: "What are virtual system replicas called?",
        options: [
          "Virtual Reality",
          "Digital Twins",
          "Augmented Reality",
          "Simulation Models"
        ],
        correctAnswer: 1,
        explanation: "Digital twins are virtual models of physical systems."
      },
      {
        id: 18,
        module: 1,
        question: "What manufacturing focuses on waste elimination?",
        options: [
          "Lean Manufacturing",
          "Mass Production",
          "Custom Manufacturing",
          "Batch Production"
        ],
        correctAnswer: 0,
        explanation: "Lean Manufacturing focuses on eliminating all forms of waste."
      },
      {
        id: 19,
        module: 2,
        question: "What does CMM stand for?",
        options: [
          "Calibrated Measurement Module",
          "Coordinate Measuring Machine",
          "Contact Measurement Method",
          "Computerized Measurement Machine"
        ],
        correctAnswer: 1,
        explanation: "CMMs make precise dimensional measurements."
      },
      {
        id: 20,
        module: 3,
        question: "What does RTM stand for in composites?",
        options: [
          "Rotational Transfer Molding",
          "Rapid Tooling Method",
          "Resin Transfer Molding",
          "Reinforced Thermal Molding"
        ],
        correctAnswer: 2,
        explanation: "RTM injects resin into fiber preforms in closed molds."
      },
      {
        id: 21,
        module: 4,
        question: "What is ladder logic used for?",
        options: [
          "Robot Programming",
          "PLC Programming",
          "Vision System Programming",
          "CNC Programming"
        ],
        correctAnswer: 1,
        explanation: "Ladder logic is the graphical programming language for PLCs."
      },
      {
        id: 22,
        module: 5,
        question: "What does FMEA stand for?",
        options: [
          "Failure Management and Error Avoidance",
          "Failure Mode and Effects Analysis",
          "Fault Management and Error Assessment",
          "Functional Monitoring and Efficiency Analysis"
        ],
        correctAnswer: 1,
        explanation: "FMEA systematically identifies potential failures."
      },
      {
        id: 23,
        module: 6,
        question: "What is the waste hierarchy priority?",
        options: [
          "Recycle, Reuse, Reduce, Prevent",
          "Dispose, Recover, Recycle, Reuse",
          "Prevent, Reduce, Reuse, Recycle",
          "Reduce, Recycle, Reuse, Prevent"
        ],
        correctAnswer: 2,
        explanation: "Prevention is highest priority in waste hierarchy."
      },
      {
        id: 24,
        module: 1,
        question: "What does JIT stand for?",
        options: [
          "Just-In-Time",
          "Justified Inventory Transfer",
          "Job-Integrated Technology",
          "Joint Industrial Training"
        ],
        correctAnswer: 0,
        explanation: "JIT produces only what's needed when it's needed."
      },
      {
        id: 25,
        module: 2,
        question: "What is surface roughness measurement?",
        options: [
          "Surface Finish",
          "Surface Waviness",
          "Surface Texture",
          "Surface Roughness"
        ],
        correctAnswer: 3,
        explanation: "Surface roughness measures fine surface irregularities."
      },
      {
        id: 26,
        module: 3,
        question: "Which process uses binder to join powder?",
        options: [
          "Electron Beam Melting",
          "Selective Laser Melting",
          "Binder Jetting",
          "Direct Energy Deposition"
        ],
        correctAnswer: 2,
        explanation: "Binder jetting uses liquid binder to join powder particles."
      },
      {
        id: 27,
        module: 4,
        question: "Which robots work safely with humans?",
        options: [
          "Collaborative Robots",
          "Traditional Industrial Robots",
          "Fixed Automation Robots",
          "High-Speed Robots"
        ],
        correctAnswer: 0,
        explanation: "Collaborative robots have safety features for human interaction."
      },
      {
        id: 28,
        module: 5,
        question: "What does SPC stand for?",
        options: [
          "Standard Production Control",
          "Statistical Product Control",
          "Systematic Process Checking",
          "Statistical Process Control"
        ],
        correctAnswer: 3,
        explanation: "SPC uses statistics to monitor and control processes."
      },
      {
        id: 29,
        module: 6,
        question: "What does EPR stand for?",
        options: [
          "Extended Producer Responsibility",
          "Environmental Protection Regulation",
          "Energy Performance Rating",
          "Efficient Production Requirements"
        ],
        correctAnswer: 0,
        explanation: "EPR makes manufacturers responsible for product end-of-life."
      },
      {
        id: 30,
        module: 1,
        question: "What measures equipment productivity?",
        options: [
          "On-Time Delivery",
          "First Pass Yield",
          "Overall Equipment Effectiveness",
          "Throughput Time"
        ],
        correctAnswer: 2,
        explanation: "OEE measures equipment availability, performance, and quality."
      },
      {
        id: 31,
        module: 2,
        question: "Which is the highest accuracy standard?",
        options: [
          "Primary Standard",
          "Secondary Standard",
          "Working Standard",
          "Factory Standard"
        ],
        correctAnswer: 0,
        explanation: "Primary standards are highest accuracy references."
      },
      {
        id: 32,
        module: 3,
        question: "What is diffusion bonding?",
        options: [
          "Joining through atomic diffusion",
          "Mechanical fastening",
          "Melting and joining",
          "Joining with adhesive"
        ],
        correctAnswer: 0,
        explanation: "Diffusion bonding joins through atomic diffusion without melting."
      },
      {
        id: 33,
        module: 4,
        question: "What does CNC stand for?",
        options: [
          "Computerized Network Command",
          "Computer Numerical Control",
          "Computer Network Control",
          "Central Numerical Command"
        ],
        correctAnswer: 1,
        explanation: "CNC controls machine tools through computer programs."
      },
      {
        id: 34,
        module: 5,
        question: "What does Gage R&R measure?",
        options: [
          "Production rate",
          "Measurement system variation",
          "Material strength",
          "Machine speed"
        ],
        correctAnswer: 1,
        explanation: "Gage R&R studies measurement system variation."
      },
      {
        id: 35,
        module: 6,
        question: "What is circular economy?",
        options: [
          "Closing material loops through recycling",
          "Waste-to-energy conversion",
          "Single-use product design",
          "Linear production model"
        ],
        correctAnswer: 0,
        explanation: "Circular economy keeps materials in use through recycling."
      },
      {
        id: 36,
        module: 1,
        question: "What is mass customization?",
        options: [
          "Large-scale production of customized products",
          "Small batch production",
          "Standard mass production",
          "Making one custom product"
        ],
        correctAnswer: 0,
        explanation: "Mass customization combines mass production efficiency with customization."
      },
      {
        id: 37,
        module: 2,
        question: "What measures smallest detectable change?",
        options: [
          "Precision",
          "Resolution",
          "Accuracy",
          "Repeatability"
        ],
        correctAnswer: 1,
        explanation: "Resolution is smallest measurement increment detectable."
      },
      {
        id: 38,
        module: 3,
        question: "What are shape memory alloys?",
        options: [
          "Materials that remember original shape",
          "Materials that change color",
          "Materials that are always flexible",
          "Materials that generate electricity"
        ],
        correctAnswer: 0,
        explanation: "Shape memory alloys return to original shape when heated."
      },
      {
        id: 39,
        module: 4,
        question: "What are digital twins?",
        options: [
          "Augmented Reality systems",
          "Simulation software only",
          "Virtual replicas of physical systems",
          "Virtual Reality systems"
        ],
        correctAnswer: 2,
        explanation: "Digital twins are virtual models mirroring physical systems."
      },
      {
        id: 40,
        module: 5,
        question: "What is the 5 Whys technique for?",
        options: [
          "Finding root causes of problems",
          "Setting quality goals",
          "Measuring process speed",
          "Counting defects"
        ],
        correctAnswer: 0,
        explanation: "5 Whys repeatedly asks 'why' to find root causes."
      }
    ]
  }
};

export default manufacturingEngineeringDiploma;
