const body = document.querySelector("body");
const startButton = document.createElement("button");
startButton.innerHTML = "tapToStart";
startButton.id = "startButton";
body.append(startButton);
const op = document.createElement("input");

const qustionBank = [" ما هو اطول نهر بالعالم", "ما هو  ", "uioiuuuiل", 'av']
const option = [{
    option1: "ahmad",
    option2: "النا",
    option3: "الجليايا",
    option4: "البشسي"
},
{
    option1: "الموكلا",
    option2: "mahmoud",
    option3: "mohamad",
    option4: "abd"
},
{
    option1: "ahmad",
    option2: "mahmoud",
    option3: "عبود",
    option4: "abd"
},
{
    option1: "ahmad",
    option2: "mahmoud",
    option3: "no one",
    option4: "abood",
}
];
const answers = ['ahmad', 'abd', 'عبود', 'mahmoud'];
let grade = 0;
let qustion = document.createElement("h1");
const all = document.createElement("div");
body.append(qustion);
console.log(all);
let cont = 0;
let a = 0;
const next = (array) => {
    startButton.remove()
    all.innerHTML=""
    qustion.innerHTML = qustionBank[cont];
    all.append(qustion);
    const op1 = document.createElement("input")
    op1.setAttribute("type", "radio")
    op1.name = "option";
    op1.id = "radio"
    const op2 = document.createElement("input")
    op2.name = "option"
    op2.setAttribute("type", "radio")
    op2.id = "radio"
    const op3 = document.createElement("input")
    op3.setAttribute("type", "radio")
    op3.name = "option";
    op3.id = "radio"
    const op4 = document.createElement("input");
    op4.setAttribute("type", "radio");
    op4.name = "option";
    op4.id = "radio";
    op1.onclick = () => {
        nextButton.name = option1.innerHTML;

    }
    op2.onclick = () => {
        nextButton.name = option2.innerHTML;
    }
    op3.onclick = () => {
        nextButton.name = option3.innerHTML;
    }
    op4.onclick = () => {
        nextButton.name = option4.innerHTML;
    }
    console.log(nextButton.name);
    if (nextButton.name == answers[cont - 1]) {
        console.log(nextButton.name);
        grade = grade + 10;
        console.log(grade);
    }
    if (qustionBank[cont] === undefined) {
        all.style.display = "none"
        const finalGrade = document.createElement("h")
        finalGrade.innerHTML = "your grade is : " + grade + "/100";
        nextButton.remove()

        console.log(finalGrade)
        body.append(finalGrade)
    }
    // if(cont===){
    //     nextButton.innerHTML = "finsh"
    // nextButton.onclick = next
    // body.append(nextButton)
    // }
    // qustion.innerHTML = qustionBank[cont];
    // all.append(qustion);

    option1.innerHTML = option[cont].option1;
    option2.innerHTML = option[cont].option2;
    option3.innerHTML = option[cont].option3;
    option4.innerHTML = option[cont].option4;
    all.append(op1, option1);
    all.append(op2, option2);
    all.append(op3, option3);
    all.append(op4, option4);
    body.append(all);
    nextButton.innerHTML = "NEXT"
    nextButton.onclick = next
    body.append(nextButton)

    cont++

}
const nextButton = document.createElement("button");
nextButton.id = "nxetButton";
startButton.onclick = next;

const option1 = document.createElement("label");

option1.className = "button";

const option2 = document.createElement("label");

option2.className = "button";
const option3 = document.createElement("label");

option3.className = "button";
const option4 = document.createElement("label");

option4.className = "button";

// const op1 = document.createElement("input")
// op1.setAttribute("type", "radio")
// op1.name = "option"
// op1.id = "radio"
// const op2 = document.createElement("input")
// op2.name = "option"
// op2.setAttribute("type", "radio")
// op2.id = "radio"
// const op3 = document.createElement("input")
// op3.setAttribute("type", "radio")
// op3.name = "option";
// op3.id = "radio"
// const op4 = document.createElement("input");
// op4.setAttribute("type", "radio");
// op4.name = "option"
// op4.id = "radio"
