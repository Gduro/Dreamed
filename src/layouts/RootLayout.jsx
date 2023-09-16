import React from 'react'

const RootLayout = ({}) => {
  return (
    <section>
        <div className="">
            <Header/>
        </div>
        <main>
            {children}
        </main>

    </section>
  )
}

export default RootLayout
