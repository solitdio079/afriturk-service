import AnimatedLayout from "../../animation/AnimatedLayout";
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

//import { FaHouse, FaMapPin, FaPhone } from 'react-icons/fa6'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Pagination, Navigation } from 'swiper/modules'
export default function About() {
    return (
      <AnimatedLayout>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/hero2.jpg"
              className="w-full lg:w-1/2 rounded-lg shadow-2xl mask mask-parallelogram"
            />
            <div>
              <h1 className="text-5xl font-bold">Qui sommes nous?</h1>
              <p className="py-6">
                Au fil de notre séjour en Turquie, nous avons pu identifier des
                problématiques significatives qui requièrent des solutions
                adaptées. Une observation récurrente est la complexité de la
                communication entre l&apos;Afrique et la Turquie, tandis que les
                entreprises africaines expriment leur mécontentement face aux
                arnaques commises par certains compatriotes résidant en Turquie.
                Conscients de ces enjeux, nous avons pris l&apos;initiative de
                créer une entreprise novatrice, composée de plusieurs
                départements, dans le but de répondre à ces défis.
              </p>
              <button className="btn btn-primary">Contacter</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full  p-10 bg-primary">
          <h2 className="text-5xl my-10 text-center text-white font-extrabold border-b-4 border-secondary p-2">
            Equipe
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
                  <img src="/team1.jpg" className="h-96" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Mohamed Diawara{' '}
                    <span className="text-sm text-primary">Fondateur</span>
                  </h2>

                  <p>
                    Gestion des frets maritimes et aériens, en étroite
                    collaboration avec le département logistique.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card bg-base-100 w-96 shadow-xl m-3">
                <figure>
                  <img src="/team2.jpg" className="h-96" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Boubacar Mariko{' '}
                    <span className="text-sm text-primary">Co-Fondateur</span>
                  </h2>

                  <p>
                    Gestion des frets maritimes et aériens, en étroite
                    collaboration avec le département logistique.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-base-100 w-96 shadow-xl m-3">
                <figure>
                  <img src="/team3.jpg" className="h-96" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Luke Skywalker{' '}
                    <span className="text-sm text-primary">
                      Security Manager
                    </span>
                  </h2>

                  <p>
                    Gestion des frets maritimes et aériens, en étroite
                    collaboration avec le département logistique.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/hero1.webp"
              className="w-full lg:w-1/2 rounded-lg shadow-2xl mask mask-parallelogram-2"
            />
            <div>
              <h1 className="text-5xl font-bold">Mission</h1>
              <p className="py-6">
                Grâce à cette initiative, nous aspirons à favoriser un
                développement mutuel entre l&apos;Afrique et la Turquie en
                établissant des partenariats solides et mutuellement bénéfiques.
                Notre entreprise vise à être un catalyseur d&apos;échanges
                fructueux, facilitant la coopération économique et culturelle
                entre nos deux régions.
              </p>
             
            </div>
          </div>
        </div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/hero3.jpg"
              className="w-full lg:w-1/2 rounded-lg shadow-2xl mask mask-parallelogram"
            />
            <div>
              <h1 className="text-5xl font-bold">Vision</h1>
              <p className="py-6">
                Afriturk Service aspire à jouer un rôle clé dans la promotion
                des échanges et de la coopération entre l&apos;Afrique et la
                Turquie. En fournissant des équipements essentiels, en
                facilitant les voyages et les transactions commerciales, nous
                souhaitons contribuer activement au développement de
                l&apos;Afrique.
              </p>
             
            </div>
          </div>
        </div>
      </AnimatedLayout>
    )
}