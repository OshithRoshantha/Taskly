from flask import jsonify,request,Blueprint
from database import mongoDB
from flask_jwt_extended import jwt_required,get_jwt_identity
from Models.user import userCreate

user_controller=Blueprint('user_controller',__name__)

@user_controller.route('/signup',methods=["POST"])
def signup():
    userInput=request.json
    firstName=userInput["firstName"]
    lastName=userInput["lastName"]
    email=userInput["email"]
    password=userInput["password"]
    
    newUser=userCreate(firstName,lastName,email,password)
    
    if newUser.checkUser(mongoDB.db):
        newUser.addUser(mongoDB.db)
    else:
        return jsonify({"message":"userExists"})
    
    return jsonify({"message": "userAdded"})

@user_controller.route('/dashboard/userInfo',methods=["POST"])
@jwt_required()
def userName():
        email=get_jwt_identity()
        userInfo=userCreate.userName(email,mongoDB.db)
        
        return jsonify({"user": userInfo})