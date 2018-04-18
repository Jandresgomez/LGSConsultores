from django.db import models

class Incapacidad(models.Model):
	fecha_inicio = models.DateTimeField()
	fecha_fin = models.DateTimeField()
	costo = models.IntegerField()
	cedula_empleado = models.CharField(max_length=50)
	es_prorroga = models.BooleanField(default=False)



