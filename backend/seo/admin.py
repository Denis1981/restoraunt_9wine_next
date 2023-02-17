from django.contrib import admin
from django import forms
from django.utils.safestring import mark_safe
from .models import *


class SeoAdminForm(forms.ModelForm):

    class Meta:
        model = Seo
        fields = '__all__'

class SeoAdmin(admin.ModelAdmin):
    form = SeoAdminForm
    list_display = ('id', 'title', 'created_at', 'updated_at')
    list_display_links = ('id', 'title')
    fields = ('title', 'title_page', 'description', 'keywords', 'og_type', 'og_title', 'og_description',
              'twitter_creator', 'twitter_card', 'twitter_title', 'twitter_description',)
    readonly_fields = ('created_at', 'updated_at',)
    save_as = True
    save_on_top = True

admin.site.register(Seo, SeoAdmin)
