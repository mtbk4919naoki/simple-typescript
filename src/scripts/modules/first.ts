console.log('a');

//esm ES2016 ES2017 ES2018 ES2019 ES2021
//javascript Node.js Swiper jQuery
//window ブラウザの用意したJavaScript API

var bird = 'すずめ';
console.log(bird);
var bird = 'たか';
console.log(bird);

let cat = '三毛猫';
console.log(cat);
cat = 'ロシアンブルー';
console.log(cat);

const dog = 'コーギー';
console.log('dog');
// dog = 'しば犬'; // error
// console.log('dog');

const fn = () => {
  console.log('test');
}

const box = [
  '🍊',
  '🍊',
  '🍊',
  '🍊',
  '🍊',
  [
    '🍎','🍎','🍎','🍎','🍎',
    ['🍌','🍌','🍌','🍌','🍌','🍌']
  ],
  {
    'ringo': ['🍎','🍎','🍎','🍎','🍏']
  }
] as const;

console.log(box[6].ringo[4]);

const box3 = {
  mikan: [
    {
      name: '🍊温州みかん',
      price: 200
    },
    {
      name: '🍊ネーブル',
      price: 300
    },
    {
      name: '🍊はっさく',
      price: 400
    },
  ],
  ringo: [
    {
      name: '🍎さんフジ',
      price: 250
    },
    {
      name: '🍎紅玉',
      price: 350
    },
    {
      name: '🍎世界一',
      price: 450
    }
  ]
} as const;

//紅玉の値段を表示
console.log(box3.ringo[1].name+'の値段は'+box3.ringo[1].price+'円');

Object.values(box3).forEach(fluits => {
  fluits.forEach(fluit => {
    console.log(fluit.name+'の値段は'+fluit.price+'円');
  })
});