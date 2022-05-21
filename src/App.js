import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
