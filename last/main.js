const none = document.querySelector("#none");
const Style = document.querySelector("#Style");
const Script = document.querySelector("#Script");
const python = document.querySelector("#python");
const go = document.querySelector("#go");
const but = document.querySelector("#but");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");
const step4 = document.querySelector("#step4");
const step5 = document.querySelector("#step5");
const innerStep2 = document.querySelector("#innerStep2");
const div1 = document.querySelector("#div1");
const innerStep3 = document.querySelector("#innerStep3");
const innerStep4 = document.querySelector("#innerStep4");
const innerStep5 = document.querySelector("#innerStep5");
const html = document.querySelector("#html");
const div2 = document.querySelector("#div2");
const stepcss = document.querySelector("#stepcss");
const step1css = document.querySelector("#step1css");
const step2css = document.querySelector("#step2css");
const step2button = document.querySelector("#step2button");
const step3button = document.querySelector("#step3button");
const step3css = document.querySelector("#step3css");
const step1js = document.querySelector("#step1js");
const jsbut1 = document.querySelector('#jsbut1');
const jspre = document.querySelector('#jspre');
/*const div3 = document.querySelector('#div3');*/

html.onclick = HTML;
Style.onclick = styles;
Script.onclick = Javascript;
python.onclick = py;
go.onclick = move;
step2.onclick = button1;
step3.onclick = button2;
step4.onclick = button3;
step5.onclick = button4;
step2button.onclick = cssbut;
step3button.onclick = cssbut1;
jsbut1.onclick = jsbut;
/* the function*/

function HTML() {
  html.style.display = "none";
  Style.style.display = "none";
  Script.style.display = "none";
  python.style.display = "none";
  none.style.display = "block";
  but.style.display = "block";
  go.style.display = "block";
  div1.style.display = "none";
  div2.style.display = "block";
  step2.style.display = "block";
  step3.style.display = "block";
  step4.style.display = "block";
  step5.style.display = "block";
}
function styles() {
  html.style.display = "none";
  Style.style.display = "none";
  Script.style.display = "none";
  python.style.display = "none";
  go.style.display = "block";
  stepcss.style.display = "block";
  step1css.style.display = "block";
  /*div3.style.display = 'block';*/
}
function Javascript() {
  html.style.display = "none";
  Style.style.display = "none";
  Script.style.display = "none";
  python.style.display = "none";
  go.style.display = "block";
  step1js.style.display = "block";
}
function py() {
  html.innerText = "Step1";
  Style.innerText = "Step2";
  Script.innerText = "Step3";
  python.innerText = "Step4";
}
function move() {
  html.innerText = "HTML";
  Style.innerText = "CSS";
  Script.innerText = "JAVA Script";
  python.innerText = "PYTHON";
  none.style.display = "none";
  html.style.display = "flex";
  Script.style.display = "flex";
  python.style.display = "flex";
  Style.style.display = "flex";
  but.style.display = "none";
  go.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "none";
  innerStep2.style.display = "none";
  step4.style.display = "none";
  step5.style.display = "none";
  div1.style.display = "block";
  innerStep3.style.display = "none";
  innerStep4.style.display = "none";
  innerStep5.style.display = "none";
  step2css.style.display = "none";
  step1css.style.display = "none";
  div2.style.display = "none";
  step3css.style.display = "none";
  step1js.style.display = "none";
}
function button1() {
  step2.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";
  step5.style.display = "none";
  innerStep2.style.display = "block";
  none.style.display = "none";
  div1.style.display = "none";
}
function button2() {
  step2.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";
  step5.style.display = "none";
  innerStep3.style.display = "block";
  none.style.display = "none";
  div1.style.display = "none";
}
function button3() {
  step2.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";
  step5.style.display = "none";
  innerStep4.style.display = "block";
  none.style.display = "none";
  div1.style.display = "none";
}
function button4() {
  step2.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";
  step5.style.display = "none";
  innerStep5.style.display = "block";
  none.style.display = "none";
  div1.style.display = "none";
}
function cssbut() {
    step1css.style.display = "none";
  step3css.style.display = "none";
  step2css.style.display = "block";
}
function cssbut1() {
  step1css.style.display = "none";
  step2css.style.display = "none";
  step3css.style.display = "block";
}
function jsbut() {
  step1js.style.display = "none";
  jspre.style.display = "block";
}