import Image from 'next/image'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">

        <Image src="/netflix_logo.webp" className="aspect-[300-81]" width={150} height={40.5} alt="Netflix Logo" />

        <ul className="hidden space-x-4 md:flex headerlinks">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>

      </div>

      <div className="flex items-center space-x-4 text-sm  font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account/">
          <Image src="/default-profile-img.webp" width={48} height={48} alt="My Profile Pic"
          className="cursor-pointer rounded" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
