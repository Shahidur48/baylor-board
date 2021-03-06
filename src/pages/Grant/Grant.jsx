import Meta from '../../components/Meta'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Grant = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const redirect = '/login'

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect)
    } else{
      console.log(userInfo)
    }
  }, [history, userInfo, redirect])
  return (
    <>
      <Meta title='Grant Page' />
      <h1 className='text text-center'>Grant Page</h1>
    </>
  )
}

export default Grant
