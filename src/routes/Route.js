/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth/index';
import DefaultLayout from '../pages/_layouts/default/index';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

// export default function MyRoute({ component: Component, isClosed, ...rest }) {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   if (isClosed && !isLoggedIn) {
//     return (
//       <Redirect
//         to={{
//           pathname: '/signin',
//           state: { prevPath: rest.location.pathname },
//         }}
//       />
//     );
//   }

//   // eslint-disable-next-line react/jsx-props-no-spreading
//   return <Route {...rest} component={Component} />;
// }

// MyRoute.defaultProps = {
//   isClosed: false,
// };

// MyRoute.propTypes = {
//   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
//     .isRequired,
//   isClosed: PropTypes.bool,
// };
