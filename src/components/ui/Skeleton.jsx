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
    thumbnail: "skl-bg w-20 h-20 rounded flex items-center justify-center",
    heading: "skl-bg h-6 rounded",
    line: "skl-bg h-4 rounded",
    button: "skl-bg h-12 rounded-full",
    box: "skl-bg w-full h-48 rounded",
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

if (type === "box") {
    return (
      <div className={twMerge(skeletonClasses.box, className)}/>
    );
  }

  return null;
};

export default Skeleton;