from rest_framework import serializers
from .models import LeaveRequest, Payroll, HRDocument, Prime
from django.contrib.auth.models import User

class PrimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prime
        fields = ['id', 'nom', 'montant', 'imposable', 'cotisable']
# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# Leave Request Serializer
class LeaveRequestSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = LeaveRequest
        fields = '__all__'

# Payroll Serializer
class PayrollSerializer(serializers.ModelSerializer):
    primes = PrimeSerializer(many=True)
    net_salary = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Payroll
        fields = ['id', 'user', 'salaire_base', 'primes', 'net_salary']

    def create(self, validated_data):
        primes_data = validated_data.pop('primes')
        payroll = Payroll.objects.create(**validated_data)
        for prime_data in primes_data:
            prime, created = Prime.objects.get_or_create(**prime_data)
            payroll.primes.add(prime)
        payroll.save()
        return payroll

    def update(self, instance, validated_data):
        primes_data = validated_data.pop('primes', None)
        if primes_data:
            instance.primes.clear()
            for prime_data in primes_data:
                prime, created = Prime.objects.get_or_create(**prime_data)
                instance.primes.add(prime)
        instance.salaire_base = validated_data.get('salaire_base', instance.salaire_base)
        instance.save()
        return instance
    
# HR Document Serializer
class HRDocumentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = HRDocument
        fields = '__all__'
