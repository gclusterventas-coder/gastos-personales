import { useState } from "react";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Comida");

  const addExpense = () => {
    if (!description || !amount) return;

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        category,
      },
    ]);

    setDescription("");
    setAmount("");
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Gestión de Gastos</h2>

        <input
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.input}
        >
          <option>Comida</option>
          <option>Transporte</option>
          <option>Vivienda</option>
          <option>Ocio</option>
        </select>

        <button onClick={addExpense} style={styles.button}>
          Agregar gasto
        </button>

        <ul style={styles.list}>
          {expenses.map((e) => (
            <li key={e.id} style={styles.item}>
              {e.description} – ${e.amount} ({e.category})
              <button
                onClick={() => removeExpense(e.id)}
                style={styles.remove}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
