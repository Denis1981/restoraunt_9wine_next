from django.contrib import admin
from django import forms
from .models import *
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class BirthdayAdminForm(forms.ModelForm):
    happy_package = forms.CharField(widget=CKEditorUploadingWidget())
    class Meta:
        model = Birthday
        fields = '__all__'


class BirthdayAdmin(admin.ModelAdmin):

    form = BirthdayAdminForm
    list_display = ('id', 'title',)
    list_display_links = ('id', 'title')
    fields = ('title', 'price', 'akciya1_title', 'akciya2_title', 'akciya3_title', 'akciya1_desc', 'akciya2_desc', 'akciya3_desc', 'happy_package_quota', 'happy_package')
    save_as = True
    save_on_top = True

admin.site.register(Birthday, BirthdayAdmin)