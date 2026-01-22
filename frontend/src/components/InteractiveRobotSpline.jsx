import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function InteractiveRobotSpline({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center bg-black text-white ${className}`}>
          Loading....
        </div>
      }
    >
    <Spline scene={scene} className={className} />
    </Suspense>
  );
}
