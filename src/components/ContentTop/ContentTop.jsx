import { useContext } from 'react'
import './ContentTop.css'
import { iconsImgs } from '../../utils/images'
import { MenuContext } from '../../context/MenuContext'
const ContentTop = () => {
    const {MenuClass,SetMenuClass}= useContext(MenuContext)
    const toggleSidebar =()=>{
        if(MenuClass!=='sidebar-change')
        {
            SetMenuClass('sidebar-change')
        }
        else{
            SetMenuClass("")
        }
    }
  return (
    <div className='main-content-top'>
        <div className='content-top-left'>
            <button type='button' className='sidebar-toggler' onClick={()=> toggleSidebar()}>
                <img src={iconsImgs.menu} alt=''/>
            </button>
            <h3 className='content-top-title'>Home</h3>
        </div>
        <div className='content-top-btns'>
            <button type='button' className='search-btn content-top-btn'>
                <img src={iconsImgs.search} alt=''/>
            </button>
            <button type='button' className='search-btn content-top-btn'>
                <img src={iconsImgs.bell} alt=''/>
                <span className='notification-btn-dot text-white'></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop