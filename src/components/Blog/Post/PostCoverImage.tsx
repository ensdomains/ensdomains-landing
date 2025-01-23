import { FC } from 'react'
import { BlogPostMetadataPlus } from '~/utils/blog/posts'
import { getPostAssets } from '~/utils/blog/utils'
import Image from 'next/image'
import { YoutubeEmbed } from '~/components/YoutubeEmbed/YoutubeEmbed'
import styles from './PostCoverImage.module.css'

export const PostCoverImage: FC<{ post: BlogPostMetadataPlus }> = async ({
  post,
}) => {
  const isYoutube = post.youtube !== undefined

  const cover = await getPostAssets(post.file)?.['cover']

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isYoutube && <YoutubeEmbed src={post.youtube} />}
        {!isYoutube
        && (cover || post.cover
          ? (
              <Image
                alt={post.title}
                className={styles.image}
                priority
                src={cover || post.cover}
                style={{
                  height: 'auto',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  minWidth: 0,
                }}
              />
            )
          : (
              <div
                className="aspect-video w-full rounded-lg"
                style={{
                  background:
                  'linear-gradient(330.4deg, #44BCF0 4.54%, #7298F8 59.2%, #A099FF 148.85%)',
                }}
              >
              </div>
            ))}
      </div>
    </div>
  )
}
