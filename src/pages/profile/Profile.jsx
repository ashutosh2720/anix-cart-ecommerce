import React from 'react'
import './Profile.css'
import { users } from '../../backend/db/users'

function Profile() {
    return (
        <div className='profile'>

            {users.map((user) =>
                <div className='user'>
                    <img src="https://avatars.githubusercontent.com/u/109720375?v=4" alt="" style={{ height: '100px', borderRadius: '100%', margin: '10px' }} />
                    <p>Name : {user.firstName} {user.lastName}</p>
                    <p>Email : {user.email}</p>
                    <p>address : {user.address}</p>
                    <p>pincode : {user.pincode}</p>
                    <p>contact Number : {user.contactNumber}</p>

                </div>)}

        </div>
    )
}

export default Profile
