from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from pentagram.models import Photo
from pentagram.models import Comment
from pentagram.models import Like
from pentagram.serializers import UserSerializer
from pentagram.serializers import PhotoSerializer
from pentagram.serializers import CommentSerializer
from rest_framework.permissions import AllowAny
# Create your views here.

@api_view(['GET','POST'])
def photos(request):
    if request.method == "GET":
        photos = Photo.objects.all()
        serializer = PhotoSerializer(photos, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)
    if request.method == "POST":
        photo_serializer = PhotoSerializer(data=request.data)
        if photo_serializer.is_valid():
            photo_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=photo_serializer.errors)

@api_view(['GET','POST'])
def comments(request, id_photo):
    if request.method == "GET":
        comments = Comment.objects.filter(photo=id_photo)
        serializer = CommentSerializer(comments, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)
    if request.method == "POST":
        request.POST['photo'] = id_photo
        comment_serializer = CommentSerializer(data=request.data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=comment_serializer.errors)

@api_view(['POST'])
@permission_classes((AllowAny,))
def users(request):
    if request.method == "POST":
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=user_serializer.errors)

@api_view(['GET','POST'])
def likes(request, id_photo):
    if request.method == "GET":
        like = Like.objects.filter(photo=id_photo).count()
        return Response(status=status.HTTP_200_OK, data=like)
    if request.method == "POST":
        phot = Photo.objects.get(id=id_photo)
        like = Like.objects.filter(photo=phot, user=request.user).count()
        if like == 0:
            Like.objects.create(photo=phot, user=request.user).save()
            return Response(status=status.HTTP_200_OK)
        else:
            Like.objects.filter(photo=id_photo, user=request.user).delete()
            return Response(status=status.HTTP_205_RESET_CONTENT)