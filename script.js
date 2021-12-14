function startGame(){
    for(let i=1;i<10;i++){
        clearBox(i);
    }
    document.turn = 'X';
    
}
function clearBox(a){
    document.getElementById("s"+ a).textContent = "";
}