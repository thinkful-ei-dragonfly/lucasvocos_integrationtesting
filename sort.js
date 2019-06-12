function sort(list) {
 for (let i = 1; i < list.length; i++) {
   // changed i = 1 FROM i = 2;
   let j = i;
   if (typeof list[j-1] !== typeof list[j]) {
     throw new Error('Can only sort arrays of same type. Only string or number arrays required')
   }
   while (j > 0 && list[j-1] < list[j]) {
// while (2 > 0 && list[1] > list[2])?

     let temp = list[j];
     list[j] = list[j-1];
     list[j-1] = temp;
     j--;
   }
 }
 return list;
}
module.exports = sort;
