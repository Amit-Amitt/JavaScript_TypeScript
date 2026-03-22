// Step 1: Create a string variable
let message: string = "Hello, World!";

// Step 2: Create an <h1> element
let heading: HTMLHeadingElement = document.createElement("h1");

// Step 3: Add text to the element
heading.textContent = message;

// Step 4: Append the element to the body
document.body.appendChild(heading);
