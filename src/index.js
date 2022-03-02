import React from 'react'
import ReactDOM  from 'react-dom'

const App = () => {
	const buttonText = {text: 'Click me!'}
	const labelText = 'Enter Name'
    return (
        <div className='ui container comments'>
			<div className="comment">
				<a href="/" className="avatar">
					<img className="avatar"/>
				</a>
				<div className="content">
					<a href="/" className="author">
						Sam
					</a>
					<div className="metadata">
						<span className="date">Today at 6:00pm</span>
					</div>
					<div className="text">Nice blog post!</div>
				</div>
			</div>
		</div>
    )
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
)