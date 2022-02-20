
const app = Vue.createApp({
    // template:'<h1>Hello World!</h1>',
    data() {
      return {
        firstName: "John",
        lastName: "Doe",
        email: 'johndoe@gmail.com',
        picture: "https://randomuser.me/api/portraits/women/26.jpg",
        gender: 'male'
      }
    },
   methods: {
       async getUsers() {

        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()
        console.log(results);

        this.firstName = results[0].name.firstName,
        this.lastName = results[0].name.lastName,
        this.email = results[0].email,
        this.picture = results[0].picture.large,
        this.gender= results[0].gender
       }
   }
  })
  
  app.mount('#app')