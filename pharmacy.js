let sidebarCreated = false; // Track if sidebar exists

function sideBar(e) {
  e.stopPropagation();
  
  // If sidebar already exists, STOP! Don't create another one
  if (sidebarCreated) {
    console.log('Sidebar already exists!');
    return;
  }
  
  // Mark that sidebar is being created
  sidebarCreated = true;
  
  let head = document.getElementById('head');
  let side = document.createElement('div');
  side.className = "side-bar";
  side.innerHTML = `
    <div id="ppt">
      <a href="">PPTS</a>
      <div><a href="#pharmacology">Pharmacology</a></div>
      <div><a href="#pharmaceutics">Pharmaceutics</a></div>
      <div><a href="#pharmacotherapy">Pharmacotherapy</a></div>
      <div><a href="#med-chem">Medicinal-Chemistry</a></div>
      <div><a href="#analysis">Pharmaco-Analysis</a></div>
      <div><a href="#pharmacognosy">Pharmacognosy</a></div>
    </div>
    <div id="exam">
      <a href="">Exams</a>
      <div><a href="">Pharmacology</a></div>
      <div><a href="">Pharmaceutics</a></div>
      <div><a href="">Pharmacotherapy</a></div>
      <div><a href="">Medicinal-Chemistry</a></div>
      <div><a href="">Pharmaco-Analysis</a></div>
      <div><a href="">Pharmacognosy</a></div>
    </div>
    <div id="reference">
      <a href="">References</a>
      <div><a href="">Pharmacology</a></div>
      <div><a href="">Pharmaceutics</a></div>
      <div><a href="">Pharmacotherapy</a></div>
      <div><a href="">Medicinal-Chemistry</a></div>
      <div><a href="">Pharmaco-Analysis</a></div>
      <div><a href="">Pharmacognosy</a></div>
    </div>
  `;

  head.after(side);

  // Style the elements
  let ppt = document.getElementById('ppt');
  ppt.style.cssText = `
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 60px;
    padding: 10px;
  `;
  
  let exams = document.getElementById('exam');
  exams.style.cssText = `
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 100px;
    padding: 10px;
  `;
  
  let references = document.getElementById('reference');
  references.style.cssText = `
    background-color: pink;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 60px;
    text-decoration: none;
  `;
  
  let main = document.querySelector('.main-content');
  main.style.display = "none";
}

let home = document.getElementById('home');
home.onclick = sideBar;

