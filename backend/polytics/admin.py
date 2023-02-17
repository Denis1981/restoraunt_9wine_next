from django.contrib import admin
from django import forms
from .models import *
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class PolyticsAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())
    class Meta:
        model = Polytics
        fields = '__all__'


class PolyticsAdmin(admin.ModelAdmin):

    form = PolyticsAdminForm
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')
    fields = ('title', 'content')
    save_as = True
    save_on_top = True

admin.site.register(Polytics, PolyticsAdmin)