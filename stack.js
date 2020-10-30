function sum(a,b) {
    return a + b;
}
module.exports = {sum, createStack,push,createQueue,isEmpty, pop};


// Stacks

function createStack(){
    return [];
}

function push(element,s){
    s.push(element);
    return s;
}

function pop(s){
    return s.pop();
}

function createQueue(){
    return [];
}

function isEmpty(q){
    if( q.length === 0){
        return true;
    }    
    else {
        return false;
    }
}

function enqueue(element,q){
    q.push(element)
}

function dequeu(q){
    return q[0]
}