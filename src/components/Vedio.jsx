import React from 'react';
import '../components/Vedio.css';
import water from "../assets/images/water-glass-1.png"
import img from "../assets/images/img.jpg"
import { useState } from 'react';
import drink from "../assets/images/drink.mp4"
import Bwd from './Bwd';
import BotwithButt from './BotwithButt';
import Picture from './Picture';
import img1 from "../assets/images/video-1.jpg"
import img2 from "../assets/images/vedio-2.jpg"
import img3 from "../assets/images/video-3.jpg"
import Card from '../components/Card';
import png1 from '../assets/images/drop.png'
import png2 from '../assets/images/water.png'
import png3 from '../assets/images/humidity.png'
import png4 from '../assets/images/water-barrel.png'
import client1 from '../assets/images/client-1.png';
import client2 from '../assets/images/client-5.png';
import client3 from '../assets/images/client-3.png';
import client4 from '../assets/images/client-4.png';
import uncle from '../assets/images/service1-4.jpg'
import { FaCheck } from 'react-icons/fa';
import Butt from './Butt';
import Box from '../components/Box';
import bottImg from '../assets/images/double-bottle.png'


const Vedio = () => {
    const [play, setPlay] = useState(false);

    return (
        <>
            <div className='mx' >  <h1 >A Trusted Name In
                Bottled Water Industry</h1></div>

            <div className='cardf'> <Card i={png1} h="Maxium Purity" />
                <Card i={png2} h="5 Steps Filtration" /> <Card i={png3} h="Cholorine Free" /> <Card i={png4} h="Quality Certified" /></div>
            <div className='container'>
                <Bwd h="Bottles We Deliver" p="We now deliver different types of bottled water.To Drink the best water please come to us and give us order and take safe and sound water for you." />
            </div>

            <div className='m'><div><BotwithButt im={bottImg} h="6 X 3L bottles" h3="Naturally Minerels water" p="Naturally Spark Water ensures your health  and safety is puri..."/> </div>
            <div><BotwithButt im={bottImg} h="6 X 3L bottles" h3="Naturally Minerels water" p="Naturally Spark Water ensures your health  and safety is puri..." /> </div>
            <div><BotwithButt im={bottImg} h="6 X 3L bottles" h3="Naturally Minerels water" p="Naturally Spark Water ensures your health  and safety is puri..." /> </div></div>


            <div className='mp4'>
                <video controls width={800} height={365} poster={img} onClick={play == false ? () => { setPlay(true) } : false}>
                    <source src={drink} type="video/mp4" />
                    <source src={drink} type="video/ogg" />

                </video>
            </div>


            <Bwd h="Helping To Improve" p="Another name for water is life. we want to help you to improve your water quality.So that you and your family can drink pure, healthy and safe water. We are trying our best to give you these services." />

            {/* <div className="card-group">
                    <div className="card">
                        <img src={pic1} className="card-img-top" alt="..." />

                    </div>
                    <div className="card">
                        <img src={pic2} className="card-img-top" alt="..." />

                    </div>
                    <div className="card">
                        <img src={pic3} className="card-img-top" alt="..." />

                    </div>
                </div>
          */}


            <div className="ff container">  <div className="size"><Picture pix={img1} /></div> <div className="size"><Picture pix={img2} /></div> <div className="size"><Picture pix={img3} /></div> </div>
            <div className='middle'>
                <img src={water} />
            </div>

            <div className='uncle'>

                <div className='part'>
                    <div>
                        <img src={uncle} />
                    </div>

                    <div className='pline'>
                        <h2>Bottled Water<br /> Delivery &<br /> Service</h2>
                        <p>We give our services to more than 10 countries.<br /> We give our delivery service using more than<br /> 50 couriers within 2hr in anywhere in the city.</p>
                        <div>
                            <h4><FaCheck />&nbsp; &nbsp;Hygenic and Ergonomic Bottles</h4>
                            <h4><FaCheck />&nbsp;&nbsp;Free Delivery On Weekends</h4>
                            <h4><FaCheck />&nbsp;&nbsp;5 Steps Filtration Plants</h4>
                            <h4><FaCheck />&nbsp;&nbsp;Best For Health & Hydration</h4>

                        </div>
                        <div className='buttt'>

                            <Butt btnName="ORDER TODAY!" /><br />
                            <Butt btnName="FREE ESTIMATE" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='container'>
                <Bwd h="Our Testimonials" p="Why people believe in us is because we do not believe in word of mouth we believe in work. We try to give you the best thats why some of our clients give us a testimonials" />
            </div>

            <div className='lastpara'>
                <h5>Compared to the other companies in the market I have seen that the water uaques supply it’s taste, quality and purity is much better than the other company in the market and give free water service.
                </h5>
                <div className='ceo'>
                    <h6 >BRENDON TAYLOR</h6>
                    <p>CEO & FOUNDER</p>
                </div>
            </div>

            <div className='news'>
                <h1>The News <br />
                    About Uaques</h1>
            </div>

            <div className='boox'>
                <Box h="Produce Top Level Purified Bottled water" p="Purified water level depends on impurities of the water. We produce 99.99% purity of the water" />
                <Box h="How Water Usefull For Our Body & Life" p="To regulate temperature and maintain other functions of our body our cells, organs and tissues need water." />

            </div>


            <div className='container'>
                <Bwd h="Trusted Partners" p="Natural water, Fresh Water, mineral water they are working with us. They work with us because we are giving them fresh, safe, pure and healthy water with trust and honesty. " />
            </div>

            <div className='h2o'>
                <img src={client1} />
                <img src={client2} />
                <img src={client3} />
                <img src={client4} />


            </div>




        </>
    )
}
export default Vedio


