function send() {
    number1 = document.getElementById("number1")
    number2 = document.getElementById("number2")
    answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + " x "+ number2 + "</h4>";
    inputanswer ="<br> Answer : <input type='text' id='inputanswer'>";
    checkbtn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question + inputanswer + checkbtn;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}