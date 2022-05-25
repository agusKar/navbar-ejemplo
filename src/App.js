import './App.css';
import NavBar from './components/NavBar'
function App() {
  const arreglo = [1, 2, 3]
  return (
    <div className="App">
      <NavBar />
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-6" id="acaVanLosNumeros">
            Columna 1
          </div>
          <div className="col-md-6">
            Columna 2
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
