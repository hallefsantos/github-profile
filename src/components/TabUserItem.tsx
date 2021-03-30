import { HiArrowRight } from 'react-icons/hi'

const TabUserItem = ({ user }) => {
  return (
    <div key={user.id} className="relative py-6 px-6">
      <div className="absolute left-0 top-7 w-2 h-10 bg-yellow-300 rounded rounded-l-none"></div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-14 h-14 object-cover object-center mr-5 border-2 border-white rounded-full"
            src={user.avatar_url}
            alt=""
          />
          <h3 className="text-lg font-semibold leading-none">#{user.login}</h3>
        </div>
        <HiArrowRight className="h-5 w-5" />
      </div>
    </div>
  )
}

export default TabUserItem
