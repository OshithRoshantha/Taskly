from flask import Flask
from database import mongoDB
from Controllers.userController import user_controller
import os
from dotenv import load_dotenv

load_dotenv()
app=Flask(__name__)
app.config['MONGO_URI']=os.getenv('MONGO_URI')

mongoDB.init_app(app)
app.register_blueprint(user_controller, mongoDB=mongoDB)

if __name__ == "__main__":
    app.run(debug=True)