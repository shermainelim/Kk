import * as React from "react";
import classNames from "classnames/bind";
import styles from "./CustomButton.scss";

interface Props {
  testId?: string;
  content: string;
  clicked: () => void;
  // resident?: boolean;
  // staff?:boolean;
  className: string;
}

const CustomButton: React.FC<Props> = ({
  testId,
  content,
  clicked,
  // resident,
  // staff,
  className,
}) => {
  const cx = classNames.bind(styles);

  return (
    <button
      data-testid={`custom-btn-${testId}`}
      className={cx("basic", className)}
      onClick={clicked}
    >
      {content}
    </button>
  );
};

export default CustomButton;
