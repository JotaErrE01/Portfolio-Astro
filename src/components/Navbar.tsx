import { useRef, useEffect, useState } from 'react';
import '../styles/darkMode.css';
// import { themeChange } from 'theme-change';

export const Navbar = () => {
  const nightModeRef = useRef<HTMLInputElement>(null);
  const searhInput = useRef<HTMLInputElement>(null);
  const [theme, setTheme] = useState('dark');
  const [searchValue, setSearchValue] = useState('');

  // useEffect(() => {
  //   themeChange(true);
  //   // 👆 false parameter is required for react project
  // }, [])

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add('dark');
      setTheme("dark");
      return;
    }

    const theme = localStorage.getItem("theme") || 'dark';
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
      nightModeRef.current!.checked = false;
    }else {
      document.documentElement.classList.remove('dark');
      nightModeRef.current!.checked = true;
    }
    setTheme(theme);
  }, []);

  const toggleDarkMode = () => {
    if (theme === "dark") {
      nightModeRef.current!.checked = true;
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
      setTheme("light");
    }else {
      nightModeRef.current!.checked = false;
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  return (
    <header className="navbar bg-base-100 my-5 border rounded-md border-primary shadow-sm shadow-secondary-focus mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a
              href='/inicio'
            >Inicio</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a
          className="btn btn-ghost normal-case text-2xl  hover:-rotate-2"
        >Jota ErrE</a>
      </div>
      <div className="navbar-end gap-3">
        <div className="flex input-bordered input items-center rounded-3xl justify-end p-0 pl-5 max-w-[3rem] first:focus-within:max-w-full origin-right transition-all duration-[400ms] ease-out">
          <input
            ref={searhInput}
            type="text"
            placeholder="Buscar"
            className="input p-0 max-h-[100%] outline-none focus:outline-none transition-all origin-right scale-x-[0%] rounded-[50%] focus:scale-x-[100%] focus:rounded-3xl duration-300 focus:placeholder-gray-500 placeholder-transparent focus:text-primary-focus text-transparent focus:h-auto focus:w-auto"
          />
          <button className="btn btn-ghost btn-circle flex"
            onClick={() => {
              searhInput.current!.focus()
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
        <button
          className="btn btn-ghost btn-circle"
          data-set-theme={theme === 'dark' ? 'light' : 'dark'}
          // data-act-class="ACTIVECLASS"
          onClick={toggleDarkMode}
        >
          <div className="indicator">
            <input
              ref={nightModeRef}
              id="toggle"
              className="toggle bg-base-100 border-none hover:border"
              type="checkbox"
              // checked={theme !== 'dark'}
              onClick={toggleDarkMode}
            />
          </div>
        </button>
      </div>
    </header>
  )
}



{/* <div className="form-control relative">
          <input
            ref={searhInput}
            type="text"
            placeholder="Buscar"
            className="input input-bordered outline-none focus:outline-none transition-all origin-right scale-x-[22%] focus:origin-right rounded-[50%] focus:scale-x-[100%] focus:rounded-3xl duration-300 focus:placeholder-gray-500 placeholder-transparent focus:text-primary-focus text-transparent"
          />
          <button className="btn btn-ghost btn-circle flex absolute right-0"
            onClick={() => {
              searhInput.current!.focus()
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div> */}



        // <div className="flex input-bordered input items-center rounded-3xl justify-end p-0 pl-5 max-w-[3rem] first:focus-within:max-w-full origin-right transition-all duration-400">
        //   <input
        //     ref={searhInput}
        //     type="text"
        //     placeholder="Buscar"
        //     className="input border-none p-0 max-h-[100%] outline-none focus:outline-none transition-all origin-right scale-x-[0%] rounded-[50%] focus:scale-x-[100%] focus:rounded-3xl duration-300 focus:placeholder-gray-500 placeholder-transparent focus:text-primary-focus text-transparent focus:h-auto focus:w-auto"
        //   />
        //   <button className="btn btn-ghost btn-circle flex"
        //     onClick={() => {
        //       searhInput.current!.focus()
        //     }}
        //   >
        //     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 min-w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        //   </button>