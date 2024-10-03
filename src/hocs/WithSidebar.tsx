import { ComponentType } from 'react';
// import Sidebar from '../components/Sidebar';

export const WithSidebar = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return (props: T) => <WrappedComponent {...props} />;
};

export default WithSidebar;
