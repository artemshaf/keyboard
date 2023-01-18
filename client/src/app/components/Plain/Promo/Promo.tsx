import { Box, colors, styled, Typography, useColorScheme } from "@mui/material";
import { IPromoInterface } from "./Promo.interface";
import { whiteKeyboardSrc, blackKeyboardSrc } from "@utils";

const PromoBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100%",
  height: "85vh",
  minHeight: "600px",
  display: "flex",
}));

const ImgStyled = styled("img")`
  max-width: 50%;
`;

const PromoDescriptionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto 30px;
`;

export const Promo = ({ ...props }: IPromoInterface) => {
  const { mode } = useColorScheme();

  const imgSrc = mode === "dark" ? whiteKeyboardSrc : blackKeyboardSrc;

  return (
    <PromoBox {...props}>
      <ImgStyled src={imgSrc} />
      <PromoDescriptionBox>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Почему ты должен обучаться у нас?
        </Typography>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Лучшие показатели среди всех сайтов, обучающих скоропечатаннию
        </Typography>
        <Typography variant="h5">
          Прозрачные результаты и правила игры
        </Typography>
      </PromoDescriptionBox>
    </PromoBox>
  );
};
