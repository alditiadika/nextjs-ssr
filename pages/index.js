import React, { Component } from 'react'
import Head from 'next/head'

import App from './app'

class Index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Next</title>
                    <meta
                        name='viewport'
                        content='initial-scale=1.0, width=device-width'
                    />
                    <link
                        rel='stylesheet'
                        href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
                        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
                        crossOrigin='anonymous'
                    />
                </Head>
                <App />
            </div>
        )
    }
}

export default Index
