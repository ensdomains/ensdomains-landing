'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type * as React from 'react'
import { ChevronIcon } from '~/components/shared/icons/Chevron'
import { cn } from '~/utils/style'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        'border-ens-gray-three border-b last:border-b-0',
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex tracking-normal">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'relative flex flex-1 items-start justify-between gap-4 rounded-md py-6 text-left font-medium text-ens-blue-midnight text-xl leading-ens-none outline-none transition-all focus-visible:text-ens-blue disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-90',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronIcon className="-rotate-90 pointer-events-none size-3 shrink-0 translate-y-0.5 transition-transform duration-200 focus-visible:text-ens-blue" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden font-normal font-semi-mono text-base text-ens-blue-midnight data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pt-0 pb-6', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
