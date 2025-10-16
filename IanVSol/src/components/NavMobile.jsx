
import { useState } from "react"
import Hamburger from "hamburger-react";

export default function HmaburgerMenu() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className=" lg:hidden 2xl:hidden">
      <Hamburger toggled = {isOpen} toggle={setOpen} />
    </div>
  )
  
}