from django.contrib import admin
from django import forms
from .models import *
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class DegustationAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())
    class Meta:
        model = Degustation
        fields = '__all__'


class DegustationAdmin(admin.ModelAdmin):

    form = DegustationAdminForm
    list_display = ('id', 'title',)
    list_display_links = ('id', 'title')
    fields = ('title', 'date', 'price', 'content')
    save_as = True
    save_on_top = True

admin.site.register(Degustation, DegustationAdmin)