const surname = '{"kor":"김", "eng":"Kim", "jap":"キム", "schn":"金","tchn":"金"}\n'
+'{"kor":"이", "eng":"Lee", "jap":"イ", "schn":"李", "tchn":"李"}';

const f_first = '{"kor":"수", "eng":"Soo", "jap":"ス", "schn":"", "tchn":"秀", "mean":"Outstanding"}\n'
+'{"kor":"현", "eng":"Hyun", "jap":"ヒョン", "schn":"贤", "tchn":"賢", "mean":"Clever"}';

const f_second = '{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"honest"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净", "mean":"clean"}';

const m_first = '{"kor":"석", "eng":"Seok", "jap":"ソク", "schn":"石", "tchn":"石", "mean":"Stone"}\n'
+'{"kor":"정", "eng":"Jeong",  "jap":"ジョン", "schn":"淨", "tchn":"净", "mean":"Clean"}';

const m_second = '{"kor":"주", "eng":Joo", "jap":"ジュ", "schn":"柱", "tchn":"柱", "mean":"pillar"}\n'
+'{"kor":"진", "eng":"Jin", "jap":"ジン", "schn":"真", "tchn":"眞", "mean":"honest"}';



let surLines = surname.split("\n");
let ffLines = f_first.split("\n");
let fsLines = f_second.split("\n");
let mfLines = m_first.split("\n");
let msLines = m_second.split("\n");

//var obj = JSON.parse(surLines[0]);
//console.log(obj.kor);

const surLength = surLines.length;
const ffLength = ffLines.length;
const fsLength = fsLines.length;
const mfLength = mfLines.length;
const msLength = msLines.length;

let firstLetter="null";
let secondLetter="null";
let surnameMade="null";

var standard = false;


    let randSurNum = Math.floor(Math.random()*(surLength-0)+0);
    let randFfNum = Math.floor(Math.random()*(ffLength-0)+0);
    let randFsNum = Math.floor(Math.random()*(fsLength-0)+0);
    let randMfNum = Math.floor(Math.random()*(mfLength-0)+0);
    let randMsNum = Math.floor(Math.random()*(msLength-0)+0);

    let genderval;

    surnameMade = JSON.parse(surLines[randSurNum]);

    const form = document.getElementById("radioform");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        genderval = document.querySelector('input[name="gender"]:checked').value;

        while(!standard) {
            if (genderval === "female") {
                console.log("Female");
                firstLetter = JSON.parse(ffLines[randFfNum]);
                secondLetter = JSON.parse(fsLines[randFsNum]);
            } else {
                console.log("Male");
                firstLetter = JSON.parse(mfLines[randMfNum]);
                secondLetter = JSON.parse(msLines[randMsNum]);
            }

            if(surnameMade.eng != firstLetter.eng && surnameMade != secondLetter && firstLetter != secondLetter) {
                standard = true;
            } else {
                standard = false;
            }
            var engName = surnameMade.eng + " " + firstLetter.eng + " " + secondLetter.eng;
            console.log(engName);
        }
    });
    





/*
Later to be used to use data from seperate .json file for further enhancement.

$(document).ready(function(){
    $.getJSON("letters.json", function(data){
        console.log(data.surname);
        console.log(data); 
    }).fail(function(){
        console.log("An error has occurred.");      
    });
});
*/


