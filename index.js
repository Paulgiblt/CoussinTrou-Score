//Declarations Element HTML
//Boutons
const btnHome = document.getElementById("btnHome");
const btnGame = document.getElementById("btnGame");
const btnRules = document.getElementById("btnRules");
const btnNewScoring =document.querySelector(".btnNewScoring");
const btns = document.querySelectorAll(".navButton");
const roundBtns = document.querySelectorAll(".roundButton");
const smallNavBtn = document.querySelector("#btnSmallNav");

const smallBtnHome = document.getElementById("smallBtnHome");
const smallBtnGame = document.getElementById("smallBtnGame");
const smallBtnRules = document.getElementById("smallBtnRules");

const btnValidPopUp = document.querySelector("#btnValidPopUp");
const btnClosePopUp = document.querySelector("#btnClosePopUp");

const btnRestart = document.querySelector("#btnRestart");

//Main
const mainHome = document.querySelector(".home-content");
const mainGame = document.querySelector(".game-content");
const mainRules = document.querySelector(".rules-content");
const contentSmallNav = document.querySelector(".smallBtnNav");

//PopUp 
const popUpContent = document.querySelector(".windowPopup");

//Titles
const pageTitle = document.querySelector(".Page-Title");

//Images
const imgSmallNavBtn = document.querySelector("#imgBtnSmallNav");

console.log(document.getElementById("ScoreJ1").textContent);


//Gestion Boutons Ronds
roundBtns.forEach((buttons)=>{
    buttons.addEventListener('mouseenter',(e) => {
        e.target.style.transform = "scale(0.89)";
    });
    buttons.addEventListener('mouseleave',(e) => {
        e.target.style.transform = "scale(1)";
    });
});

//Gestion Boutons 
btns.forEach((buttons)=>{
    buttons.addEventListener('mouseenter',(e) => {
        e.target.style.transform = "scale(0.89)";
    });
    buttons.addEventListener('mouseleave',(e) => {
        e.target.style.transform = "scale(1)";
    });
});

//Gestion Bouton Home
btnHome.addEventListener('click', () => {
    mainHome.style.visibility="visible";
    mainGame.style.visibility="hidden";
    mainRules.style.visibility="hidden";
    pageTitle.innerHTML = 'Accueil';
});

//Gestion Bouton Game
btnGame.addEventListener('click', () => {
    mainHome.style.visibility="hidden";
    mainGame.style.visibility="visible";
    mainRules.style.visibility="hidden";
    pageTitle.innerHTML = 'Partie';
});

//Gestion Bouton Rules
btnRules.addEventListener('click', () => {
    mainHome.style.visibility="hidden";
    mainGame.style.visibility="hidden";
    mainRules.style.visibility="visible";
    pageTitle.innerHTML = 'Règles';
});

//Gestion Bouton PopUp New Scoring
btnNewScoring.addEventListener('click', () => {
    popUpContent.style.visibility="visible";
});

//Gestion Bouton PopUp Valid
btnValidPopUp.addEventListener('click', () => {
    popUpContent.style.visibility="hidden";
    onClickValid();
});

//Gestion Bouton PopUp Close
btnClosePopUp.addEventListener('click', () => {
    popUpContent.style.visibility="hidden";
});

//Gestion Bouton PopUp Close
btnRestart.addEventListener('click', () =>{
    onClickRestart();
});



//--------------------------------------------Responsive----------------------------------------------
let smallNavClicked = false;

smallNavBtn.addEventListener('click', () => {
smallNavClicked = !smallNavClicked;

if (smallNavClicked === true){
    imgSmallNavBtn.src = "./IMG/ic-down.png";
    contentSmallNav.style.visibility= "visible"; 
}else{
    imgSmallNavBtn.src = "./IMG/ic-up.png";
    contentSmallNav.style.visibility= "hidden";
};});

//Gestion Bouton Home
smallBtnHome.addEventListener('click', () => {
    mainHome.style.visibility="visible";
    mainGame.style.visibility="hidden";
    mainRules.style.visibility="hidden";
    pageTitle.innerHTML = 'Accueil';
    imgSmallNavBtn.src = "./IMG/ic-up.png";
    contentSmallNav.style.visibility= "hidden";
    smallNavClicked = !smallNavClicked;
});

//Gestion Bouton Game
smallBtnGame.addEventListener('click', () => {
    mainHome.style.visibility="hidden";
    mainGame.style.visibility="visible";
    mainRules.style.visibility="hidden";
    pageTitle.innerHTML = 'Partie';
    imgSmallNavBtn.src = "./IMG/ic-up.png";
    contentSmallNav.style.visibility= "hidden";
    smallNavClicked = !smallNavClicked;
});

//Gestion Bouton Rules
smallBtnRules.addEventListener('click', () => {
    mainHome.style.visibility="hidden";
    mainGame.style.visibility="hidden";
    mainRules.style.visibility="visible";
    pageTitle.innerHTML = 'Règles';
    imgSmallNavBtn.src = "./IMG/ic-up.png";
    contentSmallNav.style.visibility= "hidden";
    smallNavClicked = !smallNavClicked;
});




