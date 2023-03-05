/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, _ as __astro_tag_component__, e as renderHead, f as renderSlot } from '../astro.3e8152d1.mjs';
import { useRef, useState, useEffect } from 'react';
/* empty css                           */import { jsxs, jsx } from 'react/jsx-runtime';

const $$Astro$7 = createAstro();
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, image, description, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a href="#" class="md:basis-[32%] lg:basis-[48%] xl:basis-[32%] overflow-hidden rounded cursor-pointer bg-gray-200 dark:bg-slate-800 hover:scale-[1.02] transition-all duration-200 basis-[100%] min-w-[350px] lg:min-w-[300px] hover:shadow-md">
  <figure class="h-52 overflow-hidden w-full object-cover">
    <img${addAttribute(image, "src")} class="object-cover h-full w-full"${addAttribute(title, "alt")}>
  </figure>

  <div class="py-2 px-4">
    <h3 class="text-center font-bold text-lg dark:text-white">${title}</h3>

    <span class="block text-center text-sm text-gray-500 dark:text-gray-400">
      ${date}
    </span>

    <p class="mt-4 mb-10">
      ${description}
    </p>
  </div>
</a>`;
}, "/Users/jonathan/Desktop/dev/portfolioAstro/src/components/PostCard.astro");

const $$Astro$6 = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Posts;
  const data = [
    {
      title: "Pierde el miedo a la programaci\xF3n",
      image: "https://wallpapercave.com/wp/wp4923991.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      date: "Enero 24, 2023"
    },
    {
      title: "Docker para el desarrollo web",
      image: "https://www.docker.com/wp-content/uploads/2021/09/Moby-run.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      date: "Enero 24, 2023"
    },
    {
      title: "Next.js - SSG, SSR, ISR y SPA",
      image: "https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      date: "Enero 24, 2023"
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<section class="mt-12">
  <div class="md:flex items-center">
    <h2 class="font-bold text-3xl mb-8 dark:text-white">Últimos <span class="text-secondary dark:text-primary">Posts</span></h2>

    <div class="flex-grow"></div>
    
    <div>
      <a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors group">
        Ver todos los proyectos <span class="text-primary group-hover:text-primary-focus">&rarr;</span>
      </a>
    </div>
  </div>

  <div class="flex gap-4 flex-wrap justify-center xl:justify-between">
    ${data.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { ...post })}`)}
  </div>
</section>`;
}, "/Users/jonathan/Desktop/dev/portfolioAstro/src/components/Posts.astro");

const $$Astro$5 = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const randomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-orange-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-rose-500",
      "bg-emerald-500",
      "bg-cyan-500"
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const { title, image, technologies, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex rounded-md overflow-hidden mb-5 bg-gray-200 dark:bg-slate-800 group cursor-pointer max-h-96 flex-col md:flex-row md:max-h-40 md:h-32">
  <figure class="p-2 w-full h-40 md:h-auto md:w-1/3 md:p-0 md:min-w-[12rem] overflow-hidden">
    <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="rounded h-full w-full object-cover md:object-cover md:h-full md:w-full md:rounded-l md:rounded-r-none">
  </figure>

  <div class="p-2 md:p-4 md:w-[90%]">
    <h3 class="text-xl dark:text-white font-bold mb-2 items-center mr-3 flex gap-4 md:flex-row flex-col">
      <span class="group-hover:text-primary-focus dark:group-hover:text-accent-focus transition-colors">${title}</span>
      <li class="list-none flex">
        ${technologies.map((technology) => renderTemplate`<ul${addAttribute(`text-xs ${randomColor()} dark:text-white rounded-md px-2 py-1 mr-2`, "class")}>
              ${technology}
            </ul>`)}
      </li>
    </h3>
    <p class="p-2 md:p-0 md:mb-0 mb-4">
      ${description}
    </p>
  </div>
</div>`;
}, "/Users/jonathan/Desktop/dev/portfolioAstro/src/components/ProjectCard.astro");

