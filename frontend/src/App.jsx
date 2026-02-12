import React from 'react';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    // We wrap everything in MainLayout (Navbar + Footer)
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;