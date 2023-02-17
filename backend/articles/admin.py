from django.contrib import admin
from django import forms
from django.utils.safestring import mark_safe
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import *

class ArticlesAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = Articles
        fields = '__all__'

class ArticlesAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    form = ArticlesAdminForm
    list_display = ('id', 'title','slug', 'category', 'created_at', 'get_photo')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_filter = ('category', 'tags',)
    readonly_fields = ('views', 'created_at', 'get_photo')
    fields = ('title', 'slug', 'author', 'category', 'tags', 'content', 'photo', 'get_photo', 'views', 'created_at', 'is_published', 'title_page', 'description', 'keywords', 'og_type', 'og_title', 'og_description', 'twitter_creator', 'twitter_card', 'twitter_title', 'twitter_description',)
    save_as = True
    save_on_top = True

    def get_photo(self, obj):
        if obj.photo:
            return mark_safe(f'<img src="{obj.photo.url}" width="50">')
        return '-'

    get_photo.short_description = 'Фото'

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}



class TagAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}


admin.site.register(Articles, ArticlesAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Category, CategoryAdmin)


