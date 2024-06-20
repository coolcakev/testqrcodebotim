import React from 'react';
import QRCode from "react-qr-code";
import {Button} from "@mui/material";
import customAxious from "../../api/axious";

interface ListBodyItemProps {
    id: number;
    title: string;
    onDeleteHandler: () => Promise<void>
}

const ListBodyItem = (props: ListBodyItemProps) => {
    const {title,onDeleteHandler,id} = props
    const url=window.location.origin+"?title="+title
    const onDelete = async () => {
        await customAxious.delete(`qrs/${id}`)

        await onDeleteHandler()
    }
    return (
        <div className="flex gap-3 items-center">
            <QRCode
                size={100}
                style={{height: "auto", maxWidth: "100%", width: "100%"}}
                value={url}
            />
            <span>{title}</span>
            <Button className="!px-6 !py-2" variant="contained" color="error" onClick={onDelete}>Видалити</Button>

        </div>
    );
};

export default ListBodyItem;