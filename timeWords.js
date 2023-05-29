const Hours = [
    'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
];

const numToWordsMinutes = {
    '0': 'twelve', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
    '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine',
    '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen',
    '14': 'fourteen', '15': 'fifteen', '16': 'sixteen',
    '17': 'seventeen', '18': 'eighteen', '19': 'nineteen',
    '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty'
};

const timeToWords = (time) => {
    

    const [hour, minute] = time.split(':');
    if (hour === '00' && minute === '00') {
        return "midnight";
    } else if (hour === '12' && minute === '00') {
        return "noon";
    }
    const period = parseInt(hour) < 12 ? 'am' : 'pm';
    const hoursInWords = numToWordsHours[parseInt(hour) % 24];

    let minuteInWords = '';
    if (parseInt(minute) === 0) {
        minuteInWords = '';
    } else if (parseInt(minute) > 9 && parseInt(minute) < 20) {
        minuteInWords = numToWordsMinutes[minute];
    } else {
        minuteInWords = numToWordsMinutes[minute[0] + '0'] + ' ' + numToWordsMinutes[minute[1]];
    }
    minuteInWords = minuteInWords.trim()
    return `${hoursInWords} ${minuteInWords} ${period}`;
}

console.log(timeToWords("06:30"))