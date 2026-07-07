import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'AWS Student Builder Group UPHSL Code of Conduct - Standards of behavior, professional conduct, and community guidelines for all members and participants.',
  keywords: ['AWS Student Builder Group code of conduct', 'UPHSL community guidelines', 'professional conduct'],
  openGraph: {
    title: 'Code of Conduct - AWS Student Builder Group UPHSL',
    description: 'Community guidelines and standards of behavior for AWS Student Builder Group UPHSL',
  },
};

export default function ConductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
