import { HiArrowLeft } from 'react-icons/hi'

const TabHeader = ({ children, setActiveTab }) => {
  return (
    <div className="py-5 sticky top-0 bg-gray-900 z-10">
      <button
        onClick={() => setActiveTab('home')}
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      >
        <HiArrowLeft className="h-6 w-6" />
      </button>

      <div className="text-center">{children}</div>
    </div>
  )
}

export default TabHeader
