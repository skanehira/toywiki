import Grid from "@mui/material/Grid";
import { memo } from "react";
import WikiCard from "./Card";
import { Wikis } from "./wiki";

interface Props {
  wikis: Wikis;
}

export const CardList = memo((props: Props) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {props.wikis.map((wiki) => (
        <Grid item xs={2} sm={4} md={4} key={wiki.id}>
          <WikiCard
            title={wiki.title}
            owner={wiki.owner}
            text={wiki.text}
            id={wiki.id}
          />
        </Grid>
      ))}
    </Grid>
  );
});
