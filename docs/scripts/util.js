//REFACTOR: Dependecy on .elem is redundant as .id is 
//present already. 


/**
 * assigns listener of type specified 
 * requires element representation in pairs to have 
 * .listeners with {event, action}. for example: 
 * {event : "onclick", action: handleClick}
 * @param {"object"} pairs must have .listeners as [{event, action},..]
 */
let assignListeners = (pairs) => {
    for(pair in pairs){

        //makes code further down more readable IMO
        let model = pairs[pair]; 
        let elem = pairs[pair].elem; 
        let listeners = model.listeners;
        
        if(!listeners) {
            throw "no listeners{} on " + pair; 
        }
        else {
            //add listener to element, one at a time 
            for(listener of listeners){
                elem.addEventListener(listener.event, listener.action);
            }
        }
    }
}


/**
 * assigns .var to .id 
 * @param pairs {"object"} [{var : variable, id : htmlId},..]
 */
let assignItemsToId = (pairs) => {
    //for(pair of pairs){ //causes "not iterable"-error
    for(pair in pairs) { 
                    //document.getElem....
        pairs[pair].elem = get(pairs[pair].id);
    }
}

/**
 * Prints .value set to innerHTML of .id 
 * [{value : "printMe", id : "toMe"}, ..]
 * @param pairs Array with objects with .value and .id 
 */
let printValueToId = (pairs) => {
    for(pair in pairs){
        get(pairs[pair].id).innerHTML = pairs[pair].value; 
    }
}

/**
 * shorthand for document.getElementById
 * throwing error if element is not found 
 * @param {"string"} id The id of the eleement 
 */
let get = (id) => {
    let elem = document.getElementById(id); 
    if(!elem){
        throw "From get(): invalid id: " + id; 
    } 
    return elem; 
} 

/**
 * updates/assigns .value of object
 * @param object to update 
 * @param value update to 
 */
let updateValue = (object, value) => {
    object.value = value; 
}
