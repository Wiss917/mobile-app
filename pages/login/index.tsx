import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTitle } from '../../hook/document'
import { backgroundImage } from './util'

const Login: NextPage = () => {
    const router = useRouter()
    const [account, setAccount] = useState('')
    const [pwd, setPwd] = useState('')
    useTitle('login')

    return (
        <div
            className='flex h-screen w-screen flex-col items-center justify-center bg-cover bg-top'
            style={{
                backgroundImage,
            }}>
            <form
                className='box-border flex w-10/12 flex-col gap-2 p-4'
                onSubmit={(e) => {
                    e.preventDefault()

                    // return false
                }}>
                <input
                    required
                    type='text'
                    placeholder='account or email'
                    className={`base-input ${
                        account ? 'bg-white' : 'bg-gray-50'
                    } md:w-1/2`}
                    value={account}
                    onChange={({ target: { value } }) => {
                        setAccount(value)
                    }}
                />
                <input
                    required
                    type='password'
                    placeholder='password is required'
                    value={pwd}
                    className={`base-input ${
                        pwd ? 'bg-white' : 'bg-gray-50'
                    } md:w-1/2`}
                    onChange={({ target: { value } }) => {
                        setPwd(value)
                    }}
                />
                <button
                    type='submit'
                    className={`base-btn bg-green-400 active:bg-green-500 md:bg-blue-400 md:active:bg-blue-500`}
                    onClick={(e) => {
                        if (!account || !pwd) {
                            // todo toast
                            return
                        }

                        router.push('/', 'home')
                    }}>
                    login
                </button>
            </form>
            <div className='fixed bottom-0 py-3'>
                <span className='font-mono italic text-gray-400'>
                    endless wonder
                </span>
            </div>
        </div>
    )
}

export default Login
