from rest_framework import serializers
from .models import FormsReserve, FormsCall, FormsReserveDegustation, FormsReserveHappy

class FormsReserveSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormsReserve
        fields = "__all__"


class FormsCallSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormsCall
        fields = "__all__"

class FormsReserveDegustationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormsReserveDegustation
        fields = "__all__"

class FormsReserveHappySerializer(serializers.ModelSerializer):
    class Meta:
        model = FormsReserveHappy
        fields = "__all__"