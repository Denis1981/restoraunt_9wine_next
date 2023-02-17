from rest_framework import serializers
from .models import Menurest

class MenurestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menurest
        fields = "__all__"