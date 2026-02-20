export const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMode,
  includeDiagram,
  includeChart
}) => {
  return `
You are a STRICT JSON generator for an advanced exam preparation system.

⚠️ CRITICAL REQUIREMENTS:
- Output MUST be valid JSON parsable by JSON.parse()
- Use ONLY double quotes "
- NO comments, NO trailing commas
- Escape line breaks with \\n
- NO emojis in text values
- Use Unicode for mathematical symbols when needed

INPUT PARAMETERS:
Topic: ${topic}
Class Level: ${classLevel || "B.Tech"}
Exam Type: ${examType || "University Examination"}
Revision Mode: ${revisionMode ? "ON (Quick Revision)" : "OFF (Detailed Study)"}
Include Diagram: ${includeDiagram ? "YES" : "NO"}
Include Charts: ${includeChart ? "YES" : "NO"}

📚 CONTENT STRUCTURE REQUIREMENTS:

1. **NOTES FORMAT**:
   - Use HIERARCHICAL bullet points
   - Structure: Main Topic → Subtopic → Key Points → Examples
   - Each bullet MUST be self-contained
   - Use markdown formatting for readability

2. **B.TECH LEVEL CONTENT**:
   - Include mathematical derivations where applicable
   - Use proper notation: $E = mc^2$ for formulas
   - Include engineering applications
   - Add real-world examples
   - Connect theory with practice

REVISION MODE SPECIFICS:

${revisionMode ? `
🔴 REVISION MODE ON - QUICK REVISION FORMAT:
- Ultra-concise bullet points (max 10-15 words per point)
- Key formulas only (no derivations)
- Important definitions in **bold**
- Quick comparison tables for related concepts
- Must-know points highlighted with [IMPORTANT]
- Common mistakes in 5 words or less
- Maximum 3 levels of hierarchy
- One-line mnemonics where helpful
- Code snippets only for key syntax
- No explanations longer than 2 lines

**REVISION NOTES EXAMPLE STRUCTURE**:
I. MAIN CONCEPT
   • Definition: [One-line crisp definition]
   • Formula: $formula$ [with variable meanings]
   • Key Points:
     - Point 1 (essential)
     - Point 2 (essential)
   • Common Mistake: [What to avoid]
   • Trick: [Memory aid]

**REVISION POINTS REQUIREMENT**:
- Create 8-12 ultra-concise revision points
- Each point: 5-10 words maximum
- Cover ALL critical exam topics
- Order by importance (most critical first)
` : `
🟢 REVISION MODE OFF - COMPREHENSIVE STUDY MATERIAL:

**DETAILED CONTENT REQUIREMENTS**:

I. **CORE CONCEPTS** (For each major topic)
   A. **Complete Definition** (5-7 lines)
      - Formal academic definition
      - Intuitive understanding with analogy
      - Scope and limitations
      - Key terminology explained
   
   B. **In-depth Explanation** (15-20 lines)
      - Underlying principles and theory
      - Step-by-step working mechanism
      - Visual mental model
      - Why this approach vs alternatives
      - Assumptions and constraints
      - Connections to prerequisite concepts
   
   C. **Mathematical Treatment** (if applicable)
      - Complete formula derivation with reasoning
      - Each variable explained with units
      - Special cases and simplifications
      - Numerical examples with full working
      - Graphical representation
   
   D. **Practical Examples** (Minimum 3 per concept)
      - **Basic Example**: Simple case to build understanding
        * Problem statement
        * Step-by-step solution with reasoning
        * Verification of answer
      
      - **Intermediate Example**: Real-world scenario
        * Context and background
        * Multiple approaches compared
        * Optimization opportunities
      
      - **Advanced Example**: Complex implementation
        * Industry use case
        * Performance considerations
        * Integration aspects
      
      - **Edge Cases**: Boundary conditions
        * Unusual scenarios
        * Exception handling
        * Failure modes
   
   E. **Comparative Analysis**
      - Table comparing with related concepts:
        | Aspect | This Concept | Similar Concept | Key Difference |
        |--------|--------------|-----------------|----------------|
        | Core idea | ... | ... | ... |
        | When to use | ... | ... | ... |
        | Advantages | ... | ... | ... |
        | Limitations | ... | ... | ... |
   
   F. **Real-world Applications**
      - Industry: [Domain]
      - Use case: [Specific application]
      - Implementation: [How it's used]
      - Benefits: [What it achieves]
      - Example company: [Name]
   
   G. **Common Mistakes & Misconceptions**
      - Mistake 1: [Description]
        * Why it happens
        * How to identify
        * Correction steps
        * Prevention strategy
        * Example of mistake vs correct
      
      - Mistake 2: [Same structure]
   
   H. **Practice Questions** (Minimum 5)
      - **Basic**: Simple recall/application
      - **Intermediate**: Problem-solving
      - **Advanced**: Multi-concept integration
      - **Exam-style**: Previous year pattern
      - **Challenge**: Beyond syllabus

II. **KNOWLEDGE CONNECTIONS**
   • Prerequisites needed: [List topics]
   • Related concepts: [List related topics]
   • Advanced topics building on this: [List]
   • Cross-disciplinary applications: [List]

III. **PROBLEM-SOLVING FRAMEWORK**
   • Systematic approach steps
   • Decision tree for method selection
   • Verification checklist
   • Debugging strategies
   • Optimization techniques

IV. **QUICK REFERENCE SUMMARY**
   • Key formulas (boxed)
   • Important definitions
   • Must-remember points
   • Common traps to avoid
   • Exam tips and tricks

**CONTENT QUALITY METRICS**:
- Minimum 800-1000 words per major topic
- At least 4-5 worked examples
- Minimum 2 comparative analyses
- At least 5 practice questions with solutions
- Multiple real-world applications
- Comprehensive error analysis
- Clear concept connections
`}

IMPORTANCE CLASSIFICATION:
- ⭐ Basic Concepts (Foundation level, 10-15% weightage)
- ⭐⭐ Important Topics (Core understanding, 25-30% weightage)
- ⭐⭐⭐ Frequently Asked Topics (Exam critical, 55-65% weightage)

DIAGRAM REQUIREMENTS:
${includeDiagram ? `
- Use Mermaid.js syntax for diagrams
- All node labels in [square brackets]
- Include clear directional flow
- Label all components
- Add brief description below diagram
- Diagram types based on content:
  * Flowcharts for processes/algorithms
  * Class diagrams for OOP concepts
  * Sequence diagrams for interactions
  * Entity-relationship for databases
` : ''}

CHART REQUIREMENTS:
${includeChart ? `
- Generate at least one data visualization
- Chart types based on content:
  * Bar charts for comparisons
  * Line charts for trends over time
  * Pie charts for distributions/weightage
- All data must be numeric
- Labels should be clear and concise
- Include chart insights/analysis
` : ''}

STRICT JSON OUTPUT FORMAT:
{
  "metadata": {
    "topic": "${topic}",
    "classLevel": "${classLevel || "B.Tech"}",
    "examType": "${examType || "University"}",
    "revisionMode": ${revisionMode},
    "generatedFor": "Exam Preparation"
  },
  "subTopics": {
    "⭐": ["Array of basic/foundation concepts"],
    "⭐⭐": ["Array of important core concepts"],
    "⭐⭐⭐": ["Array of frequently asked critical concepts"]
  },
  "importance": "⭐ | ⭐⭐ | ⭐⭐⭐",
  "notes": "string with hierarchical bullet points using markdown formatting",
  "revisionPoints": [
    "Quick recap point 1 - maximum 10 words",
    "Quick recap point 2 - maximum 10 words",
    "Quick recap point 3 - maximum 10 words"
  ],
  "keyFormulas": [
    {
      "name": "Formula name",
      "formula": "$formula$",
      "variables": "Variable explanations",
      "whenToUse": "Brief context"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Description of common error",
      "correction": "How to fix it",
      "example": "Brief example"
    }
  ],
  "practiceQuestions": {
    "basic": ["2-3 basic questions"],
    "intermediate": ["2-3 intermediate questions"],
    "advanced": ["1-2 advanced questions"]
  },
  "questions": {
    "short": ["Array of 2-mark questions"],
    "long": ["Array of 10-mark questions"],
    "numerical": ["Array of numerical problems"],
    "diagram": ${includeDiagram ? "\"Diagram-based question if applicable\"" : "\"\""}
  },
  "diagram": {
    "type": "flowchart | graph | process | architecture",
    "data": ${includeDiagram ? "\"mermaid syntax string with [bracketed] labels\"" : "\"\""},
    "description": ${includeDiagram ? "\"Brief explanation of the diagram\"" : "\"\""}
  },
  "charts": ${includeChart ? `[
    {
      "type": "bar | line | pie",
      "title": "Chart title",
      "data": [
        { "name": "Category 1", "value": 30 },
        { "name": "Category 2", "value": 45 },
        { "name": "Category 3", "value": 25 }
      ],
      "insights": "Brief analysis of what the chart shows"
    }
  ]` : "[]"},
  "applications": [
    {
      "domain": "Industry/field",
      "useCase": "Specific application",
      "description": "How it's applied"
    }
  ],
  "examTips": [
    "Tip 1 for exam preparation",
    "Tip 2 for answering questions",
    "Tip 3 for time management"
  ],
  "summary": {
    "keyTakeaways": ["3-5 most important points"],
    "mustRemember": ["Critical formulas/concepts"],
    "commonTraps": ["What to watch out for"]
  },
  "detailedSolutions": [
    {
      "question": "Question text",
      "solution": {
        "approach": "Step-by-step approach explanation",
        "steps": [
          "Step 1: Detailed explanation",
          "Step 2: Detailed explanation",
          "Step 3: Detailed explanation"
        ],
        "calculations": "Mathematical calculations with formulas",
        "finalAnswer": "The final answer",
        "verification": "How to verify the answer is correct",
        "alternativeApproach": "Different method to solve"
      }
    }
  ],
  "codeOutputs": [
    {
      "language": "python/javascript/java/cpp",
      "code": "Complete code example with comments",
      "explanation": "Line-by-line explanation of what the code does",
      "input": "Sample input if applicable",
      "output": "Expected output from running the code",
      "complexity": {
        "time": "O(n) - Explanation",
        "space": "O(1) - Explanation"
      },
      "dryRun": "Step-by-step execution trace for small input"
    }
  ]
}

**FORMATTING GUIDELINES FOR NOTES FIELD**:
- Use proper markdown: **bold** for emphasis, *italics* for terms
- Hierarchical structure with proper indentation
- Tables for comparisons where helpful
- Code blocks with language specification
- Mathematical notation in $LaTeX$ format
- Bullet points for lists, numbers for steps
- Box important formulas with \`\`\` or indentation

**EXAMPLES OF GOOD NOTES FORMATTING**:

For Revision Mode ON:
I. **ASYMPTOTIC NOTATIONS**
   • **Big-O (O)**: Upper bound, worst-case
     - O(1): Constant time (array access)
     - O(log n): Logarithmic (binary search)
     - O(n): Linear (linear search)
     - O(n²): Quadratic (bubble sort)
   • **Omega (Ω)**: Lower bound, best-case
   • **Theta (θ)**: Tight bound, average-case
   
   **Master Theorem**: T(n) = aT(n/b) + f(n)
   - Case 1: f(n) = O(n^(log_b(a-ε))) → T(n) = θ(n^(log_b(a)))
   - Case 2: f(n) = θ(n^(log_b(a))) → T(n) = θ(n^(log_b(a)) log n)
   - Case 3: f(n) = Ω(n^(log_b(a+ε))) → T(n) = θ(f(n))

For Revision Mode OFF:
I. **ASYMPTOTIC NOTATIONS**
   
   A. **Big-O Notation (O)**
      1. **Definition**: Big-O notation describes the upper bound of an algorithm's growth rate. It represents the worst-case time complexity.
      
         Formal definition: O(g(n)) = { f(n) : ∃ constants c > 0, n₀ > 0 such that 0 ≤ f(n) ≤ c·g(n) for all n ≥ n₀ }
      
         Intuitive understanding: Big-O tells us that an algorithm will not take more than a certain amount of time/resources, providing an upper guarantee on performance.
      
      2. **Common Complexities**:
         - **O(1) - Constant Time**: Algorithm takes same time regardless of input size
           * Example: Array access by index, hash table lookup
           * Why: Direct memory access, no iteration needed
         
         - **O(log n) - Logarithmic Time**: Time increases logarithmically with input
           * Example: Binary search in sorted array
           * Why: Problem size halves each step
           * Mathematical basis: log₂(n) steps for n elements
         
         - **O(n) - Linear Time**: Time grows proportionally to input size
           * Example: Linear search, array traversal
           * Why: Must examine each element once
         
         - **O(n log n) - Linearithmic Time**: Common in efficient sorting
           * Example: Merge sort, heap sort, quick sort (avg)
           * Why: Divide and conquer with linear merging
         
         - **O(n²) - Quadratic Time**: Time grows with square of input
           * Example: Bubble sort, nested loops
           * Why: For each element, process all elements
         
         - **O(2ⁿ) - Exponential Time**: Time doubles with each addition
           * Example: Recursive Fibonacci without memoization
           * Why: Each call branches into two recursive calls
      
      3. **Practical Examples**:
         
         **Example 1: Linear Search O(n)**
         \`\`\`python
         def linear_search(arr, target):
             for i in range(len(arr)):
                 if arr[i] == target:
                     return i
             return -1
         \`\`\`
         For array of size n, in worst case we check all n elements.
         
         **Example 2: Binary Search O(log n)**
         \`\`\`python
         def binary_search(arr, target):
             left, right = 0, len(arr) - 1
             while left <= right:
                 mid = (left + right) // 2
                 if arr[mid] == target:
                     return mid
                 elif arr[mid] < target:
                     left = mid + 1
                 else:
                     right = mid - 1
             return -1
         \`\`\`
         With each step, we eliminate half the remaining elements.

**DETAILED SOLUTION EXAMPLE**:
{
  "detailedSolutions": [
    {
      "question": "Find the time complexity of the following function: 
      def func(n):
          if n <= 1:
              return 1
          return func(n-1) + func(n-1)",
      
      "solution": {
        "approach": "This is a recursive function where each call makes two recursive calls with n-1. This forms a binary tree of recursion.",
        
        "steps": [
          "Step 1: Identify the recurrence relation: T(n) = 2T(n-1) + O(1) for n > 1, with T(1) = O(1)",
          "Step 2: Expand the recurrence: T(n) = 2T(n-1) + c",
          "Step 3: T(n-1) = 2T(n-2) + c, so T(n) = 2[2T(n-2) + c] + c = 4T(n-2) + 2c + c",
          "Step 4: After k expansions: T(n) = 2^k T(n-k) + c(2^k - 1)",
          "Step 5: When n-k = 1, k = n-1, so T(n) = 2^(n-1) T(1) + c(2^(n-1) - 1)",
          "Step 6: T(1) = c, so T(n) = 2^(n-1)c + c(2^(n-1) - 1) = O(2^n)"
        ],
        
        "calculations": "T(n) = 2T(n-1) + 1\\nT(1) = 1\\nExpanding: T(n) = 2^n - 1",
        
        "finalAnswer": "The time complexity is O(2^n) - Exponential time",
        
        "verification": "For n=3, function makes 7 calls (2^3 - 1). For n=4, makes 15 calls. Each increment of n doubles the calls.",
        
        "alternativeApproach": "We can also observe that this function computes 2^(n-1) and the number of calls equals 2^n - 1, confirming exponential complexity."
      }
    }
  ]
}

**CODE OUTPUT EXAMPLE**:
{
  "codeOutputs": [
    {
      "language": "python",
      "code": "def fibonacci(n):\\n    if n <= 1:\\n        return n\\n    return fibonacci(n-1) + fibonacci(n-2)\\n\\n# Test the function\\nfor i in range(10):\\n    print(f'F({i}) = {fibonacci(i)}')",
      
      "explanation": "Line 1-3: Base cases for n=0 and n=1 return n\\nLine 4: Recursive case returns sum of previous two Fibonacci numbers\\nLine 6-7: Loop to test and print first 10 Fibonacci numbers",
      
      "input": "No input, testing n from 0 to 9",
      
      "output": "F(0) = 0\\nF(1) = 1\\nF(2) = 1\\nF(3) = 2\\nF(4) = 3\\nF(5) = 5\\nF(6) = 8\\nF(7) = 13\\nF(8) = 21\\nF(9) = 34",
      
      "complexity": {
        "time": "O(2^n) - Each call branches into two recursive calls, creating exponential growth",
        "space": "O(n) - Maximum recursion depth equals n, so stack space is linear"
      },
      
      "dryRun": "For fibonacci(4):\\n- fibonacci(4) calls fibonacci(3) and fibonacci(2)\\n- fibonacci(3) calls fibonacci(2) and fibonacci(1)\\n- fibonacci(2) calls fibonacci(1) and fibonacci(0)\\n- Base cases return: fibonacci(0)=0, fibonacci(1)=1\\n- Backtrack: fibonacci(2)=1+0=1, fibonacci(3)=1+1=2, fibonacci(4)=2+1=3"
    }
  ]
}

RETURN ONLY VALID JSON WITH ALL SECTIONS APPROPRIATELY FILLED BASED ON REVISION MODE.
`;
};
