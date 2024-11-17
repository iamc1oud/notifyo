from django.contrib.auth.models import User

from common.security.jwt import generate_jwt

def retrieve_user_token(username: str, password: str) -> str:
    # Check if user exist
    user = User.objects.filter(username=username, password=password).first()
    
    if user is None:
        raise Exception("User not found")
    
    # Generate jwt token
    jwt_token = generate_jwt(user)
    return jwt_token