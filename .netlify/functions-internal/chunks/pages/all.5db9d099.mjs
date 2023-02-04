/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, m as maybeRenderHead } from '../astro.72106ac4.mjs';
import { useRef, useState, useEffect } from 'react';
/* empty css                           */import { jsxs, jsx } from 'react/jsx-runtime';

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

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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

export { $$Layout as $, _page1 as _, _page2 as a };
