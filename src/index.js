import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
	const getButtonText = () => {
		return 'Click on me!'
	}
    return (
        <div>
			<label className="label" for="name">Enter Name:</label>
			<input id="name" type="text" />
			<button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
		</div>
    )
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
)