import React from 'react'
import ImgBackground from '../../ui/ImgBackground'
import Navs from '../../ui/Navs'
import TextCard from '../../ui/TextCard'
import VerticalSlider from '../../ui/VerticalSlider'
import "../../ui/css/RoomSearch.css";
import RoomSearch from '../../ui/RoomSearch'

import RoomList from '../../ui/RoomList'


export default function Lobby() {
  return (
    <>
      <Navs />
      <RoomSearch />
      <TextCard />
      <ImgBackground />
      <VerticalSlider />
      <RoomList />
    </>
  )
}
