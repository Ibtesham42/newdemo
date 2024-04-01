const jokes = [
    " for Bobita to bring a smile to her face",

       " Bobita ki adaaon mein hai jaadu sa Har ",
       " pal uski muskurahat mein hai kuch khaas",
       "Uska naam lekar dil ko halka sa sukoon milta hai",
      " Bobita ke bina adhoori si lagti hai har baat ",
    
    "Bobita ki hasi mein chhupi hai khushi ki raaz",
       "Uski baaton mein hai mithaas ka aabhaaz",
       "Har baar jab uska naam yaad aata hai",
       "Dil ko lagta hai jaise kuch khaas saaaz",
    
    "Bobita ke chehre pe chamak hai khaas",
      " Uski muskurahat mein hai dil ka raaz",
       "Har pal uska saath hai yaadon mein",
      " Bobita ke bina adhoori hai zindagi ki raat",
    
    "Hope these Shayaris bring a smile to Bobita's face!"
  ];
  
  const jokeDisplay = document.getElementById('jokeDisplay');
  const generateJokeBtn = document.getElementById('generateJokeBtn');
  
  function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    jokeDisplay.textContent = joke;
  }
  
  generateJokeBtn.addEventListener('click', generateJoke);
  