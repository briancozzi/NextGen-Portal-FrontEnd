import { ComponentDefinition } from 'grapesjs';

export interface Block {
  id: string;
  label: JSX.Element;
  attributes?: BlockAttributes;
  content: JSX.Element | ComponentDefinition;
}

interface BlockAttributes {
  class?: string;
  src?: string;
}
