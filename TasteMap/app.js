/* =================================
   TASTEMAP
   FASE 2 — RESTAURANTES
================================= */


/* ---------------------------------
   DADOS DOS RESTAURANTES
--------------------------------- */
const restaurants = [

    {
        id: 1,
        name: "Mamma Celeste",
        cuisine: "Italiana",
        price: "$$",
        status: "visited",
        tags: ["massa", "italiana"],
        note: "Restaurante italiano em Ponta Negra.",
        position: [-5.8798, -35.1808]
    },

    {
        id: 2,
        name: "Mangai Lagoa Nova",
        cuisine: "Nordestina",
        price: "$$",
        status: "visited",
        tags: ["regional", "nordestina"],
        note: "Comida regional nordestina.",
        position: [-5.8060, -35.2100]
    },

    {
        id: 3,
        name: "NAU Frutos do Mar",
        cuisine: "Frutos do mar",
        price: "$$$",
        status: "visited",
        tags: ["peixes", "mariscos"],
        note: "Especializado em frutos do mar.",
        position: [-5.8770, -35.1780]
    },

    {
        id: 4,
        name: "Tutti Cucina",
        cuisine: "Italiana",
        price: "$$$",
        status: "want",
        tags: ["italiana", "jantar"],
        note: "Culinária italiana.",
        position: [-5.7925, -35.1995]
    },

    {
        id: 5,
        name: "Camarões Restaurante",
        cuisine: "Frutos do mar",
        price: "$$$",
        status: "want",
        tags: ["camarão", "frutos do mar"],
        note: "Restaurante especializado em frutos do mar.",
        position: [-5.8740, -35.1795]
    },

    {
        id: 6,
        name: "Ávalon - Experiência Medieval",
        cuisine: "Variada",
        price: "$$",
        status: "want",
        tags: ["medieval", "experiência"],
        note: "Experiência gastronômica com temática medieval.",
        position: [-5.8780, -35.1800]
    },

    {
        id: 7,
        name: "Restaurante Benedito",
        cuisine: "Contemporânea",
        price: "$$$",
        status: "want",
        tags: ["contemporânea", "especial"],
        note: "Restaurante de gastronomia contemporânea.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 8,
        name: "Farofa D'Água",
        cuisine: "Brasileira",
        price: "$$",
        status: "want",
        tags: ["regional", "brasileira"],
        note: "Culinária brasileira e regional.",
        position: [-5.8770, -35.1800]
    },

    {
        id: 9,
        name: "Pérola Restaurante",
        cuisine: "Brasileira",
        price: "$$",
        status: "want",
        tags: ["brasileira", "frutos do mar"],
        note: "Restaurante na região de Ponta Negra.",
        position: [-5.8788, -35.1768]
    },

    {
        id: 10,
        name: "Divinas Gerais",
        cuisine: "Mineira",
        price: "$$",
        status: "want",
        tags: ["mineira", "brasileira"],
        note: "Comida brasileira com influência mineira.",
        position: [-5.8772, -35.1808]
    },

    {
        id: 11,
        name: "Marechal Restaurante",
        cuisine: "Contemporânea",
        price: "$$",
        status: "want",
        tags: ["jantar", "contemporânea"],
        note: "Restaurante localizado em Petrópolis.",
        position: [-5.7898, -35.1985]
    },

    {
        id: 12,
        name: "Mangai RN",
        cuisine: "Nordestina",
        price: "$$",
        status: "want",
        tags: ["regional", "nordestina"],
        note: "Gastronomia regional nordestina.",
        position: [-5.8755, -35.1800]
    },

    {
        id: 13,
        name: "Dom Aquino Restaurante Gastrobar",
        cuisine: "Brasileira",
        price: "$$",
        status: "want",
        tags: ["gastrobar", "jantar"],
        note: "Restaurante e gastrobar.",
        position: [-5.8000, -35.1950]
    },

    {
        id: 14,
        name: "Manary Gastronomia & Arte",
        cuisine: "Contemporânea",
        price: "$$$",
        status: "want",
        tags: ["arte", "gastronomia"],
        note: "Gastronomia e experiência artística.",
        position: [-5.8800, -35.1800]
    },

    {
        id: 15,
        name: "Casa do Matuto",
        cuisine: "Nordestina",
        price: "$$",
        status: "want",
        tags: ["regional", "nordestina"],
        note: "Restaurante na Praia dos Artistas.",
        position: [-5.7805, -35.1910]
    },

    {
        id: 16,
        name: "Zeh Cozinha",
        cuisine: "Contemporânea",
        price: "$$",
        status: "want",
        tags: ["cozinha", "contemporânea"],
        note: "Restaurante em Lagoa Nova.",
        position: [-5.8060, -35.2020]
    },

    {
        id: 17,
        name: "Camarões Potiguar",
        cuisine: "Frutos do mar",
        price: "$$$",
        status: "want",
        tags: ["camarão", "frutos do mar"],
        note: "Restaurante de frutos do mar em Ponta Negra.",
        position: [-5.8765, -35.1800]
    },

    {
        id: 18,
        name: "Vignoli Natal",
        cuisine: "Italiana",
        price: "$$",
        status: "want",
        tags: ["pizza", "italiana"],
        note: "Restaurante italiano em Ponta Negra.",
        position: [-5.8755, -35.1810]
    },

    {
        id: 19,
        name: "Panela de Barro de Mãe",
        cuisine: "Brasileira",
        price: "$$",
        status: "want",
        tags: ["caseira", "regional"],
        note: "Comida brasileira e regional.",
        position: [-5.7600, -35.2350]
    },

    {
        id: 20,
        name: "La Casona Churrascaria",
        cuisine: "Churrasco",
        price: "$$",
        status: "want",
        tags: ["churrasco", "carnes"],
        note: "Churrascaria em Natal.",
        position: [-5.7500, -35.2500]
    },

    {
        id: 21,
        name: "Terra Natal",
        cuisine: "Brasileira",
        price: "$$",
        status: "want",
        tags: ["regional", "brasileira"],
        note: "Gastronomia brasileira.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 22,
        name: "Petrópolis Restaurante",
        cuisine: "Brasileira",
        price: "$$",
        status: "want",
        tags: ["buffet", "brasileira"],
        note: "Restaurante localizado em Petrópolis.",
        position: [-5.7890, -35.2000]
    },

    {
        id: 23,
        name: "Restaurante Pau Brasil",
        cuisine: "Brasileira",
        price: "$$",
        status: "want",
        tags: ["brasileira", "regional"],
        note: "Gastronomia brasileira.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 24,
        name: "Cais 43",
        cuisine: "Variada",
        price: "$$",
        status: "want",
        tags: ["bar", "pizza", "frutos do mar"],
        note: "Bar e restaurante na Praia do Meio.",
        position: [-5.7800, -35.1910]
    },

    {
        id: 25,
        name: "Cais do Sertão Bar",
        cuisine: "Nordestina",
        price: "$$",
        status: "want",
        tags: ["sertanejo", "bar", "regional"],
        note: "Experiência gastronômica com temática nordestina.",
        position: [-5.7800, -35.1910]
    },

    {
        id: 26,
        name: "Beco Mágico Natal",
        cuisine: "Lanches",
        price: "$$",
        status: "want",
        tags: ["temático", "lanches"],
        note: "Espaço temático para uma experiência diferente.",
        position: [-5.8800, -35.1800]
    },

    {
        id: 27,
        name: "Jurassic Fantasy",
        cuisine: "Lanches",
        price: "$$",
        status: "want",
        tags: ["temático", "família"],
        note: "Espaço gastronômico com temática jurássica.",
        position: [-5.8800, -35.1800]
    },

    {
        id: 28,
        name: "Big Pig",
        cuisine: "Lanches",
        price: "$$",
        status: "want",
        tags: ["hambúrguer", "lanches"],
        note: "Lanchonete.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 29,
        name: "Vem Pra Mesa Game Center",
        cuisine: "Lanches",
        price: "$$",
        status: "want",
        tags: ["games", "lanches"],
        note: "Espaço de jogos e alimentação.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 30,
        name: "Estação Açaí",
        cuisine: "Açaí",
        price: "$",
        status: "want",
        tags: ["açaí", "lanche"],
        note: "Açaí e opções para lanches.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 31,
        name: "Casa Alice Doceria",
        cuisine: "Doceria",
        price: "$$",
        status: "want",
        tags: ["doces", "sobremesa"],
        note: "Doceria.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 32,
        name: "Just Food & Coffee",
        cuisine: "Café",
        price: "$$",
        status: "want",
        tags: ["café", "lanche"],
        note: "Café e opções para lanches.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 33,
        name: "O Maestro - Café & Arte",
        cuisine: "Café",
        price: "$$",
        status: "want",
        tags: ["café", "arte"],
        note: "Café e espaço ligado à arte.",
        position: [-5.8000, -35.2000]
    },

    {
        id: 34,
        name: "A Doceria",
        cuisine: "Doceria",
        price: "$$",
        status: "want",
        tags: ["doces", "sobremesa"],
        note: "Doceria e sobremesas.",
        position: [-5.8000, -35.2000]
    }

];
  






