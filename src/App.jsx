import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import UserRegistration from './components/UserRegistration';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-indigo-600">User Management</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? 'text-indigo-600 font-semibold' : 'font-semibold text-ray-500 hover :text-gray-700 hover:border-gray-300'}
                      inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-1000 hover:text-indigo-600`
                    }
                  >
                    Registro
                  </NavLink>
                  <NavLink
                    to="/users"
                    className={({ isActive }) =>
                      `${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                      inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-1000 hover:text-indigo-600`
                    }
                  >
                    Lista de usuarios
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<UserRegistration />} />
                <Route path="/users" element={<UserList />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;