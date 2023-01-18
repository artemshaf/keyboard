import { ITemplateNameInterface } from "./TemplateName.interface";

export const TemplateName = ({
  className,
  ...props
}: ITemplateNameInterface) => {
  return (
    <div className={""} {...props}>
      TemplateName Component
    </div>
  );
};
