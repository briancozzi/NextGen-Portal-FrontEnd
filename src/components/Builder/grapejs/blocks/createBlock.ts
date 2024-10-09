import { Block } from '../types';
import ReactDOMServer from 'react-dom/server';

const createBlock = (block: Block) => {
  return {
    ...block,
    label: ReactDOMServer.renderToStaticMarkup(block.label),
    content:
      'tagName' in block.content ? block.content : ReactDOMServer.renderToStaticMarkup(block.content as JSX.Element),
  };
};

export default createBlock;

export const toHtmlString = (jsx: JSX.Element) => ReactDOMServer.renderToStaticMarkup(jsx);
