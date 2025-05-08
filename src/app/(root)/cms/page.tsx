import { CMSClient } from './client'
import ui from '~/styles/ui.module.css'

export default function CMSPage() {
  return (
    <div className={ui.page}>
      <CMSClient />
    </div>
  )
}
