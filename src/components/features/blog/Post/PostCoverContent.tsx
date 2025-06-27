import type { FC } from 'react'
import { YoutubeEmbed } from '~/components/ui/media/YoutubeEmbed/YoutubeEmbed'
import type { BlogPostMetadataPlus } from '~/utils/blog/posts'
import styles from './PostCoverContent.module.css'

export const PostCoverContent: FC<{ post: BlogPostMetadataPlus }> = async ({
  post,
}) => {
  const isYoutube = post.youtube !== undefined

  if (isYoutube) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <YoutubeEmbed src={post.youtube!} />
        </div>
      </div>
    )
  }
}
