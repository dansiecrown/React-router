function H1({ children }) {
  return (
    <React.Fragment>
      <h1 style={{ fontSize: '58px', fontWeight: 400 }}>{children}</h1>
    </React.Fragment>
  );
}

function Item() {
  let location = useLocation();
  let { itemId } = useParams();
  console.log(location);
  // console.log(params);

  return (
    <div>
      <H1> Single Item</H1>

      <p>I am on a route of {itemId}</p>
    </div>
  );
}

export default Item;
