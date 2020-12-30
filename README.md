# Nestjs - API

## Nomadcoders - NestJS API(tutorial)

- `npm i -g @nestjs/cli`
  - wsl2의 경우 `sudo npm i -g @nestjs/cli`
- `nest new project-name`
- `nest generate ~`

## Note

- `@~()` : Decorator. 클래스에 함수 기능을 추가할 수 있음. 꾸며주는 함수나 클래스랑 붙어이었야 됨(빈 칸을 두면 안됨)

  - `@Get()` : 해당 entry point의 루트
  - `@Get('/:id')` : /99
  - `@Param(?)` : 파라미터 가져오기

- `main.ts` - `AppModule` - `AppController` - `AppService`

- `AppModule`

  - `controllers` : url을 가져오고 함수를 실행(express 라우터 같은)
    - 함수를 실행하는 곳은 `AppService`(비지니스 로직을 실행하는 역할)

- `movies.controller.ts`
  - `@Controller('movies')` : url의 entry point를 컨트롤
