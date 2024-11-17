from django.urls import path

from oauth.views import CreateNewUserView, RetrieveTokenView

urlpatterns = [
    path("sign-up", CreateNewUserView.as_view(), name='create_new_user'),
    path("token", RetrieveTokenView.as_view(), name='retrieve_access_token'),
]