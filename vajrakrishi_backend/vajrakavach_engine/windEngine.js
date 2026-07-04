function getScoutDirection(windDirection, edges) {

    if (windDirection === "N") {

        return {
            startSide: "North",
            primaryPoints: [edges.north]
        };
    }

    if (windDirection === "NE") {

        return {
            startSide: "North-East",
            primaryPoints: [
                edges.north,
                edges.east
            ]
        };
    }

    if (windDirection === "E") {

        return {
            startSide: "East",
            primaryPoints: [edges.east]
        };
    }

    if (windDirection === "SE") {

        return {
            startSide: "South-East",
            primaryPoints: [
                edges.south,
                edges.east
            ]
        };
    }

    if (windDirection === "S") {

        return {
            startSide: "South",
            primaryPoints: [edges.south]
        };
    }

    if (windDirection === "SW") {

        return {
            startSide: "South-West",
            primaryPoints: [
                edges.south,
                edges.west
            ]
        };
    }

    if (windDirection === "W") {

        return {
            startSide: "West",
            primaryPoints: [edges.west]
        };
    }

    if (windDirection === "NW") {

        return {
            startSide: "North-West",
            primaryPoints: [
                edges.north,
                edges.west
            ]
        };
    }

    // Fallback
    return {

        startSide: "Unknown",

        primaryPoints: []

    };
}

module.exports = getScoutDirection;