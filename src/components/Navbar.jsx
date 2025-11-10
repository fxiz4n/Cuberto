import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-24'>
      <div className="logo">
        <img className='w-24' src={logo} alt="Cuberto" />
      </div>
      <div className="links">
        <ul className='flex gap-10 text-md'>
          <li>Services</li>
          <li>Projects</li>
          <li>Company</li>
          <li>Blog</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar