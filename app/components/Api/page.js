import axios from 'axios';

const GetData = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/add-id`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default GetData;