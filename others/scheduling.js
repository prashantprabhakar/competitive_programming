
let taskMap = new Map()
let res = []

function solution1(tasks, dependencies) {
    try{
        findDependencies(dependencies)
        taskMap.set("parent", tasks)
        findNoDependentNode("parent")
        return res
    } catch(e){
        return false
    }
}

function findDependencies(dependencies){
    dependencies.split(",").forEach(e => {
        let [task, subtask] = e.split("=>")
        if(taskMap.has(task)){
            let x = taskMap.get(task)
            x.push(subtask)
            taskMap.set(task, x)
        }else{
            let a = [subtask]
            taskMap.set(task,a)
        }
    });
}

function findNoDependentNode(currentTask) {
    if(!taskMap.has(currentTask) ) {
        console.log("ddd: ", currentTask)
        if(res.indexOf(currentTask) == -1) res.push(currentTask)
        return
    }
    let subtasks = taskMap.get(currentTask)
    for(let i=0; i<subtasks.length; i++){
        findNoDependentNode(subtasks[i])
        console.log("Addg:", subtasks[i])
        if(res.indexOf(subtasks[i]) == -1 ) res.push(subtasks[i])
    }

}

// let dependencies = "a=>b,b=>c,c=>d,b=>f,f=>f1,f=>f2,b=>h,a=>e"
// let tasks = ["a", "b", "c", "d", "e", "f", "f1", "f2", "g", "h"]

let dependencies = "a=>b,b=>c,c=>a"
let tasks = ["a", "b", "c"]
let result = solution1(tasks,dependencies)
console.log(result)