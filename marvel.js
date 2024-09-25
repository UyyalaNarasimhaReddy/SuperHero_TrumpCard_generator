var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);



const SUPERHERO_TOKEN = '1518470878982022';

const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById('newHeroButton');

const heroImageDiv = document.getElementById('heroImage');

const searchButton = document.getElementById('searchButton');

const searchInput = document.getElementById('searchInput');







const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      const superHero = json
      
      showHeroInfo(superHero); 
      console.log(json);
    })
};

const getSearchSuperHero = (name) => {
  console.log(searchInput.value)

  fetch(`${BASE_URL}/search/${name}`)
    .then(res => res.json())
    .then(json => {
      const hero = json.results[0]
      console.log(hero);
      console.log(json);
      
      showHeroInfo(hero) ;
    })
};



const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
};

newHeroButton.onclick = () => getSuperHero(randomHero());

searchButton.onclick = () => getSearchSuperHero(searchInput.value);


const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`

  const img = `<img src="${character.image.url}" height=200 width=200/>`
  
  heroImageDiv.innerHTML = `
                            <div class="hero-detail">
                            ${name}
                            ${img}
                            <p class="tec">🧠 <span>intelligence</span>: ${character.powerstats.intelligence}</p>
                            <p class="tec">💪 <span>strength</span>: ${character.powerstats.strength}</p>
                            <p class="tec">⚡ <span>speed</span>: ${character.powerstats.speed}</p>
                            <p class="tec">🏋️‍♂️ <span>durability</span>: ${character.powerstats.durability}</p>
                            <p class="tec">📊 <span>power</span>: ${character.powerstats.power}</p>
                            <p class="tec">⚔️ <span>combat</span>: ${character.powerstats.combat}</p>
                            <div/>

                            `
};








 