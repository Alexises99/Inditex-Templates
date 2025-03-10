import { UniqueIdentifier } from '@dnd-kit/core'

export type Alignment = 'left' | 'center' | 'right'

export interface Row {
  id: number
  alignment: Alignment
  items: UniqueIdentifier[]
}

export interface Product {
  name: string
  price: number
  image: string
}
