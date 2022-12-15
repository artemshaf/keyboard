import { IKeyboardLetterPageInterface } from "./KeyboardLetterPage.interface";

export const KeyboardLetterPage = ({
  className,
  ...props
}: IKeyboardLetterPageInterface) => {
  return <div {...props}>KeyboardLetterPage Component</div>;
};
