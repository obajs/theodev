const none = document.querySelector("#none");
const Style = document.querySelector("#Style");
const Script = document.querySelector("#Script");
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
const jspre1 = document.querySelector('#jspre1');
const step1cent = document.querySelector('#step1cent');
const div3 = document.querySelector('#div3');
const bright = document.querySelector('#bright');
const div = document.querySelector(".div");
const dark = document.querySelector("#dark");
const head1 = document.querySelector("#head1");
const day2 = document.querySelector('#day2');
const yesd = document.querySelector('#yesd');
const nod = document.querySelector('#nod');
const yesn = document.querySelector('#yesn');
const non = document.querySelector('#non');
const night2 = document.querySelector('#night2')
const log = document.querySelector('#log');
const logo = document.querySelector('#logo');

html.onclick = HTML;
Style.onclick = styles;
Script.onclick = Javascript;
go.onclick = move;
step2.onclick = button1;
step3.onclick = button2;
step4.onclick = button3;
step5.onclick = button4;
step2button.onclick = cssbut;
step3button.onclick = cssbut1;
jsbut1.onclick = jsbut;
bright.onclick = day;
dark.onclick = night;
yesd.onclick = yesDay;
nod.onclick = noDay;
yesn.onclick = yesNight;
non.onclick = noNight;
log.onclick = logIn;
/* the function*/

function HTML() {
  html.style.display = "none";
  Style.style.display = "none";
  Script.style.display = "none";
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
  go.style.display = "block";
  stepcss.style.display = "block";
  step1css.style.display = "block";
  step2button.style.display = "block";
  step3button.style.display = "block";
  div3.style.display = 'block';
  div1.style.display = 'none'
}
function Javascript() {
  html.style.display = "none";
  Style.style.display = "none";
  Script.style.display = "none";
  go.style.display = "block";
  jspre1.style.display = "block";
  jspre.style.display = "none";
  jsbut1.style.display = 'block'
  step1js.style.display = "block";
  step1cent.innerText = "STEP1-JS"
}

function move() {
  html.innerImage = "html-removebg-preview.png";
  Style.innerImage = "css-removebg-preview.png";
  Script.innerText = "JAVA Script";
  none.style.display = "none";
  html.style.display = "flex";
  Script.style.display = "flex";
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
  step3button.style.display = "none";
  step2button.style.display = "none";
  div3.style.display = "none";
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
  step2button.style.display = "none";
  step3button.style.display = "block";
}
function cssbut1() {
  step1css.style.display = "none";
  step2css.style.display = "none";
  step3css.style.display = "block";
  step2button.style.display = "block";
  step3button.style.display = "none";
}
function jsbut() {
  jspre1.style.display = "none";
  jspre.style.display = "block";
  step1cent.innerText = "STEP2-JS";
  step1cent.style.color = "rgb(224, 103, 103)";
  jsbut1.style.display = 'none';
}

function day(){
div.style.backgroundColor = "rgb(255, 255, 255)";
div.style.color = "rgba(1, 25, 71, 0.98)";
bright.style.display = "none";
dark.style.display = "flex";
night2.style.display = "none";
day2.style.display = "flex";
head1.style.color = "rgb(56, 11, 9)";
}

function night() {
  div.style.backgroundColor = "rgb(15, 0, 0)";
  div.style.color = "rgb(172, 243, 243)";
  bright.style.display = "flex";
  dark.style.display = "none";
  day2.style.display = "none";
  night2.style.display = "flex";
  head1.style.color = " rgb(255, 103, 103)";
}

function yesDay(){
  div.style.backgroundColor = "#fff";
div.style.color = "#011947";
bright.style.display = "none";
dark.style.display = "flex";
day2.style.display = "none";
head1.style.color = "rgb(56, 11, 9)";
}

function noDay(){
  div.style.backgroundColor = 'rgb(255, 255, 255)';
div.style.color = " rgba(1, 25, 71, 0.98)";
bright.style.display = "none";
dark.style.display = "flex";
day2.style.display = "none";
head1.style.color = "rgb(255, 103, 103)";
}

function yesNight(){
  div.style.backgroundColor = "rgb(0, 0, 0)";
div.style.color = "rgb(172, 243, 243)";
bright.style.display = "flex";
dark.style.display = "none";
night2.style.display = "none";
head1.style.color = "rgb(255, 103, 103)";
}

function noNight(){
  div.style.backgroundColor = 'rgb(255, 255, 255)';
div.style.color = " rgba(1, 25, 71, 0.98)";
bright.style.display = "none";
dark.style.display = "flex";
night2.style.display = "none";
head1.style.color = "rgb(224, 103, 103)";
}

function logIn(){
  logo.style.display = "none";
}