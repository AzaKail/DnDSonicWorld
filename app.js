/* ============================================================
   EGGMAN NETWORK — data.js + app logic
   Author record: Dr. Starline
   Чату жпт руки(или что там у него) целовал за крутые описания
   ============================================================ */

// ===================== ДАННЫЕ  =====================

const SUBRACES = {
  hedgehog: {
    id: 'hedgehog',
    icon: '🦔',
    name: 'HEDGEHOG',
    category: 'ПОДВИД',
    quote: 'Скоростные, острые, непредсказуемые. Наиболее сложны для точного отслеживания в бою. Игольчатая структура делает стандартный физический контакт нежелательным.',
    tabs: ['Обзор', 'Черты', 'Примечания'],
    panels: {
      'Обзор': `
        <div class="sec-title">// БИОЛОГИЧЕСКИЙ ПРОФИЛЬ //</div>
        <div class="data-row"><div class="dk">ПОДВИД</div><div class="dv hi">Hedgehog</div></div>
        <div class="data-row"><div class="dk">КЛЮЧЕВАЯ ЧЕРТА</div><div class="dv">Игольчатая структура тела</div></div>
        <div class="data-row"><div class="dk">СКОРОСТЬ</div><div class="dv hi">ПОВЫШЕННАЯ</div></div>
        <div class="data-row"><div class="dk">ВЫЖИВАЕМОСТЬ</div><div class="dv">Средняя</div></div>
        <div class="data-row"><div class="dk">ДОСТУП К SPIN DASH</div><div class="dv grn">ДА</div></div>
        <div class="data-row"><div class="dk">БОНУС SPIN DASH</div><div class="dv hi">+ 1d4 урона (иглы)</div></div>
        <div class="annotation">Наиболее известный из подвидов — именно по этому экземпляру задокументировано большинство боевых паттернов. Скорость делает прямое столкновение нецелесообразным. Рекомендованная тактика: ловушки и ограничение пространства.</div>
      `,
      'Черты': `
        <div class="sec-title">// РАСОВЫЕ ЧЕРТЫ //</div>
        <div class="ability-block">
          <div class="ability-name">ПОВЫШЕННАЯ СКОРОСТЬ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Базовая скорость передвижения выше стандартной. Мобиан-ёж всегда действует первым при равных значениях инициативы.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ИГОЛЬЧАТАЯ СТРУКТУРА</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">При использовании <strong>Spin Dash</strong> игольчатое тело добавляет <strong>+1d4 урона</strong> к базовому результату столкновения. Существа, атакующие ежа безоружно, получают <strong>1 урона пронзанием</strong>.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">РЕФЛЕКС СВЁРТЫВАНИЯ</div>
          <div class="ability-type">РЕАКЦИЯ</div>
          <div class="ability-text">Один раз между отдыхами: при получении урона можно мгновенно свернуться, снизив входящий урон вдвое. Не работает против магии и взрывов.</div>
        </div>
      `,
      'Примечания': `
        <div class="sec-title">// АНАЛИТИЧЕСКИЕ ЗАПИСИ //</div>
        <div class="ability-block">
          <div class="ability-name">НАБЛЮДЕНИЕ #1</div>
          <div class="ability-text">Особи с повышенной совместимостью с Chaos-энергией встречаются среди ежей значительно чаще, чем в других подвидах. Связь физиологии с резонансом изумрудов — под исследованием.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">НАБЛЮДЕНИЕ #2</div>
          <div class="ability-text">Скоростной потенциал в Super Form у ежей превышает расчётные модели. Текущие данные не поддаются стандартной формализации.</div>
        </div>
        <div class="annotation">Приоритет мониторинга — ВЫСОКИЙ. Субъекты данного подвида исторически являлись наибольшим препятствием для оперативных планов Сети. Нейтрализация требует нестандартных подходов.</div>
      `
    }
  },

  echidna: {
    id: 'echidna',
    icon: '🦎',
    name: 'ECHIDNA',
    category: 'ПОДВИД',
    quote: 'Древняя линия. Физиология, изменённая веками воздействия Chaos-энергии. Среди всех подвидов — наиболее связаны с изумрудами на молекулярном уровне.',
    tabs: ['Обзор', 'Черты', 'Примечания'],
    panels: {
      'Обзор': `
        <div class="sec-title">// БИОЛОГИЧЕСКИЙ ПРОФИЛЬ //</div>
        <div class="data-row"><div class="dk">ПОДВИД</div><div class="dv hi">Echidna</div></div>
        <div class="data-row"><div class="dk">ПРОДОЛЖИТЕЛЬНОСТЬ ЖИЗНИ</div><div class="dv hi">~200 лет</div></div>
        <div class="data-row"><div class="dk">ФИЗИЧЕСКАЯ СИЛА</div><div class="dv hi">ВЫСОКАЯ</div></div>
        <div class="data-row"><div class="dk">ВЫНОСЛИВОСТЬ</div><div class="dv hi">ВЫСОКАЯ</div></div>
        <div class="data-row"><div class="dk">ЛАЗАНИЕ</div><div class="dv grn">ДА (любые поверхности)</div></div>
        <div class="data-row"><div class="dk">ПЛАНИРОВАНИЕ</div><div class="dv grn">ДА (ограниченное)</div></div>
        <div class="data-row"><div class="dk">ВОЗДЕЙСТВИЕ ИЗУМРУДОВ</div><div class="dv pur">Зафиксировано на физиологии</div></div>
        <div class="annotation">Субъекты эхидны уникальны по связи с источниками Chaos-энергии. Некоторые особи способны воспринимать местоположение изумрудов интуитивно. Это делает их стратегически значимыми — и потенциально опасными.</div>
      `,
      'Черты': `
        <div class="sec-title">// РАСОВЫЕ ЧЕРТЫ //</div>
        <div class="ability-block">
          <div class="ability-name">ЛАЗАНИЕ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Эхидна карабкается по любым поверхностям без проверки. Скорость лазания равна скорости движения.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ПЛАНИРОВАНИЕ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">При падении с высоты эхидна планирует, снижая скорость падения. Урон от падения уменьшается вдвое. При горизонтальном движении во время планирования можно сдвинуться на расстояние до скорости.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">КАМЕННЫЙ КУЛАК</div>
          <div class="ability-type">АТАКА</div>
          <div class="ability-text">Безоружные удары эхидны считаются <strong>1d6 дробящего</strong> урона. При попадании по неподвижному противнику добавляется <strong>+1d4</strong> (инерция).</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ДРЕВНЯЯ КРОВЬ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Эхидна имеет преимущество на спасброски против эффектов Chaos-энергии и её производных. Воздействие изумрудов на них предсказуемо.</div>
        </div>
      `,
      'Примечания': `
        <div class="sec-title">// АНАЛИТИЧЕСКИЕ ЗАПИСИ //</div>
        <div class="ability-block">
          <div class="ability-name">ИСТОРИЧЕСКИЙ КОНТЕКСТ</div>
          <div class="ability-text">Эхидны — хранители. Исторически назначались стражами артефактов и мест силы. Текущее снижение численности популяции — факт, требующий отдельного исследования.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ФИЗИОЛОГИЧЕСКАЯ АНОМАЛИЯ</div>
          <div class="ability-text">Длительное воздействие Master Emerald на конкретных особей фиксирует изменения в тканях — повышение плотности и нечувствительность к стандартным аномалиям Chaos-поля.</div>
        </div>
        <div class="annotation">Наиболее физически сильный подвид. Не самый быстрый — но не нужно ни того, ни другого, когда один удар пробивает броню. Рекомендую держать дистанцию.</div>
      `
    }
  },

  fox: {
    id: 'fox',
    icon: '🦊',
    name: 'FOX',
    category: 'ПОДВИД',
    quote: 'Интеллект — их оружие. Среди всех подвидов именно они способны адаптировать технологии быстрее, чем их можно нейтрализовать.',
    tabs: ['Обзор', 'Черты', 'Мутации'],
    panels: {
      'Обзор': `
        <div class="sec-title">// БИОЛОГИЧЕСКИЙ ПРОФИЛЬ //</div>
        <div class="data-row"><div class="dk">ПОДВИД</div><div class="dv hi">Fox</div></div>
        <div class="data-row"><div class="dk">ИНТЕЛЛЕКТ</div><div class="dv hi">РАЗВИТЫЙ</div></div>
        <div class="data-row"><div class="dk">СКЛОННОСТЬ</div><div class="dv">Инженерия и технологии</div></div>
        <div class="data-row"><div class="dk">МУТАЦИИ</div><div class="dv pur">Возможны (редко)</div></div>
        <div class="data-row"><div class="dk">БОЕВОЙ ПРОФИЛЬ</div><div class="dv">Техник / Поддержка / Стрелок</div></div>
        <div class="annotation">Лисы — наиболее технически одарённый подвид. Субъект с двумя хвостами является задокументированным примером мутации с практической ценностью. Наблюдение: они учатся быстрее, чем мои системы успевают обновить протоколы защиты.</div>
      `,
      'Черты': `
        <div class="sec-title">// РАСОВЫЕ ЧЕРТЫ //</div>
        <div class="ability-block">
          <div class="ability-name">ТЕХНИЧЕСКИЙ ИНТЕЛЛЕКТ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Преимущество на проверки Интеллекта при работе с механизмами, электроникой и устройствами. При использовании инструментов техника может перебросить один провальный результат.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ИМПРОВИЗАЦИЯ</div>
          <div class="ability-type">ДЕЙСТВИЕ</div>
          <div class="ability-text">Лис может собрать примитивное устройство из подручных материалов (1 раз между отдыхами). Эффект определяется мастером игры, но всегда логически обоснован имеющимися компонентами.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">АНАЛИЗ</div>
          <div class="ability-type">БОНУСНОЕ ДЕЙСТВИЕ</div>
          <div class="ability-text">Один раз за бой: лис анализирует паттерн атак врага. До конца своего следующего хода имеет преимущество на защиту от атак этого существа.</div>
        </div>
      `,
      'Мутации': `
        <div class="sec-title">// МУТАЦИИ ПОДВИДА //</div>
        <div class="ability-block">
          <div class="ability-name">ДВОЙНОЙ ХВОСТ</div>
          <div class="ability-type">РЕДКАЯ МУТАЦИЯ</div>
          <div class="ability-text">Лис с двумя хвостами получает способность к <strong>ограниченному полёту</strong>: вращение хвостов создаёт подъёмную силу. Скорость полёта = скорости передвижения. Дополнительные хвосты можно использовать как балансир — преимущество на акробатику.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ДРУГИЕ МУТАЦИИ</div>
          <div class="ability-type">ПО СОГЛАСОВАНИЮ</div>
          <div class="ability-text">Мутации не являются обязательной частью системы. Наличие, эффект и механика определяются совместно с мастером. Мутации всегда биологически обоснованы.</div>
        </div>
        <div class="annotation">Мутации у лисов — не аномалия, а закономерность. Частота выше средней по популяции. Механизм возникновения неясен. Возможно, связан с интеллектуальной активностью как катализатором адаптации.</div>
      `
    }
  },

  cat: {
    id: 'cat',
    icon: '🐱',
    name: 'CAT',
    category: 'ПОДВИД',
    quote: 'Адаптивность — не черта, а образ мышления. Кошки не следуют правилам — они их переосмысляют.',
    tabs: ['Обзор', 'Черты'],
    panels: {
      'Обзор': `
        <div class="sec-title">// БИОЛОГИЧЕСКИЙ ПРОФИЛЬ //</div>
        <div class="data-row"><div class="dk">ПОДВИД</div><div class="dv hi">Cat</div></div>
        <div class="data-row"><div class="dk">РЕАКЦИЯ</div><div class="dv hi">ВЫСОКАЯ</div></div>
        <div class="data-row"><div class="dk">ПОВЕДЕНИЕ</div><div class="dv">Адаптивное, непредсказуемое</div></div>
        <div class="data-row"><div class="dk">БОЕВОЙ СТИЛЬ</div><div class="dv">Ловкость, уклонение, оппортунизм</div></div>
        <div class="annotation">Кошки непредсказуемы в бою — именно это и делает их опасными. Поведение не поддаётся стандартной модели угрозы. Расчёт паттернов затруднён.</div>
      `,
      'Черты': `
        <div class="sec-title">// РАСОВЫЕ ЧЕРТЫ //</div>
        <div class="ability-block">
          <div class="ability-name">РЕФЛЕКТОРНЫЙ УКЛОН</div>
          <div class="ability-type">РЕАКЦИЯ</div>
          <div class="ability-text">Один раз в ход: при промахе атаки по кошке она может сразу переместиться на 5 футов без затрат скорости передвижения.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ДЕВЯТЬ ЖИЗНЕЙ</div>
          <div class="ability-type">ПАССИВНО / ЛЕГЕНДАРНО</div>
          <div class="ability-text">Один раз за сессию: когда кошка должна была упасть до 0 HP, она остаётся на 1 HP. Это умение восстанавливается только между сессиями.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">МЯГКОЕ ПРИЗЕМЛЕНИЕ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Кошка не получает урона от падения при высоте до 10 метров. С большей высоты — урон снижен вдвое.</div>
        </div>
      `
    }
  },

  crocodile: {
    id: 'crocodile',
    icon: '🐊',
    name: 'CROCODILE',
    category: 'ПОДВИД',
    quote: 'Не самый быстрый. Не самый умный. Но когда он стоит между тобой и целью — у тебя закончились варианты.',
    tabs: ['Обзор', 'Черты'],
    panels: {
      'Обзор': `
        <div class="sec-title">// БИОЛОГИЧЕСКИЙ ПРОФИЛЬ //</div>
        <div class="data-row"><div class="dk">ПОДВИД</div><div class="dv hi">Crocodile</div></div>
        <div class="data-row"><div class="dk">ПРОЧНОСТЬ</div><div class="dv hi">ВЫСОКАЯ</div></div>
        <div class="data-row"><div class="dk">ЗАПАС HP</div><div class="dv hi">УВЕЛИЧЕН</div></div>
        <div class="data-row"><div class="dk">СКОРОСТЬ</div><div class="dv red">СНИЖЕНА</div></div>
        <div class="data-row"><div class="dk">БОЕВОЙ СТИЛЬ</div><div class="dv">Танк / Ближний бой / Захваты</div></div>
        <div class="annotation">Прочные. Медленные. Если дать крокодилу приблизиться к цели — цель перестаёт быть проблемой. Именно это меня в них и беспокоит.</div>
      `,
      'Черты': `
        <div class="sec-title">// РАСОВЫЕ ЧЕРТЫ //</div>
        <div class="ability-block">
          <div class="ability-name">БРОНИРОВАННАЯ ШКУРА</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Крокодил получает <strong>+2 КЗ</strong> без учёта брони (не складывается с тяжёлой бронёй). Кожа считается натуральной бронёй.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">СТАЛЬНАЯ ХВАТКА</div>
          <div class="ability-type">АТАКА</div>
          <div class="ability-text">При успешном захвате противник получает помеху на попытки освобождения. Крокодил может удерживать существо своего размера или меньше.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ЖИВУЧЕСТЬ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Максимум HP увеличен на <strong>2 × уровень</strong>. При получении лечения крокодил восстанавливает на 1d4 больше.</div>
        </div>
      `
    }
  },

  chameleon: {
    id: 'chameleon',
    icon: '🦎',
    name: 'CHAMELEON',
    category: 'ПОДВИД',
    quote: 'Они везде. И нигде. Самый сложный подвид для систематического наблюдения — именно потому, что они это знают.',
    tabs: ['Обзор', 'Черты'],
    panels: {
      'Обзор': `
        <div class="sec-title">// БИОЛОГИЧЕСКИЙ ПРОФИЛЬ //</div>
        <div class="data-row"><div class="dk">ПОДВИД</div><div class="dv hi">Chameleon</div></div>
        <div class="data-row"><div class="dk">МАСКИРОВКА</div><div class="dv hi">АКТИВНАЯ</div></div>
        <div class="data-row"><div class="dk">ВИЗУАЛЬНАЯ АДАПТАЦИЯ</div><div class="dv grn">ДА</div></div>
        <div class="data-row"><div class="dk">БОЕВОЙ СТИЛЬ</div><div class="dv">Скрытность, засада, разведка</div></div>
        <div class="annotation">Наименее изученный подвид в базе данных. Причина очевидна — они не хотят быть изученными. Примечание: мои камеры дважды фиксировали артефакты — вероятно, это были они.</div>
      `,
      'Черты': `
        <div class="sec-title">// РАСОВЫЕ ЧЕРТЫ //</div>
        <div class="ability-block">
          <div class="ability-name">ХАМЕЛЕОН</div>
          <div class="ability-type">ДЕЙСТВИЕ</div>
          <div class="ability-text">Хамелеон может слиться с окружением — становится <strong>невидимым</strong>, пока остаётся неподвижным или двигается не быстрее половины скорости. Невидимость снимается при атаке или применении способностей.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ТИХИЙ ШАГ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Проверки скрытности совершаются с преимуществом вне зависимости от освещения. При провале проверки можно попытаться снова (один раз).</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ЗАСАДНАЯ АТАКА</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Атаки из состояния невидимости наносят <strong>дополнительно 1d6</strong> урона. Цель считается застигнутой врасплох до конца первого раунда.</div>
        </div>
      `
    }
  },

  bee: {
    id: 'bee',
    icon: '🐝',
    name: 'BEE',
    category: 'ПОДВИД',
    quote: 'Летают. Жалят. Погибают первыми. Вся концепция этого подвида — эффективность ценой долговечности.',
    tabs: ['Обзор', 'Черты'],
    panels: {
      'Обзор': `
        <div class="sec-title">// БИОЛОГИЧЕСКИЙ ПРОФИЛЬ //</div>
        <div class="data-row"><div class="dk">ПОДВИД</div><div class="dv hi">Bee</div></div>
        <div class="data-row"><div class="dk">ПОЛЁТ</div><div class="dv grn">ДА (активный)</div></div>
        <div class="data-row"><div class="dk">ВЫЖИВАЕМОСТЬ</div><div class="dv red">НИЗКАЯ</div></div>
        <div class="data-row"><div class="dk">МОБИЛЬНОСТЬ</div><div class="dv hi">ВЫСОКАЯ</div></div>
        <div class="data-row"><div class="dk">БОЕВОЙ СТИЛЬ</div><div class="dv">Воздушный бой, манёвренность</div></div>
        <div class="annotation">Высокий риск потери субъекта в первые раунды боя. Полёт компенсирует хрупкость лишь при грамотном позиционировании. Рекомендация: не ставить пчёл на передовую.</div>
      `,
      'Черты': `
        <div class="sec-title">// РАСОВЫЕ ЧЕРТЫ //</div>
        <div class="ability-block">
          <div class="ability-name">ПОЛЁТ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Скорость полёта равна скорости передвижения. Пчела может зависать на месте. При ношении тяжёлой брони — полёт недоступен.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ЖАЛО</div>
          <div class="ability-type">АТАКА</div>
          <div class="ability-text">Пчела может атаковать жалом (1d4 колющего + яд: спасбросок Телосложения СЛ 12 или <strong>1d6 урона ядом</strong>). После применения жало требует 1 короткого отдыха для восстановления.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ВОЗДУШНОЕ ПРЕВОСХОДСТВО</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">Атаки по наземным целям с позиции полёта совершаются с преимуществом. Атаки против пчелы с земли — с помехой.</div>
        </div>
      `
    }
  }
};

