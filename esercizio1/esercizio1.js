// # Esercizio 1 - Posts
// Studiati come funzionano le API di https://jsonplaceholder.typicode.com/.
// Crea una pagina HTML in cui, dopo aver richiesto dei post all’API, vengono create delle card nel documento:
//per ogni card mostra titolo e contenuto.

// const fetchPosts = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// };
// console.log(`primo intento` + fetchPosts());

window.addEventListener("load", async () => {
    const divContainer = document.createElement("div");
    divContainer.classList.add("container");
    const jsonPosts = await fetchPosts();
    console.log(jsonPosts);
    if (jsonPosts) {
        jsonPosts.forEach(({ title, body }) => {
            const div = document.createElement("div");
            div.classList.add("cards");
            div.innerHTML += `
            <h1>Name: ${title}</h1>
            <p>UserName: ${body}</p>
            `;

            divContainer.appendChild(div);
        });
    } else {
        console.log("errore");
    }
    document.body.appendChild(divContainer);
});

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    return json;
};
