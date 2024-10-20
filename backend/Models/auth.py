from werkzeug.security import check_password_hash

class userAuth:
    def __init__(self,email,password):
        self.email=email
        self.password=password
        
    def authenticate(self,db):
        user=db.users.find_one({"email":self.email},{"password":1})
        return check_password_hash(user["password"],self.password)
    
    def checkUser(self,db):
        userExists=db.users.find_one({"email":self.email})
        if userExists:
            return True