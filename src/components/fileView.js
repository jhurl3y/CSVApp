import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { getFileData } from "../lib/utils";

const useStyles = makeStyles({
    main: {
        marginTop: 100,
        marginBottom: 100,
    },
    error: {
        marginTop: 5,
        color: "#FF0000",
    },
});

const renderFileData = (data) => {
    const fileData = data.map((row, index) => (
        <TableRow key={index}>
            {row.map((item) => (
                <TableCell>{item}</TableCell>
            ))}
        </TableRow>
    ));

    return fileData;
};

export default ({ match }) => {
    const { filename } = match.params;
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const [fileData, setFileData] = useState([]);
    const [error, setError] = useState(null);

    if (!loaded) {
        getFileData(filename)
            .then((resp) => {
                if (resp.status === 200) {
                    setFileData(resp.data.file);
                } else {
                    setError(resp.message);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(setLoaded(true));
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.main}>
                <Typography variant="h4" gutterBottom>
                    {filename}
                </Typography>
                {fileData && (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>{renderFileData(fileData)}</TableBody>
                        </Table>
                    </TableContainer>
                )}
                {error && (
                    <Typography variant="body1" className={classes.error}>
                        {error}
                    </Typography>
                )}
            </Container>
        </React.Fragment>
    );
};
