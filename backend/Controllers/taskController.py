from flask import jsonify,request,Blueprint
from database import mongoDB
from flask_jwt_extended import jwt_required,get_jwt_identity
from Models.task import userTask

task_controller=Blueprint('task_controller',__name__)

@task_controller.route('/dashboard',methods=["POST"])
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