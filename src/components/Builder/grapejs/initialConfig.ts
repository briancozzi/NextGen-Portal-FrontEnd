import button from './blocks/button';
import divider from './blocks/divider';
import heading from './blocks/heading';
import image from './blocks/image';
import text from './blocks/text';

const initialConfig = {
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: '300px',
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel
  blockManager: {
    appendTo: '#blocks',
    blocks: [heading, text, button, divider, image],
  },
  panels: {
    defaults: [
      // ...
      {
        id: 'panel-switcher',
        el: '.panel__switcher',
        buttons: [
          {
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
            togglable: false,
          },
          {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false,
          },
        ],
      },
    ],
  },
  // The Selector Manager allows to assign classes and
  // different states (eg. :hover) on components.
  // Generally, it's used in conjunction with Style Manager
  // but it's not mandatory
  layerManager: {
    appendTo: '.layers-container', // Specify the container for the Layer Manager
  },
  selectorManager: {
    appendTo: '.selector-container',
  },
  styleManager: {
    appendTo: '.styles-container',
    sectors: [
      {
        name: 'Dimension',
        open: true,
        // Use built-in properties
        buildProps: ['width', 'min-width', 'height', 'min-height', 'padding', 'margin', 'border-radius'],
        // Use `properties` to define/override single property
      },
      {
        name: 'Color',
        open: false,
        buildProps: ['background-color', 'color', 'custom-prop'],
        properties: [
          {
            id: 'custom-prop',
            name: 'Custom Label',
            property: 'font-size',
            type: 'select',
            defaults: '32px',
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: '12px', name: 'Tiny' },
              { value: '18px', name: 'Medium' },
              { value: '32px', name: 'Big' },
            ],
          },
        ],
      },
    ],
  },
};

export default initialConfig;
