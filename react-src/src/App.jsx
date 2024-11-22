import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Content from './components/Content';

const App = () => {
  return (
    <BrowserRouter basename='/project-000-277'>
      <Nav></Nav>
      <Content></Content>
    </BrowserRouter>
  );
};

export default App;
