import axios from 'axios';

const UserInfo = async () => {
    const  res  = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/userInfo`);
    const users = res.data;
    return users;
};

export default UserInfo;