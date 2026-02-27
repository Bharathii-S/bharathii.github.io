/* Hide original content */
.hidden-content{
display:none;
}

/* Profile Image */
.profile-placeholder{
height:260px;
border-radius:15px;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
}

.profile-img{
width:100%;
height:100%;
object-fit:cover;
border-radius:15px;
}

/* ===== MODAL ===== */
.modal-overlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
backdrop-filter:blur(8px);
display:flex;
justify-content:center;
align-items:center;
opacity:0;
visibility:hidden;
transition:0.4s ease;
z-index:9999;
}

.modal-overlay.active{
opacity:1;
visibility:visible;
}

.modal-content{
width:90%;
max-width:700px;
max-height:80vh;
overflow-y:auto;
position:relative;
padding:40px;
transform:scale(0.8);
transition:0.4s ease;
animation:fadeIn 0.4s ease;
}

.modal-overlay.active .modal-content{
transform:scale(1);
}

.close-btn{
position:absolute;
top:15px;
right:20px;
font-size:20px;
cursor:pointer;
}

.close-btn:hover{
color:cyan;
}

body.modal-open{
overflow:hidden;
}

@keyframes fadeIn{
from{opacity:0; transform:translateY(20px);}
to{opacity:1; transform:translateY(0);}
}
