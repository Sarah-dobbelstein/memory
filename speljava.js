// kaarten matches:
// match1 = 1 en 7 --> omdraaien 1 en 2 (funtctie)
// match2 = 2 en 9 --> omdraaien 3 en 4
// match3 = 3 en 11 --> omdraaien 5 en 6
// match4 = 4 en 6 --> omdraaien 7 en 8
// match5 = 5 en 10 --> omdraaien 9 en 10
// match6 = 8 en 12 --> omdraaien 11 en 12
// bron voor de memory plaatjes:
// https://i.pinimg.com/originals/dd/a4/48/dda4486a25ae8ec4608a43d6def171c1.jpg 

//omdraaien van kaart 1, match met kaart 7
let plaatje1 = document.querySelector('#kaart1');
let huidigplaatje = '';
 
function omdraaien1(){
    plaatje1.src = 'images/aarbei.png';
    huidigplaatje = ['aardbei', plaatje1];
    verhoogzetten();
}
 
plaatje1.addEventListener('click', omdraaien1);


//omdraaien van kaart 7, match met kaart 1
let plaatje7 = document.querySelector('#kaart7');
 
function omdraaien2(){
    plaatje7.src = 'images/aarbei.png';
    huidigplaatje = ['aardbei', plaatje7];
    verhoogzetten();
}
 
plaatje7.addEventListener('click', omdraaien2);

//omdraaien van kaart 2, match met kaart 9
let plaatje2 = document.querySelector('#kaart2');
 
function omdraaien3(){
    plaatje2.src = 'images/appel.png';
    huidigplaatje = ['appel', plaatje2];
    verhoogzetten();
}
 
plaatje2.addEventListener('click', omdraaien3);

//omdraaien van kaart 9, match met kaart 2
let plaatje9 = document.querySelector('#kaart9');
 
function omdraaien4(){
    plaatje9.src = 'images/appel.png';
    huidigplaatje = ['appel', plaatje9];
    verhoogzetten();
}

 
plaatje9.addEventListener('click', omdraaien4);

//omdraaien van kaart 3, match met kaart 11 
let plaatje3 = document.querySelector('#kaart3');
 
function omdraaien5(){
    plaatje3.src = 'images/banaan.png';
    huidigplaatje = ['banaan', plaatje3];
    verhoogzetten();
}


 
plaatje3.addEventListener('click', omdraaien5);
 
//omdraaien van kaart 11, match met kaart 3 
let plaatje11 = document.querySelector('#kaart11');
 
function omdraaien6(){
    plaatje11.src = 'images/banaan.png';
    huidigplaatje = ['banaan', plaatje11];
    verhoogzetten();
}
 
plaatje11.addEventListener('click', omdraaien6);

//omdraaien van kaart 4, match met kaart 6 
let plaatje4 = document.querySelector('#kaart4');
 
function omdraaien7(){
    plaatje4.src = 'images/kiwi.png';
    huidigplaatje = ['kiwi', plaatje4];
    verhoogzetten();
}
 
plaatje4.addEventListener('click', omdraaien7);

//omdraaien van kaart 4, match met kaart 6 
let plaatje6 = document.querySelector('#kaart6');
 
function omdraaien8(){
    plaatje6.src = 'images/kiwi.png';
    huidigplaatje = ['kiwi', plaatje6];
    verhoogzetten();
}
 
plaatje6.addEventListener('click', omdraaien8);

//omdraaien van kaart 5, match met kaart 10  
let plaatje5 = document.querySelector('#kaart5');
 
function omdraaien9(){
    plaatje5.src = 'images/meloen.png';
    huidigplaatje = ['meloen', plaatje5];
    verhoogzetten();
}
 
plaatje5.addEventListener('click', omdraaien9);

//omdraaien van kaart 10, match met kaart 5  
let plaatje10 = document.querySelector('#kaart10');
 
function omdraaien10(){
    plaatje10.src = 'images/meloen.png';
    huidigplaatje = ['meloen', plaatje10];
    verhoogzetten();
}
 
plaatje10.addEventListener('click', omdraaien10);

//omdraaien van kaart 8, match met kaart 12  
let plaatje8 = document.querySelector('#kaart8');
 
function omdraaien11(){
    plaatje8.src = 'images/peer.png';
    huidigplaatje = ['peer', plaatje8];
    verhoogzetten();
}
 
plaatje8.addEventListener('click', omdraaien11);

