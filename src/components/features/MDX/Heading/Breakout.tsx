import { cn } from '~/utils/style'

export const Breakout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'not-prose relative inset-x-1/2 mx-[-50vw] w-screen',
        'md:inset-x-[-5%] md:mx-0 md:w-[110%] md:max-w-screen',
        'lg:inset-x-[-15%] lg:w-[130%]',
        className,
      )}
    >
      {children}
    </div>
  )
}
