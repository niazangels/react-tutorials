import React from 'react'
import ReactDOM from 'react-dom'
import Faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning</h4>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Bhavya"
                    avatar={Faker.image.avatar()}
                    timeAgo="Yesterday at 4:00pm"
                    text="Oww man!"
                />
            </ApprovalCard>
            <CommentDetail
                author="Raj"
                avatar={Faker.image.avatar()}
                timeAgo="Today at 5:00pm"
                text="Awesome, bro!"
            />
            <CommentDetail
                author="Sruthi"
                avatar={Faker.image.avatar()}
                timeAgo="Yesterday at 9:00pm"
                text="Nallatha 😍" />


        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))