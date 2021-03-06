import React from 'react'
import ReactDOM  from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'


const App = () => {
	const buttonText = {text: 'Click me!'}
	const labelText = 'Enter Name'
    return (
        <div className='ui container comments'>
			<ApprovalCard>
				<div>
					<h1>Props.children displays any children of that component, like this H1. It doesn't have to be a react component</h1>
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					date="Today at 4pm" 
					text="Comment 1 here" 
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					date="Today at 8pm" 
					text="Comment 2 here" 
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					date="Today at 10pm" 
					text="Comment 3 here" 
					avatar={faker.image.image()}
				/>
			</ApprovalCard>
		</div>
    )
}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
)