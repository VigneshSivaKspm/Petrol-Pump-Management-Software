
import { Outlet } from 'react-router-dom'

import { NumberInput } from './components/Fields/InputFields'
import SideNavbar from './components/SideNav/SideNavbar'
import PageHead from './components/Component/PageHead'
import NavbarDefault from './components/Navbar/NavbarDefault'

function App() {


  return (
    <>

      <section className='flex '>


        <div className=''>
          <SideNavbar />
        </div>

        <div className='w-full'>
          <PageHead />
          <NavbarDefault />
          <Outlet />

        </div>

      </section>

    </>
  )
}

export default App
