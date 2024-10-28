import AnimatedLayout from "../../animation/AnimatedLayout";
import { FaHouse, FaMapPin, FaPhone ,FaWhatsapp, FaEnvelope } from 'react-icons/fa6'
export default function Contact() {
    return (
      <AnimatedLayout>
        <div className="flex flex-col justify-center items-center w-full p-5  lg:p-10">
          <h2 className="text-5xl my-10 text-center font-extrabold border-b-4 border-secondary p-2">
            Contactez-Nous
          </h2>
          <div className="flex flex-col lg:flex-col w-full">
            <div className="flex flex-col lg:flex-row bg-primary justify-between text-white w-full p-5  shrink-0">
              <span className="flex flex-row text-lg  items-center">
                <FaHouse className="m-2" /> Address
              </span>
              <span className="flex flex-row text-lg items-center">
                <FaMapPin className="m-2" /> Location
              </span>
              <span className="flex flex-row text-lg items-center">
                <FaPhone className="m-2" /> Phone
                        </span>
                        <span className="flex flex-row text-lg items-center">
                <FaWhatsapp className="m-2" /> Phone
                        </span>
                <span className="flex flex-row text-lg items-center">
                <FaEnvelope className="m-2" /> Email
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