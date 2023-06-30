player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

questionTurn = "player1";
answerTurn = "player2";

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in LowerCase = " + word);

    charAt1 =word.charAt1(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);

    length_minus_1 = word.lenght - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log (charAt3);

    remove_charAt1 = word.replce(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById.getElementById("word").value = "";
}
function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("responda em caixa baixa - " + answer);
    if(answer == word)
    {
        if(answerTurn == "player1")
        {
        player1Score = player1Score +1;
        document.getElementById("player1Score").innerHTML = player1Score;
        }
        else
        {
            player2Score = player1Score +1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
        if(questionTurn == "player1")
        {
            questionTurn = "player2"
            document.getElementById("playerQuestion").innerHTML = "turno de pergunta: " + player2Name ;
        }
        else
        {
            questionTurn = "player1"
            document.getElementById("playerQuestion").innerHTML = "turno de pergunta: " + player1Name ;
        }
        if(answerTurn == "player1")
        {
            answerTurn = "player2"
            document.getElementById("playerAswer").innerHTML = "turno de resposta: " + player2Name ;
        }
        else
        {
            answerTurn = "player1"
            document.getElementById("playerAswer").innerHTML = "turno de resposta: " + player1Name ;
        }
        document.getElementById("output").innerHTML = "";
    }
}