//OPEN THIS PROJECT IN FULLSCREEN!!

//defining the first phrase arrays where the first half of the advice is
let imageArray = [];
let imageIndex = 0;

let firstPhraseArray = [
  "No one will EVER be the\n best at what they do,",
  "Other than that, if anything\n is bothering you,",
  "First, listen...",
  "They could use that anger against you,",
  "Parents are sadly like that;",
  "There's a difference between you\n coming to me for advice",
  "I think people think that confidence derives\n from an inner feeling that we should be superior,",
  "You're going into an equal playing field,",
  "You can stay this way\n and be sad about this forever,",
  "I can’t do anything about it\n other than being the best me I can be,",
  "In your eyes,\n you might be the devil;",
  "It’s okay to be scared,",
  "You know you're in love\n when you can't sleep,",
  "Like I had my time with them,\n and I don't hate them,",
  "You should never assume someone’s gender,",
  "Always do your best,",
  "If it makes you happy and it\n makes you inspired to do what you do,",
  "There's no way of losing badly,",
  "I am not trying to be prideful,",
  "You can put pants on a monkey,",
  "Going with the flow will be so bliss,",
  "Confidence is like a mirage,",
  "People don't care,",
  "The goal is to jump off the cliff,",
  "The foundation of a relationship\n should serve to make both parties happy,",
  "The greatest struggle of humanity\n is to move on,",
  "We are all brothers and sisters,",
  "Someone told me sweet dreams,",
  "There is no standard that you have to meet,",
  "It’s a tough balance to find,",
  "Imperfections can be seen a beauty,",
  "You should aim for emotional flexibility,",
  "It's your life, your rules;",
  "Just gotta let it be what it is;\n you can’t change much of it,",
  "Don’t grow to hate what you love doing,",
  "It’s like one of those things\n where you’re on vacation,",
  "Don’t be nice to me;",
  "Don’t let morals stop you,",
  "Suspend disbelief, reject reality,",
  "If you’re stupid, you’re unpredictable,",
  "They suffered,",
  "If you die, they’ll hire\n someone else the next day,",
  "Don't attribute to malice\n what can be attributed to ignorance,",
  "People are strange,",
  "Maybe it’s just easier to\n throw a fit over the small stuff,",
  "Half of us are so busy\n raging at the small stuff,",
  "Because life is scary and\n when you sit with it long enough,",
  "Be the better you,"
];
let firstPhraseIndex = 0;

//defining the second phrase arrays where the second half of the advice is
let secondPhraseArray = [
  "because you'll always have a way to improve.",
  "it could be causing that feeling.",
  "Listen to everything they say.",
  "and it’ll drive you nuts.",
  "they don't take their kids seriously.",
  "and you asking me to make decisions for you.",
  "but in all truth confidence is\n just the feeling that you're on equal terms.",
  "so there really is no need\n to be afraid of the opposite team.",
  "or you can be sad about this\n and move on the best you can.",
  "so I just have to let it go\n and move in with my life.",
  "to other people,\n you might be human",
  "that just makes you human.",
  "because your reality is finally\n better than your dreams.",
  "I just need a group now\n that can be a good influence on me.",
  "but you should always\n assume they’re a minor.",
  "and you can make\n whatever you want of your life.",
  "why should you stop for other people?",
  "but there are sore losers.",
  "I am trying to be a winner.",
  "but you can’t teach it to talk.",
  "but in time, what becomes of a life?",
  "only to let your wings fly you up higher.",
  "at least make their\n lives a little better.",
  "because if you do not,\n the world will move on around you.",
  "because we are the children of God.\n Praise the Lord!",
  "so I’m making it my job to not go to sleep.",
  "when it comes to something\n of your own creation.",
  "pleasing the people and pleasing yourself.",
  "where your values and/or beliefs aren't\n compromised by the expectations\n of the outside world.",
  "your experience, your mission.",
  "but what you can definitely change\n is how you perceive your worth.",
  "then I want to die.",
  "and you see this fine person\n that you'll never forget.",
  "I might fall in love.",
  "and unpredictable people\n are the scariest of them all.",
  "embrace delusion.",
  "and it was my fault.",
  "we know we will never be able to find again.",
  "you notice what you’re missing.",
  "they barely flinch.",
  "what’s the alternative?",
  "you’re headed in entirely\n the wrong direction.",
  "we never stop to see we’re\n not even on the right track.",
  "people only expect surface level."
];
let secondPhraseIndex = 0;

//preloading music, the images, and ensuring they align to their name by creating an array of years
function preload() {
  for (i = 0; i < 9; i++) {
    let fileNum = i + 16;
    imageArray[i] = loadImage("assets/20" + fileNum + ".jpg");
  }
  myFont = loadFont("assets/Anaheim.ttf");
  years = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];
  sound = loadSound("ambience.mp3");
}

//setting up the canvas that holds the advice and the buttons that go with it, as well as playing the music
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");

  var button = createButton("Change Year");
  button.parent("button-holder");
  button.mousePressed(changeYear);

  var button2 = createButton("Shuffle Phrase");
  button2.parent("button-holder");
  button2.mousePressed(changePhrase);

  var button3 = createButton("Save Image");
  button3.parent("button-holder");
  button3.mousePressed(saveImage);

  sound.loop();
}

//drawing the actual advice, aligning the text to the center, stylization of the text, adding on the years to the corner to match with each corresponding image
function draw() {
  image(imageArray[imageIndex], 0, 0, 400, 400);
  
  //adding a black overlay to make text more visible
  let c = color(0, 0, 0);
  c.setAlpha(128);
  fill(c);
  rect(0, 0, 400, 400);
  
  //adding the text in the center
  fill(255);
  textFont(myFont);
  textAlign(CENTER);
  textSize(15);
  text(firstPhraseArray[firstPhraseIndex], width / 2, height * 0.4);
  text(secondPhraseArray[secondPhraseIndex], width / 2, height * 0.5);
  
  //adding the year text
  textSize(15);
  text(years[imageIndex], width / 15, height * 0.07);
}

//adding the changeyear button to change the image in the background
function changeYear() {
  imageIndex = int(random(imageArray.length));
}

//adding the changephrase button to change the advice randomly
function changePhrase() {
  firstPhraseIndex = int(random(firstPhraseArray.length));
  secondPhraseIndex = int(random(secondPhraseArray.length));
}

//adding the saveImage function to allow someone to save the canvas
function saveImage() {
  saveCanvas("my_advice.jpg");
}
