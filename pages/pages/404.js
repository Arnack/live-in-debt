import React from 'react';
import Link from 'next/link';

export default function Page404() {
  return (
    <div className="view">
      <div className="view-content view-pages view-error d-flex justify-content-center align-items-center flex-column">
        <h1 className="display-404">
          4<span></span>4
        </h1>
        <h4>Page Not Found!!</h4>
        <p className="text-muted">
          The page you're looking doesn't exist. Go to{' '}
          <Link href="/">
            <a>homepage.</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
