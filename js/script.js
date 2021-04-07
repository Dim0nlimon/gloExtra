'use strict';

let text = function (i) {
  if (typeof i !== 'string') {
    return alert('это не строка');
  }

  
  let x = i.length;

  for (let a = 0; a < x; a++) {
    if (i[0] === ' ') {
      i = i.substr(1, i.length - 1);
    }
  }


  let j = i[i.length - 1];

  for (let a = 0; a < x; a++) {
    if (j === ' ') {
      i = i.substr(0, x--);
    }
  }

  if (i.length > 30) {
    let a = '...';
    i = i.substr(0, 30) + a;
  }

  console.log(i);
};


/*пример
text("                    gafgakdhgggggggggggggggggggggg              "); 
*/