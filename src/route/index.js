// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()


// ================================================================
  var header = { 
	name:{
  firstname: `Ivan`,
  lastname: `Ivanov`,
},

position: `Junior Fullstack JS Developer`,
sallary: `600$ в місяць`,
address: `Ukraine, Izmail`,
}
var footer = {
	social:{
		email: {
		  text: `ivanov@mail.co`,
		  href: `mailto:ivanov@mail.com`,
		},
		phone:{
		  text:`+380670000123`,
		  href:`tel:+380670000123`,
		},
		linkedin: {
		  text:`LinkedIn`,
		  href: `https://www.linkedin.com/in/dmytro-test`,
		},
	  },
	}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    

	page: {
		title: `Resume | Summary`,
	},
    header,
    
    main: {

		summary: {
			title: `Summary`,
			text: ` Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
			        work on a new project I learn the domain and try to understand the idea of the project. Good team
			        player, every colleague is a friend to me.`,
		        },
	  
		  experience: {
			title: `Other experience`,
			text: ` Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
					tournament position, goals etc), analyzing by simple mathematics models and preparing probability
					for such events like: money line - first win / draw / second win, totals etc.`,
				},
	        },  
   footer,
  })
})

// ================================================================


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    

	page: {
		title: `Resume | Skills`,
	},
    header,
    
    main: {
		skills:[
			{
				name: `HTML`,
				point: 10,
				isTop: true,
			},

			{
				name: `Handlebars`,
				point: 8,
				isTop: true,
			},

			{
				name: `VS Code & NPM`,
				point: 9,
				isTop: false,
			},

			{
				name: `Git & Terminal`,
				point: 7,
			},

			{
				name: `React.js`,
				point: 0,
			},
			{
				name: `PHP`,
				point: null,
			},
		],
		hobbies: [
			{
			 name: `Dance`, 
		     isMain: false
			},

			{ 
			 name: `Music`, 
			 isMain: true
			},

			{ 
			 name: `Sports`,
		     isMain: false
			},
		],
	},  
   footer,
   })
 })




 // ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('education', {
	  // ↙ сюди вводимо JSON дані
	  
  
	  page: {
		  title: `Resume | Education`,
	  },
	  header,
	  
	  main: {
		educations: [
			{
				name: `MAUP`,
				point: 5,
				isTop: true,
			},
			{
				name: `IT-BRAINS`,
				point: 0,
				isTop:  true,
			},	
			{
				name: `isEnd`,
				point: null,
				isTop: false,
			},	
		],
		certificates:[

			 { name: `Achievement`,
			   id: 1777 },

			 { name: `Completion`, 
			   id:1333 },

			 { name: `Certificate`, 
			   id:1213 },
		],
	  },  

	 footer,

	 })
   })
  


   // ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('work', {
	  // ↙ сюди вводимо JSON дані

	  layout: `big`,
  
	  page: {
		  title: `Resume | Work`,
	  },
	  header,
	  
	  main: {
		work: [
			{
				position: `Junior Fullstack Developer`,
				company: {
					name: `IT Brains`,
					url: `http://it-brains.com.ua/`,
				},
				duration: {
					from: `10.10.2022`,
					to: null,
				},
				projectAmount: 3,

				projects: [
					{
					name: `Resume`,
					url: `https://resume.com.ua/`,
					about: `Airbnb competitor.`,
					stacks: [
						{
						   name:`React.js`,
						},

						{
						   name:`HTML / CSS`,
						},
						{
							name:`Node.js`,
						 },
					],
					awards: [
						{
							name: `Background verification - is a feature that provides users to prove that they are real persons`,
						},

						{
							name: `Preparing SEO optimized pages`,
						},
					],
					stackAmount: 1,
					awardAmound: 2,
				  },

				],
			},
		],
	  },  

	 footer,

	 })
   })
  
// Підключаємо роутер до бек-енду
module.exports = router
