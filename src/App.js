import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Layout from './components/Layout';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeListPage from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EmployeeListPage />}  />
        <Route path="/employeecreate" element={<EmployeeCreate />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
