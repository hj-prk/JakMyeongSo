const surname = '{"kor":"김", "eng":"Kim", "jap":"キム", "schn":"金","tchn":"金"}\n'
+'{"kor":"이", "eng":"Lee", "jap":"イ", "schn":"李", "tchn":"李"}';

const f_first = '{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"", "tchn":"秀", "mean":"Outstanding"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"贤", "tchn":"賢", "mean":"Clever"}';

const f_second = '{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"honest"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净", "mean":"clean"}';


let genderval;

const form = document.getElementById("radioform");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    genderval = document.querySelector('input[name="gender"]:checked').value;
    if (genderval === "female") {
        console.log("Female");
    } else if (genderval === "male") {
        console.log("Male");
    }
});

//console.log(genderval); //test

$(document).ready(function(){
    $.getJSON("letters.json", function(data){
        console.log(data.surname);
        console.log(data); 
    }).fail(function(){
        console.log("An error has occurred.");      
    });
});