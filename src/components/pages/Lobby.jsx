import React, { useState, useRef } from 'react';
import ImgBackground from '../../ui/ImgBackground';
import Navs from '../../ui/Navs';
import TextCard from '../../ui/TextCard';
import VerticalSlider from '../../ui/VerticalSlider';
import "../../ui/css/RoomSearch.css";
import RoomSearch from '../../ui/RoomSearch';
import RoomList from '../../ui/RoomList';
import Footer from '../../ui/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Lobby() {
  const roomListRef = useRef(null); // Ref for the RoomList component

  const [searchOptions, setSearchOptions] = useState(null);

  const handleSearch = (options) => {
    setSearchOptions(options);
    scrollToRoomList();
  };

  const scrollToRoomList = () => {
    if (roomListRef.current) {
      roomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navs />
      <RoomSearch onSearch={handleSearch} onSearchClick={scrollToRoomList} />
      <TextCard />
      <ImgBackground />
      <VerticalSlider />
      <div ref={roomListRef}>
        <RoomList searchOptions={searchOptions} />
      </div>
     <Footer />
    </>
  );
}
