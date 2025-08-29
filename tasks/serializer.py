from rest_framework import serializers
from .models import tasks

class TaskSerializer(serializers.ModelField):
    class Meta:
        model = tasks
        field = "__all__"