import React from "react";
import { FaCheck } from "react-icons/fa";

const Feature = () => {
  return (
    <section name="feature" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">Features</h2>
        <p className="py-8 text-2xl text-center text-gray-500">
          Amet nisl suscipit adipiscing bibendum est ultricies. Sit amet
          facilisis magna etiam. Viverra tellus in hac habitasse platea dictumst
          vestibulum rhoncus est. In massa tempor nec feugiat nisl pretium fusce
          id. Id semper risus in hendrerit. Amet mattis vulputate enim nulla.
          Tincidunt augue interdum velit euismod in pellentesque massa placerat.
        </p>
        <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex">
            <div>
              <FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Real-Time</h3>
              <p className="pt-2 pb-4 text-lg">
                Consectetur lorem donec massa sapien faucibus. Commodo sed
                egestas egestas fringilla phasellus faucibus scelerisque
                eleifend. Diam sit amet nisl suscipit adipiscing bibendum est
                ultricies. Morbi tincidunt ornare massa eget egestas purus
                viverra accumsan. In fermentum et sollicitudin ac orci.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Real-Time</h3>
              <p className="pt-2 pb-4 text-lg">
                Consectetur lorem donec massa sapien faucibus. Commodo sed
                egestas egestas fringilla phasellus faucibus scelerisque
                eleifend. Diam sit amet nisl suscipit adipiscing bibendum est
                ultricies. Morbi tincidunt ornare massa eget egestas purus
                viverra accumsan. In fermentum et sollicitudin ac orci.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Real-Time</h3>
              <p className="pt-2 pb-4 text-lg">
                Consectetur lorem donec massa sapien faucibus. Commodo sed
                egestas egestas fringilla phasellus faucibus scelerisque
                eleifend. Diam sit amet nisl suscipit adipiscing bibendum est
                ultricies. Morbi tincidunt ornare massa eget egestas purus
                viverra accumsan. In fermentum et sollicitudin ac orci.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <FaCheck className="mt-1 mr-3 text-blue-600 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Real-Time</h3>
              <p className="pt-2 pb-4 text-lg">
                Consectetur lorem donec massa sapien faucibus. Commodo sed
                egestas egestas fringilla phasellus faucibus scelerisque
                eleifend. Diam sit amet nisl suscipit adipiscing bibendum est
                ultricies. Morbi tincidunt ornare massa eget egestas purus
                viverra accumsan. In fermentum et sollicitudin ac orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
