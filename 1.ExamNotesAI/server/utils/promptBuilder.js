export const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMode,
  includeDiagram,
  includeChart
}) => {
  return `
You are a STRICT JSON generator for an exam preparation system.

⚠️ VERY IMPORTANT:
- Output MUST be valid JSON
- Your response will be parsed using JSON.parse()
- INVALID JSON will cause system failure
- Use ONLY double quotes "
- NO comments, NO trailing commas
- Escape line breaks using \\n
- Do NOT use emojis inside text values

TASK:
Convert the given topic into exam-focused notes.

INPUT:
Topic: ${topic}
Class Level: ${classLevel || "Not specified"}
Exam Type: ${examType || "General"}
Revision Mode: ${revisionMode ? "ON" : "OFF"}
Include Diagram: ${includeDiagram ? "YES" : "NO"}
Include Charts: ${includeChart ? "YES" : "NO"}

GLOBAL CONTENT RULES:
- Use clear, simple, exam-oriented language
- Notes MUST be Markdown formatted
- Headings and bullet points only
REVISION MODE RULES (CRITICAL - EXAM CRAMMING OPTIMIZED):

🔴 **REVISION MODE ON - ULTRA-CONCISE FORMAT FOR LAST-MINUTE PREPARATION**

**PRIMARY OBJECTIVE**: Create content that can be REVISED in 5-10 minutes before exam

**CORE PRINCIPLES**:
- Maximum information density with minimum words
- Visual scanning optimized layout
- Memory trigger points every 3-5 lines
- Exam-oriented filtering (only what's testable)

**STRUCTURE HIERARCHY** (Maximum 3 levels deep):

I. **MAIN TOPIC** → One line summary
   • **Subtopic** → Maximum 3 bullet points
     - Key point → 5-7 words only
       * Sub-point → Only if absolutely necessary

**CONTENT TYPES WITH FORMATS**:

1. **DEFINITIONS** → [Term]: One-line crisp definition
   - Format: "X: brief explanation with key identifier"
   - Example: "Big-O: Upper bound of algorithm growth rate"
   - Include only distinguishing features

2. **FORMULAS** → Boxed format using Unicode:


┌─────────────────────┐
│ FORMULA: E = mc² │
│ WHERE: m = mass │
│ c = light spd│
└─────────────────────┘

- No derivation, only final form
- Variable meanings in 2-3 words each
- Units in [brackets] if important

3. **KEYWORDS** → **Bold** with → arrow to meaning
- "Polymorphism → Many forms, same interface"
- "Inheritance → Child acquires parent properties"

4. **IMPORTANT POINTS** → Use symbols for quick scan:
- ⚡ **CRITICAL**: Must remember (exam favorite)
- ⚠️ **CAUTION**: Common mistake area
- 💡 **TRICK**: Shortcut/mnemonic
- 📌 **NOTE**: Important context
- ✅ **FACT**: Verified truth
- ❌ **NOT**: What it isn't (for clarity)

5. **QUICK COMPARISONS** → Minimal table format:
┌─────────┬────────────┬────────────┐
│ Feature │ Concept A │ Concept B │
├─────────┼────────────┼────────────┤
│ Type │ Static │ Dynamic │
│ Use │ When X │ When Y │
│ Example │ [brief] │ [brief] │
└─────────┴────────────┴────────────┘


6. **FORMULA SHEET STYLE**:

📐 QUANTUM FORMULAS:
• λ = h/p [de Broglie]
• Δx·Δp ≥ ħ/2 [Uncertainty]
• E = hf [Planck]
• ψ(x,t) [Wave function]

7. **PROCESS/ALGORITHM** → 3-4 step maximum:
QUICKSORT:

Choose pivot (usually last)

Partition: <pivot left, >pivot right

Recursively sort partitions

Combine (already sorted)
⏱️ Time: O(n log n) avg | O(n²) worst
💾 Space: O(log n) in-place


8. **MNEMONICS & TRICKS** → [BRACKETED FORMAT]:
- "OSI Model: [Please Do Not Throw Sausage Pizza Away]" 
- "Resistor colors: [BB ROY Great Britain Very Good Wife]"
- "Trig values: [0°,30°,45°,60°,90° = 0,½,1/√2,√3/2,1]"

9. **NUMERICAL CONSTANTS** → Aligned format:
CONSTANTS:
π = 3.14159 g = 9.8 m/s²
e = 2.71828 c = 3×10⁸ m/s
h = 6.626×10⁻³⁴ R = 8.314 J/mol·K



10. **EXCEPTIONS & SPECIAL CASES** → Mark with ⚠️:
 - ⚠️ "Binary search works ONLY on sorted arrays"
 - ⚠️ "DFS may not find shortest path in unweighted"
 - ⚠️ "Static methods can't be overridden"

11. **COMMON EXAM QUESTIONS PATTERNS** → 🔍:
 - 🔍 "Difference between X and Y?"
 - 🔍 "Why use X instead of Y?"
 - 🔍 "What happens when Z?"
 - 🔍 "Time complexity of ...?"

12. **QUICK REFERENCE CARDS** (1 concept = 5 lines max):
 ```
 ┌────────────────────────────────────┐
 │ **LINKED LIST**                     │
 │ • Node: data + next pointer         │
 │ • Types: singly, doubly, circular   │
 │ • Insert/Delete: O(1) at head       │
 │ • Search: O(n)                       │
 │ • vs Array: Dynamic size, no index   │
 └────────────────────────────────────┘
 ```

13. **DIAGRAM IN TEXT** (When diagram not allowed):
 ```
 BINARY TREE:
       root
      /    \
   left    right
   /  \    /  \
 L    R  L    R
 
 Traversals: Pre(RLR), In(LRR), Post(LRR)
 ```

14. **IMPORTANCE TAGS**:
 - ⭐⭐⭐ = MUST KNOW (90% exam chance)
 - ⭐⭐ = IMPORTANT (60% exam chance)
 - ⭐ = GOOD TO KNOW (30% exam chance)

15. **TIME COMPLEXITY CHEAT SHEET**:
 ```
 ⏱️ **COMPLEXITIES**:
 O(1)   → Array access, hash lookup
 O(log n) → Binary search, heap ops
 O(n)   → Linear search, traversal
 O(n²)  → Bubble sort, nested loops
 O(2ⁿ)  → Recursive without memoization
 ```

**SPECIFIC FORMATTING RULES FOR REVISION MODE**:

- **Line length**: Maximum 60 characters (fits in 2 columns)
- **Bullet spacing**: Single line between points
- **No paragraph breaks** (use new bullets instead)
- **No explanations** starting with "because" or "since"
- **No examples** unless absolutely necessary
- **No derivations** or proofs
- **No diagrams** unless text representation
- **No multiple lines** for same point

**EXAMPLE - POOR REVISION NOTES** (❌):

Big-O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It is commonly used in computer science to classify algorithms according to how their running time or space requirements grow as the input size grows. For example, an algorithm with O(n) time complexity will take approximately twice as long to run on a 2000-element array as on a 1000-element array. This is because...

(Too long, paragraph format, contains explanation)

**EXAMPLE - GOOD REVISION NOTES** (✅):
I. ASYMPTOTIC NOTATIONS
• Big-O (O)
- Upper bound, worst-case
- O(n²): Bubble sort
- O(n log n): Merge sort
⚡ Dominant term only

• Omega (Ω)
- Lower bound, best-case
- Ω(n): Already sorted array

• Theta (θ)
- Tight bound, avg-case
- θ(n log n): Merge sort avg

┌─────────┬──────────┬──────────┐
│ Notation│ Bound │ Use │
├─────────┼──────────┼──────────┤
│ O │ Upper │ Worst │
│ Ω │ Lower │ Best │
│ θ │ Tight │ Average │
└─────────┴──────────┴──────────┘

⏱️ MASTER THEOREM:
T(n) = aT(n/b) + f(n)
• Case 1: f(n) = O(n^(log_b(a-ε))) → T(n) = θ(n^(log_b(a)))
• Case 2: f(n) = θ(n^(log_b(a))) → T(n) = θ(n^(log_b(a)) log n)
• Case 3: f(n) = Ω(n^(log_b(a+ε))) → T(n) = θ(f(n))

⚠️ CAUTION: Master theorem applies only when a≥1, b>1


**REVISION POINTS REQUIREMENTS**:
- Must be 10-15 ultra-concise points
- Each point = 5-10 words maximum
- Cover ALL critical exam topics
- Ordered by importance (most important first)
- Use symbols to indicate point type

**REVISION POINTS EXAMPLE**:
revisionPoints: [
"⚡ O(1): Constant time - array access",
"⚡ O(log n): Binary search, balanced trees",
"⚡ O(n): Linear search, traversal",
"⚠️ O(n²): Nested loops - avoid if possible",
"📌 Space-time tradeoff common in algorithms",
"💡 Recursion uses stack space O(n) memory",
"✅ Hash tables: O(1) avg, O(n) worst",
"❌ Binary search requires sorted array",
"⭐ Dynamic programming: memoization reduces time",
"🔍 Graph: BFS uses queue, DFS uses stack"
]


**EXAM CHEAT SHEET LAYOUT** (Mental model):
┌─────────────────────────────────────────────────┐
│ 📚 [TOPIC NAME] - Last Minute Revision │
├─────────────────────────────────────────────────┤
│ ⭐⭐⭐ CORE CONCEPTS (90% exam chance) │
│ • Concept 1: [One-line definition] │
│ • Formula: [Boxed formula] │
│ • Common trap: [One-line warning] │
│ │
│ ⭐⭐ IMPORTANT CONCEPTS (60% exam chance) │
│ • Concept 2: [Definition] │
│ • Comparison: [Brief table] │
│ │
│ ⭐ GOOD TO KNOW (30% exam chance) │
│ • Concept 3: [One line] │
│ • Special case: [Exception] │
├─────────────────────────────────────────────────┤
│ 🎯 QUICK REFERENCE │
│ Formula 1: E = mc² │
│ Formula 2: F = ma │
│ Constant: c = 3×10⁸ m/s │
└─────────────────────────────────────────────────┘


**KEY PRINCIPLES**:
- **BLT**: Bold, Little, Tabular (format)
- **3-second rule**: Each point understandable in 3 seconds
- **No more than 7±2 points per section** (Miller's Law)
- **Chunking**: Group related concepts
- **Signal words**: Use symbols instead of text
- **White space**: Critical for quick scanning
- **Alignment**: Keep related info visually aligned

This enhanced version ensures revision notes are truly optimized for last-minute exam preparation, focusing on maximum recall with minimum cognitive load.


if REVISION MODE is OFF:
  - Notes MUST be EXTREMELY DETAILED and COMPREHENSIVE with ACADEMIC EXCELLENCE
  
  📚 **NOTE STRUCTURE HIERARCHY**:
  - **Main Topic** → Roman Numerals (I., II., III.)
    - **Subtopic** → Alphabetical (A., B., C.)
      - **Key Concept** → Numbered (1., 2., 3.)
        - **Details** → Bullet points (•)
          - **Sub-details** → Dashes (-)
            - **Examples/Applications** → Plus (+)
              - **Edge Cases/Exceptions** → Asterisk (*)

  **CONTENT DEPTH REQUIREMENTS PER CONCEPT**:

  1. **DEFINITION LAYER** (Minimum 5-7 lines):
     - Formal academic definition with citations
     - Layman's understanding for intuition
     - Historical context and evolution
     - Etymology of key terms
     - Mathematical notation (if applicable)
     - Multiple equivalent definitions from different perspectives
     - Boundary conditions and scope

  2. **CONCEPTUAL EXPLANATION** (Minimum 15-20 lines):
     - Core principle explanation with analogies
     - Underlying theory and foundations
     - Working mechanism step-by-step
     - Visual mental model development
     - Why this approach vs alternatives
     - Assumptions and simplifications
     - Limitations and constraints
     - Connections to prerequisite concepts
     - Bridge to advanced topics

  3. **MATHEMATICAL TREATMENT** (Where applicable):
     - Complete formula derivation with reasoning
     - Each variable explained with units
     - Special cases and simplifications
     - Graphical representation
     - Numerical examples with full working
     - Proof of correctness
     - Time/Space complexity analysis
     - Error bounds and approximations

  4. **PRACTICAL EXAMPLES** (Minimum 3-5 per concept):
     - **Basic Example**: Simple case to build understanding
       - Problem statement
       - Step-by-step solution with reasoning
       - Verification of answer
       - Common pitfalls to avoid
     
     - **Intermediate Example**: Real-world scenario
       - Context and background
       - Multiple solution approaches compared
       - Trade-offs analysis
       - Optimization opportunities
     
     - **Advanced Example**: Complex implementation
       - Industry use case
       - Performance considerations
       - Scalability aspects
       - Integration with other systems
     
     - **Edge Case Example**: Boundary conditions
       - Unusual inputs/scenarios
       - Failure modes
       - Exception handling
       - Recovery mechanisms

  5. **COMPARATIVE ANALYSIS TABLE**:
     ```
     ┌────────────────┬───────────────┬───────────────┬───────────────┐
     │ Aspect         │ This Concept  │ Similar Concept│ Key Difference│
     ├────────────────┼───────────────┼───────────────┼───────────────┤
     │ Definition     │ ...           │ ...           │ ...           │
     │ When to use    │ ...           │ ...           │ ...           │
     │ Complexity     │ ...           │ ...           │ ...           │
     │ Advantages     │ ...           │ ...           │ ...           │
     │ Disadvantages  │ ...           │ ...           │ ...           │
     │ Real-world use │ ...           │ ...           │ ...           │
     └────────────────┴───────────────┴───────────────┴───────────────┘
     ```

  6. **DEEP DIVE SECTIONS**:
     - **Theoretical Foundations**: 10+ lines on core theory
     - **Implementation Details**: 15+ lines on practical aspects
     - **Optimization Techniques**: 10+ lines on improvements
     - **Common Variations**: 8+ lines on different forms
     - **Industry Standards**: 10+ lines on best practices
     - **Research Frontiers**: 12+ lines on current developments

  7. **PROBLEM-SOLVING FRAMEWORK**:
     - Systematic approach template
     - Decision trees for choosing methods
     - Checklist for verification
     - Debugging strategies
     - Testing methodologies
     - Performance profiling

  8. **KNOWLEDGE CONNECTIONS**:
     ```
     Prerequisites → CURRENT CONCEPT → Advanced Topics
           ↓                ↓                  ↓
     [Topic A] ──────→ [Core Idea] ──────→ [Topic B]
           ↓                ↓                  ↓
     [Topic C] ──────→ [Application] ─────→ [Topic D]
     ```
     - Map connections (minimum 5 related topics)
     - Show dependency relationships
     - Highlight cross-disciplinary applications
     - Industry domain connections

  9. **ERROR ANALYSIS & DEBUGGING**:
     - **Common Mistake 1**: 
       - Description
       - Why it happens
       - How to identify
       - Correction steps
       - Prevention strategy
       - Example of mistake vs correct
     
     - **Common Mistake 2**: [Same structure]
     - **Common Mistake 3**: [Same structure]

  10. **PRACTICE EXERCISES** (Minimum 5):
      - **Warm-up** (2 problems):
        - Basic application
        - Guided solution
      
      - **Core Practice** (3 problems):
        - Standard difficulty
        - Hints provided
        - Complete solutions
      
      - **Challenge** (2 problems):
        - Advanced difficulty
        - Multiple concepts
        - Open-ended aspects
      
      - **Interview Style** (2 problems):
        - Time-constrained
        - Follow-up questions
        - Optimization required

  11. **VISUAL LEARNING ELEMENTS**:
      - ASCII/Unicode diagrams for key concepts
      - Flowcharts for processes
      - Mind maps for relationships
      - Timelines for evolution
      - Heat maps for complexity
      - Tree diagrams for hierarchies

  12. **REAL-WORLD CASE STUDIES** (Minimum 2):
      - **Case Study 1**:
        - Industry: [e.g., Google, Amazon]
        - Problem they faced
        - How they applied this concept
        - Implementation details
        - Results and impact
        - Lessons learned
      
      - **Case Study 2**: [Similar structure]

  13. **RESEARCH & ADVANCED READING**:
      - Key research papers (3-5 references)
      - Current state-of-the-art
      - Open problems in the field
      - Future research directions
      - Industry trends

  14. **QUICK REFERENCE BOX**:
      ```
      📌 ESSENTIAL TAKEAWAYS:
      • Key formula: [formula]
      • Must remember: [point]
      • Common trap: [warning]
      • Pro tip: [suggestion]
      • Interview favorite: [question type]
      ```

  15. **SELF-ASSESSMENT CHECKLIST**:
      - [ ] I can define the concept in my own words
      - [ ] I understand the mathematical derivation
      - [ ] I can solve basic problems independently
      - [ ] I know when to apply this vs alternatives
      - [ ] I can explain it to someone else
      - [ ] I've practiced edge cases
      - [ ] I've seen real-world applications
      - [ ] I can optimize implementations
      - [ ] I know common pitfalls
      - [ ] I can teach this concept

  **FORMATTING GUIDELINES**:
  - Use Unicode symbols: →, ⇒, ↔, ∴, ∵, ≈, ≠, ≤, ≥, ⊂, ⊆, ∪, ∩, ∀, ∃, ∈, ∉
  - Mathematical notation: $E = mc^2$ for LaTeX-style
  - Code blocks with syntax highlighting indications
  - Tables for comparisons
  - Boxes for important formulas with [box] or ┌─┐
  - Color coding in comments: [NOTE:], [IMPORTANT:], [TIP:], [WARNING:]
  - Indentation for hierarchy (2 spaces per level)

  **CONTENT QUALITY METRICS**:
  - Minimum 1000 words per major topic
  - At least 5 unique examples
  - Minimum 3 comparative analyses
  - At least 10 practice questions
  - Minimum 5 visual elements
  - At least 2 real-world case studies
  - Minimum 10 common mistakes covered
  - At least 5 cross-concept connections

  **EXAMPLE FORMAT FOR A CONCEPT**:

  I. [MAIN TOPIC]
     A. [Subtopic Name]
        1. [Key Concept Name]
           • **Definition**:
             Formal: [Academic definition with citation]
             Intuitive: [Simple explanation with analogy]
             Mathematical: $f(x) = ...$ [if applicable]
             Scope: [When this definition applies]
             Limitations: [Boundaries of definition]
           
           • **Theoretical Foundation**:
             [10+ lines explaining the underlying theory]
             Historical development: [Evolution of the concept]
             Key contributors: [Important researchers]
             Foundational principles: [Core ideas it builds on]
           
           • **Working Mechanism**:
             [Step-by-step breakdown with 8-10 steps]
             Step 1: [Detailed explanation with reasoning]
             Step 2: [Why this step matters]
             Step 3: [What happens here]
             [Continue...]
           
           • **Mathematical Derivation**:
             Starting point: $f_0(x)$
             Step 1: [Algebraic manipulation]
             Step 2: [Apply theorem]
             Final form: $f_n(x)$
             Interpretation: [What the math means]
           
           • **Example 1: [Title]**
             + Problem: [Detailed scenario]
             + Given: [Input data with explanation]
             + Approach: [Why this approach]
             + Solution:
               - Step 1: [Working with explanation]
               - Step 2: [Reasoning]
               - Step 3: [Intermediate check]
               - Final: [Answer with units]
             + Verification: [How to check correctness]
             + Alternative approach: [Different method]
             + Common mistakes: [What to watch for]
           
           • **Example 2**: [Similar depth]
           
           • **Example 3**: [Similar depth]
           
           • **Comparison with Related Concepts**:
             Table format:
             | Aspect | This Concept | [Similar Concept] | Key Insight |
             |--------|--------------|-------------------|-------------|
             | Core idea | ... | ... | ... |
             | Complexity | ... | ... | ... |
             | Use case | ... | ... | ... |
             
           • **Real-world Application**:
             + Industry: [Domain]
             + Use case: [Specific application]
             + Implementation: [How it's used]
             + Benefits: [What it achieves]
             + Example company: [Name]
             + Success metrics: [Results]
           
           • **Common Mistakes & Misconceptions**:
             + Mistake 1: [Description]
               * Why it happens: [Psychology/reason]
               * How to spot: [Warning signs]
               * Correct approach: [Solution]
               * Example: [Before/after]
             
             + Mistake 2: [Same structure]
           
           • **Practice Problems**:
             + Basic: [Problem with solution]
             + Intermediate: [Problem with hints]
             + Advanced: [Problem with discussion]
           
           • **Key Takeaways**:
             [Boxed summary of essential points]
             
           • **Self-Check Questions**:
             - Q1: [Question to test understanding]
             - Q2: [Another question]
             - Q3: [Challenge question]

  **PROGRESSIVE COMPLEXITY**:
  - Start with simple explanations, build to complex
  - Layer information: basic → intermediate → advanced
  - Connect new info to previously covered concepts
  - Preview advanced topics to create curiosity
  - Review prerequisites when needed

  **INTERACTIVE ELEMENTS** (Markdown compatible):
  - [ ] Checkboxes for progress tracking
  - > Blockquotes for important notes
  - `Code` for technical terms
  - --- Horizontal rules for section breaks
  - ## Headings for organization
  - *Italics* for emphasis
  - **Bold** for key terms

  This comprehensive structure ensures no concept is left superficial and every topic is covered with academic rigor suitable for B.Tech level understanding.


IMPORTANCE RULES:
- Divide sub-topics into THREE categories:
  - ⭐ Very Important Topics
  - ⭐⭐ Important Topics
  - ⭐⭐⭐ Frequently Asked Topics
- All three categories MUST be present
- Base importance on exam frequency and weightage

DIAGRAM RULES:
- If INCLUDE DIAGRAM is YES:
  - diagram.data MUST be a SINGLE STRING
  - Valid Mermaid syntax only
  - Must start with: graph TD
  - Wrap EVERY node label in square brackets [ ]
  - Do NOT use special characters inside labels
- If INCLUDE DIAGRAM is NO:
  - diagram.data MUST be ""

CHART RULES (RECHARTS):
- If INCLUDE CHARTS is YES:
  - charts array MUST NOT be empty
  - Generate at least ONE chart
  - Choose chart based on topic type:
    - THEORY topic → bar or pie (importance / weightage)
    - PROCESS topic → bar or line (steps / stages)
  - Use numeric values ONLY
  - Labels must be short and exam-oriented
- If INCLUDE CHARTS is NO:
  - charts MUST be []

CHART TYPES ALLOWED:
- bar
- line
- pie

CHART OBJECT FORMAT:
{
  "type": "bar | line | pie",
  "title": "string",
  "data": [
    { "name": "string", "value": 10 }
  ]
}

STRICT JSON FORMAT (DO NOT CHANGE):

{
  "subTopics": {
    "⭐": [],
    "⭐⭐": [],
    "⭐⭐⭐": []
  },
  "importance": "⭐ | ⭐⭐ | ⭐⭐⭐",
  "notes": "string",
  "revisionPoints": [],
  "questions": {
    "short": [],
    "long": [],
    "diagram": ""
  },
  "diagram": {
    "type": "flowchart | graph | process",
    "data": ""
  },
  "charts": []
}

RETURN ONLY VALID JSON.
`;
};
