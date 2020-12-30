# Nestjs - API

## Nomadcoders - NestJS API(tutorial)

- `npm i -g @nestjs/cli`
  - wsl2의 경우 `sudo npm i -g @nestjs/cli`
- `nest new project-name`
- `nest generate ~`
- `npm i class-validator class-transformer`
  - 클래스의 유효성 검사를 위함
- `npm i @nestjs/mapped-types`
  - 타입을 변환시키고 사용할 수 있게 해주는 패키지

## Note

- <b>필요한 것이 있다면 nest에게 반드시 `요청`해야 한다.</b>

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

- `DTO(Data Transfer Object)`

  - 간결하게 작성할 수 있도록 도와주고 nestjs가 들어오는 쿼리에 대해 유효성을 검사할 수 있게 함

- `pipe`

  - express 미들웨어 같은,

- `@IsString({each : true})`

  - `{each: true}` : 모든 요소를 하나씩 검사

- nestjs는 express 위에서 동작하기 때문에 req, res에 접근 가능(`@Req() @Res()`)
  - nestjs는 express + fastify 두 개의 프레임워크 위에서 동작하기 때문
  - 따라서 직접적인 접근은 지양
  - nestjs가 때에 따라(?) express <-> fastify

### REST API

- <b>`Single-reponsibility principle`</b>
  - 하나의 module, class 혹은 function이 하나의 기능은 꼭 책임져야 한다.
