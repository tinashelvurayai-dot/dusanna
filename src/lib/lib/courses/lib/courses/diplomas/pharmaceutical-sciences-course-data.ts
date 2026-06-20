export const pharmaceuticalSciencesDiploma = {
  // COURSE METADATA
  id: "pharmaceutical-sciences-diploma",
  title: "Pharmaceutical Sciences (Diploma)",
  description: "Advanced professional training covering drug discovery, development, manufacturing, quality control, and regulatory affairs in the pharmaceutical industry. This diploma prepares you for careers in pharmaceutical research, quality assurance, regulatory compliance, and drug manufacturing.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  upgradePrice: null,
  icon: "💊",
  badge: "Diploma",
  prerequisites: ["Pharmacy Technician (Certificate)"],

  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Pharmaceutical Chemistry & Drug Design",
      completed: false,
      content: `
# Pharmaceutical Chemistry & Drug Design

## Introduction to Drug Molecules
Welcome to the foundation of pharmaceutical sciences. This module explores the chemical basis of drug action and design. You'll learn how small changes in molecular structure can dramatically affect how a drug works in the body.

### Key Chemical Concepts
- **Chemical bonding** determines how drugs interact with biological targets
- **Molecular geometry** affects drug-receptor interactions
- **Functional groups** give drugs their specific properties
- **Solubility characteristics** influence how drugs are formulated

### Drug Design Strategies
- **Structure-activity relationships** (SAR) guide drug optimization
- **Rational drug design** uses known biological targets
- **Computer-aided drug design** (CADD) accelerates discovery
- **Lead compound identification** from natural or synthetic sources

### Pharmacophore Models
A pharmacophore represents the essential features a molecule needs to have biological activity. This includes:
1. **Hydrogen bond donors** and acceptors
2. **Hydrophobic regions** for membrane penetration
3. **Charged groups** for ionic interactions
4. **Aromatic rings** for stacking interactions

### Drug Metabolism Considerations
- **Phase I metabolism** involves oxidation, reduction, hydrolysis
- **Phase II metabolism** adds polar groups for excretion
- **Metabolic stability** affects drug duration of action
- **Prodrug design** creates inactive forms that become active in the body

### Quality by Design Principles
- **Design space** defines acceptable operating ranges
- **Critical quality attributes** (CQAs) must be controlled
- **Critical process parameters** (CPPs) affect product quality
- **Risk assessment** guides development decisions
`,
      quiz: [
        {
          id: 1,
          question: "What does SAR stand for in drug development?",
          options: [
            "Structure-activity relationship",
            "Safety assessment report",
            "Standard administration route",
            "Systematic analysis review"
          ],
          correctAnswer: 0,
          explanation: "SAR stands for Structure-Activity Relationship, which studies how chemical structure affects biological activity."
        },
        {
          id: 2,
          question: "Which phase of metabolism involves adding polar groups to drugs?",
          options: [
            "Phase IV metabolism",
            "Phase II metabolism",
            "Phase III metabolism",
            "Phase I metabolism"
          ],
          correctAnswer: 1,
          explanation: "Phase II metabolism involves conjugation reactions that add polar groups to make drugs more water-soluble for excretion."
        },
        {
          id: 3,
          question: "What does CADD stand for in pharmaceutical sciences?",
          options: [
            "Computer-aided drug design",
            "Clinical assessment and dosage determination",
            "Comprehensive analytical drug design",
            "Chemical analysis and drug development"
          ],
          correctAnswer: 0,
          explanation: "CADD stands for Computer-Aided Drug Design, which uses computational methods to design and optimize drug molecules."
        },
        {
          id: 4,
          question: "What is a pharmacophore model?",
          options: [
            "A device that measures drug absorption",
            "A type of pharmaceutical packaging",
            "A 3D arrangement of features necessary for biological activity",
            "A method for drug stability testing"
          ],
          correctAnswer: 2,
          explanation: "A pharmacophore model represents the essential structural features a molecule must have to interact with a biological target."
        },
        {
          id: 5,
          question: "Which functional group is commonly involved in hydrogen bonding?",
          options: [
            "Hydroxyl group (-OH)",
            "Phenyl group (benzene ring)",
            "Methyl group (-CH3)",
            "Alkyl chain (-(CH2)n-)"
          ],
          correctAnswer: 0,
          explanation: "Hydroxyl groups (-OH) can act as both hydrogen bond donors and acceptors, making them important for drug-receptor interactions."
        },
        {
          id: 6,
          question: "What does CQA stand for in quality by design?",
          options: [
            "Clinical quality assessment",
            "Critical quality attribute",
            "Chemical quantification analysis",
            "Compliance quality assurance"
          ],
          correctAnswer: 1,
          explanation: "CQA stands for Critical Quality Attribute - a physical, chemical, biological, or microbiological property that must be controlled."
        },
        {
          id: 7,
          question: "What is rational drug design based on?",
          options: [
            "Patient feedback on existing drugs",
            "Known biological targets and their structure",
            "Random screening of chemical compounds",
            "Traditional herbal medicine knowledge"
          ],
          correctAnswer: 1,
          explanation: "Rational drug design uses knowledge of biological targets and their structure to design molecules that will interact with them."
        },
        {
          id: 8,
          question: "Which process involves oxidation, reduction, or hydrolysis of drugs?",
          options: [
            "Drug formulation",
            "Phase I metabolism",
            "Quality control testing",
            "Phase II metabolism"
          ],
          correctAnswer: 1,
          explanation: "Phase I metabolism involves functionalization reactions like oxidation, reduction, and hydrolysis that modify drug molecules."
        },
        {
          id: 9,
          question: "What is the purpose of prodrug design?",
          options: [
            "To create inactive forms that become active in the body",
            "To simplify chemical synthesis",
            "To increase drug patent life",
            "To make drugs more expensive"
          ],
          correctAnswer: 0,
          explanation: "Prodrugs are designed as inactive forms that convert to active drugs in the body, often to improve absorption or reduce side effects."
        },
        {
          id: 10,
          question: "What does CPP stand for in pharmaceutical manufacturing?",
          options: [
            "Clinical patient profile",
            "Critical process parameter",
            "Compliance procedure protocol",
            "Chemical purity percentage"
          ],
          correctAnswer: 1,
          explanation: "CPP stands for Critical Process Parameter - a process variable that must be controlled to ensure product quality."
        },
        {
          id: 11,
          question: "Which molecular feature affects drug-receptor interactions?",
          options: [
            "Melting point",
            "Color of the compound",
            "Molecular weight only",
            "Molecular geometry"
          ],
          correctAnswer: 3,
          explanation: "Molecular geometry (3D shape) determines how well a drug fits into its biological target, affecting binding and activity."
        },
        {
          id: 12,
          question: "What is a lead compound?",
          options: [
            "A drug delivery device",
            "A starting point for drug optimization",
            "A toxic compound to avoid",
            "The final approved drug product"
          ],
          correctAnswer: 1,
          explanation: "A lead compound shows promising biological activity and serves as a starting point for further optimization and development."
        },
        {
          id: 13,
          question: "Which feature is NOT typically part of a pharmacophore model?",
          options: [
            "Charged group",
            "Hydrophobic region",
            "Hydrogen bond donor",
            "Molecular weight"
          ],
          correctAnswer: 3,
          explanation: "Molecular weight is not typically a pharmacophoric feature; pharmacophores focus on functional groups and spatial arrangements."
        },
        {
          id: 14,
          question: "What does 'design space' refer to in quality by design?",
          options: [
            "Computer screen design for quality control",
            "Acceptable ranges of process parameters that ensure quality",
            "Storage space for raw materials",
            "The physical layout of a manufacturing facility"
          ],
          correctAnswer: 1,
          explanation: "Design space defines the multidimensional combination of input variables that have been demonstrated to provide quality assurance."
        },
        {
          id: 15,
          question: "What enhances a drug's ability to cross cell membranes?",
          options: [
            "High water solubility",
            "Large molecular size",
            "Hydrophobic character",
            "Multiple charged groups"
          ],
          correctAnswer: 2,
          explanation: "Hydrophobic (lipid-soluble) drugs can more easily cross cell membranes, which are composed of lipid bilayers."
        },
        {
          id: 16,
          question: "Which analytical technique identifies functional groups in drugs?",
          options: [
            "Weighing balance",
            "Infrared spectroscopy",
            "Microscopy",
            "pH measurement"
          ],
          correctAnswer: 1,
          explanation: "Infrared spectroscopy identifies functional groups based on their characteristic absorption of infrared light."
        },
        {
          id: 17,
          question: "What is molecular docking used for?",
          options: [
            "Packaging finished products",
            "Mixing drug ingredients",
            "Shipping drug containers",
            "Predicting how drugs bind to targets"
          ],
          correctAnswer: 3,
          explanation: "Molecular docking predicts the preferred orientation of a drug when bound to its target, helping in drug design."
        },
        {
          id: 18,
          question: "Which is a common hydrogen bond acceptor?",
          options: [
            "Alkane chain",
            "Carbonyl oxygen",
            "Methyl group",
            "Aromatic ring"
          ],
          correctAnswer: 1,
          explanation: "Carbonyl oxygen atoms (C=O) are common hydrogen bond acceptors in drug molecules and biological targets."
        },
        {
          id: 19,
          question: "What improves during lead optimization?",
          options: [
            "Drug potency and selectivity",
            "Only the manufacturing cost",
            "Only the chemical name",
            "Only the color of the powder"
          ],
          correctAnswer: 0,
          explanation: "Lead optimization improves drug properties including potency, selectivity, safety, and pharmacokinetic profile."
        },
        {
          id: 20,
          question: "What does risk assessment help determine in development?",
          options: [
            "Which parameters need tightest control",
            "How much to charge for the drug",
            "What color to make the tablets",
            "Which country to manufacture in"
          ],
          correctAnswer: 0,
          explanation: "Risk assessment identifies potential factors that could affect quality and helps prioritize control strategies."
        }
      ]
    },
    {
      id: 2,
      title: "Drug Formulation & Delivery Systems",
      completed: false,
      content: `
# Drug Formulation & Delivery Systems

## Introduction to Pharmaceutical Formulations
This module explores how active pharmaceutical ingredients are transformed into safe, effective, and stable dosage forms. You'll learn the science behind different delivery systems and how they affect drug performance.

### Dosage Form Fundamentals
- **Solid dosage forms**: Tablets, capsules, powders, and granules
- **Liquid dosage forms**: Solutions, suspensions, emulsions, and syrups
- **Semi-solid forms**: Creams, ointments, gels, and pastes
- **Specialized delivery**: Transdermal patches, inhalers, and injections

### Tablet Manufacturing Processes
- **Direct compression**: Simplest method for compatible powders
- **Wet granulation**: Improves flow and compression characteristics
- **Dry granulation**: For moisture-sensitive or heat-labile drugs
- **Coating processes**: For protection, taste masking, or controlled release

### Biopharmaceutical Classification System
The BCS categorizes drugs based on:
1. **Solubility**: High or low aqueous solubility
2. **Permeability**: High or low intestinal permeability
3. **Dissolution rate**: How quickly the drug dissolves
4. **Absorption characteristics**: Predicts in vivo performance

### Modified Release Systems
- **Extended release**: Maintains therapeutic effect over longer periods
- **Delayed release**: Releases drug at specific times or locations
- **Pulsatile release**: Provides bursts of drug at predetermined intervals
- **Targeted delivery**: Directs drug to specific tissues or cells

### Novel Drug Delivery Technologies
- **Liposomes**: Lipid vesicles that encapsulate drugs
- **Nanoparticles**: Ultra-small carriers for improved delivery
- **Microneedles**: Painless transdermal delivery systems
- **Implants**: Long-term sustained release devices
`,
      quiz: [
        {
          id: 1,
          question: "What does BCS stand for in pharmaceutical sciences?",
          options: [
            "Biopharmaceutical Classification System",
            "Bioavailability Comparison Study",
            "Bulk Chemical Storage",
            "Basic Compounding Standards"
          ],
          correctAnswer: 0,
          explanation: "BCS stands for Biopharmaceutical Classification System, which categorizes drugs based on solubility and permeability."
        },
        {
          id: 2,
          question: "Which tablet manufacturing method is simplest for compatible powders?",
          options: [
            "Wet granulation",
            "Hot melt extrusion",
            "Dry granulation",
            "Direct compression"
          ],
          correctAnswer: 3,
          explanation: "Direct compression is the simplest method where powders are mixed and compressed without prior granulation."
        },
        {
          id: 3,
          question: "What are liposomes?",
          options: [
            "Quality control instruments",
            "Sugar-based tablet coatings",
            "Types of mixing equipment",
            "Lipid vesicles that encapsulate drugs"
          ],
          correctAnswer: 3,
          explanation: "Liposomes are spherical vesicles made of lipid bilayers that can encapsulate drugs for improved delivery."
        },
        {
          id: 4,
          question: "Which is NOT a solid dosage form?",
          options: [
            "Capsule",
            "Powder",
            "Tablet",
            "Syrup"
          ],
          correctAnswer: 3,
          explanation: "Syrup is a liquid dosage form, while tablets, capsules, and powders are solid dosage forms."
        },
        {
          id: 5,
          question: "What is wet granulation used for?",
          options: [
            "Improving powder flow and compression",
            "Reducing manufacturing time only",
            "Making tablets dissolve faster",
            "Changing tablet color"
          ],
          correctAnswer: 0,
          explanation: "Wet granulation improves powder flow properties, enhances compression characteristics, and reduces dust."
        },
        {
          id: 6,
          question: "Which BCS class has high solubility but low permeability?",
          options: [
            "Class III",
            "Class IV",
            "Class II",
            "Class I"
          ],
          correctAnswer: 0,
          explanation: "BCS Class III drugs have high solubility but low permeability, meaning they dissolve well but are poorly absorbed."
        },
        {
          id: 7,
          question: "What do extended release formulations achieve?",
          options: [
            "Increase drug absorption only",
            "Change drug mechanism of action",
            "Make drugs work instantly",
            "Maintain therapeutic effect over longer periods"
          ],
          correctAnswer: 3,
          explanation: "Extended release formulations maintain therapeutic drug levels over extended periods, reducing dosing frequency."
        },
        {
          id: 8,
          question: "What are nanoparticles used for in drug delivery?",
          options: [
            "Reducing manufacturing costs only",
            "Making drugs taste better",
            "Ultra-small carriers for improved delivery",
            "Increasing tablet size"
          ],
          correctAnswer: 2,
          explanation: "Nanoparticles are submicron-sized carriers that can improve drug solubility, stability, and targeted delivery."
        },
        {
          id: 9,
          question: "Which is a semi-solid dosage form?",
          options: [
            "Ointment",
            "Tablet",
            "Capsule",
            "Injection"
          ],
          correctAnswer: 0,
          explanation: "Ointments are semi-solid preparations for topical application, typically containing medicinal substances."
        },
        {
          id: 10,
          question: "What is delayed release designed to do?",
          options: [
            "Prevent drug from ever being released",
            "Only change drug color",
            "Release drug at specific times or locations",
            "Make drugs work faster always"
          ],
          correctAnswer: 2,
          explanation: "Delayed release systems protect drugs from stomach acid or release them at specific sites in the gastrointestinal tract."
        },
        {
          id: 11,
          question: "What are microneedles used for?",
          options: [
            "Packaging medications",
            "Testing drug purity",
            "Painless transdermal delivery",
            "Mixing drug ingredients"
          ],
          correctAnswer: 2,
          explanation: "Microneedles create microscopic pathways through the skin for painless delivery of drugs without reaching nerves."
        },
        {
          id: 12,
          question: "Which BCS class has both low solubility and low permeability?",
          options: [
            "Class I",
            "Class IV",
            "Class III",
            "Class II"
          ],
          correctAnswer: 1,
          explanation: "BCS Class IV drugs have both low solubility and low permeability, presenting significant formulation challenges."
        },
        {
          id: 13,
          question: "What is dry granulation used for?",
          options: [
            "Moisture-sensitive or heat-labile drugs",
            "All drugs regardless of properties",
            "Only liquid medications",
            "Making drugs taste sweet"
          ],
          correctAnswer: 0,
          explanation: "Dry granulation is used for drugs that degrade with moisture or heat, using compression without liquids."
        },
        {
          id: 14,
          question: "What do tablet coatings provide?",
          options: [
            "Increased weight for pricing",
            "Only color for identification",
            "No functional benefits",
            "Protection, taste masking, or controlled release"
          ],
          correctAnswer: 3,
          explanation: "Coatings can protect drugs from moisture/light, mask unpleasant tastes, control release, or aid swallowing."
        },
        {
          id: 15,
          question: "What is targeted drug delivery?",
          options: [
            "Making drugs work everywhere equally",
            "Only changing drug administration route",
            "Giving drugs to any patient",
            "Directing drug to specific tissues or cells"
          ],
          correctAnswer: 3,
          explanation: "Targeted delivery directs drugs to specific sites to increase efficacy and reduce side effects elsewhere."
        },
        {
          id: 16,
          question: "Which is a liquid dosage form?",
          options: [
            "Suspension",
            "Tablet",
            "Capsule",
            "Ointment"
          ],
          correctAnswer: 0,
          explanation: "Suspensions are liquid preparations containing undissolved drug particles dispersed in a liquid medium."
        },
        {
          id: 17,
          question: "What does pulsatile release provide?",
          options: [
            "Random unpredictable release",
            "Continuous steady release only",
            "No drug release at all",
            "Bursts of drug at predetermined intervals"
          ],
          correctAnswer: 3,
          explanation: "Pulsatile systems release drugs in bursts at specific times, mimicking natural biological rhythms."
        },
        {
          id: 18,
          question: "What are implants used for?",
          options: [
            "Long-term sustained release",
            "One-time dosing forever",
            "Immediate drug action only",
            "Testing drug stability"
          ],
          correctAnswer: 0,
          explanation: "Implants provide controlled, sustained drug release over extended periods, from months to years."
        },
        {
          id: 19,
          question: "Which BCS class has both high solubility and high permeability?",
          options: [
            "Class II",
            "Class I",
            "Class IV",
            "Class III"
          ],
          correctAnswer: 1,
          explanation: "BCS Class I drugs have both high solubility and high permeability, making them generally well-absorbed."
        },
        {
          id: 20,
          question: "What is dissolution rate?",
          options: [
            "How much drug is in a tablet",
            "How fast a drug is absorbed",
            "How quickly a drug dissolves",
            "How long a drug lasts in body"
          ],
          correctAnswer: 2,
          explanation: "Dissolution rate measures how quickly a solid drug dissolves in solution, affecting absorption and onset of action."
        }
      ]
    },
    {
      id: 3,
      title: "Pharmacology & Therapeutic Applications",
      completed: false,
      content: `
# Pharmacology & Therapeutic Applications

## Principles of Drug Action
This module explores how drugs produce their effects in the body. You'll learn about drug-receptor interactions, dose-response relationships, and factors that influence drug efficacy and safety.

### Drug-Receptor Interactions
- **Agonists**: Activate receptors to produce a response
- **Antagonists**: Block receptors to prevent responses
- **Partial agonists**: Produce submaximal responses
- **Inverse agonists**: Produce opposite effects of agonists

### Pharmacokinetic Principles
- **Absorption**: How drugs enter the bloodstream
- **Distribution**: How drugs spread through the body
- **Metabolism**: How drugs are chemically modified
- **Excretion**: How drugs are removed from the body

### Major Drug Classes
- **Antimicrobials**: Fight bacterial, viral, and fungal infections
- **Cardiovascular drugs**: Treat heart and blood vessel conditions
- **CNS agents**: Affect brain and nervous system function
- **Anti-inflammatory drugs**: Reduce inflammation and pain

### Therapeutic Drug Monitoring
- **Trough levels**: Lowest drug concentration before next dose
- **Peak levels**: Highest drug concentration after administration
- **Therapeutic range**: Drug concentrations that are effective but safe
- **Individualized dosing**: Adjusting doses based on patient factors

### Adverse Drug Reactions
- **Type A reactions**: Predictable, dose-dependent effects
- **Type B reactions**: Unpredictable, idiosyncratic reactions
- **Drug interactions**: When drugs affect each other's actions
- **Risk mitigation strategies**: Monitoring and prevention approaches
`,
      quiz: [
        {
          id: 1,
          question: "What do agonist drugs do?",
          options: [
            "Destroy receptor proteins",
            "Block receptors to prevent responses",
            "Activate receptors to produce responses",
            "Have no effect on receptors"
          ],
          correctAnswer: 2,
          explanation: "Agonists bind to and activate receptors, producing a biological response similar to the natural ligand."
        },
        {
          id: 2,
          question: "What does ADME stand for in pharmacology?",
          options: [
            "Administration, Delivery, Measurement, Effect",
            "Analysis, Dosage, Monitoring, Evaluation",
            "Absorption, Distribution, Metabolism, Excretion",
            "Agonist, Antagonist, Modulator, Enhancer"
          ],
          correctAnswer: 2,
          explanation: "ADME stands for Absorption, Distribution, Metabolism, Excretion - the four key pharmacokinetic processes."
        },
        {
          id: 3,
          question: "What are trough drug levels?",
          options: [
            "Average concentration over time",
            "Highest concentration after administration",
            "Total amount in the body",
            "Lowest concentration before next dose"
          ],
          correctAnswer: 3,
          explanation: "Trough levels represent the lowest drug concentration in the bloodstream, usually measured just before the next dose."
        },
        {
          id: 4,
          question: "What do antagonist drugs do?",
          options: [
            "Destroy drug molecules",
            "Block receptors to prevent responses",
            "Activate receptors strongly",
            "Increase receptor numbers"
          ],
          correctAnswer: 1,
          explanation: "Antagonists bind to receptors but don't activate them, blocking natural agonists from producing effects."
        },
        {
          id: 5,
          question: "What is the therapeutic range?",
          options: [
            "Drug concentrations that are effective but safe",
            "Minimum effective dose only",
            "Average dose for all patients",
            "Maximum tolerable dose"
          ],
          correctAnswer: 0,
          explanation: "The therapeutic range is the concentration window where a drug is effective without causing toxicity."
        },
        {
          id: 6,
          question: "What are Type A adverse drug reactions?",
          options: [
            "Placebo effects",
            "Allergic reactions only",
            "Unpredictable idiosyncratic reactions",
            "Predictable, dose-dependent effects"
          ],
          correctAnswer: 3,
          explanation: "Type A reactions are predictable from the drug's known pharmacology and are usually dose-dependent."
        },
        {
          id: 7,
          question: "What is drug distribution?",
          options: [
            "How drugs are manufactured",
            "How drugs are prescribed",
            "How drugs spread through the body",
            "How drugs are packaged"
          ],
          correctAnswer: 2,
          explanation: "Distribution describes how drugs move from bloodstream to tissues and organs throughout the body."
        },
        {
          id: 8,
          question: "What do partial agonists produce?",
          options: [
            "Submaximal responses even at full receptor occupancy",
            "Opposite responses to agonists",
            "No response at all",
            "Stronger responses than full agonists"
          ],
          correctAnswer: 0,
          explanation: "Partial agonists activate receptors but produce less than maximal response even when all receptors are occupied."
        },
        {
          id: 9,
          question: "What are peak drug levels?",
          options: [
            "Average concentration over 24 hours",
            "Highest concentration after administration",
            "Lowest concentration before next dose",
            "Concentration in tissues only"
          ],
          correctAnswer: 1,
          explanation: "Peak levels represent the maximum drug concentration reached after administration, indicating potential for efficacy and toxicity."
        },
        {
          id: 10,
          question: "What are Type B adverse drug reactions?",
          options: [
            "Common side effects for all patients",
            "Expected therapeutic effects",
            "Predictable dose-dependent effects",
            "Unpredictable, idiosyncratic reactions"
          ],
          correctAnswer: 3,
          explanation: "Type B reactions are unpredictable, not related to dose, and often involve immune responses or genetic factors."
        },
        {
          id: 11,
          question: "What is drug metabolism?",
          options: [
            "How drugs are absorbed",
            "How drugs are excreted",
            "Chemical modification of drugs in the body",
            "How drugs are distributed"
          ],
          correctAnswer: 2,
          explanation: "Metabolism involves chemical transformation of drugs, usually making them more water-soluble for excretion."
        },
        {
          id: 12,
          question: "What do inverse agonists produce?",
          options: [
            "Same effects as partial agonists",
            "No effects on their own",
            "Opposite effects of agonists",
            "Enhanced agonist effects"
          ],
          correctAnswer: 2,
          explanation: "Inverse agonists reduce baseline receptor activity, producing effects opposite to those of agonists."
        },
        {
          id: 13,
          question: "What is individualized dosing?",
          options: [
            "Using only maximum doses",
            "Giving same dose to all patients",
            "Adjusting doses based on patient factors",
            "Random dose selection"
          ],
          correctAnswer: 2,
          explanation: "Individualized dosing adjusts medication amounts based on age, weight, kidney/liver function, genetics, and other factors."
        },
        {
          id: 14,
          question: "What are drug interactions?",
          options: [
            "When drugs affect each other's actions",
            "How doctors prescribe drugs",
            "How drugs are manufactured together",
            "How patients take drugs"
          ],
          correctAnswer: 0,
          explanation: "Drug interactions occur when one drug affects the activity, effectiveness, or toxicity of another drug."
        },
        {
          id: 15,
          question: "What is drug excretion?",
          options: [
            "Metabolism of drugs in liver",
            "Removal of drugs from the body",
            "Absorption of drugs into body",
            "Distribution of drugs in body"
          ],
          correctAnswer: 1,
          explanation: "Excretion is the process by which drugs and their metabolites are eliminated from the body, mainly through kidneys or liver."
        },
        {
          id: 16,
          question: "Which are cardiovascular drugs?",
          options: [
            "Treat heart and blood vessel conditions",
            "Only reduce pain",
            "Only treat infections",
            "Only affect the brain"
          ],
          correctAnswer: 0,
          explanation: "Cardiovascular drugs include medications for hypertension, heart failure, arrhythmias, and other heart/blood vessel disorders."
        },
        {
          id: 17,
          question: "What are CNS agents?",
          options: [
            "Drugs for skin conditions only",
            "Drugs affecting brain and nervous system",
            "Muscle-building drugs",
            "Digestive system medications"
          ],
          correctAnswer: 1,
          explanation: "CNS (Central Nervous System) agents include antidepressants, antipsychotics, sedatives, and other drugs affecting brain function."
        },
        {
          id: 18,
          question: "What are antimicrobials?",
          options: [
            "Drugs fighting infections",
            "Drugs for mental health",
            "Drugs for heart conditions",
            "Drugs for pain only"
          ],
          correctAnswer: 0,
          explanation: "Antimicrobials include antibiotics, antivirals, antifungals, and antiparasitics that fight various infections."
        },
        {
          id: 19,
          question: "What are risk mitigation strategies?",
          options: [
            "Not monitoring patients",
            "Monitoring and prevention approaches",
            "Using maximum doses always",
            "Ignoring potential problems"
          ],
          correctAnswer: 1,
          explanation: "Risk mitigation includes regular monitoring, dose adjustments, patient education, and avoiding dangerous combinations."
        },
        {
          id: 20,
          question: "What are anti-inflammatory drugs?",
          options: [
            "Drugs for heart rate only",
            "Drugs reducing inflammation and pain",
            "Drugs for infections only",
            "Drugs increasing inflammation"
          ],
          correctAnswer: 1,
          explanation: "Anti-inflammatory drugs reduce inflammation, swelling, and pain, including NSAIDs and corticosteroids."
        }
      ]
    },
    {
      id: 4,
      title: "Pharmaceutical Analysis & Quality Control",
      completed: false,
      content: `
# Pharmaceutical Analysis & Quality Control

## Quality Assurance Principles
This module covers the analytical methods and quality systems that ensure pharmaceutical products are safe, effective, and consistent. You'll learn about regulatory requirements and testing methodologies.

### Analytical Techniques
- **Chromatography**: HPLC, GC for separation and quantification
- **Spectroscopy**: UV-Vis, IR, NMR for structural analysis
- **Mass spectrometry**: For molecular weight and structure determination
- **Thermal analysis**: DSC, TGA for physical characterization

### Quality Control Testing
- **Identity tests**: Confirm the correct substance is present
- **Assay tests**: Measure active ingredient quantity
- **Impurity tests**: Detect and quantify related substances
- **Physical tests**: Hardness, friability, dissolution for solids

### Good Manufacturing Practice
GMP ensures products are consistently produced and controlled:
1. **Documentation control**: Complete records of all processes
2. **Personnel training**: Qualified staff with ongoing education
3. **Facility design**: Suitable premises and equipment
4. **Process validation**: Proof that processes work consistently

### Stability Studies
- **Real-time studies**: Storage under intended conditions
- **Accelerated studies**: Elevated temperature/humidity to predict shelf life
- **Photostability testing**: Effects of light exposure
- **Climatic zones**: Different storage conditions worldwide

### Microbiological Quality
- **Sterility testing**: For injectable and ophthalmic products
- **Microbial limits**: Acceptable levels for non-sterile products
- **Endotoxin testing**: For pyrogenic substances
- **Preservative effectiveness**: Ensuring antimicrobial activity
`,
      quiz: [
        {
          id: 1,
          question: "What does HPLC stand for?",
          options: [
            "High Performance Liquid Chromatography",
            "Heavy Particle Light Chromatography",
            "Human Pharmaceutical License Code",
            "High Pressure Liquid Container"
          ],
          correctAnswer: 0,
          explanation: "HPLC stands for High Performance Liquid Chromatography, a separation technique used to analyze drug compounds."
        },
        {
          id: 2,
          question: "What does GMP ensure?",
          options: [
            "Fastest manufacturing speed",
            "Only low production costs",
            "Consistent production and control of products",
            "Attractive packaging only"
          ],
          correctAnswer: 2,
          explanation: "Good Manufacturing Practice ensures pharmaceutical products are consistently produced and controlled to quality standards."
        },
        {
          id: 3,
          question: "What are identity tests for?",
          options: [
            "Measuring exact quantity only",
            "Confirming the correct substance is present",
            "Testing drug effects in humans",
            "Checking package appearance"
          ],
          correctAnswer: 1,
          explanation: "Identity tests verify that the material is what it claims to be, using specific characteristics like spectra or chromatography."
        },
        {
          id: 4,
          question: "What does GC stand for?",
          options: [
            "General Chemistry",
            "Gradient Centrifugation",
            "Gas Chromatography",
            "Good Compliance"
          ],
          correctAnswer: 2,
          explanation: "GC stands for Gas Chromatography, used to separate and analyze volatile compounds in pharmaceuticals."
        },
        {
          id: 5,
          question: "What are accelerated stability studies?",
          options: [
            "Real-time normal storage testing",
            "Testing in actual market conditions",
            "Elevated conditions to predict shelf life",
            "Only testing chemical purity"
          ],
          correctAnswer: 2,
          explanation: "Accelerated studies use higher temperature/humidity to rapidly predict long-term stability and shelf life."
        },
        {
          id: 6,
          question: "What is process validation?",
          options: [
            "Checking equipment appearance",
            "Testing raw material quality only",
            "Employee performance reviews",
            "Proof that processes work consistently"
          ],
          correctAnswer: 3,
          explanation: "Process validation provides documented evidence that a process consistently produces products meeting specifications."
        },
        {
          id: 7,
          question: "What does UV-Vis spectroscopy measure?",
          options: [
            "Molecular weight directly",
            "Melting point of compounds",
            "Light absorption by molecules",
            "Particle size distribution"
          ],
          correctAnswer: 2,
          explanation: "UV-Vis spectroscopy measures how much ultraviolet or visible light a compound absorbs, used for quantification and identification."
        },
        {
          id: 8,
          question: "What are assay tests?",
          options: [
            "Test patient responses",
            "Test package durability",
            "Measure active ingredient quantity",
            "Check drug color only"
          ],
          correctAnswer: 2,
          explanation: "Assay tests quantitatively determine the amount of active pharmaceutical ingredient in a dosage form."
        },
        {
          id: 9,
          question: "What is sterility testing for?",
          options: [
            "Only topical creams",
            "All oral medications",
            "Injectable and ophthalmic products",
            "Packaging materials only"
          ],
          correctAnswer: 2,
          explanation: "Sterility testing confirms absence of viable microorganisms in sterile products like injections and eye preparations."
        },
        {
          id: 10,
          question: "What does NMR stand for?",
          options: [
            "Neutralization Measurement Resource",
            "Normalized Mass Ratio",
            "Nuclear Magnetic Resonance",
            "National Medication Registry"
          ],
          correctAnswer: 2,
          explanation: "NMR stands for Nuclear Magnetic Resonance, a technique for determining molecular structure and purity."
        },
        {
          id: 11,
          question: "What are impurity tests?",
          options: [
            "Detect and quantify related substances",
            "Test manufacturing equipment",
            "Check package impurities",
            "Test active ingredient only"
          ],
          correctAnswer: 0,
          explanation: "Impurity tests identify and measure unwanted substances like starting materials, byproducts, or degradation products."
        },
        {
          id: 12,
          question: "What is photostability testing?",
          options: [
            "Testing packaging transparency",
            "Measuring light production",
            "Effects of light exposure on drugs",
            "Testing in dark conditions only"
          ],
          correctAnswer: 2,
          explanation: "Photostability testing evaluates how drug substances and products degrade when exposed to light."
        },
        {
          id: 13,
          question: "What does DSC measure?",
          options: [
            "Heat flow during phase transitions",
            "Light absorption only",
            "Electrical conductivity",
            "Magnetic properties"
          ],
          correctAnswer: 0,
          explanation: "DSC (Differential Scanning Calorimetry) measures heat flow during melting, crystallization, or other transitions."
        },
        {
          id: 14,
          question: "What are physical tests for solids?",
          options: [
            "Only chemical composition",
            "Only color measurement",
            "Hardness, friability, dissolution",
            "Only biological activity"
          ],
          correctAnswer: 2,
          explanation: "Physical tests include hardness (crushing strength), friability (tendency to break), and dissolution (release rate)."
        },
        {
          id: 15,
          question: "What are microbial limits?",
          options: [
            "No microbial testing needed",
            "Only for injectable products",
            "Complete sterility requirements",
            "Acceptable microbe levels for non-sterile products"
          ],
          correctAnswer: 3,
          explanation: "Microbial limits define maximum acceptable levels of microorganisms in non-sterile pharmaceutical products."
        },
        {
          id: 16,
          question: "What is mass spectrometry used for?",
          options: [
            "Measuring volume only",
            "Only weighing samples",
            "Testing package strength",
            "Molecular weight and structure determination"
          ],
          correctAnswer: 3,
          explanation: "Mass spectrometry identifies compounds by measuring mass-to-charge ratios and fragmentation patterns."
        },
        {
          id: 17,
          question: "What is documentation control?",
          options: [
            "Only final product records",
            "Complete records of all processes",
            "Informal notes only",
            "No documentation needed"
          ],
          correctAnswer: 1,
          explanation: "Documentation control maintains complete, accurate records of manufacturing, testing, and distribution for traceability."
        },
        {
          id: 18,
          question: "What are endotoxin tests for?",
          options: [
            "Physical contaminants",
            "Pyrogenic substances from bacteria",
            "Chemical impurities only",
            "Microbial growth promotion"
          ],
          correctAnswer: 1,
          explanation: "Endotoxin tests detect fever-causing substances from Gram-negative bacteria, critical for injectable products."
        },
        {
          id: 19,
          question: "What does TGA measure?",
          options: [
            "Electrical resistance",
            "Light transmission only",
            "Weight changes with temperature",
            "Magnetic susceptibility"
          ],
          correctAnswer: 2,
          explanation: "TGA (Thermogravimetric Analysis) measures how a sample's weight changes as temperature increases."
        },
        {
          id: 20,
          question: "What is preservative effectiveness testing?",
          options: [
            "Measuring preservative color",
            "Testing preservative taste",
            "Checking preservative cost",
            "Ensuring antimicrobial activity in products"
          ],
          correctAnswer: 3,
          explanation: "This testing verifies that preservatives in multi-dose products prevent microbial growth throughout shelf life."
        }
      ]
    },
    {
      id: 5,
      title: "Regulatory Affairs & Compliance",
      completed: false,
      content: `
# Regulatory Affairs & Compliance

## Pharmaceutical Regulation Fundamentals
This module covers the regulatory framework governing drug development, approval, manufacturing, and marketing. You'll learn about major regulatory agencies and their requirements.

### Major Regulatory Agencies
- **FDA**: U.S. Food and Drug Administration
- **EMA**: European Medicines Agency
- **Health Canada**: Canada's health products regulator
- **PMDA**: Japan's Pharmaceuticals and Medical Devices Agency

### Drug Development Pathway
- **Preclinical testing**: Laboratory and animal studies
- **Clinical trials**: Phase I-III human studies
- **New Drug Application**: Submission for marketing approval
- **Post-marketing surveillance**: Phase IV monitoring after approval

### Regulatory Submissions
- **IND Application**: Investigational New Drug application
- **NDA/BLA**: New Drug Application/Biologics License Application
- **ANDA**: Abbreviated New Drug Application for generics
- **CTD format**: Common Technical Document structure

### Quality Systems
- **cGMP**: Current Good Manufacturing Practice regulations
- **GLP**: Good Laboratory Practice for nonclinical studies
- **GCP**: Good Clinical Practice for clinical trials
- **GDP**: Good Distribution Practice for supply chain

### Compliance Requirements
- **Adverse event reporting**: Timely submission of safety data
- **Labeling regulations**: Accurate and complete product information
- **Advertising controls**: Truthful promotion of approved uses
- **Inspections**: Regulatory audits of facilities and records
`,
      quiz: [
        {
          id: 1,
          question: "What does FDA stand for?",
          options: [
            "Pharmaceutical Development Association",
            "Federal Drug Agency",
            "Food Distribution Authority",
            "Food and Drug Administration"
          ],
          correctAnswer: 3,
          explanation: "FDA stands for Food and Drug Administration, the U.S. agency regulating pharmaceuticals, food, and medical devices."
        },
        {
          id: 2,
          question: "What are preclinical tests?",
          options: [
            "First human tests",
            "Packaging design tests",
            "Laboratory and animal studies",
            "Market research studies"
          ],
          correctAnswer: 2,
          explanation: "Preclinical testing involves laboratory and animal studies to assess safety before human trials."
        },
        {
          id: 3,
          question: "What does IND stand for?",
          options: [
            "Initial New Dosage",
            "Investigative New Device",
            "Investigational New Drug",
            "International New Drug"
          ],
          correctAnswer: 2,
          explanation: "IND stands for Investigational New Drug, an application to begin human clinical trials."
        },
        {
          id: 4,
          question: "What does EMA stand for?",
          options: [
            "European Medical Association",
            "European Manufacturing Authority",
            "European Medicines Agency",
            "Emergency Medicine Administration"
          ],
          correctAnswer: 2,
          explanation: "EMA stands for European Medicines Agency, responsible for scientific evaluation of medicines in the EU."
        },
        {
          id: 5,
          question: "What are clinical trials?",
          options: [
            "Market surveys only",
            "Only animal studies",
            "Phase I-III human studies",
            "Laboratory chemical tests"
          ],
          correctAnswer: 2,
          explanation: "Clinical trials are systematic studies in human volunteers to evaluate safety and efficacy of investigational drugs."
        },
        {
          id: 6,
          question: "What does cGMP stand for?",
          options: [
            "Canadian Good Medicine Practice",
            "Comprehensive Good Manufacturing",
            "Clinical Good Medical Practice",
            "Current Good Manufacturing Practice"
          ],
          correctAnswer: 3,
          explanation: "cGMP stands for Current Good Manufacturing Practice, regulations ensuring proper design and control of manufacturing."
        },
        {
          id: 7,
          question: "What does NDA stand for?",
          options: [
            "New Dosage Administration",
            "National Drug Agency",
            "Nonprescription Drug Approval",
            "New Drug Application"
          ],
          correctAnswer: 3,
          explanation: "NDA stands for New Drug Application, submitted to FDA for approval to market a new pharmaceutical."
        },
        {
          id: 8,
          question: "What is post-marketing surveillance?",
          options: [
            "Phase IV monitoring after approval",
            "Clinical trial phase I",
            "Manufacturing process development",
            "Preclinical testing"
          ],
          correctAnswer: 0,
          explanation: "Post-marketing surveillance monitors drug safety in larger populations after approval (Phase IV)."
        },
        {
          id: 9,
          question: "What does GLP stand for?",
          options: [
            "Government Licensing Procedure",
            "General Laboratory Protocol",
            "Good Legal Practice",
            "Good Laboratory Practice"
          ],
          correctAnswer: 3,
          explanation: "GLP stands for Good Laboratory Practice, regulations for nonclinical laboratory studies supporting regulatory submissions."
        },
        {
          id: 10,
          question: "What does ANDA stand for?",
          options: [
            "Advanced New Drug Approval",
            "Abbreviated New Drug Application",
            "American New Drug Application",
            "Additional New Drug Analysis"
          ],
          correctAnswer: 1,
          explanation: "ANDA stands for Abbreviated New Drug Application, for generic drugs demonstrating equivalence to approved products."
        },
        {
          id: 11,
          question: "What is Health Canada?",
          options: [
            "U.S. health insurance program",
            "A Canadian hospital network",
            "Canada's health products regulator",
            "European health organization"
          ],
          correctAnswer: 2,
          explanation: "Health Canada is the federal department responsible for national public health and regulating health products."
        },
        {
          id: 12,
          question: "What does GCP stand for?",
          options: [
            "General Clinical Protocol",
            "Good Clinical Practice",
            "Good Compliance Practice",
            "Government Clinical Program"
          ],
          correctAnswer: 1,
          explanation: "GCP stands for Good Clinical Practice, international ethical and scientific standards for clinical trials."
        },
        {
          id: 13,
          question: "What does CTD stand for?",
          options: [
            "Clinical Trial Documentation",
            "Common Technical Document",
            "Chemical Technical Dossier",
            "Comprehensive Test Data"
          ],
          correctAnswer: 1,
          explanation: "CTD stands for Common Technical Document, a standardized format for regulatory submissions internationally."
        },
        {
          id: 14,
          question: "What is adverse event reporting?",
          options: [
            "Timely submission of safety data",
            "Reporting drug effectiveness",
            "Marketing success reports",
            "Manufacturing cost reports"
          ],
          correctAnswer: 0,
          explanation: "Adverse event reporting involves documenting and submitting information about unexpected or harmful effects of drugs."
        },
        {
          id: 15,
          question: "What does PMDA stand for?",
          options: [
            "Primary Medical Device Administration",
            "Pacific Medical Development Authority",
            "Pharmaceuticals and Medical Devices Agency",
            "Pharmaceutical Manufacturing and Distribution Association"
          ],
          correctAnswer: 2,
          explanation: "PMDA stands for Pharmaceuticals and Medical Devices Agency, Japan's regulatory agency for medical products."
        },
        {
          id: 16,
          question: "What does GDP stand for in pharmaceuticals?",
          options: [
            "General Drug Protocol",
            "Good Documentation Practice",
            "Good Distribution Practice",
            "Gross Domestic Product"
          ],
          correctAnswer: 2,
          explanation: "GDP stands for Good Distribution Practice, guidelines for proper distribution of pharmaceutical products."
        },
        {
          id: 17,
          question: "What are labeling regulations for?",
          options: [
            "Attractive package design only",
            "Minimal information required",
            "Accurate and complete product information",
            "No specific requirements"
          ],
          correctAnswer: 2,
          explanation: "Labeling regulations ensure patients and healthcare providers receive complete, accurate information about drugs."
        },
        {
          id: 18,
          question: "What does BLA stand for?",
          options: [
            "Business License Application",
            "Basic License Agreement",
            "Biologics License Application",
            "Biological Laboratory Assessment"
          ],
          correctAnswer: 2,
          explanation: "BLA stands for Biologics License Application, for approval of biological products like vaccines or blood products."
        },
        {
          id: 19,
          question: "What are advertising controls?",
          options: [
            "Only price advertising rules",
            "Truthful promotion of approved uses",
            "No restrictions on advertising",
            "Packaging appearance rules"
          ],
          correctAnswer: 1,
          explanation: "Advertising controls ensure drug promotion is truthful, balanced, and limited to approved indications."
        },
        {
          id: 20,
          question: "What are regulatory inspections?",
          options: [
            "Marketing effectiveness studies",
            "Employee performance reviews",
            "Audits of facilities and records",
            "Only financial audits"
          ],
          correctAnswer: 2,
          explanation: "Regulatory inspections verify compliance with regulations through examination of facilities, processes, and records."
        }
      ]
    },
    {
      id: 6,
      title: "Industrial Pharmacy & Manufacturing",
      completed: false,
      content: `
# Industrial Pharmacy & Manufacturing

## Pharmaceutical Manufacturing Overview
This module covers large-scale production of pharmaceutical products, including facility design, process optimization, and technological advancements in manufacturing.

### Manufacturing Facilities
- **Cleanroom classifications**: Grade A-D for different operations
- **HVAC systems**: Heating, ventilation, air conditioning controls
- **Water systems**: Purified water and WFI production
- **Material flow**: Unidirectional flow to prevent contamination

### Production Processes
- **Batch manufacturing**: Discrete production lots with testing
- **Continuous manufacturing**: Ongoing production with real-time monitoring
- **Process analytical technology**: Real-time quality monitoring
- **Scale-up considerations**: Laboratory to commercial production

### Packaging Operations
- **Primary packaging**: Direct contact with product (bottles, blisters)
- **Secondary packaging**: Outer boxes, labels, leaflets
- **Serialization**: Unique identifiers for tracking
- **Tamper evidence**: Features showing if package was opened

### Technology Advancements
- **Process intensification**: More efficient manufacturing methods
- **Automation and robotics**: Reduced human intervention
- **Digital twins**: Virtual models of manufacturing processes
- **Industry 4.0**: Smart, connected manufacturing systems

### Validation and Qualification
- **Equipment qualification**: IQ, OQ, PQ of manufacturing equipment
- **Process validation**: Three-batch validation typically
- **Cleaning validation**: Proof of effective cleaning procedures
- **Computer system validation**: For automated and controlled systems
`,
      quiz: [
        {
          id: 1,
          question: "What are cleanroom classifications?",
          options: [
            "Product quality grades",
            "Color codes for rooms",
            "Employee skill levels",
            "Grade A-D for different operations"
          ],
          correctAnswer: 3,
          explanation: "Cleanrooms are classified Grade A (highest) to D based on permitted particle counts for different manufacturing steps."
        },
        {
          id: 2,
          question: "What does HVAC stand for?",
          options: [
            "Heating, Ventilation, Air Conditioning",
            "Human Verification and Compliance",
            "High Volume Air Control",
            "Hazardous Vapor Containment"
          ],
          correctAnswer: 0,
          explanation: "HVAC stands for Heating, Ventilation, and Air Conditioning, critical for controlling cleanroom environments."
        },
        {
          id: 3,
          question: "What is batch manufacturing?",
          options: [
            "Manual small-scale production only",
            "Discrete production lots with testing",
            "Continuous non-stop production",
            "Experimental trial production"
          ],
          correctAnswer: 1,
          explanation: "Batch manufacturing produces discrete quantities with defined start/end points, each batch tested before release."
        },
        {
          id: 4,
          question: "What does WFI stand for?",
          options: [
            "Water Filtering Installation",
            "Weekly Facility Inspection",
            "Waste Fluid Incineration",
            "Water for Injection"
          ],
          correctAnswer: 3,
          explanation: "WFI stands for Water for Injection, highly purified water used in parenteral (injectable) products."
        },
        {
          id: 5,
          question: "What is continuous manufacturing?",
          options: [
            "Manual production methods",
            "Ongoing production with real-time monitoring",
            "Batch production only",
            "Experimental laboratory scale"
          ],
          correctAnswer: 1,
          explanation: "Continuous manufacturing operates without interruption, with materials constantly fed in and product continuously removed."
        },
        {
          id: 6,
          question: "What does PAT stand for?",
          options: [
            "Package Analysis Technology",
            "Pharmaceutical Approval Testing",
            "Process Analytical Technology",
            "Product Assessment Testing"
          ],
          correctAnswer: 2,
          explanation: "PAT stands for Process Analytical Technology, using real-time monitoring to ensure quality during manufacturing."
        },
        {
          id: 7,
          question: "What is primary packaging?",
          options: [
            "Direct contact with product",
            "Outer boxes only",
            "Shipping containers",
            "Pallet wrapping"
          ],
          correctAnswer: 0,
          explanation: "Primary packaging has direct contact with the product, like bottles, blister packs, vials, or syringes."
        },
        {
          id: 8,
          question: "What is material flow in facilities?",
          options: [
            "Only employee movement",
            "Air flow patterns only",
            "Unidirectional flow to prevent contamination",
            "Random movement of materials"
          ],
          correctAnswer: 2,
          explanation: "Material flow designs ensure one-direction movement from raw materials to finished goods, preventing cross-contamination."
        },
        {
          id: 9,
          question: "What is serialization?",
          options: [
            "Batch size numbering",
            "Unique identifiers for tracking",
            "Employee serial numbers",
            "Production line numbering"
          ],
          correctAnswer: 1,
          explanation: "Serialization assigns unique codes to individual drug packages for tracking through the supply chain."
        },
        {
          id: 10,
          question: "What are scale-up considerations?",
          options: [
            "Only increasing batch size",
            "No changes needed",
            "Only equipment size changes",
            "Laboratory to commercial production adjustments"
          ],
          correctAnswer: 3,
          explanation: "Scale-up involves adjusting processes from small laboratory scale to full commercial production while maintaining quality."
        },
        {
          id: 11,
          question: "What is process intensification?",
          options: [
            "More manual operations",
            "Longer production times",
            "Larger equipment only",
            "More efficient manufacturing methods"
          ],
          correctAnswer: 3,
          explanation: "Process intensification develops more efficient, smaller, faster, and safer manufacturing processes."
        },
        {
          id: 12,
          question: "What is tamper evidence?",
          options: [
            "Features showing if package was opened",
            "Package appearance only",
            "Package strength testing",
            "Child resistance only"
          ],
          correctAnswer: 0,
          explanation: "Tamper-evident features show visible signs if a package has been opened, protecting against malicious tampering."
        },
        {
          id: 13,
          question: "What are digital twins?",
          options: [
            "Duplicate product samples",
            "Copy machines in facilities",
            "Virtual models of manufacturing processes",
            "Identical manufacturing lines"
          ],
          correctAnswer: 2,
          explanation: "Digital twins are virtual replicas of physical systems used for simulation, analysis, and optimization."
        },
        {
          id: 14,
          question: "What does IQ/OQ/PQ stand for?",
          options: [
            "Internal Quality/Output Quantity/Product Quality",
            "Inspection Quality/Operation Quality/Production Quality",
            "Initial Query/Operational Question/Performance Query",
            "Installation/Operational/Performance Qualification"
          ],
          correctAnswer: 3,
          explanation: "IQ (Installation), OQ (Operational), PQ (Performance) Qualification ensures equipment is properly installed and works correctly."
        },
        {
          id: 15,
          question: "What is Industry 4.0?",
          options: [
            "Smart, connected manufacturing systems",
            "Fourth industrial location",
            "Four-shift operations",
            "Four quality checks"
          ],
          correctAnswer: 0,
          explanation: "Industry 4.0 refers to smart, connected manufacturing using IoT, automation, real-time data, and AI."
        },
        {
          id: 16,
          question: "What is secondary packaging?",
          options: [
            "Shipping pallets only",
            "Direct product containers",
            "Raw material packaging",
            "Outer boxes, labels, leaflets"
          ],
          correctAnswer: 3,
          explanation: "Secondary packaging contains the primary packaged product and includes cartons, labels, and patient information leaflets."
        },
        {
          id: 17,
          question: "What is process validation typically?",
          options: [
            "One-batch validation only",
            "Ten-batch minimum",
            "No batch validation needed",
            "Three-batch validation"
          ],
          correctAnswer: 3,
          explanation: "Process validation typically involves three consecutive successful production batches to demonstrate consistency."
        },
        {
          id: 18,
          question: "What is automation in manufacturing?",
          options: [
            "Only using computers for design",
            "Eliminating all equipment",
            "Reduced human intervention",
            "Increased manual work"
          ],
          correctAnswer: 2,
          explanation: "Automation uses control systems and equipment to operate processes with minimal human intervention."
        },
        {
          id: 19,
          question: "What is cleaning validation?",
          options: [
            "Only visual cleanliness",
            "Cleaning supply inventory",
            "Proof of effective cleaning procedures",
            "Employee cleaning schedules"
          ],
          correctAnswer: 2,
          explanation: "Cleaning validation proves that cleaning procedures effectively remove product residues to prevent cross-contamination."
        },
        {
          id: 20,
          question: "What is computer system validation?",
          options: [
            "Software appearance only",
            "For automated and controlled systems",
            "Only computer hardware checks",
            "Employee computer skills"
          ],
          correctAnswer: 1,
          explanation: "Computer system validation ensures computerized systems consistently perform as intended in regulated environments."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "pharmaceutical-sciences-diploma-exam",
    title: "Pharmaceutical Sciences Diploma Final Examination",
    description: "Comprehensive examination covering all six modules of the Pharmaceutical Sciences Diploma program. This exam tests your knowledge of drug design, formulation, pharmacology, analysis, regulations, and manufacturing.",
    passingScore: 70,
    timeLimit: 120, // minutes
    questions: [
      {
        id: 1,
        question: "What does SAR stand for in drug development?",
        options: [
          "Standard administration route",
          "Structure-activity relationship",
          "Safety assessment report",
          "Systematic analysis review"
        ],
        correctAnswer: 1,
        explanation: "From Module 1: SAR stands for Structure-Activity Relationship, which studies how chemical structure affects biological activity.",
        module: 1
      },
      {
        id: 2,
        question: "Which phase of metabolism involves adding polar groups to drugs?",
        options: [
          "Phase III metabolism",
          "Phase IV metabolism",
          "Phase II metabolism",
          "Phase I metabolism"
        ],
        correctAnswer: 2,
        explanation: "From Module 1: Phase II metabolism involves conjugation reactions that add polar groups to make drugs more water-soluble for excretion.",
        module: 1
      },
      {
        id: 3,
        question: "What does BCS stand for in pharmaceutical sciences?",
        options: [
          "Bioavailability Comparison Study",
          "Biopharmaceutical Classification System",
          "Basic Compounding Standards",
          "Bulk Chemical Storage"
        ],
        correctAnswer: 1,
        explanation: "From Module 2: BCS stands for Biopharmaceutical Classification System, which categorizes drugs based on solubility and permeability.",
        module: 2
      },
      {
        id: 4,
        question: "Which tablet manufacturing method is simplest for compatible powders?",
        options: [
          "Dry granulation",
          "Wet granulation",
          "Hot melt extrusion",
          "Direct compression"
        ],
        correctAnswer: 3,
        explanation: "From Module 2: Direct compression is the simplest method where powders are mixed and compressed without prior granulation.",
        module: 2
      },
      {
        id: 5,
        question: "What do agonist drugs do?",
        options: [
          "Have no effect on receptors",
          "Destroy receptor proteins",
          "Activate receptors to produce responses",
          "Block receptors to prevent responses"
        ],
        correctAnswer: 2,
        explanation: "From Module 3: Agonists bind to and activate receptors, producing a biological response similar to the natural ligand.",
        module: 3
      },
      {
        id: 6,
        question: "What does ADME stand for in pharmacology?",
        options: [
          "Administration, Delivery, Measurement, Effect",
          "Absorption, Distribution, Metabolism, Excretion",
          "Analysis, Dosage, Monitoring, Evaluation",
          "Agonist, Antagonist, Modulator, Enhancer"
        ],
        correctAnswer: 1,
        explanation: "From Module 3: ADME stands for Absorption, Distribution, Metabolism, Excretion - the four key pharmacokinetic processes.",
        module: 3
      },
      {
        id: 7,
        question: "What does HPLC stand for?",
        options: [
          "Human Pharmaceutical License Code",
          "High Performance Liquid Chromatography",
          "Heavy Particle Light Chromatography",
          "High Pressure Liquid Container"
        ],
        correctAnswer: 1,
        explanation: "From Module 4: HPLC stands for High Performance Liquid Chromatography, a separation technique used to analyze drug compounds.",
        module: 4
      },
      {
        id: 8,
        question: "What does GMP ensure?",
        options: [
          "Only low production costs",
          "Fastest manufacturing speed",
          "Attractive packaging only",
          "Consistent production and control of products"
        ],
        correctAnswer: 3,
        explanation: "From Module 4: Good Manufacturing Practice ensures pharmaceutical products are consistently produced and controlled to quality standards.",
        module: 4
      },
      {
        id: 9,
        question: "What does FDA stand for?",
        options: [
          "Food and Drug Administration",
          "Federal Drug Agency",
          "Food Distribution Authority",
          "Pharmaceutical Development Association"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: FDA stands for Food and Drug Administration, the U.S. agency regulating pharmaceuticals, food, and medical devices.",
        module: 5
      },
      {
        id: 10,
        question: "What are preclinical tests?",
        options: [
          "Laboratory and animal studies",
          "First human tests",
          "Market research studies",
          "Packaging design tests"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Preclinical testing involves laboratory and animal studies to assess safety before human trials.",
        module: 5
      },
      {
        id: 11,
        question: "What are cleanroom classifications?",
        options: [
          "Grade A-D for different operations",
          "Product quality grades",
          "Employee skill levels",
          "Color codes for rooms"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Cleanrooms are classified Grade A (highest) to D based on permitted particle counts for different manufacturing steps.",
        module: 6
      },
      {
        id: 12,
        question: "What does HVAC stand for?",
        options: [
          "Heating, Ventilation, Air Conditioning",
          "Human Verification and Compliance",
          "Hazardous Vapor Containment",
          "High Volume Air Control"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: HVAC stands for Heating, Ventilation, and Air Conditioning, critical for controlling cleanroom environments.",
        module: 6
      },
      {
        id: 13,
        question: "What is a pharmacophore model?",
        options: [
          "A device that measures drug absorption",
          "A 3D arrangement of features necessary for biological activity",
          "A type of pharmaceutical packaging",
          "A method for drug stability testing"
        ],
        correctAnswer: 1,
        explanation: "From Module 1: A pharmacophore model represents the essential structural features a molecule must have to interact with a biological target.",
        module: 1
      },
      {
        id: 14,
        question: "What are liposomes?",
        options: [
          "Sugar-based tablet coatings",
          "Types of mixing equipment",
          "Quality control instruments",
          "Lipid vesicles that encapsulate drugs"
        ],
        correctAnswer: 3,
        explanation: "From Module 2: Liposomes are spherical vesicles made of lipid bilayers that can encapsulate drugs for improved delivery.",
        module: 2
      },
      {
        id: 15,
        question: "What are trough drug levels?",
        options: [
          "Average concentration over time",
          "Lowest concentration before next dose",
          "Total amount in the body",
          "Highest concentration after administration"
        ],
        correctAnswer: 1,
        explanation: "From Module 3: Trough levels represent the lowest drug concentration in the bloodstream, usually measured just before the next dose.",
        module: 3
      },
      {
        id: 16,
        question: "What are identity tests for?",
        options: [
          "Checking package appearance",
          "Measuring exact quantity only",
          "Confirming the correct substance is present",
          "Testing drug effects in humans"
        ],
        correctAnswer: 2,
        explanation: "From Module 4: Identity tests verify that the material is what it claims to be, using specific characteristics like spectra or chromatography.",
        module: 4
      },
      {
        id: 17,
        question: "What does IND stand for?",
        options: [
          "Investigative New Device",
          "Investigational New Drug",
          "International New Drug",
          "Initial New Dosage"
        ],
        correctAnswer: 1,
        explanation: "From Module 5: IND stands for Investigational New Drug, an application to begin human clinical trials.",
        module: 5
      },
      {
        id: 18,
        question: "What is batch manufacturing?",
        options: [
          "Continuous non-stop production",
          "Discrete production lots with testing",
          "Manual small-scale production only",
          "Experimental trial production"
        ],
        correctAnswer: 1,
        explanation: "From Module 6: Batch manufacturing produces discrete quantities with defined start/end points, each batch tested before release.",
        module: 6
      },
      {
        id: 19,
        question: "What does CADD stand for in pharmaceutical sciences?",
        options: [
          "Comprehensive analytical drug design",
          "Clinical assessment and dosage determination",
          "Chemical analysis and drug development",
          "Computer-aided drug design"
        ],
        correctAnswer: 3,
        explanation: "From Module 1: CADD stands for Computer-Aided Drug Design, which uses computational methods to design and optimize drug molecules.",
        module: 1
      },
      {
        id: 20,
        question: "Which BCS class has high solubility but low permeability?",
        options: [
          "Class I",
          "Class IV",
          "Class III",
          "Class II"
        ],
        correctAnswer: 2,
        explanation: "From Module 2: BCS Class III drugs have high solubility but low permeability, meaning they dissolve well but are poorly absorbed.",
        module: 2
      },
      {
        id: 21,
        question: "What do antagonist drugs do?",
        options: [
          "Destroy drug molecules",
          "Block receptors to prevent responses",
          "Activate receptors strongly",
          "Increase receptor numbers"
        ],
        correctAnswer: 1,
        explanation: "From Module 3: Antagonists bind to receptors but don't activate them, blocking natural agonists from producing effects.",
        module: 3
      },
      {
        id: 22,
        question: "What does GC stand for?",
        options: [
          "General Chemistry",
          "Gas Chromatography",
          "Gradient Centrifugation",
          "Good Compliance"
        ],
        correctAnswer: 1,
        explanation: "From Module 4: GC stands for Gas Chromatography, used to separate and analyze volatile compounds in pharmaceuticals.",
        module: 4
      },
      {
        id: 23,
        question: "What does NDA stand for?",
        options: [
          "Nonprescription Drug Approval",
          "New Dosage Administration",
          "New Drug Application",
          "National Drug Agency"
        ],
        correctAnswer: 2,
        explanation: "From Module 5: NDA stands for New Drug Application, submitted to FDA for approval to market a new pharmaceutical.",
        module: 5
      },
      {
        id: 24,
        question: "What does WFI stand for?",
        options: [
          "Water for Injection",
          "Weekly Facility Inspection",
          "Waste Fluid Incineration",
          "Water Filtering Installation"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: WFI stands for Water for Injection, highly purified water used in parenteral (injectable) products.",
        module: 6
      },
      {
        id: 25,
        question: "What is rational drug design based on?",
        options: [
          "Random screening of chemical compounds",
          "Known biological targets and their structure",
          "Traditional herbal medicine knowledge",
          "Patient feedback on existing drugs"
        ],
        correctAnswer: 1,
        explanation: "From Module 1: Rational drug design uses knowledge of biological targets and their structure to design molecules that will interact with them.",
        module: 1
      },
      {
        id: 26,
        question: "What do extended release formulations achieve?",
        options: [
          "Make drugs work instantly",
          "Increase drug absorption only",
          "Change drug mechanism of action",
          "Maintain therapeutic effect over longer periods"
        ],
        correctAnswer: 3,
        explanation: "From Module 2: Extended release formulations maintain therapeutic drug levels over extended periods, reducing dosing frequency.",
        module: 2
      },
      {
        id: 27,
        question: "What is the therapeutic range?",
        options: [
          "Average dose for all patients",
          "Drug concentrations that are effective but safe",
          "Minimum effective dose only",
          "Maximum tolerable dose"
        ],
        correctAnswer: 1,
        explanation: "From Module 3: The therapeutic range is the concentration window where a drug is effective without causing toxicity.",
        module: 3
      },
      {
        id: 28,
        question: "What are accelerated stability studies?",
        options: [
          "Elevated conditions to predict shelf life",
          "Real-time normal storage testing",
          "Testing in actual market conditions",
          "Only testing chemical purity"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Accelerated studies use higher temperature/humidity to rapidly predict long-term stability and shelf life.",
        module: 4
      },
      {
        id: 29,
        question: "What does EMA stand for?",
        options: [
          "European Medicines Agency",
          "European Medical Association",
          "Emergency Medicine Administration",
          "European Manufacturing Authority"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: EMA stands for European Medicines Agency, responsible for scientific evaluation of medicines in the EU.",
        module: 5
      },
      {
        id: 30,
        question: "What is continuous manufacturing?",
        options: [
          "Batch production only",
          "Manual production methods",
          "Ongoing production with real-time monitoring",
          "Experimental laboratory scale"
        ],
        correctAnswer: 2,
        explanation: "From Module 6: Continuous manufacturing operates without interruption, with materials constantly fed in and product continuously removed.",
        module: 6
      },
      {
        id: 31,
        question: "What is quality by design?",
        options: [
          "Quality control department responsibility only",
          "Random quality checking",
          "Building quality into products from the beginning",
          "Testing quality at the end only"
        ],
        correctAnswer: 2,
        explanation: "From Module 1: Quality by design builds quality into pharmaceutical products through understanding and controlling formulation and manufacturing variables.",
        module: 1
      },
      {
        id: 32,
        question: "What are nanoparticles used for in drug delivery?",
        options: [
          "Reducing manufacturing costs only",
          "Ultra-small carriers for improved delivery",
          "Making drugs taste better",
          "Increasing tablet size"
        ],
        correctAnswer: 1,
        explanation: "From Module 2: Nanoparticles are submicron-sized carriers that can improve drug solubility, stability, and targeted delivery.",
        module: 2
      },
      {
        id: 33,
        question: "What are Type A adverse drug reactions?",
        options: [
          "Allergic reactions only",
          "Predictable, dose-dependent effects",
          "Unpredictable idiosyncratic reactions",
          "Placebo effects"
        ],
        correctAnswer: 1,
        explanation: "From Module 3: Type A reactions are predictable from the drug's known pharmacology and are usually dose-dependent.",
        module: 3
      },
      {
        id: 34,
        question: "What is process validation?",
        options: [
          "Testing raw material quality only",
          "Proof that processes work consistently",
          "Employee performance reviews",
          "Checking equipment appearance"
        ],
        correctAnswer: 1,
        explanation: "From Module 4: Process validation provides documented evidence that a process consistently produces products meeting specifications.",
        module: 4
      },
      {
        id: 35,
        question: "What are clinical trials?",
        options: [
          "Laboratory chemical tests",
          "Phase I-III human studies",
          "Only animal studies",
          "Market surveys only"
        ],
        correctAnswer: 1,
        explanation: "From Module 5: Clinical trials are systematic studies in human volunteers to evaluate safety and efficacy of investigational drugs.",
        module: 5
      },
      {
        id: 36,
        question: "What does PAT stand for?",
        options: [
          "Product Assessment Testing",
          "Package Analysis Technology",
          "Pharmaceutical Approval Testing",
          "Process Analytical Technology"
        ],
        correctAnswer: 3,
        explanation: "From Module 6: PAT stands for Process Analytical Technology, using real-time monitoring to ensure quality during manufacturing.",
        module: 6
      },
      {
        id: 37,
        question: "What is prodrug design?",
        options: [
          "Creating inactive forms that become active in the body",
          "Increasing drug patent life",
          "Simplifying chemical synthesis",
          "Making drugs more expensive"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Prodrugs are designed as inactive forms that convert to active drugs in the body, often to improve absorption or reduce side effects.",
        module: 1
      },
      {
        id: 38,
        question: "What is targeted drug delivery?",
        options: [
          "Giving drugs to any patient",
          "Only changing drug administration route",
          "Directing drug to specific tissues or cells",
          "Making drugs work everywhere equally"
        ],
        correctAnswer: 2,
        explanation: "From Module 2: Targeted delivery directs drugs to specific sites to increase efficacy and reduce side effects elsewhere.",
        module: 2
      },
      {
        id: 39,
        question: "What is drug metabolism?",
        options: [
          "How drugs are excreted",
          "How drugs are distributed",
          "How drugs are absorbed",
          "Chemical modification of drugs in the body"
        ],
        correctAnswer: 3,
        explanation: "From Module 3: Metabolism involves chemical transformation of drugs, usually making them more water-soluble for excretion.",
        module: 3
      },
      {
        id: 40,
        question: "What is primary packaging?",
        options: [
          "Direct contact with product",
          "Shipping containers",
          "Outer boxes only",
          "Pallet wrapping"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Primary packaging has direct contact with the product, like bottles, blister packs, vials, or syringes.",
        module: 6
      }
    ]
  }
};
