import { useContext } from 'react'
import './Thanks.css'
import iconsucces from "../../assets/images/icon-success.svg"
import { NewsletterContext } from '../../Context/NewsletterContext'
import {useNavigate} from 'react-router-dom'

function Thanks(){
    const {email} = useContext(NewsletterContext)
    const navigate = useNavigate()

    return (
        <div className='card p-3' id='card-thanks'>
            <div className='card-body'>
                <img src={iconsucces} alt="Icon succes" className='icon-succes'/>
                <h1 className='fw-bold display-6 thanks-title mt-md- mt-3'>Thanks for subscribing!</h1>
                <p className='text-black text mt-md-3 mt-4'> A confirmation email has been sent to <span className='fw-bold'>{email}</span>. 
                    Please open it and click the button inside to confirm your subscription.
                </p>
                <button className='btn btn-custom w-100 p-2 mt-md-3 mt-4' onClick={()=> navigate('/')}>Dismiss message</button>
            </div>
        </div>
    )
}


export default Thanks