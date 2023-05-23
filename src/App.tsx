import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { Dashboard, CreateNewPurchaseOrder } from './pages';
import { withProtectedRoute } from './helpers/ProtectedRoute';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="login-wrapper">
                <Login />
              </div>
            }
          />
          <Route path="/dashboard" element={withProtectedRoute(Dashboard)} />
          <Route
            path="/new-purchase-order"
            element={withProtectedRoute(CreateNewPurchaseOrder)}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
