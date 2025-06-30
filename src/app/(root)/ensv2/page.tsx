import { clsx } from 'clsx'
import type { Metadata, ResolvingMetadata } from 'next'
import { type ComponentProps, type CSSProperties, Fragment } from 'react'
import announcementCover from '~/assets/pages/ensv2/namechain-keynote-cover.webp'
import ogImage from '~/assets/pages/ensv2/og-image.png'
import blue1 from '~/assets/pathways/patterns/blue-1.svg'
import green1 from '~/assets/pathways/patterns/green-1.svg'
import magenta1 from '~/assets/pathways/patterns/magenta-1.svg'
import { BlogSection } from '~/components/pages/ensv2/BlogSection/BlogSection'
import { FAQ } from '~/components/pages/ensv2/FAQ/FAQ'
import { HeaderGraphics } from '~/components/pages/ensv2/HeaderGraphics/HeaderGraphics'
import LiteYouTubeEmbed from '~/components/ui/media/LiteYoutubeEmbed/LiteYoutubeEmbed'
import { Button } from '~/components/ui/primitives/Button/Button'
import type { Language } from '~/i18n/settings'
import { useTranslation } from '~/i18n/useTranslation'
import { BASE_URL, createMetadata } from '~/utils/metadata'
import type { PageProps } from '~/utils/types'

export const generateMetadata = async (
  props: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return createMetadata(
    {
      title: 'V2',
      description: 'The naming layer, extended',
      path: '/ensv2',
    },
    await parent,
    {
      openGraph: {
        type: 'website',
        images: [
          {
            url: new URL(ogImage.src, BASE_URL).toString(),
            width: ogImage.width,
            height: ogImage.height,
          },
        ],
      },
    },
  )
}

