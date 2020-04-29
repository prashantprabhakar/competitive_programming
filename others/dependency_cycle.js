

exports.solution = (tasks, dependencies) => {
    let taskMap = new Map()
    let res = []
    try{
        findDependencies(dependencies, taskMap)
        taskMap.set("parent", tasks)
        findNoDependentNode("parent", res, taskMap)
        return res
    } catch(e){
        //console.log(e)
        throw new Error("Error: This is a cyclic dependency")
        //return false
    }
}

function findDependencies(dependencies, taskMap){
    //dependencies.split(",").forEach(e => {
    dependencies.forEach(e => {
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

function findNoDependentNode(currentTask, res, taskMap) {
    if(!taskMap.has(currentTask) ) {
        //console.log("ddd: ", currentTask)
        if(res.indexOf(currentTask) == -1) res.push(currentTask)
        return
    }
    let subtasks = taskMap.get(currentTask)
    for(let i=0; i<subtasks.length; i++){
        findNoDependentNode(subtasks[i], res, taskMap)
        //console.log("Addg:", subtasks[i])
        if(res.indexOf(subtasks[i]) == -1 ) res.push(subtasks[i])
    }

}

