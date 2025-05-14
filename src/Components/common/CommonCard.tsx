interface CommonCardProps {
  image: string;
  description: string;
  title: string;
}

export function CommonCard({ data }: { data: CommonCardProps }) {
  const { image, description, title } = data;

  return (
    <div className="max-w-sm overflow-hidden flex flex-col justify-between shadow-xl bg-white h-full">
      {/* Image section */}
      <div className="h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        {/* Description section */}
        <div className="p-6">
          <p className="text-[#887C68] text-sm leading-6">{description}</p>
        </div>

        {/* Title section */}
        <div className="p-5 bg-[#F8F8F8]">
          <h3 className="text-[#887C68] text-xl">{title}</h3>
        </div>
      </div>
    </div>
  );
}
