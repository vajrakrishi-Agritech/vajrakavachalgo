function calculateDAS(sowingDate) {

    const sowDate = new Date(sowingDate);

    const today = new Date();

    const differenceInMilliseconds = today - sowDate;

    const differenceInDays = Math.floor(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    return differenceInDays;
}

module.exports = calculateDAS;