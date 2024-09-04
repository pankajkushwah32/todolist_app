const input=document.querySelector("input");
const addItem=document.querySelector("#addItem");
const itemBox=document.querySelector("ul")



function addItemInTodo(){
    let data=input.value;
    let li=document.createElement("li");
    let p=document.createElement("p");
    p.innerText=data;

    let button=document.createElement("button");
    button.innerText="DeleteItem";
    button.setAttribute("class","delete");

    li.appendChild(p);
    li.appendChild(button);
    itemBox.appendChild(li)
}
 itemBox.addEventListener('click',(e)=>{
    if(e.target.nodeName=="BUTTON"){
        const per=e.target.parentElement;
        per.remove();
        console.log("item deleted")
    }
 })

addItem.addEventListener('click',(e)=>{
    if(input.value!=""){
    addItemInTodo();
    input.value="";
    }
})