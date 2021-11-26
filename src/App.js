import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import './App.css';
import Homepage from './pages/Homepage.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BottomActions from './components/FootBar.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5be7c4',
    },
    secondary: {
      main: '#7a58d1'
    },
    background: {
      default: "#73a54d"
    }

  },
});

function App() {
  return (
    <div className="App" >
      <ThemeProvider theme={theme} >

        <Router>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Homepage />} >

            </Route>
            <Route path="*" element={<Navigate to='/home' />}>

            </Route>
          </Routes>
          <BottomActions />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
