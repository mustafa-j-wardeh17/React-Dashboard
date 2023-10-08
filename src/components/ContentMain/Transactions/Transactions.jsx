import { transactions } from '../../../data/data'
import { iconsImgs } from '../../../utils/images'
import './Transactions.css'

const Transactions = () => {
  return (
    <div className='grid-one-item grid-common grid-c2'>
        <div className='grid-c-title'>
            <h3 className='grid-c-title-text'>All Transactions</h3>
            <button className='grid-c-title-icon'>
                <img src={iconsImgs.plus}/>
            </button>
        </div>
        <div className='grid-content'>
            <div className='grid-items'>
                {
                    transactions.map((Transaction)=>(
                        <div className='grid-item' key={Transaction.id} >
                            <div className='grid-item-l'>
                                <div className='avatar img-fit-cover'>
                                    <img src={Transaction.image} alt=''/>
                                </div>
                                <p className='text'>{Transaction.name}<span>{Transaction.date}</span></p>
                            </div>
                            <div className='grid-item-r'>
                                <span className='text-scarlet'>{Transaction.amount}</span>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Transactions