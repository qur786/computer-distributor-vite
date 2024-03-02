interface DemoCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export function DemoCard({
  description,
  image,
  imageAlt,
  title,
}: DemoCardProps): JSX.Element {
  return (
    <div className="flex flex-row gap-2 rounded-md h-48 w-full shadow-md dark:bg-[#1E1E1E] box-border p-2">
      <img src={image} alt={imageAlt} className="w-1/2 h-full" />
      <div className="flex flex-col gap-2 w-1/2 h-full">
        <h6 className="text-xl font-bold text-[#0F3460] dark:text-white">
          {title}
        </h6>
        <p>{description}</p>
      </div>
    </div>
  );
}
