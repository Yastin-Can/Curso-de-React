import './App.css'
import { UserCard } from './userCard'
import { users } from './users'

function App() {

  return (
    <section className='section'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      {users.map(({ userName, img, prof, ubi, descript}) => {
        return (
          <UserCard
            key={userName}
            img={img}
            prof={prof}
            ubi={ubi}
            descript={descript}
          >
            {userName}
          </UserCard>
        )
      })}
    </section>
  )
}

export default App
