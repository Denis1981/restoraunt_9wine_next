from rest_framework import generics, viewsets, mixins
from .models import Sale
from .serializers import *
from rest_framework.views import APIView


class SaleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
