from django.contrib import admin
from django import forms
from django.utils.safestring import mark_safe
from .models import *

class ReviewsAdminForm(forms.ModelForm):

    class Meta:
        model = Reviews
        fields = '__all__'

class ReviewsAdmin(admin.ModelAdmin):
    form = ReviewsAdminForm
    list_display = ('id', 'title', 'content', 'dateReview', 'photo', 'get_photo','is_published')
    list_display_links = ('id', 'title')
    readonly_fields = ('created_at', 'get_photo')
    fields = ('title', 'content', 'dateReview', 'photo', 'get_photo', 'is_published')
    save_as = True
    save_on_top = True

    def get_photo(self, obj):
        if obj.photo:
            return mark_safe(f'<img src="{obj.photo.url}" width="50">')
        return '-'

    get_photo.short_description = 'Фото'

admin.site.register(Reviews, ReviewsAdmin)
