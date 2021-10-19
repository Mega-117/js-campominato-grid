

//dichiaro variabili per il select il btn e il container della griglia
const selectLivelloDifficolta = document.getElementById("game-level");
const btnStartGame = document.getElementById("btn-start-game");
const gridContainer = document.querySelector(".grid-container");

// metto in ascolto il pulsante
btnStartGame.addEventListener("click", function () {
    //   creo variabile che legge il valore della select
    levelGame = selectLivelloDifficolta.value;
    console.log("livello " + levelGame);
    // al click una funzione mi crea in numero di celle da creare in base al livello del gioco
    let numeroCelle = cellNumberGeneretor(levelGame);
    console.log("numero celle " + numeroCelle);
    //uso una funzione per creare tante celle quante quelle calcolate nella let usata per calcolare il numero delle celle
    gridGenerator(numeroCelle);

});


//creo la funzione per generare il numero delle celle

function cellNumberGeneretor(level) {
    //creo varibile dove salvare la qunatita di celle
    let cellNumber;
    //asseconda dei lv genero tot celle
    switch (parseInt(level)) {
        //facile valore 1
        case 1:
            cellNumber = 100;
            break;
        case 2:
            cellNumber = 81;
            break;
        case 3:
            cellNumber = 49;
            break;
    }
    return cellNumber;
};

//creo funzione per creare le celle
function gridGenerator(numCell) {
    //imposto la griglia vuota im bodo da resettare se premo più volte il bottone
    gridContainer.innerHTML = "";
    //calcolo quante delle mettere per riga per ottenere un quadato
    const cellPerRiga = Math.sqrt(numCell);
    console.log(cellPerRiga);
    //calcolo le dimensioni di un quadrato
    const cellSize = 100 / cellPerRiga;
    console.log(cellSize + "%");

    //creo cilclo per generare le celle

    for (i = 0; i < numCell; i++) {
        //creo cella e assegno le dimensioni
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize + "%";
        cell.style.height = cellSize + "%";


        //inserisco la cella nel html
        gridContainer.append(cell);

        //inserisco i numeri
        cellContent = [i + 1];
        cell.innerHTML += cellContent;
        console.log(cell);

        //metto in ascolto la cella
        //al click applica la funzione che toglie e mette la classe per il bg
        cell.addEventListener("click", bgClick);
    }
}
//funzione per il clik sulle celle
function bgClick() {
    this.classList.toggle("bg-click");
}