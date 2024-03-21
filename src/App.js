import './App.css';
import { categories } from './api';
import Row from './components/Row'

function App() {
  return (
    <div>

        {/*Navbar*/}
        {/*Banner*/}
        {/*Categorias - Linhas*/}

        {categories.map( (category) => {

            return  <Row 
                         key={category.name}
                         title={category.title} 
                         isLarge={category.isLarge}
                         path={category.path}
                    />

        })}

    </div>
  );
}

export default App;
