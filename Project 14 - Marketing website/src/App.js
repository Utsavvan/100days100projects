import { createRoot } from "react-dom/client";

import Title from './components/Title/Title';
import Content from './components/Content/Content';
import Cards from './components/Card/Card';
import Cta from './components/Cta/Cta';

import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <Title/>
        <Content/>
        <Cards/>
        <Cta/>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
