

//modifying my previous code ito use arrow functions and test


const setImageSource = () => {
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    image.src = 'https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif';
  });
};

const capitalizeParagraphs = () => {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((paragraph) => {
    const text = paragraph.textContent;
    paragraph.textContent = text.toUpperCase();
  });
};

const test = () => {
  setImageSource();
  capitalizeParagraphs();
  console.log('Test completed!');
};

test();
