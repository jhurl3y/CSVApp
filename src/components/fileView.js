import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    main: {
        marginTop: 100,
        marginBottom: 100,
    },
});

export default ({ match }) => {
    const { filename } = match.params;
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.main}>
                <Typography variant="h4" gutterBottom>
                    {filename}
                </Typography>
            </Container>
        </React.Fragment>
    );
};
