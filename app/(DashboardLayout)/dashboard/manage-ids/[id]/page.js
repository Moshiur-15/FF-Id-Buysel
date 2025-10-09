import React from 'react';
import UpdatedComponent from '@/app/components/UpdatedComponent';
import axios from 'axios';

const Update = async ({ params }) => {
    const { id } = await params;
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/add-id/${id}`)
    const updatedData = res.data.data;
    return (
        <div>
            <UpdatedComponent updatedData={updatedData} />
        </div>
    );
};

export default Update;