import { PartnerEntry } from '~/utils/types';
import ui from '~/styles/ui.module.css';
import styles from './PartnersList.module.css';
import { clsx } from 'clsx';

type PartnersListProps = {
    partners: PartnerEntry[];
};

export const PartnersList = ({ partners }: PartnersListProps) => {
    return (
        <div className={styles.container}>
            {partners.map((item, i) => (
                <div key={`${item.name}-${i}`} className={clsx(ui.flex, ui['flex-row'], styles.partner)}>
                    {/* alt is not needed because entry already includes name */}
                    <img src={item.icon} height={40} width={40} alt="" />
                    <div className={clsx(ui.flex, ui['flex-col'])}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.category}>{item.category}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
