import React, { useEffect } from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import HomeComponent from '../../components/HomeComponent'
import TopComponent from '../../components/TopComponent'

const Home = () => {

  useEffect(() => {
    document.title = 'Nowflix | Watch your favorite movies and series'
  }, [])

  return (
    <CommonComponent>
        <TopComponent />
        <HomeComponent />
    </CommonComponent>
  )
}

export default Home