/* ---------------------------------
   MAPA
--------------------------------- */

const natal = [-5.79448, -35.211];

const map = L.map("map", {

    zoomControl: true,
    scrollWheelZoom: true

}).setView(natal, 13);



/* OpenStreetMap */

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,

        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);



/* ---------------------------------
   ÍCONES DOS MARCADORES
--------------------------------- */

const visitedIcon = L.divIcon({

    className: "custom-marker",

    html: `
        <div class="marker marker-visited">
            🍴
        </div>
    `,

    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -22]

});


const wantIcon = L.divIcon({

    className: "custom-marker",

    html: `
        <div class="marker marker-want">
            ♡
        </div>
    `,

    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -22]

});



/* ---------------------------------
   MARCADORES
--------------------------------- */

const markers = {};



restaurants.forEach(restaurant => {

    const icon =
        restaurant.status === "visited"
            ? visitedIcon
            : wantIcon;


    const marker = L.marker(
        restaurant.position,
        {
            icon: icon
        }
    ).addTo(map);


    marker.bindPopup(`
        <div class="popup-card">

            <span class="popup-status">
                ${
                    restaurant.status === "visited"
                        ? "✓ Já visitei"
                        : "♡ Quero experimentar"
                }
            </span>

            <h3>${restaurant.name}</h3>

            <p>
                ${restaurant.cuisine}
                ·
                ${restaurant.price}
            </p>

            <button
                onclick="selectRestaurant(${restaurant.id})"
                class="popup-button"
            >
                Ver detalhes
            </button>

        </div>
    `);


    marker.on("click", () => {

        highlightRestaurant(
            restaurant.id
        );

    });


    markers[restaurant.id] = marker;

});



