import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoListWithPriority = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, priority, completed: false }]);
      setNewTask(""); 
      setPriority("Moyenne");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const markAsCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Todo List avec Priorités</h2>
      
      <p><strong>Total des tâches :</strong> {totalTasks}</p>
      <p><strong>Tâches terminées :</strong> {completedTasks}</p>

      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />

      <ul style={styles.list}>
        {filteredTasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none", fontWeight: "bold" }}>
              {task.name} - {task.priority}
            </span>
            <button style={styles.completeButton} onClick={() => markAsCompleted(index)}>
              {task.completed ? "Annuler" : "Terminé"}
            </button>
            <button style={styles.deleteButton} onClick={() => removeTask(index)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Nom de la tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} style={styles.select}>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button style={styles.addButton} onClick={addTask}>Ajouter</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "400px",
    margin: "20px auto",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  inputContainer: {
    marginTop: "10px",
    display: "flex",
    gap: "5px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  completeButton: {
    backgroundColor: "#28A745",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginLeft: "5px",
  },
  deleteButton: {
    backgroundColor: "#DC3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default TodoListWithPriority;
