import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h1>Ques-1:What is difference between authorization and authentication?</h1>
            <h2>Ans:Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger,s identity has been determined, the second step is verifying any special services the passenger has access to, whether it's flying first-class or visiting the VIP lounge.</h2>
            <h1>Ques-2:Why are we using firebase?</h1>
            <h2>Ans:Firebase Analytics gives us undeniable insight into user behavior. We can use this knowledge to make informed decisions about how to market our app better and to reach out to the audiences that we want to target. The unique features it offers also allows us to analyze the performance of our campaigns across organic and paid channels to understand which methods are most effective in regards to the specific users that we want to reach.</h2>
            <h1>Ques-3:What other options do you have to implement authentication?</h1>
            <h2>Ans:Generally, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, fingerprints ,face lock and etc.</h2>
            <h1>Ques-4:What other services does firebase provide other than authentication?</h1>
            <h2>Ans:Firebase provide us many many services other than authentication sucs as:we can use toggle,deploy,make a live site link,make project,make app,make game and etc.At prersent all of developers like to use firebase.It is easy to use and it is very flexable.</h2>
        </div>
    );
};

export default Blogs;