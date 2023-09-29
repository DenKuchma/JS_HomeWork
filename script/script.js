const SERVER_URL = 'https://swapi.dev/api/planets/';
const getRoot = document.querySelector('body');

const getElement = (element) => document.querySelector(element);

const createAndAppendCard = (
    tag = 'div',
    classlist = '',
    content = '',
    parent = getRoot,
) => {
    const node = document.createElement(tag);
    node.classList.add(classlist);
    node.textContent = content;
    parent.appendChild(node);
    return node;
};

const displayCharactersForFilm = async (filmData, filmListItem, button) => {
    if (filmData.charactersDisplayed) {
        const charterListElement = filmListItem.querySelector('.charter-data-list');
        if (charterListElement) {
            charterListElement.remove();
        }
        filmData.charactersDisplayed = false;
        button.textContent = 'Показать персонажей';
    } else {
        const charactersDataPromises = filmData.characters.map(fetchCharacterData);
        const charactersDataArray = await Promise.all(charactersDataPromises);
        const charterListElement = document.createElement('ul');
        charterListElement.classList.add('charter-data-list');
        const charactersList = charactersDataArray.map((characterData) => characterData.name);
        charactersList.forEach((characterName) => {
            createAndAppendCard('li', 'charter-data', characterName, charterListElement);
        });
        filmListItem.appendChild(charterListElement);
        filmData.charactersDisplayed = true;
        button.textContent = 'Скрыть персонажей';
    }
};


const callbackFromServer = (resolve, reject) => {
    fetch(SERVER_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then(async (data) => {
            const planets = data.results;
            console.log(data.results);

            for (let i = 0; i < planets.length; i++) {
                const planetCard = createAndAppendCard('div', 'planet-card', planets[i].name);

                const filmDataPromises = planets[i].films.map(fetchFilmData);
                const filmDataArray = await Promise.all(filmDataPromises);

                const filmListElement = document.createElement('ul');
                filmDataArray.forEach((filmData) => {
                    const filmListItem = createAndAppendCard('li', 'film-data', filmData.title, filmListElement);
                    const showCharactersButton = document.createElement('button');
                    showCharactersButton.textContent = 'Показать персонажей';
                    filmListItem.appendChild(showCharactersButton);
                    
                    filmData.charactersDisplayed = false;
                    showCharactersButton.addEventListener('click', () => {
                        displayCharactersForFilm(filmData, filmListItem, showCharactersButton);
                    });
                });

                planetCard.appendChild(filmListElement);
            }

            resolve();
        })
        .catch((error) => {
            reject(error);
        });
};

const fetchFilmData = async (filmUrl) => {
    const response = await fetch(filmUrl);
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const filmData = await response.json();
    console.log(filmData);
    return {
        title: filmData.title,
        characters: filmData.characters,
    };
};

const fetchCharacterData = async (characterUrl) => {
    const response = await fetch(characterUrl);
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const characterData = await response.json();
    console.log(characterData);
    return {
        name: characterData.name
    };
};

const data = new Promise(callbackFromServer)
    .then(() => {
        console.log('Все рабоатет');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
