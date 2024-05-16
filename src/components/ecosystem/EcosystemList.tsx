import { clsx } from 'clsx';
import ui from '~/styles/ui.module.css';
import styles from './EcosystemList.module.css';

export const EcosystemList = () => {
    return (
        <div className={clsx(ui.flex, ui['flex-row'], styles.container)}>
            <img src="/assets/logos/coinbase.svg" height={30} width={30} alt="Coinbase" />
            <img src="/assets/logos/godaddy.svg" height={33} width={29} alt="GoDaddy" />
            <img src="/assets/logos/brave.svg" height={29} width={24} alt="Brave" />
            <img src="/assets/logos/etherscan.svg" height={30} width={30} alt="Etherscan" />
        </div>
    );
};
