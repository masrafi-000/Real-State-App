import Spinner from "@/components/shared/Loader/Spinner";

const Loading = () => {
  return (
    <div className="bg-[var(--color-gray_08)] text-white min-h-screen flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
