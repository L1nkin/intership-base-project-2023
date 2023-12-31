# Frontend Internship Base Project 2023

Базовый проект для стажировки

# Основные ссылки
- [Дизайн банка](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=33%3A35654)
- [Stoplight](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjc3NzQxNjY-get-api-core-profile)
- [Все лекции](https://drive.google.com/drive/folders/1VnOjvW98J0STs1EHIswyPfBOcvG_QUgs?usp=sharing)

# Домашние задания

### Процесс сдачи
- Форкаете к себе этот репозиторий
- На каждое задание создаете отдельную ветку и работаете в ней
- По завершении задания делаете ПР в форкнутую ветку, кидаете его своему ментору
- После ревью от ментора вы вносите нужные исправления и вливаете ПР в форкнутую ветку
- Приступаете к слеующему заданию
- Первое задание по TyperScript лежит в отдельном репозитории, на него распростарняется такой же процесс, но все последующие задания начиная со 2 будут делаться в этом репозитории

### Требования к процессу и результату
- В первую очередь, необходимо внимательно прочитать задание и продекомпозировать его
- Если возникнут вопросы, не стесняйся задавать их в общий чат
- Для запросов использовать `axios`

### Результат
- Приложение должно запускаться и корректно работать
- Необходимо сверстать все ui-элементы самостоятельно, без использования сторонних библиотек

### Список заданий:

<details>
<summary><b>Задание 1 - Typescript</b></summary>

[Лекцию 1 можно посмотреть здесь](https://drive.google.com/drive/folders/1-KkklPTKBUDrXqRbZFQL6xz2aSgkwRWa)

[Переписать данный проект](https://github.com/kode-frontend/autumn_2022_typescript-homework) на TypeScript \
Всё, что лежит в директории shared/providers переписывать на ts необязательно \
Основной упор стоит сделать на компонентах, сторе, редьюсере \
***Задание со звездочкой - переписать api-слой.***
</details>



<details>
<summary><b>Задание 2 - React Native + Стилизация компонентов</b></summary>

[Лекцию 2 можно посмотреть здесь](https://drive.google.com/drive/folders/1c-GPaG1F53EeeJI0Hwc902kix4VN3lMo) \
[Лекцию 3 можно посмотреть здесь](https://drive.google.com/drive/folders/1DipU7-tDp2BJAiR8VawXgiMhqigDfZ4i)

    При выполнении домашки необходимо использовать:
    - styled-components для стилизации
    - атомарный дизайн при декомпозиции компонентов
    - storybook для создания сторей для ui компонентов

- для разделов `Главная`, `Банкоматы` и `Профиль` сделать экраны - заглушки (Название раздела по-центру экрана)
- для реализации списка на экране `Платежи` использовать компонент `FlatList`
- для реализации списка на экране `Мобильная связь` использовать компонент `FlatList`
- поиск не должен учитывать регистр
- заголовок на экране создания платежа должен соответствовать названию сервиса
- выбор карты (модальное окно) реализовывать не надо
- клавиатура не должна мешать вводу сумы платежа на маленьких дисплеях
- "чипсы" с предзаготовленными суммами должны скролиться горизонтально, а по нажатию на сумму, она должна устанавливаться в поле ввода
- по нажатию на кнопку продолжить произвести минимальную валидацию указанных данных (смотри требования к данным), если валидация успешна, то показать `Alert` с текстом `Успех`, иначе с текстом `Проверьте введенные данные`
- при получении фокуса полем ввода, необходимо подставить +7, если поле было пустым, иначе отображать плейсхолдер `Номер телефона`

### Требования к данным

- +7 в начале номера должно быть зашито, код страны нельзя сменить
- номер телефона должен состоять из 10 цифр
- минимальная сумма для осуществления платежа - 1 рубль
- максимальная сумма для осуществления платежа - 20000 рублей

##### Получить список категорий, сервисов и иконок можно с помощью запроса
    GET https://github.com/kode-frontend/files/raw/main/categories.json

</details>



<details>
<summary><b>Задание 3 - Архитектура</b></summary>

[Лекцию 4 можно посмотреть здесь](https://drive.google.com/drive/folders/1A2r5X-nf2heOhHzj6DoENmCfjlZEkU3C)

Необходимо организовать файловую структуру согласно архитектуре [Feature-Sliced v2](https://feature-sliced.design/ru/)

- Необходимо в корневой папке `src` создать слои (app, widgets и пр.). Определить к каким слоям лучше отнести свой код.
- В слой `shared` нужно вынести переиспользуемый код, не привязанный к определённым экранам или бизнес-логике. Например основные ui- компоненты, функции выхова запросов и пр.
- Для слоя `entities` необходимо определиться с набором слайсов (бизнес-сущностей) на основе выбранного флоу платежей.
- В слове `features` определиться с набором слайсов (функционала, с которым пользователь будет взаимодейстовать напрямую) на основе флоу платежей.
- В слое `pages` определиться с набором слайсов (страниц), которые сейчас встречаются в приложении. Для страниц кроме платежей достаточно использовать заглушки.
- В слое `app` нужно вынести все возможные провайдеры (напр. ThemeProvider).
- Слои `widgets`, `processes` опциональны, можете использовать на своё усмотрение.

### Полезные ссылки:
[Официальная документация](https://feature-sliced.design/docs)
[Примеры проектов](https://feature-sliced.design/examples)
[Архитектурная методология Feature Sliced / Даниил Крохмаль](https://www.youtube.com/watch?v=BEMx3iAHP2I)
[Feature-Sliced Design — Архитектура Frontend проектов / Илья Азин, Яндекс](https://www.youtube.com/watch?v=af-PD2yIUiU)

</details>

<details>
<summary><b>Задание 4 - State Management</b></summary>

[Лекцию 5 можно посмотреть здесь](https://drive.google.com/drive/folders/1-g8h6MssUVpoJ_cYPUT1pFGifYNZLc0-)

    Для работы понадобится установить effector
    https://effector.dev/docs/introduction/installation/

1. Снеки
   1. Должна быть возможность вызывать снек в любом месте приложения. (Например произошла ошибка получения данных, нужно уведомить пользователя)
   2. На экране не должно появляется более одно снека с одинаковым сообщением
   3. Должна быть возможность указать время показа снека в мс
   4. При попытке вызывать несколько снеков подряд с разными сообщениями, снеки должны показываться по очереди
2. Effector
   1. Выполнить запрос получения операторов мобильной связи с использованием эффекта эффектора
   2. Положить результат в стор. (Пример был на лекции)
   3. Вывести дынные из [запроса](https://github.com/kode-frontend/files/raw/main/categories.json) в список.
   4. Реализовать поиск по строке. Причем фильтрация должны производится в модели
   5. При ошибке запроса, показать снек с сообщением "Что-то пошло не так"
3. Кэширование запроса
   1. Реализовать кеширование ответа (п.2) в память устройства. Время кеширования 24 часа. При попытке стригерить запрос ранее чем через 24 часа, после последнего успешного запроса, обработчик должен вернуть сохраненные данные
   2. Добавить `pull to refresh` для списка операторов. При этом кеш должен сбрасываться

### Материалы

[Презентация](https://docs.google.com/presentation/d/1nGtOQRkXbhKAlolfwEzfGyAWxacU9c0S5mHhfvSuaZ4/edit#slide=id.p1)

</details>



<details>
<summary><b>Задание 5 - React Query</b></summary>

[Лекцию 6 можно посмотреть здесь](https://drive.google.com/drive/folders/1_VYGaqZVotrXXtufl27n5V36cusG7Fem)

    Для работы понадобится установить React Query
    https://tanstack.com/query/v4/docs/react/installation

### Ссылки
[Дизайн в Figma](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=306%3A66674) \
[Stoplight с запросами](https://kode-education.stoplight.io/docs/kode-bank/b3A6MzE3MDA5OTc-get-api-core-payment-list) \
[Документация React-Query](https://tanstack.com/query/v4/docs/react/overview) \
[Презентация](https://docs.google.com/presentation/d/1y4wA7FtBXCvMetgckLdTSfpI3VthcDpPiJvdqgJiFus/edit#slide=id.p1)

### Требования
- Для запросов используем `axios`
- Желательно разделять компоненты на глупые/умные

### Работа со Stoplight
Есть несколько важных моментов:

- Так как запросы моковые, они могут принимать любые данные, потому сейчас в поля Token или Authorization можете писать любую строку
- Для запросов обязательно используем [Mock Server!](https://user-images.githubusercontent.com/89947425/146177197-2c925162-863a-453a-9587-47914dc5f710.png)
- Если что-то некорректно отрабатывает, пишите в чат, будем выяснять проблемы со Stoplight

### Задание

Необходимо подключить запросы с мокового сервера для раздела платежей, который вы собирали ранее

- Перед работой необходимо обернуть приложение в `QueryClientProvider`
- На экране Платежи, Мобильная связь в разделе платежей необходимо заменить моковые данные на [запрос](https://kode-education.stoplight.io/docs/kode-bank/b3A6MzE3MDA5OTc-get-api-core-payment-list) из стоплайта `GET api/core/payment/list` при помощи `useQuery`
- При выборе оператора связи и переходу на экран с формой оплаты необходимо получить из [запроса](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjk5MjkwNTg-get-api-core-payment-service-id) процент кэшбека и другие данные по методу `GET api/core/payment/{service_id}`
- После заполнения формы по платежу мобильного оператора мы должны вызвать [запрос](https://kode-education.stoplight.io/docs/kode-bank/b3A6MzE3MzA3MTY-api-core-history) при помощи метода `POST /api/core/history`
- **Экран Подтверждение не делаем!**
- **Экран OTP не делаем!**
- Выбор карты не делаем, в поле `card_id: number` прокидываем любое число, все остальные данные должны подтягиваться из ответов других вопросов
- После отправки данных в зависимости от ответа с сервера мы должны попасть на [экран оплаты](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?type=design&node-id=372-82448&mode=design) или [экран отклонения](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?type=design&node-id=404-85746&mode=design&t=RI3AysSPg0dIyr3Z-0)
- По нажатию на "Готово" мы должны вернуться на экран Платежи


</details>



<details>
<summary><b>Задание 6 - Авторизация</b></summary>

### Ссылки
- [Урезанная авторизация в фигме](https://www.figma.com/file/KxWS0hlyfHJNiihnxDpPfU/Skillbox-Auth-Final?type=design&node-id=33-35654&mode=design&t=DBPvUVTrSKYCcQGp-0)
- [Stoplight c запросами авторизации](https://kode-education.stoplight.io/docs/kode-bank/YXBpOjI3Nzc0MTYy-skillbox-auth-api)

### Требования к авторизации
1. Изначально пользователь попадает на [экран ввода номера](https://www.figma.com/file/KxWS0hlyfHJNiihnxDpPfU/Skillbox-Auth-Final?node-id=181%3A65318) мобильного телефона. Номер телефона должен учитывать маску `+7 (XXX) XXX XX XX`. При неверном формате телефона или его отсутствии должен отображаться снек с ошибкой "Пожалуйста, убедитесь, что вы правильно ввели номер телефона"
2. После успешного ввода и нажатию на кнопку "Войти", клиент должен отправить [запрос](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjc5MTQ3Mjg-post-api-auth-otp-code) `POST /api/auth/otp_code` на получение OTP кода. Код от тестового сервера всегда будет одинаковым - `"1234"`
    1. Полученные в ответе запроса "otpId" и "otpCode" необходимо сохранить для последующего запроса подтверждения кода и валидации.
    2. При получении ошибки запроса, пользователь должен быть перенаправлен на [экран ошибки](https://www.figma.com/file/KxWS0hlyfHJNiihnxDpPfU/Skillbox-Auth-Final?node-id=77%3A56748). При нажатии на кнопку "Повторить" или крест в левом верхнем углу пользователь должен вернуться на экран ввода телефона (пункт 1)
3. При получении успешного ответа предыдущего запроса `POST /api/auth/otp_code`, пользователь должен перенаправится на экран ввода OTP c вариантом поля для 4-х символов.
    1. При попадании на экран запускается таймер в 3 минуты, по истечению которого пользователь может нажать на кнопку "Выслать код повторно" и заново отправить [запрос](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjc5MTQ3Mjg-post-api-auth-otp-code) `POST /api/auth/otp_code`.
    2. Если код был введён неверно, поле ввода должно подсвечиваться красным и под ним выводится предупреждающее сообщение "Неверный код. Осталось X попыток". Максимальное количество попыток - 5.
    3. Если пользователь 5 раз неправильно ввёл OTP, ему показывается нативный alert с текстом о завершении сессии и кнопкой "Выход", по нажатию которой происходит перенаправление на начальный экран ввода телефона.
    4. При получении ошибки запроса, пользователь должен быть перенаправлен на [экран ошибки](https://www.figma.com/file/KxWS0hlyfHJNiihnxDpPfU/Skillbox-Auth-Final?node-id=77%3A56748). При нажатии на кнопку "Повторить" или крест в левом верхнем углу пользователь должен вернуться на экран ввода кода (пункт 3.1)
4. После успешного ввода OTP-кода клиент должен [отправить запрос](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjc3NzQxODE-post-api-auth-confirm) `POST /api/auth/confirm` и показать экран загрузки.
    1. При успешном выполнении запроса необходимо локально сохранить guestToken из ответа при помощи effector.
    2. При получении ошибки запроса, пользователь должен быть перенаправлен на [экран ошибки](https://www.figma.com/file/KxWS0hlyfHJNiihnxDpPfU/Skillbox-Auth-Final?node-id=77%3A56748). При нажатии на кнопку "Повторить" или крест в левом верхнем углу пользователь должен вернуться на экран ввода кода (пункт 3.1)
5. По завершению запроса на получение гостевого токена, пользователь попадает на экран ввода пароля. Паролем должна быть строка длиной больше 5 символов, содержащая только цифры и буквы.
    1. Если введённый пароль будет меньше, необходимо показать снек с текстом "Длина пароля должна быть не менее 5 символов".
    2. Если введённый пароль будет содержать специальные символы, необходимо показать снек с текстом "Пароль может содержать только цифры и буквы".
    3. Пользователь может скрывать и отображать по нажатию на иконку глаза в инпуте.
    4. Пользователь может выйти по нажатию на крест в левом верхнем углу экрана. При нажатии показывается системный alert с предупреждением и кнопками "Отмена", "Выйти". Если пользователь нажимает "Выйти", его переносит в самое начало на экран ввода номера телефона (пункт 1)
6. При успешной валидации пароля и нажатию на кнопку "Войти", клиенту необходимо [отправить запрос](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjc3NzQxODI-post-api-auth-enter) `POST /api/auth/enter`. Полученные accessToken и refreshToken необходимо сохранить локально при помощи effector.
    1. При получении ошибки запроса пользователь должен быть перенаправлен на [экран ошибки](https://www.figma.com/file/KxWS0hlyfHJNiihnxDpPfU/Skillbox-Auth-Final?node-id=77%3A56748). При нажатии на кнопку "Повторить" или крест в левом верхнем углу пользователь должен вернуться на экран ввода пароля (пункт 5)
7. При успешном получении и сохранении токенов, необходимо перенаправить пользователя на экран "Все готово"
8. По нажатию на кнопку "Продолжить" происходит перенаправление на раздел "Платежи"

### Как проверять ошибки от сервера

Чтобы убедиться в корректном поведении клиента при возникновении ошибок, вы можете в запросе передать заголовок `"Prefer": "code=500, dynamic=true"`. Где в `code` передаётся желаемый HTTP код.

Например:

```javascript
fetch("https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/login", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Prefer": "code=500, dynamic=true"
  },
  "body": "{\"phone\":\"+79115552211\"}"
})
```

### Работа с масками инпута
Для создания телефонной маски инпута на экране ввода телефона, можно использовать библиотеки на ваш вкус или из этого списка:

- https://github.com/akinncar/react-native-mask-text
- https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-native-imask

</details>



# Установка зависимостей и запуск проекта
### Установите JS зависимости
`yarn`
### Установите Bundler
`cd ios bundle install`
### Установите поды
`bundle exec pod install`
### Или одной командой
`yarn && cd ios && bundle install && bundle exec pod install`

### Запустите metro бандлер
`yarn start`
### Запустите симулятор/эмулятор
`yarn ios` или `yarn android`

# Структура проекта

```
root
- entities // бизнес-сущности

- features // работа с данными
-- feature-name

- flows // бизнес флоу
-- flow-name
--- ui // ui относящийся только к конкретному flow
---- organisms
---- molecules
---- atoms

- shared // общий код, который переиспользуется в разных flow
-- ui // общие переиспользуемые компонеты
--- templates
--- organisms
--- molecules
--- atoms
--- icons
```
