import React from 'react';
import DayPicker from 'react-day-picker';
import { ActionSheet, ActionSheetItem, CellButton, Panel, View } from '@vkontakte/vkui';
const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const WEEKDAYS_LONG = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    
  ];
  const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
class DatePickerBottom extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        popout: null,
        selectedDay: undefined,
      }
      this.handleDayClick = this.handleDayClick.bind(this);
      this.openBase = this.openBase.bind(this);
      this.onClose = this.onClose.bind(this);
    }
  
    componentDidMount() {
      this.openBase();
    }
    onClose(){
      this.setState({ popout: null })
      this.props.onClose()
    }
    handleDayClick(day) {
        this.setState({ selectedDay: day, popout: null });
        this.props.onDatePicked(day)
    }
    
    openBase () {

      this.setState({ popout:
        <ActionSheet onClose={this.onClose}>
            <DayPicker locale="ru" months={MONTHS}
                    weekdaysLong={WEEKDAYS_LONG}
                    weekdaysShort={WEEKDAYS_SHORT}
                    firstDayOfWeek={1}
                    onDayClick={this.handleDayClick}/>
            <div onClick={() => this.props.onClose()} className="close_day_picker">Отменить</div>
        </ActionSheet>
      });
    }
  
  
    render() {
      return (
        <View popout={this.state.popout} activePanel="panel">
            <Panel id="actionSheet">
                
            </Panel>
        </View>

      )
    }
  }
  export default DatePickerBottom;
