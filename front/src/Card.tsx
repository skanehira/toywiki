import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  owner: string;
  text: string;
}

export default function WikiCard(props: Props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          {props.owner}
        </Typography>
        <Typography variant="body2">{props.text}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/edit/${props.id}`);
          }}
        >
          Edit
        </Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
