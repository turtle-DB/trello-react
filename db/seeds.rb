# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Boards.destroy_all

board1 = Boards.create({title: 'board1'})
board2 = Boards.create({title: 'board2'})
board3 = Boards.create({title: 'board3'})
board4 = Boards.create({title: 'board4'})
board5 = Boards.create({title: 'board5'})
