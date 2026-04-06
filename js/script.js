const charName = document.querySelector('.char_name');
const charRole = document.querySelector('.char_role');
const charImage = document.querySelector('.char_image');
const charBounty = document.querySelector('.char_bounty span');
const charFruit = document.querySelector('.char_fruit span'); 
const searchForm = document.querySelector('.search-form');
const inputSearch = document.querySelector('.input_search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let charactersList = [];
let currentIndex = 0;

const strawHatsNames = [
    "Monkey D., Luffy", "Roronoa, Zoro", "Nami", "Usopp", "Sanji", 
    "Tony Tony, Chopper", "Nico, Robin", "Franky", "Brook", "Jinbe"
];

const bounties = {
    "Monkey D., Luffy": "3.000.000.000",
    "Roronoa, Zoro": "1.111.000.000",
    "Nami": "366.000.000",
    "Usopp": "500.000.000",
    "Sanji": "1.032.000.000",
    "Tony Tony, Chopper": "1.000",
    "Nico, Robin": "930.000.000",
    "Franky": "394.000.000",
    "Brook": "383.000.000",
    "Jinbe": "1.100.000.000"
};


const fruits = {
    "Monkey D., Luffy": "Gomu Gomu no Mi (Hito Hito no Mi: Modelo Nika)",
    "Tony Tony, Chopper": "Hito Hito no Mi",
    "Nico, Robin": "Hana Hana no Mi",
    "Brook": "Yomi Yomi no Mi"
};

const fetchCharacters = async () => {
    try {
        const response = await fetch('https://api.jikan.moe/v4/anime/21/characters');
        const json = await response.json();
        
        charactersList = json.data.filter(item => 
            strawHatsNames.includes(item.character.name)
        ).sort((a, b) => 
            strawHatsNames.indexOf(a.character.name) - strawHatsNames.indexOf(b.character.name)
        );

        renderCharacter(currentIndex);
    } catch (error) {
        charName.innerHTML = "Erro ao carregar!";
    }
}

const renderCharacter = (index) => {
    const char = charactersList[index];
    
    if (char) {
        const name = char.character.name;
        const displayName = name.includes(',') ? name.split(',').join(' ').trim() : name;
        
        charName.innerHTML = displayName;
        charRole.innerHTML = `Papel: ${char.role}`;
        charImage.src = char.character.images.webp.image_url;
        
        
        charBounty.innerHTML = bounties[name] ? `฿ ${bounties[name]}` : "0";
        
       
        charFruit.innerHTML = fruits[name] ? fruits[name] : "Não possui";
        
        inputSearch.value = '';
    }
}

//botoes
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % charactersList.length;
    renderCharacter(currentIndex);
});

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + charactersList.length) % charactersList.length;
    renderCharacter(currentIndex);
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = inputSearch.value.toLowerCase();
    const foundIndex = charactersList.findIndex(item => item.character.name.toLowerCase().includes(searchTerm));

    if (foundIndex !== -1) {
        currentIndex = foundIndex;
        renderCharacter(currentIndex);
    } else {
        alert("Personagem não encontrado no bando!");
    }
});

fetchCharacters();