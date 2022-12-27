export function healthIndicator(object) {
    if (object.health > 50) {
        return 'healthy';
    } if (object.health > 15) {
        return 'wounded';
    }
    return 'critical';
}

export function sortCharacters(array) {
    return array.sort((x, y) => y.health - x.health);
}
