const work=document.querySelector(".work");
const addBtn=document.querySelector(".add");
const workList=document.querySelector("ul");
addBtn.addEventListener("click", ()=>{
    if(work.value===""){
        alert("Plz Enter Your Work");
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=work.value;
        workList.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    work.value="";
    saveData();
})

workList.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", workList.innerHTML);
}
function showTask(){
    workList.innerHTML=localStorage.getItem("data");
}
showTask();