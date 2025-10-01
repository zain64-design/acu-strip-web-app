import { twMerge } from "tailwind-merge";
import { BiImage } from "react-icons/bi";

const Skeleton = ({
  type,
  headingCount = 1,
  lineCount = 3,
  className,
  wrapper = false,
  wrapperClass = "",
}) => {
  const skeletonClasses = {
    thumbnail: "w-20 h-20 rounded bg-gray-300 animate-pulse flex items-center justify-center",
    heading: "h-6 bg-gray-300 rounded animate-pulse",
    line: "h-4 bg-gray-300 rounded animate-pulse",
    button: "h-12 bg-gray-300 rounded-full animate-pulse",
  };

  const renderRepeatedSkeleton = (count, baseClass) =>
    Array.from({ length: count }).map((_, i) => (
      <div key={i} className={twMerge(baseClass, className)} />
    ));

  if (type === "thumbnail") {
    return (
      <div className={twMerge(skeletonClasses.thumbnail, className)}>
        <BiImage className="text-4xl text-gray-400" />
      </div>
    );
  }

  if (type === "button") {
    return <div className={twMerge(skeletonClasses.button, className)} />;
  }

  if (type === "heading") {
    const skeletons = renderRepeatedSkeleton(headingCount, skeletonClasses.heading);
    return wrapper ? (
      <div className={twMerge(wrapperClass)}>{skeletons}</div>
    ) : (
      <>{skeletons}</>
    );
  }

  if (type === "line") {
    const skeletons = renderRepeatedSkeleton(lineCount, skeletonClasses.line);
    return wrapper ? (
      <div className={twMerge(wrapperClass)}>{skeletons}</div>
    ) : (
      <>{skeletons}</>
    );
  }

  return null;
};

export default Skeleton;