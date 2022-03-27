import './App.css';

function App() {
  return (
    <header className='header navbar-light bg-light'>
      
      <nav className='navbar'>
        <div className='container-fluid'>
        <h1 className='text-center fst-italic title'>INDUMENTARIA <br /> MVP <br /> DEPORTIVA</h1>
          <ul class="navbar-nav navegator ">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Preguntas frecuentes</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
          <form className='d-flex'>
            <input className='form-control me-2' type="search" placeholder="Search" aria-label="Search"/>
            <button className='btn btn-outline-success' type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default App;
