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
    try {
        switch (parseInt(monthNumber)) {
            case 0: return 'January';
            case 1: return 'February';
            case 2: return 'March';
            case 3: return 'April';
            case 4: return 'May';
            case 5: return 'June';
            case 6: return 'July';
            case 7: return 'August';
            case 8: return 'September';
            case 9: return 'October';
            case 10: return 'November';
            case 11: return 'December';
            default: return 'Facing error in month';
        }
    } catch (error) {
        console.error(error)
    }
}