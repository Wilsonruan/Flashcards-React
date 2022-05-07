import './App.scss';
import './css/Card.scss';
import Carousel from './components/Carousel';

function App() {
  let Flashcards = require('./widgets/flashcards.json');
  return (
    <main className="flashcard-main-container">
        <h1>Flashcards React App</h1> 
        <Carousel
          instruction={Flashcards.instruction}
          items={Flashcards.data} />
    </main>
  );
}

export default App;
