import './HomePage.css'
import img from './../../assets/img/FirstElm.png'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return (
        <div className="HomePage">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2019/10/15/03/16/black-and-white-4550471_1280.jpg"
                        alt="FirstImg"
                    />
                    <Carousel.Caption>
                        <h3>Experiencias unicas</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/photos-premium/photo-noir-blanc-foule-lors-concert_662214-201160.jpg"
                        alt="SecondImg"
                    />
                    <Carousel.Caption>
                        <h3>Encuentra tu alma gemela</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://freerangestock.com/sample/44982/crowd-at-concert.jpg"
                        alt="ThirdIMG"
                    />
                    <Carousel.Caption>
                        <h3>Disfruta de pasarlo bien con los mejores</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1>Las mejores fiestas de techno</h1>
            <br />
            <div className="img-container">
                <Link to="/eventos">
                    <img src={img} alt="elemets" className='small-img' />
                </Link>
            </div>
            <br />
            <h2>encuentra tus eventos favoritos</h2>
            <br />
        </div>
    )
}

export default HomePage
