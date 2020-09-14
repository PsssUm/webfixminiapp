import moment from 'moment';
import 'moment/locale/ru'
export const getEpmtyModel = () => {
    var donation = {
        title : "",
        summ : 10000,
        target : "",
        description : "",
        name : "Матвей Правосудов",
        payment : "Счёт VK Pay · 1234",
        date : 0,
        // image : undefined,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        isTarget : true
    }
    return donation
}
export const getDatesCount = (finishDate) => {
    const currentDate = new Date().getTime() / 1000
    var difference = 0
    if (currentDate < finishDate){
        difference = (finishDate - currentDate) / 86400
    } else {
        difference = 0
    }
    return Math.round(difference)
}
export const dateToString = (date) => {
    return moment.unix(date).format("DD MMMM")
}