/* Intro */
const intro=document.getElementById("intro");
const main=document.getElementById("mainContent");

intro.addEventListener("click",()=>{
intro.style.display="none";
main.style.display="block";
});

/* Typing Animation */
const text="Mechanical Engineering student passionate about mechanical design, CAD modelling and engineering problem solving. Experienced in AutoCAD, PTC Creo and Fusion 360 with internship exposure at NLC Limited.";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typingText").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,25);
}
}
setTimeout(typing,500);

/* Scroll Progress */
window.onscroll=()=>{
let winScroll=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrolled=(winScroll/height)*100;
document.getElementById("progressBar").style.width=scrolled+"%";
};

/* Dark Mode */
document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("dark");
};

/* Modal */
function openModal(id){
const modal=document.getElementById("modalOverlay");
const modalBody=document.getElementById("modalBody");
modalBody.innerHTML=document.getElementById(id).innerHTML;
modal.classList.add("active");
document.body.classList.add("modal-open");
}

function closeModal(){
document.getElementById("modalOverlay").classList.remove("active");
document.body.classList.remove("modal-open");
}

/* Close on outside click */
document.getElementById("modalOverlay").addEventListener("click",function(e){
if(e.target===this){
closeModal();
}
});
