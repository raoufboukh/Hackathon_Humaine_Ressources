# HRSystem/hr_app/calculators.py

from decimal import Decimal

class SalaireCalculator:
    def __init__(self, salaire_base, primes):
        # Input validation
        if salaire_base < 0:
            raise ValueError("Le salaire de base ne peut pas être négatif.")
        
        # Check if primes is a list and each prime has required attributes
        if not isinstance(primes, list):
            raise ValueError("Les primes doivent être une liste.")
        
        # Validate each prime has required attributes
        for prime in primes:
            if not hasattr(prime, 'montant') or not hasattr(prime, 'cotisable') or not hasattr(prime, 'imposable'):
                raise ValueError("Chaque prime doit avoir les attributs: montant, cotisable, imposable")

        self.salaire_base = Decimal(salaire_base)
        self.primes = primes

    def calculer_base_cotisable(self):
        """Calcule la base cotisable : salaire de base + primes cotisables."""
        return self.salaire_base + sum(prime.montant for prime in self.primes if prime.cotisable)

    def calculer_base_imposable(self):
        """Calcule la base imposable : salaire de base + primes imposables."""
        return self.salaire_base + sum(prime.montant for prime in self.primes if prime.imposable)

    def calculer_retenues_sociales(self, taux_cnas=0.09):
        """Calcule les retenues sociales sur la base cotisable."""
        if not 0 <= taux_cnas <= 1:
            raise ValueError("Le taux CNAS doit être compris entre 0 et 1.")
        base_cotisable = self.calculer_base_cotisable()
        return base_cotisable * Decimal(taux_cnas)

    def calculer_revenu_imposable(self):
        """Calcule le revenu imposable : base imposable - retenues sociales."""
        base_imposable = self.calculer_base_imposable()
        retenues_sociales = self.calculer_retenues_sociales()
        return base_imposable - retenues_sociales

    def calculer_irg(self, tranches=None):
        """Calcule l'impôt sur le revenu global (IRG) en fonction du revenu imposable."""
        revenu_imposable = self.calculer_revenu_imposable()
        if not tranches:
            # Default tax brackets and rates
            tranches = [
                (30000, 0.0),
                (60000, 0.20),
                (120000, 0.30),
                (float('inf'), 0.35),
            ]

        irg = Decimal('0.00')
        for i, (limit, rate) in enumerate(tranches):
            previous_limit = tranches[i - 1][0] if i > 0 else 0
            if revenu_imposable > previous_limit:
                taxable_amount = min(revenu_imposable - previous_limit, limit - previous_limit)
                irg += taxable_amount * Decimal(rate)
            else:
                break
        return irg

    def calculer_salaire_net(self):
        """Calcule le salaire net à payer après retenues sociales et IRG."""
        base_cotisable = self.calculer_base_cotisable()
        retenues_sociales = self.calculer_retenues_sociales()
        irg = self.calculer_irg()
        return base_cotisable - retenues_sociales - irg