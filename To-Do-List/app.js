console.log('"new"-To add a Todo List');
console.log('"list"-List all Todos');
console.log('"delete"-Remove particular Todo');
console.log('"quit"-Quit App');

let input=prompt('What do you like to do?');
const todos=['Collect eggs','Clean room'];
while(input!=='quit'){
	if(input==='list'){
		console.log("**************");
		for(let i=0;i<todos.length;i++){
			console.log(`${i}:${todos[i]}`);
		}
		console.log("**************");
	}
	else if(input==='new'){
		const newTodo=prompt("What is new Todo?");
		todos.push(newTodo);
		console.log("Added to the list");
	}
	else if(input==='delete'){
		const indexStr=prompt("Enter index to delete");
		const index=parseInt(indexStr);
		if(!Number.isNaN(index)){
		   todos.splice(index,1);
		   console.log("Deleted");
	    }
	    else{
	    	console.log("Unknown Index");
	    }
	}
	input=prompt('What do you like to do?');
}
console.log("Okay! YOU QUIT... ");