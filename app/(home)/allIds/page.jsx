'use client'
import { useEffect, useState } from 'react';
import IdCard from '@/app/components/IdCard';
import { Spinner } from '@/components/ui/spinner';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
    const [Ids, setIds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);

    const fetchData = async (pageNum = 1, searchQuery = '') => {
        try {
            setLoading(true);
            const response = await axios.get(
                `/api/add-id?page=${pageNum}&limit=10&search=${searchQuery}`
            );

            if (response.data.length === 0) {
                setHasMore(false);
            } else {
                if (pageNum === 1) {
                    setIds(response.data); // প্রথম পেজ হলে replace করবে
                } else {
                    setIds(prev => [...prev, ...response.data]); // বাকি পেজগুলো append করবে
                }
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const delay = setTimeout(() => {
            fetchData(1, search);
        }, 500);
        return () => clearTimeout(delay);
    }, [search]);


    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
                !loading &&
                hasMore
            ) {
                setPage(prev => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);
    console.log(search);
    console.log(Ids);

    return (
        <div className="bg-white text-black min-h-screen p-8 container mx-auto">
            <section className='flex flex-col text-center py-6 md:py-8 lg:py-12'>
                <div>
                    <h1 data-aos="fade-up" className="text-3xl font-bold mb-2">ALL FREE FIRE IDS</h1>
                    <p data-aos="fade-up" data-aos-delay="200" className="text-gray-700 mb-4">BROWSE AND FIND THE PERFECT FREE FIRE ID FOR YOU.</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="mb-6">
                    <input
                        type="text"
                        placeholder="🔍 SEARCH BY NAME OR PRICE..."
                        value={search}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearch(value);
                            setIds([]);
                            setPage(1);
                            setHasMore(true);
                        }}
                        className="w-96 border border-gray-300 p-3 focus:ring-0 focus:outline-none"
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
                        {Ids?.map((account, index) => (
                            <div key={index + 1} data-aos="fade-up" data-aos-delay={index * 50}>
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
