import { writeDailySpecial } from '../backend/config'

const Home = () => {
  writeDailySpecial()
  return (
    <div>
      <h1>Hello World</h1>
      <a href="/pages">Pages</a>
    </div>
  )
}

export default Home
