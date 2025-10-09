'use client'
import { useEffect, useState } from 'react';
import IdCard from '@/app/components/IdCard';
import GetData from '@/app/components/Api/page';


const page = () => {

    const [Ids, setIds] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const Ids = await GetData();
            setIds(Ids);
        };
        fetchData();
    }, []);

    return (
        <div className="bg-white text-black min-h-screen p-8 container mx-auto">
            <section className='flex flex-col text-center py-6 md:py-8 lg:py-12'>
                
                <div> <h1 className="text-3xl font-bold mb-2">ALL FREE FIRE IDS</h1>
                    <p className="text-gray-700 mb-4">BROWSE AND FIND THE PERFECT FREE FIRE ID FOR YOU.</p></div>

                {/* Search Input Design */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="🔍 SEARCH FF ID..."
                        className="w-96 border border-gray-300 p-3 rounded focus:ring-0"
                    />
                </div>
            </section>

            <IdCard accounts={Ids} />
        </div>
    );
};

export default page;
