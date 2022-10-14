var tasks = []; 

function GenerationId() {

var timestamp = new Date (); 

var id = 

timestamp.getHours().toString() + 
timestamp.getMinutes().toString() + 
timestamp.getSeconds().toString() + 
timestamp.getMilliseconds().toString();  


return id; 
}

function createtask(){

var taskDescription = document.getElementById("tarefa").value; 

var task =  {

id: GenerationId(),  
data:{

    description: taskDescription
}

};

tasks.push(task); 

updatescreen();

}

function updatescreen() {

var list = "<ul>";

tasks.forEach(task=>{

list+= "<li id-data=" + task.id + ">" + task.data.description + "</li>";

list+= "<button id = excluir onclick = deletetask(this) id-data=" + task.id + "><i class= material-icons style= font-size:48px;color:red >delete_forever</i></button>";
document.getElementById("lista").innerHTML = list; 
document.getElementById("tarefa").value = ""; 

});

list += "</ul>"; 

}

function deletetask (element){

    console.log(element);
tasks = tasks.filter(task=> task.id != element.getAttribute("id-data"));

updatescreen();


}