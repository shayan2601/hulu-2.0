import Image from "next/image";
import HeadeItem from "./HeadeItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center m-5 justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeadeItem title="HOME" Icon={HomeIcon} />
        <HeadeItem title="TRENDING" Icon={BadgeCheckIcon} />
        <HeadeItem title="VERIFIED" Icon={CollectionIcon} />
        <HeadeItem title="COLLECTION" Icon={LightningBoltIcon} />
        <HeadeItem title="SEARCH" Icon={SearchIcon} />
        <HeadeItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
