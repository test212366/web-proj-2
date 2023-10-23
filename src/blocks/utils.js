export const $items = document.querySelector('.items')
//createSecondElement in ItemJoke
export function create(text = '', classItem) {
    let element = document.createElement('div')
    element.classList.add(classItem)
    element.textContent = text
    return element
}
export function createButton(classEl, text) {
    const item = document.createElement('button')
    item.classList.add('btn')
    item.classList.add(classEl)
    item.textContent = text
    return item
}
//симпл-димпл попыт сквиж
export function customAppendChild(array, titleTag) {
    array.forEach(item => {
        titleTag.appendChild(item)
    })
}
