"use client";
import GetData from '@/app/components/Api/page';
import React, { useEffect, useState, Suspense } from 'react';
const ManageIdDesign = React.lazy(() => import('@/app/components/ManageIdDesign'));

const ManageId = () => {
    const [Ids, setIds] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const Ids = await GetData();
            setIds(Ids);
        };
        fetchData();
    }, []);
    return (
        <div>
            <Suspense fallback={<div>Loading component...</div>}>
                <ManageIdDesign accounts={Ids} />
            </Suspense>

        </div>
    );
};

export default ManageId;