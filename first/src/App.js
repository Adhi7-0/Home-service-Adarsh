import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home';
import Login from './login';
import Register from './register'; // Import the Register component
import WorkersPage from './workerpage';
import FeedbackPage from './feedback';
import ServicePage from './service';
//import Aboutus from './about';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/workerpage" element={<WorkersPage />} />
          <Route path="/feedback" element={<FeedbackPage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;