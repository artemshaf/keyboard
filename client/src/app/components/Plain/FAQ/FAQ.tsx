import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  colors,
  List,
  ListItem,
  styled,
  Typography,
  useColorScheme,
} from "@mui/material";
import { IFaqInterface } from "./FAQ.interface";
import { ArrowDownward, Help, Quiz } from "@mui/icons-material";
import { Container } from "@components";

const HelpIcon = styled(Help)`
  height: 100%;
  color: ${colors.green[400]};
  margin-top: 4px;
  margin-right: 8px;
`;

const QuizIcon = styled(Quiz)`
  font-size: 96px;
  color: ${colors.green[600]};
`;

// const ArrowDownwardStylescolor: mode === 'light' ? colors.common.white : colors.green[400] = makeStyles(() => ({
//   lightModeArrow: {
//     color: colors.common.white,
//     fill: colors.common.white,
//   },
//   darkModeArrow: {
//     color: colors.green[400],
//     fill: colors.green[400],
//   },
// }));

const AccordionListItemAccordion = styled(Accordion)`
  width: 100vw;
`;

const AccordionListItemSummary = styled(AccordionSummary)``;

const FAQList = styled(List)`
  & > li {
    margin: 0;
    padding: 0;
    & div {
      border-radius: 0 !important;
    }
  }
`;

