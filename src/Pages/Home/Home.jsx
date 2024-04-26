
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
const Home = () => {
    return (
        <div>

            <div className="relative h-screen overflow-hidden bg-indigo-900">
                <img src="/images/landscape/5.svg" className="absolute object-cover w-full h-full" />
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>
                <div className="absolute inset-0 bg-black opacity-25">
                </div>
                <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                    <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
                        <span className="font-bold text-yellow-400 uppercase">
                            Himalaya
                        </span>
                        <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                            Let yourself be carried
                            <br />
                            by nature
                        </h1>
                        <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                            Discover
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;