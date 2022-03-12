//variables
const todoInput = document.querylector("#todo-input")
const addBtn= document.querylector("#add-btn")
const todoList = document.querylector("#")

let todoArray = new set();
let user;

//function to add new
const addTodo = ()=> {
    if(todoArray.size!=5){
        if(todoInput.value!=""){
            todoInput.parentElement.classList.remove("error")
            todoArray.add(todoInput.value)

            if(user){
                let db =[...todoArray]   //spreads thebcontent of todoArray
let _db=(JSON,strngify(db)) //_dbisthe string form of db array
localStorage.setItem(user,_db)

            }else {
                setTodo(todoArray)
            }

            }else{
                todoInput.parentElement.classList.add("error")                
    
    }
    todoInput.value =""
    
}else {
    alert("you have five things to do")
}


}
//event handlers
addBtn.addEventListener("click",addTodo)

const setTodo =(arr)=>{
    let html="";
    for(eel of arr){
        let html=""
        `<li id=${el}>
        <div class = "todo">
        <P>${el}</p>
        <input type="text" class="hide"/>
        </div>

        <div class ="btns">
        <button>edit</button>
        <button>save</button>
        <button>delete</button>
        </div>
        </li>`
        htmlArr += html
}
        todoList.innerHTML =htmlArr
        //informText()

}        
        
    

