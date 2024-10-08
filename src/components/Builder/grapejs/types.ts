export interface Block {
  id: string;
  label: JSX.Element;
  attributes?: BlockAttributes;
  content: JSX.Element;
}

interface BlockAttributes {
  class?: string;
  src?: string;
}
