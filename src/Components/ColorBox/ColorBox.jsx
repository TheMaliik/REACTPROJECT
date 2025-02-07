import { useState } from "react";


// eslint-disable-next-line react/prop-types
const ColorBox = ({ initialColor, colorOptions }) => {
  const [bgColor, setBgColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ ...styles.container, backgroundColor: bgColor }}>
      <button style={styles.button} onClick={changeColor}>
        Changer de couleur
      </button>
    </div>
  );
};


const styles = {
  container: {
    width: "150px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    margin: "20px auto",
    transition: "background-color 0.3s ease",
  },
  button: {
    padding: "10px",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
  },
};

export default ColorBox;
