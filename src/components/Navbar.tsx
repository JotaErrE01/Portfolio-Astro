import { useLayoutEffect, useRef, useState } from 'react';
import 'styles/darkMode.css';

interface Props {
  data: {
    title: string;
    slug: string;
    image: string;
    shortDescription: string;
  }[]
}

export const Navbar = ({ data }: Props) => {
  const searhInput = useRef<HTMLInputElement>(null);
  const [dataFiltered, setDataFiltered] = useState(data);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'dark');
  const [searchValue, setSearchValue] = useState('');
  const [visible, setVisible] = useState(false);
  const moonSun = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    // setTheme(localStorage.getItem("theme") || 'dark');
    if (theme === "light") {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute('data-theme', 'light');
      setTheme("light");
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme("dark");
    }
  }, [window.location.pathname]);

  const toggleDarkMode = () => {
    document.documentElement.removeAttribute('data-theme');
    if (theme === "dark") {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute('data-theme', 'light');
      setTheme("light");
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme("dark");
    }
  };

  return (
    <header className="navbar bg-base-100 my-5 border rounded-md border-primary shadow-sm shadow-secondary-focus mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul id='nav' tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li
              className='list'
            ><a
              href='/'
            >Inicio</a></li>
            <li
              className='list'
            ><a
              href='/posts/'
            >Posts</a></li>
            <li
              className='list'
            ><a
              href='/resources/'
            >Recursos</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a
          href='/'
          className="btn btn-ghost normal-case text-2xl  hover:-rotate-2 hover:scale-105 after:hidden"
        >Jota ErrE</a>
      </div>

      <div className='relative navbar-end gap-3'>
        <div className="md:flex input-bordered input items-center rounded-3xl justify-end p-0 pl-5 max-w-[3rem] first:focus-within:max-w-full origin-right transition-all duration-[400ms] ease-out relative z-[21] hidden">
          <input
            ref={searhInput}
            type="text"
            placeholder="Buscar"
            className="input p-0 max-h-[100%] outline-none focus:outline-none transition-all origin-right scale-x-[0%] rounded-[50%] focus:scale-x-[100%] focus:rounded-3xl duration-300 focus:placeholder-gray-500 placeholder-transparent focus:text-primary-focus text-transparent focus:h-auto focus:w-auto"
            value={searchValue}
            onFocus={() => {
              setVisible(true);
            }}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setDataFiltered(data.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase())));
            }}
          />
          <button className="btn btn-ghost btn-circle flex"
            aria-label="Search"
            onClick={() => {
              searhInput.current!.focus();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 min-w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>

        <button
          className="btn btn-ghost btn-circle"
          data-set-theme={theme === 'dark' ? 'light' : 'dark'}
          aria-label="Toggle Dark Mode"
          // onClick={toggleDarkMode}
        >
          <div className="indicator">
            {/* <label htmlFor="toggle" className='h-0 w-0 overflow-hidden' >label</label> */}
            {/* <input
                // ref={moonSun}
                data-set-theme={theme === 'dark' ? 'light' : 'dark'}
                id="toggle"
                className={`${theme === 'dark' ? 'dark-ico' : 'light-ico'} bg-base-100 border-none hover:border toggle`}
                type="checkbox"
                checked={theme === 'dark' ? false : true}
                onChange={toggleDarkMode}
                style={{
                  boxShadow: theme === 'dark' ? 'inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0' : 'inset 0 0 0 var(--size), calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size), var(--offset-orthogonal) 0 0 var(--ray-size), 0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size), 0 var(--offset-orthogonal) 0 var(--ray-size), calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size), var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size), calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size), var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size)'
                }}
              /> */}
            <label className="swap swap-rotate"
              // onClick={toggleDarkMode}
            >

              {/* this hidden checkbox controls the state */}
              <input type="checkbox" 
                data-set-theme={theme === 'dark' ? 'light' : 'dark'}
                checked={theme === 'dark' ? true : false}
                onClick={toggleDarkMode}
                onChange={() => {}}
              />

              {/* sun icon */}
              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

              {/* moon icon */}
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>
          </div>
        </button>

        {
          visible && dataFiltered.length > 0 &&
          <div
            className="flex flex-col bg-base-100 rounded-md shadow-sm shadow-secondary-focus max-h-[20rem] overflow-y-auto absolute right-10 top-12 z-20 mt-4 w-[24rem]"
          >
            {
              dataFiltered.map((item) => (
                <a
                  key={item.slug}
                  href={item.slug}
                  className="btn btn-ghost normal-case text-base after:hidden justify-start min-h-[3rem] gap-2 flex-nowrap rounded-none py-7"
                  onClick={() => {
                    setVisible(false);
                    setSearchValue('');
                    setDataFiltered(data);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-10 mr-2 rounded-md object-cover"
                  />
                  <p
                    className="text-base inline-block overflow-hidden overflow-ellipsis whitespace-nowrap"
                  >{item.title}</p>
                </a>
              ))
            }

            <div
              className='fixed inset-0 z-[-1]'
              onClick={() => {
                setVisible(false);
                setSearchValue('');
                setDataFiltered(data);
              }}
            />
          </div>
        }
      </div>
    </header>
  )
}
