function myPow(){
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);
    let response = 1;
    for (let i = 0; i<second; i++){
        response = response * first;
    }
    document.getElementById("output").innerHTML=`<h3>${response}<h3>`;
}

function myAdd(){
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);
    let response = first + second;
    document.getElementById("output").innerHTML=`<h3>${response}<h3>`;
}

function mySub(){
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);
    let response = first - second;
    document.getElementById("output").innerHTML=`<h3>${response}<h3>`;
}

function myDiv(){
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);
    let response = first / second;
    document.getElementById("output").innerHTML=`<h3>${response}<h3>`;
}

function myMul(){
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);
    let response = first * second;
    document.getElementById("output").innerHTML=`<h3>${response}<h3>`;
}
