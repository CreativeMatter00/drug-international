import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type IStoryCard = {
  src: string;
  storyType: string;
  title: string;
  description: string;
};

function StoryCard(props: IStoryCard) {
  const locale = useLocale();
  return (
    <div className="p-2 bg-[#E4E4E6] rounded-md font-medium relative">
      <div className="flex gap-4">
        <div className="h-[200px] w-[200px] min-w-[200px] overflow-hidden">
          <Image
            src={props.src}
            alt="Image Alt Text"
            width={200}
            height={200}
            layout="fixed"
            objectFit="cover"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <p className="text-primary font-medium text-xs uppercase mb-4">
            Success Stories
          </p>
          <p className="text-lg text-textPrimary mb-4">{props.title}</p>
          <p className="text-base text-textSecondary">{props.description}</p>

          <div className="absolute bottom-2">
            <Link href={`/${locale}//news/1`} className="text-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
