import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import FileTable from "./components/fileTable";
import FileUpload from "./components/fileUpload";

const useStyles = makeStyles({
    main: {
        marginTop: 100,
        marginBottom: 100,
    },
});

export default ({ data }) => {
    const classes = useStyles();
    const [files] = useState(data);

    const onFileSelect = (event) => {
        console.log(event.target.files[0]);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.main}>
                <Typography variant="h3" gutterBottom>
                    CSV App
                </Typography>
                <FileTable files={files} />
                <Box display="flex" flexDirection="row-reverse">
                    <FileUpload onFileSelect={onFileSelect} />
                </Box>
            </Container>
        </React.Fragment>
    );
};
