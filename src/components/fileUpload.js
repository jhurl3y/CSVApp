import * as React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    content: {
        marginTop: 20,
    },
});

export default ({ onFileSelect }) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
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
        </div>
    );
};
