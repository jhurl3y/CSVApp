import * as React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    content: {
        marginTop: 20,
    },
    error: {
        marginTop: 5,
        color: "#FF0000",
    },
});

export default ({ onFileSelect, error }) => {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" className={classes.content}>
            <Button variant="contained" color="primary" component="label">
                Upload File
                <input
                    type="file"
                    accept=".csv"
                    id="file-upload"
                    style={{ display: "none" }}
                    onChange={onFileSelect}
                />
            </Button>
            {error && (
                <Typography variant="body1" className={classes.error}>
                    {error}
                </Typography>
            )}
        </Box>
    );
};
