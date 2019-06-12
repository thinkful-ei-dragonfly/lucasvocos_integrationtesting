const express = require('express')
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res
    .status(400)
    .send('Goodbye Express!');
})

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if(!a) {
    return res
      .status(400)
      .send('Value for "a" is needed');
  }

  if(!b) {
    return res
      .status(400)
      .send('Value for "b" is needed');
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if(Number.isNaN(numA)) {
    return res
      .status(400)
      .send('Value for "a" must be numeric');
  }

  if(Number.isNaN(numB)) {
    return res
      .status(400)
      .send('Value for "b" must be numeric');
  }

  if(numB == 0) {
    return res
      .status(400)
      .send('Cannot divide by 0');
  }

  const ans = numA / numB;

  res
    .send(`${a} divided by ${b} is ${ans}`);

});

app.get('/generate', (req, res) => {
  const {n} = req.query
  const num = parseInt(n)
  if (Number.isNaN(num)) {
    return res
      .status(400)
      .send('Invalid request');
  }
  // const initial = []
  // for (let i = 0; i < n; i++) {
  //   initial.push(i+1)
  // }
  // return res
  //   .status(200)
  //   .send(resArray)
  // This would work if the order wasn't random

  const initial = Array(num)
                    .fill(1)
                    .map((_, i) => i +1);

  initial.forEach((e,i) => {
    let ran = Math.floor(Math.random() * num);
    let temp = initial[i];
    initial[i] = initial[ran];
    initial[ran] = temp;
  })

  return res.json(initial)
})

app.get('/frequency', (req, res) => {
  const {s} = req.query;

  if(!s) {
    return res
        .status(400)
        .send('invalid request')
  }
  const counts = s
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      if(acc[curr]) {
        acc[curr]++
      } else {
        acc[curr] =1
      }
      return acc;
    }, {});

    const unique = Object.keys(counts).length;
    const average = s.length / unique;
    let highest = '';
    let highestVal = 0;

    Object.keys(counts).forEach(k => {
      if(counts[k] > highestVal) {
        highestVal = counts[k];
        highest = k;
      }
    });

    counts.unique = unique;
    counts.average = average;
    counts.highest = highest;
    res.json(counts)
})

module.exports = app;
