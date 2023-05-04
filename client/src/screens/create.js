import { useState } from 'react';
import Form from '../components/form'
import axios from '../components/axios';

const Create = () => {

    const [data, setData] = useState({
        photo: null,
        title: "",
        description: "",
    });

    const handleSubmit = async () => {
        // Converting object to form data
        const formData = new FormData();
        Object.keys(data).forEach(i => formData.append(i, data[i]));
        const res = await axios.post('/create', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        setData({
            photo: null,
            title: "",
            description: "",
        })
        alert(res.data.message);
    }

    return <Form
        data={data}
        handleSubmit={handleSubmit}
        setData={setData}
    />
}

export default Create