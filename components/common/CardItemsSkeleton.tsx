export const CardItemsSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      role="status"
      className={`${className} my-5 animate-pulse space-y-4 rounded border bg-white p-4 shadow md:p-6`}
    >
      <div className="flex space-x-2">
        {/* Image Loader */}
        <div className="mb-2.5 h-[96px] w-[120px] rounded-md bg-gray-300" />
        <div className="w-full">
          <div className="mb-3 h-5 w-32 rounded-full bg-gray-300" />
          <div className="h-3 rounded-full bg-gray-200" />
          <div className="mt-2 h-3 w-[100px] rounded-full bg-gray-200" />
        </div>
      </div>
      <div className="flex justify-between">
        {Array(2)
          .fill(2)
          .map((_, index) => (
            <div key={index + "item"} className="space-y-1">
              <div className="h-2.5 w-[50px] rounded-full bg-gray-300" />
              <div className="h-2.5 w-[100px] rounded-full bg-gray-300" />
            </div>
          ))}
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default CardItemsSkeleton;
