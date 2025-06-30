import type { ComponentProps, PropsWithChildren } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  base: [
    'flex items-center justify-center text-center',
    'font-mono',
    'transition-all duration-100',
    'cursor-pointer disabled:cursor-not-allowed',
  ],
  variants: {
    variant: {
      blue: [
        'bg-ens-blue text-ens-gray-two',
        'hover:bg-ens-blue-hover hover:enabled:bg-ens-blue-hover',
      ],
      blueLight: [
        'bg-ens-blue-light text-ens-blue',
        'hover:enabled:bg-ens-blue-light-hover',
      ],
      blueDashed: [
        'bg-ens-blue-light text-ens-blue',
        'border-2 border-dashed border-ens-blue',
        'hover:enabled:bg-ens-blue-light-hover',
      ],
    },
    size: {
      small: ['px-6 py-4 rounded min-h-[60px]', 'text-sm leading-[96%]'],
      default: ['px-6 rounded min-h-[70px]', 'text-sm leading-[120%]'],
      large: [
        'px-5 py-5 rounded xl:px-[6.25rem] xl:py-[1.875rem]',
        'text-lg tracking-[-0.36px] leading-[96%]',
      ],
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'blue',
  },
})

export type ButtonVariants = VariantProps<typeof button>

type ButtonProps = PropsWithChildren<
  ComponentProps<'button' | 'a'> & ButtonVariants
>

export const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const Component: 'a' | 'button' = 'href' in props ? 'a' : 'button'

  return (
    <Component
      className={button({ variant, size, className })}
      // biome-ignore lint/suspicious/noExplicitAny: Prop type mismatch between button and a
      {...(props as any)}
    >
      {children}
    </Component>
  )
}
