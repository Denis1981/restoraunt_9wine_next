from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from .models import Menurest
from .serializers import MenurestSerializer

class MenurestViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Menurest.objects.all()
    serializer_class = MenurestSerializer
