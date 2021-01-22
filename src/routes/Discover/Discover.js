import React from 'react'
import DiscoverHome from '../../components/DiscoverHome/DiscoverHome'

export default function Discover({ history }) {
  return (
    <section className='discover-container'>
      <DiscoverHome history={history} />
    </section>
  )
}