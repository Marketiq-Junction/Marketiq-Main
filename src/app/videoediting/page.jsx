import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import VideoEditing from '@/components/videoediting/videoediting'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
      <VideoEditing/>
      <Footer/>
    </div>
  )
}

export default page
