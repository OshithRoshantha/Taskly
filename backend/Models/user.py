from werkzeug.security import generate_password_hash

class userCreate:
    def __init__(self,first_name,last_name,email,password):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.password=generate_password_hash(password,method='pbkdf2:sha256')
        
    def setDict(self):
        return {
            "first_name":self.first_name,
            "last_name":self.last_name,
            "email":self.email,
            "password":self.password
        }
        
    def addUser(self,db):
        db.users.insert_one(self.setDict())
        
    def checkUser(self,db):
        userExists=db.users.find_one({"email":self.email})
        if not userExists:
            return True
     
    @staticmethod    
    def userName(email,db):
        return db.users.find_one({"email":email},{"_id": 0,"password":0})
    