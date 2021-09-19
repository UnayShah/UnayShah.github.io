function loaded() {
    setInterval(displayTime, 1000);
}

function displayTime() {
    var time = new Date();
    var hours = time.getHours() % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, 0);
    var AMPM = time.getHours < 12 ? 'A.M.' : 'P.M.';

    const timeDivName = 'time', dateDivName = 'date';

    const timeDiv = document.getElementById(timeDivName);
    timeDiv.innerHTML = hours + ':' + String(time.getMinutes()).padStart(2, 0) + ':' + String(time.getSeconds()).padStart(2, 0) + ' ' + AMPM;

    const dateDiv = document.getElementById(dateDivName);
    dateDiv.innerHTML = String(time.getDate()).padStart(2, 0) + ' ' + getMonth(time.getMonth()) + ' ' + time.getFullYear();
}

function getMonth(monthNumber) {
    switch (monthNumber) {
        case 1: return 'January';
        case 2: return 'February';
        case 3: return 'March';
        case 4: return 'April';
        case 5: return 'May';
        case 6: return 'June';
        case 7: return 'July';
        case 8: return 'August';
        case 9: return 'September';
        case 10: return 'October';
        case 11: return 'November';
        case 12: return 'December';

    }
}