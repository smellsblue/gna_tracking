# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.transaction do
  me = User.create!(name: "MVS", email: "stonemj@gmail.com", password: "Password1", password_confirmation: "Password1")
  fry = User.create!(name: "Fry", email: "fry@futurama.com", password: "Password1", password_confirmation: "Password1")
  leela = User.create!(name: "Leela", email: "leela@futurama.com", password: "Password1", password_confirmation: "Password1")
end
