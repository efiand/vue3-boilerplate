# vue3-boilerplate

## Установка

```sh
npm ci
```

## Режим разработки

```sh
npm run dev
```

В режиме разработки доступна ссылка во внутренней сети роутера для тестирования в браузерах мобильных устройств.

## Сборка

```sh
npm run build
```

## Проверка и форматирование кода

```sh
npm run lint-format
```

## Использование SVG-иконок в CSS

Современная альтернатива спрайта.

```scss
// @/assets/scss/global.scss

@use "efiand-shared/scss/base/global";

$icons-path: "src/icons"; // По умолчанию src/assets/icons, меняем при необходимости

html {
  // Добавится --icon-test, содержащая url() с интегрированной base64-иконкой
  @include icons(("test"));
}
```

## Другие доступные миксины

См. https://github.com/efiand/shared/tree/main/scss/env/mixins

## Публикация на Github Pages

Раскомментируйте соответствующий код в `.github/workflows/ci.yml`.
