// International Law (Diploma) Course Data
export const internationalLawDiploma = {
  id: "international-law-diploma",
  title: "International Law (Diploma)",
  description: "Advanced diploma course covering comprehensive principles of international law, including state sovereignty, treaty law, human rights, international organizations, and dispute resolution mechanisms in the global legal system.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "⚖️",
  badge: "Diploma",
  modules: [
    {
      id: 1,
      title: "Foundations of International Legal System",
      completed: false,
      content: `# Foundations of International Legal System

Welcome to the International Law Diploma program. This first module establishes the fundamental framework of international law, exploring its unique characteristics and how it differs from domestic legal systems.

## What is International Law?

International law consists of rules and principles that govern relations between sovereign states and other international actors. Unlike domestic law, international law operates in a decentralized system without a central legislative authority or enforcement mechanism.

Key characteristics include:
- **Consensual nature**: States generally only follow rules they have agreed to
- **Horizontal structure**: States are both creators and subjects of the rules
- **No central authority**: No world government exists to enforce compliance
- **Soft enforcement**: Reliance on reciprocity, reputation, and international pressure

## Sources of International Law

The International Court of Justice Statute identifies four primary sources:

1. **International Treaties** - Formal agreements between states
   - Bilateral treaties (between two states)
   - Multilateral treaties (among many states)
   - Treaties can create universal rules (like the UN Charter)

2. **International Custom** - General practice accepted as law
   - Requires consistent state practice (objective element)
   - Requires belief that practice is legally required (subjective element)
   - Customary law binds all states, even those not party to specific treaties

3. **General Principles of Law** - Common legal principles recognized by civilized nations
   - Principles like good faith, equity, and estoppel
   - Fill gaps where treaties and custom are silent
   - Derived from comparison of domestic legal systems

4. **Judicial Decisions and Scholarly Writings** - Subsidiary means for determining rules
   - ICJ and other tribunal decisions
   - Works of highly qualified publicists
   - Not binding but highly persuasive

## Subjects of International Law

Entities that have international legal personality include:

**Sovereign States** - Primary subjects with full rights and obligations
- Defined territory
- Permanent population
- Effective government
- Capacity to enter relations with other states

**International Organizations** - Created by states to achieve common purposes
- UN, WTO, WHO, IMF, etc.
- Have limited legal personality as granted by member states
- Can enter treaties, bring claims, and enjoy immunities

**Individuals** - Increasingly recognized as partial subjects
- Human rights protections
- International criminal responsibility
- Limited capacity to bring claims directly

**Other Entities** - Special status for certain groups
- National liberation movements
- Insurgent groups in certain circumstances
- Multinational corporations (limited rights)

## Basic Principles

Several foundational principles structure international relations:

**Sovereign Equality** - All states are equal before the law
- One state, one vote in many international organizations
- No state can exercise jurisdiction over another without consent
- Domestic jurisdiction protected from outside interference

**Non-Intervention** - Prohibition on interfering in internal affairs
- Military intervention generally prohibited
- Economic/political coercion restricted
- Exceptions for self-defense and UN Security Council authorization

**Peaceful Settlement of Disputes** - Obligation to resolve conflicts peacefully
- Negotiation, mediation, arbitration, judicial settlement
- Use of force generally prohibited
- Self-defense allowed under strict conditions

**Good Faith** - Requirement to act honestly and fairly
- Treaty obligations must be performed in good faith
- No abuse of rights
- Estoppel principle prevents contradictory behavior

Understanding these foundations prepares you for the complex interplay of legal rules, state interests, and international cooperation that characterizes the global legal system.`,
      quiz: [
        {
          id: 1,
          question: "What is a key characteristic of international law compared to domestic law?",
          options: [
            "Single legislative body",
            "Complete compliance by all states",
            "No central enforcement authority",
            "Strict penalties for violations"
          ],
          correctAnswer: 2,
          explanation: "International law lacks a central authority to enforce rules, relying instead on state cooperation and international pressure."
        },
        {
          id: 2,
          question: "Which is NOT a primary source of international law according to the ICJ Statute?",
          options: [
            "International treaties",
            "National constitutions",
            "General principles of law",
            "International custom"
          ],
          correctAnswer: 1,
          explanation: "National constitutions are domestic laws, not primary sources of international law, though they may influence general principles."
        },
        {
          id: 3,
          question: "What two elements are required for international custom?",
          options: [
            "Judicial decisions and scholarly approval",
            "Treaty ratification and implementation",
            "Government declarations and public support",
            "Consistent state practice and legal belief"
          ],
          correctAnswer: 3,
          explanation: "Customary international law requires both objective state practice and subjective belief that the practice is legally required (opinio juris)."
        },
        {
          id: 4,
          question: "What are the primary subjects of international law?",
          options: [
            "Local governments",
            "Business corporations",
            "Individual citizens",
            "Sovereign states"
          ],
          correctAnswer: 3,
          explanation: "Sovereign states are the primary subjects with full international legal personality, though other entities have limited status."
        },
        {
          id: 5,
          question: "What does sovereign equality mean in international law?",
          options: [
            "All states have equal power",
            "All states have equal wealth",
            "All states are equal before the law",
            "All states have equal territory"
          ],
          correctAnswer: 2,
          explanation: "Sovereign equality means all states have equal legal status regardless of size, power, or wealth."
        },
        {
          id: 6,
          question: "Which principle prohibits interfering in other states' internal affairs?",
          options: [
            "Sovereign equality",
            "Non-intervention",
            "Good faith",
            "Peaceful settlement"
          ],
          correctAnswer: 1,
          explanation: "The principle of non-intervention protects states' domestic jurisdiction from external interference."
        },
        {
          id: 7,
          question: "What type of treaty involves only two states?",
          options: [
            "Bilateral treaty",
            "Multilateral treaty",
            "Regional treaty",
            "Universal treaty"
          ],
          correctAnswer: 0,
          explanation: "Bilateral treaties are agreements between two states, while multilateral treaties involve three or more."
        },
        {
          id: 8,
          question: "What is required for an entity to be considered a state?",
          options: [
            "UN membership and international recognition",
            "Large military and economic power",
            "Democratic government and human rights record",
            "Defined territory, population, government, and external capacity"
          ],
          correctAnswer: 3,
          explanation: "The Montevideo Convention criteria include defined territory, permanent population, effective government, and capacity to enter international relations."
        },
        {
          id: 9,
          question: "What principle requires states to act honestly in international relations?",
          options: [
            "Non-intervention",
            "Reciprocity",
            "Good faith",
            "Sovereign equality"
          ],
          correctAnswer: 2,
          explanation: "The principle of good faith (pacta sunt servanda) requires honest performance of international obligations."
        },
        {
          id: 10,
          question: "Which is a subsidiary means for determining international law rules?",
          options: [
            "Customary behavior",
            "Judicial decisions",
            "State practice",
            "Treaty negotiations"
          ],
          correctAnswer: 1,
          explanation: "Judicial decisions are subsidiary sources that help identify and interpret international law rules."
        },
        {
          id: 11,
          question: "What type of legal personality do international organizations have?",
          options: [
            "No legal personality",
            "Limited personality granted by member states",
            "Full personality equal to states",
            "Personality only for commercial activities"
          ],
          correctAnswer: 1,
          explanation: "International organizations have limited legal personality as granted by their member states through founding treaties."
        },
        {
          id: 12,
          question: "What is the subjective element required for customary international law?",
          options: [
            "Judicial recognition",
            "Belief that practice is legally required",
            "Written government policy",
            "Public approval"
          ],
          correctAnswer: 1,
          explanation: "Opinio juris is the belief that state practice is legally obligatory, not just habitual or convenient."
        },
        {
          id: 13,
          question: "Which principle requires states to resolve conflicts without force?",
          options: [
            "Sovereign immunity",
            "Peaceful settlement of disputes",
            "Good faith implementation",
            "Territorial integrity"
          ],
          correctAnswer: 1,
          explanation: "States must seek peaceful resolution of disputes through negotiation, mediation, arbitration, or judicial means."
        },
        {
          id: 14,
          question: "What are general principles of law derived from?",
          options: [
            "Academic theories only",
            "UN Security Council resolutions",
            "International treaty provisions",
            "Comparison of domestic legal systems"
          ],
          correctAnswer: 3,
          explanation: "General principles are identified by comparing legal systems of different states to find common fundamental principles."
        },
        {
          id: 15,
          question: "What characteristic makes international law 'horizontal'?",
          options: [
            "States are both creators and subjects of rules",
            "No hierarchy among legal sources",
            "All rules apply equally to everyone",
            "Decisions require unanimous agreement"
          ],
          correctAnswer: 0,
          explanation: "The horizontal structure means states create the rules that bind themselves, unlike domestic vertical systems with legislatures above citizens."
        },
        {
          id: 16,
          question: "Which entity has increasingly gained international legal personality?",
          options: [
            "Individuals",
            "Local governments",
            "Political parties",
            "Religious organizations"
          ],
          explanation: "Individuals now have limited international legal personality, particularly in human rights and international criminal law."
        },
        {
          id: 17,
          question: "What does the consensual nature of international law mean?",
          options: [
            "No rules apply without explicit consent",
            "States generally follow rules they've agreed to",
            "Rules require unanimous approval",
            "All states must consent to all rules"
          ],
          correctAnswer: 1,
          explanation: "While some rules like customary law bind all states, treaty obligations generally only bind consenting states."
        },
        {
          id: 18,
          question: "Which is an example of a multilateral treaty?",
          options: [
            "Extradition agreement between two states",
            "Diplomatic notes exchange",
            "Bilateral investment treaty",
            "UN Charter"
          ],
          correctAnswer: 3,
          explanation: "The UN Charter is a multilateral treaty involving nearly all states, creating universal obligations."
        },
        {
          id: 19,
          question: "What principle prevents states from abusing their rights?",
          options: [
            "Non-intervention",
            "Territorial integrity",
            "Good faith",
            "Sovereign equality"
          ],
          correctAnswer: 2,
          explanation: "Good faith includes the principle that states should not exercise their rights in ways that abuse or harm others."
        },
        {
          id: 20,
          question: "What is soft enforcement in international law?",
          options: [
            "Criminal prosecution of state leaders",
            "Automatic sanctions by central authority",
            "Military intervention for violations",
            "Reliance on reciprocity and reputation"
          ],
          correctAnswer: 3,
          explanation: "Soft enforcement mechanisms include diplomatic pressure, reputational costs, and reciprocal non-compliance."
        }
      ]
    },
    {
      id: 2,
      title: "Treaty Law and International Agreements",
      completed: false,
      content: `# Treaty Law and International Agreements

Treaties are the most important source of international law, creating binding obligations between states. This module explores the lifecycle of treaties from negotiation to termination.

## What is a Treaty?

A treaty is an international agreement governed by international law, concluded between states or international organizations. The Vienna Convention on the Law of Treaties provides the framework for treaty creation, interpretation, and termination.

Key characteristics:
- **Written form** - Usually documented, though oral agreements can be binding
- **Governed by international law** - Not domestic contract law
- **Creates binding obligations** - Between parties only (pacta tertiis rule)
- **Various names** - Convention, covenant, charter, protocol, agreement

## Treaty Formation Process

The treaty-making process involves several stages:

**1. Negotiation**
- States discuss terms and reach consensus
- Can involve preliminary instruments like Memoranda of Understanding
- Diplomatic conferences or bilateral negotiations
- Drafting committees prepare text

**2. Adoption and Authentication**
- Formal adoption of treaty text
- Authentication establishes text as definitive
- Usually by signature or initialing
- Can be adopted by international conference vote

**3. Expression of Consent**
States express consent to be bound through:
- **Signature** - Simple signature may create obligation not to defeat object
- **Ratification** - Formal confirmation by state's constitutional process
- **Accession** - Agreement by state that didn't participate in negotiation
- **Acceptance/Approval** - Similar to ratification but may bypass legislature

**4. Entry into Force**
- Conditions specified in treaty itself
- Usually requires minimum number of ratifications
- Different dates for different states possible
- Provisional application before formal entry into force

## Treaty Interpretation

Interpreting treaties follows established rules:

**General Rule (VCLT Article 31)**
- Interpret in good faith according to ordinary meaning
- Consider context, object, and purpose
- Subsequent agreement and practice relevant
- Relevant rules of international law considered

**Supplementary Means (VCLT Article 32)**
- Preparatory work (travaux préparatoires)
- Circumstances of conclusion
- Used when interpretation ambiguous or leads to unreasonable result

**Special Meanings**
- Technical terms given technical meaning
- Parties can agree on special meanings
- Multilingual treaties compare all language versions

## Treaty Reservations

Reservations allow states to modify treaty obligations:

**Definition**: Unilateral statement excluding/modifying legal effect of provisions
- Made when signing, ratifying, accepting, or approving
- Must be formal written communication
- Cannot be incompatible with object and purpose

**Acceptance and Objection**
- Other states can accept or object to reservations
- Acceptance creates treaty relations with reservation
- Objection may prevent treaty relations with reserving state
- Some treaties prohibit reservations entirely

**Permissibility Test**
- Treaty expressly permits or prohibits
- If silent, permitted unless:
  - Incompatible with object and purpose
  - Treaty provides only specified reservations
  - Reservation would be incompatible with essential provisions

## Treaty Invalidity

Treaties may be invalid under limited circumstances:

**Absolute Grounds** (void ab initio)
- Coercion of state representative
- Coercion of state by threat/use of force
- Conflict with peremptory norm (jus cogens)

**Relative Grounds** (voidable)
- Error regarding essential fact
- Fraud
- Corruption of representative
- Manifest violation of internal law regarding competence

**Consequences of Invalidity**
- Parties released from obligations
- Acts performed in good faith before invalidity remain lawful
- Must eliminate consequences of acts performed under invalid treaty
- Good faith obligation to negotiate settlement

## Treaty Termination and Suspension

Valid reasons for ending treaty obligations:

**By Consent**
- Mutual agreement of all parties
- Termination clause in treaty
- Implied right of denunciation/withdrawal if treaty silent but parties intended

**Material Breach**
- Substantial violation by one party
- Other parties may suspend or terminate
- Not available for humanitarian treaties

**Supervening Impossibility**
- Permanent disappearance/destruction of object indispensable for execution
- Temporary impossibility allows only suspension

**Fundamental Change of Circumstances**
- Circumstances existing at conclusion
- Change unforeseen by parties
- Change radically transforms extent of obligations
- Not applicable to boundary treaties

**Emergence of New Jus Cogens Norm**
- New peremptory norm conflicts with treaty
- Treaty becomes void and terminates

Understanding treaty law is essential since treaties create the most specific and clearly defined international obligations between states.`,
      quiz: [
        {
          id: 1,
          question: "What is the primary legal framework governing treaties?",
          options: [
            "Customary international law",
            "Vienna Convention on the Law of Treaties",
            "International Court of Justice Statute",
            "UN Charter provisions"
          ],
          correctAnswer: 1,
          explanation: "The Vienna Convention on the Law of Treaties (1969) provides the comprehensive framework for treaty law."
        },
        {
          id: 2,
          question: "What is the pacta tertiis rule?",
          options: [
            "Treaties automatically bind all states",
            "Third states can enforce treaty provisions",
            "All treaties must have three parties",
            "Treaties only bind consenting parties"
          ],
          correctAnswer: 3,
          explanation: "Pacta tertiis nec nocent nec prosunt means treaties cannot create obligations or rights for third states without their consent."
        },
        {
          id: 3,
          question: "What is the difference between ratification and accession?",
          options: [
            "Ratification requires legislative approval; accession does not",
            "Only democratic states ratify; others accede",
            "Ratification is informal; accession is formal",
            "Ratification follows negotiation; accession by non-participating states"
          ],
          correctAnswer: 3,
          explanation: "Ratification confirms consent after negotiation participation, while accession allows non-participating states to join."
        },
        {
          id: 4,
          question: "What is the primary rule for treaty interpretation?",
          options: [
            "Intent of the drafters only",
            "Most restrictive interpretation",
            "Good faith according to ordinary meaning in context",
            "Strict literal interpretation"
          ],
          correctAnswer: 2,
          explanation: "VCLT Article 31 requires good faith interpretation according to ordinary meaning in context of object and purpose."
        },
        {
          id: 5,
          question: "When can preparatory work be used in interpretation?",
          options: [
            "When interpretation is ambiguous or unreasonable",
            "Always as primary source",
            "Only with consent of all parties",
            "Never in modern treaty law"
          ],
          correctAnswer: 0,
          explanation: "Preparatory work is a supplementary means under VCLT Article 32, used when primary interpretation methods fail."
        },
        {
          id: 6,
          question: "What makes a reservation invalid?",
          options: [
            "Relating to minor provisions only",
            "Made after treaty ratification",
            "Incompatible with treaty's object and purpose",
            "Not accepted by all other parties"
          ],
          correctAnswer: 2,
          explanation: "Reservations incompatible with a treaty's essential purpose are impermissible regardless of other states' reactions."
        },
        {
          id: 7,
          question: "What is an absolute ground for treaty invalidity?",
          options: [
            "Coercion by threat of force",
            "Political disagreement",
            "Change in government",
            "Economic difficulties"
          ],
          correctAnswer: 0,
          explanation: "Coercion of a state by threat or use of force voids a treaty ab initio under VCLT Article 52."
        },
        {
          id: 8,
          question: "When can fundamental change of circumstances terminate a treaty?",
          options: [
            "Economic conditions worsen slightly",
            "Change radically transforms obligations and was unforeseen",
            "Any political change occurs",
            "New government dislikes treaty"
          ],
          correctAnswer: 1,
          explanation: "Fundamental change (rebus sic stantibus) requires radical transformation of obligations that was not foreseen."
        },
        {
          id: 9,
          question: "What is provisional application of a treaty?",
          options: [
            "Applying treaty before formal entry into force",
            "Experimental treaty application",
            "Temporary treaty for emergencies",
            "Partial implementation only"
          ],
          correctAnswer: 0,
          explanation: "Provisional application allows treaty obligations to apply temporarily before formal ratification procedures complete."
        },
        {
          id: 10,
          question: "What happens when a new jus cogens norm conflicts with a treaty?",
          options: [
            "States can choose which to follow",
            "Treaty becomes void and terminates",
            "Only conflicting provisions void",
            "Treaty continues unchanged"
          ],
          correctAnswer: 1,
          explanation: "Under VCLT Article 64, emergence of a new peremptory norm voids conflicting treaties entirely."
        },
        {
          id: 11,
          question: "What is authentication of a treaty?",
          options: [
            "Establishing text as definitive and authentic",
            "Confirming parties' legal capacity",
            "Registering treaty with UN",
            "Verifying signatures are genuine"
          ],
          correctAnswer: 0,
          explanation: "Authentication establishes the treaty text as definitive, usually through signature, initialing, or incorporation in final act."
        },
        {
          id: 12,
          question: "What does 'object and purpose' refer to in treaty law?",
          options: [
            "Physical objects covered by treaty",
            "Implementation methods only",
            "Parties' subjective intentions",
            "Essential goals and aims of the treaty"
          ],
          correctAnswer: 3,
          explanation: "Object and purpose refers to the treaty's fundamental aims, crucial for interpretation and reservation permissibility."
        },
        {
          id: 13,
          question: "What is a unilateral statement that modifies legal effect?",
          options: [
            "Declaration",
            "Reservation",
            "Interpretive statement",
            "Protest"
          ],
          correctAnswer: 1,
          explanation: "A reservation is a unilateral statement that seeks to exclude or modify the legal effect of specific provisions."
        },
        {
          id: 14,
          question: "When can material breach justify treaty termination?",
          options: [
            "For substantial violation by one party",
            "For any minor violation",
            "Never for multilateral treaties",
            "Only for human rights treaties"
          ],
          correctAnswer: 0,
          explanation: "Material breach (substantial violation) allows other parties to terminate or suspend treaty relations."
        },
        {
          id: 15,
          question: "What is supervening impossibility?",
          options: [
            "Permanent disappearance of object indispensable for execution",
            "Temporary economic difficulties",
            "Change in political relations",
            "New scientific discoveries"
          ],
          correctAnswer: 0,
          explanation: "Supervening impossibility occurs when an object essential for treaty performance permanently disappears."
        },
        {
          id: 16,
          question: "What is the effect of an invalid reservation?",
          options: [
            "Other states must accept invalid reservation",
            "Treaty becomes entirely void for that state",
            "State cannot become party at all",
            "State remains bound by treaty without reservation"
          ],
          correctAnswer: 3,
          explanation: "An invalid reservation is severed, and the state remains bound by the treaty without the benefit of the reservation."
        },
        {
          id: 17,
          question: "What are travaux préparatoires?",
          options: [
            "Official interpretations",
            "Preparatory work of treaty negotiations",
            "Final treaty text",
            "Implementation reports"
          ],
          correctAnswer: 1,
          explanation: "Travaux préparatoires are documents from treaty negotiations, used as supplementary interpretation means."
        },
        {
          id: 18,
          question: "What is denunciation of a treaty?",
          options: [
            "Declaration treaty is invalid",
            "Unilateral withdrawal by a party",
            "Amendment process",
            "Suspension of performance"
          ],
          correctAnswer: 1,
          explanation: "Denunciation is a party's unilateral withdrawal from a treaty according to its terms or by consent."
        },
        {
          id: 19,
          question: "What happens if a treaty is silent on withdrawal?",
          options: [
            "Withdrawal possible if parties intended or nature implies",
            "Withdrawal allowed anytime",
            "Withdrawal never permitted",
            "Withdrawal requires UN approval"
          ],
          correctAnswer: 0,
          explanation: "If silent, withdrawal is permitted if parties intended or the treaty's nature implies a right of withdrawal."
        },
        {
          id: 20,
          question: "What is the principle of good faith in treaty performance?",
          options: [
            "Performance required only if others comply",
            "Only profitable treaties need performance",
            "Treaties can be ignored if inconvenient",
            "Pacta sunt servanda - treaties must be performed"
          ],
          correctAnswer: 3,
          explanation: "Pacta sunt servanda means treaties in force must be performed by parties in good faith."
        }
      ]
    },
    {
      id: 3,
      title: "State Responsibility and International Liability",
      completed: false,
      content: `# State Responsibility and International Liability

When states violate international law, the law of state responsibility determines consequences and remedies. This module covers when states are responsible, what constitutes wrongful acts, and how injured states can seek reparation.

## Foundations of State Responsibility

State responsibility arises when:
1. Conduct is attributable to the state under international law
2. Conduct constitutes a breach of an international obligation

The International Law Commission's Articles on State Responsibility provide the framework. Key principles:
- **Primary rules** - Substantive obligations (what states must/must not do)
- **Secondary rules** - Consequences of breaches (responsibility and remedies)
- **Objective responsibility** - Generally no fault requirement, just breach
- **Independent of domestic law** - Cannot excuse breach by citing domestic law

## Attribution of Conduct

Not all conduct within a state's territory is attributable. The state is responsible for:

**1. Conduct of State Organs**
- Legislative, executive, judicial organs at all levels
- Includes organs exercising governmental authority
- Ultra vires acts still attributable if acting in official capacity
- Federal states responsible for constituent unit conduct

**2. Conduct of Persons/Entities Exercising Governmental Authority**
- Parastatal entities
- Privatized companies performing public functions
- Persons formally authorized to exercise authority

**3. Conduct Directed or Controlled by State**
- Complete dependence and control required
- Not mere support or financing
- Effective control test for military/paramilitary groups

**4. Conduct of Insurrectional Movements**
- Becomes attributable if movement becomes new government
- Or if movement succeeds in forming new state in part of territory

**5. Conduct Acknowledged and Adopted by State**
- State explicitly accepts conduct as its own
- After-the-fact adoption possible

## Circumstances Precluding Wrongfulness

Even attributable conduct violating obligations may not be wrongful if:

**1. Consent**
- Valid consent by injured state
- Within limits of consent given
- Cannot violate peremptory norms

**2. Self-Defense**
- Against armed attack
- Proportional and necessary
- Reported to UN Security Council

**3. Countermeasures**
- Against prior internationally wrongful act
- Proportional and temporary
- Cannot affect certain obligations (humanitarian, peremptory norms)

**4. Force Majeure**
- Irresistible force or unforeseen event
- Beyond state's control
- Makes performance materially impossible

**5. Distress**
- Threat to life of persons in state's care
- Only means to save lives
- Not substantially contributing to situation

**6. Necessity**
- Grave and imminent peril
- Only means to safeguard essential interest
- Not seriously impairing essential interest of other state(s)
- Not excluded by treaty or contributing to situation

## Consequences of Internationally Wrongful Acts

When responsibility is established:

**1. Continued Duty of Performance**
- Breach doesn't terminate obligation
- State must still comply with obligation

**2. Cessation and Non-Repetition**
- Stop continuing wrongful act
- Offer assurances of non-repetition if appropriate

**3. Reparation**
Primary forms:
- **Restitution** - Re-establish situation before breach (preferred)
- **Compensation** - Monetary payment for financially assessable damage
- **Satisfaction** - Symbolic remedies (apology, investigation, punishment)

**4. Invocation of Responsibility**
- Injured state(s) can invoke responsibility
- May take countermeasures (within limits)
- Can claim cessation, reparation, assurances

## Serious Breaches of Peremptory Norms

Special regime for breaches of jus cogens norms:

**Obligations for All States**
- Cooperate to end breach through lawful means
- Not recognize situation as lawful
- Not aid or assist in maintaining situation

**Enhanced Consequences**
- No circumstances precluding wrongfulness apply (except consent, self-defense)
- No time limits on invocation
- Possible wider range of injured states

## Implementation and Enforcement

**Diplomatic Protection**
- State espouses claim of its national
- National must exhaust local remedies first
- State has discretion whether to pursue
- Any compensation goes to state, not necessarily individual

**Dispute Settlement**
- Negotiation, mediation, conciliation
- Arbitration (binding decision)
- Judicial settlement (ICJ, regional courts)

**UN Security Council Role**
- Can determine existence of breach
- Can authorize measures to maintain peace
- Can establish compensation mechanisms

Understanding state responsibility is crucial for maintaining the international legal order and ensuring states are held accountable for violations.`,
      quiz: [
        {
          id: 1,
          question: "What are the two basic elements of state responsibility?",
          options: [
            "Fault and damage",
            "Treaty violation and injury",
            "Intent and causation",
            "Attributable conduct and breach of obligation"
          ],
          correctAnswer: 3,
          explanation: "State responsibility requires conduct attributable to the state under international law that breaches an international obligation."
        },
        {
          id: 2,
          question: "What is the difference between primary and secondary rules?",
          options: [
            "Primary define obligations; secondary define responsibility for breaches",
            "Primary are treaties; secondary are custom",
            "Primary apply to states; secondary to individuals",
            "Primary are substantive; secondary are procedural"
          ],
          correctAnswer: 0,
          explanation: "Primary rules establish what states must/must not do; secondary rules govern consequences when primary rules are breached."
        },
        {
          id: 3,
          question: "When are ultra vires acts of state organs attributable?",
          options: [
            "When acting in official capacity",
            "Only if causing major damage",
            "Never, if beyond authority",
            "Only if authorized later"
          ],
          correctAnswer: 0,
          explanation: "Even acts exceeding authority are attributable if the organ was acting in its official capacity."
        },
        {
          id: 4,
          question: "What circumstance precludes wrongfulness for saving lives?",
          options: [
            "Self-defense",
            "Force majeure",
            "Distress",
            "Necessity"
          ],
          correctAnswer: 2,
          explanation: "Distress applies when the only way to save lives is to breach an obligation, without contributing to the situation."
        },
        {
          id: 5,
          question: "What is the preferred form of reparation?",
          options: [
            "Restitution",
            "Satisfaction",
            "Apology",
            "Compensation"
          ],
          correctAnswer: 0,
          explanation: "Restitution (re-establishing the pre-breach situation) is the primary form of reparation when possible."
        },
        {
          id: 6,
          question: "What must states do regarding serious breaches of peremptory norms?",
          options: [
            "Ignore the breach",
            "Remain neutral",
            "Not recognize situation as lawful",
            "Support the breaching state"
          ],
          correctAnswer: 2,
          explanation: "All states have an obligation not to recognize as lawful situations created by serious jus cogens breaches."
        },
        {
          id: 7,
          question: "What is diplomatic protection?",
          options: [
            "State espousing claim of its national",
            "Defense in international courts",
            "Protection of diplomatic personnel",
            "Immunity for state officials"
          ],
          correctAnswer: 0,
          explanation: "Diplomatic protection occurs when a state pursues a claim on behalf of its national against another state."
        },
        {
          id: 8,
          question: "What must be exhausted before diplomatic protection?",
          options: [
            "Regional court appeals",
            "Local remedies in responsible state",
            "Diplomatic negotiations",
            "UN complaint procedures"
          ],
          correctAnswer: 1,
          explanation: "The local remedies rule requires exhausting domestic legal options before international claim."
        },
        {
          id: 9,
          question: "When can necessity preclude wrongfulness?",
          options: [
            "Only means to safeguard essential interest from grave peril",
            "Any time state interests are affected",
            "For economic difficulties",
            "To protect political interests"
          ],
          correctAnswer: 0,
          explanation: "Necessity requires grave and imminent peril to essential interest, with breach as only means to safeguard it."
        },
        {
          id: 10,
          question: "What are countermeasures?",
          options: [
            "Automatic sanctions for breaches",
            "Lawful responses to prior wrongful acts",
            "Military responses to violations",
            "Punitive measures by international organizations"
          ],
          correctAnswer: 1,
          explanation: "Countermeasures are otherwise unlawful acts taken in response to prior wrongful acts, subject to proportionality limits."
        },
        {
          id: 11,
          question: "What is objective responsibility in international law?",
          options: [
            "Liability based on breach, not fault",
            "Liability for intended consequences only",
            "Responsibility requiring negligence",
            "Responsibility only with proven intent"
          ],
          correctAnswer: 0,
          explanation: "Objective responsibility means states are liable for breaches regardless of fault or intent."
        },
        {
          id: 12,
          question: "When is conduct of private persons attributable?",
          options: [
            "Never, only state organs matter",
            "When state fails to prevent conduct",
            "Always when in state territory",
            "When acting under state direction/control"
          ],
          correctAnswer: 3,
          explanation: "Private conduct is attributable only if the state exercises effective control over specific operations."
        },
        {
          id: 13,
          question: "What does cessation require?",
          options: [
            "Changing domestic laws",
            "Stopping continuing wrongful acts",
            "Paying compensation",
            "Punishing responsible officials"
          ],
          correctAnswer: 1,
          explanation: "Cessation requires the responsible state to stop any ongoing wrongful conduct."
        },
        {
          id: 14,
          question: "What is satisfaction as reparation?",
          options: [
            "Symbolic remedies like apology or investigation",
            "Full monetary compensation",
            "Punishment of individuals",
            "Restoration of original situation"
          ],
          correctAnswer: 0,
          explanation: "Satisfaction provides symbolic remedies for non-material injury, such as apologies or acknowledgment."
        },
        {
          id: 15,
          question: "What is force majeure?",
          options: [
            "Technical challenges",
            "Irresistible force making performance impossible",
            "Political opposition",
            "Economic difficulties"
          ],
          correctAnswer: 1,
          explanation: "Force majeure involves irresistible force or unforeseen events beyond state control making performance impossible."
        },
        {
          id: 16,
          question: "What happens if a state contributes to situation of distress?",
          options: [
            "Distress still applies fully",
            "Distress cannot be invoked",
            "Other states must help",
            "Only partial responsibility"
          ],
          correctAnswer: 1,
          explanation: "Distress cannot be invoked if the state contributed to creating the situation of distress."
        },
        {
          id: 17,
          question: "What is the effective control test?",
          options: [
            "For treaty interpretation",
            "For determining state jurisdiction",
            "For attributing conduct of non-state actors",
            "For diplomatic protection"
          ],
          correctAnswer: 2,
          explanation: "Effective control determines when non-state actor conduct is attributable to a controlling state."
        },
        {
          id: 18,
          question: "What obligations cannot be subject to countermeasures?",
          options: [
            "Environmental standards",
            "Cultural cooperation agreements",
            "Economic treaty obligations",
            "Humanitarian and peremptory norms"
          ],
          correctAnswer: 3,
          explanation: "Countermeasures cannot affect obligations under humanitarian law or peremptory norms."
        },
        {
          id: 19,
          question: "When can all states invoke responsibility?",
          options: [
            "For breaches of obligations owed to international community",
            "Only for direct injuries",
            "Only with UN authorization",
            "Never, only injured states can"
          ],
          correctAnswer: 0,
          explanation: "All states can invoke responsibility for breaches of obligations owed to the international community as a whole."
        },
        {
          id: 20,
          question: "What is the continued duty of performance?",
          options: [
            "Duty to pay compensation",
            "Requirement to apologize",
            "Need to change domestic laws",
            "Obligation continues despite breach"
          ],
          correctAnswer: 3,
          explanation: "Even after breaching an obligation, the state remains bound to perform it (unless terminated)."
        }
      ]
    },
    {
      id: 4,
      title: "International Human Rights Law",
      completed: false,
      content: `# International Human Rights Law

International human rights law establishes minimum standards for how states must treat individuals within their jurisdiction. This module covers the development, implementation, and enforcement of human rights protections.

## Foundations of Human Rights

Human rights are inherent to all human beings, regardless of nationality, sex, ethnicity, religion, or other status. Key characteristics:

**Universality** - Apply to all people everywhere
**Indivisibility** - All rights interconnected and equally important
**Inalienability** - Cannot be taken away or given up
**Interdependence** - Fulfillment of one right depends on others

**Generations of Rights:**
- **First generation** - Civil and political rights (liberty-oriented)
- **Second generation** - Economic, social, and cultural rights (equality-oriented)
- **Third generation** - Solidarity rights (development, environment, peace)

## Core International Instruments

**Universal Declaration of Human Rights (1948)**
- Not legally binding but authoritative interpretation of UN Charter
- Customary law status for many provisions
- Foundation for subsequent treaties

**International Covenant on Civil and Political Rights (ICCPR)**
- Legally binding treaty
- Rights to life, liberty, fair trial, expression, religion, etc.
- First Optional Protocol: Individual complaints
- Second Optional Protocol: Abolition of death penalty

**International Covenant on Economic, Social and Cultural Rights (ICESCR)**
- Legally binding treaty
- Rights to work, education, health, social security, etc.
- Progressive realization based on available resources
- Optional Protocol: Individual complaints

**Other Core Treaties:**
- Convention against Torture (CAT)
- Convention on Elimination of Racial Discrimination (CERD)
- Convention on Elimination of Discrimination against Women (CEDAW)
- Convention on Rights of the Child (CRC)
- Convention on Rights of Persons with Disabilities (CRPD)

## Human Rights Mechanisms

**Treaty Bodies**
- Committees monitoring implementation of each treaty
- Review state party reports
- Issue general comments interpreting treaties
- Consider individual complaints (where protocol ratified)
- Conduct inquiries into systematic violations

**UN Human Rights Council**
- Intergovernmental body within UN system
- Universal Periodic Review (UPR) of all UN members
- Special Procedures (rapporteurs, working groups)
- Complaints procedure for consistent patterns of violations

**Regional Systems**
- **European** - European Court of Human Rights (binding)
- **Inter-American** - Inter-American Commission and Court
- **African** - African Commission and Court on Human and Peoples' Rights
- **ASEAN** - ASEAN Intergovernmental Commission (weaker)

## State Obligations

**Three Types of Obligations:**
1. **Respect** - Refrain from interfering with rights
2. **Protect** - Prevent third parties from violating rights
3. **Fulfill** - Take positive measures to realize rights

**Immediate vs Progressive Realization:**
- **Civil/political rights** - Generally immediate
- **Economic/social rights** - Progressive realization based on resources
- **Minimum core obligations** - Immediate for essential levels

**Non-Discrimination and Equality**
- Immediate obligation in all rights
- Formal equality (same treatment) and substantive equality (equal outcomes)
- Temporary special measures permitted to achieve equality

## Limitations and Derogations

**Permissible Limitations**
- Must be prescribed by law
- Necessary in democratic society
- Legitimate aim (national security, public order, health, morals, others' rights)
- Proportional to aim

**States of Emergency (Derogations)**
- During public emergency threatening life of nation
- Must be officially proclaimed
- Proportional to exigencies
- Non-derogable rights:
  - Right to life
  - Freedom from torture
  - Freedom from slavery
  - Non-retroactivity of criminal law
  - Right to recognition as person before law
  - Freedom of thought, conscience, religion

**Margin of Appreciation**
- Doctrine in European system
- States have discretion in implementing rights
- Depends on European consensus
- Wider margin for morals, narrower for procedural rights

## Enforcement and Implementation

**Domestic Implementation**
- Incorporation into domestic law
- Constitutional protections
- National human rights institutions
- Judicial enforcement

**International Complaints**
- Individual communications to treaty bodies
- Interstate complaints (rarely used)
- Regional court proceedings
- UN special procedures communications

**Universal Periodic Review**
- Peer review process in Human Rights Council
- All UN members reviewed every 4-5 years
- Based on national report, UN information, stakeholder submissions
- Recommendations for improvement

**Special Procedures**
- Independent experts (rapporteurs, working groups)
- Country mandates and thematic mandates
- Country visits, communications to governments, reports to UN

## Emerging Issues

**Business and Human Rights**
- UN Guiding Principles on Business and Human Rights
- State duty to protect against business abuse
- Corporate responsibility to respect human rights
- Access to remedies for victims

**Digital Rights**
- Privacy in digital age
- Freedom of expression online
- Access to internet as human right
- Surveillance and data protection

**Climate Change and Human Rights**
- Right to healthy environment
- Climate displacement
- Intergenerational equity
- Rights-based approach to climate action

**Counter-Terrorism and Human Rights**
- Balance between security and rights
- Prohibition of torture even in terrorism cases
- Fair trial guarantees
- Non-discrimination in security measures

International human rights law continues evolving to address new challenges while maintaining core protections for human dignity.`,
      quiz: [
        {
          id: 1,
          question: "What are the three generations of human rights?",
          options: [
            "Civil/political; economic/social/cultural; solidarity",
            "Basic; intermediate; advanced",
            "Legal; political; economic",
            "Individual; collective; global"
          ],
          correctAnswer: 0,
          explanation: "First generation: civil/political; second: economic/social/cultural; third: solidarity/collective rights."
        },
        {
          id: 2,
          question: "What is the status of the Universal Declaration of Human Rights?",
          options: [
            "Regional agreement only",
            "Legally binding treaty on all states",
            "Optional protocol to UN Charter",
            "Authoritative but not legally binding treaty"
          ],
          correctAnswer: 3,
          explanation: "The UDHR is not a treaty but has customary law status for many provisions and authoritatively interprets UN Charter human rights obligations."
        },
        {
          id: 3,
          question: "What are the three types of state obligations for human rights?",
          options: [
            "Legislate, enforce, adjudicate",
            "Report, implement, monitor",
            "Respect, protect, fulfill",
            "Prevent, punish, compensate"
          ],
          correctAnswer: 2,
          explanation: "States must respect (not interfere), protect (prevent third-party violations), and fulfill (take positive measures) human rights."
        },
        {
          id: 4,
          question: "What is progressive realization?",
          options: [
            "Slow implementation by choice",
            "Gradual implementation based on available resources",
            "Future implementation when convenient",
            "Partial implementation of selected rights"
          ],
          correctAnswer: 1,
          explanation: "Progressive realization applies mainly to economic/social rights, requiring steady improvement toward full realization based on maximum available resources."
        },
        {
          id: 5,
          question: "When can states derogate from human rights obligations?",
          options: [
            "During economic crisis",
            "During public emergency threatening life of nation",
            "During political transition",
            "During natural disasters"
          ],
          correctAnswer: 1,
          explanation: "Derogations permitted only during officially proclaimed public emergency threatening the nation's life, with measures strictly required by exigencies."
        },
        {
          id: 6,
          question: "Which right is generally non-derogable?",
          options: [
            "Freedom from torture",
            "Right to privacy",
            "Freedom of assembly",
            "Right to education"
          ],
          correctAnswer: 0,
          explanation: "Freedom from torture is absolutely prohibited and cannot be suspended even during states of emergency."
        },
        {
          id: 7,
          question: "What is the Universal Periodic Review?",
          options: [
            "Academic assessment of rights implementation",
            "Peer review of all UN members' human rights records",
            "Review of treaty compliance only",
            "Court proceedings for violations"
          ],
          correctAnswer: 1,
          explanation: "UPR is a peer review process where all UN member states' human rights records are examined by the Human Rights Council."
        },
        {
          id: 8,
          question: "What are special procedures?",
          options: [
            "Independent experts with thematic/country mandates",
            "Military interventions for rights protection",
            "Diplomatic negotiations for violations",
            "Secret UN enforcement mechanisms"
          ],
          correctAnswer: 0,
          explanation: "Special procedures are independent experts appointed by Human Rights Council to address specific country situations or thematic issues."
        },
        {
          id: 9,
          question: "What is the margin of appreciation?",
          options: [
            "State discretion in implementing human rights",
            "Flexibility in treaty ratification",
            "Difference in regional standards",
            "Variation in reporting requirements"
          ],
          correctAnswer: 0,
          explanation: "Margin of appreciation allows states some discretion in implementing rights, considering national circumstances and European consensus."
        },
        {
          id: 10,
          question: "What are treaty bodies?",
          options: [
            "National human rights institutions",
            "UN Security Council human rights committees",
            "Regional human rights courts",
            "Committees monitoring implementation of specific treaties"
          ],
          correctAnswer: 3,
          explanation: "Treaty bodies are committees of independent experts that monitor implementation of the core international human rights treaties."
        },
        {
          id: 11,
          question: "What does indivisibility of human rights mean?",
          options: [
            "Each person gets all rights or none",
            "Rights cannot be divided among people",
            "Rights apply only to whole populations",
            "All rights interconnected and equally important"
          ],
          correctAnswer: 3,
          explanation: "Indivisibility means civil, political, economic, social and cultural rights are interconnected and cannot be prioritized or separated."
        },
        {
          id: 12,
          question: "What is the main difference between ICCPR and ICESCR obligations?",
          options: [
            "ICCPR for individuals; ICESCR for groups",
            "ICCPR generally immediate; ICESCR progressive realization",
            "ICCPR legally binding; ICESCR not",
            "ICCPR global; ICESCR regional"
          ],
          correctAnswer: 1,
          explanation: "ICCPR civil/political rights generally require immediate implementation, while ICESCR economic/social rights allow progressive realization."
        },
        {
          id: 13,
          question: "What are permissible limitations on human rights?",
          options: [
            "Limitations during economic difficulties",
            "Prescribed by law, necessary, legitimate aim, proportional",
            "Limitations for national security without restrictions",
            "Any limitations government considers necessary"
          ],
          correctAnswer: 1,
          explanation: "Limitations must be lawful, necessary in democratic society, for legitimate aims, and proportional to those aims."
        },
        {
          id: 14,
          question: "What is the business responsibility to respect human rights?",
          options: [
            "Follow industry standards only",
            "Implement rights if profitable",
            "Only comply with domestic laws",
            "Avoid causing/advertising adverse impacts"
          ],
          correctAnswer: 3,
          explanation: "Under UN Guiding Principles, businesses must avoid causing or contributing to adverse human rights impacts and address those they are involved with."
        },
        {
          id: 15,
          question: "What are minimum core obligations?",
          options: [
            "Core group of most important rights",
            "Minimum treaty ratification requirements",
            "Basic rights only for poor countries",
            "Essential levels of each right requiring immediate realization"
          ],
          correctAnswer: 3,
          explanation: "Minimum core obligations require immediate realization of essential levels of economic/social rights, regardless of resources."
        },
        {
          id: 16,
          question: "What is the local remedies rule in human rights complaints?",
          options: [
            "International bodies defer to local decisions",
            "Exhaust domestic remedies before international complaint",
            "Remedies must be available locally",
            "Use only local courts for rights violations"
          ],
          correctAnswer: 1,
          explanation: "Generally, individuals must exhaust available and effective domestic remedies before bringing international human rights complaints."
        },
        {
          id: 17,
          question: "What does universality of human rights mean?",
          options: [
            "Rights apply to all people everywhere",
            "Same implementation methods everywhere",
            "Global enforcement mechanisms",
            "All states have ratified all treaties"
          ],
          correctAnswer: 0,
          explanation: "Universality means human rights apply to every person by virtue of being human, regardless of location or nationality."
        },
        {
          id: 18,
          question: "What are temporary special measures?",
          options: [
            "Measures to achieve substantive equality for disadvantaged groups",
            "Temporary suspension of rights",
            "Emergency measures during crises",
            "Short-term development programs"
          ],
          correctAnswer: 0,
          explanation: "Temporary special measures (affirmative action) are permitted to accelerate achievement of substantive equality for disadvantaged groups."
        },
        {
          id: 19,
          question: "What is the Human Rights Council?",
          options: [
            "Regional human rights court",
            "NGO coalition for rights advocacy",
            "Treaty monitoring committee",
            "UN intergovernmental body responsible for human rights"
          ],
          correctAnswer: 3,
          explanation: "The Human Rights Council is the main UN intergovernmental body responsible for promoting and protecting human rights worldwide."
        },
        {
          id: 20,
          question: "What are general comments by treaty bodies?",
          options: [
            "General criticisms of state reports",
            "Authoritative interpretations of treaty provisions",
            "Suggestions for new treaties",
            "Comments on all human rights issues"
          ],
          correctAnswer: 1,
          explanation: "General comments provide detailed interpretations of treaty provisions to guide states in implementation and reporting."
        }
      ]
    },
    {
      id: 5,
      title: "International Organizations and Global Governance",
      completed: false,
      content: `# International Organizations and Global Governance

International organizations play crucial roles in global governance, providing frameworks for cooperation, dispute resolution, and standard-setting. This module examines their legal status, functions, and relationship with member states.

## Legal Personality of International Organizations

International organizations are subjects of international law with limited legal personality derived from their founding treaties.

**Criteria for Legal Personality:**
- Permanent association of states
- Established by treaty
- Own organs distinct from member states
- Legal capacity to act on international plane

**Implied Powers Doctrine**
- Organizations have powers necessary to achieve objectives
- Not limited to expressly granted powers
- Based on functional necessity
- ICJ confirmed in Reparations case

**Types of Organizations:**
- **Universal** - Open to all states (UN, WTO)
- **Regional** - Limited to geographic region (EU, AU, OAS)
- **Functional** - Focus on specific issue area (WHO, ILO, IMF)
- **Intergovernmental** - States as members
- **Supranational** - Powers above states (EU in certain areas)

## United Nations System

**Principal Organs:**
1. **General Assembly**
   - All member states represented
   - One state, one vote (important questions 2/3 majority)
   - Discuss any matter within UN Charter
   - Recommendations not legally binding (except budget)

2. **Security Council**
   - 15 members (5 permanent with veto, 10 elected)
   - Primary responsibility for international peace and security
   - Binding decisions under Chapter VII
   - Can authorize force, sanctions, peacekeeping

3. **Economic and Social Council (ECOSOC)**
   - 54 elected members
   - Coordinates economic, social, environmental work
   - Consults with NGOs and civil society

4. **International Court of Justice**
   - Principal judicial organ
   - Contentious cases between states
   - Advisory opinions for UN organs
   - Located in The Hague

5. **Secretariat**
   - Administrative organ headed by Secretary-General
   - Carries out day-to-day work
   - International civil service

6. **Trusteeship Council**
   - Suspended operations (last trust territory independent 1994)

**Specialized Agencies**
- Autonomous organizations linked to UN by agreement
- Examples: WHO, UNESCO, FAO, IMF, World Bank
- Own membership, governance, budget

## Decision-Making and Voting

**Different Voting Systems:**
- **One state, one vote** (General Assembly, most universal organizations)
- **Weighted voting** (IMF, World Bank - based on financial contribution)
- **Consensus** (WTO, increasingly common)
- **Qualified majority** (EU - population and states weighted)
- **Unanimity** (rare, gives each state veto)

**Legal Effect of Decisions:**
- **Binding decisions** - Security Council Chapter VII, some specialized agencies
- **Recommendations** - General Assembly, most resolutions
- **Soft law** - Standards, guidelines, declarations
- **Treaty-making** - Organizations can conclude treaties

## Privileges and Immunities

**Rationale:** Enable organizations to function independently
**Legal Basis:** Founding treaties, headquarters agreements, Convention on Privileges and Immunities

**Types of Immunities:**
- **Organizational immunity** - From legal process, taxation
- **Personnel immunity** - Functional immunity for official acts
- **Premises immunity** - Inviolability of headquarters
- **Communications immunity** - Freedom from censorship

**Waiver:** Organizations can waive immunity when justice requires

## Relationship with Member States

**Membership:**
- **Original members** - Charter signatories
- **Admission** - Recommended by Security Council, approved by General Assembly
- **Suspension/Expulsion** - For persistent Charter violations
- **Withdrawal** - Technically possible but rare

**Obligations of Members:**
- Carry out decisions in good faith
- Provide financial contributions
- Cooperate with organization
- Respect privileges and immunities

**Supremacy Clause:** UN Charter Article 103 - Charter obligations prevail over other treaty obligations

## Dispute Settlement Mechanisms

**Political Methods:**
- Negotiation
- Mediation/Good offices
- Inquiry/fact-finding
- Conciliation

**Legal Methods:**
- Arbitration
- Judicial settlement (ICJ, ITLOS, regional courts)
- Quasi-judicial bodies (WTO dispute settlement)

**Compliance Mechanisms:**
- Reporting and monitoring
- Inspection and verification
- Sanctions and countermeasures
- Suspension of privileges

## Regional Organizations

**European Union**
- Most integrated regional organization
- Supranational powers in many areas
- Direct effect of EU law in member states
- European Court of Justice ensures uniform application

**African Union**
- Successor to Organization of African Unity
- Emphasis on sovereignty and non-interference
- Peace and Security Council
- African Court on Human and Peoples' Rights

**Organization of American States**
- Oldest regional organization (1948)
- Inter-American human rights system
- Democratic charter promoting democracy

**Association of Southeast Asian Nations**
- Consensus-based decision making
- Non-interference principle strong
- Economic cooperation focus
- ASEAN Way - informal, non-confrontational

## Challenges and Reform

**Current Challenges:**
- **Representation** - Security Council permanent membership outdated
- **Effectiveness** - Difficulty addressing contemporary issues
- **Funding** - Dependence on major contributors
- **Legitimacy** - Democratic deficit in decision-making
- **Coordination** - Proliferation of organizations with overlapping mandates

**Reform Proposals:**
- Security Council expansion
- Strengthening General Assembly role
- Improving coordination among agencies
- Enhancing transparency and accountability
- Strengthening compliance mechanisms

**Future Directions:**
- Greater involvement of non-state actors
- Digital governance issues
- Climate change coordination
- Global health governance
- Sustainable development implementation

International organizations remain essential for addressing global challenges that individual states cannot solve alone, though continual adaptation is necessary.`,
      quiz: [
        {
          id: 1,
          question: "What gives international organizations legal personality?",
          options: [
            "Their founding treaties and functional necessity",
            "UN General Assembly resolution",
            "Recognition by all states",
            "Domestic legislation in member states"
          ],
          correctAnswer: 0,
          explanation: "Legal personality derives from founding treaties and is confirmed by functional necessity to achieve organizational objectives."
        },
        {
          id: 2,
          question: "What is the implied powers doctrine?",
          options: [
            "Organizations have powers necessary to achieve objectives",
            "Powers must be explicitly stated in founding treaty",
            "Only expressly granted powers are valid",
            "Powers implied from domestic law analogs"
          ],
          correctAnswer: 0,
          explanation: "Implied powers allow organizations to exercise powers reasonably necessary to fulfill their purposes, even if not expressly stated."
        },
        {
          id: 3,
          question: "Which UN organ has binding decision-making power?",
          options: [
            "General Assembly on all matters",
            "Economic and Social Council",
            "Secretariat",
            "Security Council under Chapter VII"
          ],
          correctAnswer: 3,
          explanation: "Security Council decisions under Chapter VII regarding threats to peace are binding on all UN members."
        },
        {
          id: 4,
          question: "What voting system does the IMF use?",
          options: [
            "Simple majority of members",
            "Weighted voting based on financial contribution",
            "One state, one vote",
            "Consensus only"
          ],
          correctAnswer: 1,
          explanation: "IMF uses weighted voting where votes correspond to financial contributions (quotas), giving larger economies more influence."
        },
        {
          id: 5,
          question: "Why do international organizations need immunities?",
          options: [
            "To avoid all legal accountability",
            "To save money on taxes",
            "To gain diplomatic status",
            "To function independently of member state interference"
          ],
          correctAnswer: 3,
          explanation: "Immunities protect organizations from political pressure and legal interference by member states, ensuring independent operation."
        },
        {
          id: 6,
          question: "What does UN Charter Article 103 establish?",
          options: [
            "Security Council veto power",
            "General Assembly budgetary authority",
            "ICJ compulsory jurisdiction",
            "UN obligations prevail over conflicting treaty obligations"
          ],
          correctAnswer: 3,
          explanation: "Article 103 establishes supremacy of UN Charter obligations over obligations under any other international agreement."
        },
        {
          id: 7,
          question: "What characterizes supranational organizations?",
          options: [
            "Complete independence from states",
            "Global membership requirements",
            "Military enforcement capabilities",
            "Powers above member states in certain areas"
          ],
          correctAnswer: 3,
          explanation: "Supranational organizations like the EU can make binding decisions that override member state laws in specific policy areas."
        },
        {
          id: 8,
          question: "How are UN specialized agencies related to the UN?",
          options: [
            "Directly controlled by General Assembly",
            "Autonomous but linked through agreements",
            "Independent with no formal relationship",
            "Subsidiary organs of Security Council"
          ],
          correctAnswer: 1,
          explanation: "Specialized agencies are autonomous organizations with their own governance, linked to UN through relationship agreements."
        },
        {
          id: 9,
          question: "What is the 'ASEAN Way'?",
          options: [
            "Military cooperation focus",
            "Majority voting system",
            "Informal, consensus-based, non-confrontational approach",
            "Formal legalistic decision-making"
          ],
          correctAnswer: 2,
          explanation: "The ASEAN Way emphasizes informal processes, consensus decision-making, and non-interference in internal affairs."
        },
        {
          id: 10,
          question: "What is a current challenge for Security Council reform?",
          options: [
            "Too many rotating members",
            "Lack of veto power for all members",
            "Insufficient meeting frequency",
            "Outdated permanent membership not reflecting current power"
          ],
          correctAnswer: 3,
          explanation: "Current permanent membership reflects 1945 power distribution, not contemporary geopolitical realities."
        },
        {
          id: 11,
          question: "What distinguishes regional from universal organizations?",
          options: [
            "Level of integration",
            "Presence of judicial organs",
            "Binding vs non-binding decisions",
            "Geographic limitation of membership"
          ],
          correctAnswer: 3,
          explanation: "Regional organizations limit membership to states in a particular geographic area, while universal organizations are open to all states."
        },
        {
          id: 12,
          question: "What is soft law in international organizations?",
          options: [
            "Informal agreements between officials",
            "Domestic laws implementing treaties",
            "Non-binding standards and guidelines",
            "Weakly enforced binding decisions"
          ],
          correctAnswer: 2,
          explanation: "Soft law includes resolutions, declarations, and guidelines that are not legally binding but influence state behavior."
        },
        {
          id: 13,
          question: "What is the role of the UN Secretary-General?",
          options: [
            "Prosecutor for international crimes",
            "Head of Security Council",
            "Chief administrative officer and diplomatic actor",
            "Commander of peacekeeping forces"
          ],
          correctAnswer: 2,
          explanation: "The Secretary-General heads the Secretariat, manages UN operations, and can play important diplomatic roles."
        },
        {
          id: 14,
          question: "What is consensus decision-making?",
          options: [
            "Unanimous agreement of all members",
            "Majority agreement after discussion",
            "Adoption without formal vote if no objection",
            "Decision by executive board only"
          ],
          correctAnswer: 2,
          explanation: "Consensus means adopting decisions without formal voting when no member formally objects, though they may have reservations."
        },
        {
          id: 15,
          question: "What are functional organizations?",
          options: [
            "Organizations based on economic function",
            "Organizations with limited membership",
            "Temporary organizations for specific tasks",
            "Focus on specific issue areas like health or labor"
          ],
          correctAnswer: 3,
          explanation: "Functional organizations specialize in particular areas like health (WHO), labor (ILO), or education (UNESCO)."
        },
        {
          id: 16,
          question: "What is the democratic deficit in international organizations?",
          options: [
            "Lack of direct accountability to citizens",
            "Failure to hold regular elections",
            "Absence of democratic member states",
            "Exclusion of democratic principles"
          ],
          correctAnswer: 0,
          explanation: "Democratic deficit refers to decision-making by unelected officials without direct accountability to affected populations."
        },
        {
          id: 17,
          question: "What distinguishes intergovernmental from supranational?",
          options: [
            "Intergovernmental requires state consent; supranational can bind states",
            "Intergovernmental has binding decisions; supranational has recommendations",
            "Intergovernmental is political; supranational is economic",
            "Intergovernmental is global; supranational is regional"
          ],
          correctAnswer: 0,
          explanation: "Intergovernmental decisions require state consent, while supranational organizations can make binding decisions overriding state laws."
        },
        {
          id: 18,
          question: "What is the purpose of headquarters agreements?",
          options: [
            "Determine funding contributions",
            "Set employment conditions for staff",
            "Establish main office locations",
            "Define privileges and immunities in host state"
          ],
          correctAnswer: 3,
          explanation: "Headquarters agreements between organizations and host states define legal status, privileges, and immunities in the host country."
        },
        {
          id: 19,
          question: "What is weighted voting?",
          options: [
            "Extra votes for founding members",
            "Votes allocated based on criteria like population or contribution",
            "Multiple votes for democratic states",
            "Temporary voting adjustments"
          ],
          correctAnswer: 1,
          explanation: "Weighted voting gives states votes proportional to factors like financial contribution (IMF) or population (EU Council)."
        },
        {
          id: 20,
          question: "What is a specialized agency of the UN?",
          options: [
            "Autonomous organization with UN relationship agreement",
            "Temporary UN program",
            "Regional UN office",
            "Department within UN Secretariat"
          ],
          correctAnswer: 0,
          explanation: "Specialized agencies are independent international organizations linked to UN through cooperation agreements."
        }
      ]
    },
    {
      id: 6,
      title: "International Dispute Settlement and Peaceful Resolution",
      completed: false,
      content: `# International Dispute Settlement and Peaceful Resolution

Peaceful settlement of disputes is a fundamental obligation under international law. This module examines the various mechanisms available to states for resolving conflicts without resorting to force.

## Obligation of Peaceful Settlement

**UN Charter Article 2(3):** "All Members shall settle their international disputes by peaceful means in such a manner that international peace and security, and justice, are not endangered."

**Key Principles:**
- **Free choice of means** - States select appropriate peaceful method
- **Procedural flexibility** - Methods can be combined or sequenced
- **Continuing obligation** - Persists even if initial attempts fail
- **Good faith participation** - Must genuinely seek resolution

## Diplomatic Means

**1. Negotiation**
- Direct discussions between parties
- Most common and flexible method
- Can be bilateral or multilateral
- No third party involvement
- Success depends on political will

**2. Good Offices**
- Third party facilitates communication
- Does not propose solutions
- Maintains channels between parties
- Often by neutral states or international organizations

**3. Mediation**
- Third party actively assists in finding solution
- Can propose terms of settlement
- More active than good offices
- Mediator's prestige and leverage important
- Examples: UN, regional organizations, eminent persons

**4. Inquiry/Fact-Finding**
- Impartial investigation of disputed facts
- Clarifies factual basis of dispute
- Can be by bilateral commission or international body
- Factual findings not binding but influential

**5. Conciliation**
- Commission examines dispute and proposes settlement
- Non-binding recommendations
- Combines inquiry and mediation
- Formal procedure established by agreement

## Legal Means

**1. Arbitration**
- Binding decision by arbitrators chosen by parties
- More flexible than judicial settlement
- Parties control procedure and arbitrator selection
- Can choose arbitrators with specific expertise
- Permanent Court of Arbitration provides framework

**2. Judicial Settlement**
- Binding decision by permanent court
- Independent judges applying international law
- Procedural rules fixed by court statute
- Examples: International Court of Justice, International Tribunal for Law of the Sea

## International Court of Justice

**Composition:**
- 15 independent judges elected by UN General Assembly and Security Council
- No two judges from same country
- Represent main legal systems of world
- Nine-year terms, staggered elections

**Jurisdiction:**
- **Contentious cases** - Disputes between states
- **Advisory opinions** - Legal questions from UN organs and agencies

**Basis of Jurisdiction:**
- **Special agreement** - Parties agree to submit specific dispute
- **Treaty provision** - Dispute resolution clause in treaty
- **Optional Clause** - Declaration accepting compulsory jurisdiction
- **Forum prorogatum** - Subsequent consent after case filed

**Procedure:**
- Written pleadings
- Oral hearings
- Deliberation in secret
- Judgment with reasons
- No appeals (final and binding)

**Enforcement:**
- UN Security Council can recommend or decide measures
- Reliance on state compliance and reputational costs
- No direct enforcement mechanism

## Specialized Tribunals

**International Tribunal for the Law of the Sea (ITLOS)**
- Hamburg, established by UNCLOS
- Jurisdiction over law of sea disputes
- Compulsory jurisdiction for certain UNCLOS provisions
- Expedited procedures for provisional measures

**World Trade Organization Dispute Settlement**
- Two-tier system: Panels and Appellate Body
- Binding decisions on trade disputes
- Authorizes retaliatory measures for non-compliance
- Currently facing challenges with Appellate Body appointments

**International Criminal Courts**
- ICC, ICTY, ICTR, hybrid tribunals
- Individual criminal responsibility
- Not for state disputes but related to conflict resolution

**Regional Courts**
- European Court of Human Rights
- Inter-American Court of Human Rights
- African Court on Human and Peoples' Rights
- Court of Justice of European Union

## Hybrid and Ad Hoc Methods

**Commissions of Inquiry**
- Investigate specific incidents or situations
- Document facts and evidence
- Can make accountability recommendations
- Examples: Human rights violations, conflict situations

**Truth and Reconciliation Commissions**
- Focus on healing and historical record
- Often transitional justice contexts
- Combine fact-finding with reconciliation
- South Africa model influential

**Track II Diplomacy**
- Unofficial, informal dialogues
- Often involving academics, former officials, NGOs
- Builds trust and explores solutions
- Can feed into official processes

## Compliance and Implementation

**Challenges:**
- No centralized enforcement
- Reliance on state willingness to comply
- Political considerations may override legal obligations
- Power asymmetries affect outcomes

**Compliance Mechanisms:**
- **Monitoring** - Supervision of implementation
- **Reporting** - Regular progress reports
- **Verification** - On-site inspection when agreed
- **Sanctions** - Economic, political, or military measures

**Role of International Community:**
- Diplomatic pressure
- Conditioning assistance or relations
- Public naming and shaming
- Support for implementation capacity

## Preventive Diplomacy and Conflict Prevention

**Early Warning Systems**
- Monitoring potential conflict indicators
- Rapid response mechanisms
- UN and regional organization roles

**Preventive Deployment**
- Peacekeeping before conflict escalates
- Confidence-building measures
- Macedonia example (UNPREDEP)

**Peacebuilding**
- Post-conflict stabilization and institution-building
- Addressing root causes of conflict
- Sustainable development focus
- UN Peacebuilding Commission

## Contemporary Challenges

**New Types of Disputes:**
- Cyber conflicts and digital issues
- Climate change and environmental disputes
- Maritime boundaries in changing geography
- Space and celestial resource conflicts

**Non-State Actors:**
- Increasing role in disputes
- Limited access to traditional mechanisms
- Alternative dispute resolution methods
- Corporate disputes with states (investor-state arbitration)

**Cross-Cutting Issues:**
- Human rights in dispute settlement
- Environmental protection considerations
- Gender perspectives in peace processes
- Indigenous rights in territorial disputes

**Systemic Challenges:**
- Fragmentation of international law
- Proliferation of tribunals
- Coordination between different mechanisms
- Ensuring consistent jurisprudence

## Future Directions

**Strengthening Existing Mechanisms:**
- Enhancing ICJ effectiveness
- Reforming WTO dispute settlement
- Improving regional court access
- Streamlining arbitration procedures

**Innovative Approaches:**
- Online dispute resolution
- Mixed commissions with diverse expertise
- Multi-stakeholder mediation
- Technology-assisted fact-finding

**Capacity Building:**
- Training diplomats in dispute resolution
- Developing national mediation capacities
- Supporting regional organizations
- Enhancing civil society participation

Peaceful dispute settlement remains essential for maintaining international order and preventing conflicts from escalating into violence.`,
      quiz: [
        {
          id: 1,
          question: "What does UN Charter Article 2(3) require?",
          options: [
            "Peaceful settlement of international disputes",
            "Military intervention for human rights",
            "Compulsory ICJ jurisdiction",
            "Arbitration for all conflicts"
          ],
          correctAnswer: 0,
          explanation: "Article 2(3) establishes the fundamental obligation to settle international disputes by peaceful means."
        },
        {
          id: 2,
          question: "What is the key difference between mediation and good offices?",
          options: [
            "Good offices is binding; mediation is not",
            "Mediation involves proposing solutions; good offices only facilitates communication",
            "Good offices involves investigation; mediation does not",
            "Mediation requires legal expertise; good offices requires diplomatic skills"
          ],
          correctAnswer: 1,
          explanation: "Mediators actively propose settlement terms, while good offices providers merely facilitate communication without proposing solutions."
        },
        {
          id: 3,
          question: "What is conciliation?",
          options: [
            "Binding arbitration by neutral party",
            "Informal negotiations between parties",
            "Commission examines dispute and proposes non-binding settlement",
            "Judicial decision by international court"
          ],
          correctAnswer: 2,
          explanation: "Conciliation involves a commission investigating facts and proposing settlement terms, but recommendations are not binding."
        },
        {
          id: 4,
          question: "How does arbitration differ from judicial settlement?",
          options: [
            "Arbitration is always faster and cheaper",
            "Judicial settlement allows more flexibility",
            "Arbitration decisions are not binding",
            "Parties control arbitrator selection and procedure"
          ],
          correctAnswer: 3,
          explanation: "In arbitration, parties choose arbitrators and often design procedures, while courts have fixed rules and permanent judges."
        },
        {
          id: 5,
          question: "What are the four bases of ICJ jurisdiction?",
          options: [
            "General Assembly resolution, regional organization request, state application, treaty",
            "Arbitration failure, mediation breakdown, fact-finding need, urgency",
            "Special agreement, treaty provision, optional clause, forum prorogatum",
            "UN membership, Security Council referral, state consent, customary law"
          ],
          correctAnswer: 2,
          explanation: "ICJ can hear cases through special agreements, treaty clauses, optional clause declarations, or subsequent consent (forum prorogatum)."
        },
        {
          id: 6,
          question: "What is the Optional Clause of ICJ Statute?",
          options: [
            "Declaration accepting compulsory jurisdiction for certain disputes",
            "Optional procedures for advisory opinions",
            "Optional arbitration instead of court proceedings",
            "Choice of law provisions in treaties"
          ],
          correctAnswer: 0,
          explanation: "States can file declarations under ICJ Statute Article 36(2) accepting compulsory jurisdiction for legal disputes with other accepting states."
        },
        {
          id: 7,
          question: "What characterizes ITLOS jurisdiction?",
          options: [
            "Compulsory for certain UNCLOS disputes",
            "Optional for all maritime disputes",
            "Binding only if both parties agree",
            "Limited to environmental cases only"
          ],
          correctAnswer: 0,
          explanation: "ITLOS has compulsory jurisdiction for certain UNCLOS disputes, particularly those involving prompt release of vessels and provisional measures."
        },
        {
          id: 8,
          question: "What is track II diplomacy?",
          options: [
            "Unofficial, informal dialogues involving non-state actors",
            "Diplomatic relations through second-tier officials",
            "Secondary negotiations after failed official talks",
            "Alternative dispute resolution methods"
          ],
          correctAnswer: 0,
          explanation: "Track II diplomacy involves informal discussions among academics, former officials, and civil society to explore solutions outside formal channels."
        },
        {
          id: 9,
          question: "What is preventive deployment?",
          options: [
            "Early warning system deployment",
            "Diplomatic missions to potential conflict zones",
            "Military forces to prevent aggression",
            "Peacekeeping before conflict escalates"
          ],
          correctAnswer: 3,
          explanation: "Preventive deployment involves peacekeeping forces deployed to prevent conflict escalation, as in Macedonia (UNPREDEP)."
        },
        {
          id: 10,
          question: "What is a contemporary challenge for dispute settlement?",
          options: [
            "Lack of available mechanisms",
            "Excessive enforcement power",
            "Cyber conflicts and digital issues",
            "Too many binding decisions"
          ],
          correctAnswer: 2,
          explanation: "New types of disputes like cyber conflicts present challenges for traditional dispute settlement mechanisms designed for physical conflicts."
        },
        {
          id: 11,
          question: "What principle allows states to choose dispute settlement methods?",
          options: [
            "State sovereignty",
            "Consensual jurisdiction",
            "Procedural autonomy",
            "Free choice of means"
          ],
          correctAnswer: 3,
          explanation: "States have free choice of peaceful means to settle disputes, selecting methods they consider most appropriate."
        },
        {
          id: 12,
          question: "What is inquiry/fact-finding used for?",
          options: [
            "Clarifying disputed facts underlying conflict",
            "Imposing sanctions for violations",
            "Mediating between conflicting parties",
            "Determining legal responsibility"
          ],
          correctAnswer: 0,
          explanation: "Inquiry establishes factual basis of disputes, helping parties understand what actually happened before discussing solutions."
        },
        {
          id: 13,
          question: "What is forum prorogatum at the ICJ?",
          options: [
            "Agreement on procedural rules",
            "Selection of judges for specific case",
            "Choice of applicable law in dispute",
            "Subsequent consent to jurisdiction after case filed"
          ],
          correctAnswer: 3,
          explanation: "Forum prorogatum allows a state to accept ICJ jurisdiction after a case has been filed against it by another state."
        },
        {
          id: 14,
          question: "What characterizes WTO dispute settlement?",
          options: [
            "Non-binding recommendations only",
            "Direct enforcement by UN Security Council",
            "Compulsory arbitration for all members",
            "Two-tier system with panels and Appellate Body"
          ],
          correctAnswer: 3,
          explanation: "WTO has panels for initial rulings and an Appellate Body for appeals, with authorization for trade sanctions if decisions not implemented."
        },
        {
          id: 15,
          question: "What is peacebuilding?",
          options: [
            "Military intervention to stop conflicts",
            "Post-conflict stabilization and institution-building",
            "Peacekeeping during active conflicts",
            "Preventive diplomacy before conflicts"
          ],
          correctAnswer: 1,
          explanation: "Peacebuilding addresses root causes of conflict and builds sustainable peace through development, reconciliation, and institution-building."
        },
        {
          id: 16,
          question: "What is the main enforcement challenge for international courts?",
          options: [
            "Lack of clear judgments",
            "Reliance on state willingness to comply",
            "Too many enforcement mechanisms",
            "Insufficient number of cases"
          ],
          correctAnswer: 1,
          explanation: "International courts lack direct enforcement powers and depend on state compliance, political pressure, and reputational costs."
        },
        {
          id: 17,
          question: "What are truth and reconciliation commissions?",
          options: [
            "Mediation teams for peace negotiations",
            "Criminal tribunals for war crimes",
            "Bodies focusing on healing and historical record",
            "Fact-finding missions for current disputes"
          ],
          correctAnswer: 2,
          explanation: "Truth commissions document past abuses, promote reconciliation, and often recommend reparations and reforms rather than criminal prosecution."
        },
        {
          id: 18,
          question: "What is preventive diplomacy?",
          options: [
            "Early negotiations in dispute settlement",
            "Diplomatic immunity for preventive actions",
            "Preventive military deployments",
            "Actions to prevent disputes from escalating into conflicts"
          ],
          correctAnswer: 3,
          explanation: "Preventive diplomacy uses diplomatic tools to prevent disputes from arising or escalating into violent conflict."
        },
        {
          id: 19,
          question: "What is the role of the Permanent Court of Arbitration?",
          options: [
            "Hears appeals from national courts",
            "Enforces international court decisions",
            "Provides framework and services for arbitration cases",
            "Decides cases between states and individuals"
          ],
          correctAnswer: 2,
          explanation: "PCA provides administrative support, rules, and facilities for arbitration, conciliation, and fact-finding involving various parties."
        },
        {
          id: 20,
          question: "What is a compliance mechanism in dispute settlement?",
          options: [
            "Automatic enforcement of rulings",
            "Monitoring implementation of decisions",
            "Punishment for non-compliance",
            "Rewards for compliance"
          ],
          correctAnswer: 1,
          explanation: "Compliance mechanisms include monitoring, reporting, and verification to ensure parties implement settlement terms or court decisions."
        }
      ]
    }
  ],
  exam: {
    title: "International Law Diploma Final Exam",
    description: "Comprehensive examination covering all six modules of the International Law Diploma program",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What characterizes the horizontal structure of international law?",
        options: [
          "Hierarchy of legal sources exists",
          "States are both creators and subjects of rules",
          "International organizations dominate law-making",
          "Central authority enforces all rules"
        ],
        correctAnswer: 1,
        explanation: "Horizontal structure means states create the rules that bind themselves, unlike domestic vertical systems."
      },
      {
        id: 2,
        question: "What are the two elements required for customary international law?",
        options: [
          "State declarations and public support",
          "Judicial decisions and scholarly writings",
          "Treaty ratification and implementation",
          "Consistent state practice and legal belief (opinio juris)"
        ],
        correctAnswer: 3,
        explanation: "Custom requires objective state practice and subjective belief that practice is legally required."
      },
      {
        id: 3,
        question: "What principle prohibits interfering in states' internal affairs?",
        options: [
          "Peaceful settlement",
          "Sovereign equality",
          "Non-intervention",
          "Good faith"
        ],
        correctAnswer: 2,
        explanation: "Non-intervention protects domestic jurisdiction from external interference in internal matters."
      },
      {
        id: 4,
        question: "What is the pacta tertiis rule in treaty law?",
        options: [
          "Third states can enforce treaties",
          "Treaties only bind consenting parties",
          "Treaties automatically bind all states",
          "All treaties require three parties"
        ],
        correctAnswer: 1,
        explanation: "Treaties cannot create obligations for third states without their consent."
      },
      {
        id: 5,
        question: "What is the primary rule for treaty interpretation?",
        options: [
          "Intent of drafters only",
          "Good faith according to ordinary meaning in context",
          "Strict literal interpretation",
          "Most restrictive interpretation"
        ],
        correctAnswer: 1,
        explanation: "VCLT Article 31 requires interpretation in good faith according to ordinary meaning in context of object and purpose."
      },
      {
        id: 6,
        question: "When can reservations be invalid?",
        options: [
          "If made after ratification",
          "If not accepted by all parties",
          "If relating to procedural provisions",
          "If incompatible with treaty's object and purpose"
        ],
        correctAnswer: 3,
        explanation: "Reservations that undermine a treaty's essential purposes are impermissible regardless of other states' reactions."
      },
      {
        id: 7,
        question: "What are the two elements of state responsibility?",
        options: [
          "Attributable conduct and breach of obligation",
          "Treaty violation and injury",
          "Fault and damage",
          "Intent and causation"
        ],
        correctAnswer: 0,
        explanation: "State responsibility requires conduct attributable to state that breaches international obligation."
      },
      {
        id: 8,
        question: "When are ultra vires acts of state organs attributable?",
        options: [
          "Never if beyond authority",
          "Only if causing major damage",
          "Only if authorized later",
          "When acting in official capacity"
        ],
        correctAnswer: 3,
        explanation: "Even acts exceeding authority are attributable if the organ was acting in official capacity."
      },
      {
        id: 9,
        question: "What circumstance precludes wrongfulness for saving lives?",
        options: [
          "Self-defense",
          "Necessity",
          "Distress",
          "Force majeure"
        ],
        correctAnswer: 2,
        explanation: "Distress applies when breach is only way to save lives, without contributing to situation."
      },
      {
        id: 10,
        question: "What is the preferred form of reparation?",
        options: [
          "Restitution",
          "Compensation",
          "Satisfaction",
          "Apology"
        ],
        correctAnswer: 0,
        explanation: "Restitution (re-establishing pre-breach situation) is primary when possible."
      },
      {
        id: 11,
        question: "What are the three types of state human rights obligations?",
        options: [
          "Report, implement, monitor",
          "Prevent, punish, compensate",
          "Respect, protect, fulfill",
          "Legislate, enforce, adjudicate"
        ],
        correctAnswer: 2,
        explanation: "States must respect (not interfere), protect (prevent third-party violations), and fulfill (take positive measures)."
      },
      {
        id: 12,
        question: "What is progressive realization of human rights?",
        options: [
          "Gradual implementation based on available resources",
          "Slow implementation by choice",
          "Future implementation when convenient",
          "Partial implementation of selected rights"
        ],
        correctAnswer: 0,
        explanation: "Economic/social rights require progressive realization using maximum available resources."
      },
      {
        id: 13,
        question: "When can states derogate from human rights?",
        options: [
          "During natural disasters",
          "During public emergency threatening nation's life",
          "During economic crisis",
          "During political transition"
        ],
        correctAnswer: 1,
        explanation: "Derogations require officially proclaimed emergency threatening nation, with measures strictly required."
      },
      {
        id: 14,
        question: "What is the Universal Periodic Review?",
        options: [
          "Review of treaty compliance only",
          "Court proceedings for violations",
          "Peer review of all UN members' human rights records",
          "Academic assessment of implementation"
        ],
        correctAnswer: 2,
        explanation: "UPR examines all UN members' human rights records through peer review process."
      },
      {
        id: 15,
        question: "What gives international organizations legal personality?",
        options: [
          "UN General Assembly resolution",
          "Recognition by all states",
          "Founding treaties and functional necessity",
          "Domestic legislation"
        ],
        correctAnswer: 2,
        explanation: "Legal personality derives from founding treaties and functional necessity to achieve objectives."
      },
      {
        id: 16,
        question: "What is the implied powers doctrine?",
        options: [
          "Powers must be explicitly stated",
          "Only expressly granted powers valid",
          "Organizations have powers necessary to achieve objectives",
          "Powers implied from domestic law"
        ],
        correctAnswer: 2,
        explanation: "Implied powers allow exercise of powers reasonably necessary to fulfill purposes."
      },
      {
        id: 17,
        question: "Which UN organ has binding decision power?",
        options: [
          "Secretariat",
          "Security Council under Chapter VII",
          "Economic and Social Council",
          "General Assembly on all matters"
        ],
        correctAnswer: 1,
        explanation: "Security Council Chapter VII decisions on threats to peace are binding."
      },
      {
        id: 18,
        question: "What does UN Charter Article 103 establish?",
        options: [
          "ICJ compulsory jurisdiction",
          "UN obligations prevail over conflicting treaties",
          "Security Council veto power",
          "General Assembly budgetary authority"
        ],
        correctAnswer: 1,
        explanation: "Article 103 establishes supremacy of UN Charter obligations over other international agreements."
      },
      {
        id: 19,
        question: "What does UN Charter Article 2(3) require?",
        options: [
          "Compulsory ICJ jurisdiction",
          "Peaceful settlement of disputes",
          "Military intervention for rights",
          "Arbitration for all conflicts"
        ],
        correctAnswer: 1,
        explanation: "Article 2(3) establishes obligation to settle disputes by peaceful means."
      },
      {
        id: 20,
        question: "What is the key difference between mediation and good offices?",
        options: [
          "Good offices involves investigation",
          "Mediation proposes solutions; good offices only facilitates communication",
          "Mediation requires legal expertise",
          "Good offices is binding; mediation is not"
        ],
        correctAnswer: 1,
        explanation: "Mediators actively propose terms; good offices providers only facilitate communication."
      },
      {
        id: 21,
        question: "What is conciliation?",
        options: [
          "Binding arbitration by neutral party",
          "Commission examines and proposes non-binding settlement",
          "Informal negotiations",
          "Judicial decision"
        ],
        correctAnswer: 1,
        explanation: "Conciliation involves investigation and proposed settlement, but recommendations not binding."
      },
      {
        id: 22,
        question: "What are the ICJ jurisdiction bases?",
        options: [
          "UN membership, Security Council referral, consent, custom",
          "General Assembly resolution, regional request, application, treaty",
          "Arbitration failure, mediation breakdown, fact-finding, urgency",
          "Special agreement, treaty, optional clause, forum prorogatum"
        ],
        correctAnswer: 3,
        explanation: "ICJ hears cases through special agreements, treaty clauses, optional clause, or subsequent consent."
      },
      {
        id: 23,
        question: "What is the Optional Clause?",
        options: [
          "Optional procedures for advisory opinions",
          "Optional arbitration alternative",
          "Choice of law in treaties",
          "Declaration accepting ICJ compulsory jurisdiction"
        ],
        correctAnswer: 3,
        explanation: "Optional Clause allows states to accept ICJ compulsory jurisdiction for legal disputes."
      },
      {
        id: 24,
        question: "What characterizes ITLOS jurisdiction?",
        options: [
          "Limited to environmental cases",
          "Optional for all maritime disputes",
          "Binding only with agreement",
          "Compulsory for certain UNCLOS disputes"
        ],
        correctAnswer: 3,
        explanation: "ITLOS has compulsory jurisdiction for certain UNCLOS disputes, especially prompt release and provisional measures."
      },
      {
        id: 25,
        question: "What is track II diplomacy?",
        options: [
          "Secondary negotiations after failed talks",
          "Unofficial, informal dialogues with non-state actors",
          "Alternative dispute resolution",
          "Diplomacy through lower-level officials"
        ],
        correctAnswer: 1,
        explanation: "Track II involves informal discussions among academics, former officials, civil society."
      },
      {
        id: 26,
        question: "What is preventive deployment?",
        options: [
          "Peacekeeping before conflict escalates",
          "Military forces to prevent aggression",
          "Early warning systems",
          "Diplomatic missions to conflict zones"
        ],
        correctAnswer: 0,
        explanation: "Preventive deployment places peacekeepers to prevent conflict escalation."
      },
      {
        id: 27,
        question: "What is a contemporary dispute challenge?",
        options: [
          "Lack of available mechanisms",
          "Cyber conflicts and digital issues",
          "Too many binding decisions",
          "Excessive enforcement"
        ],
        correctAnswer: 1,
        explanation: "Cyber conflicts present new challenges for traditional dispute mechanisms."
      },
      {
        id: 28,
        question: "What principle allows state choice of dispute methods?",
        options: [
          "Procedural autonomy",
          "Free choice of means",
          "Consensual jurisdiction",
          "State sovereignty"
        ],
        correctAnswer: 1,
        explanation: "States freely choose peaceful means to settle disputes."
      },
      {
        id: 29,
        question: "What is inquiry/fact-finding for?",
        options: [
          "Imposing sanctions",
          "Mediating between parties",
          "Determining legal responsibility",
          "Clarifying disputed facts"
        ],
        correctAnswer: 3,
        explanation: "Inquiry establishes factual basis of disputes before discussing solutions."
      },
      {
        id: 30,
        question: "What is forum prorogatum at ICJ?",
        options: [
          "Subsequent consent after case filed",
          "Selection of judges",
          "Choice of applicable law",
          "Agreement on procedures"
        ],
        correctAnswer: 0,
        explanation: "Forum prorogatum allows accepting jurisdiction after case filed."
      },
      {
        id: 31,
        question: "What characterizes WTO dispute settlement?",
        options: [
          "Compulsory arbitration",
          "Direct UN enforcement",
          "Non-binding recommendations",
          "Two-tier system with panels and Appellate Body"
        ],
        correctAnswer: 3,
        explanation: "WTO has panels and Appellate Body with trade sanction authorization."
      },
      {
        id: 32,
        question: "What is peacebuilding?",
        options: [
          "Military intervention to stop conflicts",
          "Preventive diplomacy",
          "Post-conflict stabilization and institution-building",
          "Peacekeeping during conflicts"
        ],
        correctAnswer: 2,
        explanation: "Peacebuilding addresses root causes and builds sustainable peace."
      },
      {
        id: 33,
        question: "What is main enforcement challenge for courts?",
        options: [
          "Reliance on state willingness to comply",
          "Lack of clear judgments",
          "Too many enforcement mechanisms",
          "Insufficient cases"
        ],
        correctAnswer: 0,
        explanation: "Courts lack direct enforcement, depending on state compliance and political pressure."
      },
      {
        id: 34,
        question: "What are truth and reconciliation commissions?",
        options: [
          "Bodies focusing on healing and historical record",
          "Mediation teams for negotiations",
          "Fact-finding for current disputes",
          "Criminal tribunals for war crimes"
        ],
        correctAnswer: 0,
        explanation: "Truth commissions document abuses and promote reconciliation rather than prosecution."
      },
      {
        id: 35,
        question: "What is preventive diplomacy?",
        options: [
          "Preventive military deployments",
          "Diplomatic immunity for prevention",
          "Early negotiations",
          "Actions to prevent disputes escalating"
        ],
        correctAnswer: 3,
        explanation: "Preventive diplomacy uses diplomatic tools to prevent violent conflict."
      },
      {
        id: 36,
        question: "What is PCA's role?",
        options: [
          "Provides framework and services for arbitration",
          "Hears appeals from national courts",
          "Decides state-individual cases",
          "Enforces court decisions"
        ],
        correctAnswer: 0,
        explanation: "PCA provides administrative support and facilities for arbitration cases."
      },
      {
        id: 37,
        question: "What is a compliance mechanism?",
        options: [
          "Automatic enforcement",
          "Rewards for compliance",
          "Punishment for non-compliance",
          "Monitoring implementation of decisions"
        ],
        correctAnswer: 3,
        explanation: "Compliance mechanisms include monitoring, reporting, verification of implementation."
      },
      {
        id: 38,
        question: "What are general principles of law?",
        options: [
          "Treaty provisions only",
          "UN Security Council resolutions",
          "Academic theories",
          "Common principles from domestic legal systems"
        ],
        correctAnswer: 3,
        explanation: "General principles are identified by comparing domestic legal systems for common fundamental principles."
      },
      {
        id: 39,
        question: "What is objective responsibility?",
        options: [
          "Responsibility only with intent",
          "Liability for intended consequences",
          "Liability based on breach, not fault",
          "Responsibility requiring negligence"
        ],
        correctAnswer: 2,
        explanation: "Objective responsibility means liability for breaches regardless of fault or intent."
      },
      {
        id: 40,
        question: "What are minimum core obligations?",
        options: [
          "Essential levels of rights requiring immediate realization",
          "Core group of important rights",
          "Basic rights for poor countries",
          "Minimum treaty ratification"
        ],
        correctAnswer: 0,
        explanation: "Minimum core obligations require immediate realization of essential economic/social rights levels."
      }
    ]
  }
};
