import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EachTeamMatches from './components/EachTeamMatches';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
   <div>
     <HashRouter>
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/:id" element={<EachTeamMatches />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
     </HashRouter>
   </div>
  );
}

export default App;
