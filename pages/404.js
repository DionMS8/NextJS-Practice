import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go('/'); => THIS TAKES A VALUE OF -1 OR +1]
      router.push('/'); // => THIS REDIRECTS TO THE HOME PAGE
    }, 3000);
  });

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
