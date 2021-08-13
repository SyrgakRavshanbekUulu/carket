import nissan from '../assets/cars/nissan-x.png'
import mazda from '../assets/cars/mazda.png'
import mers from '../assets/cars/mers-black.png'
import mersMayBack from '../assets/cars/mers-mayback.png'
import bmw from '../assets/marks/bmw.png'
import audi from '../assets/marks/audi.png'
import lada from '../assets/marks/lada.png'
import cadillac from '../assets/marks/cadillac.png'
export const category = [
  {
    id: 'cars',
    title: 'Легковые',
    active: true
  },
  {
    id: 'comtrans',
    title: 'Комтранс',
    active: true
  },
  {
    id: 'moto',
    title: 'Мото',
    active: true
  },
  {
    id: 'autoParts',
    title: 'Автозапчасти',
    active: true
  }
]

export const condition = [
  {
    id: 'all',
    title: 'Все',
    active: true
  },
  {
    id: 'new',
    title: 'Новые',
    active: true
  },
  {
    id: 'with-mileage',
    title: 'С пробегом',
    active: true
  },
  {
    id: 'newsa',
    title: 'Новые',
    active: true
  },
  {
    id: 'with-mileageqw',
    title: 'С пробегом',
    active: true
  },
]


export const cars = [
  {
    id: '1',
    marka: 'Nissan',
    model: 'X-Trail III Рестайлинг',
    priceDollar: 3000,
    lastView: '2',
    image: [nissan, mazda, mers],
    place: 'Кыргызстан, Бишкек'
  },
  {
    id: '2',
    marka: 'Mazda',
    model: '3 I (BK) Рестайлинг',
    priceDollar: 3000,
    lastView: '2',
    image: [mazda, mers, nissan],
    place: 'Кыргызстан, Бишкек'
  },
  {
    id: '3',
    marka: 'Mersedes',
    model: '3 I (BK) Рестайлинг',
    priceDollar: 3000,
    lastView: '2',
    image: [mers, mersMayBack, mazda],
    place: 'Кыргызстан, Бишкек'
  },
  {
    id: '4',
    marka: 'Mersedes',
    model: '500',
    priceDollar: 3000,
    lastView: '2',
    image: [mersMayBack, mazda, nissan],
    place: 'Кыргызстан, Бишкек'
  },
  {
    id: '5',
    marka: 'Mersedes',
    model: '3 I (BK) Рестайлинг',
    priceDollar: 3000,
    lastView: '2',
    image: [mers, mazda, nissan],
    place: 'Кыргызстан, Бишкек'
  },
  {
    id: '6',
    marka: 'Mersedes',
    model: '500',
    priceDollar: 3000,
    lastView: '2',
    image: [mersMayBack, mers, mersMayBack],
    place: 'Кыргызстан, Бишкек'
  },
  {
    id: '7',
    marka: 'Mersedes',
    model: '3 I (BK) Рестайлинг',
    priceDollar: 3000,
    lastView: '2',
    image: [mers, mazda, nissan],
    place: 'Кыргызстан, Бишкек'
  },
  {
    id: '8',
    marka: 'Mersedes',
    model: '500',
    priceDollar: 3000,
    lastView: '2',
    image: [mersMayBack, mers, mersMayBack],
    place: 'Кыргызстан, Бишкек'
  },
]

export const marks = [
  {
    id: 'audi',
    title: 'Audi',
    logo: audi
  },
  {
    id: 'bmw',
    title: 'BMW',
    logo: bmw
  },
  {
    id: 'lada',
    title: 'Lada',
    logo: lada
  },
  {
    id: 'cadillac',
    title: 'Cadillac',
    logo: cadillac
  },
  {
    id: 'audi1',
    title: 'Audi',
    logo: audi
  },
  {
    id: 'bmw1',
    title: 'BMW',
    logo: bmw
  },
  {
    id: 'lada1',
    title: 'Lada',
    logo: lada
  },
  {
    id: 'cadillac1',
    title: 'Cadillac',
    logo: cadillac
  }
]