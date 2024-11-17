from django.db import models
from django.contrib.auth.models import User

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)

class AccessToken(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='access_tokens')
    token = models.CharField(max_length=1000, editable=False)
    expiration_time = models.DateTimeField()
    
    def is_expired(self):
        # Check expiration using jwt.
        pass

    def __str__(self):
        return f"Token for {self.user.username} - {self.token}"