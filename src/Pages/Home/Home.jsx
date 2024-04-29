
import { useContext } from "react";
import image1 from "../../assets/img1.jpg"
import image2 from "../../assets/img2.jpg"
import image3 from "../../assets/img3.jpg"
import image4 from "../../assets/img4.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Cards from "../Cards/Cards";
import Subcategory from "../Subcategory/Subcategory";
const people = [
    {
        name: 'TAREKUL ISLAM',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://lh3.googleusercontent.com/a/ACg8ocIJxc-hda-K3LqQrtGLqs0WoRZbCwhNpIvOmtR7r0Y2H9LJrAOi=s288-c-no',
    },
    // More people...
];
const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
];
const Home = () => {
    const { crafts, craftCategory } = useContext(AuthContext);
    console.log(craftCategory)
    return (
        <div className="lg:w-[1280px] mx-auto">

            <div>
                <Swiper
                    className="lg:h-[550px] rounded-lg"
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={80}
                    slidesPerView={1}
                    navigation={true}
                    loop={true}
                    autoplay={
                        {
                            delay: 2000,

                        }
                    }
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    
                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: `url(${image1})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">DRAWN TO ART</h1>
                                    <p className="mb-5"><span>celebrates creativity, ignites inspiration, and explores the beauty of self-expression through diverse mediums, captivating imagery, and artistic vision</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${image2})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">DRAWN TO ART</h1>
                                    <p className="mb-5"><span>celebrates creativity, ignites inspiration, and explores the beauty of self-expression through diverse mediums, captivating imagery, and artistic vision</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${image3})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">DRAWN TO ART</h1>
                                    <p className="mb-5"><span>celebrates creativity, ignites inspiration, and explores the beauty of self-expression through diverse mediums, captivating imagery, and artistic vision</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${image4})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">DRAWN TO ART</h1>
                                    <p className="mb-5"><span>celebrates creativity, ignites inspiration, and explores the beauty of self-expression through diverse mediums, captivating imagery, and artistic vision</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>

            </div>
            <div>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mt-8 mb-8"><span className="text-red-600">Explore</span> Your Design</h2>
                <p className="text-center font-light mb-7">encourages creativity, embraces experimentation, and empowers individuals to discover <br /> their unique aesthetic expressions.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1220px] mx-auto" >
                    {
                        crafts.slice(0, 6).map(craft => <Cards key={craft._id} craft={craft}></Cards>)
                    }
                </div>
            </div>
            <div>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mt-8 mb-8"><span className="text-red-600">Art & Craft</span> Categories</h2>
                <p className="text-center font-light mb-7">Discover diverse art forms and crafts, from painting to pottery, offering endless <br /> opportunities for creative expression.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-5">
                    {
                        craftCategory.map(category => <Subcategory key={category._id} category={category}></Subcategory>)
                    }
                </div>
            </div>
            <div>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                visionaries driving innovation, fostering teamwork, and empowering growth through their expertise, guidance, and dedication to excellence
                            </p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="flex items-center gap-x-6">
                                        <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                            <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">
                                Learn how to grow your business with our expert advice.
                            </p>
                        </div>
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {posts.map((post) => (
                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time>
                                        <a
                                            href={post.category.href}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href={post.author.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.author.name}
                                                </a>
                                            </p>
                                            <p className="text-gray-600">{post.author.role}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;