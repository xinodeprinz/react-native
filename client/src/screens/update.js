import { useEffect, useState } from 'react';
import Form from '../components/form';
import axios from '../components/axios';

const Update = ({ route }) => {
    const [data, setData] = useState({
        title: "",
        body: "",
        photo: null,
    });
    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        const res = await axios.get(`/blogs/${route.params.id}`);
        setData(res.data);
    }

    const handleSubmit = async () => {
        // Converting object to form data
        const formData = new FormData();
        Object.keys(data).forEach(i => formData.append(i, data[i]));
        const res = await axios.put(`/update/${route.params.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert(res.data.message);
    }

    return <Form
        isCreate={false}
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
    />
}

export default Update