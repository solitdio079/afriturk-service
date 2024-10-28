import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import {Link} from 'react-router-dom'
import{FaHouse, FaMapPin, FaPhone} from 'react-icons/fa6'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import AnimatedLayout from '../../animation/AnimatedLayout';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
export default function Home() {
    return (
      <AnimatedLayout>
        <Swiper
          modules={[Pagination, Autoplay]}
          direction={'vertical'}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-screen"
        >
          <SwiperSlide>
            <div
              className="hero min-h-screen lg:min-h-1/2"
              style={{
                backgroundImage: 'url(/hero2.jpg)',
              }}
            >
              <div className="hero-overlay bg-opacity-70"></div>
              <div className="hero-content flex flex-row justify-start items-start text-primary-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Bienvenue sur AfriTurk Service.
                  </h1>

                  <button className="btn btn-primary">Contacter</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen lg:min-h-1/2"
              style={{
                backgroundImage: 'url(/hero1.webp)',
              }}
            >
              <div className="hero-overlay bg-opacity-70"></div>
              <div className="hero-content flex flex-row justify-start items-start text-primary-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">
                    Coopération entre l&apos;Afrique et la Turquie
                  </h1>

                  <button className="btn btn-primary">Contacter</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen lg:min-h-1/2"
              style={{
                backgroundImage: 'url(/hero3.jpg)',
              }}
            >
              <div className="hero-overlay bg-opacity-70"></div>
              <div className="hero-content flex flex-row justify-start items-start text-primary-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-5xl font-bold">
                    Un partenaire fiable et efficace
                  </h1>

                  <button className="btn btn-primary">Contacter</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col justify-center items-center w-full  p-10">
          <h2 className="text-5xl my-10 text-center font-extrabold border-b-4 border-secondary p-2">
            A propos de Nous
          </h2>
          <div className="collapse collapse-plus bg-base-200 mb-3">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Mission</div>
            <div className="collapse-content">
              <p>
                {' '}
                Grâce à cette initiative, nous aspirons à favoriser un
                développement mutuel entre l&apos;Afrique et la Turquie en
                établissant des partenariats solides et mutuellement bénéfiques.
                Notre entreprise vise à être un catalyseur d&apos;échanges
                fructueux, facilitant la coopération économique et culturelle
                entre nos deux régions.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 m-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Valeurs</div>
            <div className="collapse-content">
              <p>
                Afriturk Service aspire à jouer un rôle clé dans la promotion
                des échanges et de la coopération entre l&apos;Afrique et la
                Turquie. En fournissant des équipements essentiels, en
                facilitant les voyages et les transactions commerciales, nous
                souhaitons contribuer activement au développement de
                l&apos;Afrique.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 m-3">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Vision</div>
            <div className="collapse-content">
              <p>
                En tant que fondateurs et cofondateurs, nous sommes animés par
                la volonté de combler le fossé de communication et
                d&apos;établir des liens durables entre les deux régions. Notre
                ambition est de créer une entreprise prospère qui favorise le
                progrès économique et culturel pour le bien-être de
                l&apos;Afrique et de la Turquie. Avec détermination et
                engagement, nous nous efforcerons de concrétiser notre vision
                pour un avenir mutuellement bénéfique et prospère.
              </p>
            </div>
          </div>
          <Link to="/about" className="btn btn-primary m-3">En Savoir Plus...</Link>
        </div>
        <div className="flex flex-col justify-center items-center w-full  p-10 bg-primary">
          <h2 className="text-5xl my-10 text-center text-white font-extrabold border-b-4 border-secondary p-2">
            Nos Services
          </h2>
          <Swiper
            modules={[Pagination, Navigation]}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              639: {
                slidesPerView: 2,
              },
              865: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 2,
              },
              1700: {
                slidesPerView: 2,
              },
            }}
            pagination={{ clickable: true }}
            navigation
            className="w-full"
          >
            <SwiperSlide>
              <div className="card bg-base-100 w-96 shadow-xl m-3">
                <figure>
                  <img src="/cargo.png" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Cargo</h2>
                  <p>
                    Gestion des frets maritimes et aériens, en étroite
                    collaboration avec le département logistique.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Contacter</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-base-100 w-96 shadow-xl m-3">
                <figure>
                  <img src="/event.png" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Event</h2>
                  <p>
                    Organisation des événements tels que des foires en Afrique
                    ou en Turquie, permettant ainsi aux fournisseurs turcs de
                    rencontrer les acheteurs africains.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Contacter</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-base-100 w-96 shadow-xl m-3">
                <figure>
                  <img src="/travel.png" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Travel</h2>
                  <p>
                    Assistance pour l&apos;obtention de visas d&apos;études en
                    Turquie, tourisme médical et traditionnel.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Contacter</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-base-100 w-96 shadow-xl m-3">
                <figure>
                  <img src="/media.png" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Media</h2>
                  <p>La communication au sein de notre entreprise</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Contacter</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-base-100 w-96 shadow-xl m-3">
                <figure>
                  <img src="/invest.png" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Invest</h2>
                  <p>
                    Accompagnera les personnes souhaitant investir dans
                    l&apos;immobilier en Turquie.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Contacter</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col justify-center items-center w-full  p-10">
          <h2 className="text-5xl my-10 text-center font-extrabold border-b-4 border-secondary p-2">
            Contactez-Nous
          </h2>
          <div className="flex flex-col lg:flex-col w-full">
            <div className="flex flex-row bg-primary justify-between text-white w-full p-5  shrink-0">
              <span className="flex flex-row text-lg  items-center">
                <FaHouse className="m-2" /> Address
              </span>
              <span className="flex flex-row text-lg items-center">
                <FaMapPin className="m-2" /> Location
              </span>
              <span className="flex flex-row text-lg items-center">
                <FaPhone className="m-2" /> Phone
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.5730742032715!2d33.77205987628053!3d41.426785371294834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4084fb9d9bb94229%3A0xbadf45c91e458afd!2sRoma%20Coffee%20Tea!5e0!3m2!1sen!2str!4v1730103389373!5m2!1sen!2str"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </AnimatedLayout>
    )
}
