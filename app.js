// let message = 'this is a string message';

// function getMessage(newMessage) {
//   console.log(newMessage);
//   setTimeout(function () { alert("Hello"); }, 3000);
// }

// getMessage('this is a new one');

// let getWords = (words)=> {
//   console.log('word instantly');
//   setTimeout(function(){ alert("3 seconds, log another word"); }, 3000);
//   setTimeout(function(){ alert("2 seconds, log another word"); }, 2000);
//   setTimeout(function(){ alert("1 second, log a final word"); }, 1000);
// }

// getWords();



// Countdown

// const done = () => { console.log(`Job's done!`); }
// const countdown = (num, callback) => {

//   if (num > 0) {
//     setTimeout(() => {
//       console.log(num);
//       countdown(num - 1, callback)
//     }, 1000);
//   } else {
//     setTimeout(() => { callback(); }, 1000);
//   }
// }

// countdown(5, done);

// Promises

let lunchtime = true;
let orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    if (lunchtime) {
      let = lunchObj = {
        lunch: "your favorite lunch",
        drink: "your favorite beverage"
      }
      resolve(console.log(lunchObj)); 
    } else { 
      let err = new Error('booooo');
      reject(err);
    }

  });
}

orderMeSomeFood()
// .then(res => console.log(res))
// .catch(err => console.log(err));

