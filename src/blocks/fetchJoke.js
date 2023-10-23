export let responce
export const fetchJoke = async () => {
    const resp = await fetch('https://official-joke-api.appspot.com/jokes/ten')
    responce = await resp.json()
}
