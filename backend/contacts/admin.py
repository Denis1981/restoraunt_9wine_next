from django.contrib import admin
from django import forms
from .models import *
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class ContactsAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())
    class Meta:
        model = Contacts
        fields = '__all__'


class ContactsAdmin(admin.ModelAdmin):

    form = ContactsAdminForm
    list_display = ('id', 'title', 'address', 'phone', 'mail', 'time1', 'time2', 'time3', 'content', 'vk', 'telegram')
    list_display_links = ('id', 'title')
    fields = ('title', 'address', 'phone', 'mail', 'time1', 'time2', 'time3', 'content', 'vk', 'telegram')
    save_as = True
    save_on_top = True

admin.site.register(Contacts, ContactsAdmin)