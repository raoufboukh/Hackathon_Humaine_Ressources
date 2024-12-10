# employees/models.py

from mongoengine import Document, fields
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

# Custom User Manager
class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        user = self.create_user(
            email,
            username=username,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

# Custom User Model
class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    username = models.CharField(max_length=30, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin

# Employee Model
class Employee(Document):
    """
    Employee model to store basic employee information.
    """
    first_name = fields.StringField(max_length=50, required=True)
    last_name = fields.StringField(max_length=50, required=True)
    email = fields.EmailField(required=True, unique=True)
    position = fields.StringField(max_length=100)
    department = fields.StringField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

# Leave Request Model
class LeaveRequest(Document):
    """
    Model to handle absence and leave management.
    """
    employee = fields.ReferenceField(Employee, required=True)
    start_date = fields.DateField(required=True)
    end_date = fields.DateField(required=True)
    reason = fields.StringField()
    status = fields.StringField(choices=['Pending', 'Approved', 'Rejected'], default='Pending')

# Notification Model
class Notification(Document):
    """
    Model to handle notifications for users.
    """
    user = fields.ReferenceField(User, required=True)
    message = fields.StringField(required=True)
    status = fields.BooleanField(default=False)  # False means unread, True means read

# Chat Model
class Chat(Document):
    """
    Model to handle chat messages between users.
    """
    sender = fields.ReferenceField(User, required=True, reverse_delete_rule=fields.CASCADE)
    receiver = fields.ReferenceField(User, required=True, reverse_delete_rule=fields.CASCADE)
    content = fields.StringField(required=True)
    timestamp = fields.DateTimeField(auto_now_add=True)