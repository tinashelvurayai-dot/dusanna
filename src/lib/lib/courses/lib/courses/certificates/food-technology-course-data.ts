// Food Technology (Diploma) Course Data
export const foodTechnologyDiplomaCourse = {
  // COURSE METADATA
  id: "food-technology-diploma",
  title: "Food Technology (Diploma)",
  description: "Advanced study of food science principles, processing technologies, quality assurance, and innovation in food product development. Builds upon Food Safety Certificate knowledge for career advancement.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisites: "Food Safety Certificate or equivalent knowledge",
  icon: "🔬",
  badge: "Diploma",
  level: "Advanced",
  
  // MODULE 1: FOOD SCIENCE FOUNDATIONS
  modules: [
    {
      id: 1,
      title: "Food Chemistry and Composition",
      content: `
# Food Chemistry and Composition

Understanding the chemical composition of foods is fundamental to food technology. This module explores the molecular components that determine food properties, quality, and behavior during processing.

## Major Food Components

**Carbohydrates:**
Carbohydrates are the primary energy source in most diets. They include:
- **Sugars:** Simple carbohydrates like glucose, fructose, and sucrose
- **Starches:** Complex carbohydrates found in grains and tubers
- **Dietary fiber:** Non-digestible carbohydrates important for digestive health

**Proteins:**
Proteins are essential for growth and repair. Key aspects include:
- **Amino acids:** Building blocks of proteins
- **Protein structure:** How folding affects function
- **Denaturation:** Changes in protein structure during cooking
- **Functional properties:** How proteins affect texture and stability

**Lipids (Fats and Oils):**
Lipids provide energy and carry fat-soluble vitamins:
- **Fatty acids:** Saturated, monounsaturated, polyunsaturated
- **Triglycerides:** Main form of fats in foods
- **Lipid oxidation:** Causes rancidity and flavor changes
- **Emulsions:** Mixtures of oil and water (like mayonnaise)

**Water:**
Water is the most abundant component in many foods:
- **Water activity:** Measures available water for microbial growth
- **Free vs. bound water:** Affects food stability
- **Moisture content:** Influences texture and shelf life

## Minor Components with Major Impact

**Vitamins and Minerals:**
- Essential micronutrients for health
- Sensitive to processing methods
- Fortification adds nutrients to foods

**Enzymes:**
- Biological catalysts that speed reactions
- Can cause desirable or undesirable changes
- Enzymatic browning in fruits and vegetables
- Used in cheese making and brewing

**Food Pigments:**
- Natural colors like chlorophyll (green), carotenoids (yellow/orange), anthocyanins (red/blue)
- Affected by pH, heat, and light
- Color indicates quality and freshness

**Flavor Compounds:**
- Thousands of compounds create food flavors
- Aroma and taste work together
- Developed during processing and cooking

## Interactions Between Components

**Maillard Reaction:**
Non-enzymatic browning that creates flavor and color during cooking. Requires:
- Reducing sugars
- Amino acids
- Heat

**Caramelization:**
Sugar breakdown at high temperatures creating complex flavors and colors.

**Gel Formation:**
Proteins and carbohydrates can form gels that give structure to foods like jellies and yogurts.

**Starch Gelatinization:**
When starch granules absorb water and swell, thickening mixtures.

Understanding these chemical foundations enables better control of food quality, safety, and innovation.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the building blocks of proteins?",
          options: [
            "Amino acids",
            "Nucleotides",
            "Simple sugars",
            "Fatty acids"
          ],
          correctAnswer: 0,
          explanation: "Amino acids are the basic building blocks that link together to form proteins."
        },
        {
          id: 2,
          question: "What causes enzymatic browning in fruits?",
          options: [
            "Enzyme activity",
            "Fat oxidation",
            "Sugar caramelization",
            "Heat exposure"
          ],
          correctAnswer: 0,
          explanation: "Enzymatic browning occurs when enzymes in fruits react with oxygen, causing discoloration."
        },
        {
          id: 3,
          question: "Which food component is most abundant in many fresh foods?",
          options: [
            "Fats",
            "Water",
            "Carbohydrates",
            "Protein"
          ],
          correctAnswer: 1,
          explanation: "Water is typically the most abundant component in fresh fruits, vegetables, and meats."
        },
        {
          id: 4,
          question: "What reaction creates complex flavors during cooking?",
          options: [
            "Oxidation",
            "Hydrolysis",
            "Maillard reaction",
            "Fermentation"
          ],
          correctAnswer: 2,
          explanation: "The Maillard reaction between sugars and amino acids creates flavor and color during cooking."
        },
        {
          id: 5,
          question: "What are the main forms of carbohydrates in foods?",
          options: [
            "Only fiber",
            "Only sugars",
            "Sugars, starches, and fiber",
            "Only starches"
          ],
          correctAnswer: 2,
          explanation: "Carbohydrates in foods include sugars (simple), starches (complex), and dietary fiber."
        },
        {
          id: 6,
          question: "What measurement indicates water available for microbial growth?",
          options: [
            "Water activity",
            "pH level",
            "Moisture content",
            "Humidity"
          ],
          correctAnswer: 0,
          explanation: "Water activity (aw) measures the amount of water available for microbial growth in food."
        },
        {
          id: 7,
          question: "What happens during starch gelatinization?",
          options: [
            "Starch granules swell in water",
            "Starch crystallizes",
            "Starch becomes insoluble",
            "Starch breaks down to sugar"
          ],
          correctAnswer: 0,
          explanation: "Starch gelatinization occurs when starch granules absorb water and swell, thickening the mixture."
        },
        {
          id: 8,
          question: "Which are natural food pigments?",
          options: [
            "Chlorophyll and carotenoids",
            "Only synthetic colors",
            "Enzymes only",
            "Minerals only"
          ],
          correctAnswer: 0,
          explanation: "Chlorophyll (green) and carotenoids (yellow/orange) are natural pigments in foods."
        },
        {
          id: 9,
          question: "What causes lipid rancidity?",
          options: [
            "Oxidation",
            "Enzyme action",
            "Fermentation",
            "Gelation"
          ],
          correctAnswer: 0,
          explanation: "Lipid oxidation causes rancidity, leading to off-flavors and odors in fats and oils."
        },
        {
          id: 10,
          question: "What are the main components of an emulsion?",
          options: [
            "Protein and starch",
            "Oil and water",
            "Fat and protein",
            "Sugar and water"
          ],
          correctAnswer: 1,
          explanation: "Emulsions are mixtures of oil and water that don't normally mix, like mayonnaise."
        },
        {
          id: 11,
          question: "What is denaturation in proteins?",
          options: [
            "Adding amino acids",
            "Changing protein structure",
            "Breaking peptide bonds",
            "Removing water"
          ],
          correctAnswer: 1,
          explanation: "Denaturation changes protein structure without breaking peptide bonds, often through heat or acid."
        },
        {
          id: 12,
          question: "What are reducing sugars?",
          options: [
            "Sugars that don't crystallize",
            "Sugars that participate in Maillard reaction",
            "Artificial sweeteners",
            "Sugar alcohols"
          ],
          correctAnswer: 1,
          explanation: "Reducing sugars have free aldehyde or ketone groups and participate in Maillard browning."
        },
        {
          id: 13,
          question: "What are triglycerides?",
          options: [
            "Simple sugars",
            "Protein structures",
            "Water molecules",
            "Main form of fats in foods"
          ],
          correctAnswer: 3,
          explanation: "Triglycerides are the main form of fats and oils in foods, composed of glycerol and fatty acids."
        },
        {
          id: 14,
          question: "What affects food pigment stability?",
          options: [
            "Only packaging",
            "Only storage time",
            "Only temperature",
            "pH, heat, and light"
          ],
          correctAnswer: 3,
          explanation: "Food pigments are affected by pH, heat, light, and other processing conditions."
        },
        {
          id: 15,
          question: "What is dietary fiber?",
          options: [
            "Simple sugars",
            "Protein strands",
            "Soluble starch",
            "Non-digestible carbohydrates"
          ],
          correctAnswer: 3,
          explanation: "Dietary fiber consists of non-digestible carbohydrates important for digestive health."
        },
        {
          id: 16,
          question: "What creates gel structures in foods?",
          options: [
            "Only water",
            "Proteins and carbohydrates",
            "Only proteins",
            "Only fats"
          ],
          correctAnswer: 1,
          explanation: "Both proteins (like gelatin) and carbohydrates (like pectin) can form gel structures."
        },
        {
          id: 17,
          question: "What are fat-soluble vitamins?",
          options: [
            "All vitamins",
            "Vitamins A, D, E, K",
            "No vitamins are fat-soluble",
            "Vitamins C and B"
          ],
          correctAnswer: 1,
          explanation: "Vitamins A, D, E, and K are fat-soluble and carried by lipids in foods."
        },
        {
          id: 18,
          question: "What happens during caramelization?",
          options: [
            "Starch swelling",
            "Protein breakdown",
            "Sugar breakdown at high heat",
            "Fat melting"
          ],
          correctAnswer: 2,
          explanation: "Caramelization is the thermal decomposition of sugar creating characteristic flavors and colors."
        },
        {
          id: 19,
          question: "What are functional properties of proteins?",
          options: [
            "Flavor only",
            "Nutritional value only",
            "Texture and stability effects",
            "Color only"
          ],
          correctAnswer: 2,
          explanation: "Functional properties include how proteins affect texture, stability, and other qualities."
        },
        {
          id: 20,
          question: "Why understand food chemistry?",
          options: [
            "Only for labeling",
            "Only for safety",
            "To control quality and innovation",
            "Only for scientists"
          ],
          correctAnswer: 2,
          explanation: "Understanding food chemistry enables better control of quality, safety, and product innovation."
        }
      ]
    },

    // MODULE 2: FOOD PROCESSING TECHNOLOGIES
    {
      id: 2,
      title: "Food Processing and Preservation Methods",
      content: `
# Food Processing and Preservation Methods

Food processing transforms raw ingredients into safe, stable, and convenient food products. This module explores various technologies that extend shelf life while maintaining quality.

## Thermal Processing

**Pasteurization:**
- Mild heat treatment to destroy pathogens
- Extends shelf life while preserving quality
- Used for milk, juices, and liquid eggs
- **HTST:** High Temperature Short Time (72°C for 15 seconds)
- **UHT:** Ultra High Temperature (135-150°C for 1-2 seconds)

**Sterilization:**
- Complete destruction of all microorganisms
- Canned foods stored at room temperature
- Longer shelf life but may affect quality
- Retort processing for packaged foods

**Blanching:**
- Brief heat treatment before freezing
- Inactivates enzymes that cause quality loss
- Preserves color, flavor, and nutrients
- Used for vegetables and some fruits

## Non-Thermal Processing

**High Pressure Processing (HPP):**
- Uses extremely high pressure
- Destroys pathogens without heat
- Maintains fresh-like qualities
- Used for juices, guacamole, ready meals

**Pulsed Electric Fields (PEF):**
- Short bursts of high voltage
- Disrupts microbial cell membranes
- Minimal effect on food quality
- Used for liquid foods

**Irradiation:**
- Ionizing radiation destroys microorganisms
- Extends shelf life of spices and produce
- Does not make food radioactive
- Requires clear labeling

## Drying and Dehydration

**Sun Drying:**
- Traditional method using solar energy
- Used for fruits, fish, and herbs
- Dependent on weather conditions
- May have contamination risks

**Spray Drying:**
- Liquid sprayed into hot air chamber
- Forms fine powder particles
- Used for milk, coffee, and eggs
- Preserves heat-sensitive components

**Freeze Drying:**
- Frozen water sublimates under vacuum
- Best quality preservation method
- Lightweight with long shelf life
- Used for instant coffee and camping foods

**Drum Drying:**
- Liquid spread on heated drums
- Continuous production of flakes
- Used for breakfast cereals and mashed potatoes

## Freezing Technologies

**Quick Freezing:**
- Rapid freezing forms small ice crystals
- Minimizes cell damage
- Better quality than slow freezing
- **IQF:** Individual Quick Freezing for pieces

**Cryogenic Freezing:**
- Uses liquid nitrogen or carbon dioxide
- Extremely rapid freezing
- Excellent quality preservation
- Used for high-value products

**Plate Freezing:**
- Food pressed between cold plates
- Efficient for regular-shaped packages
- Used for fish blocks and packaged foods

## Fermentation and Bioprocessing

**Microbial Fermentation:**
- Controlled growth of beneficial microorganisms
- Produces acids, alcohol, or gases
- **Lactic acid fermentation:** Yogurt, sauerkraut, pickles
- **Alcoholic fermentation:** Beer, wine, bread
- **Acetic acid fermentation:** Vinegar

**Enzyme Technology:**
- Uses specific enzymes for controlled changes
- Cheese making (rennet)
- Meat tenderization
- Starch conversion to sugars

## Emerging Technologies

**Ohmic Heating:**
- Electric current passes through food
- Rapid, uniform heating
- Good for viscous or particulate foods

**Microwave Processing:**
- Electromagnetic energy heats food internally
- Rapid heating for pasteurization or drying
- Used for pre-cooked meals

**Cold Plasma:**
- Ionized gas at low temperature
- Surface decontamination
- Minimal effect on food quality

Each technology offers different benefits and limitations. Selection depends on food type, desired quality, shelf life requirements, and economic factors.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is pasteurization?",
          options: [
            "Drying method",
            "Freezing process",
            "Complete sterilization",
            "Mild heat treatment for pathogens"
          ],
          correctAnswer: 3,
          explanation: "Pasteurization uses mild heat to destroy pathogens while preserving food quality."
        },
        {
          id: 2,
          question: "What does HPP stand for?",
          options: [
            "Heat Pasteurization Process",
            "High Protein Preservation",
            "High Pressure Processing",
            "Hydrostatic Pressure Packaging"
          ],
          correctAnswer: 2,
          explanation: "HPP stands for High Pressure Processing, a non-thermal preservation method."
        },
        {
          id: 3,
          question: "What is freeze drying?",
          options: [
            "Spray freezing",
            "Freezing then drying",
            "Drum freezing",
            "Water sublimation under vacuum"
          ],
          correctAnswer: 3,
          explanation: "Freeze drying involves freezing food then removing water by sublimation under vacuum."
        },
        {
          id: 4,
          question: "What does IQF mean?",
          options: [
            "Individual Quick Freezing",
            "International Quality Food",
            "Integrated Quality Freezing",
            "Instant Quick Freezing"
          ],
          correctAnswer: 0,
          explanation: "IQF means Individual Quick Freezing, where pieces freeze separately."
        },
        {
          id: 5,
          question: "What is lactic acid fermentation used for?",
          options: [
            "Bread rising",
            "Beer production",
            "Vinegar making",
            "Yogurt and sauerkraut"
          ],
          correctAnswer: 3,
          explanation: "Lactic acid fermentation produces yogurt, sauerkraut, pickles, and other acidified foods."
        },
        {
          id: 6,
          question: "What does UHT processing do?",
          options: [
            "Freezes quickly",
            "Uses ultra high temperature briefly",
            "Applies high pressure",
            "Uses irradiation"
          ],
          correctAnswer: 1,
          explanation: "UHT (Ultra High Temperature) processing uses brief high heat for shelf-stable liquids."
        },
        {
          id: 7,
          question: "What is spray drying used for?",
          options: [
            "Milk powder production",
            "Fruit canning",
            "Vegetable freezing",
            "Meat preservation"
          ],
          correctAnswer: 0,
          explanation: "Spray drying converts liquids like milk into powders by spraying into hot air."
        },
        {
          id: 8,
          question: "What does blanching do?",
          options: [
            "Dries foods",
            "Sterilizes completely",
            "Inactivates enzymes before freezing",
            "Ferments foods"
          ],
          correctAnswer: 2,
          explanation: "Blanching uses brief heat to inactivate enzymes before freezing or drying."
        },
        {
          id: 9,
          question: "What is cryogenic freezing?",
          options: [
            "Sun freezing",
            "Slow freezing in air",
            "Plate freezing",
            "Freezing with liquid nitrogen"
          ],
          correctAnswer: 3,
          explanation: "Cryogenic freezing uses extremely cold liquids like nitrogen for rapid freezing."
        },
        {
          id: 10,
          question: "What does irradiation do?",
          options: [
            "Adds preservatives",
            "Makes food radioactive",
            "Destroys microorganisms with radiation",
            "Heats food unevenly"
          ],
          correctAnswer: 2,
          explanation: "Irradiation uses ionizing radiation to destroy microorganisms without making food radioactive."
        },
        {
          id: 11,
          question: "What is ohmic heating?",
          options: [
            "Sun drying",
            "Pressure cooking",
            "Microwave heating",
            "Heating by electric current"
          ],
          correctAnswer: 3,
          explanation: "Ohmic heating passes electric current through food for rapid, uniform heating."
        },
        {
          id: 12,
          question: "What does retort processing do?",
          options: [
            "Spray dries foods",
            "Sterilizes packaged foods",
            "Ferments rapidly",
            "Quick freezes"
          ],
          correctAnswer: 1,
          explanation: "Retort processing sterilizes packaged foods like cans using heat and pressure."
        },
        {
          id: 13,
          question: "What is drum drying used for?",
          options: [
            "Frozen meat",
            "Breakfast cereal flakes",
            "Liquid milk",
            "Fresh vegetables"
          ],
          correctAnswer: 1,
          explanation: "Drum drying produces flakes from liquids, used for cereals and instant potatoes."
        },
        {
          id: 14,
          question: "What does PEF stand for?",
          options: [
            "Pulsed Electric Fields",
            "Pasteurization Energy Field",
            "Pressure Enhanced Freezing",
            "Protein Enzyme Fermentation"
          ],
          correctAnswer: 0,
          explanation: "PEF stands for Pulsed Electric Fields, a non-thermal processing method."
        },
        {
          id: 15,
          question: "What is sun drying?",
          options: [
            "Industrial drying method",
            "Spray drying outdoors",
            "Freeze drying alternative",
            "Traditional solar drying"
          ],
          correctAnswer: 3,
          explanation: "Sun drying is a traditional method using solar energy to remove water from foods."
        },
        {
          id: 16,
          question: "What does HTST mean?",
          options: [
            "Heat Treatment Sterilization",
            "High Temperature Short Time",
            "Hydro Thermal Sanitation",
            "Hygienic Temperature Standard"
          ],
          correctAnswer: 1,
          explanation: "HTST means High Temperature Short Time pasteurization."
        },
        {
          id: 17,
          question: "What is alcoholic fermentation used for?",
          options: [
            "Vinegar production",
            "Yogurt making",
            "Beer and wine production",
            "Cheese aging"
          ],
          correctAnswer: 2,
          explanation: "Alcoholic fermentation by yeast produces beer, wine, and causes bread to rise."
        },
        {
          id: 18,
          question: "What does quick freezing achieve?",
          options: [
            "Partial thawing",
            "Large ice crystals",
            "Small ice crystals for quality",
            "Dehydration"
          ],
          correctAnswer: 2,
          explanation: "Quick freezing forms small ice crystals, minimizing cell damage and quality loss."
        },
        {
          id: 19,
          question: "What is cold plasma used for?",
          options: [
            "Heating foods",
            "Deep freezing",
            "Surface decontamination",
            "Flavor enhancement"
          ],
          correctAnswer: 2,
          explanation: "Cold plasma is an emerging technology for surface decontamination of foods."
        },
        {
          id: 20,
          question: "Why use different processing methods?",
          options: [
            "Different benefits for different foods",
            "Only for cost reduction",
            "Only for export foods",
            "Only government requires"
          ],
          correctAnswer: 0,
          explanation: "Different methods offer various benefits depending on food type, quality goals, and requirements."
        }
      ]
    },

    // MODULE 3: FOOD QUALITY AND SENSORY ANALYSIS
    {
      id: 3,
      title: "Quality Control and Sensory Evaluation",
      content: `
# Quality Control and Sensory Evaluation

Maintaining consistent quality is essential in food technology. This module covers quality parameters, measurement methods, and sensory evaluation techniques.

## Quality Parameters

**Physical Quality Attributes:**
- **Color:** Visual appearance using colorimeters or comparison charts
- **Texture:** Firmness, hardness, chewiness using texture analyzers
- **Viscosity:** Thickness of liquids measured by viscometers
- **Particle size:** Distribution in powders and particulate foods
- **Density and specific gravity:** Mass per unit volume

**Chemical Quality Attributes:**
- **pH and acidity:** Critical for safety and quality
- **Water activity:** Predicts microbial growth potential
- **Nutritional composition:** Protein, fat, carbohydrate content
- **Shelf life indicators:** Peroxide value for oils, rancidity tests
- **Contaminant levels:** Pesticides, heavy metals, toxins

**Microbiological Quality:**
- **Total plate count:** General microbial quality
- **Pathogen testing:** Salmonella, Listeria, E. coli
- **Yeast and mold counts:** Spoilage indicators
- **Indicator organisms:** Coliforms signal possible contamination

## Sensory Evaluation Methods

**Discrimination Testing:**
Determines if products differ perceptibly:
- **Triangle test:** Identifies odd sample among three
- **Duo-trio test:** Matches sample to reference
- **Paired comparison:** Compares two samples for specific attribute

**Descriptive Analysis:**
Trained panels quantify specific attributes:
- **Flavor Profile Analysis:** Describes and quantifies flavors
- **Texture Profile Analysis:** Measures multiple texture attributes
- **Quantitative Descriptive Analysis:** Comprehensive attribute evaluation

**Affective Testing:**
Measures consumer preferences:
- **Hedonic scale:** Like/dislike ratings (9-point scale common)
- **Preference testing:** Direct comparison of products
- **Acceptance testing:** Overall acceptability rating

## Instrumental Analysis

**Color Measurement:**
- **Colorimeters:** Measure in L*a*b* color space
- **Spectrophotometers:** Detailed spectral analysis
- **Visual comparison:** Standard color charts

**Texture Analysis:**
- **Texture analyzers:** Measure force for compression, tension, shear
- **Penetrometers:** Firmness of fruits and gels
- **Viscometers:** Flow properties of liquids

**Flavor and Aroma Analysis:**
- **Gas Chromatography-Mass Spectrometry (GC-MS):** Identifies volatile compounds
- **Electronic noses:** Sensor arrays detect aroma patterns
- **High Performance Liquid Chromatography (HPLC):** Non-volatile compounds

## Statistical Quality Control

**Control Charts:**
Monitor process stability over time:
- **X-bar and R charts:** Monitor average and range
- **P charts:** Proportion of defective items
- **C charts:** Count of defects per unit

**Acceptance Sampling:**
- Determine if batch meets specifications
- Statistical sampling plans
- Acceptable Quality Level (AQL) determination

**Process Capability Analysis:**
- **Cp and Cpk indices:** Process ability to meet specifications
- **Six Sigma methodology:** Reduce variation

## Shelf Life Testing

**Real-time Testing:**
- Store under normal conditions
- Periodic testing until failure
- Accurate but time-consuming

**Accelerated Testing:**
- Store under stress conditions (temperature, humidity)
- Predict normal shelf life
- Models account for acceleration factors

**Challenge Testing:**
- Inoculate with pathogens or spoilage organisms
- Monitor growth under different conditions
- Determine safety margins

## Quality Management Systems

**ISO Standards:**
- **ISO 9001:** Quality management systems
- **ISO 22000:** Food safety management
- **ISO 17025:** Testing laboratory competence

**Good Manufacturing Practices (GMP):**
- Facility and equipment standards
- Personnel hygiene requirements
- Documentation and record keeping

**Hazard Analysis and Critical Control Points (HACCP):**
- Systematic safety management
- Identify and control hazards
- Monitoring and verification procedures

Quality control ensures products meet specifications consistently, while sensory evaluation connects technical quality to consumer perception.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does water activity predict?",
          options: [
            "Microbial growth potential",
            "Flavor intensity",
            "Nutritional value",
            "Color stability"
          ],
          correctAnswer: 0,
          explanation: "Water activity predicts potential for microbial growth in food products."
        },
        {
          id: 2,
          question: "What is a triangle test?",
          options: [
            "Three samples, find the odd one",
            "Color measurement",
            "Texture analysis",
            "pH testing"
          ],
          correctAnswer: 0,
          explanation: "Triangle test presents three samples where one is different; panelists identify the odd sample."
        },
        {
          id: 3,
          question: "What does GC-MS analyze?",
          options: [
            "Color pigments",
            "Water content",
            "Volatile flavor compounds",
            "Texture properties"
          ],
          correctAnswer: 2,
          explanation: "Gas Chromatography-Mass Spectrometry analyzes volatile compounds that contribute to flavor and aroma."
        },
        {
          id: 4,
          question: "What is a hedonic scale used for?",
          options: [
            "pH measurement",
            "Measuring color",
            "Consumer liking ratings",
            "Texture analysis"
          ],
          correctAnswer: 2,
          explanation: "Hedonic scales measure how much consumers like or dislike products, typically on a 9-point scale."
        },
        {
          id: 5,
          question: "What do control charts monitor?",
          options: [
            "Process stability over time",
            "Only raw material cost",
            "Only packaging quality",
            "Only product weight"
          ],
          correctAnswer: 0,
          explanation: "Control charts monitor process stability and variation over time using statistical methods."
        },
        {
          id: 6,
          question: "What is accelerated shelf life testing?",
          options: [
            "Consumer testing",
            "Only microbial testing",
            "Stress conditions to predict shelf life",
            "Real-time storage"
          ],
          correctAnswer: 2,
          explanation: "Accelerated testing uses stress conditions like elevated temperature to predict normal shelf life faster."
        },
        {
          id: 7,
          question: "What does ISO 22000 cover?",
          options: [
            "Color measurement",
            "Packaging standards",
            "Food safety management",
            "Laboratory equipment"
          ],
          correctAnswer: 2,
          explanation: "ISO 22000 specifies requirements for food safety management systems."
        },
        {
          id: 8,
          question: "What does texture profile analysis measure?",
          options: [
            "Only flavor",
            "Only hardness",
            "Only color",
            "Multiple texture attributes"
          ],
          correctAnswer: 3,
          explanation: "Texture Profile Analysis measures multiple attributes like hardness, cohesiveness, springiness, and chewiness."
        },
        {
          id: 9,
          question: "What is challenge testing?",
          options: [
            "Consumer preference test",
            "Inoculating with pathogens to test safety",
            "Texture measurement",
            "Color comparison"
          ],
          correctAnswer: 1,
          explanation: "Challenge testing involves inoculating products with pathogens to determine safety under various conditions."
        },
        {
          id: 10,
          question: "What does L*a*b* measure?",
          options: [
            "Flavor compounds",
            "Color in three dimensions",
            "Microbial counts",
            "Texture parameters"
          ],
          correctAnswer: 1,
          explanation: "L*a*b* is a three-dimensional color space measuring lightness (L), red-green (a), and yellow-blue (b)."
        },
        {
          id: 11,
          question: "What is GMP?",
          options: [
            "General Measurement Procedure",
            "Good Manufacturing Practice",
            "Good Microbial Practice",
            "Global Marketing Plan"
          ],
          correctAnswer: 1,
          explanation: "GMP stands for Good Manufacturing Practice, covering facility, equipment, and personnel standards."
        },
        {
          id: 12,
          question: "What does descriptive analysis involve?",
          options: [
            "Consumer liking tests",
            "Simple difference tests",
            "Trained panels quantifying attributes",
            "Only instrumental analysis"
          ],
          correctAnswer: 2,
          explanation: "Descriptive analysis uses trained panels to identify and quantify specific sensory attributes."
        },
        {
          id: 13,
          question: "What is process capability analysis?",
          options: [
            "Testing raw materials",
            "Measuring product weight",
            "Ability to meet specifications",
            "Counting defects"
          ],
          correctAnswer: 2,
          explanation: "Process capability analysis evaluates if a process can consistently meet product specifications."
        },
        {
          id: 14,
          question: "What does total plate count measure?",
          options: [
            "Only pathogens",
            "General microbial quality",
            "Only yeast and mold",
            "Only coliforms"
          ],
          correctAnswer: 1,
          explanation: "Total plate count provides a general indicator of overall microbial quality."
        },
        {
          id: 15,
          question: "What is paired comparison testing?",
          options: [
            "Comparing two samples for specific attribute",
            "Triangle test variation",
            "Consumer acceptance test",
            "Texture measurement"
          ],
          correctAnswer: 0,
          explanation: "Paired comparison presents two samples to compare for a specific attribute like sweetness or hardness."
        },
        {
          id: 16,
          question: "What does AQL mean?",
          options: [
            "Assessment Quality Line",
            "Acceptable Quality Level",
            "Analytical Quality Limit",
            "Average Quality Level"
          ],
          correctAnswer: 1,
          explanation: "AQL stands for Acceptable Quality Level in statistical sampling plans."
        },
        {
          id: 17,
          question: "What is an electronic nose?",
          options: [
            "Human sensory panel",
            "Sensor array detecting aroma patterns",
            "GC-MS instrument",
            "Flavor enhancer"
          ],
          correctAnswer: 1,
          explanation: "Electronic noses use sensor arrays to detect and recognize aroma patterns instrumentally."
        },
        {
          id: 18,
          question: "What does HPLC analyze?",
          options: [
            "Non-volatile compounds like sugars",
            "Only colors",
            "Only volatile compounds",
            "Only textures"
          ],
          correctAnswer: 0,
          explanation: "High Performance Liquid Chromatography analyzes non-volatile compounds like sugars, acids, and vitamins."
        },
        {
          id: 19,
          question: "What are Cp and Cpk indices?",
          options: [
            "Shelf life predictors",
            "pH measurements",
            "Color parameters",
            "Process capability indices"
          ],
          correctAnswer: 3,
          explanation: "Cp and Cpk are statistical indices that measure process capability relative to specifications."
        },
        {
          id: 20,
          question: "Why combine sensory and instrumental analysis?",
          options: [
            "Only for cost reduction",
            "Connect technical measures to consumer perception",
            "Only government requires",
            "Only for export products"
          ],
          correctAnswer: 1,
          explanation: "Combining methods connects technical quality measurements to actual consumer sensory experience."
        }
      ]
    },

    // MODULE 4: FOOD PACKAGING TECHNOLOGY
    {
      id: 4,
      title: "Food Packaging Materials and Systems",
      content: `
# Food Packaging Materials and Systems

Packaging protects food from environmental factors, extends shelf life, and provides consumer information. This module explores packaging materials, technologies, and sustainability considerations.

## Primary Packaging Functions

**Protection Functions:**
- **Physical protection:** From crushing, vibration, impact
- **Barrier protection:** Against oxygen, moisture, light
- **Containment:** Holds liquids, powders, and solids
- **Security:** Tamper evidence and pilferage prevention

**Communication Functions:**
- **Information:** Ingredients, nutrition, instructions
- **Marketing:** Branding, graphics, shelf appeal
- **Traceability:** Batch codes, expiration dates
- **Safety:** Allergen warnings, storage instructions

**Convenience Functions:**
- **Portion control:** Individual servings
- **Easy opening:** Tear strips, pull tabs
- **Resealability:** Zippers, clips
- **Microwaveability:** Safe for heating

## Packaging Materials

**Glass:**
- **Advantages:** Impermeable, inert, transparent, recyclable
- **Disadvantages:** Heavy, fragile, energy intensive
- **Applications:** Beverages, sauces, baby food

**Metals:**
- **Steel cans:** Three-piece welded, two-piece drawn
- **Aluminum:** Cans, foil, trays, flexible pouches
- **Advantages:** Excellent barriers, strong, recyclable
- **Disadvantages:** Can react with acidic foods, opaque

**Plastics:**
- **PET:** Clear bottles, trays (polyethylene terephthalate)
- **HDPE:** Opaque bottles, jugs (high-density polyethylene)
- **LDPE:** Flexible films, bags (low-density polyethylene)
- **PP:** Microwaveable containers, closures (polypropylene)
- **PS:** Foam cups, trays (polystyrene)
- **PVC:** Cling films, bottles (polyvinyl chloride)

**Paper and Paperboard:**
- **Kraft paper:** Strong brown paper for bags
- **Parchment paper:** Grease resistant for baking
- **Paperboard:** Cartons, boxes, liquid packaging
- **Corrugated board:** Shipping containers

**Flexible Packaging:**
- **Laminates:** Multiple material layers for specific properties
- **Stand-up pouches:** Combine convenience and shelf appeal
- **Vacuum bags:** Remove air for extended shelf life

## Advanced Packaging Technologies

**Modified Atmosphere Packaging (MAP):**
- Replaces air with gas mixture
- **High CO2:** Inhibits bacterial growth
- **Low O2:** Reduces oxidation and microbial growth
- **Nitrogen:** Inert filler gas
- Used for fresh meats, salads, snacks

**Vacuum Packaging:**
- Removes air before sealing
- Reduces oxygen for slower spoilage
- Prevents freezer burn
- Used for meats, cheese, coffee

**Active Packaging:**
- Interacts with food or environment
- **Oxygen scavengers:** Iron-based packets
- **Ethylene absorbers:** For fruits and vegetables
- **Moisture controllers:** Silica gel packets
- **Antimicrobial films:** Release preservatives

**Intelligent Packaging:**
- Monitors food condition
- **Time-temperature indicators:** Show cumulative heat exposure
- **Freshness indicators:** Detect spoilage compounds
- **RFID tags:** Track through supply chain

## Packaging Processes

**Form-Fill-Seal:**
- Forms package from roll stock
- Fills with product
- Seals in continuous operation
- Used for snacks, liquids, powders

**Aseptic Packaging:**
- Sterilizes product and package separately
- Fills in sterile environment
- Room temperature shelf-stable liquids
- Tetra Pak is common system

**Retort Packaging:**
- Flexible pouches instead of cans
- Thermal processing after sealing
- Lighter weight than cans
- Better quality than traditional canning

## Sustainability in Packaging

**Reduce:**
- Lightweighting: Less material per package
- Source reduction: Design efficiency
- Concentrated products: Smaller packages

**Reuse:**
- Refillable containers
- Return systems
- Durable packaging

**Recycle:**
- Material recovery facilities
- Closed-loop recycling
- Design for recyclability

**Renewable Materials:**
- Bioplastics from corn, sugarcane
- Paper from sustainable forestry
- Plant-based coatings

**Compostable Packaging:**
- Breaks down in industrial composting
- Made from starches, cellulose
- Must meet certification standards

## Packaging Regulations

**Food Contact Materials:**
- Must not transfer harmful substances
- Migration testing required
- Approved substances lists

**Labeling Requirements:**
- Ingredient declaration
- Nutrition facts
- Allergen statements
- Country of origin

**Environmental Regulations:**
- Extended Producer Responsibility
- Recycling mandates
- Bans on certain materials

Packaging is an integral part of food technology that balances protection, convenience, communication, and environmental responsibility.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is MAP packaging?",
          options: [
            "Maximum Air Protection",
            "Modified Atmosphere Packaging",
            "Minimum Air Packaging",
            "Multi-layer Aseptic Packaging"
          ],
          correctAnswer: 1,
          explanation: "MAP stands for Modified Atmosphere Packaging, replacing air with specific gas mixtures."
        },
        {
          id: 2,
          question: "What are oxygen scavengers?",
          options: [
            "Measure oxygen levels",
            "Release oxygen slowly",
            "Add oxygen to packaging",
            "Remove oxygen from packaging"
          ],
          correctAnswer: 3,
          explanation: "Oxygen scavengers actively remove oxygen from packaged foods to extend shelf life."
        },
        {
          id: 3,
          question: "What is PET plastic used for?",
          options: [
            "Clear beverage bottles",
            "Microwave trays",
            "Foam cups",
            "Only grocery bags"
          ],
          correctAnswer: 0,
          explanation: "PET (polyethylene terephthalate) is commonly used for clear beverage bottles and food containers."
        },
        {
          id: 4,
          question: "What does aseptic packaging do?",
          options: [
            "Only sterilizes product",
            "Sterilizes product and package separately",
            "Only modifies atmosphere",
            "Only vacuum packs"
          ],
          correctAnswer: 1,
          explanation: "Aseptic packaging sterilizes product and package separately then fills in sterile environment."
        },
        {
          id: 5,
          question: "What is form-fill-seal?",
          options: [
            "Continuous packaging from roll stock",
            "Only filling operation",
            "Manual packaging",
            "Only sealing operation"
          ],
          correctAnswer: 0,
          explanation: "Form-fill-seal forms packages from roll stock, fills with product, and seals continuously."
        },
        {
          id: 6,
          question: "What do time-temperature indicators show?",
          options: [
            "Only production time",
            "Only expiration date",
            "Only current temperature",
            "Cumulative heat exposure"
          ],
          correctAnswer: 3,
          explanation: "Time-temperature indicators show cumulative temperature exposure over product's life."
        },
        {
          id: 7,
          question: "What is vacuum packaging?",
          options: [
            "Only for powders",
            "Adds gas mixture",
            "Removes air before sealing",
            "Only for liquids"
          ],
          correctAnswer: 2,
          explanation: "Vacuum packaging removes air from package before sealing to extend shelf life."
        },
        {
          id: 8,
          question: "What are bioplastics made from?",
          options: [
            "Only recycled plastic",
            "Only synthetic materials",
            "Only petroleum",
            "Renewable resources like corn"
          ],
          correctAnswer: 3,
          explanation: "Bioplastics are made from renewable resources like corn starch, sugarcane, or cellulose."
        },
        {
          id: 9,
          question: "What does HDPE stand for?",
          options: [
            "Hydro-Degradable Plastic Enzyme",
            "Heat-Durable Packaging Element",
            "High-Density Polyethylene",
            "Heavy-Duty Packaging Equipment"
          ],
          correctAnswer: 2,
          explanation: "HDPE stands for High-Density Polyethylene, used for milk jugs and detergent bottles."
        },
        {
          id: 10,
          question: "What is retort packaging?",
          options: [
            "Flexible pouches thermally processed",
            "Only glass containers",
            "Only for frozen foods",
            "Only for dry goods"
          ],
          correctAnswer: 0,
          explanation: "Retort packaging uses flexible pouches that are thermally processed like cans."
        },
        {
          id: 11,
          question: "What are ethylene absorbers for?",
          options: [
            "Fruit and vegetable packaging",
            "Meat packaging",
            "Baked goods",
            "Dairy products"
          ],
          correctAnswer: 0,
          explanation: "Ethylene absorbers remove ripening gas from packaged fruits and vegetables."
        },
        {
          id: 12,
          question: "What is Tetra Pak?",
          options: [
            "Vacuum packaging system",
            "Aseptic packaging system",
            "MAP system",
            "Retort system"
          ],
          correctAnswer: 1,
          explanation: "Tetra Pak is a common aseptic packaging system for liquid foods."
        },
        {
          id: 13,
          question: "What does lightweighting mean?",
          options: [
            "Using light colors only",
            "Using less material per package",
            "Reducing package size only",
            "Making packages heavier"
          ],
          correctAnswer: 1,
          explanation: "Lightweighting reduces the amount of material used in packaging while maintaining function."
        },
        {
          id: 14,
          question: "What are stand-up pouches?",
          options: [
            "Only for liquids",
            "Self-supporting flexible packages",
            "Only glass alternatives",
            "Only flat bags"
          ],
          correctAnswer: 1,
          explanation: "Stand-up pouches are flexible packages that can stand upright for shelf display."
        },
        {
          id: 15,
          question: "What do food contact regulations ensure?",
          options: [
            "Only package strength",
            "No harmful substance transfer",
            "Only attractive design",
            "Only low cost"
          ],
          correctAnswer: 1,
          explanation: "Food contact regulations ensure packaging materials don't transfer harmful substances to food."
        },
        {
          id: 16,
          question: "What is compostable packaging?",
          options: [
            "Never breaks down",
            "Breaks down in any environment",
            "Only made from plastic",
            "Breaks down in industrial composting"
          ],
          correctAnswer: 3,
          explanation: "Compostable packaging breaks down in industrial composting facilities under specific conditions."
        },
        {
          id: 17,
          question: "What does RFID in packaging do?",
          options: [
            "Tracks packages through supply chain",
            "Measures temperature",
            "Adds flavor",
            "Removes oxygen"
          ],
          correctAnswer: 0,
          explanation: "RFID (Radio Frequency Identification) tags track packages through supply chains for inventory and traceability."
        },
        {
          id: 18,
          question: "What is PP plastic used for?",
          options: [
            "Only film wrap",
            "Microwaveable containers",
            "Only foam products",
            "Only beverage bottles"
          ],
          correctAnswer: 1,
          explanation: "PP (polypropylene) is used for microwaveable containers, yogurt cups, and closures."
        },
        {
          id: 19,
          question: "What do freshness indicators detect?",
          options: [
            "Only temperature",
            "Only package integrity",
            "Spoilage compounds",
            "Only expiration date"
          ],
          correctAnswer: 2,
          explanation: "Freshness indicators detect compounds produced during spoilage, showing actual food condition."
        },
        {
          id: 20,
          question: "Why balance packaging functions?",
          options: [
            "Protection, convenience, communication, sustainability",
            "Only for lowest cost",
            "Only for longest shelf life",
            "Only for marketing"
          ],
          correctAnswer: 0,
          explanation: "Effective packaging balances protection, convenience, communication, and environmental considerations."
        }
      ]
    },

    // MODULE 5: FOOD PRODUCT DEVELOPMENT
    {
      id: 5,
      title: "New Product Development Process",
      content: `
# New Product Development Process

Systematic development of new food products involves multiple stages from concept to commercialization. This module covers the complete product development cycle.

## Stage 1: Ideation and Concept Development

**Idea Generation Sources:**
- **Market research:** Consumer trends and gaps
- **Competitive analysis:** What competitors offer
- **Technological innovation:** New ingredients or processes
- **Consumer insights:** Focus groups, surveys, observation
- **Internal suggestions:** Employee ideas

**Concept Screening:**
- **Feasibility analysis:** Technical and commercial viability
- **Concept testing:** Present ideas to target consumers
- **Selection criteria:** Fit with company strategy, resources, market potential
- **Go/No-go decisions:** Continue or abandon concepts

**Concept Refinement:**
- **Detailed description:** Features, benefits, positioning
- **Target market definition:** Demographics, psychographics
- **Preliminary specifications:** Quality, cost, shelf life targets
- **Prototype visualization:** Renderings, virtual models

## Stage 2: Product Design and Prototyping

**Formulation Development:**
- **Ingredient selection:** Functionality, cost, availability
- **Recipe development:** Experimental designs
- **Process development:** Scale-up considerations
- **Stability testing:** Shelf life predictions

**Prototype Creation:**
- **Bench-top prototypes:** Small-scale development
- **Pilot plant trials:** Intermediate scale
- **Sensory evaluation:** Internal testing panels
- **Iterative refinement:** Multiple prototype versions

**Specification Setting:**
- **Quality specifications:** Physical, chemical, microbiological
- **Raw material specifications:** Ingredient quality standards
- **Process specifications:** Manufacturing parameters
- **Finished product specifications:** Final quality criteria

## Stage 3: Testing and Validation

**Laboratory Testing:**
- **Analytical testing:** Composition, nutrition, contaminants
- **Microbiological testing:** Safety and shelf life
- **Physical testing:** Texture, color, viscosity
- **Package testing:** Integrity, barrier properties

**Sensory Testing:**
- **Discrimination testing:** Difference from competitors
- **Descriptive analysis:** Detailed attribute profiling
- **Consumer testing:** Target market acceptance
- **Preference testing:** Versus competition

**Stability Testing:**
- **Real-time studies:** Under intended storage conditions
- **Accelerated studies:** Predict long-term stability
- **Challenge testing:** Safety under abuse conditions
- **Package compatibility:** Interaction with packaging

## Stage 4: Scale-up and Commercialization

**Pilot Production:**
- **Process validation:** Confirm manufacturing feasibility
- **Equipment testing:** Compatibility with processes
- **Yield optimization:** Maximize efficiency
- **Cost analysis:** Production economics

**Manufacturing Scale-up:**
- **Full-scale trials:** Production line testing
- **Quality system implementation:** Monitoring and control
- **Staff training:** Manufacturing procedures
- **Supply chain establishment:** Ingredient sourcing

**Regulatory Compliance:**
- **Label development:** Meeting all requirements
- **Nutrition analysis:** Accurate labeling
- **Safety assessments:** HACCP plans
- **Approval processes:** Government regulations

## Stage 5: Launch and Post-Launch

**Market Launch Planning:**
- **Production ramp-up:** Gradual increase to full capacity
- **Distribution strategy:** Channel selection
- **Promotion plan:** Marketing communications
- **Sales training:** Product knowledge for sales force

**Post-Launch Monitoring:**
- **Sales tracking:** Performance vs. forecasts
- **Consumer feedback:** Complaints, compliments, suggestions
- **Quality surveillance:** Ongoing quality assurance
- **Competitive response:** Monitor competitor reactions

**Continuous Improvement:**
- **Product optimization:** Based on market feedback
- **Cost reduction:** Process improvements
- **Line extensions:** Variant development
- **Reformulation:** Ingredient or process changes

## Critical Success Factors

**Cross-functional Teams:**
- Marketing, R&D, production, quality, finance collaboration
- Clear roles and responsibilities
- Effective communication channels
- Shared goals and metrics

**Stage-Gate Process:**
- Structured decision points between stages
- Clear criteria for proceeding
- Resource allocation decisions
- Risk management at each gate

**Consumer-Centric Approach:**
- Continuous consumer input throughout process
- Understanding unmet needs
- Aligning with consumer values
- Delivering meaningful benefits

**Risk Management:**
- Technical risks: Feasibility challenges
- Market risks: Acceptance uncertainties
- Financial risks: Return on investment
- Regulatory risks: Compliance issues

Successful product development balances creativity with discipline, innovation with feasibility, and speed with thoroughness.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first stage of product development?",
          options: [
            "Launch",
            "Manufacturing",
            "Ideation and concept development",
            "Testing"
          ],
          correctAnswer: 2,
          explanation: "Ideation and concept development is the first stage where new product ideas are generated and screened."
        },
        {
          id: 2,
          question: "What is a go/no-go decision?",
          options: [
            "Ingredient sourcing",
            "Packaging selection",
            "Marketing plan approval",
            "Decision to continue or abandon project"
          ],
          correctAnswer: 3,
          explanation: "Go/no-go decisions determine whether to proceed to the next stage or abandon the project."
        },
        {
          id: 3,
          question: "What are bench-top prototypes?",
          options: [
            "Full-scale production",
            "Consumer test samples",
            "Marketing samples",
            "Small-scale development prototypes"
          ],
          correctAnswer: 3,
          explanation: "Bench-top prototypes are small-scale versions developed in the laboratory for initial testing."
        },
        {
          id: 4,
          question: "What is pilot production?",
          options: [
            "Intermediate scale production testing",
            "Full commercial production",
            "Only consumer testing",
            "Only laboratory testing"
          ],
          correctAnswer: 0,
          explanation: "Pilot production tests processes at intermediate scale before full commercial production."
        },
        {
          id: 5,
          question: "What is a stage-gate process?",
          options: [
            "Only testing phase",
            "Only launch phase",
            "Continuous development",
            "Structured decision points between stages"
          ],
          correctAnswer: 3,
          explanation: "Stage-gate process has structured decision points (gates) between development stages."
        },
        {
          id: 6,
          question: "What is concept testing?",
          options: [
            "Laboratory analysis",
            "Presenting ideas to consumers",
            "Testing final product",
            "Packaging testing"
          ],
          correctAnswer: 1,
          explanation: "Concept testing presents product ideas to target consumers to gauge interest and acceptance."
        },
        {
          id: 7,
          question: "What are specifications?",
          options: [
            "Only marketing plans",
            "Only ingredient lists",
            "Only cost targets",
            "Quality and process standards"
          ],
          correctAnswer: 3,
          explanation: "Specifications define quality standards, ingredient requirements, and process parameters."
        },
        {
          id: 8,
          question: "What is post-launch monitoring?",
          options: [
            "Ongoing performance and feedback collection",
            "Only cost tracking",
            "Only sales tracking",
            "Only production monitoring"
          ],
          correctAnswer: 0,
          explanation: "Post-launch monitoring tracks sales, collects consumer feedback, and monitors quality after launch."
        },
        {
          id: 9,
          question: "What is scale-up?",
          options: [
            "Only cost reduction",
            "Only ingredient scaling",
            "Only increasing batch size",
            "Moving from development to commercial production"
          ],
          correctAnswer: 3,
          explanation: "Scale-up involves moving from laboratory or pilot scale to full commercial production."
        },
        {
          id: 10,
          question: "What is consumer testing?",
          options: [
            "Target market acceptance evaluation",
            "Only cost analysis",
            "Only laboratory analysis",
            "Only competitor analysis"
          ],
          correctAnswer: 0,
          explanation: "Consumer testing evaluates how the target market accepts and responds to the product."
        },
        {
          id: 11,
          question: "What is formulation development?",
          options: [
            "Ingredient selection and recipe development",
            "Only cost calculation",
            "Only packaging design",
            "Only recipe writing"
          ],
          correctAnswer: 0,
          explanation: "Formulation development involves selecting ingredients and developing recipes with desired properties."
        },
        {
          id: 12,
          question: "What is stability testing?",
          options: [
            "Only package strength",
            "Only immediate quality check",
            "Only color stability",
            "Shelf life and quality over time"
          ],
          correctAnswer: 3,
          explanation: "Stability testing evaluates how product quality changes over time under storage conditions."
        },
        {
          id: 13,
          question: "What are cross-functional teams?",
          options: [
            "Multiple department collaboration",
            "Only R&D teams",
            "Only production teams",
            "Only marketing teams"
          ],
          correctAnswer: 0,
          explanation: "Cross-functional teams include members from different departments like R&D, marketing, and production."
        },
        {
          id: 14,
          question: "What is competitive analysis?",
          options: [
            "Only price comparison",
            "Only packaging comparison",
            "Only ingredient comparison",
            "Evaluating competitor products and strategies"
          ],
          correctAnswer: 3,
          explanation: "Competitive analysis evaluates competitor products, positioning, and market strategies."
        },
        {
          id: 15,
          question: "What is regulatory compliance?",
          options: [
            "Only following company rules",
            "Only safety standards",
            "Meeting government regulations and standards",
            "Only quality standards"
          ],
          correctAnswer: 2,
          explanation: "Regulatory compliance ensures products meet all government regulations and industry standards."
        },
        {
          id: 16,
          question: "What is iterative refinement?",
          options: [
            "Multiple prototype improvements",
            "Only final adjustment",
            "Only ingredient changes",
            "One-time development"
          ],
          correctAnswer: 0,
          explanation: "Iterative refinement involves making successive improvements through multiple prototype versions."
        },
        {
          id: 17,
          question: "What is market research?",
          options: [
            "Only sales data analysis",
            "Only product testing",
            "Studying consumer trends and needs",
            "Only competitor pricing"
          ],
          correctAnswer: 2,
          explanation: "Market research studies consumer trends, preferences, and unmet needs in the marketplace."
        },
        {
          id: 18,
          question: "What is process validation?",
          options: [
            "Only recipe testing",
            "Only cost validation",
            "Confirming manufacturing feasibility and consistency",
            "Only equipment check"
          ],
          correctAnswer: 2,
          explanation: "Process validation confirms that manufacturing processes can consistently produce quality products."
        },
        {
          id: 19,
          question: "What is continuous improvement?",
          options: [
            "Only ingredient changes",
            "Only packaging updates",
            "Only cost reduction",
            "Ongoing product and process optimization"
          ],
          correctAnswer: 3,
          explanation: "Continuous improvement involves ongoing optimization based on feedback and performance data."
        },
        {
          id: 20,
          question: "What balances in product development?",
          options: [
            "Only speed and cost",
            "Creativity with discipline, innovation with feasibility",
            "Only safety and taste",
            "Only quality and quantity"
          ],
          correctAnswer: 1,
          explanation: "Successful development balances creativity with discipline and innovation with practical feasibility."
        }
      ]
    },

    // MODULE 6: SUSTAINABILITY AND FUTURE TRENDS
    {
      id: 6,
      title: "Sustainable Food Systems and Emerging Trends",
      content: `
# Sustainable Food Systems and Emerging Trends

Food technology must address environmental concerns while meeting growing global demand. This module explores sustainable practices, circular economy principles, and emerging trends shaping the future of food.

## Sustainable Food Production

**Resource Efficiency:**
- **Water conservation:** Reduced usage in processing, recycling
- **Energy efficiency:** Renewable energy, heat recovery systems
- **Waste reduction:** By-product utilization, process optimization
- **Carbon footprint reduction:** Low-emission technologies, transportation efficiency

**Sustainable Sourcing:**
- **Certified ingredients:** Organic, Fair Trade, Rainforest Alliance
- **Local sourcing:** Reduced transportation, community support
- **Seasonal utilization:** Working with natural production cycles
- **Biodiversity protection:** Supporting diverse agricultural systems

**Clean Label Trends:**
- **Natural ingredients:** Minimally processed, recognizable
- **Reduced additives:** Fewer artificial preservatives, colors, flavors
- **Simple formulations:** Shorter ingredient lists
- **Transparent sourcing:** Clear origin information

## Circular Economy in Food Systems

**Waste Valorization:**
- **By-product utilization:** Turning waste into valuable products
- **Food waste reduction:** Throughout supply chain
- **Composting:** Returning nutrients to soil
- **Anaerobic digestion:** Producing energy from waste

**Packaging Circularity:**
- **Design for recyclability:** Mono-materials, easy separation
- **Reusable systems:** Returnable containers, refill stations
- **Compostable materials:** Industrial and home compostable options
- **Extended Producer Responsibility:** Manufacturers manage end-of-life

**Closed-Loop Systems:**
- **Water recycling:** Process water treatment and reuse
- **Energy recovery:** Capturing and reusing thermal energy
- **Nutrient cycling:** Returning food waste nutrients to agriculture
- **Industrial symbiosis:** One facility's waste becomes another's input

## Alternative Proteins and Novel Foods

**Plant-Based Alternatives:**
- **Meat analogs:** Soy, pea, wheat protein products
- **Dairy alternatives:** Nut, oat, soy milks and cheeses
- **Egg replacements:** Various plant protein formulations
- **Seafood alternatives:** Plant-based fish and shellfish

**Cultured (Cell-Based) Foods:**
- **Cultured meat:** Animal cells grown in bioreactors
- **Cultured seafood:** Fish cells cultivated without fishing
- **Advantages:** Reduced land and water use, no slaughter
- **Challenges:** Cost, scale-up, consumer acceptance

**Insect Protein:**
- **High nutrition:** Protein, healthy fats, minerals
- **Low environmental impact:** Efficient feed conversion
- **Applications:** Animal feed, protein powders, snack foods
- **Cultural acceptance:** Varies by region

**Algae and Microbial Proteins:**
- **Microalgae:** Spirulina, chlorella as protein sources
- **Fungi-based:** Mycoprotein from filamentous fungi
- **Fermentation-derived:** Proteins produced by microorganisms
- **Sustainability benefits:** Minimal land and water requirements

## Food Technology Innovations

**Precision Fermentation:**
- Microorganisms engineered to produce specific compounds
- **Examples:** Dairy proteins without cows, egg proteins without chickens
- **Benefits:** Consistent quality, reduced environmental impact
- **Applications:** Ingredients, flavors, nutrients

**3D Food Printing:**
- **Personalized nutrition:** Custom nutrient compositions
- **Complex structures:** Intricate designs not possible manually
- **Reduced waste:** Precise ingredient deposition
- **Applications:** Healthcare foods, decorative items, space food

**Smart Packaging:**
- **Freshness indicators:** Color change with spoilage
- **Time-temperature indicators:** Cumulative heat exposure
- **QR codes:** Traceability and information access
- **Active packaging:** Interacts with food to extend shelf life

**Blockchain Traceability:**
- **Supply chain transparency:** Every step recorded
- **Food safety:** Rapid recall capability
- **Authenticity verification:** Preventing fraud
- **Consumer information:** Detailed product journey

## Regulatory and Consumer Considerations

**Novel Food Regulations:**
- **Safety assessments:** Required for new food types
- **Labeling requirements:** Clear consumer information
- **Approval processes:** Vary by country and region
- **Traditional use exemptions:** For historically consumed foods

**Consumer Acceptance:**
- **Education needs:** Understanding new technologies
- **Taste and texture expectations:** Meeting consumer preferences
- **Price sensitivity:** Competitive with conventional options
- **Cultural factors:** Aligning with food traditions

**Ethical Considerations:**
- **Animal welfare:** Reduction in animal farming
- **Worker conditions:** Fair labor practices
- **Community impacts:** Supporting local economies
- **Access and equity:** Making sustainable foods available to all

## Future Outlook

**Integration of Technologies:**
- Combining biotechnology, information technology, and engineering
- **Digital twins:** Virtual models of food systems
- **AI optimization:** Process improvement and waste reduction
- **Internet of Things:** Connected devices throughout supply chain

**Personalized Nutrition:**
- **Genetic testing:** Individual nutrient needs
- **Microbiome analysis:** Personalized dietary recommendations
- **Custom formulations:** Foods tailored to individual requirements
- **Delivery systems:** Controlled nutrient release

**Resilient Food Systems:**
- **Climate adaptation:** Developing climate-resistant crops
- **Distributed production:** Local and vertical farming
- **Diversified sources:** Multiple protein and crop options
- **Emergency preparedness:** Robust supply chains

The future of food technology lies in creating sustainable, efficient, and equitable systems that nourish people while protecting the planet.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is waste valorization?",
          options: [
            "Turning waste into valuable products",
            "Throwing away waste",
            "Only composting",
            "Only reducing waste"
          ],
          correctAnswer: 0,
          explanation: "Waste valorization transforms food by-products and waste into valuable new products or energy."
        },
        {
          id: 2,
          question: "What are plant-based alternatives?",
          options: [
            "Only organic foods",
            "Only vegetables",
            "Only raw foods",
            "Plant protein products replacing animal products"
          ],
          correctAnswer: 3,
          explanation: "Plant-based alternatives use plant proteins to replace animal products like meat, dairy, and eggs."
        },
        {
          id: 3,
          question: "What is precision fermentation?",
          options: [
            "Only yogurt production",
            "Traditional fermentation",
            "Only beer making",
            "Engineered microorganisms producing specific compounds"
          ],
          correctAnswer: 3,
          explanation: "Precision fermentation uses engineered microorganisms to produce specific food compounds efficiently."
        },
        {
          id: 4,
          question: "What does clean label mean?",
          options: [
            "Only clean packaging",
            "Only low calorie",
            "Simple, natural, minimally processed ingredients",
            "Only organic certification"
          ],
          correctAnswer: 2,
          explanation: "Clean label emphasizes simple, natural ingredients with minimal processing and few additives."
        },
        {
          id: 5,
          question: "What is cultured meat?",
          options: [
            "Only aged meat",
            "Only fermented meat",
            "Only plant-based meat",
            "Animal cells grown in bioreactors"
          ],
          correctAnswer: 3,
          explanation: "Cultured meat grows animal cells in bioreactors without raising and slaughtering animals."
        },
        {
          id: 6,
          question: "What is circular economy in food?",
          options: [
            "Only local production",
            "Closed-loop systems minimizing waste",
            "Only recycling packaging",
            "Only round packaging"
          ],
          correctAnswer: 1,
          explanation: "Circular economy creates closed-loop systems where waste becomes inputs for new products."
        },
        {
          id: 7,
          question: "What is 3D food printing?",
          options: [
            "Only cookie cutting",
            "Creating food structures layer by layer",
            "Only food photography",
            "Only printing labels"
          ],
          correctAnswer: 1,
          explanation: "3D food printing builds food structures layer by layer from edible materials for customization."
        },
        {
          id: 8,
          question: "What are insect proteins?",
          options: [
            "Only animal feed",
            "Only for pets",
            "Only traditional foods",
            "Protein from insects for human or animal consumption"
          ],
          correctAnswer: 3,
          explanation: "Insect proteins come from farmed insects for human food, animal feed, or ingredient use."
        },
        {
          id: 9,
          question: "What is blockchain traceability?",
          options: [
            "Transparent supply chain recording",
            "Only quality testing",
            "Only price tracking",
            "Only inventory tracking"
          ],
          correctAnswer: 0,
          explanation: "Blockchain creates transparent, immutable records of food movement through supply chains."
        },
        {
          id: 10,
          question: "What are algae proteins?",
          options: [
            "Only animal feed",
            "Only sea vegetables",
            "Only fish food",
            "Proteins from microalgae like spirulina"
          ],
          correctAnswer: 3,
          explanation: "Algae proteins come from microalgae like spirulina, used as sustainable protein sources."
        },
        {
          id: 11,
          question: "What is smart packaging?",
          options: [
            "Only recycled packaging",
            "Only attractive packaging",
            "Only biodegradable packaging",
            "Packaging that monitors or interacts with food"
          ],
          correctAnswer: 3,
          explanation: "Smart packaging monitors food condition or interacts with it to extend shelf life or provide information."
        },
        {
          id: 12,
          question: "What is personalized nutrition?",
          options: [
            "Foods tailored to individual genetic and health needs",
            "Only diet plans",
            "Only organic foods",
            "Only vitamin supplements"
          ],
          correctAnswer: 0,
          explanation: "Personalized nutrition tailors foods and diets to individual genetic, health, and lifestyle factors."
        },
        {
          id: 13,
          question: "What are novel food regulations?",
          options: [
            "Only for packaged foods",
            "Only for imported foods",
            "Safety rules for new food types",
            "Only for organic foods"
          ],
          correctAnswer: 2,
          explanation: "Novel food regulations govern safety assessment and approval of new food types and ingredients."
        },
        {
          id: 14,
          question: "What is anaerobic digestion?",
          options: [
            "Only food preservation",
            "Only composting",
            "Producing energy from organic waste",
            "Only water treatment"
          ],
          correctAnswer: 2,
          explanation: "Anaerobic digestion breaks down organic waste without oxygen, producing biogas for energy."
        },
        {
          id: 15,
          question: "What are mycoproteins?",
          options: [
            "Only bacterial proteins",
            "Proteins from filamentous fungi",
            "Only mushroom caps",
            "Only yeast proteins"
          ],
          correctAnswer: 1,
          explanation: "Mycoproteins come from filamentous fungi and are used as meat alternatives and protein sources."
        },
        {
          id: 16,
          question: "What is industrial symbiosis?",
          options: [
            "Only factory cooperation",
            "One facility's waste becomes another's input",
            "Only manufacturing partnerships",
            "Only similar industries"
          ],
          correctAnswer: 1,
          explanation: "Industrial symbiosis creates networks where one company's waste becomes raw material for another."
        },
        {
          id: 17,
          question: "What is sustainable sourcing?",
          options: [
            "Only local ingredients",
            "Only cheap ingredients",
            "Only organic ingredients",
            "Environmentally and socially responsible ingredient procurement"
          ],
          correctAnswer: 3,
          explanation: "Sustainable sourcing considers environmental impact, social responsibility, and economic viability."
        },
        {
          id: 18,
          question: "What are digital twins in food systems?",
          options: [
            "Only inventory software",
            "Only computer models",
            "Virtual replicas of physical systems for optimization",
            "Only recipe databases"
          ],
          correctAnswer: 2,
          explanation: "Digital twins are virtual models of food systems used to simulate, predict, and optimize performance."
        },
        {
          id: 19,
          question: "What is extended producer responsibility?",
          options: [
            "Only product development",
            "Only customer service",
            "Manufacturers managing product end-of-life",
            "Only product quality"
          ],
          correctAnswer: 2,
          explanation: "Extended producer responsibility makes manufacturers responsible for product disposal or recycling."
        },
        {
          id: 20,
          question: "What shapes future food technology?",
          options: [
            "Only production speed",
            "Only cost reduction",
            "Sustainability, efficiency, and equity considerations",
            "Only taste improvement"
          ],
          correctAnswer: 2,
          explanation: "Future food technology balances sustainability, efficiency, equity, and meeting global food needs."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "food-technology-diploma-exam",
    title: "Food Technology Diploma Final Exam",
    description: "Comprehensive exam covering all advanced modules. Pass with 80% or higher to earn your diploma.",
    passingScore: 80,
    questions: [
      {
        id: 1,
        question: "What are amino acids?",
        options: [
          "Fat components",
          "Protein building blocks",
          "Water molecules",
          "Simple sugars"
        ],
        correctAnswer: 1,
        explanation: "Amino acids are the basic building blocks that form proteins through peptide bonds."
      },
      {
        id: 2,
        question: "What does HPP stand for?",
        options: [
          "Hydrostatic Pressure Packaging",
          "High Protein Preservation",
          "High Pressure Processing",
          "Heat Pasteurization Process"
        ],
        correctAnswer: 2,
        explanation: "HPP stands for High Pressure Processing, a non-thermal preservation method."
      },
      {
        id: 3,
        question: "What does water activity predict?",
        options: [
          "Color stability",
          "Nutritional value",
          "Microbial growth potential",
          "Flavor intensity"
        ],
        correctAnswer: 2,
        explanation: "Water activity (aw) predicts potential for microbial growth in food products."
      },
      {
        id: 4,
        question: "What is MAP packaging?",
        options: [
          "Multi-layer Aseptic Packaging",
          "Maximum Air Protection",
          "Modified Atmosphere Packaging",
          "Minimum Air Packaging"
        ],
        correctAnswer: 2,
        explanation: "MAP stands for Modified Atmosphere Packaging, replacing air with specific gas mixtures."
      },
      {
        id: 5,
        question: "What is the first product development stage?",
        options: [
          "Manufacturing",
          "Ideation and concept development",
          "Launch",
          "Testing"
        ],
        correctAnswer: 1,
        explanation: "Ideation and concept development is the initial stage where ideas are generated and screened."
      },
      {
        id: 6,
        question: "What is waste valorization?",
        options: [
          "Throwing away waste",
          "Turning waste into valuable products",
          "Only reducing waste",
          "Only composting"
        ],
        correctAnswer: 1,
        explanation: "Waste valorization transforms by-products and waste into valuable new products or energy."
      },
      {
        id: 7,
        question: "What causes Maillard reaction?",
        options: [
          "Water and enzymes",
          "Sugars and amino acids with heat",
          "Sugar and heat only",
          "Fat and oxygen"
        ],
        correctAnswer: 1,
        explanation: "Maillard reaction requires reducing sugars and amino acids with heat to create flavor and color."
      },
      {
        id: 8,
        question: "What is freeze drying?",
        options: [
          "Water sublimation under vacuum",
          "Spray freezing",
          "Drum freezing",
          "Freezing then air drying"
        ],
        correctAnswer: 0,
        explanation: "Freeze drying involves freezing then removing water by sublimation under vacuum."
      },
      {
        id: 9,
        question: "What is a hedonic scale?",
        options: [
          "Color measurement scale",
          "pH measurement scale",
          "Texture analysis scale",
          "Consumer liking rating scale"
        ],
        correctAnswer: 3,
        explanation: "Hedonic scales measure consumer liking, typically using a 9-point like/dislike scale."
      },
      {
        id: 10,
        question: "What are oxygen scavengers?",
        options: [
          "Release oxygen slowly",
          "Measure oxygen levels",
          "Add oxygen to packaging",
          "Remove oxygen from packaging"
        ],
        correctAnswer: 3,
        explanation: "Oxygen scavengers actively remove oxygen from packaged foods to extend shelf life."
      },
      {
        id: 11,
        question: "What is a go/no-go decision?",
        options: [
          "Packaging selection",
          "Decision to continue or abandon project",
          "Ingredient sourcing",
          "Marketing plan approval"
        ],
        correctAnswer: 1,
        explanation: "Go/no-go decisions determine whether to proceed to next development stage or stop."
      },
      {
        id: 12,
        question: "What are plant-based alternatives?",
        options: [
          "Plant protein products replacing animal products",
          "Only raw foods",
          "Only organic foods",
          "Only vegetables"
        ],
        correctAnswer: 0,
        explanation: "Plant-based alternatives use plant proteins to replace animal products like meat and dairy."
      },
      {
        id: 13,
        question: "What is starch gelatinization?",
        options: [
          "Starch becoming sweet",
          "Starch breaking down",
          "Starch fermenting",
          "Starch granules swelling in water"
        ],
        correctAnswer: 3,
        explanation: "Starch gelatinization occurs when starch granules absorb water and swell, thickening mixtures."
      },
      {
        id: 14,
        question: "What does IQF mean?",
        options: [
          "Individual Quick Freezing",
          "Integrated Quality Freezing",
          "International Quality Food",
          "Instant Quick Freezing"
        ],
        correctAnswer: 0,
        explanation: "IQF means Individual Quick Freezing, where pieces freeze separately."
      },
      {
        id: 15,
        question: "What does GC-MS analyze?",
        options: [
          "Water content",
          "Color pigments",
          "Texture properties",
          "Volatile flavor compounds"
        ],
        correctAnswer: 3,
        explanation: "Gas Chromatography-Mass Spectrometry analyzes volatile flavor and aroma compounds."
      },
      {
        id: 16,
        question: "What is aseptic packaging?",
        options: [
          "Sterilizes product and package separately",
          "Only modifies atmosphere",
          "Only vacuum packs",
          "Only sterilizes product"
        ],
        correctAnswer: 0,
        explanation: "Aseptic packaging sterilizes product and package separately then fills in sterile environment."
      },
      {
        id: 17,
        question: "What are bench-top prototypes?",
        options: [
          "Consumer test samples",
          "Small-scale development prototypes",
          "Marketing samples",
          "Full-scale production"
        ],
        correctAnswer: 1,
        explanation: "Bench-top prototypes are small-scale versions developed in the laboratory."
      },
      {
        id: 18,
        question: "What is precision fermentation?",
        options: [
          "Only beer making",
          "Only yogurt production",
          "Engineered microorganisms producing specific compounds",
          "Traditional fermentation"
        ],
        correctAnswer: 2,
        explanation: "Precision fermentation uses engineered microorganisms to produce specific food compounds."
      },
      {
        id: 19,
        question: "What are reducing sugars?",
        options: [
          "Sugars that don't crystallize",
          "Sugars that participate in Maillard reaction",
          "Sugar alcohols",
          "Artificial sweeteners"
        ],
        correctAnswer: 1,
        explanation: "Reducing sugars have free aldehyde or ketone groups and participate in Maillard browning."
      },
      {
        id: 20,
        question: "What is cryogenic freezing?",
        options: [
          "Freezing with liquid nitrogen",
          "Sun freezing",
          "Slow freezing in air",
          "Plate freezing"
        ],
        correctAnswer: 0,
        explanation: "Cryogenic freezing uses extremely cold liquids like nitrogen for rapid freezing."
      },
      {
        id: 21,
        question: "What is triangle test?",
        options: [
          "Three samples, find the odd one",
          "Color measurement",
          "Texture analysis",
          "pH testing"
        ],
        correctAnswer: 0,
        explanation: "Triangle test presents three samples where one is different; identify the odd sample."
      },
      {
        id: 22,
        question: "What is PET plastic?",
        options: [
          "Foam cup material",
          "Clear beverage bottle plastic",
          "Only grocery bags",
          "Microwave tray material"
        ],
        correctAnswer: 1,
        explanation: "PET (polyethylene terephthalate) is used for clear beverage bottles and food containers."
      },
      {
        id: 23,
        question: "What is pilot production?",
        options: [
          "Only consumer testing",
          "Full commercial production",
          "Only laboratory testing",
          "Intermediate scale production testing"
        ],
        correctAnswer: 3,
        explanation: "Pilot production tests processes at intermediate scale before full commercial production."
      },
      {
        id: 24,
        question: "What is cultured meat?",
        options: [
          "Only aged meat",
          "Animal cells grown in bioreactors",
          "Only plant-based meat",
          "Only fermented meat"
        ],
        correctAnswer: 1,
        explanation: "Cultured meat grows animal cells in bioreactors without raising animals."
      },
      {
        id: 25,
        question: "What is water activity?",
        options: [
          "Water temperature",
          "Water purity measurement",
          "Available water for microbial growth",
          "Water content percentage"
        ],
        correctAnswer: 2,
        explanation: "Water activity measures water available for microbial growth, not total water content."
      },
      {
        id: 26,
        question: "What is lactic acid fermentation?",
        options: [
          "Bread rising",
          "Vinegar making",
          "Yogurt and sauerkraut production",
          "Beer production"
        ],
        correctAnswer: 2,
        explanation: "Lactic acid fermentation produces yogurt, sauerkraut, pickles, and other acidified foods."
      },
      {
        id: 27,
        question: "What are control charts?",
        options: [
          "Only packaging charts",
          "Only product weight charts",
          "Only cost charts",
          "Process stability monitoring charts"
        ],
        correctAnswer: 3,
        explanation: "Control charts monitor process stability and variation over time statistically."
      },
      {
        id: 28,
        question: "What is form-fill-seal?",
        options: [
          "Manual packaging",
          "Only filling operation",
          "Only sealing operation",
          "Continuous packaging from roll stock"
        ],
        correctAnswer: 3,
        explanation: "Form-fill-seal forms packages from roll stock, fills, and seals continuously."
      },
      {
        id: 29,
        question: "What is stage-gate process?",
        options: [
          "Structured decision points between stages",
          "Continuous development",
          "Only testing phase",
          "Only launch phase"
        ],
        correctAnswer: 0,
        explanation: "Stage-gate process has structured decision points (gates) between development stages."
      },
      {
        id: 30,
        question: "What is circular economy?",
        options: [
          "Closed-loop systems minimizing waste",
          "Only recycling packaging",
          "Only local production",
          "Only round packaging"
        ],
        correctAnswer: 0,
        explanation: "Circular economy creates closed-loop systems where waste becomes inputs."
      },
      {
        id: 31,
        question: "What is lipid oxidation?",
        options: [
          "Fat emulsification",
          "Fat breakdown causing rancidity",
          "Fat solidification",
          "Fat melting"
        ],
        correctAnswer: 1,
        explanation: "Lipid oxidation causes rancidity with off-flavors and odors in fats and oils."
      },
      {
        id: 32,
        question: "What is spray drying?",
        options: [
          "Liquid to powder conversion",
          "Fruit canning",
          "Meat preservation",
          "Vegetable freezing"
        ],
        correctAnswer: 0,
        explanation: "Spray drying converts liquids into powders by spraying into hot air."
      },
      {
        id: 33,
        question: "What is accelerated shelf life testing?",
        options: [
          "Consumer testing",
          "Only microbial testing",
          "Stress conditions to predict shelf life",
          "Real-time storage"
        ],
        correctAnswer: 2,
        explanation: "Accelerated testing uses stress conditions to predict normal shelf life faster."
      },
      {
        id: 34,
        question: "What is retort packaging?",
        options: [
          "Only for frozen foods",
          "Only for dry goods",
          "Flexible pouches thermally processed",
          "Only glass containers"
        ],
        correctAnswer: 2,
        explanation: "Retort packaging uses flexible pouches thermally processed like cans."
      },
      {
        id: 35,
        question: "What is concept testing?",
        options: [
          "Testing final product",
          "Packaging testing",
          "Laboratory analysis",
          "Presenting ideas to consumers"
        ],
        correctAnswer: 3,
        explanation: "Concept testing presents product ideas to consumers for feedback before development."
      },
      {
        id: 36,
        question: "What are insect proteins?",
        options: [
          "Only animal feed",
          "Protein from insects for consumption",
          "Only traditional foods",
          "Only for pets"
        ],
        correctAnswer: 1,
        explanation: "Insect proteins come from farmed insects for human food or animal feed."
      },
      {
        id: 37,
        question: "What are functional properties?",
        options: [
          "Texture and stability effects",
          "Color only",
          "Flavor only",
          "Nutritional value only"
        ],
        correctAnswer: 0,
        explanation: "Functional properties include how proteins affect texture, stability, and other qualities."
      },
      {
        id: 38,
        question: "What is blanching?",
        options: [
          "Sterilizes completely",
          "Dries foods",
          "Inactivates enzymes before freezing",
          "Ferments foods"
        ],
        correctAnswer: 2,
        explanation: "Blanching uses brief heat to inactivate enzymes before freezing or drying."
      },
      {
        id: 39,
        question: "What is GMP?",
        options: [
          "Good Manufacturing Practice",
          "General Measurement Procedure",
          "Good Microbial Practice",
          "Global Marketing Plan"
        ],
        correctAnswer: 0,
        explanation: "GMP stands for Good Manufacturing Practice for facility and process standards."
      },
      {
        id: 40,
        question: "What is scale-up?",
        options: [
          "Only increasing batch size",
          "Moving to commercial production",
          "Only cost reduction",
          "Only ingredient scaling"
        ],
        correctAnswer: 1,
        explanation: "Scale-up involves moving from development to full commercial production scale."
      }
    ]
  }
};
