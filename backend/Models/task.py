from bson import ObjectId
class userTask:
    def __init__(self,email,taskTitle,taskDesc,taskColor,taskPriority,taskDate,status):
        self.email=email
        self.taskTitle=taskTitle
        self.taskDesc=taskDesc
        self.taskColor=taskColor
        self.taskPriority=taskPriority
        self.taskDate=taskDate
        self.status=status
        
    def setDict(self):
        return {
            "email":self.email,
            "taskTitle":self.taskTitle,
            "taskDesc":self.taskDesc,
            "taskColor":self.taskColor,
            "taskPriority":self.taskPriority,
            "taskDate":self.taskDate,
            "status":self.status,
        }
        
    def createTask(self,db):
        db.tasks.insert_one(self.setDict())
    
    @staticmethod 
    def updateTask(taskId,newData,db):
        db.tasks.update_one({"_id": ObjectId(taskId)},{"$set":newData}) 
        
    @staticmethod
    def getTasks(email,status,sort,db):
        if sort=="priority":
            return db.tasks.find({"email":email,"status":status}).sort({"taskPriority":1})
        elif sort=="date":
            return db.tasks.find({"email":email,"status":status}).sort("taskDate", 1)    

    @staticmethod
    def deleteTask(taskId,db):
        db.tasks.delete_one({"_id": ObjectId(taskId)})      
