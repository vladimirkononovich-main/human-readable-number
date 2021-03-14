module.exports = function toReadable (number) {
    const Text1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const Text2 = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    if (number === 0) return 'zero';

    const hundreds = Math.floor(number / 100);

    let ten = Math.floor((number - hundreds * 100) / 10);
    let one = number - hundreds * 100 - ten * 10;

    if (ten === 1) {
    ten = 0;
    one = number - hundreds * 100;
    }

    const hundredsText = hundreds ? Text1[hundreds] + ' hundred ' : '';
    return (hundredsText + Text2[ten] + Text1[one]).trim()


    
}
