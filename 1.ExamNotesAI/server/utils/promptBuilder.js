export const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMode,
  includeDiagram,
  includeChart
}) => {
  return `
You are a STRICT JSON generator for an ADVANCED B.TECH EXAM PREPARATION system.

⚠️ CRITICAL REQUIREMENTS:
- Output MUST be valid JSON parsable by JSON.parse()
- Use ONLY double quotes "
- NO comments, NO trailing commas
- Escape line breaks with \\n
- Use Unicode for mathematical symbols

INPUT PARAMETERS:
Topic: ${topic}
Class Level: ${classLevel || "B.Tech (3rd/4th Year)"}
Exam Type: ${examType || "University Examination"}
Revision Mode: ${revisionMode ? "ON (Quick Revision)" : "OFF (Detailed Study)"}
Include Diagram: ${includeDiagram ? "YES" : "NO"}
Include Charts: ${includeChart ? "YES" : "NO"}

🎯 PRIMARY OBJECTIVE: Generate B.Tech level comprehensive notes with mathematical rigor, derivations, proofs, and detailed explanations.

REVISION MODE SPECIFICS:

${revisionMode ? `
⚡ REVISION MODE ON - CONCISE FORMAT:
- Brief but complete coverage
- Key formulas with variable meanings
- Important definitions
- Quick comparison tables
- Must-know points
- 1-2 examples per concept
` : `
📚 REVISION MODE OFF - COMPREHENSIVE B.TECH LEVEL NOTES:

**CRITICAL: All mathematical notation MUST be clean and properly formatted**
- NO broken LaTeX like "$O(b^{1 + \\lfloor C/\\epsilon \\rfloor})$"
- NO stray symbols
- EVERY formula must be complete and readable
- Use clear notation: $O(b^{d})$ not broken expressions

**CONTENT DEPTH REQUIREMENTS**:

For EACH major concept, provide:

1. **COMPLETE DEFINITION** (8-10 lines):
   - Formal mathematical definition with notation
   - Intuitive understanding with real-world analogy
   - Historical context and evolution
   - Scope, assumptions, and limitations
   - Key terminology explained in detail

2. **MATHEMATICAL FOUNDATION** (15-20 lines):
   - Complete derivation with step-by-step reasoning
   - All mathematical symbols explained with units
   - Special cases and boundary conditions
   - Proof of correctness where applicable
   - Graphical/mathematical interpretation
   - **IMPORTANT**: All formulas must be complete and readable
     * Correct: $O(b^{d})$ or $O(b^{m})$ 
     * Correct: $O(b^{1 + \\lfloor C^{*}/\\epsilon \\rfloor})$ with C* explained
     * Never leave formulas with broken syntax

3. **DETAILED WORKING MECHANISM** (20-25 lines):
   - Step-by-step procedural explanation
   - Pseudocode/algorithm representation
   - State transitions and decision points
   - Complexity analysis (time and space)
   - Optimization techniques

4. **MULTIPLE EXAMPLES** (Minimum 4 per concept):
   
   **Example 1 (Basic)**:
   - Problem statement with context
   - Step-by-step solution with reasoning
   - Verification of answer
   - Common pitfalls to avoid
   
   **Example 2 (Intermediate)**:
   - Real-world scenario
   - Multiple solution approaches compared
   - Trade-off analysis
   - Optimization opportunities
   
   **Example 3 (Advanced)**:
   - Complex implementation
   - Industry use case
   - Performance considerations
   - Integration aspects
   
   **Example 4 (Edge Case)**:
   - Boundary conditions
   - Exception handling
   - Failure modes
   - Recovery mechanisms

5. **COMPARATIVE ANALYSIS**:
   - Table comparing with 3-4 related concepts
   - When to use each approach
   - Advantages and disadvantages
   - Complexity comparisons
   - Real-world applicability

6. **APPLICATION DOMAINS**:
   - Industry sectors using this concept
   - Specific use cases with examples
   - Implementation challenges
   - Success stories/case studies
   - Future trends and research

7. **COMMON MISTAKES & MISCONCEPTIONS**:
   - Mistake 1: Detailed description
     * Why it happens
     * How to identify
     * Correction steps
     * Prevention strategy
     * Example showing mistake vs correct
   
   - Mistake 2: [Same detailed structure]
   - Mistake 3: [Same detailed structure]

8. **PRACTICE PROBLEMS** (Minimum 6):
   - **Level 1 (Foundation)**: 2 problems with solutions
   - **Level 2 (Application)**: 2 problems with hints
   - **Level 3 (Analysis)**: 1 problem with multiple approaches
   - **Level 4 (Synthesis)**: 1 problem combining multiple concepts

9. **KNOWLEDGE GRAPH**:
   - Prerequisites needed (with brief explanation)
   - Related concepts (how they connect)
   - Advanced topics building on this
   - Cross-disciplinary applications

10. **EXAM-SPECIFIC CONTENT**:
    - Previous year question patterns
    - Commonly tested variations
    - Time-saving tricks
    - Presentation tips for exams
    - Common trap questions

**CONTENT QUALITY METRICS**:
- Minimum 1500-2000 words per major topic
- At least 6-8 worked examples with full solutions
- Minimum 3 comparative analyses with tables
- At least 8 practice questions with solutions
- Multiple real-world case studies
- Comprehensive error analysis with examples
- Mathematical derivations for all formulas
- Code implementations where applicable
`}

IMPORTANCE CLASSIFICATION (Based on GATE/University exams):
- ⭐ Basic Concepts (Foundation, 10-15% weightage)
- ⭐⭐ Important Topics (Core, 30-35% weightage)
- ⭐⭐⭐ Frequently Asked Topics (Critical, 50-55% weightage)

DIAGRAM REQUIREMENTS:
${includeDiagram ? `
- Use Mermaid.js syntax for all diagrams
- MUST start with "graph TD" for flowcharts
- All nodes must have brackets: [Text] or {Text} or ([Text])
- Use --> for connections
- Add |Yes/No| labels on decision branches
- NO empty lines in the diagram string
- Include comprehensive labels and legends
- Diagram types based on content:
  * Flowcharts for algorithms/processes
  * Block diagrams for system architecture
  * State transition diagrams
  * Tree structures for hierarchies
  * Graph representations

**CORRECT MERMAID EXAMPLE**:
graph TD
    Start([Start]) --> Init[Initialize]
    Init --> Check{Check Condition}
    Check -->|Yes| Success[Success]
    Check -->|No| Fail[Failure]
` : ''}

CHART REQUIREMENTS:
${includeChart ? `
- Generate multiple data visualizations
- Chart types based on content:
  * Bar charts for comparisons
  * Line charts for trends/performance
  * Pie charts for distributions/weightage
- Include detailed insights/analysis
- Add trend observations
- Provide recommendations based on data
` : ''}

STRICT JSON OUTPUT FORMAT:

{
  "metadata": {
    "topic": "${topic}",
    "classLevel": "${classLevel || "B.Tech"}",
    "examType": "${examType || "University"}",
    "revisionMode": ${revisionMode},
    "totalWords": "Estimated word count",
    "prerequisites": ["List of prerequisite topics"]
  },
  
  "subTopics": {
    "⭐": ["Foundation Concept 1", "Foundation Concept 2"],
    "⭐⭐": ["Core Concept 1", "Core Concept 2", "Core Concept 3"],
    "⭐⭐⭐": ["Critical Concept 1", "Critical Concept 2"]
  },
  
  "importance": "⭐⭐⭐",
  
  "detailedNotes": {
    "introduction": {
      "overview": "Comprehensive overview of the topic covering what, why, and where it is used. This should be 15-20 lines explaining the significance and real-world relevance.",
      "realWorldSignificance": "Why this matters in industry and research with specific examples.",
      "historicalContext": "How this concept evolved over time and key milestones."
    },
    
    "mainConcepts": [
      {
        "title": "Concept Name",
        "definition": {
          "formal": "Formal mathematical definition: $f(n) = O(g(n))$ if there exist constants $c > 0$ and $n_0 > 0$ such that $0 \\leq f(n) \\leq c \\cdot g(n)$ for all $n \\geq n_0$.",
          "intuitive": "Intuitive understanding with real-world analogy.",
          "scope": "When and where this concept applies.",
          "limitations": "Boundaries and constraints of this concept."
        },
        
        "mathematicalTreatment": {
          "derivation": "Step-by-step derivation with complete reasoning showing how we arrive at the formula.",
          "finalFormula": "$T(n) = aT(n/b) + f(n)$",
          "variables": [
            {"symbol": "n", "meaning": "Input size", "units": "dimensionless"},
            {"symbol": "a", "meaning": "Number of subproblems", "units": "dimensionless"},
            {"symbol": "b", "meaning": "Factor by which input size reduces", "units": "dimensionless"}
          ],
          "specialCases": [
            "Case 1: When $f(n) = O(n^{\\log_b a - \\epsilon})$ then $T(n) = \\Theta(n^{\\log_b a})$",
            "Case 2: When $f(n) = \\Theta(n^{\\log_b a})$ then $T(n) = \\Theta(n^{\\log_b a} \\log n)$",
            "Case 3: When $f(n) = \\Omega(n^{\\log_b a + \\epsilon})$ then $T(n) = \\Theta(f(n))$"
          ]
        },
        
        "workingMechanism": {
          "stepByStep": [
            "Step 1: First, we analyze the problem to identify the appropriate approach.",
            "Step 2: Then we break down the problem into smaller subproblems.",
            "Step 3: Solve each subproblem recursively or directly.",
            "Step 4: Combine the solutions to get the final result.",
            "Step 5: Analyze the complexity to ensure efficiency."
          ],
          "pseudocode": "\\\`\\\`\\\`\\nfunction algorithm(input):\\n    if input is base case:\\n        return base solution\\n    else:\\n        divide input into subproblems\\n        solve each subproblem recursively\\n        combine solutions\\n        return combined result\\n\\\`\\\`\\\`",
          "complexity": {
            "time": "$O(n \\log n)$ - Each level processes n elements and there are log n levels",
            "space": "$O(n)$ - Additional space needed for recursion stack and temporary arrays",
            "bestCase": "$O(n \\log n)$ when input is randomly distributed",
            "worstCase": "$O(n^2)$ when input is already sorted and poor pivot choice",
            "averageCase": "$O(n \\log n)$ for most real-world inputs"
          }
        },
        
        "examples": [
          {
            "type": "Basic",
            "title": "Simple Example to Build Understanding",
            "problem": "Given an array [5, 2, 8, 1, 9], sort it using the algorithm.",
            "given": "Unsorted array of 5 integers",
            "approach": "We'll apply the divide and conquer strategy",
            "solution": {
              "step1": "Divide the array into two halves: [5, 2] and [8, 1, 9]",
              "step2": "Recursively sort left half: [2, 5]",
              "step3": "Recursively sort right half: [1, 8, 9]",
              "step4": "Merge the sorted halves: compare and combine",
              "finalAnswer": "Sorted array: [1, 2, 5, 8, 9]"
            },
            "verification": "Check that each element is greater than or equal to previous",
            "alternativeApproach": "Could also use iterative approach with same complexity"
          },
          {
            "type": "Intermediate",
            "title": "Real-world Database Sorting",
            "context": "A database with 1 million records needs to be sorted by customer ID",
            "problem": "Implement efficient sorting for production system",
            "multipleApproaches": [
              {"approach": "QuickSort", "pros": ["In-place sorting", "Cache efficient"], "cons": ["O(n²) worst case"]},
              {"approach": "MergeSort", "pros": ["Stable sort", "Guaranteed O(n log n)"], "cons": ["Extra space O(n)"]},
              {"approach": "HeapSort", "pros": ["In-place", "O(n log n) guaranteed"], "cons": ["Not stable", "More comparisons"]}
            ],
            "chosenApproach": "Hybrid of QuickSort and Insertion Sort for small partitions",
            "detailedSolution": "Implementation uses IntroSort which switches to HeapSort if recursion depth exceeds log n",
            "optimization": "Use insertion sort for partitions smaller than 16 elements",
            "results": "Successfully sorts 1M records in under 2 seconds"
          },
          {
            "type": "Advanced",
            "title": "Google Maps Route Optimization",
            "industryContext": "Google Maps needs to find shortest path between two locations",
            "requirements": "Real-time response with millions of possible routes",
            "design": "A* search algorithm with heuristic based on straight-line distance",
            "implementation": "\\\`\\\`\\\`python\\ndef a_star_search(start, goal, graph):\\n    open_set = {start}\\n    came_from = {}\\n    g_score = {node: float('inf') for node in graph}\\n    g_score[start] = 0\\n    f_score = {node: float('inf') for node in graph}\\n    f_score[start] = heuristic(start, goal)\\n    \\n    while open_set:\\n        current = min(open_set, key=lambda node: f_score[node])\\n        if current == goal:\\n            return reconstruct_path(came_from, current)\\n        \\n        open_set.remove(current)\\n        for neighbor in graph[current]:\\n            tentative_g = g_score[current] + distance(current, neighbor)\\n            if tentative_g < g_score[neighbor]:\\n                came_from[neighbor] = current\\n                g_score[neighbor] = tentative_g\\n                f_score[neighbor] = g_score[neighbor] + heuristic(neighbor, goal)\\n                if neighbor not in open_set:\\n                    open_set.add(neighbor)\\n    return None\\n\\\`\\\`\\\`",
            "performanceAnalysis": "A* explores significantly fewer nodes than Dijkstra's algorithm",
            "scalability": "Handles continent-sized road networks with hierarchical preprocessing",
            "lessonsLearned": "Heuristic choice dramatically affects performance; straight-line distance works well for road networks"
          },
          {
            "type": "Edge Case",
            "title": "Empty Array or Single Element",
            "scenario": "Sorting an array with 0 or 1 elements",
            "expectedBehavior": "Return the array as-is without any processing",
            "actualBehavior": "Algorithm should detect base case and return immediately",
            "handling": "Add base case check at beginning: if length <= 1: return array",
            "code": "\\\`\\\`\\\`python\\ndef sort_array(arr):\\n    if len(arr) <= 1:\\n        return arr\\n    # rest of sorting logic\\n\\\`\\\`\\\`"
          }
        ],
        
        "comparativeAnalysis": {
          "table": {
            "headers": ["Aspect", "QuickSort", "MergeSort", "HeapSort"],
            "rows": [
              ["Time Complexity (Avg)", "$O(n \\log n)$", "$O(n \\log n)$", "$O(n \\log n)$"],
              ["Time Complexity (Worst)", "$O(n^2)$", "$O(n \\log n)$", "$O(n \\log n)$"],
              ["Space Complexity", "$O(\\log n)$", "$O(n)$", "$O(1)$"],
              ["Stable", "No", "Yes", "No"],
              ["In-place", "Yes", "No", "Yes"],
              ["Cache Performance", "Excellent", "Good", "Poor"],
              ["When to Use", "General purpose, in-memory", "Linked lists, stability needed", "Memory constrained systems"]
            ]
          },
          "insights": "QuickSort is fastest on average due to cache efficiency. MergeSort guarantees performance and stability. HeapSort is best when memory is extremely limited.",
          "decisionGuide": "Choose QuickSort for general in-memory sorting. Choose MergeSort for linked lists or when stability matters. Choose HeapSort for embedded systems with tight memory constraints."
        },
        
        "applications": [
          {
            "domain": "E-commerce",
            "useCases": [
              {
                "title": "Product Search Ranking",
                "description": "Sorting products by relevance, price, or customer ratings",
                "company": "Amazon",
                "impact": "Improved user experience and conversion rates",
                "challenges": "Real-time updates with millions of products"
              }
            ]
          },
          {
            "domain": "Financial Services",
            "useCases": [
              {
                "title": "Transaction Processing",
                "description": "Sorting transactions by timestamp for fraud detection",
                "company": "PayPal",
                "impact": "Faster detection of suspicious patterns",
                "challenges": "Handling millions of transactions per minute"
              }
            ]
          }
        ],
        
        "commonMistakes": [
          {
            "mistake": "Using QuickSort on already sorted data without randomization",
            "frequency": "Common",
            "impact": "Critical - causes O(n²) performance",
            "why": "Poor pivot choice leads to highly unbalanced partitions",
            "howToIdentify": "Algorithm runs extremely slow on sorted or reverse-sorted data",
            "correction": "Use randomized pivot selection or median-of-three strategy",
            "prevention": "Always randomize pivot or use hybrid approach like IntroSort",
            "example": {
              "wrong": "pivot = arr[0]  # Always first element",
              "correct": "pivot = arr[random.randint(0, len(arr)-1)]  # Random pivot",
              "explanation": "Random pivot ensures balanced partitions with high probability"
            }
          },
          {
            "mistake": "MergeSort using too much memory unnecessarily",
            "frequency": "Common",
            "impact": "Moderate - causes performance degradation",
            "why": "Creating new arrays at every recursion level instead of reusing",
            "howToIdentify": "Memory usage grows exponentially with input size",
            "correction": "Use a single auxiliary array and copy back strategically",
            "prevention": "Implement in-place merging where possible or use bottom-up approach"
          }
        ],
        
        "practiceProblems": [
          {
            "level": "Foundation",
            "problem": "Sort the array [3, 7, 1, 8, 4] using QuickSort with first element as pivot. Show all steps.",
            "hints": ["Start with pivot = 3", "Partition into elements < 3 and > 3"],
            "solution": {
              "approach": "Follow QuickSort partitioning algorithm",
              "steps": [
                "Step 1: Pivot = 3, array = [3, 7, 1, 8, 4]",
                "Step 2: After partition: [1, 3, 7, 8, 4]",
                "Step 3: Recursively sort left [1] → already sorted",
                "Step 4: Recursively sort right [7, 8, 4] with pivot 7",
                "Step 5: After partition: [4, 7, 8]",
                "Step 6: Recursively sort [4] and [8] → both sorted",
                "Step 7: Combine: [1, 3, 4, 7, 8]"
              ],
              "answer": "[1, 3, 4, 7, 8]",
              "explanation": "QuickSort recursively divides the array around pivots until fully sorted"
            }
          }
        ]
      }
    ],
    
    "knowledgeConnections": {
      "prerequisites": [
        {"topic": "Recursion", "importance": "Understanding recursive function calls", "review": "A function that calls itself with smaller inputs"},
        {"topic": "Arrays", "importance": "Basic data structure operations", "review": "Indexing, slicing, and element access"}
      ],
      "relatedTopics": [
        {"topic": "Binary Search Trees", "relationship": "Both use divide and conquer principle", "application": "BST operations like insertion use similar comparison logic"},
        {"topic": "Dynamic Programming", "relationship": "Both solve problems by breaking into subproblems", "application": "DP uses overlapping subproblems while D&C uses independent ones"}
      ],
      "advancedTopics": [
        {"topic": "External Sorting", "preview": "Sorting data too large to fit in memory", "research": "Multi-way merge sort for distributed systems"}
      ]
    },
    
    "problemSolvingFramework": {
      "systematicApproach": [
        "Step 1: Understand the problem - identify input size and constraints",
        "Step 2: Identify the appropriate algorithm based on requirements",
        "Step 3: Consider trade-offs - time vs space, stability vs speed",
        "Step 4: Implement with proper edge case handling",
        "Step 5: Test with various inputs including edge cases",
        "Step 6: Optimize if performance doesn't meet requirements"
      ],
      "decisionTree": "If stability needed → MergeSort\\nElse if memory constrained → HeapSort\\nElse → QuickSort with randomized pivot",
      "verificationChecklist": [
        "Array is fully sorted (each element <= next)",
        "No elements lost or duplicated",
        "Algorithm terminated within expected time",
        "Edge cases handled (empty, single element, duplicates)"
      ],
      "debuggingStrategies": [
        "Print array state after each major operation",
        "Verify partition boundaries are correct",
        "Check recursion base cases",
        "Test with small fixed inputs first"
      ]
    },
    
    "summary": {
      "keyTakeaways": [
        "Divide and conquer breaks problems into smaller subproblems",
        "QuickSort is fastest on average but has O(n²) worst case",
        "MergeSort guarantees O(n log n) but uses extra space",
        "HeapSort offers in-place sorting with O(n log n) guarantee",
        "Choice of algorithm depends on specific requirements"
      ],
      "mustRemember": [
        "QuickSort: O(n log n) average, O(n²) worst, O(log n) space",
        "MergeSort: O(n log n) all cases, O(n) space, stable",
        "HeapSort: O(n log n) all cases, O(1) space, not stable"
      ],
      "formulaSheet": [
        {"name": "QuickSort Recurrence", "formula": "$T(n) = T(k) + T(n-k-1) + O(n)$", "usage": "For analyzing QuickSort where k is pivot position"}
      ],
      "examTips": [
        "Tip 1: Always mention trade-offs when comparing algorithms",
        "Tip 2: Show recurrence relations for divide and conquer algorithms",
        "Tip 3: Include base cases in recursive solutions"
      ]
    }
  },
  
  "revisionPoints": [
    "QuickSort: Fastest average case, in-place, not stable, O(n log n) avg, O(n²) worst",
    "MergeSort: Stable, guaranteed O(n log n), extra space O(n), good for linked lists",
    "HeapSort: In-place, O(n log n) guaranteed, not stable, poor cache performance",
    "Randomized pivot prevents worst-case in QuickSort",
    "IntroSort hybrid avoids QuickSort worst-case by switching to HeapSort",
    "TimSort hybrid used in Python, Java: MergeSort + InsertionSort",
    "External sorting handles data too large for memory",
    "Counting Sort O(n+k) for integers in range, not comparison-based",
    "Radix Sort sorts digit by digit, O(d(n+k)) for d digits",
    "Sorting stability preserves relative order of equal elements"
  ],
  
  "keyFormulas": [
    {
      "name": "Master Theorem",
      "formula": "$T(n) = aT(n/b) + f(n)$",
      "variables": "a = number of subproblems, b = factor of size reduction, f(n) = cost of dividing and combining",
      "derivation": "Based on comparing f(n) with $n^{\\log_b a}$",
      "applicability": "For divide-and-conquer recurrences",
      "example": "MergeSort: a=2, b=2, f(n)=O(n) → $T(n) = \\Theta(n \\log n)$"
    }
  ],
  
  "codeImplementations": [
    {
      "language": "python",
      "title": "QuickSort Implementation with Random Pivot",
      "code": "\\\`\\\`\\\`python\\nimport random\\n\\ndef quicksort(arr):\\n    if len(arr) <= 1:\\n        return arr\\n    \\n    # Random pivot selection to avoid worst-case\\n    pivot_idx = random.randint(0, len(arr) - 1)\\n    pivot = arr[pivot_idx]\\n    \\n    # Partition\\n    left = [x for x in arr if x < pivot]\\n    middle = [x for x in arr if x == pivot]\\n    right = [x for x in arr if x > pivot]\\n    \\n    # Recursively sort and combine\\n    return quicksort(left) + middle + quicksort(right)\\n\\n# Example usage\\narr = [3, 6, 8, 10, 1, 2, 1]\\nsorted_arr = quicksort(arr)\\nprint(f"Original: {arr}")\\nprint(f"Sorted: {sorted_arr}")\\n\\\`\\\`\\\`",
      "explanation": "Line 1: Import random for pivot selection\\nLine 4-5: Base case - array with 0 or 1 element is already sorted\\nLine 8: Select random pivot index\\nLine 11-13: Partition into elements less than, equal to, and greater than pivot\\nLine 16: Recursively sort left and right, combine with middle",
      "complexity": {
        "time": "$O(n \\log n)$ average, $O(n^2)$ worst-case but probability extremely low with random pivot",
        "space": "$O(n)$ due to creating new lists for each partition"
      },
      "sampleInput": "[3, 6, 8, 10, 1, 2, 1]",
      "sampleOutput": "[1, 1, 2, 3, 6, 8, 10]",
      "edgeCases": [
        "Empty array: returns empty array",
        "Single element: returns the element",
        "All equal elements: returns same array without recursion depth"
      ],
      "optimizations": [
        "Use in-place partitioning to reduce space complexity to O(log n)",
        "Switch to insertion sort for small subarrays (size < 10-20)",
        "Use median-of-three pivot selection for better performance on partially sorted data"
      ]
    }
  ],
  
  "questions": {
    "short": [
      {
        "question": "What is the time complexity of QuickSort in best, average, and worst cases?",
        "answer": "Best: O(n log n), Average: O(n log n), Worst: O(n²)",
        "explanation": "Best case occurs when partitions are balanced. Worst case occurs when partitions are highly unbalanced (e.g., sorted array with poor pivot choice).",
        "commonMistake": "Students often forget that worst case is O(n²) and assume it's always O(n log n)"
      },
      {
        "question": "Define stability in sorting algorithms. Give an example of a stable and unstable sort.",
        "answer": "Stability means equal elements maintain their relative order from input. MergeSort is stable; QuickSort is typically unstable.",
        "explanation": "Stability matters when sorting by multiple keys - e.g., sort by name then by date should keep name order for same dates."
      }
    ],
    "long": [
      {
        "question": "Explain the QuickSort algorithm in detail. Include partitioning strategies, complexity analysis, and optimizations.",
        "markingScheme": {
          "definition": "2 marks",
          "algorithm steps": "3 marks",
          "partitioning explanation": "2 marks",
          "complexity analysis": "2 marks",
          "optimizations": "1 mark"
        },
        "modelAnswer": {
          "introduction": "QuickSort is a divide-and-conquer sorting algorithm that picks a pivot element and partitions the array around it.",
          "mainContent": "**Algorithm Steps:**\\n1. Choose a pivot element\\n2. Partition: rearrange so elements < pivot come before, > pivot after\\n3. Recursively sort the subarrays\\n\\n**Partitioning Strategies:**\\n- Lomuto partition: uses single scan, simpler but less efficient\\n- Hoare partition: uses two pointers, more efficient\\n\\n**Complexity Analysis:**\\n- Best/Average case: O(n log n) when partitions balanced\\n- Worst case: O(n²) when partitions highly unbalanced\\n- Space: O(log n) for recursion stack with in-place partitioning",
          "examples": "Example with array [3,7,1,8,4] and pivot=3: partitions into [1] and [7,8,4] then recursively sorts",
          "conclusion": "QuickSort is the most widely used sorting algorithm due to excellent average-case performance and in-place nature."
        },
        "keyPoints": [
          "Mention randomized pivot to avoid worst case",
          "Discuss in-place vs out-of-place implementation",
          "Include recurrence relation T(n) = T(k) + T(n-k-1) + O(n)"
        ]
      }
    ],
    "numerical": [
      {
        "problem": "Apply QuickSort to sort the array [9, 7, 5, 11, 12, 2, 14, 3, 10, 6] using first element as pivot. Show all steps.",
        "data": "Array: [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]",
        "formulaNeeded": "QuickSort recurrence: T(n) = T(k) + T(n-k-1) + O(n)",
        "solution": {
          "step1": "Pivot = 9. Partition: [7,5,2,3,6] < 9 < [11,12,14,10]",
          "step2": "Sort left [7,5,2,3,6] with pivot 7 → [5,2,3,6] < 7 < []",
          "step3": "Sort [5,2,3,6] with pivot 5 → [2,3] < 5 < [6]",
          "step4": "Sort [2,3] with pivot 2 → [] < 2 < [3]",
          "step5": "Sort right [11,12,14,10] with pivot 11 → [10] < 11 < [12,14]",
          "step6": "Sort [12,14] with pivot 12 → [] < 12 < [14]",
          "finalAnswer": "[2,3,5,6,7,9,10,11,12,14]"
        },
        "verification": "Check each element is greater than or equal to previous"
      }
    ],
    "multipleChoice": [
      {
        "question": "Which of the following sorting algorithms has the best worst-case time complexity?",
        "options": ["A) QuickSort", "B) MergeSort", "C) Bubble Sort", "D) Insertion Sort"],
        "correctAnswer": "B",
        "explanation": "MergeSort guarantees O(n log n) in all cases, while QuickSort can degrade to O(n²).",
        "distractorExplanations": {
          "A": "QuickSort has O(n²) worst case",
          "C": "Bubble Sort has O(n²) in all cases",
          "D": "Insertion Sort has O(n²) worst case"
        }
      }
    ],
    "diagram": ${includeDiagram ? "\"Draw the recursion tree for QuickSort on array [3,1,4,2]. Show how it divides and conquers.\"" : "\"\""}
  },
  
  "diagram": {
    "type": "flowchart",
    "data": ${includeDiagram ? "\"graph TD\\n    Start([Start]) --> Init[Initialize Open List with Start Node]\\n    Init --> CheckEmpty{Is Open List Empty?}\\n    CheckEmpty -->|Yes| Fail[Fail: No Solution]\\n    CheckEmpty -->|No| Pick[Pick Node n with lowest f value]\\n    Pick --> CheckGoal{Is n Goal?}\\n    CheckGoal -->|Yes| Success[Success: Return Path]\\n    CheckGoal -->|No| Expand[Expand n: Generate Successors]\\n    Expand --> ForEach[For each successor s]\\n    ForEach --> Calculate[Calculate f_s = g_s + h_s]\\n    Calculate --> CheckBetter{Better path found?}\\n    CheckBetter -->|Yes| Add[Add s to Open List]\\n    CheckBetter -->|No| Next{More successors?}\\n    Add --> Next\\n    Next -->|Yes| ForEach\\n    Next -->|No| Pick\"" : "\"\""},
    "description": "A* search algorithm flowchart showing the process of finding optimal path using heuristic function f(n) = g(n) + h(n)",
    "components": [
      "Open List: Priority queue of nodes to explore",
      "Closed List: Implicitly tracked via better path checks",
      "g(n): Actual cost from start to node n",
      "h(n): Heuristic estimate from n to goal",
      "f(n): Total estimated cost = g(n) + h(n)"
    ],
    "insights": "The algorithm guarantees optimality when heuristic is admissible (never overestimates true cost)"
  },
  
  "charts": ${includeChart ? `[
    {
      "type": "bar",
      "title": "Sorting Algorithm Time Complexity Comparison",
      "data": [
        { "name": "QuickSort (Avg)", "value": 100 },
        { "name": "MergeSort", "value": 120 },
        { "name": "HeapSort", "value": 130 },
        { "name": "BubbleSort", "value": 1000 }
      ],
      "xAxisLabel": "Algorithm",
      "yAxisLabel": "Relative Time (lower is better)",
      "insights": "QuickSort is fastest on average due to cache efficiency and in-place nature. MergeSort is slightly slower due to extra memory operations. BubbleSort is impractical for large inputs.",
      "observations": [
        "Comparison-based sorts show O(n log n) performance",
        "Constant factors matter significantly in practice",
        "Cache behavior affects real-world performance"
      ],
      "recommendations": [
        "Use QuickSort for general in-memory sorting",
        "Use MergeSort when stability or guaranteed performance needed",
        "Use HeapSort in memory-constrained environments"
      ]
    },
    {
      "type": "line",
      "title": "QuickSort Performance: Random vs Sorted Input",
      "data": [
        { "name": "Random Input", "value": 100 },
        { "name": "Sorted Input (Fixed Pivot)", "value": 5000 },
        { "name": "Sorted Input (Random Pivot)", "value": 110 }
      ],
      "xAxisLabel": "Input Type",
      "yAxisLabel": "Relative Time",
      "insights": "Fixed pivot causes catastrophic O(n²) performance on sorted data. Random pivot eliminates this vulnerability.",
      "observations": [
        "Randomized pivot selection is critical for robust performance",
        "Median-of-three provides additional protection",
        "Hybrid approaches (IntroSort) switch algorithms when recursion depth exceeds log n"
      ]
    }
  ]` : "[]"},
  
  "caseStudies": [
    {
      "title": "Google's Implementation of Sorting in BigQuery",
      "company": "Google",
      "industry": "Cloud Computing",
      "problem": "Sorting petabytes of data distributed across thousands of machines",
      "solution": "Distributed merge sort with sophisticated partitioning",
      "implementation": "Data is partitioned, sorted locally, then merged in a tree-like fashion",
      "results": "Enables sorting of 100PB in hours",
      "lessonsLearned": [
        "Network bandwidth becomes bottleneck in distributed sorting",
        "Load balancing critical for performance",
        "Fault tolerance essential for long-running jobs"
      ]
    }
  ],
  
  "researchDirections": [
    {
      "area": "External Memory Sorting",
      "currentState": "Multi-way merge sort with optimized I/O patterns",
      "openProblems": ["Minimizing disk seeks", "Adapting to SSD characteristics"],
      "futureWork": "Machine learning to predict optimal merge patterns",
      "keyPapers": ["Aggarwal & Vitter 1988", "Arge 2003"]
    },
    {
      "area": "Parallel Sorting Algorithms",
      "currentState": "Bitonic sort, Sample sort for GPUs",
      "openProblems": ["Load balancing", "Communication minimization"],
      "futureWork": "Sorting on quantum computers",
      "keyPapers": ["Batcher 1968", "GPU sorting surveys"]
    }
  ],
  
  "applications": [
    {
      "domain": "Database Systems",
      "useCase": "ORDER BY queries",
      "description": "Sorting query results by specified columns",
      "benefits": ["Enables efficient data presentation", "Supports pagination"],
      "challenges": ["Sorting terabytes of data", "Handling concurrent queries"]
    },
    {
      "domain": "Search Engines",
      "useCase": "Ranking search results",
      "description": "Sorting results by relevance score",
      "benefits": ["Users see most relevant results first"],
      "challenges": ["Real-time ranking", "Personalized results"]
    }
  ],
  
  "examTips": [
    {
      "tip": "When comparing algorithms, always consider time complexity, space complexity, stability, and when to use each",
      "examples": ["QuickSort: general purpose", "MergeSort: stable sort needed", "HeapSort: memory constrained"],
      "timeSaving": "Memorize key complexities: QuickSort O(n log n) avg, MergeSort O(n log n) all cases, BubbleSort O(n²)"
    },
    {
      "tip": "For divide and conquer algorithms, always write the recurrence relation",
      "examples": ["MergeSort: T(n) = 2T(n/2) + O(n)"],
      "timeSaving": "Master Theorem solves most recurrences instantly"
    }
  ]
}

**FORMATTING CHECKLIST - CRITICAL**:
- ✓ All mathematical notation must be complete and readable
- ✓ No broken LaTeX like "$O(b^{1 + \\lfloor C/\\epsilon \\rfloor})$" - instead use proper escaping
- ✓ No stray symbols anywhere
- ✓ Every formula properly closed with $ $
- ✓ Complexity notations clean: $O(n \\log n)$, $O(n^2)$, $O(b^d)$
- ✓ All special symbols (ε, δ, θ, Ω) properly written

**MERMAID DIAGRAM CHECKLIST**:
- ✓ Must start with "graph TD" or appropriate directive
- ✓ All nodes have brackets: [Text] or {Text} or ([Text])
- ✓ Connections use -->
- ✓ Decision branches use |Yes/No| labels
- ✓ NO empty lines in the string
- ✓ All text properly escaped with \\n for line breaks

RETURN ONLY VALID JSON WITH ALL SECTIONS APPROPRIATELY FILLED.
`;
};
