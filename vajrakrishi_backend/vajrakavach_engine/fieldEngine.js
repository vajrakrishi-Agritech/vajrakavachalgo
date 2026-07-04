function getFieldEdges(fieldCoordinates) {

    if (!fieldCoordinates || fieldCoordinates.length === 0) {
        return {
            north: null,
            south: null,
            east: null,
            west: null
        };
    }

    const north = fieldCoordinates.reduce((max, point) =>
        point[0] > max[0] ? point : max
    );

    const south = fieldCoordinates.reduce((min, point) =>
        point[0] < min[0] ? point : min
    );

    const east = fieldCoordinates.reduce((max, point) =>
        point[1] > max[1] ? point : max
    );

    const west = fieldCoordinates.reduce((min, point) =>
        point[1] < min[1] ? point : min
    );

    return {
        north,
        south,
        east,
        west
    };
}

module.exports = getFieldEdges;