from flask import jsonify,request,Blueprint
from database import mongoDB
from flask_jwt_extended import jwt_required,get_jwt_identity
from Models.task import userTask

task_controller=Blueprint('task_controller',__name__)

@task_controller.route('/dashboard/addTask',methods=["POST"])
@jwt_required()
def addTask():
    userInput=request.json
    email=get_jwt_identity()
    taskTitle=userInput["taskTitle"] 
    taskDesc=userInput.get("taskDesc", "")
    taskColor=userInput["taskColor"]  
    taskPriority=userInput["taskPriority"]
    taskDate=userInput["taskDate"]
    status=userInput["status"]
    
    newTask=userTask(email,taskTitle,taskDesc,taskColor,taskPriority,taskDate,status)
    
    newTask.createTask(mongoDB.db)
    return jsonify({"message":"taskAdded"})

@task_controller.route('/dashboard',methods=["POST"])
@jwt_required()
def displayTasks():
    userInput=request.json
    email=get_jwt_identity()
    status=userInput["status"]
    sort=userInput["sort"]
    
    tasks=userTask.getTasks(email,status,sort,mongoDB.db)
    
    task_list = []
    for task in tasks:
        task_list.append({
            "_id": str(task["_id"]),
            "taskTitle": task["taskTitle"],
            "taskDesc": task.get("taskDesc", ""),
            "taskColor": task["taskColor"],
            "taskPriority": task["taskPriority"],
            "taskDate": task["taskDate"],
            "status": task["status"]
        })
    return jsonify({"tasks": task_list})
        
@task_controller.route('/dashboard',methods=["DELETE"])
@jwt_required()
def removeTask():
    userInput=request.json
    
    userTask.deleteTask(userInput["taskId"],mongoDB.db)
    return jsonify({"message":"taskDeleted"})

@task_controller.route('/dashboard',methods=["PUT"])
@jwt_required()
def changeTask():
    userInput=request.json 
    newData={
        "email":get_jwt_identity(),
        "taskTitle": userInput["taskTitle"],
        "taskDesc": userInput.get("taskDesc", ""),  
        "taskColor": userInput["taskColor"],
        "taskPriority": userInput["taskPriority"],
        "taskDate": userInput["taskDate"],
        "status": userInput["status"]
    }
    
    userTask.updateTask(userInput["taskId"],newData,mongoDB.db)
    return jsonify({"message":"taskUpdated"})  

@task_controller.route('/dashboard/count',methods=["POST"])
@jwt_required()
def taskCount():
    userInput=request.json
    email=get_jwt_identity()
    status=userInput["status"]
    
    count=userTask.getCounts(email,mongoDB.db,status)
    return jsonify({"count":count})                                              