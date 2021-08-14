// module.exports = function toReadable (number) {
//     const Text1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     const Text2 = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
//     if (number === 0) return 'zero';

//     const hundreds = Math.floor(number / 100);

//     let ten = Math.floor((number - hundreds * 100) / 10);
//     let one = number - hundreds * 100 - ten * 10;

//     if (ten === 1) {
//     ten = 0;
//     one = number - hundreds * 100;
//     }

//     const hundredsText = hundreds ? Text1[hundreds] + ' hundred ' : '';
//     return (hundredsText + Text2[ten] + Text1[one]).trim()


    
// }

module.exports = function toReadable (number) {
  const arr4 = ["","one","two","three","four","five","six","seven","eight","nine","ten",'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const arr3 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arr2 = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
  const arr1 = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
  const numberLength = number.toString().split('').map((elem) => +elem);
  if(numberLength.length == 2) numberLength.unshift('')
  if(numberLength.length == 1) numberLength.unshift('','')
  
  const [numberLength1, numberLength2, numberLength3] = numberLength;
  const teens = +('' + numberLength2 + numberLength3);

  const fullResult = (
    (arr1[numberLength1] || '') + 
    (arr1 == '' ? '' : ' ') + 
    (arr2[numberLength2] || '') + 
    (numberLength3 != 0 && teens > 20? arr3[numberLength3]: arr4[teens] || '')
     + (number == 0? 'zero': '')
     ).trim()
  
  return fullResult;
};