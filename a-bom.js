// If statement so that if id is not found, returns undefined instead of error
let hamburger = document.getElementById('hamburger');
if(hamburger){
  hamburger.addEventListener("click", hamburgerChange);
}

// Allows the toggle between the hamburger icon and an "x" box.
function hamburgerChange() {
  let y = document.getElementById("hamburger");
  y.classList.toggle("change");
  let x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}


  const imgTextEng = "YOU CAN PRAY TO KNOW HIS WILL,\nand with the honest desire to do whatever He asks you to do, you will receive an answer.\nPresident Henry B. Eyring\nYou Are Not Alone in the Work\nOctober 2015 General Priesthood Session\r\rA COMMON TECHNIQUE AMONG RELIGIOUS CULTS\nis to instruct people to ask God what He wants them to do. Members are exhorted to study and pray in order to know God’s will for them. It is always implied that joining the group is God’s will and leaving the group is betraying it. Of course, if a person tells the cult leader that God is warning him to leave, this will not be accepted as valid.\nSteven Hassan\nCombatting Cult Mind Control, p. 70, 1988\nwww.freedomofmind.com";

  const imgTextPor = "VOCÊS PODEM ORAR PARA CONHECER SUA VONTADE\ne, com o sincero desejo de fazer qualquer coisa que Ele lhes peça, vocês receberão uma resposta.\nPresidente Henry B. Eyring\nVocê Não Está Sozinho no Trabalho\nSessão Geral do Sacerdócio de outubro de 2015\r\rUM MÉTODO COMUM ENTRE OS CULTOS RELIGIOSOS\né instruir as pessoas a perguntarem a Deus o que Ele quer que elas façam. Os membros são exortados a estudar e orar para conhecer a vontade de Deus para eles. Está sempre implícito que ingressar no grupo é a vontade de Deus e deixar o grupo é traí-lo. Claro, se uma pessoa disser ao líder do culto que Deus o está avisando para sair, isso não será aceito como válido.\nSteven Hassan\nCombatting Cult Mind Control, p. 70, 1988\nwww.freedomofmind.com";  

// If statement so that if id is not found, returns undefined instead of error
let henryb = document.getElementById('henryb');
if(henryb) {
  henryb.addEventListener("click", copyCultTextEng);
}

let henrybpor = document.getElementById('henrybpor');
if(henrybpor) {
  henrybpor.addEventListener("click", copyCultTextPor);
}

// Copies the text found in the henryb image (const imgTextEng) to clipboard.
function copyCultTextEng() {
  // Copies the text:
  navigator.clipboard.writeText(imgTextEng);
  // Alert of the copied text:
  alert("The following text was just copied:\r\r" + imgTextEng);
}

// Copies the text found in the henryb image (const imgTextPor) to clipboard.
function copyCultTextPor() {
  // Copies the text:
  navigator.clipboard.writeText(imgTextPor);
  // Alert of the copied text:
  alert("O texto a seguir foi copiado:\r\r" + imgTextPor);
}



// If statement so that if id is not found, returns undefined instead of error
let hideBtn = document.getElementById('hidebtn');
if(hideBtn){
  hideBtn.addEventListener("click", hideIt);
}

// Allows the toggles of #hide between being displayed and not being displayed.
function hideIt() {
  let y = document.getElementById("hide");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}