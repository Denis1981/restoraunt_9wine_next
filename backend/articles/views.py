from rest_framework import generics, viewsets, mixins
from .models import Articles
from .serializers import *
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

# class ArticleSetPagination(PageNumberPagination):
#     page_size = 50
#     page_size_query_param = 'page_size'
#     max_page_size = 1000

class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer
    # pagination_class = ArticleSetPagination