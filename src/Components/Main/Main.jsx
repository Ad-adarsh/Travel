import React ,{useEffect}from "react"
import './main.css'
//here we are ging to import images
import img from '../../image for tour/img (1).jpg'
import img2 from '../../image for tour/img (2).jpg'
import img3 from '../../image for tour/img (3).jpg'
import img4 from '../../image for tour/img (4).jpg'
import img5 from '../../image for tour/img (5).jpg'
import img6 from '../../image for tour/img (6).jpg'
import img7 from '../../image for tour/img (7).jpg'
import img8 from '../../image for tour/img (8).jpg'
import img9 from '../../image for tour/img (9).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi"
//THe array
const Data =[
    {
        id:1,
        imgSrc:img,
        destTitle: 'Bora Bora',
        location :'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'

    },
    {
        id:2,
        imgSrc:img2,
        destTitle: 'Machu Picchu',
        location :'Peru',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description: 'Huayna Picchu is a mountain in peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'


    },
    {
        id:3,
        imgSrc:img3,
        destTitle: 'Great Barrier Reef',
        location :'Australia',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.'
    },
    {
        id:4,
        imgSrc:img4,
        destTitle: 'Cappadocia',
        location :'Turkey',
        grade:'CULTURAL RELAX',
        fees:'$850',
        description:'Besides the sunrise hot air balloons, Cappadocia is known for its surreal desert landscapes that are dotted with unworldly fairy chimneys and ancient underground cities. Visitors can find historic rock-cut churches and various cave dwellings that troglodytes once used to call home.'

    },
    {
        id:5,
        imgSrc:img5,
        destTitle: 'Guanajuato',
        location :'Mexico',
        grade:'CULTURAL RELAX',
        fees:'$1150',
        description:'This regions high quality of life, low cost of living, temperate climate, and spectacular Spanish colonial architecture are some of the many reasons for its popularity. The best-known expat haven in the Colonial Highlands is San Miguel de Allende.' 
    },
    {
        id:6,
        imgSrc:img6,
        destTitle: 'Nandi Hills',
        location :'India',
        grade:'CULTURAL RELAX',
        fees:'$780',
        description:'Nandi Hills is one of the most gorgeous hill stations in Karnataka and is a popular weekend getaway from Bengaluru. The place offers some incredible views of the mountains and valleys. It also has a religious significance as it resembles a sleeping bull. The spot remains covered in clouds most of the time. '
    },
    {
        id:7,
        imgSrc:img7,
        destTitle: 'Victoria Falls',
        location :'Zimbabwe',
        grade:'CULTURAL RELAX',
        fees:'$980',
        description:'The most popular section, a one-day ride that was first commercially rafted in 1981, begins close to the base of Victoria Falls and takes on 17 miles of non-stop pummelling adrenaline in a river not only filled with big volume rapids, but also plenty of crocs and hippos'

    },
    {
        id:8,
        imgSrc:img8,
        destTitle: 'Manaus',
        location :'Brazil',
        grade:'CULTURAL RELAX',
        fees:'$8500',
        description:'Manaus allows you to see this river in all its glory. Despite being over 1,500 kilometres from the Atlantic coast, the river is 10 kilometres wide here. So this is the perfect destination for those wanting to marvel at its sheer size and scale.'

    },
    {
        id:9,
        imgSrc:img9,
        destTitle: 'Langtang Valley',
        location :'Nepal',
        grade:'CULTURAL RELAX',
        fees:'$780',
        description:'Langtang is expansive high meadows provide summer habitat for numerous ungulate species such as musk deer and Himalayan tahr. The park is also well known for its populations of red panda, Himalayan black bear, snow leopard, wild dog, ghoral, serow and more than 250 species of birds.'

    },
   

]
const Main =()=>{
    useEffect(()=>{
        Aos.init({duration: 2000})
    })
    return(
        <section className="main container section">
            <div data-aos="fade-up" className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent grid">
                {
                    /*so now here we are goning
                    to use high ordfer array method(map).
                    To do that we shell use a list 
                    of object in one array. i am going to create an 
                    array named data and from that we
                    shall .map() array to fetch each
                    destination at once. */
                }
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description } )=>{
                        return(
                            <div key={id}  data-aos="fade-up" className="singleDestination">
                                {
                                    /*Here it will return single id from the map array */
                                }
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5 >{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS<HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                     </div>
                            </div>
                        )

                    })
                }
            </div>

        </section>
    )
}
export default Main