import './App.scss';
import './css/Card.scss';
import ProviderComponent from './components/Provider';
import Carousel from './components/Carousel';

function App() {
  let Flashcards = require('./widgets/flashcards.json');
  return (
    <main className="flashcard-main-container">
      <h1>Flashcards React App</h1>
      <ProviderComponent>
        <Carousel
          instruction={Flashcards.instruction}
          items={Flashcards.data} />
      </ProviderComponent>
    </main>
  );
}

export default App;
