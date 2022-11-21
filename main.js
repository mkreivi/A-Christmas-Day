window.addEventListener("DOMContentLoaded", main);


let text1;
let text2;
let text3;
let text4;
let button1;
let button2;
let button3;
let questionBox1;
let questionBox2;


function main() {
    setAllConstants();
    loadFirstBoxWithInput();
}

/**
 * Här grupperas alla återkommande element för att inte behöva 
 * upprepas i varje scen/funtion.
 */
function setAllConstants(){
     text1 = document.getElementById("text1");
     text2 = document.getElementById("text2");
     text3 = document.getElementById("text3");
     text4 = document.getElementById("text4");
     button1 = document.getElementById("button1");
     button2 = document.getElementById("button2");
     button3 = document.getElementById("button3");
     questionBox1 = document.querySelector(".questionBox1");
     questionBox2 = document.querySelector(".questionBox2");
     inputYourName = document.getElementById("inputYourName").value;

}

/**
 * Välkomnar spelaren och låter denne skriva in sitt namn. Om spelaren inte vill
 * skriva in sitt namn kommer inget namn att visas.
 */
function loadFirstBoxWithInput() {
    setAllConstants();
    inputYourName = document.getElementById("inputYourName").value;
    questionBox1.classList.add("hidden");
    

    text3.textContent = "Välkommen";
    text4.textContent = "Vad heter du?";
    
    inputYourName = document.getElementById("inputYourName");
    button3.textContent = "Välkommen";
    button3.onclick = loadStartScene;
    playerName = inputYourName.value;

    button3.onclick = function() {
        playerName = inputYourName.value
        loadStartScene();
        console.log("Hello", inputYourName);
        }

}

/**
 * Spelaren får välja mellan två val, 'Bygga en snögubbe' eller 'Åka pulka', för att gå vidare.
 */
function loadStartScene(){
    setAllConstants();
    questionBox2.classList.add("hidden");
    questionBox1.classList.remove("hidden")

    console.log("loadstart")
    text1.textContent = "En snöig dag i december"
    text2.textContent = "Välkommen " + playerName + "! Det är lördag morgon i december och när du vaknar ser du att det snöat massor medans du sov! Vad vill du göra?"
    button1.textContent = "Bygga en snögubbe"
    button2.textContent = "Åka pulka"

    button1.onclick = snowMan;
    button2.onclick = slide;

}

/**
 * Spelaren får två nya val, 'titta på köksluckor' eller 'titta på kyl och frys', för att gå vidare.
 */
function snowMan() {
    text1.textContent = "Snögubbe";
    text2.textContent = "Du hoppar glatt i vinterkläderna och springer ut och börjar forma stora snöbollar!";
    button1.textContent = "Snöänglar";
    button2.textContent = "Snölykta";

    button1.onclick = snowAngel;
    button2.onclick = snowBallLights;
}

/**
 * Spelaren får två nya val, 'gå till vardagsrummet' eller 'titta på kyl och frys', för att gå vidare.
 */
function snowAngel() {
    text1.textContent = "Snöänglar"
    text2.textContent = "Du slänger dig på marken och flaxar med armar och ben. Åh vad kul med snö! Men nu börjar det bli kallt, när vi kommer in vill du.."
    button1.textContent = "Dricka varm choklad"
    button2.textContent = " Titta på julfilm"

    button1.onclick = hotChoclate;
    button2.onclick = movie;
}

/**
 * Spelaren får två nya val, 'gå upp för trappan' eller 'titta i badrummet', för att gå vidare.
 */
function slide() {
    text1.textContent = "Åka pulka"
    text2.textContent = "Weeeii vad det går! Vad vill du göra nu " + playerName + "?"
    button1.textContent = "Snöängel"
    button2.textContent = "Snölykta"

    button1.onclick = snowAngel;
    button2.onclick = snowBallLights;
}

/**
 * Spelaren får två nya val, 'ta trappan till annan våning' eller 'gå till köket', för att gå vidare.
 */
function snowBallLights() {
    text1.textContent = "Snölykta"
    text2.textContent = "Du rullar 20 små snöbollar och bygger ihop dem till en lykta! Men nu börjar det bli kallt..Vad vill du göra när du kommer in?"
    button1.textContent = "Dricka varmchoklad"
    button2.textContent = "Titta på julfilm"

    button1.onclick = hotChoclate;
    button2.onclick = movie;
}

/**
 * Spelaren får två nya val, 'titta i sovrummen' eller 'titta i badrummet', för att gå vidare.
 */
function hotChoclate() {
    text1.textContent = "Dricka varm choklad"
    text2.textContent = "Du kokar upp mölk, oboy och en liten nypa vaniljsocker i. MUMS!"
    button1.textContent = "Filmdags"
    button2.textContent = "Sova"

    button1.onclick = movie;
    button2.onclick = endGame2;
}

/**
 * Spelaren får två nya val, 'gå upp till övervåningen' eller 'gå tillbaka till hallen', för att gå vidare.
 */
function movie() {
    text1.textContent = "Titta på julfilm"
    text2.textContent = "Vilken är din favorit film på jul " + playerName + "?"
    button1.textContent = "Tomten är far till alla barnen!"
    button2.textContent = "Ensam hemma 1, 2, 3 och 4!"

    button1.onclick = endGame; //
    button2.onclick = endGame; //
}



/**
 * Spelaren får två nya val, 'göra om spelet igen' eller 'avsluta', för att gå vidare.
 */
function endGame() {
    text1.textContent = "Alla filmerna är ju faktiskt bra så lika bra att se alla i ett streck!"
    text2.textContent = "Vad vill du göra nu?"
    button1.textContent = "Börja om"
    button2.textContent = "Avsluta"

    button1.onclick = loadStartScene;
    button2.onclick = goodbye;
    
}
function endGame2() {
    text1.textContent = "Vilken mysig dag det blev " + playerName + "!"
    text2.textContent = "Vad vill du göra nu?"
    button1.textContent = "Börja om"
    button2.textContent = "Avsluta"

    button1.onclick = loadStartScene;
    button2.onclick = goodbye;
    
}
function goodbye() {
    text1.textContent = "Tack för idag " + playerName + ""
    text2.textContent = "och en riktigt God Jul till dig !"

    
}