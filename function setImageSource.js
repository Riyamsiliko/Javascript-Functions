function setImageSrc() {

    // Get an array of all the img elements on the page
  const images = document.querySelectorAll('img'); 

// Loop through each image element
  images.forEach((image) => { 
    image.src = 'https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif'; // Set the src attribute to the given URL
  });
}

// Call the function to set the image source
setImageSource();
