import { CommonCard } from "../../../components/common";
import type { CommunityData } from "../../../components/type";

interface CommunitiesGridProps {
  communities: CommunityData[];
}

export function CommunitiesGrid({ communities }: CommunitiesGridProps) {
  return (
    <>
      <h1 className="text-xl md:text-3xl w-[150px] md:w-full font-semibold heading-font text-[#887C68] pt-10 container text-center">
        COMMUNITIES WE MANAGE
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-10 px-4 md:px-7 container py-10">
        {communities.map((community) => (
          <CommonCard
            key={community.ID}
            data={{
              title: community.post_title,
              description: community.post_excerpt,
              image: community.image_url,
            }}
          />
        ))}
      </div>
    </>
  );
}
