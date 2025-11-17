'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import appsBrownGraphic from '~/assets/pages/ensv2/apps-brown-graphic.webp'
import explorerPathwayGraphic from '~/assets/pages/ensv2/explorer-pathway-graphic.svg'
import green1 from '~/assets/pathways/patterns/green-1.svg'
import herringbone1 from '~/assets/patterns/weave/overlay/herringbone-1.svg'
import { ArrowRightIcon } from '~/components/shared/icons'

const COLORS = [
  '--ens-blue',
  '--ens-light-blue',
  '--ens-medium-blue',
  '--ens-magenta',
  '--ens-light-magenta',
  '--ens-green',
  '--ens-light-green',
  '--ens-dark-brown',
  '--ens-light-yellow',
  '--ens-yellow',
]

export const AppsSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const elements = Array.from(
      ref.current.querySelectorAll<HTMLDivElement>('div'),
    )

    let lastUpdate = 0
    const targetInterval = 300
    let frameId: number

    const randomizeElementColor = (element: HTMLDivElement) => {
      element.style.backgroundColor = `var(${COLORS[Math.floor(Math.random() * COLORS.length)]})`
    }

    const animate = (timestamp: number) => {
      if (timestamp - lastUpdate >= targetInterval) {
        elements.forEach((element) => {
          const random1 = Math.random()
          if (random1 > 0.3) return
          if (random1 < 0.12) {
            element.style.backgroundColor = `var(--color-ens-lapis-surface)`
            return
          }
          randomizeElementColor(element)
        })

        lastUpdate = timestamp
      }

      frameId = requestAnimationFrame(animate)
    }

    for (const element of elements) {
      element.onclick = () => {
        randomizeElementColor(element)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: Used for anchors
    <div
      id="apps"
      className="bg-ens-white py-8 lg:py-[100px]"
      style={{
        backgroundImage: `url(${herringbone1.src})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundSize: '16px',
        backgroundBlendMode: 'color-dodge',
      }}
    >
      <div
        className={clsx(
          'mx-auto w-full-[2rem] max-w-[1374px] md:w-full-[4rem]',
          'flex grid-cols-3 grid-rows-2 flex-col gap-3 lg:grid',
        )}
      >
        {/* ENS App section */}
        <div className="row-span-2 flex flex-col gap-1 overflow-hidden rounded-2xl md:max-lg:flex-row">
          <div className="min-h-38 flex-1 space-y-3 bg-ens-lapis-core p-3 text-ens-lapis-dust lg:space-y-8 lg:p-8">
            <h3 className="font-medium text-2xl md:text-4xl lg:text-6xl">
              ENS App
            </h3>
            <p className="font-[350] font-serif text-base text-inherit leading-ens-tight md:text-lg lg:text-xl">
              A streamlined consumer product for newcomers and everyday users
              focused on seamless name registration and identity management.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center bg-[#011A25] p-9 lg:p-16">
            <div
              ref={ref}
              className="grid w-full max-w-96 grid-cols-7 justify-items-stretch gap-2.5 lg:max-w-72 lg:grid-cols-4"
            >
              {Array.from({ length: 28 }).map((_, index) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: Static list
                  key={index}
                  className="aspect-square rounded-full bg-ens-lapis-surface"
                />
              ))}
            </div>

            <div className="absolute top-2 left-2 size-4 rounded bg-ens-lapis-surface lg:top-3 lg:left-3 lg:size-7" />
            <div className="absolute top-2 right-2 size-4 rounded bg-ens-lapis-surface lg:top-3 lg:right-3 lg:size-7" />
            <div className="absolute bottom-2 left-2 size-4 rounded bg-ens-lapis-surface lg:bottom-3 lg:left-3 lg:size-7" />
            <div className="absolute right-2 bottom-2 size-4 rounded bg-ens-lapis-surface lg:right-3 lg:bottom-3 lg:size-7" />
          </div>
        </div>

        {/* ENS Explorer section */}
        <div
          className={clsx(
            'col-span-2 grid auto-cols-fr auto-rows-fr gap-1 overflow-hidden rounded-2xl',
            "grid-areas-['g2_g1'_'main_main'] lg:grid-areas-['g1_g2_g2'_'g1_main_main']",
          )}
        >
          <div className="area-[g1] relative min-h-40 bg-ens-peridot-core px-10 py-5 lg:py-16">
            <div
              className="ens-explorer-graphic1 size-full rounded-[48px] bg-ens-peridot-dust bg-size-[16px] bg-repeat lg:rounded-[96px] lg:bg-size-[30px]"
              style={{
                backgroundImage: `url(${green1.src})`,
              }}
            ></div>
            <div className="absolute top-2 left-2 size-4 rounded bg-ens-peridot-dust lg:top-3 lg:left-3 lg:size-7" />
            <div className="absolute top-2 right-2 size-4 rounded bg-ens-peridot-dust lg:top-3 lg:right-3 lg:size-7" />
            <div className="absolute bottom-2 left-2 size-4 rounded bg-ens-peridot-dust lg:bottom-3 lg:left-3 lg:size-7" />
            <div className="absolute right-2 bottom-2 size-4 rounded bg-ens-peridot-dust lg:right-3 lg:bottom-3 lg:size-7" />
          </div>
          <div className="area-[g2] relative overflow-hidden bg-ens-peridot-core lg:col-span-2">
            <Image
              src={explorerPathwayGraphic}
              alt="New"
              className="absolute right-0 bottom-5 w-[80%] max-xs:top-0 lg:bottom-10"
            />
          </div>
          <div
            className={clsx(
              'area-[main] space-y-3 rounded-br-2xl bg-ens-peridot-dense p-3 pb-4 text-ens-peridot-dust lg:space-y-8 lg:p-8 lg:pb-6',
            )}
          >
            <h3 className="font-medium text-2xl md:text-4xl lg:text-6xl">
              ENS Explorer
            </h3>
            <p className="font-serif text-base text-inherit leading-ens-tight max-lg:max-w-sm md:text-lg lg:text-xl">
              A comprehensive developer tool for ecosystem builders, featuring
              advanced ownership capabilities, custom resolvers, and detailed
              historical records that offers complete visibility with precise
              controls.
            </p>
          </div>
        </div>

        {/* Learn more section */}
        <div className="col-span-2 flex gap-1 overflow-hidden rounded-2xl max-lg:flex-col">
          {/* Graphics 1 */}
          <div
            style={{
              backgroundImage: `url(${appsBrownGraphic.src})`,
            }}
            className="relative aspect-2/1 bg-center bg-cover bg-ens-bronzite-core p-16 md:aspect-3/1 lg:aspect-[initial] lg:flex-1"
          ></div>

          <div className="flex flex-col gap-6 bg-ens-gray-two p-3 lg:flex-1 lg:p-8">
            <h3 className="font-medium text-2xl text-ens-bronzite-dense lg:text-4xl">
              Learn more about the new ENS App & Explorer
            </h3>

            <a
              className="mt-auto flex items-center gap-12 rounded-lg bg-ens-bronzite-surface p-1 pl-8 transition-all duration-200 hover:brightness-90"
              href="/blog/post/ens-app-explorer-introduction"
            >
              <span className="flex-1 font-mono text-ens-gray-two text-sm tracking-[1px]">
                READ MORE
              </span>
              <div className="flex aspect-square h-16 items-center justify-center rounded bg-ens-bronzite-dense px-3 py-2">
                <ArrowRightIcon className="size-5 text-ens-gray-two" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
