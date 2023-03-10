import {useState} from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/button/button'
import { handlePayment } from '../../hooks/paystack';

function Payment() {
    const [data, setData] = useState({});
 

    const handleChange =(e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment(data.email, parseFloat(data.amount));
        
    }
  return (
    <div className='w-full flex flex-col'>
        <form
        onSubmit={handleSubmit} 
        className='w-full flex flex-col bg-white shadow-md 
        rounded px-8 pt-6 pb-8'>
            <div className='mb-4 flex flex-col text-start'>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input 
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3
                text-gray-700 leading-tight focus:outline-none  
                focus:shadow-outline" id="email" type="email" 
                placeholder="Email" name='email' required
                />
            </div>
            <div className="mb-6 flex flex-col text-start">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="account">
                   Amount
                </label>
                <input 
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-3
                text-gray-700 leading-tight focus:outline-none
                focus:shadow-outline" id="amount" type="tel" 
                placeholder="000000000" name='amount' required
                />
            </div>

            <div className='flex flex-row justify-between w-full'>
                <Button title={'Submit'} type={"submit"} />
                <div>
                    <Link to='/'>
                        <Button title={'Back'} bg={'bg-gray-200'} />
                    </Link>
                </div>
                
            </div>

        </form>
    </div>
  )
}

export default Payment