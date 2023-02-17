from rest_framework import generics, viewsets, mixins
from rest_framework.views import APIView
from .models import Contacts
from .serializers import ContactsSerializer

class ContactsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer
