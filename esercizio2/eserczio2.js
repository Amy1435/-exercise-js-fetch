// # Esercizio 2 - Barzellette
// Studiati come funzionano le API di https://v2.jokeapi.dev/.
// Crea una pagina HTML in cui l’utente può decidere quante barzellette visualizzare.
//Dopo che l’utente ha deciso e dato conferma d’invio (con un bottone), interroga l’API e crea una lista di barzellette
//che contiene tante barzellette (a tema Programming) quante ne ha richieste l’utente.

window.addEventListener("load", async () => {
    const input = document.querySelector("input");
    const button = document.getElementById("btn");
    const divResult = document.getElementById("result");
    const ul = document.querySelector("ul");
    const jsonJokes = await fetchJokes();
    console.log(jsonJokes);
    button.addEventListener("click", () => {
        try {
            const inputValue = input.value;
            for (let i = 0; i < inputValue; i++) {
                const jokes = jsonJokes.jokes[i].joke;
                ul.innerHTML += `
                <li>${jokes}</li>
                `;
            }
            divResult.appendChild("ul");
        } catch (err) {
            console.log(err);
        }
    });
});

const fetchJokes = async () => {
    const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10"
    );
    const json = await response.json();
    return json;
};
