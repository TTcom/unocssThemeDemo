import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetWind,
    presetUno,
  } from 'unocss'
  // import unocssThemes from "unocss-themes"
  import presetTheme from 'unocss-preset-theme'
  export default defineConfig({
    theme: {
      // spacing: {
      //   custom: 'var(--page-pa)',
      //   '2': '12px',
      //   '3': '116px',
      //   '4': '24px',
      //   '5': '32px',
      //   '6': '48px',
      // },  
      // fontSize: {
      //   custom: '30px',
      //   '2': '12px',
      //   '3': '16px',
      //   '4': '24px',
      //   '5': '32px',
      //   '6': '48px',
      // },  
   },
  
    shortcuts: [
      ['weybtn', 'icon-btn px-4 font-semibold rounded-lg shadow-md'],
      ['icon-btn', 'text-[16px] text-red inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-50 '],
    ],
    presets: [
      presetWind(),
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
      presetTheme({
        theme: {
          picker: {
            width: {
              'mywidth': '126px',
              '3a': '16px',
            },
            spacing: {
              custom: 'var(--page-pa)',
              'qqqa': '12px',
              '3': '36px'
            },
              colors: {
              'primary': 'red',
              'custom': 'yellow',
              'myset': '#d43131',
             },
          },
          atank: {
              width: {
                'mywidth': '126px',
                '3a': '16px',
              },
              spacing: {
                custom: 'var(--page-pa)',
                'qqqa': '42px',
                '3': '16px'
              },
              colors: {
              'myset': '#31d498',
              'primary': 'red',
              'custom': 'green',
            }
          },
        },
      }),
    ],
    // variants: [
    //   unocssThemes({
    //     themes: {
    //       wey: ".wey",
    //       purple: ".purple",
    //       red: ".red",
    //       indigo: ".indigo",
    //       orange: ".orange",
    //       green: ".green",
    //       blue: ".blue",
    //       tank: ".tank",
    //     },
    //   }),
    //   // add your custom variants here
    // ],
    rules: [
        [/^abg-(\S+)$/, ([, d]) => ({ 'background-color': `#${d}` })],
        [/^ac-(\S+)$/, ([, d]) => ({ 'color': `#${d}` })],
        [/^hb-(\S+)$/, ([, d]) => ({ 'height': `${d}%` })],
        [/^rs-(\S+)$/, ([, d]) => ({ 'border-radius': `${d}%` })],
        [/^border-c-(\S+)$/, ([, d]) => ({ 'border-color': `#${d}` })]
      ]
  })