import { Outlet } from 'react-router-dom';

export default function Items() {
  return (
    <div>
      <h1>Items</h1>
      {/* list of items */}
      {/* will be replaced with <NewItem /> or <Item /> depending on the route we go to */}
      <Outlet />
    </div>
  );
}
