import { HiOutlineHome, HiUserGroup } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'

type NavTabsProps = {
  setActiveTab: (value: string) => void
}

const NavTabs = ({ setActiveTab }: NavTabsProps) => {
  return (
    <nav className="py-2 fixed bottom-0 inset-x-0 bg-white text-gray-900 flex justify-around rounded-lg rounded-b-none">
      <button
        className="flex flex-col items-center"
        onClick={() => setActiveTab('home')}
      >
        <HiOutlineHome className="h-6 w-6" />
        Home
      </button>
      <button
        className="flex flex-col items-center"
        onClick={() => setActiveTab('repos')}
      >
        <FiGithub className="h-6 w-6" />
        Repos
      </button>
      <button
        className="flex flex-col items-center"
        onClick={() => setActiveTab('followers')}
      >
        <HiUserGroup className="h-6 w-6" />
        Seguidores
      </button>
      <button
        className="flex flex-col items-center"
        onClick={() => setActiveTab('following')}
      >
        <HiUserGroup className="h-6 w-6" />
        Seguindo
      </button>
    </nav>
  )
}

export default NavTabs
