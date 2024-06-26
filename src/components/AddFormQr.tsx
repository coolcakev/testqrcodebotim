import React from 'react';
import {Button, TextField} from "@mui/material";
import customAxious from "../api/axious";
import {customRequestAxiuos} from "../api/customRequestAxiuos";
interface AddFormQrProps {
    onSubmitHandle: () => Promise<void>;
}

const AddFormQr = (props: AddFormQrProps) => {
    const {onSubmitHandle} = props
    const [title, setTitle] = React.useState('');

    const onSubmit = async (event: any) => {
        event.preventDefault();
        if (!title) return

       await customRequestAxiuos(() => customAxious.post('qrs', {title}), async () =>{
            setTitle('')
            await onSubmitHandle()
        })
    }

    return (
        <form className="flex gap-3" onSubmit={onSubmit}>
            <TextField id="outlined-basic" label="Код" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Button type="submit" variant="contained">Створити</Button>
        </form>
    );
};

export default AddFormQr;