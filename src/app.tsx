import CallTable from './components/call-table';

/*
Часть из фигмы, которую берем в разработку:
    - листинг звонков с выборкой по датам
    - выбор входящих, исходящих или всех звонков
    - проигрывание записи (если есть)
    - сортировка на клиенте
    - меню - статика без функционала, активный раздел "Звонки"
 */

const App = () => {
    return (
        <div>
            <CallTable />
        </div>
    );
};

export default App;