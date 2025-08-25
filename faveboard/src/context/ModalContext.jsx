import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null)

  const openModal = (type, data = null) => setModal({ type, data })

  const closeModal = () => setModal(null)

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}