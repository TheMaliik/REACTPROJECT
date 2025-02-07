import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './index.css';
import Counter from './Components/Counter/Counter';
import ListManager from './Components/ListManager/ListManager';
import ColorBox from './Components/ColorBox/ColorBox';
import GradeManager from './Components/GradeManager/GradeManager';
import TodoListWithPriority from './Components/ToDoListWithPriority/TodoListWithPriority';

function App() {
  return (
    <div className="App">
       <Counter initialCount={0} step={1} />
       <ListManager initialItems={["React", "Angular", "VueJs"]} placeholder="Entrez un nouvel élément" />
       <ColorBox 
        initialColor="#FF5733" 
        colorOptions={["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700", "#8A2BE2"]}
      />
      <GradeManager initialNotes={[12, 15, 8, 18]} />
      <TodoListWithPriority 
        initialTasks={[
          { name: "Finir le projet React", priority: "Haute", completed: false },
          { name: "Préparer le repas", priority: "Moyenne", completed: false },
          { name: "Aller courir", priority: "Basse", completed: false },
        ]}
      />
      <Header />
      <main>
        <h1>Welcome to MyWebsite</h1>
        <p>This is the main content of the website.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
