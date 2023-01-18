import { Box, colors, List, ListItem, styled } from "@mui/material";

const KeyboardWrapperBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const KeyboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `2px solid ${theme.palette.text.secondary}`,
  height: `${56 * 2 + 20}px`,
  borderRadius: "40px",
  padding: "15px 20px",
  overflow: "hidden",
  position: "relative",
}));

const KeyboardWordList = styled(List)`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  user-select: none;
  padding: 2px 4px;
  & > li,
  & > ul {
    width: auto;
    font-size: 24px;
    padding: 2px 4px;
  }
  & li {
    min-width: 10px;
  }
`;

const KeyboardWordListOnChar = styled(List)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  user-select: none;
  padding: 2px 4px;
  & > li {
    width: auto;
    font-size: 24px;
    padding: 0;
  }
`;
//! items

const KeyboardWordListItemWrong = styled(ListItem)(({ theme }) => ({
  color: colors.common.white,
  backgroundColor: colors.red[600],
}));

const KeyboardWordListItemCorrect = styled(ListItem)(({ theme }) => ({
  color: colors.common.white,
  backgroundColor: colors.green.A700,
}));

const KeyboardWordListItemCurrent = styled(ListItem)(({ theme }) => ({
  color: colors.common.white,
  backgroundColor: colors.grey[400],
}));

const KeyboardWordListItem = styled(ListItem)(({ theme }) => ({
  color: colors.common.black,
  backgroundColor: "none",
}));

//! chars

const KeyboardWordListItemCharWrong = styled(ListItem)(({ theme }) => ({
  color: colors.common.white,
  backgroundColor: colors.red[600],
}));

const KeyboardWordListItemCharCorrect = styled(ListItem)(({ theme }) => ({
  color: colors.common.white,
  backgroundColor: colors.green.A700,
}));

const KeyboardWordListItemCharNext = styled(ListItem)(({ theme }) => ({
  color: colors.common.white,
  backgroundColor: colors.grey[400],
}));

const KeyboardWordListItemChar = styled(ListItem)(({ theme }) => ({
  color: colors.common.white,
  backgroundColor: colors.blue[400],
}));

export const KeyboarsItems = {
  WrapperBox: KeyboardWrapperBox,
  Box: KeyboardBox,
  WordList: KeyboardWordList,
  WordListOnChar: KeyboardWordListOnChar,
  WordListItemWrong: KeyboardWordListItemWrong,
  WordListItemCorrect: KeyboardWordListItemCorrect,
  WordListItemCurrent: KeyboardWordListItemCurrent,
  WordListItem: KeyboardWordListItem,
  WordListItemCharWrong: KeyboardWordListItemCharWrong,
  ListItemCharCorrect: KeyboardWordListItemCharCorrect,
  ListItemCharNext: KeyboardWordListItemCharNext,
  ListItemChar: KeyboardWordListItemChar,
};
