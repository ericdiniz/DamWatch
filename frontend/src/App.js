import { Box } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Funcionarios from './pages/Funcionarios';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#121212', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/funcionarios" element={<Funcionarios />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;