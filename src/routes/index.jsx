import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Item from '../pages/Item';
import Items from '../pages/Items';
import NewItem from '../pages/NewItem';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="items" element={<Items />}>
      {/* items/new  */}
      <Route path="new" element={<NewItem />} />
      {/* items/123456  itemId = 123456 */}
      <Route path=":itemId" element={<Item />} />
      {/* <Route index element={<LeagueStandings />} /> */}
    </Route>
    <Route path="/about" element={<About />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRouter;
