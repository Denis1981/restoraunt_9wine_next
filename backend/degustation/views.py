from rest_framework import generics, viewsets, mixins
from .models import Degustation
from .serializers import *
from rest_framework.views import APIView

class DegustationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Degustation.objects.all()
    serializer_class = DegustationSerializer