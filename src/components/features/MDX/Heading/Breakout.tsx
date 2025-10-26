import clsx from 'clsx'

export const Breakout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        'not-prose relative inset-x-1/2 mx-[-50vw] w-screen',
        'md:inset-x-[-5%] md:mx-0 md:w-[110%] md:max-w-screen',
        'lg:inset-x-[-15%] lg:w-[130%]',
      )}
    >
      {children}
    </div>
  )
}
