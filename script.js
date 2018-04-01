let count = 0; 
let interval = 30; 
let changeInterval = 10; 
let running = false; 

let intervalInput; 
let start;
let stop; 
let currentField; 
let countField;

window.onload = () => {
    intervalInput = document.getElementById("intervalInput"); 
    start = document.getElementById("start"); 
    stop = document.getElementById("stop"); 
    intervalField = document.getElementById("interval"); 
    currentField = document.getElementById("current"); 
    countField = document.getElementById("count"); 

    intervalInput.onInput = () => {
        setInterval(); 
    }
    start.onclick = () => {running = true;} 
    stop.onclick = () => {running = false;}

    printToFields([
        { field : intervalField, value : interval}
    ]); 
    run(); 
}

let run = () => {
    let ticks = 0; 
    setInterval(() => {
        if(running){
            ticks += 1;
            printToFields([
                { field: currentField, value: ticks % interval },
                { field: countField, value: count }
            ]); 
            if (ticks % interval === 0) {
                ticks = 0;
                count += 1;
            }
        }
    }, 100)
}


/**
 * [{field : HTMLFIELD, value : VALUETOPRINT}]
 * @param {object} sets 
 */
let printToFields = sets => {
  for (set of sets) {
    set.field.innerHTML = set.value;
  }
};

let setInterval = (event) => {
    interval = event.target.value; 
}