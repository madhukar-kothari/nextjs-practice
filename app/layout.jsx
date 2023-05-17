import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';
import { Children } from 'react';

export const metadata = {
    title: "Bible Stack",
    description: "Discover Bible through AI"
}


const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout