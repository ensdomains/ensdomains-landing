import clsx from 'clsx'

const LegalHeader = ({
  title,
  lastModified,
}: {
  title?: string
  lastModified?: string
}) => {
  return (
    <header className="mb-12 flex w-full flex-col items-center pt-32">
      <div className="flex w-full max-w-2xl flex-col items-center gap-2 text-center">
        <h1 className="mb-2 font-bold text-5xl text-ens-dark-blue tracking-tight">
          {title}
        </h1>
        {lastModified && (
          <span className="rounded-full bg-ens-light-blue px-3 py-1 font-mono text-ens-medium-blue text-sm">
            Last updated: {lastModified}
          </span>
        )}
      </div>
    </header>
  )
}

export const LegalLayout = ({
  children,
  title,
  lastModified,
}: {
  children: React.ReactNode
  title?: string
  lastModified?: string
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <LegalHeader title={title} lastModified={lastModified} />
      <article
        className={clsx(
          'prose md:prose-lg mb-12 max-md:px-4 lg:max-w-4xl',
          // Heading styles
          'prose-headings:mt-8 prose-headings:mb-4 prose-headings:font-medium',
          'prose-h2:text-4xl lg:prose-h2:text-5xl',
          'prose-h3:text-3xl lg:prose-h3:text-4xl',
          'prose-h4:text-2xl lg:prose-h4:text-3xl',
          // Markers
          `prose-li:before:-translate-x-full prose-li:relative prose-ol:list-none prose-li:before:absolute prose-li:before:top-0 prose-li:before:left-0`,
          `prose-ol:[counter-reset:section] prose-li:[ol_&]:before:content-[counters(section,'.')] prose-li:[ol_&]:before:[counter-increment:section]`,
          `prose-ol:[ol_ol_&]:list-[lower-alpha] prose-ol:[ol_ol_ol_&]:list-[lower-roman] prose-li:[ol_ol_ol_&]:before:content-['']`,
        )}
      >
        {children}
      </article>
    </div>
  )
}
