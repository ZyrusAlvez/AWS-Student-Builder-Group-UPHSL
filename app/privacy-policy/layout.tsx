import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AWS Student Builder Group UPHSL Privacy Policy - Data protection, privacy rights, and information security practices in compliance with Data Privacy Act of 2012.',
  keywords: ['AWS Student Builder Group privacy policy', 'UPHSL data privacy', 'data protection', 'privacy rights'],
  openGraph: {
    title: 'Privacy Policy - AWS Student Builder Group UPHSL',
    description: 'Data protection and privacy policy for AWS Student Builder Group UPHSL',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
