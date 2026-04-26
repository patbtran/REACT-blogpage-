import './App.css'
import { Routes, Route } from 'react-router-dom';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';
import Login from './Components/login/Login';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import HomePage from './pages/HomePage';


function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pages" element={<HomePage />} />
        <Route path="/post/:id" element={<IndividualPostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
