import {create, customAppendChild} from "./utils";

export const createModalWindow = (title,) => {
    let temp
    //modal not created in document.createElement
    const modal = document.querySelector('.modalWindow')
    customAppendChild([create('','overlay'),temp = create('','modalWrapper')], modal)
    customAppendChild([create('Liked Joked','modalTitle'),create('','itemsJoke')], temp)

}