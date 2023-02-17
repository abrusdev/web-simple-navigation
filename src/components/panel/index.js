import classNames from "classnames";
import { useEffect } from "react";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  )

  return (
    <div id='hello' className={finalClassNames} {...rest}>{children}</div>
  )
}

export default Panel;