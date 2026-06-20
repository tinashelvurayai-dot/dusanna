export const chefTrainingDiploma = {
  id: "chef-training-diploma",
  title: "Chef Training (Diploma)",
  description: "Advanced professional culinary training covering kitchen management, advanced techniques, international cuisines, and restaurant operations. Builds upon Culinary Arts Certificate foundation.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  upgradePrice: null,
  icon: "👨‍🍳⭐",
  badge: "Diploma",
  prerequisites: ["culinary-arts-certificate"],
  
  modules: [
    {
      id: 1,
      title: "Advanced Kitchen Management",
      content: `# Module 1: Advanced Kitchen Management

## Professional Kitchen Leadership and Operations

Moving beyond basic skills, this module covers the managerial aspects of running a professional kitchen at the executive level.

### **1. Kitchen Brigade System Mastery**
The **modern brigade system** has evolved but maintains core principles. **Executive Chef responsibilities**:
- **Menu development**: Creates seasonal menus balancing cost, skill, and availability
- **Cost control**: Maintains food cost at 28-35% of menu price
- **Staff management**: Schedules 100-120 hours of labor per $10,000 in sales
- **Quality control**: Implements HACCP (Hazard Analysis Critical Control Points) systems
- **Vendor relations**: Negotiates with 5-7 primary suppliers for best pricing

**Modern station organization**:
- **Garde Manger**: Cold kitchen, charcuterie, salads (requires artistic plating)
- **Sauté**: Sautéed items, sauces (most demanding station during service)
- **Grill**: Grilled proteins (requires perfect timing and temperature control)
- **Pastry**: Desserts, breads (separate hierarchy in large operations)
- **Expediter**: "The pass" - coordinates all stations during service

### **2. Food Cost Calculation and Control**
**Prime cost formula**: Food Cost + Labor Cost = Prime Cost
- **Target prime cost**: 55-65% of total revenue
- **Ideal food cost**: 28-35% depending on restaurant type
- **Ideal labor cost**: 25-30% including benefits

**Plate cost calculation**:
1. **Ingredient cost**: Sum of all ingredients at purchase price
2. **Yield adjustment**: Account for trim loss (e.g., 75% yield on salmon = cost × 1.33)
3. **Portion cost**: Divide by number of portions
4. **Recipe cost**: Include spices, oil, etc. (often 3-5% of total)

**Theoretical vs. actual food cost**:
- **Theoretical**: What food cost should be based on recipes
- **Actual**: What food cost actually is based on inventory
- **Variance target**: Less than 2% difference indicates good control
- **Monthly inventory**: Required for accurate food cost calculation

### **3. Staff Management and Training**
**Professional kitchen hierarchy**:
1. **Executive Chef** (Chef de Cuisine): Ultimate authority
2. **Sous Chef**: Second in command, manages daily operations
3. **Chef de Partie**: Station heads (8-10 in large kitchens)
4. **Commis**: Junior cooks (1st, 2nd, 3rd year apprentices)
5. **Apprentices**: Culinary students learning all stations

**Effective kitchen communication**:
- **"Yes, Chef!"**: Standard acknowledgment
- **"Behind!"**: When walking behind someone
- **"Sharp!"**: When carrying knives
- **"Hot!"**: When carrying hot items
- **"Corner!"**: When approaching blind corners

**Training systems**:
- **Cross-training**: Staff learn multiple stations (reduces labor costs by 15%)
- **Skills matrix**: Tracks each cook's proficiency at different stations
- **Weekly tastings**: Ensures consistency across all shifts
- **Family meal**: Staff meal prepared daily (builds team morale)

### **4. Quality Assurance Systems**
**HACCP implementation**:
1. **Conduct hazard analysis** (biological, chemical, physical)
2. **Identify critical control points** (CCPs)
3. **Establish critical limits** (temperatures, times)
4. **Monitor procedures** (logs, checklists)
5. **Corrective actions** (when limits exceeded)
6. **Verification procedures** (audits, testing)
7. **Record keeping** (maintain for 90 days minimum)

**Temperature control logs**:
- **Refrigerators**: Checked twice daily (AM/PM)
- **Freezers**: Checked daily
- **Hot holding**: Checked every 2 hours
- **Cooling procedures**: 135°F to 70°F within 2 hours, then to 41°F within 4 more hours

**Waste management**:
- **First in, first out** (FIFO) inventory rotation
- **Trim utilization**: Stocks from vegetable trimmings, ground meat from trim
- **Daily waste tracking**: Identify patterns and reduce by 10-15%
- **Composting**: Diverts 60-70% of kitchen waste from landfills`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the target range for food cost percentage in a professional restaurant?",
          options: [
            "40-45%",
            "28-35%",
            "20-25%",
            "35-40%"
          ],
          correctAnswer: 1,
          explanation: "Professional restaurants target 28-35% food cost depending on concept. Fine dining may be higher, fast casual lower."
        },
        {
          id: 2,
          question: "What does HACCP stand for in food safety management?",
          options: [
            "Health and Cooking Control Procedures",
            "Hazard Analysis and Critical Control Points",
            "Hot and Cold Control Protocol",
            "Hygiene Assessment and Cooking Check Points"
          ],
          correctAnswer: 1,
          explanation: "HACCP = Hazard Analysis and Critical Control Points, a systematic preventive approach to food safety."
        },
        {
          id: 3,
          question: "What is the standard acknowledgment in a professional kitchen?",
          options: [
            "Heard!",
            "Got it!",
            "Copy that!",
            "Yes, Chef!"
          ],
          correctAnswer: 3,
          explanation: "'Yes, Chef!' is the standard acknowledgment showing respect for the chain of command in professional kitchens."
        },
        {
          id: 4,
          question: "How many hours of labor should be scheduled per $10,000 in sales?",
          options: [
            "130-150 hours",
            "80-100 hours",
            "50-70 hours",
            "100-120 hours"
          ],
          correctAnswer: 3,
          explanation: "Professional kitchens typically schedule 100-120 labor hours per $10,000 in sales to maintain 25-30% labor cost."
        },
        {
          id: 5,
          question: "What is the yield adjustment factor for salmon with 75% yield?",
          options: [
            "Cost × 1.75",
            "Cost × 1.50",
            "Cost × 1.25",
            "Cost × 1.33"
          ],
          correctAnswer: 3,
          explanation: "75% yield means 25% is lost. Adjustment factor = 1/0.75 = 1.33. If salmon costs $10/lb, edible portion cost = $13.33/lb."
        },
        {
          id: 6,
          question: "What is the target prime cost (food + labor) percentage?",
          options: [
            "65-75%",
            "55-65%",
            "75-85%",
            "45-55%"
          ],
          correctAnswer: 1,
          explanation: "Prime cost (food + labor) should be 55-65% of total revenue. The remaining 35-45% covers overhead and profit."
        },
        {
          id: 7,
          question: "How often should hot holding temperatures be checked?",
          options: [
            "Every hour",
            "Every 30 minutes",
            "Every 4 hours",
            "Every 2 hours"
          ],
          correctAnswer: 3,
          explanation: "Hot holding temperatures must be checked every 2 hours and logged to ensure food stays above 135°F (57°C)."
        },
        {
          id: 8,
          question: "What percentage of kitchen waste can composting typically divert from landfills?",
          options: [
            "30-40%",
            "50-60%",
            "40-50%",
            "60-70%"
          ],
          correctAnswer: 3,
          explanation: "Composting can divert 60-70% of kitchen waste from landfills, significantly reducing environmental impact and disposal costs."
        },
        {
          id: 9,
          question: "What is the acceptable variance between theoretical and actual food cost?",
          options: [
            "Less than 2%",
            "Less than 5%",
            "Less than 10%",
            "Less than 1%"
          ],
          correctAnswer: 0,
          explanation: "Less than 2% variance between theoretical and actual food cost indicates excellent inventory and portion control."
        },
        {
          id: 10,
          question: "Which station is typically responsible for charcuterie and cold plates?",
          options: [
            "Grill station",
            "Sauté station",
            "Garde Manger",
            "Pastry station"
          ],
          correctAnswer: 2,
          explanation: "Garde Manger (cold kitchen) handles charcuterie, salads, cold appetizers, and artistic plating of cold items."
        },
        {
          id: 11,
          question: "How many primary suppliers should a restaurant typically work with?",
          options: [
            "1-2 for simplicity",
            "3-4 for options",
            "5-7 for best pricing",
            "8-10 for maximum choice"
          ],
          correctAnswer: 2,
          explanation: "5-7 primary suppliers allows negotiation leverage while maintaining quality. Too few creates dependency, too many creates complexity."
        },
        {
          id: 12,
          question: "What cooling procedure is required by food safety regulations?",
          options: [
            "135°F to 41°F within 6 hours total",
            "135°F to 70°F within 4 hours, then to 41°F within 2 more hours",
            "135°F to 70°F within 2 hours, then to 41°F within 4 more hours",
            "135°F to 41°F within 4 hours total"
          ],
          correctAnswer: 2,
          explanation: "Proper cooling: 135°F to 70°F within 2 hours, then to 41°F within 4 more hours (6 hours total maximum)."
        },
        {
          id: 13,
          question: "What is the main purpose of cross-training kitchen staff?",
          options: [
            "To reduce labor costs by 15%",
            "To improve menu creativity",
            "To reduce food waste",
            "To increase cooking speed"
          ],
          correctAnswer: 0,
          explanation: "Cross-training reduces labor costs by approximately 15% because fewer specialized staff are needed to cover all stations."
        },
        {
          id: 14,
          question: "How many critical control points are in the HACCP system?",
          options: [
            "5 points",
            "11 points",
            "7 points",
            "9 points"
          ],
          correctAnswer: 2,
          explanation: "HACCP has 7 principles: hazard analysis, CCP identification, critical limits, monitoring, corrective actions, verification, and records."
        },
        {
          id: 15,
          question: "What does FIFO stand for in inventory management?",
          options: [
            "First In, First Out",
            "Fresh Items First Out",
            "Fast Inventory, Fast Out",
            "First Inspection, First Out"
          ],
          correctAnswer: 0,
          explanation: "FIFO = First In, First Out - using older inventory before newer to reduce spoilage and ensure freshness."
        },
        {
          id: 16,
          question: "Which position is second in command in the kitchen brigade?",
          options: [
            "Executive Chef",
            "Expediter",
            "Sous Chef",
            "Chef de Partie"
          ],
          correctAnswer: 2,
          explanation: "Sous Chef (under-chef) is second in command and manages daily kitchen operations in the Executive Chef's absence."
        },
        {
          id: 17,
          question: "What is the ideal labor cost percentage including benefits?",
          options: [
            "15-20%",
            "20-25%",
            "30-35%",
            "25-30%"
          ],
          correctAnswer: 3,
          explanation: "Ideal labor cost including benefits is 25-30% of total revenue. Higher indicates inefficiency, lower may indicate understaffing."
        },
        {
          id: 18,
          question: "How long must HACCP records be maintained?",
          options: [
            "60 days minimum",
            "1 year minimum",
            "90 days minimum",
            "30 days minimum"
          ],
          correctAnswer: 2,
          explanation: "HACCP records must be maintained for at least 90 days, though many restaurants keep them for 1 year for insurance and audit purposes."
        },
        {
          id: 19,
          question: "What should you say when carrying knives through the kitchen?",
          options: [
            "Corner!",
            "Hot!",
            "Behind!",
            "Sharp!"
          ],
          correctAnswer: 3,
          explanation: "'Sharp!' alerts others when carrying knives. Other calls: 'Behind!' (passing behind), 'Hot!' (hot items), 'Corner!' (blind corners)."
        },
        {
          id: 20,
          question: "What is the primary responsibility of the expediter during service?",
          options: [
            "Managing food costs",
            "Training new staff",
            "Cooking the most complex dishes",
            "Coordinating all stations and timing"
          ],
          correctAnswer: 3,
          explanation: "The expediter (at 'the pass') coordinates all stations, ensures timing is synchronized, and plates every dish before service."
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Culinary Techniques",
      content: `# Module 2: Advanced Culinary Techniques

## Mastery-Level Cooking Methods and Modernist Approaches

This module explores advanced techniques used in professional kitchens, including sous vide, molecular gastronomy, and traditional methods taken to expert levels.

### **1. Sous Vide Precision Cooking**
**Sous vide** (French for "under vacuum") revolutionizes precision cooking. **Key advantages**:
- **Perfect doneness**: ±1°F accuracy throughout protein
- **Maximum juiciness**: Vacuum sealing prevents moisture loss
- **Tenderization**: Collagen converts to gelatin at lower temperatures over time
- **Consistency**: Identical results every time

**Time and temperature guidelines**:
- **Beef tenderloin**: 130°F (54°C) for 1-4 hours (medium rare)
- **Chicken breast**: 146°F (63°C) for 1-4 hours (juicy, safe)
- **Pork chops**: 140°F (60°C) for 1-3 hours
- **Fish**: 122°F (50°C) for 20-45 minutes (varies by thickness)
- **Vegetables**: 185°F (85°C) for 30-90 minutes

**Post-sous vide treatment**:
- **Searing**: Necessary for Maillard reaction and texture
- **Pat dry**: Critical for proper searing
- **High heat**: 450°F+ (232°C+) for 30-60 seconds per side
- **Butter basting**: Adds flavor during searing

### **2. Modernist Thickening and Gelling Agents**
**Hydrocolloids** revolutionize texture manipulation:

**Agar-agar** (from seaweed):
- **Gel strength**: 8-10 times stronger than gelatin
- **Melting point**: 185°F (85°C) - heat stable
- **Setting point**: 95-104°F (35-40°C)
- **Uses**: Clear gels, fluid gels, hot applications
- **Ratio**: 0.2-2% by weight of liquid

**Sodium alginate** (brown seaweed) + **calcium lactate**:
- **Spherification**: Forms caviar-like spheres
- **Reverse spherification**: For acidic or alcoholic liquids
- **Bath concentration**: 0.5% sodium alginate in liquid
- **Setting bath**: 1% calcium lactate in water

**Xanthan gum**:
- **Viscosity**: Excellent for stabilizing emulsions
- **Shear-thinning**: Thins when agitated, thickens when still
- **Temperature stable**: Works hot or cold
- **Ratio**: 0.1-0.5% by weight
- **Uses**: Sauces, foams, gluten-free baking

### **3. Advanced Butchery and Fabrication**
**Whole animal butchery principles**:
- **Yield percentages**: Beef 60-65%, Pork 70-75%, Lamb 50-55%
- **Seam butchery**: Following natural muscle separations
- **Aging methods**: Wet vs. dry aging (21-28 days optimal)
- **Fabrication**: Breaking down into usable cuts

**Fish butchery techniques**:
1. **Supreme cut**: Boneless, skinless fillet from round fish
2. **Darné cut**: Cross-section steak from large round fish
3. **Tronçon cut**: Cross-section from flat fish
4. **Paupiette**: Rolled fillet around stuffing
5. **Goujonette**: Small strips (3" × 1/2") for frying

**Poultry fabrication beyond basics**:
- **Airline breast**: Breast with drumette attached
- **Ballotine**: Boneless, stuffed, and rolled
- **Galantine**: Boneless, stuffed, poached, served cold
- **Supreme**: Wing bone attached for presentation

### **4. Advanced Sauce Work**
**Modern sauce techniques**:
- **Emulsions**: Using lecithin for stable foams
- **Gastriques**: Caramel + vinegar reductions (1:1 ratio)
- **Jus**: Natural meat juices, not thickened
- **Nages**: Aromatic poaching liquids served as sauce
- **Beurre monté**: Water-based butter emulsion

**Reduction mastery**:
- **Demi-glace**: Traditional 50% reduction (8 hours minimum)
- **Glace de viande**: 90% reduction (syrup consistency)
- **Fond de veau**: Brown veal stock (6-8 hour simmer)
- **Court bouillon**: Acidulated vegetable stock for poaching

**Contemporary plating sauces**:
- **Soil**: Dehydrated, crumbled ingredients
- **Powder**: Dehydrated sauce ingredients
- **Air**: Light foam using nitrous oxide
- **Gel**: Set sauce cut into shapes

### **5. Temperature Manipulation Techniques**
**Thermal circulators**:
- **Accuracy**: ±0.2°F (±0.1°C) professional models
- **Water bath size**: 10-40 liters for different volumes
- **Immersion vs. combi**: Immersion circulators vs. combination ovens

**Cryogenic cooking**:
- **Liquid nitrogen**: -320°F (-196°C) for instant freezing
- **Safety**: Proper ventilation and PPE required
- **Applications**: Instant ice cream, frozen herbs, brittle textures

**Combination oven technology**:
- **Steam + convection**: Precise moisture control
- **Combi-oven benefits**: 30-40% faster cooking, better yield
- **Professional models**: Rational, Electrolux, Alto-Shaam`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary advantage of sous vide cooking?",
          options: [
            "Perfect doneness throughout with ±1°F accuracy",
            "No need for searing afterwards",
            "Faster cooking time",
            "Lower equipment cost"
          ],
          correctAnswer: 0,
          explanation: "Sous vide provides ±1°F accuracy throughout the protein, ensuring perfect doneness from edge to center."
        },
        {
          id: 2,
          question: "What temperature is ideal for cooking chicken breast sous vide?",
          options: [
            "146°F (63°C)",
            "155°F (68°C)",
            "135°F (57°C)",
            "165°F (74°C)"
          ],
          correctAnswer: 0,
          explanation: "146°F (63°C) for 1-4 hours produces perfectly juicy, safe chicken breast without the dryness of traditional cooking."
        },
        {
          id: 3,
          question: "How many times stronger is agar-agar compared to gelatin?",
          options: [
            "2-3 times stronger",
            "8-10 times stronger",
            "4-5 times stronger",
            "6-7 times stronger"
          ],
          correctAnswer: 1,
          explanation: "Agar-agar is 8-10 times stronger than gelatin, sets at higher temperatures (95-104°F), and is heat-stable once set."
        },
        {
          id: 4,
          question: "What is the typical yield percentage for beef from whole animal to cuts?",
          options: [
            "60-65%",
            "40-45%",
            "70-75%",
            "50-55%"
          ],
          correctAnswer: 0,
          explanation: "Beef typically yields 60-65% usable meat after fabrication. Pork yields 70-75%, lamb 50-55%."
        },
        {
          id: 5,
          question: "What is a 'supreme' cut in fish butchery?",
          options: [
            "Rolled fillet with stuffing",
            "Small strips for frying",
            "Boneless, skinless fillet from round fish",
            "Cross-section steak"
          ],
          correctAnswer: 2,
          explanation: "A supreme cut is a boneless, skinless fillet taken from a round fish, typically the most premium portion."
        },
        {
          id: 6,
          question: "What concentration of sodium alginate is used for spherification baths?",
          options: [
            "0.1%",
            "2.0%",
            "0.5%",
            "1.0%"
          ],
          correctAnswer: 2,
          explanation: "Spherification typically uses 0.5% sodium alginate in the liquid to be spherified, and 1% calcium lactate in the setting bath."
        },
        {
          id: 7,
          question: "What is the main benefit of combination ovens?",
          options: [
            "30-40% faster cooking with better yield",
            "Lower energy consumption",
            "Smaller footprint than conventional ovens",
            "No steam cleanup needed"
          ],
          correctAnswer: 0,
          explanation: "Combination ovens cook 30-40% faster with better yield due to precise steam and convection control."
        },
        {
          id: 8,
          question: "What temperature does agar-agar melt at?",
          options: [
            "212°F (100°C)",
            "185°F (85°C)",
            "160°F (71°C)",
            "140°F (60°C)"
          ],
          correctAnswer: 1,
          explanation: "Agar-agar melts at 185°F (85°C) and sets at 95-104°F (35-40°C), making it heat-stable for hot applications."
        },
        {
          id: 9,
          question: "What is 'seam butchery'?",
          options: [
            "Sewing meat back together",
            "Cutting along bone seams",
            "Butchering while meat is frozen",
            "Following natural muscle separations"
          ],
          correctAnswer: 3,
          explanation: "Seam butchery follows the natural separations between muscles, resulting in cleaner cuts and better yield."
        },
        {
          id: 10,
          question: "What percentage reduction creates a 'glace de viande'?",
          options: [
            "50% reduction",
            "90% reduction",
            "95% reduction",
            "75% reduction"
          ],
          correctAnswer: 1,
          explanation: "Glace de viande is a 90% reduction of stock to syrup consistency - intensely flavorful for finishing sauces."
        },
        {
          id: 11,
          question: "Why must food be patted dry after sous vide before searing?",
          options: [
            "To ensure proper Maillard reaction",
            "To improve seasoning adherence",
            "To reduce cooking time",
            "To prevent splattering"
          ],
          correctAnswer: 0,
          explanation: "Moisture prevents proper Maillard reaction (browning). Patting dry ensures a good sear in 30-60 seconds."
        },
        {
          id: 12,
          question: "What is the primary use of xanthan gum?",
          options: [
            "Coloring",
            "Creating gels",
            "Stabilizing emulsions",
            "Sweetening"
          ],
          correctAnswer: 2,
          explanation: "Xanthan gum excels at stabilizing emulsions and creating shear-thinning textures (thin when agitated, thick when still)."
        },
        {
          id: 13,
          question: "What is an 'airline breast' in poultry fabrication?",
          options: [
            "Butterflied breast",
            "Boneless, skinless breast",
            "Stuffed and rolled breast",
            "Breast with drumette attached"
          ],
          correctAnswer: 3,
          explanation: "An airline breast includes the first wing bone (drumette) attached for presentation and easier handling by guests."
        },
        {
          id: 14,
          question: "What is the ideal aging time for dry-aged beef?",
          options: [
            "21-28 days",
            "49-56 days",
            "7-14 days",
            "35-42 days"
          ],
          correctAnswer: 0,
          explanation: "21-28 days is optimal for dry aging - develops flavor without excessive weight loss or spoilage risk."
        },
        {
          id: 15,
          question: "What is 'reverse spherification' used for?",
          options: [
            "Liquids with calcium content",
            "Only water-based liquids",
            "Acidic or alcoholic liquids",
            "Only dairy-based liquids"
          ],
          correctAnswer: 2,
          explanation: "Reverse spherification (calcium in the liquid, alginate in the bath) works for acidic or alcoholic liquids that would prevent setting."
        },
        {
          id: 16,
          question: "What temperature is liquid nitrogen?",
          options: [
            "-100°F (-73°C)",
            "-200°F (-129°C)",
            "-320°F (-196°C)",
            "-400°F (-240°C)"
          ],
          correctAnswer: 2,
          explanation: "Liquid nitrogen is -320°F (-196°C), allowing instant freezing and unique texture creation."
        },
        {
          id: 17,
          question: "What is a 'gastrique'?",
          options: [
            "Meat juice reduction",
            "Butter emulsion",
            "Caramel + vinegar reduction",
            "Vegetable stock reduction"
          ],
          correctAnswer: 2,
          explanation: "A gastrique is caramelized sugar deglazed with vinegar, typically in 1:1 ratio, used as a sweet-sour sauce base."
        },
        {
          id: 18,
          question: "What does 'shear-thinning' mean in relation to xanthan gum?",
          options: [
            "Thins when agitated, thickens when still",
            "Breaks down under pressure",
            "Thickens over time",
            "Thins when heated"
          ],
          correctAnswer: 0,
          explanation: "Shear-thinning means the mixture thins when agitated (poured, stirred) and thickens when stationary."
        },
        {
          id: 19,
          question: "What is the French term for a boneless, stuffed, poached poultry dish served cold?",
          options: [
            "Galantine",
            "Ballotine",
            "Supreme",
            "Paupiette"
          ],
          correctAnswer: 0,
          explanation: "Galantine is boneless poultry stuffed, poached, and served cold, often in aspic. Ballotine is similar but served hot."
        },
        {
          id: 20,
          question: "What accuracy do professional thermal circulators typically achieve?",
          options: [
            "±0.2°F (±0.1°C)",
            "±0.1°F (±0.05°C)",
            "±1°F (±0.5°C)",
            "±0.5°F (±0.3°C)"
          ],
          correctAnswer: 0,
          explanation: "Professional thermal circulators achieve ±0.2°F (±0.1°C) accuracy, essential for precise sous vide cooking."
        }
      ]
    },
    {
      id: 3,
      title: "International Cuisine Foundations",
      content: `# Module 3: International Cuisine Foundations

## Global Culinary Traditions and Techniques

Understanding world cuisines is essential for modern chefs. This module covers the foundational elements of major culinary traditions.

### **1. French Haute Cuisine**
**Classical French foundations**:
- **Mother sauces**: Béchamel, Velouté, Espagnole, Tomato, Hollandaise
- **Techniques**: Sauté, braise, roast, poach (the "four pillars")
- **Garnish systems**: Garniture classifications for each sauce
- **Service styles**: À la française vs. à la russe

**Regional French variations**:
- **Provence**: Olive oil, garlic, tomatoes, herbs de Provence
- **Normandy**: Cream, butter, apples, cider, Calvados
- **Alsace**: German influence, choucroute, Riesling, Munster cheese
- **Burgundy**: Wine-based cooking, boeuf bourguignon, coq au vin
- **Southwest**: Duck, foie gras, cassoulet, Armagnac

**Modern French evolution**:
- **Nouvelle Cuisine** (1970s): Lighter sauces, shorter cooking times
- **Cuisine du marché**: Market-driven, seasonal
- **Bistronomy**: Bistro quality at fine dining level
- **Neo-bistro**: Modern techniques in casual setting

### **2. Italian Regional Cooking**
**Italy's culinary regions** (20 official regions, each distinct):

**Northern Italy**:
- **Piedmont**: White truffles, risotto, Barolo wine
- **Lombardy**: Risotto alla milanese, osso buco, panettone
- **Veneto**: Polenta, risi e bisi, tiramisu
- **Emilia-Romagna**: Parmigiano-Reggiano, prosciutto di Parma, balsamic vinegar

**Central Italy**:
- **Tuscany**: Olive oil, beans, grilled meats, fennel
- **Umbria**: Black truffles, lentils, wild boar
- **Lazio**: Pasta all'amatriciana, carbonara, artichokes
- **Marche**: Olive ascolane, brodetto, vincisgrassi

**Southern Italy**:
- **Campania**: Pizza napoletana, tomatoes, mozzarella di bufala
- **Apulia**: Orecchiette, burrata, seafood
- **Sicily**: Caponata, arancini, cannoli, Marsala wine
- **Sardinia**: Culurgiones, porceddu, bottarga

### **3. Asian Cuisine Fundamentals**
**Chinese culinary traditions**:
- **Eight regional cuisines**: Sichuan, Cantonese, Jiangsu, Zhejiang, Fujian, Hunan, Anhui, Shandong
- **Five flavors**: Sweet, sour, bitter, spicy, salty
- **Five textures**: Crisp, tender, soft, smooth, firm
- **Wok techniques**: Chao (stir-fry), Bao (quick fry), Liu (quick boil)

**Japanese precision**:
- **Washoku principles**: Five colors, five tastes, five preparations
- **Dashi**: Kombu + katsuobushi (1:1 by weight, 160°F/71°C extraction)
- **Knife skills**: Deba (fish), Usuba (vegetables), Yanagiba (sashimi)
- **Presentation**: Seasonality, minimalism, natural beauty

**Thai balance**:
- **Four pillars**: Spicy, sour, sweet, salty
- **Curry pastes**: Red, green, yellow, Massaman, Panang
- **Herb usage**: Fresh vs. dried, whole vs. ground
- **Texture contrast**: Crispy, soft, chewy elements in each dish

### **4. Mediterranean and Middle Eastern**
**Spanish foundations**:
- **Sofrito**: Onion, garlic, tomato base
- **Paella**: Socarrat (crispy bottom) essential
- **Tapas culture**: Small plates, social dining
- **Regional specialties**: Basque pintxos, Catalan seafood, Andalusian gazpacho

**Greek and Eastern Mediterranean**:
- **Meze**: Small plates similar to tapas
- **Olive oil**: Different cultivars (Koroneiki, Kalamata)
- **Cheeses**: Feta, halloumi, kasseri, graviera
- **Herbs**: Oregano, mint, dill, parsley

**Middle Eastern complexity**:
- **Spice blends**: Baharat, za'atar, ras el hanout
- **Grains**: Bulgur, freekeh, couscous
- **Legumes**: Chickpeas, lentils, fava beans
- **Preserved items**: Pickles, dried fruits, preserved lemons

### **5. Latin American Diversity**
**Mexican regional cooking**:
- **Moles**: Seven types (negro, colorado, verde, etc.)
- **Corn culture**: Nixtamalization process
- **Chiles**: Over 60 varieties from mild to extremely hot
- **Regional specialties**: Oaxaca (moles), Yucatán (achiote), Puebla (chiles en nogada)

**Peruvian fusion**:
- **Nikkei cuisine**: Japanese-Peruvian fusion
- **Chifa cuisine**: Chinese-Peruvian fusion
- **Ceviche**: Multiple regional variations
- **Potatoes**: Over 3,000 native varieties

**Brazilian diversity**:
- **Feijoada**: National dish (black bean stew)
- **Regional variations**: Bahian (African influence), Amazonian (indigenous), Southern (European)`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many mother sauces are there in classical French cuisine?",
          options: [
            "4 mother sauces",
            "6 mother sauces",
            "3 mother sauces",
            "5 mother sauces"
          ],
          correctAnswer: 3,
          explanation: "There are 5 mother sauces: Béchamel, Velouté, Espagnole, Tomato, and Hollandaise, from which hundreds of derivatives are made."
        },
        {
          id: 2,
          question: "Which French region is known for cream, butter, apples, and Calvados?",
          options: [
            "Normandy",
            "Provence",
            "Alsace",
            "Burgundy"
          ],
          correctAnswer: 0,
          explanation: "Normandy is famous for dairy (cream, butter), apples (cider, Calvados brandy), and seafood."
        },
        {
          id: 3,
          question: "How many official culinary regions does Italy have?",
          options: [
            "10 regions",
            "15 regions",
            "25 regions",
            "20 regions"
          ],
          correctAnswer: 3,
          explanation: "Italy has 20 official regions, each with distinct culinary traditions, ingredients, and specialties."
        },
        {
          id: 4,
          question: "Which Italian region produces Parmigiano-Reggiano and prosciutto di Parma?",
          options: [
            "Piedmont",
            "Lombardy",
            "Tuscany",
            "Emilia-Romagna"
          ],
          correctAnswer: 3,
          explanation: "Emilia-Romagna produces Parmigiano-Reggiano cheese, prosciutto di Parma, and balsamic vinegar of Modena."
        },
        {
          id: 5,
          question: "What are the four pillars of Thai flavor balance?",
          options: [
            "Sweet, salty, bitter, umami",
            "Fresh, dried, whole, ground",
            "Hot, cold, crunchy, soft",
            "Spicy, sour, sweet, salty"
          ],
          correctAnswer: 3,
          explanation: "Thai cuisine balances four pillars: spicy (chiles), sour (lime/tamarind), sweet (palm sugar), and salty (fish sauce)."
        },
        {
          id: 6,
          question: "What is 'socarrat' in Spanish paella?",
          options: [
            "The crispy bottom layer of rice",
            "The saffron infusion",
            "The seafood garnish",
            "The seasoning blend"
          ],
          correctAnswer: 0,
          explanation: "Socarrat is the prized crispy, caramelized bottom layer of rice in paella - considered the best part by connoisseurs."
        },
        {
          id: 7,
          question: "How many regional cuisines are recognized in Chinese culinary tradition?",
          options: [
            "Ten culinary schools",
            "Six regional styles",
            "Eight regional cuisines",
            "Four great traditions"
          ],
          correctAnswer: 2,
          explanation: "China recognizes eight great regional cuisines: Sichuan, Cantonese, Jiangsu, Zhejiang, Fujian, Hunan, Anhui, and Shandong."
        },
        {
          id: 8,
          question: "What temperature is ideal for extracting dashi from kombu and katsuobushi?",
          options: [
            "160°F (71°C)",
            "140°F (60°C)",
            "Boiling (212°F/100°C)",
            "180°F (82°C)"
          ],
          correctAnswer: 0,
          explanation: "160°F (71°C) extracts optimal umami without bitterness. Boiling makes dashi cloudy and bitter."
        },
        {
          id: 9,
          question: "Which Mexican state is famous for its seven types of mole?",
          options: [
            "Yucatán",
            "Jalisco",
            "Puebla",
            "Oaxaca"
          ],
          correctAnswer: 3,
          explanation: "Oaxaca is known as 'the land of seven moles': negro, colorado, coloradito, verde, amarillo, chichilo, and manchamanteles."
        },
        {
          id: 10,
          question: "What is the Japanese principle of 'washoku'?",
          options: [
            "Seven lucky ingredients",
            "Balance of yin and yang",
            "Three textures, three temperatures, three colors",
            "Five colors, five tastes, five preparations"
          ],
          correctAnswer: 3,
          explanation: "Washoku emphasizes five principles: five colors, five tastes, five preparations, seasonal awareness, and natural presentation."
        },
        {
          id: 11,
          question: "What is the French service style where all dishes are served at once?",
          options: [
            "Service à l'anglaise",
            "Service américain",
            "À la française",
            "À la russe"
          ],
          correctAnswer: 2,
          explanation: "À la française service presents all dishes simultaneously. À la russe serves courses sequentially (modern standard)."
        },
        {
          id: 12,
          question: "Which Italian region is tiramisu from?",
          options: [
            "Tuscany",
            "Piedmont",
            "Veneto",
            "Sicily"
          ],
          correctAnswer: 2,
          explanation: "Tiramisu originates from Veneto, specifically Treviso, though its exact origins are debated."
        },
        {
          id: 13,
          question: "What process makes corn nutritionally available in Mexican cuisine?",
          options: [
            "Toasting",
            "Nixtamalization",
            "Fermentation",
            "Grinding"
          ],
          correctAnswer: 1,
          explanation: "Nixtamalization (soaking in alkaline solution) makes corn nutritionally available and creates masa for tortillas and tamales."
        },
        {
          id: 14,
          question: "What does 'Nikkei cuisine' refer to?",
          options: [
            "Japanese-Peruvian fusion",
            "Korean-Brazilian fusion",
            "Italian-Argentinian fusion",
            "Chinese-Peruvian fusion"
          ],
          correctAnswer: 0,
          explanation: "Nikkei cuisine is Japanese-Peruvian fusion, combining Japanese techniques with Peruvian ingredients."
        },
        {
          id: 15,
          question: "What is the primary herb blend in Middle Eastern za'atar?",
          options: [
            "Cumin, coriander, cardamom",
            "Thyme, sumac, sesame seeds",
            "Parsley, mint, dill",
            "Oregano, basil, marjoram"
          ],
          correctAnswer: 1,
          explanation: "Za'atar typically contains dried thyme, sumac, toasted sesame seeds, and sometimes salt or other herbs."
        },
        {
          id: 16,
          question: "Which French culinary movement emphasized lighter sauces and shorter cooking times?",
          options: [
            "Nouvelle Cuisine",
            "Cuisine du marché",
            "Haute Cuisine",
            "Bistronomy"
          ],
          correctAnswer: 0,
          explanation: "Nouvelle Cuisine (1970s) rejected heavy sauces and long cooking in favor of lighter, fresher preparations."
        },
        {
          id: 17,
          question: "What is the national dish of Brazil?",
          options: [
            "Ceviche",
            "Asado",
            "Feijoada",
            "Empanadas"
          ],
          correctAnswer: 2,
          explanation: "Feijoada (black bean stew with various meats) is considered Brazil's national dish, traditionally served on Saturdays."
        },
        {
          id: 18,
          question: "How many native potato varieties does Peru have?",
          options: [
            "Over 1,000",
            "Over 5,000",
            "Over 3,000",
            "Approximately 500"
          ],
          correctAnswer: 2,
          explanation: "Peru has over 3,000 native potato varieties, in colors from white and yellow to purple, blue, and red."
        },
        {
          id: 19,
          question: "What are the 'five textures' in Chinese culinary tradition?",
          options: [
            "Chewy, crunchy, melt-in-mouth, slippery, fluffy",
            "Dry, moist, oily, watery, creamy",
            "Crisp, tender, soft, smooth, firm",
            "Hot, cold, warm, room temperature, chilled"
          ],
          correctAnswer: 2,
          explanation: "Chinese cuisine emphasizes five textures: crisp, tender, soft, smooth, and firm - often combining several in one dish."
        },
        {
          id: 20,
          question: "Which Greek cheese is known for being grillable without melting?",
          options: [
            "Graviera",
            "Kasseri",
            "Feta",
            "Halloumi"
          ],
          correctAnswer: 3,
          explanation: "Halloumi (from Cyprus) is known for its high melting point, making it perfect for grilling or frying without losing shape."
        }
      ]
    },
    {
      id: 4,
      title: "Pastry and Baking Science",
      content: `# Module 4: Pastry and Baking Science

## The Chemistry and Art of Professional Baking

Professional baking requires precise measurements and understanding of chemical reactions. This module covers both traditional techniques and modern innovations.

### **1. Flour Science and Dough Development**
**Wheat flour composition**:
- **Protein content**: Cake flour (6-8%), Pastry flour (8-10%), All-purpose (10-12%), Bread flour (12-14%)
- **Gluten development**: Hydration + mechanical action = gluten network
- **Ash content**: Mineral content affects color and nutrition (0.3-0.5% typical)

**Dough development stages**:
1. **Hydration**: Flour absorbs water (autolyse: 20-60 minutes rest)
2. **Mixing**: Gluten development (windowpane test for bread)
3. **Fermentation**: Yeast produces CO₂ (bulk fermentation)
4. **Degassing**: Punching down redistributes yeast food
5. **Proofing**: Final rise before baking

**Bakers' percentages** (baker's math):
- **Flour**: Always 100% (by weight)
- **Water**: 60-75% for bread, 50-60% for pastry
- **Yeast**: 1-2% fresh, 0.3-0.5% instant dry
- **Salt**: 1.8-2.2% (controls fermentation, strengthens gluten)
- **Sugar**: Varies (5-25% for enriched doughs)
- **Fat**: 5-20% (shortens gluten strands)

### **2. Laminated Dough Mastery**
**Puff pastry (pâte feuilletée)**:
- **Turns**: 6 turns total (3 single or 4 double turns)
- **Butter to flour ratio**: Equal weight (100% butter to flour)
- **Détrempe**: Flour, water, salt, sometimes butter
- **Beurrage**: Butter block (83% butterfat minimum)
- **Resting**: 30 minutes refrigerated between turns

**Croissant dough differences**:
- **Yeast added**: Creates rise during proofing and baking
- **Butter content**: 30-40% of total weight
- **Sugar added**: 5-10% for browning and flavor
- **Lamination**: 3-4 double turns typical
- **Proofing**: 2-3 hours at 75-80°F (24-27°C), 80% humidity

**Danish pastry variations**:
- **Enriched dough**: Eggs and milk in détrempe
- **Butter content**: 25-35%
- **Fillings**: Cheese, fruit, custard, almond paste
- **Shapes**: Spirals, pockets, braids, envelopes

### **3. Custards and Creams**
**Crème anglaise** (pouring custard):
- **Ratio**: 4 parts liquid : 1 part egg yolk : 1 part sugar
- **Temperature**: Cook to 180-185°F (82-85°C)
- **Test**: Coats back of spoon, finger leaves clean trail
- **Stabilization**: Strain immediately, cool quickly

**Pastry cream (crème pâtissière)**:
- **Thickening**: Cornstarch (3-4% of liquid weight)
- **Cooking**: Must boil 1-2 minutes to deactivate starch-digesting enzyme
- **Butter addition**: 10-20% of total weight for richness
- **Variations**: Chiboust (with meringue), diplomat (with whipped cream)

**Ganache**:
- **Ratios**: 1:1 for glaze, 2:1 chocolate to cream for truffles, 1:2 for whipped ganache
- **Chocolate types**: Dark (50-70% cocoa), Milk (30-40% cocoa), White (cocoa butter only)
- **Emulsion**: Cream must be hot (just below boiling) to properly melt chocolate
- **Troubleshooting**: Separation fixed with additional warm cream or immersion blender

### **4. Modern Plated Desserts**
**Components of modern desserts** (minimum 3-5 elements):
1. **Main component**: Cake, mousse, custard, etc.
2. **Crunch element**: Tuile, crumble, feuilletine, nut brittle
3. **Sauce component**: Fruit coulis, caramel, chocolate sauce
4. **Cream element**: Whipped cream, ice cream, sorbet
5. **Garnish**: Fresh fruit, herbs, edible flowers, gold leaf

**Temperature contrasts**:
- **Hot elements**: Baked items, warm sauces
- **Cold elements**: Ice cream, sorbet, mousses
- **Room temperature**: Cakes, cookies, chocolates
- **Frozen elements**: Nitrogen-frozen items, parfaits

**Textural balance**:
- **Crisp**: Tuiles, sugar glass, phyllo
- **Creamy**: Mousses, custards, ice cream
- **Chewy**: Caramels, marshmallows, nougat
- **Crunchy**: Nuts, praline, feuilletine
- **Soft**: Cakes, bread puddings, foams

### **5. Chocolate Work and Sugar Art**
**Tempering chocolate**:
- **Temperatures**: Dark: 120°F → 82°F → 88-90°F (49°C → 28°C → 31-32°C)
- **Methods**: Seeding, tabling, microwave
- **Cocoa butter crystals**: Type V crystals create shine and snap
- **Testing**: Sets in 3-5 minutes at room temperature, shiny, snaps cleanly

**Sugar cooking stages**:
1. **Thread**: 230-235°F (110-113°C) - sugar syrup
2. **Soft ball**: 235-240°F (113-116°C) - fudge, fondant
3. **Firm ball**: 245-250°F (118-121°C) - caramels
4. **Hard ball**: 250-265°F (121-129°C) - marshmallows
5. **Soft crack**: 270-290°F (132-143°C) - taffy
6. **Hard crack**: 300-310°F (149-154°C) - brittles, lollipops
7. **Caramel**: 320-350°F (160-177°C) - caramel color and flavor

**Sugar work techniques**:
- **Pulled sugar**: Worked at 160-175°F (71-79°C)
- **Blown sugar**: Requires pump and molds
- **Cast sugar**: Poured into molds
- **Spun sugar**: 300-310°F (149-154°C) fine threads`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the protein content range for bread flour?",
          options: [
            "10-12%",
            "8-10%",
            "6-8%",
            "12-14%"
          ],
          correctAnswer: 3,
          explanation: "Bread flour contains 12-14% protein, which develops strong gluten networks necessary for bread structure."
        },
        {
          id: 2,
          question: "In baker's percentages, what ingredient is always calculated as 100%?",
          options: [
            "Salt",
            "Water",
            "Yeast",
            "Flour"
          ],
          correctAnswer: 3,
          explanation: "In baker's math, flour is always 100%, and all other ingredients are expressed as percentages of the flour weight."
        },
        {
          id: 3,
          question: "How many turns does classic puff pastry typically require?",
          options: [
            "4 turns total",
            "8 turns total",
            "10 turns total",
            "6 turns total"
          ],
          correctAnswer: 3,
          explanation: "Classic puff pastry requires 6 turns total (either 3 single turns or 4 double turns) creating 729 layers theoretically."
        },
        {
          id: 4,
          question: "What temperature should crème anglaise be cooked to?",
          options: [
            "180-185°F (82-85°C)",
            "170-175°F (77-79°C)",
            "190-195°F (88-91°C)",
            "160-165°F (71-74°C)"
          ],
          correctAnswer: 0,
          explanation: "Crème anglaise should reach 180-185°F (82-85°C) - enough to thicken yolks but not curdle them."
        },
        {
          id: 5,
          question: "What is the butter to flour ratio in classic puff pastry?",
          options: [
            "100% butter to flour weight",
            "125% butter to flour weight",
            "75% butter to flour weight",
            "50% butter to flour weight"
          ],
          correctAnswer: 0,
          explanation: "Classic puff pastry uses equal weights of butter and flour (100% ratio), with butterfat content of at least 83%."
        },
        {
          id: 6,
          question: "What chocolate to cream ratio is used for truffle ganache?",
          options: [
            "3:1 chocolate to cream",
            "2:1 chocolate to cream",
            "1:2 chocolate to cream",
            "1:1 (equal parts)"
          ],
          correctAnswer: 1,
          explanation: "Truffle ganache uses 2:1 chocolate to cream for a firm consistency that can be rolled and coated."
        },
        {
          id: 7,
          question: "What temperature range is 'hard crack' stage for sugar?",
          options: [
            "320-350°F (160-177°C)",
            "250-265°F (121-129°C)",
            "270-290°F (132-143°C)",
            "300-310°F (149-154°C)"
          ],
          correctAnswer: 3,
          explanation: "Hard crack stage is 300-310°F (149-154°C) - sugar becomes brittle and breaks cleanly when cooled."
        },
        {
          id: 8,
          question: "How much salt is typically used in bread dough by baker's percentage?",
          options: [
            "2.5-3%",
            "0.5-1%",
            "3-4%",
            "1.8-2.2%"
          ],
          correctAnswer: 3,
          explanation: "Salt is typically 1.8-2.2% of flour weight in bread dough - controls yeast, strengthens gluten, and enhances flavor."
        },
        {
          id: 9,
          question: "What is the final temperature for tempering dark chocolate?",
          options: [
            "85-87°F (29-31°C)",
            "82-84°F (28-29°C)",
            "88-90°F (31-32°C)",
            "91-93°F (33-34°C)"
          ],
          correctAnswer: 2,
          explanation: "Dark chocolate is tempered to 88-90°F (31-32°C) to maintain Type V cocoa butter crystals for shine and snap."
        },
        {
          id: 10,
          question: "What test determines proper gluten development in bread dough?",
          options: [
            "Float test",
            "Windowpane test",
            "Finger dent test",
            "Ribbon test"
          ],
          correctAnswer: 1,
          explanation: "The windowpane test stretches a small piece of dough thin enough to see light through without tearing."
        },
        {
          id: 11,
          question: "How long should pastry dough rest between turns during lamination?",
          options: [
            "30 minutes refrigerated",
            "10-15 minutes",
            "1 hour at room temperature",
            "2 hours minimum"
          ],
          correctAnswer: 0,
          explanation: "Pastry dough should rest 30 minutes refrigerated between turns to relax gluten and keep butter firm."
        },
        {
          id: 12,
          question: "What percentage of cornstarch is used to thicken pastry cream?",
          options: [
            "1-2% of liquid weight",
            "7-8% of liquid weight",
            "3-4% of liquid weight",
            "5-6% of liquid weight"
          ],
          correctAnswer: 2,
          explanation: "Pastry cream uses 3-4% cornstarch by weight of the liquid for proper thickening without gumminess."
        },
        {
          id: 13,
          question: "What cocoa butter crystals create properly tempered chocolate?",
          options: [
            "Type IV crystals",
            "Type VI crystals",
            "Type III crystals",
            "Type V crystals"
          ],
          correctAnswer: 3,
          explanation: "Type V beta crystals create chocolate with shine, snap, and proper melting characteristics."
        },
        {
          id: 14,
          question: "What is the purpose of autolyse in bread making?",
          options: [
            "To develop flavor",
            "To activate yeast",
            "To kill unwanted bacteria",
            "To hydrate flour before mixing"
          ],
          correctAnswer: 3,
          explanation: "Autolyse (resting flour and water) allows flour to fully hydrate before mixing, reducing mixing time and improving dough handling."
        },
        {
          id: 15,
          question: "What temperature is 'soft ball' stage for sugar?",
          options: [
            "225-230°F (107-110°C)",
            "245-250°F (118-121°C)",
            "215-220°F (102-104°C)",
            "235-240°F (113-116°C)"
          ],
          correctAnswer: 3,
          explanation: "Soft ball stage is 235-240°F (113-116°C) - sugar forms a soft ball when dropped in cold water."
        },
        {
          id: 16,
          question: "How many layers does 6 turns create in puff pastry theoretically?",
          options: [
            "6561 layers",
            "243 layers",
            "729 layers",
            "2187 layers"
          ],
          correctAnswer: 2,
          explanation: "Each turn triples the layers. 6 turns creates 3^6 = 729 layers theoretically (though some merge during baking)."
        },
        {
          id: 17,
          question: "What is the main difference between croissant and puff pastry dough?",
          options: [
            "Croissant has yeast",
            "Croissant uses milk instead of water",
            "Puff pastry has sugar added",
            "Puff pastry has more butter"
          ],
          correctAnswer: 0,
          explanation: "Croissant dough contains yeast for additional rise during proofing and baking, while puff pastry relies solely on steam."
        },
        {
          id: 18,
          question: "What minimum number of components should a modern plated dessert have?",
          options: [
            "6-8 components",
            "3-5 components",
            "9-10 components",
            "1-2 components"
          ],
          correctAnswer: 1,
          explanation: "Modern plated desserts typically have 3-5 components to provide flavor, texture, and temperature contrasts."
        },
        {
          id: 19,
          question: "At what temperature does sugar caramelize?",
          options: [
            "300-320°F (149-160°C)",
            "280-300°F (138-149°C)",
            "350-375°F (177-191°C)",
            "320-350°F (160-177°C)"
          ],
          correctAnswer: 3,
          explanation: "Sugar begins to caramelize around 320°F (160°C) and develops complex flavors up to 350°F (177°C)."
        },
        {
          id: 20,
          question: "What butterfat content is required for quality puff pastry butter?",
          options: [
            "80% minimum",
            "85% minimum",
            "75% minimum",
            "83% minimum"
          ],
          correctAnswer: 3,
          explanation: "Puff pastry requires butter with at least 83% butterfat for proper layering and flakiness. European-style butters often have 82-86%."
        }
      ]
    },
    {
      id: 5,
      title: "Menu Engineering and Design",
      content: `# Module 5: Menu Engineering and Design

## Strategic Menu Planning for Profit and Popularity

Menu engineering combines culinary art with business science to maximize profitability while delighting guests.

### **1. Menu Engineering Matrix**
The **Boston Consulting Group matrix** adapted for menus classifies items by:
- **Popularity** (sales mix percentage)
- **Profitability** (contribution margin)

**Four categories of menu items**:
1. **Stars**: High popularity, high profit (promote heavily)
2. **Plowhorses**: High popularity, low profit (raise price or reduce cost)
3. **Puzzles**: Low popularity, high profit (improve marketing)
4. **Dogs**: Low popularity, low profit (consider removing)

**Calculation methods**:
- **Popularity threshold**: 70% of average item sales (if average item sells 10%, threshold = 7%)
- **Profitability threshold**: 70% of average item profit
- **Contribution margin**: Menu price - food cost - variable costs

**Menu mix analysis**:
- **Ideal distribution**: 20-30% Stars, 30-40% Plowhorses, 10-20% Puzzles, <10% Dogs
- **Monthly review**: Menu items should be analyzed monthly
- **Seasonal adjustments**: Rotate 20-30% of menu seasonally

### **2. Pricing Strategies and Psychology**
**Common pricing methods**:
1. **Food cost percentage**: Price = Food cost ÷ Target food cost %
   - Example: $4 food cost at 30% target = $13.33 price
2. **Prime cost pricing**: (Food cost + Labor cost) ÷ Target prime cost %
3. **Competitive pricing**: Market-based, match or beat competitors
4. **Value-based pricing**: Price based on perceived value to customer

**Psychological pricing techniques**:
- **Charm pricing**: Ending in .95 or .99 ($19.95 vs $20)
- **Prestige pricing**: Round numbers for luxury ($40 vs $39.95)
- **Price anchoring**: High-priced item makes others seem reasonable
- **Decoy pricing**: Middle option makes target option seem better value

**Menu design psychology**:
- **Golden triangle**: Upper right corner gets most attention
- **Boxing**: Draws attention to specific items (increases sales 25%)
- **Descriptions**: Items with descriptions sell 27% more
- **Photos**: Increase sales but may lower perceived quality

### **3. Menu Layout and Design Principles**
**Effective menu organization**:
- **Courses flow**: Appetizers → Soups/Salads → Mains → Desserts
- **Category organization**: By protein, cooking method, or region
- **Visual hierarchy**: Size, font, placement indicate importance
- **White space**: 40-60% of menu should be blank space

**Typographic guidelines**:
- **Font families**: Maximum 2 typefaces, 3-4 font sizes
- **Readability**: Serif fonts for body, sans-serif for headers
- **Point size**: 10-12pt for descriptions, 12-14pt for prices
- **Alignment**: Prices right-aligned in column for easy comparison

**Descriptive writing techniques**:
- **Sensory words**: Crispy, creamy, smoky, tender, aromatic
- **Origin stories**: "Locally sourced," "Farm-to-table," "House-made"
- **Preparation methods**: "Wood-fired," "Slow-braised," "Hand-rolled"
- **Benefit statements**: "Gluten-free," "Vegan," "Heart-healthy"

### **4. Special Menu Development**
**Tasting menu design**:
- **Course progression**: 5-12 courses, light to heavy, simple to complex
- **Pacing**: 15-20 minutes between courses
- **Price points**: $75-300+ depending on restaurant level
- **Wine pairing**: Additional $50-150 for 2-3oz pours per course

**Seasonal menu rotations**:
- **Frequency**: Quarterly (4x per year) minimum
- **Percentage change**: 20-30% of menu items
- **Ingredient focus**: Highlight peak seasonal ingredients
- **Promotion**: 2-3 weeks advance notice, special events

**Special dietary menus**:
- **Allergy-friendly**: Separate preparation areas, dedicated equipment
- **Vegetarian/vegan**: 20-25% of menu items minimum in modern restaurants
- **Gluten-free**: Clearly marked, separate fryers for fried items
- **Children's menus**: 3-5 options, smaller portions, lower prices

### **5. Cost Control Systems**
**Theoretical vs. actual food cost**:
- **Theoretical**: Based on standardized recipes and portion sizes
- **Actual**: Based on physical inventory and sales
- **Variance analysis**: Difference indicates waste, theft, or errors
- **Acceptable variance**: <2% is excellent, >5% needs investigation

**Portion control systems**:
- **Standardized recipes**: Every ingredient measured by weight
- **Portioning tools**: Scoops, ladles, scales for consistent serving
- **Yield testing**: Regular verification of portion sizes
- **Plate waste tracking**: Monitor what comes back to kitchen

**Inventory management**:
- **PAR levels**: Periodic Automatic Replacement (minimum stock levels)
- **Turnover rate**: Ideal 1-2 times per month for perishables
- **ABC analysis**: Classify items by value (A=high value, C=low)
- **Cycle counting**: Count different sections daily rather than full monthly inventory`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "In menu engineering, what are items with high popularity but low profit called?",
          options: [
            "Stars",
            "Puzzles",
            "Dogs",
            "Plowhorses"
          ],
          correctAnswer: 3,
          explanation: "Plowhorses have high sales volume but low profitability - they need price increases or cost reductions."
        },
        {
          id: 2,
          question: "What is the typical popularity threshold in menu engineering analysis?",
          options: [
            "90% of average item sales",
            "100% of average item sales",
            "70% of average item sales",
            "50% of average item sales"
          ],
          correctAnswer: 2,
          explanation: "The popularity threshold is typically 70% of average item sales. If average item sells 10% of total, threshold = 7%."
        },
        {
          id: 3,
          question: "What pricing method uses: Price = Food cost ÷ Target food cost %?",
          options: [
            "Food cost percentage pricing",
            "Competitive pricing",
            "Value-based pricing",
            "Prime cost pricing"
          ],
          correctAnswer: 0,
          explanation: "Food cost percentage pricing: Price = Food cost ÷ Target food cost %. Example: $4 cost at 30% target = $13.33 price."
        },
        {
          id: 4,
          question: "How much do items with descriptions typically outsell items without descriptions?",
          options: [
            "50% more",
            "27% more",
            "12% more",
            "35% more"
          ],
          correctAnswer: 1,
          explanation: "Menu items with descriptions sell approximately 27% more than those without descriptions, according to industry studies."
        },
        {
          id: 5,
          question: "What percentage of a menu should typically be white space?",
          options: [
            "20-30%",
            "40-60%",
            "60-70%",
            "70-80%"
          ],
          correctAnswer: 1,
          explanation: "40-60% of a menu should be white space for readability and to prevent overwhelming guests with too much information."
        },
        {
          id: 6,
          question: "How many typefaces should a well-designed menu typically use?",
          options: [
            "4 typefaces maximum",
            "2 typefaces maximum",
            "3 typefaces maximum",
            "1 typeface maximum"
          ],
          correctAnswer: 1,
          explanation: "Maximum 2 typefaces (with 3-4 font sizes) maintains visual cohesion while allowing necessary hierarchy."
        },
        {
          id: 7,
          question: "What is an acceptable variance between theoretical and actual food cost?",
          options: [
            "Less than 10%",
            "Less than 5%",
            "Less than 2%",
            "Less than 1%"
          ],
          correctAnswer: 2,
          explanation: "Less than 2% variance indicates excellent control. More than 5% suggests waste, theft, or serious portion control issues."
        },
        {
          id: 8,
          question: "What does PAR stand for in inventory management?",
          options: [
            "Partial Average Replenishment",
            "Product Allocation Ratio",
            "Purchase And Receive",
            "Periodic Automatic Replacement"
          ],
          correctAnswer: 3,
          explanation: "PAR = Periodic Automatic Replacement - minimum stock levels that trigger reordering to maintain consistent inventory."
        },
        {
          id: 9,
          question: "What is 'charm pricing'?",
          options: [
            "Round numbers for luxury items",
            "Prices slightly below competitors",
            "Seasonal discount pricing",
            "Prices ending in .95 or .99"
          ],
          correctAnswer: 3,
          explanation: "Charm pricing ends in .95 or .99 ($19.95 instead of $20) - psychologically appears significantly cheaper."
        },
        {
          id: 10,
          question: "What percentage of menu items should be rotated seasonally?",
          options: [
            "20-30%",
            "5-10%",
            "60-70%",
            "40-50%"
          ],
          correctAnswer: 0,
          explanation: "20-30% of menu items should rotate seasonally to keep offerings fresh and take advantage of peak ingredients."
        },
        {
          id: 11,
          question: "What are 'Puzzles' in menu engineering?",
          options: [
            "High popularity, high profit",
            "High popularity, low profit",
            "Low popularity, high profit",
            "Low popularity, low profit"
          ],
          correctAnswer: 2,
          explanation: "Puzzles have high profitability but low sales - they need better marketing or menu placement to increase popularity."
        },
        {
          id: 12,
          question: "What is the ideal distribution of 'Stars' on a menu?",
          options: [
            "10-20% of items",
            "40-50% of items",
            "30-40% of items",
            "20-30% of items"
          ],
          correctAnswer: 3,
          explanation: "20-30% of menu items should be Stars (high popularity, high profit) - these are your menu champions."
        },
        {
          id: 13,
          question: "What is 'price anchoring'?",
          options: [
            "Matching competitor prices",
            "Using a high-priced item to make others seem reasonable",
            "Raising prices gradually over time",
            "Setting prices based on food cost"
          ],
          correctAnswer: 1,
          explanation: "Price anchoring places a high-priced item near target items, making them seem more reasonably priced by comparison."
        },
        {
          id: 14,
          question: "How many courses are typical in a tasting menu?",
          options: [
            "3-4 courses",
            "13-15 courses",
            "16-20 courses",
            "5-12 courses"
          ],
          correctAnswer: 3,
          explanation: "Tasting menus typically have 5-12 courses, allowing chefs to showcase creativity without overwhelming guests."
        },
        {
          id: 15,
          question: "What is the 'golden triangle' on a menu?",
          options: [
            "Lower left corner",
            "Center of the menu",
            "Upper right corner",
            "First item in each section"
          ],
          correctAnswer: 2,
          explanation: "The upper right corner gets the most visual attention - ideal for high-profit items you want to feature."
        },
        {
          id: 16,
          question: "What is ideal inventory turnover for perishable items?",
          options: [
            "Weekly turnover",
            "Quarterly turnover",
            "Daily turnover",
            "1-2 times per month"
          ],
          correctAnswer: 3,
          explanation: "1-2 times per month turnover is ideal for perishables - ensures freshness while minimizing waste from spoilage."
        },
        {
          id: 17,
          question: "What percentage increase in sales can boxing menu items create?",
          options: [
            "40% increase",
            "50% increase",
            "10% increase",
            "25% increase"
          ],
          correctAnswer: 3,
          explanation: "Boxing or highlighting menu items can increase sales by approximately 25% by drawing visual attention."
        },
        {
          id: 18,
          question: "What is 'cycle counting' in inventory management?",
          options: [
            "Counting everything monthly",
            "Counting different sections daily",
            "Counting only high-value items",
            "Counting when inventory is low"
          ],
          correctAnswer: 1,
          explanation: "Cycle counting counts different inventory sections daily rather than full monthly inventory - more accurate and less disruptive."
        },
        {
          id: 19,
          question: "What font type is typically best for menu descriptions?",
          options: [
            "Script fonts",
            "Serif fonts",
            "Sans-serif fonts",
            "Decorative fonts"
          ],
          correctAnswer: 1,
          explanation: "Serif fonts (with small strokes at ends) are easier to read in body text, while sans-serif works well for headers."
        },
        {
          id: 20,
          question: "How much should a wine pairing typically add to a tasting menu price?",
          options: [
            "$200-300 additional",
            "$50-150 additional",
            "$20-30 additional",
            "$400-500 additional"
          ],
          correctAnswer: 1,
          explanation: "Wine pairings typically add $50-150 to tasting menu prices for 2-3oz pours with each course, depending on wine quality."
        }
      ]
    },
    {
      id: 6,
      title: "Wine and Beverage Management",
      content: `# Module 6: Wine and Beverage Management

## Professional Beverage Service and Pairing

A chef's understanding of beverages elevates the dining experience. This module covers wine fundamentals, pairing principles, and beverage program management.

### **1. Wine Fundamentals and Service**
**Grape varieties and characteristics**:

**White grapes**:
- **Chardonnay**: Versatile, from crisp unoaked to buttery oaked
- **Sauvignon Blanc**: High acidity, grassy, citrus notes
- **Riesling**: Ranges from dry to sweet, high acidity, age-worthy
- **Pinot Grigio/Gris**: Light, crisp, neutral (Italy vs. Alsace styles)

**Red grapes**:
- **Cabernet Sauvignon**: Full-bodied, tannic, black fruit, ages well
- **Merlot**: Softer tannins, plum, chocolate, often blended
- **Pinot Noir**: Light-bodied, red fruit, earthy, Burgundy classic
- **Syrah/Shiraz**: Spicy, peppery, full-bodied (Old vs. New World)

**Professional wine service**:
- **Temperature**: Whites 45-50°F (7-10°C), Reds 55-65°F (13-18°C)
- **Opening**: Cut capsule below lip, wipe, insert corkscrew at angle
- **Decanting**: For older wines (sediment) or young tannic wines (aeration)
- **Pouring**: 5-6oz standard pour, hold bottle at base, wipe lip

**Glassware selection**:
- **Bordeaux glass**: Tall for Cabernet, Merlot (directs to back of palate)
- **Burgundy glass**: Wide bowl for Pinot Noir (delivers to tip of tongue)
- **White wine glass**: Smaller bowl maintains cooler temperature
- **Sparkling flute**: Preserves bubbles (though some prefer white wine glasses)

### **2. Food and Wine Pairing Principles**
**Basic pairing guidelines**:
1. **Match weight**: Heavy food with heavy wine, light with light
2. **Match intensity**: Bold flavors with bold wines, delicate with delicate
3. **Consider preparation**: Sauce often matters more than protein
4. **Regional pairing**: What grows together goes together

**Acidity considerations**:
- **High acid foods**: Need high acid wines (tomatoes → Sangiovese)
- **Fatty foods**: Need high acid or tannic wines (cut through fat)
- **Sweet foods**: Wine must be sweeter than food (dessert wines)
- **Spicy foods**: Low alcohol, slight sweetness (Gewürztraminer, Riesling)

**Classic pairings**:
- **Oysters**: Chablis (Chardonnay), Muscadet
- **Salmon**: Pinot Noir, Oregon or Burgundy
- **Steak**: Cabernet Sauvignon, Bordeaux blends
- **Cheese**: Varies by type (blue with sweet wines, hard with reds)
- **Chocolate**: Port, Banyuls, late-harvest Zinfandel

### **3. Beer, Spirits, and Cocktails**
**Beer styles and food pairing**:
- **Pilsner/Lager**: Crisp, clean, pairs with most foods
- **IPA**: Hoppy, bitter, pairs with spicy foods, burgers
- **Stout/Porter**: Roasty, chocolate, pairs with grilled meats, desserts
- **Sour beers**: Tart, pairs with rich foods, cheese

**Spirit categories**:
- **Whiskey/Whisky**: Grain-based, aged in oak (Bourbon, Scotch, Rye)
- **Vodka**: Neutral, can be made from grains or potatoes
- **Gin**: Juniper-forward, botanical infusions
- **Rum**: Sugarcane-based, varies from light to dark
- **Tequila/Mezcal**: Agave-based (Tequila: blue agave, specific regions)

**Classic cocktail families**:
- **Sours**: Spirit + citrus + sweetener (Daiquiri, Whiskey Sour)
- **Spirit-forward**: Minimal dilution (Old Fashioned, Martini)
- **Highballs**: Spirit + carbonated mixer (Gin & Tonic, Moscow Mule)
- **Tiki drinks**: Complex, rum-based, fruity (Mai Tai, Zombie)

### **4. Non-Alcoholic Beverage Programs**
**Modern non-alcoholic offerings**:
- **Mocktails**: Craft cocktails without alcohol
- **House-made sodas**: Fruit-based, herbal infusions
- **Kombucha**: Fermented tea, probiotic
- **Cold brew coffee**: Smooth, less acidic than hot brew
- **Artisanal teas**: Loose leaf, proper brewing temperatures

**Coffee service standards**:
- **Brewing ratios**: 1:16 coffee to water for drip (60g per liter)
- **Water temperature**: 195-205°F (91-96°C)
- **Grind size**: Adjust for brewing method (fine for espresso, coarse for French press)
- **Freshness**: Coffee best 7-21 days post-roasting

**Tea service**:
- **Water temperature**: Green 160-180°F (71-82°C), Black 200-212°F (93-100°C)
- **Steeping time**: 1-3 minutes green, 3-5 minutes black
- **Loose leaf vs. bags**: Loose leaf generally higher quality
- **Tea types**: White, green, oolong, black, pu-erh, herbal

### **5. Beverage Program Management**
**Wine list development**:
- **By-the-glass program**: 8-12 options, rotated regularly
- **Bottle selection**: Balance of regions, styles, price points
- **Markup strategies**: 2.5-3x cost common, higher for rare bottles
- **Inventory turnover**: Wine should turn 1-2x monthly

**Cost control measures**:
- **Pour cost**: Beverage cost ÷ sales = pour cost percentage
- **Target pour costs**: Wine 30-40%, Beer 20-30%, Liquor 15-25%
- **Standard recipes**: For cocktails to control cost and consistency
- **Inventory management**: Weekly counts for high-cost items

**Staff training programs**:
- **Tasting notes**: Develop house descriptions for all offerings
- **Pairing suggestions**: Train staff on recommended combinations
- **Service standards**: Uniform opening, pouring, presentation
- **Sales training**: Suggestive selling techniques without pressure`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the ideal serving temperature for white wines?",
          options: [
            "55-60°F (13-16°C)",
            "35-40°F (2-4°C)",
            "45-50°F (7-10°C)",
            "65-70°F (18-21°C)"
          ],
          correctAnswer: 2,
          explanation: "White wines should be served at 45-50°F (7-10°C). Too cold masks flavors, too warm makes them flabby."
        },
        {
          id: 2,
          question: "What is the standard wine pour in ounces?",
          options: [
            "9-10 ounces",
            "7-8 ounces",
            "5-6 ounces",
            "3-4 ounces"
          ],
          correctAnswer: 2,
          explanation: "Standard wine pour is 5-6 ounces, which allows approximately 5 glasses per 750ml bottle."
        },
        {
          id: 3,
          question: "Which wine is classically paired with oysters?",
          options: [
            "Zinfandel",
            "Cabernet Sauvignon",
            "Pinot Noir",
            "Chardonnay (Chablis)"
          ],
          correctAnswer: 3,
          explanation: "Chablis (unoaked Chardonnay from Burgundy) is the classic oyster pairing due to its crisp acidity and minerality."
        },
        {
          id: 4,
          question: "What is the basic principle when pairing wine with sweet foods?",
          options: [
            "Wine should be drier than the food",
            "Wine should be sweeter than the food",
            "Wine should be served very cold",
            "Wine should have high tannins"
          ],
          correctAnswer: 1,
          explanation: "Wine must be sweeter than the food, or it will taste sour and flat by comparison."
        },
        {
          id: 5,
          question: "What beer style pairs well with spicy foods?",
          options: [
            "Porter",
            "Pilsner",
            "IPA",
            "Stout"
          ],
          correctAnswer: 2,
          explanation: "IPA's bitterness and hop flavors cut through spice and complement spicy dishes effectively."
        },
        {
          id: 6,
          question: "What is the ideal water temperature for brewing coffee?",
          options: [
            "195-205°F (91-96°C)",
            "185-195°F (85-91°C)",
            "175-185°F (79-85°C)",
            "205-212°F (96-100°C)"
          ],
          correctAnswer: 0,
          explanation: "195-205°F (91-96°C) extracts optimal flavor from coffee without extracting bitter compounds."
        },
        {
          id: 7,
          question: "What type of glass is traditionally used for Pinot Noir?",
          options: [
            "White wine glass",
            "Bordeaux glass",
            "Standard red wine glass",
            "Burgundy glass"
          ],
          correctAnswer: 3,
          explanation: "Burgundy glasses have wider bowls that deliver Pinot Noir's delicate aromas to the tip of the tongue."
        },
        {
          id: 8,
          question: "What is a typical wine markup in restaurants?",
          options: [
            "2.5-3x cost",
            "1.5-2x cost",
            "3.5-4x cost",
            "4.5-5x cost"
          ],
          correctAnswer: 0,
          explanation: "2.5-3x cost is common for wine markup in restaurants, though rare bottles may have lower markup percentages."
        },
        {
          id: 9,
          question: "What temperature should green tea be brewed at?",
          options: [
            "140-150°F (60-66°C)",
            "190-200°F (88-93°C)",
            "160-180°F (71-82°C)",
            "Boiling (212°F/100°C)"
          ],
          correctAnswer: 2,
          explanation: "Green tea should be brewed at 160-180°F (71-82°C) to avoid extracting bitter compounds."
        },
        {
          id: 10,
          question: "What is the target pour cost percentage for wine?",
          options: [
            "20-25%",
            "30-40%",
            "40-50%",
            "50-60%"
          ],
          correctAnswer: 1,
          explanation: "Wine typically has a 30-40% pour cost (cost ÷ selling price), compared to 15-25% for liquor."
        },
        {
          id: 11,
          question: "Which red grape is known for being light-bodied with red fruit flavors?",
          options: [
            "Merlot",
            "Syrah",
            "Pinot Noir",
            "Cabernet Sauvignon"
          ],
          correctAnswer: 2,
          explanation: "Pinot Noir is light-bodied with red fruit flavors (cherry, raspberry) and earthy notes, famously from Burgundy."
        },
        {
          id: 12,
          question: "What cocktail family includes the Daiquiri and Whiskey Sour?",
          options: [
            "Sours",
            "Highballs",
            "Tiki drinks",
            "Spirit-forward"
          ],
          correctAnswer: 0,
          explanation: "Sours are spirit + citrus + sweetener. Daiquiri: rum + lime + sugar. Whiskey Sour: whiskey + lemon + sugar."
        },
        {
          id: 13,
          question: "What is the coffee to water ratio for drip brewing?",
          options: [
            "1:16 coffee to water",
            "1:12 coffee to water",
            "1:8 coffee to water",
            "1:20 coffee to water"
          ],
          correctAnswer: 0,
          explanation: "1:16 ratio (60g coffee per liter of water) is standard for drip brewing, producing balanced extraction."
        },
        {
          id: 14,
          question: "What should be done with a young, tannic red wine before serving?",
          options: [
            "Add ice cubes",
            "Serve very cold",
            "Mix with soda water",
            "Decant for aeration"
          ],
          correctAnswer: 3,
          explanation: "Young, tannic reds benefit from decanting to soften tannins through aeration."
        },
        {
          id: 15,
          question: "What is the main difference between Tequila and Mezcal?",
          options: [
            "Tequila is always clear, Mezcal is always aged",
            "Tequila is Mexican, Mezcal is Spanish",
            "Tequila is smoky, Mezcal is not",
            "Tequila uses blue agave only, Mezcal various agaves"
          ],
          correctAnswer: 3,
          explanation: "Tequila uses only blue agave from specific regions. Mezcal uses various agave types and has smoky character from pit-roasting."
        },
        {
          id: 16,
          question: "How many by-the-glass wine options should a restaurant typically offer?",
          options: [
            "18-20 options",
            "4-6 options",
            "14-16 options",
            "8-12 options"
          ],
          correctAnswer: 3,
          explanation: "8-12 by-the-glass options provide variety without overwhelming guests or creating excessive waste from open bottles."
        },
        {
          id: 17,
          question: "What is the ideal serving temperature for red wines?",
          options: [
            "45-50°F (7-10°C)",
            "Room temperature (70°F+/21°C+)",
            "55-65°F (13-18°C)",
            "65-70°F (18-21°C)"
          ],
          correctAnswer: 2,
          explanation: "Red wines should be served at 55-65°F (13-18°C), slightly cooler than typical room temperature."
        },
        {
          id: 18,
          question: "What beer style pairs well with chocolate desserts?",
          options: [
            "Stout",
            "Pilsner",
            "Sour beer",
            "IPA"
          ],
          correctAnswer: 0,
          explanation: "Stout's roasted, chocolate notes complement chocolate desserts perfectly."
        },
        {
          id: 19,
          question: "How long should black tea typically steep?",
          options: [
            "3-5 minutes",
            "1-2 minutes",
            "6-8 minutes",
            "10-12 minutes"
          ],
          correctAnswer: 0,
          explanation: "Black tea should steep 3-5 minutes. Less time = weak tea, more time = bitter tea."
        },
        {
          id: 20,
          question: "What inventory turnover is ideal for wine?",
          options: [
            "Weekly turnover",
            "Daily turnover",
            "Quarterly turnover",
            "1-2 times monthly"
          ],
          correctAnswer: 3,
          explanation: "Wine should turn over 1-2 times monthly to ensure freshness and manage inventory investment."
        }
      ]
    },
    {
      id: 7,
      title: "Restaurant Operations Management",
      content: `# Module 7: Restaurant Operations Management

## Running a Professional Food Service Establishment

This module covers the business aspects of restaurant management, from daily operations to financial management and customer service excellence.

### **1. Front of House Management**
**Restaurant service styles**:
1. **Fine dining**: Formal, multi-course, high service ratio (1 server per 8-12 guests)
2. **Casual dining**: Relaxed, moderate pricing, 1 server per 20-25 guests
3. **Fast casual**: Counter service, higher quality than fast food
4. **Family style**: Large shared plates, informal service
5. **Buffet**: Self-service with varying levels of replenishment

**Staffing ratios and scheduling**:
- **Server to guest ratio**: Fine dining 1:8-12, Casual 1:20-25
- **Busser support**: 1 busser per 3-4 servers
- **Host staffing**: Based on covers and reservation volume
- **Scheduling software**: 7-14 day advance schedules, labor law compliance

**Reservation management**:
- **Turn times**: Fine dining 2-2.5 hours, Casual 1-1.5 hours
- **Overbooking strategy**: 10-20% no-show rate typical
- **Waitlist management**: Estimated wait times, communication protocols
- **Table management software**: Optimizes seating, turn times, covers

### **2. Financial Management**
**Key performance indicators (KPIs)**:
1. **Average check**: Total sales ÷ Number of guests
2. **Covers per day**: Number of guests served
3. **Sales per square foot**: $250-400/sq ft good for full service
4. **Labor cost percentage**: 25-35% of sales (including benefits)
5. **Prime cost**: Food + Labor = 55-65% ideal

**Profit and loss statement analysis**:
- **Cost of goods sold (COGS)**: Food + Beverage costs
- **Controllable expenses**: Labor, supplies, utilities, marketing
- **Fixed expenses**: Rent, insurance, loan payments
- **Net profit**: Typically 3-10% of sales in full-service restaurants

**Budgeting and forecasting**:
- **Sales forecasting**: Historical data + seasonality + special events
- **Expense budgeting**: Based on sales forecasts and industry benchmarks
- **Cash flow management**: Daily sales, weekly payables, monthly expenses
- **Break-even analysis**: Fixed costs ÷ (1 - Variable cost percentage)

### **3. Customer Service Excellence**
**Service standards and training**:
- **Greeting time**: Within 1 minute of seating
- **Order timing**: Drink order 2 minutes, food order 5 minutes
- **Food delivery**: 15-20 minutes for appetizers, 25-35 minutes for entrees
- **Check delivery**: After last course cleared, within 2 minutes of request

**Handling complaints**:
- **LISTEN method**: Listen, Isolate, Sympathize, Take action, Explain, Notify
- **Compensation guidelines**: Appetizer/dessert comp for minor issues, full meal for major
- **Recovery rate**: 95% of complaining guests return if complaint handled well
- **Follow-up**: Call or email next day for serious complaints

**Building regulars**:
- **Name recognition**: Remember names and preferences
- **Special treatment**: Occasional comps, birthday recognition
- **Loyalty programs**: Points, VIP status, special events
- **Community involvement**: Local partnerships, charity events

### **4. Health Department Compliance**
**Health inspection preparation**:
- **Critical violations**: Temperature control, cross-contamination, hand washing
- **Non-critical violations**: Cleaning schedules, organization, labeling
- **Inspection scoring**: Typically 0-100, with 90+ being excellent
- **Corrective actions**: Must address critical violations immediately

**Food safety certification**:
- **Manager certification**: Required in most jurisdictions
- **Employee training**: Annual food handler training
- **Allergen training**: Separate program for allergen safety
- **Documentation**: Maintain training records for 2 years

**Pest control programs**:
- **Integrated Pest Management (IPM)**: Prevention first, then control
- **Monthly inspections**: By licensed pest control company
- **Employee reporting**: Immediate reporting of any pest sightings
- **Exclusion methods**: Seal openings, proper waste management

### **5. Marketing and Promotion**
**Marketing mix for restaurants**:
1. **Product**: Menu, quality, consistency
2. **Price**: Competitive positioning, value perception
3. **Place**: Location, ambiance, convenience
4. **Promotion**: Advertising, public relations, social media

**Digital marketing strategies**:
- **Website**: Online reservations, menu, photos, hours
- **Social media**: Instagram (food photos), Facebook (events), Twitter (quick updates)
- **Email marketing**: Newsletter, promotions, event announcements
- **Online reviews**: Monitor and respond to Yelp, Google, TripAdvisor

**Promotional events**:
- **Wine dinners**: 6-8 courses with paired wines
- **Chef's table**: Exclusive tasting menu in kitchen
- **Cooking classes**: Hands-on or demonstration
- **Holiday events**: Special menus for Valentine's, Mother's Day, etc.

**Community marketing**:
- **Local partnerships**: Hotels, theaters, businesses
- **Charity involvement**: Fundraisers, donation programs
- **Press relations**: Food writers, local media
- **Influencer marketing**: Local food bloggers, social media influencers`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the typical server to guest ratio in fine dining?",
          options: [
            "1 server per 8-12 guests",
            "1 server per 15-20 guests",
            "1 server per 4-6 guests",
            "1 server per 25-30 guests"
          ],
          correctAnswer: 0,
          explanation: "Fine dining typically has 1 server per 8-12 guests to provide attentive, personalized service."
        },
        {
          id: 2,
          question: "What is the typical no-show rate for restaurant reservations?",
          options: [
            "10-20%",
            "30-40%",
            "20-30%",
            "5-10%"
          ],
          correctAnswer: 0,
          explanation: "10-20% no-show rate is typical, which is why many restaurants overbook reservations slightly."
        },
        {
          id: 3,
          question: "What is 'prime cost' in restaurant financials?",
          options: [
            "Food cost only",
            "Food + Labor + Rent",
            "Food + Labor costs",
            "Labor cost only"
          ],
          correctAnswer: 2,
          explanation: "Prime cost = Food cost + Labor cost. Target is 55-65% of total sales for full-service restaurants."
        },
        {
          id: 4,
          question: "What is the typical net profit percentage for full-service restaurants?",
          options: [
            "3-10%",
            "15-20%",
            "1-3%",
            "10-15%"
          ],
          correctAnswer: 0,
          explanation: "Full-service restaurants typically achieve 3-10% net profit after all expenses. Higher for successful operations."
        },
        {
          id: 5,
          question: "How soon should a server greet guests after they are seated?",
          options: [
            "Within 3 minutes",
            "Within 1 minute",
            "Within 30 seconds",
            "Within 5 minutes"
          ],
          correctAnswer: 1,
          explanation: "Guests should be greeted within 1 minute of seating to make them feel welcome and start service promptly."
        },
        {
          id: 6,
          question: "What percentage of complaining guests will return if their complaint is handled well?",
          options: [
            "95%",
            "85%",
            "50%",
            "70%"
          ],
          correctAnswer: 0,
          explanation: "95% of complaining guests will return if their complaint is handled well, compared to only 50% if handled poorly."
        },
        {
          id: 7,
          question: "What is the target labor cost percentage including benefits?",
          options: [
            "45-55%",
            "35-45%",
            "15-20%",
            "25-35%"
          ],
          correctAnswer: 3,
          explanation: "Labor cost including benefits should be 25-35% of sales in full-service restaurants."
        },
        {
          id: 8,
          question: "What does IPM stand for in pest control?",
          options: [
            "Immediate Pest Mitigation",
            "Insect Prevention Methods",
            "Integrated Pest Management",
            "Internal Pest Monitoring"
          ],
          correctAnswer: 2,
          explanation: "IPM = Integrated Pest Management - prevention first approach using sanitation, exclusion, then control methods."
        },
        {
          id: 9,
          question: "What is considered good sales per square foot for full-service restaurants?",
          options: [
            "$250-400/sq ft",
            "$700-800/sq ft",
            "$100-150/sq ft",
            "$500-600/sq ft"
          ],
          correctAnswer: 0,
          explanation: "$250-400 per square foot annually is good for full-service restaurants. Fast food can exceed $800/sq ft."
        },
        {
          id: 10,
          question: "How long should training records be maintained for health department compliance?",
          options: [
            "3 years",
            "6 months",
            "1 year",
            "2 years"
          ],
          correctAnswer: 3,
          explanation: "Food safety training records should be maintained for at least 2 years for health department verification."
        },
        {
          id: 11,
          question: "What is the typical turn time for a fine dining table?",
          options: [
            "3-3.5 hours",
            "4-4.5 hours",
            "2-2.5 hours",
            "1-1.5 hours"
          ],
          correctAnswer: 2,
          explanation: "Fine dining tables typically turn every 2-2.5 hours due to multiple courses and leisurely pacing."
        },
        {
          id: 12,
          question: "What is the 'LISTEN' method for handling complaints?",
          options: [
            "Locate, Identify, Settle, Testify, Engage, Navigate",
            "Learn, Investigate, Satisfy, Terminate, Educate, Negotiate",
            "Look, Inquire, Solve, Thank, Evaluate, Notify",
            "Listen, Isolate, Sympathize, Take action, Explain, Notify"
          ],
          correctAnswer: 3,
          explanation: "LISTEN: Listen fully, Isolate if needed, Sympathize, Take action, Explain what you'll do, Notify management."
        },
        {
          id: 13,
          question: "What is break-even analysis formula?",
          options: [
            "Variable costs ÷ Fixed costs",
            "Fixed costs ÷ (1 - Variable cost percentage)",
            "Sales ÷ Fixed costs",
            "Fixed costs ÷ Variable costs"
          ],
          correctAnswer: 1,
          explanation: "Break-even point = Fixed costs ÷ (1 - Variable cost percentage). Example: $10,000 fixed costs ÷ (1 - 0.60) = $25,000 sales needed."
        },
        {
          id: 14,
          question: "What is the ideal server to busser ratio?",
          options: [
            "1 busser per 3-4 servers",
            "1 busser per 7-8 servers",
            "1 busser per 1-2 servers",
            "1 busser per 5-6 servers"
          ],
          correctAnswer: 0,
          explanation: "1 busser typically supports 3-4 servers, helping with water, clearing, and table resetting."
        },
        {
          id: 15,
          question: "What is a 'critical violation' in health inspections?",
          options: [
            "Dirty floors",
            "Peeling paint",
            "Improper food storage labels",
            "Temperature control issues"
          ],
          correctAnswer: 3,
          explanation: "Critical violations directly affect food safety: temperature control, cross-contamination, hand washing, etc."
        },
        {
          id: 16,
          question: "What social media platform is best for food photography?",
          options: [
            "LinkedIn",
            "Facebook",
            "Instagram",
            "Twitter"
          ],
          correctAnswer: 2,
          explanation: "Instagram is ideal for food photography and visual storytelling about menu items and restaurant ambiance."
        },
        {
          id: 17,
          question: "How long after the last course is cleared should the check be delivered?",
          options: [
            "Immediately",
            "Within 2 minutes of request",
            "Within 5 minutes",
            "Within 10 minutes"
          ],
          correctAnswer: 1,
          explanation: "The check should be delivered within 2 minutes of being requested after the last course is cleared."
        },
        {
          id: 18,
          question: "What does COGS stand for in restaurant accounting?",
          options: [
            "Cost of General Supplies",
            "Cost of Goods Sold",
            "Cost of Guest Services",
            "Cost of Goods Served"
          ],
          correctAnswer: 1,
          explanation: "COGS = Cost of Goods Sold, specifically food and beverage costs in restaurant accounting."
        },
        {
          id: 19,
          question: "How many courses are typical in a wine dinner event?",
          options: [
            "9-10 courses",
            "5-6 courses",
            "3-4 courses",
            "6-8 courses"
          ],
          correctAnswer: 3,
          explanation: "Wine dinners typically feature 6-8 courses with paired wines, allowing chefs to showcase creativity."
        },
        {
          id: 20,
          question: "What is the target food delivery time for entrees?",
          options: [
            "10-15 minutes",
            "15-20 minutes",
            "25-35 minutes",
            "40-50 minutes"
          ],
          correctAnswer: 2,
          explanation: "Entrees should be delivered 25-35 minutes after ordering, allowing time for preparation while maintaining reasonable wait."
        }
      ]
    },
    {
      id: 8,
      title: "Sustainable Kitchen Practices",
      content: `# Module 8: Sustainable Kitchen Practices

## Environmental Responsibility in Professional Kitchens

Modern chefs must balance culinary excellence with environmental stewardship. This module covers sustainable practices from sourcing to waste management.

### **1. Sustainable Sourcing**
**Local and seasonal purchasing**:
- **Food miles**: Average American meal travels 1,500 miles from farm to plate
- **Seasonal advantages**: 30-50% cost reduction at peak season
- **Local benefits**: Fresher ingredients, supports community, reduced transport
- **Challenges**: Limited availability, higher labor costs for small farms

**Sustainable seafood choices**:
- **Monterey Bay Aquarium Seafood Watch**: Green (best), Yellow (good), Red (avoid)
- **MSC certification**: Marine Stewardship Council for wild-caught
- **ASC certification**: Aquaculture Stewardship Council for farmed
- **Bycatch reduction**: Choosing fishing methods with less unintended catch

**Ethical meat and dairy**:
- **Animal welfare certifications**: Certified Humane, Animal Welfare Approved
- **Grass-fed benefits**: Higher omega-3s, better land use
- **Pasture-raised**: Animals have access to outdoors
- **Antibiotic-free**: Reduces antibiotic resistance concerns

### **2. Waste Reduction Strategies**
**Food waste hierarchy**:
1. **Source reduction**: Order accurately, use trim
2. **Feed people**: Donate edible surplus
3. **Feed animals**: Provide to farms
4. **Industrial uses**: Rendering, biofuel
5. **Composting**: Soil amendment
6. **Landfill/incineration**: Last resort

**Kitchen waste audit process**:
1. **Sort waste**: Food, packaging, other
2. **Weigh categories**: Daily for 1-2 weeks
3. **Identify sources**: Prep waste, plate waste, spoilage
4. **Set reduction goals**: 10-25% reduction realistic
5. **Implement changes**: Adjust ordering, prep methods, portion sizes

**Composting systems**:
- **On-site composting**: Requires space, proper management
- **Commercial collection**: Hauled to composting facility
- **Vermicomposting**: Worm bins for small amounts
- **Bokashi**: Fermentation method for all food waste including meat

### **3. Energy and Water Conservation**
**Energy-efficient kitchen equipment**:
- **Energy Star rated**: 10-50% more efficient than standard
- **Induction cooking**: 90% energy efficiency vs. 40% for gas
- **Combi-ovens**: 30-40% faster cooking, less energy
- **LED lighting**: 75% less energy than incandescent

**Water conservation measures**:
- **Low-flow pre-rinse sprays**: 1.28 gpm vs. standard 2.5+ gpm
- **Efficient dishwashers**: 0.5-1.0 gallons per rack
- **Water-efficient ice machines**: 10-15 gallons per 100 lbs ice
- **Leak detection**: A dripping faucet wastes 3,000+ gallons/year

**Heating, ventilation, and air conditioning (HVAC)**:
- **Heat recovery systems**: Capture kitchen heat for water heating
- **Demand-controlled ventilation**: Adjusts based on cooking load
- **Regular maintenance**: Dirty filters increase energy use 15-20%
- **Kitchen hood optimization**: Run only when needed

### **4. Sustainable Packaging and Supplies**
**Eco-friendly packaging options**:
- **Compostable containers**: PLA (corn-based), bagasse (sugarcane)
- **Recycled content**: Post-consumer recycled paper, plastic
- **Reusable programs**: Deposit systems for containers
- **Minimal packaging**: Reduce unnecessary wrapping

**Cleaning product selection**:
- **Green Seal certification**: Environmental standards for cleaners
- **Concentrated products**: Reduce packaging and shipping
- **Biodegradable**: Breaks down safely in environment
- **Local manufacturing**: Reduce transport emissions

**Single-use plastic reduction**:
- **Straw alternatives**: Paper, pasta, reusable metal/silicone
- **Utensil options**: Wooden, compostable, or request-only
- **Bags**: Paper with high recycled content, reusable options
- **Wrap alternatives**: Beeswax wraps, silicone lids

### **5. Community and Social Responsibility**
**Local community engagement**:
- **Food donations**: Partner with food banks (Bill Emerson Act protects donors)
- **Community gardens**: Source from or donate to local gardens
- **Educational programs**: Cooking classes, farm tours
- **Employment practices**: Living wages, benefits, advancement opportunities

**Fair trade and ethical sourcing**:
- **Fair trade certification**: Ensures fair prices for producers
- **Direct trade**: Building relationships with producers
- **Transparent sourcing**: Knowing and sharing product origins
- **Worker welfare**: Ensuring ethical conditions throughout supply chain

**Measuring and reporting sustainability**:
- **Carbon footprint calculation**: Measure greenhouse gas emissions
- **Waste diversion rate**: Percentage kept from landfill
- **Water usage per cover**: Gallons used per meal served
- **Sustainability reporting**: Share progress with customers and community`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many miles does the average American meal travel from farm to plate?",
          options: [
            "500 miles",
            "2,000 miles",
            "1,500 miles",
            "1,000 miles"
          ],
          correctAnswer: 2,
          explanation: "The average American meal travels approximately 1,500 miles from farm to plate, contributing to significant carbon emissions."
        },
        {
          id: 2,
          question: "What is the first priority in the food waste hierarchy?",
          options: [
            "Donation to food banks",
            "Animal feed",
            "Source reduction",
            "Composting"
          ],
          correctAnswer: 2,
          explanation: "Source reduction (not creating waste in the first place) is the most effective approach in the food waste hierarchy."
        },
        {
          id: 3,
          question: "What energy efficiency percentage does induction cooking typically achieve?",
          options: [
            "90% efficiency",
            "40% efficiency",
            "75% efficiency",
            "60% efficiency"
          ],
          correctAnswer: 0,
          explanation: "Induction cooking achieves approximately 90% energy efficiency by directly heating the cookware, compared to 40% for gas."
        },
        {
          id: 4,
          question: "What does MSC certification indicate for seafood?",
          options: [
            "Organic farming practices",
            "Antibiotic-free production",
            "Aquaculture Stewardship Council farmed",
            "Marine Stewardship Council sustainable wild-caught"
          ],
          correctAnswer: 3,
          explanation: "MSC = Marine Stewardship Council certification indicates sustainably caught wild seafood from well-managed fisheries."
        },
        {
          id: 5,
          question: "What percentage cost reduction can seasonal purchasing achieve at peak season?",
          options: [
            "70-90%",
            "10-20%",
            "50-70%",
            "30-50%"
          ],
          correctAnswer: 3,
          explanation: "Purchasing at peak season can reduce costs by 30-50% due to abundance and reduced transportation needs."
        },
        {
          id: 6,
          question: "How much water does a dripping faucet typically waste per year?",
          options: [
            "1,000 gallons",
            "5,000+ gallons",
            "3,000+ gallons",
            "500 gallons"
          ],
          correctAnswer: 2,
          explanation: "A single dripping faucet can waste over 3,000 gallons of water per year - a significant and preventable loss."
        },
        {
          id: 7,
          question: "What is a realistic food waste reduction goal for a kitchen audit?",
          options: [
            "10-25% reduction",
            "5% reduction",
            "50-60% reduction",
            "30-40% reduction"
          ],
          correctAnswer: 0,
          explanation: "10-25% reduction is realistic and achievable through better ordering, prep, and portion control."
        },
        {
          id: 8,
          question: "What does ASC certification indicate for seafood?",
          options: [
            "Wild-caught sustainability",
            "Aquaculture Stewardship Council farmed",
            "Antibiotic-free production",
            "Organic certification"
          ],
          correctAnswer: 1,
          explanation: "ASC = Aquaculture Stewardship Council certification indicates responsibly farmed seafood with environmental and social standards."
        },
        {
          id: 9,
          question: "What percentage more efficient are Energy Star rated appliances?",
          options: [
            "75-90% more efficient",
            "50-75% more efficient",
            "5-10% more efficient",
            "10-50% more efficient"
          ],
          correctAnswer: 3,
          explanation: "Energy Star rated appliances are typically 10-50% more energy efficient than standard models."
        },
        {
          id: 10,
          question: "What federal act protects restaurants that donate food?",
          options: [
            "Food Safety Modernization Act",
            "Sustainable Food Donation Act",
            "Food Recovery and Donation Act",
            "Bill Emerson Good Samaritan Act"
          ],
          correctAnswer: 3,
          explanation: "The Bill Emerson Good Samaritan Food Donation Act protects donors from liability when donating food in good faith."
        },
        {
          id: 11,
          question: "What composting method can handle all food waste including meat?",
          options: [
            "Vermicomposting",
            "Traditional composting",
            "All of the above",
            "Bokashi fermentation"
          ],
          correctAnswer: 3,
          explanation: "Bokashi fermentation can handle all food waste including meat and dairy, which traditional composting cannot."
        },
        {
          id: 12,
          question: "How much faster do combi-ovens typically cook compared to conventional ovens?",
          options: [
            "70-80% faster",
            "10-20% faster",
            "30-40% faster",
            "50-60% faster"
          ],
          correctAnswer: 2,
          explanation: "Combi-ovens cook 30-40% faster due to precise steam and temperature control, saving energy and time."
        },
        {
          id: 13,
          question: "What is bagasse packaging made from?",
          options: [
            "Bamboo",
            "Sugarcane fiber",
            "Recycled paper",
            "Corn starch"
          ],
          correctAnswer: 1,
          explanation: "Bagasse is made from sugarcane fiber left after juice extraction - a sustainable byproduct used for containers."
        },
        {
          id: 14,
          question: "What percentage increase in energy use do dirty HVAC filters cause?",
          options: [
            "35-40% increase",
            "25-30% increase",
            "5-10% increase",
            "15-20% increase"
          ],
          correctAnswer: 3,
          explanation: "Dirty HVAC filters can increase energy use by 15-20% due to reduced airflow and system strain."
        },
        {
          id: 15,
          question: "What does PLA stand for in compostable packaging?",
          options: [
            "Poly Lactic Acid",
            "Processed Leaf Aggregate",
            "Post-Consumer Landfill Alternative",
            "Plant-Based Linear Array"
          ],
          correctAnswer: 0,
          explanation: "PLA = Poly Lactic Acid, a compostable plastic made from corn starch or sugarcane."
        },
        {
          id: 16,
          question: "What is the main advantage of low-flow pre-rinse sprays?",
          options: [
            "Better cleaning power",
            "Higher pressure",
            "Longer lifespan",
            "Reduced water use (1.28 gpm vs. 2.5+ gpm)"
          ],
          correctAnswer: 3,
          explanation: "Low-flow pre-rinse sprays use 1.28 gallons per minute vs. standard 2.5+ gpm, saving significant water."
        },
        {
          id: 17,
          question: "What does direct trade mean in ethical sourcing?",
          options: [
            "Buying only local products",
            "Trading directly with producers",
            "Trading without middlemen for better prices",
            "Using fair trade certified products"
          ],
          correctAnswer: 2,
          explanation: "Direct trade involves building relationships directly with producers, often resulting in better prices and transparency."
        },
        {
          id: 18,
          question: "How much energy do LED lights save compared to incandescent?",
          options: [
            "25% less energy",
            "75% less energy",
            "90% less energy",
            "50% less energy"
          ],
          correctAnswer: 1,
          explanation: "LED lights use approximately 75% less energy than incandescent bulbs and last 25 times longer."
        },
        {
          id: 19,
          question: "What is the Seafood Watch 'Green' rating?",
          options: [
            "Good Alternative",
            "Best Choice",
            "Farmed Only",
            "Avoid"
          ],
          correctAnswer: 1,
          explanation: "Green = Best Choice, Yellow = Good Alternative, Red = Avoid, according to Monterey Bay Aquarium Seafood Watch."
        },
        {
          id: 20,
          question: "What measurement tracks percentage of waste kept from landfill?",
          options: [
            "Waste diversion rate",
            "Energy intensity",
            "Carbon footprint",
            "Water usage per cover"
          ],
          correctAnswer: 0,
          explanation: "Waste diversion rate = (Waste diverted from landfill ÷ Total waste) × 100%. Target is often 75%+ for sustainable operations."
        }
      ]
    },
    {
      id: 9,
      title: "Culinary Innovation and Trends",
      content: `# Module 9: Culinary Innovation and Trends

## Staying Ahead in the Evolving Food World

This module explores emerging trends, innovative techniques, and future directions in the culinary industry.

### **1. Current Culinary Trends**
**Plant-forward dining**:
- **Flexitarian movement**: Mostly plant-based with occasional meat
- **Vegetable-centric plates**: Vegetables as centerpiece, meat as garnish
- **Meat alternatives**: Beyond Meat, Impossible Foods, cultured meat
- **Whole vegetable utilization**: Nose-to-tail for vegetables

**Global flavor exploration**:
- **Regional specificity**: Moving beyond "Asian" or "Latin" to specific regions
- **Authenticity vs. fusion**: Respectful adaptation vs. creative combination
- **Spice exploration**: Beyond heat to complexity and layering
- **Fermentation revival**: Kimchi, koji, miso, kombucha

**Health and wellness focus**:
- **Functional foods**: Ingredients with specific health benefits
- **Clean labeling**: Simple, recognizable ingredients
- **Diet-specific menus**: Keto, paleo, gluten-free, low-FODMAP
- **Mindful eating**: Smaller portions, balanced nutrition

### **2. Technological Innovations**
**Kitchen technology advancements**:
- **Smart equipment**: Wi-Fi enabled, data tracking, remote monitoring
- **Precision cooking**: Sous vide, combi-ovens with humidity control
- **Automation**: Robotic kitchen assistants, automated cooking systems
- **3D food printing**: Custom shapes, personalized nutrition

**Digital transformation**:
- **Online ordering integration**: Direct from website, third-party apps
- **Kitchen display systems**: Paperless tickets, order tracking
- **Inventory management software**: Real-time tracking, automatic ordering
- **Customer relationship management**: Personalized marketing, loyalty programs

**Sustainability technology**:
- **Energy monitoring systems**: Real-time usage tracking
- **Waste tracking software**: Identify patterns, set reduction goals
- **Water recycling systems**: Greywater reuse for non-potable uses
- **Vertical farming**: On-site or local controlled environment agriculture

### **3. Modern Service Models**
**Ghost kitchens and virtual restaurants**:
- **Delivery-only concepts**: Lower overhead, focused menus
- **Multiple brands from one kitchen**: Different menus from same space
- **Cloud kitchens**: Shared commissary spaces for multiple operators
- **Revenue potential**: 15-30% higher margins than traditional restaurants

**Experiential dining**:
- **Immersive experiences**: Multi-sensory dining, thematic environments
- **Interactive elements**: Tableside preparation, guest participation
- **Storytelling**: Connecting food to place, history, culture
- **Exclusive access**: Chef's tables, members-only dining clubs

**Subscription and meal kit models**:
- **Meal kit delivery**: Pre-portioned ingredients with recipes
- **Restaurant subscriptions**: Regular delivery of prepared meals
- **Wine/ beverage clubs**: Curated monthly selections
- **Revenue stability**: Predictable income, customer retention

### **4. Future Food Systems**
**Alternative proteins**:
- **Plant-based meats**: Pea protein, soy, wheat gluten formulations
- **Cultured meat**: Lab-grown from animal cells
- **Insect protein**: High protein, low environmental impact
- **Algae and seaweed**: Nutrient-dense, sustainable growth

**Urban food production**:
- **Rooftop gardens**: On-site produce, reduces transportation
- **Hydroponics/aeroponics**: Soilless growing, water efficient
- **Aquaponics**: Combined fish and plant cultivation
- **Community supported agriculture (CSA)**: Direct farm-to-restaurant relationships

**Circular economy principles**:
- **Closed-loop systems**: Waste from one process becomes input for another
- **Upcycled ingredients**: Using food byproducts creatively
- **Compost-to-farm**: Returning nutrients to soil
- **Packaging reuse**: Systems for container return and refill

### **5. Innovation Management**
**Creative process in kitchens**:
- **Idea generation**: Market research, ingredient exploration, technique experimentation
- **Testing and refinement**: Small batch testing, staff feedback, guest trials
- **Implementation**: Standardized recipes, staff training, menu integration
- **Evaluation**: Sales data, guest feedback, cost analysis

**Collaboration and inspiration**:
- **Industry events**: Food conferences, trade shows, competitions
- **Social media**: Instagram, TikTok for visual inspiration
- **Professional networks**: Chef associations, mentoring programs
- **Continuing education**: Workshops, classes, certifications

**Balancing innovation and consistency**:
- **Core menu stability**: 70-80% stable items, 20-30% seasonal/innovative
- **Guest expectations**: Meeting expectations while surprising delightfully
- **Staff capability**: Training for new techniques and ingredients
- **Cost considerations**: Balancing creativity with profitability`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does 'plant-forward' dining emphasize?",
          options: [
            "Meat with vegetable garnishes",
            "Raw foods only",
            "Plant-based foods as centerpiece with occasional meat",
            "Eliminating all animal products"
          ],
          correctAnswer: 2,
          explanation: "Plant-forward places plants at the center of the plate, with animal proteins as accents or occasional additions."
        },
        {
          id: 2,
          question: "What are ghost kitchens?",
          options: [
            "Kitchens that only serve at night",
            "Delivery-only kitchens without dining room",
            "Abandoned restaurant spaces",
            "Haunted restaurant buildings"
          ],
          correctAnswer: 1,
          explanation: "Ghost kitchens are delivery-only operations without dining rooms, focusing on online orders for lower overhead."
        },
        {
          id: 3,
          question: "What margin advantage can ghost kitchens have over traditional restaurants?",
          options: [
            "30-40% higher margins",
            "5-10% higher margins",
            "40-50% higher margins",
            "15-30% higher margins"
          ],
          correctAnswer: 3,
          explanation: "Ghost kitchens can achieve 15-30% higher margins due to lower rent, fewer staff, and focused operations."
        },
        {
          id: 4,
          question: "What is cultured meat?",
          options: [
            "Plant-based meat alternatives",
            "Fermented meat products",
            "Meat from specially raised animals",
            "Lab-grown meat from animal cells"
          ],
          correctAnswer: 3,
          explanation: "Cultured meat is grown from animal cells in labs, potentially offering meat without animal slaughter."
        },
        {
          id: 5,
          question: "What does CSA stand for in local food systems?",
          options: [
            "Certified Seasonal Agriculture",
            "Community Supported Agriculture",
            "Commercial Sustainable Agriculture",
            "Culinary Specialists Association"
          ],
          correctAnswer: 1,
          explanation: "CSA = Community Supported Agriculture - consumers buy shares of a farm's harvest in advance, supporting local farmers."
        },
        {
          id: 6,
          question: "What percentage of a menu should typically be stable versus innovative?",
          options: [
            "50% stable, 50% innovative",
            "90% stable, 10% innovative",
            "60% stable, 40% innovative",
            "70-80% stable, 20-30% innovative"
          ],
          correctAnswer: 3,
          explanation: "70-80% stable items maintain regulars' favorites, while 20-30% innovative items keep the menu fresh and exciting."
        },
        {
          id: 7,
          question: "What is the main advantage of vertical farming?",
          options: [
            "Faster growth than traditional farming",
            "Higher yields in less space",
            "Less technical knowledge required",
            "Lower startup costs"
          ],
          correctAnswer: 1,
          explanation: "Vertical farming produces higher yields in less space using stacked layers, ideal for urban environments."
        },
        {
          id: 8,
          question: "What does 'upcycled ingredients' refer to?",
          options: [
            "Using food byproducts creatively",
            "Recycling packaging materials",
            "Ingredients that have been frozen and thawed",
            "Ingredients grown upward instead of outward"
          ],
          correctAnswer: 0,
          explanation: "Upcycled ingredients creatively use food byproducts that would otherwise be waste, like carrot tops or whey."
        },
        {
          id: 9,
          question: "What is aquaponics?",
          options: [
            "Growing plants in water only",
            "Combined fish and plant cultivation",
            "Growing plants in air with mist",
            "Soil-based farming with fish fertilizer"
          ],
          correctAnswer: 1,
          explanation: "Aquaponics combines aquaculture (fish farming) with hydroponics (soilless plant growing) in a symbiotic system."
        },
        {
          id: 10,
          question: "What does 'circular economy' mean in food systems?",
          options: [
            "Waste from one process becomes input for another",
            "Rotating menu items seasonally",
            "Circular dining room layouts",
            "Serving food on round plates"
          ],
          correctAnswer: 0,
          explanation: "Circular economy designs systems where waste from one process becomes valuable input for another, eliminating waste."
        },
        {
          id: 11,
          question: "What is a 'virtual restaurant'?",
          options: [
            "Restaurant in virtual reality",
            "Online restaurant review site",
            "Restaurant with no physical location",
            "Multiple brands operating from one physical kitchen"
          ],
          correctAnswer: 3,
          explanation: "Virtual restaurants are multiple delivery-only brands operating from a single physical kitchen space."
        },
        {
          id: 12,
          question: "What is the 'flexitarian' movement?",
          options: [
            "Mostly plant-based with occasional meat",
            "Flexible dining reservations",
            "Eating only during flexible hours",
            "Flexible workout routines"
          ],
          correctAnswer: 0,
          explanation: "Flexitarians eat mostly plant-based diets with occasional meat or fish, focusing on reducing rather than eliminating animal products."
        },
        {
          id: 13,
          question: "What technology enables precise humidity control in ovens?",
          options: [
            "Conventional ovens",
            "Combi-ovens",
            "Microwave ovens",
            "Pizza ovens"
          ],
          correctAnswer: 1,
          explanation: "Combi-ovens (combination steam/convection) allow precise humidity control from 0-100% steam."
        },
        {
          id: 14,
          question: "What is 'clean labeling'?",
          options: [
            "Handwritten labels only",
            "Simple, recognizable ingredients",
            "Labels with no nutritional information",
            "Labels without dirt"
          ],
          correctAnswer: 1,
          explanation: "Clean labeling uses simple, recognizable ingredients that consumers understand, avoiding artificial additives."
        },
        {
          id: 15,
          question: "What growing method uses no soil and mists roots with nutrients?",
          options: [
            "Hydroponics",
            "Aquaponics",
            "Traditional agriculture",
            "Aeroponics"
          ],
          correctAnswer: 3,
          explanation: "Aeroponics grows plants with roots suspended in air, misted with nutrient solution - highly water efficient."
        },
        {
          id: 16,
          question: "What is the primary benefit of kitchen display systems?",
          options: [
            "Lower equipment costs",
            "Paperless tickets and order tracking",
            "Better lighting for food photos",
            "Entertainment for cooks"
          ],
          correctAnswer: 1,
          explanation: "Kitchen display systems create paperless tickets, track order times, and improve kitchen communication and efficiency."
        },
        {
          id: 17,
          question: "What does FODMAP refer to in dietary menus?",
          options: [
            "A type of food packaging",
            "A certification for organic foods",
            "Fermentable carbohydrates that some people cannot digest",
            "A type of cooking method"
          ],
          correctAnswer: 2,
          explanation: "FODMAPs are fermentable carbohydrates that can cause digestive issues for some people, requiring specialized menus."
        },
        {
          id: 18,
          question: "What is the main advantage of robotic kitchen assistants?",
          options: [
            "Better creativity than humans",
            "They never take breaks",
            "Lower energy consumption",
            "Consistency and labor cost reduction"
          ],
          correctAnswer: 3,
          explanation: "Robotic assistants provide perfect consistency for repetitive tasks and can reduce labor costs in high-volume operations."
        },
        {
          id: 19,
          question: "What does 'immersive dining' involve?",
          options: [
            "Multi-sensory experiences beyond just eating",
            "Dining while swimming",
            "Food served underwater",
            "Food that melts in your mouth"
          ],
          correctAnswer: 0,
          explanation: "Immersive dining engages multiple senses with thematic environments, storytelling, and interactive elements."
        },
        {
          id: 20,
          question: "What is a primary benefit of meal kit subscription models for restaurants?",
          options: [
            "Predictable revenue and customer retention",
            "No need for a kitchen",
            "Less cooking required",
            "Higher food costs"
          ],
          correctAnswer: 0,
          explanation: "Subscription models provide predictable recurring revenue and build strong customer relationships through regular engagement."
        }
      ]
    },
    {
      id: 10,
      title: "Capstone: Restaurant Concept Development",
      content: `# Module 10: Capstone: Restaurant Concept Development

## Creating Your Own Culinary Vision

This final module synthesizes all learning into developing a complete restaurant concept, from vision to financial planning.

### **1. Concept Development and Branding**
**Defining your concept**:
- **Cuisine type**: Regional specificity, fusion approach, or innovative
- **Service style**: Fine dining, casual, fast casual, food truck, ghost kitchen
- **Price point**: Budget, moderate, premium, luxury
- **Target market**: Demographic, psychographic, geographic profiling
- **Unique selling proposition**: What sets you apart from competition

**Brand identity elements**:
- **Name development**: Memorable, relevant, available (domain and trademark)
- **Logo and visual identity**: Colors, typography, imagery style
- **Brand voice**: Formal, casual, playful, sophisticated
- **Brand story**: Origin, values, mission, vision

**Market analysis**:
- **Competitor analysis**: Direct and indirect competitors, strengths/weaknesses
- **Location analysis**: Foot traffic, visibility, accessibility, demographics
- **Gap analysis**: Identifying unmet needs in local market
- **SWOT analysis**: Strengths, Weaknesses, Opportunities, Threats

### **2. Business Plan Development**
**Executive summary**:
- **Concept overview**: Brief description of restaurant
- **Market opportunity**: Why this concept will succeed
- **Financial highlights**: Projected revenue, profit, investment needed
- **Team summary**: Key personnel and their qualifications

**Market analysis section**:
- **Industry overview**: Restaurant industry trends and statistics
- **Target market**: Detailed customer profiles
- **Competitive landscape**: Analysis of 5-7 key competitors
- **Marketing strategy**: How you will attract and retain customers

**Operations plan**:
- **Location and facilities**: Size, layout, equipment needs
- **Supply chain**: Key suppliers, delivery schedules
- **Staffing plan**: Organizational chart, hiring plan, training
- **Daily operations**: Hours, service flow, quality control

### **3. Menu Development and Costing**
**Complete menu creation**:
- **Appetizers**: 6-8 items, varied prices and styles
- **Main courses**: 10-12 items, balanced proteins and options
- **Desserts**: 4-6 items, house specialties
- **Beverages**: Wine, beer, cocktails, non-alcoholic
- **Special menus**: Lunch, brunch, tasting, seasonal

**Recipe standardization**:
- **Ingredient specifications**: Exact brands, grades, specifications
- **Preparation procedures**: Step-by-step instructions
- **Portion sizes**: Exact weights and measurements
- **Plating instructions**: Visual standards and garnishes

**Costing and pricing**:
- **Ingredient costing**: Current market prices for all items
- **Recipe costing**: Total cost per recipe, cost per portion
- **Menu engineering**: Pricing based on food cost targets (28-35%)
- **Profit margin analysis**: Contribution margin for each item

### **4. Financial Projections**
**Startup cost estimation**:
- **One-time costs**: Renovation, equipment, licenses, initial inventory
- **Working capital**: 3-6 months operating expenses
- **Contingency fund**: 10-15% of total startup costs
- **Funding sources**: Personal investment, loans, investors, grants

**Sales forecasting**:
- **Cover projections**: Estimated guests per meal period
- **Average check**: Based on menu prices and expected ordering patterns
- **Seat turnover**: How many times tables turn per meal period
- **Seasonal adjustments**: Accounting for busy and slow periods

**Profit and loss projections**:
- **Revenue projections**: Monthly for first 3 years
- **Cost of goods sold**: Based on target food and beverage costs
- **Operating expenses**: Rent, utilities, labor, marketing, etc.
- **Net profit projections**: Monthly and annual

**Break-even analysis**:
- **Fixed costs**: Costs that don't vary with sales
- **Variable costs**: Percentage of sales (food, beverage, some labor)
- **Contribution margin**: Sales - Variable costs
- **Break-even point**: Fixed costs ÷ Contribution margin ratio

### **5. Implementation Plan**
**Pre-opening timeline**:
- **6-12 months out**: Business plan, funding, location search
- **3-6 months out**: Lease signing, renovations, equipment ordering
- **1-3 months out**: Hiring, training, menu testing, marketing launch
- **1 month out**: Final inspections, soft opening, staff training

**Staff hiring and training**:
- **Key hires**: Chef, General Manager, Sous Chef (6-8 weeks before opening)
- **Front of house**: Servers, hosts, bartenders (4 weeks before)
- **Back of house**: Line cooks, prep cooks, dishwashers (4 weeks before)
- **Training program**: Systems, menu knowledge, service standards

**Marketing launch plan**:
- **Pre-opening buzz**: Social media, local press, community events
- **Soft opening**: Friends and family, limited menu, discounted pricing
- **Grand opening**: Special events, promotions, media coverage
- **Ongoing marketing**: Loyalty programs, events, social media, partnerships

**Success metrics and evaluation**:
- **Financial metrics**: Food cost, labor cost, prime cost, net profit
- **Operational metrics**: Table turns, covers, average check, online reviews
- **Customer metrics**: Repeat rate, satisfaction scores, referral rate
- **Adjustment process**: Regular review and adaptation based on performance`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a Unique Selling Proposition (USP) in restaurant concept development?",
          options: [
            "The chef's background",
            "What sets the restaurant apart from competitors",
            "The menu pricing strategy",
            "The restaurant's location"
          ],
          correctAnswer: 1,
          explanation: "USP is the distinctive factor that makes your restaurant different and better than competitors - the reason customers will choose you."
        },
        {
          id: 2,
          question: "What percentage of total startup costs should be allocated to contingency funds?",
          options: [
            "5-10%",
            "15-20%",
            "10-15%",
            "20-25%"
          ],
          correctAnswer: 2,
          explanation: "10-15% contingency fund is recommended for unexpected expenses during startup and opening."
        },
        {
          id: 3,
          question: "How many months of operating expenses should working capital cover?",
          options: [
            "9-12 months",
            "6-9 months",
            "3-6 months",
            "1-2 months"
          ],
          correctAnswer: 2,
          explanation: "Working capital should cover 3-6 months of operating expenses to sustain the business until it becomes profitable."
        },
        {
          id: 4,
          question: "What does SWOT analysis stand for?",
          options: [
            "Standards, Workflow, Organization, Technology",
            "Service, Workforce, Operations, Training",
            "Strengths, Weaknesses, Opportunities, Threats",
            "Sales, Waste, Output, Timing"
          ],
          correctAnswer: 2,
          explanation: "SWOT = Strengths, Weaknesses (internal), Opportunities, Threats (external) - foundational strategic analysis."
        },
        {
          id: 5,
          question: "What is the break-even formula?",
          options: [
            "Sales ÷ Fixed costs",
            "Fixed costs ÷ Variable costs",
            "Variable costs ÷ Fixed costs",
            "Fixed costs ÷ Contribution margin ratio"
          ],
          correctAnswer: 3,
          explanation: "Break-even point = Fixed costs ÷ Contribution margin ratio (1 - Variable cost percentage)."
        },
        {
          id: 6,
          question: "When should key management staff typically be hired before opening?",
          options: [
            "6-8 weeks before opening",
            "12 weeks before opening",
            "4 weeks before opening",
            "2 weeks before opening"
          ],
          correctAnswer: 0,
          explanation: "Key management (Chef, GM) should be hired 6-8 weeks before opening to participate in planning and hiring."
        },
        {
          id: 7,
          question: "What is typically included in a business plan's executive summary?",
          options: [
            "Employee handbook contents",
            "Brief overview of concept and financial highlights",
            "Daily operating procedures",
            "Detailed financial projections"
          ],
          correctAnswer: 1,
          explanation: "Executive summary provides a concise overview of the concept, market opportunity, financial highlights, and team."
        },
        {
          id: 8,
          question: "What should a soft opening primarily focus on?",
          options: [
            "Competing with established restaurants",
            "Attracting media attention",
            "Maximizing revenue",
            "Testing systems and training staff"
          ],
          correctAnswer: 3,
          explanation: "Soft opening focuses on testing systems, training staff, and working out kinks with limited guest groups before full opening."
        },
        {
          id: 9,
          question: "What is 'psychographic profiling' of target market?",
          options: [
            "Counting population density",
            "Mapping geographic locations",
            "Studying lifestyles, values, and interests",
            "Analyzing age and income"
          ],
          correctAnswer: 2,
          explanation: "Psychographics analyze lifestyles, values, interests, and personality traits - more revealing than demographics alone."
        },
        {
          id: 10,
          question: "How many main courses should a typical dinner menu offer?",
          options: [
            "5-7 items",
            "13-15 items",
            "8-10 items",
            "10-12 items"
          ],
          correctAnswer: 3,
          explanation: "10-12 main courses provides variety without overwhelming guests or creating excessive prep complexity."
        },
        {
          id: 11,
          question: "What does 'contribution margin' mean?",
          options: [
            "Total sales revenue",
            "Food cost percentage",
            "Sales - Variable costs",
            "Net profit after all expenses"
          ],
          correctAnswer: 2,
          explanation: "Contribution margin = Sales - Variable costs. This amount contributes to covering fixed costs and profit."
        },
        {
          id: 12,
          question: "What is gap analysis in market research?",
          options: [
            "Identifying unmet needs in the market",
            "Measuring time gaps in service",
            "Analyzing age gaps in population",
            "Finding geographic gaps in restaurant distribution"
          ],
          correctAnswer: 0,
          explanation: "Gap analysis identifies unmet customer needs or underserved market segments that your concept can fill."
        },
        {
          id: 13,
          question: "When should front-of-house staff typically be hired before opening?",
          options: [
            "6 weeks before opening",
            "1 week before opening",
            "4 weeks before opening",
            "2 weeks before opening"
          ],
          correctAnswer: 2,
          explanation: "Front-of-house staff should be hired 4 weeks before opening for thorough training on systems, menu, and service."
        },
        {
          id: 14,
          question: "What is 'seat turnover' in sales forecasting?",
          options: [
            "Employee turnover rate",
            "How often chairs need replacement",
            "Customer return rate",
            "How many times tables turn per meal period"
          ],
          correctAnswer: 3,
          explanation: "Seat turnover = Number of times each seat is occupied during a meal period. Fine dining: 1-1.5x, casual: 2-3x."
        },
        {
          id: 15,
          question: "What should be included in recipe standardization?",
          options: [
            "Only chef's personal notes",
            "Only ingredient lists",
            "Just cooking temperatures",
            "Exact specifications, procedures, portions, and plating"
          ],
          correctAnswer: 3,
          explanation: "Standardized recipes include exact ingredients, preparation steps, portion sizes, and plating instructions for consistency."
        },
        {
          id: 16,
          question: "What is typically the largest startup cost for a restaurant?",
          options: [
            "Marketing expenses",
            "License fees",
            "Renovation and equipment",
            "Initial food inventory"
          ],
          correctAnswer: 2,
          explanation: "Renovation and equipment typically represent 40-60% of total startup costs for a restaurant."
        },
        {
          id: 17,
          question: "What does 'target market demographic profiling' include?",
          options: [
            "Geographic location only",
            "Lifestyles and values",
            "Food preferences only",
            "Age, income, education, occupation"
          ],
          correctAnswer: 3,
          explanation: "Demographics include measurable characteristics: age, income, education, occupation, family status, etc."
        },
        {
          id: 18,
          question: "What is the purpose of a pre-opening marketing campaign?",
          options: [
            "To hire staff",
            "To create buzz and build anticipation",
            "To generate immediate sales",
            "To test menu prices"
          ],
          correctAnswer: 1,
          explanation: "Pre-opening marketing builds anticipation, creates buzz, and develops an initial customer base before opening."
        },
        {
          id: 19,
          question: "What should be established 3-6 months before opening?",
          options: [
            "Menu tasting events",
            "Grand opening party planning",
            "Final staff hiring",
            "Lease signing and renovations"
          ],
          correctAnswer: 3,
          explanation: "3-6 months before opening: secure location, begin renovations, order equipment, and establish key supplier relationships."
        },
        {
          id: 20,
          question: "What is a critical success metric for customer satisfaction?",
          options: [
            "Food cost percentage",
            "Square footage",
            "Employee turnover",
            "Repeat customer rate"
          ],
          correctAnswer: 3,
          explanation: "Repeat customer rate indicates satisfaction - loyal customers returning regularly is a key success indicator."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Chef Training Diploma Final Examination",
    description: "Comprehensive exam covering all 10 modules. 40 questions testing mastery of advanced culinary knowledge and management skills.",
    passingScore: 75,
    
    questions: [
      {
        id: 1,
        question: "What is the target range for food cost percentage in professional restaurants?",
        options: [
          "28-35%",
          "35-40%",
          "40-45%",
          "20-25%"
        ],
        correctAnswer: 0,
        explanation: "Professional restaurants target 28-35% food cost. Fine dining may be higher, fast casual lower."
      },
      {
        id: 2,
        question: "What temperature is ideal for cooking chicken breast sous vide?",
        options: [
          "155°F (68°C)",
          "146°F (63°C)",
          "165°F (74°C)",
          "135°F (57°C)"
        ],
        correctAnswer: 1,
        explanation: "146°F (63°C) for 1-4 hours produces perfectly juicy, safe chicken breast without dryness."
      },
      {
        id: 3,
        question: "How many mother sauces are there in classical French cuisine?",
        options: [
          "6 mother sauces",
          "5 mother sauces",
          "3 mother sauces",
          "4 mother sauces"
        ],
        correctAnswer: 1,
        explanation: "5 mother sauces: Béchamel, Velouté, Espagnole, Tomato, Hollandaise - foundation of French cuisine."
      },
      {
        id: 4,
        question: "What is the protein content range for bread flour?",
        options: [
          "8-10%",
          "10-12%",
          "6-8%",
          "12-14%"
        ],
        correctAnswer: 3,
        explanation: "Bread flour contains 12-14% protein for strong gluten development in bread baking."
      },
      {
        id: 5,
        question: "What are items with high popularity but low profit called in menu engineering?",
        options: [
          "Dogs",
          "Plowhorses",
          "Puzzles",
          "Stars"
        ],
        correctAnswer: 1,
        explanation: "Plowhorses have high sales but low profitability - need price increases or cost reductions."
      },
      {
        id: 6,
        question: "What is the ideal serving temperature for white wines?",
        options: [
          "65-70°F (18-21°C)",
          "45-50°F (7-10°C)",
          "55-60°F (13-16°C)",
          "35-40°F (2-4°C)"
        ],
        correctAnswer: 1,
        explanation: "White wines should be served at 45-50°F (7-10°C) - too cold masks flavors, too warm makes flabby."
      },
      {
        id: 7,
        question: "What is the typical server to guest ratio in fine dining?",
        options: [
          "1 server per 15-20 guests",
          "1 server per 25-30 guests",
          "1 server per 4-6 guests",
          "1 server per 8-12 guests"
        ],
        correctAnswer: 3,
        explanation: "Fine dining typically has 1 server per 8-12 guests for attentive, personalized service."
      },
      {
        id: 8,
        question: "How many miles does the average American meal travel from farm to plate?",
        options: [
          "1,000 miles",
          "500 miles",
          "1,500 miles",
          "2,000 miles"
        ],
        correctAnswer: 2,
        explanation: "Average American meal travels approximately 1,500 miles, contributing to significant carbon emissions."
      },
      {
        id: 9,
        question: "What are ghost kitchens?",
        options: [
          "Kitchens that only serve at night",
          "Delivery-only kitchens without dining room",
          "Haunted restaurant buildings",
          "Abandoned restaurant spaces"
        ],
        correctAnswer: 1,
        explanation: "Ghost kitchens are delivery-only operations without dining rooms, focusing on online orders."
      },
      {
        id: 10,
        question: "What is a Unique Selling Proposition (USP) in restaurant concept development?",
        options: [
          "The menu pricing strategy",
          "The restaurant's location",
          "The chef's background",
          "What sets the restaurant apart from competitors"
        ],
        correctAnswer: 3,
        explanation: "USP is the distinctive factor that makes your restaurant different and better than competitors."
      },
      {
        id: 11,
        question: "What does HACCP stand for in food safety management?",
        options: [
          "Hot and Cold Control Protocol",
          "Hygiene Assessment and Cooking Check Points",
          "Health and Cooking Control Procedures",
          "Hazard Analysis and Critical Control Points"
        ],
        correctAnswer: 3,
        explanation: "HACCP = Hazard Analysis and Critical Control Points - systematic preventive approach to food safety."
      },
      {
        id: 12,
        question: "How many times stronger is agar-agar compared to gelatin?",
        options: [
          "4-5 times stronger",
          "6-7 times stronger",
          "8-10 times stronger",
          "2-3 times stronger"
        ],
        correctAnswer: 2,
        explanation: "Agar-agar is 8-10 times stronger than gelatin, sets at higher temperatures, and is heat-stable."
      },
      {
        id: 13,
        question: "What are the four pillars of Thai flavor balance?",
        options: [
          "Spicy, sour, sweet, salty",
          "Fresh, dried, whole, ground",
          "Hot, cold, crunchy, soft",
          "Sweet, salty, bitter, umami"
        ],
        correctAnswer: 0,
        explanation: "Thai cuisine balances four pillars: spicy, sour, sweet, and salty."
      },
      {
        id: 14,
        question: "What temperature should crème anglaise be cooked to?",
        options: [
          "180-185°F (82-85°C)",
          "170-175°F (77-79°C)",
          "190-195°F (88-91°C)",
          "160-165°F (71-74°C)"
        ],
        correctAnswer: 0,
        explanation: "Crème anglaise should reach 180-185°F (82-85°C) to thicken yolks properly without curdling."
      },
      {
        id: 15,
        question: "What is the typical popularity threshold in menu engineering analysis?",
        options: [
          "50% of average item sales",
          "100% of average item sales",
          "70% of average item sales",
          "90% of average item sales"
        ],
        correctAnswer: 2,
        explanation: "Popularity threshold is typically 70% of average item sales for menu engineering classification."
      },
      {
        id: 16,
        question: "Which wine is classically paired with oysters?",
        options: [
          "Pinot Noir",
          "Cabernet Sauvignon",
          "Chardonnay (Chablis)",
          "Zinfandel"
        ],
        correctAnswer: 2,
        explanation: "Chablis (unoaked Chardonnay) is the classic oyster pairing due to crisp acidity and minerality."
      },
      {
        id: 17,
        question: "What is 'prime cost' in restaurant financials?",
        options: [
          "Food + Labor + Rent",
          "Labor cost only",
          "Food cost only",
          "Food + Labor costs"
        ],
        correctAnswer: 3,
        explanation: "Prime cost = Food cost + Labor cost. Target is 55-65% of total sales."
      },
      {
        id: 18,
        question: "What energy efficiency percentage does induction cooking typically achieve?",
        options: [
          "75% efficiency",
          "90% efficiency",
          "40% efficiency",
          "60% efficiency"
        ],
        correctAnswer: 1,
        explanation: "Induction cooking achieves approximately 90% energy efficiency by directly heating cookware."
      },
      {
        id: 19,
        question: "What is cultured meat?",
        options: [
          "Meat from specially raised animals",
          "Plant-based meat alternatives",
          "Fermented meat products",
          "Lab-grown meat from animal cells"
        ],
        correctAnswer: 3,
        explanation: "Cultured meat is grown from animal cells in labs, potentially offering meat without animal slaughter."
      },
      {
        id: 20,
        question: "What percentage of total startup costs should be allocated to contingency funds?",
        options: [
          "5-10%",
          "15-20%",
          "10-15%",
          "20-25%"
        ],
        correctAnswer: 2,
        explanation: "10-15% contingency fund is recommended for unexpected expenses during startup."
      },
      {
        id: 21,
        question: "What is the standard acknowledgment in a professional kitchen?",
        options: [
          "Heard!",
          "Copy that!",
          "Got it!",
          "Yes, Chef!"
        ],
        correctAnswer: 3,
        explanation: "'Yes, Chef!' shows respect for the chain of command in professional kitchens."
      },
      {
        id: 22,
        question: "What is the typical yield percentage for beef from whole animal to cuts?",
        options: [
          "40-45%",
          "70-75%",
          "60-65%",
          "50-55%"
        ],
        correctAnswer: 2,
        explanation: "Beef typically yields 60-65% usable meat after fabrication."
      },
      {
        id: 23,
        question: "Which Italian region produces Parmigiano-Reggiano and prosciutto di Parma?",
        options: [
          "Tuscany",
          "Emilia-Romagna",
          "Lombardy",
          "Piedmont"
        ],
        correctAnswer: 1,
        explanation: "Emilia-Romagna produces Parmigiano-Reggiano, prosciutto di Parma, and balsamic vinegar."
      },
      {
        id: 24,
        question: "What is the butter to flour ratio in classic puff pastry?",
        options: [
          "50% butter to flour weight",
          "125% butter to flour weight",
          "75% butter to flour weight",
          "100% butter to flour weight"
        ],
        correctAnswer: 3,
        explanation: "Classic puff pastry uses equal weights of butter and flour (100% ratio)."
      },
      {
        id: 25,
        question: "How much do items with descriptions typically outsell items without descriptions?",
        options: [
          "27% more",
          "50% more",
          "35% more",
          "12% more"
        ],
        correctAnswer: 0,
        explanation: "Menu items with descriptions sell approximately 27% more than those without."
      },
      {
        id: 26,
        question: "What is the standard wine pour in ounces?",
        options: [
          "3-4 ounces",
          "9-10 ounces",
          "7-8 ounces",
          "5-6 ounces"
        ],
        correctAnswer: 3,
        explanation: "Standard wine pour is 5-6 ounces, allowing approximately 5 glasses per 750ml bottle."
      },
      {
        id: 27,
        question: "What is the typical net profit percentage for full-service restaurants?",
        options: [
          "3-10%",
          "1-3%",
          "15-20%",
          "10-15%"
        ],
        correctAnswer: 0,
        explanation: "Full-service restaurants typically achieve 3-10% net profit after all expenses."
      },
      {
        id: 28,
        question: "What does MSC certification indicate for seafood?",
        options: [
          "Aquaculture Stewardship Council farmed",
          "Organic farming practices",
          "Marine Stewardship Council sustainable wild-caught",
          "Antibiotic-free production"
        ],
        correctAnswer: 2,
        explanation: "MSC = Marine Stewardship Council certification indicates sustainably caught wild seafood."
      },
      {
        id: 29,
        question: "What does CSA stand for in local food systems?",
        options: [
          "Community Supported Agriculture",
          "Commercial Sustainable Agriculture",
          "Certified Seasonal Agriculture",
          "Culinary Specialists Association"
        ],
        correctAnswer: 0,
        explanation: "CSA = Community Supported Agriculture - consumers buy shares of a farm's harvest in advance."
      },
      {
        id: 30,
        question: "How many months of operating expenses should working capital cover?",
        options: [
          "6-9 months",
          "3-6 months",
          "9-12 months",
          "1-2 months"
        ],
        correctAnswer: 1,
        explanation: "Working capital should cover 3-6 months of operating expenses until business becomes profitable."
      },
      {
        id: 31,
        question: "How many hours of labor should be scheduled per $10,000 in sales?",
        options: [
          "80-100 hours",
          "50-70 hours",
          "100-120 hours",
          "130-150 hours"
        ],
        correctAnswer: 2,
        explanation: "Professional kitchens typically schedule 100-120 labor hours per $10,000 in sales."
      },
      {
        id: 32,
        question: "What is 'socarrat' in Spanish paella?",
        options: [
          "The seasoning blend",
          "The seafood garnish",
          "The crispy bottom layer of rice",
          "The saffron infusion"
        ],
        correctAnswer: 2,
        explanation: "Socarrat is the prized crispy, caramelized bottom layer of rice in paella."
      },
      {
        id: 33,
        question: "What temperature range is 'hard crack' stage for sugar?",
        options: [
          "300-310°F (149-154°C)",
          "250-265°F (121-129°C)",
          "320-350°F (160-177°C)",
          "270-290°F (132-143°C)"
        ],
        correctAnswer: 0,
        explanation: "Hard crack stage is 300-310°F (149-154°C) - sugar becomes brittle when cooled."
      },
      {
        id: 34,
        question: "What is an acceptable variance between theoretical and actual food cost?",
        options: [
          "Less than 2%",
          "Less than 1%",
          "Less than 10%",
          "Less than 5%"
        ],
        correctAnswer: 0,
        explanation: "Less than 2% variance indicates excellent control. More than 5% suggests serious issues."
      },
      {
        id: 35,
        question: "What is the ideal water temperature for brewing coffee?",
        options: [
          "185-195°F (85-91°C)",
          "175-185°F (79-85°C)",
          "195-205°F (91-96°C)",
          "205-212°F (96-100°C)"
        ],
        correctAnswer: 2,
        explanation: "195-205°F (91-96°C) extracts optimal flavor from coffee without bitterness."
      },
      {
        id: 36,
        question: "How soon should a server greet guests after they are seated?",
        options: [
          "Within 1 minute",
          "Within 5 minutes",
          "Within 30 seconds",
          "Within 3 minutes"
        ],
        correctAnswer: 0,
        explanation: "Guests should be greeted within 1 minute of seating to make them feel welcome."
      },
      {
        id: 37,
        question: "What percentage cost reduction can seasonal purchasing achieve at peak season?",
        options: [
          "70-90%",
          "30-50%",
          "50-70%",
          "10-20%"
        ],
        correctAnswer: 1,
        explanation: "Purchasing at peak season can reduce costs by 30-50% due to abundance."
      },
      {
        id: 38,
        question: "What percentage of a menu should typically be stable versus innovative?",
        options: [
          "90% stable, 10% innovative",
          "60% stable, 40% innovative",
          "50% stable, 50% innovative",
          "70-80% stable, 20-30% innovative"
        ],
        correctAnswer: 3,
        explanation: "70-80% stable items maintain regulars' favorites, 20-30% innovative keeps menu fresh."
      },
      {
        id: 39,
        question: "What does SWOT analysis stand for?",
        options: [
          "Sales, Waste, Output, Timing",
          "Service, Workforce, Operations, Training",
          "Standards, Workflow, Organization, Technology",
          "Strengths, Weaknesses, Opportunities, Threats"
        ],
        correctAnswer: 3,
        explanation: "SWOT = Strengths, Weaknesses (internal), Opportunities, Threats (external)."
      },
      {
        id: 40,
        question: "What is the break-even formula?",
        options: [
          "Fixed costs ÷ Contribution margin ratio",
          "Fixed costs ÷ Variable costs",
          "Variable costs ÷ Fixed costs",
          "Sales ÷ Fixed costs"
        ],
        correctAnswer: 0,
        explanation: "Break-even point = Fixed costs ÷ Contribution margin ratio (1 - Variable cost percentage)."
      }
    ]
  }
};
