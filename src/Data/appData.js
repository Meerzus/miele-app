import rocket from '../Images/SVGs/Rocket.svg'
import document from '../Images/SVGs/Document.svg'
import percent from '../Images/SVGs/Percent.svg'

import bannerImage from '../Images/MieleBanner.png'

const appData = [
    {
        'id': '1',
        'city': 'Msc',
        'phoneNumber': '79320100169',
        'bannerImage': bannerImage,
        'advantages': [
            {
                'icon': rocket,
                'name': 'СКОРОСТЬ РАБОТЫ',
                'description': 'Выезд за 1 час, ремонтируем в день выезда.',
            },
            {
                'icon': document,
                'name': 'ГАРАНТИЯ',
                'description': 'Даем гарантию на свои работы и запчасти до 24 месяцев.',
            },
            {
                'icon': percent,
                'name': 'СКИДКА',
                'description': 'Оставьте отзыв - получите скидку 5%!',
            },
        ],
        'appliances': [
            {
                'id': '1',
                'type': 'Холодильники',
                'image': '',
                'slug': 'remont-holodilnikov-miele',
                'service': 'холодильников',
                'product_models': [
                    'KGN39IJ22R',
                    'KIN86HD20R',
                    'GIN81AE20R',
                    'GIN41AE20R',
                    'KGN49XW20R',
                    'KIL82AF30R',
                    'KAN93VL30R',
                    'KGV39XW22R',
                    'KGV36XL2AR',
                    'KGV39XL22R',
                ],
                'services': [
                    {
                        'service_name': 'Устранение утечки хладагента',
                        'service_price': '500'
                    },
                    {
                        'service_name': 'Замена фильтра осушителя',
                        'service_price': '400'
                    },
                    {
                        'service_name': 'Замена ТЭНа',
                        'service_price': '400'
                    },
                ],
                'examples': [
                    {
                        'name': 'Ремонт модуля управления',
                        'model': 'KIV38X22RU',
                        'image': '',
                    },
                    {
                        'name': 'Замена ТЭНа',
                        'model': 'KGN39IJ22R',
                        'image': '',
                    },
                    {
                        'name': 'Замена компрессора',
                        'model': 'KAN93VL30R',
                        'image': '',
                    },
                ],
                'faq': [
                    {
                        'question': 'Не запускает стирку стиральная машинка, что делать?',
                        'answer': 'Причин этому множество, самые частые – сломана кнопка пуска, неисправна вилка и/или шнур питания, поломка УБЛ (устройство блокировки люка). Обратитесь к нам и мы сделаем вашу стиральную машинку как новую! 🙂'
                    },
                    {
                        'question': 'Не сливается вода и гудит , в чем проблема?',
                        'answer': 'Это самая распространённая причина, при которой не работает слив. Засор сливной системы может проявляться разными способами. Например, засорился фильтр слива, потому что его давно не чистили. Ещё засор может образоваться в сливном патрубке, из-за того, что в последнем набилось много ниток (шерсти, пуха от подушек) или инородных предметов.'
                    },
                    {
                        'question': 'Не нагревается вода на стиральной машинке Bosch WLG 20260 ',
                        'answer': 'В 99% случаев проблема в ТЭНе. Самый достоверный признак, дающий понять что вода не нагреется – это код ошибки. Для стиральных машин Bosch серии Logixx – ошибка F19. Для Bosch Maxx 4 – это «ГРО», где Г – готовность (вкл.), Р – работа (вкл.), О – окончание стирки (откл.). Ошибки могут различаться, в зависимости от конкретной модели СМ.'
                    },
                ],
                'err_codes': [
                    {
                        'code': 'F01',
                        'description': 'Плотнее закройте дверцу – Проверьте нет ли посторонних предметов между дверцой и манжетой.'
                    },
                    {
                        'code': 'F02',
                        'description': 'Не набирается вода – Проверьте, есть ли вода в водопроводе. Промойте заливной шланг и проверьте фильтр на наличие засора. Возможные поломки: Заливной клапан, датчик уровня воды. Электронный модуль.'
                    },
                    {
                        'code': 'F03',
                        'description': 'Не сливается вода – Прочистите сливной фильтр. Прочистите сливной шланг. Возможные поломки: Помпа для откачки воды. Электронная плата, реле управления.'
                    },
                ],
            },
            {
                'id': '2',
                'type': 'Стиральные машины',
                'image': '',
                'slug': 'remont-stiralnyh-mashin-miele',
                'service': 'стиральных машин',
                'product_models': [
                    'WHA222XEOE',
                    'WDU28590OE',
                    'WAT286H2OE',
                    'WIW24340OE',
                    'WAT20441OE',
                    'WLG 20060',
                    'WLG 20061',
                    'WLG 20160',
                    'WLG 20162',
                    'WLG 20165',
                ],
                'services': [
                    {
                        'service_name': 'Извлечение посторонних предметов из бака',
                        'service_price': '500'
                    },
                    {
                        'service_name': 'Устранение засора',
                        'service_price': '400'
                    },
                    {
                        'service_name': 'Поиск и устранение течей',
                        'service_price': '500'
                    },
                ],
                'examples': [
                    {
                        'name': 'Замена УБЛ (устройство блокировки люка)',
                        'model': 'WHA222XEOE',
                        'image': '',
                    },
                    {
                        'name': 'Замена подшипников',
                        'model': 'WLG 2026K',
                        'image': '',
                    },
                    {
                        'name': 'Ремонт модуля управления',
                        'model': 'WLG 2026E',
                        'image': '',
                    },
                ],
                'faq': [
                    {
                        'question': 'Почему не морозит холодильник?',
                        'answer': 'Если ваш холодильник Bosch не морозит, то причин может быть несколько: пришедший в негодность уплотнитель, неисправность вентилятора, забившееся дренажное отверстие или поломка датчика воздуха.'
                    },
                    {
                        'question': 'Не работает морозилка в холодильнике Bosch KIV38X20RU',
                        'answer': 'Нужно проверять исправность терморегулятора, клапана переключения, компрессора, наличие утечки фреона. Для определения точной причины неисправности вызывайте мастера.'
                    },
                    {
                        'question': 'Не работает морозильная камера, но в то же время работает холодильная. В чем может быть проблема?',
                        'answer': 'Могли выйти из строя датчик температуры морозильной камеры, клапан переключения, компрессор, появиться засор капиллярной системы или утечка фреона. Для определения точной причины неисправности и стоимости ремонта вызывайте мастера.'
                    },
                ],
                'err_codes': [
                    {
                        'code': 'Надпись LOCK',
                        'description': 'Включена блокировка на изменение каких-либо настроек – Данная функция предотвращает случайные нажатия на кнопки холодильника в момент Вашего отсутствия. Чтобы снять блокировку, необходимо прочитать инструкцию к модели Вашего холодильника.'
                    },
                    {
                        'code': 'Горит кнопка “+”',
                        'description': 'Температура внутри холодильника повышается без каких-либо причин – Проверьте холодильник на утечку холода из под дверцы. Возможно датчик температуры вышел из строя и требуется ремонт.'
                    },
                    {
                        'code': 'Надпись ALL / AU',
                        'description': 'Системное предупреждение – В морозильной камере повышенная температура. Необходимо вмешательство специалиста.'
                    },
                ],
            },
            {
                'id': '3',
                'type': 'Посудомоечные машины',
                'image': '',
                'slug': 'remont-posudomoechnyh-mashin-miele',
                'service': 'посудомоечных машин',
                'product_models': [
                    'SMS45DW10Q',
                    'SMS43D08ME',
                    'SMS23BW01T',
                    'SMS6HMW28Q',
                    'SMS43D02ME',
                    'SBH 4HCX11R',
                    'SHH 4HCX48E',
                    'SHH 4HCX11R',
                    'SKE 52M55',
                    'SKE 53M15',
                ],
                'services': [
                    {
                        'service_name': 'Чистка разбрызгивателя',
                        'service_price': '800'
                    },
                    {
                        'service_name': 'Ремонт/замена дозатора моющего средства',
                        'service_price': '1100'
                    },
                    {
                        'service_name': 'Регулировка прессостата',
                        'service_price': '1000'
                    },
                ],
                'examples': [
                    {
                        'name': 'Прошивка',
                        'model': 'SMS45DW10Q',
                        'image': '',
                    },
                    {
                        'name': 'Очистка фильтров системы',
                        'model': 'SMA 46MX01E',
                        'image': '',
                    },
                    {
                        'name': 'Восстановление насоса',
                        'model': 'SBI 65N95EU',
                        'image': '',
                    },
                ],
                'faq': [
                    {
                        'question': 'Посудомоечная машина плохо моет',
                        'answer': 'Дело может быть в крыльчатке. Крыльчатка – это элемент, за счет которого происходит вращение разбрызгивателей. Если она плохо работает, то вода распределяется неравномерно и посуда плохо промывается.'
                    },
                    {
                        'question': 'Не набирается вода при запуске, почему?',
                        'answer': 'Основная причина, вызывающая такую проблему – неисправный датчик уровня воды и впускной клапан. По своему строению, посудомоечные машины Bosch очень схожи со стиральными машинами. Поэтому неисправность датчика уровня воды или заливного клапана может вызвать определенные проблемы с заливом воды и мытьём посуды. Также сигнализировать о поломке может ошибка E3.'
                    },
                    {
                        'question': 'Посудомойка не сливает воду, в чем проблема?',
                        'answer': 'Сливная система состоит из сливного насоса, сливного шланга, фильтра-сетки, сливного фильтра, сливного патрубка. Если на одном из этих участков возникнет проблема, то вода сливаться не будет. Например, засор сливного фильтра, забивание фильтра-сетки, неисправность ротора помпы – всё это приводит к тому, что вода не сливается.'
                    },
                ],
                'err_codes': [
                    {
                        'code': 'Мигают все индикаторы',
                        'description': 'Ошибка программного обеспечения – Сбой в системном ПО посудомойки или неисправен модуль управления. Если перезагрузка ППМ не помогла, надо вызывать специалиста для диагностики.'
                    },
                    {
                        'code': 'E01',
                        'description': 'Мигает – Неисправен главный блок управления посудомойки. Для начала проверьте напряжение в электросети: если оно явно слишком низкое или высокое, вызовите электрика. Проверьте провода, ведущие к электронным платам на предмет обрыва или короткого замыкания, убедитесь, что все разъемы на платах плотно стоят в гнездах. Увы, что-то случилось в электронике: без специалиста уже вам не обойтись'
                    },
                    {
                        'code': 'E1 / F1',
                        'description': 'Не включается нагрев из-за ошибки датчика или электроники – Неисправен один из датчиков – термодатчик (термистор) или датчик уровня воды (прессостат) – диагностика и замена. В бак залилось слишком много воды (например, из-за неисправного датчика уровня). Неправильно работает температурный датчик (термостат): замена. Обрыв в цепи управления ТЭНом: прозвонить цепь, подтянуть контакты и починить проводку. Замыкание в цепи ТЭНа, утечка на корпус. Сгорел нагреватель: его только менять. Проблемы с управляющим контроллером: придется менять – звоните в мастерскую'
                    },
                ],
            }
        ],
        'team': [
            {
                'id': '1',
                'name': 'Григорий',
                'photo': '',
                'position': 'Сервисный инженер'
            },
            {
                'id': '2',
                'name': 'Константин',
                'photo': '',
                'position': 'Старший мастер'
            },
            {
                'id': '3',
                'name': 'Семен',
                'photo': '',
                'position': 'Мастер'
            },
        ],
        'reviews': [
            {
                'name': 'Светлана',
                'rating': '4.5',
                'day': '1 января',
                'year': '2023',
                'review': 'Спасибо большое за услугу в такой день!! Мастер приехал вежливый, сразу согласовали услуги по ремонту холодильника. Выполнил работу профессионально и опрятно. Спасибо еще раз за ремонт в канун нового года!',
            },
            {
                'name': 'Алиша',
                'rating': '5',
                'day': '2 февраля',
                'year': '2023',
                'review': 'Волшебный мастер. Быстро приехал, поменял плату в холодильнике, предварительно приговорив её на диагностике. Работу выполнил аккуратно и качественно. После работы оставил чистоту! Советую!',
            },
            {
                'name': 'София',
                'rating': '3.5',
                'day': '3 марта',
                'year': '2023',
                'review': 'Отличный добрый и отзывчивый сервис. Мастера золотые руки. Умеют всё. Выехали в день заказа. Работу сделали под ключ дома. Рекомендую!',
            },
        ]
    }
]


export default appData