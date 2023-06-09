import { createContext, useState } from "react";

export const NewsletterContext = createContext();

export function NewsletterContextProvider(props) {
  const [email, setEmail] = useState();

  return (
    <NewsletterContext.Provider value={{ email, setEmail }}>
      {props.children}
    </NewsletterContext.Provider>
  );
}
