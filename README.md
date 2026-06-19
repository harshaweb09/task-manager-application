# Task Manager Application

A modern Task Manager built using HTML, CSS, and Vanilla JavaScript. The application allows users to create, edit, complete, and delete tasks while storing data in Local Storage for persistence across page refreshes.

## Features

- Create New Tasks
- Edit Existing Tasks
- Mark Tasks as Completed
- Delete Individual Tasks
- Clear All Tasks
- Task Categories
- Empty State UI
- Light / Dark Theme Toggle
- Theme Persistence using Local Storage
- Task Persistence using Local Storage
- Responsive Design
- Event Delegation for Action Handling

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage API

## Project Highlights

This project focuses on JavaScript DOM Manipulation and browser fundamentals. Tasks are dynamically created and rendered using JavaScript, while Event Delegation is used to efficiently handle Edit, Complete, and Delete actions.

The application also includes:

- Dynamic UI Updates
- Theme Switching
- Persistent Storage
- Responsive Layout
- Empty State Handling

---

# 📘 Concepts Learned in This Project

While building this Task Manager application, I learned how browsers render web pages and how JavaScript handles events.

## 1. Parsing

When a browser receives an HTML file, it starts reading the code and understanding its structure. This process is called **Parsing**.

### Example

```html
<h1>Hello World</h1>
<p>Welcome</p>
```

The browser understands that there is a heading and a paragraph on the page.

---

## 2. Tokenization

Before creating the page structure, the browser breaks HTML into small pieces called **tokens**.

### Example

```html
<h1>Hello</h1>
```

The browser sees:

- Opening tag → `<h1>`
- Text → `Hello`
- Closing tag → `</h1>`

These small pieces help the browser understand the document.

---

## 3. DOM Tree

After parsing the HTML, the browser creates a tree-like structure called the **DOM (Document Object Model)**.

### Example

```html
<body>
  <h1>Hello</h1>
  <p>Welcome</p>
</body>
```

### DOM Tree

```text
Body
├── H1
└── P
```

JavaScript uses the DOM to create, update, and remove elements from the page.

---

## 4. CSSOM Tree

Just like HTML becomes a DOM Tree, CSS becomes a **CSSOM Tree**.

The CSSOM contains all the styling information for the page.

### Example

```css
h1 {
  color: blue;
}
```

The browser stores this style information inside the CSSOM Tree.

---

## 5. Render Tree

The browser combines:

```text
DOM Tree + CSSOM Tree
```

to create the **Render Tree**.

The Render Tree contains everything that needs to be displayed on the screen.

### Browser Rendering Flow

```text
HTML
↓
Parsing
↓
Tokenization
↓
DOM Tree

CSS
↓
CSSOM Tree

DOM Tree + CSSOM Tree
↓
Render Tree
↓
Web Page
```

---

# ⚡ Event Concepts

## 6. Event Bubbling

Event Bubbling is the default behavior in JavaScript.

When we click a child element, the event first runs on the child and then moves upward through its parent elements.

### Example Output

```text
Child
Parent
Grandparent
```

---

## 7. Event Capturing

Event Capturing works in the opposite direction.

The event starts from the outermost parent and moves down to the target element.

### Example Output

```text
Grandparent
Parent
Child
```

Capturing can be enabled by passing `true` as the third argument in `addEventListener()`.

### Example

```javascript
element.addEventListener("click", handler, true);
```

---

## 8. Event Delegation

Instead of adding separate event listeners to every button, we can add a single listener to the parent element and handle all events from there.

In this project, I used Event Delegation to manage:

- Edit Task
- Complete Task
- Delete Task

### Benefits

- Less code
- Better performance
- Works for dynamically created elements
- Easier to maintain

### Example

```javascript
taskContainer.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
});
```

---

## 9. Attributes vs Properties

While building this project, I learned the difference between HTML Attributes and DOM Properties.

### Attribute

Attributes are defined in HTML.

Example:

```html
<article data-id="1"></article>
```

Here, `data-id` is an attribute.

### Property

Properties belong to DOM objects and can be accessed using JavaScript.

Example:

```javascript
titleInput.value;
submitBtn.textContent;
```

Here, `value` and `textContent` are properties.

### In This Project

I used custom data attributes such as:

```html
data-id data-status data-category
```

and accessed them using:

```javascript
taskCard.dataset.id;
taskCard.dataset.status;
taskCard.dataset.category;
```

---

## 10. Local Storage

Local Storage allows data to be stored in the browser even after refreshing the page.

### Saving Data

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

### Reading Data

```javascript
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
```

In this project, Local Storage is used to persist tasks and theme preferences so they remain available after page refreshes.

---

## What I Learned

Through this project, I gained hands-on experience with:

- DOM Manipulation
- Dynamic Element Creation
- Event Handling
- Event Delegation
- Event Bubbling
- Event Capturing
- Attributes vs Properties
- Local Storage
- Theme Persistence
- Responsive Design
- CRUD Operations
- Conditional Rendering
- UI State Management

---

## Conclusion

Building this Task Manager helped me strengthen my understanding of JavaScript fundamentals and browser internals. It gave me practical experience with DOM Manipulation, Event Delegation, Local Storage, Theme Persistence, Responsive Design, and creating a complete CRUD application using Vanilla JavaScript.
