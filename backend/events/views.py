from rest_framework import generics, viewsets, mixins
from .models import Events
from .serializers import *
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

class EventsSetPagination(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 1000

class EventsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer
    pagination_class = EventsSetPagination