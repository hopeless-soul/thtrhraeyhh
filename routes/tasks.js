const router = require('express').Router()

const controller = require('../controllers/TasksController');

function getParameterAndTryIntParse(req, paramKey){
    let identificator = req.params[paramKey];
    let breakWhenParse = false;
    try {   identificator = parseInt(identificator) } catch (error) {
        breakWhenParse = true;  console.error(error);
    }
    //RETURN: parameter, isInt
    return [identificator, !breakWhenParse];
}

router.route("/")
    .get((req,res)=>{   res.json(controller.showAll()); })
    .post((req,res)=>{  res.sendStatus(400);            })
    .put((req,res)=>{   res.sendStatus(400);            }) 
    .patch((req,res)=>{ res.sendStatus(400);            })
    .delete((req,res)=>{res.sendStatus(400);            });

router.route("/:idOrName")
    .get((req,res)=>{   
        [parameter, isInt] = getParameterAndTryIntParse(req, "idOrName");
        if (isInt)      res.json(controller.findById(parameter));
        else            res.json(controller.findByName(parameter));
    })
    .post((req,res)=>{
        // console.log(req.body.groupId);
        // console.log(req.body.groupName);
        // console.log(req.body.tasks);
        // if( req.body.groupId && req.body.groupName && (req.body.tasks.length != 0)) { res.json(controller.addGroup( parameter,req.body.groupName,req.body.tasks )) }
        // else {res.sendStatus(400)}
     })
    .put((req,res)=>{   res.sendStatus(400);})
    .patch((req,res)=>{ res.sendStatus(400);})
    .delete((req,res)=>{
        [parameter, isInt] = getParameterAndTryIntParse(req, "idOrName");
        if(isInt) res.json(controller.removeGroupById(parameter));
    });

module.exports = router;