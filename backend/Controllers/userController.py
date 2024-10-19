from flask import jsonify,request,Blueprint
from database import mongoDB
from Models.user import createAccount

user_controller=Blueprint('user_controller',__name__)

@user_controller.route('/signup',methods=["POST"])
def signup():
    userInput=request.json
    first_name=userInput["first_name"]
    last_name=userInput["last_name"]
    email=userInput["email"]
    password=userInput["password"]
    
    newUser=createAccount(first_name,last_name,email,password)
    
    if newUser.checkUser(mongoDB.db):
        newUser.addUser(mongoDB.db)
    else:
        return jsonify({"message":"userExists"})
    
    return jsonify({"message": "userAdded"})