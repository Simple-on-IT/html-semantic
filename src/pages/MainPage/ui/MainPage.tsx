import styles from './MainPage.module.scss';

// замени div и p на семантические тэги
export const MainPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>🎄 Подготовка к Новому Году</h2>

      {/* тут нужен тэг details и summary*/}
      <form className={styles.form}>
        <div className={styles.details}>
          <p>🎉 Подробнее о подготовке</p>
          <p>Поставьте цели и отслеживайте свой прогресс
            в подготовке к празднику!</p>
        </div>

        {/* тут нужен тэг fieldset и legend*/}
        <div>
          <p>👋 Личная информация</p>
          <input placeholder='Имя' />
          <input placeholder='Хобби' />
        </div>

        {/* тут нужен тэг fieldset, legend и datalist*/}
        <div>
          <p>📜 Новогоднее пожелание:</p>
          <input placeholder='Пожелание' list="wish-list" />
          <select id="wish-list">
            <option value="Механическая клавиатура"></option>
            <option value="Эргономичный стул"></option>
            <option value="Шумоподавляющие наушники"></option>
          </select>
        </div>

        {/* тут нужен тэг fieldset, legend и progress*/}
        <div>
          <p>📈 Прогресс подготовки:</p>
          <div>
            <meter id="meter" value="40" max="100" />
            <span> 40%</span>
          </div>
        </div>

        {/* тут нужен тэг fieldset, legend и output*/}
        <div>
          <p>✅ Количество заполненных полей:</p>
          <p>0</p>
        </div>

      </form>
    </div>
  )
}