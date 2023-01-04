import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>DICTIONARY</h1>
          <h2>Enhance Your Vocabulary</h2>
        </header>
        <main>
          <Dictionary defaultKeyword="universe" />
        </main>
        <footer className="app-footer">
          <a
            href="https://github.com/olesyaMuzyka/dictionary-project"
            target="blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>
          <strong> by Olesya Muzyka</strong>
        </footer>
      </div>
    </div>
  );
}
