import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import PortfolioLanding from './app/portfolio/PortfolioLanding';
import EmployeeTableLanding from './app/employee-table/EmployeeTableLanding';
import EmployeeListPage from './app/employee-table/EmployeeList';
import EmployeeDetails from './app/employee-table/EmployeeDetail';
import About from './app/employee-table/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PortfolioLanding />} />
      <Route element={<EmployeeTableLanding />}>
        <Route path="/employeetable" element={<EmployeeListPage />} />
        <Route path="/employeetable/employee/:id" element={<EmployeeDetails />} />
        <Route path="/employeetable/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
