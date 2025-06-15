// Write your code here!// 
// Step 1: Remove the <main> element
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the ID to 'victory'
newHeader.id = "victory";

// Step 4: Set the text content
newHeader.textContent = "Don is the champion"; 

// Step 5: Append it to the document body
document.body.append(newHeader);

