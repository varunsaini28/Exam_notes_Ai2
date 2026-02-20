export const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMode,
  includeDiagram,
  includeChart,
  subject = "Engineering",
  specialization = "Computer Science"
}) => {
  return `
You are a STRICT JSON generator for an advanced engineering exam preparation system.

⚠️ CRITICAL REQUIREMENTS:
- Output MUST be valid JSON parsable by JSON.parse()
- Use ONLY double quotes "
- NO comments, NO trailing commas
- Escape line breaks with \\n
- NO emojis in text values
- Use Unicode for mathematical symbols

INPUT PARAMETERS:
Topic: ${topic}
Class Level: B.Tech (${classLevel || "3rd/4th Year"})
Subject: ${subject}
Specialization: ${specialization}
Exam Type: ${examType || "University/Competitive"}
Revision Mode: ${revisionMode ? "ON (Quick Revision)" : "OFF (Detailed Study)"}
Include Diagram: ${includeDiagram ? "YES" : "NO"}
Include Charts: ${includeChart ? "YES" : "NO"}

📚 CONTENT STRUCTURE REQUIREMENTS:

1. **NOTES FORMAT** (CRITICAL):
   - Use HIERARCHICAL BULLET POINTS only (NO paragraphs)
   - Structure:
     * Main Topic → Roman Numerals (I, II, III)
       - Subtopic → Bullet points (•)
         * Key points → Dashes (-)
           + Sub-points → Plus (+)
   - Each bullet MUST be self-contained and concise
   - Use indentation to show hierarchy
   - Maximum 2-3 lines per bullet point

2. **B.TECH LEVEL CONTENT**:
   - Include rigorous mathematical derivations
   - Use proper mathematical notation:
     * Greek symbols: α, β, γ, θ, λ, μ, π, Σ, ∫, √
     * Mathematical operators: ∈, ⊂, ∪, ∩, →, ⇒, ⇔, ≈, ≡, ≠, ≤, ≥
     * For complex formulas: Use LaTeX-style notation within $...$
   - Include engineering applications
   - Add real-world case studies
   - Mention current research/advancements

3. **TABLE FORMAT** (When applicable):
   Use Markdown tables for comparisons:

   | Feature | Type A | Type B | Application |
   |---------|--------|--------|-------------|
   | Property 1 | Value | Value | Use case |
   | Property 2 | Value | Value | Use case |

4. **CODING EXAMPLES** (For CS/IT topics):
   \`\`\`language
   // Properly formatted code with comments
   function example() {
       // Implementation
       return result;
   }
   \`\`\`

5. **EXAMPLES REQUIREMENT**:
   - Minimum 3 worked-out examples per major concept
   - Include step-by-step solutions
   - Show multiple approaches where applicable

IMPORTANCE RULES (Based on GATE/University exams):
- ⭐ Basic Concepts (10-15% weightage)
- ⭐⭐⭐ Core Topics (50-60% weightage)
- ⭐ Advanced Topics (25-30% weightage)

REVISION MODE SPECIFICS:

${revisionMode ? `
🔴 REVISION MODE ON - CRASH COURSE FORMAT:
- Ultra-concise bullet points
- Key formulas only (no derivations)
- Important definitions in [brackets]
- Must-have equations boxed
- Common mistakes highlighted
- Quick reference tables
- One-line mnemonics
- Code snippets (if applicable)
- No explanations > 2 lines
` : `
🟢 REVISION MODE OFF - COMPREHENSIVE STUDY MATERIAL:
- Complete mathematical derivations step-by-step
- Detailed proofs and theorems
- Multiple solution methodologies
- Comparative analysis tables
- Engineering applications with calculations
- Research paper references
- Industry best practices
- Common pitfalls and troubleshooting
- Minimum 5 examples per concept
- Practice problems with solutions
- Interview questions included
`}

DIAGRAM REQUIREMENTS:
${includeDiagram ? `
- Use Mermaid.js syntax
- Include proper legends
- Show data flow/architecture
- Label all components clearly
- Add directional indicators
` : ''}

STRICT JSON OUTPUT FORMAT:
{
  "metadata": {
    "topic": "${topic}",
    "subject": "${subject}",
    "difficulty": "Advanced",
    "estimatedTime": "string"
  },
  "subTopics": {
    "⭐": ["Array of basic concepts"],
    "⭐⭐⭐": ["Array of core concepts"],
    "⭐⭐": ["Array of advanced concepts"]
  },
  "importance": "⭐⭐⭐",
  "notes": "string with hierarchical bullet points using proper indentation",
  "revisionPoints": [
    "Quick recap point 1",
    "Quick recap point 2"
  ],
  "mathematicalConcepts": [
    {
      "concept": "string",
      "formula": "string with LaTeX notation",
      "derivation": "string with steps"
    }
  ],
  "codeExamples": [
    {
      "language": "python/java/cpp",
      "title": "string",
      "code": "string with escaped newlines",
      "explanation": "string with bullet points",
      "output": "string"
    }
  ],
  "tables": [
    {
      "title": "string",
      "headers": ["col1", "col2"],
      "rows": [["row1col1", "row1col2"]],
      "markdown": "string with complete markdown table"
    }
  ],
  "examples": [
    {
      "problem": "string",
      "solution": "string with steps",
      "approach": "string",
      "verification": "string"
    }
  ],
  "questions": {
    "short": ["array of 2-mark questions"],
    "long": ["array of 10-mark questions"],
    "numerical": ["array of numerical problems"],
    "multipleChoice": [
      {
        "question": "string",
        "options": ["A", "B", "C", "D"],
        "answer": "string",
        "explanation": "string"
      }
    ],
    "diagram": "diagram based question if applicable"
  },
  "diagram": {
    "type": "flowchart | architecture | process",
    "data": "mermaid syntax string",
    "description": "string explaining the diagram"
  },
  "charts": [
    {
      "type": "bar | line | pie",
      "title": "string",
      "data": [{"name": "string", "value": 10}],
      "insights": "string with analysis"
    }
  ],
  "applications": [
    {
      "domain": "string",
      "useCase": "string",
      "implementation": "string"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "string",
      "correction": "string",
      "tip": "string"
    }
  ],
  "references": [
    {
      "type": "book | paper | resource",
      "title": "string",
      "details": "string"
    }
  ]
}

EXAMPLE NOTES FORMAT (For "Time Complexity"):
I. ASYMPTOTIC NOTATIONS
  • Big-O Notation (O)
    - Upper bound of algorithm
    - Worst-case complexity
    - Definition: O(g(n)) = { f(n) : ∃ c>0, n₀>0 such that 0 ≤ f(n) ≤ c·g(n) ∀ n ≥ n₀ }
    - Example: O(n²) for bubble sort
    
  • Omega Notation (Ω)
    - Lower bound
    - Best-case complexity
    - Definition: Ω(g(n)) = { f(n) : ∃ c>0, n₀>0 such that 0 ≤ c·g(n) ≤ f(n) ∀ n ≥ n₀ }

  • Theta Notation (θ)
    - Tight bound
    - Average-case complexity
    - Definition: θ(g(n)) = { f(n) : ∃ c₁,c₂>0, n₀>0 such that 0 ≤ c₁·g(n) ≤ f(n) ≤ c₂·g(n) ∀ n ≥ n₀ }

II. COMMON COMPLEXITIES
  • Constant Time: O(1)
    - Array access
    - Hash table lookup
    
  • Logarithmic Time: O(log n)
    - Binary search
    - BST operations
    
  • Linear Time: O(n)
    - Linear search
    - Array traversal

III. MASTER THEOREM
  • Formula: T(n) = aT(n/b) + f(n)
    Where:
    - a ≥ 1 (number of subproblems)
    - b > 1 (size reduction factor)
    - f(n) (cost of dividing and combining)
    
  • Three Cases:
    + Case 1: if f(n) = O(n^(log_b(a-ε)))
    + Case 2: if f(n) = θ(n^(log_b(a)))
    + Case 3: if f(n) = Ω(n^(log_b(a+ε)))

RETURN ONLY VALID JSON WITH ALL SECTIONS APPROPRIATELY FILLED.
`;
};
