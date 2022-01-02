import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/style.css';

const services = [
    {
        "name": "EXPERIENCE",
        'icon': "fas fa-ship",
        "id": "1"
    },
    {
        "name": "EXPERTISE",
        'icon': "fas fa-glasses",
        "id": "2"
    },
    {
        "name": "SUPPORT",
        'icon': "far fa-life-ring",
        "id": "3"
    },
    {
        "name": "CONSULTATION",
        'icon': "far fa-comment-dots",
        "id": "4"
    }

]

const Services = () => {


    return (
        <>

            <h5 className='text-center text-warning mb-1' style={{ fontStyle: 'italic' }}>Welcome There!</h5>
            <h1 style={{ fontSize: " 3.333em", color: "#06175c", textAlign: 'center', fontWeight: 700 }}>COMPLETE AQUARIUM <br /> SERVICES</h1>

            <article style={{ display: 'flex', justifyContent: 'center', margin: "15px 0" }}>
                <img src="https://i.ibb.co/xG2f7zv/Screenshot-1.png" alt="" />
            </article>

            <p style={{ color: "#626085", textAlign: 'center', marginBottom: '1.67em', fontWeight: 500 }}>Aqualots is a professional aquarium maintenance and service company  <br /> unlike any other. More than just an aquarium cleaning service, Aqualots <br /> offers a full line of professional aquarium services.</p>


            <svg style={{ position: "absolute", marginTop: '-80px', zIndex: '-9888' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E9F2FF" fill-opacity="1" d="M0,32L16,64C32,96,64,160,96,197.3C128,235,160,245,192,218.7C224,192,256,128,288,117.3C320,107,352,149,384,181.3C416,213,448,235,480,240C512,245,544,235,576,197.3C608,160,640,96,672,101.3C704,107,736,181,768,192C800,203,832,149,864,106.7C896,64,928,32,960,58.7C992,85,1024,171,1056,208C1088,245,1120,235,1152,197.3C1184,160,1216,96,1248,96C1280,96,1312,160,1344,176C1376,192,1408,160,1424,144L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg>

            <article className='d-flex flex-wrap justify-content-center' style={{ columnGap: "5%" }}>

                {
                    services.map(service => <article key={service.id}>

                        <aside className='service-icon ' type="button">
                            <i className={service.icon}></i>

                        </aside>
                        <h6 className='mt-2 text-center'>{service.name}</h6>

                    </article>
                    )
                }

            </article>

        </>
    );
};

export default Services;