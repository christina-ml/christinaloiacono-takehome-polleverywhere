// YYYY-MM-DDTHH:MI:SS.000Z
const convertISOStringToDate = (dateToConvert) => {
    // specify data type to avoid Uncaught TypeError
    let day = String(dateToConvert).slice(8, 10);
    let month = String(dateToConvert).slice(5, 7);
    let year = String(dateToConvert).slice(0, 4);

    // if month starts with a zero, leave out the zero
    if (month[0] === '0'){
        month = month.slice(1);
    }

    let convertedMonth = convertNumToMonth(month);
    let formattedDate = convertMonthDayYearToDayOfWeek(convertedMonth, day, year) + ' ' + convertedMonth + ' ' + day + ' ' + year;

    return formattedDate;
}

function convertNumToMonth(num){
    let months = {
        '1': 'Jan',
        '2': 'Feb',
        '3': 'Mar',
        '4': 'Apr',
        '5': 'May',
        '6': 'Jun',
        '7': 'Jul',
        '8': 'Aug',
        '9': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
    }

    const month = months[num];
    return month;
}

function convertMonthDayYearToDayOfWeek(month, day, year){
    let weekdays = {
        '0': 'Sun',
        '1': 'Mon',
        '2': 'Tue',
        '3': 'Wed',
        '4': 'Thu',
        '5': 'Fri',
        '6': 'Sat'
    }

    const dayOfWeek = new Date(`${month} ${day}, ${year}`).getDay();
    return weekdays[dayOfWeek]
}

export default convertISOStringToDate;