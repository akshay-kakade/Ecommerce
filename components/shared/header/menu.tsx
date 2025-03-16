import CartButton from './cart-button'
import UserButton from './user-button'

const Menu = ({ forAdmin = false }: { forAdmin?: boolean }) => {

  return (
    <div className='flex justify-end'>
      <nav className='md:flex gap-3 hidden w-full'>
        <UserButton />
        {forAdmin ? null : <CartButton />}
      </nav>
    </div>
  )
}

export default Menu