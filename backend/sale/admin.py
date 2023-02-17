from django.contrib import admin
from django import forms
from django.utils.safestring import mark_safe
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import *

class SaleAdminForm(forms.ModelForm):
    contentSale = forms.CharField(widget=CKEditorUploadingWidget())
    contentPopup = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = Sale
        fields = '__all__'

class SaleAdmin(admin.ModelAdmin):

    form = SaleAdminForm
    list_display = ('id', 'title', 'created_at', 'updated_at', 'itemSale1', 'itemSale2', 'discount', 'photo', 'is_published')
    list_display_links = ('id', 'title')
    fields = ('title', 'contentSale', 'contentPopup', 'itemSale1', 'itemSale2', 'discount', 'photo', 'is_published')
    save_as = True
    save_on_top = True

    def get_photo(self, obj):
        if obj.photo:
            return mark_safe(f'<img src="{obj.photo.url}" width="50">')
        return '-'

    get_photo.short_description = 'Фото'

admin.site.register(Sale, SaleAdmin)