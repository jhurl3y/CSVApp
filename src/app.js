import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import FileTable from "./components/fileTable";
import FileUpload from "./components/fileUpload";
import { uploadFile } from "./lib/utils";

const useStyles = makeStyles({
    main: {
        marginTop: 100,
        marginBottom: 100,
    },
});

export default ({ data }) => {
    const classes = useStyles();
    const [files, setFiles] = useState(data);

    const onFileSelect = (event) => {
        const file = event.target.files[0];
        const data = new FormData();

        data.append("file", file);
        uploadFile("http://localhost:3000/upload", data)
            .then((resp) => {
                if (resp.status === 200) {
                    const { name, size, modified } = resp.file;

                    setFiles((prevFiles) => [
                        ...prevFiles,
                        { name, size, modified },
                    ]);
                } else {
                    console.log(resp.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
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
