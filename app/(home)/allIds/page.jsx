'use client'
import { useEffect, useState } from 'react';
import IdCard from '@/app/components/IdCard';
import GetData from '@/app/components/Api/page';
import { Spinner } from '@/components/ui/spinner';


const page = () => {

    const [Ids, setIds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const Ids = await GetData();
                setIds(Ids);
            }
            catch (err) {
                console.log(err);
                setIds([]);
            }
            finally {
                setLoading(false);
            }
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

            <div>
                {loading ? (
                    <Spinner />
                ) : Ids.length === 0 ? (
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
            </div>
        </div>
    );
};

export default page;
