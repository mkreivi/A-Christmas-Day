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
 * Spelaren får välja mellan två val, 'Köket' eller 'Vardagsrummet', för att gå vidare.
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

    button1.onclick = kitchen;
    button2.onclick = livingRoom;

}

/**
 * Spelaren får två nya val, 'titta på köksluckor' eller 'titta på kyl och frys', för att gå vidare.
 */
function snowMan() {
    text1.textContent = "I köket";
    text2.textContent = "Vad vill du titta på?";
    button1.textContent = "Köksluckor";
    button2.textContent = "Kyl och frys";

    button1.onclick = luckor;
    button2.onclick = kylFrys; 
}

/**
 * Spelaren får två nya val, 'gå till vardagsrummet' eller 'titta på kyl och frys', för att gå vidare.
 */
function luckor() {
    text1.textContent = "Köksluckor"
    text2.textContent = "Inredningen är ju superfin! Vad vill göra nu?"
    button1.textContent = "Till vardagsrummet"
    button2.textContent = " Titta på kyl och frys"

    button1.onclick = livingRoom;
    button2.onclick = kylFrys; 
}

/**
 * Spelaren får två nya val, 'gå upp för trappan' eller 'titta i badrummet', för att gå vidare.
 */
function kylFrys() {
    text1.textContent = "Kyl och frys"
    text2.textContent = "Perfekt, här får det plats mycket. "
    button1.textContent = "Trappan upp"
    button2.textContent = "Badrummet"

    button1.onclick = stairs;
    button2.onclick = bathroom;
}

/**
 * Spelaren får två nya val, 'ta trappan till annan våning' eller 'gå till köket', för att gå vidare.
 */
function bathroom() {
    text1.textContent = "Badrummet"
    text2.textContent = "Tänk att få krypa ner i det badkaret efter en kall vinterdag. Vad ska vi göra nu?"
    button1.textContent = "Sovrummen"
    button2.textContent = "Köket igen"

    button1.onclick = bedroom;
    button2.onclick = kitchen;
}

/**
 * Spelaren får två nya val, 'titta i sovrummen' eller 'titta i badrummet', för att gå vidare.
 */
function stairs() {
    text1.textContent = "Trappan upp"
    text2.textContent = "Du kommer upp till övervåningen, vart vill du kika först?"
    button1.textContent = "Sovrummen"
    button2.textContent = "Badrummet"

    button1.onclick = bedroom;
    button2.onclick = bathroom;
}

/**
 * Spelaren får två nya val, 'gå upp till övervåningen' eller 'gå tillbaka till hallen', för att gå vidare.
 */
function livingRoom() {
    text1.textContent = "Vardagsrummet"
    text2.textContent = "Oj vad fint, här blir det mycket fredagsmys framöver. Vart går vi nu?"
    button1.textContent = "Övervåningen"
    button2.textContent = "Hallen igen"

    button1.onclick = stairs;
    button2.onclick = loadStartScene; 
}

/**
 * Spelaren får två nya val, 'tillbaka till hallen' eller 'lämna huset', för att gå vidare.
 */
function bedroom() {
    text1.textContent = "Sovrummen"
    text2.textContent = "Här kommer vi sova gott"
    button1.textContent = "Hallen"
    button2.textContent = "Lämna huset"

    button1.onclick = loadStartScene;
    button2.onclick = leaveHouse; 
}

/**
 * Spelaren får två nya val, 'göra om spelet igen' eller 'avsluta', för att gå vidare.
 */
function leaveHouse() {
    text1.textContent = "Tack för titten"
    text2.textContent = "och på återseende!"
    button1.textContent = "Börja om"
    button2.textContent = "Avsluta"

    button1.onclick = loadStartScene;
    button2.onclick = goodbye; 
    
}

/**
 * Spelet avslutas och du välkomnas åter genom ett meddelande.
 */
function goodbye() {
    questionBox3.classList.add("hidden");
    questionBox2.classList.remove("hidden");

    text1.textContent = "Tack för titten "
    text2.textContent = "och på återseende!"
}
