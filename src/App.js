import './App.css';
import { categories } from './api';
import Row from './components/Row'

function App() {
  return (
    <div>

        {categories.map( (category) => {

            return  <Row title={category.title} />

        })}

    </div>
  );
}

export default App;