//omdraaien van kaart 12, match met kaart 8  
let plaatje12 = document.querySelector('#kaart12');
 
function omdraaien12(){
    plaatje12.src = 'images/peer.png';
    huidigplaatje = ['peer', plaatje12];
    verhoogzetten();
}
 
plaatje12.addEventListener('click', omdraaien12);

//SCOREBOARD
// samen met klasgenoot Sandra gedaan
// kleur voor scorebord 
// score bord heeft een id van scorebord, zo wordt het scorebord geselecteerd
var scorebord = document.getElementById('scorebord');
scorebord.style.backgroundColor = "#EB53B6";
// een border voor het scorebord
scorebord.style.border = "10px solid white";
//timer optellen voor het spel
let seconden = 0;
const aantaltijdveld = document.querySelector('#aantaltijdveld');
let timer = setInterval(countsecondsup, 1000);

 // functie voor het bijhouden van tijd
 function countsecondsup() {
    if(seconden=>0){
        seconden++;
        aantaltijdveld.textContent = seconden;
    }
    else {

    }  
}
countsecondsup();

// bijhouden aantal gevonden paren
let aantalmatches = 0;
const aantalmatchesveld = document.querySelector('#aantalmatchesveld');

 // functie voor het bijhouden van aantal matches
function verhoogmatches() {
    aantalmatches++;
    aantalmatchesveld.textContent = aantalmatches;
    // de inhoud van het veld wordt +1 vervangen   
}

// als je op de button klikt dan wordt de pagina opnieuw geladen
let resetbutton = document.querySelector('#reset');
resetbutton.addEventListener('click', function(){
    window.location.reload();
}
 );

// function askname(name) {
//     console.log('Goed gedaan' + name );
// }

// askname(sarah);

let aantalzetten =0;
const aantalzettenveld = document.querySelector('#aantalzettenveld');

// omgedraaide kaarten bijhouden
let kaarten = [ ];
//let kaartachterkant = [1,2];


function verhoogzetten() {  
    aantalzetten++;
    // de inhoud van het veld wordt +1 en vervangen 
    aantalzettenveld.textContent = aantalzetten;
     
    // als het een even aantal zetten is dus deelbaar door 2 met rest 0, contorleer match 
    if(aantalzetten%2 === 0){
        kaarten[1] = huidigplaatje;
        controleerMatch();
    }
    else{
        kaarten[0] = huidigplaatje;
    }
}


// functie voor matches controleren
function controleerMatch() {
    // controleren of er twee kaarten omgedraaid zijn, er wordt gecontroleerd of het aantal omgedraaide kaarten precies gelijk is aan 2
        // controleren of de twee kaarten dezelfde image hebben
        if (kaarten[0][0] === kaarten[1][0]) {
            //audio komt van, https://pixabay.com/nl/sound-effects/search/point/
            const audio = document.querySelector('#audiomatch');
            audio.play();
            // ze komen overeen, dus het is een match, dus +1
            verhoogmatches();
            // array voor aantal omgedraaide kaarten resetten
            kaarten = [];
            // controleer of alle matches zijn gevonden
            if (aantalmatches === 6) {
                alert("Yess, je hebt alle matches gevonden!");
               
                clearTimeout(timer);
                
                function disco(){
                // array met de mogelijke verschillende kleuren
                var kleuren = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF', '#6F00FF', '#7F00FF'];
                //er wordt een index gegenereerd om willekeurig een kleur gekozen
                var kleurkiezen = Math.floor(Math.random() * kleuren.length);
                //er wordt een random kleur gekozen
                var randomkleur = kleuren[kleurkiezen];
                //de achtergrondkeur word aangepast
                scorebord.style.backgroundColor = randomkleur;
                }

                // veranderde kleur elke seconde
                setInterval(disco, 100);
            }
        } else {
            setTimeout(function() {
                // als de kaarten niet overeen komen dan moeten de kaarten weer dichtklappen
                // je checkt voor elk item in de lijst (van de ongedraaide kaarten) 
                kaarten.forEach( (kaart) => kaart[1].src = 'images/kaart.png');
                 //doet het ik krijg de melding
                // array voor aantal omgedraaide kaarten resetten
                const audio = document.querySelector('#audiogeenmatch');
                audio.play();
                kaarten = [];
            }, 1000); // wacht 1 seconde met omdraaien van de kaarten
        }
}




