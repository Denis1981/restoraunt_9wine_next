from django.contrib import admin
from django import forms
from django.utils.safestring import mark_safe
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import *

class MenurestAdminForm(forms.ModelForm):
    wine = forms.CharField(widget=CKEditorUploadingWidget())
    wine_bar = forms.CharField(widget=CKEditorUploadingWidget())
    bar = forms.CharField(widget=CKEditorUploadingWidget())
    menu = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = Menurest
        fields = '__all__'

class MenurestAdmin(admin.ModelAdmin):
    form = MenurestAdminForm
    list_display = ('id', 'title', 'created_at', 'updated_at')
    list_display_links = ('id', 'title')
    fields = ('title', 'wine', 'wine_bar', 'bar', 'menu', 'created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at',)
    save_as = True
    save_on_top = True

admin.site.register(Menurest, MenurestAdmin)
