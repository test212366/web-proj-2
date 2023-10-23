
export function addToFav(item) {
    const itemsJoke = document.querySelector('.itemsJoke')
    const temp = Object.assign(item)
    itemsJoke.appendChild(temp)
    addToLocalStorage(itemsJoke)
}
function addToLocalStorage(items) {
    const temp = items.innerHTML
    const tempL = JSON.stringify(temp)
    localStorage.setItem('favorite', tempL)
}