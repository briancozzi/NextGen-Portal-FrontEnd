import ReactDOMServer from 'react-dom/server';
import grapesjs, { Components, CssRules, Editor } from 'grapesjs';
import { useEffect, useState } from 'react';
import initialConfig from './initialConfig';
import CanvasPlaceholder from './CanvasPlacholder';
import { useDebounce } from 'use-debounce';
import { Page } from '@api/pages/types';
import { useMutationUpdatePage } from '@mutations';

let grapejsEditor: Editor | null = null;

let isLoading = false;
const useGrapejs = (page?: Page | null, isFetchingPage?: boolean) => {
  const [canvasData, setCanvasData] = useState<{ components: Components | undefined; style: CssRules | undefined }>();
  const [editorInitialized, setEditorInitialized] = useState(false);
  const [debouncedCanvasData] = useDebounce(canvasData, 1000);

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

    return () => {
      grapejsEditor?.off('component:add component:remove', togglePlaceholder);
      grapejsEditor?.destroy();
      grapejsEditor = null;
    };
  }, []);

  useEffect(() => {
    if (!grapejsEditor || !page || !editorInitialized) return;

    try {
      const savedData = JSON.parse(page?.data ?? '');

      if (savedData?.components?.length || savedData?.style?.length) {
        grapejsEditor?.setComponents(savedData.components);
        grapejsEditor?.setStyle(savedData.style);
      } else {
        togglePlaceholder();
      }
    } catch (error) {
      console.error(error);
      togglePlaceholder();
    }
  }, [page, editorInitialized, isFetchingPage]);

  const { mutate: updatePage } = useMutationUpdatePage({
    onSuccess: () => console.log('saved'),
    onError: () => console.log('not saved'),
  });

  useEffect(() => {
    if (debouncedCanvasData && page) {
      const updatedPage = { ...page, data: JSON.stringify(debouncedCanvasData) };

      updatePage(updatedPage);
    }
  }, [debouncedCanvasData, page, updatePage]);
};

export default useGrapejs;

const togglePlaceholder = () => {
  if (!grapejsEditor || isLoading) return;

  const canvasBody = grapejsEditor.Canvas.getBody();

  // Check if the editor has any components
  const placeholder = canvasBody?.querySelector('#gjs-placeholder');

  if (!grapejsEditor.getComponents().length) {
    // Append placeholder to the canvas body if not already added
    if (!placeholder) {
      const placeholderHtml = ReactDOMServer.renderToStaticMarkup(CanvasPlaceholder());
      const placeholderDiv = document.createElement('div');
      placeholderDiv.innerHTML = placeholderHtml;
      canvasBody.append(placeholderDiv.firstChild!);
    }
  } else {
    if (placeholder) placeholder.remove();
  }
};
