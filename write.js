import fs from 'fs';
import { Buffer } from 'buffer';
import { RandGen } from './randgen.js';
import async from 'async';

// Generate random filename
export var fileName = RandGen(0)[0];

export function WriteToFile() {
  // count for each category: alphabet, number, alphanumeric, real
  var counts = [0, 0, 0, 0]
  // Allocate maximum of 2MB to buffer
  var maxBytes = 2097152;
  // var totalBytes = 0;
  var wholeString = "";

  (async function () {
    var wordArr = new Array(100);
    do {
      var getRand1 = RandGen();
      // console.log(getRand1);
      wholeString += `${getRand1[0]}, `;
      counts[getRand1[1]]++; // increment the corresponding category
      maxBytes -= Buffer.byteLength(`${getRand1}`, 'utf-8');
      console.log(maxBytes);
    } while (maxBytes > 0);
  })()

  fs.writeFile(`${fileName}.txt`, wholeString, function (e) {
    if (e) {
      return e;
    }
  });
  return ['Click here to download file', counts, fileName];
}