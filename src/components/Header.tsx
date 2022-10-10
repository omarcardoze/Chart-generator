
export default function Header() {

  return (
    <header className='shadow shadow-gray-200 bg-white w-full h-14 flex items-center absolute top-0'>
      <nav className="container mx-auto flex flex-row justify-between">
        <h1 className="text-2xl">Chart Generator</h1>
        <a href="https://github.com/OmarCardoze/Chart-generator" className="flex justify-center items-center gap-1" target="_blank">
          <span className="text-lg">Github</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" focusable="false"><rect width="256" height="256" fill="none"></rect><polyline points="216 100 216 40 156 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="144" y1="112" x2="216" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
          </svg>
        </a>
      </nav>
    </header>
  )
}
