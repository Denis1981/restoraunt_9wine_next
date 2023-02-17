from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from .models import Seo
from .serializers import SeoSerializer

class SeoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Seo.objects.all()
    serializer_class = SeoSerializer
