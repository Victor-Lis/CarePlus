import { CgSpinner } from "react-icons/cg";

export default function Loader() {
  return (
    <div className="bg-primary w-full min-h-svh flex justify-center items-center">
      <CgSpinner color="#517FF6" size={100} className="animate-spin mb-12" />
    </div>
  );
}
