import '../public/styles/index.css'
import Card from './Components/Card'
import { jobs } from './jobs'

const App = () => {
  return (
    <>
      <div className='cards-container'>
        {jobs.map((item, index) => (
    <Card key={index} {...item} />
  ))}
      </div>
    </>
  )
}

export default App
