import io

from rest_framework import serializers
from .models import Sale

class SaleSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Sale
        fields = "__all__"