"use client";
import axios from 'axios';
import React, { useEffect, useState, Suspense } from 'react';
const ManageIdDesign = React.lazy(() => import('@/app/components/ManageIdDesign'));

const ManageId = () => {
    const [Ids, setIds] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/add-id`);
            setIds(response.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <Suspense fallback={<div>Loading component...</div>}>
                <ManageIdDesign accounts={Ids} setIds={setIds} Ids={Ids} />
            </Suspense>
        </div>
    );
};

export default ManageId;