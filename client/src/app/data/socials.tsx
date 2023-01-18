import { ISocial } from "@interfaces";
import { VK_LINK, TELEGRAM_LINK, vkKeyboardSrc } from "@utils";
import { Telegram } from "@mui/icons-material";
import { colors } from "@mui/material";

export const socials: ISocial[] = [
  {
    link: VK_LINK,
    icon: <img src={`${vkKeyboardSrc}`} />,
  },
  {
    link: TELEGRAM_LINK,
    icon: (
      <Telegram
        sx={{
          fontSize: "40px",
          bgcolor: colors.blue[700],
          padding: 1,
          borderRadius: "50%",
          color: colors.common.white,
        }}
      />
    ),
  },
];
