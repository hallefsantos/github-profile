import {
  HiOutlineStar,
  HiOutlineLockClosed,
  HiOutlineLockOpen
} from 'react-icons/hi'

const TabRepositoryItem = ({ repo }) => {
  return (
    <div key={repo.id} className="relative px-6 py-8">
      <div className="absolute left-0 top-7 w-2 h-10 bg-yellow-300 rounded rounded-l-none"></div>
      <h3 className="mb-2 text-xl font-semibold">{repo.name}</h3>
      {repo.description && <p className="text-gray-400">{repo.description}</p>}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center text-gray-400">
          <HiOutlineStar className="mr-1 text-yellow-300 h-5 w-5" />
          32
        </div>
        <span>
          {repo.private ? (
            <HiOutlineLockOpen className="h-5 w-6 text-red-500" />
          ) : (
            <HiOutlineLockClosed className="h-5 w-6 text-green-500" />
          )}
        </span>
      </div>
    </div>
  )
}

export default TabRepositoryItem
