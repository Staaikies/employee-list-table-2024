import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Layout from './components/Layout';
import EmployeeListPage from './components/EmployeeList';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EmployeeListPage />}  />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
