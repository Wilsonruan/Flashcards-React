import './App.css';
import './css/Card.css';
import Carousel from './components/Carousel';

function App() {
  let Flashcards = require('./widgets/flashcards1.json');
  return (
    <main className="flashcard-main-container">
        <Carousel
          instruction={Flashcards.instruction}
          items={Flashcards.data} />
    </main>
  );
}

export default App;
