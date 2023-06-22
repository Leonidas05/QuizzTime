function Home(){
    window.location.href = "Quizz.html";
}
function On(){
    var text = document.getElementById('BInicio');
    text.style.backgroundColor = "#00FF00";
    text.style.cursor = "pointer";
}
function Off(){
    var text = document.getElementById('BInicio');
    text.style.backgroundColor = "";
    text.style.cursor = "";
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var score = urlParams.get('score');
    var total = urlParams.get('total');
    
    var resultadoElement = document.getElementById('p2');
    resultadoElement.textContent = 'Has obtenido un puntaje de: ' + score + '/' + total;
};