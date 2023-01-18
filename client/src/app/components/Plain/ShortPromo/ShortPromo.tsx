import { Box, List, ListItem, styled, Typography } from "@mui/material";
import { Container } from "@components";
import { IShortPromoInterface } from "./ShortPromo.interface";

const ShortPromoBox = styled(Box)``;

export const ShortPromo = ({ ...props }: IShortPromoInterface) => {
  return (
    <Container>
      <List {...props}>
        <ListItem>
          <Typography variant="h3"></Typography>
          <Typography></Typography>
        </ListItem>
      </List>
    </Container>
  );
};
