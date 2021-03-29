import { HiArrowRight } from 'react-icons/hi'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [userError, setUserError] = useState(false)

  const checkUser = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`).then(
      async function (response) {
        if (response.status !== 404) {
          router.push(`/users/${user}`)
        } else {
          setUserError(true)
        }
      }
    )
  }

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value)
  }

  return (
    <div className="flex items-center bg-gray-800 min-h-screen">
      <div className="w-full px-5 flex flex-col items-center space-y-10">
        <img className="w-20" src="/github-logo.png" alt="" />

        <div className="w-full space-y-3">
          <div className="relative">
            <input
              onInput={handleUser}
              onFocus={() => setUserError(false)}
              className="py-2 px-3 w-full rounded-md"
              type="text"
              placeholder="Usuário"
            />
            {userError && (
              <span className="p-1 absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white bg-red-500 rounded">
                Usuário não encontrado
              </span>
            )}
          </div>
          <div>
            <button
              onClick={checkUser}
              className="p-2 w-full flex items-center justify-center bg-yellow-300 text-lg font-bold uppercase rounded-md"
            >
              Entrar
              <HiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
