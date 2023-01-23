import Logo from "components/Logo"

import "@/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="mx-5 my-5">
        <Logo animate={true} className="w-12 top-5 left-5" />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
