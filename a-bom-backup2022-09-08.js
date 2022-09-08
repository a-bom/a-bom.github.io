document.getElementById("hamburger").addEventListener("click", hamburgerChange);

function hamburgerChange() {
  let y = document.getElementById("hamburger");
  y.classList.toggle("change");
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

document.getElementById("henryb").addEventListener("click", copyCultText);

function copyCultText() {
  /* Get the text field */
  var imgText = "YOU CAN PRAY TO KNOW HIS WILL,\nand with the honest desire to do whatever He asks you to do, you will receive an answer.\nPresident Henry B. Eyring\nYou Are Not Alone in the Work\nOctober 2015 General Priesthood Session\r\rA COMMON TECHNIQUE AMONG RELIGIOUS CULTS\nis to instruct people to ask God what He wants them to do. Members are exhorted to study and pray in order to know God’s will for them. It is always implied that joining the group is God’s will and leaving the group is betraying it. Of course, if a person tells the cult leader that God is warning him to leave, this will not be accepted as valid.\nSteven Hassan\nCombatting Cult Mind Control, p. 70, 1988\nwww.freedomofmind.com";

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(imgText);
  
  /* Alert the copied text */
  alert("The following text was just copied:\r\r" + imgText);
}
