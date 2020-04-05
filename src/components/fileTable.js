import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    buttonCol: {
        paddingRight: 4,
        paddingLeft: 4,
    },
    delete: {
        "&:hover": {
            color: "red",
        },
    },
});

export default ({ files }) => {
    const classes = useStyles();
    const handleView = () => {};
    const handleDelete = () => {};

    const fileData = files.map((row) => (
        <TableRow key={row.name}>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.size}</TableCell>
            <TableCell align="right">{row.modified}</TableCell>
            <TableCell className={classes.buttonCol} align="right">
                <Button onClick={handleView}>
                    <VisibilityIcon />
                </Button>
            </TableCell>
            <TableCell className={classes.buttonCol} align="right">
                <Button className={classes.delete} onClick={handleDelete}>
                    <DeleteIcon />
                </Button>
            </TableCell>
        </TableRow>
    ));

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>File Name</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">Last Modified</TableCell>
                        <TableCell align="right">&nbsp;</TableCell>
                        <TableCell align="right">&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{fileData}</TableBody>
            </Table>
        </TableContainer>
    );
};
