# Nestjs - API

## Nomadcoders - NestJS API(tutorial)

<br>

- `npm i -g @nestjs/cli`
- `nest new project-name`

## Note

- `@~()` : Decorator. 클래스에 함수 기능을 추가할 수 있음. 꾸며주는 함수나 클래스랑 붙어이었야 됨(빈 칸을 두면 안됨)

- `main.ts` - `AppModule` - `AppController` - `AppService`

- `AppModule`

  - `controllers` : url을 가져오고 함수를 실행(node.js = express 라우터 같은)
    - 함수를 실행하는 곳은 `AppService`(비지니스 로직을 실행하는 역할)
