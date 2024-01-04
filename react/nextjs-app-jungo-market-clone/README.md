# 중고마켓 클론코딩

<details>
<summary>Prisma, Postgres 설정하기</summary>

### Prisma, Postgres 설정하기
- NextJS로 개발 시 Prisma랑 Postgres를 많이 사용함

#### [Prisma](https://www.prisma.io/nextjs)
```bash
# install
npm install -D prisma

# init
npx prisma init
```

#### Postgres
- 사용법으로 [Railway](https://railway.app/)와 [Superbase](https://supabase.com/)를 사용하는 방법이 있음
- Docker를 활용하여 사용하는 것 권장
</details>

<details>
<summary>ORM에 대해서</summary>

> 데이터베이스를 사용할 때 ORM을 많이 사용하게 되는데 ORM이 무엇인지 살펴보자

### ORM(Object Relational Mapping)이란?
- 객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업이다.
- ORM을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용할 수 있다.
![Alt text](image.png)

### ORM vs Pure Javascript
- ORM을 사용해서 board 테이블에서 데이터를 가져오는 방법과 orm 사용하지 않고 가져오는 방법을 비교해보면 다음과 같다.
```javascript
/* orm 사용 */
const boards = Board.find({ title: 'Hello', status: 'PUBLIC'});

/* pure javascript */
db.query('SELECT * FROM boards WHERE title = "Hello" AND status="PUBLIC", (err, result) => {
    if(err) {
        throw new Error(err);
    }
    boards = result.rows;
})
```

### ORM과 Node.js 추상화 계층
- 개발에서 추상화라는 것은 추상화를 많이 하면 할수록 어떠한 복잡한 로직을 알지 못하더라도 그 로직을 간단하게 사용할 수 있게 해준다.
  - 불필요한 정보는 숨기고 중요한 정보만을 표현해서 프로그램을 간단하게 해준다.
- 예를 들어 커피를 마시기 위해 커피머신을 이용할 줄 안다면 커피 머신이 어떻게 작동하는지 몰라도 커피를 마실 수 있는 것과 같다.
- 데이터베이스도 사용하는 방법에 따라 추상화가 많이 되어있는 라이브러리를 사용할수도 있고 그렇지 않은 라이브러리를 사용해서 데이터베이스를 컨트롤 할 수도 있다.
- 그래서 추상화 정도를 3단계로 나눠서 살펴보자

#### 저수준 : 데이터베이스 드라이버
- 데이터베이스 드라이버는 데이터베이스 연결(때때로 연결 풀링)을 처리한다.
- 이 수준에서는 원시 SQL 문자열을 작성하여 데이터베이스에 전달하고 데이터베이스에서 응답을 받는다.
- Node.js 생태계에서는 이 계층에서 작동하는 많은 라이브러리가 있다.
- 다음은 세 가지 인기 있는 라이브러리이다.
  - mysql : MySQL(mysql을 위한 데이터베이스 드라이버)
  - pg : PostgresSQL(postgres를 위한 데이터베이스 드라이버)
  - sqlite3 : SQLite(sqlite를 위한 데이터베이스 드라이버)
- 이러한 각각 라이브러리는 기본적으로 동일한 방식으로 작동한다.
- 데이터베이스 인증 정보를 가져오고, 새 데이터베이스 인스턴스를 인스턴스화하고, 데이터베이스에 연결하고, 문자열 형식으로 쿼리를 보내고 결과를 비동기적으로 처리한다.
```javascript
const {Client} = require('pg');
const connection = require('./connection.json');
const client = new Client(connection);

client.connect();

const query = `SELECT
    ingredient.*, item.name AS item_name, item.type AS item_type
FROM
    ingredient
LEFT JOIN
    item On item.id = ingredient.item_id
WHERE
    ingredient.dish_id = $1`;

client.query(query, [1])
    .then(res => {
        console.log('Ingredients:');
        for (let row of res.rows) {
            console.log(`${row.item_name}: ${row.quantity} ${row.unit}`);
        }

        client.end();
    })
```

#### 중간 수준 : 쿼리 빌더
- 이것은 단순한 데이터베이스 드라이버 모듈과 완전한 ORM을 사용하는 것의 중간 수준이다.
- 이 계층에서 작동하는 가장 주목할만한 모듈은 Knex이다.
- 이 모듈은 몇 가지 다른 SQL 언어에 대한 쿼리를 생성할 수 있다.
- 이 모듈은 앞서 언급한 라이브러리 중 하나에 의존한다.
  - Knex와 함께 사용하려는 특정 라이브러리를 설치(knex: Query, Builder)
- 여기서 작성하는 쿼리는 기본 SQL 쿼리와 매우 유사하다.
- 또한 한 가지 좋은 점은 문자열을 연결하여 SQL을 형성하는 경우(종종 보안 취약점이 발생함)보다 훨씬 더 편리한 방식으로 프로그래밍 방식으로 동적 쿼리를 생성할 수 있다는 것
```javascript
// 기본 SQL 쿼리와 비슷하지만 위에 문자열을 사용하는 예제와는 차이가 있다.

const knex = require('knex');
const connection = require('./connection.json');
const client = knex({
    client: 'pg',
    connection
});

client
    .select([
        '*',
        client.ref('item.name').as('item_name')
        client.ref('item.type').as('item_type')
    ])
    .from('ingredient')
    .leftJoin('item', 'item.id', 'ingredient.item_id')
    .where('dish_id', '=', 1)
    .debug()
    .then(rows => {
        console.log('Ingredients:');
        for(let row of rows) {
            console.log(`${row.item_name}: ${row.quantity} ${row.unit}`)
        }

        client.destroy();
    })
```

#### 고수준: ORM
- 최고 수준의 추상화이다.
- ORM으로 작업할 때 일반적으로 더 많은 설정을 사전에 수행해야 한다.
- ORM의 요점은 이름(object relational mapping)에서 알 수 있듯이 관계형 데이터베이스의 데이터를 애플리케이션의 객체(클래스 인스턴스)에 매핑하는 것이다.
- 종류로는 다음과 같이 있다.
  -  typeorm
  -  sequelize
  -  prisma
![Alt text](image-1.png)
![Alt text](image-2.png)

### ORM 사용의 단점
- SQL이 아닌 ORM 자체를 배우게 된다.(각각 특정 ORM 자체를 배우는 시간도 오래걸리며 ORM들 마다 다른 문법을 사용하는 곳도 많다.)
- ORM을 이용해서 복잡한 호출을 하면 성능이 좋지 않을 수 있다.

### ORM 사용의 장점
- 하나의 소스 코드를 이용해서 여러 데이터베이스로 쉽게 교체 가능하다.
- 중복 코드 방지
- SQL 인젝션 취약점으로부터 보호
- 모델 유효성 검사 지원
- TypeScript 지원
</details>