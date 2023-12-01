from django import forms
from .models import asingatura

class MiModeloForm(forms.ModelForm):
    class Meta:
        model = asingatura
        fields = ['name'] # O especifica aquí los campos que deseas incluir en el formulario