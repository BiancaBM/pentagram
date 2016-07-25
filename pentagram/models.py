import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.db import models

from django.dispatch.dispatcher import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token

def photos_directory(instance, filename):
    return 'photo/user_{0}/{1}_{2}'.format(instance.user.username, uuid.uuid1(), filename)

class Photo(models.Model):
    user = models.ForeignKey(User)
    photo = models.ImageField(upload_to=photos_directory, null=True)

class Comment(models.Model):
    user = models.ForeignKey(User)
    photo = models.ForeignKey(Photo)
    comment = models.TextField()

class Like(models.Model):
    user = models.ForeignKey(User)
    photo = models.ForeignKey(Photo)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)