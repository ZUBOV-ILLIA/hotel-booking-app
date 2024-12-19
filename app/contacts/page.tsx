import viewImg from "@/public/contacts-view.webp";
import Image from "next/image";
import { FaPhone, FaWhatsapp, FaTelegram, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    name: "Email",
    link: "mailto:portfolioskyhavencavehotel@gmail.com",
    linkText: "Write a Letter",
    icon: <FaEnvelope size={30} className="mr-2 opacity-20" />,
  },

  {
    name: "WhatsApp",
    link: "https://wa.me/909999999999",
    linkText: "Write Message",
    icon: <FaWhatsapp size={30} className="mr-2 opacity-20" />,
  },
  {
    name: "Telegram",
    link: "https://t.me/+909999999999",
    linkText: "Write Message",
    icon: <FaTelegram size={30} className="mr-2 opacity-20" />,
  },
  {
    name: "Phone",
    link: "tel:+909999999999",
    linkText: "+90 (999) 999 99 99",
    icon: <FaPhone size={30} className="mr-2 opacity-20" />,
  },
];

export default function Contacts() {
  return (
    <div className="container mx-auto flex flex-col overflow-hidden px-2">
      <div className="mb-3 grid gap-3 md:grid-cols-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48319.06139169009!2d34.78135025677166!3d38.63497422645846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6879d36bd1ab%3A0x466c4e17a23fae50!2z0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC_0LDRgNC6INCT0ZHRgNC10LzQtSwgQXlkxLFubMSxIC0gT3J0YSwgNTAxODAgR8O2cmVtZS9OZXbFn2VoaXIgTWVya2V6L9Cd0LXQstGI0LXRhdC40YA!5e0!3m2!1sru!2str!4v1734603994710!5m2!1sru!2str"
          className="h-full min-h-96 w-full rounded-xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="overflow-hidden rounded-xl border bg-gray-600 bg-opacity-95 p-3">
          <h3 className="mb-4 animate-slideInFromRight pb-2 text-2xl font-thin text-yellow-400">
            Sky Haven Cave Hotel
          </h3>

          <p className="mb-6">
            We’d love to hear from you! Whether you’re planning your visit to
            Cappadocia, have questions about our hotel, or need assistance with
            reservations, our team is here to help.
          </p>

          <ul className="mb-8 flex flex-col gap-3 pl-3">
            {contacts.map((el) => (
              <li key={el.name} className="flex items-center gap-2">
                {el.icon}
                <span className="font-thin">{el.name}: </span>
                <a href={el.link} target="_blank" className="hover:underline">
                  {el.linkText}
                </a>
              </li>
            ))}
          </ul>

          <h4 className="mb-2">Address:</h4>
          <ul className="mb-3 flex flex-col gap-1 pl-3 font-thin">
            <li>Sky Haven Cave Hotel</li>
            <li>Fairy Chimney District, 42</li>
            <li>Göreme, Cappadocia, Turkey</li>
          </ul>

          <h4 className="mb-2">Operating Hours:</h4>
          <p className="mb-3 pl-3 font-thin">
            Our front desk is available 24/7 to assist with your inquiries and
            bookings.
          </p>

          <h4 className="mb-2">Need Directions?</h4>
          <p className="mb-3 pl-3 font-thin">
            We offer paid airport shuttles from Nevşehir and Kayseri airports.
            Contact us to arrange your transfer for a seamless arrival
            experience.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-gray-600 bg-opacity-95 p-4">
        <Image
          src={viewImg}
          className="h-auto w-full rounded-xl object-cover shadow shadow-white"
          alt="img of nearest view"
          height={300}
          width={500}
        />
      </div>
    </div>
  );
}
