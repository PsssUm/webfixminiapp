import React from 'react';

import { View, Panel, Root, PanelHeader } from '@vkontakte/vkui';
import Navbar from './panels/Navbar';

import '@vkontakte/vkui/dist/vkui.css';
import './resources/styles/style.css';
import CreateNewDonation from './pages/CreateNewDonation';
import DonationTypes from './pages/DonationTypes';
import DonationQuestions from './pages/DonationQuestions';
import { getEpmtyModel } from './utils/Utils';
import DonationOptions from './pages/DonationOptions';
import DonationPostEditor from './pages/DonationPostEditor';
import EditorNavbar from './panels/EditorNavbar';
import News from './pages/News';
import Details from './pages/Details';

class Application extends React.Component {
    
    constructor(){
        super()
        this.state = {
            activeView : 'create',
            pickedType : 'target',
            donation : getEpmtyModel(),
            send : false,
            news : [],
            post : {}
        }
        this.changePage = this.changePage.bind(this);
        this.onTypePicked = this.onTypePicked.bind(this);
        this.onDonationChanged = this.onDonationChanged.bind(this);
        this.onSend = this.onSend.bind(this);
        this.addNews = this.addNews.bind(this);
        this.openDetails = this.openDetails.bind(this);
    }
    changePage(page){
        this.setState({activeView : page})
    }
    onTypePicked(type){
        this.setState({activeView : "questions", pickedType : type})
    }
    onDonationChanged(donation){
        this.setState({donation : donation})
    }
    onSend(){
        this.setState({send : !this.state.send})
    }
    addNews(post){
        var news = this.state.news
        news.push(post)
        this.setState({news : news, activeView : "news"})
        
    }
    openDetails(post){
        this.setState({post : post, activeView : "details"})
    }
    render() {
        return (
            <Root activeView={this.state.activeView}>
                <View id="create" activePanel="create_panel">
                    <Panel style={{backgroundColor : "white"}} id="create_panel">
                        <PanelHeader>
                            <Navbar title="Пожертвования"/>
                        </PanelHeader>
                        <CreateNewDonation changePage={this.changePage}/>
                    </Panel>
                    
                </View>
                <View id="type" activePanel="type_panel">
                    <Panel id="type_panel">
                        <PanelHeader>
                            <Navbar back="create" onBack={this.changePage} title="Тип сбора"/>
                        </PanelHeader>
                        <DonationTypes onTypePicked={this.onTypePicked}/>
                    </Panel>
                </View>

                <View id="questions" activePanel="questions_panel">
                    <Panel id="questions_panel">
                        <PanelHeader>
                            <Navbar back="type" onBack={this.changePage} title="Целевой сбор" isShowLine={false}/>
                        </PanelHeader>
                        <DonationQuestions onDonationChanged={this.onDonationChanged} changePage={this.changePage} type={this.state.pickedType}/>
                    </Panel>
                </View>

                <View id="options" activePanel="options_panel">
                    <Panel id="options_panel">
                        <PanelHeader>
                            <Navbar back="questions" onBack={this.changePage} title="Оформление"/>
                        </PanelHeader>
                        <DonationOptions donation={this.state.donation} onDonationChanged={this.onDonationChanged} changePage={this.changePage} type={this.state.pickedType}/>
                    </Panel>
                </View>

                <View id="editor" activePanel="editor_panel">
                    <Panel id="editor_panel">
                        <PanelHeader>
                            <EditorNavbar onSend={this.onSend} back="options" onBack={this.changePage} title="Матвей"/>
                        </PanelHeader>
                        <DonationPostEditor addNews={this.addNews} send={this.state.send} donation={this.state.donation} onDonationChanged={this.onDonationChanged} changePage={this.changePage} type={this.state.pickedType}/>
                    </Panel>
                </View>

                <View id="news" activePanel="news_panel">
                    <Panel id="news_panel">
                        <PanelHeader>
                            <Navbar back="create" onBack={this.changePage} title="Новости"/>
                        </PanelHeader>
                        <News openDetails={this.openDetails} news={this.state.news.reverse()} changePage={this.changePage}/>
                    </Panel>
                </View>

                <View id="details" activePanel="details_panel">
                    <Panel id="details_panel">
                        <PanelHeader>
                            <Navbar back="news" onBack={this.changePage} title="Информация" isShowLine={false}/>
                        </PanelHeader>
                        <Details donation={this.state.post} changePage={this.changePage}/>
                    </Panel>
                </View>
            </Root>
            
            
        );
    }
}
export default Application;


