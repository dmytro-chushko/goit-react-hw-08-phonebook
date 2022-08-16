import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetUserQuery } from 'redux/contacts/contactsOperations';

// import css from './App.module.css';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
import Header from './Header';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  const { data, isLoading } = useGetUserQuery();
  console.log(data);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
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
