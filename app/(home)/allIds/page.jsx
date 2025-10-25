'use client'
import { useEffect, useState } from 'react';
import IdCard from '@/app/components/IdCard';
import { Spinner } from '@/components/ui/spinner';
import axios from 'axios';

const Page = () => {

    const [Ids, setIds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async (pageNum = 1) => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/add-id?page=${pageNum}&limit=10`);
            if (response.data.length === 0) {
                setHasMore(false); // আর data নেই
            } else {
                setIds(prev => [...prev, ...response.data]); // পুরানো data + নতুন data
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    // প্রথমে data load
    useEffect(() => {
        fetchData(page);
    }, [page]);

    // scroll detect
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
                !loading &&
                hasMore
            ) {
                setPage(prev => prev + 1); // নতুন page load
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

    return (
        <div className="bg-white text-black min-h-screen p-8 container mx-auto">
            <section className='flex flex-col text-center py-6 md:py-8 lg:py-12'>
                <div>
                    <h1 className="text-3xl font-bold mb-2">ALL FREE FIRE IDS</h1>
                    <p className="text-gray-700 mb-4">BROWSE AND FIND THE PERFECT FREE FIRE ID FOR YOU.</p>
                </div>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="🔍 SEARCH FF ID..."
                        className="w-96 border border-gray-300 p-3 rounded focus:ring-0"
                    />
                </div>
            </section>

            <div>
                {Ids.length === 0 && !loading ? (
                    <div>
                        <h2 className="text-2xl flex justify-center items-center text-red-500 font-bold h-80 border">
                            Data Not Found...
                        </h2>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {Ids.slice().reverse().map(account => (
                            <div key={account._id}>
                                <IdCard account={account} />
                            </div>
                        ))}
                    </div>
                )}

                {loading && (
                    <div className="flex justify-center mt-6">
                        <Spinner />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
