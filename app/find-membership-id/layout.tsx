import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Your Membership ID',
  description: 'Retrieve your AWS Student Builder Group UPHSL membership ID using your school email. Access your membership information and benefits.',
  keywords: ['find membership ID', 'AWS Student Builder Group membership', 'UPHSL membership lookup'],
  openGraph: {
    title: 'Find Your Membership ID - AWS Student Builder Group UPHSL',
    description: 'Retrieve your AWS Student Builder Group UPHSL membership ID',
  },
};

export default function FindMembershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
