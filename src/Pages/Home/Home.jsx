
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
const Home = () => {
    return (
        <div className="lg:w-[1280px] mx-auto">

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
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                </SwiperSlide>
                ...
            </Swiper>

        </div>
    );
};

export default Home;