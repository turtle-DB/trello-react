# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
List.destroy_all
Card.destroy_all

board1 = Board.create({title: 'board1'})
board2 = Board.create({title: 'board2'})
board3 = Board.create({title: 'board3'})
board4 = Board.create({title: 'board4'})
board5 = Board.create({title: 'board5'})

list1 = List.create({title: 'list1', board: board1 })
list2 = List.create({title: 'list2', board: board2 })
list3 = List.create({title: 'list3', board: board3 })
list4 = List.create({title: 'list4', board: board4 })
list5 = List.create({title: 'list5', board: board5 })

card1 = Card.create({title: 'card1', list: list1 })
card2 = Card.create({title: 'card2', list: list1 })
card3 = Card.create({title: 'card3', list: list1 })
card4 = Card.create({title: 'card4', list: list4 })
card5 = Card.create({title: 'card5', list: list5 })
