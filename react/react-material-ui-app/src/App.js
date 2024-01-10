import "./App.css";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import styled from "@emotion/styled";
import { Typography } from '@mui/material';
import { red, green, blue} from "@mui/material/colors";

function App() {
  return (
    <div>
      <Button variant="text">Hello World</Button>
      <Button startIcon={<AcUnitIcon />} variant="contained" size="large">
        Hello World
      </Button>
      <Button endIcon={<AcUnitIcon />} variant="outlined">
        Hello World
      </Button>
      <Button
        sx={{
          backgroundColor: "gray",
          color: "white",
          margin: 10,
          "&:hover": {
            backgroundColor: "black",
          },
          "&:disabled": {
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        Custom Style
      </Button>
      <Button color="secondary" variant="contained">secondary theme button</Button>
      <CustomButton>Custom Button</CustomButton>
      <CustomButtonTheme>Custom Theme Button</CustomButtonTheme>
      <Typography variant='h1' gutterBottom>h1. Heading</Typography>
      <Root>
        <Typography>down(md):red</Typography>
        <Typography>up(md):blue</Typography>
        <Typography>up(lg):green</Typography>
      </Root>
    </div>
  );
}

const CustomButton = styled(Button)({
  backgroundColor: "gray",
  color: "white",
  margin: 10,
  "&:hover": {
    backgroundColor: "black",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "black",
  },
});

const CustomButtonTheme = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  margin: 10,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main
  },
  "&:disabled": {
    backgroundColor: 'white',
    color: 'black'
  }
}))

const Root = styled(`div`)(({theme}) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  }
}))

export default App;