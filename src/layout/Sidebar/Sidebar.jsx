import './Sidebar.css'
import { personsImgs } from '../../utils/images'
import { navigationLinks } from '../../data/data'
import { useState } from 'react'
import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
const Sidebar = () => {
  const  [activeLinkTdx]=useState(1);
  const{MenuClass}=useContext(MenuContext)
  console.log(MenuClass)

  return (
    <div className={`sidebar ${MenuClass}`}>
      <div className='user-info'>
        <div className='info-img img-fit-cover'>
          <img src={personsImgs.person_two} alt='profile image'/>
        </div>
        <span className='info-name'>Alice-doe</span>
      </div>
      <nav className='navigation'>
        <ul className='nav-list'>
          {
            navigationLinks.map((navigationLink)=>
            (<li className='nav-item' key={navigationLink.id}>
            <a href='#' className={`nav-link ${navigationLink.id===activeLinkTdx ?'active' : null}`}>
              <img src={navigationLink.image} className='nav-link-icon' alt={navigationLink.title} />
              <span className='nav-link-text'>{navigationLink.title}</span>
            </a></li>))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar