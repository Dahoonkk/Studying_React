import "./App.css";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import styled from "@emotion/styled";
import { Typography } from '@mui/material';

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

export default App;
