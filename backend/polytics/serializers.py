from rest_framework import serializers
from .models import Polytics

class PolyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Polytics
        fields = "__all__"