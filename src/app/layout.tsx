import './globals.css'

export const metadata = {
  title: 'Unay Shah',
  description: 'Welcome to my website',
  image: '/photos/profile_small.jpg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
