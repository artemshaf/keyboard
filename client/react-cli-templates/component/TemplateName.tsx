import { Box } from "@mui/material";
import { ITemplateNameInterface } from "./TemplateName.interface";

export const TemplateName = ({ ...props }: ITemplateNameInterface) => {
  return <Box {...props}>TemplateName Component</Box>;
};
