import { useState } from "react";

console.log("APP MONTADA");

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
        {/* resto del JSX */}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

