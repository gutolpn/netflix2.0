import './App.css';
import { categories } from './api';
import Row from './components/Row'
import Banner from "./components/Banner"
import Nav from "./components/Nav"

function App() {
  return (
    <div>

        {/*Navbar*/}
        {/*Banner*/}
        {/*Categorias - Linhas*/}

        <Nav></Nav>
        <Banner></Banner>

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
