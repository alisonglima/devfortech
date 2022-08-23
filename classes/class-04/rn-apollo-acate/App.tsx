import { ApolloProvider } from "@apollo/client";
import Home from "./src/screens/Home";
import client from "./src/service";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
