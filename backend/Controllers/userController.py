from flask import jsonify,request,Blueprint
from database import mongoDB
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