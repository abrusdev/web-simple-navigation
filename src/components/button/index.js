import classNames from "classnames";
import { GoBell } from "react-icons/go";

function Button(
  {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outlined,
    rounded,
    className,
    ...rest
  }
) {

  const baseClasses = classNames(
    "px-3",
    "py-1",
    "border",
    "flex items-center",
    {
      "border-blue-500 bg-blue-500": primary,
      "border-gray-900 bg-gray-900": secondary,
      "border-green-700 bg-green-700": success,
      "border-yellow-400 bg-yellow-400": warning,
      "border-red-500 bg-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outlined,
      "text-white": !outlined,
      "text-blue-500": outlined && primary,
      "text-gray-900": outlined && secondary,
      "text-green-700": outlined && success,
      "text-yellow-400": outlined && warning,
      "text-red-500": outlined && danger
    },
    className
  );

  return (
    <button className={baseClasses} {...rest}>
      <GoBell className="mr-1" />
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)

    if (count > 1)
      return new Error("You can choose only one of primary, secondary, success, warning, danger")
  }
}

export default Button