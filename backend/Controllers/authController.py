from flask import jsonify,request,Blueprint
from flask_jwt_extended import create_access_token
from database import mongoDB
from Models.auth import userAuth

auth_controller=Blueprint('auth_controller',__name__)

@auth_controller.route('/',methods=["POST"])
def login():
    userInput=request.json
    email=userInput["email"]
    password=userInput["password"]
    
    checkUser=userAuth(email,password)
    
    if checkUser.checkUser(mongoDB.db):
        if checkUser.authenticate(mongoDB.db):
            access_token=create_access_token(identity=email)
            return jsonify({"message":"logged","access_token":access_token})
        else:
            return jsonify({"message":"invalidPwd"})
    else:
        return jsonify({"message":"userNotExists"})                                
                                    