import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <style>{`
                        * {
                            box-sizing: border-box;   
                        }
                        body {
                            margin: 0;
                            background-color: #EEE;
                            font-family: Arial;
                        }
                    `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;