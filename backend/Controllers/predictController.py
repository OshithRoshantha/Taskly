from flask import jsonify,request,Blueprint
from flask_jwt_extended import jwt_required
from Models.topicPredictor import predictor

predictor_controller=Blueprint('predictor_controller',__name__)

@predictor_controller.route('/dashboard/generateTopic',methods=["POST"])
@jwt_required()
def generateTopic():
    userInput=request.json
    predictorInstance=predictor(userInput['summary'])
    topic=predictorInstance.model()
    
    return jsonify({"topic":topic})