// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Prospect from '../features/prospect-access/Prospect'

// import UploadFile from '../features/upload-file/UploadFile'
// import styles from '../styles/Home.module.css'


// const IndexPage: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Redux Toolkit</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <header className={styles.header}>
//         <UploadFile />
//         <Prospect />
//       </header>
//     </div>
//   )
// }

// export default IndexPage

import type { ReactElement } from 'react'
import Layout from '../components/layout'
import Prospect from '../components/prospect/Prospect'
import UploadFile from '../components/upload-file/UploadFile'

export default function Page() {
  return (<>
    <UploadFile />
    <Prospect />
  </>)
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}
