import { useContext } from "react";
import AppContext from "../../context/app";
import { Container } from "./styles";

export default function HamburgerMenu() {
  const { setExtendedSideBar, extendedSideBar } = useContext(AppContext);

  function handleExtendSideBar() {
    setExtendedSideBar(extendedSideBar ? false : true)
  }

  return (
    <Container onClick={handleExtendSideBar}>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </Container>
  )
}