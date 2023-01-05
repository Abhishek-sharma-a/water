import React from 'react'
import BotwithButt from './BotwithButt'
import Bwd from './Bwd'
import Headings from './Headings'
import servicePic1 from '../assets/images/service1-4.jpg'
import servicePic2 from '../assets/images/service-3-4.jpg'
import servicePic3 from '../assets/images/service-4-4.jpg'
import servicePic4 from '../assets/images/news-1-4.jpg'
import servicePic5 from '../assets/images/news-2-42.jpg'
import servicePic6 from '../assets/images/video-3.jpg'

const Pages = () => {
  return (
    <div>
      <Headings h="Services" p="Home > Services" />



      <div className='mar'><Bwd h="What We Do" p="Aliquaut enim mini veniam quis trud exercitation ullamco exa consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet consectetur adipisicing sed." /></div>

      <div>


       <div className="container"> <div className='gbot'>
          <div className='gbot1'>
            <div><BotwithButt im={servicePic1}  h3="Residential Waters" p="Naturally Spark Water ensures your health  and safety is puri..." /> </div>
            <div><BotwithButt im={servicePic2} h3="Commercial Waters" p="Naturally Spark Water ensures your health  and safety is puri..." /> </div>
            <div><BotwithButt im={servicePic3}  h3="Filtration Plants" p="Naturally Spark Water ensures your health  and safety is puri..." /> </div>
          </div>

          <br /><br />
          <div className='gbot1'>
            <div><BotwithButt im={servicePic4}  h3="Free Water Delivery" p="Naturally Spark Water ensures your health  and safety is puri..." /> </div>
            <div><BotwithButt im={servicePic5} h3="Water Softening" p="Naturally Spark Water ensures your health  and safety is puri..." /> </div>
            <div><BotwithButt im={servicePic6}  h3="Coolers & Dispensers" p="Naturally Spark Water ensures your health  and safety is puri..."  btnName="jkk" /> </div>
          </div>


        </div></div>


      </div>



      <div className='mar'><Bwd h="Our Testimonials" p="Why people believe in us is because we do not believe   in word of mouth we believe in work. We try to give you the best thats why some of our clients give us a testimonials
         " /></div>




      { /* last para */}
      <div className='lastpara'>
        <h5>Compared to the other companies in the market I have seen that the water uaques supply it’s taste, quality and purity is much better than the other company in the market and give free water service.
        </h5>
        <div className='ceo'>
          <h6 >BRENDON TAYLOR</h6>
          <p>CEO & FOUNDER</p>
        </div>
      </div>
    </div>
  )
}

export default Pages

