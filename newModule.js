function doSomething(){
    console.log("**** doSomething called from newModule.js ************")
}


function againDoSomething(){
    console.log("**** againDoSomething called from newModule.js ************")
}

// CRUD - Create, Read, Update, Delete

let arr = [];

function createFun(element){
    arr.push(element);
    return arr;
}

function readFun(){
    return arr;
}

function updateFun(index, element){
    arr[index] = element;
    return arr;
}

function deleteFun(index){
    arr.splice(index, 1);   
    // delete 1 value at given index
    return arr;
}


module.exports = {
    doSomething,
    againDoSomething,
    createFun,
    readFun,
    updateFun,
    deleteFun
};