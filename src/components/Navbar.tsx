import React from 'react'
import { Session } from 'next-auth'

export default function Navbar({user}:{user:Session}) {
  return (
    <div className='w-full h-24 bg-slate-300'>
        <div className='float-right'>
            <p>{user.user?.email}</p>
        </div>
    </div>
  )
}
