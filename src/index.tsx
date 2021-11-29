import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';

function App() {
  return (
    <Hello />
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
