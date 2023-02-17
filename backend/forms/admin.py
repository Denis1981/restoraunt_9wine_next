from django.contrib import admin
from django import forms
from .models import *

class FormsReserveAdminForm(forms.ModelForm):

    class Meta:
        model = FormsReserve
        fields = '__all__'

class FormsReserveAdmin(admin.ModelAdmin):

    form = FormsReserveAdminForm
    list_display = ('id', 'title', 'phone', 'comment', 'dateReserve', 'timeReserve', 'quantity')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    readonly_fields = ('created_at', 'updated_at')
    fields = ('title', 'phone', 'comment', 'dateReserve', 'timeReserve', 'quantity')
    save_as = True
    save_on_top = True

class FormsCallAdminForm(forms.ModelForm):

    class Meta:
        model = FormsCall
        fields = '__all__'

class FormsCallAdmin(admin.ModelAdmin):

    form = FormsReserveAdminForm
    list_display = ('id', 'title', 'phone')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    readonly_fields = ('created_at', 'updated_at')
    fields = ('title', 'phone',)
    save_as = True
    save_on_top = True

class FormsReserveDegustationAdminForm(forms.ModelForm):

    class Meta:
        model = FormsReserveDegustation
        fields = '__all__'

class FormsReserveDegustationAdmin(admin.ModelAdmin):

    form = FormsReserveDegustationAdminForm
    list_display = ('id', 'title', 'phone', 'dateReserve', 'timeReserve', 'quantity')
    list_display_links = ('id', 'title')
    readonly_fields = ('created_at', 'updated_at')
    search_fields = ('title',)
    fields = ('title', 'phone', 'dateReserve', 'timeReserve', 'quantity')
    save_as = True
    save_on_top = True

class FormsReserveHappyAdminForm(forms.ModelForm):

    class Meta:
        model = FormsReserveHappy
        fields = '__all__'

class FormsReserveHappyAdmin(admin.ModelAdmin):

    form = FormsReserveHappyAdminForm
    list_display = ('id', 'title', 'phone', 'dateReserve', 'timeReserve', 'quantity')
    list_display_links = ('id', 'title')
    readonly_fields = ('created_at', 'updated_at')
    search_fields = ('title',)
    fields = ('title', 'phone', 'dateReserve', 'timeReserve', 'quantity')
    save_as = True
    save_on_top = True

admin.site.register(FormsReserve, FormsReserveAdmin)
admin.site.register(FormsCall, FormsCallAdmin)
admin.site.register(FormsReserveDegustation, FormsReserveDegustationAdmin)
admin.site.register(FormsReserveHappy, FormsReserveHappyAdmin)