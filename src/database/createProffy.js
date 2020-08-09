module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    //insert data in the proffys table
    // we use await so the pc know to wait for the end of the code line execution before moving on
    //we need to use ASYNC in the function for await to work
    //using CRASE(template literals) again
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    //use this to save the generated ID from one table into another one
    const proffy_id = insertedProffy.lastID

    //insert data in the classes table
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    
    `)
           
    const class_id = insertedClass.lastID

    //insert data in the class_schedule table. Since there could be more than one, it firsts inserts them in an array
    const insertedAllClassSchedules = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
           INSERT INTO class_schedule (
                    weekday,
                    time_from,
                    time_to,
                    class_id
                ) VALUES (
                    "${classScheduleValue.weekday}",
                    "${classScheduleValue.time_from}",
                    "${classScheduleValue.time_to}",
                    "${class_id}"
                );
        `)
    })

    //run all the db.runs() of the class_schedules
    await Promise.all(insertedAllClassSchedules)
    
}