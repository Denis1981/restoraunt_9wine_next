from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from .models import Menus
from .serializers import MenusSerializer

class MenusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Menus.objects.all()
    serializer_class = MenusSerializer

