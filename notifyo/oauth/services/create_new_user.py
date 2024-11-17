from django.contrib.auth.models import User

def create_new_user(username: str, password: str) -> User:
    try:
        # Create new user
        user = User.objects.create(username=username, password=password)
        return user
    except Exception as e:
        raise e