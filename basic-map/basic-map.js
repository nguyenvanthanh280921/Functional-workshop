// function doubleAll(numbers) {
//   var numbers = [];
//   var result = numbers.map((number) => number.push(numbers * 2));
//   return result;
// }
// module.exports = doubleAll;

function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2;
  });
}
module.exports = doubleAll;

// function doubleAll(numbers) {
//   var result = [];
//   for (var i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2);
//   }
//   return result;
// }

// module.exports = doubleAll;

// var names = ["Jack", "Jecci", "Ram", "Tom"];
// var upperCaseNames = [];
// for (let i = 0, totalNames = names.length; i < totalNames; i = i + 1) {
//   upperCaseNames[i] = names[i].toUpperCase();
// }

// var names = ["Jack", "Jecci", "Ram", "Tom"];
// var upperCaseNames = names.map((name) => name.toUpperCase());
