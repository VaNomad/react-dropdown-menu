import { Triangle } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="relative hidden">
      <div className="z-20 absolute h-screen top-0 right-0 bottom-0 left-0 grid place-items-center">
        <Triangle height={200} width={200} color="#a34af4" visible={true} />
      </div>
    </div>
  );
}