const HeaderLogo = (props: ComponentProps<'div'>) => (
  <div {...props}>
    <svg
      width="118"
      height="66"
      viewBox="0 0 118 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ENS V2</title>
      <rect
        x="1.16406"
        y="0.5"
        width="115.548"
        height="65"
        rx="3.99112"
        stroke="black"
      />
      <path
        d="M28.4771 49.6799C26.7244 49.6799 25.2568 48.9956 25.0265 47.3647C25.0135 47.2728 25.0805 47.1903 25.1725 47.1786L26.843 46.965C26.9441 46.9521 27.0335 47.0295 27.047 47.1305C27.1509 47.911 27.732 48.2648 28.5227 48.2648C29.39 48.2648 29.8313 47.9452 29.8313 47.3822C29.8313 46.8801 29.2531 46.6975 28.051 46.4084C26.5902 46.0584 25.2512 45.6019 25.2512 44.0346C25.2512 42.3608 26.7272 41.7065 28.3705 41.7065C29.991 41.7065 31.3833 42.2343 31.6499 43.8421C31.6649 43.9326 31.6017 44.0163 31.5111 44.0317L29.901 44.3063C29.799 44.3237 29.7056 44.2478 29.6903 44.1455C29.5828 43.429 29.1016 43.1064 28.401 43.1064C27.7771 43.1064 27.2598 43.3347 27.2598 43.8673C27.2598 44.3846 27.8075 44.5672 28.827 44.7954C30.1813 45.0998 31.8703 45.465 31.8703 47.2757C31.8703 49.1017 30.2574 49.6799 28.4771 49.6799Z"
        fill="#011A25"
      />
      <path
        d="M23.8257 42.4315C24.4343 43.0401 24.5104 43.8618 24.5104 44.8509V49.4409C24.5104 49.5364 24.4329 49.6139 24.3374 49.6139H22.5379C22.4423 49.6139 22.3649 49.5364 22.3649 49.4409V45.0335C22.3649 44.3335 22.304 43.9683 21.9693 43.6488C21.6954 43.3901 21.4367 43.3445 20.9802 43.3445C20.3259 43.3445 19.5651 43.7857 19.5651 45.353V49.4409C19.5651 49.5364 19.4876 49.6139 19.3921 49.6139H17.6078C17.5123 49.6139 17.4348 49.5364 17.4348 49.4409V42.0719C17.4348 41.9763 17.5123 41.8989 17.6078 41.8989H19.3769C19.4724 41.8989 19.5499 41.9763 19.5499 42.0719V42.6584C19.5499 42.7413 19.6799 42.771 19.7241 42.7009C20.1694 41.9941 20.9393 41.7163 21.8019 41.7163C22.7757 41.7163 23.3387 41.9446 23.8257 42.4315Z"
        fill="#011A25"
      />
      <path
        d="M15.7489 42.6856C16.475 43.424 16.847 44.5398 16.8892 45.9509C16.892 46.045 16.8174 46.1228 16.7233 46.1258L11.5013 46.2909C11.405 46.2939 11.3293 46.3755 11.3379 46.4715C11.4419 47.6314 12.0643 48.2065 13.1516 48.1721C14.0605 48.1434 14.5329 47.7434 14.6949 47.0426C14.7149 46.9562 14.7921 46.8931 14.8807 46.8981L16.595 46.9949C16.7017 47.0009 16.7777 47.1018 16.7493 47.2048C16.3124 48.7925 15.084 49.6182 13.1991 49.6778C12.0129 49.7153 11.0579 49.3649 10.3994 48.7615C9.64683 48.0698 9.25009 47.0776 9.2097 45.8C9.17124 44.5833 9.47314 43.5386 10.1958 42.8002C10.8443 42.1251 11.7457 41.7464 12.932 41.7089C14.1335 41.671 15.0885 42.0214 15.7489 42.6856ZM12.9787 43.1842C12.3551 43.2039 11.9198 43.4003 11.6429 43.7897C11.4711 44.0256 11.3655 44.3132 11.3169 44.6439C11.3019 44.7459 11.3855 44.833 11.4885 44.8298L14.4965 44.7347C14.5985 44.7315 14.6761 44.6408 14.6577 44.5404C14.5869 44.1537 14.4535 43.8288 14.2093 43.5868C13.9107 43.2917 13.5262 43.1669 12.9787 43.1842Z"
        fill="#011A25"
      />
      <path
        d="M20.1395 12.2463L12.8124 24.2836C12.7549 24.378 12.6214 24.3885 12.5502 24.304C11.9051 23.5393 9.50196 20.286 12.4756 17.3208C15.1891 14.6151 18.6453 12.6859 19.9262 12.0192C20.0715 11.9435 20.2246 12.1065 20.1395 12.2463Z"
        fill="#011A25"
      />
      <path
        d="M19.7304 38.4556C19.8766 38.5578 20.0568 38.3835 19.9588 38.2347C18.3222 35.7493 12.8819 27.48 12.1304 26.2386C11.3891 25.0142 9.93121 22.9794 9.80959 21.2385C9.79745 21.0647 9.55675 21.0294 9.4962 21.1928C9.39855 21.4564 9.29459 21.771 9.19769 22.1304C7.9745 26.6672 9.75095 31.4813 13.609 34.1776L19.7304 38.4556V38.4556Z"
        fill="#011A25"
      />
      <path
        d="M20.7376 38.2392L28.0647 26.2018C28.1222 26.1074 28.2557 26.0969 28.3269 26.1814C28.972 26.9461 31.3751 30.1994 28.4015 33.1646C25.688 35.8703 22.2318 37.7995 20.9509 38.4662C20.8056 38.5419 20.6525 38.3789 20.7376 38.2392Z"
        fill="#011A25"
      />
      <path
        d="M21.1465 12.0306C21.0002 11.9284 20.82 12.1027 20.9181 12.2515C22.5547 14.7369 27.995 23.0062 28.7465 24.2476C29.4878 25.472 30.9457 27.5068 31.0673 29.2477C31.0794 29.4215 31.3201 29.4568 31.3807 29.2933C31.4783 29.0297 31.5823 28.7151 31.6792 28.3557C32.9024 23.819 31.1259 19.0049 27.2679 16.3086L21.1465 12.0306Z"
        fill="#011A25"
      />
      <path
        d="M49.9653 19.12C49.7733 16.048 47.6613 15.28 45.5493 15.28L46.4453 12.4H62.3813L61.4853 15.28C57.3893 15.28 55.4693 16.816 55.6613 20.272L57.0693 45.744L73.5173 21.04C76.2053 16.944 75.3093 15.28 70.7653 15.28L71.6613 12.4H87.1493L86.2533 15.28C83.3093 15.28 80.9413 16.624 78.7653 19.888L55.5333 54.32H52.2693L49.9653 19.12ZM89.5008 39.792C96.0928 33.84 102.109 28.912 102.109 22.704C102.109 19.12 99.4848 16.688 96.2848 16.688C91.9968 16.688 89.3728 18.8 86.1728 23.152L84.1888 21.808C87.9648 15.856 92.2528 11.76 98.8448 11.76C103.901 11.76 107.677 15.792 107.677 20.976C107.677 28.272 101.149 33.52 92.8288 40.432L83.1008 48.56H93.7248C98.2048 48.56 99.7408 47.6 102.429 43.696H105.437L99.6768 54H75.9328L76.7648 51.184L89.5008 39.792Z"
        fill="#011A25"
      />
    </svg>
    <div className="mt-2 font-semi-mono text-[10px] text-black leading-ens-none">
      NAMECHAIN, AN
      <br />
      ETHEREUM L2
    </div>
  </div>
)

