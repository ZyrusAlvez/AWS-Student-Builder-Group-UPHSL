import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membership Application',
  description: 'Join AWS Student Builder Group UPHSL - Apply for official membership. Get your membership ID, access to exclusive AWS workshops, events, and community benefits. Led by Zyrus Alvez and team.',
  keywords: ['AWS Student Builder Group membership', 'UPHSL AWS join', 'AWS student membership', 'cloud computing club'],
  openGraph: {
    title: 'Join AWS Student Builder Group - UPHSL',
    description: 'Apply for official membership at AWS Student Builder Group UPHSL',
  },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
