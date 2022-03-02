import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
	const buttonText = {text: 'Click me!'}
	const labelText = 'Enter Name'
    return (
        <div>
			Hi There
		</div>
    )
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
)