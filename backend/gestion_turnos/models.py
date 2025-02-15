from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15)
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre

class Turno(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    descripcion = models.TextField()
    estado = models.CharField(max_length=20, default='Pendiente')  # Pendiente, Completado, Cancelado
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Turno de {self.cliente.nombre} el {self.fecha}"