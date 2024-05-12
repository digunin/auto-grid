import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import VideoFragment from "./fragments/videoFragment";
import ImageFragment from "./fragments/imageFragment";
import DefinitionFragment from "./fragments/definitionFragment";
import cutter_5_cards from "../../media/video/cutter_5_cards.mp4";
import offset_print from "../../media/video/offset_print.mp4";
import five_cutter_units from "../../media/video/five_cutter_units.mp4";
import two_columns from "../../media/image/two-columns.png";
import getFontFamilies from "../../media/image/getFontFamilies.png";
import shuffleForGrid from "../../media/image/shuffle-for-grid.png";
import getArrayWithIndexes from "../../media/image/get-array-with-indexes.png";

const About = () => {
  const width = "300px";
  return (
    <div className="about-page">
      <h1>О программе</h1>
      <p style={{ margin: "1em" }}>
        Приложение создано для облегчения производства персонализированных
        пластиковых карт "цифровым" способом (альтернатива офсетной печати).
      </p>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6 700" component="h2">
            Если вам непонятен предыдущий абзац...
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <section>
            <DefinitionFragment term="Офсетная печать">
              <span>
                <VideoFragment src={offset_print}>
                  печать на пластиковых заготовках.
                </VideoFragment>{" "}
              </span>
              <p>
                Заготовка по сути уже является готовой ламинированной картой
                белого цвета. Офсетным этот способ называется из-за метода
                передачи краски с печатной формы на заготовку. Приложение
                сделано не для офсетной печати, но если вам интересно -
                почитайте на{" "}
                <a
                  target="_blank"
                  href="https://ru.wikipedia.org/wiki/%D0%9E%D1%84%D1%81%D0%B5%D1%82%D0%BD%D0%B0%D1%8F_%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C"
                >
                  википедии
                </a>
              </p>
            </DefinitionFragment>
            <DefinitionFragment term={`"Цифровая" печать`}>
              <span>
                печать чернилами (струйная печать) или тонером (лазерная
                печать). Внутренний жаргонизм, поэтому в кавычках.
              </span>
              <p>
                Особенность этого способа - изготовление карт почти с нуля (в
                отличие от офсетного метода, когда печать производится на
                готовой карте белого цвета).
              </p>
              <p>
                Для "цифрового" способа печати требуются листы пластика с
                клеевым слоем. Размер зависит от оборудования, наша типография
                использует формат А4. На одном таком листе помещается 10 карт,
                остальное место занято технологическими метками. Для
                производства 10-ти карт понадобятся два листа пластика А4, по
                одному для лицевой и оборотной сторон. Отпечатанные листы
                прикладываются друг к другу клеевыми сторонами и склеиваются в
                ламинаторе, затем вырубаются на вырубщике. Вырубщик определяет
                расположение макетов карт на листе. У нас используется{" "}
                <VideoFragment src={cutter_5_cards}>
                  модель с пятью вырубными элементами
                </VideoFragment>{" "}
                (к сожалению, конструкция вырубщика не позволяет сделать
                нормальные фотографии с общим планом,{" "}
                <VideoFragment src={five_cutter_units}>вид снизу</VideoFragment>
                ).
              </p>

              <p>
                В нашем случае макеты карт нужно располагать на листе пластика{" "}
                <ImageFragment src={two_columns}>
                  в две колонки по 5 карт
                </ImageFragment>
              </p>
            </DefinitionFragment>
            <DefinitionFragment term={"Персонализация карт"}>
              <span>
                процедура, после которой карта становится уникальной,
                отличающейся от других карт из этого же тиража.
              </span>
              <p>
                {" "}
                Самые распространенные виды персонализации - нанесение на карту
                штрихкода или текста (нумерация, ФИО, что угодно), реже QR-кода.
                Есть и другие способы персонализации (эмбоссирование,
                кодирование магнитной полосы и др.), но они не имеют отношения к
                данному приложению, нас интересует только то, что можно
                напечатать на печатном устройстве - штрихкод, QR-код и текст. В
                дальнейшем под словом "персонализация" будет подразумеваться
                нанесение только этих трех сущностей.
              </p>
              <p>
                Обычно персонализация - это постпечатная обработка, т.е.
                персонализируются уже готовые карты на сублимационном принтере
                (принтер, который печатает не чернилами/тонером, а переносит
                краску с красящей ленты на карту путём нагрева).
              </p>
              <p>
                Персонализировать карты во время офсетной печати невозможно.
                Теоретически, конечно, возможно, но потребуется очень много
                (очень-очень много) времени и денег, тут без вариантов, только
                постпечатная обработка.
              </p>
              <p>
                При "цифровом" способе печати можно одновременно печатать и
                персональную информацию, не затрачивая время и расходные
                материалы на постпечатную обработку. Если количество карт
                небольшое, 10 - 30 шт., то всю информацию можно разместить на
                макете вручную, и это не займет много времени. На сто карт
                тратится уже заметное количество времни, а на тысячу карт
                придется потратить один, а то и два рабочих дня, но, например,
                CorelDraw умеет брать данные из файла и подставлять их в
                печатный макет в виде текста. В нем так же можно печатать и
                штрихкод, но автоматизировать работу со штрихкодом не получится,
                только подставлять значения вручную.
              </p>
              <p>
                <strong>
                  <i>
                    На данный момент не существует (а если существует - то
                    широкой публике неизвестен) удобного способа изготавливать
                    карты "цифровым" методом с заранее напечатанной персональной
                    информацией. Для решения этой проблемы и было создано данное
                    приложение.
                  </i>
                </strong>
              </p>
            </DefinitionFragment>
          </section>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6 700" component="h2">
            Как пользоваться
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <section>
            <p>
              Приложение имеет интуитивно понятный интерфейс, во всяком случае у
              целевой аудитории проблем не возникало.
            </p>
            <DefinitionFragment term="Макет карты">
              <span>
                это прежде всего два растровых изображения, по одному для
                лицевой стороны и оборотной, или одно, если одна из сторон
                пустая.
              </span>
              <p>
                Напечатанный макет будет размером 90х57 мм, но для настройки
                печати можно использовать любой размер, лишь бы устраивало
                качество. Если соотношение сторон отличается от 90:57, вы можете
                выбрать размещение картинки кнопками "Уместить" и "Заполнить"
                (аналог background-size: contain и cover), а так же прижать
                картинку к нужной стороне/сторонам, нажимая на серые области
                вокруг макета.
              </p>
            </DefinitionFragment>
            <DefinitionFragment term="Персонализирование макета">
              <span>
                штрихкод, qr-код и текстовое поле добавляются одноименными
                кнопками под макетом.
              </span>
              <p>
                Если кликнуть по объекту, справа появляются настройки для его
                кастомизации. Так же объекты можно двигать мышью. И не забудьте
                указать источник данных для каждого объекта.
              </p>
            </DefinitionFragment>
            <DefinitionFragment term="Источник данных">
              <span>набор строк, каждая строка соответствует одной карте</span>
              <p>
                Данные предоставляет заказчик, сделать это он может двумя
                способами - прислать готовый файл со строками или указать
                диапазон значений. Перейдите на вкладку "Источник данных" и
                нажмите кнопку "Создать источник даных". Придумайте имя для
                источника.
              </p>
              <p>
                Если заказчик прислал готовый файл с данными - скопируйте строки
                из файла и вставьте в текстовое поле над кнопкой "Создать", а
                если у вас есть только диапазон - воспользуйтесь генератором,
                нажав на кнопку "Сгенерировать". Введите первое значение из
                диапазона в поле "Изменяемая часть". Это поле для числовых
                значений, если вы введете туда буквы, кнопка "Применить" не
                сработает. Если данные состоят из цифр и букв, воспользуйтесь
                полями "неизменная часть", туда можно вводить что угодно.
                Укажите количество строк (по умолчанию 10) и нажмите
                "Применить". В текстовом поле ниже появятся сгенерировнные
                строки, изменяемая часть в каждой строке будет на 1 больше чем в
                предыдущей.
              </p>
              <p>
                Нажмите кнопку "Создать" в самом низу. Название источника данных
                появится в списке слева, на него можно кликнуть и
                отредактировать, если нужно. Теперь можете вернуться к макету и
                указать источник данных для нужного объекта.
              </p>
            </DefinitionFragment>
          </section>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6 700" component="h2">
            О разработке
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <section>
            <p>
              Приложение создано с использованием библиотеки React 17 версии.
              Для управления состоянием сначала использовалась комбинация
              React-context с хуком useReducer, но из-за возросшей сложности
              было принято решение перейти на Redux + redux-saga в качестве
              middleware.
            </p>
            <DefinitionFragment
              term={"Функции getArrayWithIndexes и shuffleForGrid"}
            >
              <span>
                нужны для переупорядочивания значений, которые берутся из
                источника данных.
              </span>
              <p>
                Во время генерации печатных листов (это происходит после
                перехода по ссылке "Страница для печати") для каждого листа из
                источника данных берется 10 значений, какие именно берутся
                значения - определяется индексами, которые возвращает{" "}
                <ImageFragment src={getArrayWithIndexes}>
                  функция getArrayWithIndexes
                </ImageFragment>
                . Возвращает она их в виде массива, каждый элемент которого это
                массив с десятью индексами для одного печатного листа.{" "}
              </p>
              <p>
                Функция{" "}
                <ImageFragment src={shuffleForGrid}>
                  shuffleForGrid
                </ImageFragment>{" "}
                перемешивает индексы таким образом, чтобы после вырубки номера
                на готовых картах шли в таком же порядке, как в источнике данных
                (иначе заказчик будет ругаться), и не нужно было тратить время
                на их упорядочивание вручную.
              </p>
              <p>
                {" "}
                Почему просто не перемешать значения в источнике данных, чтобы
                не создавать дополнительный массив с индексами? Во-первых,
                источник данных должен оставаться в исходном виде, иначе будет
                неудобно с ним работать (например, если нужно напечатать только
                часть тиража), а копирование источника (для дальнейшего
                перемешивания) в 99% случаев затратит больше ресурсов, чем
                создание массива индексов от 1 до N. Во-вторых, источников
                данных может быть несколько, очевидно, проще создать один массив
                с индексами и использовать его для всех источников данных.
              </p>
              <p>
                Аргумент shuffle. Побочная фишка приложения - печать на
                сублимационном принтере, в этом случае печатается по одной
                карточке за раз, перемешивать ничего не нужно (shuffle = false),
                просто возвращается одномерный массив с элементами от 0 до
                count. Но если программа используется по прямому назначению, то
                shuffle конечно же должен быть равен true
              </p>
            </DefinitionFragment>
            <DefinitionFragment term="Drag and drop">
              <span>реализован при помощи redux-saga</span>
              <p>
                По событию onMouseDown в состояние (dragEnabled) записываются
                координаты курсора и позиция объекта (left и top), на который
                кликнули (если кликнуть не по объекту, то selectedItem будет
                пустым и mouseMovingWorker не станет ничего делать), а по
                onMouseUp - записывается false. Этот параметр так же является
                флагом для mouseMovingWorker, если false, то движение мыши
                игнорируется
              </p>
              <p>
                Функция getPageOffsetRect приводит блок с макетом карты и курсор
                мыши к общей системе отсчета
              </p>
              <p>
                Макет карты имеет стандартный размер 90x57 в миллиметрах, в
                миллиметрах хранятся координаты объектов, и именно в миллиметрах
                удобно работать пользователю, а события мыши дают координаты в
                пикселях. Функция getNewEntityPos вычисляет смещение курсора
                мыши от стартовой позиции, переводит его в миллиметры и
                суммирует со стартовыми координатами объекта, состояние
                обновляется, происходит перерисовка и мы наблюдаем drag'n'drop
                без использования сторонней библиотеки.
              </p>
            </DefinitionFragment>
            <DefinitionFragment term="loadingStateSaga">
              <span>
                адаптация старых сохраненок к последней версии приложения
              </span>
              <p>
                Программа довольно быстро начала приносить пользу, но была жутко
                неудобная, настройки приходилось вводить чуть ли не вручную.
                Пришлось добавить возможность сохранения настроек, т.к. заказы
                часто повторяются. После этого структура состояния несколько раз
                менялась, загрузка старых настроек конфликтовала с новым
                состоянием, терять их не хотелось, loadingStateSaga
                трансформирует старые настройки в новые.
              </p>
            </DefinitionFragment>
            <DefinitionFragment term="Как не подвесить браузер тысячами копий изображения">
              <span>
                казалось бы, браузер и сам способен решить эту проблему, но есть
                нюанс.
              </span>
              <p>
                Когда пользователь сохраняет настройки в файл, изображение
                сохраняется в виде dataURL. Если его в таком виде записать в
                состояние, то при генерации печатных листов будет создано
                столько копий dataURL, сколько карт отправляются на печать. Чем
                больше печатается карт, тем сильней начинает тормозить браузер.
              </p>
              <p>
                Решение - изображение в состоянии хранится в двух полях: dataURL
                и ссылка на Blob-объект. dataURL - для сохранения на жесткий
                диск, Blob для генерации печатных листов. Для создания Blob
                используется функция dataURLtoBlob.
              </p>
            </DefinitionFragment>
            <DefinitionFragment term="custom-select">
              <span>
                позволяет взаимодействовать с источником данных на странице
                настроек макета карты. Замена стандартного HTML-элемента
                "select".
              </span>
              <p>
                У стандартного select есть одна неудобная особенность - чтобы
                выбрать несколько элементов, нужно держать нажатой клавишу ctrl,
                а стоит только кликнуть без ctrl - всё выделение обнуляется.
                js-костыль решает эту проблему, но выделенные элементы моргают
                при каждом клике, что раздражает.
              </p>
              <p>
                Подробнее про custom-select{" - "}
                <a
                  target="_blank"
                  href="https://github.com/digunin/custom-select"
                >
                  на гитхабе
                </a>
              </p>
            </DefinitionFragment>
          </section>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6 light" component="h2">
            Недостатки{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <section>
            <span>
              Программа начиналась как "А что если нарисовать нашу сетку в css?
              Ух ты, прикольно, а если распечатать?" Если бы я знал что всё так
              далеко зайдёт...
            </span>
            <DefinitionFragment term="Хардкодинг">
              <span>
                сетка, расположение макетов карт на ней, расположение меток,
                стратегия расположения переменной информации - все это зависит
                от модели вырубщика.
              </span>
              <p>
                Для другой модели придется переписывать много кода в нескольких
                файлах.
              </p>
            </DefinitionFragment>
            <DefinitionFragment term="Ограничения при взаимодействии с операционной системой">
              <span>всё-таки это не десктопное приложение</span>
              <p>
                Приложение предусматривает сохранение настроек в файл и загрузку
                из файла. Сохранение это по сути скачивание файла, а загрузка -
                uploading.
              </p>
              <p>
                Со шрифтами все сложнее, приложение предоставляет пользователю
                возможность выбрать шрифт для текста, но самостоятельно получить
                список шрифтов, установленных в системе, оно не может. Список
                шрифтов создается заранее и хранится в файле fontFamilies.js на
                сервере. Хорошо, что есть python, скрипт{" "}
                <ImageFragment src={getFontFamilies}>
                  getFontFamilies.py
                </ImageFragment>{" "}
                избавляет от ручного составления списка.
              </p>
            </DefinitionFragment>
          </section>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default About;
