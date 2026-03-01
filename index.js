const readline = require('readline');

const prompts = readline.createInterface(process.stdin, process.stdout);

prompts.question("task-CLI: ", (response) =>{
    while(!response === 0){
    if(response.toLocaleLowerCase() === "add"){
        console.log("Added");
    }else{
        console.log("Error input");
    }

}
    prompts.close();
});