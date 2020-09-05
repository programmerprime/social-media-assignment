import { createMuiTheme } from '@material-ui/core/styles';

import {purple, green} from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green
    },
    status: {
        danger: 'orange'
    },
    spacing: 16
})

export default theme;