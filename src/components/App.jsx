import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import { PrivatRoute, PublicRoute } from './ProtectedRoutes';
import { MainLoader } from './MainLoader';

const LoginForm = lazy(() => import('../pages/LoginForm'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<MainLoader />}>
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
                <LoginForm />
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
