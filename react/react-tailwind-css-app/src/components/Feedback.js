import React from "react";
import image from "../assets/image.jpg";

const Feedback = () => {
  return (
    <section
      name="testimonials"
      className="w-full my-24 text-white bg-slate-700"
    >
      <div className="max-w-6xl px-5 mx-auto text-center py-12">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="py-8 text-2xl text-white">
          Quis enim lobortis scelerisque fermentum. Morbi leo urna molestie at
          elementum eu facilisis. Aliquam malesuada bibendum arcu vitae
          elementum. Vestibulum morbi blandit cursus risus at ultrices mi
          tempus. Nam libero justo laoreet sit amet cursus sit amet. Mauris nunc
          congue nisi vitae suscipit tellus mauris.
        </p>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold">Ali ko</h5>
            <p className="text-sn">
              Enim sed faucibus turpis in. Id aliquet risus feugiat in ante
              metus. Id velit ut tortor pretium viverra suspendisse potenti
              nullam. Arcu dictum varius duis at consectetur lorem donec massa
              sapien.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold">Ali ko</h5>
            <p className="text-sn">
              Enim sed faucibus turpis in. Id aliquet risus feugiat in ante
              metus. Id velit ut tortor pretium viverra suspendisse potenti
              nullam. Arcu dictum varius duis at consectetur lorem donec massa
              sapien.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold">Ali ko</h5>
            <p className="text-sn">
              Enim sed faucibus turpis in. Id aliquet risus feugiat in ante
              metus. Id velit ut tortor pretium viverra suspendisse potenti
              nullam. Arcu dictum varius duis at consectetur lorem donec massa
              sapien.
            </p>
          </div>
        </div>

        <button className="px-6 py-3 my-8 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Feedback;
