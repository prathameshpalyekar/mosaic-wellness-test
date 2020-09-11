
export const getDataFromServer = () => {
  const data = {
    todo: {
      title: 'To Do',
      type: 'action-items',
      items: [{
        completed: true,
        title: 'Hair Appointment',
        subtitle: 'with Dr Shobhita Anand',
        time: 'Today, 3:30 PM'
      },{
        completed: false,
        title: 'Eat tablet - Bromide',
        subtitle: 'Follow up on your regime',
        time: 'Today, After Lunch'
      },{
        completed: true,
        title: 'Wash Hair',
        subtitle: 'Use your shampoo',
        time: 'Today, Morning Bath',
        onGoing: true,
      }, {
        completed: true,
        title: 'Moisturize',
        subtitle: 'User your moisturiser',
        time: 'Before Bedtime, 26th June',
        isMissed: true,
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