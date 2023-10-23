import {fetchJoke, responce} from "./fetchJoke";
import {$items, create, createButton, customAppendChild} from "./utils";
import {createModalWindow} from "./modal";
import {addToFav} from "./addToFav";
//create joke
export async function createJoke() {
    await fetchJoke()
    createModalWindow()
    responce.forEach(item => {
        let element = create('','item')
        customAppendChild([create(item.type, 'item__type'),create(item.setup, 'item__title'),create(item.punchline, 'item__anwer'),createButton('favBtn', 'like')], element)
        $items.appendChild(element)
    })
}
const $button = document.querySelector('.return')
$button.addEventListener('click', () => {
    $items.innerHTML = ''
    createJoke()
})
const $main = document.querySelector('.main'),
    $modalWindow = document.querySelector('.modalWindow'),
     terms = localStorage.getItem('favorite')


$main.addEventListener('click', e => {
    if(terms) {
        const itemsJoke = document.querySelector('.itemsJoke'),
            temp = JSON.parse(terms)
        itemsJoke.insertAdjacentHTML('afterbegin', temp)
    }
    if(e.target.classList.contains('favBtn')) {
        e.target.classList.add('active')
        addToFav(e.target.parentNode)

    } else if(e.target.classList.contains('sidebar') || e.target.classList.contains('fav')) {
        $modalWindow.classList.add('open')
    } else if (e.target.classList.contains('overlay')) {
        $modalWindow.classList.remove('open')
    }
})