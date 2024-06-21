import React, {useEffect, useState} from 'react';
import {QrcodeModel} from "../../api/models/api.models";
import AddFormQr from "../../components/AddFormQr";
import ListqrBody from "../../components/ListBody/ListqrBody";
import {useSearchParams} from "react-router-dom";
import {customRequestAxiuos} from "../../api/customRequestAxiuos";
import customAxious from "../../api/axious";

const Home = () => {
    const [searchParams]=useSearchParams()
    const [items, setItems] = useState<QrcodeModel[]>([]);

    const fetchQrCodes = async () => {
        await customRequestAxiuos(() => customAxious.get<QrcodeModel[]>('qrs'), async (data) => setItems(data))
    }

    useEffect(() => {
        fetchQrCodes()
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