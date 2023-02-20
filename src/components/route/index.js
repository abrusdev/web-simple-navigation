import useNavigation from "../../hooks/use-navigation";

function Route({ path, children }) {
  const { path: currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;