const CLASSES = {
  warrior: {
    id: 'warrior',
    icon: '⚔️',
    name: 'WARRIOR',
    category: 'КЛАСС',
    quote: 'Мастера всех форм физического боя. Воин не выбирает один путь — он владеет всеми, и выбирает нужный в нужный момент.',
    tabs: ['Профиль', 'Таблица уровней', 'Архетипы', 'Умения'],
    panels: {
      'Профиль': `
        <div class="sec-title">// КЛАСС: WARRIOR //</div>
        <div class="data-row"><div class="dk">ТИП</div><div class="dv hi">Физически ориентированный боец</div></div>
        <div class="data-row"><div class="dk">КОСТЬ HIT DIE</div><div class="dv hi">d10</div></div>
        <div class="data-row"><div class="dk">ОСНОВНЫЕ ХАРАКТ.</div><div class="dv"><span class="tag amber">СИЛ</span><span class="tag amber">ТЕЛ</span><span class="tag amber">ЛОВ</span></div></div>
        <div class="data-row"><div class="dk">ВЛАДЕНИЕ: БРОНЯ</div><div class="dv">Все виды брони и щиты</div></div>
        <div class="data-row"><div class="dk">ВЛАДЕНИЕ: ОРУЖИЕ</div><div class="dv">Простое и воинское оружие</div></div>
        <div class="data-row"><div class="dk">СПАСБРОСКИ</div><div class="dv"><span class="tag amber">СИЛ</span><span class="tag amber">ТЕЛ</span></div></div>
        <div class="data-row"><div class="dk">НАВЫКИ</div><div class="dv">2 из: Атлетика, Акробатика, Запугивание, История, Восприятие, Выживание</div></div>
        <br>
        <div class="sec-title">// АРХЕТИПЫ //</div>
        <div class="card-grid">
          <div class="card">
            <div class="card-name">СИЛОВОЙ</div>
            <div class="card-desc">Максимальный урон. Тяжёлое оружие, разрушительные атаки. Каждый удар — решение.</div>
          </div>
          <div class="card">
            <div class="card-name">ЛОВКИЙ</div>
            <div class="card-desc">Скорость и уклонение. Финты, множественные атаки, контратаки. Скользкий как ртуть.</div>
          </div>
          <div class="card">
            <div class="card-name">ЗАЩИТНЫЙ</div>
            <div class="card-desc">Щит и броня. Контроль урона, защита союзников, удержание позиций.</div>
          </div>
        </div>
        <div class="annotation">Предсказуем — но это не слабость, это эффективность. В бою нет места творчеству. Воины это знают.</div>
      `,
      'Таблица уровней': `
        <div class="sec-title">// ПРОГРЕССИЯ WARRIOR //</div>
        <table class="level-table">
          <thead>
            <tr><th>УР.</th><th>БМ</th><th>УМЕНИЯ</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td class="dv grn">+2</td><td>Боевой стиль, Второе дыхание</td></tr>
            <tr><td>2</td><td class="dv grn">+2</td><td>Всплеск действий (1×)</td></tr>
            <tr><td>3</td><td class="dv grn">+2</td><td><span class="feat">Воинский архетип</span></td></tr>
            <tr><td>4</td><td class="dv grn">+2</td><td>Увеличение характеристик, Универсальность</td></tr>
            <tr><td>5</td><td class="dv hi">+3</td><td>Дополнительная атака</td></tr>
            <tr><td>6</td><td class="dv hi">+3</td><td>Увеличение характеристик</td></tr>
            <tr><td>7</td><td class="dv hi">+3</td><td>Умение архетипа</td></tr>
            <tr><td>8</td><td class="dv hi">+3</td><td>Увеличение характеристик</td></tr>
            <tr><td>9</td><td class="dv red">+4</td><td>Упорный (1×)</td></tr>
            <tr><td>10</td><td class="dv red">+4</td><td>Умение архетипа</td></tr>
            <tr><td>11</td><td class="dv red">+4</td><td>Дополнительная атака (2)</td></tr>
            <tr><td>12</td><td class="dv red">+4</td><td>Увеличение характеристик</td></tr>
            <tr><td>13</td><td>+5</td><td>Упорный (2×)</td></tr>
            <tr><td>14</td><td>+5</td><td>Увеличение характеристик</td></tr>
            <tr><td>15</td><td>+5</td><td>Умение архетипа</td></tr>
            <tr><td>16</td><td>+5</td><td>Увеличение характеристик</td></tr>
            <tr><td>17</td><td>+6</td><td>Всплеск действий (2×), Упорный (3×)</td></tr>
            <tr><td>18</td><td>+6</td><td>Умение архетипа</td></tr>
            <tr><td>19</td><td>+6</td><td>Увеличение характеристик</td></tr>
            <tr><td>20</td><td>+6</td><td>Дополнительная атака (3)</td></tr>
          </tbody>
        </table>
      `,
      'Архетипы': `
        <div class="sec-title">// ПОДРОБНО: АРХЕТИПЫ //</div>
        <div class="ability-block">
          <div class="ability-name">СИЛОВОЙ БОЕЦ</div>
          <div class="ability-type">АРХЕТИП</div>
          <div class="ability-text">Фокус на максимальном уроне. Доступны умения: <strong>Сокрушительный удар</strong> (перебросить одну кость урона), <strong>Пронзание</strong> (игнорировать КЗ цели частично), <strong>Великий замах</strong> (атака по нескольким целям в зоне).</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ЛОВКИЙ БОЕЦ</div>
          <div class="ability-type">АРХЕТИП</div>
          <div class="ability-text">Скорость и уклонение. Умения: <strong>Финт</strong> (помеха врагу как бонусное действие), <strong>Скользкий противник</strong> (уклонение от атаки реакцией), <strong>Стремительность</strong> (+2 атаки за Всплеск).</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ЗАЩИТНИК</div>
          <div class="ability-type">АРХЕТИП</div>
          <div class="ability-text">Щит и союзники. Умения: <strong>Прикрытие</strong> (перенять атаку на союзника реакцией), <strong>Крепость</strong> (+2 КЗ при использовании щита), <strong>Вдохновляющий лидер</strong> (временные HP союзникам).</div>
        </div>
      `,
      'Умения': `
        <div class="sec-title">// БАЗОВЫЕ УМЕНИЯ //</div>
        <div class="ability-block">
          <div class="ability-name">ВТОРОЕ ДЫХАНИЕ</div>
          <div class="ability-type">БОНУСНОЕ ДЕЙСТВИЕ • 1× SHORT REST</div>
          <div class="ability-text">Воин восстанавливает <strong>1d10 + уровень</strong> HP. Лимит восстанавливается при короткого отдыхе.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ВСПЛЕСК ДЕЙСТВИЙ</div>
          <div class="ability-type">ДЕЙСТВИЕ • 1× SHORT REST (→ 2× на 17 уровне)</div>
          <div class="ability-text">Воин немедленно совершает одно дополнительное действие (не бонусное). Можно использовать для дополнительной атаки, спринта, использования предмета и т.д.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">УПОРНЫЙ</div>
          <div class="ability-type">РЕАКЦИЯ • 1× LONG REST (→ 3× на 17 уровне)</div>
          <div class="ability-text">При провале спасброска воин может перебросить его. Результат перебросанного обязателен.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">БОЕВОЙ СТИЛЬ</div>
          <div class="ability-type">ПАССИВНО • ВЫБИРАЕТСЯ НА 1 УРОВНЕ</div>
          <div class="ability-text">Воин выбирает один стиль: <strong>Стрельба</strong> (+2 к дальним атакам), <strong>Защита</strong> (+1 КЗ с щитом), <strong>Дуэлянт</strong> (+2 урона с одноручным оружием без второго), <strong>Великое оружие</strong> (перебросить 1-2 на кости урона).</div>
        </div>
      `
    }
  },

  specialist: {
    id: 'specialist',
    icon: '🔧',
    name: 'SPECIALIST',
    category: 'КЛАСС',
    quote: 'Они разбирают проблему на компоненты и решают каждый по отдельности. Расстояние — их союзник. Технология — их язык.',
    tabs: ['Профиль', 'Варианты', 'Умения'],
    panels: {
      'Профиль': `
        <div class="sec-title">// КЛАСС: SPECIALIST //</div>
        <div class="data-row"><div class="dk">ТИП</div><div class="dv hi">Техник / Стрелок</div></div>
        <div class="data-row"><div class="dk">КОСТЬ HIT DIE</div><div class="dv hi">d8</div></div>
        <div class="data-row"><div class="dk">ОСНОВНЫЕ ХАРАКТ.</div><div class="dv"><span class="tag amber">ИНТ</span><span class="tag amber">ЛОВ</span></div></div>
        <div class="data-row"><div class="dk">БРОНЯ</div><div class="dv">Лёгкая и средняя броня</div></div>
        <div class="data-row"><div class="dk">ОРУЖИЕ</div><div class="dv">Простое + стрелковое воинское</div></div>
        <div class="data-row"><div class="dk">СПАСБРОСКИ</div><div class="dv"><span class="tag amber">ИНТ</span><span class="tag amber">ЛОВ</span></div></div>
        <div class="annotation">Технический вариант этого класса представляет для меня наибольший интерес — и наибольшую угрозу. Субъект, способный взломать мои системы изнутри, не должен дожить до этой попытки.</div>
      `,
      'Варианты': `
        <div class="sec-title">// ПУТЬ ТЕХНИКА //</div>
        <div class="ability-block">
          <div class="ability-name">ТЕХНИК</div>
          <div class="ability-type">СПЕЦИАЛИЗАЦИЯ</div>
          <div class="ability-text">Фокус на создании, ремонте и взломе устройств. Получает инструменты взломщика и механика. Умения: <strong>Быстрый ремонт</strong>, <strong>Взлом систем</strong>, <strong>Создание гаджетов</strong>.</div>
        </div>
        <div class="sec-title">// ПУТЬ СТРЕЛКА //</div>
        <div class="ability-block">
          <div class="ability-name">СТРЕЛОК</div>
          <div class="ability-type">СПЕЦИАЛИЗАЦИЯ</div>
          <div class="ability-text">Дальний бой и точность. Умения: <strong>Прицельный выстрел</strong> (бонус к урону при атаке без движения), <strong>Двойной выстрел</strong>, <strong>Снайперская позиция</strong>.</div>
        </div>
        <div class="sec-title">// ОБЩИЕ УМЕНИЯ //</div>
        <div class="ability-block">
          <div class="ability-name">АНАЛИЗ СЛАБОСТЕЙ</div>
          <div class="ability-type">БОНУСНОЕ ДЕЙСТВИЕ</div>
          <div class="ability-text">Специалист изучает цель. Следующая атака по ней наносит дополнительно <strong>1d6 урона</strong> и может игнорировать сопротивление.</div>
        </div>
      `,
      'Умения': `
        <div class="sec-title">// УМЕНИЯ ТЕХНИКА //</div>
        <div class="ability-block">
          <div class="ability-name">БЫСТРЫЙ РЕМОНТ</div>
          <div class="ability-type">ДЕЙСТВИЕ • БОНУСНОЕ ДЕЙСТВИЕ С 5 УР.</div>
          <div class="ability-text">Техник восстанавливает <strong>1d6 + ИНТ</strong> HP механическому союзнику или чинит устройство. При наличии инструментов: + дополнительный эффект по ситуации.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ВЗЛОМ</div>
          <div class="ability-type">ДЕЙСТВИЕ</div>
          <div class="ability-text">При доступе к электронной/механической системе — техник может её взломать. Проверка Интеллекта (инструменты) против СЛ цели. Успех открывает доступ, деактивирует или перепрограммирует устройство.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ГАДЖЕТ</div>
          <div class="ability-type">ДЕЙСТВИЕ ПОДГОТОВКИ</div>
          <div class="ability-text">Из подручных материалов техник собирает устройство (1 раз между отдыхами): дымовая шашка, электромагнитный импульс, ловушка, или другое — по согласованию с мастером.</div>
        </div>
      `
    }
  },

  gaia: {
    id: 'gaia',
    icon: '🌿',
    name: 'CHILD OF GAIA',
    category: 'КЛАСС',
    quote: 'Они черпают силу из самого мира. Медленно. Постепенно. Неостановимо. Именно последнее — проблема.',
    tabs: ['Профиль', 'Прогрессия', 'Кольца', 'Умения'],
    panels: {
      'Профиль': `
        <div class="sec-title">// КЛАСС: CHILD OF GAIA //</div>
        <div class="data-row"><div class="dk">ТИП</div><div class="dv pur">Энергетический проводник</div></div>
        <div class="data-row"><div class="dk">КОСТЬ HIT DIE</div><div class="dv hi">d8</div></div>
        <div class="data-row"><div class="dk">РАННЯЯ ФАЗА</div><div class="dv red">Слабый старт</div></div>
        <div class="data-row"><div class="dk">ПОЗДНЯЯ ФАЗА</div><div class="dv grn">Значительное усиление</div></div>
        <div class="data-row"><div class="dk">КОЛЬЦА</div><div class="dv pur">Расход ниже стандартного</div></div>
        <div class="annotation">Долгосрочно — самый опасный класс в системе. Их потенциал растёт нелинейно и плохо поддаётся моделированию. Приоритетная нейтрализация на ранних уровнях — единственный разумный подход.</div>
      `,
      'Прогрессия': `
        <div class="sec-title">// РОСТ СИЛЫ //</div>
        <div class="ability-block">
          <div class="ability-name">ФАЗА 1: ПРОБУЖДЕНИЕ (1-4 уровень)</div>
          <div class="ability-type">НАЧАЛЬНАЯ</div>
          <div class="ability-text">Child of Gaia ощущает связь с миром, но не умеет её использовать в полную силу. Базовые умения, минимальный эффект. Субъект уязвим.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ФАЗА 2: РЕЗОНАНС (5-10 уровень)</div>
          <div class="ability-type">АКТИВНАЯ</div>
          <div class="ability-text">Связь усиливается. Доступны активные умения на основе колец. Расход ресурсов снижается. Субъект становится значимой боевой единицей.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ФАЗА 3: ЕДИНСТВО (11+ уровень)</div>
          <div class="ability-type">КРИТИЧЕСКАЯ</div>
          <div class="ability-text">Граница между субъектом и энергией мира размывается. Возможности выходят за расчётные модели. <span style="color:var(--egg-red)">Нейтрализация крайне затруднена.</span></div>
        </div>
      `,
      'Кольца': `
        <div class="sec-title">// ВЗАИМОДЕЙСТВИЕ С КОЛЬЦАМИ //</div>
        <div class="data-row"><div class="dk">РАСХОД</div><div class="dv grn">НИЖЕ на 20-30%, чем у других классов</div></div>
        <div class="data-row"><div class="dk">ВОССТАНОВЛЕНИЕ</div><div class="dv hi">Пассивное (1 кольцо в ход при концентрации)</div></div>
        <div class="data-row"><div class="dk">ПОР. ЛЕЧЕНИЕ (20 колец)</div><div class="dv">1d20 вместо стандартного 1d10</div></div>
        <div class="data-row"><div class="dk">РЕЗОНАНС</div><div class="dv pur">Синергия с Chaos-энергией (усилена)</div></div>
        <div class="ability-block" style="margin-top:16px">
          <div class="ability-name">МИРОВОЙ ЩИТ</div>
          <div class="ability-type">РЕАКЦИЯ • 10 КОЛЕЦ</div>
          <div class="ability-text">При получении урона — потратить 10 колец для поглощения <strong>2d10 урона</strong>. Работает после броска урона.</div>
        </div>
      `,
      'Умения': `
        <div class="sec-title">// КЛАССОВЫЕ УМЕНИЯ //</div>
        <div class="ability-block">
          <div class="ability-name">КАНАЛ ГАИ</div>
          <div class="ability-type">ДЕЙСТВИЕ • 5 КОЛЕЦ</div>
          <div class="ability-text">Субъект выпускает волну энергии мира. Все враги в радиусе 6 м совершают спасбросок (СЛ 8 + уровень + мудрость) или получают <strong>2d6 силового</strong> урона и замедляются.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ЗЕМНАЯ СВЯЗЬ</div>
          <div class="ability-type">ПАССИВНО</div>
          <div class="ability-text">На природной поверхности (земля, трава, камень) Child of Gaia получает <strong>+2 к инициативе</strong> и не может быть застигнут врасплох.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">МИРОВОЙ РЕЗОНАНС</div>
          <div class="ability-type">ДЕЙСТВИЕ • 15 КОЛЕЦ • 1× LONG REST</div>
          <div class="ability-text">Полная синхронизация с миром на 1 минуту: преимущество на все броски, сопротивление всему урону, скорость +10. Кольца расходуются со скоростью 2 в раунд.</div>
        </div>
      `
    }
  },

  ancient: {
    id: 'ancient',
    icon: '🔥',
    name: 'ANCIENT BLOOD',
    category: 'КЛАСС',
    quote: 'Огонь. Молния. Вода. Природа даровала им то, что я вынужден воссоздавать технологией. Прискорбно.',
    tabs: ['Профиль', 'Стихии', 'Умения'],
    panels: {
      'Профиль': `
        <div class="sec-title">// КЛАСС: ANCIENT BLOOD //</div>
        <div class="data-row"><div class="dk">ТИП</div><div class="dv red">Врождённые аномальные способности</div></div>
        <div class="data-row"><div class="dk">КОСТЬ HIT DIE</div><div class="dv hi">d8</div></div>
        <div class="data-row"><div class="dk">СТИХИИ</div><div class="dv"><span class="tag red">ОГОНЬ</span><span class="tag amber">МОЛНИЯ</span><span class="tag green">ВОДА</span></div></div>
        <div class="data-row"><div class="dk">ИСТОЧНИК</div><div class="dv pur">Врождённый — не приобретённый</div></div>
        <div class="annotation">Три элементарных вектора. Система может быть расширена — это лишь первичная классификация. Стихийные аномалии потенциально являются активами при правильном управлении.</div>
      `,
      'Стихии': `
        <div class="sec-title">// ВЫБОР СТИХИИ //</div>
        <div class="ability-block">
          <div class="ability-name">🔥 ПИРОКИНЕТИКА</div>
          <div class="ability-type">ОГОНЬ</div>
          <div class="ability-text">Субъект рождён с огнём внутри. Атаки наносят дополнительно <strong>1d6 урона огнём</strong>. Иммунитет к обычному огню. Умение: <strong>Огненный взрыв</strong> — 3d6 в конусе (спасбросок ЛОВ, половина при успехе).</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">⚡ ЭЛЕКТРОКИНЕТИКА</div>
          <div class="ability-type">МОЛНИЯ</div>
          <div class="ability-text">Молния течёт через кровь. Атаки наносят дополнительно <strong>1d6 урона молнией</strong>. Иммунитет к параличу от электричества. Умение: <strong>Удар молнии</strong> — цепная молния до 3 целей (2d6 каждой).</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">🌊 ГИДРОКИНЕТИКА</div>
          <div class="ability-type">ВОДА</div>
          <div class="ability-text">Вода слушается. Атаки: дополнительно <strong>1d6 холодного</strong> урона. Дыхание под водой. Умение: <strong>Водная волна</strong> — сбить с ног существ в линии (спасбросок СИЛ или сбито с ног).</div>
        </div>
      `,
      'Умения': `
        <div class="sec-title">// СТИХИЙНЫЕ УМЕНИЯ //</div>
        <div class="ability-block">
          <div class="ability-name">СТИХИЙНЫЙ ЩИТ</div>
          <div class="ability-type">РЕАКЦИЯ • 1× SHORT REST</div>
          <div class="ability-text">При получении урона своей стихии — поглотить его полностью и восстановить <strong>1d6 HP</strong>. Перегрузка стихией питает субъекта, а не разрушает.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">ПРОБУЖДЕНИЕ КРОВИ</div>
          <div class="ability-type">БОНУСНОЕ ДЕЙСТВИЕ • 1× LONG REST</div>
          <div class="ability-text">На 1 минуту: все стихийные атаки наносят <strong>2d6</strong> вместо 1d6. Внешнее проявление стихии видимо окружающим — маскировка невозможна.</div>
        </div>
        <div class="ability-block">
          <div class="ability-name">КОНТРОЛЬ СТИХИИ</div>
          <div class="ability-type">ДЕЙСТВИЕ • 10 КОЛЕЦ</div>
          <div class="ability-text">Субъект может воздействовать на свою стихию в окружении: потушить пожар, вызвать дождь, создать электрический барьер. Эффект — по ситуации и согласованию.</div>
        </div>
      `
    }
  }
};