const sectionsA: {
  textClass: string
  bgClass?: string
  bgStyle?: CSSProperties
  title: string
  description: string
}[] = [
  {
    textClass: 'text-ens-magenta',
    bgStyle: {
      backgroundImage: `url(${magenta1.src})`,
      backgroundSize: '16px',
      backgroundRepeat: 'repeat',
    },
    title: 'New apps,\nnew ENS experiences',
    description:
      "We're rebuilding the ENS app to make it easier to register names, update profiles, and explore the ecosystem. A new developer portal is coming too.",
  },
  {
    textClass: 'text-ens-blue',
    bgStyle: {
      backgroundImage: `url(${blue1.src})`,
      backgroundSize: '22px',
      backgroundRepeat: 'repeat',
    },
    title: 'One name.\nAny chain.',
    description:
      'ENS on Namechain helps your .eth names and subnames work across chains. A new resolver makes managing and using names simpler—no matter where they live.',
  },
  {
    textClass: 'text-ens-green',
    bgStyle: {
      backgroundImage: `url(${green1.src})`,
      backgroundSize: '30px',
      backgroundRepeat: 'repeat',
    },
    title: 'Own more than a name,\nown a registry.',
    description:
      'ENSv2 gives every .eth name its own registry. More control, more features—for users, teams, and companies.',
  },
]

const sectionsB = [
  {
    sectionClass: 'text-ens-blue bg-ens-blue-light',
    title: 'Interoperable',
    description:
      'Namechain makes it easier to use your name on any blockchain.',
  },
  {
    sectionClass: 'text-ens-magenta bg-ens-magenta-light',
    title: 'Cost effective',
    description:
      'Near zero gas costs make it cheaper to update your ENS profile.',
  },
  {
    sectionClass: 'text-ens-orange bg-ens-orange-light',
    title: 'Instant Finality',
    description:
      'Guarantees that a name is yours, and only yours, as soon as you register it.',
  },
] satisfies {
  sectionClass: string
  title: string
  description: string
}[]

