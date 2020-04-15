# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title:' React tutorials', description: 'Discover how react works')

section = Section.create(title:'Chapitre 1', course: course)

episode = Episode.create([
  { title: "React chapitre 1", description:"first steps with react", url:"https://youtu.be/qsZUKNti6FI", section: section},
  { title: "React chapitre 2", description:"Create our first project", url:"https://youtu.be/sVJRkTxqlSQ", section: section},
  { title: "React chapitre 3", description:"Create our first project part 2", url:"https://youtu.be/MKtT1TUm7UA", section: section},
  { title: "React chapitre 4", description:"react : tips", url:"https://youtu.be/9soUUnPu5b0", section: section},
  { title: "React chapitre 5", description:"conclusion", url:"https://youtu.be/jebvAK9ynbI", section: section}
])