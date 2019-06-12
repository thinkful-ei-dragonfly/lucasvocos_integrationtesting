function diff(a,b) {
  if ((typeof a === 'string' || typeof a === 'number') || (typeof b === 'string' || typeof b ===  'number')) {
    throw new Error('Please enter arrays. This function will not perform a difference check on numbers or strings');
  }
  if (a.length < 1 || b.length < 1) {
    throw new Error('Cannot filter empty arrays')
  }
  return a.filter(n => {
    return !b.includes(n);
  })
}

module.exports = diff;
