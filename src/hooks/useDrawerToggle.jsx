import { useState } from 'react'

const useDrawerToggle = (initialState = false) => {
const [isOpen, setIsOpen] = useState(initialState);
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  const toggleDrawer = () => setIsOpen(prev => !prev);
return { isOpen, openDrawer, closeDrawer, toggleDrawer };
}

export default useDrawerToggle