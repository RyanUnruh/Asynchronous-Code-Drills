let message = 'this is a string message';

function getMessage(newMessage){
  console.log(newMessage);
  setTimeout(function(){ alert("Hello"); }, 3000);
}

// getMessage('this is a new one');

function getWords(words) {
  console.log('word instantly');
  setTimeout(function(){ alert("3 seconds, log another word"); }, 3000);
  setTimeout(function(){ alert("2 seconds, log another word"); }, 2000);
  setTimeout(function(){ alert("1 second, log a final word"); }, 1000);
}

getWords();