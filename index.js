
let displayEl= document.getElementById("display-el");
let marks =3;

function marksCalculator(){
    if( marks>=79){
        displayEl.innerHTML=("A")
    }
    else if(marks>=60 && marks<79){
    message=("B")
    }
    else if (marks>=49 && marks<=59){
    message=("C")
}
    else if (marks >=40 && marks <=49){
    message=("D")
    }
    else{
    message=("E")
    }
    displayEl.innerHTML=" "+ message
}
