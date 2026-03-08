import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkExperience } from './components/WorkExperience';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogPost } from './components/BlogPost';
import './styles/globals.css';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
