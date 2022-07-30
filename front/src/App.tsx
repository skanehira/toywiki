import { DrawerAppBar } from "./TopBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { memo, useCallback, useState } from "react";
import WikiCard from "./Card";

let count = 0;

const CardList = memo(() => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(100)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <WikiCard title="hoge" author="gorilla" text="hogehoge" />
        </Grid>
      ))}
    </Grid>
  );
});

function App() {
  const [term, setTerm] = useState("");
  console.log(++count);

  const onChange = useCallback(
    (event: any) => {
      setTerm(event.target.value);
    },
    [setTerm]
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DrawerAppBar title="Toy Wiki" onChange={onChange} />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <CardList />
        </Box>
      </Box>
    </>
  );
}

export default App;
