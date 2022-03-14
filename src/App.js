import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { fetchTables } from './Redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  
  return (
    <Container>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </Container>
  );
}

export default App;
