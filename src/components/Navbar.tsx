import { useRef, useState } from 'react';
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
          onClick={toggleDarkMode}
        >
          <div className="indicator">
            <label htmlFor="toggle" className='h-0 w-0 overflow-hidden' >label</label>
              <input
                data-set-theme={theme === 'dark' ? 'light' : 'dark'}
                id="toggle"
                className="toggle bg-base-100 border-none hover:border"
                type="checkbox"
                checked={theme === 'dark' ? false : true}
                onChange={toggleDarkMode}
              />
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
