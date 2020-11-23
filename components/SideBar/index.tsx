import { useContext, useEffect } from 'react';
import AppContext from '../../context/app';
import HamburgerMenu from '../HamburgerMenu';
import { Container, SideBarItem } from "./styles";

import { AiFillSetting } from 'react-icons/ai';
import ListSavedTexts from '../ListSavedTexts';

export default function SideBar() {
  const { extendedSideBar, setExtendedSideBar } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener('click', e => {
      if (e.clientX > 300) {
        setExtendedSideBar(false);
      }
    });
  }, []);

  return (
    <>
      <HamburgerMenu />
      <Container extend={extendedSideBar}>
        <div className="saved-texts-container">
          <h2> Textos salvos </h2> 
          <ListSavedTexts />
        </div>
        <SideBarItem className="item-settings"> <AiFillSetting size={24} />  Configurações </SideBarItem>
      </Container>
    </>
  )
}