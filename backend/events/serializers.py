import io

from rest_framework import serializers
from .models import Events

class EventsSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Events
        fields = "__all__"