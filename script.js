// getting all required element

const inputBox = document.querySelector(".inputField input");		
const addBtn = document.querySelector(".inputField button");	
const todoList = document.querySelector(".todoList");			
const deleteAllBtn = document.querySelector(".footer button");		



addBtn.onclick = ()=>{												
																	
	let userData = inputBox.value;
	let getLocalStorage = localStorage.getItem("New Todo");				
																		
		if(getLocalStorage == null){								
			listArr = [];										 
		}														
		else{
		
		listArr = JSON.parse(getLocalStorage);
		}
	
	listArr.push(userData);
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTask(); 	//calling show task
}



	// function to add task list inside ul
function showTask(){
	
	let getLocalStorage = localStorage.getItem("New Todo");
	
	if(getLocalStorage == null){
	listArr = [];
	
	}else{
		listArr = JSON.parse(getLocalStorage);
	}

	const pendingNumb = document.querySelector(".pendingNumb");
	pendingNumb.textContent = listArr.length;  //passing the length value in pendingNumb
	
	let newLiTag = '';
	listArr.forEach((element, index) =>{
		newLiTag += `<li> ${element}<span onclick = "deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
	});
	todoList.innerHTML = newLiTag;  //adding new li tag inside ul tag
	inputBox.value="";		//once addded leave the input field blank 
}

	//delete task function

function deleteTask(index){
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage);
	listArr.splice(index,1);	//delete or remove the perticular index li
		
		//after remove the li again update the local storage
	localStorage.setItem("New Todo", JSON.stringify(listArr)); 	//transforming js object into a json string
	showTask();
}


deleteAllBtn.onclick = ()=>{
	listArr = []; 	//empty an array
	
	//after delete all task again update the local storage
	localStorage.setItem("new Todo", JSON.stringify(listArr));
	// showTask();
}

deleteAllBtn.addEventListener("click", function(){
	
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTask();
});



