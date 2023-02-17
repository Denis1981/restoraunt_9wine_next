from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from .models import Polytics
from .serializers import PolyticsSerializer

class PolyticsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Polytics.objects.all()
    serializer_class = PolyticsSerializer
