import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
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
