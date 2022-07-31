import { DrawerAppBar } from "./TopBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useCallback, useEffect, useState } from "react";
import { CardList } from "./CardList";
import { Wikis } from "./wiki";
import { InMemoryCache, ApolloClient, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/api",
  cache: new InMemoryCache(),
});

const fetchWikis = (setWiki: any) => {
  const query = gql`
    query GetWikis {
      wiki(owner: "skanehira") {
        id
        title
        text
        category
        owner
      }
    }
  `;
  client.query({ query: query }).then((resp: any) => {
    setWiki(resp.data.wiki);
  });
};

const searchWiki = (setWiki: any, term: string) => {
  const query = gql`
    query Search($term: String!) {
      search(term: $term) {
        id
        title
        text
      }
    }
  `;

  client
    .query({ query: query, variables: { term: term } })
    .then((resp: any) => {
      setWiki(resp.data.search);
    });
};

function App() {
  const [wikis, setWikis] = useState([] as Wikis);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (event.target.value) {
        searchWiki(setWikis, event.target.value);
      }
    },
    []
  );

  useEffect(() => {
    fetchWikis(setWikis);
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DrawerAppBar title="Toy Wiki" onChange={onChange} />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <CardList wikis={wikis} />
        </Box>
      </Box>
    </>
  );
}

export default App;
