# employees/models.py

from mongoengine import Document, fields

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

    def __str__(self):
        return f"Leave request by {self.employee.first_name} {self.employee.last_name}"

# Payroll Model
class Payroll(Document):
    """
    Model for payroll tracking.
    """
    employee = fields.ReferenceField(Employee, required=True)
    pay_date = fields.DateField(required=True)
    gross_salary = fields.DecimalField(required=True, precision=2)
    deductions = fields.DecimalField(default=0.00, precision=2)
    net_salary = fields.DecimalField(precision=2)

    def __str__(self):
        return f"Payroll for {self.employee.first_name} {self.employee.last_name} on {self.pay_date}"

# Contract Model
class Contract(Document):
    """
    Model for contract and HR document management.
    """
    employee = fields.ReferenceField(Employee, required=True)
    contract_type = fields.StringField(choices=['Permanent', 'Temporary', 'Internship'], required=True)
    start_date = fields.DateField(required=True)
    end_date = fields.DateField()
    document = fields.FileField()  # Stores the contract file

    def __str__(self):
        return f"{self.contract_type} contract for {self.employee.first_name} {self.employee.last_name}"