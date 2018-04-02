let TICK = 100; 
let running = false;
let interval = 30;  

//declare buttons
let buttons = { 
    button: {
        elem: null,
        id: "button", 
        listeners: [
            {
                event : "click", 
                action : () => {
                    triggerRunning(); 
                }
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
            let current = parseInt(outputs.currentTimeOutput.value); 
            let count = parseInt(outputs.countOutput.value);
            
            if(current >= interval - 1) return count + 1
            else return count; 
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
    }, TICK); 
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
 * starts/stops
 */
let triggerRunning = () => {
    running = !running; 
}