// ===================== APP =====================

let currentPath = ['INDEX'];

function updatePath(parts) {
  currentPath = parts;
  document.getElementById('tb-path-dyn').textContent = parts.join(' / ');
}

function updateClock() {
  const n = new Date();
  const p = v => String(v).padStart(2,'0');
  document.getElementById('tb-clock').textContent = `${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`;
}

function toggleFolder(id) {
  document.getElementById(id).classList.toggle('open');
}

function clearActive() {
  document.querySelectorAll('.file-item, .folder-hd').forEach(el => el.classList.remove('active'));
}

function showHome(el) {
  clearActive();
  if (el) el.classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-home').classList.add('active');
  updatePath(['INDEX']);
}

function showSubrace(id, triggerEl) {
  const data = SUBRACES[id];
  if (!data) return;
  clearActive();
  if (triggerEl) triggerEl.classList.add('active');

  buildPageView(data);
  updatePath(['РАСА', 'ПОДВИДЫ', data.name]);
}

function showClass(id, triggerEl) {
  const data = CLASSES[id];
  if (!data) return;
  clearActive();
  if (triggerEl) triggerEl.classList.add('active');

  buildPageView(data);
  updatePath(['КЛАССЫ', data.name]);
}

function buildPageView(data) {
  const area = document.getElementById('content-area');

  // Remove previous page view
  const old = document.getElementById('page-view-dynamic');
  if (old) old.remove();

  // Hide all other views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  // Build
  const wrap = document.createElement('div');
  wrap.className = 'view page-view active';
  wrap.id = 'page-view-dynamic';

  // Hero
  const hero = document.createElement('div');
  hero.className = 'page-hero';
  hero.innerHTML = `
    <div class="page-hero-tag"><span>${data.category}</span> // EGGMAN NETWORK CLASSIFIED</div>
    <div class="page-hero-title">${data.icon} ${data.name}</div>
    <div class="page-hero-sub">AUTHOR: DR. STARLINE // ЭГГМАН НЕТВОРК</div>
    <div class="page-hero-quote">${data.quote}</div>
  `;
  wrap.appendChild(hero);

  // Tabs nav
  const tabsNav = document.createElement('div');
  tabsNav.className = 'page-tabs';
  data.tabs.forEach((tab, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = tab;
    btn.onclick = () => switchTab(wrap, tab, btn);
    tabsNav.appendChild(btn);
  });
  wrap.appendChild(tabsNav);

  // Tab panels
  data.tabs.forEach((tab, i) => {
    const panel = document.createElement('div');
    panel.className = 'tab-panel' + (i === 0 ? ' active' : '');
    panel.dataset.tab = tab;
    panel.innerHTML = data.panels[tab] || '<p style="color:var(--text-dim)">Данные отсутствуют.</p>';
    wrap.appendChild(panel);
  });

  area.appendChild(wrap);
  area.scrollTop = 0;
}

