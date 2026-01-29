import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Solutions from '@/pages/Solutions';
import Portfolio from '@/pages/Portfolio';
import Courses from '@/pages/Courses';
import Quiz from '@/pages/Quiz';
import Book from '@/pages/Book';
import LeadMagnet from '@/pages/LeadMagnet';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import Login from '@/pages/Login';
import Admin from '@/pages/Admin';
import Chatbot from '@/components/chatbot/Chatbot';

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/book" element={<Book />} />
          <Route path="/lead-magnet" element={<LeadMagnet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
