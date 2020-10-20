module.exports = function check(str, bracketsConfig) {
  let array = [];
  let object = Object.fromEntries(bracketsConfig);

  for(const i of str.split('')) {
      if (array[0] === i) {
          array.shift();
      } else if(object[i]) {
          array.unshift(object[i]);
      } else {
          return false;
      }
  }

  return array.length === 0;
}