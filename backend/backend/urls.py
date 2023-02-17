from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from sale.views import *
from articles.views import *
from menus.views import *
from menurest.views import *
from reviews.views import *
from birthday.views import *
from degustation.views import *
from polytics.views import *
from forms.views import *
from events.views import *
from seo.views import *
from contacts.views import *
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'sale', SaleViewSet )
router.register(r'articles', ArticleViewSet )
router.register(r'menus', MenusViewSet )
router.register(r'reviews', ReviewsViewSet )
router.register(r'reserve', FormsReserveViewSet )
router.register(r'call', FormsCallViewSet )
router.register(r'events', EventsViewSet )
router.register(r'degustation', FormsReserveDegustationViewSet )
router.register(r'wineevening', DegustationViewSet )
router.register(r'happy', FormsReserveHappyViewSet )
router.register(r'birthday', BirthdayViewSet )
router.register(r'menurest', MenurestViewSet )
router.register(r'seo', SeoViewSet )
router.register(r'polytics', PolyticsViewSet )
router.register(r'contacts', ContactsViewSet )

admin.site.site_header = 'Администрирование | Винный ресторан 9wine'
admin.site.index_title = 'Административная панель'
admin.site.site_title = 'Винный ресторан 9wine'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)), # http://127.0.0.1:8000/api/v1/
    path('ckeditor/', include('ckeditor_uploader.urls')),
]


if settings.DEBUG:
    # urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    import debug_toolbar

    urlpatterns = [
                      path('__debug__/', include(debug_toolbar.urls)),
                  ] + urlpatterns
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)