import './App.css'
import Description from './components/Description/Description'

function App() {
  const cafeInfo = {
    title: 'Sip Happens Café',
    text: 'Please leave your feedback about our service by selecting one of the options below.'
  }
  const {title, text} =cafeInfo;

  return (
    <>
    <Description title={title} text={text}></Description>
     
    </>
  )
}

export default App
