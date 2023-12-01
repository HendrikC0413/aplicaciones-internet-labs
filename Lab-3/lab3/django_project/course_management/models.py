from django.db import models

# Create your models here.
class asingatura(models.Model):
	name = models.CharField(max_length=50)
	def __str__(self):
		return f"{self.name}"

class almuno(models.Model):
	name = models.CharField(max_length=50)
	apellidoP = models.CharField(max_length=50)
	apellidoM = models.CharField(max_length=50)
	fec_nac = models.CharField(max_length=30)
	#luego de crear las clases descubri el manytomanyfield que permite tener varias asignaturas con un alumno
	asingaturas = models.ManyToManyField(asingatura)
	def __str__(self):
		  return f"{self.name} {self.apellidoP} {self.apellidoM} {self.fec_nacs}"

#con el manytomanyfield evitamos crear tablas como esta nosotros por que en la base de datos se crea de manera automatica	
# (aun no se como eliminarlo de la base de datos (tener cuidado en los modelos))
class asignaturasXAlumno(models.Model):
	Acod = models.ForeignKey(asingatura, on_delete=models.CASCADE)
	Aid = models.ForeignKey(almuno, on_delete=models.CASCADE)