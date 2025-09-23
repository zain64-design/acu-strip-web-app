import { createTheme } from "flowbite-react";

const FlowBiteTheme = createTheme({
    sidebar: {
        "root": {
            "base": "h-full fixed top-0 left-0 bottom-0 min-w-[312px] max-w-[312px]",
            "collapsed": {
                "on": "w-16",
                "off": "w-64"
            },
            "inner": "h-full overflow-y-auto overflow-x-hidden rounded bg-(--bg-white) px-[18px] py-[28px] dark:bg-gray-800"
        },
        "collapse": {
            "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
            "icon": {
                "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                "open": {
                    "off": "",
                    "on": "text-gray-900"
                }
            },
            "label": {
                "base": "ml-3 flex-1 whitespace-nowrap text-left",
                "title": "sr-only",
                "icon": {
                    "base": "h-6 w-6 transition delay-0 ease-in-out",
                    "open": {
                        "on": "rotate-180",
                        "off": ""
                    }
                }
            },
            "list": "space-y-2 py-2"
        },
        "cta": {
            "base": "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
            "color": {
                "blue": "bg-cyan-50 dark:bg-cyan-900",
                "dark": "bg-dark-50 dark:bg-dark-900",
                "failure": "bg-red-50 dark:bg-red-900",
                "gray": "bg-gray-50 dark:bg-gray-900",
                "green": "bg-green-50 dark:bg-green-900",
                "light": "bg-light-50 dark:bg-light-900",
                "red": "bg-red-50 dark:bg-red-900",
                "purple": "bg-purple-50 dark:bg-purple-900",
                "success": "bg-green-50 dark:bg-green-900",
                "yellow": "bg-yellow-50 dark:bg-yellow-900",
                "warning": "bg-yellow-50 dark:bg-yellow-900"
            }
        },
        "item": {
            "base": "flex items-center justify-center rounded-xl px-[23px] py-4 font-outfit capitalize text-base font-normal text-(--text-gray-900) hover:bg-(--bg-primary) hover:text-(--text-white) dark:text-white dark:hover:bg-gray-700 transition-all duration-300 ease-in-out",
            "active": "bg-gray-100 dark:bg-gray-700",
            "collapsed": {
                "insideCollapse": "group w-full pl-8 transition duration-75",
                "noIcon": "font-bold"
            },
            "content": {
                "base": "flex-1 whitespace-nowrap px-3"
            },
            "icon": {
                "base": "h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white",
                "active": "text-gray-700 dark:text-gray-100"
            },
            "label": "",
            "listItem": ""
        },
        "items": {
            "base": ""
        },
        "itemGroup": {
            "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
        },
        "logo": {
            "base": "mb-5 flex items-center pl-2.5",
            "collapsed": {
                "on": "hidden",
                "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            },
            "img": "mr-3 h-6 sm:h-7"
        }
    },
    table: {
  "root": {
    "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-none dark:bg-black",
    "wrapper": "relative"
  },
  "body": {
    "base": "group/body",
    "cell": {
      "base": "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
    }
  },
  "head": {
    "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
    "cell": {
      "base": "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
    }
  },
  "row": {
    "base": "group/row",
    "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
    "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
  }
}
})

export default FlowBiteTheme