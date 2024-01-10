import React from "react";
import supportImg from "../assets/support.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-slate-900/90 absolute">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center uppercase text-slate-300">
            Support
          </h2>
          <h3 className="py-6 text-5xl font-bold text-center">
            We support you
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Elit sed vulputate mi sit amet mauris commodo. Eu augue ut lectus
            arcu bibendum at varius. Diam maecenas ultricies mi eget mauris
            pharetra et ultrices. Felis donec et odio
          </p>
        </div>
        <div className="grid grid-cols-1 px-4 pt-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20">
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Support</h3>
              <p className="text-xl text-gray-600">
                pellentesque diam volutpat commodo. Erat nam at lectus urna duis
                convallis convallis. Sit amet porttitor eget dolor morbi non
                arcu risus quis.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-blue-600">
                More Info... <FaArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Inquiries</h3>
              <p className="text-xl text-gray-600">
                Consequat ac felis donec et odio pellentesque. Sit amet luctus
                venenatis lectus magna fringilla urna porttitor. Vitae congue eu
                consequat ac felis donec et odio.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-blue-600">
                More Info... <FaArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Sales</h3>
              <p className="text-xl text-gray-600">
                Iaculis at erat pellentesque adipiscing commodo. Nisl nisi
                scelerisque eu ultrices vitae auctor eu augue ut. Etiam sit amet
                nisl purus in mollis nunc sed id.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-blue-600">
                More Info... <FaArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
