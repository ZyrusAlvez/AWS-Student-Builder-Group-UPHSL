import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify Certificate or Membership',
  description: 'Verify AWS Student Builder Group UPHSL membership ID or certificate. Check authenticity of certificates issued by AWS Student Builder Group at University of Perpetual Help System Laguna.',
  keywords: ['verify AWS certificate', 'UPHSL certificate verification', 'AWS membership verification', 'certificate authenticity'],
  openGraph: {
    title: 'Verify Certificate or Membership - AWS Student Builder Group UPHSL',
    description: 'Verify AWS Student Builder Group UPHSL membership ID or certificate',
  },
};

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
