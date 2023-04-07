import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Login />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;