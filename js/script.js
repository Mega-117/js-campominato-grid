

//dichiaro variabili per il select il btn e il container della griglia
const selectLivelloDifficolta = document.getElementById("game-level");
const btnStartGame = document.getElementById("btn-start-game");
const gridContainer = document.querySelector(".grid-container");

// metto in ascolto il pulsante
btnStartGame.addEventListener("click", function () {
    //   creo variabile che legge il valore della select
    levelGame = selectLivelloDifficolta.value;
    console.log("livello " + levelGame);

    let numeroCelle = cellNumberGeneretor(levelGame);
    console.log("numero celle " + numeroCelle);

    gridGenerator(numeroCelle);

});


//creo la funzione per generare il numero delle celle

function cellNumberGeneretor(level) {
    let cellNumber;

    switch (parseInt(level)) {
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

    gridContainer.innerHTML = "";

    const cellPerRiga = Math.sqrt(numCell);
    console.log(cellPerRiga);
    const cellSize = 100 / cellPerRiga;
    console.log(cellSize + "%");

    //creo cilclo per generare le celle

    for (i = 0; i < numCell; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize + "%";
        cell.style.height = cellSize + "%";
        console.log(cell.style.width);
        gridContainer.append(cell);
    }
}
