import React,{Suspense,lazy} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './pages/home/home'
import Nav from './components/nav/Nav'
import Container from './components/container/container'
import Blogs from './pages/Blogs/Blogs';
const Footer = lazy(()=>import('./components/footer/Footer'));

function App() {
  return (
    <div className={styles.App}>
      <Router>
      <header style={{
        zIndex:"1",
        position:"relative",
        backgroundColor:"#21252c"
      }}>
        <Container style={{
          marginBottom:"0px"
        }}>
          <Nav/>
        </Container>
      </header>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>      
      <section style={{
        backgroundColor:"#21252c",
        position:"relative"
      }}>
        <Container style={{
          marginBottom:"0px"
        }}>
          <Suspense fallback={<div>loading ...</div>}>
                <Footer/>
          </Suspense>   
        </Container>    
      </section>
      </Router>
    </div>
  );
}

export default App;
