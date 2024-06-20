import React from 'react';
import ListBodyItem from "./ListBodyItem";
import {QrcodeModel} from "../../api/models/api.models";

interface ListqrBodyProps {
    items: QrcodeModel[]
    onDeleteHandler: () => Promise<void>
}

const ListqrBody = (props: ListqrBodyProps) => {
    const {items,onDeleteHandler} = props

    return (
        <div className="flex flex-col gap-3 mt-4 h-[70vh] overflow-y-auto">
            {items.map((item) => (
                <ListBodyItem key={item.id} id={item.id} title={item.title} onDeleteHandler={onDeleteHandler}/>
            ))}
        </div>
    );
};

export default ListqrBody;