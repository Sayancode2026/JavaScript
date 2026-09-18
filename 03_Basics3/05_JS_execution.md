# 🚀 JavaScript Execution Context & Call Stack

> Interview-friendly notes on how JavaScript executes code internally.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Interview](https://img.shields.io/badge/Interview-Ready-blue)
![Beginner](https://img.shields.io/badge/Level-Beginner--Intermediate-green)

---

## 📚 Table of Contents

- [Execution Context](#-execution-context)
- [Types of Execution Context](#-types-of-execution-context)
- [Execution Phases](#-execution-phases)
- [Memory Creation Phase](#-memory-creation-phase)
- [Execution Phase](#-execution-phase)
- [Function Execution Context](#-function-execution-context)
- [Call Stack](#-call-stack)
- [Nested Function Calls](#-nested-function-calls)
- [Chrome DevTools Demo](#-chrome-devtools-demo)
- [Interview Cheat Sheet](#-interview-cheat-sheet)
- [Key Takeaways](#-key-takeaways)

---

# 📖 Execution Context

An **Execution Context** is the environment JavaScript creates to execute your code.

Every JavaScript program begins with a **Global Execution Context (GEC).**

### Browser

```javascript
this === window
```

### Node.js

`this` behaves differently because Node uses a different global object.

---

# 🏗 Types of Execution Context

| Type | Purpose |
|------|---------|
| Global Execution Context | Runs the entire JavaScript file |
| Function Execution Context | Created every time a function is called |
| Eval Execution Context | Rarely used |

---

# ⚙ Execution Phases

Every execution context runs in **two phases**.

```text
JavaScript File
       │
       ▼
Global Execution Context
       │
 ┌─────┴─────┐
 │           │
 ▼           ▼
Memory     Execution
Phase        Phase
```

---

# 🧠 Memory Creation Phase

During this phase JavaScript only allocates memory.

No calculations happen here.

## Example

```javascript
let value1 = 10;
let value2 = 5;

function addNum(a, b){
    let total = a + b;
    return total;
}

let result1 = addNum(value1, value2);
let result2 = addNum(10,2);
```

### Memory State

| Variable | Stored Value |
|----------|--------------|
| `value1` | `undefined` |
| `value2` | `undefined` |
| `addNum` | Function Definition |
| `result1` | `undefined` |
| `result2` | `undefined` |

> 💡 Functions are stored completely during this phase.

---

# ▶ Execution Phase

Now JavaScript actually runs the code.

```javascript
value1 = 10;
value2 = 5;
```

When JavaScript reaches:

```javascript
addNum(value1, value2);
```

it creates a **new Function Execution Context**.

---

# 📦 Function Execution Context

Every function call gets its own execution environment.

```text
addNum(10,5)
      │
      ▼
New Function Execution Context
```

Inside this new context, JavaScript again performs two phases.

## Memory Phase

| Variable | Value |
|----------|-------|
| `a` | `undefined` |
| `b` | `undefined` |
| `total` | `undefined` |

## Execution Phase

```javascript
a = 10;
b = 5;

total = a + b;
```

Result:

```javascript
total = 15;
```

Return:

```javascript
return total;
```

The value goes back to the Global Execution Context.

```javascript
result1 = 15;
```

After execution, the Function Execution Context is destroyed.

---

# 🔄 Execution Flow

```text
Global Execution Context
        │
        ▼
Memory Phase
        │
        ▼
Execution Phase
        │
        ▼
Function Call
        │
        ▼
New Function Context
        │
   ┌────┴────┐
   │         │
Memory    Execution
        │
        ▼
Return Value
        │
        ▼
Function Context Deleted
```

---

# 📞 Call Stack

The **Call Stack** manages active function calls.

It follows the **LIFO** principle.

> **Last In, First Out**

Think of a stack of books:

- Last book placed on top
- First book removed

---

# 📝 Example 1

```javascript
function one(){
    console.log("One");
}

function two(){
    console.log("Two");
}

function three(){
    console.log("Three");
}

one();
two();
three();
```

### Call Stack

Start

```text
┌──────────────┐
│ Global       │
└──────────────┘
```

Call `one()`

```text
┌──────────────┐
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘
```

After execution

```text
┌──────────────┐
│ Global       │
└──────────────┘
```

The same process repeats for `two()` and `three()`.

---

# 🔥 Nested Function Calls

```javascript
function one(){
    two();
}

function two(){
    three();
}

function three(){
    console.log("Done");
}

one();
```

### Stack Growth

Step 1

```text
┌──────────────┐
│ Global       │
└──────────────┘
```

Step 2

```text
┌──────────────┐
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘
```

Step 3

```text
┌──────────────┐
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘
```

Step 4

```text
┌──────────────┐
│ three()      │
├──────────────┤
│ two()        │
├──────────────┤
│ one()        │
├──────────────┤
│ Global       │
└──────────────┘
```

### Returning

Functions leave in reverse order.

```text
three() ❌
two()   ❌
one()   ❌
Global
```

This is exactly how **LIFO** works.

---

# 🛠 Chrome DevTools Demo

You can watch this process live.

## Steps

1. Open Chrome.
2. Press **F12**.
3. Go to **Sources**.
4. Create a new **Snippet**.
5. Paste your JavaScript.
6. Add breakpoints.
7. Run the code.

You can observe:

- Global Execution Context
- Function Execution Context
- Variable values
- Call Stack updates

---

# 🎯 Interview Cheat Sheet

| Question | Answer |
|----------|--------|
| What is Execution Context? | Environment where JavaScript executes code |
| What is Global Execution Context? | First execution context created |
| Two execution phases? | Memory Creation & Execution |
| Variables during Memory Phase? | `undefined` |
| Functions during Memory Phase? | Full function definition stored |
| Function Execution Context? | New execution environment for every function call |
| What is Call Stack? | Stack managing function execution |
| Stack principle? | **LIFO** |

---

# ⚡ Quick Revision

## Execution Flow

```text
JavaScript File
      │
      ▼
Global Context
      │
      ├── Memory Creation
      └── Execution
              │
              ▼
        Function Call
              │
              ▼
     New Function Context
      │
      ├── Memory
      └── Execution
              │
              ▼
        Return Value
              │
              ▼
        Context Deleted
```

## Call Stack Rule

```text
Push → Execute → Pop

Global
  │
one()
  │
two()
  │
three()

Returns

three()
two()
one()
Global
```

---

# ✅ Key Takeaways

- Every JavaScript program starts with a **Global Execution Context**.
- Every function call creates a **new Function Execution Context**.
- Each execution context has **Memory Creation** and **Execution** phases.
- Variables become `undefined` during memory allocation.
- Function definitions are stored before execution.
- Function contexts are destroyed after returning.
- The **Call Stack** follows **LIFO (Last In, First Out)**.
- These concepts are fundamental for understanding **hoisting, closures, recursion, promises, async/await, and the event loop**.

---
