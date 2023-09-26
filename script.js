

class Hero{
    constructor(name, intelligence, strength, speed, durability, power, combat, image){
        this.name = name;
        this.intelligence = intelligence === "null" ? 0 : intelligence;
        this.strength = strength === "null" ? 0 : strength;
        this.speed = speed === "null" ? 0 : speed;
        this.durability = durability === "null" ? 0 : durability;
        this.power = power === "null" ? 0 : power;
        this.combat = combat === "null" ? 0 : combat;
        this.image = image;
        this.total = (parseInt(intelligence) + parseInt(strength) + parseInt(speed) + parseInt(durability) + parseInt(power) + parseInt(combat))/7;
    }
    
    present(){
        return this.name + ': (' + this.intelligence + ')';
    }
}
/*var pontinhossJogador;
var pontosMaquininha;
var cont = 0;
var strenghtS = [];
var cartinhas2 = [];
var cartinhas3 = 0;*/

/*function generateRan(x) {
  /for (var i = 0; i < 3; i++) {
    / strengthS.push(x);
  /}
}*/



let BASE_URL = 'https://superheroapi.com/api.php/';
let API_KEY = '1090721537988942';


function getJSON(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)
    xhr.responseType = 'json';
    xhr.onload = function(){
        let STATUS = xhr.status;
        if(STATUS === 200){
            callback(STATUS, xhr.response);
        } else{
            console.log('Deu ruim: ' + STATUS);
        }
    }
        xhr.send();
}

function getHero(id, hero2){
    let URL = BASE_URL + API_KEY + '/' + id;
    getJSON(URL, function(status, data){
        var hero = new Hero(data.name, data.powerstats.intelligence, data.powerstats.strength, data.powerstats.speed, data.powerstats.durability, data.powerstats.power,data.powerstats.combat, data.image.url);
        document.getElementById('heroes').innerHTML += 
                "<article onclick='getAnotherHero(" + JSON.stringify(hero) + ")'>" + 
                "<img src='" + hero.image + "' />" +
                "<h1>" + hero.name + "</h1>" +
                "<p>Intelligence: </p>   <div style='width: " + hero.intelligence + "%; background-color:#FF0000'></div>" +
                "<p>Strength: </p>       <div style='width: " + hero.strength + "%; background-color:##FF4500'></div>" +
                "<p>Speed: </p>          <div style='width: " + hero.speed + "%; background-color:#4#FFFF00'></div>" +
                "<p>Durability: </p>     <div style='width: " + hero.durability + "%; background-color:	#DC143C'></div>" +
                "<p>Power: </p>          <div style='width: " + hero.power + "%; background-color:#8B008B'></div>" +
                "<p>combat: </p>         <div style='width: " + hero.combat + "%; background-color:#00FF00'></div>" +
                '</article>';
        
        if (hero.total > hero2.total){
            alert(`${hero2.name} vs ${hero.name} -=[!]=-  Nossa que droga, perdeu!`);
            console.log('próximo round');
        }else if (hero.total < hero2.total) {
            alert(`${hero2.name} vs ${hero.name} -=[!]=-  Olha só, ganhou!`);
            console.log('próximo round ##');
        }else {
            alert("Empatou, logo deu B.O!");
        }

            /*strength.push(hero.strength);*/
        
        /*console.log(strengthS);*/
    });
}
/*function meuClick() {
    var pontinhosJogador = strengthS[cont];
    alert('PONTOS: ' + pontinhosJogador);
}

for (var i = 0; i < 3; i++) {
    cont = i;
}*/



window.onload = function(){
    getHero(getRandom(1, 720));
    getHero(getRandom(1, 720));
    getHero(getRandom(1, 720));
}

function getRandom(min, max){
    return Math.floor(Math.random() * max) + min
}

function getAnotherHero(hero2) {
  getHero(getRandom(1, 720), hero2);
}
