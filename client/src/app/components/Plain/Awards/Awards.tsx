import { Box, styled } from "@mui/material";
import { Container } from "@components";
import { IAwardsInterface } from "./Awards.interface";

const AwardsBox = styled(Box)``;

const CriteriesBox = styled(Box)``;

const DescripionBox = styled(Box)``;

export const Awards = ({ ...props }: IAwardsInterface) => {
  return (
    <AwardsBox {...props}>
      <Container>
        <Box>
          <Box></Box>
          <DescripionBox>
            <CriteriesBox></CriteriesBox>
            <Box></Box>
          </DescripionBox>
        </Box>
      </Container>
    </AwardsBox>
  );
};
