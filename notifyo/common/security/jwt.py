import logging
from jwt import JWT, supported_key_types
from datetime import datetime, timedelta
from django.conf import settings
from django.contrib.auth.models import User
from jwt.exceptions import JWTException

logger = logging.getLogger(__name__)

key = supported_key_types()['oct'](settings.SECRET_KEY)

def generate_jwt(user: User) -> str:
    payload = {
        'id': user.id,
        'username': user.username,
        # TODO: Add expiration and issuedAt
        # 'exp': datetime.utcnow() + timedelta(hours=2),
        # 'iat': datetime.utcnow()
    }
    jwt= JWT()
    print(f"token is: {key.get_kty()}")
    token = jwt.encode(payload=payload, key=key, alg="HS256")
    return token

def decode_jwt(token):
    try:
        jwt= JWT()
        payload = jwt.decode(token, key=key, alg=["HS256"])
        return payload
    except JWTException as e:
        logger.info(f"Error decoding jwt: {e}")
        return None