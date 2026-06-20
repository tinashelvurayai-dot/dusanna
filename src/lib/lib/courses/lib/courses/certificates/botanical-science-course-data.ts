// Botanical Science (Diploma) - Complete Course Data
// Advanced diploma course building on Native Plant Studies Certificate
// All modules and exam in one file for easy implementation

export const botanicalScienceDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "botanical-science-diploma",
  title: "Botanical Science (Diploma)",
  description: "An advanced diploma course diving deep into plant biology, taxonomy, physiology, and scientific methods. Builds upon foundational knowledge to develop professional botanical expertise.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  icon: "🔬",
  badge: "Diploma",
  prerequisites: ["native-plant-studies-certificate"],
  creditTransfer: true,
  
  // 2. MODULE ARCHITECTURE - 6 Advanced Modules
  modules: [
    {
      id: 1,
      title: "Advanced Plant Taxonomy & Systematics",
      completed: false,
      content: `# Module 1: Advanced Plant Taxonomy & Systematics

## Welcome to Advanced Botanical Science
This module explores the scientific classification and naming of plants. You'll learn about plant families, genera, species concepts, and modern systematic approaches used by professional botanists.

### Plant Classification Systems
Modern taxonomy uses multiple lines of evidence to classify plants. Morphological characteristics, genetic data, and evolutionary relationships all contribute to our understanding of plant relationships.

**Taxonomic hierarchy levels:**
- **Kingdom**: Plantae
- **Division/Phylum**: Magnoliophyta (flowering plants)
- **Class**: Magnoliopsida (dicots) or Liliopsida (monocots)
- **Order**: Group of related families
- **Family**: Group of related genera (e.g., Rosaceae)
- **Genus**: Group of closely related species
- **Species**: Basic biological unit

### Scientific Naming Conventions
Every plant has a unique scientific name following binomial nomenclature. The system was developed by Carl Linnaeus and provides universal understanding across languages and regions.

**Key naming rules:**
- Genus name capitalized, species epithet lowercase
- Both names italicized when printed
- Author citation indicates who first validly published the name
- Type specimens serve as reference points

### Modern Systematic Methods
Contemporary botanists use various tools to understand plant relationships. Molecular phylogenetics, cladistics, and comparative morphology reveal evolutionary patterns.

**Systematic approaches:**
- **Molecular systematics**: DNA sequencing and analysis
- **Morphological analysis**: Comparative study of form and structure
- **Phylogenetic reconstruction**: Building evolutionary trees
- **Biogeographic patterns**: Distribution studies

---

## Key Learning Points
- Scientific classification follows hierarchical systems
- Binomial nomenclature provides universal plant names
- Multiple evidence types inform modern taxonomy
- Understanding relationships reveals evolutionary history

Mastering taxonomy is fundamental to all botanical science!`,
      
      quiz: [
        {
          id: 1,
          question: "What is the basic biological unit in plant classification?",
          options: [
            "Family",
            "Order",
            "Species",
            "Genus"
          ],
          correctAnswer: 2,
          explanation: "The species is the fundamental unit of biological classification."
        },
        {
          id: 2,
          question: "Who developed the binomial nomenclature system?",
          options: [
            "Gregor Mendel",
            "Robert Brown",
            "Charles Darwin",
            "Carl Linnaeus"
          ],
          correctAnswer: 3,
          explanation: "Linnaeus established the modern system of scientific naming."
        },
        {
          id: 3,
          question: "How should scientific names be formatted when printed?",
          options: [
            "Underlined with no capitalization",
            "Regular font with both words capitalized",
            "Always in bold capital letters",
            "Italicized with genus capitalized"
          ],
          correctAnswer: 3,
          explanation: "Italicization and proper capitalization are standard conventions."
        },
        {
          id: 4,
          question: "What does molecular systematics primarily use?",
          options: [
            "Flower color patterns",
            "Only leaf shape comparison",
            "DNA sequencing and analysis",
            "Growth rate measurements"
          ],
          correctAnswer: 2,
          explanation: "Molecular data from DNA provides evidence for relationships."
        },
        {
          id: 5,
          question: "What level comes immediately above genus in classification?",
          options: [
            "Family",
            "Order",
            "Species",
            "Class"
          ],
          correctAnswer: 0,
          explanation: "Families contain related genera."
        },
        {
          id: 6,
          question: "What does 'Magnoliophyta' refer to?",
          options: [
            "Flowering plants division",
            "Tree growth form",
            "Moss classification",
            "Fern family only"
          ],
          correctAnswer: 0,
          explanation: "Magnoliophyta is the division containing flowering plants."
        },
        {
          id: 7,
          question: "What indicates who first published a plant name?",
          options: [
            "Author citation",
            "Publication date",
            "Type specimen location",
            "Herbarium code"
          ],
          correctAnswer: 0,
          explanation: "Author citations credit the original publishing botanist."
        },
        {
          id: 8,
          question: "What do type specimens provide?",
          options: [
            "Reference points for names",
            "Historical artwork",
            "Genetic material only",
            "Garden display samples"
          ],
          correctAnswer: 0,
          explanation: "Type specimens serve as the standard reference for a species."
        },
        {
          id: 9,
          question: "What does cladistics help reconstruct?",
          options: [
            "Evolutionary relationships",
            "Flower color changes",
            "Only growth patterns",
            "Soil preferences"
          ],
          correctAnswer: 0,
          explanation: "Cladistics analyzes shared characteristics to show relationships."
        },
        {
          id: 10,
          question: "What is Rosaceae an example of?",
          options: [
            "An order classification",
            "A genus name",
            "A species epithet",
            "A plant family"
          ],
          correctAnswer: 3,
          explanation: "Rosaceae is the rose family containing many genera."
        },
        {
          id: 11,
          question: "What does biogeographic patterns study?",
          options: [
            "Only leaf shapes",
            "Flower scent chemistry",
            "Plant distribution patterns",
            "Root depth measurements"
          ],
          correctAnswer: 2,
          explanation: "Biogeography examines how plants are distributed geographically."
        },
        {
          id: 12,
          question: "What are Liliopsida and Magnoliopsida?",
          options: [
            "Family groups",
            "Genus names",
            "Plant classes",
            "Species varieties"
          ],
          correctAnswer: 2,
          explanation: "These are classes within flowering plants: monocots and dicots."
        },
        {
          id: 13,
          question: "What does phylogenetic reconstruction create?",
          options: [
            "Evolutionary trees",
            "Garden designs",
            "Climate charts",
            "Soil maps"
          ],
          correctAnswer: 0,
          explanation: "Phylogenies show hypothesized evolutionary relationships."
        },
        {
          id: 14,
          question: "What is the plural of genus?",
          options: [
            "Genus types",
            "Genuses",
            "Genus's",
            "Genera"
          ],
          correctAnswer: 3,
          explanation: "Genera is the correct plural form of genus."
        },
        {
          id: 15,
          question: "What do modern taxonomists use besides morphology?",
          options: [
            "Only common names",
            "Garden popularity",
            "Historical records only",
            "Genetic data and evolutionary relationships"
          ],
          correctAnswer: 3,
          explanation: "Multiple evidence types provide more accurate classifications."
        },
        {
          id: 16,
          question: "What does the species epithet represent?",
          options: [
            "The common name",
            "The discoverer's name",
            "The second part of the scientific name",
            "The family classification"
          ],
          correctAnswer: 2,
          explanation: "The species epithet is the specific name within a genus."
        },
        {
          id: 17,
          question: "What does comparative morphology involve?",
          options: [
            "Counting flowers only",
            "Testing soil chemistry",
            "Only measuring plant height",
            "Studying form and structure across species"
          ],
          correctAnswer: 3,
          explanation: "Comparative analysis reveals similarities and differences."
        },
        {
          id: 18,
          question: "What is the correct order from broadest to most specific?",
          options: [
            "Kingdom, Division, Class, Order, Family, Genus, Species",
            "Species, Genus, Family, Order, Class, Division, Kingdom",
            "Family, Genus, Species, Order, Class, Division, Kingdom",
            "Genus, Species, Family, Order, Class, Division, Kingdom"
          ],
          correctAnswer: 0,
          explanation: "Taxonomic hierarchy proceeds from broad categories to specific ones."
        },
        {
          id: 19,
          question: "What provides universal understanding across languages?",
          options: [
            "Local names",
            "Common names",
            "Trade names",
            "Scientific names"
          ],
          correctAnswer: 3,
          explanation: "Scientific names are standardized internationally."
        },
        {
          id: 20,
          question: "What is fundamental to all botanical science?",
          options: [
            "Mastering taxonomy",
            "Memorizing colors",
            "Counting leaves",
            "Only gardening skills"
          ],
          correctAnswer: 0,
          explanation: "Taxonomy provides the framework for understanding plant diversity."
        }
      ]
    },
    
    {
      id: 2,
      title: "Plant Anatomy & Morphology",
      completed: false,
      content: `# Module 2: Plant Anatomy & Morphology

## Structure and Form of Plants
This module examines plant structure at cellular, tissue, and organ levels. You'll learn detailed anatomical features and their functional significance in plant life.

### Root System Anatomy
Roots serve multiple essential functions. They anchor plants, absorb water and nutrients, store food, and often reproduce vegetatively.

**Root structural features:**
- **Root cap**: Protective covering at tip
- **Zone of elongation**: Where cells lengthen
- **Root hairs**: Increase surface area for absorption
- **Vascular cylinder**: Contains xylem and phloem

### Stem Structure and Function
Stems provide support, transport, and sometimes storage. Their anatomy varies between monocots and dicots, and between woody and herbaceous plants.

**Stem tissue organization:**
- **Epidermis**: Protective outer layer
- **Cortex**: Storage and support tissue
- **Vascular bundles**: Transport tissues arranged in patterns
- **Pith**: Central storage tissue in some stems

### Leaf Anatomy and Adaptations
Leaves are primary photosynthetic organs with specialized structures. Their anatomy maximizes light capture and gas exchange while minimizing water loss.

**Leaf tissue layers:**
- **Cuticle**: Waxy waterproof layer
- **Epidermis**: Protective layer with stomata
- **Mesophyll**: Photosynthetic tissue (palisade and spongy)
- **Vascular tissue**: Veins for transport

### Reproductive Structures
Flowers, fruits, and seeds have specialized anatomy for reproduction. Understanding these structures is key to plant identification and classification.

**Floral anatomy components:**
- **Sepals**: Protective outer whorl
- **Petals**: Often colorful for attraction
- **Stamens**: Male reproductive parts
- **Carpels**: Female reproductive parts

---

## Key Learning Points
- Roots have specialized zones for different functions
- Stem anatomy varies between plant types
- Leaf structure optimizes photosynthesis
- Reproductive anatomy reveals evolutionary relationships

Anatomical knowledge provides insight into plant function and adaptation!`,
      
      quiz: [
        {
          id: 1,
          question: "What is the function of the root cap?",
          options: [
            "Absorbing water",
            "Anchoring the plant",
            "Protecting the growing tip",
            "Storing nutrients"
          ],
          correctAnswer: 2,
          explanation: "The root cap protects delicate meristematic cells as roots grow through soil."
        },
        {
          id: 2,
          question: "Where do root cells lengthen?",
          options: [
            "Maturation zone",
            "Zone of elongation",
            "Root cap area",
            "Root hair region"
          ],
          correctAnswer: 1,
          explanation: "Cell elongation occurs just behind the root tip."
        },
        {
          id: 3,
          question: "What increases surface area for water absorption?",
          options: [
            "Root hairs",
            "Cortex tissue",
            "Vascular cylinder",
            "Root cap"
          ],
          correctAnswer: 0,
          explanation: "Root hairs dramatically increase absorptive surface area."
        },
        {
          id: 4,
          question: "What contains xylem and phloem in roots?",
          options: [
            "Root epidermis",
            "Vascular cylinder",
            "Root hairs",
            "Root cap"
          ],
          correctAnswer: 1,
          explanation: "The vascular cylinder contains transport tissues."
        },
        {
          id: 5,
          question: "What is the protective outer layer of stems?",
          options: [
            "Epidermis",
            "Vascular tissue",
            "Pith",
            "Cortex"
          ],
          correctAnswer: 0,
          explanation: "The epidermis provides external protection."
        },
        {
          id: 6,
          question: "What tissue often stores food in stems?",
          options: [
            "Cortex",
            "Epidermis",
            "Phloem",
            "Xylem"
          ],
          correctAnswer: 0,
          explanation: "Cortical tissue frequently serves storage functions."
        },
        {
          id: 7,
          question: "How do vascular bundles differ in monocots vs dicots?",
          options: [
            "Absent in some plants",
            "Arranged differently in stems",
            "Only in roots, not stems",
            "Identical in all plants"
          ],
          correctAnswer: 1,
          explanation: "Monocots have scattered bundles; dicots have organized rings."
        },
        {
          id: 8,
          question: "What is the waxy waterproof layer on leaves?",
          options: [
            "Mesophyll",
            "Epidermis",
            "Stomata",
            "Cuticle"
          ],
          correctAnswer: 3,
          explanation: "The cuticle prevents excessive water loss."
        },
        {
          id: 9,
          question: "Where does most photosynthesis occur in leaves?",
          options: [
            "Cuticle",
            "Epidermis",
            "Veins",
            "Mesophyll tissue"
          ],
          correctAnswer: 3,
          explanation: "Mesophyll contains chloroplast-rich cells."
        },
        {
          id: 10,
          question: "What are stomata?",
          options: [
            "Storage cells",
            "Pores for gas exchange",
            "Protective hairs",
            "Transport vessels"
          ],
          correctAnswer: 1,
          explanation: "Stomata allow carbon dioxide in and oxygen out."
        },
        {
          id: 11,
          question: "What is the central storage tissue in some stems?",
          options: [
            "Epidermis",
            "Vascular tissue",
            "Pith",
            "Cortex"
          ],
          correctAnswer: 2,
          explanation: "Pith occupies the center of many stems."
        },
        {
          id: 12,
          question: "What are the protective outer whorl of flowers?",
          options: [
            "Stamens",
            "Carpels",
            "Petals",
            "Sepals"
          ],
          correctAnswer: 3,
          explanation: "Sepals protect developing flower buds."
        },
        {
          id: 13,
          question: "What are the male reproductive parts?",
          options: [
            "Petals",
            "Carpels",
            "Stamens",
            "Sepals"
          ],
          correctAnswer: 2,
          explanation: "Stamens produce pollen."
        },
        {
          id: 14,
          question: "What tissue contains palisade and spongy layers?",
          options: [
            "Cuticle",
            "Mesophyll",
            "Epidermis",
            "Vascular"
          ],
          correctAnswer: 1,
          explanation: "Mesophyll has these two photosynthetic layers."
        },
        {
          id: 15,
          question: "What do veins in leaves contain?",
          options: [
            "Vascular tissue",
            "Storage cells",
            "Only phloem",
            "Only xylem"
          ],
          correctAnswer: 0,
          explanation: "Veins contain both xylem and phloem."
        },
        {
          id: 16,
          question: "What is the function of petals?",
          options: [
            "Protect developing seeds",
            "Attract pollinators",
            "Produce pollen",
            "Receive pollen"
          ],
          correctAnswer: 1,
          explanation: "Petals often attract pollinators with color and scent."
        },
        {
          id: 17,
          question: "What are carpels?",
          options: [
            "Male reproductive parts",
            "Protective structures",
            "Female reproductive parts",
            "Attractive structures"
          ],
          correctAnswer: 2,
          explanation: "Carpels contain ovules and develop into fruits."
        },
        {
          id: 18,
          question: "What provides insight into plant function?",
          options: [
            "Anatomical knowledge",
            "Garden location",
            "Flower color alone",
            "Only common names"
          ],
          correctAnswer: 0,
          explanation: "Structure reveals how plants perform essential functions."
        },
        {
          id: 19,
          question: "What varies between woody and herbaceous stems?",
          options: [
            "Presence of leaves",
            "Basic functions",
            "Tissue organization",
            "Ability to photosynthesize"
          ],
          correctAnswer: 2,
          explanation: "Woody stems have secondary growth; herbaceous stems do not."
        },
        {
          id: 20,
          question: "What reveals evolutionary relationships?",
          options: [
            "Growth rate",
            "Leaf color",
            "Reproductive anatomy",
            "Plant height only"
          ],
          correctAnswer: 2,
          explanation: "Floral structures provide important taxonomic characters."
        }
      ]
    },
    
    {
      id: 3,
      title: "Plant Physiology & Biochemistry",
      completed: false,
      content: `# Module 3: Plant Physiology & Biochemistry

## How Plants Function
This module explores the physiological processes and biochemical pathways that enable plant growth, development, and response to the environment.

### Photosynthesis Mechanisms
Photosynthesis converts light energy to chemical energy. The process involves light reactions and dark reactions (Calvin cycle), occurring in chloroplasts.

**Photosynthetic stages:**
- **Light reactions**: Capture light energy, produce ATP and NADPH
- **Calvin cycle**: Fix carbon dioxide into sugars using ATP and NADPH
- **Photorespiration**: Process that reduces efficiency in some conditions

### Respiration and Energy Transfer
Plants respire to release energy from stored carbohydrates. Cellular respiration occurs in mitochondria and provides ATP for cellular processes.

**Respiration pathways:**
- **Glycolysis**: Breaks down glucose in cytoplasm
- **Krebs cycle**: Completes oxidation in mitochondria
- **Electron transport chain**: Produces most ATP

### Water Relations and Transport
Water movement through plants involves osmosis, transpiration, and cohesion-tension theory. Understanding these processes explains how tall trees transport water.

**Water transport mechanisms:**
- **Root pressure**: Pushes water upward
- **Cohesion-tension**: Pulls water through xylem
- **Transpiration pull**: Evaporation from leaves creates suction
- **Stomatal regulation**: Controls water loss

### Plant Hormones and Signaling
Plants use chemical messengers to coordinate growth and responses. Hormones regulate everything from seed germination to flowering.

**Major plant hormones:**
- **Auxins**: Promote cell elongation and root formation
- **Gibberellins**: Stimulate stem elongation and seed germination
- **Cytokinins**: Promote cell division and delay aging
- **Abscisic acid**: Induces dormancy and stress responses
- **Ethylene**: Promotes fruit ripening and leaf abscission

---

## Key Learning Points
- Photosynthesis converts light to chemical energy
- Respiration releases energy from stored compounds
- Water transport relies on physical principles
- Hormones coordinate plant growth and responses

Understanding physiology reveals how plants live and grow!`,
      
      quiz: [
        {
          id: 1,
          question: "Where does photosynthesis occur in plant cells?",
          options: [
            "Chloroplasts",
            "Mitochondria",
            "Nucleus",
            "Vacuole"
          ],
          correctAnswer: 0,
          explanation: "Chloroplasts contain chlorophyll and photosynthetic machinery."
        },
        {
          id: 2,
          question: "What do light reactions produce?",
          options: [
            "ATP and NADPH",
            "Carbon dioxide",
            "Glucose directly",
            "Only oxygen"
          ],
          correctAnswer: 0,
          explanation: "Light reactions convert light energy to chemical carriers."
        },
        {
          id: 3,
          question: "What uses ATP and NADPH to make sugars?",
          options: [
            "Krebs cycle",
            "Light reactions",
            "Glycolysis",
            "Calvin cycle"
          ],
          correctAnswer: 3,
          explanation: "The Calvin cycle fixes carbon using energy from light reactions."
        },
        {
          id: 4,
          question: "Where does cellular respiration occur?",
          options: [
            "Mitochondria",
            "Chloroplasts",
            "Vacuole",
            "Cell wall"
          ],
          correctAnswer: 0,
          explanation: "Mitochondria are the powerhouses of the cell."
        },
        {
          id: 5,
          question: "What produces most ATP during respiration?",
          options: [
            "Krebs cycle only",
            "Fermentation",
            "Glycolysis",
            "Electron transport chain"
          ],
          correctAnswer: 3,
          explanation: "The electron transport chain generates the majority of ATP."
        },
        {
          id: 6,
          question: "What theory explains water transport in tall trees?",
          options: [
            "Active pumping",
            "Capillary action alone",
            "Root pressure only",
            "Cohesion-tension theory"
          ],
          correctAnswer: 3,
          explanation: "Cohesion of water molecules and tension from transpiration create pull."
        },
        {
          id: 7,
          question: "What creates suction for water movement?",
          options: [
            "Stem compression",
            "Transpiration pull",
            "Root pressure only",
            "Leaf pumping"
          ],
          correctAnswer: 1,
          explanation: "Water evaporation from leaves creates negative pressure."
        },
        {
          id: 8,
          question: "What hormone promotes cell elongation?",
          options: [
            "Abscisic acid",
            "Gibberellins",
            "Auxins",
            "Cytokinins"
          ],
          correctAnswer: 2,
          explanation: "Auxins stimulate cell elongation in stems."
        },
        {
          id: 9,
          question: "What stimulates stem elongation and germination?",
          options: [
            "Ethylene",
            "Auxins",
            "Gibberellins",
            "Cytokinins"
          ],
          correctAnswer: 2,
          explanation: "Gibberellins promote stem growth and break seed dormancy."
        },
        {
          id: 10,
          question: "What promotes cell division?",
          options: [
            "Auxins",
            "Cytokinins",
            "Abscisic acid",
            "Gibberellins"
          ],
          correctAnswer: 1,
          explanation: "Cytokinins stimulate cell division in meristems."
        },
        {
          id: 11,
          question: "What induces dormancy and stress responses?",
          options: [
            "Gibberellins",
            "Auxins",
            "Abscisic acid",
            "Ethylene"
          ],
          correctAnswer: 2,
          explanation: "ABA helps plants survive adverse conditions."
        },
        {
          id: 12,
          question: "What promotes fruit ripening?",
          options: [
            "Cytokinins",
            "Gibberellins",
            "Auxins",
            "Ethylene"
          ],
          correctAnswer: 3,
          explanation: "Ethylene accelerates ripening processes."
        },
        {
          id: 13,
          question: "What controls water loss from leaves?",
          options: [
            "Leaf angle",
            "Cuticle thickness only",
            "Hair density",
            "Stomatal regulation"
          ],
          correctAnswer: 3,
          explanation: "Stomata open and close to balance gas exchange and water conservation."
        },
        {
          id: 14,
          question: "What process reduces photosynthetic efficiency?",
          options: [
            "Photosynthesis",
            "Respiration",
            "Photorespiration",
            "Transpiration"
          ],
          correctAnswer: 2,
          explanation: "Photorespiration occurs when rubisco fixes oxygen instead of CO₂."
        },
        {
          id: 15,
          question: "What breaks down glucose in cytoplasm?",
          options: [
            "Glycolysis",
            "Calvin cycle",
            "Electron transport",
            "Krebs cycle"
          ],
          correctAnswer: 0,
          explanation: "Glycolysis is the first step in cellular respiration."
        },
        {
          id: 16,
          question: "What completes oxidation in mitochondria?",
          options: [
            "Glycolysis",
            "Light reactions",
            "Krebs cycle",
            "Calvin cycle"
          ],
          correctAnswer: 2,
          explanation: "The Krebs cycle processes products from glycolysis."
        },
        {
          id: 17,
          question: "What pushes water upward from roots?",
          options: [
            "Leaf suction only",
            "Stem pumping",
            "Root pressure",
            "Gravity"
          ],
          correctAnswer: 2,
          explanation: "Root pressure contributes to early morning water movement."
        },
        {
          id: 18,
          question: "What coordinates plant growth and responses?",
          options: [
            "Human intervention",
            "Hormones",
            "Random processes",
            "Only environmental cues"
          ],
          correctAnswer: 1,
          explanation: "Hormones are chemical messengers that regulate plant processes."
        },
        {
          id: 19,
          question: "What converts light to chemical energy?",
          options: [
            "Transpiration",
            "Germination",
            "Photosynthesis",
            "Respiration"
          ],
          correctAnswer: 2,
          explanation: "Photosynthesis captures and stores energy from sunlight."
        },
        {
          id: 20,
          question: "What releases energy from stored compounds?",
          options: [
            "Photosynthesis",
            "Absorption",
            "Respiration",
            "Transpiration"
          ],
          correctAnswer: 2,
          explanation: "Respiration breaks down organic molecules to release energy."
        }
      ]
    },
    
    {
      id: 4,
      title: "Plant Ecology & Ecosystems",
      completed: false,
      content: `# Module 4: Plant Ecology & Ecosystems

## Plants in Ecological Context
This advanced module examines plant interactions within ecosystems, including competition, mutualism, succession, and biogeochemical cycles.

### Plant Community Dynamics
Plant communities change over time through succession. Primary succession begins on bare substrates, while secondary succession occurs after disturbance.

**Successional stages:**
- **Pioneer species**: First colonizers, often stress-tolerant
- **Intermediate species**: Replace pioneers, increased competition
- **Climax community**: Relatively stable endpoint

### Plant-Plant Interactions
Plants compete for resources and also form cooperative relationships. Understanding these interactions explains community structure.

**Interaction types:**
- **Competition**: Both plants negatively affected
- **Mutualism**: Both plants benefit
- **Commensalism**: One benefits, other unaffected
- **Allelopathy**: Chemical inhibition of neighbors

### Nutrient Cycling Roles
Plants play crucial roles in biogeochemical cycles. They absorb nutrients from soil, incorporate them into tissues, and release them through decomposition.

**Key nutrient cycles:**
- **Carbon cycle**: Photosynthesis and respiration
- **Nitrogen cycle**: Fixation, nitrification, denitrification
- **Phosphorus cycle**: Weathering and biological uptake
- **Water cycle**: Transpiration and interception

### Ecosystem Services Provided by Plants
Plants provide essential services that support life and human well-being. These services have economic and ecological value.

**Major ecosystem services:**
- **Provisioning**: Food, fiber, medicine, fuel
- **Regulating**: Climate regulation, water purification, pollination
- **Supporting**: Soil formation, nutrient cycling, habitat provision
- **Cultural**: Aesthetic, recreational, spiritual values

---

## Key Learning Points
- Plant communities change through successional processes
- Plants interact through competition and cooperation
- Plants drive essential nutrient cycles
- Plants provide valuable ecosystem services

Ecological understanding highlights plant importance in global systems!`,
      
      quiz: [
        {
          id: 1,
          question: "What begins on bare substrates like rock?",
          options: [
            "Secondary succession",
            "Disturbance regime",
            "Primary succession",
            "Climax community"
          ],
          correctAnswer: 2,
          explanation: "Primary succession starts where no soil exists."
        },
        {
          id: 2,
          question: "What occurs after disturbance in existing ecosystems?",
          options: [
            "Secondary succession",
            "Climax stability",
            "Primary succession",
            "Complete destruction"
          ],
          correctAnswer: 0,
          explanation: "Secondary succession rebuilds communities after disturbances."
        },
        {
          id: 3,
          question: "What are first colonizers in succession called?",
          options: [
            "Climax species",
            "Intermediate species",
            "Dominant species",
            "Pioneer species"
          ],
          correctAnswer: 3,
          explanation: "Pioneer species are adapted to colonize harsh conditions."
        },
        {
          id: 4,
          question: "What is a relatively stable endpoint community?",
          options: [
            "Disturbed community",
            "Pioneer community",
            "Intermediate stage",
            "Climax community"
          ],
          correctAnswer: 3,
          explanation: "Climax communities persist until major disturbances."
        },
        {
          id: 5,
          question: "What interaction harms both plants?",
          options: [
            "Allelopathy",
            "Competition",
            "Mutualism",
            "Commensalism"
          ],
          correctAnswer: 1,
          explanation: "Competition occurs when resources are limited."
        },
        {
          id: 6,
          question: "What interaction benefits both plants?",
          options: [
            "Parasitism",
            "Commensalism",
            "Competition",
            "Mutualism"
          ],
          correctAnswer: 3,
          explanation: "Mutualistic relationships provide reciprocal benefits."
        },
        {
          id: 7,
          question: "What is chemical inhibition of neighbors?",
          options: [
            "Allelopathy",
            "Mutualism",
            "Competition",
            "Commensalism"
          ],
          correctAnswer: 0,
          explanation: "Allelopathic plants release chemicals that suppress competitors."
        },
        {
          id: 8,
          question: "What cycle involves photosynthesis and respiration?",
          options: [
            "Water cycle",
            "Nitrogen cycle",
            "Phosphorus cycle",
            "Carbon cycle"
          ],
          correctAnswer: 3,
          explanation: "Carbon moves between atmosphere and living organisms."
        },
        {
          id: 9,
          question: "What cycle includes fixation and denitrification?",
          options: [
            "Nitrogen cycle",
            "Carbon cycle",
            "Water cycle",
            "Phosphorus cycle"
          ],
          correctAnswer: 0,
          explanation: "Nitrogen undergoes various transformations in ecosystems."
        },
        {
          id: 10,
          question: "What is a provisioning ecosystem service?",
          options: [
            "Climate regulation",
            "Soil formation",
            "Food production",
            "Aesthetic value"
          ],
          correctAnswer: 2,
          explanation: "Provisioning services provide material benefits."
        },
        {
          id: 11,
          question: "What is a regulating ecosystem service?",
          options: [
            "Climate regulation",
            "Recreational value",
            "Soil formation",
            "Food production"
          ],
          correctAnswer: 0,
          explanation: "Regulating services maintain environmental conditions."
        },
        {
          id: 12,
          question: "What is a supporting ecosystem service?",
          options: [
            "Food production",
            "Climate regulation",
            "Soil formation",
            "Aesthetic value"
          ],
          correctAnswer: 2,
          explanation: "Supporting services enable other services to exist."
        },
        {
          id: 13,
          question: "What is a cultural ecosystem service?",
          options: [
            "Aesthetic value",
            "Food production",
            "Soil formation",
            "Climate regulation"
          ],
          correctAnswer: 0,
          explanation: "Cultural services provide non-material benefits."
        },
        {
          id: 14,
          question: "What do plants absorb from soil?",
          options: [
            "Air",
            "Nutrients",
            "Sunlight",
            "Only water"
          ],
          correctAnswer: 1,
          explanation: "Plants uptake mineral nutrients through roots."
        },
        {
          id: 15,
          question: "What releases nutrients through decomposition?",
          options: [
            "Transpiration",
            "Photosynthesis",
            "Respiration",
            "Plant tissue breakdown"
          ],
          correctAnswer: 3,
          explanation: "Decomposers break down dead plant material."
        },
        {
          id: 16,
          question: "What involves weathering and biological uptake?",
          options: [
            "Phosphorus cycle",
            "Water cycle",
            "Nitrogen cycle",
            "Carbon cycle"
          ],
          correctAnswer: 0,
          explanation: "Phosphorus cycles through geological and biological processes."
        },
        {
          id: 17,
          question: "What involves transpiration and interception?",
          options: [
            "Water cycle",
            "Nitrogen cycle",
            "Carbon cycle",
            "Phosphorus cycle"
          ],
          correctAnswer: 0,
          explanation: "Plants influence water movement through ecosystems."
        },
        {
          id: 18,
          question: "What explains community structure?",
          options: [
            "Human management only",
            "Random chance",
            "Plant-plant interactions",
            "Only soil type"
          ],
          correctAnswer: 2,
          explanation: "Interactions between plants shape community composition."
        },
        {
          id: 19,
          question: "What changes through successional processes?",
          options: [
            "Climate patterns",
            "Plant communities",
            "Only soil chemistry",
            "Animal behavior only"
          ],
          correctAnswer: 1,
          explanation: "Succession involves predictable changes in plant communities."
        },
        {
          id: 20,
          question: "What drives essential nutrient cycles?",
          options: [
            "Only animals",
            "Geological forces only",
            "Plants",
            "Only microorganisms"
          ],
          correctAnswer: 2,
          explanation: "Plants play central roles in nutrient cycling."
        }
      ]
    },
    
    {
      id: 5,
      title: "Plant Genetics & Evolution",
      completed: false,
      content: `# Module 5: Plant Genetics & Evolution

## Inheritance and Evolutionary Processes
This module covers plant genetics, inheritance patterns, evolutionary mechanisms, and the origins of plant diversity.

### Mendelian Genetics in Plants
Gregor Mendel's work with pea plants established fundamental inheritance principles. These principles apply to many plant traits.

**Mendelian principles:**
- **Law of segregation**: Alleles separate during gamete formation
- **Law of independent assortment**: Genes for different traits assort independently
- **Dominance and recessiveness**: Some alleles mask others

### Chromosomes and Plant Breeding
Plants have characteristic chromosome numbers and structures. Understanding chromosome behavior enables plant breeding and genetic improvement.

**Chromosome concepts:**
- **Diploid (2n)**: Two sets of chromosomes
- **Polyploidy**: Multiple chromosome sets (common in plants)
- **Aneuploidy**: Abnormal chromosome numbers
- **Chromosome mapping**: Locating genes on chromosomes

### Evolutionary Mechanisms
Plants evolve through natural selection, genetic drift, gene flow, and mutation. These processes shape plant adaptation and diversity.

**Evolutionary forces:**
- **Natural selection**: Differential survival and reproduction
- **Genetic drift**: Random changes in allele frequencies
- **Gene flow**: Movement of genes between populations
- **Mutation**: Source of new genetic variation

### Plant Speciation Patterns
New plant species arise through various mechanisms. Speciation may be allopatric (geographic separation) or sympatric (within same area).

**Speciation types:**
- **Allopatric speciation**: Geographic isolation leads to divergence
- **Sympatric speciation**: Reproductive isolation without geographic separation
- **Polyploid speciation**: Instant speciation through chromosome doubling

### Plant Evolutionary History
Plants have a long evolutionary history from aquatic algae to modern angiosperms. Key adaptations enabled colonization of land.

**Major evolutionary events:**
- **Origin of photosynthesis**: Cyanobacteria ancestors
- **Colonization of land**: Development of cuticle, stomata, vascular tissue
- **Seed evolution**: Protection and dispersal advantages
- **Flower evolution**: Enhanced reproductive efficiency

---

## Key Learning Points
- Mendelian principles explain inheritance patterns
- Chromosome behavior enables plant breeding
- Evolutionary mechanisms shape plant diversity
- Plant history shows progressive adaptations

Genetic and evolutionary knowledge explains plant diversity and relationships!`,
      
      quiz: [
        {
          id: 1,
          question: "Who established fundamental inheritance principles with peas?",
          options: [
            "Gregor Mendel",
            "Charles Darwin",
            "Carl Linnaeus",
            "Barbara McClintock"
          ],
          correctAnswer: 0,
          explanation: "Mendel's pea plant experiments revealed basic genetic laws."
        },
        {
          id: 2,
          question: "What is the law of segregation?",
          options: [
            "Chromosomes duplicate before division",
            "Alleles separate during gamete formation",
            "Some alleles are dominant",
            "Genes assort independently"
          ],
          correctAnswer: 1,
          explanation: "Each gamete receives one allele for each gene."
        },
        {
          id: 3,
          question: "What is independent assortment?",
          options: [
            "Genes for different traits assort independently",
            "Some traits are dominant",
            "Chromosomes pair during meiosis",
            "Alleles separate during gamete formation"
          ],
          correctAnswer: 0,
          explanation: "Inheritance of one trait doesn't affect inheritance of another."
        },
        {
          id: 4,
          question: "What does diploid (2n) mean?",
          options: [
            "One set of chromosomes",
            "Multiple chromosome sets",
            "Two sets of chromosomes",
            "Abnormal chromosome number"
          ],
          correctAnswer: 2,
          explanation: "Diploid organisms have two copies of each chromosome."
        },
        {
          id: 5,
          question: "What is polyploidy?",
          options: [
            "Missing chromosomes",
            "Multiple chromosome sets",
            "One chromosome set",
            "Two chromosome sets"
          ],
          correctAnswer: 1,
          explanation: "Polyploidy is common in plants and can create new species."
        },
        {
          id: 6,
          question: "What is natural selection?",
          options: [
            "Source of new variation",
            "Differential survival and reproduction",
            "Random allele frequency changes",
            "Gene movement between populations"
          ],
          correctAnswer: 1,
          explanation: "Traits enhancing survival/reproduction become more common."
        },
        {
          id: 7,
          question: "What is genetic drift?",
          options: [
            "Random changes in allele frequencies",
            "Gene movement",
            "New mutations",
            "Differential survival"
          ],
          correctAnswer: 0,
          explanation: "Drift causes random evolutionary changes, especially in small populations."
        },
        {
          id: 8,
          question: "What is gene flow?",
          options: [
            "New mutations",
            "Movement of genes between populations",
            "Random allele changes",
            "Differential survival"
          ],
          correctAnswer: 1,
          explanation: "Gene flow connects populations genetically."
        },
        {
          id: 9,
          question: "What is mutation?",
          options: [
            "Random allele frequency changes",
            "Gene movement",
            "Differential survival",
            "Source of new genetic variation"
          ],
          correctAnswer: 3,
          explanation: "Mutations create new alleles."
        },
        {
          id: 10,
          question: "What is allopatric speciation?",
          options: [
            "Gradual climate adaptation",
            "Instant chromosome doubling",
            "Geographic isolation leads to divergence",
            "Reproductive isolation without separation"
          ],
          correctAnswer: 2,
          explanation: "Physical separation prevents gene flow between populations."
        },
        {
          id: 11,
          question: "What is sympatric speciation?",
          options: [
            "Geographic isolation leads to divergence",
            "Migration to new areas",
            "Instant chromosome doubling",
            "Reproductive isolation without geographic separation"
          ],
          correctAnswer: 3,
          explanation: "Reproductive barriers evolve within a single population."
        },
        {
          id: 12,
          question: "What is polyploid speciation?",
          options: [
            "Geographic isolation",
            "Reproductive isolation without separation",
            "Instant speciation through chromosome doubling",
            "Gradual divergence"
          ],
          correctAnswer: 2,
          explanation: "Chromosome doubling can create reproductively isolated plants immediately."
        },
        {
          id: 13,
          question: "What enabled plant colonization of land?",
          options: [
            "Cuticle, stomata, vascular tissue",
            "Seed development only",
            "Only chlorophyll development",
            "Flower evolution"
          ],
          correctAnswer: 0,
          explanation: "These adaptations solved challenges of terrestrial life."
        },
        {
          id: 14,
          question: "What provided protection and dispersal advantages?",
          options: [
            "Leaves",
            "Flowers",
            "Roots",
            "Seeds"
          ],
          correctAnswer: 3,
          explanation: "Seeds protect embryos and aid dispersal."
        },
        {
          id: 15,
          question: "What enhanced reproductive efficiency?",
          options: [
            "Flowers",
            "Leaves",
            "Seeds",
            "Roots"
          ],
          correctAnswer: 0,
          explanation: "Flowers attracted animal pollinators."
        },
        {
          id: 16,
          question: "What explains inheritance patterns?",
          options: [
            "Random chance",
            "Only environmental factors",
            "Human selection only",
            "Mendelian principles"
          ],
          correctAnswer: 3,
          explanation: "Mendel's laws describe basic inheritance mechanisms."
        },
        {
          id: 17,
          question: "What enables plant breeding?",
          options: [
            "Climate patterns",
            "Only natural selection",
            "Random mutations",
            "Chromosome behavior understanding"
          ],
          correctAnswer: 3,
          explanation: "Knowledge of genetics allows controlled breeding."
        },
        {
          id: 18,
          question: "What shapes plant diversity?",
          options: [
            "Human gardening only",
            "Only soil chemistry",
            "Evolutionary mechanisms",
            "Random planting"
          ],
          correctAnswer: 2,
          explanation: "Evolutionary processes generate and shape diversity."
        },
        {
          id: 19,
          question: "What shows progressive adaptations?",
          options: [
            "Only current distributions",
            "Fossil locations only",
            "Garden designs",
            "Plant evolutionary history"
          ],
          correctAnswer: 3,
          explanation: "The history of plants reveals adaptation milestones."
        },
        {
          id: 20,
          question: "What explains plant relationships?",
          options: [
            "Growth rates",
            "Only flower colors",
            "Evolutionary knowledge",
            "Leaf sizes"
          ],
          correctAnswer: 2,
          explanation: "Evolutionary history explains how plants are related."
        }
      ]
    },
    
    {
      id: 6,
      title: "Applied Botanical Science",
      completed: false,
      content: `# Module 6: Applied Botanical Science

## Practical Applications of Botanical Knowledge
This final module explores real-world applications of botanical science in agriculture, conservation, medicine, and industry.

### Agricultural Applications
Botanical science improves crop production through breeding, pest management, and sustainable practices. Understanding plant physiology enhances agricultural efficiency.

**Agricultural applications:**
- **Crop breeding**: Developing improved varieties
- **Integrated pest management**: Reducing pesticide use
- **Sustainable agriculture**: Minimizing environmental impact
- **Precision farming**: Optimizing resource use

### Conservation and Restoration
Botanical knowledge guides conservation efforts and habitat restoration. Understanding plant ecology helps protect endangered species and restore degraded ecosystems.

**Conservation applications:**
- **Endangered species protection**: Population monitoring and management
- **Habitat restoration**: Re-establishing native plant communities
- **Invasive species control**: Managing non-native plants
- **Seed banking**: Preserving genetic diversity

### Medicinal and Economic Botany
Plants provide medicines, fibers, dyes, and other valuable products. Ethnobotany studies traditional plant uses, while pharmacognosy explores medicinal properties.

**Economic applications:**
- **Phytomedicine**: Plant-derived medicines
- **Natural products**: Plant-based chemicals for industry
- **Ethnobotany**: Traditional knowledge documentation
- **Horticulture**: Ornamental and food plant cultivation

### Botanical Research Methods
Modern botanical research employs various techniques from field studies to laboratory analyses. Understanding research methods enables scientific contributions.

**Research approaches:**
- **Field surveys**: Documenting plant distributions
- **Herbarium studies**: Using preserved specimens
- **Laboratory techniques**: Microscopy, chromatography, molecular methods
- **Experimental design**: Controlled studies of plant responses

### Professional Botanical Careers
Botanical science offers diverse career paths in research, education, conservation, agriculture, and industry. Professional development includes societies and certifications.

**Career opportunities:**
- **Research botanist**: Academic or government research
- **Conservation officer**: Protected area management
- **Agricultural consultant**: Crop improvement and management
- **Botanical educator**: Teaching and public outreach
- **Industry positions**: Pharmaceutical, seed, horticultural companies

---

## Key Learning Points
- Botanical science improves agricultural practices
- Conservation efforts rely on botanical knowledge
- Plants provide valuable medicines and products
- Research methods enable scientific discovery
- Diverse career opportunities exist in botany

Applying botanical knowledge benefits society and the environment!`,
      
      quiz: [
        {
          id: 1,
          question: "What improves crop production through breeding?",
          options: [
            "Climate change",
            "Only natural selection",
            "Random planting",
            "Agricultural applications"
          ],
          correctAnswer: 3,
          explanation: "Botanical knowledge guides crop improvement."
        },
        {
          id: 2,
          question: "What reduces pesticide use in agriculture?",
          options: [
            "Crop rotation only",
            "Integrated pest management",
            "Only chemical spraying",
            "Complete pest elimination"
          ],
          correctAnswer: 1,
          explanation: "IPM combines multiple approaches for pest control."
        },
        {
          id: 3,
          question: "What minimizes agricultural environmental impact?",
          options: [
            "Chemical-intensive farming",
            "Sustainable agriculture",
            "Large monocultures only",
            "Only maximum production"
          ],
          correctAnswer: 1,
          explanation: "Sustainable practices protect long-term productivity."
        },
        {
          id: 4,
          question: "What protects endangered plant species?",
          options: [
            "Random collection",
            "Only commercial cultivation",
            "Conservation applications",
            "Habitat destruction"
          ],
          correctAnswer: 2,
          explanation: "Botanical knowledge guides species protection."
        },
        {
          id: 5,
          question: "What re-establishes native plant communities?",
          options: [
            "Planting non-natives",
            "Habitat restoration",
            "Soil removal",
            "Only natural succession"
          ],
          correctAnswer: 1,
          explanation: "Restoration actively rebuilds degraded ecosystems."
        },
        {
          id: 6,
          question: "What manages non-native plants?",
          options: [
            "Planting more invasives",
            "Only promoting invasives",
            "Ignoring all plants",
            "Invasive species control"
          ],
          correctAnswer: 3,
          explanation: "Controlling invasives protects native biodiversity."
        },
        {
          id: 7,
          question: "What preserves genetic diversity?",
          options: [
            "Plant destruction",
            "Only field collections",
            "Seed banking",
            "Single variety planting"
          ],
          correctAnswer: 2,
          explanation: "Seed banks safeguard plant genetic resources."
        },
        {
          id: 8,
          question: "What studies traditional plant uses?",
          options: [
            "Genetic engineering",
            "Only laboratory analysis",
            "Ethnobotany",
            "Chemical synthesis"
          ],
          correctAnswer: 2,
          explanation: "Ethnobotany documents cultural plant knowledge."
        },
        {
          id: 9,
          question: "What explores medicinal properties?",
          options: [
            "Climate studies",
            "Only plant identification",
            "Soil chemistry",
            "Pharmacognosy"
          ],
          correctAnswer: 3,
          explanation: "Pharmacognosy studies drugs from natural sources."
        },
        {
          id: 10,
          question: "What documents plant distributions?",
          options: [
            "Historical records only",
            "Only laboratory work",
            "Field surveys",
            "Computer modeling only"
          ],
          correctAnswer: 2,
          explanation: "Field surveys provide distribution data."
        },
        {
          id: 11,
          question: "What uses preserved specimens?",
          options: [
            "Only live plants",
            "Herbarium studies",
            "Oral histories only",
            "Computer simulations"
          ],
          correctAnswer: 1,
          explanation: "Herbaria provide permanent botanical records."
        },
        {
          id: 12,
          question: "What includes microscopy and chromatography?",
          options: [
            "Only field observations",
            "Garden design",
            "Laboratory techniques",
            "Public outreach"
          ],
          correctAnswer: 2,
          explanation: "Laboratory methods analyze plant structure and chemistry."
        },
        {
          id: 13,
          question: "What studies plant responses experimentally?",
          options: [
            "Random guessing",
            "Experimental design",
            "Only natural observation",
            "Historical comparison"
          ],
          correctAnswer: 1,
          explanation: "Controlled experiments test specific hypotheses."
        },
        {
          id: 14,
          question: "What career involves academic research?",
          options: [
            "Retail plant sales",
            "Landscaping only",
            "Research botanist",
            "Only gardening"
          ],
          correctAnswer: 2,
          explanation: "Research botanists conduct scientific studies."
        },
        {
          id: 15,
          question: "What career manages protected areas?",
          options: [
            "Only laboratory work",
            "Plant breeding only",
            "Conservation officer",
            "Pharmaceutical sales"
          ],
          correctAnswer: 2,
          explanation: "Conservation officers protect natural areas."
        },
        {
          id: 16,
          question: "What guides crop improvement?",
          options: [
            "Garden design",
            "Only retail sales",
            "Plant photography",
            "Agricultural consultant"
          ],
          correctAnswer: 3,
          explanation: "Agricultural consultants advise on crop management."
        },
        {
          id: 17,
          question: "What benefits society and environment?",
          options: [
            "Ignoring plants",
            "Applying botanical knowledge",
            "Destroying habitats",
            "Only theoretical study"
          ],
          correctAnswer: 1,
          explanation: "Practical applications create tangible benefits."
        },
        {
          id: 18,
          question: "What relies on botanical knowledge?",
          options: [
            "Automotive design",
            "Computer programming",
            "Only construction",
            "Conservation efforts"
          ],
          correctAnswer: 3,
          explanation: "Effective conservation requires botanical understanding."
        },
        {
          id: 19,
          question: "What provides valuable medicines?",
          options: [
            "Animal products only",
            "Only synthetic chemicals",
            "Minerals only",
            "Plants"
          ],
          correctAnswer: 3,
          explanation: "Many medicines originate from plants."
        },
        {
          id: 20,
          question: "What enables scientific discovery?",
          options: [
            "Only guessing",
            "Research methods",
            "Traditional stories only",
            "Random observation"
          ],
          correctAnswer: 1,
          explanation: "Systematic methods advance botanical science."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM STRUCTURE - 40 Comprehensive Questions
  finalExam: {
    title: "Botanical Science Diploma Final Examination",
    description: "Comprehensive examination covering all six advanced modules. Tests understanding of plant taxonomy, anatomy, physiology, ecology, genetics, and applications.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What is the basic biological unit in plant classification?",
        options: [
          "Genus",
          "Species",
          "Family",
          "Order"
        ],
        correctAnswer: 1,
        explanation: "The species is the fundamental unit of biological classification.",
        module: 1
      },
      {
        id: 2,
        question: "Who developed the binomial nomenclature system?",
        options: [
          "Carl Linnaeus",
          "Charles Darwin",
          "Robert Brown",
          "Gregor Mendel"
        ],
        correctAnswer: 0,
        explanation: "Linnaeus established the modern system of scientific naming.",
        module: 1
      },
      {
        id: 3,
        question: "What does molecular systematics primarily use?",
        options: [
          "Flower color patterns",
          "DNA sequencing and analysis",
          "Growth rate measurements",
          "Only leaf shape comparison"
        ],
        correctAnswer: 1,
        explanation: "Molecular data from DNA provides evidence for relationships.",
        module: 1
      },
      {
        id: 4,
        question: "What is the function of the root cap?",
        options: [
          "Storing nutrients",
          "Anchoring the plant",
          "Protecting the growing tip",
          "Absorbing water"
        ],
        correctAnswer: 2,
        explanation: "The root cap protects delicate meristematic cells.",
        module: 2
      },
      {
        id: 5,
        question: "Where do root cells lengthen?",
        options: [
          "Maturation zone",
          "Root hair region",
          "Root cap area",
          "Zone of elongation"
        ],
        correctAnswer: 3,
        explanation: "Cell elongation occurs just behind the root tip.",
        module: 2
      },
      {
        id: 6,
        question: "What contains xylem and phloem in roots?",
        options: [
          "Root cap",
          "Vascular cylinder",
          "Root hairs",
          "Root epidermis"
        ],
        correctAnswer: 1,
        explanation: "The vascular cylinder contains transport tissues.",
        module: 2
      },
      {
        id: 7,
        question: "Where does photosynthesis occur in plant cells?",
        options: [
          "Nucleus",
          "Mitochondria",
          "Vacuole",
          "Chloroplasts"
        ],
        correctAnswer: 3,
        explanation: "Chloroplasts contain chlorophyll and photosynthetic machinery.",
        module: 3
      },
      {
        id: 8,
        question: "What do light reactions produce?",
        options: [
          "Glucose directly",
          "Only oxygen",
          "ATP and NADPH",
          "Carbon dioxide"
        ],
        correctAnswer: 2,
        explanation: "Light reactions convert light energy to chemical carriers.",
        module: 3
      },
      {
        id: 9,
        question: "What hormone promotes cell elongation?",
        options: [
          "Abscisic acid",
          "Auxins",
          "Gibberellins",
          "Cytokinins"
        ],
        correctAnswer: 1,
        explanation: "Auxins stimulate cell elongation in stems.",
        module: 3
      },
      {
        id: 10,
        question: "What begins on bare substrates like rock?",
        options: [
          "Secondary succession",
          "Primary succession",
          "Disturbance regime",
          "Climax community"
        ],
        correctAnswer: 1,
        explanation: "Primary succession starts where no soil exists.",
        module: 4
      },
      {
        id: 11,
        question: "What are first colonizers in succession called?",
        options: [
          "Climax species",
          "Pioneer species",
          "Dominant species",
          "Intermediate species"
        ],
        correctAnswer: 1,
        explanation: "Pioneer species are adapted to colonize harsh conditions.",
        module: 4
      },
      {
        id: 12,
        question: "What interaction benefits both plants?",
        options: [
          "Mutualism",
          "Commensalism",
          "Competition",
          "Parasitism"
        ],
        correctAnswer: 0,
        explanation: "Mutualistic relationships provide reciprocal benefits.",
        module: 4
      },
      {
        id: 13,
        question: "Who established fundamental inheritance principles with peas?",
        options: [
          "Charles Darwin",
          "Gregor Mendel",
          "Carl Linnaeus",
          "Barbara McClintock"
        ],
        correctAnswer: 1,
        explanation: "Mendel's pea plant experiments revealed basic genetic laws.",
        module: 5
      },
      {
        id: 14,
        question: "What is the law of segregation?",
        options: [
          "Genes assort independently",
          "Some alleles are dominant",
          "Alleles separate during gamete formation",
          "Chromosomes duplicate before division"
        ],
        correctAnswer: 2,
        explanation: "Each gamete receives one allele for each gene.",
        module: 5
      },
      {
        id: 15,
        question: "What is natural selection?",
        options: [
          "Gene movement between populations",
          "Source of new variation",
          "Differential survival and reproduction",
          "Random allele frequency changes"
        ],
        correctAnswer: 2,
        explanation: "Traits enhancing survival/reproduction become more common.",
        module: 5
      },
      {
        id: 16,
        question: "What improves crop production through breeding?",
        options: [
          "Climate change",
          "Random planting",
          "Only natural selection",
          "Agricultural applications"
        ],
        correctAnswer: 3,
        explanation: "Botanical knowledge guides crop improvement.",
        module: 6
      },
      {
        id: 17,
        question: "What reduces pesticide use in agriculture?",
        options: [
          "Integrated pest management",
          "Complete pest elimination",
          "Crop rotation only",
          "Only chemical spraying"
        ],
        correctAnswer: 0,
        explanation: "IPM combines multiple approaches for pest control.",
        module: 6
      },
      {
        id: 18,
        question: "What protects endangered plant species?",
        options: [
          "Conservation applications",
          "Only commercial cultivation",
          "Random collection",
          "Habitat destruction"
        ],
        correctAnswer: 0,
        explanation: "Botanical knowledge guides species protection.",
        module: 6
      },
      {
        id: 19,
        question: "How should scientific names be formatted when printed?",
        options: [
          "Regular font with both words capitalized",
          "Underlined with no capitalization",
          "Always in bold capital letters",
          "Italicized with genus capitalized"
        ],
        correctAnswer: 3,
        explanation: "Italicization and proper capitalization are standard conventions.",
        module: 1
      },
      {
        id: 20,
        question: "What indicates who first published a plant name?",
        options: [
          "Publication date",
          "Type specimen location",
          "Author citation",
          "Herbarium code"
        ],
        correctAnswer: 2,
        explanation: "Author citations credit the original publishing botanist.",
        module: 1
      },
      {
        id: 21,
        question: "What increases surface area for water absorption?",
        options: [
          "Root hairs",
          "Cortex tissue",
          "Vascular cylinder",
          "Root cap"
        ],
        correctAnswer: 0,
        explanation: "Root hairs dramatically increase absorptive surface area.",
        module: 2
      },
      {
        id: 22,
        question: "What is the waxy waterproof layer on leaves?",
        options: [
          "Mesophyll",
          "Stomata",
          "Epidermis",
          "Cuticle"
        ],
        correctAnswer: 3,
        explanation: "The cuticle prevents excessive water loss.",
        module: 2
      },
      {
        id: 23,
        question: "What uses ATP and NADPH to make sugars?",
        options: [
          "Calvin cycle",
          "Krebs cycle",
          "Glycolysis",
          "Light reactions"
        ],
        correctAnswer: 0,
        explanation: "The Calvin cycle fixes carbon using energy from light reactions.",
        module: 3
      },
      {
        id: 24,
        question: "What stimulates stem elongation and germination?",
        options: [
          "Cytokinins",
          "Gibberellins",
          "Ethylene",
          "Auxins"
        ],
        correctAnswer: 1,
        explanation: "Gibberellins promote stem growth and break seed dormancy.",
        module: 3
      },
      {
        id: 25,
        question: "What occurs after disturbance in existing ecosystems?",
        options: [
          "Complete destruction",
          "Primary succession",
          "Climax stability",
          "Secondary succession"
        ],
        correctAnswer: 3,
        explanation: "Secondary succession rebuilds communities after disturbances.",
        module: 4
      },
      {
        id: 26,
        question: "What is a provisioning ecosystem service?",
        options: [
          "Climate regulation",
          "Food production",
          "Aesthetic value",
          "Soil formation"
        ],
        correctAnswer: 1,
        explanation: "Provisioning services provide material benefits.",
        module: 4
      },
      {
        id: 27,
        question: "What is diploid (2n)?",
        options: [
          "Multiple chromosome sets",
          "Abnormal chromosome number",
          "Two sets of chromosomes",
          "One set of chromosomes"
        ],
        correctAnswer: 2,
        explanation: "Diploid organisms have two copies of each chromosome.",
        module: 5
      },
      {
        id: 28,
        question: "What is allopatric speciation?",
        options: [
          "Gradual climate adaptation",
          "Geographic isolation leads to divergence",
          "Instant chromosome doubling",
          "Reproductive isolation without separation"
        ],
        correctAnswer: 1,
        explanation: "Physical separation prevents gene flow between populations.",
        module: 5
      },
      {
        id: 29,
        question: "What re-establishes native plant communities?",
        options: [
          "Soil removal",
          "Habitat restoration",
          "Planting non-natives",
          "Only natural succession"
        ],
        correctAnswer: 1,
        explanation: "Restoration actively rebuilds degraded ecosystems.",
        module: 6
      },
      {
        id: 30,
        question: "What studies traditional plant uses?",
        options: [
          "Genetic engineering",
          "Only laboratory analysis",
          "Ethnobotany",
          "Chemical synthesis"
        ],
        correctAnswer: 2,
        explanation: "Ethnobotany documents cultural plant knowledge.",
        module: 6
      },
      {
        id: 31,
        question: "What do modern taxonomists use besides morphology?",
        options: [
          "Only common names",
          "Genetic data and evolutionary relationships",
          "Historical records only",
          "Garden popularity"
        ],
        correctAnswer: 1,
        explanation: "Multiple evidence types provide more accurate classifications.",
        module: 1
      },
      {
        id: 32,
        question: "What are the male reproductive parts of flowers?",
        options: [
          "Carpels",
          "Petals",
          "Stamens",
          "Sepals"
        ],
        correctAnswer: 2,
        explanation: "Stamens produce pollen.",
        module: 2
      },
      {
        id: 33,
        question: "What promotes fruit ripening?",
        options: [
          "Ethylene",
          "Auxins",
          "Cytokinins",
          "Gibberellins"
        ],
        correctAnswer: 0,
        explanation: "Ethylene accelerates ripening processes.",
        module: 3
      },
      {
        id: 34,
        question: "What is chemical inhibition of neighbors called?",
        options: [
          "Commensalism",
          "Mutualism",
          "Competition",
          "Allelopathy"
        ],
        correctAnswer: 3,
        explanation: "Allelopathic plants release chemicals that suppress competitors.",
        module: 4
      },
      {
        id: 35,
        question: "What is polyploidy?",
        options: [
          "Multiple chromosome sets",
          "Two chromosome sets",
          "Missing chromosomes",
          "One chromosome set"
        ],
        correctAnswer: 0,
        explanation: "Polyploidy is common in plants and can create new species.",
        module: 5
      },
      {
        id: 36,
        question: "What preserves genetic diversity?",
        options: [
          "Only field collections",
          "Single variety planting",
          "Plant destruction",
          "Seed banking"
        ],
        correctAnswer: 3,
        explanation: "Seed banks safeguard plant genetic resources.",
        module: 6
      },
      {
        id: 37,
        question: "What provides universal understanding across languages?",
        options: [
          "Scientific names",
          "Trade names",
          "Local names",
          "Common names"
        ],
        correctAnswer: 0,
        explanation: "Scientific names are standardized internationally.",
        module: 1
      },
      {
        id: 38,
        question: "What reveals evolutionary relationships?",
        options: [
          "Reproductive anatomy",
          "Plant height only",
          "Leaf color",
          "Growth rate"
        ],
        correctAnswer: 0,
        explanation: "Floral structures provide important taxonomic characters.",
        module: 2
      },
      {
        id: 39,
        question: "What coordinates plant growth and responses?",
        options: [
          "Random processes",
          "Hormones",
          "Human intervention",
          "Only environmental cues"
        ],
        correctAnswer: 1,
        explanation: "Hormones are chemical messengers that regulate plant processes.",
        module: 3
      },
      {
        id: 40,
        question: "What benefits society and environment?",
        options: [
          "Destroying habitats",
          "Only theoretical study",
          "Applying botanical knowledge",
          "Ignoring plants"
        ],
        correctAnswer: 2,
        explanation: "Practical applications create tangible benefits.",
        module: 6
      }
    ]
  }
};

// Export for use in your application
export default botanicalScienceDiploma;
