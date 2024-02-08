import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListPoliticians from './pages/ListPoliticians';
import DetailPoliticians from './pages/DetailPoliticians';
import ListAuthors from './pages/ListAuthors';
import DetailAuthors from './pages/DetailAuthors';
import ListActresses from './pages/ListActresses';
import DetailActresses from './pages/DetailActresses';
import ListActors from './pages/ListActors';
import DetailActors from './pages/DetailActors';

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/authors' element={<ListAuthors />} />
          <Route path='/authors/:id' element={<DetailAuthors />} />
          <Route path='/actresses' element={<ListActresses />} />
          <Route path='/actresses/:id' element={<DetailActresses />} />
          <Route path='/actors' element={<ListActors />} />
          <Route path='/actors/:id' element={<DetailActors />} />
          <Route path='/politicians' element={<ListPoliticians />} />
          <Route path='/politicians/:id' element={<DetailPoliticians />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#add8e6' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Public Figures</a>
            <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/authors">Author</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/actresses">Actress</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/actors">Actor</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/politicians">Politician</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer className='container-fluid text-center' style={{ backgroundColor: '#add8e6' }}>© 2024</footer>
    </div>
  );
}
