import InteractiveRobotSpline from "./InteractiveRobotSpline";

export default function Section() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative w-full min-h-screen  text-white overflow-hidden">

      {/* Purple Glow */}
   <div className="absolute inset-0 bg-purple-1000/10 blur-[250px]"></div>


      {/* Robot */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-auto">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 
        pt-20 sm:pt-28 md:pt-32 lg:pt-40 
        grid grid-cols-1 md:grid-cols-2">

        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Intelligent AI Systems  
            <span className="text-pink-400"> for a Sustainable</span> Future
          </h1>

          <p className="mt-4 text-gray-200">
            AI • Automation • Clean Energy • Secure Blockchain
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-xl font-semibold shadow-lg">
              Get Live Demo
            </button>

            <button className="border border-pink-400 px-7 py-3 rounded-xl font-semibold">
              Download Datasheet
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
