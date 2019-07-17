import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today At 4:45PM" 
                    content="Very nice blog, i liked it a lot" 
                    profilePicture={faker.image.avatar()} 
                />
            </ApprovalCard> 
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today At 2:00PM" 
                    content="Keep up with the good work mate!" 
                    profilePicture={faker.image.avatar()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday At 4:20PM" 
                    content="It is ok but for me is kinda boring" 
                    profilePicture={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'))