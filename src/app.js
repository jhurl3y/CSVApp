import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FileTable from "./components/fileTable";

export default ({ data }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h3" gutterBottom>
                    CSV App
                </Typography>
                <FileTable data={data} />
            </Container>
        </React.Fragment>
    );
};
