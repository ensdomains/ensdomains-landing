import Link from 'next/link'
import type { ReactNode } from 'react'

export const tags = {
  migration: {
    label: 'Migration',
    style: 'bg-ens-magenta-light',
  },
  subnames: {
    label: 'Subnames',
    style: 'bg-ens-green-light',
  },
  namechain: {
    label: 'Namechain',
    style: 'bg-ens-blue-light',
  },
  'ens-v2': {
    label: 'ENSv2',
    style: 'bg-ens-orange-light',
  },
} satisfies Record<
  string,
  {
    label: string
    style: string
  }
>

export type Faq = {
  question: string
  answer: string | ReactNode
  tags?: (keyof typeof tags)[]
}

export const faqs: Record<string, Faq> = {
  // General Migration Questions
  ['will-i-still-own-my-ens-name-after-the-upgrade']: {
    question: 'Will I still own my ENS name after the upgrade?',
    answer:
      'Yes — your ENS name remains yours. Whether you migrate it or not, you retain full ownership as long as it is still registered and has time remaining on its registration. Be sure to keep your name renewed to maintain control.',
    tags: ['migration'],
  },
  ['do-i-have-to-migrate-my-ens-name']: {
    question: 'Do I have to migrate my ENS name?',
    answer:
      "Yes. To access the full features of ENSv2 (like renewing your name), you'll eventually need to migrate to the new system.",
    tags: ['migration'],
  },
  ['will-there-be-an-easy-migration-tool']: {
    question: 'Will there be an easy migration tool?',
    answer:
      "Yes. ENS will provide a simple migration tool with clear instructions when it's time to upgrade.",
    tags: ['migration'],
  },
  ['does-it-cost-more-to-migrate-if-i-have-more-records']: {
    question:
      'Does it cost more to migrate if I have more records added to my name?',
    answer:
      "No, migration cost is not affected by how many records you've added.",
    tags: ['migration'],
  },

  // Migration Paths & Behaviors
  ['what-are-my-options-for-migration']: {
    question: 'What are my options for migration?',
    answer: (
      <>
        There are three paths:
        <br />
        <br />
        <strong>Do nothing:</strong> Your ENS name stays on Ethereum L1 (legacy
        ENS). It'll still work, but you won't be able to renew it.
        <br />
        <br />
        <strong>Migrate to ENSv2 on Ethereum:</strong> Your name stays on L1 but
        uses the new ENSv2 contracts. Renewals will happen on Namechain.
        <br />
        <br />
        <strong>Fully Migrate to Namechain:</strong> A simple tool will move
        your name to ENSv2 and Namechain for lower gas costs and new features.
      </>
    ),
    tags: ['migration'],
  },
  ['can-i-keep-my-name-on-l1-and-still-renew']: {
    question: 'Can I keep my name on Ethereum L1 and still renew it?',
    answer:
      "You can keep your name on L1, but renewals will be processed through Namechain. You don't need to move the name itself to Namechain to renew it.",
    tags: ['migration'],
  },
  ['can-i-keep-my-name-on-l1-and-still-use-ensv2']: {
    question: 'Can I keep my name on Ethereum L1 and still use ENSv2?',
    answer:
      'Yes. You can choose not to migrate and still use your name as normal, but certain ENSv2 features will require migration.',
    tags: ['migration'],
  },

  // Subnames & Cross-Chain Compatibility
  ['what-about-my-subnames']: {
    question: 'What about my subnames (like .base, .uni, etc.)?',
    answer:
      "Subnames will continue working. ENSv2 enhances subname management but you don't need to migrate them separately.",
    tags: ['subnames'],
  },
  ['whats-changing-about-subnames-and-permissions']: {
    question:
      "What's changing about how subnames and permissions work in ENSv2?",
    answer:
      'ENSv2 gives each name its own registry with fine-grained access controls. You can control who can create subnames, set permissions, or delegate authority in a more trustless way — perfect for communities and apps that issue subnames.',
    tags: ['subnames'],
  },
  ['do-i-need-to-migrate-cross-chain-subnames']: {
    question:
      'Do I need to migrate subnames like yourname.base.eth, yourname.linea.eth, or yourname.uni.eth?',
    answer:
      "No, you don't need to migrate subnames. With ENSv2 and the Universal Resolver, everything works better cross-chain.",
    tags: ['subnames'],
  },
  ['will-ccip-read-names-still-work']: {
    question:
      "Will my existing CCIP-Read names (e.g., cb.id, uni.eth) still work if I don't migrate?",
    answer:
      'Yes, names that resolve via CCIP-Read will continue to function without migration.',
    tags: ['subnames'],
  },
  ['do-i-need-to-migrate-dns-name']: {
    question:
      'Do I need to migrate a DNS name that was previously imported to ENSv1?',
    answer:
      'No, but we recommend migrating it to get full access to ENSv2 features.',
    tags: ['subnames'],
  },

  // Namechain Basics & Purpose
  ['what-is-namechain']: {
    question: 'What is Namechain?',
    answer:
      "Namechain is a new L2 (Layer 2) blockchain purpose-built for ENS. It runs on Linea, a zkEVM rollup that inherits Ethereum's security.",
    tags: ['namechain'],
  },
  ['why-did-ens-build-its-own-chain']: {
    question: 'Why did ENS build its own chain?',
    answer:
      'By creating Namechain, ENS can avoid competing for blockspace on general-purpose L2s and optimize performance specifically for name resolution — fast, affordable, and decentralized.',
    tags: ['namechain'],
  },

  // Namechain Technical Foundation
  ['why-was-linea-chosen']: {
    question: 'Why was Linea chosen?',
    answer: (
      <>
        The selection of Linea as the foundation for Namechain emerged from a
        comprehensive technical and strategic evaluation conducted by the ENS
        Labs team, which you can read about{' '}
        <Link
          href="https://blog.ens.domains/post/ensv2-update"
          className="text-ens-blue underline"
        >
          here
        </Link>
        . Two key architectural decisions immediately stood out about Linea:
        <br />
        <br />• Being a{' '}
        <Link
          href="https://vitalik.eth.limo/general/2022/08/04/zkevm.html#type-2-fully-evm-equivalent"
          className="text-ens-blue underline"
        >
          Type 2 zkEVM
        </Link>
        , Linea achieves bytecode compatibility with Ethereum, ensuring that
        existing smart contract code and tooling can be used without
        modification.
        <br />• Linea's high-performance prover, alongside the configurability
        of its rollup parameters, enables fast state confirmation essential for
        reliable name resolution.
        <br />
        <br />
        Read more:{' '}
        <Link
          href="/blog/post/ens-picks-linea"
          className="text-ens-blue underline"
        >
          https://ens.domains/blog/post/ens-picks-linea
        </Link>
      </>
    ),
    tags: ['namechain'],
  },
  ['is-namechain-decentralized']: {
    question: 'Is Namechain decentralized?',
    answer:
      'Yes. Namechain inherits Ethereum\'s security model and uses zero-knowledge proofs for trust minimization. ENS is also exploring deeper decentralization via "based" and "native" rollups in collaboration with the Ethereum Foundation and others.',
    tags: ['namechain'],
  },

  // Namechain Functionality & Compatibility
  ['will-my-ens-name-still-resolve-on-ethereum']: {
    question: 'Will my ENS name still resolve on Ethereum?',
    answer:
      'Yes, your ENS name will continue to resolve on Ethereum regardless of migration status, ensuring backward compatibility.',
    tags: ['namechain'],
  },

  // ENSv2 Apps & Access
  ['is-there-a-new-ens-app']: {
    question: 'Is there a new ENS app?',
    answer:
      "Yes. A new ENS app will be released for ENSv2. It's designed for managing names on Namechain and Ethereum (if migrated).",
    tags: ['ens-v2'],
  },
  ['can-i-still-use-the-old-ens-app']: {
    question: 'Can I still use the old ENS app?',
    answer:
      "Yes. We'll keep the older app online for users who haven't migrated yet. However, for upgraded functionality, the new ENS app can be used with any migrated name.",
    tags: ['ens-v2'],
  },

  // ENSv2 Bridge & Payments
  ['will-i-need-to-bridge-eth-to-namechain']: {
    question: 'Will I need to bridge ETH to Namechain?',
    answer:
      "No. Thanks to bridging tools like Across, you'll be able to use ENS on Namechain without worrying about manual bridging.",
    tags: ['ens-v2'],
  },
  ['can-i-buy-ens-names-with-stablecoins']: {
    question: 'Can I buy ENS names with stablecoins?',
    answer:
      'Yes. ENSv2 will support buying names with USD-denominated stablecoins (like USDC), not just ETH.',
    tags: ['ens-v2'],
  },
  ['will-ens-names-still-be-priced-in-eth']: {
    question: 'Will ENS names still be priced in ETH?',
    answer:
      'No. With ENSv2, names will be priced and paid in USD stablecoins for more predictable pricing.',
    tags: ['ens-v2'],
  },

  // ENSv2 Upgrades & Architecture
  ['whats-new-in-ensv2-contracts']: {
    question: "What's new in the ENSv2 contracts?",
    answer:
      'Registries, resolvers, and permissions have all been rewritten for clarity, modularity, and better UX for developers.',
    tags: ['ens-v2'],
  },
  ['is-the-resolver-changing']: {
    question: 'Is the Resolver changing?',
    answer:
      'Yes. ENSv2 introduces a Universal Resolver — one contract that supports resolving any name (ENSv1, ENSv2, L2s, and offchain) via CCIP Read.',
    tags: ['ens-v2'],
  },
  ['whats-the-benefit-of-each-name-having-its-own-registry']: {
    question: "What's the benefit of giving each name its own registry?",
    answer:
      "This design allows greater flexibility, permission controls, and fewer trust assumptions. It's especially useful for DAOs, communities, and dapps issuing subnames.",
    tags: ['ens-v2'],
  },
}
