let sidebarCreated = false;
function sideBar(e) {
e.stopPropagation();
if (sidebarCreated) {
return console.log('Sidebar already exists!');

}
sidebarCreated = true;
let head = document.getElementById('head');
let side = document.createElement('div');
side.className = "side-bar";
// Create elements
let ppts = document.createElement('div');
ppts.id = "ppt";
ppts.innerHTML = `
<a href="">PPTS</a>
<div><a href="#pharmacology">Pharmacology</a></div>
<div><a href="#pharmaceutics">Pharmaceutics</a></div>
<div><a href="#pharmacotherapy">Pharmacotherapy</a></div>
<div><a href="#med-chem">Medicinal-Chemistry</a></div>
<div><a href="#analysis">Pharmaco-Analysis</a></div>
<div><a href="#pharmacognosy">Pharmacognosy</a></div>
`;

let exams = document.createElement('div');
exams.id = "exam";
exams.innerHTML = `
<a href="">Exams</a>
<div><a href="">Pharmacology</a></div>
<div><a href="">Pharmaceutics</a></div>
<div><a href="">Pharmacotherapy</a></div>
<div><a href="">Medicinal-Chemistry</a></div>
<div><a href="">Pharmaco-Analysis</a></div>
<div><a href="">Pharmacognosy</a></div>
`;
let references = document.createElement('div');
references.id = "reference";
references.innerHTML = `
<a href="">References</a>
<div><a href="">Pharmacology</a></div>
<div><a href="">Pharmaceutics</a></div>
<div><a href="">Pharmacotherapy</a></div>
<div><a href="">Medicinal-Chemistry</a></div>
<div><a href="">Pharmaco-Analysis</a></div>
<div><a href="">Pharmacognosy</a></div>
`;
// Append elements
head.after(side);
side.appendChild(ppts);
side.appendChild(exams); 
side.appendChild(references);

// Style the elements
ppts.style.cssText = `
background-color: pink;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 100px;
padding: 10px;
`;

exams.style.cssText = `
background-color: pink;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 60px;
padding: 10px;
`;

references.style.cssText = `
background-color: pink;
padding: 10px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;
margin-top: 60px;
`;
let logos=document.getElementById('logos');
function handleMediaQuery() {
const width = window.innerWidth;
// Show/hide based on screen size
if (width >= 900) {
// Large screens: hide references only
ppts.style.display = 'none';
exams.style.display = 'none';
references.style.display = 'none';
logos.style.marginTop="100px";
logos.style.width="100%"

} else if (width >= 700) {
// Medium screens: show ppt and exam
ppts.style.display = 'flex';
exams.style.display = 'flex';
references.style.display = 'none';
} else {
// Small screens: show all
ppts.style.display = 'flex';
exams.style.display = 'flex';
references.style.display = 'flex';
}
}

// ✅ Call once when sidebar is created
handleMediaQuery();

// ✅ Listen for window resize events
window.addEventListener('resize', handleMediaQuery);

// Hide main content
let main = document.querySelector('.main-content');
if (main) {
main.style.display = "none";
}
}
let home = document.getElementById('home');
home.onclick = sideBar;

