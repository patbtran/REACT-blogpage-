import './App.css'
import { Routes, Route } from 'react-router-dom';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/post/:id" element={<IndividualPostPage />} />
      </Routes>
    </div>
  );
}

export default App;
