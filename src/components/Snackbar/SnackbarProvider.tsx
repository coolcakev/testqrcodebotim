import * as React from 'react';
import {Button} from '@mui/material';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import {Cancel} from "@mui/icons-material";

export default function CustomSnackbarProvider() {
    return (
        <SnackbarProvider maxSnack={3} anchorOrigin={{horizontal:"right", vertical:"bottom" }} action={(snackbarId) => (
            <Button  color="inherit"  onClick={() => closeSnackbar(snackbarId)}>
                <Cancel/>
            </Button>
        )}>
        </SnackbarProvider>
    );
}