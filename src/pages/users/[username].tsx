import { HiOutlineLogout } from 'react-icons/hi'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

type profileProps = {
  profile: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name: string
    company: string
    blog: string
    location: string
    email: string
    hireable: boolean
    bio: string
    twitter_username: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
  }
}

const Profile = ({ profile }: profileProps) => {
  return (
    <div className="min-h-screen flex flex-col text-white">
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
          <h1 className="uppercase text-2xl font-semibold">{profile.name}</h1>
          <div className="mt-1 flex flex-col">
            {profile.email && (
              <a href="mailto:hallefsantos@gmail.com">hallefsantos@gmail.com</a>
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
    </div>
  )
}

export default Profile

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://api.github.com/users/${params?.username}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      profile: data
    }
  }
}
