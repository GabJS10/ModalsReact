import { useState } from 'react';


function useModal() {
    const [isOpen,setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return [isOpen,handleIsOpen];
}

export default useModal;