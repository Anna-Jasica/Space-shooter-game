export function getHeight(element) {
    return Number(getComputedStyle(element).height.slice(0, -2));
}

export function getWidth(element) {
    return Number(getComputedStyle(element).width.slice(0, -2));
}
