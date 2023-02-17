from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from .models import Reviews
from .serializers import ReviewsSerializer
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

# class ReviewsSetPagination(PageNumberPagination):
#     page_size = 50
#     page_size_query_param = 'page_size'
#     max_page_size = 1000

class ReviewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
    # pagination_class = ReviewsSetPagination