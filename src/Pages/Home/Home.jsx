
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
const Home = () => {
    const { crafts } = useContext(AuthContext);
    console.log(crafts);
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
            <div>
                <h2 className="text-4xl font-bold text-center mt-8 mb-8"><span className="text-red-600">Explore</span> Your Design</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1220px] mx-auto" >
                    {
                        crafts.slice(0,6).map(craft => <Cards key={craft._id} craft={craft}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;