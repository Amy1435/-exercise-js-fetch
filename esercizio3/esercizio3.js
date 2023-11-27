// # Esercizio 3 - Ricerca paesi per lingua
// Studiati come funzionano le API di https://restcountries.com/.
// Crea una pagina HTML in cui l’utente può inserire del testo ed effettuare una ricerca di paesi a partire dalla lingua.
// Dopo che l’utente ha scritto del testo e dato conferma d’invio (con un bottone),
// interroga l’API e crea una lista di cards, di cui ciascuna card è un risultato della ricerca.
// Ogni card rappresenta un paese cercato a partire dalla stringa inserita dall’utente (una lingua parlata nel paese).
window.addEventListener("load", () => {
    const input = document.querySelector("input");
    const divResult = document.getElementById("result");
    const button = document.querySelector("button");

    button.addEventListener("click", async () => {
        inputValue = input.value;
        const response = await fetch(
            `https://restcountries.com/v3.1/lang/${inputValue}`
        );
        const json = await response.json();
        console.log(json);
        json.forEach(({ name, languages, flags }) => {
            const countryName = name.common;
            const contryLanguages = Object.values(languages).join(", ");
            const countryFlagsPng = flags.png;

            const cardContainer = document.createElement("div");
            cardContainer.classList.add("cardContainer");
            cardContainer.innerHTML = `
            <img src = "${countryFlagsPng}">
            <p style="font-weight: bolder;">${countryName}</p>
            <p><strong>Languages:</strong> ${contryLanguages}</p>
            `;
            divResult.appendChild(cardContainer);
        });
    });
});
