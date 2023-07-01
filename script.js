const surnameloc = "/json files/surname.json";
const f_firstloc = "/json files/f_first.json";
const f_secondloc = "/json files/f_second.json";

const ran1 = "0";
const ran2 = "0";
const ran3 = "0";

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

console.log(genderval); //test

