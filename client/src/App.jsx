import NavBar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import RoutesClient from './routes/routes.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={`min-h-[50vh] flex flex-col bg-gray-200 mt-25`}>
          <NavBar />
          <main>
            <RoutesClient />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
