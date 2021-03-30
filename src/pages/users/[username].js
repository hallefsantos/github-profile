import { useState } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import TabHeader from '../../components/TabHeader'
import TabRepositoryItem from '../../components/TabRepositoryItem'
import TabUserItem from '../../components/TabUserItem'
import NavTabs from '../../components/NavTabs'
import Link from 'next/link'

const fetchApi = async (username, type) => {
  const res = await fetch(`https://api.github.com/users/${username}${type}`)
  return await res.json()
}

const Profile = ({ profile, repos, followers, following }) => {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen flex flex-col text-white">
      {activeTab === 'home' && (
        <>
          <header className="py-4 px-3 flex justify-between bg-gray-900">
            <strong>#{profile.login}</strong>
            <Link href="/">
              <button className="flex items-center">
                Sair
                <HiOutlineLogout className="ml-2 w-6 h-6 text-red-500" />
              </button>
            </Link>
          </header>

          <main className="bg-gray-800 flex-1">
            <div className="relative flex justify-center">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-900"></div>
              <img
                className="relative w-24 rounded-full border-2 border-white"
                src={profile.avatar_url}
                alt={`@${profile.login} - ${profile.name}`}
              />
            </div>

            <div className="relative px-6 mt-8">
              <div className="absolute left-0 top-0 w-2 h-10 bg-yellow-300 rounded rounded-l-none"></div>
              <h1 className="uppercase text-2xl font-semibold">
                {profile.name}
              </h1>
              <div className="mt-1 flex flex-col">
                {profile.email && (
                  <a href="mailto:hallefsantos@gmail.com">
                    hallefsantos@gmail.com
                  </a>
                )}
                {profile.location && <span>{profile.location}</span>}
              </div>
            </div>

            <div className="mt-8 py-3 bg-gray-700 grid grid-cols-3">
              <div className="flex flex-col items-center">
                <strong className="text-4xl">{profile.followers}</strong>
                Seguidores
              </div>
              <div className="flex flex-col items-center">
                <strong className="text-4xl">{profile.following}</strong>
                Seguindo
              </div>
              <div className="flex flex-col items-center">
                <strong className="text-4xl">{profile.public_repos}</strong>
                Repos
              </div>
            </div>

            {profile.bio && (
              <div className="relative px-6 mt-8">
                <div className="absolute left-0 top-0 w-2 h-10 bg-yellow-300 rounded rounded-l-none"></div>
                <h2 className="uppercase text-2xl font-semibold">BIO</h2>
                <p>{profile.bio}</p>
              </div>
            )}
          </main>
        </>
      )}

      {activeTab === 'followers' && (
        <>
          <TabHeader setActiveTab={setActiveTab}>
            {followers.length} seguidores
          </TabHeader>
          {followers.length > 0 && (
            <div className="pb-16 flex-1 bg-gray-800 divide-y">
              {followers.map((follower) => (
                <TabUserItem key={follower.id} user={follower} />
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'following' && (
        <>
          <TabHeader setActiveTab={setActiveTab}>
            {following.length} seguidores
          </TabHeader>
          {following.length > 0 && (
            <div className="pb-16 flex-1 bg-gray-800 divide-y">
              {following.map((follower) => (
                <TabUserItem key={follower.id} user={follower} />
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === 'repos' && (
        <>
          <TabHeader setActiveTab={setActiveTab}>
            {repos.length} repositórios
          </TabHeader>

          {repos.length > 0 && (
            <div className="pb-16 flex-1 bg-gray-800 divide-y">
              {repos.map((repo) => (
                <TabRepositoryItem key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </>
      )}
      <NavTabs setActiveTab={setActiveTab} />
    </div>
  )
}

export default Profile

export const getServerSideProps = async ({ params }) => {
  const profile = await fetchApi(`${params?.username}`, '')
  const repos = await fetchApi(`${params?.username}`, '/repos')
  const followers = await fetchApi(`${params?.username}`, '/followers')
  const following = await fetchApi(`${params?.username}`, '/following')

  if (!profile) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      profile,
      repos,
      followers,
      following
    }
  }
}
