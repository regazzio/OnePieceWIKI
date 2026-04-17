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
    "Tony Tony, Chopper", "Nico, Robin", "Franky", "Brook", "Jinbe",
      // Extras
    "Trafalgar Law",
    "Eustass Kid",
    "Shanks",
    "Marshall D. Teach",
    "Portgas D. Ace",
    "Dracule Mihawk",
    "Boa Hancock",
    "Buggy",
    "Crocodile",
    "Donquixote Doflamingo",
    "Kaido",
    "Charlotte Linlin",
    "Enel",
    "Rob Lucci",
    "Sabo"
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
    "Jinbe": "1.100.000.000",
    "Trafalgar, Law": "3.000.000.000",
    "Eustass, Kid": "3.000.000.000",
    "Shanks": "4.048.900.000",
    "Marshall D., Teach": "3.996.000.000",
    "Portgas D., Ace": "550.000.000",
    "Dracule, Mihawk": "3.590.000.000",
    "Boa, Hancock": "1.659.000.000",
    "Buggy": "3.189.000.000",
    "Crocodile": "1.965.000.000",
    "Donquixote, Doflamingo": "340.000.000",
    "Kaidou": "4.611.100.000",
    "Charlotte, Linlin": "4.388.000.000",
    "Enel": "500.000.000",
    "Rob, Lucci": "2.000.000.000",
    "Sabo": "602.000.000"
};

const fruits = {
    "Monkey D., Luffy": "Gomu Gomu no Mi (Hito Hito no Mi: Modelo Nika)",
    "Tony Tony, Chopper": "Hito Hito no Mi",
    "Nico, Robin": "Hana Hana no Mi",
    "Brook": "Yomi Yomi no Mi",
    "Trafalgar, Law": "Ope Ope no Mi",
    "Eustass, Kid": "Jiki Jiki no Mi",
    "Marshall D., Teach": "Yami Yami no Mi / Gura Gura no Mi",
    "Portgas D., Ace": "Mera Mera no Mi",
    "Boa, Hancock": "Mero Mero no Mi",
    "Buggy": "Bara Bara no Mi",
    "Crocodile": "Suna Suna no Mi",
    "Donquixote, Doflamingo": "Ito Ito no Mi",
    "Kaidou": "Uo Uo no Mi, Modelo: Seiryu",
    "Charlotte, Linlin": "Soru Soru no Mi",
    "Enel": "Goro Goro no Mi",
    "Rob Lucci": "Neko Neko no Mi, Modelo: Leopardo",
    "Sabo": "Mera Mera no Mi",
};

const applyFruitColor = (fruit) => {
    charFruit.style.color = "black";
    charFruit.style.textShadow = "none";

    if (fruit.includes("Gomu Gomu")) {
        charFruit.style.color = "purple";

    } else if (fruit.includes("Hito Hito")) {
        charFruit.style.color = "#d73131"
    }
    else if (fruit.includes("Ope Ope")) {
        charFruit.style.color = " red"
    }
    else if (fruit.includes("Mera Mera")) {
        charFruit.style.color = "orange"
        charFruit.style.textShadow = `
            -1px -1px 0 black,
             1px -1px 0 black,
            -1px  1px 0 black,
             1px  1px 0 black
        `;
    }
    else if (fruit.includes("Mero Mero")) {
        charFruit.style.color = "pink"
        charFruit.style.textShadow = `
            -1px -1px 0 black,
             1px -1px 0 black,
            -1px  1px 0 black,
             1px  1px 0 black
        `;
    }
    else if (fruit.includes("Ito Ito")) {
        charFruit.style.color = "white"
        charFruit.style.textShadow = `
            -1px -1px 0 black,
             1px -1px 0 black,
            -1px  1px 0 black,
             1px  1px 0 black
        `;
    }
    
    else if (fruit.includes("Yami Yami")) {
        charFruit.style.color = "purple";
        
    }
    
    else if (fruit.includes("Hana Hana")) {
        charFruit.style.color = "pink";
        charFruit.style.textShadow = `
            -1px -1px 0 black,
             1px -1px 0 black,
            -1px  1px 0 black,
             1px  1px 0 black
        `;

    } else if (fruit.includes("Yomi Yomi")) {
        charFruit.style.color = "orange";
         charFruit.style.textShadow = `
            -1px -1px 0 black,
             1px -1px 0 black,
            -1px  1px 0 black,
             1px  1px 0 black
        `;
    } //
    else if (fruit.includes("Bara Bara")) {
        charFruit.style.color = "#c42700";
        
    }
    else if (fruit.includes("Suna Suna")) {
        charFruit.style.color = "#a0be18";
        
    }
    else if (fruit.includes("Uo Uo")) {
        charFruit.style.color = "#002c7e";
        
    }
    else if (fruit.includes("Soru Soru")) {
        charFruit.style.color = "#66004d";
        
    }
    else if (fruit.includes("Goro Goro")) {
        charFruit.style.color = "yellow";
        
    }
    else if (fruit.includes("Neko Neko")) {
        charFruit.style.color = "#4d3b02";
        charFruit.style.textShadow = `
            -1px -1px 0 black,
             1px -1px 0 black,
            -1px  1px 0 black,
             1px  1px 0 black
        `;
    }
};

const fetchCharacters = async () => {
    try {
        const response = await fetch('https://api.jikan.moe/v4/anime/21/characters');
        const json = await response.json();
        
    
        charactersList = json.data.sort((a, b) => 
            a.character.name.localeCompare(b.character.name)
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
        
       charBounty.innerHTML = bounties[name] 
    ? `฿ ${bounties[name]}` 
    : "Não informado";
        
    const fruit = fruits[name] 
    ? fruits[name] 
    : "Desconhecida";
        charFruit.innerHTML = fruit;

        applyFruitColor(fruit);
        
        inputSearch.value = '';
    }
};

// BOTÕES
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

    const foundIndex = charactersList.findIndex(item =>
        item.character.name.toLowerCase().includes(searchTerm)
    );

    if (foundIndex !== -1) {
        currentIndex = foundIndex;
        renderCharacter(currentIndex);
    } else {
    
        charName.innerHTML = " NÃO ENCONTRADO ";
        charRole.innerHTML = "Personagem não está no bando";
        charBounty.innerHTML = "RECOMPENSA: -";
        charFruit.innerHTML = "AKUMA NO MI: -";
        charImage.src = "";
    }
});

fetchCharacters();