function switchTab(pageWrap, tabName, btnEl) {
  pageWrap.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  pageWrap.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btnEl.classList.add('active');
  const panel = pageWrap.querySelector(`.tab-panel[data-tab="${tabName}"]`);
  if (panel) panel.classList.add('active');
}

function showSubracesList(el) {
  clearActive();
  if (el) el.classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-subraces').classList.add('active');
  updatePath(['РАСА', 'ПОДВИДЫ']);
}

function showClassesList(el) {
  clearActive();
  if (el) el.classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-classes').classList.add('active');
  updatePath(['КЛАССЫ', 'ОБЗОР']);
}

// ===================== BOOT =====================
const BOOT_LINES = [
  { text: 'INITIALIZING EGGMAN NETWORK CORE...', delay: 400, cls: 'ok' },
  { text: 'LOADING ENCRYPTION PROTOCOLS...', delay: 700, cls: 'ok' },
  { text: 'VERIFYING ACCESS CREDENTIALS...', delay: 1000, cls: 'ok' },
  { text: 'SCANNING FOR INTRUDERS...', delay: 1400, cls: 'ok' },
  { text: 'LOADING CLASSIFIED DATABASE...', delay: 1800, cls: 'ok' },
  { text: 'CHECKING AUTHOR SIGNATURE: STARLINE...', delay: 2200, cls: 'ok' },
  { text: 'ANOMALY IN CHAOS ENERGY GRID DETECTED...', delay: 2600, cls: 'warning' },
  { text: 'BYPASSING ANOMALY (STARLINE PROTOCOL)...', delay: 3000, cls: 'err0r' },
  { text: 'MOUNTING FILE SYSTEM...', delay: 3350, cls: 'ok' },
  { text: 'READY.', delay: 3700, cls: '' },
];

function initBoot() {
  const container = document.getElementById('boot-lines');
  BOOT_LINES.forEach(l => {
    const el = document.createElement('div');
    el.className = 'boot-line ' + (l.cls || '');
    el.textContent = '> ' + l.text;
    el.style.animationDelay = l.delay + 'ms';
    container.appendChild(el);
  });

  setTimeout(() => {
    document.getElementById('boot-access').style.display = 'block';
  }, 4150);
  setTimeout(() => {
    document.getElementById('boot-author-line').style.display = 'block';
  }, 4500);
  setTimeout(() => {
    document.getElementById('boot-screen').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('boot-screen').style.display = 'none';
      const ui = document.getElementById('main-ui');
      ui.classList.add('visible');
    }, 800);
  }, 5300);
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  initBoot();
  updateClock();
  setInterval(updateClock, 1000);
});


// ===================== Starline ==================
setTimeout(() => {
  document.querySelector('.starline-bg-boot').style.opacity = '0.5';
}, 4000);