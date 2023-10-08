//import cs from "classnames";
import { createContext } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
  children: JSX.Element
}

export const PositionContext = createContext<any>(null)

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='scroll-smooth'>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}
