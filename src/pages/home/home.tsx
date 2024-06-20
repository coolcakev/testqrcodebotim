import React, {useEffect, useState} from 'react';
import {QrcodeModel} from "../../api/models/api.models";
import customAxious from "../../api/axious";
import AddFormQr from "../../components/AddFormQr";
import ListqrBody from "../../components/ListBody/ListqrBody";
import {useSearchParams} from "react-router-dom";

const Home = () => {
    const [searchParams]=useSearchParams()
    const [items, setItems] = useState<QrcodeModel[]>([]);

    const fetchQrCodes = async () => {
        const res = await customAxious.get<QrcodeModel[]>('qrs')
        setItems(res.data)
    }

    useEffect(() => {
        fetchQrCodes()
        customAxious.get("qrs").then(res => console.log(res.data))
    }, [])

    const title = searchParams.get('title')
    return (
        <div className="h-screen  flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Selected QR Code :{title}</h1>
            <AddFormQr onSubmitHandle={fetchQrCodes}/>
            <ListqrBody items={items} onDeleteHandler={fetchQrCodes}/>
        </div>
    );
};

export default Home;