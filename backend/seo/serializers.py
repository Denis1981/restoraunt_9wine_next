from rest_framework import serializers
from .models import Seo

class SeoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seo
        fields = "__all__"