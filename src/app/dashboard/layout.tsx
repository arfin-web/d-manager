import { Inter } from 'next/font/google'
import Sidebar from '@/components/views/dashboard/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='flex justify-start'>
                    <Sidebar />
                    {children}
                </div>
            </body>
        </html>
    )
}