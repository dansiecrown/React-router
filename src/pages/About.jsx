import { HashLink } from 'react-router-hash-link';

export default function About({ isHome }) {
  if (isHome) {
    return (
      <div id="about">
        <h1>About Inside Home</h1>
        <section>
          <HashLink to=""> Back To The Top</HashLink>
        </section>
      </div>
    );
  }
  return <div id="about">About</div>;
}
