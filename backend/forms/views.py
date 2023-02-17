from rest_framework import generics, viewsets, mixins
from .models import FormsReserve, FormsCall, FormsReserveDegustation, FormsReserveHappy
from .serializers import FormsReserveSerializer, FormsCallSerializer, FormsReserveDegustationSerializer, FormsReserveHappySerializer

class FormsReserveViewSet(viewsets.ModelViewSet):
    queryset = FormsReserve.objects.all()
    serializer_class = FormsReserveSerializer

class FormsCallViewSet(viewsets.ModelViewSet):
    queryset = FormsCall.objects.all()
    serializer_class = FormsCallSerializer

class FormsReserveDegustationViewSet(viewsets.ModelViewSet):
    queryset = FormsReserveDegustation.objects.all()
    serializer_class = FormsReserveDegustationSerializer

class FormsReserveHappyViewSet(viewsets.ModelViewSet):
    queryset = FormsReserveHappy.objects.all()
    serializer_class = FormsReserveHappySerializer