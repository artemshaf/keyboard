import { useId, useState } from "react";
import {
  correctWordId,
  getCorrectWord,
  getCorrectWordOnChar,
  getWordsOnKeyboard,
} from "@helpers";
import { IKeyboardInterface } from "./Keyboard.interface";
import { ChangeEvent } from "react";
import { useKeyPress, useTopElementWatch } from "@hooks";
import {
  selectKeyboardState,
  storeActions,
  useActions,
  useAppSelector,
} from "@store";
import { Container, KeyboarsItems, KeyboardItem } from "@components";
import { russianPattern } from "@utils";

const TEXT = `
Жил-был купец, у него было два сына: Дмитрий да Иван. Раз, благословляя их на ночь, сказал им отец:

— Ну, дети! Кому что во сне привидится — поутру мне поведайте; а кто утаит свой сон, того казнить велю.

Вот на утро приходит старший сын и сказывает отцу:

— Снилось мне, батюшка, будто брат Иван высоко летал по поднебесью на двенадцати орлах; да еще будто пропала у тебя любимая овца.

— А тебе, Ваня, что привиделось?

— Не скажу! — отвечал Иван.

Сколько отец ни принуждал его, он уперся и на все увещания одно твердил: «Не скажу!» да «Не скажу!»

Купец рассердился, позвал своих приказчиков и велел взять непослушного сына, раздеть донага и привязать к столбу на большой дороге.

Приказчики схватили Ивана и, как сказано, привязали его нагишом к столбу крепко-накрепко. Плохо пришлось доброму молодцу: солнце печет его, комары кусают, голод и жажда измучили.



Случилось ехать по той дороге молодому царевичу; увидал он купеческого сына, сжалился и велел освободить его, нарядил в свою одёжу, привез к себе во дворец и начал расспрашивать:

— Кто тебя к столбу привязал?

— Родной отец прогневался.

— Чем же ты провинился?

— Не хотел рассказать ему, что мне во сне привиделось.

— Ах, как же глуп твой отец, за такую безделицу да так жестоко наказывать... А что тебе снилось?

— Не скажу, царевич!

— Как не скажешь? Я тебя от смерти избавил, а ты мне грубить хочешь? Говори сейчас, не то худо будет.

— Отцу не сказал и тебе не скажу!

Царевич приказал посадить в темницу; тотчас прибежали солдаты и отвели его, раба божьего, в каменной мешок.



Прошел год, вздумал царевич жениться, собрался и поехал в чужедальнее государство свататься на Елене Прекрасной.

У того царевича была родная сестра, и вскоре после его отъезда случилось ей гулять возле самой темницы. Увидал ее в окошечко Иван купеческой сын и закричал громким голосом:

— Смилуйся, царевна! Выпусти меня на волю; может, и я пригожуся! Ведь я знаю, что царевич поехал на Елене Прекрасной свататься; только без меня ему не жениться, а разве головой поплатиться. Чай, сама слышала, какая хитрая Елена Прекрасная и сколько женихов на тот свет спровадила.
`;

export const Keyboard = ({ className, ...props }: IKeyboardInterface) => {
  const [text, setText] = useState<string[]>(() => getWordsOnKeyboard(TEXT));
  const [inputText, setInputText] = useState<string>("");
  const { addHistoryWordIndex, addPositionWord } = useActions(storeActions);
  const { history, position, status } = useAppSelector((state) =>
    selectKeyboardState(state)
  );

  const pressedKey = useKeyPress({ pattern: russianPattern });

  const currentTopPosition = useTopElementWatch(correctWordId, position);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    if (status === "pause") {
      //! pause
      return;
    }
    //! space in start word
    if (currentText === " ") {
      return;
    }
    //! correct word
    if (currentText === text[position] + " ") {
      addHistoryWordIndex(true);
      addPositionWord();
      setInputText("");
      return;
    }
    //! wrong word
    if (currentText[currentText.length - 1] === " ") {
      addHistoryWordIndex(false);
      addPositionWord();
      setInputText("");
      return;
    }
    setInputText(currentText);
  };

  return (
    <KeyboarsItems.WrapperBox>
      <Container>
        <KeyboarsItems.Box>
          <KeyboarsItems.WordList
            sx={({}) => ({
              top: `-${currentTopPosition}px`,
              transition: `top 0.4s ease`,
            })}
          >
            {text.map((word, index) => (
              <KeyboardItem
                key={useId()}
                word={word}
                index={index}
                history={history}
                position={position}
                inputText={inputText}
              />
            ))}
          </KeyboarsItems.WordList>
        </KeyboarsItems.Box>
        <input value={inputText} onChange={handleChange} />
      </Container>
    </KeyboarsItems.WrapperBox>
  );
};
