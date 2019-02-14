export function findIndexById(arrays, id) {
    var result = -1;
    arrays.forEach((element, index) => {
        if (element.id === id) return result = index;
    });
    return result;
}