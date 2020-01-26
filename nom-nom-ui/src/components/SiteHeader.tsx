import React from 'react';
import { SiteNavigation } from './SiteNavigation';
import { Link } from 'react-router-dom';

export const SiteHeader = () => <header className="split">
  <Link to="/" className="logo split">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 242">
      <path d="M62.996 47.14c-15.717 0-22.004 4.741-27.027 4.731-9.122-.018-20.507-35.258-8.284-35.258 12.463 0 20.771 10.382 20.771 10.382S56.765 0 62.996 0s14.54 26.995 14.54 26.995 8.308-10.382 20.77-10.382c12.224 0 .84 35.24-8.283 35.258-5.023.01-11.31-4.732-27.027-4.732zm58.39 51.095c.597.051 1.11.454 1.29 1.025a74.263 74.263 0 013.189 17.035c.29 4.205.105 8.707-.47 13.41a1.478 1.478 0 01-1.351 1.289c-8.868.693-15.468 1.554-15.468 2.586 0 .98 5.96 1.806 14.16 2.48.876.072 1.505.89 1.33 1.75-1.894 9.333-5.068 19.218-9.027 29.042a1.478 1.478 0 01-1.294.92c-15.213.787-30.317 1.959-30.317 3.519 0 1.416 12.452 2.513 26.13 3.291 1.034.06 1.692 1.14 1.263 2.08-4.771 10.467-10.254 20.615-15.824 29.671a1.47 1.47 0 01-1.18.697c-15.382.785-30.821 1.967-30.821 3.544 0 1.362 11.516 2.429 24.564 3.2 1.142.068 1.775 1.359 1.13 2.304C78.118 231.56 68.1 242 62.996 242c-7.13 0-23.84-20.358-38.262-46.387-.525-.947.128-2.118 1.209-2.18 13.648-.777 26.051-1.873 26.051-3.286 0-1.59-15.704-2.779-31.214-3.565a1.474 1.474 0 01-1.244-.808c-4.648-9.244-8.862-18.934-12.178-28.494-.317-.916.334-1.882 1.302-1.948 10.943-.74 19.758-1.705 19.758-2.897 0-1.292-10.37-2.319-22.58-3.08a1.482 1.482 0 01-1.332-1.065C1.471 137.705-.24 127.518.027 118.54a1.471 1.471 0 011.347-1.412c7.523-.66 12.899-1.46 12.899-2.403 0-.914-5.05-1.695-12.213-2.343-.837-.076-1.455-.836-1.335-1.668 1.622-11.24 5.729-21.645 11.8-30.416a1.49 1.49 0 011.112-.631c9.31-.704 16.353-1.589 16.353-2.654 0-.81-4.076-1.516-10.125-2.117-1.215-.12-1.78-1.59-.939-2.475 11.122-11.698 26.44-18.977 44.07-18.977 25.972 0 46.927 15.792 56.839 38.243a1.48 1.48 0 01-1.208 2.072c-6.008.6-10.051 1.303-10.051 2.11 0 .925 5.315 1.714 12.81 2.367zm-20.669 16.489c0-20.828-16.888-37.712-37.721-37.712s-37.721 16.884-37.721 37.712 16.888 37.711 37.721 37.711 37.721-16.884 37.721-37.711z" />
    </svg>
    <h3 className="middle">Nom Nom</h3>
  </Link>
  <SiteNavigation />
</header>
