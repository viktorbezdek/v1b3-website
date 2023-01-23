import CodersRank from "./icons/CodersRank"
import Github from "./icons/Github"
import LinkedIn from "./icons/LinkedIn"
import Logo from "./Logo"

function Footer() {
  return (
    <footer className="body-font bg-gray-100 text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
          <Logo className="w-8" dark={true} />
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          Copyright &copy; {new Date().getFullYear()} Viktor Bezděk
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            className="group rounded-full bg-white p-2 text-gray-500 hover:bg-black"
            href="https://github.com/viktorbezdek"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="fill-gray-400 transition-colors duration-200 ease-out group-hover:fill-white" />
          </a>
          <a
            className="group ml-3 rounded-full bg-white p-2 text-gray-500 hover:bg-blue-700"
            href="https://linkedin.com/in/viktorbezdek"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedIn className="fill-gray-400 transition-colors duration-200 ease-out group-hover:fill-white" />
          </a>
          <a
            className="group ml-3 rounded-full bg-white p-2 text-gray-500 hover:bg-cyan-600"
            href="https://profile.codersrank.io/user/viktorbezdek/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <CodersRank className="fill-transparent stroke-gray-400 transition-colors duration-200 ease-out group-hover:stroke-white" />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
