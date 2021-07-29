var Tasks = {
    tasksCollection: [ 
        {
            groupId: 1,
            groupName: "House Routine",
            tasks: [
                {
                    taskId: 1,
                    isChecked: false,
                    taskName: "Clean Living Room",
                    taskDesc: "Move socks"
                },
                {
                    taskId: 2,
                    isChecked: false,
                    taskName: "Fix Table",
                    taskDesc: ""
                }
            ]
        },
        {
            groupId: 2,
            groupName: "Buy list",
            tasks: [
                {
                    taskId: 1,
                    isChecked: false,
                    taskName: "Tomatos",
                    taskDesc: ""
                },
                {
                    taskId: 2,
                    isChecked: false,
                    taskName: "A new pair if socks",
                    taskDesc: ""
                }
            ]
        }
    ],
    showAll(){
        return this.tasksCollection;
    },
    findById( id ){ return this.tasksCollection.filter( taskGroup => { return taskGroup.groupId == id} )  },
    findByName( name ){ return this.tasksCollection.filter( taskGroup => { return taskGroup.groupName == name} ) },
    removeGroupById( id ){ 
        let deleted=false; 
        try{ this.tasksCollection.splice(this.tasksCollection.indexOf(this.findById(id),1)); deleted=true; }
        catch(e){ console.error(e); } 
        return deleted; 
    },
    addGroup(groupId,groupName,tasks){ 
        let pushed=false; 
        try{ this.tasksCollection.push( {"groupId": groupId, "groupName": groupName, "tasks": tasks } ); pushed=true; }
        catch(e){ console.error(e); } 
        return pushed; 
     }
};

module.exports = Tasks;