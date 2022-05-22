function addUser(){
player1_name=document.getElementById("player1_name_input").value;
Player2_name=document.getElementById("Player2_name_input").value;
localStorage.setItem("player1_name",player1_name);
localStorage.setItem("Player2_name",Player2_name);
window.location="game_page.html";
}

player1_name=localStorage.getItem("player1_name");
Player2_name=localStorage.getItem("Player2_name");

player1_score=0;
Player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("Player2_name").innerHTML=Player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("Player2_score").innerHTML=Player2_score;

document.getElementById("player_question").innerHTML="Turno de preguntar: " + player1_name;
document.getElementById("player_answer").innerHTML="Turno de responder de:" + Player2_name;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    charAt1=word.charAt(1);
    console.log(charAt1);
    length_entre2=Math.floor(word.length/2);
    length_menos1=word.length-1;
    charAt2=word.charAt(lenght_entre2);
    console.log(charAt2);
    chartAt3=word.charAt(length_menos1);
    console.log(chartAt3);
     
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(chartAt3,"_");
    questionword="<h4 id='worddisplay'>"+ remove_charAt3+"</h4>";
    inputbox="<br>respuesta:<input type='text' id='input_checkbox'>";
    checkbuton="<br><br><button class='btn btn-info' onclick='check()'>comprobar</button>";
    row=questionword+inputbox+checkbuton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
questionturn="player1";
answerturn="Player2";

function check(){
    getanswer=document.getElementById("input_checkbox").value;
    answer=getanswer.toLowerCase();
    if(answer==word){
        if(answerturn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            Player2_score=Player2_score+1;
            document.getElementById("Player2_score").innerHTML=Player2_Score;
        }
    }
    if(questionturn=="player1"){
        questionturn="Player2";
        document.getElementById("player_question").innerHTML="turno para pregunar de" + Player2_name;
    }

    else{
        questionturn="player1";
        document.getElementById("player_question").innerHTML="turno para pregunar de" + player1_name;
    }

    if(answerturn=="player1"){
        answerturn="Player2";
        document.getElementById("player_answer").innerHTML="turno para responder de" + Player2_name;
    }

    else{
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="turno para responder de" + player1_name;
    }

    document.getElementById("output").innerHTML="";
}
