import  {createMuiTheme} from '@material-ui/core/styles';
import {indigo, pink} from "@material-ui/core/colors";

const myTheme = createMuiTheme({
  palette:{
      primary: indigo,
      secondary: pink
  }
});

export default myTheme;
