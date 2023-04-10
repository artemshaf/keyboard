import { Box, List, ListItem, TextField, Typography } from "@mui/material";
import {
  selectAccountState,
  storeActions,
  useActions,
  useAppSelector,
} from "@store";
import { useEffect, useState } from "react";
import { IAccountInfoBigInterface } from "./AccountInfoBig.interface";

export const AccountInfoBig = ({ ...props }: IAccountInfoBigInterface) => {
  const actions = useActions(storeActions);
  const [statistic, setStatistic] = useState();
  const { account } = useAppSelector(selectAccountState);

  useEffect(() => {
    getStatistic();
  }, []);

  const getStatistic = async () => {
    if (!account) return;

    const result = await actions.getStatisticByUserId(account?.id).unwrap();

    console.log(result);
  };

  return (
    <Box {...props}>
      <Box>
        <img />
        <Typography>Имя</Typography>
      </Box>
      <Box>
        <List>
          <ListItem>
            <Typography></Typography>
            <TextField
              disabled
              defaultValue={1}
              variant="filled"
              label="Всего результатов"
            />
          </ListItem>
          <ListItem>
            <Typography></Typography>
            <TextField
              disabled
              variant="filled"
              label="Количество тестов по словам"
            />
            <List>
              <ListItem>
                <TextField disabled variant="filled" label="Лучший результат" />
                <TextField disabled variant="filled" label="Худший результат" />
                <TextField
                  disabled
                  variant="filled"
                  label="Средний результат"
                />
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Typography></Typography>
            <TextField
              disabled
              variant="filled"
              label="Количество тестов по буквам"
            />
            <List>
              <ListItem>
                <TextField disabled variant="filled" label="Лучший результат" />
                <TextField disabled variant="filled" label="Худший результат" />
                <TextField
                  disabled
                  variant="filled"
                  label="Средний результат"
                />
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
