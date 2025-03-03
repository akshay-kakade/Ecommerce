/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useCartStore from '@/hooks/use-cart-store'
import { toast } from 'react-hot-toast'
import { OrderItem } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


const CustomToast = ({ router }: any) => (
  <div>
    <p>Added to Cart</p>
    <Button
      onClick={() => {
        router.push('/cart')
      }}
    >
      Go to Cart
    </Button>
  </div>
)

export const showToast = ( router: any) => {
  toast(<CustomToast router={router} />)
}


export default function AddToCart({
  item,
  minimal = false,
}: {
  item: OrderItem
  minimal?: boolean
}) {
  const router = useRouter()

  const { addItem } = useCartStore()

  const [quantity, setQuantity] = useState(1)


  return minimal ? (
      <Button
        className='rounded-full w-auto cursor-pointer'
        onClick={() => {
          try {
            addItem(item, 1)
            showToast(router)
          } catch (error: any) {
            toast.error(error.message)
          }
        }}
      >
        Add to Cart
      </Button>
    ) : (
      <div className='w-full space-y-2'>
        <Select
          value={quantity.toString()}
          onValueChange={(i) => setQuantity(Number(i))}
        >
          <SelectTrigger className='cursor-pointer'>
            <SelectValue>
              Quantity: {quantity}
            </SelectValue>
          </SelectTrigger>
          <SelectContent position='popper'>
            {Array.from({ length: item.countInStock }).map((_, i) => (
              <SelectItem key={i + 1} value={`${i + 1}`}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
  
        <Button
          className='rounded-full w-full cursor-pointer hover:bg-amber-100'
          type='button'
          onClick={async () => {
            try {
              const itemId = await addItem(item, quantity)
              router.push(`/cart/${itemId}`)
            } catch (error: any) {
              toast.error(error.message)
            }
          }}
        >
          Add to Cart
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            try {
              addItem(item, quantity)
              router.push(`/checkout`)
            } catch (error: any) {
              toast.error(error.message)
            }
          }}
          className='w-full rounded-full cursor-pointer bg-amber-300'
        >
          Buy Now
        </Button>
      </div>
  )
}