export const Faq = ({ ...props }: IFaqInterface) => {
  const { mode } = useColorScheme();

  return (
    <Box sx={(theme) => ({ bgcolor: theme.palette.background.default, py: 5 })}>
      <Container>
        <Box {...props}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h2">Вопросы о скорости печати</Typography>
            <QuizIcon
              sx={{
                color:
                  mode === "light" ? colors.common.white : colors.green[400],
              }}
            />
          </Box>
          <FAQList>
            <ListItem>
              <AccordionListItemAccordion>
                <AccordionListItemSummary
                  expandIcon={
                    <ArrowDownward
                      sx={{
                        color:
                          mode === "light"
                            ? colors.common.white
                            : colors.green[400],
                      }}
                    />
                  }
                >
                  <HelpIcon
                    sx={{
                      color:
                        mode === "light"
                          ? colors.common.white
                          : colors.green[400],
                    }}
                  />
                  <Typography variant="h6">
                    Как проверить скорость набора текста онлайн?
                  </Typography>
                </AccordionListItemSummary>
                <AccordionDetails>
                  <Typography>
                    Скорость печати можно проверить на Ratatype, для этого нужно
                    просто пройти тест и узнать результат.
                  </Typography>
                  <Typography>
                    Также ты можешь получить сертификата скорости на Ratatype:
                  </Typography>
                  <List>
                    <ListItem>Заполни форму регистрации.</ListItem>
                    <ListItem>Пройди тест скорости печати.</ListItem>
                    <ListItem>
                      Щелкни правой кнопкой мыши на сертификате и выбери
                      «Сохранить изображение», если нужно.
                    </ListItem>
                  </List>
                </AccordionDetails>
              </AccordionListItemAccordion>
            </ListItem>
            <ListItem>
              <AccordionListItemAccordion>
                <AccordionListItemSummary
                  expandIcon={
                    <ArrowDownward
                      sx={{
                        color:
                          mode === "light"
                            ? colors.common.white
                            : colors.green[400],
                      }}
                    />
                  }
                >
                  <HelpIcon
                    sx={{
                      color:
                        mode === "light"
                          ? colors.common.white
                          : colors.green[400],
                    }}
                  />
                  <Typography variant="h6">
                    Как измеряется скорость и точность печати?
                  </Typography>
                </AccordionListItemSummary>
                <AccordionDetails>
                  <List>
                    <ListItem>
                      Для языков, использующих кириллицу, скорость печати
                      измеряется в знаках в минуту (сколько знаков в минуту без
                      опечаток ты набрал). Знак — любой символ, включая пробелы.
                    </ListItem>
                    <ListItem>
                      В языках с латинским алфавитом — слова в минуту. Слово — 5
                      символов, включая пробелы.
                    </ListItem>
                    <ListItem>
                      Иногда скорость печати измеряют в ударах в минуту. Тогда
                      единица измерения — это не только количество набранных
                      знаков, но и количество нажатий на клавиши вроде Shift и
                      Alt.
                    </ListItem>
                  </List>
                  <Typography>
                    Для языков, использующих кириллицу, скорость печати
                    измеряется в знаках в минуту (сколько знаков в минуту без
                    опечаток ты набрал). Знак — любой символ, включая пробелы.
                  </Typography>
                  <Typography>
                    На Ratatype скорость печати измеряется в зн./мин для
                    русского и украинского языков. А для остальных — в сл./мин.
                    Во время тестирования учитываются только правильно
                    напечатанные слова. Поэтому, если ты сделал опечатку,
                    подсчет скорости останавливается, пока ее не исправишь.
                  </Typography>
                  <Typography>
                    Точность печати — это процент правильно введенных символов к
                    общему количеству символов в тексте.
                  </Typography>
                </AccordionDetails>
              </AccordionListItemAccordion>
            </ListItem>
            <ListItem>
              <AccordionListItemAccordion>
                <AccordionListItemSummary
                  expandIcon={
                    <ArrowDownward
                      sx={{
                        color:
                          mode === "light"
                            ? colors.common.white
                            : colors.green[400],
                      }}
                    />
                  }
                >
                  <HelpIcon
                    sx={{
                      color:
                        mode === "light"
                          ? colors.common.white
                          : colors.green[400],
                    }}
                  />
                  <Typography variant="h6">
                    Какая скорость считается хорошей?
                  </Typography>
                </AccordionListItemSummary>
                <AccordionDetails>
                  <Typography>
                    На этот вопрос нет однозначного ответа. Но если посмотреть
                    на среднюю скорость печати на клавиатуре, которая составляет
                    207 зн./мин, то можно сказать, что хорошая скорость печати —
                    это выше средней.
                  </Typography>
                  <Typography>
                    Например, для офисных работников хорошей считается скорость
                    225 зн./мин и выше. Для секретарей — более 300 зн./мин.
                  </Typography>
                  <Typography>
                    Для детей нормы скорости печати отличаются:
                  </Typography>
                  <List>
                    <ListItem>начальная школа — 40-75 зн./мин;</ListItem>
                    <ListItem>средняя — 75-125 зн./мин;</ListItem>
                    <ListItem>старшая — 100-175 зн./мин;</ListItem>
                    <ListItem>студенты — более 150 зн./мин.</ListItem>
                  </List>
                </AccordionDetails>
              </AccordionListItemAccordion>
            </ListItem>
            <ListItem>
              <AccordionListItemAccordion>
                <AccordionListItemSummary
                  expandIcon={
                    <ArrowDownward
                      sx={{
                        color:
                          mode === "light"
                            ? colors.common.white
                            : colors.green[400],
                      }}
                    />
                  }
                >
                  <HelpIcon
                    sx={{
                      color:
                        mode === "light"
                          ? colors.common.white
                          : colors.green[400],
                    }}
                  />
                  <Typography variant="h6">
                    Как научиться печатать быстрее 500 зн./мин?
                  </Typography>
                </AccordionListItemSummary>
                <AccordionDetails>
                  <Typography>
                    Рекордсмены печатают со скоростью 1000 зн./мин и выше,
                    исходя из этого, 500 зн./мин — вполне достижимая цель.
                  </Typography>
                  <Typography>
                    Залог успеха любого занятия — регулярная тренировка. Как
                    только ты пропускаешь урок — ты теряешь время, которое уже
                    потратил на обучение. Поэтому постарайся выделить 2-4 недели
                    для регулярных тренировок — каждый день по 30 минут.
                  </Typography>
                  <List>
                    <ListItem>Заполни форму регистрации.</ListItem>
                    <ListItem>Пройди тест скорости печати.</ListItem>
                    <ListItem>
                      Щелкни правой кнопкой мыши на сертификате и выбери
                      «Сохранить изображение», если нужно.
                    </ListItem>
                  </List>
                </AccordionDetails>
              </AccordionListItemAccordion>
            </ListItem>
            <ListItem>
              <AccordionListItemAccordion>
                <AccordionListItemSummary
                  expandIcon={
                    <ArrowDownward
                      sx={{
                        color:
                          mode === "light"
                            ? colors.common.white
                            : colors.green[400],
                      }}
                    />
                  }
                >
                  <HelpIcon
                    sx={{
                      color:
                        mode === "light"
                          ? colors.common.white
                          : colors.green[400],
                    }}
                  />
                  <Typography variant="h6">
                    Может ли тестирование помочь улучшить скорость печати?
                  </Typography>
                </AccordionListItemSummary>
                <AccordionDetails>
                  <Typography>
                    Конечно, да! Чем больше практики, тем выше скорость. А
                    тестирование скорости печати — это тоже практика. Чтобы твои
                    пальцы как можно скорее запомнили расположение клавиш на
                    клавиатуре, печатай как можно больше: пиши письма друзьям,
                    набирай рефераты или просто проходи тестирование скорости
                    печати.
                  </Typography>
                </AccordionDetails>
              </AccordionListItemAccordion>
            </ListItem>
          </FAQList>
        </Box>
      </Container>
    </Box>
  );
};
