import { useState } from "react";


// eslint-disable-next-line react/prop-types
const GradeManager = ({ initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote(""); // Réinitialisation de l'input après l'ajout
    } else {
      alert("Veuillez entrer une note valide entre 0 et 20.");
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h2>Gestionnaire de Notes</h2>
      <p>Moyenne : <strong>{calculateAverage()}</strong></p>

      <ul style={styles.list}>
        {notes.map((note, index) => (
          <li key={index} style={styles.listItem}>
            {note} / 20
            <button style={styles.deleteButton} onClick={() => removeNote(index)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      <div style={styles.inputContainer}>
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Entrez une note (0-20)"
          min="0"
          max="20"
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addNote}>
          Ajouter
        </button>
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
    width: "350px",
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
  deleteButton: {
    backgroundColor: "#DC3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
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
  addButton: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default GradeManager;
