import { Link } from "react-router-dom";
import aboutImage from "../assets/about-image.jpg";

function About() {
  return (
    <section className="flex flex-col gap-32 justify-center items-center p-8 mx-auto h-full lg:container">
      <div className="flex flex-col gap-8 justify-center items-center md:flex-row">
        <div className="flex flex-col gap-6 justify-center md:w-1/2">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            About Us
          </h2>
          <p className="text-lg text-black dark:text-white font-gray-500">
            At EasyCart, we believe shopping should be an enjoyable and
            inspiring experience. Founded in 2024, our mission is to connect you
            with high-quality products while providing exceptional customer
            service.
          </p>
          <p className="text-lg text-black dark:text-white font-gray-500">
            What started as a passion project has grown into a thriving
            eCommerce platform. Our founder, Bilel Hamitouche, recognized the
            need for a marketplace that not only offered diverse products but
            also prioritized sustainability and ethical sourcing. Today, we
            partner with the best brands and artisans to bring you a curated
            selection of items that align with our values.
          </p>
        </div>
        <img
          src={aboutImage}
          alt="about image"
          className="object-center rounded-lg shadow-sm md:w-1/2 shadow-gray-600"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Subscribe to our newsletter
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="py-3 px-4 text-lg bg-white rounded-l-lg border border-gray-500 outline-none dark:text-white dark:bg-zinc-900"
          />
          <Link
            to="/newsletter"
            className="py-3 px-4 text-lg text-white bg-black rounded-r-lg border border-black hover:opacity-80">
            Submit
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
