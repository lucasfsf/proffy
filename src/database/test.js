const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //insert data
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "123131322",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões"

    }

    classValue = {
        subject: 1,
        cost: "20",
        //the proffy_id will come from the database
        
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
            //class_id will come from the database
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
            //class_id will come from the database
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //READ DATA
    //All proffys
    const selectProffys = await db.all("SELECT * FROM proffys");

    //consult the classes of a chosen proffy and bring back the proffy data
    const selectClassesAndProffys = await db.all(`
        
    `)

    //consult based on time 
    const selectClassesSchedules = await db.all(`
        
    `)

})