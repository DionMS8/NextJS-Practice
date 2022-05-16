import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Error.....</h1>
      <h2>Sorry, the page you requested cannot be found.</h2>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a>Home page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
