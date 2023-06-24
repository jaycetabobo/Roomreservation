import React, { useState } from 'react';
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
  const [searchOptions, setSearchOptions] = useState(null);

  const handleSearch = (options) => {
    setSearchOptions(options);
  };

  return (
    <>
      <Navs />
      <RoomSearch onSearch={handleSearch} />
      <TextCard />
      <ImgBackground />
      <VerticalSlider />
      <RoomList searchOptions={searchOptions} />
     <Footer />
    </>
  );
}
