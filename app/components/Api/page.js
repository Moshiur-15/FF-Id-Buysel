import axios from 'axios';

const GetData = async() => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/add-id`);
    const data = res.data;
    return data;
};

export default GetData;