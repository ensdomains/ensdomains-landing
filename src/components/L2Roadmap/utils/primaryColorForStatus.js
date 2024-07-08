export default function primaryColorForStatus(status) {
    if (status === 'research') return 'orange';

    if (status === 'development') return 'blue';

    if (status === 'testnet') return 'green';

    if (status === 'done') return 'black';

    if (status === 'governance') return 'purple';

    if (status === 'pending') return 'grey';

    throw new Error('primaryColorForStatus: Invalid status');
}
