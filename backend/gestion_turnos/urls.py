from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, TurnoViewSet

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'turnos', TurnoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]