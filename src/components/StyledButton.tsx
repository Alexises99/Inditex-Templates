import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren
} from 'react'

interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined
  extraProps: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
}

export default function StyledButton({
  extraProps,
  type,
  children
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="hover:bg-light-gray disabled:bg-light-gray cursor-pointer border-1 border-black px-12 py-2 text-black transition-colors disabled:cursor-auto"
      type={type}
      {...extraProps}
    >
      {children}
    </button>
  )
}
