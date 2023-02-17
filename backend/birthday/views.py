from rest_framework import generics, viewsets, mixins
from .models import Birthday
from .serializers import *
from rest_framework.views import APIView

class BirthdayViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Birthday.objects.all()
    serializer_class = BirthdaySerializer

