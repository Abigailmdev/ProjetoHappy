const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
await saveOrphanage(db, {
    
    lat: "-3.1155031",
    lng: "-60.0208993",
    name: "Lar dos meninos",
   about: "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "5546556456",
    images: [
        "https://images.unsplash.com/photo-1599988288485-534984f5cd21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1591593443255-db4646e739b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
})
   //consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

   //consultar somente um orfanato pelo id
const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
console.log(orphanage)
//deletar dado de tabela
//console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
//console.log(await db.run("DELETE FROM  orphanages WHERE id ='5'"))

})

