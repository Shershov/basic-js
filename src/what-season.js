module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }

    let month = date.getUTCMonth();
    if (month == 11 || month < 2) {
        return 'winter';
    } else if (month <= 4) {
        return 'spring';
    } else if (month <= 7) {
        return 'summer';
    } else if (month <= 10) {
        return 'autumn';
    }
};