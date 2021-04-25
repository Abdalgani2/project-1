const body = document.querySelector("body");
const startButton = document.createElement("button");
startButton.innerHTML = "اضغط لبدء الاختبار";
startButton.id = "startButton";
body.append(startButton);
const op = document.createElement("input");

const qustionBank = ["ما هي اطول سورة بالقراّن؟",
    "عدد الأيام التي ظل فيها نبي الله إبراهيم وسط نيران النمرود؟",
    "أّذكر عدد سجدات التلاوة التي وردت في القرآن؟",
    "سورة قرآنية ورد فيها سجدتين ما هو اسم السورة؟",
    "ما هو اسم امرأة العزيز ؟ ",
    "ما هو اليوم الذي خُلق فيه سيدنا آدم ـ عليه السلام ؟ "
    , "ما هي أول صلاة أداها سيدنا محمد؟",
    "من هو شيخ المرسلين؟",
    "من هو أول من استشهد في الإسلام؟",
    "من هو خازن الجنة ؟"]
const option = [{
    option1: "سورة النساء",
    option2: "سورة البقرة",
    option3: "سورة اّل عمران",
    option4: "سورة الكهف"
},
{
    option1: "اسبوع كامل",
    option2: "شهر كامل",
    option3: "خمسة ايام",
    option4: "ثلاثة ايام"
},
{
    option1: "خمسة سجدات",
    option2: "عشرون سجدة",
    option3: "خمسة عشر سجدة",
    option4: "ثلاثون سجدة"
},
{
    option1: "سورة الحج",
    option2: "سورة السجدة",
    option3: "سورة الانفال",
    option4: "سورة الحجرات",
},
{
    option1: "سمية",
    option2: "حفصة",
    option3: "زليخة",
    option4: "خديجة"
},
{
    option1: "يوم الخميس",
    option2: "يوم الجمعة",
    option3: "يوم السبت",
    option4: "يوم الاحد"
},
{
    option1: "صلاة العشاء",
    option2: "صلاة الاستسقاء",
    option3: "صلاة العيد",
    option4: "صلاة الظهر"
},
{
    option1: "سيدنا نوح",
    option2: "عمر بن الخطاب",
    option3: "عثمان بن عفان",
    option4: "سيدنا ابراهيم",
},
{
    option1: "سيدنا نوح",
    option2: "السيدة سمية من ال ياسر",
    option3: "بلال بن رباح",
    option4: "علي بن ابي طالب"
},
{
    option1: "الفاتح",
    option2: "الراضي",
    option3: "مالك",
    option4: "رضوان"
},

];
const answers = ["سورة البقرة"
    , "اسبوع كامل"
    , "خمسة عشر سجدة"
    , "سورة الحج"
    , "زليخة"
    , "يوم الجمعة"
    , "صلاة الظهر"
    , "سيدنا نوح"
    , "السيدة سمية من ال ياسر"
    , "رضوان"];
let grade = 0;
let qustion = document.createElement("h1");
const all = document.createElement("div");
body.append(qustion);
console.log(all);
let cont = 0;
let a = 0;
const next = (array) => {
    startButton.remove()
    all.innerHTML = ""
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
         nextButton.disabled=false;
    }
    op2.onclick = () => {
        nextButton.name = option2.innerHTML;
        nextButton.disabled=false;
    }
    op3.onclick = () => {
        nextButton.name = option3.innerHTML;
        nextButton.disabled=false;
    }
    op4.onclick = () => {
        nextButton.name = option4.innerHTML;
        nextButton.disabled=false;
    }
   
    if (nextButton.name == answers[cont - 1]) {
        console.log(nextButton.name);
        grade = grade + 10;
    }
    if (qustionBank[cont] === undefined) {
        all.style.display = "none"
        const finalGrade = document.createElement("h");
        finalGrade.id = "finalGrade";
        finalGrade.innerHTML = "العلامة النهائية : " + grade + "/100";
        nextButton.remove()
        body.append(finalGrade)
    }
    
    option1.innerHTML = option[cont].option1;
    option2.innerHTML = option[cont].option2;
    option3.innerHTML = option[cont].option3;
    option4.innerHTML = option[cont].option4;
    all.append(op1, option1);
    all.append(op2, option2);
    all.append(op3, option3);
    all.append(op4, option4);
    body.append(all);
    if(cont===9){
        console.log("abood")
        nextButton.innerHTML = "انهاء الاختبار"
        nextButton.onclick = next
        body.append(nextButton)
    }
    else{
    nextButton.innerHTML = "التالي"
    nextButton.onclick = next
    body.append(nextButton)
    nextButton.disabled=true
       }


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
