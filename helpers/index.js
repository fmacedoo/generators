function toCamelCase(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function toKebabCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

module.exports = {
    toCamelCase,
    toKebabCase,
};
