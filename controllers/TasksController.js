const Tasks = require('../models/Tasks');

class TasksController {
    showAll() {
        return Tasks.showAll();
    }
    findById( groupId ) {
        return Tasks.findById(groupId);
    }
    findByName( groupName ) {
        return Tasks.findByName(groupName);
    }
    removeGroupById( groupId ){
        return Tasks.removeGroupById( groupId );
    }
    addGroup( groupId,groupName,tasks ){
        return Tasks.addGroup(groupId,groupName,tasks);
    }
}
module.exports = new TasksController();