from django.contrib import admin
from .models import Post, ContactMessage


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
	list_display = ("title", "created_at")
	search_fields = ("title", "content")


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
	list_display = ("nome", "email", "created_at")
	search_fields = ("nome", "email", "mensagem")
	readonly_fields = ("nome", "email", "mensagem", "created_at")