//-----------------------------------------------------------------------------------------------------
//--------------------------------------CODE Calcul Point----------------------------------------------
//-----------------------------------------------------------------------------------------------------

//-----------------Fonctions---------------------------
//Fonction Gestion Avertissement Nombre de Sacs Trop élevé
function getAdvert(ScoringP1,ScoringP2){
    if ((ScoringP1.Hole+ScoringP1.Wood>4) && (ScoringP2.Hole+ScoringP2.Wood>4)){
    AdvertBag = "Attention : Trop de Sacs Joueur 1 et 2!";
    alert(AdvertBag)}
    else if (ScoringP1.Hole+ScoringP1.Wood>4) {
    AdvertBag = "Attention : Trop de Sacs Joueur 1!";
    alert(AdvertBag);
    }else if (ScoringP2.Hole+ScoringP2.Wood>4) {
    AdvertBag = "Attention : Trop de Sacs Joueur 2!";
    alert(AdvertBag);   
    }else{
    AdvertBag = "";
    }
    return AdvertBag;
    }

//Fonction Score de La Mène par Joueur 
function getSousScore(ScoringP1,ScoringP2){
    if (((ScoringP1.Hole*3)+ScoringP1.Wood)>((ScoringP2.Hole*3)+ScoringP2.Wood)){
        var SousScoreP = ((ScoringP1.Hole*3)+ScoringP1.Wood)-((ScoringP2.Hole*3)+ScoringP2.Wood);
    }else{
        var SousScoreP = 0;
    }
    return SousScoreP;
}

function onClickValid(){
    //--------------------Recuperation des Variables----------------------------
//Déclarations
var ScoringJ1 = {
    Hole:0,
    Wood:0
};
var ScoringJ2 = {
    Hole:0,
    Wood:0
};

//Inputs
ScoringJ1.Hole = parseInt(document.getElementById("ScoringJ1_Hole").value);
ScoringJ1.Wood = parseInt(document.getElementById("ScoringJ1_Wood").value);
ScoringJ2.Hole = parseInt(document.getElementById("ScoringJ2_Hole").value);
ScoringJ2.Wood = parseInt(document.getElementById("ScoringJ2_Wood").value);

    //-----------------------------Calculs--------------------------------------
// Avertissement si Sacs trop nombreux
console.log("Score J1 : " + ScoringJ1);
console.log("Score J2 : " + ScoringJ2);
console.log("Nombre de Sacs J1 : " + (ScoringJ1.Hole+ScoringJ1.Wood));
console.log("Nombre de Sacs J2 : " + (ScoringJ2.Hole+ScoringJ2.Wood));
var Advert = getAdvert(ScoringJ1,ScoringJ2);
console.log("Avertissement Sacs" + Advert);
//document.getElementById("Advert").innerHTML = Advert;
if (Advert === ""){

//Sous Score 
var SousScoreJ1 = 0;
var SousScoreJ2 = 0;

SousScoreJ1 = getSousScore(ScoringJ1,ScoringJ2);
SousScoreJ2 = getSousScore(ScoringJ2,ScoringJ1);

console.log("SousScore J1 : " + SousScoreJ1);
console.log("SousScore J2 : " + SousScoreJ2);

//Score Courant
var CurrentScoreJ1 = parseInt(document.getElementById("ScoreJ1").textContent);
var CurrentScoreJ2 = parseInt(document.getElementById("ScoreJ2").textContent);

CurrentScoreJ1 += parseInt(SousScoreJ1);
CurrentScoreJ2 += parseInt(SousScoreJ2);

console.log("Score J1 :" + CurrentScoreJ1);
console.log("Score J2 :" + CurrentScoreJ2);

document.getElementById("ScoreJ1").textContent = CurrentScoreJ1;
document.getElementById("ScoreJ2").textContent = CurrentScoreJ2;

document.getElementById("ScoringJ1_Hole").value = 0;
document.getElementById("ScoringJ1_Wood").value = 0;
document.getElementById("ScoringJ2_Hole").value = 0;
document.getElementById("ScoringJ2_Wood").value = 0;

//retour valeur "done" pour la fin de la fonction onClickValid
console.log("Fonction OnClickValid done !"); 


return "done";}
else{
    return "done";
}
}

function onClickRestart(){
    //Score Courant
var CurrentScoreJ1 = parseInt(document.getElementById("ScoreJ1").value);
var CurrentScoreJ2 = parseInt(document.getElementById("ScoreJ2").value);

CurrentScoreJ1 = 0;
CurrentScoreJ2 = 0;

console.log("Score J1 :" + CurrentScoreJ1);
console.log("Score J2 :" + CurrentScoreJ2);

document.getElementById("ScoreJ1").textContent = CurrentScoreJ1;
document.getElementById("ScoreJ2").textContent = CurrentScoreJ2;
}