
export const getDataFromServer = () => {
  const data = {
    todo: {
      title: 'To Do',
      type: 'action-items',
      items: [{
        image: '../static/images/reading/blog1.jpg',
        name: 'Hair Care 101',
        index: '03'
      },{
        image: '../static/images/reading/blog2.jpg',
        name: 'How to use Niacin',
        index: '02'
      },{
        image: '../static/images/reading/blog3.jpeg',
        name: 'Effects of Minoxidial',
        index: '01'
      }]
    },
    read: {
      title: 'To Read',
      type: 'blogs',
      items: [{
        image: '../static/images/reading/blog1.jpg',
        name: 'Hair Care 101',
        index: '03'
      },{
        image: '../static/images/reading/blog2.jpg',
        name: 'How to use Niacin',
        index: '02'
      },{
        image: '../static/images/reading/blog3.jpeg',
        name: 'Effects of Minoxidial',
        index: '01'
      }]
    }
  }

  return data;
}