/* ---------------------------------
   LISTA DE RESTAURANTES
--------------------------------- */

const restaurantList =
    document.getElementById("restaurantList");


const count =
    document.querySelector(".count");



function renderRestaurants(list = restaurants) {

    restaurantList.innerHTML = "";

    count.textContent = list.length;


    if (list.length === 0) {

        restaurantList.innerHTML = `
            <div class="empty-state">

                <span>🍴</span>

                <h3>Nenhum lugar encontrado</h3>

                <p>
                    Tente mudar sua busca ou seus filtros.
                </p>

            </div>
        `;

        return;

    }


    list.forEach(restaurant => {

        const card =
            document.createElement("article");


        card.className = "restaurant-card";


        card.dataset.id =
            restaurant.id;


        card.innerHTML = `

            <div class="restaurant-card-top">

                <div class="restaurant-icon">
                    ${
                        restaurant.status === "visited"
                            ? "🍴"
                            : "♡"
                    }
                </div>

                <div class="restaurant-info">

                    <h3>
                        ${restaurant.name}
                    </h3>

                    <p>
                        ${restaurant.cuisine}
                        ·
                        ${restaurant.price}
                    </p>

                </div>

            </div>


            <div class="restaurant-tags">

                ${restaurant.tags
                    .map(tag =>
                        `<span>#${tag}</span>`
                    )
                    .join("")
                }

            </div>


        <div class="restaurant-status">

    <button
        class="status-button"
        onclick="toggleStatus(event, ${restaurant.id})"
    >
        ${
            restaurant.status === "visited"
                ? "✓ Já visitei"
                : "♡ Quero experimentar"
        }
    </button>

    <span>→</span>

</div>

        `;


        card.addEventListener(
            "click",
            () => selectRestaurant(restaurant.id)
        );


        restaurantList.appendChild(card);

    });

}



/* ---------------------------------
   SELECIONAR RESTAURANTE
--------------------------------- */

function selectRestaurant(id) {

    const restaurant =
        restaurants.find(
            item => item.id === id
        );


    if (!restaurant) return;


    map.flyTo(
        restaurant.position,
        16,
        {
            duration: 0.8
        }
    );


    markers[id].openPopup();


    highlightRestaurant(id);

}



/* ---------------------------------
   DESTACAR CARD
--------------------------------- */

function highlightRestaurant(id) {

    document
        .querySelectorAll(".restaurant-card")
        .forEach(card => {

            card.classList.remove(
                "selected"
            );

        });


    const selected =
        document.querySelector(
            `.restaurant-card[data-id="${id}"]`
        );


    if (selected) {

        selected.classList.add(
            "selected"
        );


        selected.scrollIntoView({

            behavior: "smooth",

            block: "nearest"

        });

    }

}



/* ---------------------------------
   BUSCA
--------------------------------- */

const searchInput =
    document.getElementById(
        "searchInput"
    );


searchInput.addEventListener(
    "input",
    () => {

        const search =
            searchInput.value
                .toLowerCase()
                .trim();


        const filtered =
            restaurants.filter(
                restaurant => {

                    return (

                        restaurant.name
                            .toLowerCase()
                            .includes(search)

                        ||

                        restaurant.cuisine
                            .toLowerCase()
                            .includes(search)

                        ||

                        restaurant.tags.some(
                            tag =>
                                tag
                                    .toLowerCase()
                                    .includes(search)
                        )

                    );

                }
            );


        renderRestaurants(
            filtered
        );

    }
);



/* ---------------------------------
   FILTROS
--------------------------------- */

const filterButtons =
    document.querySelectorAll(
        ".filter"
    );


filterButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                filterButtons
                    .forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                let filtered =
                    restaurants;


                if (index === 1) {

                    filtered =
                        restaurants.filter(
                            restaurant =>
                                restaurant.status ===
                                "visited"
                        );

                }


                if (index === 2) {

                    filtered =
                        restaurants.filter(
                            restaurant =>
                                restaurant.status ===
                                "want"
                        );

                }


                renderRestaurants(
                    filtered
                );

            }
        );

    }
);



/* =================================
   MODO CLARO / ESCURO
================================= */

const themeButton =
    document.getElementById("themeButton");


function updateThemeButton() {

    if (!themeButton) return;


    const darkMode =
        document.body.classList.contains(
            "dark-mode"
        );


    themeButton.textContent =
        darkMode ? "☀️" : "🌙";


    themeButton.setAttribute(
        "aria-label",
        darkMode
            ? "Ativar modo claro"
            : "Ativar modo escuro"
    );

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "tastemap-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    }


    updateThemeButton();

}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.toggle(
                    "dark-mode"
                );


            localStorage.setItem(
                "tastemap-theme",
                isDark
                    ? "dark"
                    : "light"
            );


            updateThemeButton();

        }
    );

}


loadTheme();



/* ---------------------------------
   INICIALIZAÇÃO
--------------------------------- */

renderRestaurants();


/* Ajusta o mapa depois que a página carrega */

setTimeout(() => {

    map.invalidateSize();

}, 500);
/* ---------------------------------
   ALTERAR STATUS
--------------------------------- */

function toggleStatus(event, id) {

    event.stopPropagation();

    const restaurant =
        restaurants.find(
            item => item.id === id
        );

    if (!restaurant) return;

    restaurant.status =
        restaurant.status === "visited"
            ? "want"
            : "visited";

    renderRestaurants();

    updateMarkers();

}
function updateMarkers() {

    restaurants.forEach(restaurant => {

        const marker =
            markers[restaurant.id];

        if (!marker) return;

        marker.setIcon(
            restaurant.status === "visited"
                ? visitedIcon
                : wantIcon
        );

    });

}
/* =================================
   COMPARAÇÃO — QUAL FOI MELHOR?
================================= */

const compareButton =
    document.getElementById("compareButton");


function getVisitedRestaurants() {

    return restaurants.filter(
        restaurant =>
            restaurant.status === "visited"
    );

}


function startComparison() {

    const visited =
        getVisitedRestaurants();


    if (visited.length < 2) {

        alert(
            "Você precisa ter pelo menos 2 lugares visitados para fazer uma comparação."
        );

        return;
    }


    const firstIndex =
        Math.floor(
            Math.random() * visited.length
        );


    let secondIndex =
        Math.floor(
            Math.random() * visited.length
        );


    while (secondIndex === firstIndex) {

        secondIndex =
            Math.floor(
                Math.random() * visited.length
            );

    }


    const first =
        visited[firstIndex];


    const second =
        visited[secondIndex];


    showComparison(
        first,
        second
    );

}


function showComparison(first, second) {

    const modal =
        document.createElement("div");


    modal.className =
        "comparison-modal";


    modal.innerHTML = `

        <div class="comparison-box">

            <button
                class="close-comparison"
                aria-label="Fechar"
            >
                ×
            </button>

            <span class="eyebrow">
                COMPARAÇÃO
            </span>

            <h2>
                Qual foi melhor?
            </h2>

            <p>
                Escolha o restaurante que você prefere.
            </p>


         

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


function registerComparison(
    winnerId,
    firstId,
    secondId
) {

    const winner = restaurants.find(
        restaurant => restaurant.id === winnerId
    );

    const loserId =
        winnerId === firstId
            ? secondId
            : firstId;

    const loser = restaurants.find(
        restaurant => restaurant.id === loserId
    );

    if (!winner || !loser) return;


    /*
       Sistema simples inspirado em Elo.

       Todos começam com 1000 pontos.
       Vencer alguém com pontuação maior
       gera mais pontos.
    */

    const winnerRating =
        winner.rating ?? 1000;

    const loserRating =
        loser.rating ?? 1000;


    const expectedWinner =
        1 /
        (
            1 +
            Math.pow(
                10,
                (loserRating - winnerRating) / 400
            )
        );


    const expectedLoser =
        1 -
        expectedWinner;


    const K = 32;


    winner.rating =
        Math.round(
            winnerRating +
            K * (1 - expectedWinner)
        );


    loser.rating =
        Math.round(
            loserRating +
            K * (0 - expectedLoser)
        );


    winner.comparisons =
        (winner.comparisons || 0) + 1;


    loser.comparisons =
        (loser.comparisons || 0) + 1;


    saveRatings();

    loadRatings();

    renderRestaurants();
    
    renderRanking();

    alert(
        `${winner.name} venceu a comparação!`
    );

}
function saveRatings() {

    const ratings = restaurants.map(
        restaurant => ({
            id: restaurant.id,
            rating: restaurant.rating,
            comparisons: restaurant.comparisons
        })
    );


    localStorage.setItem(
        "tastemap-ratings",
        JSON.stringify(ratings)
    );

}
function loadRatings() {

    const saved =
        localStorage.getItem(
            "tastemap-ratings"
        );


    if (!saved) return;


    const ratings =
        JSON.parse(saved);


    ratings.forEach(savedRestaurant => {

        const restaurant =
            restaurants.find(
                item =>
                    item.id === savedRestaurant.id
            );


        if (!restaurant) return;


        restaurant.rating =
            savedRestaurant.rating;


        restaurant.comparisons =
            savedRestaurant.comparisons;

    });

}
function renderRanking() {

    const rankingList =
        document.getElementById(
            "rankingList"
        );


    if (!rankingList) return;


    const visited =
        restaurants
            .filter(
                restaurant =>
                    restaurant.status === "visited"
            )
            .sort(
                (a, b) =>
                    (b.rating || 1000) -
                    (a.rating || 1000)
            );


    if (visited.length === 0) {

        rankingList.innerHTML = `
            <p class="ranking-empty">
                Você ainda não possui lugares visitados.
            </p>
        `;

        return;

    }


    rankingList.innerHTML =
        visited
            .slice(0, 5)
            .map(
                (restaurant, index) => `

                <div class="ranking-item">

                    <span class="ranking-position">
                        ${index + 1}
                    </span>

                    <div class="ranking-info">

                        <strong>
                            ${restaurant.name}
                        </strong>

                        <small>
                            ${restaurant.cuisine}
                        </small>

                    </div>

                    <div class="ranking-score">

                        <strong>
                            ${restaurant.rating || 1000}
                        </strong>

                        <small>
                            ${
                                restaurant.comparisons || 0
                            }
                                comparações
                        </small>

                    </div>

                </div>

            `
            )
            .join("");

}
