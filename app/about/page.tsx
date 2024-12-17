import React from "react";
import Image from "next/image";
import hotelImg from "@/public/gallery/19.webp";
import designedImg from "@/public/gallery/2.webp";
import foodImg from "@/public/gallery/8.webp";

export default function About() {
  return (
    <div className="container mx-auto mt-4 flex flex-col overflow-hidden rounded-xl border bg-gray-600 bg-opacity-95 py-8">
      <h2 className="mb-5 animate-slideInFromTop text-center text-4xl font-thin">
        About Sky Haven Cave Hotel
      </h2>

      <div className="flex flex-wrap items-center p-5 md:flex-nowrap">
        <div className="pb-4 md:pb-0 md:pr-8">
          <h3 className="mb-4 text-center text-xl font-thin">
            A Labor of Love and Tradition
          </h3>
          <p>
            Welcome to Sky Haven Cave Hotel, where history, nature, and luxury
            meet in the heart of Cappadocia. Opened in 2020, our boutique hotel
            blends the timeless charm of Cappadocia’s volcanic formations with
            the comfort and elegance of modern hospitality. Built into the
            region’s iconic fairy chimneys and natural stone structures, Sky
            Haven is more than a place to stay – it’s an experience that
            immerses you in the enchanting beauty of Göreme National Park, a
            UNESCO World Heritage Site.
          </p>
        </div>

        <Image
          src={hotelImg}
          className="h-auto w-full rounded-xl object-cover shadow shadow-white md:w-2/5"
          alt="img of hotel"
        />
      </div>

      <div className="flex flex-row-reverse flex-wrap p-5 md:flex-nowrap">
        <div className="pb-4 md:pb-0 md:pl-8">
          <h3 className="mb-4 text-center text-xl font-thin">
            A Labor of Love and Tradition
          </h3>
          <p>
            Sky Haven Cave Hotel was lovingly designed and restored by the
            Yılmaz family, who are dedicated to preserving the authentic spirit
            of Cappadocia. The transformation of the property into a luxury
            retreat took over six years, carefully balancing tradition and
            comfort. Our 12 uniquely designed cave rooms and 8 stone rooms
            showcase the region’s historical architecture while offering guests
            a haven of relaxation.
            <br />
            Each room has been thoughtfully crafted with natural Cappadocian
            stones and volcanic rock, featuring intricate details that reflect
            the region’s rich cultural heritage. Our property also boasts its
            own fairy chimney, a rare feature that sets us apart as one of the
            most unique accommodations in the area.
          </p>
        </div>

        <Image
          src={designedImg}
          className="rounded-xl object-cover shadow shadow-white md:w-2/5"
          alt="img of hotel"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-4 text-center text-xl font-thin">
          Rooms with Unparalleled Views
        </h3>
        <p className="pb-4 md:pb-0">
          At Sky Haven, every room is designed to provide guests with
          unforgettable moments. Whether you choose a cave room carved into
          ancient rock or a stone suite with a private balcony, you’ll wake up
          to stunning views of Cappadocia’s magical landscapes. Many of our
          rooms are perfectly positioned for balloon watching – an experience
          that has become synonymous with the charm of this region.
          <br />
          For a touch of indulgence, our jacuzzi suites allow you to soak in
          luxury while taking in panoramic views of the hot-air balloons
          floating serenely above Göreme.
        </p>
      </div>

      <div className="p-5">
        <h3 className="mb-4 text-center text-xl font-thin">
          Breathtaking Terraces and Balloon Watching
        </h3>
        <p className="pb-4 md:pb-0">
          Sky Haven features three spacious terraces where guests can witness
          the breathtaking spectacle of hundreds of hot-air balloons rising into
          the sky at sunrise. Enjoy your morning coffee or a traditional Turkish
          breakfast on our terraces as you take in the sweeping views of
          Göreme’s valleys, fairy chimneys, and vibrant skies.
          <br />
          Our terraces are also perfect for stargazing in the evenings,
          providing an unparalleled experience under Cappadocia’s crystal-clear
          skies.
        </p>
      </div>

      <div className="flex flex-wrap items-center p-5 md:flex-nowrap">
        <div className="md:w-3/5">
          <h3 className="mb-4 text-center text-xl font-thin">
            Modern Amenities in a Timeless Setting
          </h3>
          <p className="md:pr-8">
            While Sky Haven retains its historical charm, we provide all the
            modern comforts you need:
          </p>
          <ul className="list-disc pb-4 pl-8 md:pr-6">
            <li className="pt-3">
              Free high-speed Wi-Fi in all rooms and public areas
            </li>
            <li>
              Underfloor heating for cozy comfort during the winter months
            </li>
            <li>
              Traditional Turkish breakfast served fresh daily with panoramic
              views
            </li>
            <li>
              Paid airport shuttles to and from Nevşehir and Kayseri airports
            </li>
          </ul>
        </div>
        <Image
          src={foodImg}
          className="h-auto w-full rounded-xl object-cover shadow shadow-white md:w-2/5"
          alt="img of hotel"
        />
      </div>

      <div className="mx-auto md:w-1/2">
        <div className="p-5">
          <h3 className="mb-4 text-center text-xl font-thin">
            Exceptional Hospitality
          </h3>
          <p className="text-center">
            Sky Haven is more than a hotel – it’s a family. Our dedicated team,
            led by Mr. Ahmet Yılmaz, takes pride in offering personalized
            service to every guest. From sharing local insights to arranging
            daily tours, hot-air balloon rides, and airport transfers, we’re
            here to ensure your stay is seamless and memorable.
          </p>
        </div>
      </div>

      <div className="mx-auto p-5">
        <h3 className="mb-4 text-center text-xl font-thin">
          While Sky Haven retains its historical charm, we provide all the
          modern comforts you need:
        </h3>
        <p>
          Experience the wonder of Cappadocia with us at Sky Haven Cave Hotel –
          where every moment is designed to create memories that last a
          lifetime.
        </p>
      </div>
    </div>
  );
}
