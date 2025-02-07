import { useState } from "react";


// eslint-disable-next-line react/prop-types
const ListManager = ({ initialItems, placeholder }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem(""); 
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>Liste :</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
            <button style={styles.deleteButton} onClick={() => removeItem(index)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addItem}>
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
    width: "300px",
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

export default ListManager;
