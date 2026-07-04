function getSeason() {

    const currentMonth = new Date().getMonth() + 1;

    if (currentMonth >= 6 && currentMonth <= 10) {
        return "Kharif";
    }

    if (
        currentMonth === 11 ||
        currentMonth === 12 ||
        currentMonth === 1 ||
        currentMonth === 2
    ) {
        return "Rabi";
    }

    return "Summer";
}

module.exports = getSeason;