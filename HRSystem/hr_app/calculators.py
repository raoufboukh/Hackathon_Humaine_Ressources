# calculators.py

from decimal import Decimal

class Prime:
    """Placeholder class for Prime objects."""
    def __init__(self, montant, cotisable, imposable):
        self.montant = Decimal(montant)
        self.cotisable = cotisable
        self.imposable = imposable

class SalaireCalculator:
    def __init__(self, salaire_base, primes):
        if salaire_base < 0:
            raise ValueError("Le salaire de base ne peut pas être négatif.")
        if not isinstance(primes, list):
            raise ValueError("Les primes doivent être une liste.")
        for prime in primes:
            if not all(hasattr(prime, attr) for attr in ['montant', 'cotisable', 'imposable']):
                raise ValueError("Chaque prime doit avoir les attributs: montant, cotisable, imposable")

        self.salaire_base = Decimal(salaire_base)
        self.primes = primes

    def calculer_base_cotisable(self):
        return self.salaire_base + sum(prime.montant for prime in self.primes if prime.cotisable)

    def calculer_base_imposable(self):
        return self.salaire_base + sum(prime.montant for prime in self.primes if prime.imposable)

    def calculer_retenues_sociales(self, taux_cnas=0.09):
        if not 0 <= taux_cnas <= 1:
            raise ValueError("Le taux CNAS doit être compris entre 0 et 1.")
        base_cotisable = self.calculer_base_cotisable()
        return base_cotisable * Decimal(taux_cnas)

    def calculer_revenu_imposable(self):
        base_imposable = self.calculer_base_imposable()
        retenues_sociales = self.calculer_retenues_sociales()
        return base_imposable - retenues_sociales

    def calculer_irg(self, tranches=None):
        revenu_imposable = self.calculer_revenu_imposable()
        if not tranches:
            tranches = [
                (0, 15000, 0.00),
                (15000, 30000, 0.20),
                (30000, 120000, 0.30),
                (120000, Decimal('Infinity'), 0.35),
            ]
        irg = Decimal('0.00')
        for lower, upper, rate in tranches:
            if revenu_imposable > lower:
                taxable_amount = min(revenu_imposable, upper) - lower
                irg += taxable_amount * Decimal(rate)
            else:
                break
        return irg

    def calculer_salaire_net(self):
        base_cotisable = self.calculer_base_cotisable()
        retenues_sociales = self.calculer_retenues_sociales()
        irg = self.calculer_irg()
        return base_cotisable - retenues_sociales - irg