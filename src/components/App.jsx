import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import { PrivatRoute, PublicRoute } from './ProtectedRoutes';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <PrivatRoute path="/login">
                <Contacts />
              </PrivatRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute path="/">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute path="/">
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>

    // <div className={css.container}>
    //   <h1 className={css.title}>Phonebook</h1>
    //   <ContactForm />
    //   <h2 className={css.title}>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>
  );
};

export default App;
