import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  interface Prime {
    id: number;
    nom: string;
    montant: number;
    imposable: boolean;
    cotisable: boolean;
  }

  const [primes, setPrimes] = useState<Prime[]>([]);
  const [nom, setNom] = useState("");
  const [montant, setMontant] = useState("");
  const [imposable, setImposable] = useState(false);
  const [cotisable, setCotisable] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/primes/")
      .then((response) => setPrimes(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des primes:", error)
      );
  }, []);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newPrime = { nom, montant, imposable, cotisable };
    axios
      .post("http://127.0.0.1:8000/api/primes", newPrime)
      .then((response) => setPrimes([...primes, response.data]))
      .catch((error) =>
        console.error("Erreur lors de la création de la prime:", error)
      );
  };

  return (
    <section>
      <h1>Gestion des Primes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
          required
        />
        <input
          type="number"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          placeholder="Montant"
          required
        />
        <label>
          Imposable:
          <input
            type="checkbox"
            checked={imposable}
            onChange={(e) => setImposable(e.target.checked)}
          />
        </label>
        <label>
          Cotisable:
          <input
            type="checkbox"
            checked={cotisable}
            onChange={(e) => setCotisable(e.target.checked)}
          />
        </label>
        <button type="submit">Ajouter Prime</button>
      </form>
      <ul>
        {primes.map((prime) => (
          <li key={prime.id}>
            {prime.nom} - {prime.montant} DZD
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Admin;
