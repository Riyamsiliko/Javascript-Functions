function capitalizeParagraphs() {

// Get an array of all the p elements on the page    
  const paragraphs = document.querySelectorAll('p'); 
  
   // Loop through each p element
  paragraphs.forEach((paragraph) => {

    const text = paragraph.textContent; // Get the text content of the paragraph

    const capitalizedText = text.toUpperCase(); // Convert the text to all uppercase
    
    paragraph.textContent = capitalizedText; // Set the text content of the paragraph to the capitalized text
  });
}

// Call the function to capitalize paragraphs
capitalizeParagraphs();
