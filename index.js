function getCharacter(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });

}

getCharacter(data => {
    console.log(data);

    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(
            /*html*/
            `<article>

            <div class="image-container">
            <img src="${personaje.image}" alt="Personaje ">

            <h2>"${personaje.name}"</h2>
            <span>"${personaje.status}"</span>

            </div>
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);

    });
})