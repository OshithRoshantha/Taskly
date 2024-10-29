from flask import Flask
from database import mongoDB
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from Controllers.userController import user_controller
from Controllers.authController import auth_controller
from Controllers.taskController import task_controller
from Controllers.predictController import predictor_controller
import os
from dotenv import load_dotenv

load_dotenv()
app=Flask(__name__)
app.config['MONGO_URI']=os.getenv('MONGO_URI')
app.config['JWT_SECRET_KEY']=os.getenv('JWT_SECRET_KEY')

CORS(app,supports_credentials=True)
jwt=JWTManager(app)
mongoDB.init_app(app)
app.register_blueprint(user_controller)
app.register_blueprint(auth_controller)
app.register_blueprint(task_controller)
app.register_blueprint(predictor_controller)

if __name__ == "__main__":
    app.run(debug=True)