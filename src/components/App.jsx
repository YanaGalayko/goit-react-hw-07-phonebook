import { ContactForm } from "./ContactForm/ContactForm";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import Loader from "./Loader/Loader";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && !isError && <Loader/>}
      {isError && <p>Sorry, something went wrong, please reload the page!</p>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList/> 
        <GlobalStyle/>  
    </Layout>
  )
}
