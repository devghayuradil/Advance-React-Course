import React from 'react'
import { myUser } from './MyContext';



const LogInUser = () => {
    const {user} = myUser();
    return(
        <p>user: {user.name}</p>
    );
}

const Header = () => {
    return(
        <header>
            <h2>Blogs</h2>
            <LogInUser />
        </header>
    );
}

const Page = () => {
    return(
        <div className='page'>
            <h2>This is Heading....</h2>
            <p>I am paragraph lab lab lab lab ........................</p>
            <h4>writen by </h4>
        </div>
    );
}

const ContextApp = () => {
  return (
    <div>
      <Header />
      <Page />
    </div>
  )
}

export default ContextApp;
