import React from 'react';

import { ActionSheet, ActionSheetItem, CellButton, Panel, View } from '@vkontakte/vkui';
class PaymentPicker extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        popout: null
      }
  
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
    openBase () {
        const vk_pay = "Счёт VK Pay · 1234"
        const yandex = "Я.Деньги 400048123"
        const qiwi = "Qiwi +777123451"
      this.setState({ popout:
        <ActionSheet onClose={this.onClose}>
          <ActionSheetItem onClick={() => this.props.onPaymentPicked(vk_pay)} autoclose>
            {vk_pay}
          </ActionSheetItem>
          <ActionSheetItem onClick={() => this.props.onPaymentPicked(yandex)} autoclose>
            {yandex}
          </ActionSheetItem>
          <ActionSheetItem onClick={() => this.props.onPaymentPicked(qiwi)} autoclose>
            {qiwi}
          </ActionSheetItem>

          <ActionSheetItem onClick={() => this.props.onClose()} mode="cancel" autoclose>Отменить</ActionSheetItem>
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
  export default PaymentPicker;
