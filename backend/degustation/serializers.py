from rest_framework import serializers
from .models import Degustation

class DegustationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degustation
        fields = "__all__"