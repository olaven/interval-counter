let TICK = 1000; 
let running = false;
let interval = 30;  

//declare buttons
let buttons = { 
    startBtn: {
        elem: null,
        id: "startBtn", 
        listeners: [
            {
                event : "click", 
                action : () => {start();}
            }
        ]
    },
    stopBtn: {
        elem: null,
        id: "stopBtn",
        listeners: [
            {
                event : "click", 
                action : () => {stop();}
            }
        ]
    }
};

//declare outputs
let outputs = {
    currentTimeOutput : {
        elem : null, 
        id : "currentTimeOutput", 
        value : 0, 
        update : () => {
            let current = outputs.currentTimeOutput.value; 
            return (current + 1) % interval; 
        }
    }, 
    countOutput : {
        elem : null, 
        id : "countOutput", 
        value : 0,
        update : () => {
            let current = outputs.countOutput.value; 
            let count = outputs.countOutput.value; 
        }
    }
}


window.onload = () => {
    //initialize buttons 
    assignItemsToId(buttons); 
    //initialize outputs 
    assignItemsToId(outputs); 

    //add listeners to button 
    assignListeners(buttons);

    setInterval(() => {
        app(); 
    }, TICK)
}

/**
 * Main logic of app. 
 * Runs each second (interval in window.onload)
 */
let app = () => {
    //print relevant values to screen 
    printValueToId(outputs); 
    //new value if running 
    if(running){
        updateOutputs(); 
    }
}

/**
 * updates output based on their .update function
 */
let updateOutputs = () => {
    for(output in outputs){
        outputs[output].value = outputs[output].update(); 
    }
}

/**
 * starts counting intervals 
 */
let start = () => {
    running = true; 
}

/**
 * stops counting intervals 
 */
let stop = () => {
    running = false; 
}