export default async function EnsV2(props: {
  params: Promise<{ lang: Language }>
}) {
  return (
    <div>
      <header
        className="mb-16 flex grid-cols-[1fr_2fr] flex-col bg-size-[20px] pt-20 md:grid lg:min-h-[1015px] lg:grid-cols-2 lg:gap-32 lg:pt-28"
        style={{
          backgroundImage: 'url(/assets/pathways/bg-white.svg)',
        }}
      >
        <div className="max-lg:-my-8 relative max-md:mr-6 max-lg:h-80">
          <HeaderGraphics className="absolute top-0 right-0 h-full object-cover object-right" />
        </div>
        <div className="flex w-full-[2rem] flex-col pb-4 max-md:items-center max-lg:mx-auto sm:max-w-[412px]">
          <HeaderLogo className="max-md:mx-auto" />

          <div className="mt-12 flex w-full flex-col gap-4">
            <h1 className="text-[40px] text-ens-blue-dark leading-[80%] md:font-bold md:text-8xl">
              The naming layer, extended
            </h1>
            <p className="font-sans text-ens-gray text-lg leading-ens-none">
              ENSv2 will make it easier to register names, further connect DNS
              with blockchain-based identities, and bring more interoperability
              to onchain experiences. Global networks deserve global names.
            </p>
          </div>

          <div className="mt-4 flex w-full flex-col gap-3">
            <Button href="#faq">FAQ</Button>
            <Button variant="blueDashed" disabled className="uppercase">
              Explore Docs
              <br />
              [Coming soon]
            </Button>
          </div>
        </div>
      </header>
      <div className="mx-auto mb-32 w-full-[2rem] max-w-[1374px] space-y-32 md:w-full-[4rem]">
        {/* Announcement video */}
        <div>
          {/** biome-ignore lint/nursery/useUniqueElementIds: ID is the video id */}
          <LiteYouTubeEmbed
            id="Tp0r5t8BGt8"
            title="ENS V2"
            params="controls=0"
            buttonText="Watch the announcement"
            thumbnail={announcementCover.src}
          />
        </div>

        {/* Section A */}
        <div className="space-y-6 lg:space-y-12">
          {sectionsA.map(
            ({ textClass, bgClass, bgStyle, title, description }) => (
              <Fragment key={title}>
                <div
                  className={clsx(
                    'flex flex-col gap-6 lg:flex-row lg:gap-12',
                    textClass,
                  )}
                >
                  <div
                    className={clsx('h-36 rounded-sm lg:w-36', bgClass)}
                    style={bgStyle}
                  />
                  <h2 className="flex-grow whitespace-pre-line text-4xl leading-ens-none">
                    {title}
                  </h2>
                  <span className="max-w-md font-light font-serif text-xl leading-ens-tight">
                    {description}
                  </span>
                </div>
                <div className="h-px bg-ens-gray-three" />
              </Fragment>
            ),
          )}
        </div>

        {/* Section B */}
        <div>
          <h2 className="text-6xl">Namechain</h2>
          <p className="mt-12 max-w-2xl">
            ENS is building a blockchain designed for onchain identity, using an
            instance of Linea's zkEVM. Namechain lets users and developers
            create onchain identities through the power of names, not numbers.
          </p>
          <div className="mt-11 flex w-full gap-6 max-lg:flex-wrap max-xs:flex-col">
            {sectionsB.map(({ sectionClass, title, description }) => (
              <div
                key={title}
                className={clsx(
                  'flex h-40 xs:min-w-xs flex-1 flex-col justify-between rounded p-5 text-xl md:h-72',
                  sectionClass,
                )}
              >
                <div className="flex-grow">{title}</div>
                <div className="text-[#191919]/60 leading-ens-none md:max-w-2xs">
                  {description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog section */}
        <BlogSection />

        {/* FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:gap-12 xl:grid-cols-2">
          {/** biome-ignore lint/nursery/useUniqueElementIds: ID is the anchor */}
          <h1
            className="top-24 h-fit font-serif text-[132px] xs:text-[186px] lg:sticky lg:scroll-mt-24 xl:text-[250px]"
            id="faq"
          >
            FAQ
          </h1>
          <FAQ />
        </div>
      </div>
    </div>
  )
}
