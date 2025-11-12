from django.db import models


class Post(models.Model):
	title = models.CharField(max_length=200)
	content = models.TextField()
	image = models.ImageField(upload_to="posts/", blank=True, null=True)
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ["-created_at"]

	def __str__(self):
		return self.title


class ContactMessage(models.Model):
	nome = models.CharField(max_length=100)
	email = models.EmailField()
	mensagem = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ["-created_at"]

	def __str__(self):
		return f"{self.nome} <{self.email}> - {self.created_at:%Y-%m-%d %H:%M}"
