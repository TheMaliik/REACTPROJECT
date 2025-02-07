import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Counter = ({ initialCount, step }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div style={styles.container}>
      <h2>Compteur: {count}</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setCount(count + step)}>
          +{step}
        </button>
        <button style={styles.button} onClick={() => setCount(count - step)}>
          -{step}
        </button>
      </div>
      <button style={styles.resetButton} onClick={() => setCount(initialCount)}>
        Reset
      </button>
    </div>
  );
};


const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "220px",
    margin: "20px auto",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
  },
  resetButton: {
    marginTop: "10px",
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#DC3545",
    color: "white",
  },
};

export default Counter;
