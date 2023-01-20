import { TBlog } from './type';

const data: TBlog = {
  id: '20220120',
  title: 'Nestjs의 DI와 IoC',
  description:
    'Nestjs에서는 DI와 IoC를 통해 의존성을 관리한다. 이번 포스팅에서는 Nestjs에서 Inject Decorator를 통해 Provider를 생성하여 IoC를 관리 하는 방법을, 그리고 Nestjs가 DI를 하는 방식에 대해서 다뤄보도록 한다.',
  keywords: ['Nestjs', 'DI', 'IoC', 'Inject', 'Provider'],
  tags: ['백엔드'],
  date: '2023-01-20',
  thumbnail: 'https://sgp1.vultrobjects.com/kyoongdev-blog/images/nestjs-logo.png',
  body: `Nestjs에서는 DI와 IoC를 통해 의존성을 관리한다. 이번 포스팅에서는 Nestjs에서 Inject Decorator를 통해 Provider를 생성하여 IoC를 관리 하는 방법을, 그리고 Nestjs가 DI를 하는 방식에 대해서 다뤄보도록 한다.     

  # Nestjs의 구조

  Nestjs 앱을 새롭게 구성하면 다음과 같은 구조가 자동으로 생성된다.

  ~~~bash
  | ── src
  │   |── app.controller.ts
  │   |── app.module.ts
  │   |── app.service.ts
  │   |── main.ts
  ~~~

  위 구조에서 알 수 있듯이 Nestjs는 기본적으로  **module**, **controller**, **service**를 기본으로 하는 계층을 가지고 있다.
  이를 __계층형 구조(Layered Architecture)__ 라고 한다.

  ## 계층형 구조

  계층형 구조는 애플리케이션을 여러 계층으로 나누어 구성하는 방식이다. 
  
  ![Layered Architecture](https://sgp1.vultrobjects.com/kyoongdev-blog/images/blog/layered_architecture.png)
  > **Presentation layer** - 유저(클라이언트)와의 상호작용을 담당. UI, API, CLI 등이 여기에 해당.
  >
  > **Business layer** - 요청에 따른 비즈니스 로직 수행을 담당.
  >
  > **Persistence layer** - DAO(Data Access Object), ORM 등을 통해 데이터베이스와의 상호작용을 담당.
  >
  > **Data layer** - 데이터가 저장되어 있는 곳, 즉 데이터베이스

  이렇듯 각 기능을 역할에 맞게 계층을 분리하게 되면, 계층별 역할이 명확해짐과 동시에 코드의 재사용성이 높아진다.
  계층형 구조를 사용하지 않고 하나의 요청에 사용되는 비즈니스 로직과 쿼리가 한 파일에 위치시키면 코드간의 의존성과 복잡도가 상승하고, 유지보수가 극단적으로 힘들어진다. 서버 개발자로서 우리는 항상 **효울성**을 염두에 두고 프로젝트를 설계해야하기 때문에 계층형 구조를 사용하는 것이 좋다.

  Nestjs에서는 Controller가 Presentation 계층, Service는 Application 계층으로 매핑된다.
  그 중에서 Controller를 Nestjs에서는 특별히 **Provider**라고 부른다.

  # IoC(제어 역전, Inversion of Control)

  Provider를 이해하기 위해서는 기본적으로 본 포스팅의 주제이기도한 Ioc에 대해 알고갈 필요가 있다.

  > **제어 역전** - 나 대신 프레임워크가 제어한다.

  제어의 역전이란 우리가 관리하던 클래스를 더 이상 우리가 관리하지 않고, Nestjs가 관리하게 하는 것을 의미한다.
  제어 역전 없이 클래스를 관리하게 되면, **new**라는 키워드를 통해 클래스를 인스턴화하여 사용을 해야한다. 예시를 보도록 하자

  ~~~javascript
  class Car {
    public drive()  {
      // 자동차가 달린다.
    }
  }

  const car = new Car();
  ~~~

  위의 예시와 같이 기존의 경우에는 new를 사용하여 클래스를 인스턴스화 해야 한다. 
  이를 좀 더 확장한 예시를 보도록 하자.

  ~~~javascript
  class Car{
    public drive() {
      // 자동차가 달린다.
    }
  }

  class Bus extends Car{
    public drive() {
      // 버스가 달린다.
    }
  }

  class Driver {
    private car : Car;
    constructor() {
      this.car = new Car();
    }
  }
  ~~~

  자 위의 예시를 보면 Driver 클래스는 Car 클래스를 **필요**로 하고 있다. 이것을 우리는 Driver 클래스가 Car 클래스에 의존한다고 말한다.
  이렇게 의존성이 생기게 되면 생기는 문제는 무엇일까?

  만약 Driver가 Car가 아닌 Bus를 필요로 한다면, 우리는 Driver 클래스의 코드를 수정해야한다. 즉, Car로 선언된 부분을 Bus로 수정해야한다. 위의 예시에서는 1개의 클래스만이 Car에 의존하고 있지만, 만약 Car에 의존하고 있는 클래스가 100개쯤 된다면 이 100개의 클래스를 수정하는 것은 매우 번거로운 일이 될 것이다.
  
  따라서, 이를 해결하기 위한 초석을 다지기 위해 Nestjs는 IoC라는 개념을 도입하였다.

  ~~~javascript
  @Injectable()
  class Car{
    public drive() {
      // 자동차가 달린다.
    }
  }

  @Injectable()
  class Bus extends Car{
    public drive() {
      // 버스가 달린다.
    }
  }

  class Driver {
    constructor(private car : Car) {}
  }
  ~~~
  
  이렇게 **Injectable** 데코레이터를 사용하게 되면, 우리는 이제 Car 클래스와 Bus 클래스를 더 이상 인스턴화할 필요가 없다. Nestjs가 자체적으로 두 클래스를 인스턴스화 해주기 때문이다. 이를 **IoC**, 즉 제어의 역전이라고 부른다. 이렇게 되면 위에서 설명한 바와 같이 더 이상 우리는 Car 클래스와 Bus 클래스를 관리할 필요가 없다. 이를 그림으로 살펴보자.

  ![IoC](https://sgp1.vultrobjects.com/kyoongdev-blog/images/blog/ioc.png)

  위의 그림은 IoC의 개념을 보여준다. 우리는 Nestjs에게 Injectable 데코레이터를 통해 Car 클래스와 Bus 클래스에 대한 제어권을 넘겨주게 되고, 그렇게 되면 Nestjs 안의 IoC 컨테이너에 두 클래스가 등록이 된다. 이렇게 등록이 된 클래스를 Nestjs에서는 **Provider**라고 부른다. 그 이후에 Car 클래스와 Bus 클래스를 사용해야하는 경우가 생기면 우리는 이제 다음으로 다룰 개념인 **DI**를 사용하면 된다.
  
  

  # DI(의존성 주입, Dependency Injection)

  위에서는 IoC의 개념을 살펴보았다. 이제는 IoC의 개념을 통해 얻을 수 있는 장점인 DI에 대해 알아보자.

  ~~~javascript
  class Car{
    public drive() {
      // 자동차가 달린다.
    }
  }

  class Bus extends Car{
    public drive() {
      // 버스가 달린다.
    }
  }

  class Driver {
    private car : Car;
    constructor() {
      this.car = new Car();
    }
  }
  ~~~
  
  자, 위에서 다뤘던 예시를 다시 한번 살펴보도록 하자.
  앞서 말한대로 위와 같이 Driver 클래스가 Car 클래스에 의존하게 되면, 유지보수가 힘들어지고 클래스 간의 의존성을 파악하기가 힘들어진다. 이를 해결하기 위해서는 다음과 같이 사용할 수 있다.

  ~~~javascript
  class Car{
    public drive() {
      // 자동차가 달린다.
    }
  }

  class Bus extends Car{
    public drive() {
      // 버스가 달린다.
    }
  }

  class Driver {
    constructor(car : Car) {
      this.car = car;
    }
  }

  const driver = new Driver(new Car());
  ~~~
  
  이렇게 Driver 클래스의 생성자 함수를 통해 Car 인스턴스를 **주입**받을 수 있게 되고, 이를 통해 더 이상 Driver 클래스가 Car 클래스에 의존하는 것이 아닌 Driver 쪽에서 의존성 자체를 결정할 수 있게 되었다. 이것을 **의존 관계의 역전**이라고 부른다.

  그럼에도 불구하고 아직은 위와 같은 코드를 좋은 구조라고 부르기 힘들다. 지금은 Driver 클래스가 Car 클래스 하나에만 종속성을 가지고 있지만, 만약 Driver 클래스가 10개의 클래스에 종속성을 가지게 되면 일일이 생성자 함수를 통해 주입해줘야 하는 번거로움이 생긴다. 

  이를 해결하기 위해서 Nestjs는 **DI**를 사용한다.

  ~~~javascript
  @Injectable()
  class Car{
    public drive() {
      // 자동차가 달린다.
    }
  }

  @Injectable()
  class Bus extends Car{
    public drive() {
      // 버스가 달린다.
    }
  }

  class Driver {
    constructor(private car : Car) {}
  }
  ~~~
  
  위에서 봤던 예시와 동일하다. Injectable 데코레이터를 사용하면 Ioc 컨테이너에 클래스가 등록되고, 그렇게 되면 이제 Driver 클래스에서 위와 같이 contructor에서 Car 클래스를 주입받을 수 있다. 이를 Nestjs의 **DI**라고 부른다.

  ## Nestjs의 DI

  우리는 이제 Nestjs에서 DI가 이루어지는 대략적인 개념을 알게되었다. Nestjs는 이렇게 추상적인 제어 역전을 의존성 주입을 통해 구체적으로 구현한다. 
  쉽게 말해
  
  > Nestjs는 **DI**(의존성 주입)를 통해 **IOC**(제어의 역전)를 구현한다.

  라고 할 수 있다.

  이번에는 Nestjs에서 DI를 수행하기 위한 마지막 단계를 알아보자.
  위에서 다룬 코드는 Injectable 데코레이터를 통해 Nestjs가 DI를 사용하기 위한 준비 단계, 즉 아직은 Nestjs가 본격적으로 **Provider를 주입할 수 없는 상태**다. Nestjs가 DI를 수행하기 위해서는 Module에 Provider를 등록해야 한다.

  ~~~javascript
  // news.sevice.ts
  import { Injectable } from '@nestjs/common';

  @Injectable()
  export class NewsService {
    constructor() {}

    findNews() {}
  }
  
  // news.controller.ts
  import { Controller, Get } from '@nestjs/common';
  import { NewsService } from './news.service';

  @Controller('news')
  export class NewsController {
    constructor(private news: NewsService) {}

    @Get()
    getnews() {}
  }


  // news.module.ts
  import { Module } from '@nestjs/common';
  import { NewsController } from './news.controller';
  import { NewsService } from './news.service';

  @Module({
    controllers: [NewsController],
    providers: [NewsService],
  })
  export class NewsModule {}
  ~~~

  NewsService는 Business Layer 계층에 속한 클래스로, News와 관련된 비즈니스 로직을 수행하는 클래스임과 동시에 Injectable 데코레이터를 사용해서 Nestjs가 DI를 할 수 있도록 세팅한 상태이다.
  NewsController에서 NewsService를 contructor를 통해 주입받는 모습에 주목해보자. 이렇게 NewsController에서 NewsService를 주입받아서 사용하기 위해서는 위와 같이 NewsModule에 NewsService를 등록해야 한다. 

  결과적으로 Nestjs에서는 Injectable 데코레이터를 통해 Injecting이 가능하도록 설정한 클래스를 Module의 provider에 등록하는 과정을 거쳐 최종적으로 Nestjs가 DI를 수행하게 된다.

  # 마침

  이번 포스팅에서는 **IoC**와 **DI**의개념을 살펴보고 실제로 Nestjs가 어떤 방식으로 DI를 수행하는지 알아보았다.
  정리하면

  > Nestjs는 **DI**(의존성 주입)를 통해 **IOC**(제어의 역전)를 구현한다.
  > Injectable 데코레이터를 통해 Nestjs가 DI를 사용하기 위한 준비를 할 수 있다.
  > Module의 provider에 클래스를 등록함으로서 Nestjs가 DI를 수행한다.

  와 같다. 물론, Nestjs에서 의존성을 주입하는 방법은 위 방법 외에 추가적인 방법이 존재하나 이번 포스팅에서는 Nestjs가 DI를 수행하는 기본적인 방법에 대해서만 다루도록 하겠다.

  이렇게 DI를 수행하게 되면 우리가 구현한 앱은 Nestjs가 지향하는 **Singleton** 패턴을 따르게 된다. 
  SingleTon 패턴과 관련하여 Nestjs에서는 Provider에 **Scope**가 존재하는데, 이는 다음 포스팅에서 다루도록 하겠다.
  `,
};

export default data;
