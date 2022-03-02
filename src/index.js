import React from 'react'
import ReactDOM  from 'react-dom'
import CommentDetail from './CommentDetail'


const App = () => {
	const buttonText = {text: 'Click me!'}
	const labelText = 'Enter Name'
    return (
        <div className='ui container comments'>
			<CommentDetail />
			<CommentDetail />
			<CommentDetail />
		</div>
    )
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
)