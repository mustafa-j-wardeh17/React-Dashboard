import './Subscriptions.css'
import { iconsImgs } from "../../../utils/images";
import { subscriptions } from "../../../data/data";

function Subscriptions() {
  return (
    <div className='subgrid-two-item grid-common grid-c5'>
      <div className='grid-c-title'>
        <h3 className='grid-c-title-text'>Subscriptions</h3>
        <button className='grid-c-title-icon'>
          <img src={iconsImgs.plus}/>
        </button>
      </div>
      <div className='grid-c5-content'>
        <div className='grid-items'>
          {
            subscriptions.map(subscription=>(
              <div className='grid-item' key={subscription.id}>
                <div className='grid-item-l'>
                  <div className='icon'>
                    <img src={iconsImgs.alert} alt=''/>
                  </div>
                  <div className='text text-silver-v1'>
                    {subscription.title}<span>due<br/>{subscription.due_date}</span>
                  </div>
                  <div className='grid-item-r'>
                    <span className='text-silver-v1'>${subscription.amount}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Subscriptions