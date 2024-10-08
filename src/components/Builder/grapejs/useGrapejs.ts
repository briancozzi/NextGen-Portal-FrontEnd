import ReactDOMServer from 'react-dom/server';
import grapesjs, { Components, CssRules, Editor } from 'grapesjs';
import { useEffect, useState } from 'react';
import initialConfig from './initialConfig';
import CanvasPlaceholder from './CanvasPlacholder';
import { useDebounce } from 'use-debounce';
import { Page } from '@api/pages/types';
import { useMutationUpdatePage } from '@mutations';

let grapejsEditor: Editor | null = null;
// let editorInitialized = false;
let isLoading = false;
const useGrapejs = (page?: Page | null, isFetchingPage?: boolean) => {
  const [canvasData, setCanvasData] = useState<{ components: Components | undefined; style: CssRules | undefined }>();
  const [editorInitialized, setEditorInitialized] = useState(false);
  const [debouncedCanvasData] = useDebounce(canvasData, 2000);

  isLoading = isFetchingPage ?? false;

  useEffect(() => {
    if (!grapejsEditor) {
      grapejsEditor = grapesjs.init(initialConfig);

      // Initial placeholder check on load
      grapejsEditor.on('load', () => {
        setEditorInitialized(true);
        togglePlaceholder();
      });

      // Listen for changes in components to toggle the placeholder
      grapejsEditor.on('component:add component:remove', togglePlaceholder);

      grapejsEditor.on('component:add component:update component:remove', () => {
        const components = grapejsEditor?.getComponents();
        const style = grapejsEditor?.getStyle();
        setCanvasData({ components, style });
      });

      grapejsEditor.on('component:styleUpdate', () => {
        const components = grapejsEditor?.getComponents();
        const style = grapejsEditor?.getStyle();
        setCanvasData({ components, style });
      });
    }

    // // Define commands
    // grapejsEditor.Commands.add('show-layers', {
    //   getRowEl(editor) {
    //     return editor.getContainer().closest('.editor-row');
    //   },
    //   getLayersEl(row) {
    //     return row.querySelector('.layers-container');
    //   },

    //   run(editor) {
    //     const lmEl = this.getLayersEl(this.getRowEl(editor));
    //     lmEl.style.display = '';
    //   },
    //   stop(editor) {
    //     const lmEl = this.getLayersEl(this.getRowEl(editor));
    //     lmEl.style.display = 'none';
    //   },
    // });

    // grapejsEditor.Commands.add('show-styles', {
    //   getRowEl(editor) {
    //     return editor.getContainer().closest('.editor-row');
    //   },
    //   getStyleEl(row) {
    //     return row.querySelector('.styles-container');
    //   },

    //   run(editor) {
    //     const smEl = this.getStyleEl(this.getRowEl(editor));
    //     smEl.style.display = '';
    //   },
    //   stop(editor) {
    //     const smEl = this.getStyleEl(this.getRowEl(editor));
    //     smEl.style.display = 'none';
    //   },
    // });

    return () => {
      grapejsEditor?.off('component:add component:remove', togglePlaceholder);
      grapejsEditor?.destroy();
      grapejsEditor = null;
    };
  }, []);

  useEffect(() => {
    if (!grapejsEditor || !page || !editorInitialized) return;
    const savedData = JSON.parse(page?.data ?? '');

    if (savedData) {
      grapejsEditor?.setComponents(savedData.components);
      grapejsEditor?.setStyle(savedData.style);
    }
  }, [page, editorInitialized]);

  const { mutate: updatePage } = useMutationUpdatePage({
    onSuccess: () => console.log('saved'),
    onError: () => console.log('not saved'),
  });

  useEffect(() => {
    if (debouncedCanvasData && page) {
      const updatedPage = { ...page, data: JSON.stringify(debouncedCanvasData) };

      updatePage(updatedPage);
      //   console.log({ updatePage });
    }
  }, [debouncedCanvasData, page, updatePage]);
};

export default useGrapejs;

const togglePlaceholder = () => {
  if (!grapejsEditor || isLoading) return;

  const canvasBody = grapejsEditor.Canvas.getBody();

  // Check if the editor has any components
  if (!grapejsEditor.getComponents().length) {
    // Append placeholder to the canvas body if not already added
    if (!canvasBody?.querySelector('#gjs-placeholder')) {
      console.log('no components');

      const placeholderHtml = ReactDOMServer.renderToStaticMarkup(CanvasPlaceholder());
      const placeholderDiv = document.createElement('div');
      placeholderDiv.innerHTML = placeholderHtml;
      canvasBody.append(placeholderDiv.firstChild!);
    }
  } else {
    // Remove the placeholder if the editor has components
    const placeholder = canvasBody.querySelector('#gjs-placeholder');
    if (placeholder) placeholder.remove();
  }
};