const $$Astro$4 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Projects;
  const data = [
    {
      title: "Project 1",
      image: "https://wallpapercave.com/wp/wp4923991.png",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Project 1",
      image: "https://wallpapercave.com/wp/wp4923991.png",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Project 1",
      image: "https://wallpapercave.com/wp/wp4923991.png",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<section class="mt-12">
  <div class="md:flex items-center">
    <h2 class="font-bold text-3xl mb-8 dark:text-white">
      <span class="dark:text-primary-focus text-secondary">Proyectos </span>
      Recientes
    </h2>

    <div class="flex-grow"></div>

    <div>
      <a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors group">
        Ver todos los proyectos <span class="text-primary group-hover:text-primary-focus">&rarr;</span>
      </a>
    </div>
  </div>
  <!-- <ProjectCard /> -->
  ${data.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { ...project })}`)}
</section>`;
}, "/Users/jonathan/Desktop/dev/portfolioAstro/src/components/Projects.astro");

const Navbar = () => {
  const nightModeRef = useRef(null);
  const searhInput = useRef(null);
  const [theme, setTheme] = useState("dark");
  useState("");
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
      return;
    }
    const theme2 = localStorage.getItem("theme") || "dark";
    if (theme2 === "dark") {
      document.documentElement.classList.add("dark");
      nightModeRef.current.checked = false;
    } else {
      document.documentElement.classList.remove("dark");
      nightModeRef.current.checked = true;
    }
    setTheme(theme2);
  }, []);
  const toggleDarkMode = () => {
    console.log("click");
    if (theme === "dark") {
      nightModeRef.current.checked = true;
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      nightModeRef.current.checked = false;
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return /* @__PURE__ */ jsxs("header", {
    className: "navbar bg-base-100 my-5 border rounded-md border-primary shadow-sm shadow-secondary-focus mx-auto",
    children: [/* @__PURE__ */ jsx("div", {
      className: "navbar-start",
      children: /* @__PURE__ */ jsxs("div", {
        className: "dropdown",
        children: [/* @__PURE__ */ jsx("label", {
          tabIndex: 0,
          className: "btn btn-ghost btn-circle",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M4 6h16M4 12h16M4 18h7"
            })
          })
        }), /* @__PURE__ */ jsxs("ul", {
          tabIndex: 0,
          className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52",
          children: [/* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: "/inicio",
              children: "Inicio"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              children: "Portfolio"
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              children: "About"
            })
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "navbar-center",
      children: /* @__PURE__ */ jsx("a", {
        className: "btn btn-ghost normal-case text-2xl  hover:-rotate-2",
        children: "Jota ErrE"
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "navbar-end gap-3",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex input-bordered input items-center rounded-3xl justify-end p-0 pl-5 max-w-[3rem] first:focus-within:max-w-full origin-right transition-all duration-[400ms] ease-out",
        children: [/* @__PURE__ */ jsx("input", {
          ref: searhInput,
          type: "text",
          placeholder: "Buscar",
          className: "input p-0 max-h-[100%] outline-none focus:outline-none transition-all origin-right scale-x-[0%] rounded-[50%] focus:scale-x-[100%] focus:rounded-3xl duration-300 focus:placeholder-gray-500 placeholder-transparent focus:text-primary-focus text-transparent focus:h-auto focus:w-auto"
        }), /* @__PURE__ */ jsx("button", {
          className: "btn btn-ghost btn-circle flex",
          onClick: () => {
            searhInput.current.focus();
          },
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5 min-w-full",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            })
          })
        })]
      }), /* @__PURE__ */ jsx("button", {
        className: "btn btn-ghost btn-circle",
        "data-set-theme": theme === "dark" ? "light" : "dark",
        onClick: toggleDarkMode,
        children: /* @__PURE__ */ jsx("div", {
          className: "indicator",
          children: /* @__PURE__ */ jsx("input", {
            ref: nightModeRef,
            id: "toggle",
            className: "toggle bg-base-100 border-none hover:border",
            type: "checkbox",
            onClick: toggleDarkMode
          })
        })
      })]
    })]
  });
};
__astro_tag_component__(Navbar, "@astrojs/react");

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body class="container lg:max-w-[100rem] mx-auto p-4 md:px-5 lg:px-0">
		<div class="md:w-full lg:w-3/4 mx-auto">
			${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/jonathan/Desktop/dev/portfolioAstro/src/components/Navbar", "client:component-export": "Navbar" })}
			
			${renderSlot($$result, $$slots["default"])}
	
			<footer class="mb-1 mt-10">
				<p class="text-center text-gray-500 text-sm">
					© ${new Date().getFullYear()} - Hecho con ❤️ por
					<a href="/" class="text-blue-500 hover:text-blue-700 hover:underline">JotaErrE</a>
				</p>
			</footer>
		</div>
	
</body></html>`;
}, "/Users/jonathan/Desktop/dev/portfolioAstro/src/layouts/Layout.astro");

const $$Astro$2 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  console.log("SERVIDOR");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JotaErrE - Dev" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<main class="mt-12 mx-auto flex justify-between gap-10 md:gap-1 lg:gap-10 flex-col md:flex-row">
		<div>
			<h1 class="text-3xl font-bold leading-[4rem] toogle-text">
				Hola!, me llamo <span class="text-primary">Jonathan</span> 👋
			</h1>
			<p class="text-lg leading-[2.25rem] mt-4 toogle-text">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
				itaque officiis hic quia cupiditate dignissimos similique, fugiat
				dolores ab dolorem, architecto debitis a fugit? Debitis laborum quod
				dicta nihil temporibus.
			</p>

			<div class="flex gap-4 mt-4 text-white flex-wrap">
				<a href="https://twitter.com/jota_erre_01" target="_blank" rel="noopener noreferrer" class="twitter font-bold rounded-full hover:translate-y-1 transition-transform flex gap-2">
					<div class="rounded-full w-10 bg-white grid place-items-center border-twitter">
						<img src="svgs/twitter.svg" class="w-2/3 text-sm">
					</div>
					<p class="py-2 pr-4">Twitter</p>
				</a>
				<a href="https://github.com/JotaErrE01" target="_blank" rel="noopener noreferrer" class="github font-bold rounded-full hover:translate-y-1 transition-transform flex gap-2">
					<div class="rounded-full w-10 p-0 bg-white grid place-items-center border-github">
						<img src="svgs/github.svg" class="w-4/5 text-sm">
					</div>
					<p class="py-2 pr-4">Github</p>
				</a>
				<a href="https://www.linkedin.com/in/jonathan-ruiz-b810531bb/" target="_blank" rel="noopener noreferrer" class="linkedin font-bold rounded-full hover:translate-y-1 transition-transform flex gap-2">
					<div class="rounded-full w-10 p-0 bg-white grid place-items-center border-linkedin">
						<img src="svgs/linkedin.svg" class="w-1/2 text-sm">
					</div>
					<p class="py-2 pr-4">LinkedIn</p>
				</a>
			</div>
		</div>

		<img class="rounded-full md:w-80 mx-auto md:max-h-80 my-auto" src="https://pbs.twimg.com/profile_images/733479735993503744/_Th2hbRs_400x400.jpg" alt="Me">
	</main>${renderComponent($$result, "Projects", $$Projects, {})}${renderComponent($$result, "Posts", $$Posts, {})}` })}`;
}, "/Users/jonathan/Desktop/dev/portfolioAstro/src/pages/index.astro");

const $$file$2 = "/Users/jonathan/Desktop/dev/portfolioAstro/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Manager</title>
${renderHead($$result)}</head>
<body>
  <h1>Login</h1>

  <form action=""></form>
</body></html>`;
}, "/Users/jonathan/Desktop/dev/portfolioAstro/src/pages/manager/login.astro");

const $$file$1 = "/Users/jonathan/Desktop/dev/portfolioAstro/src/pages/manager/login.astro";
const $$url$1 = "/manager/login";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  return [
    {
      params: {
        slug: "stateOfJS"
      },
      props: {
        slug: "stateOfJS",
        title: "Conoces el State of JS?",
        description: "El State of JS es una encuesta anual que recopila informaci\xF3n sobre las tendencias y el estado de la tecnolog\xEDa JavaScript. \xA1Participa y gana un sticker!"
      }
    },
    {
      params: {
        slug: "docker"
      },
      props: {
        slug: "docker",
        title: "Mejora en Docker!",
        description: "Docker es una plataforma de c\xF3digo abierto que permite crear, probar e implementar aplicaciones r\xE1pidamente. \xA1Aprende a usarlo!"
      }
    }
  ];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { title, description } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div>
    <h1>${title}</h1>
    <p>${description}</p>
  </div>` })}`;
}, "/Users/jonathan/Desktop/dev/portfolioAstro/src/pages/posts/[slug].astro");

const $$file = "/Users/jonathan/Desktop/dev/portfolioAstro/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
